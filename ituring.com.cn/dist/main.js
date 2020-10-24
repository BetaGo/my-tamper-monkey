// ==UserScript==
// @name         图灵社区图书阅读优化
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http*://www.ituring.com.cn/book/*
// @grant        none
// @require      https://unpkg.com/simplebar@latest/dist/simplebar.min.js
// ==/UserScript==

(()=>{"use strict";var n={247:(n,e,t)=>{t.d(e,{Z:()=>o});var i=t(645),r=t.n(i)()((function(n){return n[1]}));r.push([n.id,"[data-simplebar] {\n  position: relative;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: flex-start;\n  align-items: flex-start;\n}\n\n.simplebar-wrapper {\n  overflow: hidden;\n  width: inherit;\n  height: inherit;\n  max-width: inherit;\n  max-height: inherit;\n}\n\n.simplebar-mask {\n  direction: inherit;\n  position: absolute;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: auto !important;\n  height: auto !important;\n  z-index: 0;\n}\n\n.simplebar-offset {\n  direction: inherit !important;\n  box-sizing: inherit !important;\n  resize: none !important;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  padding: 0;\n  margin: 0;\n  -webkit-overflow-scrolling: touch;\n}\n\n.simplebar-content-wrapper {\n  direction: inherit;\n  box-sizing: border-box !important;\n  position: relative;\n  display: block;\n  height: 100%; /* Required for horizontal native scrollbar to not appear if parent is taller than natural height */\n  width: auto;\n  max-width: 100%; /* Not required for horizontal scroll to trigger */\n  max-height: 100%; /* Needed for vertical scroll to trigger */\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n\n.simplebar-content-wrapper::-webkit-scrollbar,\n.simplebar-hide-scrollbar::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n\n.simplebar-content:before,\n.simplebar-content:after {\n  content: ' ';\n  display: table;\n}\n\n.simplebar-placeholder {\n  max-height: 100%;\n  max-width: 100%;\n  width: 100%;\n  pointer-events: none;\n}\n\n.simplebar-height-auto-observer-wrapper {\n  box-sizing: inherit !important;\n  height: 100%;\n  width: 100%;\n  max-width: 1px;\n  position: relative;\n  float: left;\n  max-height: 1px;\n  overflow: hidden;\n  z-index: -1;\n  padding: 0;\n  margin: 0;\n  pointer-events: none;\n  flex-grow: inherit;\n  flex-shrink: 0;\n  flex-basis: 0;\n}\n\n.simplebar-height-auto-observer {\n  box-sizing: inherit;\n  display: block;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 1000%;\n  width: 1000%;\n  min-height: 1px;\n  min-width: 1px;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: -1;\n}\n\n.simplebar-track {\n  z-index: 1;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n  overflow: hidden;\n}\n\n[data-simplebar].simplebar-dragging .simplebar-content {\n  pointer-events: none;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n}\n\n[data-simplebar].simplebar-dragging .simplebar-track {\n  pointer-events: all;\n}\n\n.simplebar-scrollbar {\n  position: absolute;\n  left: 0;\n  right: 0;\n  min-height: 10px;\n}\n\n.simplebar-scrollbar:before {\n  position: absolute;\n  content: '';\n  background: black;\n  border-radius: 7px;\n  left: 2px;\n  right: 2px;\n  opacity: 0;\n  transition: opacity 0.2s linear;\n}\n\n.simplebar-scrollbar.simplebar-visible:before {\n  /* When hovered, remove all transitions from drag handle */\n  opacity: 0.5;\n  transition: opacity 0s linear;\n}\n\n.simplebar-track.simplebar-vertical {\n  top: 0;\n  width: 11px;\n}\n\n.simplebar-track.simplebar-vertical .simplebar-scrollbar:before {\n  top: 2px;\n  bottom: 2px;\n}\n\n.simplebar-track.simplebar-horizontal {\n  left: 0;\n  height: 11px;\n}\n\n.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before {\n  height: 100%;\n  left: 2px;\n  right: 2px;\n}\n\n.simplebar-track.simplebar-horizontal .simplebar-scrollbar {\n  right: auto;\n  left: 0;\n  top: 2px;\n  height: 7px;\n  min-height: 0;\n  min-width: 10px;\n  width: auto;\n}\n\n/* Rtl support */\n[data-simplebar-direction='rtl'] .simplebar-track.simplebar-vertical {\n  right: auto;\n  left: 0;\n}\n\n.hs-dummy-scrollbar-size {\n  direction: rtl;\n  position: fixed;\n  opacity: 0;\n  visibility: hidden;\n  height: 500px;\n  width: 500px;\n  overflow-y: hidden;\n  overflow-x: scroll;\n}\n\n.simplebar-hide-scrollbar {\n  position: fixed;\n  left: 0;\n  visibility: hidden;\n  overflow-y: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n",""]);const o=r},336:(n,e,t)=>{t.d(e,{Z:()=>o});var i=t(645),r=t.n(i)()((function(n){return n[1]}));r.push([n.id,"@media only screen and (min-width: 768px){body>div.container.page-box.book-page>div>div.col-md-3.side{position:-webkit-sticky;position:sticky;top:150px;max-height:calc(100vh - 180px);overflow:auto}}@media only screen and (min-width: 1200px)and (min-width: 768px){body>div.container.page-box.book-page>div>div.col-md-3.side{position:-webkit-sticky;position:sticky;top:90px;max-height:calc(100vh - 120px);overflow:auto}}@media only screen and (max-width: 767px){body>div.container.page-box.book-page>div>div.col-md-3.side{position:-webkit-sticky;position:sticky;top:60px;max-height:calc(100vh - 90px);overflow:auto}}.float_view{visibility:hidden}",""]);const o=r},611:(n,e,t)=>{t.d(e,{Z:()=>o});var i=t(645),r=t.n(i)()((function(n){return n[1]}));r.push([n.id,"._17qwxM3hNd94Z2eQYCtxU_{position:fixed;top:150px;right:0px;display:flex}._17qwxM3hNd94Z2eQYCtxU_ ._2nPne27O9Cj7VCNEKF86hY{cursor:pointer;display:flex;align-items:center;background:rgba(220,220,220,.8);padding:2px 10px;height:24px;border-top-left-radius:12px;border-bottom-left-radius:12px;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}._17qwxM3hNd94Z2eQYCtxU_ ._2nPne27O9Cj7VCNEKF86hY svg{width:20px;height:20px}._17qwxM3hNd94Z2eQYCtxU_ ._1gVD6M9Hw9Bp6ad8gsMuJv{box-sizing:content-box;min-width:240px;background-color:rgba(255,255,255,.8);padding:0 1.2em 1em;border:1px solid #ccc;overflow:auto;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);max-height:calc(100vh - 200px)}@media(min-width: 992px){._17qwxM3hNd94Z2eQYCtxU_{display:none}}",""]),r.locals={catalog:"_17qwxM3hNd94Z2eQYCtxU_",btn:"_2nPne27O9Cj7VCNEKF86hY",list:"_1gVD6M9Hw9Bp6ad8gsMuJv"};const o=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,i){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);i&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},379:(n,e,t)=>{var i,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),o=[];function a(n){for(var e=-1,t=0;t<o.length;t++)if(o[t].identifier===n){e=t;break}return e}function l(n,e){for(var t={},i=[],r=0;r<n.length;r++){var l=n[r],s=e.base?l[0]+e.base:l[0],d=t[s]||0,p="".concat(s," ").concat(d);t[s]=d+1;var c=a(p),h={css:l[1],media:l[2],sourceMap:l[3]};-1!==c?(o[c].references++,o[c].updater(h)):o.push({identifier:p,updater:u(h,e),references:1}),i.push(p)}return i}function s(n){var e=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var o=t.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(n){e.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,p=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function c(n,e,t,i){var r=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=p(e,r);else{var o=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(o,a[e]):n.appendChild(o)}}function h(n,e,t){var i=t.css,r=t.media,o=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var b=null,m=0;function u(n,e){var t,i,r;if(e.singleton){var o=m++;t=b||(b=s(e)),i=c.bind(null,t,o,!1),r=c.bind(null,t,o,!0)}else t=s(e),i=h.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<t.length;i++){var r=a(t[i]);o[r].references--}for(var s=l(n,e),d=0;d<t.length;d++){var p=a(t[d]);0===o[p].references&&(o[p].updater(),o.splice(p,1))}t=s}}}}},e={};function t(i){if(e[i])return e[i].exports;var r=e[i]={id:i,exports:{}};return n[i](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var i in e)t.o(e,i)&&!t.o(n,i)&&Object.defineProperty(n,i,{enumerable:!0,get:e[i]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),i=t(336);e()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var r=t(611);e()(r.Z,{insert:"head",singleton:!1});const o=r.Z.locals||{};var a=t(247);function l(n,e){return(e=e||document).querySelector(n)}e()(a.Z,{insert:"head",singleton:!1}),a.Z.locals;const s="body > div.container.page-box.book-page > div > div.col-md-3.side";l(s).dataset.simplebar="";const d=l(s).cloneNode(!0);d.className=o.list,d.hidden=!0;const p=document.createElement("div");p.classList.add(o.btn),p.innerHTML='<svg t="1603542089489" class="icon" viewBox="0 0 1487 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="789" width="200" height="200"><path d="M609.435171 206.577007c-169.767586 0-339.535172 0-509.302758 0-51.088937 0-93.610164-37.126743-99.321971-86.311745-6.346452-55.531453 25.068485-102.812519 77.10939-114.553455 6.981097-1.586613 14.596839-1.903936 21.895259-1.903936 340.169817 0 680.022312 0 1020.192129 0 56.800744 0 98.687326 43.155872 99.004648 101.543229 0 58.070034-41.886582 101.543229-98.687326 101.543229C949.922311 206.894329 779.837402 206.577007 609.435171 206.577007z" p-id="790"></path><path d="M608.16588 612.749923c-169.132941 0-338.583204 0-507.716145 0-52.040905 0-94.879455-38.078711-99.639293-87.581035-5.394484-56.483421 26.337775-102.495197 78.37868-113.601487 6.663774-1.26929 13.644871-1.586613 20.308646-1.586613 340.169817 0 680.022312 0 1020.192129 0 57.118066 0 99.004648 43.155872 99.004648 101.225906 0 59.022002-41.886582 101.860552-99.956616 101.860552C948.65302 613.067245 778.568112 612.749923 608.16588 612.749923z" p-id="791"></path><path d="M610.069816 816.153703c169.767586 0 339.535172 0 509.302758 0 52.040905 0 94.879455 38.078711 99.639293 87.581035 5.394484 56.483421-26.337775 102.495197-78.37868 113.601487-6.663774 1.26929-13.644871 1.586613-20.308646 1.586613-340.169817 0-680.022312 0-1020.192129 0-57.118066 0-99.004648-43.155872-99.004648-101.225906 0-59.022002 41.886582-101.860552 99.956616-101.860552C270.534644 816.153703 440.30223 816.153703 610.069816 816.153703z" p-id="792"></path><path d="M1382.750324 104.08181m-104.08181 0a32.8 32.8 0 1 0 208.163619 0 32.8 32.8 0 1 0-208.163619 0Z" p-id="793"></path><path d="M1382.750324 511.841339m-104.08181 0a32.8 32.8 0 1 0 208.163619 0 32.8 32.8 0 1 0-208.163619 0Z" p-id="794"></path><path d="M1382.750324 919.91819m-104.08181 0a32.8 32.8 0 1 0 208.163619 0 32.8 32.8 0 1 0-208.163619 0Z" p-id="795"></path></svg>',p.addEventListener("click",(()=>{d.hidden=!d.hidden})),document.addEventListener("click",(n=>{c.contains(n.target)||(d.hidden=!0)}));const c=document.createElement("div");c.className=o.catalog,c.append(p,d),function(n,e=document.body){const t=document.createDocumentFragment();t.append(...n),e.appendChild(t)}([c])})()})();