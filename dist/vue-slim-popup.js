!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-slim-popup",[],t):"object"==typeof exports?exports["vue-slim-popup"]=t():n["vue-slim-popup"]=t()}("undefined"!=typeof self?self:this,function(){return function(n){var t={};function e(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return n[a].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,a){e.o(n,t)||Object.defineProperty(n,t,{configurable:!1,enumerable:!0,get:a})},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="/",e(e.s=0)}([function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a="vue-slim-popup",o={name:"SlimPopup",components:{},mixins:[{methods:{c:function(n){return n?""+a+n:""+a}}}],props:{show:{type:Boolean,default:!1},hideOnMaskClick:{type:Boolean,default:!1},maskTransition:{type:String,default:"slim-fade"},popupTransition:{type:String,default:"slim-scale"},maskClass:{type:String,default:null},popupClass:{type:String,default:null},popupPosition:{type:String,default:"center"}},data:function(){return{}},mounted:function(){this.init()},methods:{init:function(){},hide:function(){this.$emit("update:show",!1)},maskClick:function(){this.hideOnMaskClick&&this.hide()},preventDefault:function(){}}},r={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{class:n.c()},[e("transition",{attrs:{name:n.maskTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:n.show,expression:"show"}],class:[n.c("__mask"),n.maskClass],on:{click:n.maskClick,touchmove:function(t){return t.preventDefault(),n.preventDefault(t)}}})]),n._v(" "),e("transition",{attrs:{name:n.popupTransition}},[e("div",{directives:[{name:"show",rawName:"v-show",value:n.show,expression:"show"}],ref:"popup",class:[n.c("__popup"),n.c("__popup--"+n.popupPosition),n.popupClass],on:{touchmove:function(t){return t.preventDefault(),n.preventDefault(t)}}},[n._t("default")],2)])],1)},staticRenderFns:[]};var s=e(6)(o,r,!1,function(n){e(1)},null,null).exports;s.install=function(n){n.component(s.name,s)};t.default=s},function(n,t,e){var a=e(2);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(4)("55b53a02",a,!0,{})},function(n,t,e){(n.exports=e(3)(!1)).push([n.i,"\n.vue-slim-popup .slim-fade-enter-active,\n.vue-slim-popup .slim-fade-leave-active {\n  opacity: 1;\n  -webkit-transition: opacity ease-in 0.2s;\n  transition: opacity ease-in 0.2s;\n}\n.vue-slim-popup .slim-fade-enter,\n.vue-slim-popup .slim-fade-leave-to {\n  opacity: 0;\n}\n.vue-slim-popup .slim-scale-enter-active {\n  -webkit-animation: scaleIn 0.4s;\n          animation: scaleIn 0.4s;\n}\n.vue-slim-popup .slim-scale-leave-active {\n  -webkit-animation: scaleOut 0.2s;\n          animation: scaleOut 0.2s;\n}\n.vue-slim-popup .slim-zoom-enter-active {\n  -webkit-animation: zoomIn 0.4s;\n          animation: zoomIn 0.4s;\n}\n.vue-slim-popup .slim-zoom-leave-active {\n  -webkit-animation: zoomOut 0.2s;\n          animation: zoomOut 0.2s;\n}\n.vue-slim-popup .slim-radius-enter-active {\n  -webkit-animation: radiusIn 0.4s;\n          animation: radiusIn 0.4s;\n}\n.vue-slim-popup .slim-radius-leave-active {\n  -webkit-animation: radiusOut 0.2s;\n          animation: radiusOut 0.2s;\n}\n.vue-slim-popup .slim-fade-in-bottom-enter-active {\n  -webkit-animation: fadeInBottomIn 0.4s;\n          animation: fadeInBottomIn 0.4s;\n}\n.vue-slim-popup .slim-fade-in-bottom-leave-active {\n  -webkit-animation: fadeInBottomOut 0.2s;\n          animation: fadeInBottomOut 0.2s;\n}\n.vue-slim-popup .slim-slide-in-bottom-enter-active {\n  -webkit-animation: slideInBottomIn 0.4s;\n          animation: slideInBottomIn 0.4s;\n}\n.vue-slim-popup .slim-slide-in-bottom-leave-active {\n  -webkit-animation: slideInBottomOut 0.2s;\n          animation: slideInBottomOut 0.2s;\n}\n@-webkit-keyframes scaleIn {\n0% {\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n}\n}\n@keyframes scaleIn {\n0% {\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n}\n}\n@-webkit-keyframes scaleOut {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n}\n100% {\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n    opacity: 0;\n}\n}\n@keyframes scaleOut {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n}\n100% {\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n    opacity: 0;\n}\n}\n@-webkit-keyframes zoomIn {\n0% {\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n}\n}\n@keyframes zoomIn {\n0% {\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n    opacity: 0;\n}\n100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n}\n}\n@-webkit-keyframes zoomOut {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n}\n100% {\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n    opacity: 0;\n}\n}\n@keyframes zoomOut {\n0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 1;\n}\n100% {\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n    opacity: 0;\n}\n}\n@-webkit-keyframes radiusIn {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    border-radius: 100%;\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes radiusIn {\n0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    border-radius: 100%;\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@-webkit-keyframes radiusOut {\n0% {\n    opacity: 1;\n}\n100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    border-radius: 100%;\n    opacity: 0;\n}\n}\n@keyframes radiusOut {\n0% {\n    opacity: 1;\n}\n100% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    border-radius: 100%;\n    opacity: 0;\n}\n}\n@-webkit-keyframes fadeInBottomIn {\n0% {\n    -webkit-transform: translateY(50%);\n            transform: translateY(50%);\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes fadeInBottomIn {\n0% {\n    -webkit-transform: translateY(50%);\n            transform: translateY(50%);\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@-webkit-keyframes fadeInBottomOut {\n0% {\n    opacity: 1;\n}\n100% {\n    -webkit-transform: translateY(50%);\n            transform: translateY(50%);\n    opacity: 0;\n}\n}\n@keyframes fadeInBottomOut {\n0% {\n    opacity: 1;\n}\n100% {\n    -webkit-transform: translateY(50%);\n            transform: translateY(50%);\n    opacity: 0;\n}\n}\n@-webkit-keyframes slideInBottomIn {\n0% {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes slideInBottomIn {\n0% {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n}\n100% {\n    opacity: 1;\n}\n}\n@-webkit-keyframes slideInBottomOut {\n0% {\n    opacity: 1;\n}\n100% {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n    opacity: 0;\n}\n}\n@keyframes slideInBottomOut {\n0% {\n    opacity: 1;\n}\n100% {\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n    opacity: 0;\n}\n}\n.vue-slim-popup__mask {\n  position: fixed;\n  z-index: 999;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0,0,0,0.6);\n  -ms-touch-action: none;\n      touch-action: none;\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n}\n.vue-slim-popup__popup {\n  position: fixed;\n  z-index: 1000;\n  margin: auto;\n  left: 0;\n  right: 0;\n}\n.vue-slim-popup__popup--center {\n  top: 0;\n  bottom: 0;\n}\n.vue-slim-popup__popup--top {\n  top: 0;\n}\n.vue-slim-popup__popup--bottom {\n  bottom: 0;\n}\n",""])},function(n,t){n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",a=n[3];if(!a)return e;if(t&&"function"==typeof btoa){var o=(s=a,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r=a.sources.map(function(n){return"/*# sourceURL="+a.sourceRoot+n+" */"});return[e].concat(r).concat([o]).join("\n")}var s;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var a={},o=0;o<this.length;o++){var r=this[o][0];"number"==typeof r&&(a[r]=!0)}for(o=0;o<n.length;o++){var s=n[o];"number"==typeof s[0]&&a[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),t.push(s))}},t}},function(n,t,e){var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=e(5),r={},s=a&&(document.head||document.getElementsByTagName("head")[0]),i=null,p=0,u=!1,c=function(){},l=null,f="data-vue-ssr-id",m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function d(n){for(var t=0;t<n.length;t++){var e=n[t],a=r[e.id];if(a){a.refs++;for(var o=0;o<a.parts.length;o++)a.parts[o](e.parts[o]);for(;o<e.parts.length;o++)a.parts.push(y(e.parts[o]));a.parts.length>e.parts.length&&(a.parts.length=e.parts.length)}else{var s=[];for(o=0;o<e.parts.length;o++)s.push(y(e.parts[o]));r[e.id]={id:e.id,refs:1,parts:s}}}}function v(){var n=document.createElement("style");return n.type="text/css",s.appendChild(n),n}function y(n){var t,e,a=document.querySelector("style["+f+'~="'+n.id+'"]');if(a){if(u)return c;a.parentNode.removeChild(a)}if(m){var o=p++;a=i||(i=v()),t=h.bind(null,a,o,!1),e=h.bind(null,a,o,!0)}else a=v(),t=function(n,t){var e=t.css,a=t.media,o=t.sourceMap;a&&n.setAttribute("media",a);l.ssrId&&n.setAttribute(f,t.id);o&&(e+="\n/*# sourceURL="+o.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,a),e=function(){a.parentNode.removeChild(a)};return t(n),function(a){if(a){if(a.css===n.css&&a.media===n.media&&a.sourceMap===n.sourceMap)return;t(n=a)}else e()}}n.exports=function(n,t,e,a){u=e,l=a||{};var s=o(n,t);return d(s),function(t){for(var e=[],a=0;a<s.length;a++){var i=s[a];(p=r[i.id]).refs--,e.push(p)}t?d(s=o(n,t)):s=[];for(a=0;a<e.length;a++){var p;if(0===(p=e[a]).refs){for(var u=0;u<p.parts.length;u++)p.parts[u]();delete r[p.id]}}}};var b,k=(b=[],function(n,t){return b[n]=t,b.filter(Boolean).join("\n")});function h(n,t,e,a){var o=e?"":a.css;if(n.styleSheet)n.styleSheet.cssText=k(t,o);else{var r=document.createTextNode(o),s=n.childNodes;s[t]&&n.removeChild(s[t]),s.length?n.insertBefore(r,s[t]):n.appendChild(r)}}},function(n,t){n.exports=function(n,t){for(var e=[],a={},o=0;o<t.length;o++){var r=t[o],s=r[0],i={id:n+":"+o,css:r[1],media:r[2],sourceMap:r[3]};a[s]?a[s].parts.push(i):e.push(a[s]={id:s,parts:[i]})}return e}},function(n,t){n.exports=function(n,t,e,a,o,r){var s,i=n=n||{},p=typeof n.default;"object"!==p&&"function"!==p||(s=n,i=n.default);var u,c="function"==typeof i?i.options:i;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),e&&(c.functional=!0),o&&(c._scopeId=o),r?(u=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),a&&a.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(r)},c._ssrRegister=u):a&&(u=a),u){var l=c.functional,f=l?c.render:c.beforeCreate;l?(c._injectStyles=u,c.render=function(n,t){return u.call(t),f(n,t)}):c.beforeCreate=f?[].concat(f,u):[u]}return{esModule:s,exports:i,options:c}}}])});