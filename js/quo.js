/**
 * QuoJS - Micro #JavaScript Library for Mobile Devices.
 * @version v3.0.4
 * @link    http://quojs.tapquo.com
 * @author  Javi Jimenez Villar (@soyjavi) (https://twitter.com/soyjavi)
 * @license MIT
 */
(function(){"use strict";var t;t=function(){var t,e,n,r,o,u,l,i,c,a,f,s,d,p,y,h,m;return r=[],i=Object.prototype,l=/^\s*<(\w+|!)[^>]*>/,n=[1,9,11],e=/^\.([\w-]+)$/,u=/^#[\w\d-]+$/,f=/^[\w-]+$/,c=document.createElement("table"),a=document.createElement("tr"),o={tr:document.createElement("tbody"),tbody:c,thead:c,tfoot:c,td:a,th:a,"*":document.createElement("div")},t=function(e,n){var r;return e?"function"===t.toType(e)?t(document).ready(e):(r=y(e,n),h(r,e)):h()},t.query=function(t,n){var r;return e.test(n)?r=t.getElementsByClassName(n.replace(".","")):f.test(n)?r=t.getElementsByTagName(n):u.test(n)&&t===document?(r=t.getElementById(n.replace("#","")),r||(r=[])):r=t.querySelectorAll(n),r.nodeType?[r]:Array.prototype.slice.call(r)},t.extend=function(t){return Array.prototype.slice.call(arguments,1).forEach(function(e){var n,r;r=[];for(n in e)r.push(t[n]=e[n]);return r}),t},t.toType=function(t){return i.toString.call(t).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()},t.each=function(e,n){var r,o,u,l,i;if(o=void 0,u=void 0,"array"===t.toType(e))for(o=l=0,i=e.length;i>l;o=++l)r=e[o],n.call(r,o,r)===!1;else for(u in e)n.call(e[u],u,e[u])===!1;return e},t.map=function(e,n){var r,o,u,l;if(l=[],r=void 0,o=void 0,"array"===t.toType(e))for(r=0;r<e.length;)u=n(e[r],r),null!=u&&l.push(u),r++;else for(o in e)u=n(e[o],o),null!=u&&l.push(u);return d(l)},t.mix=function(){var t,e,n,r,o;for(n={},t=0,r=arguments.length;r>t;){e=arguments[t];for(o in e)m(e,o)&&void 0!==e[o]&&(n[o]=e[o]);t++}return n},h=function(t,e){return null==e&&(e=""),t=t||r,t.selector=e,t.__proto__=h.prototype,t},y=function(e,r){var o,u;return o=null,u=t.toType(e),"array"===u?o=s(e):"string"===u&&l.test(e)?(o=p(e.trim(),RegExp.$1),e=null):"string"===u?(o=t.query(document,e),r&&(o=1===o.length?t.query(o[0],r):t.map(function(){return t.query(o,r)}))):(n.indexOf(e.nodeType)>=0||e===window)&&(o=[e],e=null),o},p=function(e,n){var r;return null==n&&(n="*"),n in o||(n="*"),r=o[n],r.innerHTML=""+e,t.each(Array.prototype.slice.call(r.childNodes),function(){return r.removeChild(this)})},s=function(t){return t.filter(function(t){return null!=t?t:void 0})},d=function(t){return t.length>0?r.concat.apply(r,t):t},m=function(t,e){return i.hasOwnProperty.call(t,e)},h.prototype=t.fn={},t.fn.each=function(t){return this.forEach(function(e,n){return t.call(e,n,e)}),this},t.fn.filter=function(e){return t(r.filter.call(this,function(n){return n.parentNode&&t.query(n.parentNode,e).indexOf(n)>=0}))},t.fn.forEach=r.forEach,t.fn.indexOf=r.indexOf,t.version="3.0.6",t}(),this.Quo=this.$$=t}).call(this);

/**
 * QuoJS - ajax
 */
(function(){"use strict";!function(t){var e,n,a,r,o,u,c,s,i,p,d,l;return e={TYPE:"GET",MIME:"json"},a={script:"text/javascript, application/javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"},n=0,t.ajaxSettings={type:e.TYPE,async:!0,success:{},error:{},context:null,dataType:e.MIME,headers:{},xhr:function(){return new window.XMLHttpRequest},crossDomain:!1,timeout:0},t.ajax=function(n){var a,u,s,d;if(s=t.mix(t.ajaxSettings,n),s.type===e.TYPE?s.url+=t.serialize(s.data,"?"):s.data=t.serialize(s.data),r(s.url))return o(s);d=s.xhr(),d.onreadystatechange=function(){return 4===d.readyState?(clearTimeout(a),p(d,s)):void 0},d.open(s.type,s.url,s.async),i(d,s),s.timeout>0&&(a=setTimeout(function(){return l(d,s)},s.timeout));try{d.send(s.data)}catch(f){u=f,d=u,c("Resource not found",d,s)}return d},t.get=function(e,n,a,r){return t.ajax({url:e,data:n,success:a,dataType:r})},t.post=function(t,e,n,a){return s("POST",t,e,n,a)},t.put=function(t,e,n,a){return s("PUT",t,e,n,a)},t["delete"]=function(t,e,n,a){return s("DELETE",t,e,n,a)},t.json=function(e,n,a){return t.ajax({url:e,data:n,success:a})},t.serialize=function(t,e){var n,a;null==e&&(e=""),a=e;for(n in t)t.hasOwnProperty(n)&&(a!==e&&(a+="&"),a+=""+encodeURIComponent(n)+"="+encodeURIComponent(t[n]));return a===e?"":a},o=function(e){var a,r,o,u;return e.async?(r="jsonp"+ ++n,o=document.createElement("script"),u={abort:function(){return t(o).remove(),r in window?window[r]={}:void 0}},a=void 0,window[r]=function(n){return clearTimeout(a),t(o).remove(),delete window[r],d(n,u,e)},o.src=e.url.replace(RegExp("=\\?"),"="+r),t("head").append(o),e.timeout>0&&(a=setTimeout(function(){return l(u,e)},e.timeout)),u):console.error("QuoJS.ajax: Unable to make jsonp synchronous call.")},p=function(t,e){t.status>=200&&t.status<300||0===t.status?e.async&&d(u(t,e),t,e):c("QuoJS.ajax: Unsuccesful request",t,e)},d=function(t,e,n){n.success.call(n.context,t,e)},c=function(t,e,n){n.error.call(n.context,t,e,n)},i=function(t,e){var n;e.contentType&&(e.headers["Content-Type"]=e.contentType),e.dataType&&(e.headers.Accept=a[e.dataType]);for(n in e.headers)t.setRequestHeader(n,e.headers[n])},l=function(t,e){t.onreadystatechange={},t.abort(),c("QuoJS.ajax: Timeout exceeded",t,e)},s=function(e,n,a,r,o){return t.ajax({type:e,url:n,data:a,success:r,dataType:o,contentType:"application/x-www-form-urlencoded"})},r=function(t){return RegExp("=\\?").test(t)},u=function(t,n){var a,r;if(r=t,t.responseText){if(n.dataType===e.MIME)try{r=JSON.parse(t.responseText)}catch(o){a=o,r=a,c("QuoJS.ajax: Parse Error",t,n)}"xml"===n.dataType&&(r=t.responseXML)}return r}}(Quo)}).call(this);

/**
 * QuoJS - css
 */
(function(){"use strict";!function(t){var n,s;return n=["-webkit-","-moz-","-ms-","-o-",""],t.fn.addClass=function(t){return this.each(function(){return this.classList.add(t)})},t.fn.removeClass=function(t){return this.each(function(){return this.classList.remove(t)})},t.fn.toggleClass=function(t){return this.each(function(){var n;return n=this.classList.contains(t)?"remove":"add",this.classList[n](t)})},t.fn.hasClass=function(t){return this.length>0&&this[0].classList.contains(t)},t.fn.listClass=function(){return this.length>0?this[0].classList:void 0},t.fn.style=t.fn.css=function(t,n){var i;return null!=n?this.each(function(){return this.style[t]=n}):(i=this[0],i.style[t]||s(i,t))},t.fn.vendor=function(t,s){var i,e,r,u;for(u=[],e=0,r=n.length;r>e;e++)i=n[e],u.push(this.style(""+i+t,s));return u},s=function(t,n){return document.defaultView.getComputedStyle(t,"")[n]}}(Quo)}).call(this);

/**
 * QuoJS - element
 */
(function(){"use strict";!function(t){return t.fn.attr=function(n,e){return this.length>0&&"string"===t.toType(n)?null!=e?this.each(function(){return this.setAttribute(n,e)}):this[0].getAttribute(n):void 0},t.fn.removeAttr=function(n){return this.length>0&&"string"===t.toType(n)?this.each(function(){return this.removeAttribute(n)}):void 0},t.fn.data=function(t,n){return this.attr("data-"+t,n)},t.fn.removeData=function(t){return this.removeAttr("data-"+t)},t.fn.val=function(t){return null!=t?this.each(function(){return this.value=t.toString()}):this.length>0?this[0].value:null},t.fn.show=function(){return this.style("display","block")},t.fn.hide=function(){return this.style("display","none")},t.fn.focus=function(){return this[0].focus()},t.fn.blur=function(){return this[0].blur()},t.fn.offset=function(){var t,n;return this.length>0&&(t=this[0].getBoundingClientRect(),n={left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:t.width,height:t.height}),n}}(Quo)}).call(this);

/**
 * QuoJS - environment
 */
(function(){"use strict";!function(i){var n,e,r,o,t,a;return r=null,n=/WebKit\/([\d.]+)/,e={Android:/(Android)\s+([\d.]+)/,ipad:/(iPad).*OS\s([\d_]+)/,iphone:/(iPhone\sOS)\s([\d_]+)/,Blackberry:/(BlackBerry|BB10|Playbook).*Version\/([\d.]+)/,FirefoxOS:/(Mozilla).*Mobile[^\/]*\/([\d\.]*)/,webOS:/(webOS|hpwOS)[\s\/]([\d.]+)/},i.isMobile=function(){return this.environment(),r.isMobile},i.environment=function(){var i,n;return r||(n=navigator.userAgent,i=t(n),r={browser:o(n),isMobile:!!i,screen:a(),os:i}),r},o=function(i){var e;return e=i.match(n),e?e[0]:i},t=function(i){var n,r,o;for(r in e)if(o=i.match(e[r])){n={name:"iphone"===r||"ipad"===r||"ipod"===r?"ios":r,version:o[2].replace("_",".")};break}return n},a=function(){return{width:window.innerWidth,height:window.innerHeight}}}(Quo)}).call(this);

/**
 * QuoJS - events
 */
(function(){"use strict";!function(n){var t,e,r,u,i,o,c,a,l,f,d,s,v;return t=1,u={},r={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"},e={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",touch:"click",orientationchange:"resize"},i=/complete|loaded|interactive/,n.fn.on=function(t,e,r){return null==e||"function"===n.toType(e)?this.bind(t,e):this.delegate(e,t,r)},n.fn.off=function(t,e,r){return null==e||"function"===n.toType(e)?this.unbind(t,e):this.undelegate(e,t,r)},n.fn.ready=function(t){return i.test(document.readyState)?t.call(this,n):n.fn.addEvent(document,"DOMContentLoaded",function(){return t.call(this,n)})},n.fn.bind=function(n,t){return this.forEach(function(e){return s(e,n,t)})},n.fn.unbind=function(n,t){return this.each(function(){return v(this,n,t)})},n.fn.delegate=function(t,e,r){return this.each(function(u,i){return s(i,e,r,t,function(e){return function(r){var u,c;return c=n(r.target).closest(t,i).get(0),c?(u=n.extend(o(r),{currentTarget:c,liveFired:i}),e.apply(c,[u].concat([].slice.call(arguments,1)))):void 0}})})},n.fn.undelegate=function(n,t,e){return this.each(function(){return v(this,t,e,n)})},n.fn.trigger=function(t,e,r){return"string"===n.toType(t)&&(t=l(t,e)),null!=r&&(t.originalEvent=r),this.each(function(){return this.dispatchEvent(t)})},n.fn.addEvent=function(n,t,e){return n.addEventListener?n.addEventListener(t,e,!1):n.attachEvent?n.attachEvent("on"+t,e):n["on"+t]=e},n.fn.removeEvent=function(n,t,e){return n.removeEventListener?n.removeEventListener(t,e,!1):n.detachEvent?n.detachEvent("on"+t,e):n["on"+t]=null},l=function(n,t){var e;return e=document.createEvent("Events"),e.initEvent(n,!0,!0,null,null,null,null,null,null,null,null,null,null,null,null),t&&(e.touch=t),e},s=function(t,e,r,i,o){var l,f,s,v;return e=a(e),s=d(t),f=u[s]||(u[s]=[]),l=o&&o(r,e),v={event:e,callback:r,selector:i,proxy:c(l,r,t),delegate:l,index:f.length},f.push(v),n.fn.addEvent(t,v.event,v.proxy)},v=function(t,e,r,i){var o;return e=a(e),o=d(t),f(o,e,r,i).forEach(function(e){return delete u[o][e.index],n.fn.removeEvent(t,e.event,e.proxy)})},d=function(n){return n._id||(n._id=t++)},a=function(t){var r;return r=("function"==typeof n.isMobile?n.isMobile():void 0)?t:e[t],r||t},c=function(n,t,e){var r;return t=n||t,r=function(n){var r;return r=t.apply(e,[n].concat(n.data)),r===!1&&n.preventDefault(),r}},f=function(n,t,e,r){return(u[n]||[]).filter(function(n){return!(!n||t&&n.event!==t||e&&n.callback!==e||r&&n.selector!==r)})},o=function(t){var e;return e=n.extend({originalEvent:t},t),n.each(r,function(n,r){return e[n]=function(){return this[r]=function(){return!0},t[n].apply(t,arguments)},e[r]=function(){return!1}}),e}}(Quo)}).call(this);

/**
 * QuoJS - gestures
 */
(function(){"use strict";var t=[].indexOf||function(t){for(var n=0,e=this.length;e>n;n++)if(n in this&&this[n]===t)return n;return-1};Quo.Gestures=function(n){var e,r,u,i,a,l,o,d,c,s,g,h,f,v;return v=!1,s={},o=null,h=null,a=["input","select","textarea"],e=function(t){return s[t.name]=t.handler,u(t.events)},r=function(t,e,r){return n(t).trigger(e,r,h)},f=function(n){var e;return e=(n.srcElement||n.target).tagName.toLowerCase(),t.call(a,e)>=0?n.stopPropagation():(v=!0,h=n||event,o=d(n),c("start",n.target,o))},g=function(t){return v?(h=t||event,o=d(t),o.length>1&&h.preventDefault(),c("move",t.target,o)):void 0},l=function(t){return v?(h=t||event,c("end",t.target,o),v=!1):void 0},i=function(){return v=!1,c("cancel")},u=function(t){return t.forEach(function(t){return n.fn[t]=function(e){return n(document.body).delegate(this.selector,t,e)}}),this},c=function(t,n,e){var r,u,i;i=[];for(u in s)r=s[u],r[t]&&i.push(r[t].call(r,n,e));return i},d=function(t){var n,e,r,u,i;for(u=t.touches||[t],i=[],e=0,r=u.length;r>e;e++)n=u[e],i.push({x:n.pageX,y:n.pageY});return i},n(document).ready(function(){var t;return t=n(document.body),t.bind("touchstart",f),t.bind("touchmove",g),t.bind("touchend",l),t.bind("touchcancel",i)}),{add:e,trigger:r}}(Quo),Quo.Gestures.add({name:"basic",events:["touch","hold","doubleTap"],handler:function(t){var n,e,r,u,i,a,l,o,d,c,s,g;return e=15,n={TAP:200,DOUBLE_TAP:400,HOLD:400},o=null,g=!0,s=null,c=null,d=null,a=function(e,u){return 1===u.length?(c={time:new Date,x:u[0].x,y:u[0].y},s=e,o=setTimeout(function(){return t.trigger(e,"hold",u[0])},n.HOLD)):r()},i=function(t,n){var u;return null!==c&&(u=l(c,n[0]),u.x>e||u.y>e||n.length>1)?r():void 0},u=function(e,u){var i,a;if(c)return i=l(c,u[0]),0!==i.x||0!==i.y?r():(clearTimeout(o),a=new Date,a-c.time<n.TAP?a-d<n.DOUBLE_TAP?(t.trigger(e,"doubleTap",u[0]),d=null):(d=a,t.trigger(e,"touch",u[0])):void 0)},r=function(){return c=null,g=!1,clearTimeout(o)},l=function(t,n){var e;return e={x:n.x-t.x,y:n.y-t.y}},{start:a,move:i,end:u,cancel:r}}(Quo.Gestures)}),Quo.Gestures.add({name:"drag",events:["drag","dragging"],handler:function(t){var n,e,r,u,i,a,l,o,d,c,s,g;return n=window.devicePixelRatio>=2?15:20,g=null,c=null,s=null,d=null,i=function(t,n){return n.length>=2?(g=t,c=n.length,s=a(n)):void 0},u=function(t,n){var e;return n.length===c?(e=l(n),d={touches:n,delta:e},o(!0)):void 0},e=r=function(){return s&&d?(o(!1),c=null,s=null,d=null):void 0},l=function(t){var n;return n=a(t),{x:n.x-s.x,y:n.y-s.y}},a=function(t){var n,e,r,u,i;for(e=0,r=0,u=0,i=t.length;i>u;u++)n=t[u],e+=parseInt(n.x),r+=parseInt(n.y);return{x:e/t.length,y:r/t.length}},o=function(e){return e?t.trigger(g,"dragging",d):Math.abs(d.delta.x)>n||Math.abs(d.delta.y)>n?t.trigger(g,"drag",d):void 0},{start:i,move:u,end:r}}(Quo.Gestures)}),Quo.Gestures.add({name:"pinch",events:["pinch","pinching","pinchIn","pinchOut"],handler:function(t){var n,e,r,u,i,a,l,o,d,c;return n=window.devicePixelRatio>=2?15:20,c=null,d=null,o=null,i=function(t,n){return 2===n.length?(c=t,d=l(n[0],n[1])):void 0},u=function(t,n){var e;return d&&2===n.length?(e=l(n[0],n[1]),o={touches:n,delta:e-d},a(!0)):void 0},e=r=function(){return d&&o?(a(!1),d=null,o=null):void 0},l=function(t,n){return Math.sqrt((n.x-t.x)*(n.x-t.x)+(n.y-t.y)*(n.y-t.y))},a=function(e){var r;return e?t.trigger(c,"pinching",o):Math.abs(o.delta)>n?(t.trigger(c,"pinch",o),r=o.delta>0?"pinchOut":"pinchIn",t.trigger(c,r,o)):void 0},{start:i,move:u,end:r}}(Quo.Gestures)}),Quo.Gestures.add({name:"rotation",events:["rotate","rotating","rotateLeft","rotateRight"],handler:function(t){var n,e,r,u,i,a,l,o,d,c,s,g,h;return n=5,e=20,h=null,d=0,g=null,o=null,a=function(t,n){return 2===n.length?(h=t,d=0,g=c(n[0],n[1])):void 0},i=function(t,n){var r;return g&&2===n.length?(r=c(n[0],n[1])-g,o&&Math.abs(o.delta-r)>e&&(r+=360*s(o.delta)),Math.abs(r)>360&&(d++,r-=360*s(o.delta)),o={touches:n,delta:r,rotationsCount:d},l(!0)):void 0},r=u=function(){return g&&o?(l(!1),h=null,d=0,g=null,o=null,g=null):void 0},s=function(t){return 0>t?-1:1},c=function(t,n){var e;return e=Math.atan2(t.y-n.y,t.x-n.x),180*(0>e?e+2*Math.PI:e)/Math.PI},l=function(e){var r;return e?t.trigger(h,"rotating",o):Math.abs(o.delta)>n?(t.trigger(h,"rotate",o),r=o.delta>0?"rotateRight":"rotateLeft",t.trigger(h,r,o)):void 0},{start:a,move:i,end:u}}(Quo.Gestures)}),Quo.Gestures.add({name:"swipe",events:["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","swiping","swipingHorizontal","swipingVertical"],handler:function(t){var n,e,r,u,i,a,l,o,d,c,s;return n=Math.round(20/window.devicePixelRatio),s=null,d=null,c=null,o=null,i=function(t,n){return 1===n.length?(s=t,d=n[0],o=null):void 0},u=function(t,n){var e,r;return 1===n.length?(e={x:n[0].x-d.x,y:n[0].y-d.y},r=null===o,o={x:n[0].x,y:n[0].y,delta:e},a(!0,r)):o=null},e=r=function(t,n){var e;return null==o&&n.length>=1&&(e={x:n[0].x-d.x,y:n[0].y-d.y},o={x:n[0].x,y:n[0].y,delta:e}),o?(a(!1),o=null):void 0},a=function(e,r){var u,i,a,d,g;if(null==r&&(r=!1),e)return r&&(c=l(o.delta.x,o.delta.y)),null!==c&&t.trigger(s,"swiping"+c,o),t.trigger(s,"swiping",o);if(i=[],Math.abs(o.delta.y)>n?i.push(o.delta.y<0?"Up":"Down"):Math.abs(o.delta.x)>n&&i.push(o.delta.x<0?"Left":"Right"),i.length){for(t.trigger(s,"swipe",o),g=[],a=0,d=i.length;d>a;a++)u=i[a],g.push(t.trigger(s,"swipe"+u,o));return g}},l=function(t,n){var e;return e=null,Math.round(Math.abs(t/n))>=2?e="Horizontal":Math.round(Math.abs(n/t))>=2&&(e="Vertical"),e},{start:i,move:u,end:r}}(Quo.Gestures)})}).call(this);

/**
 * QuoJS - output
 */
(function(){"use strict";!function(t){return t.fn.text=function(t){return null!=t?this.each(function(){return this.textContent=t}):this.length>0?this[0].textContent:""},t.fn.html=function(n){var e;return null!=n?(e=t.toType(n),this.each(function(){return"string"===e?this.innerHTML=n:"array"===e?n.forEach(function(n){return function(e){return t(n).html(e)}}(this)):this.innerHTML+=t(n).html()})):this.length>0?this[0].innerHTML:""},t.fn.remove=function(){return this.each(function(){return null!=this.parentNode?this.parentNode.removeChild(this):void 0})},t.fn.empty=function(){return this.each(function(){return this.innerHTML=null})},t.fn.append=function(n){var e;return e=t.toType(n),this.each(function(){return"string"===e?this.insertAdjacentHTML("beforeend",n):"array"===e?n.forEach(function(n){return function(e){return t(n).append(e)}}(this)):this.appendChild(n)})},t.fn.prepend=function(n){var e;return e=t.toType(n),this.each(function(){return"string"===e?this.insertAdjacentHTML("afterbegin",n):"array"===e?n.each(function(t){return function(n,e){return t.insertBefore(e,t.firstChild)}}(this)):this.insertBefore(n,this.firstChild)})},t.fn.replaceWith=function(n){var e;return e=t.toType(n),this.each(function(){return this.parentNode?"string"===e?this.insertAdjacentHTML("beforeBegin",n):"array"===e?n.each(function(t){return function(n,e){return t.parentNode.insertBefore(e,t)}}(this)):this.parentNode.insertBefore(n,this):void 0}),this.remove()}}(Quo)}).call(this);

/**
 * QuoJS - query
 */
(function(){"use strict";!function(n){var t,r,i,e;return t="parentNode",n.fn.find=function(t){var r;return r=1===this.length?Quo.query(this[0],t):this.map(function(){return Quo.query(this,t)}),n(r)},n.fn.parent=function(n){var e;return e=n?i(this):this.instance(t),r(e,n)},n.fn.children=function(n){var t;return t=this.map(function(){return Array.prototype.slice.call(this.children)}),r(t,n)},n.fn.siblings=function(n){var t;return t=this.map(function(n,t){return Array.prototype.slice.call(t.parentNode.children).filter(function(n){return n!==t})}),r(t,n)},n.fn.get=function(n){return this[n]||null},n.fn.first=function(){return n(this[0])},n.fn.last=function(){return n(this[this.length-1])},n.fn.closest=function(t,r){var i,e;for(e=this[0],i=n(t),i.length||(e=null);e&&i.indexOf(e)<0;)e=e!==r&&e!==document&&e.parentNode;return n(e)},n.fn.next=function(){return e.call(this,"nextSibling")},n.fn.prev=function(){return e.call(this,"previousSibling")},n.fn.instance=function(n){return this.map(function(){return this[n]})},n.fn.map=function(t){return n.map(this,function(n,r){return t.call(n,r,n)})},i=function(t){var r;for(r=[];t.length>0;)t=n.map(t,function(n){return n=n.parentNode,n!==document&&r.indexOf(n)<0?(r.push(n),n):void 0});return r},r=function(t,r){return null!=r?n(t).filter(r):n(t)},e=function(t){var r;for(r=this[0][t];r&&1!==r.nodeType;)r=r[t];return n(r)}}(Quo)}).call(this);

/**
 * QuoJS - standalone
 */
(function(){"use strict";var t,n=[].indexOf||function(t){for(var n=0,e=this.length;e>n;n++)if(n in this&&this[n]===t)return n;return-1};t=function(){var t,n,e,r,i,u,o,a,c,l,s,f,h,d,p,v,g;return r=[],a=Object.prototype,o=/^\s*<(\w+|!)[^>]*>/,e=[1,9,11],n=/^\.([\w-]+)$/,u=/^#[\w\d-]+$/,s=/^[\w-]+$/,c=document.createElement("table"),l=document.createElement("tr"),i={tr:document.createElement("tbody"),tbody:c,thead:c,tfoot:c,td:l,th:l,"*":document.createElement("div")},t=function(n,e){var r;return n?"function"===t.toType(n)?t(document).ready(n):(r=p(n,e),v(r,n)):v()},t.query=function(t,e){var r;return n.test(e)?r=t.getElementsByClassName(e.replace(".","")):s.test(e)?r=t.getElementsByTagName(e):u.test(e)&&t===document?(r=t.getElementById(e.replace("#","")),r||(r=[])):r=t.querySelectorAll(e),r.nodeType?[r]:Array.prototype.slice.call(r)},t.extend=function(t){return Array.prototype.slice.call(arguments,1).forEach(function(n){var e,r;r=[];for(e in n)r.push(t[e]=n[e]);return r}),t},t.toType=function(t){return a.toString.call(t).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()},t.each=function(n,e){var r,i,u,o,a;if(i=void 0,u=void 0,"array"===t.toType(n))for(i=o=0,a=n.length;a>o;i=++o)r=n[i],e.call(r,i,r)===!1;else for(u in n)e.call(n[u],u,n[u])===!1;return n},t.map=function(n,e){var r,i,u,o;if(o=[],r=void 0,i=void 0,"array"===t.toType(n))for(r=0;r<n.length;)u=e(n[r],r),null!=u&&o.push(u),r++;else for(i in n)u=e(n[i],i),null!=u&&o.push(u);return h(o)},t.mix=function(){var t,n,e,r,i;for(e={},t=0,r=arguments.length;r>t;){n=arguments[t];for(i in n)g(n,i)&&void 0!==n[i]&&(e[i]=n[i]);t++}return e},v=function(t,n){return null==n&&(n=""),t=t||r,t.selector=n,t.__proto__=v.prototype,t},p=function(n,r){var i,u;return i=null,u=t.toType(n),"array"===u?i=f(n):"string"===u&&o.test(n)?(i=d(n.trim(),RegExp.$1),n=null):"string"===u?(i=t.query(document,n),r&&(i=1===i.length?t.query(i[0],r):t.map(function(){return t.query(i,r)}))):(e.indexOf(n.nodeType)>=0||n===window)&&(i=[n],n=null),i},d=function(n,e){var r;return null==e&&(e="*"),e in i||(e="*"),r=i[e],r.innerHTML=""+n,t.each(Array.prototype.slice.call(r.childNodes),function(){return r.removeChild(this)})},f=function(t){return t.filter(function(t){return null!=t?t:void 0})},h=function(t){return t.length>0?r.concat.apply(r,t):t},g=function(t,n){return a.hasOwnProperty.call(t,n)},v.prototype=t.fn={},t.fn.each=function(t){return this.forEach(function(n,e){return t.call(n,e,n)}),this},t.fn.filter=function(n){return t(r.filter.call(this,function(e){return e.parentNode&&t.query(e.parentNode,n).indexOf(e)>=0}))},t.fn.forEach=r.forEach,t.fn.indexOf=r.indexOf,t.version="3.0.6",t}(),this.Quo=this.$$=t,function(t){var n,e,r,i,u,o,a,c,l,s,f,h;return n={TYPE:"GET",MIME:"json"},r={script:"text/javascript, application/javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"},e=0,t.ajaxSettings={type:n.TYPE,async:!0,success:{},error:{},context:null,dataType:n.MIME,headers:{},xhr:function(){return new window.XMLHttpRequest},crossDomain:!1,timeout:0},t.ajax=function(e){var r,o,c,f;if(c=t.mix(t.ajaxSettings,e),c.type===n.TYPE?c.url+=t.serialize(c.data,"?"):c.data=t.serialize(c.data),i(c.url))return u(c);f=c.xhr(),f.onreadystatechange=function(){return 4===f.readyState?(clearTimeout(r),s(f,c)):void 0},f.open(c.type,c.url,c.async),l(f,c),c.timeout>0&&(r=setTimeout(function(){return h(f,c)},c.timeout));try{f.send(c.data)}catch(d){o=d,f=o,a("Resource not found",f,c)}return f},t.get=function(n,e,r,i){return t.ajax({url:n,data:e,success:r,dataType:i})},t.post=function(t,n,e,r){return c("POST",t,n,e,r)},t.put=function(t,n,e,r){return c("PUT",t,n,e,r)},t["delete"]=function(t,n,e,r){return c("DELETE",t,n,e,r)},t.json=function(n,e,r){return t.ajax({url:n,data:e,success:r})},t.serialize=function(t,n){var e,r;null==n&&(n=""),r=n;for(e in t)t.hasOwnProperty(e)&&(r!==n&&(r+="&"),r+=""+encodeURIComponent(e)+"="+encodeURIComponent(t[e]));return r===n?"":r},u=function(n){var r,i,u,o;return n.async?(i="jsonp"+ ++e,u=document.createElement("script"),o={abort:function(){return t(u).remove(),i in window?window[i]={}:void 0}},r=void 0,window[i]=function(e){return clearTimeout(r),t(u).remove(),delete window[i],f(e,o,n)},u.src=n.url.replace(RegExp("=\\?"),"="+i),t("head").append(u),n.timeout>0&&(r=setTimeout(function(){return h(o,n)},n.timeout)),o):console.error("QuoJS.ajax: Unable to make jsonp synchronous call.")},s=function(t,n){t.status>=200&&t.status<300||0===t.status?n.async&&f(o(t,n),t,n):a("QuoJS.ajax: Unsuccesful request",t,n)},f=function(t,n,e){e.success.call(e.context,t,n)},a=function(t,n,e){e.error.call(e.context,t,n,e)},l=function(t,n){var e;n.contentType&&(n.headers["Content-Type"]=n.contentType),n.dataType&&(n.headers.Accept=r[n.dataType]);for(e in n.headers)t.setRequestHeader(e,n.headers[e])},h=function(t,n){t.onreadystatechange={},t.abort(),a("QuoJS.ajax: Timeout exceeded",t,n)},c=function(n,e,r,i,u){return t.ajax({type:n,url:e,data:r,success:i,dataType:u,contentType:"application/x-www-form-urlencoded"})},i=function(t){return RegExp("=\\?").test(t)},o=function(t,e){var r,i;if(i=t,t.responseText){if(e.dataType===n.MIME)try{i=JSON.parse(t.responseText)}catch(u){r=u,i=r,a("QuoJS.ajax: Parse Error",t,e)}"xml"===e.dataType&&(i=t.responseXML)}return i}}(t),function(t){var n,e;return n=["-webkit-","-moz-","-ms-","-o-",""],t.fn.addClass=function(t){return this.each(function(){return this.classList.add(t)})},t.fn.removeClass=function(t){return this.each(function(){return this.classList.remove(t)})},t.fn.toggleClass=function(t){return this.each(function(){var n;return n=this.classList.contains(t)?"remove":"add",this.classList[n](t)})},t.fn.hasClass=function(t){return this.length>0&&this[0].classList.contains(t)},t.fn.listClass=function(){return this.length>0?this[0].classList:void 0},t.fn.style=t.fn.css=function(t,n){var r;return null!=n?this.each(function(){return this.style[t]=n}):(r=this[0],r.style[t]||e(r,t))},t.fn.vendor=function(t,e){var r,i,u,o;for(o=[],i=0,u=n.length;u>i;i++)r=n[i],o.push(this.style(""+r+t,e));return o},e=function(t,n){return document.defaultView.getComputedStyle(t,"")[n]}}(t),function(t){return t.fn.attr=function(n,e){return this.length>0&&"string"===t.toType(n)?null!=e?this.each(function(){return this.setAttribute(n,e)}):this[0].getAttribute(n):void 0},t.fn.removeAttr=function(n){return this.length>0&&"string"===t.toType(n)?this.each(function(){return this.removeAttribute(n)}):void 0},t.fn.data=function(t,n){return this.attr("data-"+t,n)},t.fn.removeData=function(t){return this.removeAttr("data-"+t)},t.fn.val=function(t){return null!=t?this.each(function(){return this.value=t.toString()}):this.length>0?this[0].value:null},t.fn.show=function(){return this.style("display","block")},t.fn.hide=function(){return this.style("display","none")},t.fn.focus=function(){return this[0].focus()},t.fn.blur=function(){return this[0].blur()},t.fn.offset=function(){var t,n;return this.length>0&&(t=this[0].getBoundingClientRect(),n={left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:t.width,height:t.height}),n}}(t),function(t){var n,e,r,i,u,o;return r=null,n=/WebKit\/([\d.]+)/,e={Android:/(Android)\s+([\d.]+)/,ipad:/(iPad).*OS\s([\d_]+)/,iphone:/(iPhone\sOS)\s([\d_]+)/,Blackberry:/(BlackBerry|BB10|Playbook).*Version\/([\d.]+)/,FirefoxOS:/(Mozilla).*Mobile[^\/]*\/([\d\.]*)/,webOS:/(webOS|hpwOS)[\s\/]([\d.]+)/},t.isMobile=function(){return this.environment(),r.isMobile},t.environment=function(){var t,n;return r||(n=navigator.userAgent,t=u(n),r={browser:i(n),isMobile:!!t,screen:o(),os:t}),r},i=function(t){var e;return e=t.match(n),e?e[0]:t},u=function(t){var n,r,i;for(r in e)if(i=t.match(e[r])){n={name:"iphone"===r||"ipad"===r||"ipod"===r?"ios":r,version:i[2].replace("_",".")};break}return n},o=function(){return{width:window.innerWidth,height:window.innerHeight}}}(t),function(t){var n,e,r,i,u,o,a,c,l,s,f,h,d;return n=1,i={},r={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"},e={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",touch:"click",orientationchange:"resize"},u=/complete|loaded|interactive/,t.fn.on=function(n,e,r){return null==e||"function"===t.toType(e)?this.bind(n,e):this.delegate(e,n,r)},t.fn.off=function(n,e,r){return null==e||"function"===t.toType(e)?this.unbind(n,e):this.undelegate(e,n,r)},t.fn.ready=function(n){return u.test(document.readyState)?n.call(this,t):t.fn.addEvent(document,"DOMContentLoaded",function(){return n.call(this,t)})},t.fn.bind=function(t,n){return this.forEach(function(e){return h(e,t,n)})},t.fn.unbind=function(t,n){return this.each(function(){return d(this,t,n)})},t.fn.delegate=function(n,e,r){return this.each(function(i,u){return h(u,e,r,n,function(e){return function(r){var i,a;return a=t(r.target).closest(n,u).get(0),a?(i=t.extend(o(r),{currentTarget:a,liveFired:u}),e.apply(a,[i].concat([].slice.call(arguments,1)))):void 0}})})},t.fn.undelegate=function(t,n,e){return this.each(function(){return d(this,n,e,t)})},t.fn.trigger=function(n,e,r){return"string"===t.toType(n)&&(n=l(n,e)),null!=r&&(n.originalEvent=r),this.each(function(){return this.dispatchEvent(n)})},t.fn.addEvent=function(t,n,e){return t.addEventListener?t.addEventListener(n,e,!1):t.attachEvent?t.attachEvent("on"+n,e):t["on"+n]=e},t.fn.removeEvent=function(t,n,e){return t.removeEventListener?t.removeEventListener(n,e,!1):t.detachEvent?t.detachEvent("on"+n,e):t["on"+n]=null},l=function(t,n){var e;return e=document.createEvent("Events"),e.initEvent(t,!0,!0,null,null,null,null,null,null,null,null,null,null,null,null),n&&(e.touch=n),e},h=function(n,e,r,u,o){var l,s,h,d;return e=c(e),h=f(n),s=i[h]||(i[h]=[]),l=o&&o(r,e),d={event:e,callback:r,selector:u,proxy:a(l,r,n),delegate:l,index:s.length},s.push(d),t.fn.addEvent(n,d.event,d.proxy)},d=function(n,e,r,u){var o;return e=c(e),o=f(n),s(o,e,r,u).forEach(function(e){return delete i[o][e.index],t.fn.removeEvent(n,e.event,e.proxy)})},f=function(t){return t._id||(t._id=n++)},c=function(n){var r;return r=("function"==typeof t.isMobile?t.isMobile():void 0)?n:e[n],r||n},a=function(t,n,e){var r;return n=t||n,r=function(t){var r;return r=n.apply(e,[t].concat(t.data)),r===!1&&t.preventDefault(),r}},s=function(t,n,e,r){return(i[t]||[]).filter(function(t){return!(!t||n&&t.event!==n||e&&t.callback!==e||r&&t.selector!==r)})},o=function(n){var e;return e=t.extend({originalEvent:n},n),t.each(r,function(t,r){return e[t]=function(){return this[r]=function(){return!0},n[t].apply(n,arguments)},e[r]=function(){return!1}}),e}}(t),function(t){return t.fn.text=function(t){return null!=t?this.each(function(){return this.textContent=t}):this.length>0?this[0].textContent:""},t.fn.html=function(n){var e;return null!=n?(e=t.toType(n),this.each(function(){return"string"===e?this.innerHTML=n:"array"===e?n.forEach(function(n){return function(e){return t(n).html(e)}}(this)):this.innerHTML+=t(n).html()})):this.length>0?this[0].innerHTML:""},t.fn.remove=function(){return this.each(function(){return null!=this.parentNode?this.parentNode.removeChild(this):void 0})},t.fn.empty=function(){return this.each(function(){return this.innerHTML=null})},t.fn.append=function(n){var e;return e=t.toType(n),this.each(function(){return"string"===e?this.insertAdjacentHTML("beforeend",n):"array"===e?n.forEach(function(n){return function(e){return t(n).append(e)}}(this)):this.appendChild(n)})},t.fn.prepend=function(n){var e;return e=t.toType(n),this.each(function(){return"string"===e?this.insertAdjacentHTML("afterbegin",n):"array"===e?n.each(function(t){return function(n,e){return t.insertBefore(e,t.firstChild)}}(this)):this.insertBefore(n,this.firstChild)})},t.fn.replaceWith=function(n){var e;return e=t.toType(n),this.each(function(){return this.parentNode?"string"===e?this.insertAdjacentHTML("beforeBegin",n):"array"===e?n.each(function(t){return function(n,e){return t.parentNode.insertBefore(e,t)}}(this)):this.parentNode.insertBefore(n,this):void 0}),this.remove()}}(t),function(n){var e,r,i,u;return e="parentNode",n.fn.find=function(e){var r;return r=1===this.length?t.query(this[0],e):this.map(function(){return t.query(this,e)}),n(r)},n.fn.parent=function(t){var n;return n=t?i(this):this.instance(e),r(n,t)},n.fn.children=function(t){var n;return n=this.map(function(){return Array.prototype.slice.call(this.children)}),r(n,t)},n.fn.siblings=function(t){var n;return n=this.map(function(t,n){return Array.prototype.slice.call(n.parentNode.children).filter(function(t){return t!==n})}),r(n,t)},n.fn.get=function(t){return this[t]||null},n.fn.first=function(){return n(this[0])},n.fn.last=function(){return n(this[this.length-1])},n.fn.closest=function(t,e){var r,i;for(i=this[0],r=n(t),r.length||(i=null);i&&r.indexOf(i)<0;)i=i!==e&&i!==document&&i.parentNode;return n(i)},n.fn.next=function(){return u.call(this,"nextSibling")},n.fn.prev=function(){return u.call(this,"previousSibling")},n.fn.instance=function(t){return this.map(function(){return this[t]})},n.fn.map=function(t){return n.map(this,function(n,e){return t.call(n,e,n)})},i=function(t){var e;for(e=[];t.length>0;)t=n.map(t,function(t){return t=t.parentNode,t!==document&&e.indexOf(t)<0?(e.push(t),t):void 0});return e},r=function(t,e){return null!=e?n(t).filter(e):n(t)},u=function(t){var e;for(e=this[0][t];e&&1!==e.nodeType;)e=e[t];return n(e)}}(t),t.Gestures=function(t){var e,r,i,u,o,a,c,l,s,f,h,d,p,v;return v=!1,f={},c=null,d=null,o=["input","select","textarea"],e=function(t){return f[t.name]=t.handler,i(t.events)},r=function(n,e,r){return t(n).trigger(e,r,d)},p=function(t){var e;return e=(t.srcElement||t.target).tagName.toLowerCase(),n.call(o,e)>=0?t.stopPropagation():(v=!0,d=t||event,c=l(t),s("start",t.target,c))},h=function(t){return v?(d=t||event,c=l(t),c.length>1&&d.preventDefault(),s("move",t.target,c)):void 0},a=function(t){return v?(d=t||event,s("end",t.target,c),v=!1):void 0},u=function(){return v=!1,s("cancel")},i=function(n){return n.forEach(function(n){return t.fn[n]=function(e){return t(document.body).delegate(this.selector,n,e)}}),this},s=function(t,n,e){var r,i,u;u=[];for(i in f)r=f[i],r[t]&&u.push(r[t].call(r,n,e));return u},l=function(t){var n,e,r,i,u;for(i=t.touches||[t],u=[],e=0,r=i.length;r>e;e++)n=i[e],u.push({x:n.pageX,y:n.pageY});return u},t(document).ready(function(){var n;return n=t(document.body),n.bind("touchstart",p),n.bind("touchmove",h),n.bind("touchend",a),n.bind("touchcancel",u)}),{add:e,trigger:r}}(t),t.Gestures.add({name:"basic",events:["touch","hold","doubleTap"],handler:function(t){var n,e,r,i,u,o,a,c,l,s,f,h;return e=15,n={TAP:200,DOUBLE_TAP:400,HOLD:400},c=null,h=!0,f=null,s=null,l=null,o=function(e,i){return 1===i.length?(s={time:new Date,x:i[0].x,y:i[0].y},f=e,c=setTimeout(function(){return t.trigger(e,"hold",i[0])},n.HOLD)):r()},u=function(t,n){var i;return null!==s&&(i=a(s,n[0]),i.x>e||i.y>e||n.length>1)?r():void 0},i=function(e,i){var u,o;if(s)return u=a(s,i[0]),0!==u.x||0!==u.y?r():(clearTimeout(c),o=new Date,o-s.time<n.TAP?o-l<n.DOUBLE_TAP?(t.trigger(e,"doubleTap",i[0]),l=null):(l=o,t.trigger(e,"touch",i[0])):void 0)},r=function(){return s=null,h=!1,clearTimeout(c)},a=function(t,n){var e;return e={x:n.x-t.x,y:n.y-t.y}},{start:o,move:u,end:i,cancel:r}}(t.Gestures)}),t.Gestures.add({name:"drag",events:["drag","dragging"],handler:function(t){var n,e,r,i,u,o,a,c,l,s,f,h;return n=window.devicePixelRatio>=2?15:20,h=null,s=null,f=null,l=null,u=function(t,n){return n.length>=2?(h=t,s=n.length,f=o(n)):void 0},i=function(t,n){var e;return n.length===s?(e=a(n),l={touches:n,delta:e},c(!0)):void 0},e=r=function(){return f&&l?(c(!1),s=null,f=null,l=null):void 0},a=function(t){var n;return n=o(t),{x:n.x-f.x,y:n.y-f.y}},o=function(t){var n,e,r,i,u;for(e=0,r=0,i=0,u=t.length;u>i;i++)n=t[i],e+=parseInt(n.x),r+=parseInt(n.y);return{x:e/t.length,y:r/t.length}},c=function(e){return e?t.trigger(h,"dragging",l):Math.abs(l.delta.x)>n||Math.abs(l.delta.y)>n?t.trigger(h,"drag",l):void 0},{start:u,move:i,end:r}}(t.Gestures)}),t.Gestures.add({name:"pinch",events:["pinch","pinching","pinchIn","pinchOut"],handler:function(t){var n,e,r,i,u,o,a,c,l,s;return n=window.devicePixelRatio>=2?15:20,s=null,l=null,c=null,u=function(t,n){return 2===n.length?(s=t,l=a(n[0],n[1])):void 0},i=function(t,n){var e;return l&&2===n.length?(e=a(n[0],n[1]),c={touches:n,delta:e-l},o(!0)):void 0},e=r=function(){return l&&c?(o(!1),l=null,c=null):void 0},a=function(t,n){return Math.sqrt((n.x-t.x)*(n.x-t.x)+(n.y-t.y)*(n.y-t.y))},o=function(e){var r;return e?t.trigger(s,"pinching",c):Math.abs(c.delta)>n?(t.trigger(s,"pinch",c),r=c.delta>0?"pinchOut":"pinchIn",t.trigger(s,r,c)):void 0},{start:u,move:i,end:r}}(t.Gestures)}),t.Gestures.add({name:"rotation",events:["rotate","rotating","rotateLeft","rotateRight"],handler:function(t){var n,e,r,i,u,o,a,c,l,s,f,h,d;return n=5,e=20,d=null,l=0,h=null,c=null,o=function(t,n){return 2===n.length?(d=t,l=0,h=s(n[0],n[1])):void 0},u=function(t,n){var r;return h&&2===n.length?(r=s(n[0],n[1])-h,c&&Math.abs(c.delta-r)>e&&(r+=360*f(c.delta)),Math.abs(r)>360&&(l++,r-=360*f(c.delta)),c={touches:n,delta:r,rotationsCount:l},a(!0)):void 0},r=i=function(){return h&&c?(a(!1),d=null,l=0,h=null,c=null,h=null):void 0},f=function(t){return 0>t?-1:1},s=function(t,n){var e;return e=Math.atan2(t.y-n.y,t.x-n.x),180*(0>e?e+2*Math.PI:e)/Math.PI},a=function(e){var r;return e?t.trigger(d,"rotating",c):Math.abs(c.delta)>n?(t.trigger(d,"rotate",c),r=c.delta>0?"rotateRight":"rotateLeft",t.trigger(d,r,c)):void 0},{start:o,move:u,end:i}}(t.Gestures)}),t.Gestures.add({name:"swipe",events:["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","swiping","swipingHorizontal","swipingVertical"],handler:function(t){var n,e,r,i,u,o,a,c,l,s,f;return n=Math.round(20/window.devicePixelRatio),f=null,l=null,s=null,c=null,u=function(t,n){return 1===n.length?(f=t,l=n[0],c=null):void 0},i=function(t,n){var e,r;return 1===n.length?(e={x:n[0].x-l.x,y:n[0].y-l.y},r=null===c,c={x:n[0].x,y:n[0].y,delta:e},o(!0,r)):c=null},e=r=function(t,n){var e;return null==c&&n.length>=1&&(e={x:n[0].x-l.x,y:n[0].y-l.y},c={x:n[0].x,y:n[0].y,delta:e}),c?(o(!1),c=null):void 0},o=function(e,r){var i,u,o,l,h;if(null==r&&(r=!1),e)return r&&(s=a(c.delta.x,c.delta.y)),null!==s&&t.trigger(f,"swiping"+s,c),t.trigger(f,"swiping",c);if(u=[],Math.abs(c.delta.y)>n?u.push(c.delta.y<0?"Up":"Down"):Math.abs(c.delta.x)>n&&u.push(c.delta.x<0?"Left":"Right"),u.length){for(t.trigger(f,"swipe",c),h=[],o=0,l=u.length;l>o;o++)i=u[o],h.push(t.trigger(f,"swipe"+i,c));return h}},a=function(t,n){var e;return e=null,Math.round(Math.abs(t/n))>=2?e="Horizontal":Math.round(Math.abs(n/t))>=2&&(e="Vertical"),e},{start:u,move:i,end:r}}(t.Gestures)})}).call(this);