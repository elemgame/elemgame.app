(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4011:function(A,e,t){Promise.resolve().then(t.t.bind(t,5250,23)),Promise.resolve().then(t.bind(t,5334)),Promise.resolve().then(t.bind(t,8075)),Promise.resolve().then(t.bind(t,4357)),Promise.resolve().then(t.bind(t,1513)),Promise.resolve().then(t.bind(t,2436)),Promise.resolve().then(t.bind(t,160)),Promise.resolve().then(t.bind(t,4371)),Promise.resolve().then(t.bind(t,5237))},8075:function(A,e,t){"use strict";t.r(e),t.d(e,{StarField:function(){return d}});var r=t(7437),n=t(2265),i=t(7042),s=t(5546),l=t(6499);let a=[[4,4,!0,!0],[4,44,!0],[36,22],[50,146,!0,!0],[64,43,!0,!0],[76,30,!0],[101,116],[140,36,!0],[149,134],[162,74,!0],[171,96,!0,!0],[210,56,!0,!0],[235,90],[275,82,!0,!0],[306,6],[307,64,!0,!0],[380,68,!0],[380,108,!0,!0],[391,148,!0,!0],[405,18,!0],[412,86,!0,!0],[426,210,!0,!0],[427,56,!0,!0],[538,138],[563,88,!0,!0],[611,154,!0,!0],[637,150],[651,146,!0],[682,70,!0,!0],[683,128],[781,82,!0,!0],[785,158,!0],[832,146,!0,!0],[852,89]],o=[[[247,103],[261,86],[307,104],[357,36]],[[586,120],[516,100],[491,62],[440,107],[477,180],[516,100]],[[733,100],[803,120],[879,113],[823,164],[803,120]]];function c(A){let{blurId:e,point:[t,i,l,a]}=A,o=(0,n.useRef)(null),c=(0,n.useRef)(null);return(0,n.useEffect)(()=>{if(!o.current||!c.current)return;let A=2*Math.random(),e=[(0,s.j)(o.current,{opacity:1},{duration:4,delay:A}),(0,s.j)(c.current,{opacity:l?[.2,.5]:[1,.6],scale:l?[1,1.2]:[1.2,1]},{delay:A,duration:2*Math.random()+2,direction:"alternate",repeat:1/0})];return()=>{for(let A of e)A.cancel()}},[l]),(0,r.jsx)("g",{ref:o,className:"opacity-0",children:(0,r.jsx)("circle",{ref:c,cx:t,cy:i,r:1,style:{transformOrigin:`${t/16}rem ${i/16}rem`,opacity:l?.2:1,transform:`scale(${l?1:1.2})`},filter:a?`url(#${e})`:void 0})})}function u(A){let{points:e,blurId:t}=A,i=(0,n.useRef)(null),s=e.filter((A,t)=>e.findIndex(e=>String(e)===String(A))===t),a=s.length!==e.length;return(0,n.useEffect)(()=>{if(!i.current)return;let A=[[i.current,{strokeDashoffset:0,visibility:"visible"},{duration:5,delay:3*Math.random()+2}]];a&&A.push([i.current,{fill:"rgb(255 255 255 / 0.02)"},{duration:1}]);let e=(0,l.Z)(A);return()=>{e.cancel()}},[a]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("path",{ref:i,stroke:"white",strokeOpacity:"0.2",strokeDasharray:1,strokeDashoffset:1,pathLength:1,fill:"transparent",d:`M ${e.join("L")}`,className:"invisible"}),s.map((A,e)=>(0,r.jsx)(c,{point:A,blurId:t},e))]})}function d(A){let{className:e}=A,t=(0,n.useId)();return(0,r.jsxs)("svg",{viewBox:"0 0 881 211",fill:"white","aria-hidden":"true",className:(0,i.Z)("pointer-events-none absolute w-[55.0625rem] origin-top-right rotate-[30deg] overflow-visible opacity-70",e),children:[(0,r.jsx)("defs",{children:(0,r.jsx)("filter",{id:t,children:(0,r.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:".5"})})}),o.map((A,e)=>(0,r.jsx)(u,{points:A,blurId:t},e)),a.map((A,e)=>(0,r.jsx)(c,{point:A,blurId:t},e))]})}},4357:function(A,e,t){"use strict";t.r(e),t.d(e,{ThemeToggle:function(){return l}});var r=t(7437),n=t(2265),i=t(6435);function s(A){return(0,r.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",...A,children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm-5-8a5 5 0 0 0 5 5V7a5 5 0 0 0-5 5Z"})})}function l(){let[A,e]=(0,n.useState)(!1),{resolvedTheme:t,setTheme:l}=(0,i.F)(),a="dark"===t?"light":"dark";return((0,n.useEffect)(()=>{e(!0)},[]),A)?(0,r.jsxs)("button",{type:"button",className:"group absolute right-4 top-4 z-50 -m-2.5 p-2.5",onClick:()=>l(a),children:[(0,r.jsxs)("span",{className:"sr-only",children:["Switch to ",a," theme"]}),(0,r.jsx)(s,{className:"h-6 w-6 fill-white opacity-50 transition-opacity group-hover:opacity-100 lg:fill-gray-900 lg:dark:fill-white"})]}):null}},5334:function(A,e,t){"use strict";t.r(e),t.d(e,{a:function(){return d},article:function(){return f},code:function(){return x},img:function(){return g}});var r=t(7437),n=t(2265),i=t(6691),s=t.n(i),l=t(1396),a=t.n(l),o=t(7042);let c=new Intl.DateTimeFormat("en-US",{year:"numeric",month:"short",day:"numeric",timeZone:"UTC"});function u(A){let{date:e,...t}=A;return e="string"==typeof e?new Date(e):e,(0,r.jsx)("time",{dateTime:e.toISOString(),...t,children:c.format(e)})}let d=a(),g=function(A){return(0,r.jsxs)("div",{className:"relative mt-8 overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900 [&+*]:mt-8",children:[(0,r.jsx)(s(),{alt:A.alt||"",src:A.src}),(0,r.jsx)("div",{className:"pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10"})]})};function h(A){let{className:e,...t}=A;return(0,r.jsx)("div",{className:"mx-auto max-w-7xl px-6 lg:flex lg:px-8",children:(0,r.jsx)("div",{className:"lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32",children:(0,r.jsx)("div",{className:(0,o.Z)("mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto",e),...t})})})}function m(A){let{id:e,date:t}=A;return(0,r.jsxs)("header",{className:"relative mb-10 xl:mb-0",children:[(0,r.jsxs)("div",{className:"pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:h-8",children:[(0,r.jsx)(a(),{href:`#${e}`,className:"inline-flex",children:(0,r.jsx)(u,{date:t,className:"hidden xl:pointer-events-auto xl:block xl:text-2xs/4 xl:font-medium xl:text-white/50"})}),(0,r.jsx)("div",{className:"h-[0.0625rem] w-3.5 bg-gray-400 lg:-mr-3.5 xl:mr-0 xl:bg-gray-300"})]}),(0,r.jsx)(h,{children:(0,r.jsx)("div",{className:"flex",children:(0,r.jsx)(a(),{href:`#${e}`,className:"inline-flex",children:(0,r.jsx)(u,{date:t,className:"text-2xs/4 font-medium text-gray-500 xl:hidden dark:text-white/50"})})})})]})}let f=function(A){let{id:e,date:t,children:i}=A,s=(0,n.useRef)(null),[l,a]=(0,n.useState)(0);return(0,n.useEffect)(()=>{if(!s.current)return;let A=new window.ResizeObserver(()=>{if(!s.current)return;let{height:A}=s.current.getBoundingClientRect();a(8*Math.ceil(A/8)-A)});return A.observe(s.current),()=>{A.disconnect()}},[]),(0,r.jsx)("article",{id:e,className:"scroll-mt-16",style:{paddingBottom:`${l}px`},children:(0,r.jsxs)("div",{ref:s,children:[(0,r.jsx)(m,{id:e,date:t}),(0,r.jsx)(h,{className:"typography","data-mdx-content":!0,children:i})]})})},x=function(A){let{highlightedCode:e,...t}=A;return e?(0,r.jsx)("code",{...t,dangerouslySetInnerHTML:{__html:e}}):(0,r.jsx)("code",{...t})}},1513:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/background.ebbcabe7.jpg",height:1024,width:1024,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGXAf/EABYQAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAQABBQKo/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwF//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwF//8QAFhABAQEAAAAAAAAAAAAAAAAAEQAB/9oACAEBAAY/Aky//8QAFhAAAwAAAAAAAAAAAAAAAAAAADFB/9oACAEBAAE/IVQH/9oADAMBAAIAAwAAABAP/8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Qj//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Qf//EABgQAQEAAwAAAAAAAAAAAAAAAAERAEFR/9oACAEBAAE/EFhKaSV7n//Z",blurWidth:8,blurHeight:8}},2436:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/commit-suggestions.5cf789bd.png",height:936,width:1728,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAADFBMVEUVHCocIzEjLDktG08ZMlLHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHklEQVR4nGNgZmZmAANGCAVjMDIwMDEyMTEyMjECAAHFABl+EHHdAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}},160:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/configuration-files.7610785b.png",height:666,width:1728,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAFVBMVEUVHSwKCxhTfJZGeJVHfZoPFSJ4s9JJSEXuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHElEQVR4nGNgY2JiYmJmZmZgZmRlBAEGFgYIAAADEQAqFEk/OwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3}},4371:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/dark-mode.93eb9a82.png",height:936,width:1728,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAADFBMVEUXHisfJDUQFyUvI0qvAYfBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIElEQVR4nC3IQQoAIACEQHX//+co8jIgQE2fFb97VDcPAkwAIaMCda8AAAAASUVORK5CYII=",blurWidth:8,blurHeight:4}},5237:function(A,e,t){"use strict";t.r(e),e.default={src:"/_next/static/media/first-release.c5cb86d1.png",height:936,width:1728,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEXx8PLq6uz19vXi4uXa2tvaztnAq8u4mMZJq4QeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIklEQVR4nAXBgQEAMAiDMErV/f/xEkhkUxoASwU1dGb23X0DtgBKgYvjcAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4}}},function(A){A.O(0,[693,915,971,938,744],function(){return A(A.s=4011)}),_N_E=A.O()}]);