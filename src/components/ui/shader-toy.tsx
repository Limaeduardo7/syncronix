"use client";

import React, { useEffect, useRef } from 'react';

interface ShaderToyProps {
  shaderCode: string;
  hue?: number;
  saturation?: number;
  brightness?: number;
  speed?: number;
  className?: string;
}

export function ShaderToy({
  shaderCode,
  hue = 300,
  saturation = 0.5,
  brightness = 1,
  speed = 1,
  className = ""
}: ShaderToyProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      console.warn('WebGL not supported');
      return;
    }

    // Vertex shader
    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Fragment shader with ShaderToy compatibility
    const fragmentShaderSource = `
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec4 iMouse;
      uniform float u_hue;
      uniform float u_saturation;
      uniform float u_brightness;
      uniform float u_speed;

      ${shaderCode}

      void main() {
        mainImage(gl_FragColor, gl_FragCoord.xy);
        
        // Apply color adjustments
        vec3 color = gl_FragColor.rgb;
        
        // Apply brightness
        color *= u_brightness;
        
        // Apply hue shift (simplified)
        float angle = u_hue * 3.14159 / 180.0;
        float cosA = cos(angle);
        float sinA = sin(angle);
        mat3 hueRotation = mat3(
          cosA + (1.0 - cosA) / 3.0, 1.0/3.0 * (1.0 - cosA) - sqrt(1.0/3.0) * sinA, 1.0/3.0 * (1.0 - cosA) + sqrt(1.0/3.0) * sinA,
          1.0/3.0 * (1.0 - cosA) + sqrt(1.0/3.0) * sinA, cosA + 1.0/3.0*(1.0 - cosA), 1.0/3.0 * (1.0 - cosA) - sqrt(1.0/3.0) * sinA,
          1.0/3.0 * (1.0 - cosA) - sqrt(1.0/3.0) * sinA, 1.0/3.0 * (1.0 - cosA) + sqrt(1.0/3.0) * sinA, cosA + 1.0/3.0 * (1.0 - cosA)
        );
        color = hueRotation * color;
        
        // Apply saturation
        float gray = dot(color, vec3(0.299, 0.587, 0.114));
        color = mix(vec3(gray), color, u_saturation);
        
        gl_FragColor = vec4(color, gl_FragColor.a);
      }
    `;

    function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
      const shader = gl.createShader(type);
      if (!shader) return null;
      
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      
      return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    
    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    // Set up geometry
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
       1,  1,
    ]), gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'position');
    const resolutionLocation = gl.getUniformLocation(program, 'iResolution');
    const timeLocation = gl.getUniformLocation(program, 'iTime');
    const mouseLocation = gl.getUniformLocation(program, 'iMouse');
    const hueLocation = gl.getUniformLocation(program, 'u_hue');
    const saturationLocation = gl.getUniformLocation(program, 'u_saturation');
    const brightnessLocation = gl.getUniformLocation(program, 'u_brightness');
    const speedLocation = gl.getUniformLocation(program, 'u_speed');

    function resize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }

    function render() {
      if (!canvas) return;
      
      resize();
      
      gl.useProgram(program);
      
      // Set uniforms
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.uniform1f(timeLocation, performance.now() / 1000.0 * speed);
      gl.uniform4f(mouseLocation, 0, 0, 0, 0);
      gl.uniform1f(hueLocation, hue);
      gl.uniform1f(saturationLocation, saturation);
      gl.uniform1f(brightnessLocation, brightness);
      gl.uniform1f(speedLocation, speed);
      
      // Set up position attribute
      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
      
      // Draw
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      
      animationFrameRef.current = requestAnimationFrame(render);
    }

    render();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [shaderCode, hue, saturation, brightness, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        width: '100%',
        height: '100%',
        display: 'block'
      }}
    />
  );
}