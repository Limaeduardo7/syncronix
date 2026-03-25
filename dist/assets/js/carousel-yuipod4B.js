import{a as m,c as h}from"./index-BgtjblzP.js";import{j as s}from"./framer-motion-BZigXKiK.js";import{r as e}from"./react-vendor-zKi273J9.js";import{u as S}from"./notificationsData-0swcWccr.js";import{B as k}from"./button-CdrOO9_P.js";import{A as z}from"./arrow-right-CfLPd6O7.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=m("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=m("Atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=m("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=m("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=m("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]),C=e.createContext(null);function p(){const o=e.useContext(C);if(!o)throw new Error("useCarousel must be used within a <Carousel />");return o}const R=e.forwardRef(({orientation:o="horizontal",opts:t,setApi:r,plugins:l,className:c,children:i,...u},d)=>{const[w,a]=S({...t,axis:o==="horizontal"?"x":"y"},l),[N,v]=e.useState(!1),[j,b]=e.useState(!1),f=e.useCallback(n=>{n&&(v(n.canScrollPrev()),b(n.canScrollNext()))},[]),x=e.useCallback(()=>{a?.scrollPrev()},[a]),y=e.useCallback(()=>{a?.scrollNext()},[a]),M=e.useCallback(n=>{n.key==="ArrowLeft"?(n.preventDefault(),x()):n.key==="ArrowRight"&&(n.preventDefault(),y())},[x,y]);return e.useEffect(()=>{!a||!r||r(a)},[a,r]),e.useEffect(()=>{if(a)return f(a),a.on("reInit",f),a.on("select",f),()=>{a?.off("select",f)}},[a,f]),s.jsx(C.Provider,{value:{carouselRef:w,api:a,opts:t,orientation:o||(t?.axis==="y"?"vertical":"horizontal"),scrollPrev:x,scrollNext:y,canScrollPrev:N,canScrollNext:j},children:s.jsx("div",{ref:d,onKeyDownCapture:M,className:h("relative",c),role:"region","aria-roledescription":"carousel",...u,children:i})})});R.displayName="Carousel";const g=e.forwardRef(({className:o,...t},r)=>{const{carouselRef:l,orientation:c}=p();return s.jsx("div",{ref:l,className:"overflow-hidden",children:s.jsx("div",{ref:r,className:h("flex",c==="horizontal"?"-ml-4":"-mt-4 flex-col",o),...t})})});g.displayName="CarouselContent";const A=e.forwardRef(({className:o,...t},r)=>{const{orientation:l}=p();return s.jsx("div",{ref:r,role:"group","aria-roledescription":"slide",className:h("min-w-0 shrink-0 grow-0 basis-full",l==="horizontal"?"pl-4":"pt-4",o),...t})});A.displayName="CarouselItem";const E=e.forwardRef(({className:o,variant:t="outline",size:r="icon",...l},c)=>{const{orientation:i,scrollPrev:u,canScrollPrev:d}=p();return s.jsxs(k,{ref:c,variant:t,size:r,className:h("absolute h-8 w-8 rounded-full",i==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",o),disabled:!d,onClick:u,...l,children:[s.jsx(P,{className:"h-4 w-4"}),s.jsx("span",{className:"sr-only",children:"Previous slide"})]})});E.displayName="CarouselPrevious";const L=e.forwardRef(({className:o,variant:t="outline",size:r="icon",...l},c)=>{const{orientation:i,scrollNext:u,canScrollNext:d}=p();return s.jsxs(k,{ref:c,variant:t,size:r,className:h("absolute h-8 w-8 rounded-full",i==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",o),disabled:!d,onClick:u,...l,children:[s.jsx(z,{className:"h-4 w-4"}),s.jsx("span",{className:"sr-only",children:"Next slide"})]})});L.displayName="CarouselNext";export{H as A,R as C,K as M,F as S,G as V,g as a,A as b,E as c,L as d};
