
var getOneTrustCookie= decodeURIComponent(getOTCookie('OptanonConsent'));

function getOTCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

if(typeof visitor === 'undefined' || visitor === ""){
if("5B29123F5245AD520A490D45@AdobeOrg") {
//!function e(t,i,n){function r(s,o){if(!i[s]){if(!t[s]){var l="function"==typeof require&&require;if(!o&&l)return l(s,!0);if(a)return a(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var d=i[s]={exports:{}};t[s][0].call(d.exports,function(e){var i=t[s][1][e];return r(i||e)},d,d.exports,e,t,i,n)}return i[s].exports}for(var a="function"==typeof require&&require,s=0;s<n.length;s++)r(n[s]);return r}({1:[function(e,t,i){(function(i){

/**
 * @license
 * Adobe Visitor API for JavaScript version: 5.2.0
 * Copyright 2021 Adobe, Inc. All Rights Reserved
 * More info available at https://marketing.adobe.com/resources/help/en_US/mcvid/
 */
 
var e=function(){"use strict";function e(t){"@babel/helpers - typeof";return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(){return{callbacks:{},add:function(e,t){this.callbacks[e]=this.callbacks[e]||[];var n=this.callbacks[e].push(t)-1,i=this;return function(){i.callbacks[e].splice(n,1)}},execute:function(e,t){if(this.callbacks[e]){t=void 0===t?[]:t,t=t instanceof Array?t:[t];try{for(;this.callbacks[e].length;){var n=this.callbacks[e].shift();"function"==typeof n?n.apply(null,t):n instanceof Array&&n[1].apply(n[0],t)}delete this.callbacks[e]}catch(e){}}},executeAll:function(e,t){(t||e&&!U.isObjectEmpty(e))&&Object.keys(this.callbacks).forEach(function(t){var n=void 0!==e[t]?e[t]:"";this.execute(t,n)},this)},hasCallbacks:function(){return Boolean(Object.keys(this.callbacks).length)}}}function i(e,t,n){var i=null==e?void 0:e[t];return void 0===i?n:i}function r(e){for(var t=/^\d+$/,n=0,i=e.length;n<i;n++)if(!t.test(e[n]))return!1;return!0}function a(e,t){for(;e.length<t.length;)e.push("0");for(;t.length<e.length;)t.push("0")}function o(e,t){for(var n=0;n<e.length;n++){var i=parseInt(e[n],10),r=parseInt(t[n],10);if(i>r)return 1;if(r>i)return-1}return 0}function s(e,t){if(e===t)return 0;var n=e.toString().split("."),i=t.toString().split(".");return r(n.concat(i))?(a(n,i),o(n,i)):NaN}function c(e){return e===Object(e)&&0===Object.keys(e).length}function u(e){return"function"==typeof e||e instanceof Array&&e.length}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0};this.log=Ie("log",e,t),this.warn=Ie("warn",e,t),this.error=Ie("error",e,t)}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.cookieName,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.cookies;if(!t||!i)return{get:Ne,set:Ne,remove:Ne};var r={remove:function(){i.remove(t)},get:function(){var e=i.get(t),n={};try{n=JSON.parse(e)}catch(e){n={}}return n},set:function(e,n){n=n||{};var a=r.get(),o=Object.assign(a,e);i.set(t,JSON.stringify(o),{domain:n.optInCookieDomain||"",cookieLifetime:n.optInStorageExpiry||3419e4,expires:!0})}};return r}function f(e){this.name=this.constructor.name,this.message=e,"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error(e).stack}function p(){function e(e,t){var n=Ae(e);return n.length?n.every(function(e){return!!t[e]}):Oe(t)}function t(){M(A),O(de.COMPLETE),_(h.status,h.permissions),s&&m.set(h.permissions,{optInCookieDomain:c,optInStorageExpiry:u}),C.execute(He)}function n(e){return function(n,i){if(!Me(n))throw new Error("[OptIn] Invalid category(-ies). Please use the `OptIn.Categories` enum.");return O(de.CHANGED),Object.assign(A,ke(Ae(n),e)),i||t(),h}}var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=i.doesOptInApply,a=i.previousPermissions,o=i.preOptInApprovals,s=i.isOptInStorageEnabled,c=i.optInCookieDomain,u=i.optInStorageExpiry,l=i.isIabContext,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},p=f.cookies,g=xe(a);Fe(g,"Invalid `previousPermissions`!"),Fe(o,"Invalid `preOptInApprovals`!");var m=d({cookieName:"adobeujs-optin"},{cookies:p}),h=this,_=le(h),C=_e(),S=Le(g),I=Le(o),v=s?m.get():{},D={},y=function(e,t){return Pe(e)||t&&Pe(t)?de.COMPLETE:de.PENDING}(S,v),b=function(e,t,n){var i=ke(he,!r);return r?Object.assign({},i,e,t,n):i}(I,S,v),A=Ee(b),O=function(e){return y=e},M=function(e){return b=e};h.deny=n(!1),h.approve=n(!0),h.denyAll=h.deny.bind(h,he),h.approveAll=h.approve.bind(h,he),h.isApproved=function(t){return e(t,h.permissions)},h.isPreApproved=function(t){return e(t,I)},h.fetchPermissions=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t?h.on(de.COMPLETE,e):Ne;return!r||r&&h.isComplete||!!o?e(h.permissions):t||C.add(He,function(){return e(h.permissions)}),n},h.complete=function(){h.status===de.CHANGED&&t()},h.registerPlugin=function(e){if(!e||!e.name||"function"!=typeof e.onRegister)throw new Error(Be);D[e.name]||(D[e.name]=e,e.onRegister.call(e,h))},h.execute=Ue(D),h.memoizeContent=function(e){we(e)&&m.set(e,{optInCookieDomain:c,optInStorageExpiry:u})},h.getMemoizedContent=function(e){var t=m.get();if(t)return t[e]},Object.defineProperties(h,{permissions:{get:function(){return b}},status:{get:function(){return y}},Categories:{get:function(){return fe}},doesOptInApply:{get:function(){return!!r}},isPending:{get:function(){return h.status===de.PENDING}},isComplete:{get:function(){return h.status===de.COMPLETE}},__plugins:{get:function(){return Object.keys(D)}},isIabContext:{get:function(){return l}}})}function g(e,t){function n(){r=null,e.call(e,new f("The call took longer than you wanted!"))}function i(){r&&(clearTimeout(r),e.apply(e,arguments))}if(void 0===t)return e;var r=setTimeout(n,t);return i}function m(){if(window.__tcfapi)return window.__tcfapi;var e=window;if(e===window.top)return void ye.error("__tcfapi not found");for(var t;!t;){e=e.parent;try{e.frames.__tcfapiLocator&&(t=e)}catch(e){}if(e===window.top)break}if(!t)return void ye.error("__tcfapi not found");var n={};return window.__tcfapi=function(e,i,r,a){var o=Math.random()+"",s={__tcfapiCall:{command:e,parameter:a,version:i,callId:o}};n[o]=r,t.postMessage(s,"*")},window.addEventListener("message",function(e){var t=e.data;if("string"==typeof t)try{t=JSON.parse(e.data)}catch(e){}if(t.__tcfapiReturn){var i=t.__tcfapiReturn;"function"==typeof n[i.callId]&&(n[i.callId](i.returnValue,i.success),delete n[i.callId])}},!1),window.__tcfapi}function h(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=!0===e.vendor.consents[t],r=n.every(function(t){return!0===e.purpose.consents[t]});return i&&r}function _(){var e=this;e.name="iabPlugin",e.version="0.0.2";var t,n=_e(),i={transparencyAndConsentData:null},r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i[e]=t};e.fetchConsentData=function(e){var t=e.callback,n=e.timeout,i=g(t,n);a({callback:i})},e.isApproved=function(e){var t=e.callback,n=e.category,r=e.timeout;if(i.transparencyAndConsentData)return t(null,h(i.transparencyAndConsentData,pe[n],ge[n]));var o=g(function(e,i){t(e,h(i,pe[n],ge[n]))},r);a({category:n,callback:o})},e.onRegister=function(n){t=n;var i=Object.keys(pe),r=function(e,t){!e&&t&&(i.forEach(function(e){var i=h(t,pe[e],ge[e]);n[i?"approve":"deny"](e,!0)}),n.complete())};e.fetchConsentData({callback:r})};var a=function(e){var a=e.callback;if(i.transparencyAndConsentData)return a(null,i.transparencyAndConsentData);n.add("FETCH_CONSENT_DATA",a),o(function(e,a){if(a){var o=Ee(e),s=t.getMemoizedContent("iabConsentHash"),c=De(o.tcString).toString(32);o.consentString=e.tcString,o.hasConsentChangedSinceLastCmpPull=s!==c,r("transparencyAndConsentData",o),t.memoizeContent({iabConsentHash:c})}n.execute("FETCH_CONSENT_DATA",[null,i.transparencyAndConsentData])})},o=function(e){var t=Ve(pe),n=m();"function"==typeof n&&n("getTCData",2,e,t)}}var C="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};Object.assign=Object.assign||function(e){for(var t,n,i=1;i<arguments.length;++i){n=arguments[i];for(t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e};var S,I,v={HANDSHAKE:"HANDSHAKE",GETSTATE:"GETSTATE",PARENTSTATE:"PARENTSTATE"},D={MCMID:"MCMID",MCAID:"MCAID",MCAAMB:"MCAAMB",MCAAMLH:"MCAAMLH",MCOPTOUT:"MCOPTOUT",CUSTOMERIDS:"CUSTOMERIDS"},y={MCMID:"getMarketingCloudVisitorID",MCAID:"getAnalyticsVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"isOptedOut",ALLFIELDS:"getVisitorValues"},b={CUSTOMERIDS:"getCustomerIDs"},A={MCMID:"getMarketingCloudVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"isOptedOut",MCAID:"getAnalyticsVisitorID",CUSTOMERIDS:"getCustomerIDs",ALLFIELDS:"getVisitorValues"},O={MC:"MCMID",A:"MCAID",AAM:"MCAAMB"},M={MCMID:"MCMID",MCOPTOUT:"MCOPTOUT",MCAID:"MCAID",MCAAMLH:"MCAAMLH",MCAAMB:"MCAAMB"},k={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2},E={GLOBAL:"global"},T={LAX:"Lax",STRICT:"Strict",NONE:"None"},L={MESSAGES:v,STATE_KEYS_MAP:D,ASYNC_API_MAP:y,SYNC_API_MAP:b,ALL_APIS:A,FIELDGROUP_TO_FIELD:O,FIELDS:M,AUTH_STATE:k,OPT_OUT:E,SAME_SITE_VALUES:T},P=L.STATE_KEYS_MAP,R=function(e){function t(){}function n(t,n){var i=this;return function(){var r=e(0,t),a={};return a[t]=r,i.setStateAndPublish(a),n(r),r}}this.getMarketingCloudVisitorID=function(e){e=e||t;var i=this.findField(P.MCMID,e),r=n.call(this,P.MCMID,e);return void 0!==i?i:r()},this.getVisitorValues=function(e){this.getMarketingCloudVisitorID(function(t){e({MCMID:t})})}},w=L.MESSAGES,N=L.ASYNC_API_MAP,x=L.SYNC_API_MAP,F=function(){function e(){}function t(e,t){var n=this;return function(){return n.callbackRegistry.add(e,t),n.messageParent(w.GETSTATE),""}}function n(n){this[N[n]]=function(i){i=i||e;var r=this.findField(n,i),a=t.call(this,n,i);return void 0!==r?r:a()}}function i(t){this[x[t]]=function(){return this.findField(t,e)||{}}}Object.keys(N).forEach(n,this),Object.keys(x).forEach(i,this)},j=L.ASYNC_API_MAP,V=function(){Object.keys(j).forEach(function(e){this[j[e]]=function(t){this.callbackRegistry.add(e,t)}},this)},U=function(e,t){return t={exports:{}},e(t,t.exports),t.exports}(function(t,n){n.isObjectEmpty=function(e){return e===Object(e)&&0===Object.keys(e).length},n.isValueEmpty=function(e){return""===e||n.isObjectEmpty(e)};var i=function(){var e=navigator.appName,t=navigator.userAgent;return"Microsoft Internet Explorer"===e||t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0&&t.indexOf("Windows NT 6")>=0};n.getIeVersion=function(){return document.documentMode?document.documentMode:i()?7:null},n.encodeAndBuildRequest=function(e,t){return e.map(encodeURIComponent).join(t)},n.isObject=function(t){return null!==t&&"object"===e(t)&&!1===Array.isArray(t)},n.defineGlobalNamespace=function(){return window.adobe=n.isObject(window.adobe)?window.adobe:{},window.adobe},n.pluck=function(e,t){return t.reduce(function(t,n){return e[n]&&(t[n]=e[n]),t},Object.create(null))},n.parseOptOut=function(e,t,n){t||(t=n,e.d_optout&&e.d_optout instanceof Array&&(t=e.d_optout.join(",")));var i=parseInt(e.d_ottl,10);return isNaN(i)&&(i=7200),{optOut:t,d_ottl:i}},n.normalizeBoolean=function(e){var t=e;return"true"===e?t=!0:"false"===e&&(t=!1),t}}),H=(U.isObjectEmpty,U.isValueEmpty,U.getIeVersion,U.encodeAndBuildRequest,U.isObject,U.defineGlobalNamespace,U.pluck,U.parseOptOut,U.normalizeBoolean,n),B=L.MESSAGES,G={0:"prefix",1:"orgID",2:"state"},Y=function(e,t){this.parse=function(e){try{var t={};return e.data.split("|").forEach(function(e,n){if(void 0!==e){t[G[n]]=2!==n?e:JSON.parse(e)}}),t}catch(e){}},this.isInvalid=function(n){var i=this.parse(n);if(!i||Object.keys(i).length<2)return!0;var r=e!==i.orgID,a=!t||n.origin!==t,o=-1===Object.keys(B).indexOf(i.prefix);return r||a||o},this.send=function(n,i,r){var a=i+"|"+e;r&&r===Object(r)&&(a+="|"+JSON.stringify(r));try{n.postMessage(a,t)}catch(e){}}},q=L.MESSAGES,X=function(e,t,n,i){function r(e){Object.assign(p,e)}function a(e){Object.assign(p.state,e),Object.assign(p.state.ALLFIELDS,e),p.callbackRegistry.executeAll(p.state)}function o(e){if(!h.isInvalid(e)){m=!1;var t=h.parse(e);p.setStateAndPublish(t.state)}}function s(e){!m&&g&&(m=!0,h.send(i,e))}function c(){r(new R(n._generateID)),p.getMarketingCloudVisitorID(),p.callbackRegistry.executeAll(p.state,!0),C.removeEventListener("message",u)}function u(e){if(!h.isInvalid(e)){var t=h.parse(e);m=!1,C.clearTimeout(p._handshakeTimeout),C.removeEventListener("message",u),r(new F(p)),C.addEventListener("message",o),p.setStateAndPublish(t.state),p.callbackRegistry.hasCallbacks()&&s(q.GETSTATE)}}function l(){g&&postMessage?(C.addEventListener("message",u),s(q.HANDSHAKE),p._handshakeTimeout=setTimeout(c,250)):c()}function d(){C.s_c_in||(C.s_c_il=[],C.s_c_in=0),p._c="Visitor",p._il=C.s_c_il,p._in=C.s_c_in,p._il[p._in]=p,C.s_c_in++}function f(){function e(e){0!==e.indexOf("_")&&"function"==typeof n[e]&&(p[e]=function(){})}Object.keys(n).forEach(e),p.getSupplementalDataID=n.getSupplementalDataID,p.isAllowed=function(){return!0}}var p=this,g=t.whitelistParentDomain;p.state={ALLFIELDS:{}},p.version=n.version,p.marketingCloudOrgID=e,p.cookieDomain=n.cookieDomain||"",p._instanceType="child";var m=!1,h=new Y(e,g);p.callbackRegistry=H(),p.init=function(){d(),f(),r(new V(p)),l()},p.findField=function(e,t){if(void 0!==p.state[e])return t(p.state[e]),p.state[e]},p.messageParent=s,p.setStateAndPublish=a},W=L.MESSAGES,K=L.ALL_APIS,J=L.ASYNC_API_MAP,z=L.FIELDGROUP_TO_FIELD,Q=function(e,t){function n(){var t={};return Object.keys(K).forEach(function(n){var i=K[n],r=e[i]();U.isValueEmpty(r)||(t[n]=r)}),t}function i(){var t=[];return e._loading&&Object.keys(e._loading).forEach(function(n){if(e._loading[n]){var i=z[n];t.push(i)}}),t.length?t:null}function r(t){return function n(r){var a=i();if(a){var o=J[a[0]];e[o](n,!0)}else t()}}function a(e,i){var r=n();t.send(e,i,r)}function o(e){c(e),a(e,W.HANDSHAKE)}function s(e){r(function(){a(e,W.PARENTSTATE)})()}function c(n){function i(i){r.call(e,i),t.send(n,W.PARENTSTATE,{CUSTOMERIDS:e.getCustomerIDs()})}var r=e.setCustomerIDs;e.setCustomerIDs=i}return function(e){if(!t.isInvalid(e)){(t.parse(e).prefix===W.HANDSHAKE?o:s)(e.source)}}},$=function(e,t){function n(e){return function(n){i[e]=n,r++,r===a&&t(i)}}var i={},r=0,a=Object.keys(e).length;Object.keys(e).forEach(function(t){var i=e[t];if(i.fn){var r=i.args||[];r.unshift(n(t)),i.fn.apply(i.context||null,r)}})},Z={get:function(e){e=encodeURIComponent(e);var t=(";"+document.cookie).split(" ").join(";"),n=t.indexOf(";"+e+"="),i=n<0?n:t.indexOf(";",n+1);return n<0?"":decodeURIComponent(t.substring(n+2+e.length,i<0?t.length:i))},set:function(e,t,n){var r=i(n,"cookieLifetime"),a=i(n,"expires"),o=i(n,"domain"),s=i(n,"secure"),c=i(n,"sameSite"),u=s?"Secure":"",l=c?"SameSite="+c+";":"";if(a&&"SESSION"!==r&&"NONE"!==r){var d=""!==t?parseInt(r||0,10):-60;if(d)a=new Date,a.setTime(a.getTime()+1e3*d);else if(1===a){a=new Date;var f=a.getYear();a.setYear(f+2+(f<1900?1900:0))}}else a=0;return e&&"NONE"!==r?(document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+"; path=/;"+(a?" expires="+a.toGMTString()+";":"")+(o?" domain="+o+";":"")+l+u,this.get(e)===t):0},remove:function(e,t){var n=i(t,"domain");n=n?" domain="+n+";":"";var r=i(t,"secure"),a=i(t,"sameSite"),o=r?"Secure":"",s=a?"SameSite="+a+";":"";document.cookie=encodeURIComponent(e)+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"+n+s+o}},ee=function(e,t){var n;!e&&C.location&&(e=C.location.hostname),n=e;var i,r=n.split("."),a=t||{};for(i=r.length-2;i>=0;i--)if(a.domain=r.slice(i).join("."),Z.set("test","cookie",a))return Z.remove("test",a),a.domain;return""},te={compare:s,isLessThan:function(e,t){return s(e,t)<0},areVersionsDifferent:function(e,t){return 0!==s(e,t)},isGreaterThan:function(e,t){return s(e,t)>0},isEqual:function(e,t){return 0===s(e,t)}},ne=!!C.postMessage,ie={postMessage:function(e,t,n){var i=1;t&&(ne?n.postMessage(e,t.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):t&&(n.location=t.replace(/#.*$/,"")+"#"+ +new Date+i+++"&"+e))},receiveMessage:function(e,t){var n;try{ne&&(e&&(n=function(n){if("string"==typeof t&&n.origin!==t||"[object Function]"===Object.prototype.toString.call(t)&&!1===t(n.origin))return!1;e(n)}),C.addEventListener?C[e?"addEventListener":"removeEventListener"]("message",n):C[e?"attachEvent":"detachEvent"]("onmessage",n))}catch(e){}}},re=function(e){var t,n,i="0123456789",r="",a="",o=8,s=10,c=10;if(1==e){for(i+="ABCDEF",t=0;16>t;t++)n=Math.floor(Math.random()*o),r+=i.substring(n,n+1),n=Math.floor(Math.random()*o),a+=i.substring(n,n+1),o=16;return r+"-"+a}for(t=0;19>t;t++)n=Math.floor(Math.random()*s),r+=i.substring(n,n+1),0===t&&9==n?s=3:(1==t||2==t)&&10!=s&&2>n?s=10:2<t&&(s=10),n=Math.floor(Math.random()*c),a+=i.substring(n,n+1),0===t&&9==n?c=3:(1==t||2==t)&&10!=c&&2>n?c=10:2<t&&(c=10);return r+a},ae=function(e,t){return{corsMetadata:function(){var e="none",t=!0;return"undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?e="XMLHttpRequest":"undefined"!=typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(t=!1),Object.prototype.toString.call(C.HTMLElement).indexOf("Constructor")>0&&(t=!1)),{corsType:e,corsCookiesEnabled:t}}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new C[this.corsMetadata.corsType]},fireCORS:function(t,n,i){function r(e){var n;try{if((n=JSON.parse(e))!==Object(n))return void a.handleCORSError(t,null,"Response is not JSON")}catch(e){return void a.handleCORSError(t,e,"Error parsing response as JSON")}try{for(var i=t.callback,r=C,o=0;o<i.length;o++)r=r[i[o]];r(n)}catch(e){a.handleCORSError(t,e,"Error forming callback function")}}var a=this;n&&(t.loadErrorHandler=n);try{var o=this.getCORSInstance();o.open("get",t.corsUrl+"&ts="+(new Date).getTime(),!0),"XMLHttpRequest"===this.corsMetadata.corsType&&(o.withCredentials=!0,o.timeout=e.loadTimeout,o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.onreadystatechange=function(){4===this.readyState&&200===this.status&&r(this.responseText)}),o.onerror=function(e){a.handleCORSError(t,e,"onerror")},o.ontimeout=function(e){a.handleCORSError(t,e,"ontimeout")},o.send(),e._log.requests.push(t.corsUrl)}catch(e){this.handleCORSError(t,e,"try-catch")}},handleCORSError:function(t,n,i){e.CORSErrors.push({corsData:t,error:n,description:i}),t.loadErrorHandler&&("ontimeout"===i?t.loadErrorHandler(!0):t.loadErrorHandler(!1))}}},oe={POST_MESSAGE_ENABLED:!!C.postMessage,DAYS_BETWEEN_SYNC_ID_CALLS:1,MILLIS_PER_DAY:864e5,ADOBE_MC:"adobe_mc",ADOBE_MC_SDID:"adobe_mc_sdid",VALID_VISITOR_ID_REGEX:/^[0-9a-fA-F\-]+$/,ADOBE_MC_TTL_IN_MIN:5,VERSION_REGEX:/vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/,FIRST_PARTY_SERVER_COOKIE:"s_ecid"},se=function(e,t){var n=C.document;return{THROTTLE_START:3e4,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:null,onPagePixels:[],iframeHost:null,getIframeHost:function(e){if("string"==typeof e){var t=e.split("/");return t[0]+"//"+t[2]}},subdomain:null,url:null,getUrl:function(){var t,i="http://fast.",r="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(n.location.origin);return this.subdomain||(this.subdomain="nosubdomainreturned"),e.loadSSL&&(i=e.idSyncSSLUseAkamai?"https://fast.":"https://"),t=i+this.subdomain+".demdex.net/dest5.html"+r,this.iframeHost=this.getIframeHost(t),this.id="destination_publishing_iframe_"+this.subdomain+"_"+e.idSyncContainerID,t},checkDPIframeSrc:function(){var t="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(n.location.href);"string"==typeof e.dpIframeSrc&&e.dpIframeSrc.length&&(this.id="destination_publishing_iframe_"+(e._subdomain||this.subdomain||(new Date).getTime())+"_"+e.idSyncContainerID,this.iframeHost=this.getIframeHost(e.dpIframeSrc),this.url=e.dpIframeSrc+t)},idCallNotProcesssed:null,doAttachIframe:!1,startedAttachingIframe:!1,iframeHasLoaded:null,iframeIdChanged:null,newIframeCreated:null,originalIframeHasLoadedAlready:null,iframeLoadedCallbacks:[],regionChanged:!1,timesRegionChanged:0,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:oe.POST_MESSAGE_ENABLED?null:100,onPageDestinationsFired:[],jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,readyToAttachIframePreliminary:function(){return!(e.idSyncDisableSyncs||e.disableIdSyncs||e.idSyncDisable3rdPartySyncing||e.disableThirdPartyCookies||e.disableThirdPartyCalls)},readyToAttachIframe:function(){return this.readyToAttachIframePreliminary()&&(this.doAttachIframe||e._doAttachIframe)&&(this.subdomain&&"nosubdomainreturned"!==this.subdomain||e._subdomain)&&this.url&&!this.startedAttachingIframe},attachIframe:function(){function e(){r=n.createElement("iframe"),r.sandbox="allow-scripts allow-same-origin",r.title="Adobe ID Syncing iFrame",r.id=i.id,r.name=i.id+"_name",r.style.cssText="display: none; width: 0; height: 0;",r.src=i.url,i.newIframeCreated=!0,t(),n.body.appendChild(r)}function t(e){r.addEventListener("load",function(){r.className="aamIframeLoaded",i.iframeHasLoaded=!0,i.fireIframeLoadedCallbacks(e),i.requestToProcess()})}this.startedAttachingIframe=!0;var i=this,r=n.getElementById(this.id);r?"IFRAME"!==r.nodeName?(this.id+="_2",this.iframeIdChanged=!0,e()):(this.newIframeCreated=!1,"aamIframeLoaded"!==r.className?(this.originalIframeHasLoadedAlready=!1,t("The destination publishing iframe already exists from a different library, but hadn't loaded yet.")):(this.originalIframeHasLoadedAlready=!0,this.iframeHasLoaded=!0,this.iframe=r,this.fireIframeLoadedCallbacks("The destination publishing iframe already exists from a different library, and had loaded alresady."),this.requestToProcess())):e(),this.iframe=r},fireIframeLoadedCallbacks:function(e){this.iframeLoadedCallbacks.forEach(function(t){"function"==typeof t&&t({message:e||"The destination publishing iframe was attached and loaded successfully."})}),this.iframeLoadedCallbacks=[]},requestToProcess:function(t){function n(){r.jsonForComparison.push(t),r.jsonWaiting.push(t),r.processSyncOnPage(t)}var i,r=this;if(t===Object(t)&&t.ibs)if(i=JSON.stringify(t.ibs||[]),this.jsonForComparison.length){var a,o,s,c=!1;for(a=0,o=this.jsonForComparison.length;a<o;a++)if(s=this.jsonForComparison[a],i===JSON.stringify(s.ibs||[])){c=!0;break}c?this.jsonDuplicates.push(t):n()}else n();if((this.receivedThirdPartyCookiesNotification||!oe.POST_MESSAGE_ENABLED||this.iframeHasLoaded)&&this.jsonWaiting.length){var u=this.jsonWaiting.shift();this.process(u),this.requestToProcess()}e.idSyncDisableSyncs||e.disableIdSyncs||!this.iframeHasLoaded||!this.messages.length||this.sendingMessages||(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){r.messageSendingInterval=oe.POST_MESSAGE_ENABLED?null:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},getRegionAndCheckIfChanged:function(t,n){var i=e._getField("MCAAMLH"),r=t.d_region||t.dcs_region;return i?r&&(e._setFieldExpire("MCAAMLH",n),e._setField("MCAAMLH",r),parseInt(i,10)!==r&&(this.regionChanged=!0,this.timesRegionChanged++,e._setField("MCSYNCSOP",""),e._setField("MCSYNCS",""),i=r)):(i=r)&&(e._setFieldExpire("MCAAMLH",n),e._setField("MCAAMLH",i)),i||(i=""),i},processSyncOnPage:function(e){var t,n,i,r;if((t=e.ibs)&&t instanceof Array&&(n=t.length))for(i=0;i<n;i++)r=t[i],r.syncOnPage&&this.checkFirstPartyCookie(r,"","syncOnPage")},process:function(e){var t,n,i,r,a,o=encodeURIComponent,s=!1;if((t=e.ibs)&&t instanceof Array&&(n=t.length))for(s=!0,i=0;i<n;i++)r=t[i],a=[o("ibs"),o(r.id||""),o(r.tag||""),U.encodeAndBuildRequest(r.url||[],","),o(r.ttl||""),"","",r.fireURLSync?"true":"false"],r.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(a.join("|")):r.fireURLSync&&this.checkFirstPartyCookie(r,a.join("|")));s&&this.jsonProcessed.push(e)},checkFirstPartyCookie:function(t,n,i){var r="syncOnPage"===i,a=r?"MCSYNCSOP":"MCSYNCS";e._readVisitor();var o,s,c=e._getField(a),u=!1,l=!1,d=Math.ceil((new Date).getTime()/oe.MILLIS_PER_DAY);c?(o=c.split("*"),s=this.pruneSyncData(o,t.id,d),u=s.dataPresent,l=s.dataValid,u&&l||this.fireSync(r,t,n,o,a,d)):(o=[],this.fireSync(r,t,n,o,a,d))},pruneSyncData:function(e,t,n){var i,r,a,o=!1,s=!1;for(r=0;r<e.length;r++)i=e[r],a=parseInt(i.split("-")[1],10),i.match("^"+t+"-")?(o=!0,n<a?s=!0:(e.splice(r,1),r--)):n>=a&&(e.splice(r,1),r--);return{dataPresent:o,dataValid:s}},manageSyncsSize:function(e){if(e.join("*").length>this.MAX_SYNCS_LENGTH)for(e.sort(function(e,t){return parseInt(e.split("-")[1],10)-parseInt(t.split("-")[1],10)});e.join("*").length>this.MAX_SYNCS_LENGTH;)e.shift()},fireSync:function(t,n,i,r,a,o){var s=this;if(t){if("img"===n.tag){var c,u,l,d,f=n.url,p=e.loadSSL?"https:":"http:";for(c=0,u=f.length;c<u;c++){l=f[c],d=/^\/\//.test(l);var g=new Image;g.addEventListener("load",function(t,n,i,r){return function(){s.onPagePixels[t]=null,e._readVisitor();var o,c=e._getField(a),u=[];if(c){o=c.split("*");var l,d,f;for(l=0,d=o.length;l<d;l++)f=o[l],f.match("^"+n.id+"-")||u.push(f)}s.setSyncTrackingData(u,n,i,r)}}(this.onPagePixels.length,n,a,o)),g.src=(d?p:"")+l,this.onPagePixels.push(g)}}}else this.addMessage(i),this.setSyncTrackingData(r,n,a,o)},addMessage:function(t){var n=encodeURIComponent,i=n(e._enableErrorReporting?"---destpub-debug---":"---destpub---");this.messages.push((oe.POST_MESSAGE_ENABLED?"":i)+t)},setSyncTrackingData:function(t,n,i,r){t.push(n.id+"-"+(r+Math.ceil(n.ttl/60/24))),this.manageSyncsSize(t),e._setField(i,t.join("*"))},sendMessages:function(){var e,t=this,n="",i=encodeURIComponent;this.regionChanged&&(n=i("---destpub-clear-dextp---"),this.regionChanged=!1),this.messages.length?oe.POST_MESSAGE_ENABLED?(e=n+i("---destpub-combined---")+this.messages.join("%01"),this.postMessage(e),this.messages=[],this.sendingMessages=!1):(e=this.messages.shift(),this.postMessage(n+e),setTimeout(function(){t.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1},postMessage:function(e){ie.postMessage(e,this.url,this.iframe.contentWindow),this.messagesPosted.push(e)},receiveMessage:function(e){var t,n=/^---destpub-to-parent---/;"string"==typeof e&&n.test(e)&&(t=e.replace(n,"").split("|"),"canSetThirdPartyCookies"===t[0]&&(this.canSetThirdPartyCookies="true"===t[1],this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(e))},processIDCallData:function(i){(null==this.url||i.subdomain&&"nosubdomainreturned"===this.subdomain)&&("string"==typeof e._subdomain&&e._subdomain.length?this.subdomain=e._subdomain:this.subdomain=i.subdomain||"",this.url=this.getUrl()),i.ibs instanceof Array&&i.ibs.length&&(this.doAttachIframe=!0),this.readyToAttachIframe()&&(e.idSyncAttachIframeOnWindowLoad?(t.windowLoaded||"complete"===n.readyState||"loaded"===n.readyState)&&this.attachIframe():this.attachIframeASAP()),"function"==typeof e.idSyncIDCallResult?e.idSyncIDCallResult(i):this.requestToProcess(i),"function"==typeof e.idSyncAfterIDCallResult&&e.idSyncAfterIDCallResult(i)},canMakeSyncIDCall:function(t,n){return e._forceSyncIDCall||!t||n-t>oe.DAYS_BETWEEN_SYNC_ID_CALLS},attachIframeASAP:function(){function e(){t.startedAttachingIframe||(n.body?t.attachIframe():setTimeout(e,30))}var t=this;e()}}},ce={audienceManagerServer:{},audienceManagerServerSecure:{},cookieDomain:{},cookieLifetime:{},cookieName:{},doesOptInApply:{type:"boolean"},disableThirdPartyCalls:{type:"boolean"},discardTrackingServerECID:{type:"boolean"},idSyncAfterIDCallResult:{},idSyncAttachIframeOnWindowLoad:{type:"boolean"},idSyncContainerID:{},idSyncDisable3rdPartySyncing:{type:"boolean"},disableThirdPartyCookies:{type:"boolean"},idSyncDisableSyncs:{type:"boolean"},disableIdSyncs:{type:"boolean"},idSyncIDCallResult:{},idSyncSSLUseAkamai:{type:"boolean"},isCoopSafe:{type:"boolean"},isIabContext:{type:"boolean"},isOptInStorageEnabled:{type:"boolean"},loadSSL:{type:"boolean"},loadTimeout:{},marketingCloudServer:{},marketingCloudServerSecure:{},optInCookieDomain:{},optInStorageExpiry:{},overwriteCrossDomainMCIDAndAID:{type:"boolean"},preOptInApprovals:{},previousPermissions:{},resetBeforeVersion:{},sdidParamExpiry:{},serverState:{},sessionCookieName:{},secureCookie:{type:"boolean"},sameSiteCookie:{},takeTimeoutMetrics:{},trackingServer:{},trackingServerSecure:{},useLocalStorage:{type:"boolean"},whitelistIframeDomains:{},whitelistParentDomain:{}},ue={getConfigNames:function(){return Object.keys(ce)},getConfigs:function(){return ce},normalizeConfig:function(e,t){return ce[e]&&"boolean"===ce[e].type?"function"!=typeof t?t:t():t}},le=function(e){var t={};return e.on=function(e,n,i){if(!n||"function"!=typeof n)throw new Error("[ON] Callback should be a function.");t.hasOwnProperty(e)||(t[e]=[]);var r=t[e].push({callback:n,context:i})-1;return function(){t[e].splice(r,1),t[e].length||delete t[e]}},e.off=function(e,n){t.hasOwnProperty(e)&&(t[e]=t[e].filter(function(e){if(e.callback!==n)return e}))},e.publish=function(e){if(t.hasOwnProperty(e)){var n=[].slice.call(arguments,1);t[e].slice(0).forEach(function(e){e.callback.apply(e.context,n)})}},e.publish},de={PENDING:"pending",CHANGED:"changed",COMPLETE:"complete"},fe={AAM:"aam",ADCLOUD:"adcloud",ANALYTICS:"aa",CAMPAIGN:"campaign",ECID:"ecid",LIVEFYRE:"livefyre",TARGET:"target",MEDIA_ANALYTICS:"mediaaa"},pe=(S={},t(S,fe.AAM,565),t(S,fe.ECID,565),S),ge=(I={},t(I,fe.AAM,[1,10]),t(I,fe.ECID,[1,10]),I),me=["videoaa","iabConsentHash"],he=function(e){return Object.keys(e).map(function(t){return e[t]})}(fe),_e=function(){var e={};return e.callbacks=Object.create(null),e.add=function(t,n){if(!u(n))throw new Error("[callbackRegistryFactory] Make sure callback is a function or an array of functions.");e.callbacks[t]=e.callbacks[t]||[];var i=e.callbacks[t].push(n)-1;return function(){e.callbacks[t].splice(i,1)}},e.execute=function(t,n){if(e.callbacks[t]){n=void 0===n?[]:n,n=n instanceof Array?n:[n];try{for(;e.callbacks[t].length;){var i=e.callbacks[t].shift();"function"==typeof i?i.apply(null,n):i instanceof Array&&i[1].apply(i[0],n)}delete e.callbacks[t]}catch(e){}}},e.executeAll=function(t,n){(n||t&&!c(t))&&Object.keys(e.callbacks).forEach(function(n){var i=void 0!==t[n]?t[n]:"";e.execute(n,i)},e)},e.hasCallbacks=function(){return Boolean(Object.keys(e.callbacks).length)},e},Ce=function(){},Se=function(e){var t=window,n=t.console;return!!n&&"function"==typeof n[e]},Ie=function(e,t,n){return n()?function(){if(Se(e)){for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];console[e].apply(console,[t].concat(i))}}:Ce},ve=l,De=function(){for(var e=[],t=0;t<256;t++){for(var n=t,i=0;i<8;i++)n=1&n?3988292384^n>>>1:n>>>1;e.push(n)}return function(t,n){t=unescape(encodeURIComponent(t)),n||(n=0),n^=-1;for(var i=0;i<t.length;i++){var r=255&(n^t.charCodeAt(i));n=n>>>8^e[r]}return(n^=-1)>>>0}}(),ye=new ve("[ADOBE OPT-IN]"),be=function(t,n){return e(t)===n},Ae=function(e,t){return e instanceof Array?e:be(e,"string")?[e]:t||[]},Oe=function(e){var t=Object.keys(e);return!!t.length&&t.every(function(t){return!0===e[t]})},Me=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return!(!e||Te(e))&&Ae(e).every(function(e){return he.indexOf(e)>-1||t&&me.indexOf(e)>-1})},ke=function(e,t){return e.reduce(function(e,n){return e[n]=t,e},{})},Ee=function(e){return JSON.parse(JSON.stringify(e))},Te=function(e){return"[object Array]"===Object.prototype.toString.call(e)&&!e.length},Le=function(e){if(we(e))return e;try{return JSON.parse(e)}catch(e){return{}}},Pe=function(e){return void 0===e||(we(e)?Me(Object.keys(e),!0):Re(e))},Re=function(e){try{var t=JSON.parse(e);return!!e&&be(e,"string")&&Me(Object.keys(t),!0)}catch(e){return!1}},we=function(e){return null!==e&&be(e,"object")&&!1===Array.isArray(e)},Ne=function(){},xe=function(e){return be(e,"function")?e():e},Fe=function(e,t){Pe(e)||ye.error("".concat(t))},je=function(e){return Object.keys(e).map(function(t){return e[t]})},Ve=function(e){return je(e).filter(function(e,t,n){return n.indexOf(e)===t})},Ue=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.command,i=t.params,r=void 0===i?{}:i,a=t.callback,o=void 0===a?Ne:a;if(!n||-1===n.indexOf("."))throw new Error("[OptIn.execute] Please provide a valid command.");try{var s=n.split("."),c=e[s[0]],u=s[1];if(!c||"function"!=typeof c[u])throw new Error("Make sure the plugin and API name exist.");var l=Object.assign(r,{callback:o});c[u].call(c,l)}catch(e){ye.error("[execute] Something went wrong: "+e.message)}}};f.prototype=Object.create(Error.prototype),
f.prototype.constructor=f;var He="fetchPermissions",Be="[OptIn#registerPlugin] Plugin is invalid.";p.Categories=fe,p.TimeoutError=f;var Ge=Object.freeze({OptIn:p,IabPlugin:_}),Ye=function(e,t){e.publishDestinations=function(n){var i=arguments[1],r=arguments[2];try{r="function"==typeof r?r:n.callback}catch(e){r=function(){}}var a=t;if(!a.readyToAttachIframePreliminary())return void r({error:"The destination publishing iframe is disabled in the Visitor library."});if("string"==typeof n){if(!n.length)return void r({error:"subdomain is not a populated string."});if(!(i instanceof Array&&i.length))return void r({error:"messages is not a populated array."});var o=!1;if(i.forEach(function(e){"string"==typeof e&&e.length&&(a.addMessage(e),o=!0)}),!o)return void r({error:"None of the messages are populated strings."})}else{if(!U.isObject(n))return void r({error:"Invalid parameters passed."});var s=n;if("string"!=typeof(n=s.subdomain)||!n.length)return void r({error:"config.subdomain is not a populated string."});var c=s.urlDestinations;if(!(c instanceof Array&&c.length))return void r({error:"config.urlDestinations is not a populated array."});var u=[];c.forEach(function(e){U.isObject(e)&&(e.hideReferrer?e.message&&a.addMessage(e.message):u.push(e))});!function e(){u.length&&setTimeout(function(){var t=new Image,n=u.shift();t.src=n.url,a.onPageDestinationsFired.push(n),e()},100)}()}a.iframe?(r({message:"The destination publishing iframe is already attached and loaded."}),a.requestToProcess()):!e.subdomain&&e._getField("MCMID")?(a.subdomain=n,a.doAttachIframe=!0,a.url=a.getUrl(),a.readyToAttachIframe()?(a.iframeLoadedCallbacks.push(function(e){r({message:"Attempted to attach and load the destination publishing iframe through this API call. Result: "+(e.message||"no result")})}),a.attachIframe()):r({error:"Encountered a problem in attempting to attach and load the destination publishing iframe through this API call."})):a.iframeLoadedCallbacks.push(function(e){r({message:"Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: "+(e.message||"no result")})})}},qe=function e(t){function n(e,t){return e>>>t|e<<32-t}for(var i,r,a=Math.pow,o=a(2,32),s="",c=[],u=8*t.length,l=e.h=e.h||[],d=e.k=e.k||[],f=d.length,p={},g=2;f<64;g++)if(!p[g]){for(i=0;i<313;i+=g)p[i]=g;l[f]=a(g,.5)*o|0,d[f++]=a(g,1/3)*o|0}for(t+="€";t.length%64-56;)t+="\0";for(i=0;i<t.length;i++){if((r=t.charCodeAt(i))>>8)return;c[i>>2]|=r<<(3-i)%4*8}for(c[c.length]=u/o|0,c[c.length]=u,r=0;r<c.length;){var m=c.slice(r,r+=16),h=l;for(l=l.slice(0,8),i=0;i<64;i++){var _=m[i-15],C=m[i-2],S=l[0],I=l[4],v=l[7]+(n(I,6)^n(I,11)^n(I,25))+(I&l[5]^~I&l[6])+d[i]+(m[i]=i<16?m[i]:m[i-16]+(n(_,7)^n(_,18)^_>>>3)+m[i-7]+(n(C,17)^n(C,19)^C>>>10)|0);l=[v+((n(S,2)^n(S,13)^n(S,22))+(S&l[1]^S&l[2]^l[1]&l[2]))|0].concat(l),l[4]=l[4]+v|0}for(i=0;i<8;i++)l[i]=l[i]+h[i]|0}for(i=0;i<8;i++)for(r=3;r+1;r--){var D=l[i]>>8*r&255;s+=(D<16?0:"")+D.toString(16)}return s},Xe=function(e,t){return"SHA-256"!==t&&"SHA256"!==t&&"sha256"!==t&&"sha-256"!==t||(e=qe(e)),e},We=function(e){return String(e).trim().toLowerCase()},Ke=Ge.OptIn;U.defineGlobalNamespace(),window.adobe.OptInCategories=Ke.Categories;var Je=function(t,n,i){function r(){S._customerIDsHashChanged=!1}function a(e){var t=e;return function(e){var n=e||A.location.href;try{var i=S._extractParamFromUri(n,t);if(i)return q.parsePipeDelimetedKeyValues(i)}catch(e){}}}function o(e){function t(e,t,n){e&&e.match(oe.VALID_VISITOR_ID_REGEX)&&(n===T&&(b=!0),t(e))}t(e[T],S.setMarketingCloudVisitorID,T),S._setFieldExpire(x,-1),t(e[w],S.setAnalyticsVisitorID)}function s(e){e=e||{},S._supplementalDataIDCurrent=e.supplementalDataIDCurrent||"",S._supplementalDataIDCurrentConsumed=e.supplementalDataIDCurrentConsumed||{},S._supplementalDataIDLast=e.supplementalDataIDLast||"",S._supplementalDataIDLastConsumed=e.supplementalDataIDLastConsumed||{}}function c(e){function t(e,t,n){return n=n?n+="|":n,n+=e+"="+encodeURIComponent(t)}function n(e,n){var i=n[0],r=n[1];return null!=r&&r!==F&&(e=t(i,r,e)),e}var i=e.reduce(n,"");return function(e){var t=q.getTimestampInSeconds();return e=e?e+="|":e,e+="TS="+t}(i)}function u(e){var t=e.minutesToLive,n="";return(S.idSyncDisableSyncs||S.disableIdSyncs)&&(n=n||"Error: id syncs have been disabled"),"string"==typeof e.dpid&&e.dpid.length||(n=n||"Error: config.dpid is empty"),"string"==typeof e.url&&e.url.length||(n=n||"Error: config.url is empty"),void 0===t?t=20160:(t=parseInt(t,10),(isNaN(t)||t<=0)&&(n=n||"Error: config.minutesToLive needs to be a positive number")),{error:n,ttl:t}}function l(){return!!S.configs.doesOptInApply&&!(I.optIn.isComplete&&d())}function d(){return S.configs.doesOptInApply&&S.configs.isIabContext?I.optIn.isApproved(I.optIn.Categories.ECID)&&y:I.optIn.isApproved(I.optIn.Categories.ECID)}function f(){[["getMarketingCloudVisitorID"],["setCustomerIDs",void 0],["syncIdentity",void 0],["getAnalyticsVisitorID"],["getAudienceManagerLocationHint"],["getLocationHint"],["getAudienceManagerBlob"]].forEach(function(e){var t=e[0],n=2===e.length?e[1]:"",i=S[t];S[t]=function(e){return d()&&S.isAllowed()?i.apply(S,arguments):("function"==typeof e&&S._callCallback(e,[n]),n)}})}function p(){var e=S._getAudienceManagerURLData(),t=e.url;return S._loadData(E,t,null,e)}function g(e,t){if(y=!0,e)throw new Error("[IAB plugin] : "+e);t&&t.gdprApplies&&(v=t.consentString,D=t.hasConsentChangedSinceLastCmpPull?1:0),p(),_()}function m(e,t){if(y=!0,e)throw new Error("[IAB plugin] : "+e);t.gdprApplies&&(v=t.consentString,D=t.hasConsentChangedSinceLastCmpPull?1:0),S.init(),_()}function h(){I.optIn.isComplete&&(I.optIn.isApproved(I.optIn.Categories.ECID)?S.configs.isIabContext?I.optIn.execute({command:"iabPlugin.fetchConsentData",callback:m}):(S.init(),_()):S.configs.isIabContext?I.optIn.execute({command:"iabPlugin.fetchConsentData",callback:g}):(f(),_()))}function _(){I.optIn.off("complete",h)}if(!i||i.split("").reverse().join("")!==t)throw new Error("Please use `Visitor.getInstance` to instantiate Visitor.");var S=this,I=window.adobe,v="",D=0,y=!1,b=!1;S.version="5.2.0";var A=C,O=A.Visitor;O.version=S.version,O.AuthState=L.AUTH_STATE,O.OptOut=L.OPT_OUT,A.s_c_in||(A.s_c_il=[],A.s_c_in=0),S._c="Visitor",S._il=A.s_c_il,S._in=A.s_c_in,S._il[S._in]=S,A.s_c_in++,S._instanceType="regular",S._log={requests:[]},S.marketingCloudOrgID=t,S.cookieName="AMCV_"+t,S.sessionCookieName="AMCVS_"+t;var M={};n&&n.secureCookie&&n.sameSiteCookie&&(M={sameSite:n.sameSiteCookie,secure:n.secureCookie}),S.cookieDomain=S.useLocalStorage?"":ee(null,M),S.loadSSL=!0,S.loadTimeout=3e4,S.CORSErrors=[],S.marketingCloudServer=S.audienceManagerServer="dpm.demdex.net",S.sdidParamExpiry=30;var k=null,E="MC",T="MCMID",P="MCIDTS",R="A",w="MCAID",N="AAM",x="MCAAMB",F="NONE",j=function(e){return!Object.prototype[e]},V=ae(S);S.FIELDS=L.FIELDS,S.cookieRead=function(e){return S.useLocalStorage?e===S.sessionCookieName?sessionStorage.getItem(e):localStorage.getItem(e):Z.get(e)},S.cookieWrite=function(e,t,n){var i=""+t;if(S.useLocalStorage)return e===S.sessionCookieName?sessionStorage.setItem(e,i):localStorage.setItem(e,i);var r=S.cookieLifetime?(""+S.cookieLifetime).toUpperCase():"",a={expires:n,domain:S.cookieDomain,cookieLifetime:r};return S.configs&&S.configs.secureCookie&&"https:"===location.protocol&&(a.secure=!0),S.configs&&S.configs.sameSiteCookie&&"https:"===location.protocol&&(a.sameSite=L.SAME_SITE_VALUES[S.configs.sameSiteCookie.toUpperCase()]||"Lax"),Z.set(e,i,a)},S.removeCookie=function(e){if(S.useLocalStorage)return e===S.sessionCookieName?sessionStorage.removeItem(e):localStorage.removeItem(e);var t={domain:S.cookieDomain};return S.configs&&S.configs.secureCookie&&"https:"===location.protocol&&(t.secure=!0),S.configs&&S.configs.sameSiteCookie&&"https:"===location.protocol&&(t.sameSite=L.SAME_SITE_VALUES[S.configs.sameSiteCookie.toUpperCase()]||"Lax"),Z.remove(e,t)},S.resetState=function(e){e?S._mergeServerState(e):s()},S._isAllowedDone=!1,S._isAllowedFlag=!1,S.isAllowed=function(){return S._isAllowedDone||(S._isAllowedDone=!0,(S.cookieRead(S.cookieName)||S.cookieWrite(S.cookieName,"T",1))&&(S._isAllowedFlag=!0)),"T"===S.cookieRead(S.cookieName)&&S.removeCookie(S.cookieName),S._isAllowedFlag},S.setMarketingCloudVisitorID=function(e){S._setMarketingCloudFields(e)},S._use1stPartyMarketingCloudServer=!1,S.getMarketingCloudVisitorID=function(e,t){S.marketingCloudServer&&S.marketingCloudServer.indexOf(".demdex.net")<0&&(S._use1stPartyMarketingCloudServer=!0);var n=S._getAudienceManagerURLData("_setMarketingCloudFields"),i=n.url;return S._getRemoteField(T,i,e,t,n)};var H=function(e,t){var n={};S.getMarketingCloudVisitorID(function(){t.forEach(function(e){n[e]=S._getField(e,!0)}),-1!==t.indexOf("MCOPTOUT")?S.isOptedOut(function(t){n.MCOPTOUT=t,e(n)},null,!0):e(n)},!0)};S.getVisitorValues=function(e,t){var n={MCMID:{fn:S.getMarketingCloudVisitorID,args:[!0],context:S},MCOPTOUT:{fn:S.isOptedOut,args:[void 0,!0],context:S},MCAID:{fn:S.getAnalyticsVisitorID,args:[!0],context:S},MCAAMLH:{fn:S.getAudienceManagerLocationHint,args:[!0],context:S},MCAAMB:{fn:S.getAudienceManagerBlob,args:[!0],context:S}},i=t&&t.length?U.pluck(n,t):n;t&&-1===t.indexOf("MCAID")?H(e,t):$(i,e)},S._currentCustomerIDs={},S._customerIDsHashChanged=!1,S._newCustomerIDsHash="",S.setCustomerIDs=function(t,n){if(!S.isOptedOut()&&t){if(!U.isObject(t)||U.isObjectEmpty(t))return!1;S._readVisitor();var i,a,o,s;for(i in t)if(j(i)&&(S._currentCustomerIDs.dataSources=S._currentCustomerIDs.dataSources||{},a=t[i],n=a.hasOwnProperty("hashType")?a.hashType:n,a))if("object"===e(a)){var c={};if(a.id){if(n){if(!(s=Xe(We(a.id),n)))return;a.id=s,c.hashType=n}c.id=a.id}void 0!=a.authState&&(c.authState=a.authState),S._currentCustomerIDs.dataSources[i]=c}else if(n){if(!(s=Xe(We(a),n)))return;S._currentCustomerIDs.dataSources[i]={id:s,hashType:n}}else S._currentCustomerIDs.dataSources[i]={id:a};var u=S.getCustomerIDs(!0),l=S._getField("MCCIDH"),d="";l||(l=0);for(o in u){var f=u[o];if(!U.isObjectEmpty(f))for(i in f)j(i)&&(a=f[i],d+=(d?"|":"")+i+"|"+(a.id?a.id:"")+(a.authState?a.authState:""))}S._newCustomerIDsHash=String(S._hash(d)),S._newCustomerIDsHash!==l&&(S._customerIDsHashChanged=!0,S._mapCustomerIDs(r))}},S.syncIdentity=function(t,n){if(!S.isOptedOut()&&t){if(!U.isObject(t)||U.isObjectEmpty(t))return!1;S._readVisitor();var i,a,o,s,c;for(i in t)if(j(i)&&(S._currentCustomerIDs.nameSpaces=S._currentCustomerIDs.nameSpaces||{},a=t[i],n=a.hasOwnProperty("hashType")?a.hashType:n,a&&"object"===e(a))){var u={};if(a.id){if(n){if(!(o=Xe(We(a.id),n)))return;a.id=o,u.hashType=n}u.id=a.id}void 0!=a.authState&&(u.authState=a.authState),a.dataSource&&(S._currentCustomerIDs.dataSources=S._currentCustomerIDs.dataSources||{},s=a.dataSource,S._currentCustomerIDs.dataSources[s]=u),S._currentCustomerIDs.nameSpaces[i]=u}var l=S.getCustomerIDs(!0),d=S._getField("MCCIDH"),f="";d||(d="0");for(c in l){var p=l[c];if(!U.isObjectEmpty(p))for(i in p)j(i)&&(a=p[i],f+=(f?"|":"")+i+"|"+(a.id?a.id:"")+(a.authState?a.authState:""))}S._newCustomerIDsHash=String(S._hash(f)),S._newCustomerIDsHash!==d&&(S._customerIDsHashChanged=!0,S._mapCustomerIDs(r))}},S.getCustomerIDs=function(e){S._readVisitor();var t,n,i={dataSources:{},nameSpaces:{}},r=S._currentCustomerIDs.dataSources;for(t in r)j(t)&&(n=r[t],n.id&&(i.dataSources[t]||(i.dataSources[t]={}),i.dataSources[t].id=n.id,void 0!=n.authState?i.dataSources[t].authState=n.authState:i.dataSources[t].authState=O.AuthState.UNKNOWN,n.hashType&&(i.dataSources[t].hashType=n.hashType)));var a=S._currentCustomerIDs.nameSpaces;for(t in a)j(t)&&(n=a[t],n.id&&(i.nameSpaces[t]||(i.nameSpaces[t]={}),i.nameSpaces[t].id=n.id,void 0!=n.authState?i.nameSpaces[t].authState=n.authState:i.nameSpaces[t].authState=O.AuthState.UNKNOWN,n.hashType&&(i.nameSpaces[t].hashType=n.hashType)));return e?i:i.dataSources},S.setAnalyticsVisitorID=function(e){S._setAnalyticsFields(e)},S.getAnalyticsVisitorID=function(e,t,n){if(!q.isTrackingServerPopulated()&&!n)return S._callCallback(e,[""]),"";var i="";if(n||(i=S.getMarketingCloudVisitorID(function(t){S.getAnalyticsVisitorID(e,!0)})),i||n){var r=n?S.marketingCloudServer:S.trackingServer,a="";S.loadSSL&&(n?S.marketingCloudServerSecure&&(r=S.marketingCloudServerSecure):S.trackingServerSecure&&(r=S.trackingServerSecure));var o={};if(r){var s="http"+(S.loadSSL?"s":"")+"://"+r+"/id",c="d_visid_ver="+S.version+"&mcorgid="+encodeURIComponent(S.marketingCloudOrgID)+(i?"&mid="+encodeURIComponent(i):"")+(S.idSyncDisable3rdPartySyncing||S.disableThirdPartyCookies?"&d_coppa=true":""),u=["s_c_il",S._in,"_set"+(n?"MarketingCloud":"Analytics")+"Fields"];a=s+"?"+c+"&callback=s_c_il%5B"+S._in+"%5D._set"+(n?"MarketingCloud":"Analytics")+"Fields",o.corsUrl=s+"?"+c,o.callback=u}return o.url=a,S._getRemoteField(n?T:w,a,e,t,o)}return""},S.getAudienceManagerLocationHint=function(e,t){if(S.getMarketingCloudVisitorID(function(t){S.getAudienceManagerLocationHint(e,!0)})){var n=S._getField(w);if(!n&&q.isTrackingServerPopulated()&&(n=S.getAnalyticsVisitorID(function(t){S.getAudienceManagerLocationHint(e,!0)})),n||!q.isTrackingServerPopulated()){var i=S._getAudienceManagerURLData(),r=i.url;return S._getRemoteField("MCAAMLH",r,e,t,i)}}return""},S.getLocationHint=S.getAudienceManagerLocationHint,S.getAudienceManagerBlob=function(e,t){if(S.getMarketingCloudVisitorID(function(t){S.getAudienceManagerBlob(e,!0)})){var n=S._getField(w);if(!n&&q.isTrackingServerPopulated()&&(n=S.getAnalyticsVisitorID(function(t){S.getAudienceManagerBlob(e,!0)})),n||!q.isTrackingServerPopulated()){var i=S._getAudienceManagerURLData(),r=i.url;return S._customerIDsHashChanged&&S._setFieldExpire(x,-1),S._getRemoteField(x,r,e,t,i)}}return""},S._supplementalDataIDCurrent="",S._supplementalDataIDCurrentConsumed={},S._supplementalDataIDLast="",S._supplementalDataIDLastConsumed={},S.getSupplementalDataID=function(e,t){S._supplementalDataIDCurrent||t||(S._supplementalDataIDCurrent=S._generateID(1));var n=S._supplementalDataIDCurrent;return S._supplementalDataIDLast&&!S._supplementalDataIDLastConsumed[e]?(n=S._supplementalDataIDLast,S._supplementalDataIDLastConsumed[e]=!0):n&&(S._supplementalDataIDCurrentConsumed[e]&&(S._supplementalDataIDLast=S._supplementalDataIDCurrent,S._supplementalDataIDLastConsumed=S._supplementalDataIDCurrentConsumed,S._supplementalDataIDCurrent=n=t?"":S._generateID(1),S._supplementalDataIDCurrentConsumed={}),n&&(S._supplementalDataIDCurrentConsumed[e]=!0)),n};var B=!1;S._liberatedOptOut=null,S.getOptOut=function(e,t){var n=S._getAudienceManagerURLData("_setMarketingCloudFields"),i=n.url;if(d())return S._getRemoteField("MCOPTOUT",i,e,t,n);if(S._registerCallback("liberatedOptOut",e),null!==S._liberatedOptOut)return S._callAllCallbacks("liberatedOptOut",[S._liberatedOptOut]),B=!1,S._liberatedOptOut;if(B)return null;B=!0;var r="liberatedGetOptOut";return n.corsUrl=n.corsUrl.replace(/\.demdex\.net\/id\?/,".demdex.net/optOutStatus?"),n.callback=[r],C[r]=function(e){if(e===Object(e)){var t,n,i=U.parseOptOut(e,t,F);t=i.optOut,n=1e3*i.d_ottl,S._liberatedOptOut=t,setTimeout(function(){S._liberatedOptOut=null},n)}S._callAllCallbacks("liberatedOptOut",[t]),B=!1},V.fireCORS(n),null},S.isOptedOut=function(e,t,n){t||(t=O.OptOut.GLOBAL);var i=S.getOptOut(function(n){var i=n===O.OptOut.GLOBAL||n.indexOf(t)>=0;S._callCallback(e,[i])},n);return i?i===O.OptOut.GLOBAL||i.indexOf(t)>=0:null};var G={subscribed:!1,callbacks:[]};S.onReceiveEcid=function(e){if(d())return S.getMarketingCloudVisitorID(e,!0);G.subscribed=!0,e&&"function"==typeof e&&G.callbacks.push(e)},S._fields=null,S._fieldsExpired=null,S._hash=function(e){var t,n,i=0;if(e)for(t=0;t<e.length;t++)n=e.charCodeAt(t),i=(i<<5)-i+n,i&=i;return i},S._generateID=re,S._generateLocalMID=function(){var e=S._generateID(0);return W.isClientSideMarketingCloudVisitorID=!0,e},S._callbackList=null,S._callCallback=function(e,t){try{"function"==typeof e?e.apply(A,t):e[1].apply(e[0],t)}catch(e){}},S._registerCallback=function(e,t){t&&(null==S._callbackList&&(S._callbackList={}),void 0==S._callbackList[e]&&(S._callbackList[e]=[]),S._callbackList[e].push(t))},S._callAllCallbacks=function(e,t){if(null!=S._callbackList){var n=S._callbackList[e];if(n)for(;n.length>0;)S._callCallback(n.shift(),t)}},S._addQuerystringParam=function(e,t,n,i){var r=encodeURIComponent(t)+"="+encodeURIComponent(n),a=q.parseHash(e),o=q.hashlessUrl(e);if(-1===o.indexOf("?"))return o+"?"+r+a;var s=o.split("?"),c=s[0]+"?",u=s[1];return c+q.addQueryParamAtLocation(u,r,i)+a},S._extractParamFromUri=function(e,t){var n=new RegExp("[\\?&#]"+t+"=([^&#]*)"),i=n.exec(e);if(i&&i.length)return decodeURIComponent(i[1])},S._parseAdobeMcFromUrl=a(oe.ADOBE_MC),S._parseAdobeMcSdidFromUrl=a(oe.ADOBE_MC_SDID),S._attemptToPopulateSdidFromUrl=function(e){var n=S._parseAdobeMcSdidFromUrl(e),i=1e9;n&&n.TS&&(i=q.getTimestampInSeconds()-n.TS),n&&n.SDID&&n.MCORGID===t&&i<S.sdidParamExpiry&&(S._supplementalDataIDCurrent=n.SDID,S._supplementalDataIDCurrentConsumed.SDID_URL_PARAM=!0)},S._attemptToPopulateIdsFromUrl=function(){var e=S._parseAdobeMcFromUrl();if(e&&e.TS){var n=q.getTimestampInSeconds(),i=n-e.TS;if(Math.floor(i/60)>oe.ADOBE_MC_TTL_IN_MIN||e.MCORGID!==t)return;o(e)}},S._mergeServerState=function(e){if(e)try{if(e=function(e){return q.isObject(e)?e:JSON.parse(e)}(e),e[S.marketingCloudOrgID]){var t=e[S.marketingCloudOrgID];!function(e){q.isObject(e)&&S.setCustomerIDs(e)}(t.customerIDs),s(t.sdid)}}catch(e){throw new Error("`serverState` has an invalid format.")}},S._timeout=null,S._loadData=function(e,t,n,i){t=S._addQuerystringParam(t,"d_fieldgroup",e,1),i.url=S._addQuerystringParam(i.url,"d_fieldgroup",e,1),i.corsUrl=S._addQuerystringParam(i.corsUrl,"d_fieldgroup",e,1),W.fieldGroupObj[e]=!0,i===Object(i)&&i.corsUrl&&"XMLHttpRequest"===V.corsMetadata.corsType&&V.fireCORS(i,n,e)},S._clearTimeout=function(e){null!=S._timeout&&S._timeout[e]&&(clearTimeout(S._timeout[e]),S._timeout[e]=0)},S._settingsDigest=0,S._getSettingsDigest=function(){if(!S._settingsDigest){var e=S.version;S.audienceManagerServer&&(e+="|"+S.audienceManagerServer),S.audienceManagerServerSecure&&(e+="|"+S.audienceManagerServerSecure),S._settingsDigest=S._hash(e)}return S._settingsDigest},S._readVisitorDone=!1,S._readVisitor=function(){if(!S._readVisitorDone){S._readVisitorDone=!0;var e,t,n,i,r,a,o=S._getSettingsDigest(),s=!1,c=S.cookieRead(S.cookieName),u=new Date;if(c||b||S.discardTrackingServerECID||(c=S.cookieRead(oe.FIRST_PARTY_SERVER_COOKIE)),null==S._fields&&(S._fields={}),c&&"T"!==c)for(c=c.split("|"),c[0].match(/^[\-0-9]+$/)&&(parseInt(c[0],10)!==o&&(s=!0),c.shift()),c.length%2==1&&c.pop(),e=0;e<c.length;e+=2)t=c[e].split("-"),n=t[0],i=c[e+1],t.length>1?(r=parseInt(t[1],10),a=t[1].indexOf("s")>0):(r=0,a=!1),s&&("MCCIDH"===n&&(i=""),r>0&&(r=u.getTime()/1e3-60)),n&&i&&(S._setField(n,i,1),r>0&&(S._fields["expire"+n]=r+(a?"s":""),(u.getTime()>=1e3*r||a&&!S.cookieRead(S.sessionCookieName))&&(S._fieldsExpired||(S._fieldsExpired={}),S._fieldsExpired[n]=!0)));!S._getField(w)&&q.isTrackingServerPopulated()&&(c=S.cookieRead("s_vi"))&&(c=c.split("|"),c.length>1&&c[0].indexOf("v1")>=0&&(i=c[1],e=i.indexOf("["),e>=0&&(i=i.substring(0,e)),i&&i.match(oe.VALID_VISITOR_ID_REGEX)&&S._setField(w,i)))}},S._appendVersionTo=function(e){var t="vVersion|"+S.version,n=e?S._getCookieVersion(e):null;return n?te.areVersionsDifferent(n,S.version)&&(e=e.replace(oe.VERSION_REGEX,t)):e+=(e?"|":"")+t,e},S._writeVisitor=function(){var e,t,n=S._getSettingsDigest();for(e in S._fields)j(e)&&S._fields[e]&&"expire"!==e.substring(0,6)&&(t=S._fields[e],n+=(n?"|":"")+e+(S._fields["expire"+e]?"-"+S._fields["expire"+e]:"")+"|"+t);n=S._appendVersionTo(n),S.cookieWrite(S.cookieName,n,1)},S._getField=function(e,t){return null==S._fields||!t&&S._fieldsExpired&&S._fieldsExpired[e]?null:S._fields[e]},S._setField=function(e,t,n){null==S._fields&&(S._fields={}),S._fields[e]=t,n||S._writeVisitor()},S._getFieldList=function(e,t){var n=S._getField(e,t);return n?n.split("*"):null},S._setFieldList=function(e,t,n){S._setField(e,t?t.join("*"):"",n)},S._getFieldMap=function(e,t){var n=S._getFieldList(e,t);if(n){var i,r={};for(i=0;i<n.length;i+=2)r[n[i]]=n[i+1];return r}return null},S._setFieldMap=function(e,t,n){var i,r=null;if(t){r=[];for(i in t)j(i)&&(r.push(i),r.push(t[i]))}S._setFieldList(e,r,n)},S._setFieldExpire=function(e,t,n){var i=new Date;i.setTime(i.getTime()+1e3*t),null==S._fields&&(S._fields={}),S._fields["expire"+e]=Math.floor(i.getTime()/1e3)+(n?"s":""),t<0?(S._fieldsExpired||(S._fieldsExpired={}),S._fieldsExpired[e]=!0):S._fieldsExpired&&(S._fieldsExpired[e]=!1),n&&(S.cookieRead(S.sessionCookieName)||S.cookieWrite(S.sessionCookieName,"1"))},S._findVisitorID=function(t){return t&&("object"===e(t)&&(t=t.d_mid?t.d_mid:t.visitorID?t.visitorID:t.id?t.id:t.uuid?t.uuid:""+t),t&&"NOTARGET"===(t=t.toUpperCase())&&(t=F),t&&(t===F||t.match(oe.VALID_VISITOR_ID_REGEX))||(t="")),t},S._setFields=function(t,n){if(S._clearTimeout(t),null!=S._loading&&(S._loading[t]=!1),W.fieldGroupObj[t]&&W.setState(t,!1),t===E){!0!==W.isClientSideMarketingCloudVisitorID&&(W.isClientSideMarketingCloudVisitorID=!1);var i=S._getField(T);if(!i||S.overwriteCrossDomainMCIDAndAID){if(!(i="object"===e(n)&&n.mid?n.mid:S._findVisitorID(n))){if(S._use1stPartyMarketingCloudServer&&!S.tried1stPartyMarketingCloudServer)return S.tried1stPartyMarketingCloudServer=!0,void S.getAnalyticsVisitorID(null,!1,!0);i=S._generateLocalMID()}S._setField(T,i)}i&&i!==F||(i=""),"object"===e(n)&&((n.d_region||n.dcs_region||n.d_blob||n.blob)&&S._setFields(N,n),S._use1stPartyMarketingCloudServer&&n.mid&&S._setFields(R,{id:n.id})),S._callAllCallbacks(T,[i])}if(t===N&&"object"===e(n)){var r=604800;void 0!=n.id_sync_ttl&&n.id_sync_ttl&&(r=parseInt(n.id_sync_ttl,10));var a=X.getRegionAndCheckIfChanged(n,r);S._callAllCallbacks("MCAAMLH",[a]);var o=S._getField(x);(n.d_blob||n.blob)&&(o=n.d_blob,o||(o=n.blob),S._setFieldExpire(x,r),S._setField(x,o)),o||(o=""),S._callAllCallbacks(x,[o]),!n.error_msg&&S._newCustomerIDsHash&&S._setField("MCCIDH",S._newCustomerIDsHash)}if(t===R){var s=S._getField(w);s&&!S.overwriteCrossDomainMCIDAndAID||(s=S._findVisitorID(n),s?s!==F&&S._setFieldExpire(x,-1):s=F,S._setField(w,s)),s&&s!==F||(s=""),S._callAllCallbacks(w,[s])}if(S.idSyncDisableSyncs||S.disableIdSyncs)X.idCallNotProcesssed=!0;else{X.idCallNotProcesssed=!1;var c={};c.ibs=n.ibs,c.subdomain=n.subdomain,X.processIDCallData(c)}if(n===Object(n)){var u,l;d()&&S.isAllowed()&&(u=S._getField("MCOPTOUT"));var f=U.parseOptOut(n,u,F);u=f.optOut,l=f.d_ottl,S._setFieldExpire("MCOPTOUT",l,!0),S._setField("MCOPTOUT",u),S._callAllCallbacks("MCOPTOUT",[u])}},S._loading=null,S._getRemoteField=function(e,t,n,i,r){var a,o="",s=q.isFirstPartyAnalyticsVisitorIDCall(e),c={MCAAMLH:!0,MCAAMB:!0};if(d()&&S.isAllowed()){S._readVisitor(),o=S._getField(e,!0===c[e]);if(function(){return(!o||S._fieldsExpired&&S._fieldsExpired[e])&&(!S.disableThirdPartyCalls||s)}()){if(e===T||"MCOPTOUT"===e?a=E:"MCAAMLH"===e||e===x?a=N:e===w&&(a=R),a)return!t||null!=S._loading&&S._loading[a]||(null==S._loading&&(S._loading={}),S._loading[a]=!0,a===N&&(D=0),S._loadData(a,t,function(t){if(!S._getField(e)){t&&W.setState(a,!0);var n="";e===T?n=S._generateLocalMID():a===N&&(n={error_msg:"timeout"}),S._setFields(a,n)}},r)),S._registerCallback(e,n),o||(t||S._setFields(a,{id:F}),"")}else o||(e===T?(S._registerCallback(e,n),o=S._generateLocalMID(),S.setMarketingCloudVisitorID(o)):e===w?(S._registerCallback(e,n),o="",S.setAnalyticsVisitorID(o)):(o="",i=!0))}return e!==T&&e!==w||o!==F||(o="",i=!0),n&&i&&S._callCallback(n,[o]),e===T&&G.subscribed&&(G.callbacks&&G.callbacks.length&&G.callbacks.forEach(function(e){S._callCallback(e,[o])}),G.subscribed=!1,G.callbacks.length=0),o},S._setMarketingCloudFields=function(e){S._readVisitor(),S._setFields(E,e)},S._mapCustomerIDs=function(e){S.getAudienceManagerBlob(e,!0)},S._setAnalyticsFields=function(e){S._readVisitor(),S._setFields(R,e)},S._setAudienceManagerFields=function(e){S._readVisitor(),S._setFields(N,e)},S._getAudienceManagerURLData=function(e){var t=S.audienceManagerServer,n="",i=S._getField(T),r=S._getField(x,!0),a=S._getField(w),o=a&&a!==F?"&d_cid_ic=AVID%01"+encodeURIComponent(a):"";if(S.loadSSL&&S.audienceManagerServerSecure&&(t=S.audienceManagerServerSecure),t){var s,c,u,l=S.getCustomerIDs(!0);if(l)for(c in l){var d=l[c];if(!U.isObjectEmpty(d)){var f="nameSpaces"===c?"&d_cid_ns=":"&d_cid_ic=";for(s in d)j(s)&&(u=d[s],o+=f+encodeURIComponent(s)+"%01"+encodeURIComponent(u.id?u.id:"")+(u.authState?"%01"+u.authState:""))}}e||(e="_setAudienceManagerFields");var p="http"+(S.loadSSL?"s":"")+"://"+t+"/id",g="d_visid_ver="+S.version+(v&&-1!==p.indexOf("demdex.net")?"&gdpr=1&gdpr_consent="+v:"")+(D&&-1!==p.indexOf("demdex.net")?"&d_cf="+D:"")+"&d_rtbd=json&d_ver=2"+(!i&&S._use1stPartyMarketingCloudServer?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(S.marketingCloudOrgID)+"&d_nsid="+(S.idSyncContainerID||0)+(i?"&d_mid="+encodeURIComponent(i):"")+(S.idSyncDisable3rdPartySyncing||S.disableThirdPartyCookies?"&d_coppa=true":"")+(!0===k?"&d_coop_safe=1":!1===k?"&d_coop_unsafe=1":"")+(r?"&d_blob="+encodeURIComponent(r):"")+o,m=["s_c_il",S._in,e];return n=p+"?"+g+"&d_cb=s_c_il%5B"+S._in+"%5D."+e,{url:n,corsUrl:p+"?"+g,callback:m}}return{url:n}},S.appendVisitorIDsTo=function(e){try{var t=[[T,S._getField(T)],[w,S._getField(w)],["MCORGID",S.marketingCloudOrgID]];return S._addQuerystringParam(e,oe.ADOBE_MC,c(t))}catch(t){return e}},S.appendSupplementalDataIDTo=function(e,t){if(!(t=t||S.getSupplementalDataID(q.generateRandomString(),!0)))return e;try{var n=c([["SDID",t],["MCORGID",S.marketingCloudOrgID]]);return S._addQuerystringParam(e,oe.ADOBE_MC_SDID,n)}catch(t){return e}};var q={parseHash:function(e){var t=e.indexOf("#");return t>0?e.substr(t):""},hashlessUrl:function(e){var t=e.indexOf("#");return t>0?e.substr(0,t):e},addQueryParamAtLocation:function(e,t,n){var i=e.split("&");return n=null!=n?n:i.length,i.splice(n,0,t),i.join("&")},isFirstPartyAnalyticsVisitorIDCall:function(e,t,n){if(e!==w)return!1;var i;return t||(t=S.trackingServer),n||(n=S.trackingServerSecure),!("string"!=typeof(i=S.loadSSL?n:t)||!i.length)&&(i.indexOf("2o7.net")<0&&i.indexOf("omtrdc.net")<0)},isObject:function(e){return Boolean(e&&e===Object(e))},removeCookie:function(e){Z.remove(e,{domain:S.cookieDomain})},isTrackingServerPopulated:function(){return!!S.trackingServer||!!S.trackingServerSecure},getTimestampInSeconds:function(){return Math.round((new Date).getTime()/1e3)},parsePipeDelimetedKeyValues:function(e){return e.split("|").reduce(function(e,t){var n=t.split("=");return e[n[0]]=decodeURIComponent(n[1]),e},{})},generateRandomString:function(e){e=e||5;for(var t="",n="abcdefghijklmnopqrstuvwxyz0123456789";e--;)t+=n[Math.floor(Math.random()*n.length)];return t},normalizeBoolean:function(e){return"true"===e||"false"!==e&&e},parseBoolean:function(e){return"true"===e||"false"!==e&&null},replaceMethodsWithFunction:function(e,t){for(var n in e)e.hasOwnProperty(n)&&"function"==typeof e[n]&&(e[n]=t);return e}};S._helpers=q;var X=se(S,O);S._destinationPublishing=X,S.timeoutMetricsLog=[];var W={isClientSideMarketingCloudVisitorID:null,MCIDCallTimedOut:null,AnalyticsIDCallTimedOut:null,AAMIDCallTimedOut:null,fieldGroupObj:{},setState:function(e,t){switch(e){case E:!1===t?!0!==this.MCIDCallTimedOut&&(this.MCIDCallTimedOut=!1):this.MCIDCallTimedOut=t;break;case R:!1===t?!0!==this.AnalyticsIDCallTimedOut&&(this.AnalyticsIDCallTimedOut=!1):this.AnalyticsIDCallTimedOut=t;break;case N:!1===t?!0!==this.AAMIDCallTimedOut&&(this.AAMIDCallTimedOut=!1):this.AAMIDCallTimedOut=t}}};S.isClientSideMarketingCloudVisitorID=function(){return W.isClientSideMarketingCloudVisitorID},S.MCIDCallTimedOut=function(){return W.MCIDCallTimedOut},S.AnalyticsIDCallTimedOut=function(){return W.AnalyticsIDCallTimedOut},S.AAMIDCallTimedOut=function(){return W.AAMIDCallTimedOut},S.idSyncGetOnPageSyncInfo=function(){return S._readVisitor(),S._getField("MCSYNCSOP")},S.idSyncByURL=function(e){if(!S.isOptedOut()){var t=u(e||{});if(t.error)return t.error;var n,i,r=e.url,a=encodeURIComponent,o=X;return r=r.replace(/^https:/,"").replace(/^http:/,""),n=U.encodeAndBuildRequest(["",e.dpid,e.dpuuid||""],","),i=["ibs",a(e.dpid),"img",a(r),t.ttl,"",n],o.addMessage(i.join("|")),o.requestToProcess(),"Successfully queued"}},S.idSyncByDataSource=function(e){if(!S.isOptedOut())return e===Object(e)&&"string"==typeof e.dpuuid&&e.dpuuid.length?(e.url="//dpm.demdex.net/ibs:dpid="+e.dpid+"&dpuuid="+e.dpuuid,S.idSyncByURL(e)):"Error: config or config.dpuuid is empty"},Ye(S,X),S._getCookieVersion=function(e){e=e||S.cookieRead(S.cookieName);var t=oe.VERSION_REGEX.exec(e);return t&&t.length>1?t[1]:null},S._resetAmcvCookie=function(e){var t=S._getCookieVersion();t&&!te.isLessThan(t,e)||S.removeCookie(S.cookieName)},S.setAsCoopSafe=function(){k=!0},S.setAsCoopUnsafe=function(){k=!1},function(){if(S.configs=Object.create(null),q.isObject(n))for(var e in n)j(e)&&(S[e]=n[e],S.configs[e]=n[e])}(),f();var K;S.init=function(){l()&&(I.optIn.fetchPermissions(h,!0),!I.optIn.isApproved(I.optIn.Categories.ECID))||K||(K=!0,function(){if(q.isObject(n)){S.idSyncContainerID=S.idSyncContainerID||0,k="boolean"==typeof S.isCoopSafe?S.isCoopSafe:q.parseBoolean(S.isCoopSafe),S.resetBeforeVersion&&S._resetAmcvCookie(S.resetBeforeVersion),S._attemptToPopulateIdsFromUrl(),S._attemptToPopulateSdidFromUrl(),S._readVisitor();var e=S._getField(P),t=Math.ceil((new Date).getTime()/oe.MILLIS_PER_DAY);S.idSyncDisableSyncs||S.disableIdSyncs||!X.canMakeSyncIDCall(e,t)||(S._setFieldExpire(x,-1),S._setField(P,t)),S.getMarketingCloudVisitorID(),S.getAudienceManagerLocationHint(),S.getAudienceManagerBlob(),S._mergeServerState(S.serverState)}else S._attemptToPopulateIdsFromUrl(),S._attemptToPopulateSdidFromUrl()}(),function(){if(!S.idSyncDisableSyncs&&!S.disableIdSyncs){X.checkDPIframeSrc();var e=function(){var e=X;e.readyToAttachIframe()&&e.attachIframe()};A.addEventListener("load",function(){O.windowLoaded=!0,e()});try{ie.receiveMessage(function(e){X.receiveMessage(e.data)},X.iframeHost)}catch(e){}}}(),function(){S.whitelistIframeDomains&&oe.POST_MESSAGE_ENABLED&&(S.whitelistIframeDomains=S.whitelistIframeDomains instanceof Array?S.whitelistIframeDomains:[S.whitelistIframeDomains],S.whitelistIframeDomains.forEach(function(e){var n=new Y(t,e),i=Q(S,n);ie.receiveMessage(i,e)}))}())}};Je.config=ue,C.Visitor=Je;var ze=Je,Qe=function(e){if(U.isObject(e))return Object.keys(e).filter(function(t){return""!==e[t]&&ue.getConfigs()[t]}).reduce(function(t,n){var i=ue.normalizeConfig(n,e[n]),r=U.normalizeBoolean(i);return t[n]=r,t},Object.create(null))},$e=Ge.OptIn,Ze=Ge.IabPlugin;return ze.getInstance=function(e,t){if(!e)throw new Error("Visitor requires Adobe Marketing Cloud Org ID.");e.indexOf("@")<0&&(e+="@AdobeOrg");var n=function(){var t=C.s_c_il;if(t)for(var n=0;n<t.length;n++){var i=t[n];if(i&&"Visitor"===i._c&&i.marketingCloudOrgID===e)return i}}();if(n)return n;var i=Qe(t)||{};!function(e){C.adobe.optIn=C.adobe.optIn||function(){var t=U.pluck(e,["doesOptInApply","previousPermissions","preOptInApprovals","isOptInStorageEnabled","optInStorageExpiry","isIabContext"]),n=e.optInCookieDomain||e.cookieDomain;n=n||ee(),n=n===window.location.hostname?"":n,t.optInCookieDomain=n;var i=new $e(t,{cookies:Z});if(t.isIabContext&&t.doesOptInApply){var r=new Ze;i.registerPlugin(r)}return i}()}(i||{});var r=e,a=r.split("").reverse().join(""),o=new ze(e,null,a);i.cookieDomain&&(o.cookieDomain=i.cookieDomain),i.sameSiteCookie&&i.secureCookie&&(o.configs={sameSiteCookie:i.sameSiteCookie,secureCookie:i.secureCookie}),function(){C.s_c_il.splice(--C.s_c_in,1)}();var s=U.getIeVersion();if("number"==typeof s&&s<10)return o._helpers.replaceMethodsWithFunction(o,function(){});var c=function(){try{return C.self!==C.parent}catch(e){return!0}}()&&!function(e){return e.cookieWrite("TEST_AMCV_COOKIE","T",1),"T"===e.cookieRead("TEST_AMCV_COOKIE")&&(e.removeCookie("TEST_AMCV_COOKIE"),!0)
}(o)&&C.parent?new X(e,i,o,C.parent):new ze(e,i,a);return o=null,c.init(),c},function(){function e(){ze.windowLoaded=!0}C.addEventListener?C.addEventListener("load",e):C.attachEvent&&C.attachEvent("onload",e),ze.codeLoadEnd=(new Date).getTime()}(),ze}();


if(getOneTrustCookie.indexOf('C0004:0') > -1 ){
    
    
  visitor= Visitor.getInstance("5B29123F5245AD520A490D45@AdobeOrg", {
     //trackingServer: "sc.vmware.com",
     //trackingServerSecure: "ssc.vmware.com",
     //marketingCloudServer: "sc.vmware.com",
     //marketingCloudServerSecure: "ssc.vmware.com"
     disableIdSyncs: true,
     disableThirdPartyCookies: true 
});  
    
    
}

else{

visitor= Visitor.getInstance("5B29123F5245AD520A490D45@AdobeOrg", {
     //trackingServer: "sc.vmware.com",
     //trackingServerSecure: "ssc.vmware.com",
     //marketingCloudServer: "sc.vmware.com",
     //marketingCloudServerSecure: "ssc.vmware.com"
     
     
});

}
 
}

}

var s = new AppMeasurement();
s.account="vmwareglobal";

/************************** CONFIG SECTION **************************/

s.trackDownloadLinks=true;
s.trackExternalLinks=true;
s.trackInlineStats=false;
s.linkInternalFilters="javascript:,vmware.com,vmworld.com,vforum.jp,vmware-vforum.com,vmware-juku.jp,whatisworkspaceone.com,vmwcloudcamp.com,vmworld.jp,community.pivotal.io,kb.vmtestdrive.com,future-net.com";
s.linkLeaveQueryString=false;
//s.linkTrackVars="None";
//s.linkTrackEvents="None";
s.usePlugins=true;
s.currencyCode="USD"; // override default with E-Commerce Extension
s.visitorNamespace = "20CC138653C6496B0A490D45";
s.trackingServer="sc.vmware.com";
s.trackingServerSecure="ssc.vmware.com";

//s.visitor = Visitor.getInstance("5B29123F5245AD520A490D45@AdobeOrg");
s.visitor = visitor;
s.cookieDomainPeriods="2";
s.charSet="UTF-8";
s.linkTrackVars="prop23,prop75,prop34,prop39,prop17,prop18,prop19,eVar15,eVar16,prop62,events,prop53,eVar53,eVar48";
s.linkTrackEvents="event23";

var supresslinkTrack = false;


s._channelPattern="Paid Search|PaidSearch_,paidsearch_";

s._channelDomain="social networks|facebook.com,linkedin.com,twitter.com,/t.co,instagram.com,pinterest.com,youtube.com,yelp.com,flickr.com,tumblr.com,snapchat.com,vimeo.com,vk.com,buzzfeed.com,blogspot.com,reddit.com,plus.url.google.com,plus.google.com,disq.us,disqus.com"

s.trackFormList=true;
s.formList = "TheForm,16_Q1_Jan_Form_US_Microsite_Launch,vmq_reg_user"; // Names of forms to track
s.trackPageName=true;
s.useCommerce=true;
s.varUsed="eVar17";
s.eventList="event24,event25,"; /*abandon,success,error*/
s.server = document.location.host;

s.wd=window;

/* Adobe Consulting Plugin: getVisitStart v1.0 (Requires AppMeasurement)*/
s.getVisitStart=function(){var s=this,a=new Date;a.setTime(a.getTime()+18E5);if(s.c_r("s_gvs"))return s.c_w("s_gvs",!0,a),!1;s.c_w("s_gvs",!0,a);return!0};

/* Adobe Consulting Plugin: getPageName v4.0 (No Prerequisites Needed)*/
s.getPageName=function(si,qv,hv,de){var b=location.hostname,g=location.pathname.substring(1).split("/"),f=g.length,k=location.search.substring(1).split("&"),l=k.length,h=location.hash.substring(1).split("&"),m=h.length;de=de?de:": ";si=si?si:b;qv=qv?qv:"";hv=hv?hv:"";if(1===f&&""===g[0])si=si+de+"home";else for(b=0;b<f;b++)si=si+de+g[b];if(qv&&(1!==l||""!==k[0])){f=qv.split(",");var n=f.length;for(b=0;b<n;b++)for(qv=0;qv<l;qv++)if(f[b]===k[qv].split("=")[0]){si=si+de+k[qv];break}}if(hv&&(1!==m||""!==h[0]))for(hv=hv.split(","),g=hv.length,
b=0;b<g;b++)for(qv=0;qv<m;qv++)if(hv[b]===h[qv].split("=")[0]){si=si+de+h[qv];break}return si};	

/* Adobe Consulting Plugin: getNewRepeat v2.0, requires AppMeasurement */
//s.getNewRepeat=function(d){var b=new Date,c=b.getTime();d=d?d:30;var z="s_nr"+d;b.setTime(c+864E5*d);d=this.c_r(z);if(0==d.length)return this.c_w(z,c+"-New",b),"New";d=d.split("-");if(18E4>c-d[0]&&"New"===d[1])return this.c_w(z,c+"-New",b),"New";this.c_w(z,c+"-Repeat",b);return"Repeat"};	

/* Adobe Consulting Plugin: getQueryParam v3.2 (Requires AppMeasurement and pt plugin) */ 
s.getQueryParam=function(qsp,de,url){var s=this,e="",l=function(b,c){-1<c.indexOf("#")&&(-1<c.indexOf("?")?c.indexOf("?")> 
c.indexOf("#")?(c=c.split("?").join("&"),c=c.split("#").join("?")):c=c.split("#").join("&"):c=c.split("#").join("?"));
var h=c.indexOf("?"),de="";b&&(-1<h||-1<c.indexOf("="))&&(h=c.substring(h+1),de=s.pt(h,"&","gpval",b)); return de};qsp=qsp.split(",");
var m=qsp.length;s.gpval=function(b,c){if(b){var de=b.split("="),url=de[0];de=de[1]?de[1]: !0;if(c.toLowerCase()==url.toLowerCase()) 
return"boolean"===typeof de?de:this.unescape(de)}return""};de=de?de:"";url=(url?url :s.pageURL?s.pageURL:location.href)+""; 
if((4<de.length||-1<de.indexOf("="))&&url&&4>url.length){var b=de;de=url;url=b}for(var k=0;k<m;k++)b=l(qsp[k],url),"string"===typeof 
b?(b=-1<b.indexOf("#")?b.substring(0,b.indexOf("#")):b,e+=e?de+b:b):e=""===e ?b:e+(de+b);return e}; 
/* Adobe Consulting Plugin: pt v2.0 (Requires AppMeasurement) */ 
s.pt=function(l,d,cf,fa){l=l.split(d?d:",");for(var c=0,f=l.length;c<f;c++)if(d=this[cf](l[c],fa))return d;return""};

/* Adobe Consulting Plugin: getValOnce v2.0 (Requires AppMeasurement) */
s.getValOnce=function(vtc,cn,et,ep){cn=cn?cn:"s_gvo";et=et?et:0;ep="m"===ep?6E4:864E5;if(vtc&&vtc!==this.c_r(cn)){var e=new Date;e.setTime(e.getTime()+et*ep);this.c_w(cn,vtc,0===et?0:e);return vtc}return""};
	
/* Adobe Consulting Plugin: getAndPersistValue v2.0, requires AppMeasurement */
s.getAndPersistValue=function(vtp,cn,ex){var b=new Date;cn=cn?cn:"s_gapv";(ex=ex?ex:0)?b.setTime(b.getTime()+864E5*ex):b.setTime(b.getTime()+18E5);vtp||(vtp=this.c_r(cn));this.c_w(cn,vtp,b);return vtp};

/* DWEP-1662 Starting */
/******************************************* BEGIN CODE TO DEPLOY *******************************************/
/* Adobe Consulting Plugin: getTimeParting v6.3 (No Prerequisites Needed) */
function getTimeParting(t){var c=t;if("-v"===t)return{plugin:"getTimeParting",version:"6.3"};a:{if("undefined"!==typeof window.s_c_il){var a=0;for(var b;a<window.s_c_il.length;a++)if(b=window.s_c_il[a],b._c&&"s_c"===b._c){a=b;break a}}a=void 0}"undefined"!==typeof a&&(a.contextData.getTimeParting="6.3");c=document.documentMode?void 0:c||"Etc/GMT";a=(new Date).toLocaleDateString("en-US",{timeZone:c,minute:"numeric",hour:"numeric",weekday:"long",day:"numeric",year:"numeric",month:"long"});a=/([a-zA-Z]+).*?([a-zA-Z]+).*?([0-9]+).*?([0-9]+)(.*?)([0-9])(.*)/.exec(a);return"year="+a[4]+" | month="+a[2]+" | date="+a[3]+" | day="+a[1]+" | time="+(a[6]+a[7])};
/******************************************** END CODE TO DEPLOY ********************************************/
/* DWEP-1662 Ending */

/*
 * Plugin: Form Analysis 2.2 (Success, Error, Abandonment)
 */
s.setupFormAnalysis=new Function(""
+"var s=this;if(!s.faa){s.faa=new Object;var f=s.faa;f.ol=s.wd.onload;s."
+"wd.onload=s.faol;f.uc=s.useCommerce;f.vu=s.varUsed;f.vl=f.uc?s.even"
+"tList:'';f.tfl=s.trackFormList;f.fl=s.formList;f.va=new Array('',''"
+",'','')}");
s.sendFormEvent=new Function("t","pn","fn","en",""
+"var s=this,f=s.faa;t=t=='s'?t:'e';f.va[0]=pn;f.va[1]=fn;f.va[3]=t=='"
+"s'?'Success':en;s.fasl(t);f.va[1]='';f.va[3]='';");
s.faol=new Function("e",""
+"var s=s_c_il["+s._in+"],f=s.faa,r=true,fo,fn,i,en,t,tf;if(!e)e=s.wd."
+"event;f.os=new Array;if(f.ol)r=f.ol(e);if(s.d.forms&&s.d.forms.leng"
+"th>0){for(i=s.d.forms.length-1;i>=0;i--){fo=s.d.forms[i];fn=fo.name"
+";tf=f.tfl&&s.pt(f.fl,',','ee',fn)||!f.tfl&&!s.pt(f.fl,',','ee',fn);"
+"if(tf){f.os[fn]=fo.onsubmit;fo.onsubmit=s.faos;f.va[1]=fn;f.va[3]='"
+"No Data Entered';for(en=0;en<fo.elements.length;en++){el=fo.element"
+"s[en];t=el.type;if(t&&t.toUpperCase){t=t.toUpperCase();if(t.indexOf"
+"('FIELDSET')<0){var md=el.onmousedown,kd=el.onkeydown,omd=md?md.toS"
+"tring():'',okd=kd?kd.toString():'';if(omd.indexOf('.fam(')<0&&okd.i"
+"ndexOf('.fam(')<0){el.s_famd=md;el.s_fakd=kd;el.onmousedown=s.fam;e"
+"l.onkeydown=s.fam}}}}}}f.ul=s.wd.onunload;s.wd.onunload=s.fasl;}ret"
+"urn r;");
s.faos=new Function("e",""
+"var s=s_c_il["+s._in+"],f=s.faa,su;if(!e)e=s.wd.event;if(f.vu){s[f.v"
+"u]='';f.va[1]='';f.va[3]='';}su=f.os[this.name];return su?su(e):tru"
+"e;");
s.fasl=new Function("e",""
+"var s=s_c_il["+s._in+"],f=s.faa,a=f.va,l=s.wd.location,ip=s.trackPag"
+"eName,p=s.pageName;if(a[1]!=''&&a[3]!=''){a[0]=!p&&ip?l.host+l.path"
+"name:a[0]?a[0]:p;if(!f.uc&&a[3]!='No Data Entered'){if(e=='e')a[2]="
+"'Error';else if(e=='s')a[2]='Success';else a[2]='Abandon'}else a[2]"
+"='';var tp=ip?a[0]+':':'',t3=e!='s'?':('+a[3]+')':'',ym=!f.uc&&a[3]"
+"!='No Data Entered'?tp+a[1]+':'+a[2]+t3:tp+a[1]+t3,ltv=s.linkTrackV"
+"ars,lte=s.linkTrackEvents,up=s.usePlugins;if(f.uc){s.linkTrackVars="
+"ltv=='None'?f.vu+',events':ltv+',events,'+f.vu;s.linkTrackEvents=lt"
+"e=='None'?f.vl:lte+','+f.vl;f.cnt=-1;if(e=='e')s.events=s.pt(f.vl,'"
+",','fage',2);else if(e=='s')s.events=s.pt(f.vl,',','fage',1);else s"
+".events=s.pt(f.vl,',','fage',0)}else{s.linkTrackVars=ltv=='None'?f."
+"vu:ltv+','+f.vu}s[f.vu]=ym;s.usePlugins=false;var faLink=new Object"
+"();faLink.href='#';s.tl(faLink,'o','Form Analysis');s[f.vu]='';s.us"
+"ePlugins=up}return f.ul&&e!='e'&&e!='s'?f.ul(e):true;");
s.fam=new Function("e",""
+"var s=s_c_il["+s._in+"],f=s.faa;if(!e) e=s.wd.event;var o=s.trackLas"
+"tChanged,et=e.type.toUpperCase(),t=this.type.toUpperCase(),fn=this."
+"form.name,en=this.name,sc=false;if(document.layers){kp=e.which;b=e."
+"which}else{kp=e.keyCode;b=e.button}et=et=='MOUSEDOWN'?1:et=='KEYDOW"
+"N'?2:et;if(f.ce!=en||f.cf!=fn){if(et==1&&b!=2&&'BUTTONSUBMITRESETIM"
+"AGERADIOCHECKBOXSELECT-ONEFILE'.indexOf(t)>-1){f.va[1]=fn;f.va[3]=e"
+"n;sc=true}else if(et==1&&b==2&&'TEXTAREAPASSWORDFILE'.indexOf(t)>-1"
+"){f.va[1]=fn;f.va[3]=en;sc=true}else if(et==2&&kp!=9&&kp!=13){f.va["
+"1]=fn;f.va[3]=en;sc=true}if(sc){nface=en;nfacf=fn}}if(et==1&&this.s"
+"_famd)return this.s_famd(e);if(et==2&&this.s_fakd)return this.s_fak"
+"d(e);");
s.ee=new Function("e","n",""
+"return n&&n.toLowerCase?e.toLowerCase()==n.toLowerCase():false;");
s.fage=new Function("e","a",""
+"var s=this,f=s.faa,x=f.cnt;x=x?x+1:1;f.cnt=x;return x==a?e:'';");

/* Adobe Consulting Plugin: setupLinkTrack (Requires AppMeasurement and the cleanStr plugin) Customized to vmware requirement*/
/*s.setupLinkTrack = new Function("vl", "c", "e", "" +
    "var cv=s.c_r(c);if(vl){var vla=vl.split(',');}if(cv!=''){var cva=s." +
    "split(cv,'^^');if(cva[1]!=''){for(x in vla){s[vla[x]]=cva[x];if(e){" +
    "s.events=s.apl(s.events,e,',',2);}}s.eVar39=s[vla[0]];if(s[vla[3]] && s[vla[3]].indexOf('nav')>=0){s.eVar81=s[vla[2]];if(s.c_r('ishome')==1){s.eVar81='HP_'+s[vla[2]];}}if(s.c_r('ishome')==1){s.eVar62=s[vla[2]];}}}s.c_w(c,'',0);if(typeof s.link" +
    "Object!='undefined'&&s.hbx_lt!='manual'){s.lta=[];var tmpp;if(typeof s.pageN" +
    "ame!='undefined')s.lta[0]=s.pageName;if(typeof s.linkObject!=null){" +
    "slo=s.linkObject;if(s.linkObject!=0){if(s.linkObject.getAttribute('" +
    "name')!=null){var b=s.linkObject.getAttribute('name');if(b.indexOf(" +
    "'&lpos=')>-1){s.lta[3]=b.match('\&lpos\=([^\&]*) : ([^\&]*)')[1];tmpp=b.match('\&lpos\=([^\&]*) : ([^\&]*)')[2];}if(b.indexOf" +
    "('&lid=')>-1){s.lta[1]=b.match('\&lid\=([^\&]*)')[1];}if(b.indexOf" +
    "('&le=')>-1){s.lta[4]=e=b.match('\&le\=([^\&]*)')[1];}}}if(typeof s" +
    ".lta[1]=='undefined'){if(s.linkName!=0){s.lta[1]=s.linkName;}else i" +
    "f(s.linkObject!=0){if(s.linkObject.innerHTML.indexOf('<img')>-1){s." +
    "lta[1]=s.linkObject.innerHTML.match('src=\"([^\"]*)')[1]}else{s.lta[1" +
    "]=s.linkObject.innerHTML;}}}s.lta[2]=s.lta[3]+' : '+s.lta[1]+' : '+tmpp;}if(" +
    "s.linkType!=0){for(var x=0;x<vla.length;x++){s[vla[x]]=s.cleanStr(s" +
    ".lta[x]);if(e){s.events=s.apl(s.events,e,',',2);s.linkTrackVars=s.a" +
    "pl(s.linkTrackVars,'events',',',2);}}s.linkTrackVars=s.apl(s.linkTr" +
    "ackVars,vl,',',2);}else{if(s.lta[1]){var tcv='';for(var x=0;x<s.lta" +
    ".length;x++){tcv+=s.cleanStr(s.lta[x])+'^^'}s.c_w(c,tcv)}}s.lta=nul" +
    "l;}");
*/    

//Below setuplinktrack plugin commented as part of Activity Map Link Tracking Implementation

    //new plugin
    /*s.setupLinkTrack = new Function("vl", "c", "e", "" +
    "var cv=s.c_r(c);if(vl){var vla=vl.split(',');}if(cv!=''){var cva=s." +
    "split(cv,'^^');if(cva[1]!=''){for(x in vla){s[vla[x]]=cva[x];if(e){" +
    "s.events=s.apl(s.events,e,',',2);}}s.eVar39=s[vla[0]];if(s[vla[3]] && s[vla[3]].indexOf('nav')>=0){s.eVar81=s[vla[2]];if(s.c_r('ishome')==1){s.eVar81='HP_'+s[vla[2]];}}if(s.c_r('ishome')==1){s.eVar62=s[vla[2]];}}}s.c_w(c,'',0);if(typeof s.link" +
    "Object!='undefined'&&s.hbx_lt!='manual'){s.lta=[];var tmpp;if(typeof s.pageN" +
    "ame!='undefined')s.lta[0]=s.pageName;if(typeof s.linkObject!=null){" +
    "slo=s.linkObject;if(s.linkObject!=0){if(s.linkObject.getAttribute('" +
    "name')!=null){var b=s.linkObject.getAttribute('name');if(b.indexOf(" +
    "'&lpos=')>-1){s.lta[3]=b.match('\&lpos\=([^\&]*) : ([^\&]*)')[1];tmpp=b.match('\&lpos\=([^\&]*) : ([^\&]*)')[2];}if(b.indexOf" +
    "('&lid=')>-1){s.lta[1]=b.match('\&lid\=([^\&]*)')[1];}if(b.indexOf" +
    "('&le=')>-1){s.lta[4]=e=b.match('\&le\=([^\&]*)')[1];}}}if(typeof s" +
    ".lta[1]=='undefined'){if(s.linkName!=0){s.lta[1]=s.linkName;}else i" +
    "f(s.linkObject!=0){if(s.linkObject.innerHTML.indexOf('<img')>-1){s." +
    "lta[1]=s.linkObject.innerHTML.match('src=\"([^\"]*)')[1]}else{s.lta[1" +
    "]=s.linkObject.innerHTML;}}}s.lta[2]=s.lta[3]+' : '+s.lta[1]+' : '+tmpp; if(vla[5] != 'testingupvalue'){s.lta[2]=s.lta[3]+' : '+ vla[5] +' : '+tmpp}; if(typeof upvalue !='undefined'){s.lta[2]=s.lta[3]+' : '+upvalue+' : '+tmpp;}}if(" +
    "s.linkType!=0){for(var x=0;x<vla.length;x++){s[vla[x]]=s.cleanStr(s" +
    ".lta[x]);if(e){s.events=s.apl(s.events,e,',',2);s.linkTrackVars=s.a" +
    "pl(s.linkTrackVars,'events',',',2);}}s.linkTrackVars=s.apl(s.linkTr" +
    "ackVars,vl,',',2);}else{if(s.lta[1]){var tcv='';for(var x=0;x<s.lta" +
    ".length;x++){tcv+=s.cleanStr(s.lta[x])+'^^'}s.c_w(c,tcv)}}s.lta=nul" +
    "l;}");*/
    
    
    
    
    //start plugin
    /*
  s.setupLinkTrack = new Function("vl", "c", "e", "" +
    "var cv=s.c_r(c);if(vl){var vla=vl.split(',');}if(cv!=''){var cva=s." +
    "split(cv,'^^');if(cva[1]!=''){for(x in vla){s[vla[x]]=cva[x];if(e){" +
    "s.events=s.apl(s.events,e);}}s.eVar39=s[vla[0]];if(s[vla[3]] && s[vla[3]].indexOf('nav')>=0){s.eVar81=s[vla[2]];if(s.c_r('ishome')==1){s.eVar81='HP_'+s[vla[2]];}}if(s.c_r('ishome')==1){s.eVar62=s[vla[2]];}}}s.c_w(c,'',0);if(typeof s.link" +
    "Object!='undefined'&&s.hbx_lt!='manual'){s.lta=[];var tmpp;if(typeof s.pageN" +
    "ame!='undefined')s.lta[0]=s.pageName;if(typeof s.linkObject!=null){" +
    "slo=s.linkObject;if(s.linkObject!=0){if(s.linkObject.getAttribute('" +
    "name')!=null){var b=s.linkObject.getAttribute('name');if(b.indexOf(" +
    "'&lpos=')>-1){s.lta[3]=b.match('\&lpos\=([^\&]*) : ([^\&]*)')[1];tmpp=b.match('\&lpos\=([^\&]*) : ([^\&]*)')[2];}if(b.indexOf" +
    "('&lid=')>-1){s.lta[1]=b.match('\&lid\=([^\&]*)')[1];}if(b.indexOf" +
    "('&le=')>-1){s.lta[4]=e=b.match('\&le\=([^\&]*)')[1];}}}if(typeof s" +
    ".lta[1]=='undefined'){if(s.linkName!=0){s.lta[1]=s.linkName;}else i" +
    "f(s.linkObject!=0){if(s.linkObject.innerHTML.indexOf('<img')>-1){s." +
    "lta[1]=s.linkObject.innerHTML.match('src=\"([^\"]*)')[1]}else{s.lta[1" +
    "]=s.linkObject.innerHTML;}}}s.lta[2]=s.lta[3]+' : '+s.lta[1]+' : '+tmpp;" +
	"if(vla[6] != 'testingupvalue'){s.lta[2]=s.lta[3]+' : '+ vla[6] +' : '+tmpp}; if(typeof upvalue !='undefined'){s.lta[2]=s.lta[3]+' : '+upvalue+' : '+tmpp;}}if(" +
    "s.linkType!=0){for(var x=0;x<vla.length;x++){s[vla[x]]=s.cleanStr(s" +
    ".lta[x]);if(e){s.events=s.apl(s.events,e);s.linkTrackVars=s.a" +
    "pl(s.linkTrackVars,'events',',',2);}}s.linkTrackVars=s.apl(s.linkTr" +
    "ackVars,vl,',',2);}else{if(s.lta[1]){var tcv='';for(var x=0;x<s.lta" +
    ".length;x++){tcv+=s.cleanStr(s.lta[x])+'^^'}s.c_w(c,tcv)};if (digitalData.page.attributes.aemPageName=='home'){s.c_w('ishome',1);}else{s.c_w('ishome',0);}}}s.lta=nul" +
    "l;");   
    */
    
/* Adobe Consulting Plugin: cleanStr */
s.cleanStr = function(a){
    if(typeof a != 'undefined'){
        //a = a.replace(/<\/?span>|<\/?strong>|\r\n|\r\s+|\n\s+/g, '').trim();
       a = a.replace(/<\/?i>|<i\s(id|class)=.*?">|<\/?span>|<\/?strong>|\r\n|\r\s+|\n\s+/g, '').trim();
        return a.trim();
    }
}	
/* Adobe Consulting Plugin: apl (appendToList) v3.1 (Requires AppMeasurement and inList v2.0) */
s.apl=function(lv,vta,d1,d2,cc){d1=d1?d1:",";d2=d2?d2:d1;if("undefined"===typeof this.inList)return console.log("Adobe Analytics: Problem with apl plugin - inList plugin not available"),lv;if("undefined"!==typeof lv&&"string"!==typeof lv)return console.log("Adobe Analytics: Problem with apl plugin - first passed-in argument is not a string object"),"";if("string"!==typeof vta)return lv;vta=vta.split(",");for(var g=vta.length,d=0;d<g;d++)this.inList(lv,vta[d],d1,cc)||(lv=lv?lv+d2+vta[d]:vta[d]);return lv};

/* Adobe Consulting Plugin: inList v2.0 (Requires AppMeasurement) */
s.inList=function(lv,vtc,d,cc){if("string"!==typeof vtc)return!1;if("string"===typeof lv)lv=lv.split(d?d:",");else if("object" !==typeof lv)return!1;d=0;for(var e=lv.length;d<e;d++)if(cc&&vtc===lv[d]||!cc&&vtc.toLowerCase()===lv[d].toLowerCase()) return!0;return!1};

s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");


/* Adobe Consulting Plugin: channelManager v4.0 - Requires AppMeasurement and CONSULTING-BUILT getQueryParam v3.0/pt v2.0Plugins (i.e. relying on Util.getQueryParam will NOT work) */
s.channelManager=function(qsp,tbl,con){var s=this,e=!0,p=new Date;p.setTime(p.getTime()+18E5);if(s._channel)return"";var g="n/a",l="n/a",u="n/a",v="n/a",w="n/a",q="n/a";s.c_r("s_tbm")&&(e=!1);tbl&&s.c_r("s_tbm"+tbl.toString())&&(e=!1);s.c_w("s_tbm",!0,p);var h=s.referrer?s.referrer:document.referrer;"Typed/Bookmarked"===h&&(h="");var c=!1;if(h){c=!0;var k=h.split("/")[2].split("?")[0].toLowerCase(),b=s.linkInternalFilters.toLowerCase().split(","),d=b.length;for(a=0;a<d;a++)if(-1<k.indexOf(b[a])){c=
!1;break}}if(c&&(v=h,w=k,g="Other Natural Referrers",l=g+": "+k,s._channelSEList)){d=s._channelSEList.split(">");for(var m=d.length,n,t,y,a=0;a<m;a++){b=d[a];n=b.split("|");t=n[1].split(",");y=t.length;for(b=0;b<y;b++)if(-1<k.indexOf(t[b].toLowerCase())){q=n[0];break}if("n/a"!==q)break}}d="";if(qsp){b=qsp.split(",");qsp=b.length;for(a=0;a<qsp&&!(d=s.getQueryParam(b[a]));a++);d&&(u=l=d,g="n/a"!==q?"Paid Search":"Unknown Paid Channel")}d||"n/a"===q||(g="Natural Search",l=g+": "+q);!e||h||d||(v=w=l=
g="Typed/Bookmarked");if(s._channelDomain&&c)for(qsp=!1,e=s._channelDomain.split(">"),h=e.length,a=0;a<h;a++){c=e[a]?e[a].split("|"):"";m=c[1]?c[1].split(","):"";n=m.length;for(b=0;b<n;b++)if(t=m[b].toLowerCase(),-1<("/"+k).indexOf(t)){g=c[0];l=d?l:g+": "+k;qsp=!0;break}if(qsp)break}if(s._channelParameter)for(qsp=!1,e=s._channelParameter.split(">"),h=e.length,a=0;a<h;a++){c=e[a]?e[a].split("|"):"";n=c[1]?c[1].split(","):"";b=0;for(m=n.length;b<m;b++)if(s.getQueryParam(n[b])){g=c[0];l=d?l:g+
": "+k;qsp=!0;break}if(qsp)break}if(s._channelPattern&&d)for(qsp=!1,e=s._channelPattern.split(">"),h=e.length,a=0;a<h;a++){c=e[a]?e[a].split("|"):"";k=c[1]?c[1].split(","):"";b=0;for(m=k.length;b<m;b++)if(!con&&0==d.toLowerCase().indexOf(k[b].toLowerCase())||con&&-1<d.toLowerCase().indexOf(k[b].toLowerCase())){g=c[0];u=l=d;qsp=!0;break}if(qsp)break}"n/a"!==g?(s._channel=g,s._campaign=l,s._campaignID=u,s._referrer=v,s._referringDomain=w,s._searchEngine=q,"Typed/Bookmarked"!==s._channel&&
tbl&&(p.setTime(p.getTime()+864E5*Number(tbl)),s.c_w("s_tbm"+tbl.toString(),!0,p))):s._channel=s._campaign=s._campaignID=s._referrer=s._referringDomain=s._searchEngine=""};

/* channelManager SearchEngineList (Recommeded for ALL Deployments) */
s._channelSEList="Google|.google.,googlesyndication.com,.googleadservices.com>Google Search App|googlequicksearchbox>Bing|bing.com>Yahoo!|yahoo.com,yahoo.co.jp>Naver|naver.com,search.naver.com>Yandex.ru|yandex>DuckDuckGo|duckduckgo.com>Daum|daum.net,search.daum.net>Baidu|baidu.com>MyWay.com|myway.com>Ecosia|ecosia.org>Ask|ask.jp,ask.co>DogPile|dogpile.com>sm.cn|sm.cn>sogou.com|sogou.com>Haosou|so.com>Seznam.cz|Seznam.cz>AOL|search.aol.,suche.aolsvc.de>AltaVista|altavista.co,altavista.de>MyWebSearch|.mywebsearch.com>WebCrawler|webcrawler.com>Wow|wow.com>InfoSpace|infospace.com>Blekko|blekko.com>Docomo|docomo.ne.jp"

/* Adobe Consulting Plugin: getPercentPageViewed v3.0 (Requires AppMeasurement; also handlePPVevents and pageFirstOnly plugin) */
s.getPercentPageViewed=function(pid,ch){var s=this,a=s.c_r("s_ppv");a=-1<a.indexOf(",")?a.split(","):[];a[0]=s.unescape(a[0]);pid=pid?pid:s.pageName?s.pageName:document.location.href;s.ppvChange=ch?ch:!0;if("undefined"===typeof s.linkType||"o"!==s.linkType)s.ppvID&&s.ppvID===pid||(s.ppvID=pid,s.c_w("s_ppv",""),s.handlePPVevents()),s.pageFirstOnly("s_gppvLoad")&&window.addEventListener&&(window.addEventListener("load",s.handlePPVevents,!1),window.addEventListener("click",s.handlePPVevents,
!1),window.addEventListener("scroll",s.handlePPVevents,!1),window.addEventListener("resize",s.handlePPVevents,!1)),s._ppvPreviousPage=a[0]?a[0]:"",s._ppvHighestPercentViewed=a[1]?a[1]:"",s._ppvInitialPercentViewed=a[2]?a[2]:"",s._ppvHighestPixelsSeen=a[3]?a[3]:""};

/* Adobe Consulting Plugin: handlePPVEvents helper function v3.0 (for getPercentPageViewed Plugin) */
s.handlePPVevents=function(){if(s_c_il){for(var b=0,d=s_c_il.length;b<d;b++)if("undefined"!=typeof s_c_il[b]&&s_c_il[b]._c&&"s_c"==s_c_il[b]._c){var a=s_c_il[b];break}if(a&&a.ppvID){var f=Math.max(Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),Math.max(document.body.offsetHeight,document.documentElement.offsetHeight),Math.max(document.body.clientHeight,document.documentElement.clientHeight));b=(window.pageYOffset||window.document.documentElement.scrollTop||window.document.body.scrollTop)+
(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight);d=Math.min(Math.round(b/f*100),100);var e="";!a.c_r("s_tp")||a.unescape(a.c_r("s_ppv").split(",")[0])!==a.ppvID||1==a.ppvChange&&a.c_r("s_tp")&&f!=a.c_r("s_tp")?(a.c_w("s_tp",f),a.c_w("s_ppv","")):e=a.c_r("s_ppv");var c=e&&-1<e.indexOf(",")?e.split(",",4):[];f=0<c.length?c[0]:escape(a.ppvID);var g=1<c.length?parseInt(c[1]):d,h=2<c.length?parseInt(c[2]):d;c=3<c.length?parseInt(c[3]):b;0<d&&(e=f+","+(d>g?d:g)+","+
h+","+(b>c?b:c));a.c_w("s_ppv",e)}}};

/* Adobe Consulting Plugin: pageFirstOnly v2.0 (Requires AppMeasurement) */
s.pageFirstOnly=function(on){var s=this;s.__fo||(s.__fo={});if(s.__fo[on])return!1;s.__fo[on]={};return!0};


/*AudienceManagement module*/
function AppMeasurement_Module_AudienceManagement(d){var a=this;a.s=d;var b=window;b.s_c_in||(b.s_c_il=[],b.s_c_in=0);a._il=b.s_c_il;a._in=b.s_c_in;a._il[a._in]=a;b.s_c_in++;a._c="s_m";a.setup=function(c){b.DIL&&c&&(c.disableDefaultRequest=!0,c.disableCORS=!0,c.secureDataCollection=!1,a.instance=b.DIL.create(c),a.tools=b.DIL.tools)};a.isReady=function(){return a.instance?!0:!1};a.getEventCallConfigParams=function(){return a.instance&&a.instance.api&&a.instance.api.getEventCallConfigParams?a.instance.api.getEventCallConfigParams():
{}};a.passData=function(b){a.instance&&a.instance.api&&a.instance.api.passData&&a.instance.api.passData(b)}}

if(getOneTrustCookie.indexOf('C0004:1') > -1 ) {

!function(){"use strict";var r,o,a;"function"!=typeof window.DIL&&(window.DIL=function(n){var c,e,I,r,u,h,t,o,s,i,a,d,y,l,f,g,p,m,b,v,D,O=[],C={};function S(e){return void 0===e||!0===e}n!==Object(n)&&(n={}),I=n.partner,r=n.containerNSID,u=n.mappings,h=n.uuidCookie,t=!0===n.enableErrorReporting,o=n.visitorService,s=n.declaredId,i=!0===n.delayAllUntilWindowLoad,a=S(n.secureDataCollection),d="boolean"==typeof n.isCoopSafe?n.isCoopSafe:null,y=S(n.enableHrefererParam),l=S(n.enableLogging),f=S(n.enableUrlDestinations),g=S(n.enableCookieDestinations),p=!0===n.disableDefaultRequest,m=n.afterResultForDefaultRequest,b=n.visitorConstructor,v=!0===n.disableCORS,D=!0===n.ignoreHardDependencyOnVisitorAPI,t&&DIL.errorModule.activate(),D&&O.push("Warning: this instance is configured to ignore the hard dependency on the VisitorAPI service. This means that no URL destinations will be fired if the instance has no connection to VisitorAPI. If the VisitorAPI service is not instantiated, ID syncs will not be fired either.");var w=!0===window._dil_unit_tests;if((c=arguments[1])&&O.push(c+""),!I||"string"!=typeof I){var _={name:"error",message:c="DIL partner is invalid or not specified in initConfig",filename:"dil.js"};return DIL.errorModule.handleError(_),new Error(c)}if(c="DIL containerNSID is invalid or not specified in initConfig, setting to default of 0",!r&&"number"!=typeof r||(r=parseInt(r,10),!isNaN(r)&&0<=r&&(c="")),c&&(r=0,O.push(c),c=""),(e=DIL.getDil(I,r))instanceof DIL&&e.api.getPartner()===I&&e.api.getContainerNSID()===r)return e;if(!(this instanceof DIL))return new DIL(n,"DIL was not instantiated with the 'new' operator, returning a valid instance with partner = "+I+" and containerNSID = "+r);DIL.registerDil(this,I,r);var R={doesConsoleLogExist:window.console===Object(window.console)&&"function"==typeof window.console.log,logMemo:{},log:function(e){O.push(e),l&&this.doesConsoleLogExist&&Function.prototype.bind.call(window.console.log,window.console).apply(window.console,arguments)},logOnce:function(e){this.logMemo[e]||(this.logMemo[e]=!0,R.log(e))}},E={IS_HTTPS:a||"https:"===document.location.protocol,SIX_MONTHS_IN_MINUTES:259200,IE_VERSION:function(){if(document.documentMode)return document.documentMode;for(var e=7;4<e;e--){var t=document.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}return null}()};E.IS_IE_LESS_THAN_10="number"==typeof E.IE_VERSION&&E.IE_VERSION<10;var P={stuffed:{}},L={},A={firingQueue:[],fired:[],firing:!1,sent:[],errored:[],reservedKeys:{sids:!0,pdata:!0,logdata:!0,callback:!0,postCallbackFn:!0,useImageRequest:!0},firstRequestHasFired:!1,abortRequests:!1,num_of_cors_responses:0,num_of_cors_errors:0,corsErrorSources:[],num_of_img_responses:0,num_of_img_errors:0,platformParams:{d_nsid:r+"",d_rtbd:"json",d_jsonv:DIL.jsonVersion+"",d_dst:"1"},nonModStatsParams:{d_rtbd:!0,d_dst:!0,d_cts:!0,d_rs:!0},modStatsParams:null,adms:{TIME_TO_CATCH_ALL_REQUESTS_RELEASE:3e4,calledBack:!1,mid:null,noVisitorAPI:null,VisitorAPI:null,instance:null,releaseType:"no VisitorAPI",isOptedOut:!0,isOptedOutCallbackCalled:!1,admsProcessingStarted:!1,process:function(e){try{if(this.admsProcessingStarted)return;this.admsProcessingStarted=!0;var t,n,s,i=o;if("function"!=typeof e||"function"!=typeof e.getInstance)throw this.noVisitorAPI=!0,new Error("Visitor does not exist.");if(i!==Object(i)||!(t=i.namespace)||"string"!=typeof t)throw this.releaseType="no namespace",new Error("DIL.create() needs the initConfig property `visitorService`:{namespace:'<Experience Cloud Org ID>'}");if((n=e.getInstance(t,{idSyncContainerID:r}))!==Object(n)||"function"!=typeof n.isAllowed||"function"!=typeof n.getMarketingCloudVisitorID||"function"!=typeof n.getCustomerIDs||"function"!=typeof n.isOptedOut||"function"!=typeof n.publishDestinations)throw this.releaseType="invalid instance",s="Invalid Visitor instance.",n===Object(n)&&"function"!=typeof n.publishDestinations&&(s+=" In particular, visitorInstance.publishDestinations is not a function. This is needed to fire URL destinations in DIL v8.0+ and should be present in Visitor v3.3.0+ ."),new Error(s);if(this.VisitorAPI=e,!n.isAllowed())return this.releaseType="VisitorAPI is not allowed to write cookies",void this.releaseRequests();this.instance=n,this.waitForMidToReleaseRequests()}catch(e){if(!D)throw new Error("Error in processing Visitor API, which is a hard dependency for DIL v8.0+: "+e.message);this.releaseRequests()}},waitForMidToReleaseRequests:function(){var t=this;this.instance&&(this.instance.getMarketingCloudVisitorID(function(e){t.mid=e,t.releaseType="VisitorAPI",t.releaseRequests()},!0),(!N.exists||!N.isIabContext&&N.isApproved()||N.isIabContext&&B.hasGoSignal())&&setTimeout(function(){"VisitorAPI"!==t.releaseType&&(t.releaseType="timeout",t.releaseRequests())},this.getLoadTimeout()))},releaseRequests:function(){this.calledBack=!0,A.registerRequest()},getMarketingCloudVisitorID:function(){return this.instance?this.instance.getMarketingCloudVisitorID():null},getMIDQueryString:function(){var e=k.isPopulatedString,t=this.getMarketingCloudVisitorID();return e(this.mid)&&this.mid===t||(this.mid=t),e(this.mid)?"d_mid="+this.mid+"&":""},getCustomerIDs:function(){return this.instance?this.instance.getCustomerIDs():null},getCustomerIDsQueryString:function(e){if(e!==Object(e))return"";var t,n,s,i,r="",o=[],a=[];for(t in e)e.hasOwnProperty(t)&&(n=e[a[0]=t])===Object(n)&&(a[1]=n.id||"",a[2]=n.authState||0,o.push(a),a=[]);if(i=o.length)for(s=0;s<i;s++)r+="&d_cid_ic="+x.encodeAndBuildRequest(o[s],"%01");return r},getIsOptedOut:function(){this.instance?this.instance.isOptedOut([this,this.isOptedOutCallback],this.VisitorAPI.OptOut.GLOBAL,!0):(this.isOptedOut=!1,this.isOptedOutCallbackCalled=!0)},isOptedOutCallback:function(e){this.isOptedOut=e,this.isOptedOutCallbackCalled=!0,A.registerRequest(),N.isIabContext()&&B.checkQueryStringObject()},getLoadTimeout:function(){var e=this.instance;if(e){if("function"==typeof e.getLoadTimeout)return e.getLoadTimeout();if(void 0!==e.loadTimeout)return e.loadTimeout}return this.TIME_TO_CATCH_ALL_REQUESTS_RELEASE}},declaredId:{declaredId:{init:null,request:null},declaredIdCombos:{},setDeclaredId:function(e,t){var n=k.isPopulatedString,s=encodeURIComponent;if(e===Object(e)&&n(t)){var i=e.dpid,r=e.dpuuid,o=null;if(n(i)&&n(r))return o=s(i)+"$"+s(r),!0===this.declaredIdCombos[o]?"setDeclaredId: combo exists for type '"+t+"'":(this.declaredIdCombos[o]=!0,this.declaredId[t]={dpid:i,dpuuid:r},"setDeclaredId: succeeded for type '"+t+"'")}return"setDeclaredId: failed for type '"+t+"'"},getDeclaredIdQueryString:function(){var e=this.declaredId.request,t=this.declaredId.init,n=encodeURIComponent,s="";return null!==e?s="&d_dpid="+n(e.dpid)+"&d_dpuuid="+n(e.dpuuid):null!==t&&(s="&d_dpid="+n(t.dpid)+"&d_dpuuid="+n(t.dpuuid)),s}},registerRequest:function(e){var t,n=this.firingQueue;e===Object(e)&&(n.push(e),e.isDefaultRequest||(p=!0)),this.firing||!n.length||i&&!DIL.windowLoaded||(this.adms.isOptedOutCallbackCalled||this.adms.getIsOptedOut(),this.adms.calledBack&&!this.adms.isOptedOut&&this.adms.isOptedOutCallbackCalled&&(N.isApproved()||B.hasGoSignal())&&(this.adms.isOptedOutCallbackCalled=!1,(t=n.shift()).src=t.src.replace(/&d_nsid=/,"&"+this.adms.getMIDQueryString()+B.getQueryString()+"d_nsid="),k.isPopulatedString(t.corsPostData)&&(t.corsPostData=t.corsPostData.replace(/^d_nsid=/,this.adms.getMIDQueryString()+B.getQueryString()+"d_nsid=")),V.fireRequest(t),this.firstRequestHasFired||"script"!==t.tag&&"cors"!==t.tag||(this.firstRequestHasFired=!0)))},processVisitorAPI:function(){this.adms.process(b||window.Visitor)},getCoopQueryString:function(){var e="";return!0===d?e="&d_coop_safe=1":!1===d&&(e="&d_coop_unsafe=1"),e}};C.requestController=A;var q,j,T={sendingMessages:!1,messages:[],messagesPosted:[],destinations:[],destinationsPosted:[],jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],publishDestinationsVersion:null,requestToProcess:function(e,t){var n,s=this;function i(){s.jsonForComparison.push(e),s.jsonWaiting.push([e,t])}if(e&&!k.isEmptyObject(e))if(n=JSON.stringify(e.dests||[]),this.jsonForComparison.length){var r,o,a,d=!1;for(r=0,o=this.jsonForComparison.length;r<o;r++)if(a=this.jsonForComparison[r],n===JSON.stringify(a.dests||[])){d=!0;break}d?this.jsonDuplicates.push(e):i()}else i();if(this.jsonWaiting.length){var u=this.jsonWaiting.shift();this.process(u[0],u[1]),this.requestToProcess()}this.messages.length&&!this.sendingMessages&&this.sendMessages()},process:function(e){if(f){var t,n,s,i,r,o,a=encodeURIComponent,d=this.getPublishDestinationsVersion(),u=!1;if(-1!==d){if((t=e.dests)&&t instanceof Array&&(n=t.length)){for(s=0;s<n;s++)i=t[s],o=[a("dests"),a(i.id||""),a(i.y||""),a(i.c||"")].join("|"),this.addMessage(o),r={url:i.c,hideReferrer:void 0===i.hr||!!i.hr,message:o},this.addDestination(r),void 0!==i.hr&&(u=!0);1===d&&u&&R.logOnce("Warning: visitorInstance.publishDestinations version is old (Visitor v3.3.0 to v4.0.0). URL destinations will not have the option of being fired on page, only in the iframe.")}this.jsonProcessed.push(e)}}},addMessage:function(e){this.messages.push(e)},addDestination:function(e){this.destinations.push(e)},sendMessages:function(){this.sendingMessages||(this.sendingMessages=!0,f&&this.messages.length&&this.publishDestinations())},publishDestinations:function(){function e(e){R.log("visitor.publishDestinations() result: "+(e.error||e.message)),n.sendingMessages=!1,n.requestToProcess()}function t(){n.messages=[],n.destinations=[]}var n=this,s=A.adms.instance,i=[],r=[];return 1===this.publishDestinationsVersion?(x.extendArray(i,this.messages),x.extendArray(this.messagesPosted,this.messages),t(),s.publishDestinations(I,i,e),"Called visitor.publishDestinations() version 1"):1<this.publishDestinationsVersion?(x.extendArray(r,this.destinations),x.extendArray(this.destinationsPosted,this.destinations),t(),s.publishDestinations({subdomain:I,callback:e,urlDestinations:r}),"Called visitor.publishDestinations() version > 1"):void 0},getPublishDestinationsVersion:function(){if(null!==this.publishDestinationsVersion)return this.publishDestinationsVersion;var e=A.adms.instance,n=-1;return e.publishDestinations(null,null,function(e){if(e===Object(e)){var t=e.error;"subdomain is not a populated string."===t?n=1:"Invalid parameters passed."===t&&(n=2)}}),this.publishDestinationsVersion=n}},M={traits:function(e){return k.isValidPdata(e)&&(L.sids instanceof Array||(L.sids=[]),x.extendArray(L.sids,e)),this},pixels:function(e){return k.isValidPdata(e)&&(L.pdata instanceof Array||(L.pdata=[]),x.extendArray(L.pdata,e)),this},logs:function(e){return k.isValidLogdata(e)&&(L.logdata!==Object(L.logdata)&&(L.logdata={}),x.extendObject(L.logdata,e)),this},customQueryParams:function(e){return k.isEmptyObject(e)||x.extendObject(L,e,A.reservedKeys),this},signals:function(e,t){var n,s=e;if(!k.isEmptyObject(s)){if(t&&"string"==typeof t)for(n in s={},e)e.hasOwnProperty(n)&&(s[t+n]=e[n]);x.extendObject(L,s,A.reservedKeys)}return this},declaredId:function(e){return A.declaredId.setDeclaredId(e,"request"),this},result:function(e){return"function"==typeof e&&(L.callback=e),this},afterResult:function(e){return"function"==typeof e&&(L.postCallbackFn=e),this},useImageRequest:function(){return L.useImageRequest=!0,this},clearData:function(){return L={},this},submit:function(e){return L.isDefaultRequest=!!e,V.submitRequest(L),L={},this},getPartner:function(){return I},getContainerNSID:function(){return r},getEventLog:function(){return O},getState:function(){var e={},t={};return x.extendObject(e,A,{registerRequest:!0}),x.extendObject(t,T,{requestToProcess:!0,process:!0,sendMessages:!0}),{initConfig:n,pendingRequest:L,otherRequestInfo:e,destinationPublishingInfo:t,log:O}},idSync:function(){throw new Error("Please use the `idSyncByURL` method of the Experience Cloud ID Service (Visitor) instance")},aamIdSync:function(){throw new Error("Please use the `idSyncByDataSource` method of the Experience Cloud ID Service (Visitor) instance")},passData:function(e){return k.isEmptyObject(e)?"Error: json is empty or not an object":(V.defaultCallback(e),e)},getPlatformParams:function(){return A.platformParams},getEventCallConfigParams:function(){var e,t=A,n=t.modStatsParams,s=t.platformParams;if(!n){for(e in n={},s)s.hasOwnProperty(e)&&!t.nonModStatsParams[e]&&(n[e.replace(/^d_/,"")]=s[e]);!0===d?n.coop_safe=1:!1===d&&(n.coop_unsafe=1),t.modStatsParams=n}return n},setAsCoopSafe:function(){return d=!0,this},setAsCoopUnsafe:function(){return d=!1,this},getEventCallIabSignals:function(e){var t;return e!==Object(e)?"Error: config is not an object":"function"!=typeof e.callback?"Error: config.callback is not a function":(t=parseInt(e.timeout,10),isNaN(t)&&(t=null),void B.getQueryStringObject(e.callback,t))}},V={corsMetadata:(q="none","undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&"withCredentials"in new XMLHttpRequest&&(q="XMLHttpRequest"),{corsType:q}),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new window[this.corsMetadata.corsType]},submitRequest:function(e){return A.registerRequest(V.createQueuedRequest(e)),!0},createQueuedRequest:function(e){var t,n,s,i,r,o=e.callback,a="img",d=e.isDefaultRequest;if(delete e.isDefaultRequest,!k.isEmptyObject(u))for(s in u)if(u.hasOwnProperty(s)){if(null==(i=u[s])||""===i)continue;if(s in e&&!(i in e)&&!(i in A.reservedKeys)){if(null==(r=e[s])||""===r)continue;e[i]=r}}return k.isValidPdata(e.sids)||(e.sids=[]),k.isValidPdata(e.pdata)||(e.pdata=[]),k.isValidLogdata(e.logdata)||(e.logdata={}),e.logdataArray=x.convertObjectToKeyValuePairs(e.logdata,"=",!0),e.logdataArray.push("_ts="+(new Date).getTime()),"function"!=typeof o&&(o=this.defaultCallback),t=this.makeRequestSrcData(e),(n=this.getCORSInstance())&&!0!==e.useImageRequest&&(a="cors"),{tag:a,src:t.src,corsSrc:t.corsSrc,callbackFn:o,postCallbackFn:e.postCallbackFn,useImageRequest:!!e.useImageRequest,requestData:e,corsInstance:n,corsPostData:t.corsPostData,isDefaultRequest:d}},defaultCallback:function(e,t){var n,s,i,r,o,a,d,u,c;if(g&&(n=e.stuff)&&n instanceof Array&&(s=n.length))for(i=0;i<s;i++)(r=n[i])&&r===Object(r)&&(o=r.cn,a=r.cv,void 0!==(d=r.ttl)&&""!==d||(d=Math.floor(x.getMaxCookieExpiresInMinutes()/60/24)),u=r.dmn||"."+document.domain.replace(/^www\./,""),c=r.type,o&&(a||"number"==typeof a)&&("var"!==c&&(d=parseInt(d,10))&&!isNaN(d)&&x.setCookie(o,a,24*d*60,"/",u,!1),P.stuffed[o]=a));var l,f,p=e.uuid;k.isPopulatedString(p)&&(k.isEmptyObject(h)||("string"==typeof(l=h.path)&&l.length||(l="/"),f=parseInt(h.days,10),isNaN(f)&&(f=100),x.setCookie(h.name||"aam_did",p,24*f*60,l,h.domain||"."+document.domain.replace(/^www\./,""),!0===h.secure))),A.abortRequests||T.requestToProcess(e,t)},makeRequestSrcData:function(r){r.sids=k.removeEmptyArrayValues(r.sids||[]),r.pdata=k.removeEmptyArrayValues(r.pdata||[]);var o=A,e=o.platformParams,t=x.encodeAndBuildRequest(r.sids,","),n=x.encodeAndBuildRequest(r.pdata,","),s=(r.logdataArray||[]).join("&");delete r.logdataArray;var i,a,d=encodeURIComponent,u=E.IS_HTTPS?"https://":"http://",c=o.declaredId.getDeclaredIdQueryString(),l=o.adms.instance?o.adms.getCustomerIDsQueryString(o.adms.getCustomerIDs()):"",f=function(){var e,t,n,s,i=[];for(e in r)if(!(e in o.reservedKeys)&&r.hasOwnProperty(e))if(t=r[e],e=d(e),t instanceof Array)for(n=0,s=t.length;n<s;n++)i.push(e+"="+d(t[n]));else i.push(e+"="+d(t));return i.length?"&"+i.join("&"):""}(),p="d_dil_ver="+d(DIL.version),h="d_nsid="+e.d_nsid+o.getCoopQueryString()+c+l+(t.length?"&d_sid="+t:"")+(n.length?"&d_px="+n:"")+(s.length?"&d_ld="+d(s):""),g="&d_rtbd="+e.d_rtbd+"&d_jsonv="+e.d_jsonv+"&d_dst="+e.d_dst,m=y?"&h_referer="+d(location.href):"";return a=(i=u+I+".demdex.net/event")+"?"+p+"&"+h+g+f+m,{corsSrc:i+"?"+p+"&_ts="+(new Date).getTime(),src:a,corsPostData:h+g+f+m,isDeclaredIdCall:""!==c}},fireRequest:function(e){if("img"===e.tag)this.fireImage(e);else{var t=A.declaredId,n=t.declaredId.request||t.declaredId.init||{},s={dpid:n.dpid||"",dpuuid:n.dpuuid||""};this.fireCORS(e,s)}},fireImage:function(t){var e,n,s=A;s.abortRequests||(s.firing=!0,e=new Image(0,0),s.sent.push(t),e.onload=function(){s.firing=!1,s.fired.push(t),s.num_of_img_responses++,s.registerRequest()},n=function(e){c="imgAbortOrErrorHandler received the event of type "+e.type,R.log(c),s.abortRequests=!0,s.firing=!1,s.errored.push(t),s.num_of_img_errors++,s.registerRequest()},e.addEventListener("error",n),e.addEventListener("abort",n),e.src=t.src)},fireCORS:function(s,i){var r=this,o=A,e=this.corsMetadata.corsType,t=s.corsSrc,n=s.corsInstance,a=s.corsPostData,d=s.postCallbackFn,u="function"==typeof d;if(!o.abortRequests&&!v){o.firing=!0;try{n.open("post",t,!0),"XMLHttpRequest"===e&&(n.withCredentials=!0,n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.onreadystatechange=function(){4===this.readyState&&200===this.status&&function(e){var t;try{if((t=JSON.parse(e))!==Object(t))return r.handleCORSError(s,i,"Response is not JSON")}catch(e){return r.handleCORSError(s,i,"Error parsing response as JSON")}try{var n=s.callbackFn;o.firing=!1,o.fired.push(s),o.num_of_cors_responses++,n(t,i),u&&d(t,i)}catch(e){e.message="DIL handleCORSResponse caught error with message "+e.message,c=e.message,R.log(c),e.filename=e.filename||"dil.js",e.partner=I,DIL.errorModule.handleError(e);try{n({error:e.name+"|"+e.message},i),u&&d({error:e.name+"|"+e.message},i)}catch(e){}}finally{o.registerRequest()}}(this.responseText)}),n.onerror=function(){r.handleCORSError(s,i,"onerror")},n.ontimeout=function(){r.handleCORSError(s,i,"ontimeout")},n.send(a)}catch(e){this.handleCORSError(s,i,"try-catch")}o.sent.push(s),o.declaredId.declaredId.request=null}},handleCORSError:function(e,t,n){A.num_of_cors_errors++,A.corsErrorSources.push(n)}},k={isValidPdata:function(e){return!!(e instanceof Array&&this.removeEmptyArrayValues(e).length)},isValidLogdata:function(e){return!this.isEmptyObject(e)},isEmptyObject:function(e){if(e!==Object(e))return!0;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0},removeEmptyArrayValues:function(e){var t,n=0,s=e.length,i=[];for(n=0;n<s;n++)null!=(t=e[n])&&""!==t&&i.push(t);return i},isPopulatedString:function(e){return"string"==typeof e&&e.length}},x={convertObjectToKeyValuePairs:function(e,t,n){var s,i,r=[];for(s in t=t||"=",e)e.hasOwnProperty(s)&&null!=(i=e[s])&&""!==i&&r.push(s+t+(n?encodeURIComponent(i):i));return r},encodeAndBuildRequest:function(e,t){return e.map(function(e){return encodeURIComponent(e)}).join(t)},getCookie:function(e){var t,n,s,i=e+"=",r=document.cookie.split(";");for(t=0,n=r.length;t<n;t++){for(s=r[t];" "===s.charAt(0);)s=s.substring(1,s.length);if(0===s.indexOf(i))return decodeURIComponent(s.substring(i.length,s.length))}return null},setCookie:function(e,t,n,s,i,r){var o=new Date;n=n&&1e3*n*60,document.cookie=e+"="+encodeURIComponent(t)+(n?";expires="+new Date(o.getTime()+n).toUTCString():"")+(s?";path="+s:"")+(i?";domain="+i:"")+(r?";secure":"")},extendArray:function(e,t){return e instanceof Array&&t instanceof Array&&(Array.prototype.push.apply(e,t),!0)},extendObject:function(e,t,n){var s;if(e!==Object(e)||t!==Object(t))return!1;for(s in t)if(t.hasOwnProperty(s)){if(!k.isEmptyObject(n)&&s in n)continue;e[s]=t[s]}return!0},getMaxCookieExpiresInMinutes:function(){return E.SIX_MONTHS_IN_MINUTES},replaceMethodsWithFunction:function(e,t){var n;if(e===Object(e)&&"function"==typeof t)for(n in e)e.hasOwnProperty(n)&&"function"==typeof e[n]&&(e[n]=t)}},N=(j=C.requestController,{exists:null,instance:null,aamIsApproved:null,init:function(){var e=this;this.checkIfExists()?(this.exists=!0,this.instance=window.adobe.optIn,this.instance.fetchPermissions(function(){e.callback()},!0)):this.exists=!1},checkIfExists:function(){return window.adobe===Object(window.adobe)&&window.adobe.optIn===Object(window.adobe.optIn)},callback:function(){this.aamIsApproved=this.instance.isApproved([this.instance.Categories.AAM]),j.adms.waitForMidToReleaseRequests(),j.adms.getIsOptedOut()},isApproved:function(){return!this.isIabContext()&&!j.adms.isOptedOut&&(!this.exists||this.aamIsApproved)},isIabContext:function(){return this.instance&&this.instance.isIabContext}});C.optIn=N;var F,Q,H,U,B=(Q=(F=C).requestController,H=F.optIn,U={isVendorConsented:null,doesGdprApply:null,consentString:null,queryStringObjectCallbacks:[],init:function(){this.fetchConsentData()},hasGoSignal:function(){return!(!(H.isIabContext()&&this.isVendorConsented&&this.doesGdprApply&&"string"==typeof this.consentString&&this.consentString.length)||Q.adms.isOptedOut)},fetchConsentData:function(n,e){var s=this,t={};"function"!=typeof n&&(n=function(){}),H.instance&&H.isIabContext()?(e&&(t.timeout=e),H.instance.execute({command:"iabPlugin.fetchConsentData",params:t,callback:function(e,t){t===Object(t)?(s.doesGdprApply=!!t.gdprApplies,s.consentString=t.consentString||""):(s.doesGdprApply=!1,s.consentString=""),s.isVendorConsented=H.instance.isApproved(H.instance.Categories.AAM),e?n({}):s.checkQueryStringObject(n),Q.adms.waitForMidToReleaseRequests()}})):n({})},getQueryString:function(){return H.isIabContext()?"gdpr="+(this.doesGdprApply?1:0)+"&gdpr_consent="+this.consentString+"&":""},getQueryStringObject:function(e,t){this.fetchConsentData(e,t)},checkQueryStringObject:function(e){U.hasGoSignal()&&"function"==typeof e&&e({gdpr:this.doesGdprApply?1:0,gdpr_consent:this.consentString})}});C.iab=B,"error"===I&&0===r&&window.addEventListener("load",function(){DIL.windowLoaded=!0});function G(){W||(W=!0,A.registerRequest(),X())}var W=!1,X=function(){setTimeout(function(){p||A.firstRequestHasFired||("function"==typeof m?M.afterResult(m).submit(!0):M.submit(!0))},DIL.constants.TIME_TO_DEFAULT_REQUEST)},K=document;"error"!==I&&(DIL.windowLoaded?G():"complete"!==K.readyState&&"loaded"!==K.readyState?window.addEventListener("load",function(){DIL.windowLoaded=!0,G()}):(DIL.windowLoaded=!0,G())),A.declaredId.setDeclaredId(s,"init"),N.init(),B.init(),A.processVisitorAPI();E.IS_IE_LESS_THAN_10&&x.replaceMethodsWithFunction(M,function(){return this}),this.api=M,this.getStuffedVariable=function(e){var t=P.stuffed[e];return t||"number"==typeof t||(t=x.getCookie(e))||"number"==typeof t||(t=""),t},this.validators=k,this.helpers=x,this.constants=E,this.log=O,this.pendingRequest=L,this.requestController=A,this.destinationPublishing=T,this.requestProcs=V,this.units=C,this.initConfig=n,this.logger=R,w&&(this.variables=P,this.callWindowLoadFunctions=G)},DIL.extendStaticPropertiesAndMethods=function(e){var t;if(e===Object(e))for(t in e)e.hasOwnProperty(t)&&(this[t]=e[t])},DIL.extendStaticPropertiesAndMethods({version:"9.4",jsonVersion:1,constants:{TIME_TO_DEFAULT_REQUEST:500},variables:{scriptNodeList:document.getElementsByTagName("script")},windowLoaded:!1,dils:{},isAddedPostWindowLoad:function(){var e=arguments[0];this.windowLoaded="function"==typeof e?!!e():"boolean"!=typeof e||e},create:function(e){try{return new DIL(e)}catch(e){throw new Error("Error in attempt to create DIL instance with DIL.create(): "+e.message)}},registerDil:function(e,t,n){var s=t+"$"+n;s in this.dils||(this.dils[s]=e)},getDil:function(e,t){var n;return"string"!=typeof e&&(e=""),(n=e+"$"+(t=t||0))in this.dils?this.dils[n]:new Error("The DIL instance with partner = "+e+" and containerNSID = "+t+" was not found")},dexGetQSVars:function(e,t,n){var s=this.getDil(t,n);return s instanceof this?s.getStuffedVariable(e):""}}),DIL.errorModule=(r=DIL.create({partner:"error",containerNSID:0,ignoreHardDependencyOnVisitorAPI:!0}),a=!(o={harvestererror:14138,destpuberror:14139,dpmerror:14140,generalerror:14137,error:14137,noerrortypedefined:15021,evalerror:15016,rangeerror:15017,referenceerror:15018,typeerror:15019,urierror:15020}),{activate:function(){a=!0},handleError:function(e){if(!a)return"DIL error module has not been activated";e!==Object(e)&&(e={});var t=e.name?(e.name+"").toLowerCase():"",n=t in o?o[t]:o.noerrortypedefined,s=[],i={name:t,filename:e.filename?e.filename+"":"",partner:e.partner?e.partner+"":"no_partner",site:e.site?e.site+"":document.location.href,message:e.message?e.message+"":""};return s.push(n),r.api.pixels(s).logs(i).useImageRequest().submit(),"DIL error report sent"},pixelMap:o}),DIL.tools={},DIL.modules={helpers:{}})}();
    
}

/*end of audienceManager module*/

s.loadModule("AudienceManagement");  

/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
function AppMeasurement_Module_ActivityMap(h){function p(){var a=f.pageYOffset+(f.innerHeight||0);a&&a>+g&&(g=a)}function q(){if(e.scrollReachSelector){var a=h.d.querySelector&&h.d.querySelector(e.scrollReachSelector);a?(g=a.scrollTop||0,a.addEventListener("scroll",function(){var d;(d=a&&a.scrollTop+a.clientHeight||0)>g&&(g=d)})):0<v--&&setTimeout(q,1E3)}}function l(a,d){var b,c,n;if(a&&d&&(b=e.c[d]||(e.c[d]=d.split(","))))for(n=0;n<b.length&&(c=b[n++]);)if(-1<a.indexOf(c))return null;return a}function r(a,
d,b,c,e){var f,k;if(a.dataset&&(k=a.dataset[d]))f=k;else if(a.getAttribute)if(k=a.getAttribute("data-"+b))f=k;else if(k=a.getAttribute(b))f=k;if(!f&&h.useForcedLinkTracking&&e){var g;a=a.onclick?""+a.onclick:"";varValue="";if(c&&a&&(d=a.indexOf(c),0<=d)){for(d+=c.length;d<a.length;)if(b=a.charAt(d++),0<="'\"".indexOf(b)){g=b;break}for(k=!1;d<a.length&&g;){b=a.charAt(d);if(!k&&b===g)break;"\\"===b?k=!0:(varValue+=b,k=!1);d++}}(g=varValue)&&(h.w[c]=g)}return f||e&&h.w[c]}function s(a,d,b){var c;return(c=
e[d](a,b))&&l(m(c),e[d+"Exclusions"])}function t(a,d,b){var c;if(a&&!(1===(c=a.nodeType)&&(c=a.nodeName)&&(c=c.toUpperCase())&&w[c])&&(1===a.nodeType&&(c=a.nodeValue)&&(d[d.length]=c),b.a||b.t||b.s||!a.getAttribute||((c=a.getAttribute("alt"))?b.a=c:(c=a.getAttribute("title"))?b.t=c:"IMG"==(""+a.nodeName).toUpperCase()&&(c=a.getAttribute("src")||a.src)&&(b.s=c)),(c=a.childNodes)&&c.length))for(a=0;a<c.length;a++)t(c[a],d,b)}function m(a){if(null==a||void 0==a)return a;try{return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+",
"mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}","mg")," ").substring(0,254)}catch(d){}}var e=this;e.s=h;var f=window;f.s_c_in||(f.s_c_il=[],f.s_c_in=0);e._il=f.s_c_il;e._in=f.s_c_in;e._il[e._in]=e;f.s_c_in++;e._c="s_m";var g=0,u,v=60;e.c={};var w={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};e._g=function(){var a,d,b,c=h.contextData,
e=h.linkObject;(a=h.pageName||h.pageURL)&&(d=s(e,"link",h.linkName))&&(b=s(e,"region"))&&(c["a.activitymap.page"]=a.substring(0,255),c["a.activitymap.link"]=128<d.length?d.substring(0,128):d,c["a.activitymap.region"]=127<b.length?b.substring(0,127):b,0<g&&(c["a.activitymap.xy"]=10*Math.floor(g/10)),c["a.activitymap.pageIDType"]=h.pageName?1:0)};e._d=function(){e.trackScrollReach&&!u&&(e.scrollReachSelector?q():(p(),f.addEventListener&&f.addEventListener("scroll",p,!1)),u=!0)};e.link=function(a,d){var b;
if(d)b=l(m(d),e.linkExclusions);else if((b=a)&&!(b=r(a,"sObjectId","s-object-id","s_objectID",1))){var c,f;(f=l(m(a.innerText||a.textContent),e.linkExclusions))||(t(a,c=[],b={a:void 0,t:void 0,s:void 0}),(f=l(m(c.join(""))))||(f=l(m(b.a?b.a:b.t?b.t:b.s?b.s:void 0)))||!(c=(c=a.tagName)&&c.toUpperCase?c.toUpperCase():"")||("INPUT"==c||"SUBMIT"==c&&a.value?f=l(m(a.value)):"IMAGE"==c&&a.src&&(f=l(m(a.src)))));b=f}return b};e.region=function(a){for(var d,b=e.regionIDAttribute||"id";a&&(a=a.parentNode);){if(d=
r(a,b,b,b))return d;if("BODY"==a.nodeName)return"BODY"}}}
/* End ActivityMap Module */
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 2.22.0
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
function AppMeasurement(r){var a=this;a.version="2.22.0";var h=window;h.s_c_in||(h.s_c_il=[],h.s_c_in=0);a._il=h.s_c_il;a._in=h.s_c_in;a._il[a._in]=a;h.s_c_in++;a._c="s_c";var q=h.AppMeasurement.ic;q||(q=null);var p=h,m,s;try{for(m=p.parent,s=p.location;m&&m.location&&s&&""+m.location!==""+s&&p.location&&""+m.location!==""+p.location&&m.location.host===s.host;)p=m,m=p.parent}catch(u){}a.C=function(a){try{console.log(a)}catch(b){}};a.Ra=function(a){return""+parseInt(a)==""+a};a.replace=function(a,
b,d){return!a||0>a.indexOf(b)?a:a.split(b).join(d)};a.escape=function(c){var b,d;if(!c)return c;c=encodeURIComponent(c);for(b=0;7>b;b++)d="+~!*()'".substring(b,b+1),0<=c.indexOf(d)&&(c=a.replace(c,d,"%"+d.charCodeAt(0).toString(16).toUpperCase()));return c};a.unescape=function(c){if(!c)return c;c=0<=c.indexOf("+")?a.replace(c,"+"," "):c;try{return decodeURIComponent(c)}catch(b){}return unescape(c)};a.Nb=function(){var c=h.location.hostname,b=a.fpCookieDomainPeriods,d;b||(b=a.cookieDomainPeriods);
if(c&&!a.Ka&&!/^[0-9.]+$/.test(c)&&(b=b?parseInt(b):2,b=2<b?b:2,d=c.lastIndexOf("."),0<=d)){for(;0<=d&&1<b;)d=c.lastIndexOf(".",d-1),b--;a.Ka=0<d?c.substring(d):c}return a.Ka};a.c_r=a.cookieRead=function(c){c=a.escape(c);var b=" "+a.d.cookie,d=b.indexOf(" "+c+"="),f=0>d?d:b.indexOf(";",d);c=0>d?"":a.unescape(b.substring(d+2+c.length,0>f?b.length:f));return"[[B]]"!=c?c:""};a.c_w=a.cookieWrite=function(c,b,d){var f=a.Nb(),e=a.cookieLifetime,g;b=""+b;e=e?(""+e).toUpperCase():"";d&&"SESSION"!=e&&"NONE"!=
e&&((g=""!=b?parseInt(e?e:0):-60)?(d=new Date,d.setTime(d.getTime()+1E3*g)):1===d&&(d=new Date,g=d.getYear(),d.setYear(g+2+(1900>g?1900:0))));return c&&"NONE"!=e?(a.d.cookie=a.escape(c)+"="+a.escape(""!=b?b:"[[B]]")+"; path=/;"+(d&&"SESSION"!=e?" expires="+d.toUTCString()+";":"")+(f?" domain="+f+";":"")+(a.writeSecureCookies?" secure;":""),a.cookieRead(c)==b):0};a.Kb=function(){var c=a.Util.getIeVersion();"number"===typeof c&&10>c&&(a.unsupportedBrowser=!0,a.xb(a,function(){}))};a.ya=function(){var a=
navigator.userAgent;return"Microsoft Internet Explorer"===navigator.appName||0<=a.indexOf("MSIE ")||0<=a.indexOf("Trident/")&&0<=a.indexOf("Windows NT 6")?!0:!1};a.xb=function(a,b){for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&"function"===typeof a[d]&&(a[d]=b)};a.K=[];a.fa=function(c,b,d){if(a.La)return 0;a.maxDelay||(a.maxDelay=250);var f=0,e=(new Date).getTime()+a.maxDelay,g=a.d.visibilityState,k=["webkitvisibilitychange","visibilitychange"];g||(g=a.d.webkitVisibilityState);if(g&&"prerender"==
g){if(!a.ga)for(a.ga=1,d=0;d<k.length;d++)a.d.addEventListener(k[d],function(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);"visible"==c&&(a.ga=0,a.delayReady())});f=1;e=0}else d||a.u("_d")&&(f=1);f&&(a.K.push({m:c,a:b,t:e}),a.ga||setTimeout(a.delayReady,a.maxDelay));return f};a.delayReady=function(){var c=(new Date).getTime(),b=0,d;for(a.u("_d")?b=1:a.Aa();0<a.K.length;){d=a.K.shift();if(b&&!d.t&&d.t>c){a.K.unshift(d);setTimeout(a.delayReady,parseInt(a.maxDelay/2));break}a.La=1;a[d.m].apply(a,
d.a);a.La=0}};a.setAccount=a.sa=function(c){var b,d;if(!a.fa("setAccount",arguments))if(a.account=c,a.allAccounts)for(b=a.allAccounts.concat(c.split(",")),a.allAccounts=[],b.sort(),d=0;d<b.length;d++)0!=d&&b[d-1]==b[d]||a.allAccounts.push(b[d]);else a.allAccounts=c.split(",")};a.foreachVar=function(c,b){var d,f,e,g,k="";e=f="";if(a.lightProfileID)d=a.O,(k=a.lightTrackVars)&&(k=","+k+","+a.la.join(",")+",");else{d=a.g;if(a.pe||a.linkType)k=a.linkTrackVars,f=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,
1).toUpperCase()+a.pe.substring(1),a[e]&&(k=a[e].ec,f=a[e].cc));k&&(k=","+k+","+a.F.join(",")+",");f&&k&&(k+=",events,")}b&&(b=","+b+",");for(f=0;f<d.length;f++)e=d[f],(g=a[e])&&(!k||0<=k.indexOf(","+e+","))&&(!b||0<=b.indexOf(","+e+","))&&c(e,g)};a.o=function(c,b,d,f,e){var g="",k,l,h,n,m=0;"contextData"==c&&(c="c");if(b){for(k in b)if(!(Object.prototype[k]||e&&k.substring(0,e.length)!=e)&&b[k]&&(!d||0<=d.indexOf(","+(f?f+".":"")+k+","))){h=!1;if(m)for(l=0;l<m.length;l++)if(k.substring(0,m[l].length)==
m[l]){h=!0;break}if(!h&&(""==g&&(g+="&"+c+"."),l=b[k],e&&(k=k.substring(e.length)),0<k.length))if(h=k.indexOf("."),0<h)l=k.substring(0,h),h=(e?e:"")+l+".",m||(m=[]),m.push(h),g+=a.o(l,b,d,f,h);else if("boolean"==typeof l&&(l=l?"true":"false"),l){if("retrieveLightData"==f&&0>e.indexOf(".contextData."))switch(h=k.substring(0,4),n=k.substring(4),k){case "transactionID":k="xact";break;case "channel":k="ch";break;case "campaign":k="v0";break;default:a.Ra(n)&&("prop"==h?k="c"+n:"eVar"==h?k="v"+n:"list"==
h?k="l"+n:"hier"==h&&(k="h"+n,l=l.substring(0,255)))}g+="&"+a.escape(k)+"="+a.escape(l)}}""!=g&&(g+="&."+c)}return g};a.usePostbacks=0;a.Qb=function(){var c="",b,d,f,e,g,k,l,h,n="",m="",p=e="",r=a.T();if(a.lightProfileID)b=a.O,(n=a.lightTrackVars)&&(n=","+n+","+a.la.join(",")+",");else{b=a.g;if(a.pe||a.linkType)n=a.linkTrackVars,m=a.linkTrackEvents,a.pe&&(e=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[e]&&(n=a[e].ec,m=a[e].cc));n&&(n=","+n+","+a.F.join(",")+",");m&&(m=","+m+",",n&&(n+=",events,"));
a.events2&&(p+=(""!=p?",":"")+a.events2)}if(r&&r.getCustomerIDs){e=q;if(g=r.getCustomerIDs())for(d in g)Object.prototype[d]||(f=g[d],"object"==typeof f&&(e||(e={}),f.id&&(e[d+".id"]=f.id),f.authState&&(e[d+".as"]=f.authState)));e&&(c+=a.o("cid",e))}a.AudienceManagement&&a.AudienceManagement.isReady()&&(c+=a.o("d",a.AudienceManagement.getEventCallConfigParams()));for(d=0;d<b.length;d++){e=b[d];g=a[e];f=e.substring(0,4);k=e.substring(4);g||("events"==e&&p?(g=p,p=""):"marketingCloudOrgID"==e&&r&&a.V("ECID")&&
(g=r.marketingCloudOrgID));if(g&&(!n||0<=n.indexOf(","+e+","))){switch(e){case "customerPerspective":e="cp";break;case "marketingCloudOrgID":e="mcorgid";break;case "supplementalDataID":e="sdid";break;case "timestamp":e="ts";break;case "dynamicVariablePrefix":e="D";break;case "visitorID":e="vid";break;case "marketingCloudVisitorID":e="mid";break;case "analyticsVisitorID":e="aid";break;case "audienceManagerLocationHint":e="aamlh";break;case "audienceManagerBlob":e="aamb";break;case "authState":e="as";
break;case "pageURL":e="g";255<g.length&&(a.pageURLRest=g.substring(255),g=g.substring(0,255));break;case "pageURLRest":e="-g";break;case "referrer":e="r";break;case "vmk":case "visitorMigrationKey":e="vmt";break;case "visitorMigrationServer":e="vmf";a.ssl&&a.visitorMigrationServerSecure&&(g="");break;case "visitorMigrationServerSecure":e="vmf";!a.ssl&&a.visitorMigrationServer&&(g="");break;case "charSet":e="ce";break;case "visitorNamespace":e="ns";break;case "cookieDomainPeriods":e="cdp";break;case "cookieLifetime":e=
"cl";break;case "variableProvider":e="vvp";break;case "currencyCode":e="cc";break;case "channel":e="ch";break;case "transactionID":e="xact";break;case "campaign":e="v0";break;case "latitude":e="lat";break;case "longitude":e="lon";break;case "resolution":e="s";break;case "colorDepth":e="c";break;case "javascriptVersion":e="j";break;case "javaEnabled":e="v";break;case "cookiesEnabled":e="k";break;case "browserWidth":e="bw";break;case "browserHeight":e="bh";break;case "connectionType":e="ct";break;case "homepage":e=
"hp";break;case "events":p&&(g+=(""!=g?",":"")+p);if(m)for(k=g.split(","),g="",f=0;f<k.length;f++)l=k[f],h=l.indexOf("="),0<=h&&(l=l.substring(0,h)),h=l.indexOf(":"),0<=h&&(l=l.substring(0,h)),0<=m.indexOf(","+l+",")&&(g+=(g?",":"")+k[f]);break;case "events2":g="";break;case "contextData":c+=a.o("c",a[e],n,e);g="";break;case "lightProfileID":e="mtp";break;case "lightStoreForSeconds":e="mtss";a.lightProfileID||(g="");break;case "lightIncrementBy":e="mti";a.lightProfileID||(g="");break;case "retrieveLightProfiles":e=
"mtsr";break;case "deleteLightProfiles":e="mtsd";break;case "retrieveLightData":a.retrieveLightProfiles&&(c+=a.o("mts",a[e],n,e));g="";break;default:a.Ra(k)&&("prop"==f?e="c"+k:"eVar"==f?e="v"+k:"list"==f?e="l"+k:"hier"==f&&(e="h"+k,g=g.substring(0,255)))}g&&(c+="&"+e+"="+("pev"!=e.substring(0,3)?a.escape(g):g))}"pev3"==e&&a.e&&(c+=a.e)}a.ka&&(c+="&lrt="+a.ka,a.ka=null);return c};a.B=function(a){var b=a.tagName;if("undefined"!=""+a.lc||"undefined"!=""+a.Zb&&"HTML"!=(""+a.Zb).toUpperCase())return"";
b=b&&b.toUpperCase?b.toUpperCase():"";"SHAPE"==b&&(b="");b&&(("INPUT"==b||"BUTTON"==b)&&a.type&&a.type.toUpperCase?b=a.type.toUpperCase():!b&&a.href&&(b="A"));return b};a.Na=function(a){var b=h.location,d=a.href?a.href:"",f,e,g;f=d.indexOf(":");e=d.indexOf("?");g=d.indexOf("/");d&&(0>f||0<=e&&f>e||0<=g&&f>g)&&(e=a.protocol&&1<a.protocol.length?a.protocol:b.protocol?b.protocol:"",f=b.pathname.lastIndexOf("/"),d=(e?e+"//":"")+(a.host?a.host:b.host?b.host:"")+("/"!=d.substring(0,1)?b.pathname.substring(0,
0>f?0:f)+"/":"")+d);return d};a.L=function(c){var b=a.B(c),d,f,e="",g=0;return b&&(d=c.protocol,f=c.onclick,!c.href||"A"!=b&&"AREA"!=b||f&&d&&!(0>d.toLowerCase().indexOf("javascript"))?f?(e=a.replace(a.replace(a.replace(a.replace(""+f,"\r",""),"\n",""),"\t","")," ",""),g=2):"INPUT"==b||"SUBMIT"==b?(c.value?e=c.value:c.innerText?e=c.innerText:c.textContent&&(e=c.textContent),g=3):"IMAGE"==b&&c.src&&(e=c.src):e=a.Na(c),e)?{id:e.substring(0,100),type:g}:0};a.jc=function(c){for(var b=a.B(c),d=a.L(c);c&&
!d&&"BODY"!=b;)if(c=c.parentElement?c.parentElement:c.parentNode)b=a.B(c),d=a.L(c);d&&"BODY"!=b||(c=0);c&&(b=c.onclick?""+c.onclick:"",0<=b.indexOf(".tl(")||0<=b.indexOf(".trackLink("))&&(c=0);return c};a.Yb=function(){var c,b,d=a.linkObject,f=a.linkType,e=a.linkURL,g,k;a.ma=1;d||(a.ma=0,d=a.clickObject);if(d){c=a.B(d);for(b=a.L(d);d&&!b&&"BODY"!=c;)if(d=d.parentElement?d.parentElement:d.parentNode)c=a.B(d),b=a.L(d);b&&"BODY"!=c||(d=0);if(d&&!a.linkObject){var l=d.onclick?""+d.onclick:"";if(0<=l.indexOf(".tl(")||
0<=l.indexOf(".trackLink("))d=0}}else a.ma=1;!e&&d&&(e=a.Na(d));e&&!a.linkLeaveQueryString&&(g=e.indexOf("?"),0<=g&&(e=e.substring(0,g)));if(!f&&e){var m=0,n=0,p;if(a.trackDownloadLinks&&a.linkDownloadFileTypes)for(l=e.toLowerCase(),g=l.indexOf("?"),k=l.indexOf("#"),0<=g?0<=k&&k<g&&(g=k):g=k,0<=g&&(l=l.substring(0,g)),g=a.linkDownloadFileTypes.toLowerCase().split(","),k=0;k<g.length;k++)(p=g[k])&&l.substring(l.length-(p.length+1))=="."+p&&(f="d");if(a.trackExternalLinks&&!f&&(l=e.toLowerCase(),a.Qa(l)&&
(a.linkInternalFilters||(a.linkInternalFilters=h.location.hostname),g=0,a.linkExternalFilters?(g=a.linkExternalFilters.toLowerCase().split(","),m=1):a.linkInternalFilters&&(g=a.linkInternalFilters.toLowerCase().split(",")),g))){for(k=0;k<g.length;k++)p=g[k],0<=l.indexOf(p)&&(n=1);n?m&&(f="e"):m||(f="e")}}a.linkObject=d;a.linkURL=e;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e="",d&&(f=a.pageName,e=1,d=d.sourceIndex,f||(f=a.pageURL,e=0),h.s_objectID&&(b.id=h.s_objectID,d=b.type=1),f&&b&&
b.id&&c&&(a.e="&pid="+a.escape(f.substring(0,255))+(e?"&pidt="+e:"")+"&oid="+a.escape(b.id.substring(0,100))+(b.type?"&oidt="+b.type:"")+"&ot="+c+(d?"&oi="+d:"")))};a.Rb=function(){var c=a.ma,b=a.linkType,d=a.linkURL,f=a.linkName;b&&(d||f)&&(b=b.toLowerCase(),"d"!=b&&"e"!=b&&(b="o"),a.pe="lnk_"+b,a.pev1=d?a.escape(d):"",a.pev2=f?a.escape(f):"",c=1);a.abort&&(c=0);if(a.trackClickMap||a.trackInlineStats||a.Ub()){var b={},d=0,e=a.rb(),g=e?e.split("&"):0,k,l,h,e=0;if(g)for(k=0;k<g.length;k++)l=g[k].split("="),
f=a.unescape(l[0]).split(","),l=a.unescape(l[1]),b[l]=f;f=a.account.split(",");k={};for(h in a.contextData)h&&!Object.prototype[h]&&"a.activitymap."==h.substring(0,14)&&(k[h]=a.contextData[h],a.contextData[h]="");a.e=a.o("c",k)+(a.e?a.e:"");if(c||a.e){c&&!a.e&&(e=1);for(l in b)if(!Object.prototype[l])for(h=0;h<f.length;h++)for(e&&(g=b[l].join(","),g==a.account&&(a.e+=("&"!=l.charAt(0)?"&":"")+l,b[l]=[],d=1)),k=0;k<b[l].length;k++)g=b[l][k],g==f[h]&&(e&&(a.e+="&u="+a.escape(g)+("&"!=l.charAt(0)?"&":
"")+l+"&u=0"),b[l].splice(k,1),d=1);c||(d=1);if(d){e="";k=2;!c&&a.e&&(e=a.escape(f.join(","))+"="+a.escape(a.e),k=1);for(l in b)!Object.prototype[l]&&0<k&&0<b[l].length&&(e+=(e?"&":"")+a.escape(b[l].join(","))+"="+a.escape(l),k--);a.zb(e)}}}return c};a.rb=function(){if(a.useLinkTrackSessionStorage){if(a.Ea())return h.sessionStorage.getItem(a.P)}else return a.cookieRead(a.P)};a.Ea=function(){return h.sessionStorage?!0:!1};a.zb=function(c){a.useLinkTrackSessionStorage?a.Ea()&&h.sessionStorage.setItem(a.P,
c):a.cookieWrite(a.P,c)};a.Sb=function(){if(!a.bc){var c=new Date,b=p.location,d,f,e=f=d="",g="",k="",l="1.2",h=a.cookieWrite("s_cc","true",0)?"Y":"N",m="",q="";if(c.setUTCDate&&(l="1.3",(0).toPrecision&&(l="1.5",c=[],c.forEach))){l="1.6";f=0;d={};try{f=new Iterator(d),f.next&&(l="1.7",c.reduce&&(l="1.8",l.trim&&(l="1.8.1",Date.parse&&(l="1.8.2",Object.create&&(l="1.8.5")))))}catch(r){}}d=screen.width+"x"+screen.height;e=navigator.javaEnabled()?"Y":"N";f=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;
g=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;k=a.w.innerHeight?a.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior("#default#homePage"),m=a.b.kc(b)?"Y":"N"}catch(s){}try{a.b.addBehavior("#default#clientCaps"),q=a.b.connectionType}catch(t){}a.resolution=d;a.colorDepth=f;a.javascriptVersion=l;a.javaEnabled=e;a.cookiesEnabled=h;a.browserWidth=g;a.browserHeight=k;a.connectionType=q;a.homepage=m;a.bc=1}};a.Q={};a.loadModule=function(c,b){var d=a.Q[c];if(!d){d=h["AppMeasurement_Module_"+
c]?new h["AppMeasurement_Module_"+c](a):{};a.Q[c]=a[c]=d;d.kb=function(){return d.ub};d.Ab=function(b){if(d.ub=b)a[c+"_onLoad"]=b,a.fa(c+"_onLoad",[a,d],1)||b(a,d)};try{Object.defineProperty?Object.defineProperty(d,"onLoad",{get:d.kb,set:d.Ab}):d._olc=1}catch(f){d._olc=1}}b&&(a[c+"_onLoad"]=b,a.fa(c+"_onLoad",[a,d],1)||b(a,d))};a.u=function(c){var b,d;for(b in a.Q)if(!Object.prototype[b]&&(d=a.Q[b])&&(d._olc&&d.onLoad&&(d._olc=0,d.onLoad(a,d)),d[c]&&d[c]()))return 1;return 0};a.Ub=function(){return a.ActivityMap&&
a.ActivityMap._c?!0:!1};a.Vb=function(){var c=Math.floor(1E13*Math.random()),b=a.visitorSampling,d=a.visitorSamplingGroup,d="s_vsn_"+(a.visitorNamespace?a.visitorNamespace:a.account)+(d?"_"+d:""),f=a.cookieRead(d);if(b){b*=100;f&&(f=parseInt(f));if(!f){if(!a.cookieWrite(d,c))return 0;f=c}if(f%1E4>b)return 0}return 1};a.S=function(c,b){var d,f,e,g,k,h,m;m={};for(d=0;2>d;d++)for(f=0<d?a.Ga:a.g,e=0;e<f.length;e++)if(g=f[e],(k=c[g])||c["!"+g]){if(k&&!b&&("contextData"==g||"retrieveLightData"==g)&&a[g])for(h in a[g])k[h]||
(k[h]=a[g][h]);a[g]||(m["!"+g]=1);m[g]=a[g];a[g]=k}return m};a.hc=function(c){var b,d,f,e;for(b=0;2>b;b++)for(d=0<b?a.Ga:a.g,f=0;f<d.length;f++)e=d[f],c[e]=a[e],c[e]||"prop"!==e.substring(0,4)&&"eVar"!==e.substring(0,4)&&"hier"!==e.substring(0,4)&&"list"!==e.substring(0,4)&&"channel"!==e&&"events"!==e&&"eventList"!==e&&"products"!==e&&"productList"!==e&&"purchaseID"!==e&&"transactionID"!==e&&"state"!==e&&"zip"!==e&&"campaign"!==e&&"events2"!==e&&"latitude"!==e&&"longitude"!==e&&"ms_a"!==e&&"contextData"!==
e&&"supplementalDataID"!==e&&"tnt"!==e&&"timestamp"!==e&&"abort"!==e&&"useBeacon"!==e&&"linkObject"!==e&&"clickObject"!==e&&"linkType"!==e&&"linkName"!==e&&"linkURL"!==e&&"bodyClickTarget"!==e&&"bodyClickFunction"!==e||(c["!"+e]=1)};a.Mb=function(a){var b,d,f,e,g,k=0,h,m="",n="";if(a&&255<a.length&&(b=""+a,d=b.indexOf("?"),0<d&&(h=b.substring(d+1),b=b.substring(0,d),e=b.toLowerCase(),f=0,"http://"==e.substring(0,7)?f+=7:"https://"==e.substring(0,8)&&(f+=8),d=e.indexOf("/",f),0<d&&(e=e.substring(f,
d),g=b.substring(d),b=b.substring(0,d),0<=e.indexOf("google")?k=",q,ie,start,search_key,word,kw,cd,":0<=e.indexOf("yahoo.co")?k=",p,ei,":0<=e.indexOf("baidu.")&&(k=",wd,word,"),k&&h)))){if((a=h.split("&"))&&1<a.length){for(f=0;f<a.length;f++)e=a[f],d=e.indexOf("="),0<d&&0<=k.indexOf(","+e.substring(0,d)+",")?m+=(m?"&":"")+e:n+=(n?"&":"")+e;m&&n?h=m+"&"+n:n=""}d=253-(h.length-n.length)-b.length;a=b+(0<d?g.substring(0,d):"")+"?"+h}return a};a.eb=function(c){var b=a.d.visibilityState,d=["webkitvisibilitychange",
"visibilitychange"];b||(b=a.d.webkitVisibilityState);if(b&&"prerender"==b){if(c)for(b=0;b<d.length;b++)a.d.addEventListener(d[b],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);"visible"==b&&c()});return!1}return!0};a.ca=!1;a.H=!1;a.Cb=function(){a.H=!0;a.p()};a.I=!1;a.Db=function(c){a.marketingCloudVisitorID=c.MCMID;a.visitorOptedOut=c.MCOPTOUT;a.analyticsVisitorID=c.MCAID;a.audienceManagerLocationHint=c.MCAAMLH;a.audienceManagerBlob=c.MCAAMB;a.I=!1;a.p()};a.cb=function(c){a.maxDelay||
(a.maxDelay=250);return a.u("_d")?(c&&setTimeout(function(){c()},a.maxDelay),!1):!0};a.aa=!1;a.G=!1;a.Aa=function(){a.G=!0;a.p()};a.isReadyToTrack=function(){var c=!0;if(!a.ob()||!a.mb())return!1;a.qb()||(c=!1);a.tb()||(c=!1);return c};a.ob=function(){a.ca||a.H||(a.eb(a.Cb)?a.H=!0:a.ca=!0);return a.ca&&!a.H?!1:!0};a.mb=function(){var c=a.wa();if(c)if(a.ta||a.ba)if(a.ta){if(!c.isApproved(c.Categories.ANALYTICS))return!1}else return!1;else return c.fetchPermissions(a.vb,!0),a.ba=!0,!1;return!0};a.V=
function(c){var b=a.wa();return b&&!b.isApproved(b.Categories[c])?!1:!0};a.wa=function(){return h.adobe&&h.adobe.optIn?h.adobe.optIn:null};a.Y=!0;a.qb=function(){var c=a.T();if(!c||!c.getVisitorValues)return!0;a.Y&&(a.Y=!1,a.I||(a.I=!0,c.getVisitorValues(a.Db)));return!a.I};a.T=function(){var c=a.visitor;c&&!c.isAllowed()&&(c=null);return c};a.tb=function(){a.aa||a.G||(a.cb(a.Aa)?a.G=!0:a.aa=!0);return a.aa&&!a.G?!1:!0};a.ba=!1;a.vb=function(){a.ba=!1;a.ta=!0};a.j=q;a.q=0;a.callbackWhenReadyToTrack=
function(c,b,d){var f;f={};f.Hb=c;f.Gb=b;f.Eb=d;a.j==q&&(a.j=[]);a.j.push(f);0==a.q&&(a.q=setInterval(a.p,100))};a.p=function(){var c;if(a.isReadyToTrack()&&(a.Bb(),a.j!=q))for(;0<a.j.length;)c=a.j.shift(),c.Gb.apply(c.Hb,c.Eb)};a.Bb=function(){a.q&&(clearInterval(a.q),a.q=0)};a.ua=function(c){var b,d={};a.hc(d);if(c!=q)for(b in c)d[b]=c[b];a.callbackWhenReadyToTrack(a,a.Fa,[d]);a.Da()};a.Ob=function(){var c=a.cookieRead("s_fid"),b="",d="",f;f=8;var e=4;if(!c||0>c.indexOf("-")){for(c=0;16>c;c++)f=
Math.floor(Math.random()*f),b+="0123456789ABCDEF".substring(f,f+1),f=Math.floor(Math.random()*e),d+="0123456789ABCDEF".substring(f,f+1),f=e=16;c=b+"-"+d}a.cookieWrite("s_fid",c,1)||(c=0);return c};a.Fa=function(c){var b=new Date,d="s"+Math.floor(b.getTime()/108E5)%10+Math.floor(1E13*Math.random()),f=b.getYear(),f="t="+a.escape(b.getDate()+"/"+b.getMonth()+"/"+(1900>f?f+1900:f)+" "+b.getHours()+":"+b.getMinutes()+":"+b.getSeconds()+" "+b.getDay()+" "+b.getTimezoneOffset()),e=a.T(),g;c&&(g=a.S(c,1));
a.Vb()&&!a.visitorOptedOut&&(a.xa()||(a.fid=a.Ob()),a.Yb(),a.usePlugins&&a.doPlugins&&a.doPlugins(a),a.account&&(a.abort||(a.trackOffline&&!a.timestamp&&(a.timestamp=Math.floor(b.getTime()/1E3)),c=h.location,a.pageURL||(a.pageURL=c.href?c.href:c),a.referrer||a.$a||(c=a.Util.getQueryParam("adobe_mc_ref",null,null,!0),a.referrer=c||void 0===c?void 0===c?"":c:p.document.referrer),a.$a=1,!a.referrer&&a.Z&&(a.referrer=a.Z),a.Z=0,a.referrer=a.Mb(a.referrer),a.u("_g")),a.Rb()&&!a.abort&&(e&&a.V("TARGET")&&
!a.supplementalDataID&&e.getSupplementalDataID&&(a.supplementalDataID=e.getSupplementalDataID("AppMeasurement:"+a._in,a.expectSupplementalData?!1:!0)),a.V("AAM")||(a.contextData["cm.ssf"]=1),a.Sb(),a.wb(),f+=a.Qb(),a.sb(d,f),a.u("_t"),a.referrer="")));a.referrer&&(a.Z=a.referrer);a.Da();g&&a.S(g,1)};a.t=a.track=function(c,b){b&&a.S(b);a.Y=!0;a.isReadyToTrack()?null!=a.j&&0<a.j.length?(a.ua(c),a.p()):a.Fa(c):a.ua(c)};a.wb=function(){a.writeSecureCookies&&!a.ssl&&a.ab()};a.ab=function(){a.contextData.excCodes=
a.contextData.excCodes?a.contextData.excCodes:[];a.contextData.excCodes.push(1)};a.Da=function(){a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=h.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.e=a.lightProfileID=a.useBeacon=a.referrer=0;a.contextData&&a.contextData.excCodes&&(a.contextData.excCodes=0)};a.Ca=[];a.registerPreTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.Ca.push([c,
b]):a.debugTracking&&a.C("DEBUG: Non function type passed to registerPreTrackCallback")};a.hb=function(c){a.va(a.Ca,c)};a.Ba=[];a.registerPostTrackCallback=function(c){for(var b=[],d=1;d<arguments.length;d++)b.push(arguments[d]);"function"==typeof c?a.Ba.push([c,b]):a.debugTracking&&a.C("DEBUG: Non function type passed to registerPostTrackCallback")};a.gb=function(c){a.va(a.Ba,c)};a.va=function(c,b){if("object"==typeof c)for(var d=0;d<c.length;d++){var f=c[d][0],e=c[d][1].slice();e.unshift(b);if("function"==
typeof f)try{f.apply(null,e)}catch(g){a.debugTracking&&a.C(g.message)}}};a.tl=a.trackLink=function(c,b,d,f,e){a.linkObject=c;a.linkType=b;a.linkName=d;e&&(a.bodyClickTarget=c,a.bodyClickFunction=e);return a.track(f)};a.trackLight=function(c,b,d,f){a.lightProfileID=c;a.lightStoreForSeconds=b;a.lightIncrementBy=d;return a.track(f)};a.clearVars=function(){var c,b;for(c=0;c<a.g.length;c++)if(b=a.g[c],"prop"==b.substring(0,4)||"eVar"==b.substring(0,4)||"hier"==b.substring(0,4)||"list"==b.substring(0,4)||
"channel"==b||"events"==b||"eventList"==b||"products"==b||"productList"==b||"purchaseID"==b||"transactionID"==b||"state"==b||"zip"==b||"campaign"==b)a[b]=void 0};a.tagContainerMarker="";a.sb=function(c,b){var d=a.ib()+"/"+c+"?AQB=1&ndh=1&pf=1&"+(a.za()?"callback=s_c_il["+a._in+"].doPostbacks&et=1&":"")+b+"&AQE=1";a.hb(d);a.fb(d);a.U()};a.ib=function(){var c=a.jb();return"http"+(a.ssl?"s":"")+"://"+c+"/b/ss/"+a.account+"/"+(a.mobile?"5.":"")+(a.za()?"10":"1")+"/JS-"+a.version+(a.ac?"T":"")+(a.tagContainerMarker?
"-"+a.tagContainerMarker:"")};a.za=function(){return a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks};a.jb=function(){var c=a.dc,b=a.trackingServer;b?a.trackingServerSecure&&a.ssl&&(b=a.trackingServerSecure):(c=c?(""+c).toLowerCase():"d1","d1"==c?c="112":"d2"==c&&(c="122"),b=a.lb()+"."+c+".2o7.net");return b};a.lb=function(){var c=a.visitorNamespace;c||(c=a.account.split(",")[0],c=c.replace(/[^0-9a-z]/gi,""));return c};a.Za=/{(%?)(.*?)(%?)}/;a.gc=RegExp(a.Za.source,"g");a.Lb=
function(c){if("object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];if("string"==typeof d.c&&"aa."==d.id.substr(0,3))for(var f=d.c.match(a.gc),e=0;e<f.length;++e){var g=f[e],k=g.match(a.Za),h="";"%"==k[1]&&"timezone_offset"==k[2]?h=(new Date).getTimezoneOffset():"%"==k[1]&&"timestampz"==k[2]&&(h=a.Pb());d.c=d.c.replace(g,a.escape(h))}}};a.Pb=function(){var c=new Date,b=new Date(6E4*Math.abs(c.getTimezoneOffset()));return a.k(4,c.getFullYear())+"-"+a.k(2,c.getMonth()+1)+"-"+
a.k(2,c.getDate())+"T"+a.k(2,c.getHours())+":"+a.k(2,c.getMinutes())+":"+a.k(2,c.getSeconds())+(0<c.getTimezoneOffset()?"-":"+")+a.k(2,b.getUTCHours())+":"+a.k(2,b.getUTCMinutes())};a.k=function(a,b){return(Array(a+1).join(0)+b).slice(-a)};a.qa={};a.doPostbacks=function(c){if("object"==typeof c)if(a.Lb(c),"object"==typeof a.AudienceManagement&&"function"==typeof a.AudienceManagement.isReady&&a.AudienceManagement.isReady()&&"function"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(c);
else if("object"==typeof c&&"object"==typeof c.dests)for(var b=0;b<c.dests.length;++b){var d=c.dests[b];"object"==typeof d&&"string"==typeof d.c&&"string"==typeof d.id&&"aa."==d.id.substr(0,3)&&(a.qa[d.id]=new Image,a.qa[d.id].alt="",a.qa[d.id].src=d.c)}};a.fb=function(c){a.i||a.Tb();a.i.push(c);a.ja=a.A();a.Ya()};a.Tb=function(){a.i=a.Wb();a.i||(a.i=[])};a.Wb=function(){var c,b;if(a.pa()){try{(b=h.localStorage.getItem(a.na()))&&(c=h.JSON.parse(b))}catch(d){}return c}};a.pa=function(){var c=!0;a.trackOffline&&
a.offlineFilename&&h.localStorage&&h.JSON||(c=!1);return c};a.Oa=function(){var c=0;a.i&&(c=a.i.length);a.l&&c++;return c};a.U=function(){if(a.l&&(a.v&&a.v.complete&&a.v.D&&a.v.R(),a.l))return;a.Pa=q;if(a.oa)a.ja>a.N&&a.Wa(a.i),a.ra(500);else{var c=a.Fb();if(0<c)a.ra(c);else if(c=a.Ma())a.l=1,a.Xb(c),a.$b(c)}};a.ra=function(c){a.Pa||(c||(c=0),a.Pa=setTimeout(a.U,c))};a.Fb=function(){var c;if(!a.trackOffline||0>=a.offlineThrottleDelay)return 0;c=a.A()-a.Ua;return a.offlineThrottleDelay<c?0:a.offlineThrottleDelay-
c};a.Ma=function(){if(0<a.i.length)return a.i.shift()};a.Xb=function(c){if(a.debugTracking){var b="AppMeasurement Debug: "+c;c=c.split("&");var d;for(d=0;d<c.length;d++)b+="\n\t"+a.unescape(c[d]);a.C(b)}};a.xa=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.X=!1;var t;try{t=JSON.parse('{"x":"y"}')}catch(v){t=null}t&&"y"==t.x?(a.X=!0,a.W=function(a){return JSON.parse(a)}):h.$&&h.$.parseJSON?(a.W=function(a){return h.$.parseJSON(a)},a.X=!0):a.W=function(){return null};a.$b=function(c){var b,
d,f;a.nb(c)&&(d=1,b={send:function(c){a.useBeacon=!1;navigator.sendBeacon(c)?b.R():b.ha()}});!b&&a.xa()&&2047<c.length&&(a.bb()&&(d=2,b=new XMLHttpRequest),b&&(a.AudienceManagement&&a.AudienceManagement.isReady()||0!=a.usePostbacks)&&(a.X?b.Ha=!0:b=0));!b&&a.fc&&(c=c.substring(0,2047));!b&&a.d.createElement&&(0!=a.usePostbacks||a.AudienceManagement&&a.AudienceManagement.isReady())&&(b=a.d.createElement("SCRIPT"))&&"async"in b&&((f=(f=a.d.getElementsByTagName("HEAD"))&&f[0]?f[0]:a.d.body)?(b.type=
"text/javascript",b.setAttribute("async","async"),d=3):b=0);b||(b=new Image,b.alt="",b.abort||"undefined"===typeof h.InstallTrigger||(b.abort=function(){b.src=q}));b.Va=Date.now();b.Ja=function(){try{b.D&&(clearTimeout(b.D),b.D=0)}catch(a){}};b.onload=b.R=function(){b.Va&&(a.ka=Date.now()-b.Va);a.gb(c);b.Ja();a.Jb();a.da();a.l=0;a.U();if(b.Ha){b.Ha=!1;try{a.doPostbacks(a.W(b.responseText))}catch(d){}}};b.onabort=b.onerror=b.ha=function(){b.Ja();(a.trackOffline||a.oa)&&a.l&&a.i.unshift(a.Ib);a.l=0;
a.ja>a.N&&a.Wa(a.i);a.da();a.ra(500)};b.onreadystatechange=function(){4==b.readyState&&(200==b.status?b.R():b.ha())};a.Ua=a.A();if(1===d)b.send(c);else if(2===d)f=c.indexOf("?"),d=c.substring(0,f),f=c.substring(f+1),f=f.replace(/&callback=[a-zA-Z0-9_.\[\]]+/,""),b.open("POST",d,!0),b.withCredentials=!0,b.send(f);else if(b.src=c,3===d){if(a.Sa)try{f.removeChild(a.Sa)}catch(e){}f.firstChild?f.insertBefore(b,f.firstChild):f.appendChild(b);a.Sa=a.v}b.D=setTimeout(function(){b.D&&(b.complete?b.R():(a.trackOffline&&
b.abort&&b.abort(),b.ha()))},5E3);a.Ib=c;a.v=h["s_i_"+a.replace(a.account,",","_")]=b;if(a.useForcedLinkTracking&&a.J||a.bodyClickFunction)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=250),a.ea=setTimeout(a.da,a.forcedLinkTrackingTimeout)};a.nb=function(c){var b=!1;navigator.sendBeacon&&(a.pb(c)?b=!0:a.useBeacon&&(b=!0));a.yb(c)&&(b=!1);return b};a.pb=function(a){return a&&0<a.indexOf("pe=lnk_e")?!0:!1};a.yb=function(a){return 64E3<=a.length};a.bb=function(){return"undefined"!==typeof XMLHttpRequest&&
"withCredentials"in new XMLHttpRequest?!0:!1};a.Jb=function(){if(a.pa()&&!(a.Ta>a.N))try{h.localStorage.removeItem(a.na()),a.Ta=a.A()}catch(c){}};a.Wa=function(c){if(a.pa()){a.Ya();try{h.localStorage.setItem(a.na(),h.JSON.stringify(c)),a.N=a.A()}catch(b){}}};a.Ya=function(){if(a.trackOffline){if(!a.offlineLimit||0>=a.offlineLimit)a.offlineLimit=10;for(;a.i.length>a.offlineLimit;)a.Ma()}};a.forceOffline=function(){a.oa=!0};a.forceOnline=function(){a.oa=!1};a.na=function(){return a.offlineFilename+
"-"+a.visitorNamespace+a.account};a.A=function(){return(new Date).getTime()};a.Qa=function(a){a=a.toLowerCase();return 0!=a.indexOf("#")&&0!=a.indexOf("about:")&&0!=a.indexOf("opera:")&&0!=a.indexOf("javascript:")?!0:!1};a.setTagContainer=function(c){var b,d,f;a.ac=c;for(b=0;b<a._il.length;b++)if((d=a._il[b])&&"s_l"==d._c&&d.tagContainerName==c){a.S(d);if(d.lmq)for(b=0;b<d.lmq.length;b++)f=d.lmq[b],a.loadModule(f.n);if(d.ml)for(f in d.ml)if(a[f])for(b in c=a[f],f=d.ml[f],f)!Object.prototype[b]&&("function"!=
typeof f[b]||0>(""+f[b]).indexOf("s_c_il"))&&(c[b]=f[b]);if(d.mmq)for(b=0;b<d.mmq.length;b++)f=d.mmq[b],a[f.m]&&(c=a[f.m],c[f.f]&&"function"==typeof c[f.f]&&(f.a?c[f.f].apply(c,f.a):c[f.f].apply(c)));if(d.tq)for(b=0;b<d.tq.length;b++)a.track(d.tq[b]);d.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(c,b,d,f){var e,g="";b||(b=a.pageURL?a.pageURL:h.location);d=d?d:"&";if(!c||!b)return g;b=""+b;e=b.indexOf("?");if(0>
e)return g;b=d+b.substring(e+1)+d;if(!f||!(0<=b.indexOf(d+c+d)||0<=b.indexOf(d+c+"="+d))){e=b.indexOf("#");0<=e&&(b=b.substr(0,e)+d);e=b.indexOf(d+c+"=");if(0>e)return g;b=b.substring(e+d.length+c.length+1);e=b.indexOf(d);0<=e&&(b=b.substring(0,e));0<b.length&&(g=a.unescape(b));return g}},getIeVersion:function(){return document.documentMode?document.documentMode:a.ya()?7:null}};a.F="supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
a.g=a.F.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));a.la="timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");a.O=a.la.slice(0);a.Ga="account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout writeSecureCookies useLinkTrackSessionStorage trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData useBeacon usePostbacks registerPreTrackCallback registerPostTrackCallback bodyClickTarget bodyClickFunction AudienceManagement".split(" ");
for(m=0;250>=m;m++)76>m&&(a.g.push("prop"+m),a.O.push("prop"+m)),a.g.push("eVar"+m),a.O.push("eVar"+m),6>m&&a.g.push("hier"+m),4>m&&a.g.push("list"+m);m="pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID ms_a".split(" ");a.g=a.g.concat(m);a.F=a.F.concat(m);a.ssl=0<=h.location.protocol.toLowerCase().indexOf("https");a.charSet="UTF-8";a.contextData={};a.writeSecureCookies=
!1;a.offlineThrottleDelay=0;a.offlineFilename="AppMeasurement.offline";a.P="s_sq";a.Ua=0;a.ja=0;a.N=0;a.Ta=0;a.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";a.w=h;a.d=h.document;a.da=function(){a.ea&&(h.clearTimeout(a.ea),a.ea=q);a.bodyClickTarget&&a.J&&a.bodyClickTarget.dispatchEvent(a.J);a.bodyClickFunction&&("function"==typeof a.bodyClickFunction?a.bodyClickFunction():a.bodyClickTarget&&a.bodyClickTarget.href&&(a.d.location=a.bodyClickTarget.href));a.bodyClickTarget=
a.J=a.bodyClickFunction=0};a.Xa=function(){a.b=a.d.body;a.b?(a.r=function(c){var b,d,f,e,g;if(!(a.d&&a.d.getElementById("cppXYctnr")||c&&c["s_fe_"+a._in])){if(a.Ia)if(a.useForcedLinkTracking)a.b.removeEventListener("click",a.r,!1);else{a.b.removeEventListener("click",a.r,!0);a.Ia=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=c.srcElement?c.srcElement:c.target;try{if(!a.clickObject||a.M&&a.M==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||a.clickObject.parentNode))a.clickObject=
0;else{var k=a.M=a.clickObject;a.ia&&(clearTimeout(a.ia),a.ia=0);a.ia=setTimeout(function(){a.M==k&&(a.M=0)},1E4);f=a.Oa();a.track();if(f<a.Oa()&&a.useForcedLinkTracking&&c.target){for(e=c.target;e&&e!=a.b&&"A"!=e.tagName.toUpperCase()&&"AREA"!=e.tagName.toUpperCase();)e=e.parentNode;if(e&&(g=e.href,a.Qa(g)||(g=0),d=e.target,c.target.dispatchEvent&&g&&(!d||"_self"==d||"_top"==d||"_parent"==d||h.name&&d==h.name))){try{b=a.d.createEvent("MouseEvents")}catch(l){b=new h.MouseEvent}if(b){try{b.initMouseEvent("click",
c.bubbles,c.cancelable,c.view,c.detail,c.screenX,c.screenY,c.clientX,c.clientY,c.ctrlKey,c.altKey,c.shiftKey,c.metaKey,c.button,c.relatedTarget)}catch(m){b=0}b&&(b["s_fe_"+a._in]=b.s_fe=1,c.stopPropagation(),c.stopImmediatePropagation&&c.stopImmediatePropagation(),c.preventDefault(),a.bodyClickTarget=c.target,a.J=b)}}}}}catch(n){a.clickObject=0}}},a.b&&a.b.attachEvent?a.b.attachEvent("onclick",a.r):a.b&&a.b.addEventListener&&(navigator&&(0<=navigator.userAgent.indexOf("WebKit")&&a.d.createEvent||
0<=navigator.userAgent.indexOf("Firefox/2")&&h.MouseEvent)&&(a.Ia=1,a.useForcedLinkTracking=1,a.b.addEventListener("click",a.r,!0)),a.b.addEventListener("click",a.r,!1))):setTimeout(a.Xa,30)};a.fc=a.ya();a.Kb();a.mc||(r?a.setAccount(r):a.C("Error, missing Report Suite ID in AppMeasurement initialization"),a.Xa(),a.loadModule("ActivityMap"))}
function s_gi(r){var a,h=window.s_c_il,q,p,m=r.split(","),s,u,t=0;if(h)for(q=0;!t&&q<h.length;){a=h[q];if("s_c"==a._c&&(a.account||a.oun))if(a.account&&a.account==r)t=1;else for(p=a.account?a.account:a.oun,p=a.allAccounts?a.allAccounts:p.split(","),s=0;s<m.length;s++)for(u=0;u<p.length;u++)m[s]==p[u]&&(t=1);q++}t?a.setAccount&&a.setAccount(r):a=new AppMeasurement(r);return a}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);
function s_pgicq(){var r=window,a=r.s_giq,h,q,p;if(a)for(h=0;h<a.length;h++)q=a[h],p=s_gi(q.oun),p.setAccount(q.un),p.setTagContainer(q.tagContainerName);r.s_giq=0}s_pgicq();

//end of AppMeasurement

// Integrate Module

function AppMeasurement_Module_Integrate(l){var c=this;c.s=l;var e=window;e.s_c_in||(e.s_c_il=[],e.s_c_in=0);c._il=e.s_c_il;c._in=e.s_c_in;c._il[c._in]=c;e.s_c_in++;c._c="s_m";c.list=[];c.add=function(d,b){var a;b||(b="s_Integrate_"+d);e[b]||(e[b]={});a=c[d]=e[b];a.a=d;a.e=c;a._c=0;a._d=0;void 0==a.disable&&(a.disable=0);a.get=function(b,d){var f=document,h=f.getElementsByTagName("HEAD"),k;if(!a.disable&&(d||(v="s_"+c._in+"_Integrate_"+a.a+"_get_"+a._c),a._c++,a.VAR=v,a.CALLBACK="s_c_il["+c._in+"]."+
a.a+".callback",a.delay(),h=h&&0<h.length?h[0]:f.body))try{k=f.createElement("SCRIPT"),k.type="text/javascript",k.setAttribute("async","async"),k.src=c.c(a,b),0>b.indexOf("[CALLBACK]")&&(k.onload=k.onreadystatechange=function(){a.callback(e[v])}),h.firstChild?h.insertBefore(k,h.firstChild):h.appendChild(k)}catch(l){}};a.callback=function(b){var c;if(b)for(c in b)Object.prototype[c]||(a[c]=b[c]);a.ready()};a.beacon=function(b){var d="s_i_"+c._in+"_Integrate_"+a.a+"_"+a._c;a.disable||(a._c++,d=e[d]=
new Image,d.src=c.c(a,b))};a.script=function(b){a.get(b,1)};a.delay=function(){a._d++};a.ready=function(){a._d--;a.disable||l.delayReady()};c.list.push(d)};c._g=function(d){var b,a=(d?"use":"set")+"Vars";for(d=0;d<c.list.length;d++)if((b=c[c.list[d]])&&!b.disable&&b[a])try{b[a](l,b)}catch(e){}};c._t=function(){c._g(1)};c._d=function(){var d,b;for(d=0;d<c.list.length;d++)if((b=c[c.list[d]])&&!b.disable&&0<b._d)return 1;return 0};c.c=function(c,b){var a,e,g,f;"http"!=b.toLowerCase().substring(0,4)&&
(b="http://"+b);l.ssl&&(b=l.replace(b,"http:","https:"));c.RAND=Math.floor(1E13*Math.random());for(a=0;0<=a;)a=b.indexOf("[",a),0<=a&&(e=b.indexOf("]",a),e>a&&(g=b.substring(a+1,e),2<g.length&&"s."==g.substring(0,2)?(f=l[g.substring(2)])||(f=""):(f=""+c[g],f!=c[g]&&parseFloat(f)!=c[g]&&(g=0)),g&&(b=b.substring(0,a)+encodeURIComponent(f)+b.substring(e+1)),a=e));return b}}

// End Integrate Module
						
//adding heartbeat tracking for check start

/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 * Copyright 2020 Adobe
 * All Rights Reserved.
 *
 * NOTICE: All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/
/*
 * MediaSDK - 2.2.2 - 2020-06-24
 * Copyright (c) 2020 Adobe. All Rights Reserved.
 *
 * Copyright for external libraries used in Media SDK
 * JavaScript MD5 1.0.1
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 *
 *
 * umdjs (commonjsStrict.js)
 * Copyright (c) the UMD contributors
 * Licensed under the MIT license:
 * https://github.com/umdjs/umd/blob/master/LICENSE.md
 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    factory(exports);
  } else {
    factory(root.ADB = {});
  }
}(typeof self !== 'undefined' ? self : this, function (exports) {
  var lib = {};
  (function () {
    

// Heartbeat core
!function(a){if(void 0===b)var b={};if(void 0===c)var c={};if(void 0===d)var d={};if(d.radio||(d.radio={}),d.plugin||(d.plugin={}),void 0===e)var e={};e.clock||(e.clock={}),function(a){"use strict";function b(a,b){var c=(65535&a)+(65535&b);return(a>>16)+(b>>16)+(c>>16)<<16|65535&c}function c(a,b){return a<<b|a>>>32-b}function d(a,d,e,f,g,h){return b(c(b(b(d,a),b(f,h)),g),e)}function e(a,b,c,e,f,g,h){return d(b&c|~b&e,a,b,f,g,h)}function f(a,b,c,e,f,g,h){return d(b&e|c&~e,a,b,f,g,h)}function g(a,b,c,e,f,g,h){return d(b^c^e,a,b,f,g,h)}function h(a,b,c,e,f,g,h){return d(c^(b|~e),a,b,f,g,h)}function i(a,c){a[c>>5]|=128<<c%32,a[14+(c+64>>>9<<4)]=c;var d,i,j,k,l,m=1732584193,n=-271733879,o=-1732584194,p=271733878;for(d=0;d<a.length;d+=16)i=m,j=n,k=o,l=p,m=e(m,n,o,p,a[d],7,-680876936),p=e(p,m,n,o,a[d+1],12,-389564586),o=e(o,p,m,n,a[d+2],17,606105819),n=e(n,o,p,m,a[d+3],22,-1044525330),m=e(m,n,o,p,a[d+4],7,-176418897),p=e(p,m,n,o,a[d+5],12,1200080426),o=e(o,p,m,n,a[d+6],17,-1473231341),n=e(n,o,p,m,a[d+7],22,-45705983),m=e(m,n,o,p,a[d+8],7,1770035416),p=e(p,m,n,o,a[d+9],12,-1958414417),o=e(o,p,m,n,a[d+10],17,-42063),n=e(n,o,p,m,a[d+11],22,-1990404162),m=e(m,n,o,p,a[d+12],7,1804603682),p=e(p,m,n,o,a[d+13],12,-40341101),o=e(o,p,m,n,a[d+14],17,-1502002290),n=e(n,o,p,m,a[d+15],22,1236535329),m=f(m,n,o,p,a[d+1],5,-165796510),p=f(p,m,n,o,a[d+6],9,-1069501632),o=f(o,p,m,n,a[d+11],14,643717713),n=f(n,o,p,m,a[d],20,-373897302),m=f(m,n,o,p,a[d+5],5,-701558691),p=f(p,m,n,o,a[d+10],9,38016083),o=f(o,p,m,n,a[d+15],14,-660478335),n=f(n,o,p,m,a[d+4],20,-405537848),m=f(m,n,o,p,a[d+9],5,568446438),p=f(p,m,n,o,a[d+14],9,-1019803690),o=f(o,p,m,n,a[d+3],14,-187363961),n=f(n,o,p,m,a[d+8],20,1163531501),m=f(m,n,o,p,a[d+13],5,-1444681467),p=f(p,m,n,o,a[d+2],9,-51403784),o=f(o,p,m,n,a[d+7],14,1735328473),n=f(n,o,p,m,a[d+12],20,-1926607734),m=g(m,n,o,p,a[d+5],4,-378558),p=g(p,m,n,o,a[d+8],11,-2022574463),o=g(o,p,m,n,a[d+11],16,1839030562),n=g(n,o,p,m,a[d+14],23,-35309556),m=g(m,n,o,p,a[d+1],4,-1530992060),p=g(p,m,n,o,a[d+4],11,1272893353),o=g(o,p,m,n,a[d+7],16,-155497632),n=g(n,o,p,m,a[d+10],23,-1094730640),m=g(m,n,o,p,a[d+13],4,681279174),p=g(p,m,n,o,a[d],11,-358537222),o=g(o,p,m,n,a[d+3],16,-722521979),n=g(n,o,p,m,a[d+6],23,76029189),m=g(m,n,o,p,a[d+9],4,-640364487),p=g(p,m,n,o,a[d+12],11,-421815835),o=g(o,p,m,n,a[d+15],16,530742520),n=g(n,o,p,m,a[d+2],23,-995338651),m=h(m,n,o,p,a[d],6,-198630844),p=h(p,m,n,o,a[d+7],10,1126891415),o=h(o,p,m,n,a[d+14],15,-1416354905),n=h(n,o,p,m,a[d+5],21,-57434055),m=h(m,n,o,p,a[d+12],6,1700485571),p=h(p,m,n,o,a[d+3],10,-1894986606),o=h(o,p,m,n,a[d+10],15,-1051523),n=h(n,o,p,m,a[d+1],21,-2054922799),m=h(m,n,o,p,a[d+8],6,1873313359),p=h(p,m,n,o,a[d+15],10,-30611744),o=h(o,p,m,n,a[d+6],15,-1560198380),n=h(n,o,p,m,a[d+13],21,1309151649),m=h(m,n,o,p,a[d+4],6,-145523070),p=h(p,m,n,o,a[d+11],10,-1120210379),o=h(o,p,m,n,a[d+2],15,718787259),n=h(n,o,p,m,a[d+9],21,-343485551),m=b(m,i),n=b(n,j),o=b(o,k),p=b(p,l);return[m,n,o,p]}function j(a){var b,c="";for(b=0;b<32*a.length;b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);return c}function k(a){var b,c=[];for(c[(a.length>>2)-1]=void 0,b=0;b<c.length;b+=1)c[b]=0;for(b=0;b<8*a.length;b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;return c}function l(a){return j(i(k(a),8*a.length))}function m(a,b){var c,d,e=k(a),f=[],g=[];for(f[15]=g[15]=void 0,e.length>16&&(e=i(e,8*a.length)),c=0;c<16;c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];return d=i(f.concat(k(b)),512+8*b.length),j(i(g.concat(d),640))}function n(a){var b,c,d="0123456789abcdef",e="";for(c=0;c<a.length;c+=1)b=a.charCodeAt(c),e+=d.charAt(b>>>4&15)+d.charAt(15&b);return e}function o(a){return unescape(encodeURIComponent(a))}function p(a){return l(o(a))}function q(a){return n(p(a))}function r(a,b){return m(o(a),o(b))}function s(a,b){return n(r(a,b))}function t(a,b,c){return b?c?r(b,a):s(b,a):c?p(a):q(a)}a.md5=t}(b),function(a){"use strict";var b={};b.startsWith=function(a,b){return 0==a.indexOf(b)},a.StringUtils=b}(b),function(a){"use strict";var b={};b.clone=function(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b},b.merge=function(a,c){var d=b.clone(a);for(var e in c)c.hasOwnProperty(e)&&(d[e]=c[e]);return d},b.append=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},a.ObjectUtils=b}(b),function(a){"use strict";function b(a){if(null==a)return!0;for(var b=0;b<a.length;++b)if(isNaN(a[b]))return!1;return!0}function c(a,c){if("string"!=typeof a||"string"!=typeof c)return NaN;var d=a.split("."),e=c.split(".");if(!b(d)||!b(e))return NaN;for(var f=Math.max(d.length,e.length),g=0;g<f;++g){var h=void 0!=d[g]?d[g]:"0",i=void 0!=e[g]?e[g]:"0";if(h=Number(h),i=Number(i),h>i)return 1;if(h<i)return-1}return 0}var d={};d.isGreaterThan=function(a,b){return c(a,b)>0},d.isGreaterThanEqual=function(a,b){return c(a,b)>=0},d.isLessThan=function(a,b){return c(a,b)<0},d.isLessThanEqual=function(a,b){return c(a,b)<=0},d.isSame=function(a,b){return 0===c(a,b)},d.isDifferent=function(a,b){return 0!==c(a,b)},a.VersionUtils=d}(b),function(a){"use strict";function b(a,b,c){this.fn=a,this.ctx=b,this.params=c}b.prototype.run=function(){this.params?this.fn.apply(this.ctx,this.params):this.fn.apply(this.ctx)},a.radio.Command=b}(d),function(a){"use strict";function b(a,b){this._queue=[],this._lastTs=0,this._isSuspended=void 0!==a&&a,this._delay=void 0!==b?b:0}b.prototype.addCommand=function(a){this._queue.push(a),this._drain()},b.prototype.cancelAllCommands=function(){this._queue=[]},b.prototype.isEmpty=function(){return 0===this._queue.length},b.prototype.suspend=function(){this._isSuspended=!0},b.prototype.resume=function(){this._isSuspended=!1,this._drain()},b.prototype.flush=function(){this._isSuspended=!1;for(var a=0;a<this._queue.length;a++){this._queue[a].run()}this._queue=[]},b.prototype._drain=function(){if(!this._isSuspended&&!this._drainInProgress){this._drainInProgress=!0;var a=this;!function b(){var c=a._queue.shift();c?a._runCommand(c,function(){a._isSuspended||b()}):a._drainInProgress=!1}()}},b.prototype._runCommand=function(a,b){function c(){a.run(),null!=b&&b.call(d)}var d=this;if(0==this._lastTs)c();else{var e=(new Date).getTime(),f=e-this._lastTs;this._lastTs=e,f<this._delay?setTimeout(c,this._delay-f):c()}},a.radio.CommandQueue=b}(d),function(a){"use strict";function b(a,b){if(this._name=a,!b)throw new Error("Reference to the logger object cannot be NULL");this._logger=b,this._listeners={},this._requests={},this._commands={},this._isShutDown=!1}function c(a,c){if(a===c)return!0;for(var d=(a||"").split(b.SEPARATOR),e=(c||"").split(b.SEPARATOR),f=!0,g=0;g<d.length;g++)f=f&&(d[g]===b.WILDCARD||d[g]===e[g]);return f}b.WILDCARD="*",b.SEPARATOR=":",b.prototype.toString=function(){return"<channel: "+this._name+">"},b.prototype.shutdown=function(){this._isShutDown||(this._logger.debug(d,"#shutdown > Shutting down"),this.off(),this._requests={},this._commands={},this._isShutDown=!0)},b.prototype.on=function(a,b,c){this._isShutDown||(this._listeners[a]||(this._listeners[a]=[]),this._listeners[a].push({fn:b,ctx:c}))},b.prototype.off=function(a,b,c){if(!this._isShutDown){if(b="function"==typeof b?b:null,!a&&null==b&&!c)return void(this._listeners={});if(a)this._removeListener(a,b,c);else for(a in this._listeners)this._listeners.hasOwnProperty(a)&&this._removeListener(a,b,c)}},b.prototype.trigger=function(a){if(!this._isShutDown)for(var b in this._listeners)if(this._listeners.hasOwnProperty(b)&&c(b,a.name))for(var d=this._listeners[b].slice(0),e=0;e<d.length;e++){var f=d[e];f.fn.call(f.ctx,a)}},b.prototype.comply=function(a,b,c){this._isShutDown||(this._commands[a]={cmd:b,ctx:c})},b.prototype.command=function(a,b){if(!this._isShutDown){var c=this._commands[a];if(!c)return void this._logger.warn(d,"#command > No command handler for: "+a);c.cmd.call(c.ctx,b)}},b.prototype.reply=function(a,b,c){this._isShutDown||(this._requests[a]={fn:b,ctx:c})},b.prototype.request=function(a){if(!this._isShutDown){var b=this._requests[a];return b?b.fn.call(b.ctx):(this._logger.warn(d,"#request > No request handler for: "+a),null)}},b.prototype._removeListener=function(a,b,c){b="function"==typeof b?b:null;var d=this._listeners[a];if(d){if(!d.length||null==b&&!c)return void delete this._listeners[a];for(var e=0;e<d.length;e++){var f=d[e];null!==b&&b!==f.fn||c&&c!==f.ctx||this._listeners[a].splice(e,1)}}};var d="radio::Channel";a.radio.Channel=b}(d),function(a){"use strict";function b(a){if(!a)throw new Error("Reference to the logger object cannot be NULL");this._logger=a,this._channels={}}var c=a.radio.Channel;b.prototype.channel=function(a){return this._channels[a]||(this._channels[a]=new c(a,this._logger)),this._channels[a]},b.prototype.shutdown=function(){for(var a in this._channels)this._channels.hasOwnProperty(a)&&this._channels[a].shutdown()},a.radio.Radio=b}(d),function(a){"use strict";function b(a,b){function c(){this.constructor=a}for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a}a.extend=b}(d),function(a){"use strict";function b(){}b.prototype.write=function(a){throw new Error("Implementation error: Method must be overridden.")},a.ILogWriter=b}(d),function(a){"use strict";function b(){}b.prototype.write=function(a){window.console&&window.console.log&&window.console.log(a)},a.LogWriter=b}(d),function(a){"use strict";function b(){}b.prototype.setLogWriter=function(a){throw new Error("Implementation error: Method must be overridden.")},b.prototype.getLogWriter=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.getEnabled=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.enable=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.disable=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.debug=function(a,b){throw new Error("Implementation error: Method must be overridden.")},b.prototype.info=function(a,b){throw new Error("Implementation error: Method must be overridden.")},b.prototype.warn=function(a,b){throw new Error("Implementation error: Method must be overridden.")},b.prototype.error=function(a,b){throw new Error("Implementation error: Method must be overridden.")},a.ILogger=b}(d),function(a){"use strict";function b(){this._logWriter=new d}function c(a){return a<10?"00"+a:a<100?"0"+a:""+a}var d=a.LogWriter;b.prototype.setLogWriter=function(a){if(!a)throw new Error("Reference to the ILogWriter object cannot be NULL");this._logWriter=a,this._enabled=!1},b.prototype.getLogWriter=function(){return this._logWriter},b.prototype.getEnabled=function(){return this._enabled},b.prototype.enable=function(){this._enabled=!0},b.prototype.disable=function(){this._enabled=!1},b.prototype.debug=function(a,b){this._log(a,f,b)},b.prototype.info=function(a,b){this._log(a,e,b)},b.prototype.warn=function(a,b){this._log(a,g,b)},b.prototype.error=function(a,b){this._log(a,h,b)},b.prototype._log=function(a,b,d){if(b==h||this._enabled){var e="",f=new Date;e+="["+f.toTimeString()+"."+c(f.getMilliseconds())+"] ["+b+"] ",e+="["+a+"] "+d,this._logWriter.write(e)}};var e="INFO",f="DEBUG",g="WARN",h="ERROR";a.Logger=b}(d),function(a){"use strict";function b(a,b){this._pluginName=a,this._eventName=b}var c=a.radio.Channel;b.prototype.getPluginName=function(){return this._pluginName},b.prototype.getEventName=function(){return this._eventName},b.prototype.getName=function(){return this._pluginName+c.SEPARATOR+this._eventName},a.Trigger=b}(d),function(a){"use strict";function b(a,b){this.name=a,this.data=b}b.SUCCESS="success",b.ERROR="error",b.createFromTrigger=function(a){return new b(a.getName())},a.Event=b}(d),function(a){"use strict";function b(){this._events={}}b.prototype.addEventListener=function(a,b,c){a&&b&&(c=c||window,this._events[a]=this._events[a]||[],this._events[a].push({cb:b,ctx:c}))},b.prototype.removeEventListener=function(a,b,c){if(a&&b){c=c||window;var d,e,f=!1;for(e in this._events)if(a===e){f=!0;break}if(f){for(d=this._events[e].length-1;d>=0;d--){var g=this._events[e][d];b===g.cb&&c===g.ctx&&this._events[e].splice(d,1)}this._events[e].length||delete this._events[e]}}},b.prototype.dispatchEvent=function(a){if(a.name){var b,c;for(b in this._events)if(this._events.hasOwnProperty(b)&&a.name===b){var d=this._events[b],e=d.slice(0),f=e.length;for(c=0;c<f;c++)e[c].cb.call(e[c].ctx,a);break}}},b.prototype.removeAllListeners=function(a){if(a){var b,c;for(c in this._events)if(this._events.hasOwnProperty(c)){for(b=this._events[c].length-1;b>=0;b--){var d=this._events[c][b];d.ctx===a&&this._events[c].splice(b,1)}this._events[c].length||delete this._events[c]}}else this._events={}},a.EventDispatcher=b}(d),function(a){"use strict";function b(){}function c(a,b){this.url=a||null,this.method=b,this._xmlhttp=null}function d(){d.__super__.constructor.call(this),this._connection=null}var e=a.Event,f=a.EventDispatcher;b.GET="GET",d.RESPONSE="response",d.INSTANCE="instance",a.extend(d,f),d.prototype.close=function(){this.removeAllListeners(null)},d.prototype.load=function(a){a&&a.method&&a.url&&(a._xmlhttp=this._createCORSRequest(a),a._xmlhttp?a._xmlhttp.send():this._loadImage(a))},d.prototype._createCORSRequest=function(a){var b=null;if(void 0!==window.XMLHttpRequest){var c=new window.XMLHttpRequest;"withCredentials"in c&&(b=c,b.open(a.method,a.url,!0))}if(null==b&&void 0!==window.XDomainRequest&&(b=new window.XDomainRequest,b.open(a.method,a.url)),b){var f={};f[d.INSTANCE]=this;var g=this;b.onload=function(){if(b.status&&parseInt(b.status,10)>=400)return this.onerror();f[d.RESPONSE]=b.responseText,g.dispatchEvent(new e(e.SUCCESS,f))},b.onerror=function(){g.dispatchEvent(new e(e.ERROR,f))}}return b},d.prototype._loadImage=function(a){this._connection||(this._connection=new Image,this._connection.alt=""),this._connection.src=a.url;var b={};b[d.RESPONSE]="",b[d.INSTANCE]=this,this.dispatchEvent(new e(e.SUCCESS,b))},a.URLRequestMethod=b,a.URLRequest=c,a.URLLoader=d}(d),function(a){"use strict";var b="2.2.2.230",c="96e624",d={};d.getVersion=function(){return"js-"+b+"-"+c},d.getMajor=function(){return d.getNumberAtPosition(0)},d.getMinor=function(){return d.getNumberAtPosition(1)},d.getMicro=function(){return d.getNumberAtPosition(2)},d.getPatch=function(){return d.getNumberAtPosition(3)},d.getBuild=function(){return c},d.getApiLevel=function(){return 4},d.getNumberAtPosition=function(a){return b.split(".")[a]},a.Version=d}(c),function(a){"use strict";function b(a,b){this._message=a,this._details=b}b.prototype.getMessage=function(){return this._message},b.prototype.getDetails=function(){return this._details},a.ErrorInfo=b}(c),function(a){"use strict";function b(){this.debugLogging=!1}a.HeartbeatConfig=b}(c),function(a){"use strict";function b(){}b.prototype.onError=function(a){},a.HeartbeatDelegate=b}(c),function(a){"use strict";function b(){}b.prototype.configure=function(a){throw new Error("Implementation error: Method must be overridden.")},b.prototype.bootstrap=function(a){throw new Error("Implementation error: Method must be overridden.")},b.prototype.setup=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.destroy=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.enable=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.disable=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.getName=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.isInitialized=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.resolveData=function(a){throw new Error("Implementation error: Method must be overridden.")},a.plugin.IPlugin=b}(d),function(a){"use strict";function b(a,b,c,d){this.trigger=a,this.action=c,this.plugin=b,this._paramMappings={},this.mergeParams(d)}var c=a.plugin.ParamMapping;b.prototype.mergeParams=function(a){if(a)for(var b=0;b<a.length;b++){var c=a[b];this._paramMappings[c.getKeyName()]=c}},b.prototype.getParams=function(){var a=[];for(var b in this._paramMappings)this._paramMappings.hasOwnProperty(b)&&a.push(this._paramMappings[b]);return a},b.prototype.addParam=function(a){this._paramMappings[a.getKeyName()]=a},b.prototype.removeParam=function(a,b){var d=new c(a,b);this._paramMappings.hasOwnProperty(d.getKeyName())&&delete this._paramMappings[d.getKeyName()]},a.plugin.Behaviour=b}(d),function(a){"use strict";function b(a,b,d){this._pluginName=a,this._key=b,this._paramName=d||a+c.SEPARATOR+b}var c=a.radio.Channel;b.prototype.getPluginName=function(){return this._pluginName},b.prototype.getKey=function(){return this._key},b.prototype.getKeyName=function(){return this._pluginName+c.SEPARATOR+this._key},b.prototype.getParamName=function(){return this._paramName},a.plugin.ParamMapping=b}(d),function(a){"use strict";function b(a){if(!a)throw new Error("Reference to the logger object cannot be NULL");this._logger=a,this._plugins={},this._behaviours={},this._radio=new d(this._logger),this._dataChannel=this._radio.channel(g),this._ctrlChannel=this._radio.channel(h)}var c=a.Event,d=a.radio.Radio,e=a.radio.Channel,f=a.plugin.Behaviour;b.ERROR="error",b.prototype.addPlugin=function(a){var b=a.getName();this._plugins[b]&&this._logger.warn(i,"#addPlugin > Replacing plugin: "+b),this._plugins[b]=a,a.bootstrap(this)},b.prototype.setupPlugins=function(){for(var a in this._plugins)this._plugins.hasOwnProperty(a)&&this._plugins[a].setup()},b.prototype.pluginExists=function(a){return!!this._plugins[a]},b.prototype.isPluginInitialized=function(a){return this._plugins[a]&&this._plugins[a].isInitialized()},b.prototype.on=function(a,b,c,d){this._dataChannel.on(a+e.SEPARATOR+b,c,d)},b.prototype.off=function(a,b,c,d){var f=a&&b?a+e.SEPARATOR+b:null;this._dataChannel.off(f,c,d)},b.prototype.trigger=function(a){var b=a.name,c=this._behaviours[b];if(c){var d,e,f,g,h,i={},j={};for(d=0;d<c.length;d++)if(f=c[d],g=f.getParams())for(e=0;e<g.length;e++)h=g[e],i[h.getPluginName()]=i[h.getPluginName()]||[],h.key in i[h.getPluginName()]||i[h.getPluginName()].push(h.getKey());for(var k in i)i.hasOwnProperty(k)&&(j[k]=this.request(k,i[k]));for(d=0;d<c.length;d++){f=c[d];var l={_behaviour:f,_eventData:a.data||{}};if(g=f.getParams()){for(e=0;e<g.length;e++)h=g[e],l[h.getParamName()]=j[h.getPluginName()]?j[h.getPluginName()][h.getKey()]:null;this.command(f.plugin.getName(),f.action,l)}}}this._dataChannel.trigger(a)},b.prototype.request=function(a,b){var c=this._plugins[a];return c&&b&&0!=b.length?c.resolveData(b):null},b.prototype.raise=function(a){this._errorInfo=a;var d=new c(b.ERROR,a);this._ctrlChannel.trigger(d)},b.prototype.getErrorInfo=function(){return this._errorInfo},b.prototype.destroy=function(){this._radio.shutdown();for(var a in this._plugins)this._plugins.hasOwnProperty(a)&&this._plugins[a].destroy()},b.prototype.comply=function(a,b,c){this._dataChannel.comply(a.getName()+e.SEPARATOR+b,c,a)},b.prototype.command=function(a,b,c){this._dataChannel.command(a+e.SEPARATOR+b,c)},b.prototype.registerBehaviour=function(a,b,c,d){var e=a.getName(),g=new f(a,b,c,d);this._behaviours[e]=this._behaviours[e]||[],this._behaviours[e].push(g)};var g="data_channel",h="ctrl_channel",i="plugin::PluginManager";a.plugin.PluginManager=b}(d),function(a,b){"use strict";function c(a){this._name=a,this._isInitialized=!1,this._isDestroyed=!1,this._isEnabled=!0,this._dataResolver={},this._logTag="plugin::"+this.getName(),this._logger=new d}var d=a.Logger,e=a.Trigger,f=a.Event,g=b.ErrorInfo;c.INITIALIZED="initialized",c.prototype.configure=function(a){},c.prototype.bootstrap=function(a){this._pluginManager=a,this._isDestroyed&&this._pluginManager.raise(new g("Invalid state.","Plugin already destroyed."))},c.prototype.setup=function(){this._trigger(c.INITIALIZED),this._isInitialized=!0},c.prototype.destroy=function(){this._isDestroyed||(this._isDestroyed=!0,this._teardown())},c.prototype.enable=function(){this._isEnabled=!0,this._enabled()},c.prototype.disable=function(){this._isEnabled=!1,this._disabled()},c.prototype.getName=function(){return this._name},c.prototype.getLogger=function(){return this._logger},c.prototype.isInitialized=function(){return this._isInitialized},c.prototype.resolveData=function(a){if(!this._isEnabled||!this._isInitialized)return this._logger.warn(this._logTag,"Unable to retrieve plugin data. Plugin: "+this._name+". Enabled: "+this._isEnabled+". Initialized: "+this._isInitialized+"."),null;if("function"==typeof this._dataResolver)return this._dataResolver.call(this,a);var b=null;if(a)for(var c=0;c<a.length;c++){var d=a[c];this._dataResolver.hasOwnProperty(d)&&(b=b||{},"function"==typeof this._dataResolver[d]?b[d]=this._dataResolver[d].call(this):b[d]=this._dataResolver[d])}return b},c.prototype.toString=function(){return"<plugin: "+this._name+">"},c.prototype._enabled=function(){},c.prototype._disabled=function(){},c.prototype._teardown=function(){},c.prototype._canProcess=function(){return this._isEnabled?!this._isDestroyed||(this._logger.error(this._logTag,"Plugin destroyed."),!1):(this._logger.error(this._logTag,"Plugin disabled."),!1)},c.prototype._trigger=function(a,b){var c=f.createFromTrigger(new e(this.getName(),a));c.data=b,this._pluginManager.trigger(c)},a.plugin.BasePlugin=c}(d,c),function(a){"use strict";function b(a,b,c){this.name=a,this.interval=b,this.isActive=!1,this.repeatCount=void 0!==c?c:e,this._nextTickTimestamp=0,this.reset()}function c(a,b){if(!a)throw new Error("Reference to the ClockService object cannot be NULL");if(this._service=a,!b)throw new Error("Reference to the logger object cannot be NULL");this._logger=b,this._isDestroyed=!1,this._timers={};var c=this;this._clock=window.setInterval(function(){c._onTick()},1e3*f)}b.prototype.reset=function(){this.tick=0,this._createdTimestamp=(new Date).getTime(),this._updateNextTickTimestamp()},b.prototype.shouldTick=function(){return(new Date).getTime()>this._nextTickTimestamp-g/2&&(this.tick++,this._updateNextTickTimestamp(),!0)},b.prototype._updateNextTickTimestamp=function(){var a=(new Date).getTime();this._nextTickTimestamp=a+1e3*this.interval-1},c.prototype.createTimer=function(a,c,d){this._timers[a]=new b(a,c,d)},c.prototype.destroyTimer=function(a){delete this._timers[a]},c.prototype.resumeTimer=function(a,b){b=void 0!==b&&b,this._logger.debug(d,"#resumeTimer(name="+a+", reset="+b+")");var c=this._timers[a];c&&(c.isActive=!0,b&&c.reset())},c.prototype.pauseTimer=function(a,b){b=void 0!==b&&b,this._logger.debug(d,"#pauseTimer(name="+a+", reset="+b+")");var c=this._timers[a];c&&(c.isActive=!1,b&&c.reset())},c.prototype.isTimerPaused=function(a){var b=this._timers[a];return!!b&&!b.isActive},c.prototype.destroy=function(){this._isDestroyed||(this._isDestroyed=!0,this._timers={},window.clearInterval(this._clock))},c.prototype._onTick=function(){for(var a in this._timers)if(this._timers.hasOwnProperty(a)){var b=this._timers[a];b.isActive&&b.shouldTick()&&(b.interval>1&&this._logger.debug(d,"#_onTick() > "+b.name+"("+b.tick+" | "+b.repeatCount+")"),0!=b.repeatCount?(this._service.onTick(b.name,b.interval,b.tick),b.repeatCount!=e&&b.repeatCount--):this.destroyTimer(b.name))}};var d="service.clock::TimerManager",e=-1,f=.25,g=1e3*f;a.clock.TimerDescriptor=b,a.clock.TimerManager=c}(e),function(a,b,c){"use strict";function d(a){if(d.__super__.constructor.call(this,h),!a)throw new Error("Reference to the logger object cannot be NULL");this._logger=a,this._timerManager=new e(this,this._logger),this._setupDataResolver()}var e=c.clock.TimerManager,f=b.StringUtils,g=a.plugin.BasePlugin;a.extend(d,g),d.prototype.bootstrap=function(a){d.__super__.bootstrap.call(this,a),this._pluginManager.comply(this,i,this._cmdCreate),this._pluginManager.comply(this,k,this._cmdResume),this._pluginManager.comply(this,j,this._cmdPause),this._pluginManager.comply(this,l,this._cmdDestroy)},d.prototype._teardown=function(){this._timerManager.destroy()},d.prototype._cmdCreate=function(a){var b=a[o]||s;this._timerManager.createTimer(a[m],a[n],b)},d.prototype._cmdPause=function(a){this._timerManager.pauseTimer(a[m],!!a[q])},d.prototype._cmdResume=function(a){this._timerManager.resumeTimer(a[m],!!a[q])},d.prototype._cmdDestroy=function(a){this._timerManager.destroyTimer(a[m])},d.prototype.onTick=function(a,b,c){a+=".tick";var d={};d[m]=a,d[n]=b,d[p]=c,this._trigger(a,d)},d.prototype._setupDataResolver=function(){var a={},b=this._timerManager;a[r]=function(a){return b.isTimerPaused(a)},this._dataResolver=function(b){if(!b||0==b.length)return null;for(var c=null,d=0;d<b.length;d++){var e=b[d];if(c=c||{},f.startsWith(e,r)){var g=e.split(r+".");g.length>0&&(c[e]=a[r].call(this,g[1]))}}return c}};var h="service.clock",i="create",j="pause",k="resume",l="destroy",m="name",n="interval",o="repeat_count",p="tick",q="reset",r="is_paused",s=-1;c.clock.ClockService=d}(d,b,e),function(a,b,c){"use strict";function d(a,b){if(this._logger=new e,this._pluginManager=new f(this._logger),this._pluginManager.addPlugin(new g(this._logger)),b)for(var c=0;c<b.length;c++)this._pluginManager.addPlugin(b[c]);this._pluginManager.setupPlugins(),this._isDestroyed=!1}var e=a.Logger,f=a.plugin.PluginManager,g=b.clock.ClockService;d.prototype.configure=function(a){if(!a)throw new Error("Configuration object cannot be NULL.");a.debugLogging?this._logger.enable():this._logger.disable(),this._isDestroyed&&this._logger.error(h,"Instance is destroyed.")},d.prototype.destroy=function(){this._isDestroyed||(this._pluginManager.destroy(),this._isDestroyed=!0)};var h="Heartbeat";c.Heartbeat=d}(d,e,c),a.ADB||(a.ADB={}),a.ADB.core||(a.ADB.core=d),a.ADB.va||(a.ADB.va=c),a.ADB.va.utils||(a.ADB.va.utils=b),a.ADB.va.plugins||(a.ADB.va.plugins={})}(this);

// VideoPlayerPlugin
!function(a){if(void 0===b)var b={};!function(a){"use strict";var b={};b.ASSET_TYPE_VOD="vod",b.ASSET_TYPE_LIVE="live",b.ASSET_TYPE_LINEAR="linear",a.AssetType=b}(b),function(a){"use strict";function b(){this.playerName=null,this.name=null,this.position=null,this.startTime=null}b.prototype.toString=function(){return"playerName="+this.playerName+", name="+this.name+", position="+this.position+", startTime="+this.startTime},a.AdBreakInfo=b}(b),function(a){"use strict";function b(){this.id=null,this.name=null,this.length=null,this.position=null,this.granularTracking=!0}b.prototype.toString=function(){return"id="+this.id+", name="+this.name+", length="+this.length+", position="+this.position+", granularTracking="+this.granularTracking},a.AdInfo=b}(b),function(a){"use strict";function b(){this.name=null,this.length=null,this.position=null,this.startTime=null}b.prototype.toString=function(){return"name="+this.name+", length="+this.length+", position="+this.position+", startTime="+this.startTime},a.ChapterInfo=b}(b),function(a){"use strict";function b(){this.bitrate=null,this.fps=null,this.droppedFrames=null,this.startupTime=null}b.prototype.toString=function(){return"bitrate="+this.bitrate+", fps="+this.fps+", droppedFrames="+this.droppedFrames+", startupTime="+this.startupTime},a.QoSInfo=b}(b),function(a){"use strict";function b(){this.playerName=null,this.id=null,this.name=null,this.length=null,this.playhead=null,this.mediaType=null,this.streamType=null,this.resumed=!1}b.prototype.toString=function(){return"playerName="+this.playerName+", id="+this.id+", name="+this.name+", length="+this.length+", playhead="+this.playhead+", mediaType="+this.mediaType+", streamType="+this.streamType+", resumed="+this.resumed},a.VideoInfo=b}(b),function(a){"use strict";function b(){this.debugLogging=!1}a.VideoPlayerPluginConfig=b}(b),function(a){"use strict";function b(){}b.prototype.getVideoInfo=function(){throw new Error("Implementation error: Method must be overridden.")},b.prototype.getAdBreakInfo=function(){return null},b.prototype.getAdInfo=function(){return null},b.prototype.getChapterInfo=function(){return null},b.prototype.getQoSInfo=function(){return null},a.VideoPlayerPluginDelegate=b}(b),function(a,b){"use strict";function c(a){if(c.__super__.constructor.call(this,h),!a)throw new Error("PlayerPlugin delegate cannot be NULL.");this._delegate=a,this._isTrackingSessionActive=!1,this._isTrackingSessionStarted=!1,this._setupDataResolver()}var d=a.plugin.ParamMapping,e=a.Trigger,f=a.plugin.BasePlugin,g=b.VideoPlayerPluginConfig;a.extend(c,f),c.prototype.configure=function(a){if(!a)throw new Error("Reference to the configuration data cannot be NULL.");if(!(a instanceof g))throw new Error("Expected config data to be instance of VideoPlayerPluginConfig.");a.debugLogging?this._logger.enable():this._logger.disable(),this._logger.debug(this._logTag,"#configure(debugLogging="+a.debugLogging+")")},c.prototype.bootstrap=function(a){c.__super__.bootstrap.call(this,a),this._registerCommands(),this._registerBehaviours()},c.prototype._cmdVideoIdleStart=function(a){this._logger.info(this._logTag,"#_cmdVideoIdleStart()"),this._videoIdle=!0},c.prototype._cmdVideoIdleResume=function(a){this._logger.info(this._logTag,"#_cmdVideoIdleResume()"),this._videoIdle&&(this._trigger(p),this._trigger(q),a.isInAd&&(this._trigger(x),this._isTrackingAdBreak=!0),a.isInAd&&(this._trigger(z),this._isTrackingAd=!0),a.isInChapter&&this._trigger(G),this._trigger(u)),this._videoIdle=!1},c.prototype.trackSessionStart=function(){if(this._logger.info(this._logTag,"#trackSessionStart()"),this._canProcess()){if(!this._isTrackingSessionActive)return void this._logger.warn(this._logTag,"#trackSessionStart() > No active tracking session.");if(this._isTrackingSessionStarted)return void this._logger.info(this._logTag,"#trackSessionStart() > Tracking session already started.");this._trigger(p),this._isTrackingSessionStarted=!0;var a=this._dataResolver(["video.resumed"]);a.hasOwnProperty("video.resumed")&&a["video.resumed"]&&this._trigger(q)}},c.prototype.trackVideoLoad=function(){this._logger.info(this._logTag,"#trackVideoLoad()"),this._canProcess()&&(this._isTrackingAdBreak=!1,this._isTrackingAd=!1,this._contentStarted=!1,this._isPaused=!0,this._isBuffering=!1,this._isSeeking=!1,this._playheadTimer=null,this._previousPlayhead=-1,this._stalledPlayheadCount=0,this._playheadStalled=!1,this._videoIdle=!1,this._trigger(m),this._isTrackingSessionActive=!0,this._isTrackingSessionStarted=!1)},c.prototype.trackVideoUnload=function(){if(this._logger.info(this._logTag,"#trackVideoUnload()"),this._canProcess()){if(!this._isTrackingSessionActive)return void this._logger.warn(this._logTag,"#trackVideoUnload() > No active tracking session.");this._stopPlayheadTimer(),this._trigger(n),this._isTrackingSessionActive=!1,this._isTrackingSessionStarted=!1,this._contentStarted=!1}},c.prototype.beginReporting=function(){this._logger.info(this._logTag,"#beginReporting()"),this._canProcess()&&this._startSessionIfNeeded("beginReporting")&&this._trigger(N)},c.prototype.trackPlay=function(){this._logger.info(this._logTag,"#trackPlay()"),this._canProcess()&&this._startSessionIfNeeded("trackPlay")&&this._allowPlayerStateChange()&&(this._isPaused=!1,this._trigger(u),this._startPlayheadTimer())},c.prototype.trackPause=function(){if(this._logger.info(this._logTag,"#trackPause()"),this._canProcess()&&this._startSessionIfNeeded("trackPause")&&this._allowPlayerStateChange()){this._stopPlayheadTimer();var a={};a[P]=!1,this._isPaused=!0,this._trigger(v,a)}},c.prototype.trackBufferStart=function(){this._logger.info(this._logTag,"#trackBufferStart()"),this._canProcess()&&this._startSessionIfNeeded("trackBufferStart")&&this._allowPlayerStateChange()&&(this._stopPlayheadTimer(),this._isBuffering=!0,this._trigger(C))},c.prototype.trackBufferComplete=function(){this._logger.info(this._logTag,"#trackBufferComplete()"),this._canProcess()&&this._startSessionIfNeeded("trackBufferComplete")&&this._allowPlayerStateChange()&&(this._isBuffering=!1,this._trigger(D),this._startPlayheadTimer())},c.prototype.trackSeekStart=function(){this._logger.info(this._logTag,"#trackSeekStart()"),this._canProcess()&&this._startSessionIfNeeded("trackSeekStart")&&this._allowPlayerStateChange()&&(this._stopPlayheadTimer(),this._isSeeking=!0,this._trigger(E))},c.prototype.trackSeekComplete=function(){this._logger.info(this._logTag,"#trackSeekComplete()"),this._canProcess()&&this._startSessionIfNeeded("trackSeekComplete")&&this._allowPlayerStateChange()&&(this._isSeeking=!1,this._trigger(F),this._startPlayheadTimer())},c.prototype.trackComplete=function(a,b){if(this._logger.info(this._logTag,"#trackComplete()"),this._canProcess()&&this._startSessionIfNeeded("trackComplete")){if(this._stopPlayheadTimer(),this._videoIdle)return this._logger.info(this._logTag,"#trackComplete() > Video session is already in Idle State."),void(a&&a());var c={};c[O]=a,b=void 0===b||!!b,b?this._trigger(r,c):(this._trigger(s),this._trigger(o,c))}},c.prototype.trackTimedMetadata=function(a){this._logger.info(this._logTag,"#trackComplete()"),this._canProcess()&&this._startSessionIfNeeded("trackTimedMetadata")&&this._trigger(t,a)},c.prototype.trackChapterStart=function(){this._logger.info(this._logTag,"#trackChapterStart()"),this._canProcess()&&this._startSessionIfNeeded("#trackChapterStart")&&this._trigger(G)},c.prototype.trackChapterComplete=function(){this._logger.info(this._logTag,"#trackChapterComplete()"),this._canProcess()&&this._startSessionIfNeeded("trackChapterComplete")&&this._trigger(H)},c.prototype.trackChapterSkip=function(){this._logger.info(this._logTag,"#trackChapterSkip()"),this._canProcess()&&this._startSessionIfNeeded("trackChapterSkip")&&this._trigger(I)},c.prototype.trackAdBreakStart=function(){this._logger.info(this._logTag,"#trackAdBreakStart()"),this._canProcess()&&this._startSessionIfNeeded("trackAdBreakStart")&&(this._trigger(x),this._isTrackingAdBreak=!0)},c.prototype.trackAdBreakComplete=function(){this._logger.info(this._logTag,"#trackAdBreakComplete()"),this._canProcess()&&this._startSessionIfNeeded("trackAdBreakComplete")&&(this._trigger(y),this._isTrackingAdBreak=!1)},c.prototype.trackAdStart=function(){this._logger.info(this._logTag,"#trackAdStart()"),this._canProcess()&&this._startSessionIfNeeded("trackAdStart")&&(this._trigger(z),this._isTrackingAd=!0)},c.prototype.trackAdComplete=function(){this._logger.info(this._logTag,"#trackAdComplete()"),this._canProcess()&&this._startSessionIfNeeded("trackAdComplete")&&(this._trigger(A),this._isTrackingAd=!1)},c.prototype.trackAdSkip=function(){this._logger.info(this._logTag,"#trackAdSkip()"),this._canProcess()&&this._startSessionIfNeeded("trackAdSkip")&&(this._trigger(B),this._isTrackingAd=!1)},c.prototype.trackBitrateChange=function(){this._logger.info(this._logTag,"#trackBitrateChange()"),this._canProcess()&&this._startSessionIfNeeded("trackBitrateChange")&&this._trigger(J)},c.prototype.trackVideoPlayerError=function(a){if(this._logger.info(this._logTag,"#trackVideoPlayerError(errorId="+a+")"),this._startSessionIfNeeded("trackVideoPlayerError")){var b={};b[Q]=l,b[R]=a,this._trigger(K,b)}},c.prototype.trackApplicationError=function(a){if(this._logger.info(this._logTag,"#trackApplicationError(errorId="+a+")"),this._startSessionIfNeeded("trackApplicationError")){var b={};b[Q]=k,b[R]=a,this._trigger(K,b)}},c.prototype._registerCommands=function(){this._pluginManager.comply(this,"handleVideoIdleStart",this._cmdVideoIdleStart),this._pluginManager.comply(this,"handleVideoIdleResume",this._cmdVideoIdleResume)},c.prototype._registerBehaviours=function(){this._pluginManager.registerBehaviour(new e(j,L),this,"handleVideoIdleStart"),this._pluginManager.registerBehaviour(new e(j,M),this,"handleVideoIdleResume",[new d(i,"ad.isInAdBreak","isInAdBreak"),new d(i,"ad.isInAd","isInAd"),new d(i,"chapter.isInChapter","isInChapter")])},c.prototype._setupDataResolver=function(){function a(){return g.video?g.video:(g.video=h._delegate.getVideoInfo(),h._logger.info(h._logTag,"Data from delegate > VideoInfo: "+g.video),g.video)}function b(){return g.ad?g.ad:(g.ad=h._delegate.getAdInfo(),h._logger.info(h._logTag,"Data from delegate > AdInfo: "+g.ad),g.ad)}function c(){return g.pod?g.pod:(g.pod=h._delegate.getAdBreakInfo(),h._logger.info(h._logTag,"Data from delegate > AdBreakInfo: "+g.pod),g.pod)}function d(){return g.chapter?g.chapter:(g.chapter=h._delegate.getChapterInfo(),h._logger.info(h._logTag,"Data from delegate > ChapterInfo: "+g.chapter),g.chapter)}function e(){return g.qos?g.qos:(g.qos=h._delegate.getQoSInfo(),h._logger.info(h._logTag,"Data from delegate > QoSInfo: "+g.qos),g.qos)}var f={},g={},h=this;f["video.id"]=function(){var b=a(),c=b?b.id:null;return h._logger.debug(h._logTag,"Resolving video.id: "+c),c},f["video.name"]=function(){var b=a(),c=b?b.name:null;return h._logger.debug(h._logTag,"Resolving video.name: "+c),c},f["video.length"]=function(){var b=a(),c=b?b.length:NaN;return h._logger.debug(h._logTag,"Resolving video.length: "+c),c},f["video.playerName"]=function(){var b=a(),c=b?b.playerName:null;return h._logger.debug(h._logTag,"Resolving video.playerName: "+c),c},f["video.mediaType"]=function(){var b=a(),c=b?b.mediaType:null;return h._logger.debug(h._logTag,"Resolving video.mediaType: "+c),c},f["video.streamType"]=function(){var b=a(),c=b?b.streamType:null;return h._logger.debug(h._logTag,"Resolving video.streamType: "+c),c},f["video.playhead"]=function(){var b=a(),c=b?b.playhead:NaN;return h._logger.debug(h._logTag,"Resolving video.playhead: "+c),c},f["video.resumed"]=function(){var b=a(),c=!!b&&b.resumed;return h._logger.debug(h._logTag,"Resolving video.resumed: "+c),c},f["video.playheadStalled"]=function(){return this._playheadStalled},f["pod.name"]=function(){var a=c(),b=a?a.name:null;return h._logger.debug(h._logTag,"Resolving pod.name: "+b),b},f["pod.playerName"]=function(){var a=c(),b=a?a.playerName:null;return h._logger.debug(h._logTag,"Resolving pod.playerName: "+b),b},f["pod.position"]=function(){var a=c(),b=a?a.position:NaN;return h._logger.debug(h._logTag,"Resolving pod.position: "+b),b},f["pod.startTime"]=function(){var a=c(),b=a?a.startTime:NaN;return h._logger.debug(h._logTag,"Resolving pod.startTime: "+b),b},f["ad.isInAd"]=function(){var a=b(),c=null!=a;return h._logger.debug(h._logTag,"Resolving ad.isInAd: "+c),c},f["ad.isInAdBreak"]=function(){var a=c(),b=null!=a;return h._logger.debug(h._logTag,"Resolving ad.isInAdBreak: "+b),b},f["ad.id"]=function(){var a=b(),c=a?a.id:null;return h._logger.debug(h._logTag,"Resolving ad.id: "+c),c},f["ad.name"]=function(){var a=b(),c=a?a.name:null;return h._logger.debug(h._logTag,"Resolving ad.name: "+c),c},f["ad.length"]=function(){var a=b(),c=a?a.length:NaN;return h._logger.debug(h._logTag,"Resolving ad.length: "+c),c},f["ad.position"]=function(){var a=b(),c=a?a.position:NaN;return h._logger.debug(h._logTag,"Resolving ad.position: "+c),c},f["ad.granularTracking"]=function(){var a=b(),c=!!a&&a.granularTracking;return h._logger.debug(h._logTag,"Resolving ad.granularTracking: "+c),c},f["ad.trackingInterval"]=function(){var a=T;return h._logger.debug(h._logTag,"Resolving ad.trackingInterval: "+a),a},f["chapter.isInChapter"]=function(){var a=d(),b=null!=a;return h._logger.debug(h._logTag,"Resolving chapter.isInChapter: "+b),b},f["chapter.name"]=function(){var a=d(),b=a?a.name:null;return h._logger.debug(h._logTag,"Resolving chapter.name: "+b),b},f["chapter.length"]=function(){var a=d(),b=a?a.length:NaN;return h._logger.debug(h._logTag,"Resolving chapter.length: "+b),b},f["chapter.position"]=function(){var a=d(),b=a?a.position:NaN;return h._logger.debug(h._logTag,"Resolving chapter.position: "+b),b},f["chapter.startTime"]=function(){var a=d(),b=a?a.startTime:NaN;return h._logger.debug(h._logTag,"Resolving chapter.startTime: "+b),b},f["qos.bitrate"]=function(){var a=e(),b=a?a.bitrate:NaN;return h._logger.debug(h._logTag,"Resolving qos.bitrate: "+b),b},f["qos.fps"]=function(){var a=e(),b=a?a.fps:NaN;return h._logger.debug(h._logTag,"Resolving qos.fps: "+b),b},f["qos.droppedFrames"]=function(){var a=e(),b=a?a.droppedFrames:NaN;return h._logger.debug(h._logTag,"Resolving qos.droppedFrames: "+b),b},f["qos.startupTime"]=function(){var a=e(),b=a?1e3*a.startupTime:NaN;return h._logger.debug(h._logTag,"Resolving qos.startupTime: "+b),b},this._dataResolver=function(a){if(!a||0==a.length)return null;g={};for(var b=null,c=0;c<a.length;c++){var d=a[c];b=b||{},b[d]=f.hasOwnProperty(d)?f[d].call(this):null}return b}},c.prototype._trackPlayheadStall=function(){this._canProcess()&&(this._playheadStalled||(this._logger.info(this._logTag,"#_trackPlayheadStall()"),this._stalledPlayheadCount=0,this._playheadStalled=!0,this._trigger(v)))},c.prototype._trackExitStall=function(){this._canProcess()&&(this._stalledPlayheadCount=0,!this._playheadStalled||this._isPaused||this._isSeeking||this._isBuffering||(this._logger.info(this._logTag,"#_trackExitStall()"),this._playheadStalled=!1,this._trigger(u)))},c.prototype._startPlayheadTimer=function(){var a=this;this._playheadTimer||this._isPaused||this._isSeeking||this._isBuffering||(this._playheadTimer=setInterval(function(){if(a._canProcess()){var b=a._dataResolver(["ad.isInAd","video.playhead"]);if(a._isTrackingAdBreak)a._playheadStalled&&a._trackExitStall();else{var c=b["video.playhead"];c!=a._previousPlayhead?a._trackExitStall():a._previousPlayhead>=0&&c==a._previousPlayhead&&++a._stalledPlayheadCount==U&&a._trackPlayheadStall(),c!=a._previousPlayhead&&c>0&&!a._contentStarted&&(a._isPaused||a._isBuffering||a._isSeeking||(a._logger.info(a._logTag,"#_playheadTimer playhead progress to: "+c),a._trigger(w),a._contentStarted=!0)),a._previousPlayhead=c}}},S))},c.prototype._stopPlayheadTimer=function(){this._playheadTimer&&(clearInterval(this._playheadTimer),this._playheadTimer=null),this._trackExitStall()},c.prototype._startSessionIfNeeded=function(a){return this._isTrackingSessionActive?(this._isTrackingSessionStarted||(this._logger.info(this._logTag,"#"+a+"() > Tracking session auto-start."),this.trackSessionStart()),!0):(this._logger.warn(this._logTag,"#"+a+"() > No active tracking session."),!1)},c.prototype._allowPlayerStateChange=function(){return!(this._isTrackingAdBreak&&!this._isTrackingAd)||(this._logger.info(this._logTag,"_allowPlayerStateChange Player plugin does not allow player state changes when in Adbreak and not in Ad."),!1)};var h="player",i=h,j="adobe-heartbeat",k="sourceErrorExternal",l="sourceErrorSDK",m="video_load",n="video_unload",o="video_session_end",p="video_start",q="video_resume",r="video_complete",s="video_skip",t="timed_metadata",u="play",v="pause",w="content_start",x="adbreak_start",y="adbreak_complete",z="ad_start",A="ad_complete",B="ad_skip",C="buffer_start",D="buffer_complete",E="seek_start",F="seek_complete",G="chapter_start",H="chapter_complete",I="chapter_skip",J="bitrate_change",K="track_error",L="video_idle_start",M="video_idle_resume",N="video_begin_reporting",O="callback",P="filter_report",Q="source",R="error_id",S=1001,T=1,U=2;b.VideoPlayerPlugin=c}(a.ADB.core,b),a.ADB.va.plugins.videoplayer||(a.ADB.va.plugins.videoplayer=b)}(this);

// AdobeHeartbeatPlugin
!function(a){if(void 0===b)var b={};b.clock||(b.clock={}),b.context||(b.context={}),b.filter||(b.filter={}),b.model||(b.model={}),b.network||(b.network={}),function(a,b){"use strict";function c(a,b,c,d,e){if(!b)throw new Error("Reference to the channel object cannot be NULL");if(this._channel=b,!a)throw new Error("Reference to the pluginManager object cannot be NULL");if(this._pluginManager=a,!e)throw new Error("Reference to the logger object cannot be NULL");this._logTag="ah::Timer."+c,this._logger=e,this._isDestroyed=!1,this._createTimer(c,d),this._installHandlers()}var d=a.Event;c.KEY_NAME="name",c.KEY_INTERVAL="interval",c.KEY_RESET="reset",c.prototype.resume=function(a){this._logger.debug(this._logTag,"Starting timer: "+this._name);var b={};b[c.KEY_NAME]=e+"."+this._name,b[c.KEY_RESET]=a,this._pluginManager.command(f,i,b)},c.prototype.pause=function(a){this._logger.debug(this._logTag,"Stopping timer: "+this._name);var b={};b[c.KEY_NAME]=e+"."+this._name,b[c.KEY_RESET]=a,this._pluginManager.command(f,h,b)},c.prototype.destroy=function(){if(!this._isDestroyed){this._isDestroyed=!0,this._uninstallHandlers();var a={};a[c.KEY_NAME]=e+"."+this._name,this._pluginManager.command(f,j,a)}},c.prototype.setInterval=function(a){var b=k+"."+e+"."+this._name,c=this._pluginManager.request(f,[b])[b];this.pause(!0),this._createTimer(this._name,a),c||this.resume(!0)},c.prototype._cmdResume=function(a){var b=!1;null!=a&&a.hasOwnProperty(c.KEY_RESET)&&(b=a[c.KEY_RESET]),this.resume(b)},c.prototype._cmdPause=function(a){var b=!1;null!=a&&a.hasOwnProperty(c.KEY_RESET)&&(b=a[c.KEY_RESET]),this.pause(b)},c.prototype._onTick=function(a,b){this._channel.trigger(new d("clock:"+this._name+".tick",b))},c.prototype._installHandlers=function(){this._channel.comply("clock:"+this._name+".resume",this._cmdResume,this),this._channel.comply("clock:"+this._name+".pause",this._cmdPause,this),this._pluginManager.on(f,e+"."+this._name+".tick",this._onTick,this)},c.prototype._uninstallHandlers=function(){this._channel.off(null,null,this),this._pluginManager.off(null,null,null,this)},c.prototype._createTimer=function(a,b){this._name=a,this._interval=b;var d={};d[c.KEY_NAME]=e+"."+this._name,d[c.KEY_INTERVAL]=this._interval,this._pluginManager.command(f,g,d)};var e="heartbeat",f="service.clock",g="create",h="pause",i="resume",j="destroy",k="is_paused";b.clock.Timer=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b,d){c.__super__.constructor.call(this,a,b,f,h,d)}var d=a.Event,e=b.clock.Timer;a.extend(c,e),c.prototype._onCheckStatusComplete=function(a){var b=a.data[l];if(this._logger.debug(this._logTag,"#_onCheckStatusComplete(interval="+b+")"),b){if(b==this._interval)return void this._logger.debug(this._logTag,"#_onCheckStatusComplete() > Interval value not changed.");b>g?(this._logger.warn(this._logTag,"#_onCheckStatusComplete() > Interval value too large: "+b),this.setInterval(g)):(this._logger.debug(this._logTag,"#_onCheckStatusComplete() > Interval changed to: "+b),this.setInterval(b))}else this._logger.warn(this._logTag,"#_onCheckStatusComplete() > Invalid interval value."),this.setInterval(h)},c.prototype._getSettings=function(a){this._logger.debug(this._logTag,"#_getSettings()"),this._channel.trigger(new d(i))},c.prototype._installHandlers=function(){c.__super__._installHandlers.call(this),this._channel.on(j,this._getSettings,this),this._channel.on(k,this._onCheckStatusComplete,this),this._channel.reply(l,function(){return this._interval},this)};var f="check_status",g=600,h=180,i="clock:check_status.tick",j="clock:check_status.get_settings",k="net:check_status_complete",l="check_status_interval";b.clock.CheckStatusTimer=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b,d){c.__super__.constructor.call(this,a,b,e,f,d),this._doNotOverrideInterval=!1}var d=b.clock.Timer;a.extend(c,d),c.prototype._onCheckStatusComplete=function(a){var b=a.data[g];if(this._logger.debug(this._logTag,"#_onCheckStatusComplete(interval="+b+")"),this._doNotOverrideInterval)this._logger.debug(this._logTag,"#_onCheckStatusComplete() > Interval value not changed. (doNotOverrideInterval = true)");else if(b){if(b==this._interval)return void this._logger.debug(this._logTag,"#_onCheckStatusComplete() > Interval value not changed.");this._logger.debug(this._logTag,"#_onCheckStatusComplete() > Interval changed to: "+b),this.setInterval(b)}else this._logger.warn(this._logTag,"#_onCheckStatusComplete() > Invalid interval value."),this.setInterval(f)},c.prototype._onUpdateReportingInterval=function(a){var b=a.data[g];if(this._doNotOverrideInterval=!!a.data[h],this._logger.debug(this._logTag,"#_onUpdateReportingInterval(interval="+b+", doNotOverrideInterval="+this._doNotOverrideInterval+")"),b){if(b==this._interval)return void this._logger.debug(this._logTag,"#_onUpdateReportingInterval() > Interval value not changed.");this._logger.debug(this._logTag,"#_onUpdateReportingInterval() > Interval changed to: "+b),this.setInterval(b)}else this._logger.warn(this._logTag,"#_onUpdateReportingInterval() > Invalid interval value."),this.setInterval(f)},c.prototype._installHandlers=function(){c.__super__._installHandlers.call(this),this._channel.on(j,this._onCheckStatusComplete,this),this._channel.on(i,this._onUpdateReportingInterval,this),this._channel.reply(g,function(){return this._interval},this)};var e="reporting",f=10,g="reporting_interval",h="do_not_override_interval",i="reporting:update_interval",j="net:check_status_complete";b.clock.ReportingTimer=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b,d){c.__super__.constructor.call(this,a,b,e,f,d)}var d=b.clock.Timer;a.extend(c,d);var e="idle",f=1800;b.clock.IdleTimer=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b,d){c.__super__.constructor.call(this,a,b,e,f,d)}var d=b.clock.Timer;a.extend(c,d);var e="flush_filter",f=.25;b.clock.FlushFilterTimer=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b,c){if(!a)throw new Error("Reference to the pluginManager object cannot be NULL");if(!b)throw new Error("Reference to the channel object cannot be NULL");if(!c)throw new Error("Reference to the logger object cannot be NULL");this._isDestroyed=!1,this._reportingTimer=new f(a,b,c),this._checkStatusTimer=new d(a,b,c),this._flushFilterTimer=new e(a,b,c),this._idleTimer=new g(a,b,c)}var d=b.clock.CheckStatusTimer,e=b.clock.FlushFilterTimer,f=b.clock.ReportingTimer,g=b.clock.IdleTimer;c.prototype.destroy=function(){this._isDestroyed||(this._isDestroyed=!0,this._reportingTimer.destroy(),this._checkStatusTimer.destroy(),this._flushFilterTimer.destroy(),this._idleTimer.destroy())},b.clock.Clock=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b){this.value=a,this.hint=b}function d(a){this.realm=a,this.data={}}c.HINT_SHORT="short",d.prototype.setField=function(a,b,d){this.data[a]=new c(b,d)},d.prototype._createAccessor=function(a,b,c){var d=this;return function(){return arguments.length&&(d[a]=arguments[0],d.setField(b,arguments[0],c)),d[a]}},b.model.Dao=d,b.model.DaoField=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"asset"),this.adId=this._createAccessor("_adId","ad_id",null),this.sid=this._createAccessor("_sid","ad_sid",null),this.resolver=this._createAccessor("_resolver","resolver",null),this.podId=this._createAccessor("_podId","pod_id",null),this.podPosition=this._createAccessor("_podPosition","pod_position",null),this.podOffset=this._createAccessor("_podOffset","pod_offset",null),this.podName=this._createAccessor("_podName","pod_name",null),this.adLength=this._createAccessor("_adLength","ad_length",null),this.adName=this._createAccessor("_adName","ad_name",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.adId(a.adId()),this.sid(a.sid()),this.resolver(a.resolver()),this.podId(a.podId()),this.podPosition(a.podPosition()),this.podOffset(a.podOffset()),this.podName(a.podName()),this.adLength(a.adLength()),this.adName(a.adName())}else this.adId(""),this.sid(""),this.resolver(""),this.podId(""),this.podPosition(""),this.podOffset(0),this.podName(""),this.adLength(0),this.adName("")}var d=b.model.Dao;a.extend(c,d),b.model.AdDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"sc"),this.reportSuiteId=this._createAccessor("_reportSuiteId","rsid",null),this.trackingServer=this._createAccessor("_trackingServer","tracking_server",null),this.ssl=this._createAccessor("_ssl","ssl",e.HINT_SHORT),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.reportSuiteId(a.reportSuiteId()),this.trackingServer(a.trackingServer()),this.ssl(a.ssl())}else this.reportSuiteId(""),this.trackingServer(""),this.ssl(0)}var d=b.model.Dao,e=b.model.DaoField;a.extend(c,d),b.model.AdobeAnalyticsDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"stream"),this.id=this._createAccessor("_id","chapter_id",null),this.sid=this._createAccessor("_sid","chapter_sid",null),this.name=this._createAccessor("_name","chapter_name",null),this.position=this._createAccessor("_position","chapter_pos",null),this.length=this._createAccessor("_length","chapter_length",null),this.offset=this._createAccessor("_offset","chapter_offset",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.id(a.id()),this.sid(a.sid()),this.name(a.name()),this.position(a.position()),this.length(a.length()),this.offset(a.offset())}else this.id(""),this.sid(""),this.name(""),this.position(0),this.length(0),this.offset(0)}var d=b.model.Dao;a.extend(c,d),b.model.ChapterDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"asset"),this.type=this._createAccessor("_type","type",null),this.videoId=this._createAccessor("_videoId","video_id",null),this.publisher=this._createAccessor("_publisher","publisher",null),this.adData=this._createAccessor("_adData","ad_data",null),this.chapterData=this._createAccessor("_chapterData","chapter_data",null),this.length=this._createAccessor("_length","length",null),this.name=this._createAccessor("_name","name",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.type(a.type()),this.name(a.name()),this.videoId(a.videoId()),this.publisher(a.publisher()),this.length(a.length());var b=a.adData()?new e(a.adData()):null;this.adData(b);var d=a.chapterData()?new f(a.chapterData()):null;this.chapterData(d)}else this.type(""),this.name(""),this.videoId(""),this.publisher(""),this.length(0),this.adData(null),this.chapterData(null)}var d=b.model.Dao,e=b.model.AdDao,f=b.model.ChapterDao;a.extend(c,d),c.TYPE_AD="ad",c.TYPE_MAIN_CONTENT="main",b.model.AssetDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"event"),this.type=this._createAccessor("_type","type",null),this.duration=this._createAccessor("_duration","duration",null),this.playhead=this._createAccessor("_playhead","playhead",null),this.id=this._createAccessor("_id","id",null),this.source=this._createAccessor("_source","source",null),this.ts=this._createAccessor("_ts","ts",null),this.prevTs=this._createAccessor("_prevTs","prev_ts",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.type(a.type()),this.duration(a.duration()),this.playhead(a.playhead()),this.id(a.id()),this.source(a.source()),this.ts(a.ts()),this.prevTs(a.prevTs())}else this.type(""),this.duration(0),this.playhead(0),this.id(""),this.source(""),this.ts(0),this.prevTs(-1)}var d=b.model.Dao;a.extend(c,d),c.EVENT_TYPE_AA_START="aa_start",c.EVENT_TYPE_AA_AD_START="aa_ad_start",c.EVENT_TYPE_START="start",c.EVENT_TYPE_RESUME="resume",c.EVENT_TYPE_CHAPTER_START="chapter_start",c.EVENT_TYPE_CHAPTER_COMPLETE="chapter_complete",c.EVENT_TYPE_CHAPTER_SKIP="chapter_skip",c.EVENT_TYPE_PLAY="play",c.EVENT_TYPE_PAUSE="pause",c.EVENT_TYPE_STALL="stall",c.EVENT_TYPE_BUFFER="buffer",c.EVENT_TYPE_BITRATE_CHANGE="bitrate_change",c.EVENT_TYPE_ERROR="error",c.EVENT_TYPE_COMPLETE="complete",c.EVENT_TYPE_SKIP="skip",c.EVENT_TYPE_END="end",b.model.EventDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"stream"),this.bitrate=this._createAccessor("_bitrate","bitrate",null),this.fps=this._createAccessor("_fps","fps",null),this.droppedFrames=this._createAccessor("_droppedFrames","dropped_frames",null),this.startupTime=this._createAccessor("_startup_time","startup_time",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.bitrate(a.bitrate()),this.fps(a.fps()),this.droppedFrames(a.droppedFrames()),this.startupTime(a.startupTime()),this.isStartupTimeOverridden=a.isStartupTimeOverridden}else this.bitrate(0),this.fps(0),this.droppedFrames(0),this.startupTime(0),this.isStartupTimeOverridden=!1}var d=b.model.Dao;a.extend(c,d),b.model.QoSDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"sp"),this.ovp=this._createAccessor("_ovp","ovp",null),this.sdk=this._createAccessor("_sdk","sdk",null),this.channel=this._createAccessor("_channel","channel",null),this.playerName=this._createAccessor("_playerName","player_name",null),this.libVersion=this._createAccessor("_libVersion","hb_version",null),this.apiLevel=this._createAccessor("_apiLevel","hb_api_lvl",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.ovp(a.ovp()),this.sdk(a.sdk()),this.channel(a.channel()),this.playerName(a.playerName()),this.libVersion(a.libVersion()),this.apiLevel(a.apiLevel())}else this.ovp(e),this.sdk(e),this.channel(e),this.playerName(""),this.libVersion(""),this.apiLevel(0)}var d=b.model.Dao;a.extend(c,d);var e="unknown";b.model.ServiceProviderDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"event"),this.sessionId=this._createAccessor("_sessionId","sid",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.sessionId(a.sessionId())}else this.sessionId(null)}var d=b.model.Dao;a.extend(c,d),b.model.SessionDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"stream"),this.type=this._createAccessor("_type","type",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.type(a.type())}else this.type(null)}var d=b.model.Dao;a.extend(c,d),b.model.StreamDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"user"),this.analyticsVisitorId=this._createAccessor("_analyticsVisitorId","aid",null),this.marketingCloudVisitorId=this._createAccessor("_marketingCloudVisitorId","mid",null),this.visitorId=this._createAccessor("_visitorId","id",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.analyticsVisitorId(a.analyticsVisitorId()),this.marketingCloudVisitorId(a.marketingCloudVisitorId()),this.visitorId(a.visitorId())}else this.analyticsVisitorId(null),this.marketingCloudVisitorId(null),this.visitorId(null)}var d=b.model.Dao;a.extend(c,d),b.model.UserDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(){if(c.__super__.constructor.call(this,"aam"),this.audienceManagerBlob=this._createAccessor("_audienceManagerBlob","blob",null),this.audienceManagerLocationHint=this._createAccessor("_audienceManagerLocationHint","loc_hint",null),arguments.length&&arguments[0]instanceof c){var a=arguments[0];this.audienceManagerBlob(a.audienceManagerBlob()),this.audienceManagerLocationHint(a.audienceManagerLocationHint())}else this.audienceManagerBlob(null),this.audienceManagerLocationHint(null)}var d=b.model.Dao;a.extend(c,d),b.model.AudienceManagerDao=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b,c,i,j){this.eventData=new e,this.eventData.type(b),this.eventData.duration(0),this.eventData.ts((new Date).getTime()),this.eventData.playhead(c),this.assetData=new f(a._assetData),this.streamData=new g(a._streamData),this.qosData=new h(a._qosData),this.cuserData=d.clone(a._cuserData),this.meta=i,this.callback=j,this.filterReport=!0}var d=a.ObjectUtils,e=b.model.EventDao,f=b.model.AssetDao,g=b.model.StreamDao,h=b.model.QoSDao;b.model.TrackItem=c}(a.ADB.va.utils,b),function(a,b){"use strict";function c(a,b,c,i,j,k){this.adobeAnalyticsData=a,this.userData=b,this.aamData=c,this.serviceProviderData=i,this.sessionData=j,this.eventData=new e(k.eventData),this.assetData=new f(k.assetData),this.streamData=new g(k.streamData),this.qosData=new h(k.qosData),this.cuserData=d.clone(k.cuserData),this.meta=d.clone(k.meta),this.callback=k.callback,this.filterReport=k.filterReport}var d=a.ObjectUtils,e=b.model.EventDao,f=b.model.AssetDao,g=b.model.StreamDao,h=b.model.QoSDao;b.model.CUserDao;b.model.Report=c}(a.ADB.va.utils,b),function(a){"use strict";function b(){}b.prototype.serializeReport=function(a){},b.prototype.serializeDao=function(a){},b.prototype.serializeMap=function(a){},b.prototype.serializeNumber=function(a,b,c,d){},b.prototype.serializeString=function(a,b,c,d){},a.model.ISerializer=b}(b),function(a,b){"use strict";function c(a){if(!a)throw new Error("Reference to the logger object cannot be NULL");this._logger=a}var d=b.model.Dao,e=b.model.DaoField,f=b.model.ISerializer;a.extend(c,f),c.prototype.serializeReport=function(a){var b=[];return b.push(this.serializeDao(a.adobeAnalyticsData)),b.push(this.serializeDao(a.userData)),b.push(this.serializeDao(a.aamData)),b.push(this.serializeMap(a.cuserData,"cuser")),b.push(this.serializeDao(a.serviceProviderData)),b.push(this.serializeDao(a.sessionData)),b.push(this.serializeDao(a.eventData)),b.push(this.serializeDao(a.assetData)),b.push(this.serializeDao(a.streamData)),b.push(this.serializeDao(a.qosData)),b.push(this.serializeMap(a.meta,"meta")),{serializedOutput:b.filter(function(a){return!!a}).join("&"),callback:a.callback}},c.prototype.serializeDao=function(a){return this._processDao(a).filter(function(a){return!!a}).join("&")},c.prototype.serializeMap=function(a,b){var c=[],d=b||"meta";for(var e in a)a.hasOwnProperty(e)&&a[e]&&c.push("s:"+d+":"+e+"="+window.encodeURIComponent(a[e]));return c.join("&")},c.prototype.serializeNumber=function(a,b,c,d){var f=h;return null==b||isNaN(b)?null:(d===e.HINT_SHORT&&(f=i),f+":"+c+":"+a+"="+Math.floor(b))},c.prototype.serializeString=function(a,b,c,d){return b?j+":"+c+":"+a+"="+window.encodeURIComponent(b):null},c.prototype._processDao=function(a){var b=[];for(var c in a.data)if(a.data.hasOwnProperty(c)){var e=a.data[c],f=e.value,h=e.hint,i=null,j=a.realm;if(null==f)continue;"number"==typeof f?i=this.serializeNumber(c,f,j,h):"string"==typeof f?i=this.serializeString(c,f,j,h):f instanceof d?i=this.serializeDao(f):this._logger.warn(g,"#_processDao() > Unable to serialize DAO. Field: "+c+". Value: "+f+"."),i&&b.push(i)}return b};var g="ah::QuerystringSerializer",h="l",i="h",j="s";b.model.QuerystringSerializer=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b){if(!a)throw new Error("Reference to the data object cannot be NULL");if(this._data=a,!b)throw new Error("Reference to the logger object cannot be NULL");this._logger=b}c.prototype.parse=function(){var a,b,c,j,k,l;if(window.DOMParser){l=(new window.DOMParser).parseFromString(this._data,"text/xml")}else l=new window.ActiveXObject("Microsoft.XMLDOM"),l.async=!1,l.loadXML(this._data);var m;m=parseInt(l.getElementsByTagName("trackingInterval")[0].childNodes[0].nodeValue,10),m&&(a=m),m=parseInt(l.getElementsByTagName("setupCheckInterval")[0].childNodes[0].nodeValue,10),m&&(b=m),m=parseInt(l.getElementsByTagName("trackExternalErrors")[0].childNodes[0].nodeValue,10),m&&(c=1==m),l.getElementsByTagName("trackingDisabled")[0]&&(m=parseInt(l.getElementsByTagName("trackingDisabled")[0].childNodes[0].nodeValue,10),j=1==m),l.getElementsByTagName("nielsenEnabled")[0]?(m=parseInt(l.getElementsByTagName("nielsenEnabled")[0].childNodes[0].nodeValue,10),k=1==m):k=!0;var n={};return n[e]=a,n[f]=b,n[g]=c,n[i]=j,n[h]=k,this._logger.debug(d,"#parse() > Obtained configuration settings."),n};var d="ah::SettingsParser",e="reporting_interval",f="check_status_interval",g="track_external_errors",h="nielsen_enabled",i="tracking_disabled";b.network.SettingsParser=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b){if(this._trackingServer=null,this._checkStatusServer=null,this._publisher=null,this._isConfigured=!1,this._isDestroyed=!1,this._beginReporting=!1,this._sendingRequest=!1,this._requestsQueue=[],this._quietMode=!1,this._prevReportSent=null,!a)throw new Error("Reference to the channel object cannot be NULL");if(this._channel=a,!b)throw new Error("Reference to the logger object cannot be NULL");this._logger=b,this._serializer=new i(b),this._installEventListeners()}var d=a.Event,e=a.URLRequestMethod,f=a.URLRequest,g=a.URLLoader,h=b.network.SettingsParser,i=b.model.QuerystringSerializer;c.prototype.destroy=function(){this._isDestroyed||(this._isDestroyed=!0,this._logger.debug(j,"#destroy()"),this._uninstallEventListeners())},c.prototype._onApiConfig=function(a){var b=a.data;this._logger.debug(j,"#_onApiConfig(sb_server="+b[k]+", check_status_server="+b[l]+", publisher="+b[m]+", quiet_mode="+b[n]+", ssl="+b[o]+")"),this._trackingServer=this._updateRequestProtocol(b[k],b[o]),this._checkStatusServer=this._updateRequestProtocol(b[l],b[o]),this._publisher=b[m],this._quietMode=b[n],this._isConfigured=!0},c.prototype._onBeginReporting=function(a){this._logger.debug(j,"#_onBeginReporting()"),this._beginReporting=!0,this._sendNextRequest(),this._onClockCheckStatusTick()},c.prototype._onFilterReportAvailable=function(a){var b=a.data;if(!this._isConfigured)return void this._logger.warn(j,"#_onFilterReportAvailable() > Unable to send request: not configured.");var c=b[p];if(this._prevReportSent&&this._prevReportSent.eventData&&c.eventData&&this._prevReportSent.eventData.playhead==c.eventData.playhead&&this._prevReportSent.eventData.ts==c.eventData.ts&&this._prevReportSent.eventData.prevTs==c.eventData.prevTs&&this._prevReportSent.eventData.type==c.eventData.type)return void this._logger.debug(j,"#_onFilterReportAvailable() > Duplicate heartbeat report not sent for URL:\n"+e);this._prevReportSent=c;var d=this._serializer.serializeReport(c),e=this._trackingServer+"/?"+d.serializedOutput;this._processRequest(e,d.callback)},c.prototype._processRequest=function(a,b){this._requestsQueue.push({url:a,callback:b}),this._sendNextRequest()},c.prototype._sendNextRequest=function(){if(!this._beginReporting)return void this._logger.debug(j,"#_sendNextRequest() > Exiting as we have not started reporting.");if(this._sendingRequest)return void this._logger.debug(j,"#_sendNextRequest() > Exiting as we are currently sending a request.");var a=this._requestsQueue.shift();if(!a)return void this._logger.debug(j,"#_sendNextRequest() > Exiting as we have no requests to send.");this._sendingRequest=!0,this._logger.debug(j,"#_sendNextRequest() > "+a.url);var b=this,c=new g,h=function(){c.close(),a.callback&&a.callback.call(null),b._sendingRequest=!1,b._sendNextRequest()},i=function(a){h()},k=function(a){b._logger.warn(j,"#_onFilterReportAvailable() > Failed to send heartbeat report."),h()};if(!this._quietMode){c.addEventListener(d.SUCCESS,i,this),c.addEventListener(d.ERROR,k,this);var l=new f(a.url,e.GET);c.load(l)}},c.prototype._onClockCheckStatusTick=function(a){function b(a){if(a.data)try{var b=new h(a.data.response,i._logger),c=b.parse();c?i._channel.trigger(new d(u,c)):i._logger.warn(j,"#_onClockCheckStatusTick() > Failed to parse the config. settings.")}catch(a){i._logger.warn(j,"#_onClockCheckStatusTick() > Failed to parse the config. settings.")}n.close()}function c(a){i._logger.warn(j,"#_onClockCheckStatusTick() > Failed to obtain the config. settings."),n.close()}if(!this._isConfigured)return void this._logger.warn(j,"#_onClockCheckStatusTick() > Unable to send request: not configured.");if(!this._publisher)return void this._logger.warn(j,"#_onClockCheckStatusTick() > Publisher is NULL.");if(!this._beginReporting)return void this._logger.debug(j,"#_onClockCheckStatusTick() > Exiting as we have not started reporting.");var i=this,k=this._publisher.replace(/[^a-zA-Z0-9]+/,"-").toLocaleLowerCase(),l=this._checkStatusServer+k+".xml?r="+(new Date).getTime(),m=new f(l,e.GET),n=new g;n.addEventListener(d.SUCCESS,b,this),n.addEventListener(d.ERROR,c,this),this._logger.debug(j,"#_onClockCheckStatusTick() > Get new settings from: "+l),n.load(m)},c.prototype._updateRequestProtocol=function(a,b){var c=a;return 0===c.indexOf("http://")?c=c.slice(7):0===c.indexOf("https://")&&(c=c.slice(8)),b?"https://"+c:"http://"+c},c.prototype._installEventListeners=function(){this._channel.on(q,this._onApiConfig,this),this._channel.on(r,this._onBeginReporting,this),this._channel.on(s,this._onFilterReportAvailable,this),this._channel.on(t,this._onClockCheckStatusTick,this)},c.prototype._uninstallEventListeners=function(){this._channel.off(null,null,this)};var j="ah::Network",k="tracking_server",l="check_status_server",m="publisher",n="quiet_mode",o="ssl",p="report",q="api:config",r="api:video_begin_reporting",s="filter:data_available",t="clock:check_status.tick",u="net:check_status_complete";b.network.Network=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b){if(!a)throw new Error("Reference to the channel object cannot be NULL");if(this._channel=a,!b)throw new Error("Reference to the logger object cannot be NULL");this._logger=b,this._isDestroyed=!1,this._isBufferingInProgress=!1,this._reportBuffer={},this._tsHistory={},this._workQueue=new i,this._installEventListeners()}function d(a){var b=[];return a&&a.forEach(function(a){a.eventData.type()==k.EVENT_TYPE_PAUSE||a.eventData.type()==k.EVENT_TYPE_STALL||a.eventData.type()==k.EVENT_TYPE_BUFFER?(!a.filterReport||a.eventData.duration()>u)&&b.push(a):b.push(a)}),b}function e(a){var b=-1,c=-1,d=[];return a.forEach(function(a){a.eventData.type()==k.EVENT_TYPE_START?a.assetData.type()==l.TYPE_MAIN_CONTENT?-1==b?b=d.push(a)-1:(a.eventData.prevTs(-1),d[b]=a):-1==c?c=d.push(a)-1:(a.eventData.prevTs(-1),d[c]=a):d.push(a)}),d}function f(a){var b=[];return a.forEach(function(c){if(c.eventData.type()==k.EVENT_TYPE_PLAY){if(c.eventData.duration()>t)b.push(c);else if(0==c.eventData.duration()&&c.assetData.type()==l.TYPE_MAIN_CONTENT){var d=g(a);d.indexOf(c)==d.length-1&&b.push(c)}}else b.push(c)}),b}function g(a){var b=[];return a.forEach(function(a){a.eventData.type()!=k.EVENT_TYPE_PLAY&&a.eventData.type()!=k.EVENT_TYPE_BUFFER&&a.eventData.type()!=k.EVENT_TYPE_START||b.push(a)}),b}var h=a.radio.Command,i=a.radio.CommandQueue,j=a.Event,k=b.model.EventDao,l=b.model.AssetDao;c.prototype.destroy=function(){this._isDestroyed||(this._isDestroyed=!0,this._logger.debug(w,"#destroy()"),this._uninstallEventListeners(),this.clear())},c.prototype.clear=function(){this._logger.debug(w,"#clear()"),this._workQueue.cancelAllCommands(),this._reportBuffer={},this._tsHistory={},this._isBufferingInProgress=!1},c.prototype.flush=function(){this._workQueue.addCommand(new h(this._flushBufferReport,this))},c.prototype._bufferReport=function(a){if(!this._isDestroyed){var b=a[q];if(b){var c=b.sessionData.sessionId();this._reportBuffer[c]=this._reportBuffer[c]||[],this._reportBuffer[c].push(b)}if(!this._isBufferingInProgress){this._isBufferingInProgress=!0;var d={};d[p]=!0,d[r]=1,this._channel.command(s,d)}}},c.prototype._flushBufferReport=function(){function a(a){if(a)for(var c=0;c<a.length;c++){var d=a[c],e=d.sessionData.sessionId();b._tsHistory[e]=b._tsHistory[e]||{};var f=d.eventData.type()+"."+(d.assetData.type()==l.TYPE_AD?d.assetData.adData().adId():d.assetData.videoId());b._tsHistory[e].hasOwnProperty(f)&&d.eventData.prevTs(b._tsHistory[e][f]),b._tsHistory[e][f]=d.eventData.ts()}}if(!this._isDestroyed){var b=this;for(var c in this._reportBuffer)if(this._reportBuffer.hasOwnProperty(c)){var g=f(e(d(this._reportBuffer[c])));a(g);for(var h=0;h<g.length;h++){var i=g[h],k={};k[q]=i,this._channel.trigger(new j(n,k))}}this._reportBuffer={};var m=this._channel.request(v),o=this._tsHistory[m]||{};this._tsHistory={},this._tsHistory[m]=o,this._isBufferingInProgress=!1}},c.prototype._onContextReportAvailable=function(a){var b=a.data;this._workQueue.addCommand(new h(this._bufferReport,this,[b]))},c.prototype._onClockFlushFilterTick=function(a){this.flush()},c.prototype._installEventListeners=function(){this._channel.on(m,this._onContextReportAvailable,this),this._channel.on(o,this._onClockFlushFilterTick,this)},c.prototype._uninstallEventListeners=function(){this._channel.off(null,null,this)};var m="context:report_available",n="filter:data_available",o="clock:flush_filter.tick",p="reset",q="report",r="repeat_count",s="clock:flush_filter.resume",t=250,u=250,v="session_id",w="ah::ReportFilter";b.filter.ReportFilter=c}(a.ADB.core,b),function(a,b){"use strict";function c(a,b){this._onFail={fn:a,ctx:b}}var d=a.ErrorInfo;c.prototype.validateFields=function(a,b){if(!a)return this._fail("Data cannot be null");if(b)for(var c=0;c<b.length;c++){var d=b[c];switch(d){case"videoId":if(!a.hasOwnProperty("videoId"))return this._fail("The ID for the main video must be specified.");if("string"!=typeof a.videoId)return this._fail("The ID for the main video must be a String.");if(""===a.videoId)return this._fail("The ID for the main video cannot be an empty string.");break;case"streamType":if(!a.hasOwnProperty("streamType"))return this._fail("The stream type for the main video must be specified.");if("string"!=typeof a.streamType)return this._fail("The stream type for the main video must be a String.");if(""===a.streamType)return this._fail("The stream type for the main video cannot be an empty string.");break;case"videoLength":if(!a.hasOwnProperty("videoLength"))return this._fail("The length of the main video must be specified.");if("number"!=typeof a.videoLength)return this._fail("The length of the main video must be a Number.");if(isNaN(a.videoLength))return this._fail("The length of the main video cannot be NaN.");break;case"playhead":if(!a.hasOwnProperty("playhead"))return this._fail("The playhead for the main video must be specified.");if("number"!=typeof a.playhead)return this._fail("The playhead for the main video must be a Number.");if(isNaN(a.playhead))return this._fail("The playhead for the main video cannot be NaN.");break;case"playerName":if(!a.hasOwnProperty("playerName"))return this._fail("The player name for the main video must be specified.");if("string"!=typeof a.playerName)return this._fail("The player name for the main video must be a String.");if(""===a.playerName)return this._fail("The player name for the main video cannot be an empty string.");break;case"rsid":if(!a.hasOwnProperty("rsid"))return this._fail("account (rsid) is required and has to be set in the AppMeasurement instance.");if("string"!=typeof a.rsid)return this._fail("account (rsid) of the AppMeasurement instance must be a String.");if(""===a.rsid)return this._fail("account (rsid) of the AppMeasurement instance  cannot be an empty string.");break;case"trackingServer":if(!a.hasOwnProperty("trackingServer"))return this._fail("trackingServer is required and has to be set in the AppMeasurement instance.");if("string"!=typeof a.trackingServer)return this._fail("trackingServer of the AppMeasurement instance must be a String.");if(""===a.trackingServer)return this._fail("trackingServer of the AppMeasurement instance cannot be an empty string.");break;case"podPlayerName":if(!a.hasOwnProperty("podPlayerName"))return this._fail("The player name for the ad-break must be specified.");if("string"!=typeof a.podPlayerName)return this._fail("The player name for the ad-break must be a String.");if(""===a.podPlayerName)return this._fail("The player name for the ad-break cannot be an empty string.");break;case"podPosition":if(!a.hasOwnProperty("podPosition"))return this._fail("Position (index) of the ad-break must be specified.");if("number"!=typeof a.podPosition)return this._fail("Position (index) of the ad-break must be a Number.");if(isNaN(a.podPosition))return this._fail("Position (index) of the ad-break cannot be NaN.");break;case"adId":if(!a.hasOwnProperty("adId"))return this._fail("The ad ID must be specified.");if("string"!=typeof a.adId)return this._fail("The ad ID must be a String.");if(""===a.adId)return this._fail("The ad ID cannot be an empty string.");break;case"adPosition":if(!a.hasOwnProperty("adPosition"))return this._fail("Position (index) of the ad must be specified.");if("number"!=typeof a.adPosition)return this._fail("Position (index) of the ad must be a Number.");if(isNaN(a.adPosition))return this._fail("Position (index) of the ad cannot be NaN.");break;case"chapterPosition":if(!a.hasOwnProperty("chapterPosition"))return this._fail("Position (index) of the chapter must be specified.");if("number"!=typeof a.chapterPosition)return this._fail("Position (index) of the chapter must be a Number.");if(isNaN(a.chapterPosition))return this._fail("Position (index) of the chapter cannot be NaN.");break;case"chapterOffset":if(!a.hasOwnProperty("chapterOffset"))return this._fail("Chapter start-time (offset) must be specified.");if("number"!=typeof a.chapterOffset)return this._fail("Chapter start-time (offset) must be a Number.");if(isNaN(a.chapterOffset))return this._fail("Chapter start-time (offset) cannot be NaN.");break;case"chapterLength":if(!a.hasOwnProperty("chapterLength"))return this._fail("The length of the chapter must be specified.");if("number"!=typeof a.chapterLength)return this._fail("The length of the chapter must be a Number.");if(isNaN(a.chapterLength))return this._fail("The length of the chapter cannot be NaN.");break;default:return this._fail("Unable to validate unknown parameter: "+d)}}return!0},c.prototype._fail=function(a){var b=new d("Invalid input data",a);return this._onFail.fn&&this._onFail.fn.call(this._onFail.ctx,b),!1},b.context.InputDataValidator=c}(a.ADB.va,b),function(a,b){"use strict";function c(a,b){if(!b)throw new Error("Reference to the logger object cannot be NULL");if(this._logger=b,!a)throw new Error("Reference to the context object cannot be NULL");this._context=a}var d=b.model.Report;c.prototype.createReportForItem=function(a){return this._logger.debug(e,"Creating report for item: "+a.eventData.type()),new d(this._context._adobeAnalyticsData,this._context._userData,this._context._aamData,this._context._serviceProviderData,this._context._sessionData,a)};var e="ah::ReportFactory";b.context.ReportFactory=c}(a.ADB.core,b),function(a,b,c,d){"use strict";function e(a,b){if(!a)throw new Error("Reference to the channel object cannot be NULL");if(this._channel=a,!b)throw new Error("Reference to the logger object cannot be NULL");this._logger=b,this._lastInBandItem=null,this._stashedLastInBandItem=null,this._stashedMainMetadata=null,this._autoComputedStartupTime=0,this._reportingInterval=ma,this._assetData=null,this._streamData=null,this._qosData=null,this._sessionData=null,this._cuserData=null,this._adobeAnalyticsData=new j,this._serviceProviderData=new k,this._userData=new l,this._aamData=new m,this._isTrackingSessionActive=!1,this._isVideoComplete=!1,this._isDestroyed=!1,this._doNotOverrideEventDuration=!1,this._reportFactory=new u(this,this._logger),this._inputDataValidator=new v(function(a){this._logger.error(w,a.getMessage()+" | "+a.getDetails()),this._channel.trigger(new h(y,a))},this),this._trackExternalErrors=!0,this._installEventListeners()}var f=c.md5,g=c.ObjectUtils,h=a.Event,i=d.model.SessionDao,j=d.model.AdobeAnalyticsDao,k=d.model.ServiceProviderDao,l=d.model.UserDao,m=d.model.AudienceManagerDao,n=d.model.EventDao,o=d.model.AssetDao,p=d.model.StreamDao,q=d.model.QoSDao,r=d.model.AdDao,s=d.model.ChapterDao,t=d.model.TrackItem,u=d.context.ReportFactory,v=d.context.InputDataValidator;e.prototype.destroy=function(){this._isDestroyed||(this._isDestroyed=!0,this._logger.debug(w,"#destroy()"),this._uninstallEventListeners())},e.prototype._onApiAnalyticsStart=function(a){this._logger.debug(w,"#_onApiAnalyticsStart()");var b=a.data;if(this._checkCall("_onApiAnalyticsStart")&&this._inputDataValidator.validateFields(b,["playhead"])){this._userData.visitorId(b.vid),this._userData.analyticsVisitorId(b.aid),this._userData.marketingCloudVisitorId(b.mid),this._aamData.audienceManagerBlob(b.blob),this._aamData.audienceManagerLocationHint(b.loc_hint),b.customerIDs&&(this._cuserData=b.customerIDs),this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_AA_START,b.playhead,null,b._eventData[E]);c.assetData.adData(null),c.assetData.type(o.TYPE_MAIN_CONTENT),this._cuserData=null,this._sendHit(c)}},e.prototype._onApiAnalyticsAdStart=function(a){this._logger.debug(w,"#_onApiAnalyticsAdStart()");var b=a.data;if(this._checkCall("_onApiAnalyticsAdStart")&&this._inputDataValidator.validateFields(b,["playhead"])){this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_AA_AD_START,b.playhead,null,b._eventData[E]);this._sendHit(c)}},e.prototype._onApiVideoLoad=function(a){var b=a.data;this._logger.debug(w,"#_onApiVideoLoad(rsid="+b.rsid+", aa_trackingServer="+b.trackingServer+")"),this._resetInternalState(),this._inputDataValidator.validateFields(b,["rsid","trackingServer"])&&(this._sessionData.sessionId(this._generateSessionId()),this._isTrackingSessionActive=!0)},e.prototype._onApiVideoUnload=function(a){if(this._logger.debug(w,"#_onApiVideoUnload()"),!this._isTrackingSessionActive)return void this._logger.debug(w,"#_onApiVideoUnload() > No active tracking session.");this._isTrackingSessionActive=!1},e.prototype._onApiVideoStart=function(a){var b=a.data;if(this._logger.debug(w,"#_onApiVideoStart(id="+b.videoId+", name="+b.videoName+", length="+b.videoLength+", type="+b.streamType+", playerName="+b.playerName+")"),this._checkCall("_onApiVideoStart")&&this._inputDataValidator.validateFields(b,["videoId","streamType","videoLength","playhead","playerName"])){this._lastInBandItem=null,this._stashedLastInBandItem=null,this._adobeAnalyticsData.reportSuiteId(b.rsid),this._adobeAnalyticsData.trackingServer(b.trackingServer),this._adobeAnalyticsData.ssl(Number(b.useSsl)),this._serviceProviderData.ovp(b.ovp),this._serviceProviderData.sdk(b.sdk),this._serviceProviderData.channel(b.channel),this._serviceProviderData.libVersion(b.version),this._serviceProviderData.apiLevel(b.apiLvl),this._serviceProviderData.playerName(b.playerName),this._assetData.adData(null),this._assetData.chapterData(null),this._assetData.videoId(b.videoId),this._assetData.length(b.videoLength),this._assetData.type(o.TYPE_MAIN_CONTENT),this._assetData.publisher(b.publisher),this._assetData.name(b.videoName),this._streamData.type(b.streamType),this._updateQoSInfo(b);var c=b.metaNielsen?g.merge(b.metaVideo,b.metaNielsen):b.metaVideo,d=new t(this,n.EVENT_TYPE_START,b.playhead,c,b._eventData[E]);this._sendHit(d)}},e.prototype._onApiVideoResume=function(a){var b=a.data;if(this._logger.debug(w,"#_onApiVideoResume(id="+b.videoId+", name="+b.videoName+", length="+b.videoLength+", type="+b.streamType+", playerName="+b.playerName+")"),this._checkCall("_onApiVideoResume")&&this._inputDataValidator.validateFields(b,["videoId","streamType","videoLength","playhead","playerName"])){this._assetData.videoId(b.videoId),this._assetData.length(b.videoLength),this._assetData.type(o.TYPE_MAIN_CONTENT),this._assetData.name(b.videoName),this._streamData.type(b.streamType);var c=new t(this,n.EVENT_TYPE_RESUME,b.playhead,null,b._eventData[E]);this._sendHit(c)}},e.prototype._onApiVideoSessionEnd=function(a){this._logger.debug(w,"#_onApiVideoSessionEnd()");var b=a.data;if(this._checkCall("_onApiVideoSessionEnd")&&this._inputDataValidator.validateFields(b,["playhead"])){var c=new t(this,n.EVENT_TYPE_END,b.playhead,null,b._eventData[E]);c.assetData.adData(null),c.assetData.type(o.TYPE_MAIN_CONTENT),this._sendHit(c)}},e.prototype._onApiVideoComplete=function(a){this._logger.debug(w,"#_onApiVideoComplete()");var b=a.data;if(this._checkCall("_onApiVideoComplete")){var c=new t(this,n.EVENT_TYPE_COMPLETE,this._assetData.length(),null,b._eventData[E]);this._sendHit(c),this._isVideoComplete=!0}},e.prototype._onApiVideoSkip=function(a){this._logger.debug(w,"#_onApiVideoSkip()");var b=a.data;if(this._checkCall("_onApiVideoSkip")){var c=new t(this,n.EVENT_TYPE_SKIP,b.playhead,null,b._eventData[E]);this._sendHit(c),this._isVideoComplete=!0}},e.prototype._onApiPlay=function(a){this._logger.debug(w,"#_onApiPlay()");var b=a.data;if(this._checkCall("_onApiPlay")&&this._inputDataValidator.validateFields(b,["playhead"])){this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_PLAY,b.playhead,null,b._eventData[E]);this._sendHit(c)}},e.prototype._onApiPause=function(a){this._logger.debug(w,"#_onApiPause()");var b=a.data;if(this._checkCall("_onApiPause")&&this._inputDataValidator.validateFields(b,["playhead"])){this._updateQoSInfo(b);var c=b.playheadStalled?n.EVENT_TYPE_STALL:n.EVENT_TYPE_PAUSE,d=new t(this,c,b.playhead,null,b._eventData[E]);b._eventData.hasOwnProperty(F)&&(d.filterReport=b._eventData[F]),this._sendHit(d)}},e.prototype._onApiBufferStart=function(a){this._logger.debug(w,"#_onApiBufferStart()");var b=a.data;if(this._checkCall("_onApiBufferStart")&&this._inputDataValidator.validateFields(b,["playhead"])){this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_BUFFER,b.playhead,null,b._eventData[E]);this._sendHit(c)}},e.prototype._onApiAdBreakStart=function(a){this._logger.debug(w,"#_onApiAdBreakStart()");var b=a.data;this._checkCall("_onApiAdBreakStart")&&this._inputDataValidator.validateFields(b,["playhead"])&&(this._flushLastInbandItem(b),this._updateLastInbandItemToBuffering())},e.prototype._onApiAdBreakComplete=function(a){this._logger.debug(w,"#_onApiAdBreakComplete()");var b=a.data;this._checkCall("_onApiAdBreakComplete")&&this._inputDataValidator.validateFields(b,["playhead"])&&(this._flushLastInbandItem(b),this._restoreLastInbandItem())},e.prototype._onApiAdStart=function(a){var b=a.data;if(this._logger.debug(w,"#_onApiAdStart(id="+b.adId+", player_name="+b.podPlayerName+", parent_name="+this._assetData.videoId()+", pod_pos="+b.adPosition+")"),this._checkCall("_onApiAdStart")&&this._inputDataValidator.validateFields(b,["playhead","podPosition","podPlayerName","adId","adPosition"])){var c=new r;c.adId(b.adId),c.adName(b.adName),c.adLength(b.adLength),c.resolver(b.podPlayerName),c.podId(f(this._assetData.videoId())+"_"+b.podPosition),c.podPosition(b.adPosition+""),c.podName(b.podName),c.podOffset(b.podSecond),c.sid(this._generateSessionId()),this._assetData.adData(c),this._assetData.type(o.TYPE_AD),this._updateQoSInfo(b);var d=g.merge(b.metaVideo,b.metaAd);d=b.metaNielsen?g.merge(d,b.metaNielsen):d,d=b.metaAdNielsen?g.merge(d,b.metaAdNielsen):d;var e=new t(this,n.EVENT_TYPE_START,b.playhead,d,b._eventData[E]);this._sendHit(e),this._restoreLastInbandItem();if(!!b.adGranularTracking){var h=b.adTrackingInterval?b.adTrackingInterval:this._reportingInterval;this._updateReportingInterval(h,!0)}}},e.prototype._onApiAdComplete=function(a){this._logger.debug(w,"#_onApiAdComplete()");var b=a.data;if(this._checkCall("_onApiAdComplete")&&this._inputDataValidator.validateFields(b,["playhead"])){if(this._assetData.type()!=o.TYPE_AD)return void this._logger.warn(w,"#_onApiAdComplete() > Ignoring the ad complete event, because we are no longer in an ad.");this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_COMPLETE,b.playhead,null,b._eventData[E]);this._sendHit(c),this._updateLastInbandItemToBuffering(),this._assetData.adData(null),this._assetData.type(o.TYPE_MAIN_CONTENT),this._updateReportingInterval(this._reportingInterval,!1)}},e.prototype._onApiAdSkip=function(a){this._logger.debug(w,"#_onApiAdSkip()");var b=a.data;if(this._checkCall("_onApiAdSkip")&&this._inputDataValidator.validateFields(b,["playhead"])){if(this._assetData.type()!=o.TYPE_AD)return void this._logger.warn(w,"#_onApiAdSkip() > Ignoring the ad skip event, because we are no longer in an ad.");this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_SKIP,b.playhead,null,b._eventData[E]);this._sendHit(c),this._updateLastInbandItemToBuffering(),this._assetData.adData(null),this._assetData.type(o.TYPE_MAIN_CONTENT),this._updateReportingInterval(this._reportingInterval,!1)}},e.prototype._onApiChapterStart=function(a){var b=a.data;if(this._logger.debug(w,"#_onApiChapterStart(name="+b.chapterName+", length="+b.chapterLength+", position="+b.chapterPosition+", chapter_offset="+b.chapterOffset+")"),this._checkCall("_onApiChapterStart")&&this._inputDataValidator.validateFields(b,["playhead","chapterPosition","chapterOffset","chapterLength"])){var c=new s;c.id(f(this._assetData.videoId())+"_"+b.chapterPosition),c.name(b.chapterName),c.length(b.chapterLength),c.position(b.chapterPosition),c.offset(b.chapterOffset),c.sid(this._generateSessionId()),this._assetData.chapterData(c),this._updateQoSInfo(b);var d=g.merge(b.metaVideo,b.metaChapter),e=new t(this,n.EVENT_TYPE_CHAPTER_START,b.playhead,d,b._eventData[E]);e.assetData.adData(null),e.assetData.type(o.TYPE_MAIN_CONTENT),this._sendHit(e)}},e.prototype._onApiChapterComplete=function(a){this._logger.debug(w,"#_onApiChapterComplete()");var b=a.data;if(this._checkCall("_onApiChapterComplete")&&this._inputDataValidator.validateFields(b,["playhead"])){if(!this._assetData.chapterData())return void this._logger.warn(w,"#_onApiChapterComplete() > Ignoring the chapter complete event, because we are no longer in a chapter.");this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_CHAPTER_COMPLETE,b.playhead,null,b._eventData[E]);c.assetData.adData(null),c.assetData.type(o.TYPE_MAIN_CONTENT),this._sendHit(c),this._assetData.chapterData(null)}},e.prototype._onApiChapterSkip=function(a){this._logger.debug(w,"#_onApiChapterSkip()");var b=a.data;if(this._checkCall("_onApiChapterSkip")&&this._inputDataValidator.validateFields(b,["playhead"])){if(!this._assetData.chapterData())return void this._logger.warn(w,"#_onApiChapterSkip() > Ignoring the chapter skip event, because we are no longer in a chapter.");this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_CHAPTER_SKIP,b.playhead,null,b._eventData[E]);c.assetData.adData(null),c.assetData.type(o.TYPE_MAIN_CONTENT),this._sendHit(c),this._assetData.chapterData(null)}},e.prototype._onApiBitrateChange=function(a){this._logger.debug(w,"#_onApiBitrateChange()");var b=a.data;if(this._checkCall("_onApiBitrateChange")&&this._inputDataValidator.validateFields(b,["playhead"])){this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_BITRATE_CHANGE,b.playhead,null,b._eventData[E]);this._sendHit(c)}},e.prototype._onApiTrackError=function(a){var b=a.data;if(this._logger.debug(w,"#_onApiTrackError(source="+b._eventData.source+", err_id="+b._eventData.error_id+")"),!this._isTrackingSessionActive)return void this._logger.warn(w,"#_onApiTrackError() > No active tracking session.");if(this._trackExternalErrors||b._eventData.source===x){this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_ERROR,0,null,b._eventData[E]);c.eventData.id(b._eventData.error_id),c.eventData.source(b._eventData.source),this._sendHit(c)}},e.prototype._onApiTrackInternalError=function(a){var b=a.data;this._logger.debug(w,"#_onApiTrackInternalError(source="+b.source+", err_id="+b.error_id+")"),this._updateQoSInfo(b);var c=new t(this,n.EVENT_TYPE_ERROR,0);c.eventData.id(b.error_id),c.eventData.source(b.source),this._sendHit(c)},e.prototype._onApiQuantumEnd=function(a){this._logger.debug(w,"#_onApiQuantumEnd(interval="+this._channel.request(B)+")");var b=a.data;if(this._checkCall("_onApiQuantumEnd")&&this._inputDataValidator.validateFields(b,["playhead"])){var c=this._lastInBandItem;if(c){this._updateQoSInfo(b);var d=new t(this,c.eventData.type(),b.playhead,c.meta,c.callback);d.filterReport=c.filterReport,this._sendHit(d,!0)}}},e.prototype._onNetworkCheckStatusComplete=function(a){var b=a.data;this._trackExternalErrors=b[I],this._reportingInterval=b[J],this._reportingInterval||(this._reportingInterval=ma),this._logger.debug(w,"#_onNetworkCheckStatusComplete(track_ext_err="+this._trackExternalErrors+")")},e.prototype._onResetSessionId=function(a){var b=this._generateSessionId();this._sessionData=new i,this._sessionData.sessionId(b),this._logger.debug(w,"#_resetSessionId(new sessionId="+b+")")},e.prototype._installEventListeners=function(){this._channel.on(L,this._onApiAnalyticsStart,this),this._channel.on(M,this._onApiAnalyticsAdStart,this),this._channel.on(N,this._onApiVideoLoad,this),this._channel.on(O,this._onApiVideoUnload,this),this._channel.on(P,this._onApiVideoStart,this),this._channel.on(Q,this._onApiVideoComplete,this),this._channel.on(R,this._onApiVideoSkip,this),this._channel.on(S,this._onApiVideoResume,this),this._channel.on(T,this._onApiVideoSessionEnd,this),this._channel.on(U,this._onApiAdBreakStart,this),this._channel.on(V,this._onApiAdBreakComplete,this),this._channel.on(W,this._onApiAdStart,this),this._channel.on(X,this._onApiAdComplete,this),this._channel.on(Y,this._onApiAdSkip,this),this._channel.on(Z,this._onApiPlay,this),this._channel.on($,this._onApiPause,this),this._channel.on(_,this._onApiBufferStart,this),this._channel.on(aa,this._onApiChapterStart,this),this._channel.on(ba,this._onApiChapterComplete,this),this._channel.on(ca,this._onApiChapterSkip,this),this._channel.on(fa,this._onApiBitrateChange,this),this._channel.on(da,this._onApiTrackError,this),this._channel.on(ea,this._onApiTrackInternalError,this),this._channel.on(ga,this._onApiQuantumEnd,this),this._channel.on(ia,this._onNetworkCheckStatusComplete,this),this._channel.on(D,this._onResetSessionId,this),this._channel.reply(C,function(){return this._sessionData&&this._sessionData.sessionId()?this._sessionData.sessionId():null},this)},e.prototype._uninstallEventListeners=function(){this._channel.off(null,null,this)},e.prototype._resetInternalState=function(){this._logger.debug(w,"#_resetInternalState()"),this._isTrackingSessionActive=!1,this._isVideoComplete=!1,this._autoComputedStartupTime=0,this._lastInBandItem=null,this._stashedLastInBandItem=null,this._streamData=new p,this._qosData=new q,this._sessionData=new i,this._assetData=new o,this._cuserData=null},e.prototype._generateSessionId=function(){return""+(new Date).getTime()+Math.floor(1e9*Math.random())},e.prototype._updateQoSInfo=function(a){this._qosData.bitrate(a.bitrate||0),this._qosData.fps(a.fps||0),this._qosData.droppedFrames(a.droppedFrames||0),null==a.startupTime||isNaN(a.startupTime)?(this._qosData.startupTime(this._autoComputedStartupTime),this._qosData.isStartupTimeOverridden=!1):(this._qosData.startupTime(a.startupTime),this._qosData.isStartupTimeOverridden=!0)},e.prototype._checkCall=function(a){return this._isTrackingSessionActive?!this._isVideoComplete||"_onApiVideoSessionEnd"===a||(this._logger.warn(w,"#"+a+"() > The video content already completed."),!1):(this._logger.warn(w,"#"+a+"() > No active tracking session."),!1)},e.prototype._updateReportingInterval=function(a,b){var c={};c[K]=!!b,c[J]=a,this._channel.trigger(new h(ja,c))},e.prototype._updateLastInBandItem=function(a){var b=this._lastInBandItem,c=(new Date).getTime(),d=b.assetData.type()===o.TYPE_AD||a.assetData.type()===o.TYPE_AD,e=1e3*Math.abs(a.eventData.playhead()-b.eventData.playhead()),f=Math.abs(c-b.eventData.ts()),g=Math.abs(e-f),h=f;h>ka?(this._logger.warn(w," Resetting duration in lastInBandItem["+b.assetData.type()+":"+b.eventData.type()+"] call to 0 as calculated duration ("+h+")exceeds 10mins"),h=0):b.eventData.type()==n.EVENT_TYPE_PLAY&&!d&&!this._doNotOverrideEventDuration&&g>la&&(h=Math.min(e,f),this._logger.warn(w," Resetting duration in lastInBandItem["+b.assetData.type()+":"+b.eventData.type()+"] call to "+h+" as calculated error delta ("+g+")exceeds 2sec")),this._doNotOverrideEventDuration=!1,b.eventData.duration(h),b.eventData.ts(c),b.eventData.playhead(a.eventData.playhead()),b.qosData.startupTime(a.qosData.startupTime()),b.qosData.isStartupTimeOverridden=a.qosData.isStartupTimeOverridden},e.prototype._updateLastInbandItemToBuffering=function(){this._stashedLastInBandItem=this._lastInBandItem;var a=0;null!=this._lastInBandItem&&(this._lastInBandItem.assetData.type()==o.TYPE_MAIN_CONTENT&&this._lastInBandItem.eventData.type()==n.EVENT_TYPE_START&&(this._stashedMainMetadata=this._lastInBandItem.meta),a=this._lastInBandItem.eventData.playhead());var b=new t(this,n.EVENT_TYPE_BUFFER,a,null,null);b.assetData.adData(null),b.assetData.type(o.TYPE_MAIN_CONTENT),this._lastInBandItem=b},e.prototype._restoreLastInbandItem=function(){if(null!=this._stashedLastInBandItem){var a=null;this._stashedLastInBandItem.eventData.type()==n.EVENT_TYPE_START&&(this._lastInBandItem.assetData.type()==o.TYPE_AD?a=this._lastInBandItem.meta:(a=this._stashedMainMetadata,this._stashedMainMetadata=null));var b=new t(this,this._stashedLastInBandItem.eventData.type(),this._stashedLastInBandItem.eventData.playhead(),a,this._stashedLastInBandItem.callback);b.filterReport=this._stashedLastInBandItem.filterReport,this._lastInBandItem=b,this._stashedLastInBandItem=null}},e.prototype._flushLastInbandItem=function(a){if(this._lastInBandItem){this._updateQoSInfo(a);var b=new t(this,this._lastInBandItem.eventData.type(),a.playhead,this._lastInBandItem.meta,this._lastInBandItem.callback);this._sendHit(b,!0)}},e.prototype._createAndSendReport=function(a){var b=this._reportFactory.createReportForItem(a);b.qosData.isStartupTimeOverridden||b.qosData.startupTime(this._autoComputedStartupTime);var c={};if(c[G]=b,this._channel.trigger(new h(ha,c)),b.eventData.type()==n.EVENT_TYPE_START||b.eventData.type()==n.EVENT_TYPE_PLAY||b.eventData.type()==n.EVENT_TYPE_PAUSE||b.eventData.type()==n.EVENT_TYPE_STALL||b.eventData.type()==n.EVENT_TYPE_BUFFER){var d={};d[H]=!0,this._channel.command(z,d)}},e.prototype._sendHit=function(a,b){switch(a.eventData.type()){case n.EVENT_TYPE_START:case n.EVENT_TYPE_PLAY:case n.EVENT_TYPE_PAUSE:case n.EVENT_TYPE_STALL:case n.EVENT_TYPE_BUFFER:this._lastInBandItem?(this._updateLastInBandItem(a),this._lastInBandItem.eventData.type()==n.EVENT_TYPE_START&&this._lastInBandItem.assetData.type()==o.TYPE_MAIN_CONTENT&&(this._autoComputedStartupTime+=this._lastInBandItem.eventData.duration()),this._createAndSendReport(this._lastInBandItem),b&&this._lastInBandItem.eventData.type()==a.eventData.type()||this._createAndSendReport(a)):this._createAndSendReport(a),this._lastInBandItem=a;break;case n.EVENT_TYPE_COMPLETE:case n.EVENT_TYPE_SKIP:if(this._lastInBandItem&&(this._updateLastInBandItem(a),this._createAndSendReport(this._lastInBandItem)),a.eventData.type()!==n.EVENT_TYPE_SKIP&&this._createAndSendReport(a),a.assetData.type()==o.TYPE_MAIN_CONTENT){this._lastInBandItem=null,this._stashedLastInBandItem=null;var c={};c[H]=!0,this._channel.command(A,c)}else a.assetData.type()==o.TYPE_AD&&(this._lastInBandItem.assetData.adData(null),this._lastInBandItem.assetData.type(o.TYPE_MAIN_CONTENT),this._doNotOverrideEventDuration=!0);break;case n.EVENT_TYPE_CHAPTER_START:case n.EVENT_TYPE_CHAPTER_COMPLETE:case n.EVENT_TYPE_CHAPTER_SKIP:this._lastInBandItem&&(this._updateLastInBandItem(a),this._createAndSendReport(this._lastInBandItem)),a.eventData.type()!==n.EVENT_TYPE_CHAPTER_SKIP&&this._createAndSendReport(a),this._lastInBandItem&&(this._lastInBandItem.assetData.chapterData(a.eventData.type()==n.EVENT_TYPE_CHAPTER_START?new s(a.assetData.chapterData()):null),this._lastInBandItem.eventData.duration(0),this._createAndSendReport(this._lastInBandItem));break;default:this._createAndSendReport(a)}};var w="ah::Context",x="sourceErrorSDK",y="error",z="clock:reporting.resume",A="clock:reporting.pause",B="reporting_interval",C="session_id",D="reset_session_id",E="callback",F="filter_report",G="report",H="reset",I="track_external_errors",J="reporting_interval",K="do_not_override_interval",L="api:aa_start",M="api:aa_ad_start",N="api:video_load",O="api:video_unload",P="api:video_start",Q="api:video_complete",R="api:video_skip",S="api:video_resume",T="api:video_session_end",U="api:adbreak_start",V="api:adbreak_complete",W="api:ad_start",X="api:ad_complete",Y="api:ad_skip",Z="api:play",$="api:pause",_="api:buffer_start",aa="api:chapter_start",ba="api:chapter_complete",ca="api:chapter_skip",da="api:track_error",ea="api:track_internal_error",fa="api:bitrate_change",ga="api:quantum_end",ha="context:report_available",ia="net:check_status_complete",ja="reporting:update_interval",ka=6e5,la=2e3,ma=10;d.context.Context=e}(a.ADB.core,a.ADB.va,a.ADB.va.utils,b),function(a){"use strict";function b(a,b){this.trackingServer=a,this.publisher=b,this.ssl=!1,this.ovp=c,this.sdk=c,this.quietMode=!1,this.debugLogging=!1,this.__isPrimetime=!1,this.__psdkVersion=null}var c="unknown";a.AdobeHeartbeatPluginConfig=b}(b),function(a){"use strict";function b(){}b.prototype.onError=function(a){},b.prototype.onTrackingDisabled=function(){},a.AdobeHeartbeatPluginDelegate=b}(b),function(a,b,c){"use strict";function d(a){d.__super__.constructor.call(this,q),this._radio=new i(this._logger),this._channel=this._radio.channel(y),this._delegate=a,this._context=new l(this._channel,this._logger),this._filter=new m(this._channel,this._logger),this._network=new n(this._channel,this._logger),this._setupDataResolver()}var e=a.Event,f=a.Trigger,g=a.plugin.BasePlugin,h=a.plugin.ParamMapping,i=a.radio.Radio,j=b.ErrorInfo,k=b.Version,l=c.context.Context,m=c.filter.ReportFilter,n=c.network.Network,o=c.clock.Clock,p=c.AdobeHeartbeatPluginConfig;a.extend(d,g),d.prototype.configure=function(a){if(!a)throw new Error("Reference to the configuration data cannot be NULL.");if(!(a instanceof p))throw new Error("Expected config data to be instance of AdobeHeartbeatPluginConfig.");this._config=a,this._config.debugLogging?this._logger.enable():this._logger.disable(),this._logger.debug(this._logTag,"#configure({trackingServer="+this._config.trackingServer+", publisher="+this._config.publisher+", quietMode="+this._config.quietMode+", ssl="+this._config.ssl+"})");var b=this._config.trackingServer+"/settings/",c={};c[ja]=this._config.trackingServer,c[ka]=b,c[la]=this._config.publisher,c[ma]=this._config.quietMode,c[na]=this._config.ssl,this._channel.trigger(new e(sa,c)),this._isConfigured=!0},d.prototype.bootstrap=function(a){d.__super__.bootstrap.call(this,a),this._channel.on(z,this._onError,this),this._clock=new o(this._pluginManager,this._channel,this._logger),this._channel.command(Ra),this._channel.trigger(new e(Ya)),this._channel.on(pa,this._onCheckStatusComplete,this),this._registerCommands(),this._registerBehaviours()},d.prototype._teardown=function(){this._logger.debug(this._logTag,"#_teardown()"),this._radio.shutdown(),this._context.destroy(),this._clock.destroy(),this._filter.destroy(),this._network.destroy()},d.prototype._canProcess=function(){return this._isConfigured?this._errorInfo?(this._logger.error(this._logTag,"_canProcess() > Plugin in ERROR state."),!1):d.__super__._canProcess.call(this):(this._logger.error(this._logTag,"_canProcess() > Plugin not configured."),!1)},d.prototype._cmdAnalyticsError=function(a){this._errorInfo||(this._errorInfo=new j("Internal error","AdobeAnalyticsPlugin is in ERROR state."),this._trigger(z,this._errorInfo),this._delegate&&this._delegate.onError(this._errorInfo))},d.prototype._cmdAnalyticsStart=function(a){this._canProcess()&&this._channel.trigger(new e(qa,a))},d.prototype._cmdAnalyticsAdStart=function(a){this._canProcess()&&this._channel.trigger(new e(ra,a))},d.prototype._cmdVideoLoad=function(a){this._errorInfo=null,this._canProcess()&&(this._isTrackingSessionActive&&this._channel.trigger(new e(ua,a)),this._isTrackingSessionActive=!1,this._isPaused=!0,this._isSeeking=!1,this._isBuffering=!1,this._isVideoIdle=!1,this._filter.clear(),this._channel.trigger(new e(ta,a)),this._isTrackingSessionActive=!0)},d.prototype._cmdVideoUnload=function(a){this._errorInfo=null,this._canProcess()&&(this._channel.trigger(new e(ua,a)),this._filter.flush(),this._runReportingTimer(!1),this._runFlushFilterTimer(!1),this._runIdleTimer(!1),this._isTrackingSessionActive=!1)},d.prototype._cmdBeginReporting=function(a){this._canProcess()&&this._channel.trigger(new e(Pa,{}))},d.prototype._cmdVideoSessionEnd=function(a){this._canProcess()&&this._channel.trigger(new e(za,a))},d.prototype._cmdVideoStart=function(a){this._canProcess()&&(this._channel.trigger(new e(va,a)),this._filter.flush())},d.prototype._cmdVideoComplete=function(a){this._canProcess()&&this._channel.trigger(new e(wa,a))},d.prototype._cmdVideoSkip=function(a){this._canProcess()&&this._channel.trigger(new e(xa,a))},d.prototype._cmdVideoResume=function(a){this._canProcess()&&this._channel.trigger(new e(ya,a))},d.prototype._cmdPlay=function(a){this._canProcess()&&(this._isPaused=!1,this._resumePlaybackIfPossible(a))},d.prototype._cmdPause=function(a){this._canProcess()&&(this._channel.trigger(new e(Ga,a)),this._isPaused=!0,this._runIdleTimer(!0))},d.prototype._cmdAdBreakStart=function(a){this._canProcess()&&this._channel.trigger(new e(Aa,a))},d.prototype._cmdAdBreakComplete=function(a){this._canProcess()&&(this._channel.trigger(new e(Ba,a)),this._resumePlaybackIfPossible(a))},d.prototype._cmdAdStart=function(a){this._canProcess()&&(this._channel.trigger(new e(Ca,a)),this._resumePlaybackIfPossible(a))},d.prototype._cmdAdComplete=function(a){this._canProcess()&&this._channel.trigger(new e(Da,a))},d.prototype._cmdAdSkip=function(a){this._canProcess()&&this._channel.trigger(new e(Ea,a))},d.prototype._cmdBufferStart=function(a){this._canProcess()&&(this._channel.trigger(new e(Ha,a)),this._isBuffering=!0,this._runIdleTimer(!0))},d.prototype._cmdBufferComplete=function(a){this._canProcess()&&(this._isBuffering=!1,this._isPaused?this._channel.trigger(new e(Ga,a)):this._resumePlaybackIfPossible(a))},d.prototype._cmdSeekStart=function(a){this._canProcess()&&(this._channel.trigger(new e(Ga,a)),this._isSeeking=!0,this._runIdleTimer(!0))},d.prototype._cmdSeekComplete=function(a){this._canProcess()&&(this._isSeeking=!1,this._resumePlaybackIfPossible(a))},d.prototype._cmdChapterStart=function(a){this._canProcess()&&this._channel.trigger(new e(Ia,a))},d.prototype._cmdChapterComplete=function(a){this._canProcess()&&this._channel.trigger(new e(Ja,a))},d.prototype._cmdChapterSkip=function(a){this._canProcess()&&this._channel.trigger(new e(Ka,a))},d.prototype._cmdBitrateChange=function(a){this._canProcess()&&this._channel.trigger(new e(Na,a))},d.prototype._cmdTrackError=function(a){this._canProcess()&&this._channel.trigger(new e(La,a))},d.prototype._cmdClockReportingTick=function(a){this._canProcess()&&this._channel.trigger(new e(Oa,a))},d.prototype._onCheckStatusComplete=function(a){if(this._canProcess()){var b=!1;a&&a.data&&a.data[oa]&&(b=a.data[oa]),this._logger.debug(this._logTag,"#_onCheckStatusComplete(trackingDisabled="+b+")"),b&&this._delegate&&this._delegate.onTrackingDisabled()}},d.prototype._cmdIdleTick=function(a){this._canProcess()&&(this._isVideoIdle=!0,this._trigger(aa),this._channel.trigger(new e(za,a)),this._filter.flush(),this._runReportingTimer(!1),this._runFlushFilterTimer(!1),this._runIdleTimer(!1),this._trigger($))},d.prototype._onError=function(a){this._errorInfo=a.data;var b={};b[ha]=Qa,b[ia]=this._errorInfo.getMessage()+"|"+this._errorInfo.getDetails(),this._channel.trigger(new e(Ma,b)),this._runReportingTimer(!1),this._trigger(z,this._errorInfo),this._delegate&&this._delegate.onError(this._errorInfo)},d.prototype._runIdleTimer=function(a){var b={};b[ga]=!0,a?this._channel.command(Wa,b):this._channel.command(Xa,b)},d.prototype._runFlushFilterTimer=function(a){var b={};b[ga]=!0,a?this._channel.command(Ua,b):this._channel.command(Va,b)},d.prototype._runReportingTimer=function(a){var b={};b[ga]=!0,a?this._channel.command(Sa,b):this._channel.command(Ta,b)},d.prototype._registerCommands=function(){this._pluginManager.comply(this,"handleAnalyticsError",this._cmdAnalyticsError),this._pluginManager.comply(this,"handleAnalyticsStart",this._cmdAnalyticsStart),this._pluginManager.comply(this,"handleAnalyticsAdStart",this._cmdAnalyticsAdStart),this._pluginManager.comply(this,"handleVideoLoad",this._cmdVideoLoad),this._pluginManager.comply(this,"handleVideoUnload",this._cmdVideoUnload),this._pluginManager.comply(this,"handleBeginReporting",this._cmdBeginReporting),this._pluginManager.comply(this,"handleVideoSessionEnd",this._cmdVideoSessionEnd),this._pluginManager.comply(this,"handleVideoStart",this._cmdVideoStart),this._pluginManager.comply(this,"handleVideoComplete",this._cmdVideoComplete),this._pluginManager.comply(this,"handleVideoSkip",this._cmdVideoSkip),this._pluginManager.comply(this,"handleVideoResume",this._cmdVideoResume),this._pluginManager.comply(this,"handlePlay",this._cmdPlay),this._pluginManager.comply(this,"handlePause",this._cmdPause),this._pluginManager.comply(this,"handleAdBreakStart",this._cmdAdBreakStart),this._pluginManager.comply(this,"handleAdBreakComplete",this._cmdAdBreakComplete),this._pluginManager.comply(this,"handleAdStart",this._cmdAdStart),this._pluginManager.comply(this,"handleAdComplete",this._cmdAdComplete),this._pluginManager.comply(this,"handleAdSkip",this._cmdAdSkip),this._pluginManager.comply(this,"handleBufferStart",this._cmdBufferStart),this._pluginManager.comply(this,"handleBufferComplete",this._cmdBufferComplete),this._pluginManager.comply(this,"handleSeekStart",this._cmdSeekStart),this._pluginManager.comply(this,"handleSeekComplete",this._cmdSeekComplete),this._pluginManager.comply(this,"handleChapterStart",this._cmdChapterStart),this._pluginManager.comply(this,"handleChapterComplete",this._cmdChapterComplete),this._pluginManager.comply(this,"handleChapterSkip",this._cmdChapterSkip),this._pluginManager.comply(this,"handleBitrateChange",this._cmdBitrateChange),this._pluginManager.comply(this,"handleTrackError",this._cmdTrackError),this._pluginManager.comply(this,"handleClockReportingTick",this._cmdClockReportingTick),this._pluginManager.comply(this,"handleIdleTick",this._cmdIdleTick)},d.prototype._registerBehaviours=function(){this._pluginManager.registerBehaviour(new f(t,C),this,"handleVideoLoad",[new h(s,"rsid","rsid"),new h(s,"tracking_server","trackingServer")]),this._pluginManager.registerBehaviour(new f(t,D),this,"handleVideoUnload"),this._pluginManager.registerBehaviour(new f(t,ba),this,"handleBeginReporting"),this._pluginManager.registerBehaviour(new f(t,E),this,"handleVideoSessionEnd",[new h(t,"video.playhead","playhead")]),this._pluginManager.registerBehaviour(new f(t,F),this,"handleVideoStart",[new h(t,"video.id","videoId"),new h(t,"video.name","videoName"),new h(t,"video.length","videoLength"),new h(t,"video.playhead","playhead"),new h(t,"video.playerName","playerName"),new h(t,"video.streamType","streamType"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime"),new h(s,"rsid","rsid"),new h(s,"tracking_server","trackingServer"),new h(s,"channel","channel"),new h(s,"meta.video.*","metaVideo"),new h(s,"ssl","useSsl"),new h(u,"meta","metaNielsen"),new h(r,"publisher","publisher"),new h(r,"sdk","sdk"),new h(r,"ovp","ovp"),new h(r,"version","version"),new h(r,"api_level","apiLvl")]),this._pluginManager.registerBehaviour(new f(t,H),this,"handleVideoComplete",[new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,I),this,"handleVideoSkip",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,G),this,"handleVideoResume",[new h(t,"video.id","videoId"),new h(t,"video.name","videoName"),new h(t,"video.length","videoLength"),new h(t,"video.playhead","playhead"),new h(t,"video.playerName","playerName"),new h(t,"video.streamType","streamType")]),this._pluginManager.registerBehaviour(new f(t,J),this,"handlePlay",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,K),this,"handlePause",[new h(t,"video.playhead","playhead"),new h(t,"video.playheadStalled","playheadStalled"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,M),this,"handleAdBreakStart",[new h(t,"ad.isInAdBreak","isInAdBreak"),new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,N),this,"handleAdBreakComplete",[new h(t,"ad.isInAdBreak","isInAdBreak"),new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,O),this,"handleAdStart",[new h(t,"video.playhead","playhead"),new h(t,"ad.id","adId"),new h(t,"ad.name","adName"),new h(t,"ad.length","adLength"),new h(t,"ad.position","adPosition"),new h(t,"ad.granularTracking","adGranularTracking"),new h(t,"ad.trackingInterval","adTrackingInterval"),new h(t,"pod.name","podName"),new h(t,"pod.playerName","podPlayerName"),new h(t,"pod.position","podPosition"),new h(t,"pod.startTime","podSecond"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime"),new h(s,"meta.video.*","metaVideo"),new h(s,"meta.ad.*","metaAd"),new h(u,"meta","metaNielsen"),new h(u,"metaAd","metaAdNielsen")]),this._pluginManager.registerBehaviour(new f(t,P),this,"handleAdComplete",[new h(t,"video.playhead","playhead"),new h(t,"ad.isInAdBreak","isInAdBreak"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,Q),this,"handleAdSkip",[new h(t,"video.playhead","playhead"),new h(t,"ad.isInAdBreak","isInAdBreak"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,R),this,"handleBufferStart",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,S),this,"handleBufferComplete",[new h(t,"video.playhead","playhead"),new h(t,"video.playheadStalled","playheadStalled"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,T),this,"handleSeekStart",[new h(t,"video.playhead","playhead")]),this._pluginManager.registerBehaviour(new f(t,U),this,"handleSeekComplete",[new h(t,"video.playhead","playhead"),new h(t,"ad.isInAd","isInAd"),new h(t,"ad.id","adId"),new h(t,"ad.position","adPosition"),new h(t,"pod.playerName","podPlayerName"),new h(t,"pod.position","podPosition"),new h(t,"chapter.isInChapter","isInChapter"),new h(t,"chapter.position","chapterPosition"),new h(t,"chapter.name","chapterName"),new h(t,"chapter.length","chapterLength"),new h(t,"chapter.startTime","chapterOffset"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,V),this,"handleChapterStart",[new h(t,"video.playhead","playhead"),new h(t,"chapter.position","chapterPosition"),new h(t,"chapter.name","chapterName"),new h(t,"chapter.length","chapterLength"),new h(t,"chapter.startTime","chapterOffset"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime"),new h(s,"meta.video.*","metaVideo"),new h(s,"meta.chapter.*","metaChapter"),new h(u,"meta","metaNielsen")]),this._pluginManager.registerBehaviour(new f(t,W),this,"handleChapterComplete",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,X),this,"handleChapterSkip",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,Y),this,"handleBitrateChange",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,Z),this,"handleTrackError"),this._pluginManager.registerBehaviour(new f(v,da),this,"handleClockReportingTick",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(t,L),this,"handleClockReportingTick",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(v,fa),this,"handleIdleTick",[new h(t,"video.playhead","playhead")]),this._pluginManager.registerBehaviour(new f(r,aa),this,"handleClockReportingTick",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(s,z),this,"handleAnalyticsError"),this._pluginManager.registerBehaviour(new f(s,A),this,"handleAnalyticsStart",[new h(s,"vid","vid"),new h(s,"aid","aid"),new h(s,"mid","mid"),new h(s,"customerIDs","customerIDs"),new h(s,"blob","blob"),new h(s,"loc_hint","loc_hint"),new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")]),this._pluginManager.registerBehaviour(new f(s,B),this,"handleAnalyticsAdStart",[new h(t,"video.playhead","playhead"),new h(t,"qos.fps","fps"),new h(t,"qos.droppedFrames","droppedFrames"),new h(t,"qos.bitrate","bitrate"),new h(t,"qos.startupTime","startupTime")])},d.prototype._setupDataResolver=function(){var a={},b=this;a.version=function(){return k.getVersion()},a.api_level=function(){return k.getApiLevel()},a.tracking_server=function(){return b._config?b._config.trackingServer:null},a.publisher=function(){return b._config?b._config.publisher:null},a.quiet_mode=function(){return!!b._config&&b._config.quietMode},a.ovp=function(){return b._config?b._config.ovp:null},a.sdk=function(){return b._config?b._config.sdk:null},a.is_primetime=function(){return!!b._config&&b._config.__isPrimetime},a.psdk_version=function(){return b._config?b._config.__psdkVersion:null},a.session_id=function(){return b._channel.request(w)},this._dataResolver=function(b){if(!b||0==b.length)return null;for(var c=null,d=0;d<b.length;d++){var e=b[d];c=c||{},c[e]=a.hasOwnProperty(e)?a[e].call(this):null}return c}},d.prototype._resumePlaybackIfPossible=function(a){this._errorInfo||this._isPaused||this._isSeeking||this._isBuffering||(this._isVideoIdle?(this._isVideoIdle=!1,this._resumePlaybackFromIdle()):this._channel.trigger(new e(Fa,a)),this._runIdleTimer(!1))},d.prototype._resumePlaybackFromIdle=function(){this._trigger(aa),this._filter.clear(),this._channel.trigger(new e(x)),this._trigger(_),this._runReportingTimer(!0),this._runFlushFilterTimer(!0)};var q="adobe-heartbeat",r=q,s="adobe-analytics",t="player",u="nielsen",v="service.clock",w="session_id",x="reset_session_id",y="heartbeat-channel",z="error",A="aa_start",B="sc_ad_start",C="video_load",D="video_unload",E="video_session_end",F="video_start",G="video_resume",H="video_complete",I="video_skip",J="play",K="pause",L="content_start",M="adbreak_start",N="adbreak_complete",O="ad_start",P="ad_complete",Q="ad_skip",R="buffer_start",S="buffer_complete",T="seek_start",U="seek_complete",V="chapter_start",W="chapter_complete",X="chapter_skip",Y="bitrate_change",Z="track_error",$="video_idle_start",_="video_idle_resume",aa="quantum_close",ba="video_begin_reporting",ca="heartbeat.reporting",da=ca+".tick",ea="heartbeat.idle",fa=ea+".tick",ga="reset",ha="source",ia="error_id",ja="tracking_server",ka="check_status_server",la="publisher",ma="quiet_mode",na="ssl",oa="tracking_disabled",pa="net:check_status_complete",qa="api:aa_start",ra="api:aa_ad_start",sa="api:config",ta="api:video_load",ua="api:video_unload",va="api:video_start",wa="api:video_complete",xa="api:video_skip",ya="api:video_resume",za="api:video_session_end",Aa="api:adbreak_start",Ba="api:adbreak_complete",Ca="api:ad_start",Da="api:ad_complete",Ea="api:ad_skip",Fa="api:play",Ga="api:pause",Ha="api:buffer_start",Ia="api:chapter_start",Ja="api:chapter_complete",Ka="api:chapter_skip",La="api:track_error",Ma="api:track_internal_error",Na="api:bitrate_change",Oa="api:quantum_end",Pa="api:video_begin_reporting",Qa="sourceErrorHeartbeat",Ra="clock:check_status.resume",Sa="clock:reporting.resume",Ta="clock:reporting.pause",Ua="clock:flush_filter.resume",Va="clock:flush_filter.pause",Wa="clock:idle.resume",Xa="clock:idle.pause",Ya="clock:check_status.get_settings";c.AdobeHeartbeatPlugin=d}(a.ADB.core,a.ADB.va,b),a.ADB.va.plugins.ah||(a.ADB.va.plugins.ah=b)}(this);

// AdobeAnalyticsPlugin
!function(a){if(void 0===b)var b={};!function(a,b){"use strict";function c(a,b){this._onFail={fn:a,ctx:b}}var d=a.ErrorInfo;c.prototype.validateFields=function(a,b){if(!a)return this._fail("Data cannot be null");if(b)for(var c=0;c<b.length;c++){var d=b[c];switch(d){case"videoId":if(!a.hasOwnProperty("videoId"))return this._fail("The ID for the main video must be specified.");if("string"!=typeof a.videoId)return this._fail("The ID for the main video must be a String.");if(""===a.videoId)return this._fail("The ID for the main video cannot be an empty string.");break;case"mediaType":if(!a.hasOwnProperty("mediaType"))return this._fail("The media type for the main video must be specified.");if("string"!=typeof a.mediaType)return this._fail("The media type for the main video must be a String.");if(""===a.mediaType)return this._fail("The stream type for the main video cannot be an empty string.");break;case"streamType":if(!a.hasOwnProperty("streamType"))return this._fail("The stream type for the main video must be specified.");if("string"!=typeof a.streamType)return this._fail("The stream type for the main video must be a String.");if(""===a.streamType)return this._fail("The stream type for the main video cannot be an empty string.");break;case"playerName":if(!a.hasOwnProperty("playerName"))return this._fail("The player name for the main video must be specified.");if("string"!=typeof a.playerName)return this._fail("The player name for the main video must be a String.");if(""===a.playerName)return this._fail("The player name for the main video cannot be an empty string.");break;case"videoLength":if(!a.hasOwnProperty("videoLength"))return this._fail("The length of the main video must be specified.");if("number"!=typeof a.videoLength)return this._fail("The length of the main video must be a Number.");if(isNaN(a.videoLength))return this._fail("The length of the main video cannot be NaN.");break;case"podPlayerName":if(!a.hasOwnProperty("podPlayerName"))return this._fail("The player name for the ad-break must be specified.");if("string"!=typeof a.podPlayerName)return this._fail("The player name for the ad-break must be a String.");if(""===a.podPlayerName)return this._fail("The player name for the ad-break cannot be an empty string.");break;case"podPosition":if(!a.hasOwnProperty("podPosition"))return this._fail("Position (index) of the ad-break must be specified.");if("number"!=typeof a.podPosition)return this._fail("Position (index) of the ad-break must be a Number.");if(isNaN(a.podPosition))return this._fail("Position (index) of the ad-break cannot be NaN.");break;case"adId":if(!a.hasOwnProperty("adId"))return this._fail("The ad ID must be specified.");if("string"!=typeof a.adId)return this._fail("The ad ID must be a String.");if(""===a.adId)return this._fail("The ad ID cannot be an empty string.");break;case"adPosition":if(!a.hasOwnProperty("adPosition"))return this._fail("Position (index) of the ad must be specified.");if("number"!=typeof a.adPosition)return this._fail("Position (index) of the ad must be a Number.");if(isNaN(a.adPosition))return this._fail("Position (index) of the ad cannot be NaN.");break;case"adLength":if(!a.hasOwnProperty("adLength"))return this._fail("The length of the ad must be specified.");if("number"!=typeof a.adLength)return this._fail("The length of the ad must be a Number.");if(isNaN(a.adLength))return this._fail("The length of the ad cannot be NaN.");break;default:return this._fail("Unable to validate unknown parameter: "+d)}}return!0},c.prototype._fail=function(a){var b=new d("Invalid input data",a);return this._onFail.fn&&this._onFail.fn.call(this._onFail.ctx,b),!1},b.InputDataValidator=c}(a.ADB.va,b),function(a){"use strict";function b(){this.channel=c,this.debugLogging=!1}var c="";a.AdobeAnalyticsPluginConfig=b}(b),function(a){"use strict";function b(){}b.prototype.onError=function(a){},a.AdobeAnalyticsPluginDelegate=b}(b),function(a,b,c,d){"use strict";function e(a){this._aaPlugin=a}function f(a,b){if(f.__super__.constructor.call(this,s),!a)throw new Error("The reference to the AppMeasurement object cannot be NULL.");if(a.unsupportedBrowser)throw new Error("AppMeasurement is not supported in current browser.");this._appMeasurement=a,this._appMeasurementBridge=new e(this),this._delegate=b,this._videoMetadata={},this._adMetadata={},this._chapterMetadata={},this._errorInfo=null,this._appMeasurementReady=!1,this._beginReporting=!1,this._workQueue=new l(!0,x),this._inputDataValidator=new r(function(a){this._errorInfo=a,this._logger.error(this._logTag,a.getMessage()+" | "+a.getDetails());var b=this;setTimeout(function(){b._trigger(y,a),b._delegate&&b._delegate.onError(b._errorInfo)},0)},this),this._appMeasurement.isReadyToTrack(),this._setupDataResolver()}var g=a.Trigger,h=a.plugin.BasePlugin,i=a.plugin.ParamMapping,j=a.radio.Channel,k=a.radio.Command,l=a.radio.CommandQueue,m=b.ErrorInfo,n=c.md5,o=c.StringUtils,p=c.ObjectUtils,q=d.AdobeAnalyticsPluginConfig,r=d.InputDataValidator;e.prototype.onAppMeasurementReady=function(){this._aaPlugin&&this._aaPlugin._onAppMeasurementReady()},e.prototype.release=function(){this._aaPlugin=null},a.extend(f,h),f.prototype.configure=function(a){if(!a)throw new Error("Reference to the configuration data cannot be NULL.");if(!(a instanceof q))throw new Error("Expected config data to be instance of AdobeAnalyticsPluginConfig.");this._config=a,this._config.debugLogging?this._logger.enable():this._logger.disable(),this._logger.debug(this._logTag,"#configure({trackingServer="+this._config.debugLogging+", channel="+this._config.channel+", ssl="+this._appMeasurement.ssl+"})")},f.prototype.bootstrap=function(a){f.__super__.bootstrap.call(this,a),this._registerCommands(),this._registerBehaviours()},f.prototype.setup=function(){this._appMeasurement.isReadyToTrack()?this._onAppMeasurementReady():this._appMeasurement.callbackWhenReadyToTrack(this._appMeasurementBridge,this._appMeasurementBridge.onAppMeasurementReady,[]),f.__super__.setup.call(this)},f.prototype.setVideoMetadata=function(a){this._videoMetadata=p.clone(a)},f.prototype.setAdMetadata=function(a){this._adMetadata=p.clone(a)},f.prototype.setChapterMetadata=function(a){this._chapterMetadata=p.clone(a)},f.prototype._teardown=function(){this._logger.debug(this._logTag,"#_teardown()"),this._appMeasurementBridge.release()},f.prototype._canProcess=function(){return this._errorInfo?(this._logger.error(this._logTag,"#_canProcess() > In ERROR state."),!1):f.__super__._canProcess.call(this)},f.prototype._cmdVideoLoad=function(a){this._errorInfo=null},f.prototype._cmdBeginReporting=function(a){this._logger.debug(this._logTag,"#_cmdBeginReporting()"),this._beginReporting=!0,this._resumeWorkQueue()},f.prototype._cmdVideoStart=function(a){this._logger.debug(this._logTag,"#_cmdVideoStart()"),this._canProcess()&&this._workQueue.addCommand(new k(this._executeOpen,this,[a]))},f.prototype._cmdAdStart=function(a){this._logger.debug(this._logTag,"#_cmdAdStart()"),this._canProcess()&&this._workQueue.addCommand(new k(this._executeOpenAd,this,[a]))},f.prototype._cmdHeartbeatPluginError=function(a){this._errorInfo||(this._errorInfo=new m("Internal error","HeartbeatPlugin is in ERROR state."),this._trigger(y,this._errorInfo),this._delegate&&this._delegate.onError(this._errorInfo))},f.prototype._track=function(a){try{var b=this._appMeasurement.linkTrackVars;this._appMeasurement.linkTrackVars="",this._appMeasurement.track(a),this._appMeasurement.linkTrackVars=b}catch(a){this._logger.warn(this._logTag,"appMeasurement.track() call threw an exception.")}},f.prototype._executeOpen=function(a){if(this._logger.debug(this._logTag,"#_executeOpen(id="+a.videoId+", videoName="+a.videoName+", mediaType="+a.mediaType+", streamType="+a.streamType+", length="+a.videoLength+", playerName="+a.playerName+", channel="+a.channel+", isPrimetime="+a.isPrimetime+", sessionId="+a.sessionId+")"),this._canProcess()&&this._inputDataValidator.validateFields(a,["videoId","mediaType","streamType","videoLength","playerName"])){var b={};for(var c in a.metaVideo)a.metaVideo.hasOwnProperty(c)&&(b[c]=a.metaVideo[c]);if(a.metaNielsen)for(var c in a.metaNielsen)a.metaNielsen.hasOwnProperty(c)&&(b[c]=a.metaNielsen[c]);b["a.contentType"]=a.streamType,b["a.media.name"]=a.videoId,b["a.media.friendlyName"]=a.videoName||"",b["a.media.length"]=Math.floor(a.videoLength)||"0.0",b["a.media.playerName"]=a.playerName,b["a.media.channel"]=a.channel||"",b["a.media.view"]=!0,b["a.media.vsid"]=a.sessionId;var d={};d.contextData=b,"audio"===a.mediaType?(d.pev3=B,d.ms_a="1"):d.pev3=z,d.pe=a.isPrimetime?E:D,this._track(d);var e=this;setTimeout(function(){e._trigger(H,a)},0)}},f.prototype._executeOpenAd=function(a){var b=n(a.videoId)+"_"+a.podPosition;if(this._logger.debug(this._logTag,"#_executeOpenAd(id="+a.adId+", mediaType="+a.mediaType+", streamType="+a.streamType+", length="+a.adLength+", podPlayerName="+a.podPlayerName+", parentId="+a.videoId+", podId="+b+", parentPodPosition="+a.adPosition+", podSecond="+a.podSecond+")"),this._canProcess()&&this._inputDataValidator.validateFields(a,["videoId","mediaType","streamType","playerName","adId","adLength","podPlayerName","adPosition"])){a.podSecond=null==a.podSecond||isNaN(a.podSecond)?a.playhead:a.podSecond;var c,d={};for(c in a.metaVideo)a.metaVideo.hasOwnProperty(c)&&(d[c]=a.metaVideo[c]);for(c in a.metaAd)a.metaAd.hasOwnProperty(c)&&(d[c]=a.metaAd[c]);if(a.metaNielsen)for(var c in a.metaNielsen)a.metaNielsen.hasOwnProperty(c)&&(d[c]=a.metaNielsen[c]);d["a.contentType"]=a.streamType,d["a.media.name"]=a.videoId,d["a.media.playerName"]=a.playerName,d["a.media.channel"]=a.channel||"",d["a.media.vsid"]=a.sessionId,d["a.media.friendlyName"]=a.videoName||"",d["a.media.length"]=Math.floor(a.videoLength)||"0.0",d["a.media.ad.name"]=a.adId,d["a.media.ad.friendlyName"]=a.adName||"",d["a.media.ad.podFriendlyName"]=a.podName||"",d["a.media.ad.length"]=Math.floor(a.adLength)||"0.0",d["a.media.ad.playerName"]=a.podPlayerName,d["a.media.ad.pod"]=b,d["a.media.ad.podPosition"]=Math.floor(a.adPosition)||"0.0",d["a.media.ad.podSecond"]=Math.floor(a.podSecond)||"0.0",d["a.media.ad.view"]=!0;var e={};e.contextData=d,"audio"===a.mediaType?(e.pev3=C,e.ms_a="1"):e.pev3=A,e.pe=a.isPrimetime?G:F,this._track(e);var f=this;setTimeout(function(){f._trigger(I,a)},0)}},f.prototype._setupDataResolver=function(){var a={},b=this;a.rsid=function(){return b._appMeasurement.account},a.tracking_server=function(){return b._appMeasurement.ssl&&b._appMeasurement.trackingServerSecure?b._appMeasurement.trackingServerSecure:b._appMeasurement.trackingServer},a.ssl=function(){return b._appMeasurement.ssl},a.vid=function(){return b._appMeasurement.visitorID},a.aid=function(){return b._appMeasurement.analyticsVisitorID},a.mid=function(){return b._appMeasurement.marketingCloudVisitorID},a.blob=function(){return b._appMeasurement.audienceManagerBlob},a.loc_hint=function(){return b._appMeasurement.audienceManagerLocationHint?parseInt(b._appMeasurement.audienceManagerLocationHint):""},a.customerIDs=function(){var a={},c=b._appMeasurement.visitor.getCustomerIDs();for(var d in c)if(c.hasOwnProperty(d)){var e=c[d];if("object"==typeof e){for(var f in e)e.hasOwnProperty(f)&&("authState"==f?a[d+".as"]=e[f]:a[d+"."+f]=e[f]);a[d+".as"]||(a[d+".as"]="0")}}return a},a.channel=function(){return b._config?b._config.channel:null},a.meta=function(a){var c=a.split(".");if(c.length<2)return null;var d=c.shift();switch(a=c.join("."),d){case"video":return a==j.WILDCARD?b._videoMetadata:b._videoMetadata[a];case"ad":return a==j.WILDCARD?b._adMetadata:b._adMetadata[a];case"chapter":return a==j.WILDCARD?b._chapterMetadata:b._chapterMetadata[a];default:return null}},this._dataResolver=function(b){if(!b||0==b.length)return null;for(var c=null,d=0;d<b.length;d++){var e=b[d];c=c||{},o.startsWith(e,"meta.")?c[e]=a.meta(e.split("meta.")[1]):c[e]=a.hasOwnProperty(e)?a[e].call(this):null}return c}},f.prototype._registerCommands=function(){this._pluginManager.comply(this,"handleVideoLoad",this._cmdVideoLoad),this._pluginManager.comply(this,"handleBeginReporting",this._cmdBeginReporting),this._pluginManager.comply(this,"handleVideoStart",this._cmdVideoStart),this._pluginManager.comply(this,"handleAdStart",this._cmdAdStart),this._pluginManager.comply(this,"handleHeartbeatPluginError",this._cmdHeartbeatPluginError)},f.prototype._registerBehaviours=function(){this._pluginManager.registerBehaviour(new g(v,J),this,"handleVideoLoad"),this._pluginManager.registerBehaviour(new g(v,M),this,"handleBeginReporting"),this._pluginManager.registerBehaviour(new g(v,K),this,"handleVideoStart",[new i(v,"video.id","videoId"),new i(v,"video.mediaType","mediaType"),new i(v,"video.streamType","streamType"),new i(v,"video.name","videoName"),new i(v,"video.length","videoLength"),new i(v,"video.playerName","playerName"),new i(v,"video.streamType","streamType"),new i(w,"is_primetime","isPrimetime"),new i(w,"session_id","sessionId"),new i(t,"channel","channel"),new i(t,"meta.video.*","metaVideo"),new i(u,"meta","metaNielsen")]),this._pluginManager.registerBehaviour(new g(v,L),this,"handleAdStart",[new i(v,"video.id","videoId"),new i(v,"video.mediaType","mediaType"),new i(v,"video.streamType","streamType"),new i(v,"video.playhead","playhead"),new i(v,"video.playerName","playerName"),new i(v,"video.name","videoName"),new i(v,"video.length","videoLength"),new i(v,"ad.id","adId"),new i(v,"ad.length","adLength"),new i(v,"ad.position","adPosition"),new i(v,"ad.name","adName"),new i(v,"pod.name","podName"),new i(v,"pod.position","podPosition"),new i(v,"pod.playerName","podPlayerName"),new i(v,"pod.startTime","podSecond"),new i(w,"is_primetime","isPrimetime"),new i(w,"session_id","sessionId"),new i(t,"channel","channel"),new i(t,"meta.video.*","metaVideo"),new i(t,"meta.ad.*","metaAd"),new i(u,"meta","metaNielsen")]),this._pluginManager.registerBehaviour(new g(w,y),this,"handleHeartbeatPluginError")},f.prototype._onAppMeasurementReady=function(){this._logger.debug(this._logTag,"#_onAppMeasurementReady"),this._appMeasurementReady=!0,this._resumeWorkQueue()},f.prototype._resumeWorkQueue=function(){this._appMeasurementReady&&this._beginReporting&&(this._logger.debug(this._logTag,"#_resumeWorkQueue"),this._workQueue.resume())};var s="adobe-analytics",t=s,u="nielsen",v="player",w="adobe-heartbeat",x=2e3,y="error",z="video",A="videoAd",B="audio",C="audioAd",D="ms_s",E="msp_s",F="msa_s",G="mspa_s",H="aa_start",I="sc_ad_start",J="video_load",K="video_start",L="ad_start",M="video_begin_reporting";d.AdobeAnalyticsPlugin=f}(a.ADB.core,a.ADB.va,a.ADB.va.utils,b),function(a){"use strict";var b={SHOW:"a.media.show",SEASON:"a.media.season",EPISODE:"a.media.episode",ASSET_ID:"a.media.asset",GENRE:"a.media.genre",FIRST_AIR_DATE:"a.media.airDate",FIRST_DIGITAL_DATE:"a.media.digitalDate",RATING:"a.media.rating",ORIGINATOR:"a.media.originator",NETWORK:"a.media.network",SHOW_TYPE:"a.media.type",AD_LOAD:"a.media.adLoad",MVPD:"a.media.pass.mvpd",AUTHORIZED:"a.media.pass.auth",DAY_PART:"a.media.dayPart",FEED:"a.media.feed",STREAM_FORMAT:"a.media.format"},c={ARTIST:"a.media.artist",ALBUM:"a.media.album",LABEL:"a.media.label",AUTHOR:"a.media.author",STATION:"a.media.station",PUBLISHER:"a.media.publisher"},d={ADVERTISER:"a.media.ad.advertiser",CAMPAIGN_ID:"a.media.ad.campaign",CREATIVE_ID:"a.media.ad.creative",PLACEMENT_ID:"a.media.ad.placement",SITE_ID:"a.media.ad.site",CREATIVE_URL:"a.media.ad.creativeURL"};a.VideoMetadataKeys=b,a.AudioMetadataKeys=c,a.AdMetadataKeys=d}(b),a.ADB.va.plugins.aa||(a.ADB.va.plugins.aa=b)}(this);

// MediaHeartbeat
!function(a){!function(a,b){"use strict";function c(){this._processAction=!0,this._store={}}function d(a){if(!a)throw new Error("Reference to the logger object cannot be NULL");this._logger=a,this._rules=[]}c.prototype.setRuleName=function(a){this._ruleName=a},c.prototype.getRuleName=function(a,b){return this._ruleName},c.prototype.setData=function(a,b){this._store[a]=b},c.prototype.getData=function(a){return this._store[a]},c.prototype.shouldProcessAction=function(){return this._processAction},c.prototype.stopProcessingAction=function(){this._processAction=!1},c.prototype.startProcessingAction=function(){this._processAction=!0},d.createContext=function(){return new c},d.createPredicate=function(a,b,c){return{fn:a,expectedValue:b,msg:c}},d.prototype.registerRule=function(a,b,c,d,e){this._rules.push({name:a,desc:b,preconditions:c,actions:d,scope:e})},d.prototype.registerEnterExitAction=function(a,b){this._enterAction=a,this._exitAction=b},d.prototype._handleFailure=function(a,b){this._logger.error(e,a.desc+" -  "+b.msg)},d.prototype._getRule=function(a){for(var b=0;b<this._rules.length;++b)if(this._rules[b].name===a)return this._rules[b];return null},d.prototype.processRule=function(a,b){var c=!0,f=this._getRule(a);if(f){var g=f.scope;b||(b=d.createContext()),b.setRuleName(a);for(var h=!1,i=0;i<f.preconditions.length;++i){var j=f.preconditions[i];if(h=!!j.fn.call(g,b)!==j.expectedValue){this._handleFailure(f,j);break}}if(h)c=!1;else{b.startProcessingAction(),this._enterAction&&this._enterAction.call(g,b);for(var i=0;i<f.actions.length;++i){var k=f.actions[i];if(!b.shouldProcessAction()){this._logger.info(e,"Stopping actions for "+f.desc);break}k.call(g,b)}this._exitAction&&b.shouldProcessAction()&&this._exitAction.call(g,b)}}else this._logger.warn(e,"No registered event found for ruleName "+a),c=!1;return c};var e="RuleEngine";b._RuleEngine=d}(a.ADB.core,a.ADB.va),function(a,b){"use strict";function c(a,b,c){this.taskFn=a,this.scope=b,this.interval=c,this.remainingInterval=c}function d(a){if(!a)throw new Error("Reference to the logger object cannot be NULL");this._logger=a,this._tasks=[],this._pausedTasks=[]}c.prototype.elapsedTime=function(a){this.remainingInterval-=a},c.prototype.shouldExecute=function(){return this.remainingInterval<=0},c.prototype.execute=function(){this.taskFn.call(this.scope)},d.prototype._getCurrentTimeInMS=function(){return(new Date).getTime()},d.prototype._runTasksForTime=function(a){var b=[],c=a-this._lastTickTime;this._lastTickTime=a;for(var d=0;d<this._tasks.length;){var e=this._tasks[d];e.elapsedTime(c),e.shouldExecute()?(b.push(e),this._tasks.splice(d,1)):++d}this._checkStopTimer();for(var d=0;d<b.length;++d)b[d].execute()},d.prototype._onTick=function(){var a=this._getCurrentTimeInMS();this._runTasksForTime(a)},d.prototype._startTimer=function(){var a=this;this._timer||(this._logger.info(e,"#startTimer()"),a._lastTickTime=this._getCurrentTimeInMS(),this._timer=window.setInterval(function(){a._onTick()},f))},d.prototype._stopTimer=function(){this._timer&&(this._logger.info(e,"#stopTimer()"),window.clearInterval(this._timer),this._timer=null)},d.prototype._checkStartTimer=function(){this._tasks.length>0&&this._startTimer()},d.prototype._checkStopTimer=function(){0===this._tasks.length&&this._stopTimer()},d.prototype._removeTask=function(a,b){for(var c=0;c<a.length;++c)if(a[c]===b)return a.splice(c,1),!0;return!1},d.prototype.scheduleTask=function(a,b,d){if(this._logger.info(e,"#scheduleTask()"),!a)throw new Error("Reference to the taskFn cannot be NULL");var f=new c(a,b,d);return this._tasks.push(f),this._checkStartTimer(),f},d.prototype.cancelTask=function(a){this._logger.info(e,"#cancelTask()"),this._removeTask(this._tasks,a),this._checkStopTimer()},d.prototype.pauseTask=function(a){this._logger.info(e,"#pauseTask()"),this._removeTask(this._tasks,a)&&this._pausedTasks.push(a),this._checkStopTimer()},d.prototype.resumeTask=function(a){this._logger.info(e,"#resumeTask()"),this._removeTask(this._pausedTasks,a)&&this._tasks.push(a),this._checkStartTimer()},d.prototype.clearTasks=function(){this._stopTimer(),this._tasks=[],this._pausedTasks=[]};var e="TaskScheduler",f=250;b._TaskScheduler=d}(a.ADB.core,a.ADB.va),function(a){"use strict";function b(){this.trackingServer=void 0,this.channel=void 0,this.ovp=void 0,this.appVersion=void 0,this.playerName=void 0,this.ssl=!1,this.debugLogging=!1}a.MediaHeartbeatConfig=b,a.MediaHeartbeatConfig.sharedInstance=new b}(a.ADB.va),function(a){"use strict";function b(){this.data={}}var c=a.plugins.videoplayer.VideoInfo,d=a.plugins.videoplayer.AdBreakInfo,e=a.plugins.videoplayer.AdInfo,f=a.plugins.videoplayer.ChapterInfo,g=a.plugins.videoplayer.QoSInfo;b.MEDIAINFO_KEY_NAME="a.name",b.MEDIAINFO_KEY_VIDEOID="a.videoId",b.MEDIAINFO_KEY_ADID="a.adId",b.MEDIAINFO_KEY_LENGTH="a.length",b.MEDIAINFO_KEY_PLAYHEAD="a.playhead",b.MEDIAINFO_KEY_MEDIATYPE="a.mediaType",b.MEDIAINFO_KEY_STREAMTYPE="a.streamType",b.MEDIAINFO_KEY_POSITION="a.position",b.MEDIAINFO_KEY_STARTTIME="a.startTime",b.MEDIAINFO_KEY_BITRATE="a.bitrate",b.MEDIAINFO_KEY_FPS="a.fps",b.MEDIAINFO_KEY_DROPPEDFRAMES="a.droppedFrames",b.MEDIAINFO_KEY_STARTUPTIME="a.startupTime",b.MEDIAINFO_KEY_TIMEDMETADATA="a.timedMetadata",b.prototype.setValue=function(a,b){this.data[a]=b},b.prototype.getValue=function(a){return this.data.hasOwnProperty(a)?this.data[a]:null},b.prototype.createVideoInfo=function(){var a=new c;return a.id=null!=this.getValue(b.MEDIAINFO_KEY_VIDEOID)?this.getValue(b.MEDIAINFO_KEY_VIDEOID):"",a.name=null!=this.getValue(b.MEDIAINFO_KEY_NAME)?this.getValue(b.MEDIAINFO_KEY_NAME):"",a.length=null!=this.getValue(b.MEDIAINFO_KEY_LENGTH)?this.getValue(b.MEDIAINFO_KEY_LENGTH):0,a.playhead=null!=this.getValue(b.MEDIAINFO_KEY_PLAYHEAD)?this.getValue(b.MEDIAINFO_KEY_PLAYHEAD):0,a.mediaType=null!=this.getValue(b.MEDIAINFO_KEY_MEDIATYPE)?this.getValue(b.MEDIAINFO_KEY_MEDIATYPE):"",a.streamType=null!=this.getValue(b.MEDIAINFO_KEY_STREAMTYPE)?this.getValue(b.MEDIAINFO_KEY_STREAMTYPE):"",a},b.prototype.createAdBreakInfo=function(){var a=new d;return a.name=null!=this.getValue(b.MEDIAINFO_KEY_NAME)?this.getValue(b.MEDIAINFO_KEY_NAME):"",a.position=null!=this.getValue(b.MEDIAINFO_KEY_POSITION)?this.getValue(b.MEDIAINFO_KEY_POSITION):0,a.startTime=null!=this.getValue(b.MEDIAINFO_KEY_STARTTIME)?this.getValue(b.MEDIAINFO_KEY_STARTTIME):0,a},b.prototype.createAdInfo=function(){var a=new e;return a.id=null!=this.getValue(b.MEDIAINFO_KEY_ADID)?this.getValue(b.MEDIAINFO_KEY_ADID):"",a.name=null!=this.getValue(b.MEDIAINFO_KEY_NAME)?this.getValue(b.MEDIAINFO_KEY_NAME):"",a.length=null!=this.getValue(b.MEDIAINFO_KEY_LENGTH)?this.getValue(b.MEDIAINFO_KEY_LENGTH):0,a.position=null!=this.getValue(b.MEDIAINFO_KEY_POSITION)?this.getValue(b.MEDIAINFO_KEY_POSITION):0,a},b.prototype.createChapterInfo=function(){var a=new f;return a.name=null!=this.getValue(b.MEDIAINFO_KEY_NAME)?this.getValue(b.MEDIAINFO_KEY_NAME):"",a.length=null!=this.getValue(b.MEDIAINFO_KEY_LENGTH)?this.getValue(b.MEDIAINFO_KEY_LENGTH):0,a.startTime=null!=this.getValue(b.MEDIAINFO_KEY_STARTTIME)?this.getValue(b.MEDIAINFO_KEY_STARTTIME):0,a.position=null!=this.getValue(b.MEDIAINFO_KEY_POSITION)?this.getValue(b.MEDIAINFO_KEY_POSITION):0,a},b.prototype.createQoSInfo=function(){var a=new g;return a.bitrate=null!=this.getValue(b.MEDIAINFO_KEY_BITRATE)?this.getValue(b.MEDIAINFO_KEY_BITRATE):0,a.fps=null!=this.getValue(b.MEDIAINFO_KEY_FPS)?this.getValue(b.MEDIAINFO_KEY_FPS):0,a.droppedFrames=null!=this.getValue(b.MEDIAINFO_KEY_DROPPEDFRAMES)?this.getValue(b.MEDIAINFO_KEY_DROPPEDFRAMES):0,a.startupTime=null!=this.getValue(b.MEDIAINFO_KEY_STARTUPTIME)?this.getValue(b.MEDIAINFO_KEY_STARTUPTIME):0,a},b.prototype.isEqual=function(a){if(this===a)return!0;if(!a||"object"!=typeof a||"function"!=typeof a.getValue)return!1;for(var c=[b.MEDIAINFO_KEY_NAME,b.MEDIAINFO_KEY_VIDEOID,b.MEDIAINFO_KEY_ADID,b.MEDIAINFO_KEY_LENGTH,b.MEDIAINFO_KEY_PLAYHEAD,b.MEDIAINFO_KEY_STREAMTYPE,b.MEDIAINFO_KEY_MEDIATYPE,b.MEDIAINFO_KEY_POSITION,b.MEDIAINFO_KEY_STARTTIME,b.MEDIAINFO_KEY_BITRATE,b.MEDIAINFO_KEY_FPS,b.MEDIAINFO_KEY_DROPPEDFRAMES,b.MEDIAINFO_KEY_STARTUPTIME,b.MEDIAINFO_KEY_TIMEDMETADATA],d=0;d<c.length;++d){var e=c[d];if(this.getValue(e)!==a.getValue(e))return!1}return!0},a.MediaObject=b}(a.ADB.va),function(a){"use strict";function b(a,c){if(!c)throw new Error("Visitor instance cannot be NULL");this._visitor=c,this._logger=a,this._status=b.OPT_UNKNOWN,this._optInFetchPermissionsCallback=this._optInFetchPermissionsCallback.bind(this)}var c="PrivacyManager";b.prototype.getStatus=function(){return this._status},b.prototype.configure=function(a){this.reset(),this._callback=a,this._optIn=window.adobe&&window.adobe.optIn?window.adobe.optIn:void 0,this._optIn&&this._optIn.doesOptInApply?(this._logger.info(c,"OptIn service enabled"),this._waitingForOptInCallback=!0,this._optInMediaApproved=!1):this._logger.info(c,"OptIn service does not apply"),this._waitingForVisitorCallback=!0,this._visitorOptOut=!1,this._fetchVisitorOptOut(),this._fetchOptIn(),this._updateStatus()},b.prototype.reset=function(){this._unsubscribeOptIn(),this._status=b.OPT_UNKNOWN,this._callback=null},b.prototype._fetchVisitorOptOut=function(){this._logger.info(c,"Fetching Visitor.isOptedOut");try{var a=this;this._visitor.isOptedOut(function(b){a._logger.info(c,"Visitor.isOptedOut : "+b),a._waitingForVisitorCallback=!1,a._visitorOptOut=b,a._updateStatus()},void 0,!0)}catch(a){this._logger.warn(c,"Error fetching Visitor.isOptedOut"),this._waitingForVisitorCallback=!1}},b.prototype._fetchOptIn=function(){try{if(!this._optIn||!this._optIn.doesOptInApply)return;this._logger.info(c,"Fetching permissions from OptIn service"),this._optInListenerRegistered||(this._optIn.fetchPermissions(this._optInFetchPermissionsCallback,!0),this._optInListenerRegistered=!0)}catch(a){this._logger.warn(c,"Error fetching permissions from OptIn service"),this._waitingForOptInCallback=!1}},b.prototype._unsubscribeOptIn=function(){try{this._optIn&&this._optInListenerRegistered&&(this._optIn.off("complete",this._optInFetchPermissionsCallback),this._optInListenerRegistered=!1)}catch(a){this._logger.error(c,"Error unsubscribing from OptIn service")}},b.prototype._optInFetchPermissionsCallback=function(){this._waitingForOptInCallback=!1;var a=this._optIn.isApproved(this._optIn.Categories.ECID),b=this._optIn.isApproved(this._optIn.Categories.ANALYTICS),d=void 0===this._optIn.Categories.MEDIA_ANALYTICS||this._optIn.isApproved(this._optIn.Categories.MEDIA_ANALYTICS);this._optInMediaApproved=a&&b&&d,this._logger.info(c,"OptIn fetchPermissions ECID : "+a+" Analytics : "+b+" Media : "+d),this._updateStatus()},b.prototype._updateStatus=function(){if(!(this._waitingForVisitorCallback||this._optIn&&this._optIn.doesOptInApply&&this._waitingForOptInCallback)){var a=this._visitorOptOut||this._optIn&&this._optIn.doesOptInApply&&!this._optInMediaApproved,d=a?b.OPT_OUT:b.OPT_IN;if(this._status!==d){this._logger.info(c,"Privacy changed from "+this._status+" to "+d),this._status=d;var e=this;setTimeout(function(){try{e._callback&&e._callback(d)}catch(a){}},0)}}},b.OPT_OUT="optout",b.OPT_IN="optin",b.OPT_UNKNOWN="optunknown",a._PrivacyManager=b}(a.ADB.va),function(a,b){"use strict";function c(a){c.__super__.constructor.call(this),this._heartbeat=a}function d(a){d.__super__.constructor.call(this),this._heartbeat=a}function e(a){e.__super__.constructor.call(this),this._heartbeat=a}function f(a){f.__super__.constructor.call(this),this._heartbeat=a}a.extend(c,b.plugins.aa.AdobeAnalyticsPluginDelegate),c.prototype.onError=function(a){this._heartbeat&&this._heartbeat._onDelegateError(a)},a.extend(d,b.plugins.ah.AdobeHeartbeatPluginDelegate),d.prototype.onError=function(a){this._heartbeat&&this._heartbeat._onDelegateError(a)},d.prototype.onTrackingDisabled=function(){this._heartbeat&&this._heartbeat._onDelegateTrackingDisabled()},a.extend(e,b.HeartbeatDelegate),e.prototype.onError=function(a){this._heartbeat&&this._heartbeat._onDelegateError(a)},a.extend(f,b.plugins.videoplayer.VideoPlayerPluginDelegate),f.prototype.getVideoInfo=function(){return this._heartbeat&&this._heartbeat._videoInfo?(this._heartbeat._delegate&&(this._heartbeat._videoInfo.playhead=this._heartbeat._delegate.getCurrentPlaybackTime()),this._heartbeat._videoInfo):null},f.prototype.getAdBreakInfo=function(){return this._heartbeat&&this._heartbeat._adBreakInfo?this._heartbeat._adBreakInfo:null},f.prototype.getAdInfo=function(){return this._heartbeat&&this._heartbeat._adInfo?this._heartbeat._adInfo:null},f.prototype.getChapterInfo=function(){return this._heartbeat&&this._heartbeat._chapterInfo?this._heartbeat._chapterInfo:null},f.prototype.getQoSInfo=function(){if(this._heartbeat&&this._heartbeat._delegate&&this._heartbeat._delegate.getQoSObject()){var a=this._heartbeat._delegate.getQoSObject();if(a&&"object"==typeof a&&a.setValue)return a.createQoSInfo()}return null},b._MediaAnalyticsPluginDelegate=c,b._MediaHeartbeatPluginDelegate=d,b._ADBMediaHeartbeatDelegate=e,b._MediaHeartbeatVideoPlayerPluginDelegate=f}(a.ADB.core,a.ADB.va),function(a,b){"use strict";function c(a,d){c.__super__.constructor.call(this),this._heartbeat=a,this._logger=d,this._validator=new b.plugins.nielsen.MetadataValidator(d)}var d="MediaHeartbeatNielsenPluginDelegate",e={NielsenContentMetadata:"media_nielsen_content_metadata",NielsenChannelMetadata:"media_nielsen_channel_metadata",NielsenAdMetadata:"media_nielsen_ad_metadata"};b.plugins.nielsen&&a.extend(c,b.plugins.nielsen.NielsenPluginDelegate),c.prototype.getMetadataInfo=function(){if(this._heartbeat&&this._heartbeat._currentMediaObject){var a=this._heartbeat._currentMediaObject.getValue(e.NielsenContentMetadata);if(a&&"object"==typeof a)return this._validator.validateContentMetadata(a,"MediaHeartbeat.NielsenContentMetadataKeys"),a;this._logger.warn(d,"We expect a valid object for MediaHeartbeat.MediaObjectKey.NielsenContentMetadata in MediaObject")}return null},c.prototype.getAdMetadataInfo=function(){if(this._heartbeat&&this._heartbeat._currentAdObject){var a=this._heartbeat._currentAdObject.getValue(e.NielsenAdMetadata);if(a&&"object"==typeof a)return this._validator.validateAdMetadata(a,"MediaHeartbeat.NielsenAdMetadataKeys"),a;this._logger.warn(d,"We expect a valid object for MediaHeartbeat.MediaObjectKey.NielsenAdMetadata in MediaObject")}return null},c.prototype.getChannelInfo=function(){if(this._heartbeat&&this._heartbeat._currentMediaObject){var a=this._heartbeat._currentMediaObject.getValue(e.NielsenChannelMetadata);if(a&&"object"==typeof a)return this._validator.validateChannelMetadata(a,"MediaHeartbeat.NielsenChannelMetadataKeys"),a;this._logger.warn(d,"We expect a valid object for MediaHeartbeat.MediaObjectKey.NielsenChannelMetadata in MediaObject")}return null},c.prototype.onError=function(a){this._heartbeat&&this._heartbeat._onDelegateError(a)},b.plugins.nielsen&&(b._NielsenObjectKey=e,b._NielsenPluginDelegate=c)}(a.ADB.core,a.ADB.va),function(b,c){"use strict";function d(){}function e(b,d,e){if(this._appMeasurement=e||a.s,!this._appMeasurement)throw new Error("MediaHeartbeat needs a valid AppMeasurement instance.");if(!this._appMeasurement.visitor||!this._appMeasurement.visitor.marketingCloudOrgID)throw new Error("MediaHeartbeat needs a valid visitor instance with marketingCloudOrgId set.");if(!b)throw new Error("MediaHeartbeat needs a valid delegate object.");if(!d||"object"!=typeof d||!d.trackingServer)throw new Error("MediaHeartbeat needs a valid config object with trackingServer set.");this._config=d,this._delegate=b,this._debugLogging=c.MediaHeartbeat._debugLogging||this._config.debugLogging,this._logger=new f,this._debugLogging?this._logger.enable():this._logger.disable(),this._ruleEngine=new t(this._logger),this._taskScheduler=new u(this._logger),this._privacyManager=new v(this._logger,this._appMeasurement.visitor),this._resetState(),this._setupRules()}var f=b.Logger,g=c.MediaObject,h=c.Heartbeat,i=c.HeartbeatConfig,j=c._ADBMediaHeartbeatDelegate,k=c.plugins.videoplayer.VideoPlayerPlugin,l=c.plugins.videoplayer.VideoPlayerPluginConfig,m=c._MediaHeartbeatVideoPlayerPluginDelegate,n=c.plugins.aa.AdobeAnalyticsPlugin,o=c.plugins.aa.AdobeAnalyticsPluginConfig,p=c._MediaAnalyticsPluginDelegate,q=c.plugins.ah.AdobeHeartbeatPlugin,r=c.plugins.ah.AdobeHeartbeatPluginConfig,s=c._MediaHeartbeatPluginDelegate,t=c._RuleEngine,u=c._TaskScheduler,v=c._PrivacyManager,w=c.utils.ObjectUtils,x=c.utils.VersionUtils;if(d.prototype.getCurrentPlaybackTime=function(){return null},d.prototype.getQoSObject=function(){return null},e.MediaType={Video:"video",Audio:"audio"},e.Event={AdBreakStart:"adBreakStart",AdBreakComplete:"adBreakComplete",AdStart:"adStart",AdComplete:"adComplete",AdSkip:"adSkip",ChapterStart:"chapterStart",ChapterComplete:"chapterComplete",ChapterSkip:"chapterSkip",SeekStart:"seekStart",SeekComplete:"seekComplete",BufferStart:"bufferStart",BufferComplete:"bufferComplete",BitrateChange:"bitrateChange",TimedMetadataUpdate:"timedMetadataUpdate"},e.StreamType={VOD:"vod",LIVE:"live",LINEAR:"linear",PODCAST:"podcast",AUDIOBOOK:"audiobook",AOD:"aod"},e.MediaObjectKey={StandardVideoMetadata:"media_standard_content_metadata",StandardMediaMetadata:"media_standard_content_metadata",StandardAdMetadata:"media_standard_ad_metadata",VideoResumed:"resumed",MediaResumed:"resumed",PrerollTrackingWaitingTime:"preroll_tracking_waiting_time"},e.VideoMetadataKeys=c.plugins.aa.VideoMetadataKeys,e.AudioMetadataKeys=c.plugins.aa.AudioMetadataKeys,e.AdMetadataKeys=c.plugins.aa.AdMetadataKeys,e.createMediaObject=function(a,b,c,d,f){var h=new g;h.setValue(g.MEDIAINFO_KEY_VIDEOID,b),h.setValue(g.MEDIAINFO_KEY_NAME,a),h.setValue(g.MEDIAINFO_KEY_LENGTH,c),h.setValue(g.MEDIAINFO_KEY_PLAYHEAD,0);var i=d||e.StreamType.VOD;return h.setValue(g.MEDIAINFO_KEY_STREAMTYPE,i),("string"!=typeof f||f!=e.MediaType.Video&&f!=e.MediaType.Audio)&&(f=e.MediaType.Video),h.setValue(g.MEDIAINFO_KEY_MEDIATYPE,f),h},e.createAdBreakObject=function(a,b,c){var d=new g;return d.setValue(g.MEDIAINFO_KEY_NAME,a),d.setValue(g.MEDIAINFO_KEY_POSITION,b),d.setValue(g.MEDIAINFO_KEY_STARTTIME,c),d},e.createAdObject=function(a,b,c,d){var e=new g;return e.setValue(g.MEDIAINFO_KEY_NAME,a),e.setValue(g.MEDIAINFO_KEY_ADID,b),e.setValue(g.MEDIAINFO_KEY_POSITION,c),e.setValue(g.MEDIAINFO_KEY_LENGTH,d),e},e.createChapterObject=function(a,b,c,d){var e=new g;return e.setValue(g.MEDIAINFO_KEY_NAME,a),e.setValue(g.MEDIAINFO_KEY_POSITION,b),e.setValue(g.MEDIAINFO_KEY_LENGTH,c),e.setValue(g.MEDIAINFO_KEY_STARTTIME,d),e},e.createQoSObject=function(a,b,c,d){var e=new g;return e.setValue(g.MEDIAINFO_KEY_BITRATE,a),e.setValue(g.MEDIAINFO_KEY_FPS,c),e.setValue(g.MEDIAINFO_KEY_DROPPEDFRAMES,d),e.setValue(g.MEDIAINFO_KEY_STARTUPTIME,b),e},e.createTimedMetadataObject=function(a){var b=new g;return b.setValue(g.MEDIAINFO_KEY_TIMEDMETADATA,a),b},e.version=function(){return c.Version.getVersion()},e.prototype.trackSessionStart=function(a,b){this._logger.info(D,"#::trackSessionStart()");var c=t.createContext();c.setData(E,a),c.setData(J,this._cleanContextData(b)),this._processRule(B.SessionStart,c)},e.prototype.trackPlay=function(){this._logger.info(D,"#::trackPlay()"),this._processRule(B.Play)},e.prototype.trackPause=function(){this._logger.info(D,"#::trackPause()"),this._processRule(B.Pause)},e.prototype.trackComplete=function(){this._logger.info(D,"#::trackComplete()"),this._processRule(B.VideoComplete)},e.prototype.trackSessionEnd=function(){this._logger.info(D,"#::trackSessionEnd()"),this._processRule(B.SessionEnd)},e.prototype.trackError=function(a){this._logger.info(D,"#::trackError()");var b=t.createContext();b.setData(K,a),this._processRule(B.Error,b)},e.prototype.trackEvent=function(a,b,c){this._logger.info(D,"#::trackEvent() - "+a);var d,f=t.createContext();switch(a){case e.Event.AdBreakStart:f.setData(F,b),f.setData(J,this._cleanContextData(c)),d=B.AdBreakStart;break;case e.Event.AdBreakComplete:d=B.AdBreakComplete;break;case e.Event.AdStart:f.setData(G,b),f.setData(J,this._cleanContextData(c)),d=B.AdStart;break;case e.Event.AdComplete:d=B.AdComplete;break;case e.Event.AdSkip:d=B.AdSkip;break;case e.Event.SeekStart:d=B.SeekStart;break;case e.Event.SeekComplete:d=B.SeekComplete;break;case e.Event.ChapterStart:f.setData(H,b),f.setData(J,this._cleanContextData(c)),d=B.ChapterStart;break;case e.Event.ChapterComplete:d=B.ChapterComplete;break;case e.Event.ChapterSkip:d=B.ChapterSkip;break;case e.Event.BufferStart:d=B.BufferStart;break;case e.Event.BufferComplete:d=B.BufferComplete;break;case e.Event.BitrateChange:d=B.BitrateChange;break;case e.Event.TimedMetadataUpdate:d=B.TimedMetadataUpdate,f.setData(I,b);break;default:return void this._logger.error(D,"Incorrect event name.")}this._processRule(d,f)},c.plugins.nielsen){var y=c.MediaHeartbeatConfig;y.prototype.nielsenConfigKey=void 0,y.prototype.nielsenAppInfo=void 0;var z=c._NielsenObjectKey;e.MediaObjectKey.NielsenContentMetadata=z.NielsenContentMetadata,e.MediaObjectKey.NielsenAdMetadata=z.NielsenAdMetadata,e.MediaObjectKey.NielsenChannelMetadata=z.NielsenChannelMetadata,e.NielsenContentMetadataKeys=c.plugins.nielsen.ContentMetadataKeys,e.NielsenChannelMetadataKeys=c.plugins.nielsen.ChannelMetadataKeys,e.NielsenAdMetadataKeys=c.plugins.nielsen.AdMetadataKeys,e.prototype.nielsenLoadMetadata=function(a){this._nielsenPlugin&&this._nielsenPlugin.loadMetadata(a)}}e.prototype._setState=function(a,b){this._mediaState[a]=b},e.prototype._isInState=function(a){return this._mediaState[a]},e.prototype._isTrackingDisabled=function(a){return this._mediaHeartbeatDisabled},e.prototype._isInSession=function(a){return this._isInState(A.Session)},e.prototype._isInMedia=function(a){return this._isInState(A.Media)},e.prototype._isInAd=function(a){return this._isInState(A.Ad)},e.prototype._isInAdBreak=function(a){return this._isInState(A.AdBreak)},e.prototype._isInChapter=function(a){return this._isInState(A.Chapter)},e.prototype._isInPlay=function(a){return this._isInState(A.PlayPause)},e.prototype._isInPause=function(a){return!this._isInState(A.PlayPause)},e.prototype._isInBuffer=function(a){return this._isInState(A.Buffer)},e.prototype._isInSeek=function(a){return this._isInState(A.Seek)},e.prototype._isPlatformTrackingSupported=function(a){return!this._appMeasurement.unsupportedBrowser},e.prototype._isAudioTrackingSupported=function(a){return a.getData(E).getValue(g.MEDIAINFO_KEY_MEDIATYPE)!==e.MediaType.Audio||x.isGreaterThanEqual(this._appMeasurement.version,"2.11.0")},e.prototype._isValidMediaObject=function(a){var b=a.getData(E);if(b&&b instanceof g){var c=b.getValue(e.MediaObjectKey.MediaResumed);null!=c&&"boolean"!=typeof c&&this._logger.warn(D,"Ignoring value set for MediaHeartbeat.MediaObjectKey.MediaResumed in MediaObject as we expect a boolean value");var d=b.getValue(e.MediaObjectKey.PrerollTrackingWaitingTime);if(null!=d){("string"==typeof d||"number"==typeof d)&&!isNaN(d)||this._logger.warn(D,"Ignoring value set for MediaHeartbeat.MediaObjectKey.PrerollTrackingWaitingTime in MediaObject as we expect a valid duration as number in milliseconds.")}var f=b.getValue(e.MediaObjectKey.StandardMediaMetadata);return null!=f&&"object"!=typeof f&&this._logger.warn(D,"Ignoring value set for MediaHeartbeat.MediaObjectKey.StandardMediaMetadata in MediaObject as we expect a valid object with kv pairs."),!0}return!1},e.prototype._isValidAdBreakObject=function(a){var b=a.getData(F);return b&&b instanceof g},e.prototype._isDifferentAdBreakObject=function(a){var b=a.getData(F);return!(this._currentAdBreakObject&&this._currentAdBreakObject.isEqual(b))},e.prototype._isValidAdObject=function(a){var b=a.getData(G);if(b&&b instanceof g){var c=b.getValue(N);null!=c&&"boolean"!=typeof c&&this._logger.warn(D,"Ignoring value set for MediaHeartbeat.MediaObjectKey.GranularAdTracking in AdObject as we expect a boolean value.");var d=b.getValue(e.MediaObjectKey.StandardAdMetadata);return null!=d&&"object"!=typeof d&&this._logger.warn(D,"Ignoring value set for MediaHeartbeat.MediaObjectKey.StandardAdMetadata in AdObject as we expect a valid object with kv pairs."),!0}return!1},e.prototype._isDifferentAdObject=function(a){var b=a.getData(G);return!(this._currentAdObject&&this._currentAdObject.isEqual(b))},e.prototype._isValidChapterObject=function(a){var b=a.getData(H);return b&&b instanceof g},e.prototype._isDifferentChapterObject=function(a){var b=a.getData(H);return!(this._currentChapterObject&&this._currentChapterObject.isEqual(b))},e.prototype._isValidTimedMetadataObject=function(a){var b=a.getData(I);if(b&&b instanceof g){var c=b.getValue(g.MEDIAINFO_KEY_TIMEDMETADATA);return c&&"string"==typeof c}return!1},e.prototype._shouldAllowPlayerStateChange=function(a){return!(this._isInState(A.AdBreak)&&!this._isInState(A.Ad))},e.prototype._didBeginReporting=function(a){return this._isInState(A.Reporting)},e.prototype._deferredTrackPlay=function(){this._prerollWaitEnabled&&(this._logger.info(D,"Executing deferred API:trackPlay."),this._prerollWaitEnabled=!1,this._playTaskHandle=null,this._processRule(B.Play))},e.prototype._cmdEnterAction=function(a){var b=a.getRuleName();if(this._prerollWaitEnabled)if(this._playReceived)switch(b){case B.SeekStart:case B.BufferStart:this._logger.info(D,"Cancelling scheduled API:trackPlay because of SeekStart/BufferStart event"),this._taskScheduler.cancelTask(this._playTaskHandle),this._playTaskHandle=null;break;case B.SeekComplete:case B.BufferComplete:this._logger.info(D,"Rescheduled API:trackPlay after SeekComplete/BufferComplete event"),this._playTaskHandle=this._taskScheduler.scheduleTask(this._deferredTrackPlay,this,this._prerollWaitTime);break;case B.Play:this._logger.info(D,"Dropping API:trackPlay as we already have a API:trackPlay scheduled."),a.stopProcessingAction();break;case B.Pause:this._logger.info(D,"Cancelling scheduled API:trackPlay because of API:trackPause call."),this._taskScheduler.cancelTask(this._playTaskHandle),this._playTaskHandle=null,this._prerollWaitEnabled=!1;break;case B.AdBreakStart:this._logger.info(D,"Received API:trackEvent(AdBreakStart) within "+this._prerollWaitTime+" ms after API:trackPlay. We will track this as preroll AdBreak."),this._taskScheduler.cancelTask(this._playTaskHandle),this._playTaskHandle=null,this._prerollWaitEnabled=!1,this._playAfterAdStart=!0}else switch(b){case B.Play:this._logger.info(D,"Deferring API:trackPlay for "+this._prerollWaitTime+" ms."),this._playReceived=!0,this._playUnhandledFromPrerollWaitTime=!0,this._playTaskHandle=this._taskScheduler.scheduleTask(this._deferredTrackPlay,this,this._prerollWaitTime),a.stopProcessingAction();break;case B.Pause:this._logger.info(D,"Received trackPause before first trackPlay."),this._prerollWaitEnabled=!1;break;case B.AdBreakStart:this._logger.info(D,"Received trackEvent(AdBreakStart) before first trackPlay."),this._prerollWaitEnabled=!1}},e.prototype._cmdExitAction=function(a){var b=a.getRuleName();this._playAfterAdStart&&(b===B.AdStart?(this._cmdPlay(a),this._playAfterAdStart=!1):b===B.AdBreakComplete&&(this._playAfterAdStart=!1)),b!==B.AdStart||this._isInState(A.FPlayPause)||this._cmdPlay(a),this._prerollWaitEnabled||!this._playUnhandledFromPrerollWaitTime||b!==B.BufferComplete&&b!==B.SeekComplete&&b!==B.AdBreakComplete||this._isInState(A.FPlayPause)||this._isInState(A.Buffer)||this._isInState(A.Seek)||(this._logger.info(D,"Executing pending API:trackPlay. This case most likely happens tracking Preroll AdBreak without any Ads."),this._cmdPlay(a))},e.prototype._cmdConfigure=function(a){this._configureAdobeAnalyticsPlugin(),this._configureAdobeHearbeatPlugin(),this._configureVideoPlayerPlugin(),this._configureOtherPlugins(),this._configureHeartbeat(),this._privacyManager.configure(this._onPrivacyChange.bind(this))},e.prototype._cmdBeginReporting=function(a){this._playerPlugin&&this._playerPlugin.beginReporting(),this._setState(A.Reporting,!0)},e.prototype._cmdSessionStart=function(a){var b=a.getData(E),c=a.getData(J);this._currentMediaObject=b,this._videoInfo=b.createVideoInfo(),this._videoInfo.playerName=this._config.playerName?this._config.playerName:"";var d=b.getValue(e.MediaObjectKey.StandardMediaMetadata);d&&"object"==typeof d||(d=null);var f=b.getValue(e.MediaObjectKey.MediaResumed);"boolean"==typeof f&&(this._videoInfo.resumed=f);var g=b.getValue(e.MediaObjectKey.PrerollTrackingWaitingTime);"string"!=typeof g&&"number"!=typeof g||isNaN(g)||(this._prerollWaitTime=Number(g),this._prerollWaitTime<=0&&(this._prerollWaitEnabled=!1));var h=this._prepareMetadata(d,c);h[L]=this._videoInfo.mediaType,this._aaPlugin.setVideoMetadata(h),this._playerPlugin.trackVideoLoad(),this._playerPlugin.trackSessionStart(),this._setState(A.Session,!0),this._setState(A.Media,!0)},e.prototype._destroyHeartbeat=function(a,b){a&&a.trackVideoUnload(),b&&b.destroy()},e.prototype._cmdVideoEnd=function(a){var b=a.getRuleName()===B.VideoComplete;if(this._isInState(A.Reporting)){var c=this,d=this._heartbeat,e=this._playerPlugin;this._playerPlugin.trackComplete(function(){c._destroyHeartbeat(e,d)},b)}else this._destroyHeartbeat(this._playerPlugin,this._heartbeat);this._setState(A.Media,!1)},e.prototype._cmdHandleMediaComplete=function(a){this._isInMedia(a)||(this._logger.info(D,"API:trackComplete has already cleaned up Heartbeat instance."),this._cmdSessionEnd(a),a.stopProcessingAction())},e.prototype._cmdSessionEnd=function(a){this._setState(A.Session,!1),this._resetState()},e.prototype._cmdDisableTracking=function(a){this._logger.info(D,"#_cmdDisableTracking: ADBMediaHeartbeat Tracking Disabled Remotely."),this._mediaHeartbeatDisabled=!0},e.prototype._cmdBufferStart=function(a){this._playerPlugin.trackBufferStart(),this._setState(A.Buffer,!0)},e.prototype._cmdBufferComplete=function(a){this._isInState(A.Buffer)&&this._playerPlugin.trackBufferComplete(),this._setState(A.Buffer,!1)},e.prototype._cmdSeekStart=function(a){this._playerPlugin.trackSeekStart(),this._setState(A.Seek,!0)},e.prototype._cmdSeekComplete=function(a){this._isInState(A.Seek)&&this._playerPlugin.trackSeekComplete(),this._setState(A.Seek,!1)},e.prototype._cmdPlay=function(a){this._playerPlugin.trackPlay(),this._setState(A.PlayPause,!0),this._setState(A.FPlayPause,!0),this._playUnhandledFromPrerollWaitTime=!1},e.prototype._cmdPause=function(a){this._playerPlugin.trackPause(),this._setState(A.PlayPause,!1),this._setState(A.FPlayPause,!0)},e.prototype._cmdAdBreakStart=function(a){var b=a.getData(F);this._currentAdBreakObject=b,this._adBreakInfo=b.createAdBreakInfo(),this._adBreakInfo.playerName=this._config.playerName?this._config.playerName:"",this._playerPlugin.trackAdBreakStart(),this._setState(A.AdBreak,!0)},e.prototype._cmdAdBreakComplete=function(a){this._currentAdBreakObject=null,this._adBreakInfo=null,this._isInState(A.AdBreak)&&this._playerPlugin.trackAdBreakComplete(),this._setState(A.AdBreak,!1)},e.prototype._cmdAdStart=function(a){var b=a.getData(G),c=a.getData(J);this._currentAdObject=b,this._adInfo=b.createAdInfo();var d=b.getValue(N);"boolean"==typeof d&&(this._adInfo.granularTracking=d);var f=b.getValue(e.MediaObjectKey.StandardAdMetadata);f&&"object"==typeof f||(f=null);var g=this._prepareMetadata(f,c);this._aaPlugin.setAdMetadata(g),this._playerPlugin.trackAdStart(),this._setState(A.Ad,!0)},e.prototype._cmdAdComplete=function(a){this._currentAdObject=null,this._adInfo=null,this._isInState(A.Ad)&&this._playerPlugin.trackAdComplete(),this._setState(A.Ad,!1)},e.prototype._cmdAdSkip=function(a){this._currentAdObject=null,this._adInfo=null,this._isInState(A.Ad)&&this._playerPlugin.trackAdSkip(),this._setState(A.Ad,!1)},e.prototype._cmdChapterStart=function(a){var b=a.getData(H),c=a.getData(J);this._currentChapterObject=b,this._chapterInfo=b.createChapterInfo();var d=this._prepareMetadata(null,c);this._aaPlugin.setChapterMetadata(d),this._playerPlugin.trackChapterStart(),this._setState(A.Chapter,!0)},e.prototype._cmdChapterComplete=function(a){this._currentChapterObject=null,this._chapterInfo=null,this._isInState(A.Chapter)&&this._playerPlugin.trackChapterComplete(),this._setState(A.Chapter,!1)},e.prototype._cmdChapterSkip=function(a){this._currentChapterObject=null,this._chapterInfo=null,this._isInState(A.Chapter)&&this._playerPlugin.trackChapterSkip(),this._setState(A.Chapter,!1)},e.prototype._cmdError=function(a){var b=a.getData(K);b||(b="unknown_error_id"),this._playerPlugin.trackVideoPlayerError(b)},e.prototype._cmdBitrate=function(a){this._playerPlugin.trackBitrateChange()},e.prototype._cmdTimedMetadataUpdate=function(a){var b=a.getData(I),c=b.getValue(g.MEDIAINFO_KEY_TIMEDMETADATA);this._playerPlugin.trackTimedMetadata(c)},e.prototype._processRule=function(a,b){return this._ruleEngine.processRule(a,b)},e.prototype._setupRules=function(){this._ruleEngine.registerEnterExitAction(this._cmdEnterAction,this._cmdExitAction),this._ruleEngine.registerRule(B.SessionStart,"API:trackSessionStart",[t.createPredicate(this._isPlatformTrackingSupported,!0,C.ErrUnSupportedPlatform),t.createPredicate(this._isTrackingDisabled,!1,C.ErrTrackingDisabled),t.createPredicate(this._isInSession,!1,C.ErrInSession),t.createPredicate(this._isValidMediaObject,!0,C.ErrInvalidMediaObject),t.createPredicate(this._isAudioTrackingSupported,!0,C.ErrAudioTrackingNotSupported)],[this._cmdConfigure,this._cmdSessionStart],this),this._ruleEngine.registerRule(B.SessionEnd,"API:trackSessionEnd",[t.createPredicate(this._isInSession,!0,C.ErrNotInSession)],[this._cmdHandleMediaComplete,this._cmdAdSkip,this._cmdAdBreakComplete,this._cmdChapterSkip,this._cmdVideoEnd,this._cmdSessionEnd],this),this._ruleEngine.registerRule(B.VideoComplete,"API:trackComplete",[t.createPredicate(this._isInSession,!0,C.ErrNotInSession),t.createPredicate(this._isInMedia,!0,C.ErrNotInMedia)],[this._cmdAdSkip,this._cmdAdBreakComplete,this._cmdChapterSkip,this._cmdVideoEnd],this),this._ruleEngine.registerRule(B.Error,"API:trackError",[t.createPredicate(this._isInSession,!0,C.ErrNotInSession),t.createPredicate(this._isInMedia,!0,C.ErrNotInMedia)],[this._cmdError],this),this._ruleEngine.registerRule(B.Play,"API:trackPlay",[t.createPredicate(this._isInSession,!0,C.ErrNotInSession),t.createPredicate(this._isInMedia,!0,C.ErrNotInMedia),t.createPredicate(this._shouldAllowPlayerStateChange,!0,C.ErrInvalidPlayerState)],[this._cmdSeekComplete,this._cmdBufferComplete,this._cmdPlay],this),this._ruleEngine.registerRule(B.Pause,"API:trackPause",[t.createPredicate(this._isInSession,!0,C.ErrNotInSession),t.createPredicate(this._isInMedia,!0,C.ErrNotInMedia),t.createPredicate(this._shouldAllowPlayerStateChange,!0,C.ErrInvalidPlayerState),t.createPredicate(this._isInBuffer,!1,C.ErrInBuffer),t.createPredicate(this._isInSeek,!1,C.ErrInSeek)],[this._cmdPause],this),this._ruleEngine.registerRule(B.BufferStart,"API:trackEvent(BufferStart)",[t.createPredicate(this._isInSession,!0,C.ErrNotInSession),t.createPredicate(this._isInMedia,!0,C.ErrNotInMedia),t.createPredicate(this._shouldAllowPlayerStateChange,!0,C.ErrInvalidPlayerState),t.createPredicate(this._isInBuffer,!1,C.ErrInBuffer),t.createPredicate(this._isInSeek,!1,C.ErrInSeek)],[this._cmdBufferStart],this),this._ruleEngine.registerRule(B.BufferComplete,"API:trackEvent(BufferComplete)",[t.createPredicate(this._isInSession,!0,C.ErrNotInSession),t.createPredicate(this._isInMedia,!0,C.ErrNotInMedia),t.createPredicate(this._shouldAllowPlayerStateChange,!0,C.ErrInvalidPlayerState),t.createPredicate(this._isInBuffer,!0,C.ErrNotInBuffer)],[this._cmdBufferComplete],this),this._ruleEngine.registerRule(B.SeekStart,"API:trackEvent(SeekStart)",[t.createPredicate(this._isInSession,!0,C.ErrNotInSession),t.createPredicate(this._isInMedia,!0,C.ErrNotInMedia),t.createPredicate(this._shouldAllowPlayerStateChange,!0,C.ErrInvalidPlayerState),t.createPredicate(this._isInSeek,!1,C.ErrInSeek),t.createPredicate(this._isInBuffer,!1,C.ErrInBuffer)],[this._cmdSeekStart],this),this._ruleEngine.registerRule(B.SeekComplete,"API:trackEvent(SeekComplete)",[t.createPredicate(this._isInSession,!0,C.ErrNotInSession),t.createPredicate(this._isInMedia,!0,C.ErrNotInMedia),t.createPredicate(this._shouldAllowPlayerStateChange,!0,C.ErrInvalidPlayerState),t.createPredicate(this._isInSeek,!0,C.ErrNotInSeek)],[this._cmdSeekComplete],this),this._ruleEngine.registerRule(B.AdBreakStart,"API:trackEvent(AdBreakStart)",[t.createPredicate(this._isInSession,!0,C.ErrNotInSession),t.createPredicate(this._isInMedia,!0,C.ErrNotInMedia),t.createPredicate(this._isValidAdBreakObject,!0,C.ErrInvalidAdBreakObject),t.createPredicate(this._isDifferentAdBreakObject,!0,C.ErrDuplicateAdBreakObject)],[this._cmdAdSkip,this._cmdAdBreakComplete,this._cmdAdBreakStart],this),this._ruleEngine.registerRule(B.AdBreakComplete,"API:trackEvent(AdBreakComplete)",[t.createPredicate(this._isInSession,!0,C.ErrNotInSession),t.createPredicate(this._isInMedia,!0,C.ErrNotInMedia),t.createPredicate(this._isInAdBreak,!0,C.ErrNotInAdBreak)],[this._cmdAdSkip,this._cmdAdBreakComplete],this),this._ruleEngine.registerRule(B.AdStart,"API:trackEvent(AdStart)",[t.createPredicate(this._isInSession,!0,C.ErrNotInSession),t.createPredicate(this._isInMedia,!0,C.ErrNotInMedia),t.createPredicate(this._isInAdBreak,!0,C.ErrNotInAdBreak),t.createPredicate(this._isValidAdObject,!0,C.ErrInvalidAdObject),t.createPredicate(this._isDifferentAdObject,!0,C.ErrDuplicateAdObject)],[this._cmdAdSkip,this._cmdAdStart],this),this._ruleEngine.registerRule(B.AdComplete,"API:trackEvent(AdComplete)",[t.createPredicate(this._isInSession,!0,C.ErrNotInSession),t.createPredicate(this._isInMedia,!0,C.ErrNotInMedia),t.createPredicate(this._isInAdBreak,!0,C.ErrNotInAdBreak),t.createPredicate(this._isInAd,!0,C.ErrNotInAd)],[this._cmdAdComplete],this),this._ruleEngine.registerRule(B.AdSkip,"API:trackEvent(AdSkip)",[t.createPredicate(this._isInSession,!0,C.ErrNotInSession),t.createPredicate(this._isInMedia,!0,C.ErrNotInMedia),t.createPredicate(this._isInAdBreak,!0,C.ErrNotInAdBreak),t.createPredicate(this._isInAd,!0,C.ErrNotInAd)],[this._cmdAdSkip],this),this._ruleEngine.registerRule(B.ChapterStart,"API:trackEvent(ChapterStart)",[t.createPredicate(this._isInSession,!0,C.ErrNotInSession),t.createPredicate(this._isInMedia,!0,C.ErrNotInMedia),t.createPredicate(this._isValidChapterObject,!0,C.ErrInvalidChapterObject),t.createPredicate(this._isDifferentChapterObject,!0,C.ErrDuplicateChapterObject)],[this._cmdChapterSkip,this._cmdChapterStart],this),this._ruleEngine.registerRule(B.ChapterComplete,"API:trackEvent(ChapterComplete)",[t.createPredicate(this._isInSession,!0,C.ErrNotInSession),t.createPredicate(this._isInMedia,!0,C.ErrNotInMedia),t.createPredicate(this._isInChapter,!0,C.ErrNotInChapter)],[this._cmdChapterComplete],this),this._ruleEngine.registerRule(B.ChapterSkip,"API:trackEvent(ChapterSkip)",[t.createPredicate(this._isInSession,!0,C.ErrNotInSession),t.createPredicate(this._isInMedia,!0,C.ErrNotInMedia),t.createPredicate(this._isInChapter,!0,C.ErrNotInChapter)],[this._cmdChapterSkip],this),this._ruleEngine.registerRule(B.BitrateChange,"API:trackEvent(BitrateChange)",[t.createPredicate(this._isInSession,!0,C.ErrNotInSession),t.createPredicate(this._isInMedia,!0,C.ErrNotInMedia)],[this._cmdBitrate],this),this._ruleEngine.registerRule(B.TimedMetadataUpdate,"API:trackEvent(TimedMetadataUpdate)",[t.createPredicate(this._isInSession,!0,C.ErrNotInSession),t.createPredicate(this._isInMedia,!0,C.ErrNotInMedia),t.createPredicate(this._isValidTimedMetadataObject,!0,C.ErrInvalidTimedMetadataObject)],[this._cmdTimedMetadataUpdate],this),this._ruleEngine.registerRule(B.DisableTracking,"Internal::DisableTracking",[t.createPredicate(this._isTrackingDisabled,!1,C.ErrTrackingDisabled)],[this._cmdDisableTracking],this),this._ruleEngine.registerRule(B.BeginReporting,"Internal::BeginReporting",[t.createPredicate(this._isInSession,!0,C.ErrNotInSession),t.createPredicate(this._isInMedia,!0,C.ErrNotInMedia),t.createPredicate(this._didBeginReporting,!1,C.ErrBeginReporting)],[this._cmdBeginReporting],this)},e.prototype._configureAdobeAnalyticsPlugin=function(){this._aaPlugin=new n(this._appMeasurement,new p(this));var a=new o;a.channel=this._config.channel?this._config.channel:"",a.debugLogging=c.MediaHeartbeat._debugLogging||this._config.debugLogging,this._aaPlugin.configure(a),this._plugins.push(this._aaPlugin)},e.prototype._configureAdobeHearbeatPlugin=function(){var a=this._appMeasurement.visitor?this._appMeasurement.visitor.marketingCloudOrgID:"";this._ahPlugin=new q(new s(this));var b=new r(this._config.trackingServer,a);b.debugLogging=c.MediaHeartbeat._debugLogging||this._config.debugLogging,b.ovp=this._config.ovp?this._config.ovp:"",b.ssl=this._config.ssl,b.sdk=this._config.appVersion?this._config.appVersion:"";var d=this._primetimeTVSDKVersion();d&&d.length>0&&(b.__primetime=!0,b.__psdkVersion=d),this._ahPlugin.configure(b),this._plugins.push(this._ahPlugin)},e.prototype._configureVideoPlayerPlugin=function(){this._playerPlugin=new k(new m(this));var a=new l;a.debugLogging=c.MediaHeartbeat._debugLogging||this._config.debugLogging,this._playerPlugin.configure(a),this._plugins.push(this._playerPlugin)},e.prototype._configureOtherPlugins=function(){if(c.plugins.nielsen&&this._config.nielsenConfigKey&&this._config.nielsenAppInfo){this._nielsenPlugin=new c.plugins.nielsen.NielsenPlugin(new c._NielsenPluginDelegate(this,this._logger));var a=new c.plugins.nielsen.NielsenPluginConfig;a.debugLogging=c.MediaHeartbeat._debugLogging||this._config.debugLogging,a.appInfo=this._config.nielsenAppInfo,a.configKey=this._config.nielsenConfigKey,this._nielsenPlugin.configure(a),this._plugins.push(this._nielsenPlugin)}},e.prototype._configureHeartbeat=function(){var a=new i;a.debugLogging=c.MediaHeartbeat._debugLogging||this._config.debugLogging,this._heartbeat=new h(new j(this),this._plugins),this._heartbeat.configure(a)},e.prototype._resetState=function(){this._taskScheduler.clearTasks(),this._privacyManager.reset(),this._mediaState={},this._plugins=[],this._playerPlugin=null,this._aaPlugin=null,this._ahPlugin=null,this._nielsenPlugin=null,this._heartbeat=null,this._currentMediaObject=null,this._currentAdBreakObject=null,this._currentAdObject=null,this._currentChapterObject=null,this._videoInfo=null,this._adBreakInfo=null,this._adInfo=null,this._chapterInfo=null,this._prerollWaitEnabled=!0,this._prerollWaitTime=O,this._playReceived=!1,this._playUnhandledFromPrerollWaitTime=!1,this._playTaskHandle=null,this._playAfterAdStart=!1},e.prototype._primetimeTVSDKVersion=function(){return this._currentMediaObject?this._currentMediaObject.getValue(M):null},e.prototype._cleanContextData=function(a){if(null==a||"object"!=typeof a)return null;var b={};for(var c in a)if(a.hasOwnProperty(c)){var d=a[c];"number"!=typeof d&&"string"!=typeof d&&"boolean"!=typeof d||(b[c]=d)}return b},e.prototype._prepareMetadata=function(a,b){var c={};if(b&&w.append(c,b),a){var d=this._cleanContextData(a);w.append(c,d)}return delete c[L],c},e.prototype._onDelegateError=function(a){this._logger.error(D,a.getMessage()+" | "+a.getDetails())},e.prototype._onDelegateTrackingDisabled=function(){this._processRule(B.SessionEnd),this._processRule(B.DisableTracking)},e.prototype._onPrivacyChange=function(a){this._logger.info(D,"#_onPrivacyChange: Privacy Status: "+a),a===v.OPT_IN?this._processRule(B.BeginReporting):a===v.OPT_OUT&&this._processRule(B.SessionEnd)};var A={Session:0,Media:1,AdBreak:2,Ad:3,Chapter:4,PlayPause:5,Buffer:6,Seek:7,FPlayPause:8,Reporting:9},B={SessionStart:0,SessionEnd:1,VideoComplete:2,Play:3,Pause:4,Error:5,AdBreakStart:6,AdBreakComplete:7,AdStart:8,AdComplete:9,AdSkip:10,ChapterStart:11,ChapterComplete:12,ChapterSkip:13,SeekStart:14,SeekComplete:15,BufferStart:16,BufferComplete:17,BitrateChange:18,TimedMetadataUpdate:19,DisableTracking:20,BeginReporting:21},C={ErrUnSupportedPlatform:"MediaHeartbeat does not support tracking due to AppMeasurement or VisitorAPI not supporting the browser.",ErrNotInSession:'MediaHeartbeat is not in active tracking session, call "API:trackSessionStart" to begin a new tracking session.',ErrInSession:'MediaHeartbeat is in active tracking session, call "API:trackSessionEnd" to end current tracking session.',ErrNotInMedia:'MediaHeartbeat has completed tracking session, call "API:trackSessionEnd" first to end current session and then begin a new tracking session.',ErrInBuffer:'MediaHeartbeat is tracking buffer events, call "API:trackEvent(BufferComplete)" first to stop tracking buffer events.',ErrNotInBuffer:'MediaHeartbeat is not tracking buffer events, call "API:trackEvent(BufferStart)" before "API:trackEvent(BufferComplete)".',ErrInSeek:'MediaHeartbeat is tracking seek events, call "API:trackEvent(SeekComplete)" first to stop tracking seek events.',ErrNotInSeek:'MediaHeartbeat is not tracking seek events, call "API:trackEvent(SeekStart)" before "API:trackEvent(SeekComplete)".',ErrNotInAdBreak:'MediaHeartbeat is not tracking any AdBreak, call "API:trackEvent(AdBreakStart)" to begin tracking AdBreak',ErrNotInAd:'MediaHeartbeat is not tracking any Ad, call "API:trackEvent(AdStart)" to begin tracking Ad',ErrNotInChapter:'MediaHeartbeat is not tracking any Chapter, call "API:trackEvent(ChapterStart)" to begin tracking Chapter',ErrInvalidMediaObject:'MediaInfo passed into "API:trackSessionStart" is invalid.',ErrInvalidAdBreakObject:'AdBreakInfo passed into "API:trackEvent(AdBreakStart)" is invalid.',ErrDuplicateAdBreakObject:'MediaHeartbeat is currently tracking the AdBreak passed into "API:trackEvent(AdBreakStart)".',ErrInvalidAdObject:'AdInfo passed into "API:trackEvent(AdStart)" is invalid.',ErrDuplicateAdObject:'MediaHeartbeat is currently tracking the Ad passed into "API:trackEvent(AdStart)".',ErrInvalidChapterObject:'ChapterInfo passed into "API:trackEvent(ChapterStart)" is invalid.',ErrDuplicateChapterObject:'MediaHeartbeat is currently tracking the Chapter passed into "API:trackEvent(ChapterStart)".',ErrInvalidTimedMetadataObject:'TimedMetadata passed into "API:trackEvent(TimedMetadataUpdate)" is invalid.',ErrInvalidPlayerState:"MediaHeartbeat is tracking an AdBreak but not tracking any Ad and will drop any calls to track player state (Play, Pause, Buffer or Seek) in this state.",ErrAudioTrackingNotSupported:"Upgrade your AppMeasurement library to version >= '2.11.0' to support tracking audio content.",ErrTrackingDisabled:"MediaHeartbeat tracking is disabled for this publisher. Please contact Adobe Representative to enable tracking.",ErrBeginReporting:"MediaHeartbeat has already started reporting."},D="MediaHeartbeat",E="key_media_object",F="key_adbreak_object",G="key_ad_object",H="key_chapter_object",I="key_timed_metadata_object",J="key_custom_metadata",K="key_error_id",L="a.media.streamType",M="a.__pttvsdkVersion",N="granular_ad_tracking",O=250;c._MediaHeartbeatRule=B,c._MediaHeartbeatErrorMessage=C,c.MediaHeartbeatDelegate=d,c.MediaHeartbeat=e,c.MediaHeartbeat._debugLogging=!1}(a.ADB.core,a.ADB.va),a.ADB||(a.ADB={}),a.ADB.core||(a.ADB.core=core),a.ADB.va||(a.ADB.va=va),a.ADB.va.plugins||(a.ADB.va.plugins={})}(this);

  }).call(lib);
  exports.va = lib.ADB.va;
  exports.core = lib.ADB.core;
}));

//end of heartbeats

//heartbeat tracking end

//tealium universal tag - utag.sender.19063.am141 v4.0.202210070213, Copyright 2022 Tealium.com Inc. All Rights Reserved.
try{
(function(id,loader,u){
  try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};
  u.ev={'view':1,'link':1,'video':1};
  u.o=s;
  u.varlist={pageName:'pageName',channel:'ch',campaign:'v0',hier1:'h1',hier2:'h2',hier3:'h3',hier4:'h4'};for(var i=1;i<76;i++){u.varlist['prop'+i]='c'+i;u.varlist['eVar'+i]='v'+i};
  u.pushlt=function(l,v){if(typeof l!="undefined")l.push(v)};
  u.map={"sc_account":"prop75,s_account","page_name":"prop34,eVar31,pageName","site_section1":"prop1,eVar1,channel","hier":"hier","site_section2":"prop2,eVar2","site_section3":"prop3,eVar3","site_section4":"prop4,eVar4","site_section5":"prop5,eVar5","search_term":"prop6,eVar6","is_logged_in":"prop7,eVar7","content_system":"prop23","dom.title":"prop35,eVar35","Percentage_Page_Viewed":"prop72","Previous_Page_Name":"prop73","cxs_user_role":"prop4,eVar4,User_Role","cxs_item_selection":"prop5,eVar5,Selected_Item","cxs_time_spent":"prop9,eVar9,Time_Spent","cxs_input_value":"prop10,eVar10,Input_Value","cxs_user_type":"prop11,User_Type"};
  u.extend=[function(a,b){ try{ if(1){

var heartBeatSessionRunningFlag=false;
//wrapper extension 
(function() {
    'use strict';

    function EventDispatcher() {
        this._events = {};
    }

    /**
     * Register an event-listener method to the event dispatcher.
     *
     * @param {string} name Unique string value identifying the event.
     *
     * @param {Function} listener Function that will be called when the event is dispatched.
     *
     * @param {Object} context Context in which the listener method is called.
     *
     */
    EventDispatcher.prototype.addEventListener = function(name, listener, context) {
        if (!name || !listener) return;
        context = context || window;

        this._events[name] = (this._events[name] || []);
        this._events[name].push({cb: listener, ctx: context});

    };

    /**
     * Un-register an event-listener method to the event dispatcher.
     *
     * NOTE: for an event listener to be removed all the three coordinates must match
     * (name, listener and context) with the values provided during registration.
     *
     * @param {string} name Unique string value identifying the event.
     *
     * @param {Function} listener Function that will be called when the event is dispatched.
     *
     * @param {Object} context Context in which the listener method is called.
     */
    EventDispatcher.prototype.removeEventListener = function(name, listener, context) {
        if (!name || !listener) return;
        context = context || window;

        // Check to see if the event name was registered with us.
        var i, key, isNameRegistered = false;
        for (key in this._events) {
            if (name === key) {
                isNameRegistered = true;
                break;
            }
        }

        // This event name was not registered with us. Just exit.
        if (!isNameRegistered) return;

        // Search for the target event listener
        for (i = this._events[key].length - 1; i >= 0; i--) {
            var _listener = this._events[key][i];
            if (listener === _listener.cb && context === _listener.ctx) {
                this._events[key].splice(i, 1);
            }
        }

        // If we are left with an empty list of listeners for a particular
        // event name, we delete it.
        if (!this._events[key].length) delete this._events[key];
    };

    /**
     * Dispatch en event. It goes through the entire list of listener methods that are registered
     * for the target event and calls that function in the specified context.
     *
     * @param {string} name The name of the event.
     */
    EventDispatcher.prototype.dispatchEvent = function(name) {
        if (!name) return;

        var key, i;
        for (key in this._events) {
            if (this._events.hasOwnProperty(key) && name === key) {
                var listeners = this._events[key],
                    copyOnWrite = listeners.slice(0),
                    length = copyOnWrite.length;

                for (i = 0; i < length; i++) {
                    copyOnWrite[i].cb.call(copyOnWrite[i].ctx);
                }
                break;
            }
        }
    };

    function NotificationCenter() {
        // Provide a singleton EventDispatcher
        if (!NotificationCenter.prototype._instance) {
            NotificationCenter.prototype._instance = new EventDispatcher();
        }

        return NotificationCenter.prototype._instance;

    }

    // Export symbols.
    window.NotificationCenter = NotificationCenter;
})();


(function() {
    'use strict';

    // Export symbols.
    window.Configuration = {
        PLAYER: {
            NAME: 'Brightcove Player'
        },

        VISITOR: {
            MARKETING_CLOUD_ORG_ID: '5B29123F5245AD520A490D45@AdobeOrg',
            TRACKING_SERVER: 'vmware.hb.omtrdc.net',
            DPID: 'sample-dpid',
            DPUUID: 'sample-dpuuid'
        },
        APP_MEASUREMENT: {
            RSID: 'testaccount',
            TRACKING_SERVER: 'sc.vmware.com',
            PAGE_NAME: 'test page name'
        },
        HEARTBEAT: {
            TRACKING_SERVER: 'vmware.hb.omtrdc.net',            
            CHANNEL: 'vmware-aem-channel',
            sdk: 'VHL2 Sample Player v2.0'
        },
        /*CUSTOM_EVENT: customMapping*/
    };
})();




(function() {
    'use strict';

    var StreamType = ADB.va.MediaHeartbeat.StreamType;
    var MediaHeartbeat = ADB.va.MediaHeartbeat;

    var PlayerEvent = {
        VIDEO_LOAD: 'video_load',
        VIDEO_UNLOAD: 'video_unload',
        PLAY: 'play',
       // PAUSE: 'pause',
        COMPLETE: 'COMPLETE',
        BUFFER_START: 'buffer_start',
        BUFFER_COMPLETE: 'buffer_complete',
        SEEK_START: 'seek_start',
        SEEK_COMPLETE: 'seek_complete',
        AD_START: "ad_start",
        AD_COMPLETE: "ad_complete",
        CHAPTER_START: "chapter_start",
        CHAPTER_COMPLETE: "chapter_complete"
    };

 //   var MONITOR_TIMER_INTERVAL = 500;

    function VideoPlayer(id) {
        this._playerName = Configuration.PLAYER.NAME;
        this._videoId = Configuration.PLAYER.VIDEO_ID;
        this._videoName = Configuration.PLAYER.VIDEO_NAME;
        this._streamType = StreamType.VOD;

        this._videoLoaded = false;

        this._adBreakInfo = null;
        this._adInfo = null;
        this._chapterInfo = null;
    }

    VideoPlayer.prototype.getCurrentPlaybackTime = function() {   
        return this.currentTime();
    };

    VideoPlayer.prototype.getVideoInfo = function() {
        return this._videoInfo;
    };

    VideoPlayer.prototype.getPlayhead = function() {
        return this.currentTime();
    };

    VideoPlayer.prototype._onPlay = function(e) {
        this._openVideoIfNecessary();
        NotificationCenter().dispatchEvent(PlayerEvent.PLAY);
        //console.log("this is playing...");
    };

    VideoPlayer.prototype._startVideo = function() {
        // Prepare the main video info.
        this._videoInfo = {};
        this._videoInfo.id = this.id();
        this._videoInfo.name = this.name();
        this._videoInfo.playerName = this._playerName;
        this._videoInfo.length = this.duration();
        this._videoInfo.streamType = this._streamType;
        this._videoInfo.playhead = 0;

        this._videoLoaded = true;

    };

 
    // Export symbols.
    window.PlayerEvent = PlayerEvent;
    window.VideoPlayer = VideoPlayer;
    
})();


/**
 * VideoPlayerDelegate implementation for video.js.
 * 
 */

(function(ADB) {
    'use strict';

    var MediaHeartbeat = ADB.va.MediaHeartbeat;
    var MediaHeartbeatConfig = ADB.va.MediaHeartbeatConfig;
    var MediaHeartbeatDelegate = ADB.va.MediaHeartbeatDelegate;


    function VideoAnalyticsProvider(appMeasurement, player, settings) {

        if (!appMeasurement) {
            throw new Error(
                "Illegal argument. AppMeasurement reference cannot be null.");
        }

        if (!player) {
            throw new Error(
                "Illegal argument. Player reference cannot be null.");
        }
        
        this._player = player;
        this._settings = settings;
        this._firstPlay = true;
        this._hasLoad = false;
        this._hasVolumeChange = false;
        this._hasInitCustom = false;
        this._hasInitSocialClose = false;
        this._hasSocialOpen = false;
        //this._adPlaying = false;
        this._errorTrackCode = null;
        this._playheadTime = 0;

        this._appMeasurement = appMeasurement;

        //Media Heartbeat initialization
        var mediaConfig = new MediaHeartbeatConfig();
        mediaConfig.trackingServer = Configuration.HEARTBEAT.TRACKING_SERVER;
        mediaConfig.playerName = Configuration.PLAYER.NAME;
        mediaConfig.channel = Configuration.HEARTBEAT.CHANNEL;
        mediaConfig.debugLogging = false;
        mediaConfig.appVersion = Configuration.HEARTBEAT.SDK;
        mediaConfig.ssl = true;
        mediaConfig.ovp = Configuration.HEARTBEAT.OVP;
        
        $.extend(VMwareMediaHeartbeatDelegate.prototype, MediaHeartbeatDelegate.prototype);

        function VMwareMediaHeartbeatDelegate(player) {
            this._player = player;          
        }

        VMwareMediaHeartbeatDelegate.prototype.getCurrentPlaybackTime = function() {
            if (this._player.currentTime())
                return this._player.currentTime();
            else 
                return 0;
        }; 
    
        this._mediaHeartbeat = new MediaHeartbeat(new VMwareMediaHeartbeatDelegate(this._player), mediaConfig, this._appMeasurement);
        
        this._installEventListeners();
    }


    VideoAnalyticsProvider.prototype.destroy = function() {
        if (this._player) {
            // Comment for replay video 
            //          this._videoHeartbeat.destroy();
            //          this._videoHeartbeat = null;
            //          this._playerDelegate = null;
            //          this._uninstallEventListeners();

            this._hasLoad = false;
            this._hasVolumeChange = false;
            this._hasSocialOpen = false;
            this._adPlaying = false;
            this._errorTrackCode = null
            this._playheadTime = 0;
            this._mediaHeartbeat = null;
            this._player = null;
            this._uninstallEventListeners();
        }
    };

    // ///////
    // Notification handlers
    // ///////

    VideoAnalyticsProvider.prototype._onLoad = function(e) {

        if (this._errorTrackCode) {
            this._mediaHeartbeat.trackVideoPlayerError(this._errorTrackCode);
            this._errorTrackCode = null;
        }   
             
    };

    VideoAnalyticsProvider.prototype._onUnload = function(e) {
        if (this._mediaHeartbeat) {
            this._mediaHeartbeat.trackVideoUnload();
        }
    };

    VideoAnalyticsProvider.prototype.resetTrackValue = function() {
        // reset event
        this._appMeasurement.events = '';
        this._appMeasurement.linkTrackVars = '';
        this._appMeasurement.linkTrackEvents = '';
        this._appMeasurement.clearVars();
    };

    VideoAnalyticsProvider.prototype._installEventListeners = function() {
        
        NotificationCenter().addEventListener(PlayerEvent.VIDEO_LOAD, this._onLoad, this); 
        NotificationCenter().addEventListener('play', this._onPlay, this);
        NotificationCenter().addEventListener('ended', this._onEnd, this);
        NotificationCenter().addEventListener(PlayerEvent.COMPLETE, this._onComplete, this);
        
        var that = this;
        // We register as observers to various VideoPlayer events.

        this._player.on('play', function(evt) {
	  //console.log("Play Event is Triggered");
            if (sc_hb_click2stop == 1) {
	      //console.log("click2stop is set to 1");
		      if(typeof that._mediaHeartbeat !="undefined" && that._mediaHeartbeat != null){
                that._mediaHeartbeat.trackSessionEnd();
			  }
			  else{
			    waitForMediaHB();
			  }
			  
			  var mediaHB;
			  
			  function waitForMediaHB(){
			  
			    if(typeof that._mediaHeartbeat !="undefined" && that._mediaHeartbeat != null){
				 
				 clearTimeout(mediaHB);
				 
				 
				 that._mediaHeartbeat.trackSessionEnd();
				
				}
				
				else{
				
				
				mediaHB=  setTimeout(waitForMediaHB, 250);
				
				}
			  
			  
			  }
	      //console.log("tracksession ended");
                      sc_hb_click2stop = 0;
                      heartBeatSessionRunningFlag=false;
                      //console.log("inside play: setting heartBeatSessionRunningFlag=false");
                      
                     if(typeof window.tealium_bypass_reset == "undefined" ){
                    that._mediaHeartbeat = null;
                    that._player.reset();
                    that._player = null;
                                          
                    }
                    
                    else{
                    
                    if(window.tealium_bypass_reset == false ){
                    that._mediaHeartbeat = null;
                    
                    that._player.reset();
                    that._player = null;
                    
                    }
                    
                    
                    }
	              // console.log("Player is null");
                  } else {
            that._mediaHeartbeat.trackPlay();   
          }
                  
                        
        });
        
        
        this._player.on('ended', function(evt) {    
    
            if (!that._adPlaying) {

               if (that._player.currentTime() >= that._player.duration() * 97/100 ) {
                    that._mediaHeartbeat.trackComplete(); 
                    heartBeatSessionRunningFlag=false;
                    //console.log("inside end: setting heartBeatSessionRunningFlag=false");
               }

               that._mediaHeartbeat.trackSessionEnd();                             
            }
        });
        
        this._player.on('pause', function(evt) {
          
            if (!that._adPlaying) {               
                     
                     if (sc_hb_click2stop == 1) {
                      that._mediaHeartbeat.trackSessionEnd();
                      sc_hb_click2stop = 0;
                      heartBeatSessionRunningFlag=false;
                      //console.log("inside pause setting heartBeatSessionRunningFlag=false");
                      /*that._mediaHeartbeat = null;          
                      that._player.reset();
                      that._player = null; */
                  } else {
            
                    that._mediaHeartbeat.trackPause();
                }
        }
        }); 
        
        this._player.on('firstplay', function(evt) {
        });


        // Tracking mistore
        this._player.on('timeupdate', function (evt) {
              if (that._player.paused()) {
                return;
              }
              if(!heartBeatSessionRunningFlag) {

                  var HBstreamType = MediaHeartbeat.StreamType.VOD;
                  that._playheadTime = that._player.currentTime();
                  var _duration = that._player.duration();
                  _duration = that._player.mediainfo.duration;
                  if (_duration == 0) {
                    _duration = 2760;
                    HBstreamType = MediaHeartbeat.StreamType.LIVE;
                  } 
                  else if (_duration <= 0) {
                    _duration = 2760;
                    HBstreamType = MediaHeartbeat.StreamType.LIVE;
                  }
                  if (that._player.loop()) {
                    if (that._player.remainingTime() <= 1) {
                      that._mediaHeartbeat.trackComplete();
                      that._mediaHeartbeat.trackSessionEnd();
                      heartBeatSessionRunningFlag=false;
                      return;
                    }
                  }
                  var videoCustomMetadata = {
                    videoURL: that._appMeasurement.pageURL,
                    videoInfo: that._player.mediainfo.id + ' | ' + that._player.mediainfo.name,
                    HBVPageName: that._appMeasurement.pageName,
                    HBVPageUrl: that._appMeasurement.pageURL,
                    HBVsiteSection: that._appMeasurement.prop1,
                    HBVsiteSection2: that._appMeasurement.prop2,
                    HBVsiteSection3: that._appMeasurement.prop3,
                    HBVsiteSection4: that._appMeasurement.prop4,
                    HBVsiteSection5: that._appMeasurement.prop5,
                    HBVdbcompany: that._appMeasurement.prop53,
                    HBVdesignV: that._appMeasurement.prop23,
                    HBVcategory: that._appMeasurement.eVar29,
                    HBVproduct: that._appMeasurement.eVar30,
                    HBVp70: that._appMeasurement.prop70,
                    HBVrs: that._appMeasurement.prop75,
                    HBVtype: that._appMeasurement.eVar27,
                    HBVmorg: '5B29123F5245AD520A490D45@AdobeOrg',
                    HBVpagetitle: that._appMeasurement.prop35,
                    HBVdbindustry: that._appMeasurement.prop59,
                    HBVdbcity: that._appMeasurement.prop52,
                    HBVcountry: that._appMeasurement.prop54,
                    HBVaccountseg: that._appMeasurement.prop55,
                    HBVaudience: that._appMeasurement.prop68,
                    HBVerange: that._appMeasurement.prop57,
					videocaption: window.player_selected_caption
                  };
                  that._appMeasurement.linkTrackVars = '';
                  
                      if (!that._mediaHeartbeat.hb) {
                        var mediaInfo = MediaHeartbeat.createMediaObject(that._player.mediainfo.name, that._player.mediainfo.id, _duration, HBstreamType);
                        that._mediaHeartbeat.trackSessionStart(mediaInfo, videoCustomMetadata);
                        that._mediaHeartbeat.trackPlay();
                        heartBeatSessionRunningFlag=true;
                        //console.log("setting heartBeatSessionRunningFlag=true");
                      }
                  }
              
            });
          };

    VideoAnalyticsProvider.prototype._uninstallEventListeners = function() {
        var that = this;
        
                if (this._player) {
            // Comment for replay video 
            //          this._videoHeartbeat.destroy();
            //          this._videoHeartbeat = null;
            //          this._playerDelegate = null;
            //          this._uninstallEventListeners();

            this._hasLoad = false;
            this._hasVolumeChange = false;
            this._hasSocialOpen = false;
            this._adPlaying = false;
            this._errorTrackCode = null
            this._playheadTime = 0;
            this._mediaHeartbeat = null;
            heartBeatSessionRunningFlag = false;
            //console.log("_uninstallEventListeners: setting heartBeatSessionRunningFlag=false");
            this._player = null;
            this._uninstallEventListeners();
        }
        
        // We register as observers to various VideoPlayer events.
        // HTML events
        this._player.off('play', function(evt) {});
        this._player.off('pause', function(evt) {});
        this._player.off('ended', function(evt) {});
        this._player.off('seeking', function(evt) {});
        this._player.off('seeked', function(evt) {});
        this._player.off('volumechange', function(evt) {});
        this._player.off('error', function(evt) {});

        // ads-specific event
        this._player.off('adsready', function(evt) {});
        this._player.off('adstart', function(evt) {});
        this._player.off('adend', function(evt) {});
        this._player.off('ima3error', function(evt) {});
        this._player.off('ima3-ad-error', function(evt) {});

        // Brightcove-specific event
        this._player.off('durationchange', function(evt) {});
        this._player.off('firstplay', function(evt) {});
        this._player.off('fullscreenchange', function(evt) {});
        
        this._mediaHeartbeat.trackVideoUnload();
        
        NotificationCenter().removeEventListener(PlayerEvent.VIDEO_LOAD, this._onLoad, this);
        NotificationCenter().removeEventListener(PlayerEvent.VIDEO_UNLOAD, this._onUnload, this);
        NotificationCenter().removeEventListener(PlayerEvent.PLAY, this._onPlay, this);
        NotificationCenter().removeEventListener(PlayerEvent.SEEK_START, this._onSeekStart, this);
        NotificationCenter().removeEventListener(PlayerEvent.SEEK_COMPLETE, this._onSeekComplete, this);
        NotificationCenter().removeEventListener(PlayerEvent.BUFFER_START, this._onBufferStart, this);
        NotificationCenter().removeEventListener(PlayerEvent.BUFFER_COMPLETE, this._onBufferComplete, this);
        NotificationCenter().removeEventListener(PlayerEvent.AD_START, this._onAdStart, this);
        NotificationCenter().removeEventListener(PlayerEvent.AD_COMPLETE, this._onAdComplete, this);
        NotificationCenter().removeEventListener(PlayerEvent.CHAPTER_START, this._onChapterStart, this);
        NotificationCenter().removeEventListener(PlayerEvent.CHAPTER_COMPLETE, this._onChapterComplete, this);
        NotificationCenter().removeEventListener(PlayerEvent.COMPLETE, this._onComplete, this);
        
        
   };
   
    VideoAnalyticsProvider.prototype.destroy = function() {
        if (this._player) {
            this._mediaHeartbeat = null;
            this._player = null;
            this._uninstallEventListeners();
            heartBeatSessionRunningFlag = false;
            //console.log("destroy: setting heartBeatSessionRunningFlag=false");
        }
    };

    // Export symbols.
    window.VideoAnalyticsProvider = VideoAnalyticsProvider;
    
})(window.ADB);


 window.init_vplayer = function(id){
   
	window.Configuration.PLAYER.NAME = 'Brightcove Player';
    init_vplayer_2 = function(id) {

(function(window, document, vjs, undefined) {
    "use strict";
    var

        extend = function(obj  ) {
            var arg, i, k;
            for (i = 1; i < arguments.length; i++) {
                arg = arguments[i];
                for (k in arg) {
                    if (arg.hasOwnProperty(k)) {
                        obj[k] = arg[k];
                    }
                }
            }
            return obj;
        },

 
        // default custom Event Mapping
        customMapping = {  
        },
        // default plugin settings
        defaults = {
            PLAYER: {
                NAME: 'Brightcove Player'
            },
            VISITOR_API: {
                MARKETING_CLOUD_ORG_ID: '5B29123F5245AD520A490D45',
                NAMESPACE: 'vmware',
                TRACKING_SERVER: 'vmware.hb.omtrdc.net'
            },
            APP_MEASUREMENT: {
                RSID: s.account,
                TRACKING_SERVER: 'vmware.hb.omtrdc.net'
            },
            HEARTBEAT: {
                TRACKING_SERVER: 'vmware.hb.omtrdc.net',            
                JOB_ID: 'sc_va',
                CHANNEL: 'Brightcove-channel',
                OVP: 'Brightcove-ovp',
                DEBUG_LOGGING: false,
                DISABLE: false
            },
            CUSTOM_EVENT: customMapping
        },
        // ---------------------------------------------------------------------------
        // Omniture Plugin
        // ---------------------------------------------------------------------------

        omniturePlugin = function(options) {
            var player = this;
            // merge options and defaults
            var settings = extend({}, defaults, options || {});
 
            var analyticsProvider = new VideoAnalyticsProvider(s,
                player, settings);
        };

    // register the omniture plugin framework
    vjs.plugin('omniturePlugin', omniturePlugin);

})(window, document, videojs);


var options = {
   
};


    player = videojs(id);
    player.omniturePlugin(options); 
 }
     window.myVar1 = setInterval(function(){ myTimer() }, 1000);  
     function myTimer() {
       if(typeof videojs!="undefined"){
     clearInterval(myVar1);
     init_vplayer_2(id);
       }
     }  
 }

/*
$('video').one('mouseover', function() {
  init_vplayer($(this).attr('id'));
});*/

if(typeof window.tealium_bypass_reset == "undefined" ){
 $('.video-js video').one('mouseover', function(){
		init_vplayer($(this).attr('id'));
});
}
} } catch(e){ utag.DB(e) }  },
function(a,b){ try{ if(1){
var heartBeatFlag=false;
(function() {
	'use strict';
	function EventDispatcher() {
		this._events = {};
	}

	/**
	 * Register an event-listener method to the event dispatcher.
	 *
	 * @param {string} name Unique string value identifying the event.
	 *
	 * @param {Function} listener Function that will be called when the event is dispatched.
	 *
	 * @param {Object} context Context in which the listener method is called.
	 *
	 */
	EventDispatcher.prototype.addEventListener = function(name, listener, context) {
		if (!name || !listener) return;
		context = context || window;
		this._events[name] = (this._events[name] || []);
		this._events[name].push({cb: listener, ctx: context});
	};

	/**
	 * Un-register an event-listener method to the event dispatcher.
	 *
	 * NOTE: for an event listener to be removed all the three coordinates must match
	 * (name, listener and context) with the values provided during registration.
	 *
	 * @param {string} name Unique string value identifying the event.
	 *
	 * @param {Function} listener Function that will be called when the event is dispatched.
	 *
	 * @param {Object} context Context in which the listener method is called.
	 */
	EventDispatcher.prototype.removeEventListener = function(name, listener, context) {
		if (!name || !listener) return;
		context = context || window;
		//Check to see if the event name was registered with us.
		var i, key, isNameRegistered = false;
		for (key in this._events) {
			if (name === key) {
				isNameRegistered = true;
				break;
			}
		}

		//This event name was not registered with us. Just exit.
		if (!isNameRegistered) return;

		//Search for the target event listener
		for (i = this._events[key].length - 1; i >= 0; i--) {
			var _listener = this._events[key][i];
			if (listener === _listener.cb && context === _listener.ctx) {
				this._events[key].splice(i, 1);
			}
		}

		//If we are left with an empty list of listeners for a particular
		//Event name, we delete it.
		if (!this._events[key].length) delete this._events[key];
	};

	/**
	 * Dispatch en event. It goes through the entire list of listener methods that are registered
	 * for the target event and calls that function in the specified context.
	 *
	 * @param {string} name The name of the event.
	 */
	EventDispatcher.prototype.dispatchEvent = function(name) {
		if (!name) return;
		var key, i;
		for (key in this._events) {
			if (this._events.hasOwnProperty(key) && name === key) {
				var listeners = this._events[key],
					copyOnWrite = listeners.slice(0),
					length = copyOnWrite.length;
				for (i = 0; i < length; i++) {
					copyOnWrite[i].cb.call(copyOnWrite[i].ctx);
				}
				break;
			}
		}
	};

	function NotificationCenter() {
		if (!NotificationCenter.prototype._instance) {
			NotificationCenter.prototype._instance = new EventDispatcher();
		}
		return NotificationCenter.prototype._instance;
	}

	window.NotificationCenter = NotificationCenter;
})();


(function() {
	'use strict';

	//Export symbols.
	window.Configuration = {
		PLAYER: {
			NAME: 'Kaltura Player'
		},
		VISITOR: {
			MARKETING_CLOUD_ORG_ID: '5B29123F5245AD520A490D45@AdobeOrg',
			TRACKING_SERVER: 'vmware.hb.omtrdc.net',
			DPID: 'sample-dpid',
			DPUUID: 'sample-dpuuid'
		},
		APP_MEASUREMENT: {
			RSID: 'testaccount',
			TRACKING_SERVER: 'sc.vmware.com',
			PAGE_NAME: 'test page name'
		},
		HEARTBEAT: {
			TRACKING_SERVER: 'vmware.hb.omtrdc.net',            
			CHANNEL: 'vmware-aem-channel',
			sdk: 'VHL2 Sample Player v2.0'
		},
		/*CUSTOM_EVENT: customMapping*/
	};
})();


(function() {
	'use strict';

	var StreamType = ADB.va.MediaHeartbeat.StreamType;
	var MediaHeartbeat = ADB.va.MediaHeartbeat;

	var PlayerEvent = {
		VIDEO_LOAD: 'video_load',
		VIDEO_UNLOAD: 'video_unload',
		PLAY: 'play',
		//PAUSE: 'pause',
		COMPLETE: 'COMPLETE',
		BUFFER_START: 'buffer_start',
		BUFFER_COMPLETE: 'buffer_complete',
		SEEK_START: 'seek_start',
		SEEK_COMPLETE: 'seek_complete',
		AD_START: "ad_start",
		AD_COMPLETE: "ad_complete",
		CHAPTER_START: "chapter_start",
		CHAPTER_COMPLETE: "chapter_complete"
	};

	//var MONITOR_TIMER_INTERVAL = 500;

	function VideoPlayer(id) {
		this._playerName = Configuration.PLAYER.NAME;
		this._videoId = Configuration.PLAYER.VIDEO_ID;
		this._videoName = Configuration.PLAYER.VIDEO_NAME;
		this._streamType = StreamType.VOD;
		this._videoLoaded = false;
		this._adBreakInfo = null;
		this._adInfo = null;
		this._chapterInfo = null;
	}

	VideoPlayer.prototype.getCurrentPlaybackTime = function() {   
		return this.currentTime();
	};

	VideoPlayer.prototype.getVideoInfo = function() {
		return this._videoInfo;
	};

	VideoPlayer.prototype.getPlayhead = function() {
		return this.currentTime();
	};

	VideoPlayer.prototype._onPlay = function(e) {
		this._openVideoIfNecessary();
		NotificationCenter().dispatchEvent(PlayerEvent.PLAY);
	};

	VideoPlayer.prototype._startVideo = function() {
		this._videoInfo = {};
		this._videoInfo.id = this.id();
		this._videoInfo.name = this.name();
		this._videoInfo.playerName = this._playerName;
		this._videoInfo.length = this.duration();
		this._videoInfo.streamType = this._streamType;
		this._videoInfo.playhead = 0;
		this._videoLoaded = true;
	};

	//Export symbols.
	window.PlayerEvent = PlayerEvent;
	window.VideoPlayer = VideoPlayer;
	
})();


/**
* VideoPlayerDelegate implementation for video.js.
*/

(function(ADB) {
	'use strict';

	var MediaHeartbeat = ADB.va.MediaHeartbeat;
	var MediaHeartbeatConfig = ADB.va.MediaHeartbeatConfig;
	var MediaHeartbeatDelegate = ADB.va.MediaHeartbeatDelegate;
	
	//VideoAnalyticsProvider_kl method Starts
	function VideoAnalyticsProvider_kl(appMeasurement, player, settings,id) {

		if (!appMeasurement) {
			throw new Error(
				"Illegal argument. AppMeasurement reference cannot be null.");
		}

		if (!player) {
			throw new Error(
				"Illegal argument. Player reference cannot be null.");
		}
		
		this._player = player;
		this._id=id;
		this._settings = settings;
		this._firstPlay = true;
		this._hasLoad = false;
		this._hasVolumeChange = false;
		this._hasInitCustom = false;
		this._hasInitSocialClose = false;
		this._hasSocialOpen = false;
		//this._adPlaying = false;
		this._errorTrackCode = null;
		this._playheadTime = 0;

		this._appMeasurement = appMeasurement;

		//Media Heartbeat initialization
		var mediaConfig = new MediaHeartbeatConfig();
		mediaConfig.trackingServer = Configuration.HEARTBEAT.TRACKING_SERVER;
		mediaConfig.playerName = Configuration.PLAYER.NAME;
		mediaConfig.channel = Configuration.HEARTBEAT.CHANNEL;
		mediaConfig.debugLogging = true;
		mediaConfig.appVersion = Configuration.HEARTBEAT.SDK;
		mediaConfig.ssl = true;
		mediaConfig.ovp = Configuration.HEARTBEAT.OVP;
		
		$.extend(VMwareMediaHeartbeatDelegate.prototype, MediaHeartbeatDelegate.prototype);

		function VMwareMediaHeartbeatDelegate(player) {
			this._player = player;          
		}

		VMwareMediaHeartbeatDelegate.prototype.getCurrentPlaybackTime = function() {
			if (this._player.evaluate('{video.player.currentTime}'))
				return this._player.evaluate('{video.player.currentTime}');
			else 
				return 0;
		}; 
	
		this._mediaHeartbeat = new MediaHeartbeat(new VMwareMediaHeartbeatDelegate(this._player), mediaConfig, this._appMeasurement);
		
		this._installEventListeners();
		
	}
	//VideoAnalyticsProvider_kl method Ends
	
	VideoAnalyticsProvider_kl.prototype.destroy = function() {
		if (this._player) {
			//Comment for replay video 
			//this._videoHeartbeat.destroy();
			//this._videoHeartbeat = null;
			//this._playerDelegate = null;
			//this._uninstallEventListeners();
			this._hasLoad = false;
			this._hasVolumeChange = false;
			this._hasSocialOpen = false;
			this._adPlaying = false;
			this._errorTrackCode = null
			this._playheadTime = 0;
			this._mediaHeartbeat = null;
			this._player = null;
			this._uninstallEventListeners();
		}
	};

	//Notification handlers
	VideoAnalyticsProvider_kl.prototype._onLoad = function(e) {
		if (this._errorTrackCode) {
			this._mediaHeartbeat.trackVideoPlayerError(this._errorTrackCode);
			this._errorTrackCode = null;
		}   
	};

	VideoAnalyticsProvider_kl.prototype._onUnload = function(e) {
		if (this._mediaHeartbeat) {
			this._mediaHeartbeat.trackVideoUnload();
		}
	};

	VideoAnalyticsProvider_kl.prototype.resetTrackValue = function() {
		this._appMeasurement.events = '';
		this._appMeasurement.linkTrackVars = '';
		this._appMeasurement.linkTrackEvents = '';
		this._appMeasurement.clearVars();
	};
	
	//Install EventListener Starts
	VideoAnalyticsProvider_kl.prototype._installEventListeners = function() {
		
		NotificationCenter().addEventListener(PlayerEvent.VIDEO_LOAD, this._onLoad, this); 
		NotificationCenter().addEventListener('play', this._onPlay, this);
		NotificationCenter().addEventListener('ended', this._onEnd, this);
		NotificationCenter().addEventListener(PlayerEvent.COMPLETE, this._onComplete, this);
		
		var that = this;
		var playerObj=this._player;
	  
		//Tracking Video Play
		playerObj.kBind( 'doPlay', function(evt) {
			if (sc_hb_click2stop == 1) {
				that._mediaHeartbeat.trackSessionEnd();
					sc_hb_click2stop = 0;
					heartBeatFlag=false;
					that._mediaHeartbeat = null; 
					kWidget.destroy( this._id );
					//that._player.reset();
					//that._player = null;
			} 
			else {
				that._mediaHeartbeat.trackPlay();   
			}	
		});
		
		//Tracking Video Complete or End
		playerObj.kBind( 'doStop', function(evt) {
			that._player.currentTime = playerObj.evaluate('{video.player.currentTime}');
			that._player.duration = playerObj.evaluate('{duration}');
			console.log("Inside doStop Method | Player Current Time: " + that._player.currentTime + " | Player Duration: " + that._player.duration)
			if (that._player.currentTime >= that._player.duration * 97 / 100) {
				that._mediaHeartbeat.trackComplete();
				heartBeatFlag = false;
				//kWidget.destroy( this._id );
			}
		    that._mediaHeartbeat.trackSessionEnd();
			sc_hb_click2stop = 0;
			heartBeatFlag=false;
			that._mediaHeartbeat = null; 
			kWidget.destroy( this._id );
		});
					
		//Tracking Video Pause
		playerObj.kBind( 'doPause', function(evt) {
			if (sc_hb_click2stop == 1) {
				that._mediaHeartbeat.trackSessionEnd();
				sc_hb_click2stop = 0;
				heartBeatFlag=false;
				
			} else {
				that._mediaHeartbeat.trackPause();
			}
		}); 
		
		//Tracking Video Milestone
		playerObj.kBind('timeupdate', function (evt) {
			if (!heartBeatFlag) {
				var HBstreamType = MediaHeartbeat.StreamType.VOD;
				that._playheadTime = playerObj.evaluate('{video.player.currentTime}');
				var _duration = playerObj.evaluate('{duration}');
				_duration = playerObj.evaluate('{duration}');
				if (_duration == 0) {
					_duration = 2760;
					HBstreamType = MediaHeartbeat.StreamType.LIVE;
				} 
				else if (_duration <= 0) {
					_duration = 2760;
					HBstreamType = MediaHeartbeat.StreamType.LIVE;
				}
				var videoCustomMetadata = {
					videoURL: that._appMeasurement.pageURL,
					videoInfo: playerObj.evaluate('{mediaProxy.entry.id}') + ' | ' + playerObj.evaluate('{mediaProxy.entry.name}'),
					HBVPageName: that._appMeasurement.pageName,
					HBVPageUrl: that._appMeasurement.pageURL,
					HBVsiteSection: that._appMeasurement.prop1,
					HBVsiteSection2: that._appMeasurement.prop2,
					HBVsiteSection3: that._appMeasurement.prop3,
					HBVsiteSection4: that._appMeasurement.prop4,
					HBVsiteSection5: that._appMeasurement.prop5,
					HBVdbcompany: that._appMeasurement.prop53,
					HBVdesignV: that._appMeasurement.prop23,
					HBVcategory: that._appMeasurement.eVar29,
					HBVproduct: that._appMeasurement.eVar30,
					HBVp70: that._appMeasurement.prop70,
					HBVrs: that._appMeasurement.prop75,
					HBVtype: that._appMeasurement.eVar27,
					HBVmorg: '5B29123F5245AD520A490D45@AdobeOrg',
					HBVpagetitle: that._appMeasurement.prop35,
					HBVdbindustry: that._appMeasurement.prop59,
					HBVdbcity: that._appMeasurement.prop52,
					HBVcountry: that._appMeasurement.prop54,
					HBVaccountseg: that._appMeasurement.prop55,
					HBVaudience: that._appMeasurement.prop68,
					HBVerange: that._appMeasurement.prop57,
					HBVvideotrack:that._appMeasurement.eVar150,
					HBVvideosubtrack:that._appMeasurement.eVar151,
					HBVvideosubtrack:that._appMeasurement.eVar175
				};
				that._appMeasurement.linkTrackVars = '';
				
				if (!that._mediaHeartbeat.hb) {
					console.log(that._mediaHeartbeat);
					var mediaInfo = MediaHeartbeat.createMediaObject(playerObj.evaluate('{mediaProxy.entry.name}'), playerObj.evaluate('{mediaProxy.entry.id}'), _duration, HBstreamType);
					that._mediaHeartbeat.trackSessionStart(mediaInfo, videoCustomMetadata);
					that._mediaHeartbeat.trackPlay();
					heartBeatFlag=true;
				}
			}
		});
	};
	
	//Install EventListener Ends
	VideoAnalyticsProvider_kl.prototype._uninstallEventListeners = function() {
		
		var that = this;
		if (this._player) {
			//Comment for replay video 
			//this._videoHeartbeat.destroy();
			//this._videoHeartbeat = null;
			//this._playerDelegate = null;
			//this._uninstallEventListeners();
			this._hasLoad = false;
			this._hasVolumeChange = false;
			this._hasSocialOpen = false;
			this._adPlaying = false;
			this._errorTrackCode = null
			this._playheadTime = 0;
			this._mediaHeartbeat = null;
			heartBeatFlag = false;
			//console.log("_uninstallEventListeners: setting heartBeatFlag=false");
			this._player = null;
			this._uninstallEventListeners();
		}
		
		//We register as observers to various VideoPlayer events.
		//HTML events
		this._player.off('play', function(evt) {});
		this._player.off('pause', function(evt) {});
		this._player.off('ended', function(evt) {});
		this._player.off('seeking', function(evt) {});
		this._player.off('seeked', function(evt) {});
		this._player.off('volumechange', function(evt) {});
		this._player.off('error', function(evt) {});

		//Ads-specific event
		this._player.off('adsready', function(evt) {});
		this._player.off('adstart', function(evt) {});
		this._player.off('adend', function(evt) {});
		this._player.off('ima3error', function(evt) {});
		this._player.off('ima3-ad-error', function(evt) {});

		//Brightcove-specific event
		this._player.off('durationchange', function(evt) {});
		this._player.off('firstplay', function(evt) {});
		this._player.off('fullscreenchange', function(evt) {});
		
		this._mediaHeartbeat.trackVideoUnload();
		
		NotificationCenter().removeEventListener(PlayerEvent.VIDEO_LOAD, this._onLoad, this);
		NotificationCenter().removeEventListener(PlayerEvent.VIDEO_UNLOAD, this._onUnload, this);
		NotificationCenter().removeEventListener(PlayerEvent.PLAY, this._onPlay, this);
		NotificationCenter().removeEventListener(PlayerEvent.SEEK_START, this._onSeekStart, this);
		NotificationCenter().removeEventListener(PlayerEvent.SEEK_COMPLETE, this._onSeekComplete, this);
		NotificationCenter().removeEventListener(PlayerEvent.BUFFER_START, this._onBufferStart, this);
		NotificationCenter().removeEventListener(PlayerEvent.BUFFER_COMPLETE, this._onBufferComplete, this);
		NotificationCenter().removeEventListener(PlayerEvent.AD_START, this._onAdStart, this);
		NotificationCenter().removeEventListener(PlayerEvent.AD_COMPLETE, this._onAdComplete, this);
		NotificationCenter().removeEventListener(PlayerEvent.CHAPTER_START, this._onChapterStart, this);
		NotificationCenter().removeEventListener(PlayerEvent.CHAPTER_COMPLETE, this._onChapterComplete, this);
		NotificationCenter().removeEventListener(PlayerEvent.COMPLETE, this._onComplete, this);
	};
   
	VideoAnalyticsProvider_kl.prototype.destroy = function() {
		if (this._player) {
			this._mediaHeartbeat = null;
			this._player = null;
			this._uninstallEventListeners();
			heartBeatFlag = false;
			//console.log("destroy: setting heartBeatFlag=false");
		}
	};

	window.VideoAnalyticsProvider_kl = VideoAnalyticsProvider_kl;
	
})(window.ADB);


window.init_vplayer_kl = function(id,kdp) {
	 window.Configuration.PLAYER.NAME = 'Kaltura Player';
	init_vplayer_2_kl = function(id,kdp) {
		
		var extend = function(obj  ) {
			var arg, i, k;
			for (i = 1; i < arguments.length; i++) {
				arg = arguments[i];
				for (k in arg) {
					if (arg.hasOwnProperty(k)) {
						obj[k] = arg[k];
					}
				}
			}
			return obj;
		},

		//Default Custom Event Mapping
		customMapping = { },
		
		//Default Plugin Settings
		defaults = {
			PLAYER: {
				NAME: 'Kaltura Player'
			},
			VISITOR_API: {
				MARKETING_CLOUD_ORG_ID: '5B29123F5245AD520A490D45',
				NAMESPACE: 'vmware',
				TRACKING_SERVER: 'vmware.hb.omtrdc.net'
			},
			APP_MEASUREMENT: {
				RSID: s.account,
				TRACKING_SERVER: 'vmware.hb.omtrdc.net'
			},
			HEARTBEAT: {
				TRACKING_SERVER: 'vmware.hb.omtrdc.net',            
				JOB_ID: 'sc_va',
				CHANNEL: 'Kaltura-channel',
				OVP: 'Kaltura-ovp',
				DEBUG_LOGGING: true,
				DISABLE: false
			},
			CUSTOM_EVENT: customMapping
		},
		
		//---------------------------------------------------------------------------
		//Omniture Plugin
		//---------------------------------------------------------------------------

		options = {},
		settings = extend({}, defaults, options || {}),
		analyticsProvider = new VideoAnalyticsProvider_kl(s, kdp, settings, id);
	}
	
	init_vplayer_2_kl(id,kdp);
	
}


} } catch(e){ utag.DB(e) }  },
function(a,b,c,d,e,f,g){if(1){d=b['load_rule_domain_locale'];if(typeof d=='undefined')return;c=[{'www-review.vmware.com':'vmwaredev'},{'my-dev4.vmware.com':'vmwaredev'},{'wcm.vmware.com':'vmwaredev'},{'wcm-training.vmware.com':'vmwaredev'},{'wcm-intl.vmware.com':'vmwaredev'},{'wwwa-dev-sso-1.vmware.com':'vmwaredev'},{'www-redesign.vmware.com':'vmwaredev'},{'wwwa-qa-sso-1.vmware.com':'vmwaredev'},{'govirtual-jive-dev-1.vmware.com':'vmwaredev'},{'vmweb-test.vmware.com':'vmwaredev'},{'supportuat.vmware.com':'vmwaredev'},{'vmshare-stage.vmware.com':'vmwaredev'},{'newcastle.vmware.com':'vmwaredev'},{'vmworld2009-test.wingateweb.com':'vmwaredev'},{'portal-vmwperf.vmware.com':'vmwaredev'},{'cs2.salesforce.com':'vmwaredev'},{'my-perf.vmware.com':'vmwaredev'},{'my-dev2.vmware.com':'vmwaredev'},{'my-uat.vmware.com':'vmwaredev'},{'my-test.vmware.com':'vmwaredev'},{'www-perf.vmware.com':'vmwaredev'},{'www-uat.vmware.com':'vmwaredev'},{'www-dev2.vmware.com':'vmwaredev'},{'www-test.vmware.com':'vmwaredev'},{'www-stage1.vmware.com':'vmwaredev'},{'my-stage.vmware.com':'vmwaredev'},{'www-lt.vmware.com':'vmwaredev'},{'my-lt.vmware.com':'vmwaredev'},{'www-test2.vmware.com':'vmwaredev'},{'iwov-stage-preview-1.vmware.com:83':'vmwaredev'},{'vmware.com/de/':'vmwarede,vmwareglobal'},{'www-dev15.vmware.com':'vmwaredev'},{'vmware.com/fr/':'vmwarefr,vmwareglobal'},{'vmware.com/cn/':'vmwarecn,vmwareglobal'},{'vmware.com/jp/':'vmwarejp,vmwareglobal'},{'vmware.com/es/':'vmwarees,vmwareglobal'},{'vmware.com/latam/':'vmwarelasp,vmwareglobal'},{'vmware.com/ru/':'vmwareru,vmwareglobal'},{'vmware.com/at/':'vmwareat,vmwareglobal'},{'vmware.com/br/':'vmwarebr,vmwareglobal'},{'vmware.com/it/':'vmwareit,vmwareglobal'},{'vmware.com/kr/':'vmwarekr,vmwareglobal'},{'vmware.com/se/':'vmwarese,vmwareglobal'},{'vmware.com/ch/':'vmwarech,vmwareglobal'},{'vmware.com/tw/':'vmwaretw,vmwareglobal'},{'vmware.com/ap/':'vmwareap,vmwareglobal'},{'vmware.com/pl/':'vmwarepl,vmwareglobal'},{'vmware.com/cz/':'vmwarecz,vmwareglobal'},{'vmware.com/nl/':'vmwarenl,vmwareglobal'},{'vmware.com/be/fr/':'vmwarefrbe,vmwareglobal'},{'vmware.com/be/nl/':'vmwarenlbe,vmwareglobal'},{'vmware.com/ca/fr/':'vmwarecafr,vmwareglobal'},{'vmware.com/ca/en/':'vmwarecaen,vmwareglobal'},{'vmware.com/uk/':'vmwareuk,vmwareglobal'},{'vmware.com/au/':'vmwareau,vmwareglobal'},{'vmware.com/in/':'vmwarein,vmwareglobal'},{'vmware.com/nz/':'vmwarenz,vmwareglobal'},{'vmware.com/hu/':'vmwarehu,vmwareglobal'},{'vmware.com/mena/':'vmwaremena,vmwareglobal'},{'vmware.com/eu/':'vmwareeu,vmwareglobal'},{'vmware.com/il/':'vmwareil,vmwareglobal'},{'vmware.com/tr/':'vmwaretr,vmwareglobal'},{'vmware.com/mx/':'vmwaremx,vmwareglobal'},{'vmware.com/co/':'vmwareco,vmwareglobal'},{'vmware.com/ar/':'vmwarear,vmwareglobal'},{'vmware.com/pe/':'vmwarepe,vmwareglobal'},{'vmware.com/cl/':'vvmwarecl,vmwareglobal'},{'vmware.com/ve/':'vmwareve,vmwareglobal'},{'vmware.com/za/':'vmwareza,vmwareglobal'},{'vmware.com/sa/':'vmwaresa,vmwareglobal'},{'vmware.com/ae/':'vmwareae,vmwareglobal'},{'vault.vmware.com':'vmwarevault,vmwareinternaldata'},{'sb-dev.gstools.vmware.com':'vmwarecxsdigitalexperiencedev'},{'sb-prod-staging.gstools.vmware.com':'vmwarecxsdigitalexperiencedev'},{'pssolutionbuilder.vmware.com':'vmwarecxsdigitalexperience,vmwareglobal'},{'local-dev-analytics:8444':'vmwarecxsdigitalexperiencedev'},{'local-dev-analytics:8443':'vmwarecxsdigitalexperiencedev'},{'cs-prod-staging.gstools.vmware.com':'vmwarecxsdigitalexperiencedev'},{'cs-dev.gstools.vmware.com':'vmwarecxsdigitalexperiencedev'},{'ksa-staging.gstools.vmware.com':'vmwarecxsdigitalexperiencedev'},{'ksa-dev.gstools.vmware.com':'vmwarecxsdigitalexperiencedev'},{'mmgr-saas-dev.gstools.vmware.com':'vmwarecxsdigitalexperiencedev'},{'mmgr-saas-dev.gstools.vmware.com':'vmwarecxsdigitalexperiencedev'},{'tamportal-stg.gstools.vmware.com':'vmwarecxsdigitalexperiencedev'},{'tsp-dev.gstools.vmware.com':'vmwarecxsdigitalexperiencedev'},{'psengage-stg.gstools.vmware.com':'vmwarecxsdigitalexperiencedev'},{'tamservices.vmware.com':'vmwarecxsdigitalexperience'},{'acceleratorportal.vmware.com':'vmwarecxsdigitalexperience'},{'ksa.vmware.com':'vmwarecxsdigitalexperience'},{'migrationportal.vmware.com':'vmwarecxsdigitalexperience'},{'psengage.vmware.com':'vmwarecxsdigitalexperience'}];var m=false;for(e=0;e<c.length;e++){for(f in utag.loader.GV(c[e])){if(d.toString().indexOf(f)>-1){b['sc_account']=c[e][f];m=true};};if(m)break};if(!m)b['sc_account']='vmwareglobal';   }},
function(a,b){
if (window.location.href.match(/vmware\.com\/resources\/compatibility/)) {
    $(window).load(function() {
        if (typeof($jq1) == "undefined") {} else {
            function desktopNavigationTriggerAnalytics() {
                $jq1(document).on({
                    mouseenter: function() {
                        const elm = $jq1(this)
                        $jq1(this).data('timeoutAnalytics', setTimeout(function() {
                            lp = "nav_topbar_" + $jq1(elm).attr('urlval').split('/').pop();
                            $jq1(elm).attr('name', lp);
                            if (!$jq1(elm).hasClass("activeAnalytics")) {
                                $jq1(".tn-links li a").removeClass("activeAnalytics");
                                $jq1(elm).addClass("activeAnalytics");
                                addCTracking(lp);
                            }
                            //addCTracking(lp);
                        }, 500));
                    },
                    mouseleave: function() {
                        clearTimeout($jq1(this).data('timeoutAnalytics'));
                        //hideNavPanelAnalytics();
                    }
                }, ".tn-links li a");


                $jq1(document).on({
                    mouseenter: function() {
                        const elm = $jq1(this)
                        $jq1(this).data('timeoutAnalytics', setTimeout(function() {
                            lp = "nav_sidebar_" + $jq1(elm).closest('ul').siblings('p').find('a').attr('href').split('/').pop().split('.')[0] + "_" + $jq1(elm).find("span").text().toLowerCase().trim();
                            $jq1(elm).attr('name', lp);
                            if (!$jq1(elm).hasClass("activeAnalytics")) {
                                $jq1(".tl-nav-links li a").removeClass("activeAnalytics");
                                $jq1(elm).addClass("activeAnalytics");
                                addCTracking(lp);
                            }
                            //addCTracking(lp);
                        }, 500));
                    },
                    mouseleave: function() {
                        clearTimeout($jq1(this).data('timeoutAnalytics'));
                        //hideNavPanelAnalytics();
                    }
                }, ".tl-nav-links li a");
            }

            function mobileNavigationTriggerAnalytics() {

                $jq1(document).on({
                        click: function() {
                            const elm = $jq1(this)
                            $jq1(this).data('timeoutAnalytics', setTimeout(function() {

                                lp = "nav_topbar_" + $jq1(elm).attr('urlval').split('/').pop();
                                $jq1(elm).attr('name', lp);
                                if (!$jq1(elm).hasClass("activeAnalytics")) {
                                    $jq1(".tn-links li a").removeClass("activeAnalytics");
                                    $jq1(elm).addClass("activeAnalytics");
                                    addCTracking(lp);
                                }
                                //addCTracking(lp);               
                            }, 300));
                        }
                    },
                    ".tn-links li a");

                $jq1(document).on({
                        click: function() {
                            const elm = $jq1(this)
                            $jq1(this).data('timeoutAnalytics', setTimeout(function() {
                                lp = "nav_topbar_" + $jq1(elm).attr('urlval').split('/').pop();
                                $jq1(elm).attr('name', lp);
                                if (!$jq1(elm).hasClass("activeAnalytics")) {
                                    $jq1(".tn-main-link").removeClass("activeAnalytics");
                                    $jq1(elm).addClass("activeAnalytics");
                                    addCTracking(lp);
                                }
                                //addCTracking(lp);
                            }, 300));
                        }
                    },
                    ".tn-main-link");

                $jq1(document).on({
                    click: function() {
                        const elm = $jq1(this)
                        $jq1(this).data('timeoutAnalytics', setTimeout(function() {
                            lp = "nav_sidebar_" + $jq1(elm).closest('ul').siblings('p').find('a').attr('href').split('/').pop().split('.')[0] + "_" + $jq1(elm).find("span").text().toLowerCase().trim();
                            $jq1(elm).attr('name', lp);
                            if (!$jq1(elm).hasClass("activeAnalytics")) {
                                $jq1(".tl-nav-links li a").removeClass("activeAnalytics");
                                $jq1(elm).addClass("activeAnalytics");
                                addCTracking(lp);
                            }
                            //addCTracking(lp);
                        }, 500));
                    }
                }, ".tl-nav-links li a");

                $jq1(document).on({
                        click: function() {
                            const elm = $jq1(this)
                            $jq1(this).data('timeoutAnalytics', setTimeout(function() {

                                lp = "nav_sidebar_" + $jq1(elm).closest('ul').siblings('p').find('a').attr('href').split('/').pop().split('.')[0] + "_" + $jq1(elm).find("span").text().toLowerCase().trim();
                                $jq1(elm).attr('name', lp);
                                if (!$jq1(elm).hasClass("activeAnalytics")) {
                                    $jq1(".tr-nav-title").removeClass("activeAnalytics");
                                    $jq1(elm).addClass("activeAnalytics");
                                    addCTracking(lp);
                                }
                                //addCTracking(lp);
                            }, 300));
                        }
                    },
                    ".tr-nav-title");
            }


            function tabletNavigationTriggerAnalytics() {

                $jq1(document).on({
                        click: function() {
                            const elm = $jq1(this)
                            $jq1(this).data('timeoutAnalytics', setTimeout(function() {
                                lp = "nav_topbar_" + $jq1(elm).attr('urlval').split('/').pop();
                                $jq1(elm).attr('name', lp);
                                if (!$jq1(elm).hasClass("activeAnalytics")) {
                                    $jq1(".tn-links li a").removeClass("activeAnalytics");
                                    $jq1(elm).addClass("activeAnalytics");
                                    addCTracking(lp);
                                }
                                //addCTracking(lp);
                            }, 300));
                        }
                    },
                    ".tn-links li a");

                $jq1(document).on({
                    mouseenter: function() {
                        lp = "nav_sidebar_" + $jq1(elm).closest('ul').siblings('p').find('a').attr('href').split('/').pop().split('.')[0] + "_" + $jq1(elm).find("span").text().toLowerCase().trim();
                        $jq1(elm).attr('name', lp);
                        if (!$jq1(elm).hasClass("activeAnalytics")) {
                            $jq1(".tl-nav-links li a").removeClass("activeAnalytics");
                            $jq1(elm).addClass("activeAnalytics");
                            addCTracking(lp);
                        }
                        //addCTracking(lp);
                    },
                    mouseleave: function() {
                        clearTimeout($jq1(this).data('timeoutAnalytics'));
                    }
                }, ".tl-nav-links li a");

                $jq1(document).on({
                        click: function() {
                            const elm = $jq1(this)
                            $jq1(this).data('timeoutAnalytics', setTimeout(function() {
                                lp = "nav_sidebar_" + $jq1(elm).closest('ul').siblings('p').find('a').attr('href').split('/').pop().split('.')[0] + "_" + $jq1(elm).find("span").text().toLowerCase().trim();
                                $jq1(elm).attr('name', lp);
                                if (!$jq1(elm).hasClass("activeAnalytics")) {
                                    $jq1(".tn-main-link").removeClass("activeAnalytics");
                                    $jq1(elm).addClass("activeAnalytics");
                                    addCTracking(lp);
                                }
                                //addCTracking(lp);
                            }, 300));
                        }
                    },
                    ".tn-main-link");
            }

            if ($(window).width() > 1024) {
                desktopNavigationTriggerAnalytics();

            } else if ($(window).width() > 800 && $(window).width() < 1025) {
                tabletNavigationTriggerAnalytics();

            } else {
                mobileNavigationTriggerAnalytics();

            }
            $(window).resize(function() {


                if ($(window).width() > 1024) {
                    desktopNavigationTriggerAnalytics();

                } else if ($(window).width() > 800 && $(window).width() < 1025) {
                    tabletNavigationTriggerAnalytics();

                } else {
                    mobileNavigationTriggerAnalytics();

                }
                redesignTopNavigationTriggerAnalytics1();
            })
        }

    })
}

var upvalue = "testingupvalue"; // Used for Redesign

function redesignTopNavigationTriggerAnalytics1() {
	
	//Top Nav Hover Tracking - Desktop
	$(document).on({
		mouseenter: function() {
			const elm = $(this)
			var temp = $(this).parent("li").attr("data-value");
			console.log(temp);
			setTimeout(function() {
                if($("section.submenu-component").length){
			        //console.log($("section.submenu-component#" + temp + "")[0])
				if (!$("section.submenu-component#" + temp + "").hasClass("d-none")) {
					//console.log($("section.submenu-component#" + temp + ""))
					if (!$(elm).hasClass("hovered")) {
						$("ul.menu-item.mb-lg-0 li a").removeClass("hovered");
						$(elm).addClass("hovered");
						if (typeof $(elm).attr('mouseover-name') !== "undefined" && $(elm).attr('mouseover-name') !== "") {
							addCNavTracking($(elm).attr('mouseover-name'));
						} else if ($(elm).attr('name').indexOf('&lpos') > -1 && $(elm).attr('link-name') != undefined && $(elm).attr('link-name') != "") {
							if ($(elm).attr('name').indexOf(':') > -1) {
								var cat = $(elm).attr('name').split('&lpos=')[1].split(':')[0].trim();
								var lnk = $(elm).attr('link-name');
								var lnkName = cat + " : " + lnk;
								addCNavTracking(lnkName);
							}
						} else {
							addCNavTracking($(elm).attr('name'));
						}
					}
				}
            }
			}, 2000);
		},
	}, "ul.menu-item.mb-lg-0 li a");
	
	//Top Nav click Tracking - Desktop/Tablet/Mobile
	$(document).on({
		click: function() {
			const elm = $(this)
			if (!$(elm).hasClass("hovered")) {
				$("ul.menu-item.mb-lg-0 li a").removeClass("hovered");
				$(elm).addClass("hovered");
				if (typeof $(elm).attr('mouseover-name') !== "undefined" && $(elm).attr('mouseover-name') !== "") {
					addCNavTracking($(elm).attr('mouseover-name'));
				} else if ($(elm).attr('name').indexOf('&lpos') > -1 && $(elm).attr('link-name') != undefined && $(elm).attr('link-name') != "") {
					if ($(elm).attr('name').indexOf(':') > -1) {
						var cat = $(elm).attr('name').split('&lpos=')[1].split(':')[0].trim();
						var lnk = $(elm).attr('link-name');
						addCNavTracking(cat + " : " + lnk);
					}
				} else {
					addCNavTracking($(elm).attr('name'));
				}
			}
		}
	}, "ul.menu-item.mb-lg-0 li a");
	
}

//Audio Tracking Start
var startChecker = false;
var videoObjs = [];
var video = jQuery('audio');
var count = 0;

video.each(function() {
	$(this).attr("data-num", count);
	var vidObj = {
		secondsToHms: function(d) {
			d = Number(d);
			var h = Math.floor(d / 3600);
			var m = Math.floor(d % 3600 / 60);
			var s = Math.floor(d % 3600 % 60);
			return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "") + m + ":" + (s < 10 ? "0" : "") + s);
		},
		getPercentage: function(event, currentTime, fullTime, audioID, audioTitle) {
			var percent = {
				"one": fullTime / 100,
				"twentyFive": fullTime / 4,
				"fifity": fullTime / 2,
				"seventyFive": (fullTime / 4) + (fullTime / 2),
				"hundred": fullTime
			}
			var percentageData = "";
			if (currentTime >= percent.one && typeof vidObj["_1_" + event] == "undefined" && event != "ended") {
				percentageData = "1";
				vidObj["_1_" + event] = true; //associate object
				//console.log("reached 1" + event)
			}
			if (currentTime >= percent.twentyFive && typeof vidObj["_25_" + event] == "undefined" && event != "ended") {
				percentageData = "25";
				vidObj["_25_" + event] = true; //associate object
				//console.log("reached 25" + event)
			}
			if (currentTime >= percent.fifity && typeof vidObj["_50_" + event] == "undefined" && event != "ended") {
				percentageData = "50";
				vidObj["_50_" + event] = true;
				//console.log("reached 50" + event)
			}
			if (currentTime >= percent.seventyFive && typeof vidObj["_75_" + event] == "undefined" && event != "ended") {
				percentageData = "75";
				vidObj["_75_" + event] = true;
				//console.log("reached 75" + event)
			}
			if (currentTime >= percent.hundred && typeof vidObj["_100_" + event] == "undefined") {
				percentageData = "100";
				if (event == "pause") {
					percentageData = "";
				}
				vidObj["_100_" + event] = true;
				//console.log("reached 100" + event)
			}
			if (percentageData != "") {
				//console.log(title);
				addADPTracking(percentageData, audioID, audioTitle);
				//return percentageData;
			}
		}
	}
	videoObjs.push(vidObj);
	count++;
})

//console.log(videoObjs)

if(window.location.href.indexOf('podcasts.vmware.com') == -1){
	var getVideo1 = document.getElementsByTagName('audio')[0];
	if (video.length > 0) {
		getVideo1.addEventListener('playing', function(e) {
			if (!startChecker) {
				//addADSTracking();
				//console.log("started just now")
				startChecker = true;
			}
		});
		video.on("play", function(e) {
			videoObjs[$(this).attr("data-num")].getPercentage(e.type, e.target.currentTime, e.target.duration, $(this).parent().prev().attr("data-details"))
			//console.log($(this).attr("data-num"));
		});
		video.on("pause", function(e) {
			videoObjs[$(this).attr("data-num")].getPercentage(e.type, e.target.currentTime, e.target.duration, $(this).parent().prev().attr("data-details"))
			//console.log($(this).attr("data-num"));
		});
		video.on("timeupdate", function(e) {
			videoObjs[$(this).attr("data-num")].getPercentage(e.type, e.target.currentTime, e.target.duration, $(this).parent().prev().attr("data-details"))
		});
		video.on("ended", function(e) {
			vidObj[$(this).attr("data-num")].getPercentage(e.type, e.target.currentTime, e.target.duration, $(this).parent().prev().attr("data-details"))
			// console.log($(this).attr("data-num"));
		});
	}
}

//Audio Tracking END

//Podcast tracking Start

addPodcastTracking = function(name, audioID, audioTitle) {	
	console.log("inside");
	var tmplink = s.linkTrackVars;
	var tmpevent = s.linkTrackEvents;
	s.linkTrackVars = 'eVar24,prop44,eVar73';
	s.linkTrackVars = s.linkTrackVars + ",eVar178";
	s.linkTrackEvents = 'event59,event60,event61,eVar178'
	if (name.indexOf('Play') > -1) {
		s.events = "event59";
	}
	s.eVar178 = getTimeParting("America/Los_Angeles");
	s.eVar24 = audioID;
	s.prop44 = audioID;
	s.eVar73 = audioTitle;
	s.tl(true, 'o', name)
	s.linkTrackVars = tmplink;
	s.linkTrackEvents = tmpevent;
	s.events = ""
}

if (window.location.href.indexOf('podcasts.vmware.com') > -1) {	
	var video = jQuery('audio');	
	var getVideo1 = document.getElementsByTagName('audio')[0];	
	if (video.length > 0) {		
		getVideo1.addEventListener('playing', function(e) {			
			if (!startChecker) {				
				//console.log('inside event listener')				 
				startChecker = true;			
			}		
		});		
		video.on("play", function(e) {			
			//console.log("Audio Play");
			var audioTitle = $(this).parents('article').find('h2.title a').text();
			var audioID = $(this).siblings('button.play').attr('id');
			addPodcastTracking('Audio Play', audioID, audioTitle);		
		});		
		video.on("pause", function(e) {			
			//console.log("Audio Pause");
			var audioTitle = $(this).parents('article').find('h2.title a').text();
			var audioID = $(this).siblings('button.play').attr('id');
			if ( e.target.currentTime != e.target.duration ){
				addPodcastTracking('Audio Pause', audioID, audioTitle);		
			}
		});		
		video.on("timeupdate", function(e) {			
			//console.log("timeupdate");
			var audioTitle = $(this).parents('article').find('h2.title a').text();
			var audioID = $(this).siblings('button.play').attr('id');
			videoObjs[$(this).attr("data-num")].getPercentage(e.type, e.target.currentTime, e.target.duration, audioID, audioTitle);
		});		
		video.on("ended", function(e) {			
			//console.log("Audio Ended");
			var audioTitle = $(this).parents('article').find('h2.title a').text();
			var audioID = $(this).siblings('button.play').attr('id');
			addPodcastTracking('Audio Ended', audioID, audioTitle);		
		});	
	}
}

//Podcast tracking end

     
riaLink = function(name) {
    supresslinkTrack = true;
    s.linkTrackVars = 'prop1,prop2';
    s.linkTrackEvents = 'None';
    s.prop1 = getProp1();
    s.prop2 = getProp2();
    if (s.pageName) {
        var ppn = s.pageName;
        s.pageName += " : " + name;
        void(s.t());
        s.pageName = ppn;
    }
}
sc_qt = function(obj) {
    if (obj.topic && obj.progress && obj.eventType) {
        var t = obj.topic.replace(/^\//, "");
        t = t.replace(/\//g, " : ");
        t = t.replace(/\ :\ $/, "");
        t += " : " + obj.progress;
        t += " : " + obj.eventType;
        s.pageName = "vmware : " + t;
        void(s.t());
    }
}
/*
    n is the value
    p is the s.prop that will be set to the value of n
    v is the s.eVar that will be set to the value of n
    e is the success event that will increment
*/
sc_tl = function(n, p, v, e) {
    if (n) {
        supresslinkTrack = true;
        window.s = s_gi('vmwareglobal');
        s.trackingServer = 'sc.vmware.com';
        s.trackingServerSecure = 'ssc.vmware.com';
        if (p && v) {
            s.linkTrackVars = p + ',' + v;
        } else if (p) {
            s.linkTrackVars = p;
        } else if (v) {
            s.linkTrackVars = v;
        }
        s.linkTrackVars += ',prop1,prop2';
        if (v) {
            if (p || v) {
                s.linkTrackVars += ',events';
            } else {
                s.linkTrackVars += 'events';
            }
            s.linkTrackEvents = e;
            s.events = e;
        }
        eval('s.' + p + '="' + n + '"');
        eval('s.' + v + '="' + n + '"');
        s.prop1 = getProp1();
        s.prop2 = getProp2();
        //DWEP-1662 Starting//
        s.linkTrackVars = s.linkTrackVars + ",eVar178";
        s.eVar178 = getTimeParting("America/Los_Angeles");
        //DWEP-1662 Ending//
        s.tl(this, 'd', n);
        supresslinkTrack = false;
    }
}
getProp1 = function() {
    if (s.prop1) {
        return s.prop1;
    }
    return "";
}
getProp2 = function() {
    if (s.prop2) {
        return s.prop2;
    }
    return "";
}
setProps1t5 = function() {
    if (s.pageName) {
        try {
            var pn = new Array();
            pn = s.pageName.split(" : ");
            if (pn.length >= 2) {
                pn.pop();
                for (var i = 0; i < 5; i++) {
                    if (i >= pn.length) {
                        eval("s.prop" + (i + 1) + "='" + pn[pn.length - 1] + "';");
                    } else {
                        eval("s.prop" + (i + 1) + "='" + pn[i] + "';");
                        s.hier1 += pn[i] + ",";
                    }
                }
                s.hier1 = s.hier1.replace(/,$/, "");
            }
        } catch (err) {}
    }
}
getCookie = function(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}
//For eventHost Cookie Tracking Starting 
function getCookie1(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

//For eventHost Cookie Tracking Ending 
addCNavTracking = function(name) {
    s.events = "";
    supresslinkTrack = true;
    var tmplink = s.linkTrackVars;
    if (window.location.href.includes("app-modernization")) {
        if (name.includes("vmw@20")) {
            name = name.replace("vmw@20", "app-modernization")
        }
    }
    if (typeof digitalData !== "undefined" && typeof digitalData.page !== "undefined" && typeof digitalData.page.attributes !== "undefined" && typeof digitalData.page.attributes.aemPageName !== "undefined" && digitalData.page.attributes.aemPageName == "home") {
        s.linkTrackVars = 'prop20,prop13,prop8,prop39,prop66,eVar39,prop75,prop73,prop70,eVar62,eVar66,eVar102,eVar178';
        //s.linkTrackEvents = "event75";
        //s.events = s.apl(s.events, "event75");
        //s.events = "event75";
        s.prop8 = digitalData.page.pageInfo.geoRegion;
        s.prop13 = digitalData.page.pageInfo.language;
        s.eVar62 = name;
        s.eVar39 = s.pageName;
        s.prop75 = s.account;
        s.prop73 = s.pageName;
        if(window.pageID != undefined)
        {s.eVar66 = document.domain + window.pageID;}
        else
        {s.eVar66 = document.domain + document.location.pathname;}
        
        //s.prop20 = s.c_r("lpv"); //commented for DWEP-1640
        if ((name.indexOf('nav_sidebar_') != -1) || (name.indexOf('nav_topbar_') != -1)) {
            s.prop66 = "HP_" + name;
        }
        //DWEP-1662 Starting//
        s.linkTrackVars = s.linkTrackVars + ",eVar178";
        s.eVar178 = getTimeParting("America/Los_Angeles");
        //DWEP-1662 Ending//
        s.tl(this, 'o', name);
    } else {
        s.linkTrackVars = 'prop20,prop13,prop8,prop39,prop66,eVar39,prop75,prop73,eVar66,prop70,eVar102,eVar178';
        s.prop8 = digitalData.page.pageInfo.geoRegion;
        s.prop13 = digitalData.page.pageInfo.language;
        s.eVar39 = s.pageName;
        //s.prop20 = s.c_r("lpv"); //commented for DWEP-1608
        s.prop75 = s.account;
        s.prop73 = s.pageName;
        if(window.pageID != undefined)
        {s.eVar66 = document.domain + window.pageID;}
        else
        {s.eVar66 = document.domain + document.location.pathname;}
        if ((name.indexOf('nav_sidebar_') != -1) || (name.indexOf('nav_topbar_') != -1)) {
            s.prop66 = name;
        }
        //DWEP-1662 Starting//
        s.linkTrackVars = s.linkTrackVars + ",eVar178";
        s.eVar178 = getTimeParting("America/Los_Angeles");
        //DWEP-1662 Ending//
        s.tl(this, 'o', name);
    }
    s.prop66 = s.prop39 = s.eVar39 = s.eVar66 = s.eVar102 = '';
    supresslinkTrack = false;
    s.linkTrackVars = tmplink;
}

addCTracking = function(name) {
    var tmplink = s.linkTrackVars;
    s.linkTrackVars = 'prop39,prop75,prop73,eVar178';
    s.prop39 = s.pageName;
    s.prop75 = s.s_account;
    s.prop73 = s.pageName;
    //if(s.pageName)s.getPercentPageViewed();if(s._ppvPreviousPage){s.prop73=s._ppvPreviousPage;s.prop72=s._ppvHighestPercentViewed};
    //s.prop72 = s.getPercentPageViewed();
    //DWEP-1662 Starting//
    s.linkTrackVars = s.linkTrackVars + ",eVar178";
    s.eVar178 = getTimeParting("America/Los_Angeles");
    //DWEP-1662 Ending//
    s.tl(this, 'o', name);
    s.linkTrackVars = tmplink;
}
addSTVTracking = function(name, stvurl) {
    //console.log("tealiumcs"+ ":" +stvurl);
    var domainURL = stvurl;
    var tmplink = s.linkTrackVars;
    s.linkTrackVars = 'prop39,prop75,prop73,eVar160,eVar178';
    s.eVar160 = stvurl;
    s.prop39 = s.pageName;
    s.prop75 = s.s_account;
    s.prop73 = s.pageName;
    s.linkTrackVars = s.linkTrackVars + ',eVar160';
    //if(s.pageName)s.getPercentPageViewed();if(s._ppvPreviousPage){s.prop73=s._ppvPreviousPage;s.prop72=s._ppvHighestPercentViewed};
    //s.prop72 = s.getPercentPageViewed();
    //DWEP-1662 Starting//
    s.linkTrackVars = s.linkTrackVars + ",eVar178";
    s.eVar178 = getTimeParting("America/Los_Angeles");
    //DWEP-1662 Ending//
    s.tl(this, 'o', name);
    s.linkTrackVars = tmplink;
}
/*add function for vault site-downlaod file tracking*/
addDTracking = function(fname, furl) {
    s.opg = s.pageName;
    s.pageName = s.pageName + " : " + fname;
    if (furl != '') {
        s.eVar15 = s.prop62 = furl + fname;
        s.eVar16 = s.prop34 = s.prop39 = s.pageName;
    }
    s.t();
    s.pageName = s.opg;
}
var sc_sendFormFlag = 0; //used for SASE Form Pages
addADPTracking = function(Mediareach, audioID, title) {
	supresslinkTrack = true;
	var tmpe = s.events;
	var tp = s.pageName;
	var contextValue = s.contextData;
	var lName = "Audio " + Mediareach + " % Reached";
	s.contextData = "";
	s.linkTrackVars = 'prop44,eVar24,eVar26,eVar73';
	s.linkTrackEvents = 'event59,event60,event61,eVar178';
	//s.events = "event";
	if (Mediareach > "1" || Mediareach < "99") {
		s.events = s.apl(s.events, "event61");
	}
	if (Mediareach == "100") {
		s.events = s.apl(s.events, "event60");
	}
	s.eVar24 = "Media reach " + Mediareach + "%";
	s.prop44 = audioID;
	s.eVar26 = audioID;
	s.eVar73 = title;
	s.eVar178 = getTimeParting("America/Los_Angeles");
	s.tl(this, 'o', lName);
	s.contextData = contextValue;
	s.eVar78 = s.eVar73 = s.eVar91 = "";
	utag_data.page_name = s.pageName = tp;
	s.events = tmpe;
	supresslinkTrack = false;
}
addADSTracking = function() {
    supresslinkTrack = true;
    var tmpe = s.events;
    var tp = s.pageName;
    var contextValue = s.contextData;
    s.contextData = "";
    s.linkTrackEvents = 'event59';
    //s.events = "";
    s.events = s.apl(s.events, "event59");
    //s.eVar24 = Mediareach;
    //s.prop44 = audioID;
    //s.eVar26 = audioID;
    utag_data.page_name = s.pageName = s.pageName + " : " + ".audio";
    //console.log(name+" .audio");
    s.prop28 = '';
    s.prop21 = '';
    s.prop18 = '';
    s.prop39 = s.eVar39 = '';
    //DWEP-1662 Starting//
    s.linkTrackVars = s.linkTrackVars + ",eVar178";
    s.eVar178 = getTimeParting("America/Los_Angeles");
    //DWEP-1662 Ending//
    s.tl(this, 'o', "audioID");
    s.contextData = contextValue;
    s.eVar78 = s.eVar73 = s.eVar91 = "";
    utag_data.page_name = s.pageName = tp;
    s.events = tmpe;
    supresslinkTrack = false;
}
//featurewalkthrough SPA LinkTracking-----
function fwLinkTrackProp() {
    s.pageURL = window.location.href;
    var fwSections = location.pathname.substring(1).split('/');
    if (window.location.host.match(/featurewalkthrough\.vmware/)) {
        s.prop1 = "featurewalkthrough";
        s.channel = "vmware";
    }
    s.prop2 = fwSections[1] ? fwSections[1] : undefined;
    s.prop3 = fwSections[2] ? fwSections[2] : undefined;
    s.prop4 = fwSections[3] ? fwSections[3] : undefined;
    s.prop5 = fwSections[4] ? fwSections[4] : undefined;
}
//---END---------- 
sendEID = function(eid) {
    supresslinkTrack = true;
    var olink = s.linkTrackVars;
    s.pageName = s.pageName.replace(": login", ": reg");
    s.linkTrackVars += ',eVar18,eVar71,eVar178';
    //VMWORLD eventHostIn Cookie Tracking Starting
    //if(window.location.href.indexOf("/web/profile/process") > -1){
    //starting
    /*
    console.log("Test Page Url is ", window.location.href);
    console.log("Test eventHostIn cookie value is :", getCookie1("eventHost"));
    if(getCookie1("eventHost") !== "") {
    	s.eVar174 = getCookie1("eventHost");
    	s.linkTrackVars = s.linkTrackVars + ",eVar174";
    }*/
    //}
    //VMWORLD eventHostIn Cookie Tracking Ending
    s.linkTrackEvents = 'event42';
    s.prop17 = 'EloquaID';
    s.prop18 = 'apps_scodevmw : EloquaID : 1';
    s.prop19 = 'apps_scodevmw';
    s.prop39 = s.pageName;
    s.eVar18 = eid;
    s.eVar71 = 'D=v18';
    tmpevt = s.events;
    s.events = 'event42';
    s.prop75 = s.account;
    //DWEP-1662 Starting//
    s.eVar178 = getTimeParting("America/Los_Angeles");
    //DWEP-1662 Ending//
    s.tl(this, 'o', 'EloquaID');
    if (s.eVar18) {
        s.visitor.setCustomerIDs({
            "customerID ": s.eVar18
        });
    }
    s.eVar18 = '';
    s.eVar71 = '';
    s.events = tmpevt;
    s.linkTrackEvents = '';
    s.linkTrackVars = olink;
    supresslinkTrack = false;
}
//vmworld sendeid start
sendEIDVmworld = function(email) {
    supresslinkTrack = true;
    s.linkTrackVars = 'prop39,eVar18,eVar71,events,prop75,eVar42,eVar142,prop74,eVar178';
    s.linkTrackEvents = 'event42';
    s.events = 'event42';
    var tmpevt1 = s.events;
    var tmplink1 = s.linkTrackVars;
    s.prop75 = s.account;
    s.prop39 = s.pageName;
    var hashedemailid = "";
    if (email.indexOf('@') > -1) {
        s.eVar42 = jQuery.sha256(email);
        hashedemailid = jQuery.sha256(email);
    } else {
        s.eVar42 = email;
        hashedemailid = email;
    }

    var productVersion = '';
    if (($('input[id="versionNo"]').attr('value')) != undefined && ($('input[id="productName"]').attr('value')) != undefined && ($('input[id="versionNo"]').attr('value')) != "") {
        productVersion = $('input[id="productName"]').attr('value') + " : " + $('input[id="versionNo"]').attr('value');
        s.eVar142 = productVersion;
    }
    setTimeout(function() {
        var visitorId = s.marketingCloudVisitorID;
        var dcsDataRegion = s.audienceManagerLocationHint;
    }, 3000);
    //DWEP-1662 Starting//
    s.eVar178 = getTimeParting("America/Los_Angeles");
    //DWEP-1662 Ending//
    s.tl(this, 'o', 'hashedemailid');
    if (s.eVar42) {
        if (email.indexOf('@') > -1) {
            s.visitor.setCustomerIDs({
                "hashedemail": {
                    "id": jQuery.sha256(email),
                    "authState": Visitor.AuthState.AUTHENTICATED
                },
                "customerID ": s.eVar42
            });
        } else {
            s.visitor.setCustomerIDs({
                "hashedemail": {
                    "id": email,
                    "authState": Visitor.AuthState.AUTHENTICATED
                },
                "customerID ": s.eVar42
            });
        }


    }
    s.eVar42 = '';
    s.events = tmpevt1;
    s.linkTrackEvents = '';
    s.linkTrackVars = tmplink1;
    s.events = "";
    supresslinkTrack = false;
}

//vmworld sendeid end

var eventsFormName = "";
var defSrc = "";
if (jQuery('#src').attr('value') != undefined && jQuery('#src').attr('value') != "") var defSrc = jQuery('#src').attr('value');
var defCid1 = "";
if (jQuery('#cid').attr('value') != undefined && jQuery('#cid').attr('value') != "") var defCid1 = jQuery('#cid').attr('value');
if (window.location.host == "vforum.jp" || window.location.host == "vmwcloudcamp.com" || ((window.location.host == "events.vmware.com" || window.location.host == "events-dev.vmware.com" || window.location.host == "events-uat2.vmware.com" || window.location.host == "events-stg.vmware.com" || window.location.host == "localhost:8080" || window.location.host == "events.vmware.com") && window.location.href.indexOf("/web/profile") > -1)) {
    sc_sendForm = function(email) {
        //for vmworld events web profile
        if (window.location.href.indexOf("/web/profile") > -1) {
            /*
		supresslinkTrack = true; 
		var tmplink = s.linkTrackVars;
       s.prop39 = s.pageName;
       var tmpevt1 = s.events;
		if (email != '' && Visitor && Visitor.AuthState && Visitor.AuthState.AUTHENTICATED) {
        email=email.toLowerCase();
        s.eVar42 = jQuery.sha256(email);

        visitor.setCustomerIDs({             
            "hashedemail":{
                "id": jQuery.sha256(email),
                "authState": Visitor.AuthState.AUTHENTICATED
            } 
        });
        var hashedemailid=jQuery.sha256(email);
        var productVersion='';
  if(($('input[id="versionNo"]').attr('value'))!=undefined && ($('input[id="productName"]').attr('value'))!=undefined &&($('input[id="versionNo"]').attr('value'))!= "")
           {
         
         productVersion=  $('input[id="productName"]').attr('value') + " : " + $('input[id="versionNo"]').attr('value');
         s.eVar142 = productVersion;
       
       }     
     setTimeout(function(){
       var visitorId= s.marketingCloudVisitorID;
       var dcsDataRegion= s.audienceManagerLocationHint;
        },3000);
                
    }
	 s.linkTrackVars = 'prop39,eVar18,eVar71,events,prop75,eVar42,eVar142,prop74';
      s.linkTrackEvents = 'event42';
    //s.eVar71 = 'D=v18';
   
	s.events = 'event42';
  //s.events = "";
	//s.events = s.apl(s.events, "event42");
    s.prop75 = s.account;
	//console.log("Test eVar42 fired and the host is "+ window.location.host + "account "+ s.account);
    s.tl(this, 'o', 'hashedemailid');
    if (s.eVar42) {s.visitor.setCustomerIDs({"customerID ": s.eVar42});}
    //s.eVar18 = '';
    //s.eVar71 = '';
    s.eVar42 = '';
   s.events = tmpevt1;
   s.linkTrackEvents = '';
    s.linkTrackVars = tmplink;
	s.events = "";
	supresslinkTrack = false;
	*/
            sendEIDVmworld(email);
        }
        //ending
        else {
            var defcid = defCid1 || '';
            //var email = "";
            if (typeof defcid == 'object') {
                email = defcid[1];
                defcid = defcid[0];
            }
            var varCid = "";
            var varSrcId = "";
            var c_cookie = getCookie('s_campaign');
            var c_int_cid = getCookie('int_cid');
            var int_srcId = getCookie('int_src_id');
            var ext_srcId = getCookie('ext_src_id');
            var olink = s.linkTrackVars;
            if (c_cookie != '') {
                varCid = c_cookie;
            } else if (c_int_cid != '') {
                varCid = c_int_cid;
            } else if (defcid != '') {
                varCid = defcid;
            }
            if (int_srcId != '') {
                varSrcId = int_srcId;
            } else if (ext_srcId != '') {
                varSrcId = ext_srcId;
            } else {
                if (defSrc != "") varSrcId = defSrc;
            }
            //Form Fill - SRC/CID Default Value Passing Starting
            var defaultsrc = "";
            if (jQuery('#defaultsrc').attr('value') != undefined && jQuery('#defaultsrc').attr('value') != "") defaultsrc = jQuery('#defaultsrc').attr('value');
            var defaultcid = "";
            if (jQuery('#defaultcid').attr('value') != undefined && jQuery('#defaultcid').attr('value') != "") defaultcid = jQuery('#defaultcid').attr('value');
            s.linkTrackVars = s.linkTrackVars + ",eVar170,eVar171";
            s.eVar170 = defaultcid;
            s.eVar171 = defaultsrc;
            //Form Fill - SRC/CID Default Value Passing Ending
            //check for external then internal and then default.
            if (c_cookie != '') {
                s.campaign = c_cookie.trim();
                if (s.campaign != undefined && s.campaign != "") {
                    var hexValueExternal, i;
                    var ext_campaign = s.campaign;
                    var encodedDataExternal = "";
                    for (i = 0; i < ext_campaign.length; i++) {
                        hexValueExternal = ext_campaign.charCodeAt(i).toString(16);
                        encodedDataExternal += ("000" + hexValueExternal).slice(-4);
                    }
                    s.eVar164 = encodedDataExternal;
                }
                s.linkTrackVars = s.linkTrackVars + ',campaign,eVar164';
            }
            if (c_int_cid != '') {
                s.eVar37 = c_int_cid.trim();
                if (s.eVar37 != undefined && s.eVar37 != "") {
                    var hexValueInternal, i;
                    var int_campaign = s.eVar37;
                    var encodedDataInternal = "";
                    for (i = 0; i < int_campaign.length; i++) {
                        hexValueInternal = int_campaign.charCodeAt(i).toString(16);
                        encodedDataInternal += ("000" + hexValueInternal).slice(-4);
                    }
                    s.eVar165 = encodedDataInternal;
                }
                s.linkTrackVars = s.linkTrackVars + ',eVar37,eVar165';
            }
            if (c_cookie == '' && c_int_cid == '') {
                s.campaign = defcid.trim();
                if (s.campaign != undefined && s.campaign != "") {
                    var hexValueExternal, i;
                    var ext_campaign = s.campaign;
                    var encodedDataExternal = "";
                    for (i = 0; i < ext_campaign.length; i++) {
                        hexValueExternal = ext_campaign.charCodeAt(i).toString(16);
                        encodedDataExternal += ("000" + hexValueExternal).slice(-4);
                    }
                    s.eVar164 = encodedDataExternal;
                }
                s.linkTrackVars = s.linkTrackVars + ',campaign,eVar164';
            }
            //check for int src cookie
            if (int_srcId != '' && ext_srcId != '') {
                s.eVar13 = int_srcId;
                s.eVar32 = ext_srcId;
                s.linkTrackVars = s.linkTrackVars + ',eVar13,eVar32';
            } else if (int_srcId != '') {
                //s.prop30 = int_srcId;
                //s.eVar13 = 'D=c30';
                s.eVar13 = int_srcId;
                s.linkTrackVars = s.linkTrackVars + ',eVar13';
            } else if (ext_srcId != '') { //check for ext src cookie
                //s.prop32 = ext_srcId;
                //s.eVar32 = 'D=c32';
                s.eVar32 = ext_srcId;
                s.linkTrackVars = s.linkTrackVars + ',eVar32';
            } else {
                s.linkTrackVars = s.linkTrackVars + ',eVar32,prop32';
                s.prop32 = varSrcId;
                s.eVar32 = varSrcId;
                //console.log("Test eVar32 value when def src is present is: "+ s.eVar32);
            }
            //VMWORLD eventHostIn Cookie Tracking Starting
            //if(window.location.href.indexOf("/web/profile/process") > -1){
            //starting
            /*console.log("Test Page Url is ", window.location.href);
            console.log("Test eventHostIn cookie value is :", getCookie1("eventHost"));
            if(getCookie1("eventHost") !== "") {
            	s.eVar174 = getCookie1("eventHost");
            	s.linkTrackVars = s.linkTrackVars + ",eVar174";
            }*/
            //}
            //check for eVal
            if (email != '') {
                //Added for DWEP-1550 Starting
                if (email.indexOf('@') > -1) {
                    email = email.toLowerCase();
                    s.eVar42 = jQuery.sha256(email);
                } else {
                    s.eVar42 = email;
                }

                s.linkTrackVars = s.linkTrackVars + ',eVar42';
                if (email.indexOf("@") > -1) {
                    visitor.setCustomerIDs({
                        "hashedemail": {
                            "id": jQuery.sha256(email),
                            "authState": Visitor.AuthState.AUTHENTICATED
                        }
                    });
                } else {
                    visitor.setCustomerIDs({
                        "hashedemail": {
                            "id": email,
                            "authState": Visitor.AuthState.AUTHENTICATED
                        }
                    });
                }
                //Added for DWEP-1550 Ending
                var hashedemailid = jQuery.sha256(email);
                var visitorId = s.marketingCloudVisitorID;
                var dcsDataRegion = s.audienceManagerLocationHint;
                if (dcsDataRegion == "" || dcsDataRegion == undefined || dcsDataRegion == null || dcsDataRegion == '9' || dcsDataRegion == '11' || dcsDataRegion == '7' || dcsDataRegion == '6') {
                    dcsDataRegion = '3';
                }
                //DMP Krux Form Submission Event
                //start
                var attribute_string = digitalData.page.pageInfo.pageName;
                if (c_int_cid != '' || int_srcId != '' || ext_srcId != '') {
                    if (c_int_cid != '') {
                        attribute_string = attribute_string + "&int_cid=" + c_int_cid;
                    }
                    if (int_srcId != '') {
                        attribute_string = attribute_string + "&int_srcId=" + int_srcId;
                    }
                    if (ext_srcId != '') {
                        attribute_string = attribute_string + "&ext_srcId=" + ext_srcId;
                    }
                }
                //VMware cloud's user match pixel.
                // loadKruxusermatchPixelCloud(hashedemailid);
                //deanon api call
                /*$.ajax({
                  url: "https://apigw.vmware.com/v1/m4/api/dmp/deanon-api",
                  method: "POST",
                  type: "POST",
                  dataType: "application/json",
                  Accept: "application/json",
                  data: {
                    "emailHashed": hashedemailid,
                    "visitorId": visitorId,
                    "dcsDataRegion": dcsDataRegion
                  },
                  success: function (data) {
                    //console.log("success");
                  },
                    error: function (xhr, ajaxOptions, thrownError) {
                    console.log(xhr.status);
                    console.log(thrownError);
                  }
                })*/
            }
            //if int or src cookies are present.
            /*if (varCid != '' || varSrcId != '') {
              s.sendFormEvent('s', s.pageName, formname);
              s.linkTrackVars = olink;
              s.campaign = '';
              s.eVar37 = '';
              s.eVar32 = '';
              s.eVar13 = '';
              s.eVar42 = '';
            } else {
              s.sendFormEvent('s', s.pageName, formname);
            }*/
            //s.sendFormEvent('s', s.pageName, "reg-success");
            s.events = "event25";
            s.linkTrackEvents = "event25";
            s.eVar17 = s.pageName + " : " + formname;
            s.linkTrackVars = s.linkTrackVars + ",eVar17,events,eVar178";
            //DWEP-1662 Starting//
            s.eVar178 = getTimeParting("America/Los_Angeles");
            //DWEP-1662 Ending//
            s.tl(this, 'o', 'Form Analysis');
            //s.sendFormEvent('s', s.pageName, formname);
            if (typeof popupRefresh !== "undefined" && typeof popupFormSubmissionClick !== "undefined" && popupRefresh == 1) {
                popupFormClick = 1;
                popupFormSubmissionClick = 1;
            } else {
                if (typeof mainpopupRefresh !== "undefined") {
                    mainpopupRefresh = 0;
                }
            }
            s.linkTrackVars = olink;
            s.campaign = '';
            s.eVar37 = '';
            s.eVar32 = '';
            s.eVar13 = '';
            s.eVar42 = '';
            s.eVar165 = '';
            s.eVar164 = '';
        }
    }
} else {
    sc_sendForm = function(formname, defcid, rNumb) {
        sc_sendFormFlag = 1;
        /*
        if(window.location.origin == "https://vforum.vmware.com"){
        $('body').append('<div class="loader-overlay"><div class="loader"><img src="/content/dam/digitalmarketing/vmware/global-icons/ajax_loader.gif"></div></div>');

        $(".loader-overlay").css({

            "position": "fixed",

            "top": "0",

            "bottom": "0",

            "left": "0",

            "right": "0",

            "background": "#0000004a",

            "z-index": "999",

            "display": "flex",

            "align-items": "center",

            "justify-content": "center"

        });

        $(".loader-overlay img").css({

            "border-radius": "10px"

        });
        }
        */
        var defcid = defcid || '';
        var email = "";
        if (typeof saseFormAbon != "undefined") {
            saseFormAbon = 0;
        }
        if (typeof defcid == 'object') {
            email = defcid[1];
            defcid = defcid[0];
        }
        if (((window.location.host == "events.vmware.com" || window.location.host == "events-dev.vmware.com" || window.location.host == "events-uat2.vmware.com" || window.location.host == "events-stg.vmware.com" || window.location.host == "localhost:8080" || window.location.host == "events.vmware.com") && (window.location.href.indexOf("/web/registration") > -1 || window.location.href.indexOf("web/resendActivationEmail") > -1))) {
            email = formname;
            if (window.location.href.indexOf("/web/registration") > -1) {
                formname = "registrationForm";
                //eventsFormName = formname;
            } else {
                formname = "registrationSuccessForm";
            }

        }
        var varCid = "";
        var varSrcId = "";
        var c_cookie = getCookie('s_campaign');
        var c_int_cid = getCookie('int_cid');
        var int_srcId = getCookie('int_src_id');
        var ext_srcId = getCookie('ext_src_id');
        var olink = s.linkTrackVars;
        if (c_cookie != '') {
            varCid = c_cookie;
        } else if (c_int_cid != '') {
            varCid = c_int_cid;
        } else if (defcid != '') {
            varCid = defcid;
        }
        if (int_srcId != '') {
            varSrcId = int_srcId;
        } else if (ext_srcId != '') {
            varSrcId = ext_srcId;
        } else {
            if (defSrc != "") varSrcId = defSrc;
        }
        //VMWORLD eventHostIn Cookie Tracking Starting
        //if(window.location.href.indexOf("/web/profile/process") > -1){
        //starting
        /*console.log("Test Page Url is ", window.location.href);
        console.log("Test eventHostIn cookie value is :", getCookie1("eventHost"));
        if(getCookie1("eventHost") !== "") {
        	s.eVar174 = getCookie1("eventHost");
        	s.linkTrackVars = s.linkTrackVars + ",eVar174";
        }*/
        //}
        //Form Fill - SRC/CID Default Value Passing Starting
        var defaultsrc = "";
        if (jQuery('#defaultsrc').attr('value') != undefined && jQuery('#defaultsrc').attr('value') != "") defaultsrc = jQuery('#defaultsrc').attr('value');
        var defaultcid = "";
        if (jQuery('#defaultcid').attr('value') != undefined && jQuery('#defaultcid').attr('value') != "") defaultcid = jQuery('#defaultcid').attr('value');
        s.linkTrackVars = s.linkTrackVars + ",eVar170,eVar171";
        s.eVar170 = defaultcid;
        s.eVar171 = defaultsrc;
        //Form Fill - SRC/CID Default Value Passing Ending
        //check for external then internal and then default.
        if (c_cookie != '') {
            s.campaign = c_cookie.trim();
            if (s.campaign != undefined && s.campaign != "") {
                var hexValueExternal, i;
                var ext_campaign = s.campaign;
                var encodedDataExternal = "";
                for (i = 0; i < ext_campaign.length; i++) {
                    hexValueExternal = ext_campaign.charCodeAt(i).toString(16);
                    encodedDataExternal += ("000" + hexValueExternal).slice(-4);
                }
                s.eVar164 = encodedDataExternal;
            }
            s.linkTrackVars = s.linkTrackVars + ',campaign,eVar164';
        }
        if (c_int_cid != '') {
            s.eVar37 = c_int_cid.trim();
            if (s.eVar37 != undefined && s.eVar37 != "") {
                var hexValueInternal, i;
                var int_campaign = s.eVar37;
                var encodedDataInternal = "";
                for (i = 0; i < int_campaign.length; i++) {
                    hexValueInternal = int_campaign.charCodeAt(i).toString(16);
                    encodedDataInternal += ("000" + hexValueInternal).slice(-4);
                }
                s.eVar165 = encodedDataInternal;
            }
            s.linkTrackVars = s.linkTrackVars + ',eVar37,eVar165';
        }
        if (c_cookie == '' && c_int_cid == '') {
            s.campaign = defcid.trim();
            if (s.campaign != undefined && s.campaign != "") {
                var hexValueExternal, i;
                var ext_campaign = s.campaign;
                var encodedDataExternal = "";
                for (i = 0; i < ext_campaign.length; i++) {
                    hexValueExternal = ext_campaign.charCodeAt(i).toString(16);
                    encodedDataExternal += ("000" + hexValueExternal).slice(-4);
                }
                s.eVar164 = encodedDataExternal;
            }
            s.linkTrackVars = s.linkTrackVars + ',campaign,eVar164';
        }
        //check for int src cookie
        if (int_srcId != '' && ext_srcId != '') {
            s.eVar13 = int_srcId;
            s.eVar32 = ext_srcId;
            s.linkTrackVars = s.linkTrackVars + ',eVar13,eVar32';
        } else if (int_srcId != '') {
            //s.prop30 = int_srcId;
            //s.eVar13 = 'D=c30';
            s.eVar13 = int_srcId;
            s.linkTrackVars = s.linkTrackVars + ',eVar13';
        } else if (ext_srcId != '') { //check for ext src cookie
            //s.prop32 = ext_srcId;
            //s.eVar32 = 'D=c32';
            s.eVar32 = ext_srcId;
            s.linkTrackVars = s.linkTrackVars + ',eVar32';
        } else {
            s.linkTrackVars = s.linkTrackVars + ',eVar32';
            //s.prop32 = varSrcId;
            s.eVar32 = varSrcId;
            //console.log("Test eVar32 value when def src is present is: "+ s.eVar32);
        }
        //check for eVal
        if (email != '') {
            //Added for DWEP-1550 Starting
            if (email.indexOf('@') > -1) {
                email = email.toLowerCase();
                s.eVar42 = jQuery.sha256(email);
            } else {
                s.eVar42 = email;
            }
            //Added for DWEP-1550 Ending
            s.linkTrackVars = s.linkTrackVars + ',eVar42';
            if (((window.location.host !== "events.vmware.com" || window.location.host !== "events-dev.vmware.com" || window.location.host !== "events-uat2.vmware.com" || window.location.host !== "events-stg.vmware.com" || window.location.host !== "localhost:8080" || window.location.host !== "events.vmware.com") && (window.location.href.indexOf("/web/registration") < 0 || (location.href.toLowerCase().indexOf("sase-review.vmware.com/resources") < 0 || location.href.toLowerCase().indexOf("sase.vmware.com/resources") < 0 || window.location.href.toLowerCase().indexOf("sase.vmware.com/get-started") < 0)))) {
                if (email.indexOf('@') > -1) {
                    visitor.setCustomerIDs({
                        "hashedemail": {
                            "id": jQuery.sha256(email),
                            "authState": Visitor.AuthState.AUTHENTICATED
                        }
                    });
                } else {
                    visitor.setCustomerIDs({
                        "hashedemail": {
                            "id": email,
                            "authState": Visitor.AuthState.AUTHENTICATED
                        }
                    });
                }
            }
            var hashedemailid = jQuery.sha256(email);
            var visitorId = s.marketingCloudVisitorID;
            var dcsDataRegion = s.audienceManagerLocationHint;
            if (dcsDataRegion == "" || dcsDataRegion == undefined || dcsDataRegion == null || dcsDataRegion == '9' || dcsDataRegion == '11' || dcsDataRegion == '7' || dcsDataRegion == '6') {
                dcsDataRegion = '3';
            }
            //DMP Krux Form Submission Event
            //start
            var attribute_string = digitalData.page.pageInfo.pageName;
            if (c_int_cid != '' || int_srcId != '' || ext_srcId != '') {
                if (c_int_cid != '') {
                    attribute_string = attribute_string + "&int_cid=" + c_int_cid;
                }
                if (int_srcId != '') {
                    attribute_string = attribute_string + "&int_srcId=" + int_srcId;
                }
                if (ext_srcId != '') {
                    attribute_string = attribute_string + "&ext_srcId=" + ext_srcId;
                }
            }
            //deanon api call       
            /*jQuery.ajax({
              url: "https://apigw.vmware.com/v1/m4/api/dmp/deanon-api",
              method: "POST",
              type: "POST",
              dataType: "application/json",
              Accept: "application/json",
              data: {
                "emailHashed": hashedemailid,
                "visitorId": visitorId,
                "dcsDataRegion": dcsDataRegion
              },
              success: function (data) {
                console.log("deanonsasuccess");
              }
            })*/
        }
        //if int or src cookies are present.
        if (varCid != '' || varSrcId != '') {

            if ((location.href.toLowerCase().indexOf("sase-review.vmware.com/resources") > -1 || location.href.toLowerCase().indexOf("sase.vmware.com/resources") > -1 || window.location.href.indexOf('sase.vmware.com/get-started') > -1) && location.href.toLowerCase().indexOf('-ty-') < 0 && location.href.toLowerCase().indexOf('/ty') < 0 && location.href.toLowerCase().indexOf('thank-you') < 0) {

                s.events = s.events + ",event25";
                s.eVar17 = s.pageName + " : TheForm";
                s.linkTrackEvents = s.linkTrackEvents + ",event25";
                s.linkTrackVars = s.linkTrackVars + ",eVar17,eVar178";
                supresslinkTrack = true;
                //DWEP-1662 Starting//
                s.eVar178 = getTimeParting("America/Los_Angeles");
                //DWEP-1662 Ending//
                s.tl(this, 'o', 'Form Analysis');
                supresslinkTrack = false;
				if (typeof popupRefresh !== "undefined" && typeof popupFormSubmissionClick !== "undefined" && popupRefresh == 1) {
                    popupFormClick = 1;
                    popupFormSubmissionClick = 1;
                } else {
                    if (typeof mainpopupRefresh !== "undefined") {
                        mainpopupRefresh = 0;
                    }
                }
            } else if (((window.location.host == "events.vmware.com" || window.location.host == "events-dev.vmware.com" || window.location.host == "events-uat2.vmware.com" || window.location.host == "events-stg.vmware.com" || window.location.host == "localhost:8080" || window.location.host == "events.vmware.com") && (window.location.href.indexOf("/web/registration") > -1 || window.location.href.indexOf("web/resendActivationEmail") > -1))) {
                s.events = s.events + ",event25";
                s.eVar17 = s.pageName + " : " + formname;
                s.linkTrackEvents = s.linkTrackEvents + ",event25";
                s.linkTrackVars = s.linkTrackVars + ",eVar17,eVar178";
                supresslinkTrack = true;
                //DWEP-1662 Starting//
                s.eVar178 = getTimeParting("America/Los_Angeles");
                //DWEP-1662 Ending//
                s.tl(this, 'o', 'Form Analysis');
                supresslinkTrack = false;
				if (typeof popupRefresh !== "undefined" && typeof popupFormSubmissionClick !== "undefined" && popupRefresh == 1) {
                    popupFormClick = 1;
                    popupFormSubmissionClick = 1;
                } else {
                    if (typeof mainpopupRefresh !== "undefined") {
                        mainpopupRefresh = 0;
                    }
                }
            } else {
                //s.sendFormEvent('s', s.pageName, formname);
                s.events = "event25";
                s.linkTrackEvents = "event25";
                s.eVar17 = s.pageName + " : " + formname;
                s.linkTrackVars = s.linkTrackVars + ",eVar17,events,eVar178,eVar167";
                //DWEP-1662 Starting//
                s.eVar178 = getTimeParting("America/Los_Angeles");
                //DWEP-1662 Ending//
				//DWEP-2352 Starting//
				if(window.location.pathname == "/get-started.html") {       
                  s.eVar167 = selectArr;
			        }
				//DWEP-2352 Ending//
                s.tl(this, 'o', 'Form Analysis');
                //s.sendFormEvent('s', s.pageName, formname);
                if (typeof popupRefresh !== "undefined" && typeof popupFormSubmissionClick !== "undefined" && popupRefresh == 1) {
                    popupFormClick = 1;
                    popupFormSubmissionClick = 1;
                } else {
                    if (typeof mainpopupRefresh !== "undefined") {
                        mainpopupRefresh = 0;
                    }
                }
            }

            if (s.eVar42) {
                if (email.indexOf('@') > -1) {
                    visitor.setCustomerIDs({
                        "hashedemail": {
                            "id": jQuery.sha256(email),
                            "authState": Visitor.AuthState.AUTHENTICATED
                        }
                    });
                } else {
                    visitor.setCustomerIDs({
                        "hashedemail": {
                            "id": email,
                            "authState": Visitor.AuthState.AUTHENTICATED
                        }
                    });
                }
            }

            s.linkTrackVars = olink;
            s.campaign = '';
            s.eVar37 = '';
            s.eVar32 = '';
            s.eVar13 = '';
            s.eVar42 = '';
            s.eVar165 = '';
            s.eVar164 = '';
        } else {
            if ((location.href.toLowerCase().indexOf("sase-review.vmware.com/resources") > -1 || location.href.toLowerCase().indexOf("sase.vmware.com/resources") > -1 || window.location.href.indexOf('sase.vmware.com/get-started') > -1) && location.href.toLowerCase().indexOf('-ty-') < 0 && location.href.toLowerCase().indexOf('/ty') < 0 && location.href.toLowerCase().indexOf('thank-you') < 0) {

                s.events = s.events + ",event25";
                s.eVar17 = s.pageName + " : TheForm";
                s.linkTrackEvents = s.linkTrackEvents + ",event25";
                s.linkTrackVars = s.linkTrackVars + ",eVar17,eVar178";
                supresslinkTrack = true;
                //DWEP-1662 Starting//
                s.eVar178 = getTimeParting("America/Los_Angeles");
                //DWEP-1662 Ending//
                s.tl(this, 'o', 'Form Analysis');
                supresslinkTrack = false;
				if (typeof popupRefresh !== "undefined" && typeof popupFormSubmissionClick !== "undefined" && popupRefresh == 1) {
                    popupFormClick = 1;
                    popupFormSubmissionClick = 1;
                } else {
                    if (typeof mainpopupRefresh !== "undefined") {
                        mainpopupRefresh = 0;
                    }
                }
            } else if (((window.location.host == "events.vmware.com" || window.location.host == "events-dev.vmware.com" || window.location.host == "events-uat2.vmware.com" || window.location.host == "events-stg.vmware.com" || window.location.host == "localhost:8080" || window.location.host == "events.vmware.com") && (window.location.href.indexOf("/web/registration") > -1 || window.location.href.indexOf("web/resendActivationEmail") > -1))) {
                s.events = s.events + ",event25";
                s.eVar17 = s.pageName + " : " + formname;
                s.linkTrackEvents = s.linkTrackEvents + ",event25";
                s.linkTrackVars = s.linkTrackVars + ",eVar17,eVar178";
                supresslinkTrack = true;
                //DWEP-1662 Starting//
                s.eVar178 = getTimeParting("America/Los_Angeles");
                //DWEP-1662 Ending//
                s.tl(this, 'o', 'Form Analysis');
                supresslinkTrack = false;
				if (typeof popupRefresh !== "undefined" && typeof popupFormSubmissionClick !== "undefined" && popupRefresh == 1) {
                    popupFormClick = 1;
                    popupFormSubmissionClick = 1;
                } else {
                    if (typeof mainpopupRefresh !== "undefined") {
                        mainpopupRefresh = 0;
                    }
                }
            } else {
                //s.sendFormEvent('s', s.pageName, formname);
                s.events = "event25";
                s.linkTrackEvents = "event25";
                s.eVar17 = s.pageName + " : " + formname;
                s.linkTrackVars = s.linkTrackVars + ",eVar17,events,eVar178";
                //DWEP-1662 Starting//
                s.eVar178 = getTimeParting("America/Los_Angeles");
                //DWEP-1662 Ending//
                s.tl(this, 'o', 'Form Analysis');
                //s.sendFormEvent('s', s.pageName, formname);
                if (typeof popupRefresh !== "undefined" && typeof popupFormSubmissionClick !== "undefined" && popupRefresh == 1) {
                    popupFormClick = 1;
                    popupFormSubmissionClick = 1;
                } else {
                    if (typeof mainpopupRefresh !== "undefined") {
                        mainpopupRefresh = 0;
                    }
                }
            }
            if (s.eVar42) {
                if (email.indexOf('@') > -1) {
                    visitor.setCustomerIDs({
                        "hashedemail": {
                            "id": jQuery.sha256(email),
                            "authState": Visitor.AuthState.AUTHENTICATED
                        }
                    });
                } else {
                    visitor.setCustomerIDs({
                        "hashedemail": {
                            "id": email,
                            "authState": Visitor.AuthState.AUTHENTICATED
                        }
                    });
                }
            }

        }
    }
}
addPTracking = function(name) {
    var tp = utag_data.page_name;
    utag_data.page_name = utag_data.page_name + ' : ' + name;
    //utag.view(utag_data, null, [15]);
    utag_data.page_name = tp;
}

addFTracking = function(name) {
    s.events = "";
    s.events = s.apl(s.events, "event43");
    var tp = s.pageName;
    s.eVar17 = tp + ':' + name;
    utag_data.page_name = s.pageName = s.pageName + " : " + name;
    //s.prop20 = s.c_r("lpv"); //commented for DWEP-1640 LPA
    s.prop28 = '';
    s.prop21 = '';
    s.t();
    utag_data.page_name = s.pageName = tp;
    s.events = "";
    s.eVar17 = "";
}


addVTracking = function(id, name, time) {
    supresslinkTrack = true;
    var tmpe = s.events;
    var tp = s.pageName;
    var contextValue = s.contextData;
    s.contextData = "";
    s.events = "";
    s.events = s.apl(s.events, "event48");
    s.eVar78 = id;
    s.eVar73 = name;
    s.eVar91 = time;
    if (typeof name === "object") {
        utag_data.page_name = s.pageName = s.pageName + " : " + name[0] + ".video";
    } else {
        utag_data.page_name = s.pageName = s.pageName + " : " + name + ".video";
    }
    //s.prop20 = s.c_r("lpv");  //commented for DWEP-1640 LPA
    s.prop28 = '';
    s.prop21 = '';
    s.prop18 = '';
    s.prop39 = s.eVar39 = '';
    s.t();
    s.contextData = contextValue;
    s.eVar78 = s.eVar73 = s.eVar91 = "";
    utag_data.page_name = s.pageName = tp;
    s.events = tmpe;
    supresslinkTrack = false;
}

getH = function(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.hash.substr(1));
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
if (typeof URLobj == 'undefined') {
    var URLobj = {};
}
URLobj.init = function(pathname) {
    this.pathname = (pathname) ? pathname : document.location.pathname;
    /* logged in or out? */
    this.lcookie = getCookie("ObSSOCookie");
    this.prop7 = (this.lcookie && this.lcookie != "loggedout" && !this.lcookie.match(/loggedout/)) ? "Logged In" : "Logged Out";
    this.prop15 = "";
    /* international */
    this.pcookie = getCookie("pszGeoPref");
    if (this.pcookie && this.pcookie != "") {
        if (this.pcookie.match(/^\w+$/)) {
            this.prop26 = this.pcookie;
        }
    }
    this.country = ["de", "fr", "cn", "jp", "es", "latam", "ru", "tw", "at", "br", "it", "kr", "ap", "cz", "nl", "pl", "ch", "se", "benl", "befr", "caen", "cafr", "uk", "au", "in", "nz", "hu", "mena", "eu", "il", "tr", "mx", "co", "ar", "pe", "cl", "ve"];
    this.siteid = ["vmwde", "vmwfr", "vmwcn", "vmwjp", "vmwes", "vmwlasp", "vmwru", "vmwtw", "vmwat", "vmwbr", "vmwit", "vmwkr", "vmwap", "vmwcz", "vmwnl", "vmwpl", "vmwch", "vmwse", "vmwbenl", "vmwbefr", "vmwcaen", "vmwcafr", "vmwuk", "vmwau", "vmwin", "vmwnz", "vmwhu", "vmwmena", "vmweu", "vmwil", "vmwtr", "vmwmx", "vmwco", "vmwar", "vmwpe", "vmwcl", "vmwve"];
    this.ccode = "vmware";
    this.ccodeidx = "undef";
    var domain_src = new Array("mylearn1"); /*source sites that need be combined*/
    var domain_target = new Array("mylearn"); /*target sites*/
    var icase = new Array("mylearn"); /*all sites that their url are not case sensitive*/
    var str_domain = document.location.host;
    var len = domain_src.length;
    var ilen = icase.length;
    for (var i = 0; i < len; i++) {
        if (str_domain.toLowerCase().indexOf(domain_src[i]) >= 0) {
            str_domain = str_domain.replace(domain_src[i], domain_target[i]);
            break;
        }
    }
    for (var i = 0; i < ilen; i++) {
        if (str_domain.toLowerCase().indexOf(icase[i]) >= 0) {
            this.pathname = this.pathname.toLowerCase();
            break;
        }
    }
    this.host = new Array();
    this.host = str_domain.split('.');
    if (this.host.length > 2) {
        if (this.host[1] != "vmware") {
            this.subdomain = (this.host[0] != "www" && this.host[0] != "") ? this.host[1] + "," + this.host[0] : this.host[1];
        } else {
            this.subdomain = this.host[0] || "www";
        }
    } else if (this.host[0] != "vmware") {
        this.subdomain = this.host[0];
    } else {
        this.subdomain = "www";
    }
    /* path & pagename */
    this.pagename = "";
    this.path = new Array();
    this.path = this.pathname.split('/');
    this.path.shift();
    this.file = this.path.pop();
    this.file = this.file.replace(/;?jsessionid.+$/i, "");
    /* check for international site */
    /* for CA/FR and CA/EN */
    var countrydir = this.path[0];
    if (countrydir == "ca" || countrydir == "be") {
        countrydir += this.path[1];
    }
    for (var c = 0; c < this.country.length; c++) {
        if (this.country[c] == countrydir) {
            this.ccode = this.siteid[c];
            this.ccodeidx = c;
        }
    }
    this.hier1 = this.ccode + ",";
    /* check for subdomain */
    if (this.subdomain && this.subdomain != "www") {
        this.hier1 += this.subdomain + ",";
    }
    /* set s.heir1 */
    /* parse query string */
    if (document.location.search) {
        var qs = {};
        document.location.search.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function($0, $1, $2, $3) {
            qs[$1] = $3;
        });
        this.id = qs['id'];
        this.p = qs['p'];
        this.externalId = qs['externalId'];
        this.q = qs['q'];
        this.file = qs['file'] ? this.file + ' : ' + qs['file'] : this.file;
        this.k = qs['k'];
    }
    /* knowledge base */
    if (this.subdomain == "kb") {
        this.hier1 = this.hier1.replace(/,microsites/, "");
        if (this.externalId) {
            this.hier1 += ("," + this.file);
            this.file = this.externalId;
        } else if (this.pathname.match("/selfservice/(microsites/)?search(Entry)?.do") || (this.pathname.match("/selfsupport/s3portal.portal") && this._pageLabel == "s3Portal_page_knova_search")) {
            if (document.forms[0].id.match(/searchForm/)) {
                this.prop6 = document.forms[0].searchString.value;
                this.prop15 = "Knova_Search";
            } else if (frames[0].document && frames[0].document.forms[0].searchString.value != "") {
                this.prop6 = frames[0].document.forms[0].searchString.value;
                this.prop15 = "Knova_Search";
            }
        }
    }
    /* add GSS search terms */
    if (this.subdomain == "gss") {
        this.prop6 = document.forms[0].txtSearch.value;
        if (!this.prop6) {
            this.prop6 = (this.k) ? this.k.toLowerCase() : '';
        }
        this.prop15 = "GSS_Search";
    }
    /* technical papers */
    if (this.pathname.match("/techresources/(cat/)?[0-9]+")) this.file = document.title;
    /* webcasts thank you */
    if (this.pathname.match("/a/webcasts/thankyou/recorded/(.+)$")) {
        this.hier1 = this.hier1.replace(/,recorded$/, "");
        this.file = "recorded";
    }
    /* Eloqua confirmation pages */
    if (window.location.host.match(/info\.vmware\.com/)) {
        if (typeof sc_conf_page != "undefined" && sc_conf_page == 1) {
            this.events = "event28";
            if (document.title == "VMWorld 2009 Pre-registration Confirmation") this.file = document.title;
        }
    }
    /* Partner central */
    if (typeof(sfPageName) != "undefined") {
        this.file += " : " + sfPageName;
    }
};
/* Form Analysis Config (should be above doPlugins section) */
s.trackFormList = true;
s.formList = "TheForm,16_Q1_Jan_Form_US_Microsite_Launch,vmq_reg_user,Future_Net_Form,fnet_contact,SASE_1116_REG,SASE_2517_REG"; // Names of forms to track
/*s.trackFormList=false;*/
s.trackPageName = true; // Append the name of the page to the form name
//s.useCommerce = false;
s.useCommerce = true;
s.varUsed = "eVar17";
s.eventList = "event24,event25,"; /*abandon,success,error*/
s.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,iso,rar,gz,tar,gzip,jar,ovf,dmg,msi,bundle,mp4,flv,ptx,ics,dmg,pkg,apk";
// internal traffic start
var host_to_exclude = ["techtest.vmware.com", "vmtestdrive.com", "vmtestdrive.com", "portal.vmtestdrive.com", "kb.vmtestdrive.com", "cloudhealth.vmware.com"];

checkInternalTraffic = function() {
    var getHost = window.location.host;
    var isInternalDomain = /test|dev|stage|stg|qa|localhost|wcm-training|lt|review|uat/.test(getHost);
    var canonical = document.querySelector('link[rel="canonical"]');
    if (canonical !== null) {
        if (canonical.href.includes("https://techtest.vmware.com/")) {
            isInternalDomain = false
        }
    }
    if (getHost.indexOf('vault.vmware.com') > -1) {
        isInternalDomain = false;
    }
    var isInternalWebsite = /vault.vmware.com|rd.eng.vmware.com|rd|source.vmware.com|hr.vmware.com|source-stg.vmware.com|hr-stg.vmware.com/.test(window.location.hostname);
    var cinternal = s.c_r("int_traffic");
    var isvmware = null;
    if (!(typeof dbInfo === "undefined" || dbInfo === null) && !(typeof dbInfo.company_name === "undefined" || dbInfo.company_name === null)) {
        isvmware = dbInfo.company_name.match(/vmware/i);
    }
    if ((isInternalDomain || isInternalWebsite || isvmware != null) && cinternal == "") {
        var t = new Date();
        var t1 = t.getTime() + 365 * 100 * 3600 * 24 * 1000;
        t.setTime(t1);
        s.c_w("int_traffic", '1', t); //expire in 100 years
        cinternal = s.c_r("int_traffic");
    }

    if (cinternal != "") {
        if (window.location.hostname == "vault.vmware.com") {
            s.account = "vmwarevault,vmwareinternaldata";
        } else if (window.location.hostname == "rd.eng.vmware.com" || window.location.hostname == "rd") {
            s.account = "vmwarerd,vmwareinternaldata";
        } else if (window.location.host == 'vmweb.vmware.com' || window.location.host == 'vmshare.vmware.com' || window.location.host == 'source.vmware.com' || window.location.host == 'hr.vmware.com' || window.location.host == 'source-stg.vmware.com' || window.location.host == 'hr-stg.vmware.com') {
            s.account = "vmwarevmweb,vmwareinternaldata";
        }
		else if(getHost.indexOf('sb-dev.gstools.vmware.com')>-1  || getHost.indexOf('sb-prod-staging.gstools.vmware.com')>-1 || getHost.indexOf('local-dev-analytics:8444')>-1 || getHost.indexOf('local-dev-analytics:8443')>-1
		|| getHost.indexOf('cs-prod-staging.gstools.vmware.com')>-1
|| getHost.indexOf('cs-dev.gstools.vmware.com')>-1
|| getHost.indexOf('ksa-staging.gstools.vmware.com')>-1
|| getHost.indexOf('ksa-dev.gstools.vmware.com')>-1
|| getHost.indexOf('mmgr-saas-dev.gstools.vmware.com')>-1
|| getHost.indexOf('tamportal-stg.gstools.vmware.com')>-1
|| getHost.indexOf('tsp-dev.gstools.vmware.com')>-1
|| getHost.indexOf('psengage-stg.gstools.vmware.com')>-1
	       
     ){
			s.account = "vmwarecxsdigitalexperiencedev";
		}
		else if(window.location.host.indexOf('pssolutionbuilder.vmware.com')>-1 || window.location.host.indexOf('tamservices.vmware.com') > -1
|| window.location.host.indexOf('acceleratorportal.vmware.com') > -1
|| window.location.host.indexOf('ksa.vmware.com') > -1
|| window.location.host.indexOf('migrationportal.vmware.com') > -1
|| window.location.host.indexOf('psengage.vmware.com') > -1){
			s.account = "vmwarecxsdigitalexperience,vmwareglobal";
		}
		else {
            if (isInternalDomain) {
                s.account = 'vmwaredev';
                s.prop75 = s.account;
            } else {
                s.account = 'vmwareinternaldata';
                s.prop70 = 1; // Set Value of cookie in prop
                s.prop75 = s.account; // Update Prop with Internal Trafic suite value
            }
        }

    }
}

//set cookie function
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";expires=" + expires + ";domain=.vmware.com;path=/"; //cname+"="+cvalue+"; "+expires+";domain = .vmware.com;path=/";
} //end
//get cookie function
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
// internal traffic end
var url = new URLobj.init();
//New Form Plugin Code Starting
var inlineFormsList = []; // To Store all the Inline Forms
var popupcheck = 0;
var inlineformIterator = 0; // To Iterate through all the Inline forms
var popupFormsList = []; // To Store all the pop-up forms
var popupFormIterator = 0; // To Iterate through all the pop-up forms
var noFormwithIDIterator = 0; // To add the number to the forms which doesn't have form id ex: TheForm1, TheForm2
var formAnalysisFlag = 0;
var inlineFormListFormField = []; // To Store all the Inline Forms with No Data Entered for Form Abandonment
var popupFormListFormField = []; // To Store all the popup Forms with No Data Entered for Form Abandonment
var currentPopupForm = -1;
var popupNext = ""; // To track Next Steps in Pop-up Forms
var formpopcloseFlag = 0; // To stop Form Abandonment on click of close after form submission in pop-up form
var popupFormSubmissionClick = 0;
var tempvv17 = ""; // to store pop-up form id on click of pop-up form button
var popupabond = ""; // to track eVar17 value for pop-up form abandonment by clicking outside the form
var popupRefresh = 0; // to track pop-up form abandonment on click of refresh button
var popupRefreshFormID = ""; // to track pop-up form abandonment on click of refresh button
var mainpopupRefresh = 0; // to track inline form abandonment on click of refresh button
var mainpopupRefreshFromID = []; // to track inline form abandonment on click of refresh button
var popupFieldFill = ""; // to track last input field filled by user if any for the pop-up form
var insidePopUpForm = 0; // used to track input fields for inline forms
var inlineFormLoadTrackingFlag = 0;
// Storing all the Popup Forms Starting
var popupFormCheck = function() {
    if (jQuery(".open-form-model").length) {
        jQuery(".open-form-model").each(function() {
            popupFormsList[popupFormIterator] = jQuery(this).attr("data-form-id");
            popupFormListFormField[popupFormIterator] = jQuery(this).attr("data-form-id") + " : (No Data Entered)";
            popupFormIterator++;
        })
    }
    //console.log("test popupformcheck method called");
    popupFormIterator = 0;
}
popupFormCheck();
// Storing all the Popup Forms Ending
//Storing all the Inline Forms Starting
if (jQuery('form').length) {
    jQuery('form').each(function() {
        if (typeof jQuery(this).attr('data-vmwareformname') !== "undefined") {
            if (typeof jQuery(this).attr('id') !== 'undefined') {
                if (jQuery(this).attr('id') !== "globalsearch") {
                    popupcheck = 0;
                    var formid = jQuery(this).attr('id');
                    for (i = 0; i < popupFormsList.length; i++) {
                        if (popupFormsList[i] === formid) {
                            popupcheck = 1;
                            break;
                        }
                    }
                    if (popupcheck == 0) {
                        inlineFormsList[inlineformIterator] = jQuery(this).attr("id").trim();
                        inlineFormListFormField[inlineformIterator] = jQuery(this).attr("id").trim() + " : (No Data Entered)";
                        inlineformIterator++;
                    }

                }
            } else {
                inlineFormsList[inlineformIterator] = "TheForm" + noFormwithIDIterator;
                inlineFormListFormField[inlineformIterator] = inlineFormsList[inlineformIterator] + " : (No Data Entered)";
                jQuery(this).attr('id', inlineFormsList[inlineformIterator]);
                inlineformIterator++;
                noFormwithIDIterator++;
            }
        }
    })
}
//Storing all the Inline Forms Ending

//Inline Form Load Tracking Starting
var inlineFormLoadTracking = function() {
    if (inlineFormLoadTrackingFlag == 0) {
        if (inlineFormsList.length) {

            if (s.events) {
                s.events = s.apl(s.events, "event43");
            } else {
                s.events = "event43";
            }
            s.eVar17 = s.pageName + " : " + inlineFormsList[0];
            for (var i = 1; i < inlineFormsList.length; i++) {
                s.eVar17 = s.eVar17 + " | " + inlineFormsList[i];
            }
            mainpopupRefresh = 1;

        }
        inlineFormLoadTrackingFlag = 1;
    }

}
//Inline Form Load Tracking Ending


//Next Button Click in Popup Form Tracking Starting

jQuery(document).on('mouseover', '.form-group.next-step .btn.next-step-btn', function() {
    var currentStep = jQuery('div.steps-panel').index(jQuery(this).parents('.steps-panel'));
    currentStep = jQuery(this).parents(".steps-panel").attr("id");
    popupNext = s.pageName + " : " + jQuery(this).parents("form").attr('id') + " : " + currentStep;
    if (!(jQuery(this).attr('onclick'))) {
        jQuery(this).attr('onclick', 's.linkTrackVars = "eVar17,eVar178,events";s.linkTrackEvents = "event128"; s.events = "event128";s.eVar17 =  s.pageName + " : "+ jQuery(this).parents("form").attr("id") + " : "+  jQuery(this).parents(".steps-panel").attr("id"); s.eVar178 = getTimeParting("America/Los_Angeles"); s.tl(this,"o","Form Analysis")')
    }

})
//Next Button Click in Popup Form Tracking Ending


//After Form Submission we have an option close button click, we shouldn't trigger Form Abandonment for click on it, for this we are using one flag Starting
jQuery(document).on('mouseover', 'a#close-form-modal', function() {
    formpopcloseFlag = 1;
})
//After Form Submission we have an option close button click, we shouldn't trigger Form Abandonment for click on it, for this we are using one flag Ending

//Popup Form Abandonment Tracking on clicking outside the popu-up starting
jQuery(document).on('click', '.steps-form-modal', function() {
    var x = jQuery(this);
    if (popupFormSubmissionClick != 1 && formpopcloseFlag != 1) {
        window.setTimeout(function() {
            if (x.attr('style').trim() === "display: none;") {
                if (popupFieldFill !== "") {
                    popupabond = s.pageName + " : " + x.find("form").attr('id') + " : (" + popupFieldFill + ")";
                    popupFieldFill = "";
                } else {
                    popupabond = s.pageName + " : " + x.find("form").attr('id') + " : (No Data Entered)";
                }
                s.linkTrackVars = "eVar17,events";
                s.linkTrackEvents = "event24";
                s.events = "event24";
                if (popupabond != "")
                    s.eVar17 = popupabond;
                popupRefresh = 0;
                popupRefreshFormID = "";
                //DWEP-1662 Starting//
                s.linkTrackVars = s.linkTrackVars + ",eVar178";
                s.eVar178 = getTimeParting("America/Los_Angeles");
                //DWEP-1662 Ending//
                s.tl(x, 'o', 'Form Analysis')
                popupabond = "";
                jQuery("form").attr("curform", "no");
                popupFieldFill = "";
                currentPopupForm = -1;
                popupFormCheck();

            }


        }, 1000)
    } else {
        formpopcloseFlag = 0;
        popupFormSubmissionClick = 0;
        popupFieldFill = "";
        currentPopupForm = -1;
        popupFormCheck();
    }
})
//Popup Form Abandonment Tracking on clicking outside the popu-up starting

// Tracking Form Load for popup form starting
jQuery(".open-form-model").click(function() {

    jQuery("form#" + jQuery(this).attr("data-form-id")).attr("curform", "yes");
    if (typeof jQuery(this).attr('data-form-id') !== "undefined") {
        tempvv17 = jQuery(this).attr('data-form-id').trim();
    }
    insidePopUpForm = 1;
    jQuery("form#" + tempvv17 + " input[data-lookup]").each(function() {
        if (typeof jQuery(this).attr('fieldfill') !== "undefined")
            popupFieldFill = jQuery(this).attr('fieldfill');
        jQuery(this).attr("onkeypress", "testingFieldFill(jQuery(this))")
    })
    for (var i = 0; i < popupFormsList.length; i++) {
        if (popupFormsList[i] == tempvv17) {
            currentPopupForm = i;
            //console.log("current popup form number is  : ", currentPopupForm);
        }
    }
    //popupFormIterator
    popupRefresh = 1;
    popupRefreshFormID = tempvv17;
    s.linkTrackVars = "eVar17,events,eVar178";
    s.linkTrackEvents = "event43";
    s.events = "event43";
    s.eVar17 = s.pageName + " : " + tempvv17;
    //s.setupFormAnalysis();
    //DWEP-1662 Starting//
    s.eVar178 = getTimeParting("America/Los_Angeles");
    //DWEP-1662 Ending//
    s.tl(this, 'o', 'Form Analysis')
    tempvv17 = "";
})
// Tracking Form Load for popup form ending

// Tracking input fields for any form starting
testingFieldFill = function(csel) {
    popupFieldFill = jQuery(csel).attr('id').toLowerCase();
    jQuery("form#" + jQuery(csel).parents("form").attr("id").trim() + " input[data-lookup]").each(function() {
        //jQuery(this).attr("fieldfill", jQuery(csel).attr('id'))
        if (insidePopUpForm !== 1) {
            for (var i = 0; i < inlineFormsList.length; i++) {
                if (inlineFormsList[i] == jQuery(csel).parents("form").attr("id").trim()) {
                    inlineFormListFormField[i] = inlineFormsList[i] + " : (" + jQuery(csel).attr('id') + ")";
                }

            }
        } else {
            for (var i = 0; i < popupFormsList.length; i++) {
                if (popupFormsList[i] == jQuery(csel).parents("form").attr("id").trim()) {
                    //console.log("Test Input fields form names matched");
                    popupFormListFormField[i] = popupFormsList[i] + " : (" + jQuery(csel).attr('id') + ")";
                }
                //console.log("Test Input fields form names not matched");

            }
        }
    })
    //console.log("test popup field values are : ", popupFormListFormField);
}



jQuery("input[data-lookup]").each(function() {
    jQuery(this).attr("onkeypress", "testingFieldFill(jQuery(this))")
})
// Tracking input fields for any form ending

//Form Abandonment for any form on Refresh Button Click Starting
var abandonmentFire = 0;
jQuery(window).bind('beforeunload', function() {
    if (popupRefresh === 1) {
        s.linkTrackVars = "eVar17,events,eVar178";
        s.linkTrackEvents = "event24";
        s.events = "event24";
        /*if (popupFieldFill !== "") {
        	s.eVar17 = s.pageName + " : " + popupRefreshFormID + " : (" + popupFieldFill + ")";
        } else {
        	s.eVar17 = s.pageName + " : " + popupRefreshFormID + " : (No Data Entered)";
        }*/
        //console.log("test current popup form number and value is  : ", currentPopupForm+ " & " + popupFormListFormField);
        s.eVar17 = s.pageName + " : " + popupFormListFormField[currentPopupForm];
        //DWEP-1662 Starting//
        s.eVar178 = getTimeParting("America/Los_Angeles");
        //DWEP-1662 Ending//
        s.tl(jQuery(this), 'o', 'Form Analysis')
        popupRefresh = 0;
        popupRefreshFormID = "";
        jQuery("form").attr("curform", "no");
        abandonmentFire = 1;
    }
    if (mainpopupRefresh === 1) {
        abandonmentFire = 1;
        //console.log("Test inlineform beforeunload event");
        mainpopupRefreshFromID = inlineFormListFormField;
        if (popupRefresh == 1) {
            for (var i = 0; i < mainpopupRefreshFromID.length; i++) {
                s.eVar17 = s.eVar17 + " | " + mainpopupRefreshFromID[i];
            }
        } else {
            s.linkTrackVars = "eVar17,events";
            s.linkTrackEvents = "event24";
            s.events = "event24";
            s.eVar17 = s.pageName + " : " + mainpopupRefreshFromID[0];
            for (var i = 1; i < mainpopupRefreshFromID.length; i++) {
                s.eVar17 = s.eVar17 + " | " + mainpopupRefreshFromID[i];
            }

        }
        mainpopupRefresh = 0;
        mainpopupRefreshFromID = [];
    }
    if (abandonmentFire == 1) {
        //DWEP-1662 Starting//
        s.linkTrackVars = s.linkTrackVars + ",eVar178";
        s.eVar178 = getTimeParting("America/Los_Angeles");
        //DWEP-1662 Ending//
        s.tl(jQuery(this), 'o', 'Form Analysis')
    }
    popupRefresh = 0;
    popupRefreshFormID = "";
    jQuery("form").attr("curform", "no");


});
//Form Abandonment for any form on Refresh Button Click Ending

//New Form Plugin Code Ending

function event43() {
    var trackHost = window.location.pathname;
    if (trackHost.indexOf("/a/vcn-assessment-tool/") != -1 || $('form[data-vmwareformname]').length > 0) {
        if (s.events) {
            s.events = s.apl(s.events, "event43");
        } else {
            s.events = "event43";
        };
        var varV17 = s.pageName;
        var arrForm = s.formList.split(',');
        if (arrForm[0] != undefined) {
            s.eVar17 = varV17 + ':' + arrForm[0];
            s.eVar90 = "vcn-assessment-tool : VCN";
        } else {
            s.eVar17 = varV17;
        }
    }
}
/* Plugin Config */
s.usePlugins = true;
var webregData = 0;
//form abandonment for account creation vmworld starting
if (window.location.href.indexOf("/web/registration") > -1) {
    //get the formName	
    var webregFormField = "";
    var webregFormAbon = 1;
    jQuery(document).ready(function() {
        jQuery(document).on("keypress", "form input[type!=hidden]", function() {

            webregFormField = $(this).attr("id")
            webregFormAbon = 1;

        })
        var checkVar;
        var checkVarIterator = 0;
        if (jQuery("#submitregistration").length) {
            jQuery("#submitregistration").click(function() {
                webregFormAbon = 0;
            })
        } else {
            checkVarIterator++;
            checkVar = setTimeout(checkSubmit, 250);
        }

        var checkSubmit = function() {
            if (jQuery("#submitregistration").length) {
                jQuery("#submitregistration").click(function() {
                    webregFormAbon = 0;
                })
            } else {
                if (checkVarIterator < 20) {
                    checkVarIterator++;
                    checkVar = setTimeout(checkSubmit, 250);
                } else {
                    checkVarIterator = 0;
                }

            }
        }

        var checkVar1;
        var checkVar1Iterator = 0;
        if (jQuery("#btnResend").length) {
            jQuery("#btnResend").click(function() {
                webregFormAbon = 0;
            })
        } else {
            checkVar1Iterator++;
            checkVar1 = setTimeout(checkResend, 250);
        }

        var checkResend = function() {
            if (jQuery("#btnResend").length) {
                jQuery("#btnResend").click(function() {
                    webregFormAbon = 0;
                })
            } else {
                if (checkVar1Iterator < 20) {
                    checkVar1Iterator++;
                    checkVar1 = setTimeout(checkResend, 250);
                } else {
                    checkVar1Iterator = 0;
                }
            }
        }

        jQuery(document).on('click', "#btnResend", function() {
            webregFormAbon = 0;
        })
    })
    $(window).bind('beforeunload', function() {
        webregData = 1;
        if (webregFormAbon === 1) {
            supresslinkTrack = true;
            //console.log("Testing Page Refresh")
            var VmworldFormId = "";
            if ($('form').length > 0)
                VmworldFormId = $('form').attr('name');
            s.linkTrackVars = "eVar17,events,eVar178";
            s.linkTrackEvents = "event24";
            s.events = "event24";
            //console.log("Form Abandonment popupfield on refresh before eVar17 ", popupRefreshFormID, " & ", popupFieldFill);
            //document.cookie = "testingrefresh=" + popupRefreshFormID + "|" + popupFieldFill;
            /*if (popupFieldFill !== "") {
            	s.eVar17 = s.pageName + " : " + popupRefreshFormID + " : (" + popupFieldFill + ")";
            } else {
            	s.eVar17 = s.pageName + " : " + popupRefreshFormID + " : (No Data Entered)";
            }*/
            if (webregFormField !== "") {
                s.eVar17 = s.pageName + " : " + VmworldFormId + " : (" + webregFormField + ")";
            } else {
                s.eVar17 = s.pageName + " : " + VmworldFormId + " : (No Data Entered)";
            }
            //console.log("Form Abandonment on refresh after eVar17");
            //DWEP-1662 Starting//
            s.eVar178 = getTimeParting("America/Los_Angeles");
            //DWEP-1662 Ending//
            s.tl($(this), 'o', 'Form Analysis')
            //console.log("Form Abandonment on refresh after s.t call");

            supresslinkTrack = false;
        }
    });

}
//form abandonment for account creation vmworld ending

//SASE Form Abandonment Tracking Start
if ((location.href.toLowerCase().indexOf("sase-review.vmware.com/resources") > -1 || location.href.toLowerCase().indexOf("sase.vmware.com/resources") > -1 || window.location.href.indexOf('sase.vmware.com/get-started') > -1) && location.href.toLowerCase().indexOf('-ty-') < 0 && location.href.toLowerCase().indexOf('/ty') < 0 && location.href.toLowerCase().indexOf('thank-you') < 0 && jQuery('form').length > 0) {
    var saseFormInputId = "";
    var saseFormAbon = 1;
    $(document).on("keypress", "form input", function() {

        saseFormInputId = $(this).attr("id")
        saseFormAbon = 1;

    })
    var saseFormId = 0;
    $(window).bind('beforeunload', function() {
        webregData = 1;
        if (saseFormAbon === 1) {
            supresslinkTrack = true;
            //console.log("Testing Page Refresh")
            if ($('form').length > 0)
                saseFormId = $('form').attr('id');
            s.linkTrackVars = "eVar17,events,eVar178";
            s.linkTrackEvents = "event24";
            s.events = "event24";
            //console.log("Form Abandonment popupfield on refresh before eVar17 ", popupRefreshFormID, " & ", popupFieldFill);
            //document.cookie = "testingrefresh=" + popupRefreshFormID + "|" + popupFieldFill;
            /*if (popupFieldFill !== "") {
            	s.eVar17 = s.pageName + " : " + popupRefreshFormID + " : (" + popupFieldFill + ")";
            } else {
            	s.eVar17 = s.pageName + " : " + popupRefreshFormID + " : (No Data Entered)";
            }*/
            if (saseFormInputId !== "") {
                s.eVar17 = s.pageName + " : " + saseFormId + " : (" + saseFormInputId + ")";
            } else {
                s.eVar17 = s.pageName + " : " + saseFormId + " : (No Data Entered)";
            }
            //console.log("Form Abandonment on refresh after eVar17");
            //DWEP-1662 Starting//
            s.eVar178 = getTimeParting("America/Los_Angeles");
            //DWEP-1662 Ending//
            s.tl($(this), 'o', 'Form Analysis')
            //console.log("Form Abandonment on refresh after s.t call");

            supresslinkTrack = false;
        }
    });

}
//SASE Form Abandonment Tracking End

function s_doPlugins(s) {
    //DWEP-1662 Starting//
    s.eVar178 = getTimeParting("America/Los_Angeles");
    //DWEP-1662 Ending//
    redesignTopNavigationTriggerAnalytics1(); // Used for Redesign
	
    //Link Tracking Automation - Logic for add link-name attr from name attr
    jQuery('a').mouseover(function() {
		if (typeof jQuery(this).attr('name') != "undefined" && jQuery(this).attr('name').length != 0 && jQuery(this).attr('name').indexOf(':') < 0 && jQuery(this).attr('name').indexOf('&lpos') < 0) {
			var linkName = jQuery(this).attr('name');
			jQuery(this).attr('link-name', linkName);
			jQuery(this).removeAttr('name');
		}
    });
	
    //DIMA-3180 PZN Fly-in component
    if (jQuery('a.pull_feedback').length) {
        jQuery('a.pull_feedback').mouseover(function() {
            if (!jQuery(this).attr('onclick')) jQuery(this).attr("onclick", "addTROTracking('Show Recommendations Widget');");
        });
    }
    if (jQuery('p.closebtn').length) {
        jQuery('p.closebtn').mouseover(function() {
            if (!jQuery(this).attr('onclick')) jQuery(this).attr("onclick", "addTRCTracking('Close Recommendations Widget');");
        });
    }
    addTROTracking = function(name) {
        s.events = "";
        supresslinkTrack = true;
        var tmplink = s.linkTrackVars;
        s.linkTrackVars = 'prop20,prop13,prop8,prop39,prop66,eVar39,prop75,prop73,prop70,eVar62,eVar66,events,eVar102,eVar178';
        s.linkTrackEvents = "event110";
        s.events = "event110";
        s.prop8 = digitalData.page.pageInfo.geoRegion;
        s.prop13 = digitalData.page.pageInfo.language;
        s.eVar62 = name;
        s.prop39 = s.eVar39 = s.pageName;
        s.prop75 = s.account;
        s.prop73 = s.pageName;
        s.eVar66 = document.domain + window.pageID;
        //DWEP-1662 Starting//
        s.eVar178 = getTimeParting("America/Los_Angeles");
        //DWEP-1662 Ending//
        s.tl(this, 'o', name);
        s.prop66 = s.prop39 = s.eVar39 = s.eVar66 = s.eVar102 = '';
        supresslinkTrack = false;
        s.linkTrackVars = tmplink;
    }
    addTRCTracking = function(name) {
        s.events = "";
        supresslinkTrack = true;
        var tmplink = s.linkTrackVars;
        s.linkTrackVars = 'prop20,prop13,prop8,prop39,prop66,eVar39,prop75,prop73,prop70,eVar62,eVar66,events,eVar102,eVar178';
        s.linkTrackEvents = "event111";
        s.events = "event111";
        s.prop8 = digitalData.page.pageInfo.geoRegion;
        s.prop13 = digitalData.page.pageInfo.language;
        s.eVar62 = name;
        s.prop39 = s.eVar39 = s.pageName;
        s.prop75 = s.account;
        s.prop73 = s.pageName;
        s.eVar66 = document.domain + window.pageID;
        //DWEP-1662 Starting//
        s.eVar178 = getTimeParting("America/Los_Angeles");
        //DWEP-1662 Ending//
        s.tl(this, 'o', name);
        s.prop66 = s.prop39 = s.eVar39 = s.eVar66 = s.eVar102 = '';
        supresslinkTrack = false;
        s.linkTrackVars = tmplink;
    }
    //DIMA-3180 PZN Fly-in component ends here
    /* 404 Page Not Found, title match only works for US, for international sites, check the hidden field on error page */
    if (document.title.match(/^Page not found/) || jQuery('input#errorpage404').length != 0) {
        s.pageName = "";
        s.pageType = "errorPage";
        if (location.host.match(/experience-vmware.com/) != null) {
            s.account = s.prop75 = "vmwareinternaldata";
        }
        return;
    }
    s.prop26 = url.prop26;
    if (!s.prop7) {
        s.prop7 = url.prop7;
    }
    //featurewalhthrough link tracking call
    if (window.location.host.match(/featurewalkthrough\.vmware/)) {
        fwLinkTrackProp();
    }
    /*url.q contains the search term that prop6 need.*/
    /*url.site contains the search site value that prop15 need.*/
    if (!s.prop6 && location.pathname != '/support-search.html') {
        s.prop6 = (url.q) ? url.q.toLowerCase() : '';
    }
    if (!s.prop6) {
        s.prop6 = (url.q) ? url.q.toLowerCase() : '';
    }
    if (!s.prop6) {
        s.prop6 = (url.searchq) ? url.searchq.toLowerCase() : '';
    }
    if (!s.prop15) {
        s.prop15 = url.site;
    }
    s.prop38 = location.href;
    s.eVar38 = 'D=c38';
    /* Add calls to plugins here */
    /* New/Repeat Status and Pathing Variables */
    //s.prop12 = s.getNewRepeat();
    //s.eVar12 = 'D=c12';
    /*Set sub-relation evar*/
    if (s.pageName != undefined && s.pageName.indexOf("VMware Video Player") == -1) s.eVar31 = 'D=pageName';
    campaign_id = "";
    src_id = "";
    int_campaign_id = "";
    var vid = s.analyticsVisitorID || s.marketingCloudVisitorID || '';
    if (s.getQueryParam('src')) {
        src_id = s.getQueryParam('src');
    }
    if (src_id != '' && src_id != true) {
        /*add email campaign referrer*/
        if (!document.referrer && src_id.match(/email|em_/i)) {
            s.referrer = "mail://email.campaign.vmware/";
        }
    }
    if (src_id == '' && /onecloud/.test(document.URL)) {
        src_id = s.c_r('src');
    }
    if (s.getQueryParam('cid')) {
        campaign_id = s.getQueryParam('cid');
    }
    if (src_id != '' && src_id != true && src_id.match(/#(.+)?$/)) {
        src_id = src_id.replace(/^([^#]+)#(.+)?$/, "$1");
    }
    if (s.getQueryParam('int_cid')) {
        int_campaign_id = s.getQueryParam('int_cid');
    }
    if (src_id != '' && src_id != true) {
        if (src_id.match(/^WWW_/i)) {
            /* Internal Campaign Tracking */
            s.prop30 = src_id;
            s.eVar13 = 'D=c30';
            var d = new Date();
            var mm = d.getMonth() + 1 + "";
            if (mm.length == 1) mm = "0" + mm;
            var dd = d.getDate() + "";
            if (dd.length == 1) dd = "0" + dd;
            if (src_id.length >= 10) {
                s.events = s.apl(s.events, 'event53:' + vid.substr(vid.length - 6, 6) + mm + dd + src_id.substr(src_id.length - 10, 10));
            } else {
                s.events = s.apl(s.events, 'event53:' + vid.substr(vid.length - 16 + src_id.length, 16 - src_id.length) + mm + dd + src_id);
            }
            /*set the internal cookie int_src_id to exp in 14 days*/
            var t = new Date();
            var t1 = t.getTime() + 14 * 3600 * 24 * 1000;
            t.setTime(t1);
            s.c_w('int_src_id', src_id, t);
        } else {
            //if (src_id.indexOf("_") > -1 && src_id.length == 16 && document.referrer.indexOf("vmware.com") == -1) {
            //fix for EU ext src cookie
            if (src_id.indexOf("_") > -1 && src_id.length == 16) {
                s.prop32 = src_id;
                s.eVar32 = src_id;
                //s.eVar32 = 'D=c32';
                var d = new Date();
                var mm = d.getMonth() + 1 + "";
                if (mm.length == 1) mm = "0" + mm;
                var dd = d.getDate() + "";
                if (dd.length == 1) dd = "0" + dd;
                if (src_id.length >= 10) {
                    s.events = s.apl(s.events, 'event26:' + vid.substr(vid.length - 6, 6) + mm + dd + src_id.substr(src_id.length - 10, 10));
                } else {
                    s.events = s.apl(s.events, 'event26:' + vid.substr(vid.length - 16 + src_id.length, 16 - src_id.length) + mm + dd + src_id);
                }
                /*set the external src cookie ext_src_id to exp in 14 days*/
                var t = new Date();
                var t1 = t.getTime() + 14 * 3600 * 24 * 1000;
                t.setTime(t1);
                s.c_w('ext_src_id', src_id, t);
            }
        }
    }
    if (int_campaign_id != "") {
        s.eVar37 = int_campaign_id.trim();
        if (s.eVar37 != undefined && s.eVar37 != "") {
            var hexValueInternal, i;
            var int_campaign = s.eVar37;
            var encodedDataInternal = "";
            for (i = 0; i < int_campaign.length; i++) {
                hexValueInternal = int_campaign.charCodeAt(i).toString(16);
                encodedDataInternal += ("000" + hexValueInternal).slice(-4);
            }
            s.eVar165 = encodedDataInternal;
        }
        /*set the internal campaign cookie to exp in 14 days*/
        var t = new Date();
        var t1 = t.getTime() + 14 * 3600 * 24 * 1000;
        t.setTime(t1);
        s.c_w('int_cid', int_campaign_id, t);
        var d = new Date();
        var mm = d.getMonth() + 1 + "";
        if (mm.length == 1) mm = "0" + mm;
        var dd = d.getDate() + "";
        if (dd.length == 1) dd = "0" + dd;
        if (int_campaign_id.length >= 10) {
            s.events = s.apl(s.events, 'event108:' + vid.substr(vid.length - 6, 6) + mm + dd + int_campaign_id.substr(int_campaign_id.length - 10, 10));
        } else {
            s.events = s.apl(s.events, 'event108:' + vid.substr(vid.length - 16 + int_campaign_id.length, 16 - int_campaign_id.length) + mm + dd + int_campaign_id);
        }
    }
    if (campaign_id) {
        s.campaign = campaign_id.trim();
        if (s.campaign != undefined && s.campaign != "") {
            var hexValueExternal, i;
            var ext_campaign = s.campaign;
            var encodedDataExternal = "";
            for (i = 0; i < ext_campaign.length; i++) {
                hexValueExternal = ext_campaign.charCodeAt(i).toString(16);
                encodedDataExternal += ("000" + hexValueExternal).slice(-4);
            }
            s.eVar164 = encodedDataExternal;
        }
        /*set the cookie to exp in 14 days*/
        var t = new Date();
        var t1 = t.getTime() + 14 * 3600 * 24 * 1000;
        t.setTime(t1);
        s.c_w('s_campaign', s.campaign, t);
        var d = new Date();
        var mm = d.getMonth() + 1 + "";
        if (mm.length == 1) mm = "0" + mm;
        var dd = d.getDate() + "";
        if (dd.length == 1) dd = "0" + dd;
        if (campaign_id.length >= 10) {
            s.events = s.apl(s.events, 'event39:' + vid.substr(vid.length - 6, 6) + mm + dd + campaign_id.substr(campaign_id.length - 10, 10));
        } else {
            s.events = s.apl(s.events, 'event39:' + vid.substr(vid.length - 16 + campaign_id.length, 16 - campaign_id.length) + mm + dd + campaign_id);
        }
    }
    /* Pathing for Campaigns */
    if (s.pageName && s.campaign) {
        s.prop16 = s.campaign.trim() + ' : ' + s.pageName;
    } else if (s.pageName && typeof(jQuery("input[name='campaign']").attr('value')) != 'undefined' && jQuery("input[name='campaign']").attr('value') != '') {
        s.prop16 = jQuery("input[name='campaign']").attr('value') + ' : ' + s.pageName;
    } else if (!s.campaign && /onecloud/.test(document.URL) && s.c_r('cid') != '') {
        s.campaign = s.c_r('cid');
        s.prop16 = s.campaign.trim() + ' : ' + s.pageName;
    }
    /*********************
     *prop6 is search term
     *evar6 is search term
     *event2 is searches
     *********************/
    if (s.prop6) {
        s.prop6 = s.prop6.toLowerCase();
        s.eVar6 = 'D=c6';
        var t_search = s.getValOnce(s.prop6, 'pr6', 0);
        if (t_search) {
            if (s.events) {
                s.events = s.apl(s.events, "event2");
            } else {
                s.events = "event2";
            }
        }
    }
    /* Copy props to eVars */
    if (s.prop1 && !s.eVar1) {
        s.eVar1 = 'D=c1';
    }
    if (s.prop2 && !s.eVar2) {
        s.eVar2 = 'D=c2';
    }
    if (s.prop3 && !s.eVar3) {
        s.eVar3 = 'D=c3';
    }
    if (s.prop4 && !s.eVar4) {
        s.eVar4 = 'D=c4';
    }
    if (s.prop5 && !s.eVar5) {
        s.eVar5 = 'D=c5';
    }
    if (s.prop15 && !s.eVar8) {
        s.eVar8 = 'D=c15';
    }
    /************************** PLUGINS SECTION *************************/
    /* Demandbase Plugin Start - 7/25/2012 */
    var demandbasePlugin = {
        checkAndReturnSameOrErrorValue: function(variableToCheck, isDetailed, errorValue, detailedErrorValue) {
            errorValue = (this.isDefinedAndNotEmpty(errorValue)) ? "Error - " + errorValue : null;
            detailedErrorValue = (this.isDefinedAndNotEmpty(detailedErrorValue)) ? detailedErrorValue : null;
            if (this.isDefinedAndNotEmpty(variableToCheck)) {
                return variableToCheck;
            } else {
                if (isDetailed) {
                    return detailedErrorValue;
                } else {
                    return errorValue;
                }
            }
        },
        isDefinedAndNotEmpty: function(variableToCheck) {
            if ((typeof(variableToCheck) !== 'undefined') && variableToCheck !== '' && variableToCheck !== null) {
                return true;
            }
            return false;
        },
        demandbase_parse: function() {
            try {
                var isExternalIP = false;
                if (dbInfo.error && dbInfo.status) {
                    if (dbInfo.error === 'Not Found' && dbInfo.status === '404') {
                        isExternalIP = true;
                    }
                }
                if (!isExternalIP) {
                    var isDetailed = (dbInfo.information_level === 'Detailed') ? true : false;
                    var d_city = this.checkAndReturnSameOrErrorValue(dbInfo.city, isDetailed);
                    var d_country = this.checkAndReturnSameOrErrorValue(dbInfo.country, isDetailed);
                    var d_employee_range = this.checkAndReturnSameOrErrorValue(dbInfo.employee_range, isDetailed);
                    var d_industry = this.checkAndReturnSameOrErrorValue(dbInfo.industry, isDetailed);
                    var d_web_site = this.checkAndReturnSameOrErrorValue(dbInfo.web_site, isDetailed);
                    var d_sub_industry = this.checkAndReturnSameOrErrorValue(dbInfo.sub_industry, isDetailed)
                    var d_state = this.checkAndReturnSameOrErrorValue(dbInfo.state, isDetailed);
                    var d_audience = this.checkAndReturnSameOrErrorValue(dbInfo.audience, isDetailed);
                    var d_audience_segment = this.checkAndReturnSameOrErrorValue(dbInfo.audience_segment, isDetailed);
                    var d_annual_sales = this.checkAndReturnSameOrErrorValue(dbInfo.annual_sales, isDetailed);
                    var d_revenue_range = this.checkAndReturnSameOrErrorValue(dbInfo.revenue_range, isDetailed);
                    var d_zip = this.checkAndReturnSameOrErrorValue(dbInfo.zip, isDetailed);
                    var d_address = this.checkAndReturnSameOrErrorValue(dbInfo.street_address, isDetailed);
                    var d_phone = this.checkAndReturnSameOrErrorValue(dbInfo.phone, isDetailed);
                    var d_company_name = this.checkAndReturnSameOrErrorValue(dbInfo.company_name, isDetailed);
                    var d_isp = this.checkAndReturnSameOrErrorValue(dbInfo.isp, isDetailed);
                    var d_sid = this.checkAndReturnSameOrErrorValue(dbInfo.demandbase_sid, isDetailed);
                    if (this.isDefinedAndNotEmpty(dbInfo.watch_list)) {
                        var aw_list1 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch1, isDetailed);
                        var aw_list2 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch2, isDetailed);
                        var aw_list3 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch3, isDetailed);
                        var aw_list4 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch4, isDetailed);
                        var aw_list5 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch5, isDetailed);
                        var aw_list6 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch6, isDetailed);
                        var aw_list7 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch7, isDetailed);
                        var aw_list8 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch8, isDetailed);
                        s.eVar92 = aw_list1 + ":" + aw_list2 + ":" + aw_list3 + ":" + aw_list4 + ":" + aw_list5 + ":" + aw_list6 + ":" + aw_list7 + ":" + aw_list8;
                        var aw_list9 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch9, isDetailed);
                        var aw_list10 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch10, isDetailed);
                        var aw_list11 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch11, isDetailed);
                        var aw_list12 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch12, isDetailed);
                        var aw_list13 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch13, isDetailed);
                        var aw_list14 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch14, isDetailed);
                        var aw_list15 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch15, isDetailed);
                        var aw_list16 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch16, isDetailed);
                        s.eVar98 = aw_list9 + ":" + aw_list10 + ":" + aw_list11 + ":" + aw_list12 + ":" + aw_list13 + ":" + aw_list14 + ":" + aw_list15 + ":" + aw_list16;
                        var aw_list17 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch17, isDetailed);
                        var aw_list18 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch18, isDetailed);
                        var aw_list19 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch19, isDetailed);
                        var aw_list20 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch20, isDetailed);
                        var aw_list21 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch21, isDetailed);
                        var aw_list22 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch22, isDetailed);
                        var aw_list23 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch23, isDetailed);
                        var aw_list24 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch24, isDetailed);
                        var aw_list33 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch33, isDetailed);
                        var aw_list34 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch34, isDetailed);
                        var aw_list35 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch35, isDetailed);
                        var aw_list36 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch36, isDetailed);
                        var aw_list37 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch37, isDetailed);
                        var aw_list38 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch38, isDetailed);
                        var aw_list39 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch39, isDetailed);
                        var aw_list40 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch40, isDetailed);
						var aw_list41 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch41, isDetailed);
						var aw_list42 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch42, isDetailed);
						var aw_list43 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch43, isDetailed);
						var aw_list44 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch44, isDetailed);
						var aw_list45 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch45, isDetailed);
						var aw_list46 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch46, isDetailed);
						var aw_list47 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch47, isDetailed);
						var aw_list48 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch48, isDetailed);
						var aw_list49 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch49, isDetailed);
						var aw_list50 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch50, isDetailed);
						var aw_list51 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch51, isDetailed);
						var aw_list52 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch52, isDetailed);
						var aw_list53 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch53, isDetailed);
						var aw_list54 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch54, isDetailed);
						var aw_list55 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch55, isDetailed);
						var aw_list56 = this.checkAndReturnSameOrErrorValue(dbInfo.watch_list.account_watch56, isDetailed);
                        s.eVar74 = aw_list17 + ":" + aw_list18 + ":" + aw_list19 + ":" + aw_list20 + ":" + aw_list21 + ":" + aw_list22 + ":" + aw_list23 + ":" + aw_list24;
                        s.eVar173 = aw_list33 + ":" + aw_list34 + ":" + aw_list35 + ":" + aw_list36 + ":" + aw_list37 + ":" + aw_list38 + ":" + aw_list39 + ":" + aw_list40;
						
						s.eVar152 = aw_list41 + ":" + aw_list42 + ":" + aw_list43 + ":" + aw_list44 + ":" + aw_list45 + ":" + aw_list46 + ":" + aw_list47 + ":" + aw_list48;
							
						s.eVar153 = aw_list49 + ":" + aw_list50 + ":" + aw_list51 + ":" + aw_list52 + ":" + aw_list53 + ":" + aw_list54 + ":" + aw_list55 + ":" + aw_list56;
                    }
                    s.eVar51 = d_annual_sales;
                    s.eVar52 = d_city;
                    s.eVar54 = d_country;
                    s.prop58 = d_web_site;
                    s.eVar57 = d_employee_range;
                    s.eVar59 = d_industry;
                    //s.eVar65 = d_isp;
                    s.eVar67 = d_state;
                    s.eVar172 = d_sid;
                    s.eVar140 = this.checkAndReturnSameOrErrorValue(dbInfo.marketing_alias, isDetailed);
                    if (this.isDefinedAndNotEmpty(dbInfo.audience_segment) && this.isDefinedAndNotEmpty(dbInfo.audience)) {
                        s.eVar68 = dbInfo.audience + '->' + dbInfo.audience_segment;
                    } else {
                        s.eVar68 = this.checkAndReturnSameOrErrorValue(dbInfo.audience);
                    }
                    /*add logic: if the audience is residential, then not use registry_company_name */
                    s.eVar53 = d_company_name;
                    /*if (!s.eVar53 && s.eVar68 != 'Residential') {
                        s.eVar53 = this.checkAndReturnSameOrErrorValue(dbInfo.registry_company_name, isDetailed);
                    }*/
                    s.eVar69 = d_sub_industry;
                    s.eVar55 = d_company_name + ':' + d_industry + ':' + d_sub_industry + ':' + d_employee_range + ':' + d_revenue_range + ':' + d_audience + ':' + d_audience_segment;
                    s.eVar56 = d_city + ':' + d_state + ':' + d_zip + ':' + d_country + ':' + d_address + ':' + d_phone;
                } else if (isExternalIp) {
                    s.eVar51 = "Error - " + dbInfo.error + " " + dbInfo.status;
                    s.eVar52 = "Error - " + dbInfo.error + " " + dbInfo.status;
                    s.eVar53 = "Error - " + dbInfo.error + " " + dbInfo.status;
                    s.eVar54 = "Error - " + dbInfo.error + " " + dbInfo.status;
                    s.eVar57 = "Error - " + dbInfo.error + " " + dbInfo.status;
                    s.eVar59 = "Error - " + dbInfo.error + " " + dbInfo.status;
                    //s.eVar65 = "Error - " + dbInfo.error + " " + dbInfo.status;
                    s.eVar67 = "Error - " + dbInfo.error + " " + dbInfo.status;
                    s.eVar68 = "Error - " + dbInfo.error + " " + dbInfo.status;
                    s.eVar69 = "Error - " + dbInfo.error + " " + dbInfo.status;
                    s.eVar166 = "Error - " + dbInfo.error + " " + dbInfo.status;
                    s.evar172 = "Error - " + dbInfo.error + " " + dbInfo.status;
                }
                if (s.eVar51) {
                    s.prop51 = 'D=v51';
                }
                if (s.eVar52) {
                    s.prop52 = 'D=v52';
                }
                if (s.eVar53) {
                    s.prop53 = 'D=v53';
                }
                if (s.eVar54) {
                    s.prop54 = 'D=v54';
                }
                if (s.eVar55) {
                    s.prop55 = 'D=v55';
                }
                if (s.eVar56) {
                    s.prop56 = 'D=v56';
                }
                if (s.eVar57) {
                    s.prop57 = 'D=v57';
                }
                if (s.prop58) {
                    s.eVar166 = 'D=c58';
                }
                if (s.eVar59) {
                    s.prop59 = 'D=v59';
                }
                if (d_isp != undefined) {
                    s.prop65 = d_isp.toString();
                }
                if (s.eVar67) {
                    s.prop67 = 'D=v67';
                }
                if (s.eVar68) {
                    s.prop68 = 'D=v68';
                }
                if (s.eVar69) {
                    s.prop69 = 'D=v69';
                }
            } catch (err) {
                var wasErrorInDemandbasePlugin = true;
            }
        }
    };
    if (typeof(dbInfo) != 'undefined') {
        demandbasePlugin.demandbase_parse();
    }
    /*  Demandbase Plugin End */
    if (jQuery('div.ad-nav a').length) {
        jQuery('div.ad-nav a').mouseover(function() {
            if (typeof(jQuery(this).attr('name')) == 'undefined' || jQuery(this).attr('name').length == 0) {
                lp = "&lpos=nav_utility : " + jQuery('div.ad-nav a').index(jQuery(this));
                jQuery(this).attr('name', lp);
            }
        });
    }
    if (jQuery('div.menu-item-country a').length) {
        jQuery('div.menu-item-country a').mouseover(function() {
            if (typeof(jQuery(this).attr('name')) == 'undefined' || jQuery(this).attr('name').length == 0) {
                lp = "&lpos=nav_utility : " + jQuery('div.menu-item-country a').index(jQuery(this));
                jQuery(this).attr('name', lp);
            }
        });
    }
    if (jQuery('div#products-mm a').length) {
        jQuery('div#products-mm a').mouseover(function() {
            if (typeof(jQuery(this).attr('name')) == 'undefined' || jQuery(this).attr('name').length == 0) {
                lp = "&lpos=nav_mega_products : " + jQuery('div#products-mm a').index(jQuery(this));
                jQuery(this).attr('name', lp);
            }
        });
    }
    if (jQuery('div#support-mm a').length) {
        jQuery('div#support-mm a').mouseover(function() {
            if (typeof(jQuery(this).attr('name')) == 'undefined' || jQuery(this).attr('name').length == 0) {
                lp = "&lpos=nav_mega_support : " + jQuery('div#support-mm a').index(jQuery(this));
                jQuery(this).attr('name', lp);
            }
        });
    }
    if (jQuery('div#downloads-mm a').length) {
        jQuery('div#downloads-mm a').mouseover(function() {
            if (typeof(jQuery(this).attr('name')) == 'undefined' || jQuery(this).attr('name').length == 0) {
                lp = "&lpos=nav_mega_downloads : " + jQuery('div#downloads-mm a').index(jQuery(this));
                jQuery(this).attr('name', lp);
            }
        });
    }
    if (jQuery('div#consulting-mm a').length) {
        jQuery('div#consulting-mm a').mouseover(function() {
            if (typeof(jQuery(this).attr('name')) == 'undefined' || jQuery(this).attr('name').length == 0) {
                lp = "&lpos=nav_mega_consulting : " + jQuery('div#consulting-mm a').index(jQuery(this));
                jQuery(this).attr('name', lp);
            }
        });
    }
    if (jQuery('div#partners-mm a').length) {
        jQuery('div#partners-mm a').mouseover(function() {
            if (typeof(jQuery(this).attr('name')) == 'undefined' || jQuery(this).attr('name').length == 0) {
                lp = "&lpos=nav_mega_partners : " + jQuery('div#partners-mm a').index(jQuery(this));
                jQuery(this).attr('name', lp);
            }
        });
    }
    if (jQuery('div#company-mm a').length) {
        jQuery('div#company-mm a').mouseover(function() {
            if (typeof(jQuery(this).attr('name')) == 'undefined' || jQuery(this).attr('name').length == 0) {
                lp = "&lpos=nav_mega_company : " + jQuery('div#company-mm a').index(jQuery(this));
                jQuery(this).attr('name', lp);
            }
        });
    }
    if (jQuery('div.nav a').length) {
        jQuery('div.nav a').mouseover(function() {
            if (typeof(jQuery(this).attr('name')) == 'undefined' || jQuery(this).attr('name').length == 0) {
                lp = "&lpos=nav_mega : " + jQuery('div.nav a').index(jQuery(this));
                jQuery(this).attr('name', lp);
            }
        });
    }
    if (jQuery('div.footerbar a').length) {
        jQuery('div.footerbar a').mouseover(function() {
            if (typeof(jQuery(this).attr('name')) == 'undefined' || jQuery(this).attr('name').length == 0) {
                lp = "&lpos=nav_footer : " + jQuery('div.footerbar a').index(jQuery(this));
                jQuery(this).attr('name', lp);
            }
        });
    }
    if (jQuery('div.category-links a').length) {
        jQuery('div.category-links a').mouseover(function() {
            if (typeof(jQuery(this).attr('name')) == 'undefined' || jQuery(this).attr('name').length == 0) {
                lp = "&lpos=nav_fatfooter : " + jQuery('div.category-links a').index(jQuery(this));
                jQuery(this).attr('name', lp);
            }
        });
    }
    if (jQuery('div.homepagePromo a').length) {
        jQuery('div.homepagePromo a').mouseover(function() {
            if (typeof(jQuery(this).attr('name')) == 'undefined' || jQuery(this).attr('name').length == 0) {
                lp = "&lpos=homepage-slider : " + jQuery('div.homepagePromo a').index(jQuery(this));
                jQuery(this).attr('name', lp);
            }
        });
        if (typeof(jQuery(this).attr('onclick')) == 'undefined' || jQuery(this).attr('onclick').length == 0) {
            jQuery('div.homepagePromo a').attr('onclick', 'PageLevelLinkTrack(this)');
        }
    }
    var val = navigator.userAgent.toLowerCase();
    if (val.indexOf("firefox") > -1 && window.location.href.indexOf('/vcloudairchallenge/library')) {
        if (jQuery('.video-libraryPage').length) {
            if (typeof(jQuery(this).attr('onclick')) == 'undefined' || jQuery(this).attr('onclick').length == 0) {
                jQuery('.video-libraryPage').attr('onclick', 'PageLevelLinkTrack(this)');
            }
        }
    }
    jQuery('div.vmwarelogo').mouseover(function() {
        if (typeof(jQuery(this).attr('name')) == 'undefined' || jQuery(this).attr('name').length == 0) {
            lp = "&lpos=logo : 0";
            jQuery(this).attr('name', lp);
        }
    });

    if (jQuery('li a.sidebarnav_vm').length) {
        jQuery("li a.sidebarnav_vm").mouseover(function() {
            if (typeof(jQuery('li a.sidebarnav_vm').attr('onclick')) == 'undefined' ||
                jQuery('li a.sidebarnav_vm').attr('onclick') == 0) {
                lp = "&lpos=" + "nav_sidebar : " + jQuery('li a.sidebarnav_vm').index(jQuery(this));
                jQuery(this).attr('name', lp);
                jQuery(this).attr('onclick', 'if(jQuery(this).attr("class").indexOf("cross")>=0) {var cid = $(this).children("i").eq(0).attr("urlval").split("/"); addCTracking("nav_sidebar_" + cid[cid.length-1]);}');
            }
        });
    }

    jQuery('#navbar a').mouseover(function() {
        if (typeof(jQuery(this).attr('name')) == 'undefined' || jQuery(this).attr(
                'name').length == 0) {
            lp = "&lpos=nav_utility : " + jQuery('#navbar a').index(jQuery(this)) +
                "&le=event52";
            jQuery(this).attr('name', lp);
        }
    });

    jQuery('.hdr-link-group a').mouseover(function() {
        if (typeof(jQuery(this).attr('name')) == 'undefined' || jQuery(this).attr('name').length == 0) {
            lp = "&lpos=nav_utility : " + jQuery('.hdr-link-group a').index(jQuery(this)) + "&le=event52";
            jQuery(this).attr('name', lp);
        }
    });

    /*Top Nav Link update start*/
    jQuery('.tn-panel .tr-nav a').mouseover(function() {
        if (typeof(jQuery(this).attr('name')) == 'undefined' || jQuery(this).attr('name').length == 0) {
            var cat1 = ($(this).closest('div.tn-panel').siblings('.re-comtainer').find('li').children('a[class^="active"]')) ? $(this).closest('div.tn-panel').siblings('.re-comtainer').find('li').children('a[class^="active"]').attr('urlval').split('/').pop() : "none"
            var subcat1 = ($(this).closest('div.tr-nav').siblings('div.tl-nav').find('li[class^="active"] span')) ? $(this).closest('div.tr-nav').siblings('div.tl-nav').find('li[class^="active"] span').text().toLowerCase().trim() : "none"
            var subcat2 = subcat1.replace(/&/g, '')
            var cattemp = "";
            if (subcat2 == "") {
                cattemp = cat1;
            } else {
                cattemp = cat1 + "_" + subcat2;
            }
            lp = "&lpos=nav_topbar_" + cattemp + " : " + jQuery('.tn-panel .tr-nav a').index(jQuery(this)) + "&le=event52";
            jQuery(this).attr('name', lp);
        }
    });

    // Main cat links 
    if (jQuery('.hdr-link-group a[href*="store.vmware.com"]').length) {
        jQuery('a[href*="store.vmware.com"]').mouseover(function() {
            if (!jQuery(this).attr('onclick'))
                jQuery(this).attr("onclick", "addCTracking('nav_utility : store');");
        });
    }

    if (jQuery('.hdr-link-group a[href*="go/partnercentral"]').length) {
        jQuery('a[href*="go/partnercentral"]').mouseover(function() {
            if (!jQuery(this).attr('onclick'))
                jQuery(this).attr("onclick", "addCTracking('nav_utility : partner central');");
        });
    }

    if (jQuery('.hdr-link-group a[href*="communities.vmware.com"]').length) {
        jQuery('a[href*="communities.vmware.com"]').mouseover(function() {
            if (!jQuery(this).attr('onclick'))
                jQuery(this).attr("onclick", "addCTracking('nav_utility : communities');");
        });
    }

    if (jQuery('a[href*="partnerlocator.vmware.com"]').length) {
        jQuery('a[href*="partnerlocator.vmware.com"]').mouseover(function() {
            if (!jQuery(this).attr('onclick'))
                jQuery(this).attr("onclick", "addCTracking('nav_sidebar_partners_work with our partners : partner locator');");
        });
    }

//Cloudhealth-get started
if(jQuery('.check_box').is(':checked') == true && jQuery('a[aria-label="continue with selections"]').length){
    //console.log("true");
 jQuery('a[aria-label="continue with selections"]').mouseover(function() {
                        //if (!jQuery(this).attr('onclick'))
                            jQuery(this).attr("onclick", "addCTracking(selectArr);");
     //console.log(selectArr);
                    });
			}
			
//Cloudhealth-Modify selection
if(jQuery('.modify-selections').length){
 jQuery('.modify-selections').mouseover(function() {
                        //if (!jQuery(this).attr('onclick'))
                            jQuery(this).attr("onclick", "addCTracking(selectArr);");
                    });
                
			}
			
    jQuery('div span.GA2WNHJCIK').mouseover(function() {
        if (typeof(jQuery(this).attr('name')) == 'undefined' || jQuery(this).attr('name').length == 0) {
            lp = "&lpos=apps_scodevmw : " + jQuery('div span.GA2WNHJCIK').index(jQuery(this));
            jQuery(this).attr('name', lp);
        }
    });

    jQuery('div span.GA2WNHJCMJ').mouseover(function() {
        if (typeof(jQuery(this).attr('name')) == 'undefined' || jQuery(this).attr('name').length == 0) {
            lp = "&lpos=apps_scodevmw : " + jQuery('div span.GA2WNHJCMJ').index(jQuery(this));
            jQuery(this).attr('name', lp);
        }
    });

    /* jQuery('body a').mouseover(function() {
       if (typeof(jQuery(this).attr('name')) == 'undefined' || jQuery(this).attr('name').length == 0) {
           if (jQuery(this).html() != 'Next' && jQuery(this).html() != 'Back') {
               lp = "&lpos=apps_scodevmw : " + jQuery('body a').index(jQuery(this));
               jQuery(this).attr('name', lp);

           }
       }
   });
 */

//Vmware video library 2022 Tracking code start-----------------------  
//Tab tracking code start
tabClickTracking = function(name) {
    s.events = "";
    supresslinkTrack = true;
    var tmplink = s.linkTrackVars;
    var tabprevValue = "";
        s.linkTrackVars = 'prop20,prop13,prop8,prop39,prop66,eVar39,prop75,prop73,prop70,eVar66,eVar102,eVar178';
        s.prop8 = digitalData.page.pageInfo.geoRegion;
        s.prop13 = digitalData.page.pageInfo.language;
        s.prop39 = s.eVar39 = s.pageName;
        $("#myTabhorizontal li a").each(function() {
            $(this).attr('tabprev', tabprevValue);
        });
        s.prop75 = s.account;
        s.prop73 = s.pageName;
        if(window.pageID != undefined)
        {s.eVar66 = document.domain + window.pageID;}
        else
        {s.eVar66 = document.domain + document.location.pathname;}
          //DWEP-1662 Starting//
        s.eVar178 = getTimeParting("America/Los_Angeles");
        //DWEP-1662 Ending//
        s.tl(this, 'o', name);
    s.prop66 = s.prop39 = s.eVar39 = s.eVar66 = s.eVar102 = '';
    supresslinkTrack = false;
    s.linkTrackVars = tmplink;
}

//Vmware Explore 2022 Landing Page Tabs custom tracking start
    if((window.location.href.includes("videos-stg.vmware.com") || window.location.href.includes("videos.vmware.com") || window.location.href.includes("videos-review.vmware.com")) && window.location.href.includes("/landingpage"))
    {
    setTimeout(function() {
    jQuery(document).ready(function() {
    if (jQuery('#analytics-vmwareexploreTabs .sectionHeading').length) {
        if(jQuery('#analytics-vmwareexploreTabs .sectionHeading.details').length){
        jQuery('#analytics-vmwareexploreTabs .sectionHeading.details').mouseover(function() {
            if (!jQuery(this).attr('onclick')){
                var aName = "addCTracking('vmware_Videolibrary_tabs : Details');";
                var bName = "s_objectID='vmware_Videolibrary_tabs : Details : 1';";
                 jQuery(this).attr("onclick", 'if(jQuery(this).attr("class") != "sectionHeading details active"){'+ aName+bName +'}');            
                  }
        });
        }
        if(jQuery('#analytics-vmwareexploreTabs .sectionHeading.speakers').length){
         jQuery('#analytics-vmwareexploreTabs .sectionHeading.speakers').mouseover(function() {
            if (!jQuery(this).attr('onclick')){
                var aName = "addCTracking('vmware_Videolibrary_tabs : Speakers');";
                var bName = "s_objectID='vmware_Videolibrary_tabs : Speakers : 2';";
               jQuery(this).attr("onclick", 'if(jQuery(this).attr("class") != "sectionHeading speakers active"){'+ aName+bName +'}');
                }
        });
        }
        if(jQuery('#analytics-vmwareexploreTabs .sectionHeading.attachments').length){
            jQuery('#analytics-vmwareexploreTabs .sectionHeading.attachments').mouseover(function() {
            if (!jQuery(this).attr('onclick')){
                var aName = "addCTracking('vmware_Videolibrary_tabs : Attachments');";
                var bName = "s_objectID='vmware_Videolibrary_tabs : Attachments : 3';";
                jQuery(this).attr("onclick",'if(jQuery(this).attr("class") != "sectionHeading attachments active"){'+  aName+bName +'}');
                }
            });
        }
        if(jQuery('#analytics-vmwareexploreTabs .sectionHeading.share').length){
            jQuery('#analytics-vmwareexploreTabs .sectionHeading.share').mouseover(function() {
            if (!jQuery(this).attr('onclick')){
                var aName = "addCTracking('vmware_Videolibrary_tabs : Share');";
                var bName = "s_objectID='vmware_Videolibrary_tabs : Share : 4';";
                jQuery(this).attr("onclick", 'if(jQuery(this).attr("class") != "sectionHeading share active"){'+ aName+bName +'}');
            }
         });
        }
            
     }
    });
    }, 2000);
 }
 //Navigation arrows tracking on homepage start
 if(window.location.href.includes("videos-stg.vmware.com") || window.location.href.includes("videos.vmware.com") || window.location.href.includes("videos-review.vmware.com"))
 {
setTimeout(function() {
 jQuery(document).ready(function() {
 if(jQuery("#analytics-explorefeaturedvideos div.owl-nav > button").length){
 jQuery("#analytics-explorefeaturedvideos div.owl-nav > button .owl-next").mouseover(function() {
         if ( typeof (jQuery(this).attr('onclick')) == "undefined" || jQuery(this).attr('onclick').indexOf('s_objectID') > -1 ) {
             var lnkPos = jQuery('div').index(jQuery(this));
             var onclk = "addCTracking('vmware_Videolibrary : Next Arrow click');s_objectID='vmware_Videolibrary : Next Arrow click : " + lnkPos + "';";
         jQuery(this).attr('onclick', onclk);
         }
     });
 jQuery("#analytics-explorefeaturedvideos div.owl-nav > button .owl-prev").mouseover(function() {
         if ( typeof (jQuery(this).attr('onclick')) == "undefined" || jQuery(this).attr('onclick').indexOf('s_objectID') > -1 ) {
             var lnkPos = jQuery('div').index(jQuery(this));
             var onclk = "addCTracking('vmware_Videolibrary : Previous Arrow click');s_objectID='vmware_Videolibrary : Previous Arrow click : " + lnkPos + "';";
         jQuery(this).attr('onclick', onclk);
         }
     });  

     //For mobile view
        if(jQuery("#analytics-explorefeaturedvideos div.owl-dots > button").length){
        jQuery("#analytics-explorefeaturedvideos div.owl-dots > button").mouseover(function() {
                if ( typeof (jQuery(this).attr('onclick')) == "undefined" || jQuery(this).attr('onclick').indexOf('s_objectID') > -1 ) {
                    var lnkPos = jQuery('button').index(jQuery(this));
                    var onclk = "if(jQuery(this).attr('class') != 'owl-dot active'){addCTracking('vmware_Videolibrary : Video Navigation')};s_objectID='vmware_Videolibrary : Video Navigation : " + lnkPos + "';";
                jQuery(this).attr('onclick', onclk);
                }
            });
        }
    
 }
 //Bookmark tracking
 if(jQuery(".bookmark-image").length){
     jQuery(".bookmark-image").mouseover(function() {
         if ( typeof (jQuery(this).attr('onclick')) == "undefined" || jQuery(this).attr('onclick').indexOf('s_objectID') > -1 ) {
         var lnkPos = jQuery('div').index(jQuery(this));
         if(lnkPos < 0){ lnkPos = lnkPos * -1;}
         var bvidname;
         if(jQuery(this).closest(".customerStoryContent").length){
             bvidname = jQuery(this).closest(".customerStoryContent").find(".vid_headline").text();
         }
         if(jQuery(this).closest(".fullpage_description").length){
             bvidname = jQuery(this).closest(".fullpage_description").find(".vid_headline").text();
         }
         if (bvidname != undefined) {
             bvidname = bvidname.replace(/'/g, '');
             bvidname = bvidname.replace(/:/g,'');
         }
     var aname= `addCTracking('vmware_Videolibrary_BookMark : ${bvidname} ');`;
     var bname = "s_objectID=" + "'" + "vmware_Videolibrary_BookMark : " + bvidname + " : " + lnkPos + "'";  
     if (!jQuery(this).attr("onclick")) {
         jQuery(this).attr("onClick", aname + bname);
     } 
     else{
         jQuery(this).attr("onClick",aname + bname);
     }
     }})
 }
 //Collections page code tracking start
if(jQuery(".customerStoryContainer.thumbnail-collage-wrapper").length){
	jQuery(".customerStoryContainer.thumbnail-collage-wrapper").mouseover(function() {
		if ( typeof (jQuery(this).attr('onclick')) == "undefined" || jQuery(this).attr('onclick').indexOf('s_objectID') > -1 ) {
			var lnkPos = jQuery('div').index(jQuery(this));
            if(lnkPos < 0){ lnkPos = lnkPos * -1;}
			var collectioName = jQuery(this).find(".customerStoryContent").text().trim();
            if (collectioName != undefined) {
                collectioName = collectioName.replace(/'/g, '');
                collectioName = collectioName.replace(/:/g,'');
            }
			if(lnkPos != null && collectioName != undefined)
			{var onclk = "s_objectID='vmware_Videolibrary_Collections : " + collectioName + " : " + lnkPos + "';";}
			jQuery(this).attr('onclick', onclk);
		}
	});
	}
//Collections page code tracking end  
 });
 },2000);
 
 //Vmware 2022 Filter component tracking start
 //filter dropdown-menu
 
 if(jQuery('.searchvideos').length){
 jQuery('.searchvideos #dropDownFilters .filter-option-list li').click(function(e){
             var par = jQuery(e.target).parent().parent().parent().parent().attr("id");
             var labelNameD	 = jQuery(e.target).text();
             var indexVal =  jQuery(e.target).parent().index();
              var ftName;
             if(labelNameD != undefined && labelNameD.length > 0 && indexVal != null && par != undefined){
                   ftName= "s_objectID='vmware_Videolibrary_" + par +" : " + labelNameD + " : "; 
                   ftName = ftName.concat(indexVal) + "'";
                 if (!jQuery(this).attr('onclick')){
                 jQuery(this).attr("onclick", ftName);
                 }
             }
             
         });
        }
 //sort by menu
 if(jQuery('.sort-dropdown-options ul li').length){
 jQuery('.sort-dropdown-options ul li').mouseover(function(e){
             var label1= jQuery(this).text();
              var numberT = jQuery(this).index();
              var flname;
              if(label1 != undefined && numberT != null){
                 flname = "s_objectID='vmware_Videolibrary_SortBy : " + label1 + " : "; 
                 flname = flname.concat(numberT) + "'";
                if (!jQuery(this).attr('onclick')){
                 jQuery(this).attr("onclick", flname);
             }
              }
             });
   }
 

//Links tracking on homepage start

//Links tracking on homepage ending

 //Vmware Explore 2022 Listing Page Filter component tracking end

 //Links under tab starting
var tabid = "";
var tabParentName = "";
if ($("#myTabhorizontal li").length) {
    $("#myTabhorizontal li").each(function() {
        tabid = $(this).attr("id");
        tabParentName = $(this).find("a").text().trim().toLowerCase();
        if ($("#myTabContent div#" + tabid + " a").length) {
            $("#myTabContent div#" + tabid + " a").each(function() {
                $(this).attr("tabParentName", tabParentName);
            })
        }
    })
}
$("#myTabhorizontal li a").mouseover(function() {
    $("#myTabhorizontal li a").each(function() {
        $(this).attr("tabcheck", "No")
    })
    if ($(this).parent().attr('class').indexOf('active') > -1) {
        $(this).attr("tabcheck", "Yes");
    }
    if (!$(this).attr("onclick")) {
        if (typeof $(this).attr('href') !== "undefined" && $(this).attr('href') === "javascript:void(0)") {
           if (typeof $(this).parent().attr("analytics-link") !== "undefined" && $(this).parent().attr("analytics-link").indexOf(':') > -1) {
                    $(this).attr("tabpage", "s.pageName + ' : '");
                    $(this).attr("onclick", "if($(this).attr('tabcheck') !== 'Yes'){tabClickTracking($(this).parent().attr('analytics-link').toLowerCase(),$(this));const tabsel = $(this);}");            
            }
        }
    }
});
jQuery("#myTabhorizontal li a").mouseover(function() {
    if (typeof(jQuery(this).attr('name')) == 'undefined' || jQuery(this).attr('name').length == 0) {
        if (typeof jQuery(this).parent().attr('analytics-link') != "undefined") {
            var alink = jQuery(this).parent().attr('analytics-link');
            jQuery(this).attr('name', alink);
        }
    }
})
//Links tracking ended
//Activity map link value for tab links starting 
setTimeout(function() {
    jQuery(document).ready(function() {
        if(jQuery("#analytics-explorefeaturedvideos").length > 0)
	jQuery(document).on('mouseover', '#analytics-explorefeaturedvideos .vid_headline', function() {
        var vdName = jQuery(this).text(); 
        var posValue = jQuery('h3').index(jQuery(this)); 
        if(posValue < 0){ posValue = posValue * -1;}
            if (vdName != undefined) {
              vdName = vdName.replace(/'/g, '');
              vdName = vdName.replace(/:/g,'');
          } 
		var ptabName;
        var s_obj;
        if(jQuery(this).parent().attr("tabparentname") != undefined){
            ptabName = jQuery(this).parent().attr("tabparentname");
            s_obj = "s_objectID=" + "'" + "vmware_FeaturedVideos_" + ptabName + " : " + vdName + " : " + posValue + "'";
        }
        else{
            s_obj = "s_objectID=" + "'" + "vmware_FeaturedVideos : " + vdName + " : " + posValue + "'";
        }
        var onClk = jQuery(this).attr("onclick");
        var finalOnclk;
        if (onClk === undefined) {
            jQuery(this).attr("onClick", s_obj);
        } else if (onClk.indexOf("s_objectID") == -1) {
            finalOnclk = s_obj + ";" + onClk;
            jQuery(this).attr("onClick", finalOnclk);
        }
		else{
			jQuery(this).attr("onClick", s_obj);
		}
    });	
    jQuery(document).on('mouseover', '#analytics-explorefeaturedvideos a.customerStoryContentImg', function() {
        var temp = jQuery(this).siblings('.customerStoryContent')[0];
        var posValue = jQuery('a').index(jQuery(this));
        if(posValue < 0){ posValue = posValue * -1;}
           var vidName1 = jQuery(temp).find('.vid_headline');
            vidName1 = jQuery(vidName1).text();
            if (vidName1 != undefined) {
                vidName1 = vidName1.replace(/'/g, '');
                vidName1 = vidName1.replace(/:/g,'');
            }
      var s_obj;     
      var ptabName;
       if(jQuery(this).attr("tabparentname") != undefined){
		ptabName = jQuery(this).attr("tabparentname");
		s_obj = "s_objectID=" + "'" + "vmware_FeaturedVideos_" + ptabName + " : " + vidName1 + " : " + posValue + "'";
       }
       else{
        s_obj = "s_objectID=" + "'" + "vmware_FeaturedVideos : " + vidName1 + " : " + posValue + "'";
       }
        var onClk = jQuery(this).attr("onclick");
        var finalOnclk;
        if (onClk === undefined) {
            jQuery(this).attr("onClick", s_obj);
        } else if (onClk.indexOf("s_objectID") == -1) {
            finalOnclk = s_obj + ";" + onClk;
            jQuery(this).attr("onClick", finalOnclk);
        }
		else{
			jQuery(this).attr("onClick", s_obj);
		}
    });
});
    },2000);
//Activity map link value for tab links ending 

jQuery(document).on('mouseover', 'body a', function() {
    if(!jQuery(this).closest(".vid_headline").length){
    if(jQuery(this).attr("tabcheck") != undefined && jQuery(this).attr("tabcheck") != ""){}
    else{
    var posValue = jQuery('a').index(jQuery(this));
    if(posValue < 0){ posValue = posValue * -1;}
    var LinkNameVL;
    if (jQuery(this).attr('link-name') != undefined) {
         LinkNameVL = jQuery(this).attr('link-name');
    } else if (this.innerText != undefined && this.innerText != "") {
        LinkNameVL = this.innerText
        LinkNameVL = LinkNameVL.trim();
    }
    if(jQuery(this).parent(".likes-wrapper").length){
        LinkNameVL = "Like Video";
    }
    if (LinkNameVL != undefined) {
        LinkNameVL = LinkNameVL.replace(/'/g, '');
        LinkNameVL = LinkNameVL.replace(/:/g,'');
    };
    if(jQuery(this).attr("name") != undefined && jQuery(this).attr("name").indexOf("nav_") > -1){}
    else{
  var s_obj = "s_objectID=" + "'" + "vmware_Videolibrary : " + LinkNameVL + " : " + posValue + "'";
    }
    var onClk = jQuery(this).attr("onclick");
    var finalOnclk;
    if (onClk === undefined) {
        jQuery(this).attr("onClick", s_obj);
    } else if (onClk.indexOf("s_objectID") == -1) {
        finalOnclk = `${s_obj};${onClk}`;
        jQuery(this).attr("onClick", finalOnclk);
    }
    else{
        jQuery(this).attr("onClick", s_obj);
    }
}
} 
});
jQuery(document).on('mouseover', '.btn', function() {
    if(!jQuery(this).closest("#analytics-bannerVidLib").length){
        var posValue = jQuery('span').index(jQuery(this));
        if(posValue < 0){ posValue = posValue * -1;}
        var LinkNameVL;
         if (this.innerText != undefined && this.innerText != "") {
            LinkNameVL = this.innerText
            LinkNameVL = LinkNameVL.trim();
        }
        if (LinkNameVL != undefined) {
            LinkNameVL = LinkNameVL.replace(/'/g, '');
            LinkNameVL = LinkNameVL.replace(/:/g,'');
        };
      var s_obj = "s_objectID=" + "'" + "vmware_Videolibrary : " + LinkNameVL + " : " + posValue + "'";
        var onClk = jQuery(this).attr("onclick");
        var finalOnclk;
        if (onClk === undefined) {
            jQuery(this).attr("onClick", s_obj);
        } else if (onClk.indexOf("s_objectID") == -1) {
            finalOnclk = `${s_obj};${onClk}`;
            jQuery(this).attr("onClick", finalOnclk);
        }
        else{
            jQuery(this).attr("onClick", s_obj);
        }
    }
        else{
            if(jQuery("#analytics-bannerVidLib .footer-content-area a").length){
                if ( typeof (jQuery(this).attr('onclick')) == "undefined" || jQuery(this).attr('onclick').indexOf('s_objectID') > -1 ) {
                    var lnkPos = jQuery('a').index(jQuery(this));
                    var buttonName = jQuery(this).text().trim();
                    if (buttonName != undefined) {
                        buttonName = buttonName.replace(/'/g, '');
                        buttonName = buttonName.replace(/:/g,'');
                    };
                    if(lnkPos != null && buttonName != undefined)
                    {var onclk = `s_objectID='vmware_Videolibrary_hero_banner : ${buttonName} : ${lnkPos}';`;}
                    jQuery(this).attr('onclick', onclk);
                }
            } }
    });//Tab tracking code end

   
 // Video image link names explore page	
 jQuery(document).on('mouseover', 'a.customerStoryContentImg', function() {
    if(!jQuery(this).closest("#analytics-explorefeaturedvideos").length){
     var temp = jQuery(this).siblings('.customerStoryContent')[0];
     var posValue = jQuery('a').index(jQuery(this));
     if(posValue < 0){ posValue = posValue * -1;}
        var vidName1 = jQuery(temp).find('.vid_headline');
         vidName1 = jQuery(vidName1).text();
         if (vidName1 != undefined) {
             vidName1 = vidName1.replace(/'/g, '');
             vidName1 = vidName1.replace(/:/g,'');
         }
   var s_obj = "s_objectID=" + "'" + "vmware_Videolibrary_videoResults : " + vidName1 + " : "+ posValue + "'";
     
     var onClk = jQuery(this).attr("onclick");
     var finalOnclk;
     if (!jQuery(this).attr("onclick")) {
         jQuery(this).attr("onClick", s_obj);
     } else if (onClk.indexOf("s_objectID") == -1) {
         finalOnclk = s_obj + ";" + onClk;
         jQuery(this).attr("onClick", finalOnclk);
     }
     else{
         jQuery(this).attr("onClick",s_obj);
     }	
 } 	
 });
 //Video link names explore landing page
 jQuery(document).on('mouseover', '.vid_headline', function() {
  if(!jQuery(this).closest("#analytics-explorefeaturedvideos").length){
     var vdName = jQuery(this).text(); 
       var posValue = jQuery('div').index(jQuery(this)); 
       if(posValue < 0){ posValue = posValue * -1;}
           if (vdName != undefined) {
             vdName = vdName.replace(/'/g, '');
             vdName = vdName.replace(/:/g, '');
         }
    var s_obj = "s_objectID=" + "'" + "vmware_Videolibrary_videoResults : " + vdName + " : " + posValue + "'"; 
     var onClk = jQuery(this).attr("onclick");
     var finalOnclk;
     if (!jQuery(this).attr("onclick")) {
         jQuery(this).attr("onClick", s_obj);
     } else if (onClk.indexOf("s_objectID") == -1) {
         finalOnclk = s_obj + ";" + onClk;
         jQuery(this).attr("onClick", finalOnclk);
     }
     else{
         jQuery(this).attr("onClick",s_obj);
     }
 } 
 });
   
}
 
 //Vmware Explore 2022 tracking end------------------------
    
    /*Redesign script for header and footer script start*/

    jQuery(document).ready(jQuery(document).on('mouseover', 'body a', function() {
        if (typeof(jQuery(this).attr('name')) == 'undefined' || jQuery(this).attr('name').length == 0) {
            if (jQuery(this).html() != 'Next' && jQuery(this).html() != 'Back') {
                lp = "&lpos=" + "apps_scodevmw" + " : " + jQuery('body a').index(jQuery(this));
                jQuery(this).attr('name', lp);
            }
            upvalue = "testingupvalue";
        } else if (typeof(jQuery(this).attr('name')) != 'undefined' && jQuery(this).attr('name').length > 0 && jQuery(this).attr('name').indexOf("&lpos") < 0 && (typeof jQuery(this).parents("form#globalsearch") === "undefined" || jQuery(this).parents("form#globalsearch").attr("id") !== "globalsearch")) {
            if (jQuery(this).attr('name').indexOf("&") > -1) {
                var namewithoutand = jQuery(this).attr("name").replace("&", "and");
                jQuery(this).attr('name', namewithoutand);
            }
            var reevents = "";
            var relinkcat = "";
            if (jQuery(this).attr('name').indexOf(":") > -1 && (typeof jQuery(this).parent().parent().attr('class') !== "undefined" && jQuery(this).parent().parent().attr('class').indexOf('menu-item mb-lg-0')) > -1) {
                jQuery(this).attr('mouseover-name', jQuery(this).attr('name'));
            }
            if (jQuery(this).attr('name').indexOf(":") > -1) {
                var tempUpLinkName = jQuery(this).attr('name').split(":");
                var tempupvalue = upvalue;
                upvalue = "";
                for (var i = 1; i < tempUpLinkName.length; i++) {
                    if (tempUpLinkName[i] != "") {
                        upvalue = upvalue + tempUpLinkName[i];
                    }
                    if ([i + 1] < tempUpLinkName.length) {
                        upvalue = upvalue + "_";
                    }
                }
                if (upvalue === "") {
                    upvalue = tempupvalue;
                }
                relinkcat = jQuery(this).attr('name').split(":")[0].trim();
                jQuery(this).attr('link-name', upvalue.trim());
                if (jQuery(this).html() != 'Next' && jQuery(this).html() != 'Back') {
                    if (relinkcat.toLowerCase().indexOf("nav_footer") > -1 || relinkcat.toLowerCase().indexOf("nav_utility") > -1 || relinkcat.toLowerCase().indexOf("nav_topbar") > -1) {
                        if (reevents != "") reevents = reevents + ",event52";
                        else reevents = "event52";
                    }
                    if (reevents != "") {
                        lp = "&lpos=" + relinkcat + " : " + jQuery('body a').index(jQuery(this)) + "&le=" + reevents;
                    } else {
                        lp = "&lpos=" + relinkcat + " : " + jQuery('body a').index(jQuery(this));
                    }
                    jQuery(this).attr('name', lp);
                }
            }
        } else {
            if (typeof jQuery(this).attr('link-name') != "undefined") upvalue = jQuery(this).attr('link-name');
            else upvalue = "testingupvalue";
        }
    }));
    /*Redesign script for header and footer script END*/

    /*jQuery('body input[type="submit"]').mouseover(function() {
    	if(typeof(jQuery(this).attr('name')) == 'undefined' || jQuery(this).attr('name').length == 0) {
    		lp = "&lpos=apps_scodevmw : " + jQuery('body input[type="submit"]').index(jQuery(this));
    		jQuery(this).attr('name', lp);
    	}
    });
    jQuery('body button[type="submit"]').mouseover(function() {
    	if(typeof(jQuery(this).attr('name')) == 'undefined' || jQuery(this).attr('name').length == 0) {
    		lp = "&lpos=apps_scodevmw : " + jQuery('body button[type="submit"]').index(jQuery(this));
    		jQuery(this).attr('name', lp);
    	}
    });*/

    /*wp microsite for NOW*/
    if (typeof(jQuery('.excerpt-media a')) != 'undefined') {
        if (typeof(bflag) == 'undefined' || !bflag) {
            jQuery('.excerpt-media a').bind('click', function() {
                var tmpp = utag_data.page_name;
                if (typeof(jQuery(this).next().html()) != 'undefined') {
                    utag_data.page_name = utag_data.page_name + " : " + jQuery(this).next().html();
                }
                if (typeof(jQuery(this).children().attr('alt')) != 'undefined') {
                    utag_data.page_name = utag_data.page_name + " : " + jQuery(this).children().attr('alt');
                }
                utag.view(utag_data, null, [15]);
                utag_data.page_name = s.pageName = tmpp;
            });
            bflag = true;
        }
    }
    if (location.href.toLowerCase().indexOf("/vcloudairchallenge/library") > -1 && s.linkType != 'd') {
        s.eVar15 = "";
        s.eVar16 = "";
        s.prop62 = "";
    }
    if (!supresslinkTrack) {
        s.hbx_lt = "auto"; // manual, auto
        //s.setupLinkTrack("prop39,prop17,prop18,prop19,events", "SC_LINKS");
        //s.setupLinkTrack("prop39,prop17,prop18,prop19,events," + upvalue, "SC_LINKS"); // change is Used for Redesign
        upvalue = "testingupvalue"; // Used for Redesign
        //s.eVar62 = "D=c18";
    }
    //var s_url=s.downloadLinkHandler();
    if (s.linkObject && s.linkType == 'd') {
        s.events = "event23";
        s.prop62 = s.eVar15 = s.linkURL;
        s.eVar16 = s.prop34 = 'D=pageName';
        s.prop23 = s.eVar48 = utag_data.content_system;
        //DWEP-1660 and DWEP-1661 Starting
        if (typeof utag_data !== "undefined" && typeof utag_data.content_system !== "undefined" && typeof utag !== "undefined" && typeof utag.cfg !== "undefined" && typeof utag.cfg.path !== "undefined") {
            s.prop23 = s.eVar48 = utag_data.content_system + " | " + utag.cfg.path.split("/")[5]
        } else {
            if (typeof utag !== "undefined" && typeof utag.cfg !== "undefined" && typeof utag.cfg.path !== "undefined") {
                s.prop23 = s.eVar48 = utag.cfg.path.split("/")[5]
            }
        }
        if (jQuery('[name="pagePath"]').length > 0 && typeof utag !== "undefined" && typeof utag.cfg !== "undefined" && typeof utag.cfg.path !== "undefined") {
            s.prop23 = s.eVar48 = "AEM 6.5" + " | " + utag.cfg.path.split("/")[5]
        }
        //DWEP-1660 and DWEP-1661 Ending
        s.prop75 = s.s_account;
        //s.t();
    }
    if (u.o.linkType != 'd') {
        if (s.events) {
            s.events = s.events.replace(/event23(,)*/, '');
        }
    }
    /*every pageload fire event40*/
    if (s.events) {
        s.events = s.apl(s.events, "event40");
    } else {
        s.events = "event40";
    }

    //Logic to read the impressioncookie and set event64/eVar12 for DWEP-1387 | A4T Enhancement - START

    if (getCookie('impressionCookie') != "" && getCookie('impressionCookie') != undefined && getCookie('impressionCookie') != null) {
        var impCookie = getCookie('impressionCookie');
        s.events = s.apl(s.events, "event64");
        s.eVar12 = impCookie;
        document.cookie = "impressionCookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT; domain=.vmware.com; path=/"
    };

    //Logic to read the impressioncookie and set event64/eVar12 for DWEP-1387 | A4T Enhancement - END

    s.prop23 = s.eVar48 = utag_data.content_system;
    //DWEP-1660 and DWEP-1661 Starting
    if (typeof utag_data !== "undefined" && typeof utag_data.content_system !== "undefined" && typeof utag !== "undefined" && typeof utag.cfg !== "undefined" && typeof utag.cfg.path !== "undefined") {
        s.prop23 = s.eVar48 = utag_data.content_system + " | " + utag.cfg.path.split("/")[5]
    } else {
        if (typeof utag !== "undefined" && typeof utag.cfg !== "undefined" && typeof utag.cfg.path !== "undefined") {
            s.prop23 = s.eVar48 = utag.cfg.path.split("/")[5]
        }
    }
    if (jQuery('[name="pagePath"]').length > 0 && typeof utag !== "undefined" && typeof utag.cfg !== "undefined" && typeof utag.cfg.path !== "undefined") {
        s.prop23 = s.eVar48 = "AEM 6.5" + " | " + utag.cfg.path.split("/")[5]
    }
    //DWEP-1660 and DWEP-1661 Ending
    /*ref from optsite DMR-5497*/
    if (document.location.search.indexOf('db-siteopt-rid') != -1) {
        s.events = s.apl(s.events, "event112");
    }
    /*Login page load event1*/
    if (location.href.toLowerCase().indexOf("login") > -1) {
        s.events = s.apl(s.events, "event1");
    }
    /*form pageload fire event43*/
    if (typeof webregData !== "undefined" && webregData !== 1) {
        if (location.href.toLowerCase().indexOf("vmworld-2020-registration-is-now-open/") > -1) {} else if ((location.href.toLowerCase().indexOf("contact-us") > -1 && (document.URL.indexOf('scp=true') == -1) || location.href.toLowerCase().indexOf("registration") > -1 || location.href.toLowerCase().indexOf("register") > -1 || location.href.toLowerCase().indexOf("request-an-invitation-to-futurenet") > -1 || location.href.toLowerCase().indexOf("futurenet") > -1 && jQuery('form#fnet_contact').length > 0) || ((location.href.toLowerCase().indexOf("sase-review.vmware.com/resources") > -1 || location.href.toLowerCase().indexOf("sase.vmware.com/resources") > -1 || window.location.href.indexOf('sase.vmware.com/get-started') > -1) && location.href.toLowerCase().indexOf('/ty') < 0 && location.href.toLowerCase().indexOf('-ty-') < 0 && location.href.toLowerCase().indexOf('thank-you') < 0 && jQuery('form').length > 0)) {
            s.events = s.apl(s.events, "event43");
            var varV17 = s.pageName;
            var arrForm = s.formList.split(',');
            if (location.href.toLowerCase().indexOf("contact-us") > -1 && (document.URL.indexOf('scp=true') == -1) || location.href.toLowerCase().indexOf("register") > -1 || ((location.href.toLowerCase().indexOf("sase-review.vmware.com/resources") > -1 || location.href.toLowerCase().indexOf("sase.vmware.com/resources") > -1 || window.location.href.indexOf('sase.vmware.com/get-started') > -1) && location.href.toLowerCase().indexOf('-ty-') < 0 && location.href.toLowerCase().indexOf('/ty') < 0 && location.href.toLowerCase().indexOf('thank-you') < 0 && jQuery('form').length > 0)) {
                //s.eVar17 = varV17 + ':' + arrForm[0];
                s.eVar17 = varV17 + ' : TheForm';
                if (location.href.toLowerCase().indexOf("sase-review.vmware.com/resources") > -1 || location.href.toLowerCase().indexOf("sase.vmware.com/resources") > -1 || window.location.href.indexOf('sase.vmware.com/get-started') > -1) {
                    saseForm = 1;
                }
            } else if (location.href.toLowerCase().indexOf("registration") > -1) {
                if ($(".registration_form").length > 0) {
                    var formName = $(".registration_form").attr("name");
                    s.eVar17 = varV17 + ":" + formName;
                } else if ($("#resendEmailForm").length > 0 && window.location.href.indexOf('events.vmware.com/web/registration') > -1 && eventsFormName == 0) {
                    var formName = $("#resendEmailForm").attr("name");
                    s.eVar17 = varV17 + ":" + formName;
                    eventsFormName = 1;



                } else if ($("#resendEmailForm").length > 0 && window.location.href.indexOf('events.vmware.com/web/registration') < 0) {
                    var formName = $("#resendEmailForm").attr("name");
                    s.eVar17 = varV17 + ":" + formName;
                    eventsFormName = 1;



                } else if ($("#registerForm").length > 0) {
                    var formName = $("#registerForm").attr("name");
                    s.eVar17 = varV17 + ":" + formName;
                } else {
                    if (window.location.href.indexOf('events.vmware.com/web/registration') < 0) {
                        s.eVar17 = varV17 + ': 16_Q1_Jan_Form_US_Microsite_Launch';
                    }
                }
            } else if (location.href.toLowerCase().indexOf("futurenet") > -1 && jQuery('form#fnet_contact').length > 0) {
                s.eVar17 = varV17 + ":fnet_contact";
            } else {
                s.eVar17 = varV17;
            }
        }
    }
    /*AIT-335 Implement form load event (event 43) and form variable (v17) on radius signup form: */
    if (s.pageName != undefined && s.pageName.indexOf('radius : nsx-newsletter : sign-up') > -1) {
        s.events = s.apl(s.events, "event43");
        s.eVar17 = s.pageName + ':TheForm';
    }
    //Detect Paid and Natural Search and set event66 and event67 accordingly
    if (typeof(src_id) == "string") {
        s.channelManager('src', 1);
    }
    s.eVar96 = s._channel;
    if (s._channel && ((s._channel == "Natural Search") || s._channel == "Paid Search")) {
        //set s.dedupeSearchEvents to a concatenation of referrer, pageName, partner and channel if and only if that value was not used previously
        s.dedupeSearchEvents = s._referrer + ":" + s.pageName + ":" + s._searchEngine + ":" + s._channel;
        s.dedupeSearchEvents = s.getValOnce(s.dedupeSearchEvents, 's_dse', 0);
        if (s.dedupeSearchEvents && (s.dedupeSearchEvents.length > 0)) {
            if (s._channel == "Paid Search") {
                if (s.events) {
                    s.events = s.apl(s.events, "event66");
                } else {
                    s.events = "event66";
                }
                /*capture keyword*/
                s.eVar23 = s.getQueryParam('mt') + '|' + s.getQueryParam('kw');
            }
            if (s._channel == "Natural Search") {
                if (s.events) {
                    s.events = s.apl(s.events, "event67");
                } else {
                    s.events = "event67";
                }
            }
        }
    }
    if (s.eVar23 == undefined && s.getQueryParam('mt') != "" && s.getQueryParam('kw') != "") {
        s.eVar23 = s.getQueryParam('mt') + '|' + s.getQueryParam('kw');
    }
    /*login & logout status*/
    var loginStatusCheck = getCookie("region");
    var pageNameNologin = s.pageName;
    if (loginStatusCheck) {
        if (loginStatusCheck == "") {
            s.prop7 = "Logged Out";
        } else {
            s.prop7 = "Logged In";
            if (pageNameNologin.indexOf(" : reg") == -1) {
                s.pageName = pageNameNologin + " : reg";
            }
        }
    }

    //DWEP-1552 Starting
    if (window.location.href.indexOf('events.vmware.com') > -1) {
        var eventsloginStatusCheck = getCookie("eventsUIDCookie");
        if (eventsloginStatusCheck) {
            if (eventsloginStatusCheck == "") {
                s.prop7 = "Logged Out";
            } else {
                s.prop7 = "Logged In";
            }
        }
    }
    //DWEP-1552 Ending
    //Commented for DWEP-1494 Starting
    /* formAnalysis */
    /*if (location.href.toLowerCase().indexOf("sase-review.vmware.com/resources") < 0 && location.href.toLowerCase().indexOf("sase.vmware.com/resources") < 0 && window.location.href.indexOf('sase.vmware.com/get-started') < 0) {
        s.setupFormAnalysis();
    }
    /* form pages */
    /*if (s.pageName === "vmware : featurewalkthrough : vcn-assessment-tool : assessmentForm") {
        // console.log('assessment form tracking');
        event43();
    }
	if(typeof inlineFormLoadTracking !== "undefined"){
			inlineFormLoadTracking();
		}
		*/
    //Commented for DWEP-1494 Ending
    //DWEP-1494 Starting
    if ((location.href.toLowerCase().indexOf("sase-review.vmware.com/resources") < 0 && location.href.toLowerCase().indexOf("sase.vmware.com/resources") < 0 && window.location.href.indexOf('sase.vmware.com/get-started') < 0 && s.pageName === "vmware : featurewalkthrough : vcn-assessment-tool : assessmentForm") || (jQuery('form[data-vmwareformname]').length > 0)) {
        if (typeof inlineFormLoadTracking !== "undefined") {
            inlineFormLoadTracking();
        }
    }
    //DWEP-1494 Ending
    /* filter internal traffic */
    if (host_to_exclude.indexOf(window.location.host) === -1) {
        checkInternalTraffic();
    }
    // capture previous page name; if it exists, capture percent of page viewed 
    if (s.pageName) s.getPercentPageViewed();
    if (s._ppvPreviousPage) {
        s.prop73 = s._ppvPreviousPage;
        s.prop72 = s._ppvHighestPercentViewed
    };
    /*Kenshoo/Sitecatalyst integration - AIT-213*/
    if (s.getQueryParam('k_clickid')) {
        var varKenshoo = s.getQueryParam('k_clickid');
        if (varKenshoo != "" && varKenshoo != undefined) {
            s.eVar80 = varKenshoo;
        }
    }
    if (s.getQueryParam('GCLID') && s.getQueryParam('GCLID') !== true && s.getQueryParam('GCLID') !== "") {
        var campaign_id2 = "";
        var t = new Date();
        var t1 = t.getTime() + 14 * 3600 * 24 * 1000;
        t.setTime(t1);
        campaign_id2 = s.getQueryParam('GCLID');
        s.c_w("CLKID2", campaign_id2, t);
    }
    var lpv = s.c_r("lpv");
    if (lpv != "" && lpv != undefined) {
        //s.linkTrackVars += ',prop20';
        //s.prop20 = lpv;
    } //commented for DWEP-1640 LPA
    /*hrbenefits_share_email form tracking */
    if (typeof(jQuery('#mail_popup').attr('onclick')) == 'undefined' || jQuery('#mail_popup').attr('onclick') == 0) {
        jQuery('#mail_popup').attr('onclick', 'sc_LoadSendInvite("hrbenefits_share_email",this)');
    };
    s.AudienceManagement.setup({
        "partner": "vmwareinc",
        "visitorService": {
            "namespace": "5B29123F5245AD520A490D45@AdobeOrg"
        },
        "containerNSID": 0,
        "uuidCookie": {
            "name": "aam_uuid",
            "days": 30
        }
    });
    //Ciovantage- wordpress login 
    if (typeof(jQuery('.loginCustom').attr('onclick')) == 'undefined' || jQuery('.loginCustom').attr('onclick') == 0) {
        jQuery('.loginCustom').attr('onclick', 'addPTracking("login")');
    }
    if (typeof(jQuery('#register').attr('onclick')) == 'undefined' || jQuery('#register').attr('onclick') == 0) {
        jQuery('#register').attr('onclick', 'addPTracking("registration")');
    }
    if (window.location.pathname.indexOf("ciovantage") != -1 && getCookie("OAMAuthnCookie") == "") {
        if (jQuery(".loginCustom").length == 1) {
            s.prop7 = (jQuery(".loginCustom").html() == " Log Out") ? "Logged In" : "Logged Out";
        }
    }
    /*  if(window.location.host.indexOf("communities") != -1){
       //console.log(_jive_current_user.ID);      
         if(_jive_current_user.ID > 0){
           s.prop7="Logged In"; 
         } else { s.prop7="Logged Out"; }
       }*/
    if (window.location.host.indexOf("communities") != -1) {
        if (typeof _jive_current_user !== 'undefined') {
            if (_jive_current_user.ID > 0) {
                s.prop7 = "Logged In";
            } else {
                s.prop7 = "Logged Out";
            }
        }
    }
    if (s.pageName != undefined && s.pageName.indexOf("ciovantage") != -1 && s.pageName.indexOf("login") != -1) {
        s.events = s.apl(s.events, "event1");
    }
    if (s.pageName != undefined && s.pageName.indexOf("ciovantage") != -1 && s.pageName.indexOf("registration") != -1) {
        s.events = s.apl(s.events, "event41");
        s.events = s.apl(s.events, "event43");
        s.eVar17 = s.pageName + ":regform";
    }
    if (s.prop7 == "Logged In" && window.location.pathname.indexOf("ciovantage") != -1) {
        if (s.pageName != undefined && s.pageName.indexOf(" : reg") == -1) {
            s.pageName = pageNameNologin + " : reg";
        }
    }
    if (s.pageName != undefined) {
        s.hier1 = s.pageName.replace(/ : /g, ",").replace(/,[^,]+$/, "");
    }
    // DMR-10795 Starting
    if (s.campaign != undefined && s.campaign != "") {
        var hexValueExternal, i;
        var ext_campaign = s.campaign.trim();
        var encodedDataExternal = "";
        for (i = 0; i < ext_campaign.length; i++) {
            hexValueExternal = ext_campaign.charCodeAt(i).toString(16);
            encodedDataExternal += ("000" + hexValueExternal).slice(-4);
        }
        s.eVar164 = encodedDataExternal;
    }
    if (s.eVar37 != undefined && s.eVar37 != "") {
        var hexValueInternal, i;
        var int_campaign = s.eVar37.trim();
        var encodedDataInternal = "";
        for (i = 0; i < int_campaign.length; i++) {
            hexValueInternal = int_campaign.charCodeAt(i).toString(16);
            encodedDataInternal += ("000" + hexValueInternal).slice(-4);
        }
        s.eVar165 = encodedDataInternal;
    }
    //DMR-10795 Ending
    //Eloqua custom code tracking start
    /*  
    var _elqForm = jQuery('[name=elqFormName]').parent('form');

    if(_elqForm.length>0){

      // check if form has name attribute
      if (!!!_elqForm.attr('name')) {
        // form does not have name attribute so default to "TheForm"
        _elqForm.attr('name','TheForm')
      }

      var _elqFormNameStr = _elqForm.attr('name');
      var forms = document.forms[_elqFormNameStr]

    if(jQuery ("input[name='elqCustomerGUID']").length == 0){
                                   var input1 = document.createElement("input");
                                   input1.setAttribute("name", "elqCustomerGUID");
                                   input1.setAttribute("type", "hidden");
                                   input1.setAttribute("value", "");
                                   forms.appendChild(input1);
        }
    if(jQuery("input[name='elqCookieWrite']").length == 0){
                                   var input1 = document.createElement("input");
                                   input1.setAttribute("name", "elqCookieWrite");
                                   input1.setAttribute("type", "hidden");
                                   input1.setAttribute("value", "0");
                                   forms.appendChild(input1);
        }
    }
    */
    //Eloqua custom code tracking start
    if (s.marketingCloudVisitorID !== undefined && s.marketingCloudVisitorID !== null) s.eVar168 = s.marketingCloudVisitorID;
    //eventhost cookie starting
    if ((window.location.host == "events.vmware.com" || window.location.host == "events-dev.vmware.com" || window.location.host == "events-uat2.vmware.com" || window.location.host == "events-stg.vmware.com" || window.location.host == "events-stage.vmware.com") && window.location.href.indexOf("errorCode") < 0) {
        /*if(getCookie1("eventHostIn") !== "") {
        	s.eVar174 = getCookie1("eventHostIn");
        	//s.linkTrackVars = s.linkTrackVars + ",eVar174";
        } else if(getCookie1("eventHostIn") === "" && getCookie1("eventHost") !== "") {
        	s.eVar174 = getCookie1("eventHost");
        } else {
        	s.eVar174 = 'direct';
        	//s.linkTrackVars = s.linkTrackVars + ",eVar174";
        }*/
        if (getCookie1("eventHost") !== "" && getCookie1("eventHost") !== undefined && getCookie1("eventHost") !== "undefined") {
            s.eVar174 = getCookie1("eventHost");
        } else {
            s.eVar174 = 'direct';
        }

    }
    //eventHost cookie code ending 
    //added for blogs analytics update start
    /*
    if(document.querySelector('meta[name="category"]') !== null){
    if(document.querySelector('meta[name="category"]').getAttribute("content") !== null && document.querySelector('meta[name="category"]').getAttribute("content") !== undefined && document.querySelector('meta[name="category"]').getAttribute("content") !== "" )
     {
    	 var temppagename=s.pageName;
    	 var firstpart_page_name=temppagename.substr(0,32);
    	 var fsecondpart_page_name=temppagename.substr(33,temppagename.length);
    	 var secondpart_page_name=temppagename.substr(33,temppagename.length);
    	 var blogname=document.querySelector('meta[name="category"]').getAttribute("content");
         var blogs_firstpart_page_name = firstpart_page_name + " : " + blogname;
         s.pageName = blogs_firstpart_page_name + "" + secondpart_page_name;
     }*/
    if (document.querySelector('meta[name="persona"]') !== null) {
        if (document.querySelector('meta[name="persona"]').getAttribute("content") !== null && document.querySelector('meta[name="persona"]').getAttribute("content") !== undefined && document.querySelector('meta[name="persona"]').getAttribute("content") !== "") {
            s.prop33 = document.querySelector('meta[name="persona"]').getAttribute("content");
        }
    }

    if (location.href.toLowerCase().indexOf("blogs.vmware.com") > -1 && document.querySelector('.post-headline .category-label') !== null) {
        s.prop4 = "";
        document.querySelectorAll('.post-headline .category-label').forEach(e => {
            s.prop4 += ((s.prop4 == "") ? "" : "_") + e.text
        });

    }


    //ending 
    //PageName Trimming Logic Start
    /*
  if(typeof s.pageName !== "undefined" && s.pageName !== ""){
 var temppageName = s.pageName.split(":");
s.pageName = "";
for(var i=0;i<temppageName.length;i++){
  
  if(s.pageName!= ""){
		s.pageName = s.pageName + temppageName[i].trim();
	}
	else{
	   s.pageName = temppageName[i].trim();
	}
    if((i+1) !== temppageName.length){
    s.pageName = s.pageName + " : ";
    }
}
}
*/
    //PageName Trimming Logic End
    //PageName Trimming Logic Start
    if (typeof s.pageName !== "undefined" && s.pageName !== "") {
        var temppageName = s.pageName.split(":");
        s.pageName = "";
        for (var i = 0; i < temppageName.length; i++) {
            if (s.pageName != "") {
                if ((i + 1) === temppageName.length && temppageName[i] !== temppageName[i - 1]) s.pageName = s.pageName + temppageName[i].trim();
                if ((i + 1) < temppageName.length) {
                    s.pageName = s.pageName + temppageName[i].trim();
                }
            } else {
                s.pageName = temppageName[i].trim();
            }
            if ((i + 1) !== temppageName.length) {
                s.pageName = s.pageName + " : ";
            }
        }
    }
    //PageName Trimming Logic End

    //Testing Form Submission Start
	//commenting this code to prevent double tag count-DWEP-2509
    if (((location.href.toLowerCase().indexOf("sase-review.vmware.com/resources") > -1 || location.href.toLowerCase().indexOf("sase.vmware.com/resources") > -1 || window.location.href.indexOf('sase.vmware.com/get-started') > -1) && location.href.toLowerCase().indexOf('-ty-') < 0 && location.href.toLowerCase().indexOf('/ty') < 0 && location.href.toLowerCase().indexOf('thank-you') < 0) || jQuery('form[data-vmwareformname]').length > 0) {
        if (sc_sendFormFlag == 1) {
            //console.log("Test inside if sc_sendForm");
            s.events = "event25";
            s.linkTrackEvents = "event25";
            s.linkTrackVars = s.linkTrackVars + ",eVar17,events";
        }
    }
    //Testing Form Submission End
	

	//Video Tracking .video call Logic Starting

    //VMWorld Video Code - START
	
    jQuery('div a[data-is-video="true"]').mouseover(function() {
		
        if (!jQuery(this).attr('onclick') || jQuery(this).attr('onclick').indexOf('addVTracking') == -1) {
			
            var othis = jQuery(this);
            var sonclick = jQuery(this).attr('onclick');
			
			//Logic to check if it is Kaltura Video
			var assetID = jQuery(this).attr("data-assetid");
			if (typeof assetID == "undefined" || assetID == "") {
				assetID = jQuery(this).attr("asset-id");
			}
			var linkID = jQuery('a').index(jQuery(this));
			var KalturaVideoId = assetID;
			var pattern = new RegExp('^(?=.*[_])(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9_]+)([a-zA-Z0-9_]+)$');
			var kalturaVideoCheck = pattern.test(KalturaVideoId);
			
			if (kalturaVideoCheck != undefined && kalturaVideoCheck == true) {
				
				var wid;
				if(typeof $(this).attr('data-accountid') != "undefined" && $(this).attr('data-accountid') != ""){
					wid = "_" + $(this).attr('data-accountid');
				} else {
					wid = "_3339523";
				}
				var entryId = $(this).attr('data-assetid');
				if (typeof entryId == "undefined" || entryId == "") {
					entryId = jQuery(this).attr("asset-id");
				}
				/*var ksvalues;
				if(jQuery('[name="pagePath"]').length > 0){
					ksvalues = "djJ8MzMzOTUyM3x2a9bWzZu2GJfSa1VQzYUYWPifiQ5U4GPf_ik4m8pDlQqwM4IxcX5G9PsisXrxT6rvcW9Z36FX2ioQM1f-y9aORqIxgF6N_sKb_SYT2F6PP7X39PVbCNe3exrgUzTPeWevOsSBb3xtTBdkWvW6ZrZD";
				}
				else {
					ksvalues = "{1:result:ks}"
				}*/
				//console.log("Kaltura video click");
				$.ajax({
					url: 'https://cdnapi.kaltura.com/api_v3/index.php?service=multirequest&format=9&1:service=session' + '&1:action=startWidgetSession&1:widgetId=' + wid + '&2:service=flavorasset&2:action=getByEntryId&2:ks={1:result:ks}&2:entryId=' + entryId + '&3:service=baseEntry&3:action=get&3:ks={1:result:ks}&3:entryId=' + entryId + '&callback=kWidget.getSourcesCallback',
					type: 'GET',
					crossDomain: true,
					dataType: 'jsonp',
					success: function(vdata) {
						//console.log(vdata[2].name); //to be commented
						var vdataName = vdata[2].name;
						if (vdataName != undefined) {
                            vdataName = vdataName.replace(/'/g, '');
                        }
						var vt = "";
						var t_min = Math.floor(vdata[2].msDuration / 60000);
						var t_sec = Math.floor((vdata[2].msDuration % 60000) / 1000);
						if (t_sec <= 9) {
							t_sec = "0" + t_sec;
						}
						vt = t_min + ':' + t_sec;
						
						if (sonclick.indexOf('addVTracking') == -1) {
							var name = othis.attr('name');
							var s_obj;
							if (name != undefined) {
								if (name.indexOf('&lpos=') > -1) {
									name = name.split('&lpos=')[1].split(':')[0].trim();
								} else if (name.indexOf(':') > -1) {
									name = name.split(':')[0].trim();
								}
								s_obj = name + " : " + vdataName + " : " + linkID;
							} else {
								s_obj = "apps_scodevmw : " + vdataName + " : " + linkID;
							}
							//sonclick = 'addVTracking("' + assid + '","' + vdata.name + '","' + t_min + ':' + t_sec + '");s_objectID=' + assid + ';' + sonclick;
							sonclick = "addVTracking('" + entryId + "','" + vdataName + "','" + t_min + ':' + t_sec + "');s_objectID='" + s_obj + "';" + sonclick;
							othis.attr('onclick', sonclick);
						}

					},
					error: function(vdata) {},
				});
			}
			else {
                var str = /\d+\d*/;
                var assid = jQuery('div a[data-is-video="true"]').attr('onclick').match(str);
                $.ajax({
                    url: "//api.brightcove.com/services/library?command=find_video_by_id&video_fields=name,length&token=f54SyqPc7JA3wC_jE5P0bka9o8rpcUMnyDykoWOHnThctvo6WQ4GYw..&video_id=" + assid,
                    type: 'GET',
                    crossDomain: true,
                    dataType: 'jsonp',
                    success: function(vdata) {
                        var vdataName = vdata.name;
                        if (vdataName != undefined) {
                            vdataName = vdataName.replace(/'/g, '');
                        }
                        var vt = "";
                        if (vdata.length != -1) {
                            var t_min = Math.floor(vdata.length / 60000);
                            var t_sec = Math.floor((vdata.length % 60000) / 1000);
                            if (t_sec <= 9) {
                                t_sec = "0" + t_sec;
                            }
                            vt = t_min + ':' + t_sec;
                        }
						
						if (sonclick.indexOf('addVTracking') == -1) {
							var name = othis.attr('name');
							var s_obj;
							if (name != undefined) {
								if (name.indexOf('&lpos=') > -1) {
									name = name.split('&lpos=')[1].split(':')[0].trim();
								} else if (name.indexOf(':') > -1) {
									name = name.split(':')[0].trim();
								}
								s_obj = name + " : " + vdataName + " : " + linkID;
							} else {
								s_obj = "apps_scodevmw : " + vdataName + " : " + linkID;
							}
							//sonclick = 'addVTracking("' + assid + '","' + vdata.name + '","' + t_min + ':' + t_sec + '");s_objectID=' + assid + ';' + sonclick;
							sonclick = "addVTracking('" + assid + "','" + vdataName + "','" + t_min + ':' + t_sec + "');s_objectID='" + s_obj + "';" + sonclick;
							othis.attr('onclick', sonclick);
						}
						
                    },
                    error: function(vdata) {},
                });
                lp = "&lpos=vmworld_video : " + jQuery('div a[data-is-video="true"]').index(jQuery(this));
                jQuery(this).attr('name', lp);
            }
        }
    });

    //VMWorld Video Code - END

	//Pop-up Video Code for PZN & Non PZN videos - START

    jQuery('div a[data-element-type="video"]').mouseover(function() {
		
        if (!jQuery(this).attr('onclick') || jQuery(this).attr('onclick').indexOf('addVTracking') == -1) {
			
            var othis = jQuery(this);
            var sonclick = othis.attr('onclick');
                                    if (typeof (sonclick) == 'undefined') {
                                        sonclick = '';
                                    }
			
			//Logic to check if it is Kaltura Video
			var assetID = jQuery(this).attr("data-assetid");
			if (typeof assetID == "undefined" || assetID == "") {
				assetID = jQuery(this).attr("asset-id");
			}
			var linkID = jQuery('a').index(jQuery(this));
			var KalturaVideoId = assetID;
			var pattern = new RegExp('^(?=.*[_])(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9_]+)([a-zA-Z0-9_]+)$');
			var kalturaVideoCheck = pattern.test(KalturaVideoId);
			
			if (kalturaVideoCheck != undefined && kalturaVideoCheck == true) {
				
				var wid;
				if(typeof $(this).attr('data-accountid') != "undefined" && $(this).attr('data-accountid') != ""){
					wid = "_" + $(this).attr('data-accountid');
				} else {
					wid = "_3339523";
				}
				var entryId = $(this).attr('data-assetid');
				if (typeof entryId == "undefined" || entryId == "") {
					entryId = jQuery(this).attr("asset-id");
				}
				/*var ksvalues;
				if(jQuery('[name="pagePath"]').length > 0){
					ksvalues = "djJ8MzMzOTUyM3x2a9bWzZu2GJfSa1VQzYUYWPifiQ5U4GPf_ik4m8pDlQqwM4IxcX5G9PsisXrxT6rvcW9Z36FX2ioQM1f-y9aORqIxgF6N_sKb_SYT2F6PP7X39PVbCNe3exrgUzTPeWevOsSBb3xtTBdkWvW6ZrZD";
				}
				else {
					ksvalues = "{1:result:ks}"
				}*/
				//console.log("Kaltura video click");
				$.ajax({ 
					url: 'https://cdnapi.kaltura.com/api_v3/index.php?service=multirequest&format=9&1:service=session' + '&1:action=startWidgetSession&1:widgetId=' + wid + '&2:service=flavorasset&2:action=getByEntryId&2:ks={1:result:ks}&2:entryId=' + entryId + '&3:service=baseEntry&3:action=get&3:ks={1:result:ks}&3:entryId=' + entryId + '&callback=kWidget.getSourcesCallback',
					type: 'GET',
					crossDomain: true,
					dataType: 'jsonp',
					success: function(vdata) {
						//console.log(vdata[2].name); //to be commented
						var vdataName = vdata[2].name;
						if (vdataName != undefined) {
                            vdataName = vdataName.replace(/'/g, '');
                        }
						var vt = "";
						var t_min = Math.floor(vdata[2].msDuration / 60000);
						var t_sec = Math.floor((vdata[2].msDuration % 60000) / 1000);
						if (t_sec <= 9) {
							t_sec = "0" + t_sec;
						}
						vt = t_min + ':' + t_sec;
						
						if (sonclick.indexOf('addVTracking') == -1) {
							var name = othis.attr('name');
							var s_obj;
							if (name != undefined) {
								if (name.indexOf('&lpos=') > -1) {
									name = name.split('&lpos=')[1].split(':')[0].trim();
								} else if (name.indexOf(':') > -1) {
									name = name.split(':')[0].trim();
								}
								s_obj = name + " : " + vdataName + " : " + linkID;
							} else {
								s_obj = "apps_scodevmw : " + vdataName + " : " + linkID;
							}
							//sonclick = 'addVTracking("' + assid + '","' + vdata.name + '","' + t_min + ':' + t_sec + '");s_objectID=' + assid + ';' + sonclick;
							sonclick = "addVTracking('" + entryId + "','" + vdataName + "','" + t_min + ':' + t_sec + "');s_objectID='" + s_obj + "';" + sonclick;
							othis.attr('onclick', sonclick);
						}

					},
					error: function(vdata) {},
				});
			}
			else {
                $.ajax({
                    url: "https://edge.api.brightcove.com/playback/v1/accounts/1534342432001/videos/" + jQuery(this).attr("asset-id"),
                    type: 'GET',
                    beforeSend: function(xhr) {
                        xhr.setRequestHeader('Accept', 'application/json;pk=BCpkADawqM2h2aQAAuDrydiKIww3A1sjUbPd7FFBMtgBvnVeG-rr21_sy2bZJT8GvFNbdnfF4KZ0UDImeO8smymIe3Twz0vkIu6v6o19hdc-FxMy1i0mk8XHg7pLEu3I2m3nCZlTnjJkXXna');
                    },
                    success: function(vdata) {
                        var vdataName = vdata.name;
                        if (vdataName != undefined) {
                            vdataName = vdataName.replace(/'/g, '');
                        }
                        var t_min = Math.floor(vdata.duration / 60000);
                        var t_sec = Math.floor((vdata.duration % 60000) / 1000);
                        if (t_sec <= 9) {
                            t_sec = "0" + t_sec;
                        }
                        var assid = othis.attr("asset-id");

                        if (typeof(sonclick) == 'undefined') {
                            sonclick = '';
                        }
						if (sonclick.indexOf('addVTracking') == -1) {
							var name = othis.attr('name');
							var s_obj;
							if (name != undefined) {
								if (name.indexOf('&lpos=') > -1) {
									name = name.split('&lpos=')[1].split(':')[0].trim();
								} else if (name.indexOf(':') > -1) {
									name = name.split(':')[0].trim();
								}
								s_obj = name + " : " + vdataName + " : " + linkID;
							} else {
								s_obj = "apps_scodevmw : " + vdataName + " : " + linkID;
							}
							//sonclick = 'addVTracking("' + assid + '","' + vdata.name + '","' + t_min + ':' + t_sec + '");s_objectID=' + assid + ';' + sonclick;
							sonclick = "addVTracking('" + assid + "','" + vdataName + "','" + t_min + ':' + t_sec + "');s_objectID='" + s_obj + "';" + sonclick;
							othis.attr('onclick', sonclick);
						}
                    },
                    error: function(vdata) {},
                });
            }
		}
	});
	
    //Logic for setting addVTracking and Activity Map s_objectID for videos on mouseover - End


    //Logic for setting s_objectID in Input Tag on mouseover for Activity Map - Start

    if (window.location.href.indexOf("vmware.zorch.com/") < 0) {
        jQuery(document).on('mouseover', 'body input[type="submit"], body button[type="submit"]', function() {
            var linkName;
            var s_obj
            if (jQuery(this).attr('value') != undefined) {
                linkName = jQuery(this).attr('value');
            } else if (jQuery(this).text() != undefined) {
                linkName = jQuery(this).text().trim();
            }
            if (jQuery(this).is('input')) {
                s_obj = "apps_scodevmw : " + linkName + " : " + jQuery('body input[type="submit"]').index(jQuery(this));
            } else {
                s_obj = "apps_scodevmw : " + linkName + " : " + jQuery('body button[type="submit"]').index(jQuery(this));
            }
            var onclk = "s_objectID='" + s_obj + "'";
            if (jQuery(this).attr('onclick') == undefined) {
                jQuery(this).attr('onclick', onclk);
            } else if (jQuery(this).attr('onclick').indexOf('s_objectID') == -1) {
                onclk = onclk + ";" + jQuery(this).attr('onclick');
                jQuery(this).attr('onclick', onclk);
            }
        });
    }

    //Logic for setting s_objectID in Input Tag on mouseover for Activity Map - End

    //Logic for setting s_objectID in button Tag on mouseover for Activity Map - Start

    if (window.location.href.indexOf("vmware.zorch.com/") < 0) {
        jQuery(document).on('mouseover', 'body button', function() {
            var linkID = "";
            if (this.innerText != undefined && this.innerText != "") {
                linkID = this.innerText;
                linkID = linkID.replace(/'/g, '');
                linkID = linkID.trim();
            }
            var s_obj = "s_objectID=" + "'" + "apps_scodevmw" + " : " + linkID + " : " + jQuery('body button').index(jQuery(this)) + "'";
            var onClk = jQuery(this).attr('onclick');
            if (onClk === undefined || onClk === null) {
                jQuery(this).attr('onclick', s_obj);
            } else if (onClk.indexOf("s_objectID") == -1) {
                var finalsobj = s_obj + ";" + onClk;
                jQuery(this).attr('onclick', finalsobj);
            }
        });
    }

    //Logic for setting s_objectID in button Tag on mouseover for Activity Map - End

    //Logic for setting the s_objectID in Anchor All links for all Activity Map Link Tracking - START

    if (window.location.href.indexOf("vmware.zorch.com/") < 0) {
        jQuery(document).on('mouseover', 'body a', function() {
            if (jQuery(this).attr('data-element-type') == undefined || jQuery(this).attr('data-element-type') != 'video') {
                var name = jQuery(this).attr('name');
                var linkCat;
                var linkPos;
                var linkID;
                if (name != undefined) {
                    if (name.indexOf('&lpos') > -1 && name.indexOf('&le') > -1) {
                        name = name.split('&lpos=');
                        linkCat = name[1].split(':')[0].trim();
                        linkPos = name[1].split(':')[1].split('&le=')[0].trim();
                    } else if (name.indexOf('&lpos') > -1 && name.indexOf('&le') == -1) {
                        name = name.split('&lpos=');
                        linkCat = name[1].split(':')[0].trim();
                        linkPos = name[1].split(':')[1].trim();
                    }
                }
                if (jQuery(this).attr('link-name') != undefined) {
                    linkID = jQuery(this).attr('link-name');
                } else if (jQuery(this).has("img").length) {
					var imgTag = jQuery(this).find("img")[0];
					var linkSRC = imgTag.getAttribute('src');
					if (linkSRC.indexOf('/') > -1){
						linkSRC = linkSRC.split('/');
						linkID = linkSRC[linkSRC.length-3] + "/" + linkSRC[linkSRC.length-2] + "/" + linkSRC[linkSRC.length -1];
					}
				} else if (this.innerText != undefined && this.innerText != "") {
                    linkID = this.innerText
                    linkID = linkID.trim();
                }
                if (linkID != undefined) {
                    linkID = linkID.replace(/'/g, '');
                }
                var tempName = linkCat + " : " + linkID + " : " + linkPos;
                var nameAttr = jQuery(this).attr('name');
                if (linkCat == undefined && linkID == undefined && nameAttr != undefined) {
                    if (nameAttr.indexOf(":") > -1) {
                        linkCat = nameAttr.split(":")[0].trim();
                        linkID = nameAttr.split(":")[1].trim();
                        linkID = linkID.replace(/'/g, '');
                        tempName = linkCat + " : " + linkID;
                    }
                }
                if ((linkCat != undefined && linkCat != "") || (linkID != undefined && linkID != "")) {
                    var onClk = jQuery(this).attr("onclick");
                    var finalOnclk;
                    if (onClk === undefined) {
                        finalOnclk = "s_objectID='" + tempName + "'"
                        //console.log(finalOnclk);
                        jQuery(this).attr("onClick", "s_objectID='" + tempName + "'");
                    } else if (onClk.indexOf("s_objectID") == -1) {
                        //console.log("OnClick Already Exist")
                        if (onClk.endsWith(";"))
                            finalOnclk = onClk + "s_objectID=" + "'" + tempName + "'";
                        else
                            finalOnclk = onClk + ";" + "s_objectID=" + "'" + tempName + "'";
                        //console.log(finalOnclk);
                        jQuery(this).attr("onClick", finalOnclk);
                    }
                }
            }
        });
    }

    //Logic for setting the s_objectID in All links for all Activity Map Link Tracking - END

//Events-Listing Tab tracking starting 2022
if(jQuery("#analytics-event-tab li a").length > 0){
jQuery("#analytics-event-tab li a").mouseover(function(){
	var lnkPos = jQuery('a').index(jQuery(this));
	var Tnames;
	if(jQuery(this).text() != "undefined")
	{Tnames = jQuery(this).text().trim();}
     if (typeof jQuery(this).attr('onclick') != "undefined") {
                    var onclk = $(this).attr('onclick');
					         
                        var TbName = 'var a = "content_Find_an_Event"; var b = $(this).attr("link-name") ? $(this).attr("link-name").trim().toLowerCase() : $(this).text().trim(); var TbName = a + " : " + b; addCTracking(TbName);s_objectID="content_Find_an_Event : '+ Tnames + ' : ' + lnkPos + '";';
                                         
                    $(this).attr('onclick', TbName);
                } else {
                    $(this).attr('onclick', 'var a = "content_Find_an_Event"; var b = $(this).attr("link-name") ? $(this).attr("link-name").trim().toLowerCase() : $(this).text().trim(); var TbName = a + " : " + b; addCTracking(TbName);s_objectID="content_Find_an_Event : ' + Tnames + ' : ' + lnkPos + '";');
                }
   
});
}
//Filter tracking s_objectID
if(jQuery('#filter-event-listing-analytics').length > 0){
jQuery('#filter-event-listing-analytics li .check_filter').mouseover(function(e){
            var par = jQuery(e.target).attr("name");
            var labelNameD	 = jQuery(e.target).next("label").text();
            var indexVal =  jQuery(e.target).parent().index();
			 var ftName;
            if(labelNameD != undefined && labelNameD.length > 0 && indexVal != null && par != undefined){
                ftName= "s_objectID='Find_an_Event_" + par +" : " + labelNameD + " : "; 
                ftName = ftName.concat(indexVal) + "'";
                if (!jQuery(this).attr('onclick')){
                jQuery(this).attr("onclick", ftName);
				}
            }
            
        });
}
//Events-Listing Tab tracking ending 2022

//Register/Visit/Watch button click s_objectID value change start 
if(jQuery("#analytics-microsite-event-listing-page").length >0){
jQuery('#analytics-microsite-event-listing-page .display.table-striped.dataTable a').mouseover(function(e){
    var NameLink = jQuery(this).text();
	var indexVal =  jQuery(this).parent().parent().parent().index();
    var ParName;
        if(jQuery(".TabList .active a").attr('href') != "undefined" && jQuery(".TabList .active a").attr('href') == '#Upcoming'){
        ParName = "Upcoming";
        }
    if(jQuery(".TabList .active a").attr('href') != "undefined" && jQuery(".TabList .active a").attr('href') == '#Ondemand'){
        ParName = "Past_Events";
        }
            var ftName;
            if(NameLink != undefined && NameLink.length > 0 && indexVal != null && ParName != undefined){
                ftName= "s_objectID='Find_an_Event_" + ParName +" : " + NameLink + " : "; 
                ftName = ftName.concat(indexVal) + "'";
                if (!jQuery(this).attr('onclick')){
                jQuery(this).attr("onclick", ftName);
				}
            }
            
        });
}
//Register/Visit/Watch button click s_objectID value change end 
//Events-Listing 2022 component filters starting 
addMyCTracking = function(name){
    var tempoEvents = s.events;
    var tempoLEvents = s.linkTrackEvents;
    s.events = "";
    supresslinkTrack = true;
    var tmplink = s.linkTrackVars;
        s.linkTrackEvents = "event124";
        s.events = "event124";
        s.linkTrackVars = 'prop20,prop13,prop8,prop39,prop66,eVar39,prop75,prop73,eVar66,prop70,eVar102,eVar145,events,eVar178';
        s.prop8 = digitalData.page.pageInfo.geoRegion;
        s.prop13 = digitalData.page.pageInfo.language;
        s.prop39 = s.eVar39 = s.pageName;
        s.prop75 = s.account;
        s.prop73 = s.pageName;
        if(window.pageID != undefined)
        {s.eVar66 = document.domain + window.pageID;}
        else
        {s.eVar66 = document.domain + document.location.pathname;}
		if(name != undefined){
     	if(jQuery("#analytics-microsite-event-listing-page").length >0)
		{var splitF = name.split("Event_")[1];
		s.eVar145 = "Find an Event | " + splitF.split(" :")[0] + " | " + splitF.split(": ")[1]; 
		} //added for events listing page
        if(window.location.href.includes("videos-stg.vmware.com/") || window.location.href.includes("videos.vmware.com/"))
		{s.eVar145 = "vmware Videolibrary filters | " + name.split(" :")[0] + " | " + name.split(": ")[1]; }//added for vmware video library 2022
		}
        s.eVar178 = getTimeParting("America/Los_Angeles");
        s.tl(this, 'o', name);
        s.prop66 = s.prop39 = s.eVar39 = s.eVar66 = s.eVar102 = s.eVar145 = '';
    supresslinkTrack = false;
    s.linkTrackVars = tmplink;
    s.events = tempoEvents;
    s.linkTrackEvents = tempoLEvents;
}
//Events-Listing 2022 component filters ending 

    //DMR-12259 Search Keyword and Filters Tracking Starting
    //Filters Tracking
    jQuery(document).ready(function(e) {

        if (jQuery("ul[class=filters]").find("li div[id]").length > 0) {
            var w = jQuery("ul[class=filters]").find("li div[id]").length
            for (j = 0; j < w; j++) {
                var filterId = "#" + jQuery("ul[class=filters]").find("li div[id]")[j].getAttribute("id");
                //Tracking all the filters only when selected
                if ((jQuery(".filters " + filterId + " .rf-checkbox-wrapper[data-test]").attr("onchange")) === undefined)
                    jQuery(".filters " + filterId + " .rf-checkbox-wrapper[data-test]").attr('onchange', 'if(jQuery(this).attr("data-test").includes("-active-")){ var filterTerm ="vmworld content catalog | "+jQuery(this).parents(".filter-cat").attr("id").toLowerCase()+" | "+jQuery(this).find(".rfSI.rf-checkbox-icon").attr("title").toLowerCase();addFTTracking(filterTerm) }')


            }
        }

        //Search Keyword Tracking

         //click on magnifier icon
        if (jQuery('div.catalog-search .mdBtnR.mdBtnR-primary.search-submit.mdBtnR-adv').attr("onClick") === undefined)
            jQuery('div.catalog-search .mdBtnR.mdBtnR-primary.search-submit.mdBtnR-adv').attr('onClick', 'if((jQuery(this).siblings(".rf-input.no-label").find("input[data-test=rf-text-input-node]").attr("value") !== undefined) && (jQuery(this).siblings(".rf-input.no-label").find("input[data-test=rf-text-input-node]").attr("value") !== "")){ var searchTerm = "vmworld content catalog | "+jQuery(this).siblings(".rf-input.no-label").find("input[data-test=rf-text-input-node]").attr("value").toLowerCase();addSTTracking(searchTerm)}')


        //click enter
        enterKeyValidation = function(e, ty) {
            var key = e.which;
            if (key == 13) // the enter key code
            {
                if (ty.find("input[data-test=rf-text-input-node]").attr("value") !== undefined && ty.find("input[data-test=rf-text-input-node]").attr("value") !== "") {
                    var searchTerm = "vmworld content catalog | " + ty.find("input[data-test=rf-text-input-node]").attr("value").toLowerCase();
                    addSTTracking(searchTerm);
                }
            }
        };

        if (jQuery(".catalog-search .rf-input.no-label").attr("onkeypress") === undefined)
            jQuery(".catalog-search .rf-input.no-label").attr("onkeypress", "enterKeyValidation(event, jQuery(this))")



    });




    //DMR-12259 Search Keyword and Filters Tracking Starting
    //Search Term Tracking
    addSTTracking = function(name) {
        var tmplink = s.linkTrackVars;
        var tmpevents = s.events;
        var templinkevents = s.linkTrackEvents;
        supresslinkTrack = true;
        s.linkTrackVars = 'prop39,prop75,prop73,eVar39,eVar144,eVar178';
        s.linkTrackEvents = "event123";
        s.events = "event123";
        s.prop39 = s.eVar39 = s.pageName;
        s.prop75 = s.account;
		//if (name.indexOf('|') > -1){
       
		//}
        if(window.location.href.includes('videos-stg.vmware.com') || window.location.href.includes('videos.vmware.com')){
            s.prop73 = s.pageName;
            s.eVar144 = name.split(" :")[0] + " | " + name.split(": ")[1]; 
        }
        else{
        s.eVar144 = name;
        }
        //DWEP-1662 Starting//
        s.eVar178 = getTimeParting("America/Los_Angeles");
        //DWEP-1662 Ending//
        s.tl(this, 'o', name);
        supresslinkTrack = false;
        s.linkTrackVars = tmplink;
        s.linkTrackEvents = templinkevents;
        s.events = tmpevents;
        s.eVar144 = "";
    }

    //Filter Term Tracking
    addFTTracking = function(name) {
        var tmplink = s.linkTrackVars;
        var tmpevents = s.events;
        var templinkevents = s.linkTrackEvents;
        supresslinkTrack = true;
        s.linkTrackVars = 'prop39,prop75,prop73,eVar39,eVar145,eVar178';
        s.linkTrackEvents = "event124";
        s.events = "event124";
        s.prop39 = s.eVar39 = s.pageName;
        s.prop75 = s.account;
        s.eVar145 = name;
        //DWEP-1662 Starting//
        s.eVar178 = getTimeParting("America/Los_Angeles");
        //DWEP-1662 Ending//
        s.tl(this, 'o', name);
        supresslinkTrack = false;
        s.linkTrackVars = tmplink;
        s.linkTrackEvents = templinkevents;
        s.events = tmpevents;
        s.eVar145 = "";
    }

    //DMR-12259 Search Keyword and Filters Tracking Ending

    if (window.location.href.indexOf('vmworld.jp') > 1) {
        if (s.pageName != undefined && !(s.pageName.includes("jp : ja"))) {
            s.pageName = "jp : ja" + " : " + s.pageName;
        }
    }

    //Logic to drop a cookie on click of PZN CTA/Links for DWEP-1387 | A4T Enhancement - START

    document.querySelectorAll("a[href*='_TNT_']").forEach(function(object) {
        object.addEventListener('click', function() {
            if (object != undefined && object.getAttribute('href') != undefined && object.getAttribute('href').indexOf("?") > -1 && object.getAttribute('href').indexOf(".pdf") == -1) {
                var linkhref = object.getAttribute('href').split("?")[1];
                if (typeof linkhref != "undefined" && linkhref.indexOf("src=") > -1) {
                    var cname = linkhref.split("src=")[1];
                    if (typeof cname != "undefined" && cname.indexOf('&') > -1) {
                        cname = cname.split('&')[0];
                        cname = cname.trim();
                        //console.log(cname);
                        var count = localStorage.getItem(cname);
                        var impressionCount;
                        if (count == null || count == undefined) {
                            impressionCount = 1;
                        } else {
                            impressionCount = count;
                        }
                        var impressionCookie = cname + " : " + impressionCount;
                        //console.log(impressionCookie);
                        var exdays = 1;
                        var d = new Date();
                        d.setTime(d.getTime() + (exdays * 4 * 60 * 60 * 1000));
                        var expires = d.toGMTString();
                        document.cookie = "impressionCookie" + "=" + impressionCookie + ";expires=" + expires + ";domain=.vmware.com;path=/"
                    }
                }
            }
        })
    });

    //Logic to drop a cookie on click of PZN CTA/Links for DWEP-1387 | A4T Enhancement - END
    //DWEP-1662 Starting//
    if (s.linkType == "e") {
        s.linkTrackVars = s.linkTrackVars + ",eVar178";
        s.eVar178 = getTimeParting("America/Los_Angeles");
    }
    //DWEP-1662 Ending//
	//DWEP-1851 Starting//
	if (jQuery("a[name='pagePath']").length > 0 || jQuery("meta[name='pagePath']").length > 0){
		if(document.referrer == ""){
			var ref= "dr_624f16b77a029"
			console.log("document referrer is empty: dr_624f16b77a029");
			var t = new Date();
			var t1 = t.getTime() + 14 * 3600 * 24 * 1000;
			t.setTime(t1);
			if ( getCookie('ext_src_id') == "" ) {
				s.c_w('ext_src_id', ref, t);	
				s.prop32 = ref;
				s.eVar32 = ref;	
				s.events = s.apl(s.events, 'event26');
			}
		}
		if( (typeof b != "undefined") && ( b['ref_src'] !== "" ) && ( b['ref_src'] !== null ) && ( b['ref_src'] !== undefined ) ) {
			var ref= b['ref_src'];
			var t = new Date();
			var t1 = t.getTime() + 14 * 3600 * 24 * 1000;
			t.setTime(t1);
			if(!window.location.href.includes("?src")){
					s.c_w('ext_src_id', ref, t);
					s.prop32 = ref;
					s.eVar32 = ref;
					s.events = s.apl(s.events, 'event26');
			}
		}
	}
	//DWEP-1851 Ending //

}
//DMR-14088 starting  
if (s.getQueryParam('dcmid') && s.getQueryParam('dcmid') !== true && s.getQueryParam('dcmid') !== "") {
    s.eVar169 = s.getQueryParam('dcmid');
}
//DMR-14088 ending
window.s.doPlugins = s_doPlugins;


//Logic to capture the Impression count in local storage for DWEP-1387 | A4T Enhancement - START

function loadImpCount() {
	document.querySelectorAll("a[href*='_TNT_']").forEach(function(object) {
		if (object != undefined && object.getAttribute('href') != undefined && object.getAttribute('href').indexOf("?") > -1) {
			var linkhref = object.getAttribute('href').split("?")[1];
			if (typeof linkhref != "undefined" && linkhref.indexOf("src=") > -1) {
				var cname = linkhref.split("src=")[1];
				if (typeof cname != "undefined" && cname.indexOf('&') > -1) {
					cname = cname.split('&')[0];
					cname = cname.trim();
					console.log(cname);
					var count = localStorage.getItem(cname);
					if (count == null || count == undefined) {
						localStorage.setItem(cname, '1');
					} else {
						localStorage.setItem(cname, String(parseInt(count) + 1));
					}
				} else if (typeof cname != "undefined" && cname.indexOf('&') <= -1) {
					console.log(cname);
					var count = localStorage.getItem(cname);
					if (count == null || count == undefined) {
						localStorage.setItem(cname, '1');
					} else {
						localStorage.setItem(cname, String(parseInt(count) + 1));
					}
				}
			}
		}
	});
}

if (document.URL.indexOf('blogs.vmware.com') > -1) {
    var timer;
    if (typeof window.ttMETA != "undefined" && window.ttMETA.length > 0) {
        var counter = 0;

        function callLoadImpCount() {
            if (document.querySelectorAll("a[href*='_TNT_']").length > 0) {
                console.log('Executed at counter ' + counter);
                loadImpCount();
                clearTimeout(timer);
            } else if (counter != 15) {
                counter = counter + 1;
                console.log("counter " + counter);
                timer = setTimeout(callLoadImpCount, 250);
            }
        }
        callLoadImpCount();
    }
}

//Logic to capture the Impression count in local storage for DWEP-1387 | A4T Enhancement - END


ImagePopUpLinkTrack = function(tag) {
    var name = jQuery(tag).attr('alt');
    var index, contype;
    var b = jQuery(tag).parent().attr('name');
    if (b.indexOf('&lpos=') > -1) {
        contype = b.match('&lpos=([^&]*) : ([^&]*)')[1];
        index = b.match('&lpos=([^&]*) : ([^&]*)')[2];
    } else {
        index = 0
    }
    supresslinkTrack = true;
    s.prop17 = name;
    s.prop18 = contype + " : " + name + " : " + index;
    s.prop19 = contype;
    s.prop39 = s.pageName;
    s.prop75 = s.account;
    //DWEP-1662 Starting//
    s.linkTrackVars = s.linkTrackVars + ",eVar178";
    s.eVar178 = getTimeParting("America/Los_Angeles");
    //DWEP-1662 Ending//
    s.tl(true, 'o', name);
    supresslinkTrack = false;
}
PageLevelLinkTrack = function(tag) {
    if (location.href.toLowerCase().indexOf("/vcloudairchallenge/library") > -1 && s.linkType != 'd') {
        s.eVar15 = "";
        s.eVar16 = "";
        s.prop62 = "";
    }
    var name = jQuery(tag).html();
    var index, contype;
    var b = jQuery(tag).attr('name');
    if (b.indexOf('&lpos=') > -1) {
        contype = b.match('&lpos=([^&]*) : ([^&]*)')[1];
        index = b.match('&lpos=([^&]*) : ([^&]*)')[2];
    } else {
        index = 0
    }
    supresslinkTrack = true;
    s.prop17 = name;
    s.prop18 = contype + " : " + name + " : " + index;
    s.prop19 = contype;
    s.prop39 = s.pageName;
    s.prop75 = s.account;
    //DWEP-1662 Starting//
    s.linkTrackVars = s.linkTrackVars + ",eVar178";
    s.eVar178 = getTimeParting("America/Los_Angeles");
    //DWEP-1662 Ending//
    s.tl(true, 'o', name);
    supresslinkTrack = false;
}

LoadVideoJsScript = function() {
    var a = '//microsite-test.vmware.com/ciovantage/wp-content/themes/smart-mag/js/videojs.analytic.omniture.js';
    var b = document;
    var c = 'script';
    var d = b.createElement(c);
    d.src = a;
    d.type = 'text/java' + c;
    d.async = true;
    b.getElementsByTagName("body")[0].appendChild(d);
}

sc_LoadSendInvite = function(formname, tag) {
    supresslinkTrack = true;
    var name = 'Send Invite';
    var index, contype;
    var b = jQuery(tag).attr('name');
    if (b.indexOf('&lpos=') > -1) {
        contype = b.match('&lpos=([^&]*) : ([^&]*)')[1];
        index = b.match('&lpos=([^&]*) : ([^&]*)')[2];
    } else {
        index = 0
    }
    var tempPageName = s.pageName;
    var olink = s.linkTrackVars;
    var tmpevt = s.events;
    s.pageName = s.pageName + " : Send Invite";
    s.linkTrackVars = olink + ",eVar17";
    s.linkTrackEvents = 'event40,event43';
    s.events = "event40,event43";
    s.eVar17 = s.pageName + ":" + formname;
    s.prop17 = name;
    s.prop18 = contype + " : " + name + " : " + index;
    s.prop19 = contype;
    s.prop39 = s.pageName;
    s.t();
    s.linkTrackVars = olink;
    s.events = tmpevt;
    s.linkTrackEvents = '';
    s.pageName = tempPageName;
    supresslinkTrack = false;
}

addFPTracking = function(name, assetid) {
    var src_id = '';
    var cid_idValue = '';
    var int_cidValue = '';
    var vid = s.analyticsVisitorID || s.marketingCloudVisitorID || '';
    /*if(name.indexOf('?')>0 && name.indexOf('src=')>0){
      name=name.replace('src=','');
      src_id=name.split('?')[name.split('?').length - 1];
      if(src_id.indexOf('&cid=')>-1){
        var extValue = src_id.split("&cid=")
        src_id=extValue[0];
        cid_idValue=extValue[1];
      }
      else if (src_id.indexOf('&int_cid=')>-1){
        var intValue = src_id.split("&int_cid=");
        src_id=intValue[0];
        int_cidValue=intValue[1];
      }
      name=name.split('?')[name.split('?').length - 2];     
    }*/
    //to add logic here
    //DMR-11913 starting
    if (name.indexOf('?') > 0) {
        if (name.indexOf('src=') > 0) {
            if (name.split('src=')[1].indexOf('&') > -1) src_id = name.split('src=')[1].split("&")[0]
            else src_id = name.split('src=')[1];
        }
        //console.log("Test name value after src is: "+ name);
        if (name.indexOf("int_cid=") > 0) {
            if (name.split('int_cid=')[1].indexOf('&') > -1) int_cidValue = name.split('int_cid=')[1].split("&")[0]
            else int_cidValue = name.split('int_cid=')[1];
        } else {
            if (name.indexOf("cid=") > 0) {
                if (name.split('cid=')[1].indexOf('&') > -1) cid_idValue = name.split('cid=')[1].split("&")[0]
                else cid_idValue = name.split('cid=')[1];
            }
        }
        name = name.split('?')[name.split('?').length - 2];
    }
    //DMR-11913 ending
    var tmpe = s.event;
    s.events = "";
    var tempv = s.linkTrackVars;
    // console.log("Test Vars values are: " + tempv);
    var tp = s.pageName;
    utag_data.page_name = s.pageName = s.pageName + " : " + name;
    s.prop21 = '';
    s.eVar78 = assetid;
    s.prop28 = '';
    //s.prop20 = s.c_r("lpv");  //commented for DWEP-1640 LPA
    //utag.view(utag_data, null, [364]);
    s.prop39 = s.eVar39 = ''; /*prevent the previous page fires for the fake page call*/
    var t = new Date();
    var t1 = t.getTime() + 14 * 3600 * 24 * 1000;
    t.setTime(t1);
    s.campaign = cid_idValue.trim();
    if (s.campaign != undefined && s.campaign != "") {
        var hexValueExternal, i;
        var ext_campaign = s.campaign;
        var encodedDataExternal = "";
        for (i = 0; i < ext_campaign.length; i++) {
            hexValueExternal = ext_campaign.charCodeAt(i).toString(16);
            encodedDataExternal += ("000" + hexValueExternal).slice(-4);
        }
        s.eVar164 = encodedDataExternal;
        s.c_w('s_campaign', cid_idValue, t);
    }
    s.eVar37 = int_cidValue.trim();
    if (s.eVar37 != undefined && s.eVar37 != "") {
        var hexValueInternal, i;
        var int_campaign = s.eVar37;
        var encodedDataInternal = "";
        for (i = 0; i < int_campaign.length; i++) {
            hexValueInternal = int_campaign.charCodeAt(i).toString(16);
            encodedDataInternal += ("000" + hexValueInternal).slice(-4);
        }
        s.eVar165 = encodedDataInternal;
        s.c_w('int_cid', int_cidValue, t);
    }
    if (cid_idValue.length > 0) {
        s.events = s.apl(s.events, "event39")
    }
    if (int_cidValue.length > 0) {
        s.events = s.apl(s.events, "event108")
    }
    if (src_id != '' && src_id != true) {
        var d = new Date();
        var mm = d.getMonth() + 1 + "";
        if (mm.length == 1) mm = "0" + mm;
        var dd = d.getDate() + "";
        if (dd.length == 1) dd = "0" + dd;
        if (src_id.match(/^WWW_/i)) {
            /* Internal Campaign Tracking */
            s.c_w('int_src_id', src_id, t);
            s.prop30 = src_id;
            s.eVar13 = 'D=c30';
            if (src_id.length >= 10) {
                s.events = s.apl(s.events, 'event53:' + vid.substr(vid.length - 6, 6) + mm + dd + src_id.substr(src_id.length - 10, 10));
            } else {
                s.events = s.apl(s.events, 'event53:' + vid.substr(vid.length - 16 + src_id.length, 16 - src_id.length) + mm + dd + src_id);
            }
        } else {
            if (src_id.indexOf("_") > -1 && src_id.length == 16 && document.referrer.indexOf("vmworld.com") == -1) {
                s.prop32 = src_id;
                s.eVar32 = src_id;
                if (src_id.length >= 10) {
                    s.events = s.apl(s.events, 'event26:' + vid.substr(vid.length - 6, 6) + mm + dd + src_id.substr(src_id.length - 10, 10));
                } else {
                    s.events = s.apl(s.events, 'event26:' + vid.substr(vid.length - 16 + src_id.length, 16 - src_id.length) + mm + dd + src_id);
                }
                /*set the external src cookie ext_src_id to exp in 7 days*/
                s.c_w('ext_src_id', src_id, t);
            }
        }
    }
    //Setting event64 & evar12 in the addFPTracking for PZN PDF clicks
    if (src_id != undefined && src_id != '' && src_id != true && src_id.indexOf('_TNT_') > -1) {
        s.events = s.apl(s.events, 'event64');
        var count = localStorage.getItem(src_id);
        var impressionCount
        if (count == null || count == undefined) {
            impressionCount = src_id + " : " + "1";
        } else {
            impressionCount = src_id + " : " + count;
        }
        s.eVar12 = impressionCount;
    }
    s.eVar105 = "";
    s.t();
    s.eVar12 = "";
    s.eVar37 = "";
    s.campaign = "";
    s.eVar164 = "";
    s.eVar165 = "";
    s.eVar13 = "";
    s.eVar32 = "";
    s.prop32 = "";
    s.prop30 = "";
    utag_data.page_name = s.pageName = tp;
    s.events = tmpe;
    s.linkTrackVars = tempv;
}
if (jQuery('a[asset-type="application/pdf"]').length) {
    jQuery('a[asset-type="application/pdf"]').each(function() {
        if (!jQuery(this).attr('onclick')) jQuery(this).attr('onclick', 'var a_f=jQuery(this).attr("href").split("/"); addFPTracking(a_f[a_f.length-1],jQuery(this).attr("asset-id"));');
    });
}

if (jQuery('a[href*=".pdf"]').length) {
    jQuery('a[href*=".pdf"]').each(function() {
        //Excluding PZN PDFs from setting addFPTracking() in onclick attribute
        if (jQuery(this).attr('href').indexOf('_TNT_') == -1) {
            if (!jQuery(this).attr('onclick'))
                jQuery(this).attr('onclick', 'var a_f=jQuery(this).attr("href").split("/"); addFPTracking(a_f[a_f.length-1],jQuery(this).attr("asset-id"));');
        }
    });
}

//Calling addFPTracking() method on click of PZN PDFs
jQuery('a[href*=".pdf"]').on('click', function() {
    if (jQuery(this).attr('href').indexOf('_TNT_') > -1) {
        var a_f = jQuery(this).attr("href").split("/");
        var assetID = jQuery(this).attr("asset-id");
        addFPTracking(a_f[a_f.length - 1], assetID);
    }
});

/*euc-roi site custom code*/

euc_addCustCall = function() {

    if (jQuery('.TopMargin100 label').length) {
        jQuery('.TopMargin100').click(function() {
            addCTracking("euc-roi : " + jQuery(this).find('label').text());
        });
    }

    jQuery('button#DownloadPPT').mouseover(function() {
        var strclick = jQuery(this).attr('onclick');
        if (strclick.indexOf('addCTracking') <= -1) {
            jQuery(this).attr('onclick', 'addCTracking("euc-roi : " + location.hash.substring(1) + " : Download");' + strclick);
        }
    });

    jQuery('a#dwnldppt_oldcal').mouseover(function() {
        var strclick = jQuery(this).attr('onclick');
        if (strclick.indexOf('addCTracking') <= -1) {
            jQuery(this).attr('onclick', 'addCTracking("euc-roi : " + location.hash.substring(1) + " : Download");' + strclick);
        }
    });

    jQuery('a#dwnldppt_newcal').mouseover(function() {
        var strclick = jQuery(this).attr('onclick');
        if (strclick.indexOf('addCTracking') <= -1) {
            jQuery(this).attr('onclick', 'addCTracking("euc-roi : " + location.hash.substring(1) + " : Download");' + strclick);
        }
    });

    jQuery('a#SaveAnalysisFile').mouseover(function() {
        jQuery(this).attr('onclick', 'addCTracking("euc-roi : " + location.hash.substring(1) + " : Save");');
    });

    jQuery('a#saveAnalysis').mouseover(function() {
        jQuery(this).attr('onclick', 'addCTracking("euc-roi : " + location.hash.substring(1) + " : Save");');
    });

    jQuery('button#cal').mouseover(function() {
        jQuery(this).attr('onclick', 'addCTracking("euc-roi : " + location.hash.substring(1) + " : calculator");');
    });

    jQuery('button#calculate').mouseover(function() {
        jQuery(this).attr('onclick', 'addCTracking("euc-roi : " + location.hash.substring(1) + " : calculator");');
    });

};

if (location.host == "euc-roi.vmware.com") {
    euc_addCustCall();
}

//-------------Adding Data Layer for page attributes-------------
digitalData = {
    page: {
        pageInfo: {
            pageName: ""
        }
    }
};

setTimeout(function() {
    digitalData.page.pageInfo.pageName = s.pageName;
    if (window.location.href.toString().match("storagehub.vmware.com")) {
        digitalData.page.pageInfo.pageName = utag_data.page_name;
    } else if (window.location.href.toString().match("featurewalkthrough.vmware.com")) {
        digitalData.page.pageInfo.pageName = utag_data.page_name;
    }
}, 3000);
//-------------END----------------------------- 
s.eVar140 = this.checkAndReturnSameOrErrorValue(dbInfo.marketing_alias);
}];

  u.send=function(a,b,c,d,e,f,g,h,ev){
    if(u.ev[a]||typeof u.ev.all!="undefined"){
      utag.DB("send:15");
      u.data={};
      u.a=a;
      b.sc_events=b.sc_events||{};

      u.addEvent = function (v, n) {
        var t = [];
        if (v instanceof Array) {
          t = v.slice(0);
        } else if (typeof n !== "undefined") {
          t.push(v + "=" + n);
        } else {
          t.push(v);
        }
        for (var i = 0; i < t.length; i++) {
          b.sc_events[t[i]] = 1;
          u.pushlt(u.lte, t[i].indexOf("=") > -1 ? t[i].split('=')[0] : t[i].split(':')[0]);
        }
        return b.sc_events;
      };

      u.addProduct = function (v) {
        u.data.sc_addProd = "";
        if (v instanceof Array) {
          u.data.sc_addProd = v.join(',');
        } else {
          u.data.sc_addProd=v;
        }
      };

      if (u.a === "link") {
        u.ltflag = true;
        if (typeof b.linkTrackVars === "undefined") { u.ltv = []; }
        if (typeof b.linkTrackEvents === "undefined") { u.lte = []; }
      }

      for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};

      for (e in utag.loader.GV(u.map)) {
        if (typeof b[e] != "undefined" && typeof u.map[e] == "string" && u.map[e].indexOf("PRODUCTS_") > -1) {
          f = u.map[e].split(",");
          for (g = 0; g < f.length; g++) {
            if(f[g].indexOf("PRODUCTS_id") || f[g].indexOf("PRODUCTS_category") || f[g].indexOf("PRODUCTS_quantity") || f[g].indexOf("PRODUCTS_price")){
              u.data[f[g].substring(9)]=b[e];
            }
          }
        }
      }
      u.data.id = u.data.id || (typeof b._cprod != "undefined" ? b._cprod.slice(0) : []);
      u.data.category = u.data.category || (typeof b._ccat != "undefined" ? b._ccat.slice(0) : []);
      u.data.quantity = u.data.quantity || (typeof b._cquan != "undefined" ? b._cquan.slice(0) : []);
      u.data.price = u.data.price || (typeof b._cprice != "undefined" ? b._cprice.slice(0) : []);
      if(typeof u.data.id!="undefined"&&u.data.id!=""){
        c=[];d={};ev={};for(e in utag.loader.GV(u.map)){if(typeof b[e]!="undefined"&&typeof u.map[e]=="string"&&u.map[e].indexOf("PRODUCTS_")>-1){f=u.map[e].split(",");for( g=0;g<f.length;g++){
          var pv = f[g].substring(9);
          if(f[g].indexOf("PRODUCTS_evar")==0 || f[g].indexOf("PRODUCTS_eVar")==0){
            if (b[e] instanceof Array) {
              b.sc_prodevars = b.sc_prodevars || [];
              for (var i = 0; i < b[e].length; i++) {
                var prodvars = {};
                if(typeof b.sc_prodevars[i]!="undefined" && b.sc_prodevars[i]!=""){
                  b.sc_prodevars[i][pv]=b[e][i];
                }else{
                  prodvars[pv]=b[e][i];
                  b.sc_prodevars.push(prodvars);
                }
              }
            }else{
              d[pv] = b[e].split(",");
            }
          }else if(f[g].indexOf("PRODUCTS_event")==0){
            if(b[e] instanceof Array){
              b.sc_prodevents=b.sc_prodevents || [];
              for (var i = 0; i < b[e].length; i++) {
                var prodevents = {};
                if(typeof b.sc_prodevents[i]!="undefined" && b.sc_prodevents[i]!=""){
                  b.sc_prodevents[i][pv]=b[e][i];
                }else{
                  prodevents[pv]=b[e][i];
                  b.sc_prodevents.push(prodevents);
                }
              }
              u.addEvent(pv);
            }else{
              ev[pv]=b[e];
              u.addEvent(pv);
            }
          }
        }}}
        e="";for(f in utag.loader.GV(d)){for(g=0;g<d[f].length;g++){if(e!="")e+="|"+f+"="+d[f][g];else e=f+"="+d[f][g];}}
        h="";for(f in utag.loader.GV(ev)){if(h)h+="|"+f+"="+((isNaN(ev[f]))?"1":ev[f]);else h=f+"="+((isNaN(ev[f]))?"1":ev[f]);}
        b.sc_prodevents=b.sc_prodevents||[];
        b.sc_prodevars=b.sc_prodevars || [];
        for(d=0;d<u.data.id.length;d++){
          var h2=h;
          var h3=e;
          if(typeof b.sc_prodevents!="undefined"){
            for (f in b.sc_prodevents[d]) {
              if(typeof b.sc_prodevents[d][f]!="undefined"){
                var l =b.sc_prodevents[d][f];
                if(typeof l!="undefined" && l!="" && isNaN(l)==false){
                  if (h2){
                    h2 += "|" + f + '=' + l;
                  }else{
                    h2 = f + '=' + l;
                  }
                }
              }
            }
          }
          if(typeof b.sc_prodevars!="undefined"){
            for (f in b.sc_prodevars[d]) {
              if(typeof b.sc_prodevars[d][f]!="undefined"){
                var l =b.sc_prodevars[d][f];
                if(typeof l!="undefined" && l!=""){
                  if (h3){
                    h3 += "|" + f + '=' + l;
                  }else{
                    h3 = f + '=' + l;
                  }
                }
              }
            }
          }
          c.push((u.data.category[d]?u.data.category[d]:"")+";"+u.data.id[d]+";"+(u.data.quantity[d]?u.data.quantity[d]:"")+";"+(u.data.price[d]?((u.data.quantity[d]?parseInt(u.data.quantity[d]):1)*parseFloat(u.data.price[d])).toFixed(2):"")+";"+h2+";"+h3);
        }
        if (typeof u.data.sc_addProd !== "undefined" && u.data.sc_addProd) {
          c.push(u.data.sc_addProd);
        }
        u.o.products=c.join(",");
      } else {
        u.o.products = "";
      }

      var evt=/^event|prodView|scOpen|scAdd|scRemove|scView|scCheckout|purchase$/;
      for(c in utag.loader.GV(b)){d=[];if(typeof u.map[c+":"+b[c]]!="undefined"){b[c+":"+b[c]]=b[c];d=u.map[c+":"+b[c]].split(",");}else if(typeof u.map[c]!="undefined")d=u.map[c].split(",");for(e=0;e<d.length;e++){if(d[e]!="events"&&evt.test(d[e])&&b[c]!=""){
        if(d[e].indexOf("ONCE_")==0){
          f=d[e].substring(5);
          if(utag.handler.ONCE("ev_"+b[c])){
            u.addEvent(f);
          }
        }else{
          u.addEvent(d[e]);
        }
      }}}
      for(c in utag.loader.GV(b)){if(typeof u.map[c]!="undefined"){d=u.map[c].split(",");for(e=0;e<d.length;e++){
        if(d[e].indexOf("ONCE_")==0){
          f=d[e].substring(5);
          if(utag.loader.ONCE("map_"+b[c])){
            u.o[f]=b[c];
            u.pushlt(u.ltv,f)
          }
        }else if(d[e]=="doneAction"){
          b.doneAction=b[c];
          if(b.doneAction!="navigate"){
            b.doneAction=eval(b[c]);
          }
        }else{
          if(c=="sc_events" || c=="sc_prodevents" || c=="sc_prodevars"){
            utag.DB("Error: Mapping reserved object name "+c)
          }else{
            u.o[d[e]]=b[c];
          }
          // if linkTrackVars is mapped then turn off auto-generation of linkTrackVars
          if(d[e]=="s_account"){
            u.o.account=b[c];
          }else if(d[e]=="linkTrackVars"){
            u.ltflag=false;
          }else{
             u.pushlt(u.ltv,d[e]);
          }
        }
      }}}
      d=[];for(c in utag.loader.GV(b.sc_events)){if(b.sc_events[c])d.push(c)};
      if(d.length>0){
        u.o.events=d.join(",");
        u.pushlt(u.lte,u.o.events);
      } else {
        u.o.events = "";
      }

      if(b._ccurrency){
        u.o.currencyCode=b._ccurrency;
      }

      if(b._corder){
        u.pushlt(u.lte,"purchase");
        u.pushlt(u.ltv,"purchaseID");
        u.o.purchaseID=((u.o.purchaseID)?u.o.purchaseID:b._corder);
        u.o.events=((u.o.events)?u.o.events:"purchase");
        if(u.o.events.indexOf("purchase")<0){u.o.events+=",purchase"};
      }

      /* variable compression */
      var t=u.o;var q={},l={};c=u.varlist;
      for(d in utag.loader.GV(c)){
        if(typeof t[d]!='undefined' && t[d]!=null && t[d]!='' && t[d].toString().indexOf('D=')!=0)
        {if(typeof l[t[d]]=='undefined')l[t[d]]=c[d];else t[d]='D='+l[t[d]];}
      }

      if(u.a=="view"){
        var img = u.o.t();
        /* still track on user agents Adobe cannot detect */
        if(typeof img!="undefined" && img!=""){
          u.img=new Image();u.img.src=img.substring(img.indexOf("src=")+5,img.indexOf("width=")-2);
        }
      }else if(u.a=="link"){
        if(typeof u.ltv!="undefined" && u.ltflag){
          if(u.o.events){u.ltv.push("events")};
          if(u.o.products){u.ltv.push("products")};
          b.linkTrackVars=u.ltv.join(',')
        }
        if(typeof u.lte!="undefined" && u.ltflag)b.linkTrackEvents=u.lte.join(',');
        u.o.linkTrackVars = (b.linkTrackVars)?b.linkTrackVars:"None";
        u.o.linkTrackEvents = (b.linkTrackEvents)?b.linkTrackEvents:"None";

        if(!u.o.linkType)u.o.linkType='o';
        if(b.link_name)b.link_text=b.link_name;
        b.link_text=(b.link_text)?b.link_text:"no link_name";
        if(b.link_type=='exit link'){u.o.linkType='e'}
        else if(b.link_type=='download link')u.o.linkType='d';

        u.o.tl(((b.link_obj)?b.link_obj:true),u.o.linkType,b.link_text,null,(b.doneAction?b.doneAction:null));
      }

      /* clear variables */
      if("yes"=="yes"){
        u.o.clearVars();
      }

      utag.DB("send:15:COMPLETE");
    }
  }
  try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}
})('15','vmware.microsites-privacy');
}catch(e){};
//end tealium universal tag

/* SHA256 Hash Algorithm Plugin
 *
 * @version 1.1 (17/08/2012)
 * @requires jQuery v1.2.6+
 * @author Alex Weber <alexweber.com.br>
 * @copyright Copyright (c) 2008-2009, Alex Weber
 * @see http://anmar.eu.org/projects/jssha2/
 * @see http://pajhome.org.uk/crypt/md5
 *
 * Distributed under the terms of the new BSD License
 * http://www.opensource.org/licenses/bsd-license.php
 *
 */
(function(f){var m=8;var k=function(q,t){var s=(q&65535)+(t&65535);var r=(q>>16)+(t>>16)+(s>>16);return(r<<16)|(s&65535)};var e=function(r,q){return(r>>>q)|(r<<(32-q))};var g=function(r,q){return(r>>>q)};var a=function(q,s,r){return((q&s)^((~q)&r))};var d=function(q,s,r){return((q&s)^(q&r)^(s&r))};var h=function(q){return(e(q,2)^e(q,13)^e(q,22))};var b=function(q){return(e(q,6)^e(q,11)^e(q,25))};var p=function(q){return(e(q,7)^e(q,18)^g(q,3))};var l=function(q){return(e(q,17)^e(q,19)^g(q,10))};var c=function(r,s){var E=new Array(1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298);var t=new Array(1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225);var q=new Array(64);var G,F,D,C,A,y,x,w,v,u;var B,z;r[s>>5]|=128<<(24-s%32);r[((s+64>>9)<<4)+15]=s;for(var v=0;v<r.length;v+=16){G=t[0];F=t[1];D=t[2];C=t[3];A=t[4];y=t[5];x=t[6];w=t[7];for(var u=0;u<64;u++){if(u<16){q[u]=r[u+v]}else{q[u]=k(k(k(l(q[u-2]),q[u-7]),p(q[u-15])),q[u-16])}B=k(k(k(k(w,b(A)),a(A,y,x)),E[u]),q[u]);z=k(h(G),d(G,F,D));w=x;x=y;y=A;A=k(C,B);C=D;D=F;F=G;G=k(B,z)}t[0]=k(G,t[0]);t[1]=k(F,t[1]);t[2]=k(D,t[2]);t[3]=k(C,t[3]);t[4]=k(A,t[4]);t[5]=k(y,t[5]);t[6]=k(x,t[6]);t[7]=k(w,t[7])}return t};var j=function(t){var s=Array();var q=(1<<m)-1;for(var r=0;r<t.length*m;r+=m){s[r>>5]|=(t.charCodeAt(r/m)&q)<<(24-r%32)}return s};var n=function(s){var r="0123456789abcdef";var t="";for(var q=0;q<s.length*4;q++){t+=r.charAt((s[q>>2]>>((3-q%4)*8+4))&15)+r.charAt((s[q>>2]>>((3-q%4)*8))&15)}return t};var o=function(s,v){var u=j(s);if(u.length>16){u=c(u,s.length*m)}var q=Array(16),t=Array(16);for(var r=0;r<16;r++){q[r]=u[r]^909522486;t[r]=u[r]^1549556828}var w=c(q.concat(j(v)),512+v.length*m);return c(t.concat(w),512+256)};var i=function(q){q=typeof q=="object"?f(q).val():q.toString();return q};f.extend({sha256:function(q){q=i(q);return n(c(j(q),q.length*m))},sha256hmac:function(q,r){q=i(q);r=i(r);return n(o(q,r))},sha256config:function(q){m=parseInt(q)||8}});f.fn.sha256=function(r){f.sha256config(r);var q=i(f(this).val());var s=f.sha256(q);f.sha256config(8);return s}})(jQuery);

//SHA256 Hash Algorithm Plugin end	profile	
