!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("Vue"));else if("function"==typeof define&&define.amd)define(["Vue"],t);else{var r="object"==typeof exports?t(require("Vue")):t(e.Vue);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,(function(e){return function(e){function t(t){for(var r,n,i=t[0],a=t[1],u=0,c=[];u<i.length;u++)n=i[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&c.push(o[n][0]),o[n]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(l&&l(t);c.length;)c.shift()()}var r={},n={"app~e2e93592":0},o={"app~e2e93592":0};function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[];n[e]?t.push(n[e]):0!==n[e]&&{"chunk-525b6dc8":1}[e]&&t.push(n[e]=new Promise((function(t,r){for(var o="css/"+({}[e]||e)+"."+{"chunk-525b6dc8":"0d1e7880"}[e]+".css",a=i.p+o,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=(s=u[c]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){var s;if((l=(s=p[c]).getAttribute("data-href"))===o||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete n[e],f.parentNode.removeChild(f),r(i)},f.href=a,document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){n[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=a);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-525b6dc8":"7192db86"}[e]+".js"}(e);var l=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(p);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",l.name="ChunkLoadError",l.type=n,l.request=i,r[1](l)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="test-hel-vue@1.5.1/",i.oe=function(e){throw console.error(e),e};var a=window["helJsonp_test-hel-vue_1692598441863"]=window["helJsonp_test-hel-vue_1692598441863"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;return i(i.s=0)}({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("c8a0"),o=r("8bbf");var i=r("7796");o.config&&(o.config.productionTip=!1),async function(){const e=await r.e("chunk-525b6dc8").then(r.bind(null,"6c72"));Object(i.libReady)("test-hel-vue",e.default),Object(n.a)()&&await r.e("chunk-525b6dc8").then(r.bind(null,"a581"))}().catch(console.error)},7796:function(e,t,r){!function(e,t){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(r){if("default"!==r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})}})),t.default=e,Object.freeze(t)}(t),n=function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */function o(e,r){var n=r||(null===t.getAppPlatform||void 0===t.getAppPlatform?void 0:t.getAppPlatform(e)),o=t.getSharedCache(n).appName2Lib;return o[e]||(o[e]={}),o[e]}var i="4.7.0";r.log("hel-lib-proxy ver ".concat(i));var a=r.getUserEventBus,u=r.helConsts,c=a();function l(e,t){var o=n({},t||{});return o.platform=u.DEFAULT_PLAT,r.getVerLib(e,o)}function p(e,n){var i,a=!0,c="";n&&("string"==typeof n?c=n:(c=n.platform||"",a=null===(i=n.asProxy)||void 0===i||i));var l=o(e,c=c||r.getAppPlatform(e)||u.DEFAULT_PLAT);return"function"==typeof Proxy&&a&&(l=function(e,r,n){return new Proxy(r,{get:function(r,i){var a=String(i);return t.log("[[getLibProxy]] call lib [".concat(e,"] method [").concat(a,"]")),Object.keys(r).length?r[a]:o(e,n)[a]}})}(e,l,c)),r.log("[[ exposeLib ]] libName, libObj",e,l),l}function s(e,o,i){var a=function(e){var r={allowDup:!1,platform:t.helConsts.DEFAULT_PLAT};return n(n({},r),e||{})}(i);r.libReady(e,o,a)}function f(e,t,n){r.appReady(e,t,n)}function d(e,t){return r.getVerApp(e,t)}var v=r.isSubApp;function m(){return!r.isSubApp()}var g=Object.freeze({__proto__:null,VER:i,eventBus:c,getLib:l,exposeLib:p,libReady:s,appReady:f,exposeApp:d,isSubApp:v,isMasterApp:m}),_=t.commonUtil.purify,h=["isMasterApp","isSubApp","eventBus"],y=["appReady","libReady"];function b(e,t){return t&&"object"==typeof t?n({platform:e},_(t)):t}function E(e){var t=function(e,t){var r={};return Object.keys(e).forEach((function(n){var o=e[n];if(h.includes(n))r[n]=o;else if(y.includes(n))r[n]=function(e,t){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];var o=r[0],i=r[1],a=r[2];return e(o,i,b(t,void 0===a?{}:a))}}(o,t);else{var i="exposeLib"===n;r[n]=function(e,t,r){return function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];var i=n[0],a=n[1];return e(i,r&&"string"==typeof a?a||t:b(t,a))}}(o,t,i)}})),r}(g,e);return t.createInstance=E,t}var A=i,S=s,L=p,N=l,O=v,I=m,T=c,C=f,P=d,D={VER:A,libReady:S,exposeLib:L,getLib:N,isSubApp:O,isMasterApp:I,eventBus:T,appReady:C,exposeApp:P,createInstance:E};e.VER=A,e.appReady=C,e.createInstance=E,e.default=D,e.eventBus=T,e.exposeApp=P,e.exposeLib=L,e.getLib=N,e.isMasterApp=I,e.isSubApp=O,e.libReady=S,Object.defineProperty(e,"__esModule",{value:!0})}(t,r("cfe4"))},"8bbf":function(t,r){t.exports=e},c8a0:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return s}));var n,o,i,a,u=(n=l(),o=n.__HEL_ISO_FLAG__,i=n.__MASTER_APP_LOADED__,{isFirstMod:void 0===o,isBeforeCore:void 0===i});void 0===(a=l()).__HEL_ISO_FLAG__&&(a.__HEL_ISO_FLAG__=1);var c=function(){var e=l(),t=e.location,r=e.__HEL_MICRO_SHARED__,n=u.isBeforeCore;if(!u.isFirstMod)return!1;if(n)return!0;var o=function(){var e="";try{throw new Error("codeHost")}catch(r){var t=r.stack.split("\n");e=t[t.length-1]||""}return e.split("//")[1].split("/")[0]}();if(t&&t.host===o)return!0;if(r){var i=r.cacheRoot.appGroupName2platform;if(!Object.keys(i).length)return!0}return!1}();function l(){return window||e}function p(){return c}var s=p}).call(this,r("c8ba"))},c8ba:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},cfe4:function(e,t,r){"use strict";r.r(t),function(e){function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,a,u=[],c=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,"allowLog",(function(){return $e})),r.d(t,"appReady",(function(){return jt})),r.d(t,"commonDataUtil",(function(){return dt})),r.d(t,"commonUtil",(function(){return Be})),r.d(t,"evName",(function(){return Dt})),r.d(t,"getAppMeta",(function(){return it})),r.d(t,"getAppPlatform",(function(){return Nt})),r.d(t,"getAppStyleStr",(function(){return ht})),r.d(t,"getCommonData",(function(){return st})),r.d(t,"getCustomData",(function(){return lt})),r.d(t,"getGlobalThis",(function(){return Ze})),r.d(t,"getHelDebug",(function(){return Je})),r.d(t,"getHelEventBus",(function(){return Ct})),r.d(t,"getPlatform",(function(){return qe})),r.d(t,"getPlatformConfig",(function(){return Lt})),r.d(t,"getSharedCache",(function(){return ze})),r.d(t,"getUserEventBus",(function(){return Pt})),r.d(t,"getVerApp",(function(){return tt})),r.d(t,"getVerExtraCssList",(function(){return bt})),r.d(t,"getVerLib",(function(){return nt})),r.d(t,"getVerLoadStatus",(function(){return vt})),r.d(t,"getVerStyleStrStatus",(function(){return gt})),r.d(t,"getVersion",(function(){return ut})),r.d(t,"helConsts",(function(){return Ye})),r.d(t,"helEvents",(function(){return ke})),r.d(t,"helLoadStatus",(function(){return Ue})),r.d(t,"inectPlatToMod",(function(){return He})),r.d(t,"initPlatformConfig",(function(){return It})),r.d(t,"isSubApp",(function(){return Xe})),r.d(t,"libReady",(function(){return Rt})),r.d(t,"log",(function(){return Qe})),r.d(t,"originInit",(function(){return Tt})),r.d(t,"resetGlobalThis",(function(){return We})),r.d(t,"setAppMeta",(function(){return at})),r.d(t,"setAppPlatform",(function(){return Ot})),r.d(t,"setAppStyleStr",(function(){return yt})),r.d(t,"setCommonData",(function(){return ft})),r.d(t,"setCustomData",(function(){return pt})),r.d(t,"setEmitApp",(function(){return rt})),r.d(t,"setEmitLib",(function(){return ot})),r.d(t,"setGlobalThis",(function(){return et})),r.d(t,"setVerExtraCssList",(function(){return Et})),r.d(t,"setVerLoadStatus",(function(){return mt})),r.d(t,"setVerStyleStrStatus",(function(){return _t})),r.d(t,"setVersion",(function(){return ct})),r.d(t,"tryGetAppName",(function(){return St})),r.d(t,"tryGetVersion",(function(){return At}));var s=null;function f(){return s||function(){if("undefined"==typeof window){if(void 0===e)throw new Error("unable to locate global object");s=e}else s=window}(),s}function d(){return f()}function v(e){return Object.keys(e)}function m(){var e=function(){try{var e,t;return(null===(e=f().top)||void 0===e||null===(t=e.location)||void 0===t?void 0:t.search)||""}catch(e){var r,n;return(null===(r=f())||void 0===r||null===(n=r.location)||void 0===n?void 0:n.search)||""}}(),t={};null!=e&&e.startsWith("?")&&e.substring(1).split("&").forEach((function(e){var r=u(e.split("="),2),n=r[0],o=r[1];t[n]=o}));return t}function g(){var e="";try{throw new Error("getJsRunLocation")}catch(r){var t=r.stack.split("\n");e=t[t.length-1]||""}return e}function _(e,t,r,n){h(e,t)[r]=n}function h(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=e[t];return n||(n=r,e[t]=n),n}function y(e,t){Object.keys(t).forEach((function(r){var n=t[r];[null,void 0,""].includes(n)||(e[r]=n)}))}function b(e,t){e.includes(t)||e.push(t)}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.nullValues,n=void 0===r?[null,void 0,""]:r,o=t.emptyObjIsNull,a=void 0===o||o,u=t.emptyArrIsNull,c=void 0===u||u,l=n.includes(e);if(l)return!0;if(Array.isArray(e))return!!c&&0===e.length;if("object"===i(e)){var p=v(e),s=p.length;return!!a&&0===s}return!1}function A(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t}var S=E,L=b,N=v;function O(e,t){var r=t||function(e){return!S(e)},n={};return N(e).forEach((function(t){r(e[t])&&(n[t]=e[t])})),n}function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MULTI",r=e.split("\n"),n=r.length-1,o=r.map((function(e,r){var o;if(!e&&(0===r||r===n))return"";var i=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=e;return e.endsWith("<br/>")?(n=e.substring(0,n.length-5),"".concat(n).concat(t)):"".concat(n).concat(r)},a=(null===(o=e.trimStart)||void 0===o?void 0:o.call(e))||e;return"MULTI"===t?"".concat(i(a,""),"\n"):a=i(a,"\n"," ")})).join("");return o}function T(e){return I(e,"ONE")}function C(e,t,r){e.dataset?e.dataset[t]=r:e.setAttribute("data-".concat(t),r)}function P(e){C(e,"heldisabled","1"),e.disabled=!0}var D=Object.freeze({__proto__:null,noop:A,safeParse:function(e,t,r){if(e&&"string"!=typeof e)return e;try{return JSON.parse(e)||t}catch(e){if(void 0!==t)return t;if(r)throw new Error(r);throw e}},isNull:S,noDupPush:L,okeys:N,merge2List:function(e,t){var r=[];return e.forEach((function(e){return L(r,e)})),t.forEach((function(e){return L(r,e)})),r},purify:O,getObjsVal:function(e,t,r){var n,o=r,i=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=l(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(u)throw i}}}}(e);try{for(i.s();!(n=i.n()).done;){var a=n.value[t];if(![null,void 0,""].includes(a)){o=a;break}}}catch(e){i.e(e)}finally{i.f()}return o},pfstr:I,nbstr:T,nbalert:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=f(),n=T(e),o=r.alert||A;t&&r.location?r.location.port&&o(n):o(n)},setDataset:C,disableNode:P});var R={isIncludeFilter:function(e,t){return t.includes(",")?t.split(",").some((function(t){return e.includes(t)})):e.includes(t)},getLogFilter:function(){return x().logFilter},setLogFilter:function(e){x().logFilter=e},setLogMode:function(e){var t=parseInt(e,10);[1,2].includes(t)&&(x().logMode=t)},getLogMode:function(){return x().logMode}},j={};function w(){if(E(j=d().__HEL_MICRO_DEBUG__)){j={logMode:0,logFilter:"",isInit:!1},d().__HEL_MICRO_DEBUG__=j;try{!function(){if(!x().isInit){x().isInit=!0;var e=m(),t=e.hellog,r=e.hellogf,n=f().localStorage,o=t||(null==n?void 0:n.getItem("HelConfig.logMode"))||0;R.setLogMode(o);var i=r||(null==n?void 0:n.getItem("HelConfig.logFilter"))||"";R.setLogFilter(i)}}()}catch(e){}}else void 0===j.logMode&&(j.logMode=0,j.logFilter="")}function M(){return 0!==R.getLogMode()}function x(){return j}var V="  %c--\x3e HEL LOG:",F="color:#ad4e00;font-weight:600";function G(){if(M()){for(var e=1===R.getLogMode()?console.log:console.trace||console.log,t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];var o=r[0],i=r.slice(1);if("string"!=typeof o)return e.apply(void 0,[V,F].concat(r));var a=R.getLogFilter(),u=["".concat(V," ").concat(o),F].concat(c(i));a?R.isIncludeFilter(o,a)&&e.apply(void 0,c(u)):e.apply(void 0,c(u))}}var K="__default_online_ver__",k={CORE_VER:"4.7.0",DEFAULT_API_PREFIX:"https://unpkg.com",DEFAULT_API_URL:"/openapi/v1/app/info",DEFAULT_ONLINE_VER:K,DEFAULT_USER_LS_KEY:"HelUserRtxName",DEFAULT_PLAT:"unpkg",PLAT_HEL:"hel",PLAT_UNPKG:"unpkg",KEY_CSS_STR:"CSS_STR",KEY_ASSET_CTX:"ASSET_CTX",KEY_STYLE_TAG_ADDED:"STYLE_TAG_ADDED",KEY_CSS_LINK_TAG_ADDED:"CSS_LINK_TAG_ADDED",KEY_IGNORE_CSS_PREFIX_LIST:"IGNORE_CSS_PREFIX_LIST",KEY_IGNORE_STYLE_TAG_KEY:"IGNORE_STYLE_TAG_KEY",KEY_IGNORE_CSS_PREFIX_2_KEYS:"IGNORE_CSS_PREFIX_2_KEYS"},U={SUB_APP_LOADED:"subAppLoaded",SUB_LIB_LOADED:"SubLibLoaded",STYLE_STR_FETCHED:"StyleStrFetched",STYLE_TAG_ADDED:"StyleTagAdded",CSS_LINK_TAG_ADDED:"CssLinkTagAdded"},Y={NOT_LOAD:0,LOADING:1,LOADED:2},H=k.DEFAULT_API_URL,B=k.DEFAULT_USER_LS_KEY,X=k.PLAT_HEL,W=k.PLAT_UNPKG,q=k.DEFAULT_API_PREFIX,z=k.CORE_VER,J=k.KEY_CSS_LINK_TAG_ADDED,$=k.KEY_STYLE_TAG_ADDED,Q=k.KEY_IGNORE_CSS_PREFIX_LIST,Z=k.KEY_IGNORE_STYLE_TAG_KEY,ee=k.KEY_IGNORE_CSS_PREFIX_2_KEYS;function te(e){return{apiMode:"get",apiPrefix:(e||{}).apiPrefix,apiSuffix:"",apiPathOfApp:H,apiPathOfAppVersion:"",getSubAppAndItsVersionFn:null,onFetchMetaFailed:null,strictMatchVer:!0,getUserName:null,userLsKey:B,shouldUseGray:null,trustAppNames:null,semverApi:null,hook:{}}}function re(e){return o(o({isConfigOverwrite:!1,platform:e,appName2Comp:{},appName2Lib:{},appName2isLibAssigned:{},appName2EmitApp:{},appName2verLoadStatus:{},appName2verEmitLib:{},appName2verEmitApp:{},appName2verStyleStr:{},appName2verStyleFetched:{},appName2verExtraCssList:{},appName2verAppVersion:{},appName2verCustomData:{},appName2app:{},appName2appVersion:{},appName2styleStr:{},appGroupName2firstVer:{},isOriginInitCalled:!1},te()),{},{origin:te({apiPrefix:q})})}function ne(){var e={};return{on:function(t,r){var n=e[t];if(!n){var o=[];e[t]=o,n=o}n.push(r)},emit:function(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];var i=e[t];if(i){var a=i.slice();a.forEach((function(e){return e.apply(void 0,n)}))}},off:function(t,r){var n=e[t];if(n)for(var o=0,i=n.length;o<i;o++){if(n[o]===r){n.splice(o,1);break}}}}}function oe(e){[J,$,Q,Z,ee].forEach((function(t){return h(e,t,function(e){return e===Q?[]:{}}(t))}))}function ie(){var e=ae();if(e){var t=e.cacheRoot;h(t,"appGroupName2platform"),h(t,"common");var r=t.caches;return Object.keys(r).forEach((function(e){var t=r[e];h(t,"appGroupName2firstVer"),h(t,"appName2verExtraCssList"),h(t,"appName2verCustomData"),h(t,"hook"),h(t,"origin",te()),h(t.origin,"hook")})),oe(t.common),void(e.userEventBus||(e.userEventBus=ne()))}oe((e=function(){var e,t=re(W),r=re(X),n={platform:X,platformHint:"the platform value here does not make any sense!",appName2platform:{},appGroupName2platform:{},caches:(e={},a(e,W,t),a(e,X,r),e),common:{}},o=ne(),i=ne();return{ver:z,isStyleObInit:!1,nativeHeadAppend:null,nativeBodyAppend:null,createFeature:g(),eventBus:o,userEventBus:i,cacheRoot:n,unpkgCache:t,helCache:r,dev:{setLogMode:R.setLogMode,setLogFilter:R.setLogFilter}}}()).cacheRoot.common),d().__HEL_MICRO_SHARED__=e}function ae(){return d().__HEL_MICRO_SHARED__}function ue(){return"unpkg"}function ce(e){var t=e||"unpkg",r=le(),n=r.caches[t];if(!n){var o=i(e);if("string"!==o)throw console.error("invalid plaform:",e),new Error("fatal error: platform only can be a string, now it is ".concat(o));var a=re(e);r.caches[t]=a,n=a}return n}function le(){return ae().cacheRoot}var pe={getCustomData:function(e,t,r){var n=r.versionId,o=h(ce(r.platform).appName2verCustomData,e);return h(o,t)[n||K]},getAppMeta:function(e,t){return ce(t).appName2app[e]},setVerLoadStatus:function(e,t,r,n){var o=n||{},i=o.versionId;_(ce(o.platform)[r],e,i||K,t)},getVerLoadStatus:function(e,t,r){var n,o=r||{},i=o.versionId,a=ce(o.platform)[t],u=i||K;return(null===(n=a[e])||void 0===n?void 0:n[u])||Y.NOT_LOAD},ensureOnlineModule:function(e,t,r){if(!e[K]){var n=pe.getAppMeta(t,r),o=e[null==n?void 0:n.online_version];o&&(e[K]=o)}}};function se(e,t){G("[[ core:setEmitApp ]] appName,emitApp:",e,t);var r=t.versionId,n=ce(t.platform),o=n.appName2verEmitApp,i=n.appName2Comp,a=n.appName2EmitApp;h(o,e)[K]||(i[e]=t.Comp,a[e]=t,_(o,e,K,t)),r&&_(o,e,r,t)}var fe=k.KEY_CSS_LINK_TAG_ADDED,de=k.KEY_STYLE_TAG_ADDED,ve=k.KEY_IGNORE_CSS_PREFIX_LIST,me=k.KEY_IGNORE_STYLE_TAG_KEY,ge=k.KEY_IGNORE_CSS_PREFIX_2_KEYS;function _e(e){return h(le().common,e)}function he(e){return le().common[e]}function ye(e,t){var r=_e(e)[t];return void 0!==r?r:null}function be(e,t,r){_e(e)[t]=r}var Ee={setIgnoreCssPrefix:function(e){b(he(ve),e)},setIgnoreStyleTagKey:function(e){Ee.getIgnoreStyleTagMap()[e]=1},getIgnoreStyleTagMap:function(){return he(me)},setIgnoreCssPrefixKey:function(e,t){var r=ye(ge,e);r||be(ge,e,r=[]),b(r,t)},getIgnoreCssPrefixKeys:function(e){return he(ge)[e]||[]},getMatchedIgnoreCssPrefix:function(e){for(var t=he(ve),r="",n=0;n<t.length;n++){var o=t[n];if(e.startsWith(o)){r=o;break}}return r},getIgnoreCssPrefixCssUrlList:function(e){var t=ye(fe,e);return t||be(fe,e,t=[]),t},setIgnoreCssPrefixCssUrl:function(e,t){Ee.getIgnoreCssPrefixCssUrlList(e).push(t)},getStyleTagText:function(e){return ye(de,e)||""},clearStyleTagText:function(e){be(de,e,"")},appendStyleTagText:function(e,t){var r=Ee.getStyleTagText(e);be(de,e,"".concat(r," ").concat(t))}};function Ae(e,t){var r=e.apiMode,n=e.apiPrefix,o=e.apiSuffix,i=e.apiPathOfApp,a=e.apiPathOfAppVersion,u=e.getSubAppAndItsVersionFn,c=e.onFetchMetaFailed,l=e.strictMatchVer,p=e.getUserName,s=e.userLsKey,f=e.shouldUseGray,d=e.getApiPrefix,v=e.trustAppNames,m=e.platform,g=e.origin,_={apiMode:r,apiPrefix:n,apiSuffix:o,apiPathOfApp:i,apiPathOfAppVersion:a,getSubAppAndItsVersionFn:u,onFetchMetaFailed:c,strictMatchVer:l,getUserName:p,userLsKey:s,shouldUseGray:f,getApiPrefix:d,trustAppNames:v,hook:e.hook,platform:m};return t&&(_.origin=g),_}function Se(e){return le().appGroupName2platform[e]||"unpkg"}function Le(e,t){var r=t.customKey,n=h(ce(t.platform).appName2verCustomData,e);return h(n,r)}var Ne=U.STYLE_TAG_ADDED,Oe=U.CSS_LINK_TAG_ADDED;function Ie(){return ae().eventBus}var Te={styleTagAdded:function(e){return"".concat(Ne,"/").concat(e)},cssLinkTagAdded:function(e){return"".concat(Oe,"(").concat(e,")")}};function Ce(e,t,r){var n=(r||{}).appGroupName,o=t.versionId,a=t.appProperties,u=t.platform||r.platform,c=ce(u),l=c.appName2verEmitLib,p=c.appName2Lib,s=c.appName2isLibAssigned,f=pe.getAppMeta(e,u),d=function(e){var t=p[e];t?"object"===i(t)&&0===Object.keys(t).length&&Object.assign(t,a):p[e]=a,s[e]=!0};d(e),n?d(n):f&&d(f.app_group_name),G("[[ core:setEmitLib ]] appMeta:",f),h(l,e)[K]||_(l,e,K,a),o&&_(l,e,o,a)}function Pe(e,t){return ce(t).appName2app[e]}function De(e,t,r){pe.setVerLoadStatus(e,t,"appName2verLoadStatus",r)}function Re(e,t){var r=g();G("[[ core:tryGetVersion ]] may include source > ".concat(r));var n=ce(t).appGroupName2firstVer[e]||"";if(r.includes("https://")||r.includes("http://")){var o=u(r.split("//"),2)[1].split("/");if(n){if("unpkg"===t&&o.some((function(e){return e.includes(n)})))return n;if(o.includes(n))return n;if("static"===o[1]&&"js"===o[2]||"js"===o[1])return n}return"unpkg"===t?o[1].split("@")[1]||n:o[2]||n}return n}function je(e,t){return e===K?t||"":e.includes("_")?e.substring(0,e.length-15):t||""}var we=!1,Me=!1;var xe=k.KEY_ASSET_CTX;function Ve(e,t){if(!t||!["LINK","SCRIPT"].includes(t.tagName))return e(t);var r=t.href,n=t.tagName,o=t.src,i="LINK"===n,a=ye(xe,r||o||"")||{},u=a.platform,c=a.groupName,l=a.name,p=a.ver,s=a.beforeAppend,f=t;if(s){var d=i?"href":"src",v=t.getAttribute(d);f=s({el:t,nativeAppend:e,setAssetUrl:function(e){return t.setAttribute(d,e)},url:v,tagName:n})||t}return u&&function(e,t){var r=t.platform,n=t.groupName,o=t.name,i=t.ver;C(e,"el",t.elName),C(e,"plat",r),C(e,"gname",n),C(e,"name",o),C(e,"ver",i)}(f,{platform:u,groupName:c,name:l,ver:p,elName:i?"HelLink":"HelScript"}),e(f)}var Fe="/* @helstart ".length;function Ge(e,t){var r=e.tagName,n=e.innerText,o=e.href;if(["STYLE","LINK"].includes(r)&&("STYLE"!==r||n))if("STYLE"===r){var i=n.indexOf("/* @helstart ");if(i<0)return;var a=n.indexOf(" @helend */"),u=n.substring(Fe+i,a);if(u){var c=u.trim();C(e,"gname",c),t[c]&&P(e);var l=Ie();Ee.appendStyleTagText(c,n),l.emit(Te.styleTagAdded(c),{nodes:[e]})}}else{(function(e,t){var r=Ie(),n=Ee.getMatchedIgnoreCssPrefix(t);return n&&(Ee.setIgnoreCssPrefixCssUrl(n,t),r.emit(Te.cssLinkTagAdded(n),{nodes:[e]})),n})(e,o)&&P(e)}}function Ke(e,t){var r=e.tagName,n=e.src,o=void 0===n?"":n;if("SCRIPT"!==r)return!1;if(!o.endsWith(".hot-update.js"))return!1;var i=Ee.getMatchedIgnoreCssPrefix(o);if(!i)return!1;var a=Ee.getIgnoreCssPrefixKeys(i);if(!a.length)return!1;var u=!1;return a.forEach((function(e){t[e]&&(!function(e){var t=f();if(t){var r=t.document.head.querySelectorAll('style[data-gname="'.concat(e,'"]'));if(r.length)Ee.clearStyleTagText(e),r.forEach((function(t){P(t),Ee.appendStyleTagText(e,t.innerText)})),Ie().emit(Te.styleTagAdded(e),{nodes:r})}}(e),u=!0)})),u}We(),G("hel-micro-core ver ".concat(k.CORE_VER));var ke=U,Ue=Y,Ye=k,He=function e(t,r,n){var a=n||{},u=a.ignoreKeys,c=void 0===u?[]:u,l=a.arg1PlatObjFnKeys,p=void 0===l?[]:l,s={};return Object.keys(r).forEach((function(a){var u=r[a];if(c.includes(a))s[a]=u;else{var l=i(u);s[a]=l&&"object"===l?e(t,u,n):"function"!==l?u:function(e,t){var r=this,n=t.fn,i=t.fnName,a=t.arg1PlatObjFnKeys.includes(i);return function(){for(var t=function(t){return o({platform:e},O(t||{}))},i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];var l=u[0],p=u[1];return a?u[0]=t(l):u[1]=t(p),n.apply(r,u)}}(t,{arg1PlatObjFnKeys:p,fn:u,fnName:a})}})),s},Be=D,Xe=function(){return"more details see: https://tnfe.github.io/hel/docs/tutorial/attention-is-subapp",console.log("%c".concat("WARNING: calling isSubApp is unsafe, use hel-iso.isSubApp instead,\nmore details see: https://tnfe.github.io/hel/docs/tutorial/attention-is-subapp"),"color:red;"),!we};function We(e){e&&et(e),function(e){if(e&&(we=!1,Me=!1),!Me){Me=!0;var t=f();void 0===t.__MASTER_APP_LOADED__&&(t.__MASTER_APP_LOADED__=!0,we=!0)}}(!!e),ie(),w(),function(){var e=ae(),t=f().document,r=e.nativeHeadAppend,n=e.nativeBodyAppend;if(!r&&t){var o=t.head,i=t.body;r=o.appendChild.bind(o),n=i.appendChild.bind(i),e.nativeHeadAppend=r,e.nativeBodyAppend=n,t.head.appendChild=function(e){return Ve(r,e)},t.body.appendChild=function(e){return Ve(n,e)}}}(),function(){var e=ae(),t=f(),r=e.isStyleObInit,n=t.document;if(!r&&n){e.isStyleObInit=!0;var o=Ee.getIgnoreStyleTagMap(),i=t.MutationObserver||t.WebKitMutationObserver||t.MozMutationObserver;if(i)new i((function(e){e.forEach((function(e){for(var t=e.addedNodes,r=e.removedNodes,n=t.length,i=0;i<n;i++)Ge(t[i],o);for(var a=r.length,u=0;u<a&&!Ke(r[u],o);u++);}))})).observe(document.head,{childList:!0})}}()}var qe=ue,ze=ce,Je=x,$e=M,Qe=G,Ze=f,et=function(e){var t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=null;null!==(t=s)&&void 0!==t&&t.__HEL_MICRO_SHARED__&&(n=s.__HEL_MICRO_SHARED__),s=r?o(o({},s),e):e,n&&(s.__HEL_MICRO_SHARED__=n)},tt=function(e,t){var r,n=t||{},o=n.versionId,i=n.platform,a=ce(i),u=a.appName2verEmitApp,c=a.appName2Comp,l=a.strictMatchVer,p=a.appName2EmitApp,s=null!==(r=n.strictMatchVer)&&void 0!==r?r:l,f=h(u,e);pe.ensureOnlineModule(f,e,i);var d=f[o||K],v=c[e],m=v?{Comp:v}:null,g=s?null:p[e]||m,_=d||g||null;return G("[[ core:getVerApp ]] appName,options,result:",e,n,_),_},rt=se,nt=function(e,t){var r,n=t||{},o=n.versionId,i=ce(n.platform),a=i.appName2verEmitLib,u=i.appName2Lib,c=i.strictMatchVer,l=i.appName2isLibAssigned,p=null!==(r=n.strictMatchVer)&&void 0!==r?r:c,s=h(a,e);pe.ensureOnlineModule(s,e);var f=s[o||K],d=l[e]?u[e]:null,v=f||(p?null:d)||null;return G("[[ core:getVerLib ]] appName,options,result:",e,n,v),v},ot=Ce,it=Pe,at=function(e,t){ce(t).appName2app[e.name]=e},ut=function(e,t){var r,n=t||{},o=n.platform,i=n.versionId,a=ce(o),u=a.appName2verAppVersion,c=a.appName2appVersion[e]||null;return i&&(null===(r=u[e])||void 0===r?void 0:r[i])||c},ct=function(e,t,r){var n=(r||{}).platform,o=ce(n),i=o.appName2verAppVersion,a=o.appGroupName2firstVer,u=o.appName2appVersion,c=t.sub_app_version;if(c){var l=pe.getAppMeta(e,n);h(i,e)[K]||(_(i,e,K,t),u[e]=t),_(i,e,c,t),a[l.app_group_name]=c}},lt=function(e,t){var r=Le(e,t)[t.versionId||K];return void 0!==r?r:null},pt=function(e,t){var r=t.customValue,n=t.versionId;Le(e,t)[n||K]=r},st=ye,ft=be,dt=Ee,vt=function(e,t){return pe.getVerLoadStatus(e,"appName2verLoadStatus",t)},mt=De,gt=function(e,t){return pe.getVerLoadStatus(e,"appName2verStyleFetched",t)},_t=function(e,t,r){pe.setVerLoadStatus(e,t,"appName2verStyleFetched",r)},ht=function(e,t){var r,n=t||{},o=n.platform,i=n.versionId,a=ce(o),u=a.appName2verStyleStr,c=a.appName2styleStr[e]||"";return i?(null===(r=u[e])||void 0===r?void 0:r[i])||c||"":c},yt=function(e,t,r){var n=r||{},o=n.platform,i=n.versionId,a=ce(o),u=a.appName2verStyleStr,c=a.appName2verStyleFetched,l=a.appName2styleStr;i?(_(u,e,i,t),_(c,e,i,Y.LOADED)):l[e]=t},bt=function(e,t){var r=t||{},n=r.versionId,o=h(ce(r.platform).appName2verExtraCssList,e),i=o[n]||o[K]||[];return G("[[ core:getVerExtraCssList ]] options,cssList:",r,i),i},Et=function(e,t,r){var n=r||{},o=n.versionId,i=ce(n.platform).appName2verExtraCssList;G("[[ core:setVerExtraCssList ]] cssList:",t),h(i,e)[K]||_(i,e,K,t),o&&_(i,e,o,t)},At=Re,St=je,Lt=function(e){return Ae(ce(e),!0)},Nt=Se,Ot=function(e,t){return le().appGroupName2platform[e]=t,Se(e)},It=function(e,t){var r=ce(t),n=Ae(e);r.isConfigOverwrite||(r.isConfigOverwrite=!0,y(r,n))},Tt=function(e,t){var r=ce(e),n="[[ core:originInit ]] invalid call, it can only been called";if(r.isConfigOverwrite)G("".concat(n," before init"));else if(r.isOriginInitCalled)G("".concat(n," one time"));else{var o=Ae(t);r.isOriginInitCalled=!0,y(r.origin,o)}},Ct=Ie,Pt=function(){return ae().userEventBus},Dt=Te,Rt=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.platform||Se(e),o=r.versionId||Re(e,n),i=r.appName||je(o,e),a=Pe(i,n);null!=a&&a.__fromCust&&(o=r.versionId||a.online_version,i=a.name);var u={platform:n,appName:i,appGroupName:e,versionId:o,appProperties:t,Comp:function(){},lifecycle:{}};Ce(i,u,{appGroupName:e,platform:n}),De(i,Y.LOADED,{versionId:o,platform:n});var c=Ie();c.emit(U.SUB_LIB_LOADED,u)},jt=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.lifecycle,o=r.platform||Se(e),i=r.versionId||Re(e,o),a=r.appName||je(i,e),u={Comp:t,appName:a,appGroupName:e,lifecycle:n,platform:o,versionId:i,isLib:!1};se(a,u),De(a,Y.LOADED,{versionId:i,platform:o});var c=Ie();c.emit(U.SUB_APP_LOADED,u)}}.call(this,r("c8ba"))}})}));
//# sourceMappingURL=app~e2e93592.1f1f150f.js.map