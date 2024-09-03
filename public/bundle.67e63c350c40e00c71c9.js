(()=>{"use strict";var e={228:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(601),r=n.n(o),i=n(314),a=n.n(i)()(r());a.push([e.id,"@media (min-width: 681px) and (max-width: 1000px) {\n  .ms-auto {\n    margin-left: inherit !important;\n  }\n\n  .navbar {\n    min-height: 130px;\n    justify-content: space-evenly;\n  }\n\n  .dropdown-menu {\n    position: absolute;\n  }\n\n  footer {\n    flex-flow: column;\n    align-items: center;\n    justify-content: space-evenly;\n  }\n\n  .footer-dev-info {\n    display: none !important;\n  }\n\n  .navbar-expand-lg {\n    flex-flow: column;\n  }\n\n  .tasks {\n    flex-direction: column;\n  }\n\n  .task__title,\n  .task__text, .btn  {\n    width: 100%;\n  }\n\n  .p-3 {\n    padding: 0.2rem 2rem !important;\n  }\n\n  .btn-submit, .btn-delete, .btn  {\n    max-width: none !important;\n  }\n\n  .select-box,\n  .profile__input,\n  .users__input {\n    max-width: none;\n    margin: 0 auto;\n  }\n}\n\n@media (max-width: 680px) {\n  .select-box,\n  .profile__input,\n  .users__input {\n    max-width: none;\n    margin: 0 auto;\n  }\n\n  .btn-submit, .btn-delete, .btn {\n    max-width: none !important;\n  }\n\n  .task__title,\n  .task__text, .btn  {\n    width: 100% !important;\n  }\n\n  .navbar-brand,\n  #app-userName,\n  #app-footer,\n  .footer-dev-info {\n    display: none !important;\n  }\n\n  .navbar {\n    background-color: #0079bf !important;\n  }\n\n  .dropdown-toggle {\n    text-align: right;\n  }\n\n  .tasks {\n    flex-direction: column;\n  }\n\n  #sign-in {\n    flex-direction: column;\n    text-align: center;\n  }\n}",""]);const s=a},919:(e,t,n)=>{n.d(t,{A:()=>s});var o=n(601),r=n.n(o),i=n(314),a=n.n(i)()(r());a.push([e.id,'/* Основные стили */\nbody {\n  font-family: "Roboto", "Arial", sans-serif;\n  font-size: 18px;\n}\n\n.btn-submit,\n.btn-delete {\n  max-width: 202px !important;\n}\n \n.main {\n  margin: 20px;\n}\n\nfooter {\n  color: var(--bs-white);\n  font-size: 18px;\n}\n\n.disabled {\n  cursor: default;\n}\n\n.btn-primary {\n  max-width: 102px;\n  font-size: 18px;\n  --bs-btn-padding-y: 0.175rem;\n  margin-top: 12px;\n  --bs-btn-bg: #0079bf;\n  --bs-btn-border-color: #0079bf;\n  --bs-btn-hover-color: #fff;\n  --bs-btn-hover-bg: #0067a3;\n  --bs-btn-hover-border-color: #0067a3;\n  --bs-btn-focus-shadow-rgb: 49, 132, 253;\n  --bs-btn-active-color: #fff;\n  --bs-btn-active-bg: #0079bf;\n  --bs-btn-active-border-color: #0079bf;\n  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  --bs-btn-disabled-color: #fff;\n  --bs-btn-disabled-bg: #0079bf;\n  --bs-btn-disabled-border-color: #0079bf;\n}\n\n.buttons {\n  padding-right: 12px;\n  position: relative;\n}\n\n.hidden {\n  display: none !important;\n}\n\n.visible {\n  display: block !important;\n}\n\n.alert {\n  position: fixed;\n  background-color: rgba(61, 61, 61, 0.4);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 999;\n  transition: all 0.3s;\n  margin-bottom: 0;  \n}\n\n#app-alert-text {\n  max-width: 400px;\n  width: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  padding: 2em;\n  background: white;\n  box-shadow: var(--bs-box-shadow);\n  border-radius: 10px;\n}\n\n.bg-light {\n  background-color: #0079bf !important;\n}\n\n.bg-dark {\n  background-color: #0067a3 !important;\n}\n\nh1 {\n  color: white;\n}\n\n.img-door {\n  width: 200px;\n  height: auto;\n  padding-right: 20px;\n}\n/* END Основные стили */\n\n/* страницы */\n.task,\n.users {\n  border-radius: 10px;\n}\n\n.task__title,\n.task__text {\n  display: block;\n  width: 60%;\n}\n\n.header-input {\n  font-size: 2rem;\n  outline: none;\n  border: none !important;\n  margin-bottom: 15px;\n}\n\n.text-input {\n  font-size: 18px;\n  margin-bottom: 15px;\n}\n\n.profile {\n  border-radius: 10px;\n}\n\n.profile__input,\n.users__input {\n  max-width: 300px;\n}\n/* END страницы */\n\n/* task board */\n.items {\n  padding-right: 12px;\n  max-height: calc(100vh - 300px);\n  overflow-y: auto;\n}\n\n.tasks {\n  gap: 24px;\n}\n\n.tasks-col {\n  background-color: #ebecf0;\n  border-radius: 10px;\n  padding-right: 0;\n}\n\n.tasks-col__item-task {\n  border-radius: 5px;\n  padding: 5px 10px 5px 8px;\n  margin-bottom: 8px;\n  cursor: pointer;\n  text-decoration: none;\n  color: var(--bs-navbar-brand-color);\n  border: 2px solid transparent;\n  display: block;\n}\n\n.tasks-col__item-task:hover {\n  border: 2px solid #0079bf;\n  background-color: #deeef7 !important;\n}\n\n.tasks-col__add {\n  color: #5e6c84;\n  border: 0;\n  padding: 0;\n  background-color: #ebecf0;\n}\n\n.tasks-col__add_plus {\n  font-size: 28px;\n  font-weight: 350;\n  line-height: 23px;\n  padding-right: 5px;\n}\n\n.tasks-col__add:hover:enabled {\n  color: #0079bf;\n}\n\n.tasks-col__item {\n  margin-bottom: 15px;\n}\n\n.tasks-col__item-badge {\n  background-color: rgba(255, 255, 255, 0.7);\n  height: 20px;\n  color: #5e6c84;\n  margin: 10px auto;\n  position: relative;\n  text-align: right;\n  cursor: pointer;\n  width: 60%;\n  padding-right: 10px;\n  margin-left: 40%;\n  font-size: 14px;\n  text-decoration: none;\n  margin-bottom: 0;\n  margin-right: 10px;\n  border-top-right-radius: 5px;\n  display: block;\n}\n\n.tasks-col__item-badge:before {\n  content: "";\n  width: 0px;\n  height: 0px;\n  border-bottom: 20px solid rgba(255, 255, 255, 0.7);\n  border-left: 20px solid transparent;\n  position: absolute;\n  right: 100%;\n  top: 0px;\n}\n/* END task board */\n\n/* select */\n.select-box {\n  position: relative;\n  display: block;\n  width: 100%;\n  max-width: 300px;\n  font-size: 16px;\n  line-height: 20px;\n  z-index: 999;\n}\n\n.select-box__current {\n  position: relative;\n  cursor: pointer;\n  outline: none;\n  background-color: white;\n  border-radius: 6px;\n  border: 0.5px solid #0079bf;\n  box-shadow: 0px 0px 0 5px #c2daff;\n}\n\n.select-box__current:focus + .select-box__list {\n  opacity: 1;\n  animation-name: none;\n}\n\n.select-box__current:focus + .select-box__list .select-box__option {\n  cursor: pointer;\n}\n\n.select-box__icon {\n  position: absolute;\n  top: 50%;\n  right: 8px;\n  transform: translateY(-50%);\n  width: 13px;\n  opacity: 0.3;\n  z-index: 999;\n}\n\n.select-box__value {\n  display: flex;\n  padding-right: 30px;\n}\n\n.select-box__input {\n  display: none;\n}\n\n.select-box__input-text {\n  display: none;\n  width: 100%;\n  margin: 0;\n  padding: 10px;\n  border-radius: 8px;\n}\n\n.select-box__input:checked + .select-box__input-text {\n  display: block;\n}\n\n.select-box__list {\n  position: absolute;\n  width: 100%;\n  padding: 0;\n  list-style: none;\n  opacity: 0;\n  animation-name: HideList;\n  animation-duration: 0.5s;\n  animation-delay: 0.5s;\n  animation-fill-mode: forwards;\n  animation-timing-function: step-start;\n  box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);\n  background-color: #fff;\n  border-radius: 5px;\n}\n\n.select-box__option {\n  display: block;\n  padding: 15px;\n}\n\n.select-box__option:hover,\n.select-box__option:focus {\n  color: #0079bf;\n  background-color: #deeef7;\n  border-radius: 5px;\n}\n\n@keyframes HideList {\n  from {\n    transform: scaleY(1);\n  }\n  to {\n    transform: scaleY(0);\n  }\n}\n/* END select */\n\n/* scrollbar */\n::-webkit-scrollbar {\n  width: 12px;\n}\n\n::-webkit-scrollbar-track {\n  background-color: white;\n  border-radius: 20px;\n}\n\n::-webkit-scrollbar-thumb {\n  background-color: #cbcbcb;\n  border-radius: 20px;\n  border: 0px solid transparent;\n  background-clip: content-box;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background-color: #b0b0b0;\n  cursor: pointer;\n}\n/* END scrollbar */\n\n/* header */\n#app-login-btn {\n  width: 160px;\n}\n\n#app-userName {\n  font-size: var(--bs-navbar-brand-font-size);\n  color: var(--bs-navbar-brand-color);\n}\n\n#sign-in {\n  margin-top: 50px;\n}\n\n.navbar {\n  --bs-navbar-padding-x: 1.2rem;\n  --bs-navbar-padding-y: 0rem;\n  min-height: 57px;\n}\n\n.navbar-brand {\n  font-size: 28px;\n}\n\n.nav-avatar {\n  width: 40px;\n  height: 40px;\n  /*margin-right: 4px;*/\n}\n\n.nav-link {\n  width: 58px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n }\n\n.nav-arrow-box {\n width: 10px;\n display: inline-block;\n padding-top: 5px;\n}\n\n.arrow-dwn {\n  transform: rotate(45deg);\n}\n\n.arrow-up {\n  transform: rotate(225deg);\n}\n\n.dropdown {\n  --bs-dropdown-link-hover-bg: #deeef7;\n  --bs-dropdown-link-hover-color: #0079bf;\n  --bs-dropdown-link-active-bg: #0079bf;\n  --bs-dropdown-border-radius: 5px;\n  width: auto;\n}\n\n.menu {\n  right: 0;\n  left: auto !important;\n  border: 0;\n  top: 50px !important;\n}\n\n#app-nav-arrow {\n  display: inline-block;\n  vertical-align: 0;\n  width: 10px;\n  height: 10px;\n  border: 3px solid #ffffff;\n  border-left: 0;\n  border-top: 10px;\n}\n\n/*стрелка для всплывающего блока меню*/\n#app-nav-arrow-cloud {\n  content: "";\n  position: absolute;\n  top: 52px;\n  left: 37%;\n  width: 0;\n  height: 0;\n  border: 13px solid transparent;\n  border-bottom-color: #ffffff;\n  border-top: 0;\n  margin-left: -13px;\n  margin-top: -11px;\n}\n\n/*убираем стрелку bootstrap "из коробки", справа от аватарки*/\n.dropdown-toggle::after {\n  display: none;\n}\n\n#navbarNavDarkDropdown {\n  position: sticky;\n  z-index: 555;\n}\n/* END header */',""]);const s=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],s=0;s<e.length;s++){var l=e[s],c=o.base?l[0]+o.base:l[0],d=i[c]||0,p="".concat(c," ").concat(d);i[c]=d+1;var u=n(p),b={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)t[u].references++,t[u].updater(b);else{var m=r(b,o);o.byIndex=s,t.splice(s,0,{identifier:p,updater:m,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=n(i[a]);t[s].references--}for(var l=o(e,r),c=0;c<i.length;c++){var d=n(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=l}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},12:(e,t,n)=>{e.exports=n.p+"6f2ecc8a4e57e53998d8.svg"},226:(e,t,n)=>{e.exports=n.p+"fa155139fbdc2f8b3ec5.png"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,n.d({},{X:()=>ie,D:()=>le});var o=n(72),r=n.n(o),i=n(825),a=n.n(i),s=n(659),l=n.n(s),c=n(56),d=n.n(c),p=n(540),u=n.n(p),b=n(113),m=n.n(b),f=n(919),v={};v.styleTagTransform=m(),v.setAttributes=d(),v.insert=l().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=u(),r()(f.A,v),f.A&&f.A.locals&&f.A.locals;var g=n(228),x={};x.styleTagTransform=m(),x.setAttributes=d(),x.insert=l().bind(null,"head"),x.domAPI=a(),x.insertStyleElement=u(),r()(g.A,x),g.A&&g.A.locals&&g.A.locals;var h=new URL(n(12),n.b);const _=`<div class="row mx-auto tasks"> <div class="col tasks-col d-flex flex-column gap-2 pt-2 pb-2 h-100"> <div class="tasks-col__title">Backlog</div> <div id="app-backlog-items" class="items"></div> <div class="buttons"> <button id="app-backlog" class="tasks-col__add d-flex"> <div class="tasks-col__add_plus">+</div> <div class="tasks-col__add_text">Add card</div> </button> <input id="app-backlog-input" type="text" class="form-control hidden"> <button id="app-backlog-submit" class="btn btn-primary hidden">Submit</button> </div> </div> <div class="col tasks-col d-flex flex-column gap-2 pt-2 pb-2 h-100"> <div class="tasks-col__title">Ready</div> <div id="app-ready-items" class="items"></div> <div class="buttons"> <button id="app-ready" class="tasks-col__add d-flex"> <div class="tasks-col__add_plus">+</div> <div class="tasks-col__add_text">Add card</div> </button> <div id="app-select-ready" class="select-box hidden"> <img class="select-box__icon" src="${h}" aria-hidden="true"> <div id="app-inputs-ready" class="select-box__current" tabindex="1"> <div class="select-box__value"> <input class="select-box__input" type="radio" id="ready-option-0" name="ready" checked="checked"> <p class="select-box__input-text">&nbsp;</p> </div> </div> <ul id="app-labels-ready" class="select-box__list shadow"> </ul> </div> <button id="app-ready-submit" class="btn btn-primary hidden">Submit</button> </div> </div> <div class="col tasks-col d-flex flex-column gap-2 pt-2 pb-2 h-100"> <div class="tasks-col__title">In progress</div> <div id="app-inprogress-items" class="items"></div> <div class="buttons"> <button id="app-inprogress" class="tasks-col__add d-flex"> <div class="tasks-col__add_plus">+</div> <div class="tasks-col__add_text">Add card</div> </button> <div id="app-select-inprogress" class="select-box hidden"> <img class="select-box__icon" src="${h}" aria-hidden="true"> <div id="app-inputs-inprogress" class="select-box__current" tabindex="1"> <div class="select-box__value"> <input class="select-box__input" type="radio" id="inprogress-option-0" name="inprogress" checked="checked"> <p class="select-box__input-text" id="p-inprogress0">&nbsp;</p> </div> </div> <ul id="app-labels-inprogress" class="select-box__list shadow"> </ul> </div> <button id="app-inprogress-submit" class="btn btn-primary hidden">Submit</button> </div> </div> <div class="col tasks-col d-flex flex-column gap-2 pt-2 pb-2 h-100"> <div class="tasks-col__title">Finished</div> <div id="app-finished-items" class="items"></div> <div class="buttons"> <button id="app-finished" class="tasks-col__add d-flex"> <div class="tasks-col__add_plus">+</div> <div class="tasks-col__add_text">Add card</div> </button> <div id="app-select-finished" class="select-box hidden"> <img class="select-box__icon" src="${h}" aria-hidden="true"> <div id="app-inputs-finished" class="select-box__current" tabindex="1"> <div class="select-box__value"> <input class="select-box__input" type="radio" id="finished-option-0" name="finished" checked="checked"> <p class="select-box__input-text">&nbsp;</p> </div> </div> <ul id="app-labels-finished" class="select-box__list shadow"> </ul> </div> <button id="app-finished-submit" class="btn btn-primary hidden">Submit</button> </div> </div> </div> `,y=`<div id="sign-in" class="d-flex align-items-center justify-content-center"> <img class="img-door" src="${new URL(n(226),n.b)}"> <h1>Please sign in<br>to see your tasks!</h1> </div> `,k='<div id="app-alert" class="alert fade show" role="alert"> <div id="app-alert-text"> </div> </div>',w=`<div id="app-users" class="users d-flex flex-column px-4 pt-3 pb-4 h-100 bg-white mx-auto"> <button id="app-close-btn" type="button" class="btn-close ms-auto text-end" aria-label="Close"></button> <h2 id="app-users-login" class="users__title pb-3">Edit users</h2> <p class="users__text">New user:</p> <input id="app-users-add" class="users__input form-control" type="text" placeholder="Enter login" value="" autofocus> <button id="app-users-submit" class="btn btn-primary btn-submit">Add user</button> <hr> <p class="users__text pt-3">Delete user:</p> <div id="app-select-delete" class="select-box"> <img class="select-box__icon" src="${new URL(n(12),n.b)}" aria-hidden="true"> <div id="app-inputs-delete" class="select-box__current" tabindex="1"> <div class="select-box__value"> <input class="select-box__input" type="radio" id="delete-option-0" name="delete" checked="checked"> <p class="select-box__input-text">&nbsp;</p> </div> </div> <ul id="app-labels-delete" class="select-box__list shadow"> </ul> </div> <button id="app-users-delete" class="btn btn-primary btn-delete">Delete user</button> </div> `,S='<div id="app-profile" class="profile d-flex flex-column px-4 pt-3 pb-4 h-100 bg-white mx-auto"> <button id="app-close-btn" type="button" class="btn-close ms-auto text-end" aria-label="Close"></button> <h2 id="app-profile-login" class="profile__title pb-3"></h2> <p id="app-profile-text" class="profile__text">New password:</p> <input id="app-profile-pass" class="profile__input form-control" type="password" placeholder="Enter your password" value="" autofocus> <button id="app-profile-submit" class="btn btn-primary">Submit</button> </div> ',L={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};var q,T=new Uint8Array(16);function M(){if(!q&&!(q="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return q(T)}for(var H=[],E=0;E<256;++E)H.push((E+256).toString(16).slice(1));const A=function(e,t,n){if(L.randomUUID&&!t&&!e)return L.randomUUID();var o=(e=e||{}).random||(e.rng||M)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=o[r];return t}return function(e,t=0){return(H[e[t+0]]+H[e[t+1]]+H[e[t+2]]+H[e[t+3]]+"-"+H[e[t+4]]+H[e[t+5]]+"-"+H[e[t+6]]+H[e[t+7]]+"-"+H[e[t+8]]+H[e[t+9]]+"-"+H[e[t+10]]+H[e[t+11]]+H[e[t+12]]+H[e[t+13]]+H[e[t+14]]+H[e[t+15]]).toLowerCase()}(o)};class ${constructor(){this.id=A()}}const D=function(e){return JSON.parse(localStorage.getItem(e)||"[]")},I=function(e,t){const n=D(t);n.push(e),localStorage.setItem(t,JSON.stringify(n))},P=function(e){localStorage.removeItem(e)},U=function(e,t){let n=D(t);P(t);for(let o=0;o<n.length;o++)n[o].id!==e.id&&I(n[o],t);I(e,t)},N=function(e,t){let n=D(t);P(t);for(let o=0;o<n.length;o++)n[o].id!==e.id&&I(n[o],t)},C=function(e){if("admin"!==e){let t=D("tasks");P("tasks"),t=t.filter((function(t){t.login==e&&I(t,"tasks")}))}return!0};class j extends ${constructor(e,t){super(),this.login=e,this.password=t,this.storageKey="users"}get hasAccess(){let e=D(this.storageKey);if(0==e.length)return!1;for(let t of e)if(t.login==this.login&&t.password==this.password)return!0;return!1}static save(e){try{return I(e,e.storageKey),!0}catch(e){throw new Error(e)}}}class R extends ${constructor(e,t,n,o){super(),this.login=e,this.step=t,this.header=n,this.text=o,this.storageKey="tasks"}static save(e){try{return I(e,e.storageKey),!0}catch(e){throw new Error(e)}}}let z=D("tasks"),F=[];const O=function(e){let t=z.filter((t=>t.id===e))[0],n=document.createElement("a");n.className="tasks-col__item-task bg-white",n.textContent=t.header;let o=document.createElement("div");if(o.className="tasks-col__item app-task",o.id=`id-${e}`,document.querySelector(`#app-${t.step}-items`).insertAdjacentElement("beforeend",o),o.insertAdjacentElement("afterbegin",n),"admin"==D("currentUser")){let e=document.createElement("a");e.className="tasks-col__item-badge shape",e.textContent=t.login,o.insertAdjacentElement("afterbegin",e)}},V=function(e){z=D("tasks");const t=e=>{document.querySelector(`#app-${e}-items`).innerHTML="";for(let t=0;t<z.length;t++)z[t].step==e&&O(z[t].id)};t("backlog"),t("ready"),t("inprogress"),t("finished"),K(e),Y(),oe(),F=J()},K=function(e){document.querySelector("#app-backlog").addEventListener("click",(function(t){t.preventDefault(),Q("#app-backlog"),Q("#app-backlog-submit");let n=document.querySelector("#app-backlog-input");Q("#app-backlog-input"),n.value="",n.focus(),n.onblur=function(t){t.preventDefault();let o=new R(e,"backlog",n.value,"no description");if(Q("#app-backlog"),Q("#app-backlog-submit"),Q("#app-backlog-input"),n.value){if(z.some((e=>e.header===n.value)))document.querySelector("#content").innerHTML+=k,te("Task with this header already exists"),K(e),Y();else{R.save(o),z=D("tasks");let e=z.length-1;O(z[e].id),oe(),ne()}F=J()}}}))},Y=function(){B("ready"),B("inprogress"),B("finished")},B=function(e){let t=document.querySelector(`#app-${e}`),n=document.querySelector(`#app-${e}-submit`);t.addEventListener("click",(function(t){t.stopImmediatePropagation(),t.preventDefault(),Q(`#app-${e}`),Q(`#app-${e}-submit`),Q(`#app-select-${e}`);let r="";"ready"==e&&(r="backlog"),"inprogress"==e&&(r="ready"),"finished"==e&&(r="inprogress"),z=D("tasks"),z=z.filter((e=>e.step===r));let i=document.querySelector(`#app-inputs-${e}`),a=document.querySelector(`#app-labels-${e}`);for(let t=0;t<z.length;t++){let n=`${e}-option-${t+1}`,o=`\n      <div class="select-box__value">\n        <input class="select-box__input" type="radio" id="${n}" name="${e}">\n        <p class="select-box__input-text" id="p-${e}${t+1}">${z[t].header}</p>\n      </div>`;i.insertAdjacentHTML("beforeend",o);let r=`\n      <li>\n        <label class="select-box__option" for="${n}" aria-hidden="aria-hidden">${z[t].header}</label>\n      </li>`;a.insertAdjacentHTML("beforeend",r)}n.addEventListener("click",(function(t){t.preventDefault(),t.stopImmediatePropagation();let n="";for(let t=0;t<z.length;t++){if(null===document.querySelector(`#p-${e}${t+1}`))return;var r=document.querySelector(`#p-${e}${t+1}`);"block"==window.getComputedStyle(r,"select-box__input-text").getPropertyValue("display")&&(n=r.innerHTML)}""!=n&&(function(e,t){let n=z.filter((t=>t.header===e))[0];var o;n.step=t,U(n,"tasks"),o=n.id,document.querySelector(`#id-${o}`).remove(),O(n.id),oe(),ne(),F=J()}(n,e),o(),F=J())}))}));const o=function(){let t=document.querySelector(`#app-labels-${e}`);Q(`#app-${e}`),Q(`#app-${e}-submit`),Q(`#app-select-${e}`),t.innerHTML="";let n=`${e}-option-0`;document.querySelector(`#app-inputs-${e}`).innerHTML=`\n    <div class="select-box__value">\n        <input class="select-box__input" type="radio" id="${n}" name="${e}" checked="checked">\n        <p class="select-box__input-text">&nbsp;</p>\n      </div>`};window.addEventListener("click",(function(t){var r=document.querySelector(".tasks");if(r){var i=r.children;if(!n.classList.contains("hidden")){var a="";"ready"==e&&(a=1),"inprogress"==e&&(a=2),"finished"==e&&(a=3),!i[a].contains(t.target)&&o()}}}))},J=function(){let e=document.getElementsByClassName("app-task");F=Array.from(e),F.forEach((e=>{e.addEventListener("click",(function(t){t.preventDefault(),t.stopImmediatePropagation();let n=e.getAttribute("id").replace("id-","");document.querySelector("#content").innerHTML='<div id="app-task" class="task d-flex flex-column px-4 pt-3 pb-4 h-100 bg-white mx-auto"> <button id="app-close-btn" type="button" class="btn-close ms-auto text-end" aria-label="Close"></button> <h2 id="app-task-header" class="task__title"></h2> <p id="app-task-text" class="task__text"></p> <div class="buttons d-flex flex-row gap-2"> <button id="app-task-submit" class="btn btn-primary btn-submit">Save</button> <button id="app-task-delete" class="btn btn-primary btn-delete">Delete&nbsp;task</button> </div> </div> ',U("editTask","currentPage");let o=document.querySelector("#app-task-header"),r=document.querySelector("#app-task-text"),i=D("tasks").filter((e=>e.id===n))[0];o.innerHTML=i.header,r.innerHTML=i.text,o.addEventListener("click",(function(e){e.preventDefault();let t=document.createElement("input");t.setAttribute("type","text"),o.innerHTML==i.header?t.setAttribute("value",i.header):t.setAttribute("value",o.innerHTML),t.setAttribute("id","app-header-input"),t.setAttribute("class","header-input"),o.innerHTML="",o.insertAdjacentElement("afterend",t),t.focus(),t.onblur=function(e){e.preventDefault(),t.value&&(o.blur(),o.innerHTML=document.querySelector("#app-header-input").value,t.parentNode.removeChild(t))}})),r.addEventListener("click",(function(e){e.preventDefault();let t=document.createElement("textarea");t.setAttribute("id","app-text-input"),t.setAttribute("class","form-control text-input");let n=i.text;t.setAttribute("value",n),r.innerHTML==n?t.innerHTML=n:t.innerHTML=r.innerHTML,r.innerHTML="",r.insertAdjacentElement("afterend",t),t.focus(),t.onblur=function(e){e.preventDefault(),r.blur(),""!==document.querySelector("#app-text-input").value?r.innerHTML=document.querySelector("#app-text-input").value:r.innerHTML="no description",t.parentNode.removeChild(t)}})),document.querySelector("#app-task-submit").addEventListener("click",(function(e){e.preventDefault(),e.stopImmediatePropagation(),i.header=o.innerHTML,U(i,"tasks"),i.text=r.innerHTML,U(i,"tasks"),le(e)})),document.querySelector("#app-task-delete").addEventListener("click",(function(e){e.preventDefault(),e.stopImmediatePropagation(),N(i,"tasks"),ne(),le(e)})),document.querySelector("#app-close-btn").addEventListener("click",(function(e){le(e)}))}))}))},X=function(){let e=D("currentUser")[0],t=D("users").filter((t=>t.login===e))[0],n=document.querySelector("#app-profile-login"),o=document.querySelector("#app-profile-pass");n.innerHTML=t.login,o.value=t.password,document.querySelector("#app-profile-submit").addEventListener("click",(function(e){e.preventDefault(),e.stopImmediatePropagation(),o.value?(t.password=o.value,U(t,"users"),document.querySelector("#content").innerHTML+=k,te("Success!"),X()):(document.querySelector("#content").innerHTML+=k,te("Password is empty!"),X())})),document.querySelector("#app-close-btn").addEventListener("click",(function(e){le(e)}))},G=function(){let e=D("users"),t=document.querySelector("#app-users-add");document.querySelector("#app-users-submit").addEventListener("click",(function(o){o.preventDefault(),o.stopImmediatePropagation(),e=D("users"),n();let r=t.value;if(""==r)document.querySelector("#content").innerHTML+=k,te("Login is empty!");else if(e.filter((e=>e.login==r))[0])document.querySelector("#content").innerHTML+=k,te("Login already exists!");else{let e=new j(t.value,"12345");j.save(e),document.querySelector("#content").innerHTML+=k,te("Success!")}G()})),document.querySelector(".select-box__value").addEventListener("click",(function(t){t.preventDefault(),t.stopImmediatePropagation(),n(),e=D("users");let o=document.querySelector("#app-inputs-delete"),r=document.querySelector("#app-labels-delete");for(let t=0;t<e.length;t++){let n=e[t].login,i=`delete-option-${t+1}`,a=`\n      <div class="select-box__value">\n        <input class="select-box__input" type="radio" id="${i}" name="delete">\n        <p class="select-box__input-text" id="p-${t+1}">${n}</p>\n      </div>`;o.insertAdjacentHTML("beforeend",a);let s=`\n      <li>\n        <label class="select-box__option" for="${i}" aria-hidden="aria-hidden">${n}</label>\n      </li>`;r.insertAdjacentHTML("beforeend",s)}document.querySelector("#app-users-delete").addEventListener("click",(function(t){t.preventDefault(),t.stopImmediatePropagation();let o="";for(let t=0;t<e.length;t++){if(null==document.querySelector(`#p-${t+1}`))return;var r=document.querySelector(`#p-${t+1}`);"block"==window.getComputedStyle(r,"select-box__input-text").getPropertyValue("display")&&(o=r.innerHTML)}if(""==o)return;if("admin"==o)return document.querySelector("#content").innerHTML+=k,te("Impossible to delete admin!"),void G();let i=e.filter((e=>e.login==o))[0];N(i,"users"),n(),document.querySelector("#content").innerHTML+=k,te("Success!"),G()}))}));const n=function(){document.querySelector("#app-labels-delete").innerHTML="",document.querySelector("#app-inputs-delete").innerHTML='\n    <div class="select-box__value">\n        <input class="select-box__input" type="radio" id="delete-option-0" name="delete" checked="checked">\n        <p class="select-box__input-text">&nbsp;</p>\n      </div>'};document.querySelector("#app-close-btn").addEventListener("click",(function(e){le(e)}))};document.querySelector("#app-devName").innerHTML="Alina Morozova",document.querySelector("#app-devYear").innerHTML="2024";const Q=function(e){document.querySelector(e).classList.toggle("hidden")},W=document.querySelector("#app-login-form"),Z=function(e){W.classList.toggle("hidden"),document.querySelector("#app-userName").classList.toggle("hidden"),document.querySelector("#app-userNameValue").innerHTML=e,document.querySelector("#app-menu").classList.toggle("hidden")},ee=function(){document.querySelector("#app-footer").classList.toggle("hidden")},te=function(e){document.querySelector("#app-alert-text").innerHTML=e},ne=function(){let e=0,t=0,n=D("tasks");for(let o=0;o<n.length;o++)"backlog"==n[o].step&&(e+=1),"finished"==n[o].step&&(t+=1);document.querySelector("#app-activeTasksSum").innerHTML=e,document.querySelector("#app-closedTasksSum").innerHTML=t},oe=function(){let e=D("tasks"),t=document.querySelector("#app-ready"),n=document.querySelector("#app-inprogress"),o=document.querySelector("#app-finished");t.disabled=!0,n.disabled=!0,o.disabled=!0,e.some((e=>"backlog"===e.step))&&(t.disabled=!1),e.some((e=>"ready"===e.step))&&(n.disabled=!1),e.some((e=>"inprogress"===e.step))&&(o.disabled=!1)},re=function(){document.querySelector("#app-profile-btn").classList.replace("hidden","visible"),document.querySelector("#app-users-btn").classList.replace("hidden","visible"),"admin"==D("currentUser")?document.querySelector("#app-profile-btn").classList.replace("visible","hidden"):document.querySelector("#app-users-btn").classList.replace("visible","hidden")};document.querySelector("#app-tasks-btn").addEventListener("click",(function(e){e.preventDefault(),document.querySelector("#content").innerHTML=_,U("taskField","currentPage"),V(D("currentUser"))})),document.querySelector("#app-profile-btn").addEventListener("click",(function(e){e.preventDefault(),document.querySelector("#content").innerHTML=S,U("profile","currentPage"),X()})),document.querySelector("#app-users-btn").addEventListener("click",(function(e){e.preventDefault(),document.querySelector("#content").innerHTML=w,U("editUsers","currentPage"),G()}));const ie=new class{constructor(){this.currentUser=null}set currentUser(e){this._currentUser=e}get currentUser(){return this._currentUser}},ae=document.querySelector("#app-login-form");let se=document.querySelector("#content");1==function(){let e=D("currentUser");return 0!==e.length?(console.log("Вход пользователя "+e[0]+" из local storage"),ie.currentUser=e[0],C(ie.currentUser),!0):(console.log("Нет входа"),!1)}()?(Z(ie.currentUser),ee(),re(),ne(),"profile"==D("currentPage")?(se.innerHTML=S,X()):"editUsers"==D("currentPage")?(se.innerHTML=w,G()):(se.innerHTML=_,V(ie.currentUser))):(se.innerHTML=y,U("pleaseSignIn","currentPage")),ae.addEventListener("submit",(function(e){e.preventDefault(),localStorage.clear(),function(e){const t=new e("test_user","123"),n=new e("test_user2","123"),o=new e("test_user3","123"),r=new e("admin","123");e.save(t),e.save(n),e.save(o),e.save(r)}(j),function(e){const t=new e("test_user","backlog","Login page issues","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate sunt ut pariatur ex ab alias et facere repellat itaque unde atque, mollitia commodi labore? Perspiciatis iusto quis optio. Iusto!"),n=new e("test_user","backlog","Sprint bugfix","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate sunt ut pariatur ex ab alias et facere repellat itaque unde atque, mollitia commodi labore? Perspiciatis iusto quis optio. Iusto!"),o=new e("test_user","ready","Shop page – performance issues","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate sunt ut pariatur ex ab alias et facere repellat itaque unde atque, mollitia commodi labore? Perspiciatis iusto quis optio. Iusto!"),r=new e("test_user2","backlog","Auth bugfix","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate sunt ut pariatur ex ab alias et facere repellat itaque unde atque, mollitia commodi labore? Perspiciatis iusto quis optio. Iusto!"),i=new e("test_user2","ready","Checkout bugfix","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate sunt ut pariatur ex ab alias et facere repellat itaque unde atque, mollitia commodi labore? Perspiciatis iusto quis optio. Iusto!"),a=new e("test_user2","ready","Shop bug5","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate sunt ut pariatur ex ab alias et facere repellat itaque unde atque, mollitia commodi labore? Perspiciatis iusto quis optio. Iusto!"),s=new e("test_user","backlog","Shop bug1","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate sunt ut pariatur ex ab alias et facere repellat itaque unde atque, mollitia commodi labore? Perspiciatis iusto quis optio. Iusto!"),l=new e("test_user","backlog","Shop bug2","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate sunt ut pariatur ex ab alias et facere repellat itaque unde atque, mollitia commodi labore? Perspiciatis iusto quis optio. Iusto!");e.save(t),e.save(n),e.save(o),e.save(r),e.save(i),e.save(a),e.save(s),e.save(l)}(R);const t=new FormData(ae),n=t.get("login");!function(e,t){const n=new j(e,t);return!!n.hasAccess&&(ie.currentUser=n,C(e),!0)}(n,t.get("password"))?(se.innerHTML+=k,te("Sorry, you've no access to this resource!"),console.log("Неверный логин/пароль"),localStorage.clear(),U("pleaseSignIn","currentPage")):(I(n,"currentUser"),U("taskField","currentPage"),Z(n),ee(),re(),console.log("Вход пользователя "+n+" по Sign in"),se.innerHTML=_,V(n),ne())})),document.querySelector("#app-logout-btn").addEventListener("click",(function(e){e.preventDefault(),Z(),ee(),localStorage.clear(),se.innerHTML=y,U("pleaseSignIn","currentPage")})),window.addEventListener("click",(function(){document.querySelector("#app-menu-cloud").classList.contains("show")?(document.querySelector("#app-nav-arrow").classList.remove("arrow-dwn"),document.querySelector("#app-nav-arrow").classList.add("arrow-up"),document.querySelector("#app-nav-arrow-cloud").classList.remove("hidden")):(document.querySelector("#app-nav-arrow").classList.remove("arrow-up"),document.querySelector("#app-nav-arrow").classList.add("arrow-dwn"),document.querySelector("#app-nav-arrow-cloud").classList.add("hidden"))})),window.addEventListener("click",(function(){null!=document.querySelector("#app-alert")&&document.querySelector("#app-alert").remove()}));const le=function(e){e.preventDefault(),document.querySelector("#content").innerHTML=_,U("taskField","currentPage"),V(D("currentUser"))}})();