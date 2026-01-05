import{j as e,m as R}from"./framer-motion-Bv89hmFL.js";import{r as n}from"./react-vendor-MgKJhORd.js";import{B as j}from"./button-6yfdNcFy.js";import{H as D,F as B}from"./Footer-CU7HPKYs.js";import{c as V}from"./index-B3aEYpEm.js";import{C as E,a as P}from"./chevron-right-CT3aYyxI.js";import{E as q}from"./eye-CQ-T5pka.js";import{S as T}from"./shopping-bag-BDvcTUCE.js";import{C as I}from"./circle-check-big-COWYeQAW.js";import"./ui-vendor-9mFbmbAS.js";import"./instagram-Dqx6xwm3.js";import"./query-BP-sCdlB.js";function G({shaderCode:x,hue:c=300,saturation:u=.5,brightness:a=1,speed:m=1,className:d=""}){const g=n.useRef(null),p=n.useRef();return n.useEffect(()=>{const i=g.current;if(!i)return;const o=i.getContext("webgl")||i.getContext("experimental-webgl");if(!o){console.warn("WebGL not supported");return}const w=`
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `,b=`
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;
      uniform vec4 iMouse;
      uniform float u_hue;
      uniform float u_saturation;
      uniform float u_brightness;
      uniform float u_speed;

      ${x}

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
    `;function v(l,H,U){const f=l.createShader(H);return f?(l.shaderSource(f,U),l.compileShader(f),l.getShaderParameter(f,l.COMPILE_STATUS)?f:(console.error("Shader compile error:",l.getShaderInfoLog(f)),l.deleteShader(f),null)):null}const N=v(o,o.VERTEX_SHADER,w),y=v(o,o.FRAGMENT_SHADER,b);if(!N||!y)return;const t=o.createProgram();if(!t)return;if(o.attachShader(t,N),o.attachShader(t,y),o.linkProgram(t),!o.getProgramParameter(t,o.LINK_STATUS)){console.error("Program link error:",o.getProgramInfoLog(t));return}const s=o.createBuffer();o.bindBuffer(o.ARRAY_BUFFER,s),o.bufferData(o.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),o.STATIC_DRAW);const r=o.getAttribLocation(t,"position"),h=o.getUniformLocation(t,"iResolution"),S=o.getUniformLocation(t,"iTime"),A=o.getUniformLocation(t,"iMouse"),F=o.getUniformLocation(t,"u_hue"),O=o.getUniformLocation(t,"u_saturation"),L=o.getUniformLocation(t,"u_brightness"),_=o.getUniformLocation(t,"u_speed");function $(){if(!i)return;const l=i.getBoundingClientRect();i.width=l.width*devicePixelRatio,i.height=l.height*devicePixelRatio,o.viewport(0,0,i.width,i.height)}function C(){i&&($(),o.useProgram(t),o.uniform2f(h,i.width,i.height),o.uniform1f(S,performance.now()/1e3*m),o.uniform4f(A,0,0,0,0),o.uniform1f(F,c),o.uniform1f(O,u),o.uniform1f(L,a),o.uniform1f(_,m),o.bindBuffer(o.ARRAY_BUFFER,s),o.enableVertexAttribArray(r),o.vertexAttribPointer(r,2,o.FLOAT,!1,0,0),o.drawArrays(o.TRIANGLE_STRIP,0,4),p.current=requestAnimationFrame(C))}return C(),()=>{p.current&&cancelAnimationFrame(p.current)}},[x,c,u,a,m]),e.jsx("canvas",{ref:g,className:d,style:{width:"100%",height:"100%",display:"block"}})}function M({className:x,hue:c=300,saturation:u=.5,brightness:a=1,speed:m=1}){return e.jsx("div",{className:V("absolute inset-0",x),children:e.jsx(G,{shaderCode:`
// ShaderToy URL: https://www.shadertoy.com/view/X3yXRd
// The MIT License
// Copyright © 2024 Giorgi Azmaipharashvili
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

#define INVERT 1

float noise(vec2 p) {
    return smoothstep(-0.5, 0.9, sin((p.x - p.y) * 555.0) * sin(p.y * 1444.0)) - 0.4;
}

float fabric(vec2 p) {
    const mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
    float f = 0.4 * noise(p);
    f += 0.3 * noise(p = m * p);
    f += 0.2 * noise(p = m * p);
    return f + 0.1 * noise(m * p);
}

float silk(vec2 uv, float t) {
    float s = sin(5.0 * (uv.x + uv.y + cos(2.0 * uv.x + 5.0 * uv.y)) + sin(12.0 * (uv.x + uv.y)) - t);
    s = 0.7 + 0.3 * (s * s * 0.5 + s);
    s *= 0.9 + 0.6 * fabric(uv * min(iResolution.x, iResolution.y) * 0.0006);
    return s * 0.9 + 0.1;
}

float silkd(vec2 uv, float t) {
    float xy = uv.x + uv.y;
    float d = (5.0 * (1.0 - 2.0 * sin(2.0 * uv.x + 5.0 * uv.y)) + 12.0 * cos(12.0 * xy)) * cos(5.0 * (cos(2.0 * uv.x + 5.0 * uv.y) + xy) + sin(12.0 * xy) - t);
    return 0.005 * d * (sign(d) + 3.0);
}

void mainImage(out vec4 fragColor, vec2 fragCoord) {
    float mr = min(iResolution.x, iResolution.y);
    vec2 uv = fragCoord / mr;

    float t = iTime * u_speed;
    uv.y += 0.03 * sin(8.0 * uv.x - t);

    if (iMouse.z > 1.0)
        uv += smoothstep(0.5, 0.0, distance(iMouse.xy / mr, uv)) * 0.08;

    float s = sqrt(silk(uv, t));
    float d = silkd(uv, t);

    vec3 c = vec3(s);
    c += 0.7 * vec3(1, 0.83, 0.6) * d;
    c *= 1.0 - max(0.0, 0.8 * d);
#if INVERT
    c = pow(c, 0.3 / vec3(0.52, 0.5, 0.4));
    c = 1.0 - c;
#else
    c = pow(c, vec3(0.52, 0.5, 0.4));
#endif

    fragColor = vec4(c, 1);
}
`,hue:c,saturation:u,brightness:a,speed:m,className:"w-full h-full"})})}const k=[{id:1,name:"Jaqueta Puffer",description:"Esportiva Syncronix Impermeável",category:"Esportiva",originalPrice:"R$ 689,90",promotionalPrice:"R$ 489,90",images:["/puffer1.jpg","/puffer2.jpg","/puffer3.jpg","/puffer4.jpg"],inStock:!0,isPreSale:!1},{id:2,name:"Jaqueta Windbreaker",description:"Esportiva Syncronix Impermeável",category:"Esportiva",originalPrice:"R$ 309,90",promotionalPrice:"R$ 269,90",images:["/windbreaker1.JPG","/windbreaker2.JPG","/windbreaker3.JPG"],inStock:!1,isPreSale:!1},{id:3,name:"Calça Jogger Windbreaker",description:"Esportiva Syncronix Impermeável",category:"Esportiva",originalPrice:"R$ 299,90",promotionalPrice:"R$ 239,90",images:["/jogger1.JPG","/jogger2.JPG","/jogger3.JPG"],inStock:!0,isPreSale:!1},{id:4,name:"Camiseta Darkerish",description:"Design exclusivo com padrão simétrico",category:"Streetwear",originalPrice:"R$ 259,99",promotionalPrice:"R$ 159,99",inStock:!0,isPreSale:!0,isNew:!0,tags:["NOVIDADE"]},{id:5,name:"Camiseta Street Dragon",description:"Estilo urbano com grafismo exclusivo",category:"Streetwear",originalPrice:"R$ 259,99",promotionalPrice:"R$ 159,99",images:["/streetdragon1.jpg","/streetdragon2.jpg","/streetdragon3.jpg"],inStock:!0,isPreSale:!0}],re=n.memo(function(){const[c,u]=n.useState(null),[a,m]=n.useState(null),[d,g]=n.useState({}),p=Array.from(new Set(k.map(t=>t.category))),i=c?k.filter(t=>t.category===c):k,o=n.useCallback(t=>{console.log("[Shop]","add_to_cart",{productId:t.id,productName:t.name}),alert(`${t.name} adicionado ao carrinho!`)},[]),w=n.useCallback(t=>{console.log("[Shop]","quick_view",{productId:t.id}),m(t)},[]),b=n.useCallback(()=>{m(null)},[]),v=n.useCallback((t,s)=>{g(r=>({...r,[t]:((r[t]||0)+1)%s}))},[]),N=n.useCallback((t,s)=>{g(r=>({...r,[t]:((r[t]||0)-1+s)%s}))},[]),y=n.useCallback(t=>{window.open(`/product/${t.id}`,"_blank")},[]);return e.jsxs("div",{className:"min-h-screen bg-background",children:[e.jsx(D,{}),e.jsxs("section",{className:"relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-16",children:[e.jsx(M,{className:"opacity-30",hue:280,saturation:.6,brightness:.8,speed:1}),e.jsx("div",{className:"relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:e.jsxs(R.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.6},children:[e.jsx("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6",children:"SYNCWEAR"}),e.jsx("h2",{className:"text-2xl md:text-3xl font-semibold text-primary mb-6",children:"A Materialização do Poder"}),e.jsx("p",{className:"text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto",children:"Cada peça SYNCWEAR é projetada para o indivíduo que entende que até mesmo o que você veste comunica poder."})]})})]}),e.jsx("section",{className:"py-24 bg-background relative",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"mb-12 flex flex-wrap gap-4 justify-center",children:[e.jsx(j,{variant:c===null?"default":"outline",onClick:()=>u(null),className:"btn-ghost",children:"Todos"}),p.map(t=>e.jsx(j,{variant:c===t?"default":"outline",onClick:()=>u(t),className:"btn-ghost",children:t},t))]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:i.map((t,s)=>e.jsxs(R.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6,delay:s*.1,ease:"easeOut"},viewport:{once:!0},className:"card-elegant group relative flex flex-col h-full overflow-hidden",children:[t.isNew&&e.jsx("div",{className:"absolute top-4 left-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase",children:t.tags?.[0]||"NOVO"}),t.isPreSale&&e.jsx("div",{className:"absolute top-4 right-4 z-10 bg-muted text-foreground px-3 py-1 rounded-full text-xs font-bold uppercase border border-border",children:"[PRÉ-VENDA]"}),e.jsxs("div",{className:"relative w-full aspect-square bg-gradient-to-br from-muted to-accent rounded-xl mb-6 flex items-center justify-center overflow-hidden cursor-pointer",onClick:()=>y(t),children:[t.images&&t.images.length>0?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:t.images[d[t.id]||0],alt:`${t.name} - Foto ${(d[t.id]||0)+1}`,className:"w-full h-full object-cover rounded-xl"}),t.images.length>1&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:r=>{r.stopPropagation(),N(t.id,t.images.length)},className:"absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity","aria-label":"Foto anterior",children:e.jsx(E,{className:"w-4 h-4"})}),e.jsx("button",{onClick:r=>{r.stopPropagation(),v(t.id,t.images.length)},className:"absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity","aria-label":"Próxima foto",children:e.jsx(P,{className:"w-4 h-4"})}),e.jsx("div",{className:"absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity",children:t.images.map((r,h)=>e.jsx("button",{onClick:S=>{S.stopPropagation(),g(A=>({...A,[t.id]:h}))},className:`w-2 h-2 rounded-full transition-colors ${h===(d[t.id]||0)?"bg-white":"bg-white/50 hover:bg-white/75"}`,"aria-label":`Ver foto ${h+1}`},h))})]})]}):e.jsx("div",{className:"text-6xl font-bold text-muted-foreground/20 group-hover:text-muted-foreground/30 transition-colors",children:"SYNC"}),e.jsx("div",{className:"absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4",children:e.jsxs(j,{variant:"secondary",size:"lg",onClick:r=>{r.stopPropagation(),w(t)},className:"bg-primary text-primary-foreground hover:bg-primary/90","aria-label":`Visualização rápida ${t.name}`,children:[e.jsx(q,{className:"w-5 h-5 mr-2"}),"Visualização rápida"]})})]}),e.jsxs("div",{className:"flex-1 flex flex-col space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-mono text-muted-foreground tracking-widest uppercase mb-2",children:t.category}),e.jsx("h3",{className:"text-xl font-semibold text-foreground mb-2",children:t.name}),e.jsx("p",{className:"text-muted-foreground text-sm leading-relaxed",children:t.description})]}),e.jsx("div",{className:"space-y-2 pt-4 border-t border-border/50",children:e.jsxs("div",{className:"flex items-center gap-3 flex-wrap",children:[e.jsx("span",{className:"text-sm text-muted-foreground line-through",children:t.originalPrice}),e.jsx("span",{className:"text-2xl font-bold text-primary",children:t.promotionalPrice})]})}),e.jsx(j,{onClick:()=>o(t),disabled:!t.inStock,className:`w-full mt-4 ${t.inStock?"btn-hero bg-primary text-primary-foreground hover:shadow-glow":"bg-muted text-muted-foreground cursor-not-allowed"}`,"aria-label":t.inStock?`Adicionar ${t.name} ao carrinho`:`${t.name} esgotado`,children:t.inStock?e.jsxs(e.Fragment,{children:[e.jsx(T,{className:"w-5 h-5 mr-2"}),"Adicionar ao carrinho"]}):e.jsxs(e.Fragment,{children:[e.jsx(I,{className:"w-5 h-5 mr-2"}),"Esgotado"]})})]})]},t.id))}),i.length===0&&e.jsx("div",{className:"text-center py-24",children:e.jsx("p",{className:"text-xl text-muted-foreground",children:"Nenhum produto encontrado nesta categoria."})})]})}),a&&e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4",onClick:b,children:e.jsx(R.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},onClick:t=>t.stopPropagation(),className:"card-elegant max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-card",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-8 p-6",children:[e.jsx("div",{className:"aspect-square bg-gradient-to-br from-muted to-accent rounded-xl flex items-center justify-center overflow-hidden relative",children:a.images&&a.images.length>0?e.jsxs(e.Fragment,{children:[e.jsx("img",{src:a.images[d[a.id]||0],alt:`${a.name} - Foto ${(d[a.id]||0)+1}`,className:"w-full h-full object-cover rounded-xl"}),a.images.length>1&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>N(a.id,a.images.length),className:"absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full","aria-label":"Foto anterior",children:e.jsx(E,{className:"w-4 h-4"})}),e.jsx("button",{onClick:()=>v(a.id,a.images.length),className:"absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full","aria-label":"Próxima foto",children:e.jsx(P,{className:"w-4 h-4"})}),e.jsx("div",{className:"absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1",children:a.images.map((t,s)=>e.jsx("button",{onClick:()=>g(r=>({...r,[a.id]:s})),className:`w-2 h-2 rounded-full transition-colors ${s===(d[a.id]||0)?"bg-white":"bg-white/50 hover:bg-white/75"}`,"aria-label":`Ver foto ${s+1}`},s))})]})]}):e.jsx("div",{className:"text-8xl font-bold text-muted-foreground/20",children:"SYNC"})}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("button",{onClick:b,className:"mb-4 text-muted-foreground hover:text-foreground transition-colors","aria-label":"Fechar visualização rápida",children:"✕"}),e.jsx("p",{className:"text-sm font-mono text-muted-foreground tracking-widest uppercase mb-2",children:a.category}),e.jsx("h2",{className:"text-3xl font-bold text-foreground mb-4",children:a.name}),e.jsx("p",{className:"text-muted-foreground leading-relaxed",children:a.description})]}),e.jsx("div",{className:"space-y-3 pt-4 border-t border-border/50",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-lg text-muted-foreground line-through",children:a.originalPrice}),e.jsx("span",{className:"text-4xl font-bold text-primary",children:a.promotionalPrice})]})}),e.jsxs("div",{className:"space-y-3 pt-4",children:[e.jsx(j,{onClick:()=>{o(a),b()},disabled:!a.inStock,className:"w-full btn-hero",children:a.inStock?e.jsxs(e.Fragment,{children:[e.jsx(T,{className:"w-5 h-5 mr-2"}),"Adicionar ao carrinho"]}):e.jsxs(e.Fragment,{children:[e.jsx(I,{className:"w-5 h-5 mr-2"}),"Esgotado"]})}),a.isPreSale&&e.jsx("p",{className:"text-sm text-muted-foreground text-center",children:"Este item está em pré-venda e será enviado em breve."})]})]})]})})}),e.jsx("a",{href:"https://wa.me/5511999999999",target:"_blank",rel:"noopener noreferrer",className:"fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 animate-bounce","aria-label":"Fale conosco no WhatsApp",children:e.jsx("svg",{className:"w-7 h-7 text-white",fill:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{d:"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.77.966-.944 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.24-.375a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"})})}),e.jsx(B,{})]})});export{re as default};
