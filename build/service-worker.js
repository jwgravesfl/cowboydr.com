"use strict";var precacheConfig=[["/index.html","a9a3197759cd637ea32712ce32f9f6ac"],["/static/css/main.57ce03c9.css","eeadeedde3b348c09afcd49375f5bf21"],["/static/js/main.38e26d73.js","2fa6821fc9649080523dca1a85d5a939"],["/static/media/421CDLogo.16dde5d6.png","16dde5d618e922ca53577dfce87f16ca"],["/static/media/BandWagonLogo.df7a7e77.png","df7a7e77ccc1079efaa537e33b7e1812"],["/static/media/bunniProfilePic.a9ee1fcf.jpg","a9ee1fcf6de6dcfa8fe7e59e757c1854"],["/static/media/businessCard.f06d18b6.jpg","f06d18b68dbbf2362d0eb0554adc8340"],["/static/media/deucesWild.1459686a.jpg","1459686ad586c6394e87bef7ac50f5a1"],["/static/media/originalBandPhoto.f45f1c6a.jpg","f45f1c6a8b2199580dcff983f6db3e7e"],["/static/media/pressQuote1.c0f2bbb8.jpg","c0f2bbb84c98accbcd52ea1c7d347025"],["/static/media/pressQuote2.32c6d95f.jpg","32c6d95f6512283c5d1a621ffe9a10ab"],["/static/media/pressQuote3.09bc6b32.jpg","09bc6b32d5bc888237297169604c93ae"],["/static/media/pressQuote4.a7f8759e.jpg","a7f8759e4b0b5998d88cf17daf993ec7"],["/static/media/roughneckProfilePic.0bf2c3e3.jpg","0bf2c3e3f8ecafb8b8ec0265427bc46f"],["/static/media/saloon.f34f3dc0.jpg","f34f3dc0f79b6f8d06d0af970a727447"],["/static/media/waterTown1.586c9c07.jpg","586c9c07833449fabf9d4db6024b3e62"],["/static/media/waterTown1Mobile.e98562dd.jpg","e98562dd298f7c4a8b162326cb6f665c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});