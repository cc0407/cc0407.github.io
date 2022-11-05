"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[632],{1046:function(e,t,n){n.d(t,{w_:function(){return o}});var a=n(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=a.createContext&&a.createContext(r),c=function(){return c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)},i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function s(e){return e&&e.map((function(e,t){return a.createElement(e.tag,c({key:t},e.attr),s(e.child))}))}function o(e){return function(t){return a.createElement(m,c({attr:c({},e.attr)},t),s(e.child))}}function m(e){var t=function(t){var n,r=e.attr,l=e.size,s=e.title,o=i(e,["attr","size","title"]),m=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,o,{className:n,style:c(c({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),s&&a.createElement("title",null,s),e.children)};return void 0!==l?a.createElement(l.Consumer,null,(function(e){return t(e)})):t(r)}},2652:function(e,t,n){var a=n(7294),r=[{name:"VIVA Streaming TV",link:"https://landing.vivatv.ca",target:"_blank",type:"work"},{name:"TLN - Soccer Redesign",link:"https://tln.ca/soccer",target:"_blank",type:"work"},{name:"Portfolio Website (this)",link:"/",target:"_self",type:"personal"},{name:"Russian Alphabet Practice",link:"https://christiancatalano.ca/russian-alphabet-practice",target:"_self",type:"personal"},{name:"Tic-Tac-Toe Clone",link:"https://christiancatalano.ca/tic-tac-toe",target:"_self",type:"personal"},{name:"Stars Arcade",link:"https://github.com/cc0407/stars-arcade",target:"_blank",type:"personal"},{name:"Conway's Game of Life",link:"https://github.com/cc0407/stars-arcade",target:"_blank",type:"personal"}],l={work:"Work Experience",personal:"Personal Projects"},c=function(e){return a.createElement("div",{className:"w-full column items-center bg-offWhite min-h-128 flex-grow-default"},a.createElement("div",{className:"projectTitle"},l[e.type]),a.createElement("ul",null,r.map((function(t){if(t.type==e.type)return a.createElement("li",{key:t.name},a.createElement("a",{className:"projectListItem",href:t.link,target:t.target},t.name))}))))};c.defaultProps={},t.Z=c},4353:function(e,t,n){var a=n(7294),r=n(3201),l=function(e){return a.createElement("div",{className:"footer column items-center justify-center "+e.className},a.createElement("div",{className:"social-buttons"},a.createElement("a",{href:"https://github.com/cc0407",className:"social-button",target:"blank"},a.createElement(r.hJX,{className:"social-button",title:"Github"})),a.createElement("a",{href:"https://www.linkedin.com/in/christian-catalano/",className:"social-button",target:"blank"},a.createElement(r.ltd,{className:"social-button",title:"LinkedIn"}))))};l.defaultProps={homepage:!1,className:""},t.Z=l},9412:function(e,t,n){n.d(t,{Z:function(){return v}});var a=n(7294),r=n(7416),l=n(1852),c=function(e){var t=null==e.className?"":e.className,n=null==e.title?"":e.title,r=null==e.alt?"":e.alt;return a.createElement("img",{className:t,src:e.src,title:n,alt:r})},i=n(5231),s=function(){var e="Catalano";return a.createElement(c,{className:"mainLogo",src:i.Z,title:e,alt:e})},o=n(1082),m=function(e){return a.createElement("div",{className:"page-link-wrapper"},a.createElement(a.Fragment,null,u.map((function(t,n){return console.log(t),a.createElement(a.Fragment,null,"internal"==t.linkType?a.createElement(o.Link,{className:t.type+(e.active==t.page?" nav-link nav-link-active":" nav-link nav-link-inactive"),to:t.href},t.name):a.createElement("a",{className:t.type+(e.active==t.page?" nav-link nav-link-active":" nav-link nav-link-inactive"),href:t.href},t.name))}))))},u=[{href:"/",linkType:"internal",page:"Home",type:"nav-link-mobile",name:"Home"},{href:"/experience",linkType:"internal",page:"Experience",type:"",name:"Experience"},{href:"/projects",linkType:"internal",page:"Projects",type:"",name:"Projects"}],p=function(e){var t=(0,a.useState)(!1),n=t[0],c=t[1];return a.createElement(a.Fragment,null,a.createElement("div",{className:"nav-placeholder"}),a.createElement("div",{className:"nav "+e.className},n?a.createElement(l.a4S,{size:44,className:"icon",onClick:function(){c(!1)}}):a.createElement(r.B4m,{size:44,className:"icon",onClick:function(){c(!0)}}),a.createElement(o.Link,{to:"/"},a.createElement(s,null)),a.createElement("div",{className:"nav-links-desktop"},a.createElement(m,{active:e.active}))),n&&a.createElement("div",{className:"nav-overlay",onClick:function(){c(!1)}}),a.createElement("div",{className:"nav-links-mobile"+(n?" nav-opened":"")},a.createElement(m,{active:e.active})))};p.defaultProps={active:"None",className:""};var v=p},2477:function(e,t,n){var a=n(7294),r={image:n(5231).Z,description:"",htmlAttributes:{lang:"en"}},l=function(e){var t=null==e.metaTitle?e.title:e.metaTitle;return a.createElement(a.Fragment,null,a.createElement("meta",{charSet:"utf-8"}),a.createElement("title",null,e.title),a.createElement("meta",{name:"description",content:e.description}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:title",content:t}),a.createElement("meta",{property:"og:description",content:e.description}),a.createElement("meta",{property:"og:url",content:e.url}),a.createElement("meta",{property:"og:image",content:e.image}),a.createElement("link",{rel:"canonical",href:e.url}),e.children)};l.defaultProps=r},274:function(e,t,n){n.r(t),n.d(t,{default:function(){return i}});var a=n(7294),r=n(9412),l=n(4353),c=n(2652),i=(n(2477),function(e){return a.createElement("div",{className:"min-h-screen column"},a.createElement(r.Z,{active:"Projects"}),a.createElement(c.Z,{type:"personal"}),a.createElement(l.Z,null))})},5231:function(e,t){t.Z="data:image/png;base64,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"}}]);
//# sourceMappingURL=component---src-pages-projects-ts-17723d8e564112a7d67d.js.map