/*!
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */
window.CKEditor5=window.CKEditor5||{},window.CKEditor5.editorClassic=function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t,r){e.exports=r(3)("./src/ui.js")},function(e,t,r){e.exports=r(3)("./src/core.js")},function(e,t,r){e.exports=r(3)("./src/utils.js")},function(e,t){e.exports=CKEditor5.dll},function(e,t,r){e.exports=r(3)("./src/engine.js")},function(e,t,r){"use strict";(function(e){var r="object"==typeof e&&e&&e.Object===Object&&e;t.a=r}).call(this,r(9))},function(e,t,r){var o=r(7),n=r(8);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]);var i={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};o(n,i);e.exports=n.locals||{}},function(e,t,r){"use strict";var o,n=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),c=[];function a(e){for(var t=-1,r=0;r<c.length;r++)if(c[r].identifier===e){t=r;break}return t}function s(e,t){for(var r={},o=[],n=0;n<e.length;n++){var i=e[n],s=t.base?i[0]+t.base:i[0],l=r[s]||0,d="".concat(s," ").concat(l);r[s]=l+1;var u=a(d),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(c[u].references++,c[u].updater(f)):c.push({identifier:d,updater:k(f,t),references:1}),o.push(d)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var n=r.nc;n&&(o.nonce=n)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,r,o){var n=r?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,n);else{var i=document.createTextNode(n),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(i,c[t]):e.appendChild(i)}}function b(e,t,r){var o=r.css,n=r.media,i=r.sourceMap;if(n?e.setAttribute("media",n):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,h=0;function k(e,t){var r,o,n;if(t.singleton){var i=h++;r=p||(p=l(t)),o=f.bind(null,r,i,!1),n=f.bind(null,r,i,!0)}else r=l(t),o=b.bind(null,r,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=n());var r=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<r.length;o++){var n=a(r[o]);c[n].references--}for(var i=s(e,t),l=0;l<r.length;l++){var d=a(r[l]);0===c[d].references&&(c[d].updater(),c.splice(d,1))}r=i}}}},function(e,t){e.exports=".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}"},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t,r){"use strict";r.r(t);var o=r(1),n=r(2);var i=function(e){return null!=e&&"object"==typeof e},c=r(5),a="object"==typeof self&&self&&self.Object===Object&&self,s=(c.a||a||Function("return this")()).Symbol,l=Object.prototype,d=l.hasOwnProperty,u=l.toString,f=s?s.toStringTag:void 0;var b=function(e){var t=d.call(e,f),r=e[f];try{e[f]=void 0;var o=!0}catch(e){}var n=u.call(e);return o&&(t?e[f]=r:delete e[f]),n},p=Object.prototype.toString;var h=function(e){return p.call(e)},k=s?s.toStringTag:void 0;var m=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":k&&k in Object(e)?b(e):h(e)};var v=function(e,t){return function(r){return e(t(r))}}(Object.getPrototypeOf,Object),y=Function.prototype,g=Object.prototype,_=y.toString,w=g.hasOwnProperty,j=_.call(Object);var O=function(e){if(!i(e)||"[object Object]"!=m(e))return!1;var t=v(e);if(null===t)return!0;var r=w.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&_.call(r)==j};var x=function(e){return i(e)&&1===e.nodeType&&!O(e)},T=r(0),E=r(4);class C extends o.EditorUI{constructor(e,t){super(e),this.view=t,this._toolbarConfig=Object(T.normalizeToolbarConfig)(e.config.get("toolbar")),this._elementReplacer=new n.ElementReplacer}get element(){return this.view.element}init(e){const t=this.editor,r=this.view,o=t.editing.view,n=r.editable,i=o.document.getRoot();n.name=i.rootName,r.render();const c=n.element;this.setEditableElement(n.name,c),this.focusTracker.add(c),r.editable.bind("isFocused").to(this.focusTracker),o.attachDomRoot(c),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy(),super.destroy()}_initToolbar(){const e=this.editor,t=this.view,r=e.editing.view;t.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),t.stickyPanel.limiterElement=t.element,this._toolbarConfig.viewportTopOffset&&(t.stickyPanel.viewportTopOffset=this._toolbarConfig.viewportTopOffset),t.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),Object(T.enableToolbarKeyboardFocus)({origin:r,originFocusTracker:this.focusTracker,originKeystrokeHandler:e.keystrokes,toolbar:t.toolbar})}_initPlaceholder(){const e=this.editor,t=e.editing.view,r=t.document.getRoot(),o=e.sourceElement,n=e.config.get("placeholder")||o&&"textarea"===o.tagName.toLowerCase()&&o.getAttribute("placeholder");n&&Object(E.enablePlaceholder)({view:t,element:r,text:n,isDirectHost:!1,keepOnFocus:!0})}}r(6);class S extends T.BoxedEditorUIView{constructor(e,t,r={}){super(e),this.stickyPanel=new T.StickyPanelView(e),this.toolbar=new T.ToolbarView(e,{shouldGroupWhenFull:r.shouldToolbarGroupWhenFull}),this.editable=new T.InlineEditableUIView(e,t)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class P extends o.Editor{constructor(e,t){super(t),x(e)&&(this.sourceElement=e),this.model.document.createRoot();const r=!this.config.get("toolbar.shouldNotGroupWhenFull"),n=new S(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:r});this.ui=new C(this,n),Object(o.attachToForm)(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(r=>{const o=new this(e,t);r(o.initPlugins().then(()=>o.ui.init(x(e)?e:null)).then(()=>{if(!x(e)&&t.initialData)throw new n.CKEditorError("editor-create-initial-data",null);const r=t.initialData||function(e){return x(e)?Object(n.getDataFromElement)(e):e}(e);return o.data.init(r)}).then(()=>o.fire("ready")).then(()=>o))})}}Object(n.mix)(P,o.DataApiMixin),Object(n.mix)(P,o.ElementApiMixin);t.default={ClassicEditor:P}}]).default;