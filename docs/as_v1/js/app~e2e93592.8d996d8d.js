!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("Vue"));else if("function"==typeof define&&define.amd)define(["Vue"],t);else{var n="object"==typeof exports?t(require("Vue")):t(e.Vue);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(window,(function(e){return function(e){function t(t){for(var n,r,i=t[0],a=t[1],u=0,c=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&c.push(o[r][0]),o[r]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(l&&l(t);c.length;)c.shift()()}var n={},r={"app~e2e93592":0},o={"app~e2e93592":0};function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[];r[e]?t.push(r[e]):0!==r[e]&&{"chunk-4926f535":1}[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-4926f535":"2fd41802"}[e]+".css",a=i.p+o,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var l=(f=u[c]).getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(l===o||l===a))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){var f;if((l=(f=p[c]).getAttribute("data-href"))===o||l===a)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],s.parentNode.removeChild(s),n(i)},s.href=a,document.getElementsByTagName("head")[0].appendChild(s)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=a);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-4926f535":"eadabc40"}[e]+".js"}(e);var l=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://chengked.github.io/as_v1/test-hel-vue@1.5.0/hel_dist/",i.oe=function(e){throw console.error(e),e};var a=window["helJsonp_test-hel-vue_1692260268271"]=window["helJsonp_test-hel-vue_1692260268271"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var l=u;return i(i.s=0)}({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("c8a0"),o=n("8bbf");var i=n("7796");o.config&&(o.config.productionTip=!1),async function(){const e=await n.e("chunk-4926f535").then(n.bind(null,"6c72"));Object(i.libReady)("test-hel-vue",e.default),Object(r.a)()&&await n.e("chunk-4926f535").then(n.bind(null,"a581"))}().catch(console.error)},7796:function(e,t,n){!function(e,t){"use strict";var n=function(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}(t),r=function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};
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
    ***************************************************************************** */function o(e,n){var r=n||(null===t.getAppPlatform||void 0===t.getAppPlatform?void 0:t.getAppPlatform(e)),o=t.getSharedCache(r).appName2Lib;return o[e]||(o[e]={}),o[e]}var i="4.7.0";n.log("hel-lib-proxy ver ".concat(i));var a=n.getUserEventBus,u=n.helConsts,c=a();function l(e,t){var o=r({},t||{});return o.platform=u.DEFAULT_PLAT,n.getVerLib(e,o)}function p(e,r){var i,a=!0,c="";r&&("string"==typeof r?c=r:(c=r.platform||"",a=null===(i=r.asProxy)||void 0===i||i));var l=o(e,c=c||n.getAppPlatform(e)||u.DEFAULT_PLAT);return"function"==typeof Proxy&&a&&(l=function(e,n,r){return new Proxy(n,{get:function(n,i){var a=String(i);return t.log("[[getLibProxy]] call lib [".concat(e,"] method [").concat(a,"]")),Object.keys(n).length?n[a]:o(e,r)[a]}})}(e,l,c)),n.log("[[ exposeLib ]] libName, libObj",e,l),l}function f(e,o,i){var a=function(e){var n={allowDup:!1,platform:t.helConsts.DEFAULT_PLAT};return r(r({},n),e||{})}(i);n.libReady(e,o,a)}function s(e,t,r){n.appReady(e,t,r)}function d(e,t){return n.getVerApp(e,t)}var v=n.isSubApp;function m(){return!n.isSubApp()}var g=Object.freeze({__proto__:null,VER:i,eventBus:c,getLib:l,exposeLib:p,libReady:f,appReady:s,exposeApp:d,isSubApp:v,isMasterApp:m}),_=t.commonUtil.purify,h=["isMasterApp","isSubApp","eventBus"],y=["appReady","libReady"];function b(e,t){return t&&"object"==typeof t?r({platform:e},_(t)):t}function E(e){var t=function(e,t){var n={};return Object.keys(e).forEach((function(r){var o=e[r];if(h.includes(r))n[r]=o;else if(y.includes(r))n[r]=function(e,t){return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];var o=n[0],i=n[1],a=n[2];return e(o,i,b(t,void 0===a?{}:a))}}(o,t);else{var i="exposeLib"===r;n[r]=function(e,t,n){return function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];var i=r[0],a=r[1];return e(i,n&&"string"==typeof a?a||t:b(t,a))}}(o,t,i)}})),n}(g,e);return t.createInstance=E,t}var A=i,S=f,L=p,N=l,O=v,I=m,T=c,C=s,P=d,D={VER:A,libReady:S,exposeLib:L,getLib:N,isSubApp:O,isMasterApp:I,eventBus:T,appReady:C,exposeApp:P,createInstance:E};e.VER=A,e.appReady=C,e.createInstance=E,e.default=D,e.eventBus=T,e.exposeApp=P,e.exposeLib=L,e.getLib=N,e.isMasterApp=I,e.isSubApp=O,e.libReady=S,Object.defineProperty(e,"__esModule",{value:!0})}(t,n("cfe4"))},"8bbf":function(t,n){t.exports=e},c8a0:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return f}));var r,o,i,a,u=(r=l(),o=r.__HEL_ISO_FLAG__,i=r.__MASTER_APP_LOADED__,{isFirstMod:void 0===o,isBeforeCore:void 0===i});void 0===(a=l()).__HEL_ISO_FLAG__&&(a.__HEL_ISO_FLAG__=1);var c=function(){var e=l(),t=e.location,n=e.__HEL_MICRO_SHARED__,r=u.isBeforeCore;if(!u.isFirstMod)return!1;if(r)return!0;var o=function(){var e="";try{throw new Error("codeHost")}catch(n){var t=n.stack.split("\n");e=t[t.length-1]||""}return e.split("//")[1].split("/")[0]}();if(t&&t.host===o)return!0;if(n){var i=n.cacheRoot.appGroupName2platform;if(!Object.keys(i).length)return!0}return!1}();function l(){return window||e}function p(){return c}var f=p}).call(this,n("c8ba"))},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},cfe4:function(e,t,n){"use strict";n.r(t),function(e){function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,u=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(u.push(r.value),u.length!==t);c=!0);}catch(e){l=!0,o=e}finally{try{if(!c&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return u}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,"allowLog",(function(){return $e})),n.d(t,"appReady",(function(){return jt})),n.d(t,"commonDataUtil",(function(){return dt})),n.d(t,"commonUtil",(function(){return Be})),n.d(t,"evName",(function(){return Dt})),n.d(t,"getAppMeta",(function(){return it})),n.d(t,"getAppPlatform",(function(){return Nt})),n.d(t,"getAppStyleStr",(function(){return ht})),n.d(t,"getCommonData",(function(){return ft})),n.d(t,"getCustomData",(function(){return lt})),n.d(t,"getGlobalThis",(function(){return Ze})),n.d(t,"getHelDebug",(function(){return Je})),n.d(t,"getHelEventBus",(function(){return Ct})),n.d(t,"getPlatform",(function(){return qe})),n.d(t,"getPlatformConfig",(function(){return Lt})),n.d(t,"getSharedCache",(function(){return ze})),n.d(t,"getUserEventBus",(function(){return Pt})),n.d(t,"getVerApp",(function(){return tt})),n.d(t,"getVerExtraCssList",(function(){return bt})),n.d(t,"getVerLib",(function(){return rt})),n.d(t,"getVerLoadStatus",(function(){return vt})),n.d(t,"getVerStyleStrStatus",(function(){return gt})),n.d(t,"getVersion",(function(){return ut})),n.d(t,"helConsts",(function(){return Ye})),n.d(t,"helEvents",(function(){return ke})),n.d(t,"helLoadStatus",(function(){return Ue})),n.d(t,"inectPlatToMod",(function(){return He})),n.d(t,"initPlatformConfig",(function(){return It})),n.d(t,"isSubApp",(function(){return Xe})),n.d(t,"libReady",(function(){return Rt})),n.d(t,"log",(function(){return Qe})),n.d(t,"originInit",(function(){return Tt})),n.d(t,"resetGlobalThis",(function(){return We})),n.d(t,"setAppMeta",(function(){return at})),n.d(t,"setAppPlatform",(function(){return Ot})),n.d(t,"setAppStyleStr",(function(){return yt})),n.d(t,"setCommonData",(function(){return st})),n.d(t,"setCustomData",(function(){return pt})),n.d(t,"setEmitApp",(function(){return nt})),n.d(t,"setEmitLib",(function(){return ot})),n.d(t,"setGlobalThis",(function(){return et})),n.d(t,"setVerExtraCssList",(function(){return Et})),n.d(t,"setVerLoadStatus",(function(){return mt})),n.d(t,"setVerStyleStrStatus",(function(){return _t})),n.d(t,"setVersion",(function(){return ct})),n.d(t,"tryGetAppName",(function(){return St})),n.d(t,"tryGetVersion",(function(){return At}));var f=null;function s(){return f||function(){if("undefined"==typeof window){if(void 0===e)throw new Error("unable to locate global object");f=e}else f=window}(),f}function d(){return s()}function v(e){return Object.keys(e)}function m(){var e=function(){try{var e,t;return(null===(e=s().top)||void 0===e||null===(t=e.location)||void 0===t?void 0:t.search)||""}catch(e){var n,r;return(null===(n=s())||void 0===n||null===(r=n.location)||void 0===r?void 0:r.search)||""}}(),t={};null!=e&&e.startsWith("?")&&e.substring(1).split("&").forEach((function(e){var n=u(e.split("="),2),r=n[0],o=n[1];t[r]=o}));return t}function g(){var e="";try{throw new Error("getJsRunLocation")}catch(n){var t=n.stack.split("\n");e=t[t.length-1]||""}return e}function _(e,t,n,r){h(e,t)[n]=r}function h(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=e[t];return r||(r=n,e[t]=r),r}function y(e,t){Object.keys(t).forEach((function(n){var r=t[n];[null,void 0,""].includes(r)||(e[n]=r)}))}function b(e,t){e.includes(t)||e.push(t)}function E(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.nullValues,r=void 0===n?[null,void 0,""]:n,o=t.emptyObjIsNull,a=void 0===o||o,u=t.emptyArrIsNull,c=void 0===u||u,l=r.includes(e);if(l)return!0;if(Array.isArray(e))return!!c&&0===e.length;if("object"===i(e)){var p=v(e),f=p.length;return!!a&&0===f}return!1}function A(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t}var S=E,L=b,N=v;function O(e,t){var n=t||function(e){return!S(e)},r={};return N(e).forEach((function(t){n(e[t])&&(r[t]=e[t])})),r}function I(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MULTI",n=e.split("\n"),r=n.length-1,o=n.map((function(e,n){var o;if(!e&&(0===n||n===r))return"";var i=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=e;return e.endsWith("<br/>")?(r=e.substring(0,r.length-5),"".concat(r).concat(t)):"".concat(r).concat(n)},a=(null===(o=e.trimStart)||void 0===o?void 0:o.call(e))||e;return"MULTI"===t?"".concat(i(a,""),"\n"):a=i(a,"\n"," ")})).join("");return o}function T(e){return I(e,"ONE")}function C(e,t,n){e.dataset?e.dataset[t]=n:e.setAttribute("data-".concat(t),n)}function P(e){C(e,"heldisabled","1"),e.disabled=!0}var D=Object.freeze({__proto__:null,noop:A,safeParse:function(e,t,n){if(e&&"string"!=typeof e)return e;try{return JSON.parse(e)||t}catch(e){if(void 0!==t)return t;if(n)throw new Error(n);throw e}},isNull:S,noDupPush:L,okeys:N,merge2List:function(e,t){var n=[];return e.forEach((function(e){return L(n,e)})),t.forEach((function(e){return L(n,e)})),n},purify:O,getObjsVal:function(e,t,n){var r,o=n,i=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=l(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(u)throw i}}}}(e);try{for(i.s();!(r=i.n()).done;){var a=r.value[t];if(![null,void 0,""].includes(a)){o=a;break}}}catch(e){i.e(e)}finally{i.f()}return o},pfstr:I,nbstr:T,nbalert:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=s(),r=T(e),o=n.alert||A;t&&n.location?n.location.port&&o(r):o(r)},setDataset:C,disableNode:P});var R={isIncludeFilter:function(e,t){return t.includes(",")?t.split(",").some((function(t){return e.includes(t)})):e.includes(t)},getLogFilter:function(){return x().logFilter},setLogFilter:function(e){x().logFilter=e},setLogMode:function(e){var t=parseInt(e,10);[1,2].includes(t)&&(x().logMode=t)},getLogMode:function(){return x().logMode}},j={};function w(){if(E(j=d().__HEL_MICRO_DEBUG__)){j={logMode:0,logFilter:"",isInit:!1},d().__HEL_MICRO_DEBUG__=j;try{!function(){if(!x().isInit){x().isInit=!0;var e=m(),t=e.hellog,n=e.hellogf,r=s().localStorage,o=t||(null==r?void 0:r.getItem("HelConfig.logMode"))||0;R.setLogMode(o);var i=n||(null==r?void 0:r.getItem("HelConfig.logFilter"))||"";R.setLogFilter(i)}}()}catch(e){}}else void 0===j.logMode&&(j.logMode=0,j.logFilter="")}function M(){return 0!==R.getLogMode()}function x(){return j}var V="  %c--\x3e HEL LOG:",F="color:#ad4e00;font-weight:600";function G(){if(M()){for(var e=1===R.getLogMode()?console.log:console.trace||console.log,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var o=n[0],i=n.slice(1);if("string"!=typeof o)return e.apply(void 0,[V,F].concat(n));var a=R.getLogFilter(),u=["".concat(V," ").concat(o),F].concat(c(i));a?R.isIncludeFilter(o,a)&&e.apply(void 0,c(u)):e.apply(void 0,c(u))}}var K="__default_online_ver__",k={CORE_VER:"4.7.0",DEFAULT_API_PREFIX:"https://unpkg.com",DEFAULT_API_URL:"/openapi/v1/app/info",DEFAULT_ONLINE_VER:K,DEFAULT_USER_LS_KEY:"HelUserRtxName",DEFAULT_PLAT:"unpkg",PLAT_HEL:"hel",PLAT_UNPKG:"unpkg",KEY_CSS_STR:"CSS_STR",KEY_ASSET_CTX:"ASSET_CTX",KEY_STYLE_TAG_ADDED:"STYLE_TAG_ADDED",KEY_CSS_LINK_TAG_ADDED:"CSS_LINK_TAG_ADDED",KEY_IGNORE_CSS_PREFIX_LIST:"IGNORE_CSS_PREFIX_LIST",KEY_IGNORE_STYLE_TAG_KEY:"IGNORE_STYLE_TAG_KEY",KEY_IGNORE_CSS_PREFIX_2_KEYS:"IGNORE_CSS_PREFIX_2_KEYS"},U={SUB_APP_LOADED:"subAppLoaded",SUB_LIB_LOADED:"SubLibLoaded",STYLE_STR_FETCHED:"StyleStrFetched",STYLE_TAG_ADDED:"StyleTagAdded",CSS_LINK_TAG_ADDED:"CssLinkTagAdded"},Y={NOT_LOAD:0,LOADING:1,LOADED:2},H=k.DEFAULT_API_URL,B=k.DEFAULT_USER_LS_KEY,X=k.PLAT_HEL,W=k.PLAT_UNPKG,q=k.DEFAULT_API_PREFIX,z=k.CORE_VER,J=k.KEY_CSS_LINK_TAG_ADDED,$=k.KEY_STYLE_TAG_ADDED,Q=k.KEY_IGNORE_CSS_PREFIX_LIST,Z=k.KEY_IGNORE_STYLE_TAG_KEY,ee=k.KEY_IGNORE_CSS_PREFIX_2_KEYS;function te(e){return{apiMode:"get",apiPrefix:(e||{}).apiPrefix,apiSuffix:"",apiPathOfApp:H,apiPathOfAppVersion:"",getSubAppAndItsVersionFn:null,onFetchMetaFailed:null,strictMatchVer:!0,getUserName:null,userLsKey:B,shouldUseGray:null,trustAppNames:null,semverApi:null,hook:{}}}function ne(e){return o(o({isConfigOverwrite:!1,platform:e,appName2Comp:{},appName2Lib:{},appName2isLibAssigned:{},appName2EmitApp:{},appName2verLoadStatus:{},appName2verEmitLib:{},appName2verEmitApp:{},appName2verStyleStr:{},appName2verStyleFetched:{},appName2verExtraCssList:{},appName2verAppVersion:{},appName2verCustomData:{},appName2app:{},appName2appVersion:{},appName2styleStr:{},appGroupName2firstVer:{},isOriginInitCalled:!1},te()),{},{origin:te({apiPrefix:q})})}function re(){var e={};return{on:function(t,n){var r=e[t];if(!r){var o=[];e[t]=o,r=o}r.push(n)},emit:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];var i=e[t];if(i){var a=i.slice();a.forEach((function(e){return e.apply(void 0,r)}))}},off:function(t,n){var r=e[t];if(r)for(var o=0,i=r.length;o<i;o++){if(r[o]===n){r.splice(o,1);break}}}}}function oe(e){[J,$,Q,Z,ee].forEach((function(t){return h(e,t,function(e){return e===Q?[]:{}}(t))}))}function ie(){var e=ae();if(e){var t=e.cacheRoot;h(t,"appGroupName2platform"),h(t,"common");var n=t.caches;return Object.keys(n).forEach((function(e){var t=n[e];h(t,"appGroupName2firstVer"),h(t,"appName2verExtraCssList"),h(t,"appName2verCustomData"),h(t,"hook"),h(t,"origin",te()),h(t.origin,"hook")})),oe(t.common),void(e.userEventBus||(e.userEventBus=re()))}oe((e=function(){var e,t=ne(W),n=ne(X),r={platform:X,platformHint:"the platform value here does not make any sense!",appName2platform:{},appGroupName2platform:{},caches:(e={},a(e,W,t),a(e,X,n),e),common:{}},o=re(),i=re();return{ver:z,isStyleObInit:!1,nativeHeadAppend:null,nativeBodyAppend:null,createFeature:g(),eventBus:o,userEventBus:i,cacheRoot:r,unpkgCache:t,helCache:n,dev:{setLogMode:R.setLogMode,setLogFilter:R.setLogFilter}}}()).cacheRoot.common),d().__HEL_MICRO_SHARED__=e}function ae(){return d().__HEL_MICRO_SHARED__}function ue(){return"unpkg"}function ce(e){var t=e||"unpkg",n=le(),r=n.caches[t];if(!r){var o=i(e);if("string"!==o)throw console.error("invalid plaform:",e),new Error("fatal error: platform only can be a string, now it is ".concat(o));var a=ne(e);n.caches[t]=a,r=a}return r}function le(){return ae().cacheRoot}var pe={getCustomData:function(e,t,n){var r=n.versionId,o=h(ce(n.platform).appName2verCustomData,e);return h(o,t)[r||K]},getAppMeta:function(e,t){return ce(t).appName2app[e]},setVerLoadStatus:function(e,t,n,r){var o=r||{},i=o.versionId;_(ce(o.platform)[n],e,i||K,t)},getVerLoadStatus:function(e,t,n){var r,o=n||{},i=o.versionId,a=ce(o.platform)[t],u=i||K;return(null===(r=a[e])||void 0===r?void 0:r[u])||Y.NOT_LOAD},ensureOnlineModule:function(e,t,n){if(!e[K]){var r=pe.getAppMeta(t,n),o=e[null==r?void 0:r.online_version];o&&(e[K]=o)}}};function fe(e,t){G("[[ core:setEmitApp ]] appName,emitApp:",e,t);var n=t.versionId,r=ce(t.platform),o=r.appName2verEmitApp,i=r.appName2Comp,a=r.appName2EmitApp;h(o,e)[K]||(i[e]=t.Comp,a[e]=t,_(o,e,K,t)),n&&_(o,e,n,t)}var se=k.KEY_CSS_LINK_TAG_ADDED,de=k.KEY_STYLE_TAG_ADDED,ve=k.KEY_IGNORE_CSS_PREFIX_LIST,me=k.KEY_IGNORE_STYLE_TAG_KEY,ge=k.KEY_IGNORE_CSS_PREFIX_2_KEYS;function _e(e){return h(le().common,e)}function he(e){return le().common[e]}function ye(e,t){var n=_e(e)[t];return void 0!==n?n:null}function be(e,t,n){_e(e)[t]=n}var Ee={setIgnoreCssPrefix:function(e){b(he(ve),e)},setIgnoreStyleTagKey:function(e){Ee.getIgnoreStyleTagMap()[e]=1},getIgnoreStyleTagMap:function(){return he(me)},setIgnoreCssPrefixKey:function(e,t){var n=ye(ge,e);n||be(ge,e,n=[]),b(n,t)},getIgnoreCssPrefixKeys:function(e){return he(ge)[e]||[]},getMatchedIgnoreCssPrefix:function(e){for(var t=he(ve),n="",r=0;r<t.length;r++){var o=t[r];if(e.startsWith(o)){n=o;break}}return n},getIgnoreCssPrefixCssUrlList:function(e){var t=ye(se,e);return t||be(se,e,t=[]),t},setIgnoreCssPrefixCssUrl:function(e,t){Ee.getIgnoreCssPrefixCssUrlList(e).push(t)},getStyleTagText:function(e){return ye(de,e)||""},clearStyleTagText:function(e){be(de,e,"")},appendStyleTagText:function(e,t){var n=Ee.getStyleTagText(e);be(de,e,"".concat(n," ").concat(t))}};function Ae(e,t){var n=e.apiMode,r=e.apiPrefix,o=e.apiSuffix,i=e.apiPathOfApp,a=e.apiPathOfAppVersion,u=e.getSubAppAndItsVersionFn,c=e.onFetchMetaFailed,l=e.strictMatchVer,p=e.getUserName,f=e.userLsKey,s=e.shouldUseGray,d=e.getApiPrefix,v=e.trustAppNames,m=e.platform,g=e.origin,_={apiMode:n,apiPrefix:r,apiSuffix:o,apiPathOfApp:i,apiPathOfAppVersion:a,getSubAppAndItsVersionFn:u,onFetchMetaFailed:c,strictMatchVer:l,getUserName:p,userLsKey:f,shouldUseGray:s,getApiPrefix:d,trustAppNames:v,hook:e.hook,platform:m};return t&&(_.origin=g),_}function Se(e){return le().appGroupName2platform[e]||"unpkg"}function Le(e,t){var n=t.customKey,r=h(ce(t.platform).appName2verCustomData,e);return h(r,n)}var Ne=U.STYLE_TAG_ADDED,Oe=U.CSS_LINK_TAG_ADDED;function Ie(){return ae().eventBus}var Te={styleTagAdded:function(e){return"".concat(Ne,"/").concat(e)},cssLinkTagAdded:function(e){return"".concat(Oe,"(").concat(e,")")}};function Ce(e,t,n){var r=(n||{}).appGroupName,o=t.versionId,a=t.appProperties,u=t.platform||n.platform,c=ce(u),l=c.appName2verEmitLib,p=c.appName2Lib,f=c.appName2isLibAssigned,s=pe.getAppMeta(e,u),d=function(e){var t=p[e];t?"object"===i(t)&&0===Object.keys(t).length&&Object.assign(t,a):p[e]=a,f[e]=!0};d(e),r?d(r):s&&d(s.app_group_name),G("[[ core:setEmitLib ]] appMeta:",s),h(l,e)[K]||_(l,e,K,a),o&&_(l,e,o,a)}function Pe(e,t){return ce(t).appName2app[e]}function De(e,t,n){pe.setVerLoadStatus(e,t,"appName2verLoadStatus",n)}function Re(e,t){var n=g();G("[[ core:tryGetVersion ]] may include source > ".concat(n));var r=ce(t).appGroupName2firstVer[e]||"";if(n.includes("https://")||n.includes("http://")){var o=u(n.split("//"),2)[1].split("/");if(r){if("unpkg"===t&&o.some((function(e){return e.includes(r)})))return r;if(o.includes(r))return r;if("static"===o[1]&&"js"===o[2]||"js"===o[1])return r}return"unpkg"===t?o[1].split("@")[1]||r:o[2]||r}return r}function je(e,t){return e===K?t||"":e.includes("_")?e.substring(0,e.length-15):t||""}var we=!1,Me=!1;var xe=k.KEY_ASSET_CTX;function Ve(e,t){if(!t||!["LINK","SCRIPT"].includes(t.tagName))return e(t);var n=t.href,r=t.tagName,o=t.src,i="LINK"===r,a=ye(xe,n||o||"")||{},u=a.platform,c=a.groupName,l=a.name,p=a.ver,f=a.beforeAppend,s=t;if(f){var d=i?"href":"src",v=t.getAttribute(d);s=f({el:t,nativeAppend:e,setAssetUrl:function(e){return t.setAttribute(d,e)},url:v,tagName:r})||t}return u&&function(e,t){var n=t.platform,r=t.groupName,o=t.name,i=t.ver;C(e,"el",t.elName),C(e,"plat",n),C(e,"gname",r),C(e,"name",o),C(e,"ver",i)}(s,{platform:u,groupName:c,name:l,ver:p,elName:i?"HelLink":"HelScript"}),e(s)}var Fe="/* @helstart ".length;function Ge(e,t){var n=e.tagName,r=e.innerText,o=e.href;if(["STYLE","LINK"].includes(n)&&("STYLE"!==n||r))if("STYLE"===n){var i=r.indexOf("/* @helstart ");if(i<0)return;var a=r.indexOf(" @helend */"),u=r.substring(Fe+i,a);if(u){var c=u.trim();C(e,"gname",c),t[c]&&P(e);var l=Ie();Ee.appendStyleTagText(c,r),l.emit(Te.styleTagAdded(c),{nodes:[e]})}}else{(function(e,t){var n=Ie(),r=Ee.getMatchedIgnoreCssPrefix(t);return r&&(Ee.setIgnoreCssPrefixCssUrl(r,t),n.emit(Te.cssLinkTagAdded(r),{nodes:[e]})),r})(e,o)&&P(e)}}function Ke(e,t){var n=e.tagName,r=e.src,o=void 0===r?"":r;if("SCRIPT"!==n)return!1;if(!o.endsWith(".hot-update.js"))return!1;var i=Ee.getMatchedIgnoreCssPrefix(o);if(!i)return!1;var a=Ee.getIgnoreCssPrefixKeys(i);if(!a.length)return!1;var u=!1;return a.forEach((function(e){t[e]&&(!function(e){var t=s();if(t){var n=t.document.head.querySelectorAll('style[data-gname="'.concat(e,'"]'));if(n.length)Ee.clearStyleTagText(e),n.forEach((function(t){P(t),Ee.appendStyleTagText(e,t.innerText)})),Ie().emit(Te.styleTagAdded(e),{nodes:n})}}(e),u=!0)})),u}We(),G("hel-micro-core ver ".concat(k.CORE_VER));var ke=U,Ue=Y,Ye=k,He=function e(t,n,r){var a=r||{},u=a.ignoreKeys,c=void 0===u?[]:u,l=a.arg1PlatObjFnKeys,p=void 0===l?[]:l,f={};return Object.keys(n).forEach((function(a){var u=n[a];if(c.includes(a))f[a]=u;else{var l=i(u);f[a]=l&&"object"===l?e(t,u,r):"function"!==l?u:function(e,t){var n=this,r=t.fn,i=t.fnName,a=t.arg1PlatObjFnKeys.includes(i);return function(){for(var t=function(t){return o({platform:e},O(t||{}))},i=arguments.length,u=new Array(i),c=0;c<i;c++)u[c]=arguments[c];var l=u[0],p=u[1];return a?u[0]=t(l):u[1]=t(p),r.apply(n,u)}}(t,{arg1PlatObjFnKeys:p,fn:u,fnName:a})}})),f},Be=D,Xe=function(){return"more details see: https://tnfe.github.io/hel/docs/tutorial/attention-is-subapp",console.log("%c".concat("WARNING: calling isSubApp is unsafe, use hel-iso.isSubApp instead,\nmore details see: https://tnfe.github.io/hel/docs/tutorial/attention-is-subapp"),"color:red;"),!we};function We(e){e&&et(e),function(e){if(e&&(we=!1,Me=!1),!Me){Me=!0;var t=s();void 0===t.__MASTER_APP_LOADED__&&(t.__MASTER_APP_LOADED__=!0,we=!0)}}(!!e),ie(),w(),function(){var e=ae(),t=s().document,n=e.nativeHeadAppend,r=e.nativeBodyAppend;if(!n&&t){var o=t.head,i=t.body;n=o.appendChild.bind(o),r=i.appendChild.bind(i),e.nativeHeadAppend=n,e.nativeBodyAppend=r,t.head.appendChild=function(e){return Ve(n,e)},t.body.appendChild=function(e){return Ve(r,e)}}}(),function(){var e=ae(),t=s(),n=e.isStyleObInit,r=t.document;if(!n&&r){e.isStyleObInit=!0;var o=Ee.getIgnoreStyleTagMap(),i=t.MutationObserver||t.WebKitMutationObserver||t.MozMutationObserver;if(i)new i((function(e){e.forEach((function(e){for(var t=e.addedNodes,n=e.removedNodes,r=t.length,i=0;i<r;i++)Ge(t[i],o);for(var a=n.length,u=0;u<a&&!Ke(n[u],o);u++);}))})).observe(document.head,{childList:!0})}}()}var qe=ue,ze=ce,Je=x,$e=M,Qe=G,Ze=s,et=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=null;null!==(t=f)&&void 0!==t&&t.__HEL_MICRO_SHARED__&&(r=f.__HEL_MICRO_SHARED__),f=n?o(o({},f),e):e,r&&(f.__HEL_MICRO_SHARED__=r)},tt=function(e,t){var n,r=t||{},o=r.versionId,i=r.platform,a=ce(i),u=a.appName2verEmitApp,c=a.appName2Comp,l=a.strictMatchVer,p=a.appName2EmitApp,f=null!==(n=r.strictMatchVer)&&void 0!==n?n:l,s=h(u,e);pe.ensureOnlineModule(s,e,i);var d=s[o||K],v=c[e],m=v?{Comp:v}:null,g=f?null:p[e]||m,_=d||g||null;return G("[[ core:getVerApp ]] appName,options,result:",e,r,_),_},nt=fe,rt=function(e,t){var n,r=t||{},o=r.versionId,i=ce(r.platform),a=i.appName2verEmitLib,u=i.appName2Lib,c=i.strictMatchVer,l=i.appName2isLibAssigned,p=null!==(n=r.strictMatchVer)&&void 0!==n?n:c,f=h(a,e);pe.ensureOnlineModule(f,e);var s=f[o||K],d=l[e]?u[e]:null,v=s||(p?null:d)||null;return G("[[ core:getVerLib ]] appName,options,result:",e,r,v),v},ot=Ce,it=Pe,at=function(e,t){ce(t).appName2app[e.name]=e},ut=function(e,t){var n,r=t||{},o=r.platform,i=r.versionId,a=ce(o),u=a.appName2verAppVersion,c=a.appName2appVersion[e]||null;return i&&(null===(n=u[e])||void 0===n?void 0:n[i])||c},ct=function(e,t,n){var r=(n||{}).platform,o=ce(r),i=o.appName2verAppVersion,a=o.appGroupName2firstVer,u=o.appName2appVersion,c=t.sub_app_version;if(c){var l=pe.getAppMeta(e,r);h(i,e)[K]||(_(i,e,K,t),u[e]=t),_(i,e,c,t),a[l.app_group_name]=c}},lt=function(e,t){var n=Le(e,t)[t.versionId||K];return void 0!==n?n:null},pt=function(e,t){var n=t.customValue,r=t.versionId;Le(e,t)[r||K]=n},ft=ye,st=be,dt=Ee,vt=function(e,t){return pe.getVerLoadStatus(e,"appName2verLoadStatus",t)},mt=De,gt=function(e,t){return pe.getVerLoadStatus(e,"appName2verStyleFetched",t)},_t=function(e,t,n){pe.setVerLoadStatus(e,t,"appName2verStyleFetched",n)},ht=function(e,t){var n,r=t||{},o=r.platform,i=r.versionId,a=ce(o),u=a.appName2verStyleStr,c=a.appName2styleStr[e]||"";return i?(null===(n=u[e])||void 0===n?void 0:n[i])||c||"":c},yt=function(e,t,n){var r=n||{},o=r.platform,i=r.versionId,a=ce(o),u=a.appName2verStyleStr,c=a.appName2verStyleFetched,l=a.appName2styleStr;i?(_(u,e,i,t),_(c,e,i,Y.LOADED)):l[e]=t},bt=function(e,t){var n=t||{},r=n.versionId,o=h(ce(n.platform).appName2verExtraCssList,e),i=o[r]||o[K]||[];return G("[[ core:getVerExtraCssList ]] options,cssList:",n,i),i},Et=function(e,t,n){var r=n||{},o=r.versionId,i=ce(r.platform).appName2verExtraCssList;G("[[ core:setVerExtraCssList ]] cssList:",t),h(i,e)[K]||_(i,e,K,t),o&&_(i,e,o,t)},At=Re,St=je,Lt=function(e){return Ae(ce(e),!0)},Nt=Se,Ot=function(e,t){return le().appGroupName2platform[e]=t,Se(e)},It=function(e,t){var n=ce(t),r=Ae(e);n.isConfigOverwrite||(n.isConfigOverwrite=!0,y(n,r))},Tt=function(e,t){var n=ce(e),r="[[ core:originInit ]] invalid call, it can only been called";if(n.isConfigOverwrite)G("".concat(r," before init"));else if(n.isOriginInitCalled)G("".concat(r," one time"));else{var o=Ae(t);n.isOriginInitCalled=!0,y(n.origin,o)}},Ct=Ie,Pt=function(){return ae().userEventBus},Dt=Te,Rt=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.platform||Se(e),o=n.versionId||Re(e,r),i=n.appName||je(o,e),a=Pe(i,r);null!=a&&a.__fromCust&&(o=n.versionId||a.online_version,i=a.name);var u={platform:r,appName:i,appGroupName:e,versionId:o,appProperties:t,Comp:function(){},lifecycle:{}};Ce(i,u,{appGroupName:e,platform:r}),De(i,Y.LOADED,{versionId:o,platform:r});var c=Ie();c.emit(U.SUB_LIB_LOADED,u)},jt=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.lifecycle,o=n.platform||Se(e),i=n.versionId||Re(e,o),a=n.appName||je(i,e),u={Comp:t,appName:a,appGroupName:e,lifecycle:r,platform:o,versionId:i,isLib:!1};fe(a,u),De(a,Y.LOADED,{versionId:i,platform:o});var c=Ie();c.emit(U.SUB_APP_LOADED,u)}}.call(this,n("c8ba"))}})}));
//# sourceMappingURL=app~e2e93592.8d996d8d.js.map