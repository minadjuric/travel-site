!function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([,,,,,,,,function(e,t,n){"use strict";n(9),n(10),n(11)},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t,n){function s(e,t){return(void 0===e?"undefined":r(e))===t}var i=[],a={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){i.push({name:e,fn:t,options:n})},addAsyncTest:function(e){i.push({name:null,fn:e})}},o=function(){};o.prototype=a,o=new o;var c=[],u=t.documentElement,l="svg"===u.nodeName.toLowerCase();o.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),function(){var e,t,n,r,a,u;for(var l in i)if(i.hasOwnProperty(l)){if(e=[],(t=i[l]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=s(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)1===(u=e[a].split(".")).length?o[u[0]]=r:(!o[u[0]]||o[u[0]]instanceof Boolean||(o[u[0]]=new Boolean(o[u[0]])),o[u[0]][u[1]]=r),c.push((r?"":"no-")+u.join("-"))}}(),function(e){var t=u.className,n=o._config.classPrefix||"";if(l&&(t=t.baseVal),o._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}o._config.enableClasses&&(t+=" "+n+e.join(" "+n),l?u.className.baseVal=t:u.className=t)}(c),delete a.addTest,delete a.addAsyncTest;for(var f=0;f<o._q.length;f++)o._q[f]();e.Modernizr=o}(window,document)},function(e,t,n){var r;!function(e){var t=navigator.userAgent;e.HTMLPictureElement&&/ecko/.test(t)&&t.match(/rv\:(\d+)/)&&RegExp.$1<45&&addEventListener("resize",function(){var t,n=document.createElement("source"),r=function(e){var t,r,s=e.parentNode;"PICTURE"===s.nodeName.toUpperCase()?(t=n.cloneNode(),s.insertBefore(t,s.firstElementChild),setTimeout(function(){s.removeChild(t)})):(!e._pfLastSize||e.offsetWidth>e._pfLastSize)&&(e._pfLastSize=e.offsetWidth,r=e.sizes,e.sizes+=",100vw",setTimeout(function(){e.sizes=r}))},s=function(){var e,t=document.querySelectorAll("picture > img, img[srcset][sizes]");for(e=0;e<t.length;e++)r(t[e])},i=function(){clearTimeout(t),t=setTimeout(s,99)},a=e.matchMedia&&matchMedia("(orientation: landscape)"),o=function(){i(),a&&a.addListener&&a.addListener(i)};return n.srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",/^[c|i]|d$/.test(document.readyState||"")?o():document.addEventListener("DOMContentLoaded",o),i}())}(window),function(s,i,a){"use strict";function o(e){return" "===e||"\t"===e||"\n"===e||"\f"===e||"\r"===e}function c(){D=!1,F=s.devicePixelRatio,k={},I={},b.DPR=F||1,O.width=Math.max(s.innerWidth||0,T.clientWidth),O.height=Math.max(s.innerHeight||0,T.clientHeight),O.vw=O.width/100,O.vh=O.height/100,y=[O.height,O.width,F].join("-"),O.em=b.getEmValue(),O.rem=O.em}function u(e,t,n,r){var s,i,a;return"saveData"===L.algorithm?e>2.7?a=n+1:(i=(t-n)*(s=Math.pow(e-.6,1.5)),r&&(i+=.1*s),a=e+i):a=n>1?Math.sqrt(e*t):e,a>n}function l(e){var t,n=b.getSet(e),r=!1;"pending"!==n&&(r=y,n&&(t=b.setRes(n),b.applySetCandidate(t,e))),e[b.ns].evaled=r}function f(e,t){return e.res-t.res}function d(e,t,n){var r;return!n&&t&&(n=(n=e[b.ns].sets)&&n[n.length-1]),(r=p(t,n))&&(t=b.makeUrl(t),e[b.ns].curSrc=t,e[b.ns].curCan=r,r.res||Z(r,r.set.sizes)),r}function p(e,t){var n,r,s;if(e&&t)for(s=b.parseSet(t),e=b.makeUrl(e),n=0;n<s.length;n++)if(e===b.makeUrl(s[n].url)){r=s[n];break}return r}function m(e,t){var n,r,s,i,a=e.getElementsByTagName("source");for(n=0,r=a.length;n<r;n++)(s=a[n])[b.ns]=!0,(i=s.getAttribute("srcset"))&&t.push({srcset:i,media:s.getAttribute("media"),type:s.getAttribute("type"),sizes:s.getAttribute("sizes")})}function h(e,t){function n(t){var n,r=t.exec(e.substring(f));if(r)return n=r[0],f+=n.length,n}function r(){var e,n,r,a,o,c,u,l,f,p=!1,m={};for(a=0;a<i.length;a++)c=(o=i[a])[o.length-1],u=o.substring(0,o.length-1),l=parseInt(u,10),f=parseFloat(u),V.test(u)&&"w"===c?((e||n)&&(p=!0),0===l?p=!0:e=l):J.test(u)&&"x"===c?((e||n||r)&&(p=!0),f<0?p=!0:n=f):V.test(u)&&"h"===c?((r||n)&&(p=!0),0===l?p=!0:r=l):p=!0;p||(m.url=s,e&&(m.w=e),n&&(m.d=n),r&&(m.h=r),r||n||e||(m.d=1),1===m.d&&(t.has1x=!0),m.set=t,d.push(m))}for(var s,i,a,c,u,l=e.length,f=0,d=[];;){if(n(Q),f>=l)return d;s=n(q),i=[],","===s.slice(-1)?(s=s.replace(G,""),r()):function(){for(n(j),a="",c="in descriptor";;){if(u=e.charAt(f),"in descriptor"===c)if(o(u))a&&(i.push(a),a="",c="after descriptor");else{if(","===u)return f+=1,a&&i.push(a),void r();if("("===u)a+=u,c="in parens";else{if(""===u)return a&&i.push(a),void r();a+=u}}else if("in parens"===c)if(")"===u)a+=u,c="in descriptor";else{if(""===u)return i.push(a),void r();a+=u}else if("after descriptor"===c)if(o(u));else{if(""===u)return void r();c="in descriptor",f-=1}f+=1}}()}}function g(e){var t,n,r,s,i,a,c=/^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,u=/^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;for(r=(n=function(e){function t(){s&&(i.push(s),s="")}function n(){i[0]&&(a.push(i),i=[])}for(var r,s="",i=[],a=[],c=0,u=0,l=!1;;){if(""===(r=e.charAt(u)))return t(),n(),a;if(l){if("*"===r&&"/"===e[u+1]){l=!1,u+=2,t();continue}u+=1}else{if(o(r)){if(e.charAt(u-1)&&o(e.charAt(u-1))||!s){u+=1;continue}if(0===c){t(),u+=1;continue}r=" "}else if("("===r)c+=1;else if(")"===r)c-=1;else{if(","===r){t(),n(),u+=1;continue}if("/"===r&&"*"===e.charAt(u+1)){l=!0,u+=2;continue}}s+=r,u+=1}}}(e)).length,t=0;t<r;t++)if(s=n[t],i=s[s.length-1],function(e){return!!(c.test(e)&&parseFloat(e)>=0)||!!u.test(e)||"0"===e||"-0"===e||"+0"===e}(i)){if(a=i,s.pop(),0===s.length)return a;if(s=s.join(" "),b.matchesMedia(s))return a}return"100vw"}i.createElement("picture");var A,v,y,b={},z=!1,w=function(){},E=i.createElement("img"),C=E.getAttribute,S=E.setAttribute,x=E.removeAttribute,T=i.documentElement,M={},L={algorithm:""},R=navigator.userAgent,P=/rident/.test(R)||/ecko/.test(R)&&R.match(/rv\:(\d+)/)&&RegExp.$1>35,_="currentSrc",B=/\s+\+?\d+(e\d+)?w/,N=/(\([^)]+\))?\s*(.+)/,W=s.picturefillCFG,$="font-size:100%!important;",D=!0,k={},I={},F=s.devicePixelRatio,O={px:1,in:96},U=i.createElement("a"),H=!1,j=/^[ \t\n\r\u000c]+/,Q=/^[, \t\n\r\u000c]+/,q=/^[^ \t\n\r\u000c]+/,G=/[,]+$/,V=/^\d+$/,J=/^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,K=function(e,t,n,r){e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n)},X=function(e){var t={};return function(n){return n in t||(t[n]=e(n)),t[n]}},Y=function(){var e=/^([\d\.]+)(em|vw|px)$/,t=function(){for(var e=arguments,t=0,n=e[0];++t in e;)n=n.replace(e[t],e[++t]);return n},n=X(function(e){return"return "+t((e||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")+";"});return function(t,r){var s;if(!(t in k))if(k[t]=!1,r&&(s=t.match(e)))k[t]=s[1]*O[s[2]];else try{k[t]=new Function("e",n(t))(O)}catch(e){}return k[t]}}(),Z=function(e,t){return e.w?(e.cWidth=b.calcListLength(t||"100vw"),e.res=e.w/e.cWidth):e.res=e.d,e},ee=function(e){if(z){var t,n,r,s=e||{};if(s.elements&&1===s.elements.nodeType&&("IMG"===s.elements.nodeName.toUpperCase()?s.elements=[s.elements]:(s.context=s.elements,s.elements=null)),t=s.elements||b.qsa(s.context||i,s.reevaluate||s.reselect?b.sel:b.selShort),r=t.length){for(b.setupRun(s),H=!0,n=0;n<r;n++)b.fillImg(t[n],s);b.teardownRun(s)}}};s.console&&console.warn,_ in E||(_="src"),M["image/jpeg"]=!0,M["image/gif"]=!0,M["image/png"]=!0,M["image/svg+xml"]=i.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1"),b.ns=("pf"+(new Date).getTime()).substr(0,9),b.supSrcset="srcset"in E,b.supSizes="sizes"in E,b.supPicture=!!s.HTMLPictureElement,b.supSrcset&&b.supPicture&&!b.supSizes&&function(e){E.srcset="data:,a",e.src="data:,a",b.supSrcset=E.complete===e.complete,b.supPicture=b.supSrcset&&b.supPicture}(i.createElement("img")),b.supSrcset&&!b.supSizes?function(){var e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=i.createElement("img"),n=function(){2===t.width&&(b.supSizes=!0),v=b.supSrcset&&!b.supSizes,z=!0,setTimeout(ee)};t.onload=n,t.onerror=n,t.setAttribute("sizes","9px"),t.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w",t.src=e}():z=!0,b.selShort="picture>img,img[srcset]",b.sel=b.selShort,b.cfg=L,b.DPR=F||1,b.u=O,b.types=M,b.setSize=w,b.makeUrl=X(function(e){return U.href=e,U.href}),b.qsa=function(e,t){return"querySelector"in e?e.querySelectorAll(t):[]},b.matchesMedia=function(){return s.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?b.matchesMedia=function(e){return!e||matchMedia(e).matches}:b.matchesMedia=b.mMQ,b.matchesMedia.apply(this,arguments)},b.mMQ=function(e){return!e||Y(e)},b.calcLength=function(e){var t=Y(e,!0)||!1;return t<0&&(t=!1),t},b.supportsType=function(e){return!e||M[e]},b.parseSize=X(function(e){var t=(e||"").match(N);return{media:t&&t[1],length:t&&t[2]}}),b.parseSet=function(e){return e.cands||(e.cands=h(e.srcset,e)),e.cands},b.getEmValue=function(){var e;if(!A&&(e=i.body)){var t=i.createElement("div"),n=T.style.cssText,r=e.style.cssText;t.style.cssText="position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",T.style.cssText=$,e.style.cssText=$,e.appendChild(t),A=t.offsetWidth,e.removeChild(t),A=parseFloat(A,10),T.style.cssText=n,e.style.cssText=r}return A||16},b.calcListLength=function(e){if(!(e in I)||L.uT){var t=b.calcLength(g(e));I[e]=t||O.width}return I[e]},b.setRes=function(e){var t;if(e)for(var n=0,r=(t=b.parseSet(e)).length;n<r;n++)Z(t[n],e.sizes);return t},b.setRes.res=Z,b.applySetCandidate=function(e,t){if(e.length){var n,r,s,i,a,o,c,l,p,m=t[b.ns],h=b.DPR;if(o=m.curSrc||t[_],(c=m.curCan||d(t,o,e[0].set))&&c.set===e[0].set&&((p=P&&!t.complete&&c.res-.1>h)||(c.cached=!0,c.res>=h&&(a=c))),!a)for(e.sort(f),a=e[(i=e.length)-1],r=0;r<i;r++)if((n=e[r]).res>=h){a=e[s=r-1]&&(p||o!==b.makeUrl(n.url))&&u(e[s].res,n.res,h,e[s].cached)?e[s]:n;break}a&&(l=b.makeUrl(a.url),m.curSrc=l,m.curCan=a,l!==o&&b.setSrc(t,a),b.setSize(t))}},b.setSrc=function(e,t){var n;e.src=t.url,"image/svg+xml"===t.set.type&&(n=e.style.width,e.style.width=e.offsetWidth+1+"px",e.offsetWidth+1&&(e.style.width=n))},b.getSet=function(e){var t,n,r,s=!1,i=e[b.ns].sets;for(t=0;t<i.length&&!s;t++)if((n=i[t]).srcset&&b.matchesMedia(n.media)&&(r=b.supportsType(n.type))){"pending"===r&&(n=r),s=n;break}return s},b.parseSets=function(e,t,n){var r,s,i,a,o=t&&"PICTURE"===t.nodeName.toUpperCase(),c=e[b.ns];(void 0===c.src||n.src)&&(c.src=C.call(e,"src"),c.src?S.call(e,"data-pfsrc",c.src):x.call(e,"data-pfsrc")),(void 0===c.srcset||n.srcset||!b.supSrcset||e.srcset)&&(r=C.call(e,"srcset"),c.srcset=r,a=!0),c.sets=[],o&&(c.pic=!0,m(t,c.sets)),c.srcset?(s={srcset:c.srcset,sizes:C.call(e,"sizes")},c.sets.push(s),(i=(v||c.src)&&B.test(c.srcset||""))||!c.src||p(c.src,s)||s.has1x||(s.srcset+=", "+c.src,s.cands.push({url:c.src,d:1,set:s}))):c.src&&c.sets.push({srcset:c.src,sizes:null}),c.curCan=null,c.curSrc=void 0,c.supported=!(o||s&&!b.supSrcset||i&&!b.supSizes),a&&b.supSrcset&&!c.supported&&(r?(S.call(e,"data-pfsrcset",r),e.srcset=""):x.call(e,"data-pfsrcset")),c.supported&&!c.srcset&&(!c.src&&e.src||e.src!==b.makeUrl(c.src))&&(null===c.src?e.removeAttribute("src"):e.src=c.src),c.parsed=!0},b.fillImg=function(e,t){var n,r=t.reselect||t.reevaluate;e[b.ns]||(e[b.ns]={}),n=e[b.ns],(r||n.evaled!==y)&&(n.parsed&&!t.reevaluate||b.parseSets(e,e.parentNode,t),n.supported?n.evaled=y:l(e))},b.setupRun=function(){H&&!D&&F===s.devicePixelRatio||c()},b.supPicture?(ee=w,b.fillImg=w):function(){var e,t=s.attachEvent?/d$|^c/:/d$|^c|^i/,n=function(){var s=i.readyState||"";r=setTimeout(n,"loading"===s?200:999),i.body&&(b.fillImgs(),(e=e||t.test(s))&&clearTimeout(r))},r=setTimeout(n,i.body?9:99),a=T.clientHeight;K(s,"resize",function(e,t){var n,r,s=function(){var i=new Date-r;i<t?n=setTimeout(s,t-i):(n=null,e())};return function(){r=new Date,n||(n=setTimeout(s,t))}}(function(){D=Math.max(s.innerWidth||0,T.clientWidth)!==O.width||T.clientHeight!==a,a=T.clientHeight,D&&b.fillImgs()},99)),K(i,"readystatechange",n)}(),b.picturefill=ee,b.fillImgs=ee,b.teardownRun=w,ee._=b,s.picturefillCFG={pf:b,push:function(e){var t=e.shift();"function"==typeof b[t]?b[t].apply(b,e):(L[t]=e[0],H&&b.fillImgs({reselect:!0}))}};for(;W&&W.length;)s.picturefillCFG.push(W.shift());s.picturefill=ee,"object"==typeof e&&"object"==typeof e.exports?e.exports=ee:void 0!==(r=function(){return ee}.call(t,n,t,e))&&(e.exports=r),b.supPicture||(M["image/webp"]=function(e,t){var n=new s.Image;return n.onerror=function(){M[e]=!1,ee()},n.onload=function(){M[e]=1===n.width,ee()},n.src=t,"pending"}("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))}(window,document)},function(e,t){!function(t,n){var r=n(t,t.document);t.lazySizes=r,"object"==typeof e&&e.exports&&(e.exports=r)}(window,function(e,t){"use strict";if(t.getElementsByClassName){var n,r,s=t.documentElement,i=e.Date,a=e.HTMLPictureElement,o=e.addEventListener,c=e.setTimeout,u=e.requestAnimationFrame||c,l=e.requestIdleCallback,f=/^picture$/i,d=["load","error","lazyincluded","_lazyloaded"],p={},m=Array.prototype.forEach,h=function(e,t){return p[t]||(p[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),p[t].test(e.getAttribute("class")||"")&&p[t]},g=function(e,t){h(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},A=function(e,t){var n;(n=h(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(n," "))},v=function(e,t,n){var r=n?"addEventListener":"removeEventListener";n&&v(e,t),d.forEach(function(n){e[r](n,t)})},y=function(e,r,s,i,a){var o=t.createEvent("CustomEvent");return s||(s={}),s.instance=n,o.initCustomEvent(r,!i,!a,s),e.dispatchEvent(o),o},b=function(t,n){var s;!a&&(s=e.picturefill||r.pf)?s({reevaluate:!0,elements:[t]}):n&&n.src&&(t.src=n.src)},z=function(e,t){return(getComputedStyle(e,null)||{})[t]},w=function(e,t,n){for(n=n||e.offsetWidth;n<r.minSize&&t&&!e._lazysizesWidth;)n=t.offsetWidth,t=t.parentNode;return n},E=function(){var e,n,r=[],s=[],i=r,a=function(){var t=i;for(i=r.length?s:r,e=!0,n=!1;t.length;)t.shift()();e=!1},o=function(r,s){e&&!s?r.apply(this,arguments):(i.push(r),n||(n=!0,(t.hidden?c:u)(a)))};return o._lsFlush=a,o}(),C=function(e,t){return t?function(){E(e)}:function(){var t=this,n=arguments;E(function(){e.apply(t,n)})}},S=function(e){var t,n=0,r=666,s=function(){t=!1,n=i.now(),e()},a=l?function(){l(s,{timeout:r}),666!==r&&(r=666)}:C(function(){c(s)},!0);return function(e){var s;(e=!0===e)&&(r=44),t||(t=!0,(s=125-(i.now()-n))<0&&(s=0),e||s<9&&l?a():c(a,s))}},x=function(e){var t,n,r=function(){t=null,e()},s=function(){var e=i.now()-n;e<99?c(s,99-e):(l||r)(r)};return function(){n=i.now(),t||(t=c(s,99))}},T=function(){var a,u,l,d,p,w,T,L,R,P,_,B,N,W,$=/^img$/i,D=/^iframe$/i,k="onscroll"in e&&!/glebot/.test(navigator.userAgent),I=0,F=0,O=-1,U=function(e){F--,e&&e.target&&v(e.target,U),(!e||F<0||!e.target)&&(F=0)},H=function(e,n){var r,i=e,a="hidden"==z(t.body,"visibility")||"hidden"!=z(e,"visibility");for(L-=n,_+=n,R-=n,P+=n;a&&(i=i.offsetParent)&&i!=t.body&&i!=s;)(a=(z(i,"opacity")||1)>0)&&"visible"!=z(i,"overflow")&&(r=i.getBoundingClientRect(),a=P>r.left&&R<r.right&&_>r.top-1&&L<r.bottom+1);return a},j=function(){var e,i,o,c,l,f,p,m,h,g=n.elements;if((d=r.loadMode)&&F<8&&(e=g.length)){i=0,O++,null==N&&("expand"in r||(r.expand=s.clientHeight>500&&s.clientWidth>500?500:370),B=r.expand,N=B*r.expFactor),I<N&&F<1&&O>2&&d>2&&!t.hidden?(I=N,O=0):I=d>1&&O>1&&F<6?B:0;for(;i<e;i++)if(g[i]&&!g[i]._lazyRace)if(k)if((m=g[i].getAttribute("data-expand"))&&(f=1*m)||(f=I),h!==f&&(w=innerWidth+f*W,T=innerHeight+f,p=-1*f,h=f),o=g[i].getBoundingClientRect(),(_=o.bottom)>=p&&(L=o.top)<=T&&(P=o.right)>=p*W&&(R=o.left)<=w&&(_||P||R||L)&&(r.loadHidden||"hidden"!=z(g[i],"visibility"))&&(u&&F<3&&!m&&(d<3||O<4)||H(g[i],f))){if(Y(g[i]),l=!0,F>9)break}else!l&&u&&!c&&F<4&&O<4&&d>2&&(a[0]||r.preloadAfterLoad)&&(a[0]||!m&&(_||P||R||L||"auto"!=g[i].getAttribute(r.sizesAttr)))&&(c=a[0]||g[i]);else Y(g[i]);c&&!l&&Y(c)}},Q=S(j),q=function(e){g(e.target,r.loadedClass),A(e.target,r.loadingClass),v(e.target,V),y(e.target,"lazyloaded")},G=C(q),V=function(e){G({target:e.target})},J=function(e,t){try{e.contentWindow.location.replace(t)}catch(n){e.src=t}},K=function(e){var t,n=e.getAttribute(r.srcsetAttr);(t=r.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n)},X=C(function(e,t,n,s,i){var a,o,u,d,p,h;(p=y(e,"lazybeforeunveil",t)).defaultPrevented||(s&&(n?g(e,r.autosizesClass):e.setAttribute("sizes",s)),o=e.getAttribute(r.srcsetAttr),a=e.getAttribute(r.srcAttr),i&&(d=(u=e.parentNode)&&f.test(u.nodeName||"")),h=t.firesLoad||"src"in e&&(o||a||d),p={target:e},h&&(v(e,U,!0),clearTimeout(l),l=c(U,2500),g(e,r.loadingClass),v(e,V,!0)),d&&m.call(u.getElementsByTagName("source"),K),o?e.setAttribute("srcset",o):a&&!d&&(D.test(e.nodeName)?J(e,a):e.src=a),i&&(o||d)&&b(e,{src:a})),e._lazyRace&&delete e._lazyRace,A(e,r.lazyClass),E(function(){(!h||e.complete&&e.naturalWidth>1)&&(h?U(p):F--,q(p))},!0)}),Y=function(e){var t,n=$.test(e.nodeName),s=n&&(e.getAttribute(r.sizesAttr)||e.getAttribute("sizes")),i="auto"==s;(!i&&u||!n||!e.getAttribute("src")&&!e.srcset||e.complete||h(e,r.errorClass))&&(t=y(e,"lazyunveilread").detail,i&&M.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,F++,X(e,t,i,s,n))},Z=function(){if(!u)if(i.now()-p<999)c(Z,999);else{var e=x(function(){r.loadMode=3,Q()});u=!0,r.loadMode=3,Q(),o("scroll",function(){3==r.loadMode&&(r.loadMode=2),e()},!0)}};return{_:function(){p=i.now(),n.elements=t.getElementsByClassName(r.lazyClass),a=t.getElementsByClassName(r.lazyClass+" "+r.preloadClass),W=r.hFac,o("scroll",Q,!0),o("resize",Q,!0),e.MutationObserver?new MutationObserver(Q).observe(s,{childList:!0,subtree:!0,attributes:!0}):(s.addEventListener("DOMNodeInserted",Q,!0),s.addEventListener("DOMAttrModified",Q,!0),setInterval(Q,999)),o("hashchange",Q,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){t.addEventListener(e,Q,!0)}),/d$|^c/.test(t.readyState)?Z():(o("load",Z),t.addEventListener("DOMContentLoaded",Q),c(Z,2e4)),n.elements.length?(j(),E._lsFlush()):Q()},checkElems:Q,unveil:Y}}(),M=function(){var e,n=C(function(e,t,n,r){var s,i,a;if(e._lazysizesWidth=r,r+="px",e.setAttribute("sizes",r),f.test(t.nodeName||""))for(i=0,a=(s=t.getElementsByTagName("source")).length;i<a;i++)s[i].setAttribute("sizes",r);n.detail.dataAttr||b(e,n.detail)}),s=function(e,t,r){var s,i=e.parentNode;i&&(r=w(e,i,r),(s=y(e,"lazybeforesizes",{width:r,dataAttr:!!t})).defaultPrevented||(r=s.detail.width)&&r!==e._lazysizesWidth&&n(e,i,s,r))},i=x(function(){var t,n=e.length;if(n)for(t=0;t<n;t++)s(e[t])});return{_:function(){e=t.getElementsByClassName(r.autosizesClass),o("resize",i)},checkElems:i,updateElem:s}}(),L=function(){L.i||(L.i=!0,M._(),T._())};return function(){var t,n={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0};r=e.lazySizesConfig||e.lazysizesConfig||{};for(t in n)t in r||(r[t]=n[t]);e.lazySizesConfig=r,c(function(){r.init&&L()})}(),n={cfg:r,autoSizer:M,loader:T,init:L,uP:b,aC:g,rC:A,hC:h,fire:y,gW:w,rAF:E}}})}]);