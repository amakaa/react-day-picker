"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7797],{942:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(2685),a=n(1244),o=(n(7378),n(5318)),i=["components"],l={},s="Localization",c={unversionedId:"basics/localization",id:"basics/localization",title:"Localization",description:"Changing locale",source:"@site/docs/basics/localization.md",sourceDirName:"basics",slug:"/basics/localization",permalink:"/basics/localization",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Styling DayPicker",permalink:"/basics/styling"},next:{title:"Keyboard Navigation",permalink:"/basics/keyboard"}},p={},d=[{value:"Changing locale",id:"changing-locale",level:2},{value:"Overriding the first day of the week",id:"overriding-the-first-day-of-the-week",level:3},{value:"Switching to right-to-left direction",id:"switching-to-right-to-left-direction",level:2},{value:"Adopting other numbering systems",id:"adopting-other-numbering-systems",level:2},{value:"ARIA labels translations",id:"aria-labels-translations",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"localization"},"Localization"),(0,o.kt)("h2",{id:"changing-locale"},"Changing locale"),(0,o.kt)("p",null,"To change the locale, pass to the ",(0,o.kt)("inlineCode",{parentName:"p"},"locale")," prop a date-fns ",(0,o.kt)("a",{parentName:"p",href:"http://date-fns.org/docs/Locale"},"Locale object"),"."),(0,o.kt)("p",null,"For example, to localize the calendar in Spanish, import the locale object from date-fns and pass it to the component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-include-example"},"spanish\n")),(0,o.kt)("h3",{id:"overriding-the-first-day-of-the-week"},"Overriding the first day of the week"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"weekStartsOn")," prop to change the first day of the week:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-include-example"},"spanish-week-starts-on\n")),(0,o.kt)("h2",{id:"switching-to-right-to-left-direction"},"Switching to right-to-left direction"),(0,o.kt)("p",null,"To add right-to-left text direction, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"dir")," prop to ",(0,o.kt)("inlineCode",{parentName:"p"},"rtl"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-include-example"},"rtl\n")),(0,o.kt)("h2",{id:"adopting-other-numbering-systems"},"Adopting other numbering systems"),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"/guides/formatters"},"formatters")," to change the numbering system used in the calendar."),(0,o.kt)("p",null,"For example, to switch to hindu-arabic using ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString"},"toLocaleString"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-include-example"},"numbering-system\n")),(0,o.kt)("h2",{id:"aria-labels-translations"},"ARIA labels translations"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"/api/types/daypickerprops#labels"},"labels prop")," to translate the labels used for ARIA."))}m.isMDXComponent=!0},5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);