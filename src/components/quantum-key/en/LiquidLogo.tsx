import { useEffect, useRef, useState } from "react";
import { parseLogoImage } from "./parseLogoImage";
import { vertexShaderSource, liquidFragSource } from "./shader";

interface LiquidLogoProps {
  imageUrl: string;
  width?: number;
  height?: number;
  className?: string;
  patternScale?: number;
  refraction?: number;
  edge?: number;
  patternBlur?: number;
  liquid?: number;
}

const LiquidLogo = ({
  imageUrl,
  width = 300,
  height = 300,
  className = "",
  patternScale = 0.15,
  refraction = 0.15,
  edge = 0.4,
  patternBlur = 0.4,
  liquid = 0.3,
}: LiquidLogoProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const glRef = useRef<WebGL2RenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const animationFrameRef = useRef<number>();
  const textureRef = useRef<WebGLTexture | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2", {
      alpha: true,
      premultipliedAlpha: false
    });

    if (!gl) {
      console.error("WebGL2 not supported");
      return;
    }
    glRef.current = gl;

    // Compile shaders
    function compileShader(source: string, type: number): WebGLShader | null {
      const shader = gl.createShader(type);
      if (!shader) return null;

      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    }

    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(liquidFragSource, gl.FRAGMENT_SHADER);

    if (!vertexShader || !fragmentShader) {
      console.error("Failed to compile shaders");
      return;
    }

    // Create program
    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    programRef.current = program;

    // Set up geometry (full screen quad)
    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
       1,  1,
    ]);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    // Enable blending for transparency
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    // Load and process image
    parseLogoImage(imageUrl).then(({ imageData }) => {
      console.log("Image loaded successfully:", imageData.width, "x", imageData.height);

      const texture = gl.createTexture();
      textureRef.current = texture;

      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, imageData);

      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

      canvas.width = imageData.width;
      canvas.height = imageData.height;
      gl.viewport(0, 0, imageData.width, imageData.height);

      setDimensions({ width: imageData.width, height: imageData.height });
      setIsReady(true);
    }).catch(error => {
      console.error("Failed to load image:", error);
    });

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (textureRef.current) {
        gl.deleteTexture(textureRef.current);
      }
      if (programRef.current) {
        gl.deleteProgram(programRef.current);
      }
    };
  }, [imageUrl]);

  useEffect(() => {
    if (!isReady || !glRef.current || !programRef.current) return;

    const gl = glRef.current;
    const program = programRef.current;
    let startTime = Date.now();

    const render = () => {
      const currentTime = Date.now() - startTime;

      gl.useProgram(program);

      // Set uniforms
      const u_image_texture = gl.getUniformLocation(program, "u_image_texture");
      const u_time = gl.getUniformLocation(program, "u_time");
      const u_ratio = gl.getUniformLocation(program, "u_ratio");
      const u_img_ratio = gl.getUniformLocation(program, "u_img_ratio");
      const u_patternScale = gl.getUniformLocation(program, "u_patternScale");
      const u_refraction = gl.getUniformLocation(program, "u_refraction");
      const u_edge = gl.getUniformLocation(program, "u_edge");
      const u_patternBlur = gl.getUniformLocation(program, "u_patternBlur");
      const u_liquid = gl.getUniformLocation(program, "u_liquid");

      gl.uniform1i(u_image_texture, 0);
      gl.uniform1f(u_time, currentTime);
      gl.uniform1f(u_ratio, dimensions.width / dimensions.height);
      gl.uniform1f(u_img_ratio, dimensions.width / dimensions.height);
      gl.uniform1f(u_patternScale, patternScale);
      gl.uniform1f(u_refraction, refraction);
      gl.uniform1f(u_edge, edge);
      gl.uniform1f(u_patternBlur, patternBlur);
      gl.uniform1f(u_liquid, liquid);

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, textureRef.current);

      // Draw
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isReady, dimensions, patternScale, refraction, edge, patternBlur, liquid]);

  return (
    <div ref={containerRef} className={className}>
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
    </div>
  );
};

export default LiquidLogo;
