"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1730],{8463:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=i(2685),n=i(1244),r=(i(7378),i(5318)),d=["components"],o={},s="Modifiers",l={unversionedId:"basics/modifiers",id:"basics/modifiers",title:"Modifiers",description:"In DayPicker, a modifier is added to a day when the day matches a specific condition, called Matcher. For example, selected days have the selected modifiers, disabled days the disabled modifier, the today's date matches the today modifier, etc.",source:"@site/docs/basics/modifiers.md",sourceDirName:"basics",slug:"/basics/modifiers",permalink:"/basics/modifiers",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Selecting Days",permalink:"/basics/selecting-days"},next:{title:"Styling DayPicker",permalink:"/basics/styling"}},m={},c=[{value:"Understanding modifiers",id:"understanding-modifiers",level:3},{value:"The <code>selected</code> modifier",id:"the-selected-modifier",level:2},{value:"Disabling days",id:"disabling-days",level:2},{value:"Hidden days",id:"hidden-days",level:2},{value:"The <code>today</code> modifier",id:"the-today-modifier",level:2},{value:"Custom modifiers",id:"custom-modifiers",level:2},{value:"Styling modifiers",id:"styling-modifiers",level:2}],p={toc:c};function f(e){var t=e.components,i=(0,n.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"modifiers"},"Modifiers"),(0,r.kt)("p",null,"In DayPicker, a ",(0,r.kt)("strong",{parentName:"p"},"modifier")," is added to a day when the day matches a specific condition, called ",(0,r.kt)("a",{parentName:"p",href:"/api/types/matcher"},(0,r.kt)("inlineCode",{parentName:"a"},"Matcher")),". For example, selected days have the ",(0,r.kt)("inlineCode",{parentName:"p"},"selected")," modifiers, disabled days the ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled")," modifier, the today's date matches the ",(0,r.kt)("inlineCode",{parentName:"p"},"today")," modifier, etc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<DayPicker selected={new Date()} />\n<DayPicker disabled={new Date()} />\n<DayPicker hidden={new Date()} />\n")),(0,r.kt)("h3",{id:"understanding-modifiers"},"Understanding modifiers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use modifiers to change the appearance of the days in the calendar or to inspect the days the user has interacted with (e.g. picking a day)"),(0,r.kt)("li",{parentName:"ul"},"DayPicker comes with some pre-built modifiers, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"disabled"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"selected"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"hidden"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"today"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"range_start"),", etc. designed to cover the most common use cases. See the ",(0,r.kt)("a",{parentName:"li",href:"/api/enums/InternalModifier"},"InternalModifiers enum")," for a list of the internal modifiers."),(0,r.kt)("li",{parentName:"ul"},"It is possible to implement custom modifiers, extending the behavior of DayPicker: see ",(0,r.kt)("a",{parentName:"li",href:"#custom-modifiers"},"Custom Modifiers")," below for more details.")),(0,r.kt)("h2",{id:"the-selected-modifier"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"selected")," modifier"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"<DayPicker selected={new Date()} />\n")),(0,r.kt)("p",null,"When in selection mode, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"selected")," prop to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"selected")," modifier to the selected dates, and style them accordingly. To see how to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"selected")," modifier, see the ",(0,r.kt)("a",{parentName:"p",href:"/basics/selecting-days"},"Selecting days guide"),"."),(0,r.kt)("h2",{id:"disabling-days"},"Disabling days"),(0,r.kt)("p",null,"When in selection mode, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"disabled")," modifier to disable one or more days. Pass a ",(0,r.kt)("a",{parentName:"p",href:"/api/types/matcher"},(0,r.kt)("inlineCode",{parentName:"a"},"Matcher"))," or an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"Matchers")," to choose the disabled days:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-include-example"},"modifiers-disabled\n")),(0,r.kt)("h2",{id:"hidden-days"},"Hidden days"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"hidden")," modifier removes the day from the calendar. Set the hidden days using the ",(0,r.kt)("inlineCode",{parentName:"p"},"hidden")," prop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-include-example"},"modifiers-hidden\n")),(0,r.kt)("h2",{id:"the-today-modifier"},"The ",(0,r.kt)("inlineCode",{parentName:"h2"},"today")," modifier"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"today")," modifier is added to the current date:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-include-example"},"modifiers-today\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can change the current date using the ",(0,r.kt)("inlineCode",{parentName:"p"},"today")," prop."))),(0,r.kt)("h2",{id:"custom-modifiers"},"Custom modifiers"),(0,r.kt)("p",null,"Add new modifiers according to your app\u2019s requirements. For example, a booking app may use a ",(0,r.kt)("inlineCode",{parentName:"p"},"booked")," modifier to mark days as already booked."),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"modifiers")," prop to pass an object with custom modifiers and their matcher. Change the inline-style of the cell with ",(0,r.kt)("inlineCode",{parentName:"p"},"modifiersStyles")," or with ",(0,r.kt)("inlineCode",{parentName:"p"},"modifiersClassName"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-include-example"},"modifiers-custom\n")),(0,r.kt)("h2",{id:"styling-modifiers"},"Styling modifiers"),(0,r.kt)("p",null,"A day can be styled according to its modifiers \u2013 using CSS or inline styles. See ",(0,r.kt)("a",{parentName:"p",href:"/basics/styling"},"Styling DayPicker")," for more details."))}f.isMDXComponent=!0},5318:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>f});var a=i(7378);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function d(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):d(d({},t),e)),i},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=l(i),f=n,h=p["".concat(s,".").concat(f)]||p[f]||c[f]||r;return i?a.createElement(h,d(d({ref:t},m),{},{components:i})):a.createElement(h,d({ref:t},m))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,d=new Array(r);d[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,d[1]=o;for(var l=2;l<r;l++)d[l]=i[l];return a.createElement.apply(null,d)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"}}]);