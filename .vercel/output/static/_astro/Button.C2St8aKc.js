import{j as s}from"./jsx-runtime.D_zvdyIk.js";import"./index.7in8nkh5.js";import{m as o}from"./proxy.C9gwWTI2.js";const b=({children:e,href:t,onClick:r,variant:i="primary",className:l="",type:n="button",disabled:m=!1})=>{const a=`
    inline-flex items-center justify-center gap-2
    px-8 py-2.5 rounded-3xl
    font-medium text-[1.2rem] leading-[1.5em]
    transition-all duration-300
    hover:scale-[1.02] active:scale-[0.98]
    shadow-lg hover:shadow-xl
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
   ${{primary:`
      bg-gradient-to-r from-[#AB323D] to-[#E1525F]
      text-white
      hover:from-[#8f2833] hover:to-[#c7394a]
    `,secondary:`
      bg-white text-[#E1525F]
      hover:bg-gray-50
    `}[i]} ${l}`.trim().replace(/\s+/g," ");return t?s.jsx(o.a,{href:t,className:a,whileHover:{scale:1.02},whileTap:{scale:.98},children:e}):s.jsx(o.button,{type:n,onClick:r,disabled:m,className:a,whileHover:{scale:1.02},whileTap:{scale:.98},children:e})};export{b as B};
