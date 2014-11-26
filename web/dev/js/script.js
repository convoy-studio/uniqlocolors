/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);

Trads = {
		
	"fr": {
		"play": "JOUER",
		"start": "COMMENCER",
		"try_again": "REJOUER",
		"tries_left": "Essais restants",
		"levels": "Niveaux",
		"game_over": "Perdu",
		"try_again": "Rejouer !",
		"game_over_text": "Vous n'avez plus d'essais<br/><span>Partagez</span> le jeu avec vos amis<br/>pour pouvoir <span>jouer à nouveau</span>:",
		"get_notified": "<span>Être informé</span><br/><span>la semaine prochaine quand vous pourrez rejouer</span>",
		"loading": "Loading...",

		"sharingText": "UNIQLO GIVEAWAY - Play the color game and get a chance to win free products .",

		"products": [
			{
				"category": "Doudoune <br/>ULD",
				"name": "Doudoune Ultra Light",
				"other_name": "Doudoune Ultra Light",
				"description": "Chaleur et légèreté. Une révolution à emporter partout.",
				"carousel_top": "Offrez <strong><span>la couleur</span></strong>",
				"price": "49,90€",
				"offer": "39,90€",
				"pictures": [
					{
						"back": "/dev/medias/home/week_1_A_bg.jpg",
						"front": "/dev/medias/home/week_1_A.png",
						"color": "#abd7a4"
					},
					{
						"back": "/dev/medias/home/week_1_B_bg.jpg",
						"front": "/dev/medias/home/week_1_B.png",
						"color": "#5bbad8"
					}
				]
			}
		],

		"home": {
			"title": "DONNEZ LA COULEUR",
			"subtitle": "Ce Noël, <strong>partagez la bonne humeur avec votre entourage.</strong>",
			"info_1": "Chaque semaine, entre maintenant et Noël, UNIQLO vous propose une superbe nouvelle <strong>promotion.</strong>",
			"info_2": "Soyez sûr de vous tenir au courant toutes les semaines !",
			"sub_play_button": "Jouer pour gagner",
		},

		"tuto": "<p>Cliquez sur l'image<br/> <span>qui n'a pas</span> son double.</p><p>Terminez tous les niveaux dans le temps imparti et participez à notre tirage au sort quotidien pour gagner un article à retirer en magasin.</p>",

		"win": {
			"info": "Remplissez le formulaire<br/>afin de participer au tirage au sort:",
		},

		"loose": {
			"see_you": "À bientôt",
			"info": "Laissez nous votre email <br/>et soyez informé quand vous pourrez rejouer"
		},

		"form": {
			"firstname": "Votre prénom",
			"lastname": "Votre nom de famille",
			"email": "Votre email",
			"female": "Femme",
			"male": "Homme",
			"remind_me": "M'informer pour la semaine prochaine",
			"keep_me_posted": "Me tenir informé des prochaines offres Uniqlo",
			"submit": "Envoyer",
			"get_a_chance": "Remportez une chance de gagner",
			"remind_me": "Me rappeler"
		},

		"footer": {
			"rules": {
				"text": "Règlement",
				"url": ""
			},
			"privacy_policy": {
				"text": "Politique de confidentialité",
				"url": ""
			},
			"terms_of_use": {
				"text": "Conditions d'utilisation",
				"url": ""
			},
			"credits": {
				"text": "Crédits",
				"url": ""
			},
			"facebook": "https://www.facebook.com/uniqlo.fr",
			"twitter": "https://twitter.com/UNIQLO_France",
			"google": "https://plus.googleapis.com/wm/4/+uniqloparis/",
			"youtube": "https://www.youtube.com/channel/UCCWqHjQF91GWFf2s1doC8JQ"
		}
	},

	"en":{
		"play": "PLAY",
		"start": "START",
		"try_again": "TRY AGAIN",
		"tries_left": "Tries left",
		"levels": "Levels",
		"game_over": "Game<br/>Over",
		"try_again": "Try<br/>Again!",
		"game_over_text": "You've run out of tries!<br/><span>Share</span> the game with your friends<br/>and get <span>a new chance</span>:",
		"get_notified": "<span>Get notified</span><br/><span>of next week's giveaway</span>",

		"products": [
			{
				"category": "Doudoune <br/>ULD",
				"name": "Doudoune Ultra Light",
				"other_name": "Doudoune Ultra Light",
				"description": "Chaleur et légèreté. Une révolution à emporter partout.",
				"carousel_top": "Offrez <strong><span>la couleur</span></strong>",
				"price": "49,90€",
				"offer": "39,90€",
				"pictures": [
					{
						"back": "/dev/medias/home/week_1_A_bg.jpg",
						"front": "/dev/medias/home/week_1_A.png",
						"color": "#abd7a4"
					},
					{
						"back": "/dev/medias/home/week_1_B_bg.jpg",
						"front": "/dev/medias/home/week_1_B.png",
						"color": "#5bbad8"
					}
				]
			}
		],

		"home": {
			"title": "GIVE COLORS",
			"subtitle": "this holiday season <strong>put a smile on everybody’s face!</strong>",
			"info_1": "Each week, until December 27th, a new offer for you to shop. Warmth and dazzling colors for the people you treasure",
			"info_2": "Play our color game and get a chance to win a <strong>free product</strong> or <strong>discounts</strong>. Come back every week for new giveaways",
			"sub_play_button": "Play to win",
		},

		"tuto": "<p>Click on the visual that<br/> <span>does not</span> have a pair.</p><p>Complete all levels in time and get a chance to win one of this week’s featured products.</p>",

		"win": {
			"info": "Fill the form to enter into<br/>the raffle draw for a prize:",
		},

		"loose": {
			"see_you": "See you soon",
			"info": "Leave us your email to be <br/>notified of next week’s giveaway"
		},

		"form": {
			"firstname": "Your First Name",
			"lastname": "Your Last Name",
			"email": "Your email",
			"female": "Female",
			"male": "Male",
			"remind_me": "Remind me of next giveaways",
			"keep_me_posted": "Kepp me posted on future Uniqlo's offers",
			"submit": "Submit",
			"get_a_chance": "Get a chance to win a",
			"remind_me": "Remind me"
		},

		"footer": {
			"rules": {
				"text": "Règlement",
				"url": ""
			},
			"privacy_policy": {
				"text": "Politique de confidentialité",
				"url": ""
			},
			"terms_of_use": {
				"text": "Conditions d'utilisation",
				"url": ""
			},
			"credits": {
				"text": "Crédits",
				"url": ""
			},
			"facebook": "https://www.facebook.com/uniqlo.uk",
			"twitter": "https://twitter.com/UNIQLO_UK",
			"google": "https://plus.google.com/b/110396223365528310578/+uniqlouk/posts",
			"youtube": "https://www.youtube.com/user/uniqloukofficial"
		}
	},
	
	"de": {
		"play": "SPIELEN",
		"start": "START",
		"try_again": "REPLAY",
		"tries_left": "Versuche übrig",
		"levels": "Stufen",
		"game_over": "Das Spiel ist aus.",
		"try_again": "Replay !",
		"game_over_text": "OH NEIN… DU HAST ES LEIDER NICHT GESCHAFFT.<br/>Teile dieses Spiel mit anderen, um noch einmal zu spielen ODER komm morgen zurück für einen neuen Versuch.",
		"get_notified": "<span>Befreien Sie sich von der nächsten Woche Werbegeschenk mitgeteilt.</span>",

		"products": [
			{
				"category": "Doudoune <br/>ULD",
				"name": "Doudoune Ultra Light",
				"other_name": "Doudoune Ultra Light",
				"description": "Chaleur et légèreté. Une révolution à emporter partout.",
				"carousel_top": "Offrez <strong><span>la couleur</span></strong>",
				"price": "49,90€",
				"offer": "39,90€",
				"pictures": [
					{
						"back": "/dev/medias/home/week_1_A_bg.jpg",
						"front": "/dev/medias/home/week_1_A.png",
						"color": "#abd7a4"
					},
					{
						"back": "/dev/medias/home/week_1_B_bg.jpg",
						"front": "/dev/medias/home/week_1_B.png",
						"color": "#5bbad8"
					}
				]
			}
		],

		"home": {
			"title": "FARBE SCHENKEN!",
			"subtitle": "Mach dieses Jahr zu Weihnachten jemandem eine Freude.",
			"info_1": "UNIQLO bietet jede Woche ein neues, tolles Angebot. Schau regelmäβig vorbei.",
			"info_2": "Mach mit bei unserem Farbenspiel um einen Preis zu gewinnen, den du dann im UNIQLO Flagship Store in Berlin abholen kannst. Versuch einfach jede Woche erneut dein Glück.",
			"sub_play_button": "MITSPIELEN",
		},

		"tuto": "KLICK AUF DIE BILDER, <span>DIE NICHT PASSEN</span>.</p><p>Vollende jedes Level, um ein kostenloses Produkt zu gewinnen, das im UNIQLO Flagship Store in Berlin abgeholt werden kann.</p>",

		"win": {
			"info": "Du hast alle Level vollendet.<br/> Gib deine E-Mail-Adresse ein, um den heutigen Preis zu gewinnen, der im UNIQLO Flagship Store in Berlin abgeholt werden kann.",
		},

		"loose": {
			"see_you": "Bis bald",
			"info": "Gib deine E-Mail-Adresse ein,<br/> um den heutigen Preis zu gewinnen,<br/> der im UNIQLO Flagship Store in Berlin abgeholt werden kann."
		},

		"form": {
			"firstname": "Ihren Namen",
			"lastname": "Ihr Name",
			"email": "E-Mail",
			"female": "Woman",
			"male": "Man",
			"remind_me": "Informieren Sie mich für die nächste Woche,",
			"keep_me_posted": "Halten Sie mich über kommende Angebote informiert Uniqlo",
			"submit": "Senden",
			"get_a_chance": "Gewinnen Sie eine Chance zu gewinnen",
			"remind_me": "Remind Me"
		},

		"footer": {
			"rules": {
				"text": "Règlement",
				"url": ""
			},
			"privacy_policy": {
				"text": "Politique de confidentialité",
				"url": ""
			},
			"terms_of_use": {
				"text": "Conditions d'utilisation",
				"url": ""
			},
			"credits": {
				"text": "Crédits",
				"url": ""
			},
			"facebook": "https://de-de.facebook.com/uniqlo.deutschland",
			"twitter": "https://twitter.com/UNIQLO_DE",
			"google": "https://plus.google.com/107858820395596222759/about",
			"youtube": "https://www.youtube.com/channel/UCLigCO7wCiUkxN9668HyF1A"
		}
	}

};

var currentWeek = 0;
(function(u,q){"function"===typeof define&&define.amd?define([],q):"object"===typeof exports?module.exports=q():u.Handlebars=u.Handlebars||q()})(this,function(){var u=function(){function m(k){this.string=k}m.prototype.toString=function(){return""+this.string};return m}(),q=function(m){function k(e){return a[e]}var h={},a={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},d=/[&<>"'`]/g,g=/[&<>"'`]/;h.extend=function(a){for(var f=1;f<arguments.length;f++)for(var e in arguments[f])Object.prototype.hasOwnProperty.call(arguments[f],
e)&&(a[e]=arguments[f][e]);return a};var c=Object.prototype.toString;h.toString=c;var e=function(a){return"function"===typeof a};e(/x/)&&(e=function(a){return"function"===typeof a&&"[object Function]"===c.call(a)});h.isFunction=e;var b=Array.isArray||function(a){return a&&"object"===typeof a?"[object Array]"===c.call(a):!1};h.isArray=b;h.escapeExpression=function(a){if(a instanceof m)return a.toString();if(null==a)return"";if(!a)return a+"";a=""+a;return g.test(a)?a.replace(d,k):a};h.isEmpty=function(a){return a||
0===a?b(a)&&0===a.length?!0:!1:!0};h.appendContextPath=function(a,f){return(a?a+".":"")+f};return h}(u),t=function(){function m(h,a){var d;a&&a.firstLine&&(d=a.firstLine,h+=" - "+d+":"+a.firstColumn);for(var g=Error.prototype.constructor.call(this,h),c=0;c<k.length;c++)this[k[c]]=g[k[c]];d&&(this.lineNumber=d,this.column=a.firstColumn)}var k="description fileName lineNumber message name number stack".split(" ");m.prototype=Error();return m}(),x=function(m,k){function h(f,e){this.helpers=f||{};this.partials=
e||{};a(this)}function a(a){a.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new c("Missing helper: '"+arguments[arguments.length-1].name+"'");});a.registerHelper("blockHelperMissing",function(f,b){var l=b.inverse,c=b.fn;if(!0===f)return c(this);if(!1===f||null==f)return l(this);if(e(f))return 0<f.length?(b.ids&&(b.ids=[b.name]),a.helpers.each(f,b)):l(this);b.data&&b.ids&&(l=r(b.data),l.contextPath=g.appendContextPath(b.data.contextPath,b.name),b={data:l});return c(f,b)});
a.registerHelper("each",function(a,f){if(!f)throw new c("Must pass iterator to #each");var l=f.fn,p=f.inverse,d=0,n="",k,h;f.data&&f.ids&&(h=g.appendContextPath(f.data.contextPath,f.ids[0])+".");b(a)&&(a=a.call(this));f.data&&(k=r(f.data));if(a&&"object"===typeof a)if(e(a))for(var m=a.length;d<m;d++)k&&(k.index=d,k.first=0===d,k.last=d===a.length-1,h&&(k.contextPath=h+d)),n+=l(a[d],{data:k});else for(m in a)a.hasOwnProperty(m)&&(k&&(k.key=m,k.index=d,k.first=0===d,h&&(k.contextPath=h+m)),n+=l(a[m],
{data:k}),d++);0===d&&(n=p(this));return n});a.registerHelper("if",function(a,f){b(a)&&(a=a.call(this));return!f.hash.includeZero&&!a||g.isEmpty(a)?f.inverse(this):f.fn(this)});a.registerHelper("unless",function(f,b){return a.helpers["if"].call(this,f,{fn:b.inverse,inverse:b.fn,hash:b.hash})});a.registerHelper("with",function(a,f){b(a)&&(a=a.call(this));var e=f.fn;if(g.isEmpty(a))return f.inverse(this);if(f.data&&f.ids){var l=r(f.data);l.contextPath=g.appendContextPath(f.data.contextPath,f.ids[0]);
f={data:l}}return e(a,f)});a.registerHelper("log",function(f,b){var e=b.data&&null!=b.data.level?parseInt(b.data.level,10):1;a.log(e,f)});a.registerHelper("lookup",function(a,f){return a&&a[f]})}var d={},g=m,c=k;d.VERSION="2.0.0";d.COMPILER_REVISION=6;d.REVISION_CHANGES={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1"};var e=g.isArray,b=g.isFunction,n=g.toString;d.HandlebarsEnvironment=h;h.prototype={constructor:h,logger:f,log:l,registerHelper:function(a,
f){if("[object Object]"===n.call(a)){if(f)throw new c("Arg not supported with multiple helpers");g.extend(this.helpers,a)}else this.helpers[a]=f},unregisterHelper:function(a){delete this.helpers[a]},registerPartial:function(a,f){"[object Object]"===n.call(a)?g.extend(this.partials,a):this.partials[a]=f},unregisterPartial:function(a){delete this.partials[a]}};var f={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(a,b){if(f.level<=a){var e=f.methodMap[a];
"undefined"!==typeof console&&console[e]&&console[e].call(console,b)}}};d.logger=f;var l=f.log;d.log=l;var r=function(a){var f=g.extend({},a);f._parent=a;return f};d.createFrame=r;return d}(q,t),w=function(m,k,h){function a(a,e,f,l,r){var c=function(e,c){c=c||{};return f.call(a,e,a.helpers,a.partials,c.data||l,r&&[e].concat(r))};c.program=e;c.depth=r?r.length:0;return c}var d={},g=h.COMPILER_REVISION,c=h.REVISION_CHANGES,e=h.createFrame;d.checkRevision=function(a){var e=a&&a[0]||1;if(e!==g){if(e<
g)throw new k("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+c[g]+") or downgrade your runtime to an older version ("+c[e]+").");throw new k("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").");}};d.template=function(b,c){if(!c)throw new k("No environment passed to template");if(!b||!b.main)throw new k("Unknown template object: "+
typeof b);c.VM.checkRevision(b.compiler);var f={lookup:function(a,f){for(var e=a.length,b=0;b<e;b++)if(a[b]&&null!=a[b][f])return a[b][f]},lambda:function(a,f){return"function"===typeof a?a.call(f):a},escapeExpression:m.escapeExpression,invokePartial:function(a,f,e,l,d,g,h,s,q){d&&(l=m.extend({},l,d));d=c.VM.invokePartial.call(this,a,e,l,g,h,s,q);null==d&&c.compile&&(g={helpers:g,partials:h,data:s,depths:q},h[e]=c.compile(a,{data:void 0!==s,compat:b.compat},c),d=h[e](l,g));if(null!=d){if(f){a=d.split("\n");
e=0;for(l=a.length;e<l&&(a[e]||e+1!==l);e++)a[e]=f+a[e];d=a.join("\n")}return d}throw new k("The partial "+e+" could not be compiled when running in runtime-only mode");},fn:function(a){return b[a]},programs:[],program:function(f,e,b){var l=this.programs[f],c=this.fn(f);e||b?l=a(this,f,c,e,b):l||(l=this.programs[f]=a(this,f,c));return l},data:function(a,f){for(;a&&f--;)a=a._parent;return a},merge:function(a,f){var e=a||f;a&&f&&a!==f&&(e=m.extend({},f,a));return e},noop:c.VM.noop,compilerInfo:b.compiler},
l=function(a,c){c=c||{};var d=c.data;l._setup(c);c.partial||!b.useData||d&&"root"in d||(d=d?e(d):{},d.root=a);var g;b.useDepths&&(g=c.depths?[a].concat(c.depths):[a]);return b.main.call(f,a,f.helpers,f.partials,d,g)};l.isTop=!0;l._setup=function(a){a.partial?(f.helpers=a.helpers,f.partials=a.partials):(f.helpers=f.merge(a.helpers,c.helpers),b.usePartial&&(f.partials=f.merge(a.partials,c.partials)))};l._child=function(e,l,c){if(b.useDepths&&!c)throw new k("must pass parent depths");return a(f,e,b[e],
l,c)};return l};d.program=a;d.invokePartial=function(a,e,f,l,c,d,g){l={partial:!0,helpers:l,partials:c,data:d,depths:g};if(void 0===a)throw new k("The partial "+e+" could not be found");if(a instanceof Function)return a(f,l)};d.noop=function(){return""};return d}(q,t,x),u=function(m,k,h,a,d){var g=function(){var e=new m.HandlebarsEnvironment;a.extend(e,m);e.SafeString=k;e.Exception=h;e.Utils=a;e.escapeExpression=a.escapeExpression;e.VM=d;e.template=function(a){return d.template(a,e)};return e},c=
g();c.create=g;return c["default"]=c}(x,u,t,q,w),w=function(m){function k(a){a=a||{};this.firstLine=a.first_line;this.firstColumn=a.first_column;this.lastColumn=a.last_column;this.lastLine=a.last_line}var h={ProgramNode:function(a,d,g){k.call(this,g);this.type="program";this.statements=a;this.strip=d},MustacheNode:function(a,d,g,c,e){k.call(this,e);this.type="mustache";this.strip=c;null!=g&&g.charAt?(g=g.charAt(3)||g.charAt(2),this.escaped="{"!==g&&"&"!==g):this.escaped=!!g;this.sexpr=a instanceof
h.SexprNode?a:new h.SexprNode(a,d);this.id=this.sexpr.id;this.params=this.sexpr.params;this.hash=this.sexpr.hash;this.eligibleHelper=this.sexpr.eligibleHelper;this.isHelper=this.sexpr.isHelper},SexprNode:function(a,d,g){k.call(this,g);this.type="sexpr";this.hash=d;g=this.id=a[0];this.eligibleHelper=(this.isHelper=!(!(this.params=a.slice(1)).length&&!d))||g.isSimple},PartialNode:function(a,d,g,c,e){k.call(this,e);this.type="partial";this.partialName=a;this.context=d;this.hash=g;this.strip=c;this.strip.inlineStandalone=
!0},BlockNode:function(a,d,g,c,e){k.call(this,e);this.type="block";this.mustache=a;this.program=d;this.inverse=g;this.strip=c;g&&!d&&(this.isInverse=!0)},RawBlockNode:function(a,d,g,c){k.call(this,c);if(a.sexpr.id.original!==g)throw new m(a.sexpr.id.original+" doesn't match "+g,this);d=new h.ContentNode(d,c);this.type="block";this.mustache=a;this.program=new h.ProgramNode([d],{},c)},ContentNode:function(a,d){k.call(this,d);this.type="content";this.original=this.string=a},HashNode:function(a,d){k.call(this,
d);this.type="hash";this.pairs=a},IdNode:function(a,d){k.call(this,d);this.type="ID";for(var g="",c=[],e=0,b="",n=0,f=a.length;n<f;n++){var l=a[n].part,g=g+((a[n].separator||"")+l);if(".."===l||"."===l||"this"===l){if(0<c.length)throw new m("Invalid path: "+g,this);".."===l?(e++,b+="../"):this.isScoped=!0}else c.push(l)}this.original=g;this.parts=c;this.string=c.join(".");this.depth=e;this.idName=b+this.string;this.isSimple=1===a.length&&!this.isScoped&&0===e;this.stringModeValue=this.string},PartialNameNode:function(a,
d){k.call(this,d);this.type="PARTIAL_NAME";this.name=a.original},DataNode:function(a,d){k.call(this,d);this.type="DATA";this.id=a;this.stringModeValue=a.stringModeValue;this.idName="@"+a.stringModeValue},StringNode:function(a,d){k.call(this,d);this.type="STRING";this.original=this.string=this.stringModeValue=a},NumberNode:function(a,d){k.call(this,d);this.type="NUMBER";this.original=this.number=a;this.stringModeValue=Number(a)},BooleanNode:function(a,d){k.call(this,d);this.type="BOOLEAN";this.bool=
a;this.stringModeValue="true"===a},CommentNode:function(a,d){k.call(this,d);this.type="comment";this.comment=a;this.strip={inlineStandalone:!0}}};return h}(t),y=function(){return function(){function m(){this.yy={}}var k={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,CONTENT:12,COMMENT:13,openRawBlock:14,END_RAW_BLOCK:15,OPEN_RAW_BLOCK:16,sexpr:17,CLOSE_RAW_BLOCK:18,openBlock:19,block_option0:20,closeBlock:21,
openInverse:22,block_option1:23,OPEN_BLOCK:24,CLOSE:25,OPEN_INVERSE:26,inverseAndProgram:27,INVERSE:28,OPEN_ENDBLOCK:29,path:30,OPEN:31,OPEN_UNESCAPED:32,CLOSE_UNESCAPED:33,OPEN_PARTIAL:34,partialName:35,param:36,partial_option0:37,partial_option1:38,sexpr_repetition0:39,sexpr_option0:40,dataName:41,STRING:42,NUMBER:43,BOOLEAN:44,OPEN_SEXPR:45,CLOSE_SEXPR:46,hash:47,hash_repetition_plus0:48,hashSegment:49,ID:50,EQUALS:51,DATA:52,pathSegments:53,SEP:54,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",
12:"CONTENT",13:"COMMENT",15:"END_RAW_BLOCK",16:"OPEN_RAW_BLOCK",18:"CLOSE_RAW_BLOCK",24:"OPEN_BLOCK",25:"CLOSE",26:"OPEN_INVERSE",28:"INVERSE",29:"OPEN_ENDBLOCK",31:"OPEN",32:"OPEN_UNESCAPED",33:"CLOSE_UNESCAPED",34:"OPEN_PARTIAL",42:"STRING",43:"NUMBER",44:"BOOLEAN",45:"OPEN_SEXPR",46:"CLOSE_SEXPR",50:"ID",51:"EQUALS",52:"DATA",54:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[10,3],[14,3],[9,4],[9,4],[19,3],[22,3],[27,2],[21,3],[8,3],[8,3],[11,5],[11,4],[17,3],[17,1],[36,
1],[36,1],[36,1],[36,1],[36,1],[36,3],[47,1],[49,3],[35,1],[35,1],[35,1],[41,2],[30,1],[53,3],[53,1],[6,0],[6,2],[20,0],[20,1],[23,0],[23,1],[37,0],[37,1],[38,0],[38,1],[39,0],[39,2],[40,0],[40,1],[48,1],[48,2]],performAction:function(a,d,g,c,e,b,n){a=b.length-1;switch(e){case 1:return c.prepareProgram(b[a-1].statements,!0),b[a-1];case 2:this.$=new c.ProgramNode(c.prepareProgram(b[a]),{},this._$);break;case 3:this.$=b[a];break;case 4:this.$=b[a];break;case 5:this.$=b[a];break;case 6:this.$=b[a];break;
case 7:this.$=new c.ContentNode(b[a],this._$);break;case 8:this.$=new c.CommentNode(b[a],this._$);break;case 9:this.$=new c.RawBlockNode(b[a-2],b[a-1],b[a],this._$);break;case 10:this.$=new c.MustacheNode(b[a-1],null,"","",this._$);break;case 11:this.$=c.prepareBlock(b[a-3],b[a-2],b[a-1],b[a],!1,this._$);break;case 12:this.$=c.prepareBlock(b[a-3],b[a-2],b[a-1],b[a],!0,this._$);break;case 13:this.$=new c.MustacheNode(b[a-1],null,b[a-2],c.stripFlags(b[a-2],b[a]),this._$);break;case 14:this.$=new c.MustacheNode(b[a-
1],null,b[a-2],c.stripFlags(b[a-2],b[a]),this._$);break;case 15:this.$={strip:c.stripFlags(b[a-1],b[a-1]),program:b[a]};break;case 16:this.$={path:b[a-1],strip:c.stripFlags(b[a-2],b[a])};break;case 17:this.$=new c.MustacheNode(b[a-1],null,b[a-2],c.stripFlags(b[a-2],b[a]),this._$);break;case 18:this.$=new c.MustacheNode(b[a-1],null,b[a-2],c.stripFlags(b[a-2],b[a]),this._$);break;case 19:this.$=new c.PartialNode(b[a-3],b[a-2],b[a-1],c.stripFlags(b[a-4],b[a]),this._$);break;case 20:this.$=new c.PartialNode(b[a-
2],void 0,b[a-1],c.stripFlags(b[a-3],b[a]),this._$);break;case 21:this.$=new c.SexprNode([b[a-2]].concat(b[a-1]),b[a],this._$);break;case 22:this.$=new c.SexprNode([b[a]],null,this._$);break;case 23:this.$=b[a];break;case 24:this.$=new c.StringNode(b[a],this._$);break;case 25:this.$=new c.NumberNode(b[a],this._$);break;case 26:this.$=new c.BooleanNode(b[a],this._$);break;case 27:this.$=b[a];break;case 28:b[a-1].isHelper=!0;this.$=b[a-1];break;case 29:this.$=new c.HashNode(b[a],this._$);break;case 30:this.$=
[b[a-2],b[a]];break;case 31:this.$=new c.PartialNameNode(b[a],this._$);break;case 32:this.$=new c.PartialNameNode(new c.StringNode(b[a],this._$),this._$);break;case 33:this.$=new c.PartialNameNode(new c.NumberNode(b[a],this._$));break;case 34:this.$=new c.DataNode(b[a],this._$);break;case 35:this.$=new c.IdNode(b[a],this._$);break;case 36:b[a-2].push({part:b[a],separator:b[a-1]});this.$=b[a-2];break;case 37:this.$=[{part:b[a]}];break;case 38:this.$=[];break;case 39:b[a-1].push(b[a]);break;case 48:this.$=
[];break;case 49:b[a-1].push(b[a]);break;case 52:this.$=[b[a]];break;case 53:b[a-1].push(b[a])}},table:[{3:1,4:2,5:[2,38],6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],31:[2,38],32:[2,38],34:[2,38]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:[1,10],13:[1,11],14:16,16:[1,20],19:14,22:15,24:[1,18],26:[1,19],28:[2,2],29:[2,2],31:[1,12],32:[1,13],34:[1,17]},{1:[2,1]},{5:[2,39],12:[2,39],13:[2,39],16:[2,39],24:[2,39],26:[2,39],28:[2,39],29:[2,39],31:[2,39],32:[2,39],34:[2,39]},{5:[2,3],
12:[2,3],13:[2,3],16:[2,3],24:[2,3],26:[2,3],28:[2,3],29:[2,3],31:[2,3],32:[2,3],34:[2,3]},{5:[2,4],12:[2,4],13:[2,4],16:[2,4],24:[2,4],26:[2,4],28:[2,4],29:[2,4],31:[2,4],32:[2,4],34:[2,4]},{5:[2,5],12:[2,5],13:[2,5],16:[2,5],24:[2,5],26:[2,5],28:[2,5],29:[2,5],31:[2,5],32:[2,5],34:[2,5]},{5:[2,6],12:[2,6],13:[2,6],16:[2,6],24:[2,6],26:[2,6],28:[2,6],29:[2,6],31:[2,6],32:[2,6],34:[2,6]},{5:[2,7],12:[2,7],13:[2,7],16:[2,7],24:[2,7],26:[2,7],28:[2,7],29:[2,7],31:[2,7],32:[2,7],34:[2,7]},{5:[2,8],12:[2,
8],13:[2,8],16:[2,8],24:[2,8],26:[2,8],28:[2,8],29:[2,8],31:[2,8],32:[2,8],34:[2,8]},{17:21,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:27,30:22,41:23,50:[1,26],52:[1,25],53:24},{4:28,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{4:29,6:3,12:[2,38],13:[2,38],16:[2,38],24:[2,38],26:[2,38],28:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{12:[1,30]},{30:32,35:31,42:[1,33],43:[1,34],50:[1,26],53:24},{17:35,30:22,41:23,50:[1,26],52:[1,25],53:24},
{17:36,30:22,41:23,50:[1,26],52:[1,25],53:24},{17:37,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[1,38]},{18:[2,48],25:[2,48],33:[2,48],39:39,42:[2,48],43:[2,48],44:[2,48],45:[2,48],46:[2,48],50:[2,48],52:[2,48]},{18:[2,22],25:[2,22],33:[2,22],46:[2,22]},{18:[2,35],25:[2,35],33:[2,35],42:[2,35],43:[2,35],44:[2,35],45:[2,35],46:[2,35],50:[2,35],52:[2,35],54:[1,40]},{30:41,50:[1,26],53:24},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],52:[2,37],54:[2,37]},
{33:[1,42]},{20:43,27:44,28:[1,45],29:[2,40]},{23:46,27:47,28:[1,45],29:[2,42]},{15:[1,48]},{25:[2,46],30:51,36:49,38:50,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],47:57,48:58,49:60,50:[1,59],52:[1,25],53:24},{25:[2,31],42:[2,31],43:[2,31],44:[2,31],45:[2,31],50:[2,31],52:[2,31]},{25:[2,32],42:[2,32],43:[2,32],44:[2,32],45:[2,32],50:[2,32],52:[2,32]},{25:[2,33],42:[2,33],43:[2,33],44:[2,33],45:[2,33],50:[2,33],52:[2,33]},{25:[1,61]},{25:[1,62]},{18:[1,63]},{5:[2,17],12:[2,17],13:[2,17],16:[2,17],
24:[2,17],26:[2,17],28:[2,17],29:[2,17],31:[2,17],32:[2,17],34:[2,17]},{18:[2,50],25:[2,50],30:51,33:[2,50],36:65,40:64,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],46:[2,50],47:66,48:58,49:60,50:[1,59],52:[1,25],53:24},{50:[1,67]},{18:[2,34],25:[2,34],33:[2,34],42:[2,34],43:[2,34],44:[2,34],45:[2,34],46:[2,34],50:[2,34],52:[2,34]},{5:[2,18],12:[2,18],13:[2,18],16:[2,18],24:[2,18],26:[2,18],28:[2,18],29:[2,18],31:[2,18],32:[2,18],34:[2,18]},{21:68,29:[1,69]},{29:[2,41]},{4:70,6:3,12:[2,38],13:[2,
38],16:[2,38],24:[2,38],26:[2,38],29:[2,38],31:[2,38],32:[2,38],34:[2,38]},{21:71,29:[1,69]},{29:[2,43]},{5:[2,9],12:[2,9],13:[2,9],16:[2,9],24:[2,9],26:[2,9],28:[2,9],29:[2,9],31:[2,9],32:[2,9],34:[2,9]},{25:[2,44],37:72,47:73,48:58,49:60,50:[1,74]},{25:[1,75]},{18:[2,23],25:[2,23],33:[2,23],42:[2,23],43:[2,23],44:[2,23],45:[2,23],46:[2,23],50:[2,23],52:[2,23]},{18:[2,24],25:[2,24],33:[2,24],42:[2,24],43:[2,24],44:[2,24],45:[2,24],46:[2,24],50:[2,24],52:[2,24]},{18:[2,25],25:[2,25],33:[2,25],42:[2,
25],43:[2,25],44:[2,25],45:[2,25],46:[2,25],50:[2,25],52:[2,25]},{18:[2,26],25:[2,26],33:[2,26],42:[2,26],43:[2,26],44:[2,26],45:[2,26],46:[2,26],50:[2,26],52:[2,26]},{18:[2,27],25:[2,27],33:[2,27],42:[2,27],43:[2,27],44:[2,27],45:[2,27],46:[2,27],50:[2,27],52:[2,27]},{17:76,30:22,41:23,50:[1,26],52:[1,25],53:24},{25:[2,47]},{18:[2,29],25:[2,29],33:[2,29],46:[2,29],49:77,50:[1,74]},{18:[2,37],25:[2,37],33:[2,37],42:[2,37],43:[2,37],44:[2,37],45:[2,37],46:[2,37],50:[2,37],51:[1,78],52:[2,37],54:[2,
37]},{18:[2,52],25:[2,52],33:[2,52],46:[2,52],50:[2,52]},{12:[2,13],13:[2,13],16:[2,13],24:[2,13],26:[2,13],28:[2,13],29:[2,13],31:[2,13],32:[2,13],34:[2,13]},{12:[2,14],13:[2,14],16:[2,14],24:[2,14],26:[2,14],28:[2,14],29:[2,14],31:[2,14],32:[2,14],34:[2,14]},{12:[2,10]},{18:[2,21],25:[2,21],33:[2,21],46:[2,21]},{18:[2,49],25:[2,49],33:[2,49],42:[2,49],43:[2,49],44:[2,49],45:[2,49],46:[2,49],50:[2,49],52:[2,49]},{18:[2,51],25:[2,51],33:[2,51],46:[2,51]},{18:[2,36],25:[2,36],33:[2,36],42:[2,36],43:[2,
36],44:[2,36],45:[2,36],46:[2,36],50:[2,36],52:[2,36],54:[2,36]},{5:[2,11],12:[2,11],13:[2,11],16:[2,11],24:[2,11],26:[2,11],28:[2,11],29:[2,11],31:[2,11],32:[2,11],34:[2,11]},{30:79,50:[1,26],53:24},{29:[2,15]},{5:[2,12],12:[2,12],13:[2,12],16:[2,12],24:[2,12],26:[2,12],28:[2,12],29:[2,12],31:[2,12],32:[2,12],34:[2,12]},{25:[1,80]},{25:[2,45]},{51:[1,78]},{5:[2,20],12:[2,20],13:[2,20],16:[2,20],24:[2,20],26:[2,20],28:[2,20],29:[2,20],31:[2,20],32:[2,20],34:[2,20]},{46:[1,81]},{18:[2,53],25:[2,53],
33:[2,53],46:[2,53],50:[2,53]},{30:51,36:82,41:55,42:[1,52],43:[1,53],44:[1,54],45:[1,56],50:[1,26],52:[1,25],53:24},{25:[1,83]},{5:[2,19],12:[2,19],13:[2,19],16:[2,19],24:[2,19],26:[2,19],28:[2,19],29:[2,19],31:[2,19],32:[2,19],34:[2,19]},{18:[2,28],25:[2,28],33:[2,28],42:[2,28],43:[2,28],44:[2,28],45:[2,28],46:[2,28],50:[2,28],52:[2,28]},{18:[2,30],25:[2,30],33:[2,30],46:[2,30],50:[2,30]},{5:[2,16],12:[2,16],13:[2,16],16:[2,16],24:[2,16],26:[2,16],28:[2,16],29:[2,16],31:[2,16],32:[2,16],34:[2,16]}],
defaultActions:{4:[2,1],44:[2,41],47:[2,43],57:[2,47],63:[2,10],70:[2,15],73:[2,45]},parseError:function(a,d){throw Error(a);},parse:function(a){var d=[0],g=[null],c=[],e=this.table,b="",n=0,f=0,l=0;this.lexer.setInput(a);this.lexer.yy=this.yy;this.yy.lexer=this.lexer;this.yy.parser=this;"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});a=this.lexer.yylloc;c.push(a);var r=this.lexer.options&&this.lexer.options.ranges;"function"===typeof this.yy.parseError&&(this.parseError=this.yy.parseError);
for(var p,k,h,m,v={},q,s;;){h=d[d.length-1];if(this.defaultActions[h])m=this.defaultActions[h];else{if(null===p||"undefined"==typeof p)p=void 0,p=this.lexer.lex()||1,"number"!==typeof p&&(p=this.symbols_[p]||p);m=e[h]&&e[h][p]}if("undefined"===typeof m||!m.length||!m[0]){var t="";if(!l){s=[];for(q in e[h])this.terminals_[q]&&2<q&&s.push("'"+this.terminals_[q]+"'");t=this.lexer.showPosition?"Parse error on line "+(n+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+s.join(", ")+", got '"+(this.terminals_[p]||
p)+"'":"Parse error on line "+(n+1)+": Unexpected "+(1==p?"end of input":"'"+(this.terminals_[p]||p)+"'");this.parseError(t,{text:this.lexer.match,token:this.terminals_[p]||p,line:this.lexer.yylineno,loc:a,expected:s})}}if(m[0]instanceof Array&&1<m.length)throw Error("Parse Error: multiple actions possible at state: "+h+", token: "+p);switch(m[0]){case 1:d.push(p);g.push(this.lexer.yytext);c.push(this.lexer.yylloc);d.push(m[1]);p=null;k?(p=k,k=null):(f=this.lexer.yyleng,b=this.lexer.yytext,n=this.lexer.yylineno,
a=this.lexer.yylloc,0<l&&l--);break;case 2:s=this.productions_[m[1]][1];v.$=g[g.length-s];v._$={first_line:c[c.length-(s||1)].first_line,last_line:c[c.length-1].last_line,first_column:c[c.length-(s||1)].first_column,last_column:c[c.length-1].last_column};r&&(v._$.range=[c[c.length-(s||1)].range[0],c[c.length-1].range[1]]);h=this.performAction.call(v,b,f,n,this.yy,m[1],g,c);if("undefined"!==typeof h)return h;s&&(d=d.slice(0,-2*s),g=g.slice(0,-1*s),c=c.slice(0,-1*s));d.push(this.productions_[m[1]][0]);
g.push(v.$);c.push(v._$);m=e[d[d.length-2]][d[d.length-1]];d.push(m);break;case 3:return!0}}}},h=function(){return{EOF:1,parseError:function(a,d){if(this.yy.parser)this.yy.parser.parseError(a,d);else throw Error(a);},setInput:function(a){this._input=a;this._more=this._less=this.done=!1;this.yylineno=this.yyleng=0;this.yytext=this.matched=this.match="";this.conditionStack=["INITIAL"];this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0};this.options.ranges&&(this.yylloc.range=[0,0]);
this.offset=0;return this},input:function(){var a=this._input[0];this.yytext+=a;this.yyleng++;this.offset++;this.match+=a;this.matched+=a;a.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++;this.options.ranges&&this.yylloc.range[1]++;this._input=this._input.slice(1);return a},unput:function(a){var d=a.length,g=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input;this.yytext=this.yytext.substr(0,this.yytext.length-d-1);this.offset-=d;a=this.match.split(/(?:\r\n?|\n)/g);
this.match=this.match.substr(0,this.match.length-1);this.matched=this.matched.substr(0,this.matched.length-1);g.length-1&&(this.yylineno-=g.length-1);var c=this.yylloc.range;this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:g?(g.length===a.length?this.yylloc.first_column:0)+a[a.length-g.length].length-g[0].length:this.yylloc.first_column-d};this.options.ranges&&(this.yylloc.range=[c[0],c[0]+this.yyleng-d]);return this},more:function(){this._more=
!0;return this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(20<a.length?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;20>a.length&&(a+=this._input.substr(0,20-a.length));return(a.substr(0,20)+(20<a.length?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),d=Array(a.length+1).join("-");return a+this.upcomingInput()+"\n"+d+"^"},next:function(){if(this.done)return this.EOF;
this._input||(this.done=!0);var a,d,g;this._more||(this.match=this.yytext="");for(var c=this._currentRules(),e=0;e<c.length&&(!(d=this._input.match(this.rules[c[e]]))||a&&!(d[0].length>a[0].length)||(a=d,g=e,this.options.flex));e++);if(a){if(d=a[0].match(/(?:\r\n?|\n).*/g))this.yylineno+=d.length;this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+
a[0].length};this.yytext+=a[0];this.match+=a[0];this.matches=a;this.yyleng=this.yytext.length;this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]);this._more=!1;this._input=this._input.slice(a[0].length);this.matched+=a[0];a=this.performAction.call(this,this.yy,this,c[g],this.conditionStack[this.conditionStack.length-1]);this.done&&this._input&&(this.done=!1);if(a)return a}else return""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+
this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return"undefined"!==typeof a?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules},topState:function(){return this.conditionStack[this.conditionStack.length-2]},pushState:function(a){this.begin(a)},options:{},performAction:function(a,d,g,c){function e(a,
e){return d.yytext=d.yytext.substr(a,d.yyleng-e)}switch(g){case 0:"\\\\"===d.yytext.slice(-2)?(e(0,1),this.begin("mu")):"\\"===d.yytext.slice(-1)?(e(0,1),this.begin("emu")):this.begin("mu");if(d.yytext)return 12;break;case 1:return 12;case 2:return this.popState(),12;case 3:return d.yytext=d.yytext.substr(5,d.yyleng-9),this.popState(),15;case 4:return 12;case 5:return e(0,4),this.popState(),13;case 6:return 45;case 7:return 46;case 8:return 16;case 9:return this.popState(),this.begin("raw"),18;case 10:return 34;
case 11:return 24;case 12:return 29;case 13:return this.popState(),28;case 14:return this.popState(),28;case 15:return 26;case 16:return 26;case 17:return 32;case 18:return 31;case 19:this.popState();this.begin("com");break;case 20:return e(3,5),this.popState(),13;case 21:return 31;case 22:return 51;case 23:return 50;case 24:return 50;case 25:return 54;case 27:return this.popState(),33;case 28:return this.popState(),25;case 29:return d.yytext=e(1,2).replace(/\\"/g,'"'),42;case 30:return d.yytext=
e(1,2).replace(/\\'/g,"'"),42;case 31:return 52;case 32:return 44;case 33:return 44;case 34:return 43;case 35:return 50;case 36:return d.yytext=e(1,2),50;case 37:return"INVALID";case 38:return 5}},rules:[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,
/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,
/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/],conditions:{mu:{rules:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[5],inclusive:!1},raw:{rules:[3,4],inclusive:!1},INITIAL:{rules:[0,1,38],inclusive:!0}}}}();k.lexer=h;m.prototype=k;k.Parser=m;return new m}()}(),z=function(m){function k(a,c,e){void 0===c&&(c=a.length);var b=a[c-1];a=a[c-2];if(!b)return e;if("content"===b.type)return(a||!e?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(b.original)}
function h(a,c,e){void 0===c&&(c=-1);var b=a[c+1];a=a[c+2];if(!b)return e;if("content"===b.type)return(a||!e?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(b.original)}function a(a,c,e){!(a=a[null==c?0:c+1])||"content"!==a.type||!e&&a.rightStripped||(c=a.string,a.string=a.string.replace(e?/^\s+/:/^[ \t]*\r?\n?/,""),a.rightStripped=a.string!==c)}function d(a,c,e){if((a=a[null==c?a.length-1:c-1])&&"content"===a.type&&(e||!a.leftStripped))return c=a.string,a.string=a.string.replace(e?/\s+$/:/[ \t]+$/,""),a.leftStripped=
a.string!==c,a.leftStripped}return{stripFlags:function(a,c){return{left:"~"===a.charAt(2),right:"~"===c.charAt(c.length-3)}},prepareBlock:function(g,c,e,b,n,f){if(g.sexpr.id.original!==b.path.original)throw new m(g.sexpr.id.original+" doesn't match "+b.path.original,g);var l=e&&e.program,r={left:g.strip.left,right:b.strip.right,openStandalone:h(c.statements),closeStandalone:k((l||c).statements)};g.strip.right&&a(c.statements,null,!0);l?(e=e.strip,e.left&&d(c.statements,null,!0),e.right&&a(l.statements,
null,!0),b.strip.left&&d(l.statements,null,!0),k(c.statements)&&h(l.statements)&&(d(c.statements),a(l.statements))):b.strip.left&&d(c.statements,null,!0);return n?new this.BlockNode(g,l,c,r,f):new this.BlockNode(g,c,l,r,f)},prepareProgram:function(g,c){for(var e=0,b=g.length;e<b;e++){var n=g[e],f=n.strip;if(f){var l=k(g,e,c,"partial"===n.type),r=h(g,e,c),p=f.openStandalone&&l,m=f.closeStandalone&&r,l=f.inlineStandalone&&l&&r;f.right&&a(g,e,!0);f.left&&d(g,e,!0);l&&(a(g,e),d(g,e)&&"partial"===n.type&&
(n.indent=/([ \t]+$)/.exec(g[e-1].original)?RegExp.$1:""));p&&(a((n.program||n.inverse).statements),d(g,e));m&&(a(g,e),d((n.inverse||n.program).statements))}}return g}}}(t),y=function(m,k,h,a){var d={};a=a.extend;d.parser=m;var g={};a(g,h,k);d.parse=function(a){if(a.constructor===k.ProgramNode)return a;m.yy=g;return m.parse(a)};return d}(y,w,z,q),q=function(m,k){function h(){}function a(e,b){if(e===b)return!0;if(g(e)&&g(b)&&e.length===b.length){for(var c=0;c<e.length;c++)if(!a(e[c],b[c]))return!1;
return!0}}var d={},g=k.isArray,c=[].slice;d.Compiler=h;h.prototype={compiler:h,equals:function(e){var b=this.opcodes.length;if(e.opcodes.length!==b)return!1;for(var c=0;c<b;c++){var f=this.opcodes[c],l=e.opcodes[c];if(f.opcode!==l.opcode||!a(f.args,l.args))return!1}b=this.children.length;for(c=0;c<b;c++)if(!this.children[c].equals(e.children[c]))return!1;return!0},guid:0,compile:function(a,b){this.opcodes=[];this.children=[];this.depths={list:[]};this.options=b;this.stringParams=b.stringParams;this.trackIds=
b.trackIds;var c=this.options.knownHelpers;this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0,lookup:!0};if(c)for(var f in c)this.options.knownHelpers[f]=c[f];return this.accept(a)},accept:function(a){return this[a.type](a)},program:function(a){a=a.statements;for(var b=0,c=a.length;b<c;b++)this.accept(a[b]);this.isSimple=1===c;this.depths.list=this.depths.list.sort(function(a,e){return a-e});return this},compileProgram:function(a){a=(new this.compiler).compile(a,
this.options);var b=this.guid++,c;this.usePartial=this.usePartial||a.usePartial;this.children[b]=a;for(var f=0,l=a.depths.list.length;f<l;f++)c=a.depths.list[f],2>c||this.addDepth(c-1);return b},block:function(a){var b=a.mustache,c=a.program;a=a.inverse;c&&(c=this.compileProgram(c));a&&(a=this.compileProgram(a));var b=b.sexpr,f=this.classifySexpr(b);"helper"===f?this.helperSexpr(b,c,a):"simple"===f?(this.simpleSexpr(b),this.opcode("pushProgram",c),this.opcode("pushProgram",a),this.opcode("emptyHash"),
this.opcode("blockValue",b.id.original)):(this.ambiguousSexpr(b,c,a),this.opcode("pushProgram",c),this.opcode("pushProgram",a),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue"));this.opcode("append")},hash:function(a){a=a.pairs;var b,c;this.opcode("pushHash");b=0;for(c=a.length;b<c;b++)this.pushParam(a[b][1]);for(;b--;)this.opcode("assignToHash",a[b][0]);this.opcode("popHash")},partial:function(a){var b=a.partialName;this.usePartial=!0;a.hash?this.accept(a.hash):this.opcode("push","undefined");
a.context?this.accept(a.context):(this.opcode("getContext",0),this.opcode("pushContext"));this.opcode("invokePartial",b.name,a.indent||"");this.opcode("append")},content:function(a){a.string&&this.opcode("appendContent",a.string)},mustache:function(a){this.sexpr(a.sexpr);a.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")},ambiguousSexpr:function(a,b,c){a=a.id;var f=a.parts[0],l=null!=b||null!=c;this.opcode("getContext",a.depth);this.opcode("pushProgram",b);this.opcode("pushProgram",
c);this.ID(a);this.opcode("invokeAmbiguous",f,l)},simpleSexpr:function(a){a=a.id;"DATA"===a.type?this.DATA(a):a.parts.length?this.ID(a):(this.addDepth(a.depth),this.opcode("getContext",a.depth),this.opcode("pushContext"));this.opcode("resolvePossibleLambda")},helperSexpr:function(a,b,c){b=this.setupFullMustacheParams(a,b,c);c=a.id;var f=c.parts[0];if(this.options.knownHelpers[f])this.opcode("invokeKnownHelper",b.length,f);else{if(this.options.knownHelpersOnly)throw new m("You specified knownHelpersOnly, but used the unknown helper "+
f,a);c.falsy=!0;this.ID(c);this.opcode("invokeHelper",b.length,c.original,c.isSimple)}},sexpr:function(a){var b=this.classifySexpr(a);"simple"===b?this.simpleSexpr(a):"helper"===b?this.helperSexpr(a):this.ambiguousSexpr(a)},ID:function(a){this.addDepth(a.depth);this.opcode("getContext",a.depth);a.parts[0]?this.opcode("lookupOnContext",a.parts,a.falsy,a.isScoped):this.opcode("pushContext")},DATA:function(a){this.options.data=!0;this.opcode("lookupData",a.id.depth,a.id.parts)},STRING:function(a){this.opcode("pushString",
a.string)},NUMBER:function(a){this.opcode("pushLiteral",a.number)},BOOLEAN:function(a){this.opcode("pushLiteral",a.bool)},comment:function(){},opcode:function(a){this.opcodes.push({opcode:a,args:c.call(arguments,1)})},addDepth:function(a){0===a||this.depths[a]||(this.depths[a]=!0,this.depths.list.push(a))},classifySexpr:function(a){var b=a.isHelper,c=a.eligibleHelper,f=this.options;c&&!b&&(f.knownHelpers[a.id.parts[0]]?b=!0:f.knownHelpersOnly&&(c=!1));return b?"helper":c?"ambiguous":"simple"},pushParams:function(a){for(var b=
0,c=a.length;b<c;b++)this.pushParam(a[b])},pushParam:function(a){this.stringParams?(a.depth&&this.addDepth(a.depth),this.opcode("getContext",a.depth||0),this.opcode("pushStringParam",a.stringModeValue,a.type),"sexpr"===a.type&&this.sexpr(a)):(this.trackIds&&this.opcode("pushId",a.type,a.idName||a.stringModeValue),this.accept(a))},setupFullMustacheParams:function(a,b,c){var f=a.params;this.pushParams(f);this.opcode("pushProgram",b);this.opcode("pushProgram",c);a.hash?this.hash(a.hash):this.opcode("emptyHash");
return f}};d.precompile=function(a,b,c){if(null==a||"string"!==typeof a&&a.constructor!==c.AST.ProgramNode)throw new m("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+a);b=b||{};"data"in b||(b.data=!0);b.compat&&(b.useDepths=!0);a=c.parse(a);a=(new c.Compiler).compile(a,b);return(new c.JavaScriptCompiler).compile(a,b)};d.compile=function(a,b,c){function f(){var f=c.parse(a),f=(new c.Compiler).compile(f,b),f=(new c.JavaScriptCompiler).compile(f,b,void 0,!0);return c.template(f)}
if(null==a||"string"!==typeof a&&a.constructor!==c.AST.ProgramNode)throw new m("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+a);b=b||{};"data"in b||(b.data=!0);b.compat&&(b.useDepths=!0);var l,d=function(a,c){l||(l=f());return l.call(this,a,c)};d._setup=function(a){l||(l=f());return l._setup(a)};d._child=function(a,c,b){l||(l=f());return l._child(a,c,b)};return d};return d}(t,q),t=function(m,k){function h(a){this.value=a}function a(){}var d=m.COMPILER_REVISION,g=m.REVISION_CHANGES;
a.prototype={nameLookup:function(f,c){return a.isValidJavaScriptVariableName(c)?f+"."+c:f+"['"+c+"']"},depthedLookup:function(a){this.aliases.lookup="this.lookup";return'lookup(depths, "'+a+'")'},compilerInfo:function(){return[d,g[d]]},appendToBuffer:function(a){return this.environment.isSimple?"return "+a+";":{appendToBuffer:!0,content:a,toString:function(){return"buffer += "+a+";"}}},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(a,c,b,d){this.environment=
a;this.options=c;this.stringParams=this.options.stringParams;this.trackIds=this.options.trackIds;this.precompile=!d;this.name=this.environment.name;this.isChild=!!b;this.context=b||{programs:[],environments:[]};this.preamble();this.stackSlot=0;this.stackVars=[];this.aliases={};this.registers={list:[]};this.hashes=[];this.compileStack=[];this.inlineStack=[];this.compileChildren(a,c);this.useDepths=this.useDepths||a.depths.list.length||this.options.compat;b=a.opcodes;var e;a=0;for(c=b.length;a<c;a++)e=
b[a],this[e.opcode].apply(this,e.args);this.pushSource("");if(this.stackSlot||this.inlineStack.length||this.compileStack.length)throw new k("Compile completed with content left on stack");a=this.createFunctionContext(d);if(this.isChild)return a;b={compiler:this.compilerInfo(),main:a};e=this.context.programs;a=0;for(c=e.length;a<c;a++)e[a]&&(b[a]=e[a]);this.environment.usePartial&&(b.usePartial=!0);this.options.data&&(b.useData=!0);this.useDepths&&(b.useDepths=!0);this.options.compat&&(b.compat=!0);
d||(b.compiler=JSON.stringify(b.compiler),b=this.objectLiteral(b));return b},preamble:function(){this.lastContext=0;this.source=[]},createFunctionContext:function(a){var b="",c=this.stackVars.concat(this.registers.list);0<c.length&&(b+=", "+c.join(", "));for(var d in this.aliases)this.aliases.hasOwnProperty(d)&&(b+=", "+d+"="+this.aliases[d]);c=["depth0","helpers","partials","data"];this.useDepths&&c.push("depths");b=this.mergeSource(b);return a?(c.push(b),Function.apply(this,c)):"function("+c.join(",")+
") {\n  "+b+"}"},mergeSource:function(a){for(var b="",c,d=!this.forceBuffer,e,g=0,h=this.source.length;g<h;g++){var k=this.source[g];k.appendToBuffer?c=c?c+"\n    + "+k.content:k.content:(c&&(b?b+="buffer += "+c+";\n  ":(e=!0,b=c+";\n  "),c=void 0),b+=k+"\n  ",this.environment.isSimple||(d=!1))}if(d){if(c||!b)b+="return "+(c||'""')+";\n"}else a+=", buffer = "+(e?"":this.initializeBuffer()),b=c?b+("return buffer + "+c+";\n"):b+"return buffer;\n";a&&(b="var "+a.substring(2)+(e?"":";\n  ")+b);return b},
blockValue:function(a){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var b=[this.contextName(0)];this.setupParams(a,0,b);a=this.popStack();b.splice(1,0,a);this.push("blockHelperMissing.call("+b.join(", ")+")")},ambiguousBlockValue:function(){this.aliases.blockHelperMissing="helpers.blockHelperMissing";var a=[this.contextName(0)];this.setupParams("",0,a,!0);this.flushInline();var b=this.topStack();a.splice(1,0,b);this.pushSource("if (!"+this.lastHelper+") { "+b+" = blockHelperMissing.call("+
a.join(", ")+"); }")},appendContent:function(a){this.pendingContent&&(a=this.pendingContent+a);this.pendingContent=a},append:function(){this.flushInline();var a=this.popStack();this.pushSource("if ("+a+" != null) { "+this.appendToBuffer(a)+" }");this.environment.isSimple&&this.pushSource("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){this.aliases.escapeExpression="this.escapeExpression";this.pushSource(this.appendToBuffer("escapeExpression("+this.popStack()+")"))},getContext:function(a){this.lastContext=
a},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))},lookupOnContext:function(a,b,c){var d=0,e=a.length;for(c||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(a[d++]));d<e;d++)this.replaceStack(function(c){var e=this.nameLookup(c,a[d],"context");return b?" && "+e:" != null ? "+e+" : "+c})},lookupData:function(a,b){a?this.pushStackLiteral("this.data(data, "+a+")"):this.pushStackLiteral("data");for(var c=b.length,d=0;d<c;d++)this.replaceStack(function(a){return" && "+
this.nameLookup(a,b[d],"data")})},resolvePossibleLambda:function(){this.aliases.lambda="this.lambda";this.push("lambda("+this.popStack()+", "+this.contextName(0)+")")},pushStringParam:function(a,b){this.pushContext();this.pushString(b);"sexpr"!==b&&("string"===typeof a?this.pushString(a):this.pushStackLiteral(a))},emptyHash:function(){this.pushStackLiteral("{}");this.trackIds&&this.push("{}");this.stringParams&&(this.push("{}"),this.push("{}"))},pushHash:function(){this.hash&&this.hashes.push(this.hash);
this.hash={values:[],types:[],contexts:[],ids:[]}},popHash:function(){var a=this.hash;this.hash=this.hashes.pop();this.trackIds&&this.push("{"+a.ids.join(",")+"}");this.stringParams&&(this.push("{"+a.contexts.join(",")+"}"),this.push("{"+a.types.join(",")+"}"));this.push("{\n    "+a.values.join(",\n    ")+"\n  }")},pushString:function(a){this.pushStackLiteral(this.quotedString(a))},push:function(a){this.inlineStack.push(a);return a},pushLiteral:function(a){this.pushStackLiteral(a)},pushProgram:function(a){null!=
a?this.pushStackLiteral(this.programExpression(a)):this.pushStackLiteral(null)},invokeHelper:function(a,b,c){this.aliases.helperMissing="helpers.helperMissing";var d=this.popStack();a=this.setupHelper(a,b);this.push("(("+((c?a.name+" || ":"")+d+" || helperMissing")+").call("+a.callParams+"))")},invokeKnownHelper:function(a,b){var c=this.setupHelper(a,b);this.push(c.name+".call("+c.callParams+")")},invokeAmbiguous:function(a,b){this.aliases.functionType='"function"';this.aliases.helperMissing="helpers.helperMissing";
this.useRegister("helper");var c=this.popStack();this.emptyHash();var d=this.setupHelper(0,a,b),e=this.lastHelper=this.nameLookup("helpers",a,"helper");this.push("((helper = (helper = "+e+" || "+c+") != null ? helper : helperMissing"+(d.paramsInit?"),("+d.paramsInit:"")+"),(typeof helper === functionType ? helper.call("+d.callParams+") : helper))")},invokePartial:function(a,b){var c=[this.nameLookup("partials",a,"partial"),"'"+b+"'","'"+a+"'",this.popStack(),this.popStack(),"helpers","partials"];
this.options.data?c.push("data"):this.options.compat&&c.push("undefined");this.options.compat&&c.push("depths");this.push("this.invokePartial("+c.join(", ")+")")},assignToHash:function(a){var b=this.popStack(),c,d,e;this.trackIds&&(e=this.popStack());this.stringParams&&(d=this.popStack(),c=this.popStack());var g=this.hash;c&&g.contexts.push("'"+a+"': "+c);d&&g.types.push("'"+a+"': "+d);e&&g.ids.push("'"+a+"': "+e);g.values.push("'"+a+"': ("+b+")")},pushId:function(a,b){"ID"===a||"DATA"===a?this.pushString(b):
"sexpr"===a?this.pushStackLiteral("true"):this.pushStackLiteral("null")},compiler:a,compileChildren:function(a,b){for(var c=a.children,d,e,g=0,k=c.length;g<k;g++){d=c[g];e=new this.compiler;var h=this.matchExistingProgram(d);null==h?(this.context.programs.push(""),h=this.context.programs.length,d.index=h,d.name="program"+h,this.context.programs[h]=e.compile(d,b,this.context,!this.precompile),this.context.environments[h]=d,this.useDepths=this.useDepths||e.useDepths):(d.index=h,d.name="program"+h)}},
matchExistingProgram:function(a){for(var b=0,c=this.context.environments.length;b<c;b++){var d=this.context.environments[b];if(d&&d.equals(a))return b}},programExpression:function(a){a=[this.environment.children[a].index,"data"];this.useDepths&&a.push("depths");return"this.program("+a.join(", ")+")"},useRegister:function(a){this.registers[a]||(this.registers[a]=!0,this.registers.list.push(a))},pushStackLiteral:function(a){return this.push(new h(a))},pushSource:function(a){this.pendingContent&&(this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),
this.pendingContent=void 0);a&&this.source.push(a)},pushStack:function(a){this.flushInline();var b=this.incrStack();this.pushSource(b+" = "+a+";");this.compileStack.push(b);return b},replaceStack:function(a){var b="";this.isInline();var c,d,e;if(!this.isInline())throw new k("replaceStack on non-inline");b=this.popStack(!0);b instanceof h?(b=c=b.value,e=!0):(c=(d=!this.stackSlot)?this.incrStack():this.topStackName(),b="("+this.push(c)+" = "+b+")",c=this.topStack());a=a.call(this,c);e||this.popStack();
d&&this.stackSlot--;this.push("("+b+a+")")},incrStack:function(){this.stackSlot++;this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot);return this.topStackName()},topStackName:function(){return"stack"+this.stackSlot},flushInline:function(){var a=this.inlineStack;if(a.length){this.inlineStack=[];for(var b=0,c=a.length;b<c;b++){var d=a[b];d instanceof h?this.compileStack.push(d):this.pushStack(d)}}},isInline:function(){return this.inlineStack.length},popStack:function(a){var b=
this.isInline(),c=(b?this.inlineStack:this.compileStack).pop();if(!a&&c instanceof h)return c.value;if(!b){if(!this.stackSlot)throw new k("Invalid stack pop");this.stackSlot--}return c},topStack:function(){var a=this.isInline()?this.inlineStack:this.compileStack,a=a[a.length-1];return a instanceof h?a.value:a},contextName:function(a){return this.useDepths&&a?"depths["+a+"]":"depth"+a},quotedString:function(a){return'"'+a.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,
"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'},objectLiteral:function(a){var b=[],c;for(c in a)a.hasOwnProperty(c)&&b.push(this.quotedString(c)+":"+a[c]);return"{"+b.join(",")+"}"},setupHelper:function(a,b,c){var d=[];a=this.setupParams(b,a,d,c);b=this.nameLookup("helpers",b,"helper");return{params:d,paramsInit:a,name:b,callParams:[this.contextName(0)].concat(d).join(", ")}},setupOptions:function(a,b,c){var d={},e=[],g=[],h=[],k;d.name=this.quotedString(a);d.hash=this.popStack();
this.trackIds&&(d.hashIds=this.popStack());this.stringParams&&(d.hashTypes=this.popStack(),d.hashContexts=this.popStack());a=this.popStack();if((k=this.popStack())||a)k||(k="this.noop"),a||(a="this.noop"),d.fn=k,d.inverse=a;for(a=b;a--;)b=this.popStack(),c[a]=b,this.trackIds&&(h[a]=this.popStack()),this.stringParams&&(g[a]=this.popStack(),e[a]=this.popStack());this.trackIds&&(d.ids="["+h.join(",")+"]");this.stringParams&&(d.types="["+g.join(",")+"]",d.contexts="["+e.join(",")+"]");this.options.data&&
(d.data="data");return d},setupParams:function(a,b,c,d){a=this.objectLiteral(this.setupOptions(a,b,c));if(d)return this.useRegister("options"),c.push("options"),"options="+a;c.push(a);return""}};for(var c="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "),
e=a.RESERVED_WORDS={},b=0,n=c.length;b<n;b++)e[c[b]]=!0;a.isValidJavaScriptVariableName=function(b){return!a.RESERVED_WORDS[b]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(b)};return a}(x,t);return function(m,k,h,a,d){var g=h.parser,c=h.parse,e=a.Compiler,b=a.compile,n=a.precompile,f=m.create;h=function(){var a=f();a.compile=function(c,d){return b(c,d,a)};a.precompile=function(b,c){return n(b,c,a)};a.AST=k;a.Compiler=e;a.JavaScriptCompiler=d;a.Parser=g;a.parse=c;return a};m=h();m.create=h;return m["default"]=
m}(u,w,y,q,t)});
/* ============================================================
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/danro/jquery-easing/master/LICENSE
 * ======================================================== */

jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	// t: current time, b: begInnIng value, c: change In value, d: duration
	
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.11
 *
 * Requires: jQuery 1.2.2+
 */

(function (factory) {
    if ( typeof define === 'function' && define.amd ) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice  = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ( $.event.fixHooks ) {
        for ( var i = toFix.length; i; ) {
            $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.11',

        setup: function() {
            if ( this.addEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.addEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if ( this.removeEventListener ) {
                for ( var i = toBind.length; i; ) {
                    this.removeEventListener( toBind[--i], handler, false );
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $parent = $(elem)['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10);
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true  // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent   = event || window.event,
            args       = slice.call(arguments, 1),
            delta      = 0,
            deltaX     = 0,
            deltaY     = 0,
            absDelta   = 0,
            offsetX    = 0,
            offsetY    = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
        if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
        if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
        if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ( 'deltaY' in orgEvent ) {
            deltaY = orgEvent.deltaY * -1;
            delta  = deltaY;
        }
        if ( 'deltaX' in orgEvent ) {
            deltaX = orgEvent.deltaX;
            if ( deltaY === 0 ) { delta  = deltaX * -1; }
        }

        // No change actually happened, no reason to go any further
        if ( deltaY === 0 && deltaX === 0 ) { return; }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if ( orgEvent.deltaMode === 1 ) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta  *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if ( orgEvent.deltaMode === 2 ) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta  *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

        if ( !lowestDelta || absDelta < lowestDelta ) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
            // Divide all the things by 40!
            delta  /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
        deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
        deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));
/*! jquery.pagevisibility v0.2.2 | (c) 2013 Daniel Herman | opensource.org/licenses/MIT */
(function (factory) {
    if ( typeof define === "function" && define.amd ) {
        // AMD. Register as an anonymous module.
        define([ "jquery" ], factory );
    } else {
        // Browser globals
        factory( jQuery );
    }
}(function( $ ) {
    "use strict";

    var prefix, prefixes, polyfillHidden, visibilityState, supportsVisibilityApi, hiddenProperty, defineProp, document;

    document = window.document;
    defineProp = Object.defineProperty || $.noop;
    supportsVisibilityApi = false;
    prefixes = [ "ms", "moz", "webkit", "" ];

    while( prefixes.length ) {
        prefix = prefixes.pop();
        hiddenProperty = prefix ? prefix + "Hidden" : "hidden";

        if ( hiddenProperty in document ) {
            supportsVisibilityApi = true;
            break;
        }
    }

    if ( !supportsVisibilityApi ) {
        // Add a good enough unprefixed polyfill for browsers that don't support the visibility API
        // and set the initial values.
        polyfillHidden = document.hidden = false;
        visibilityState = document.visibilityState = "visible";

        // Support: Android < 4
        // http://bugs.jquery.com/ticket/13494
        // http://caniuse.com/#feat=pagevisibility
        try {
            defineProp( document, "hidden", {
                get: function() {
                    return polyfillHidden;
                }
            });

            defineProp( document, "visibilityState", {
                get: function() {
                    return visibilityState;
                }
            });
        }
        catch ( e ) {}

        $( window ).bind( "focus blur", function( e ) {
            var shouldBeHidden = e.type === "blur";

            if ( polyfillHidden !== shouldBeHidden ) {

                // In browsers that support Object.defineProperty,
                // setting the two properties on document is essentially a no-op.
                // In other older browsers, this is how we'll keep the properties in sync,
                // although it's more prone to tampering than with Object.defineProperty.
                document.hidden = polyfillHidden = shouldBeHidden;
                document.visibilityState = visibilityState = shouldBeHidden ? "hidden" : "visible";

                $( document ).trigger( "visibilitychange" );
            }
        });
    }
    else if ( prefix ) {
        // If we're dealing with a prefixed version of the API, then
        // normalize it so that we can use the same API across browsers.
        $.event.special.visibilitychange = {
            bindType: prefix + "visibilitychange"
        };

        defineProp( document, "hidden", {
            get: function() {
                return document[ hiddenProperty ];
            }
        });

        defineProp( document, "visibilityState", {
            get: function() {
                return document[ prefix + "VisibilityState" ];
            }
        });
    }
}));
/*!
 * VERSION: beta 1.9.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.Back",["easing.Ease"],function(t){var e,i,s,r=_gsScope.GreenSockGlobals||_gsScope,n=r.com.greensock,a=2*Math.PI,o=Math.PI/2,h=n._class,l=function(e,i){var s=h("easing."+e,function(){},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,s},_=t.register||function(){},u=function(t,e,i,s){var r=h("easing."+t,{easeOut:new e,easeIn:new i,easeInOut:new s},!0);return _(r,t),r},c=function(t,e,i){this.t=t,this.v=e,i&&(this.next=i,i.prev=this,this.c=i.v-e,this.gap=i.t-t)},p=function(e,i){var s=h("easing."+e,function(t){this._p1=t||0===t?t:1.70158,this._p2=1.525*this._p1},!0),r=s.prototype=new t;return r.constructor=s,r.getRatio=i,r.config=function(t){return new s(t)},s},f=u("Back",p("BackOut",function(t){return(t-=1)*t*((this._p1+1)*t+this._p1)+1}),p("BackIn",function(t){return t*t*((this._p1+1)*t-this._p1)}),p("BackInOut",function(t){return 1>(t*=2)?.5*t*t*((this._p2+1)*t-this._p2):.5*((t-=2)*t*((this._p2+1)*t+this._p2)+2)})),m=h("easing.SlowMo",function(t,e,i){e=e||0===e?e:.7,null==t?t=.7:t>1&&(t=1),this._p=1!==t?e:0,this._p1=(1-t)/2,this._p2=t,this._p3=this._p1+this._p2,this._calcEnd=i===!0},!0),d=m.prototype=new t;return d.constructor=m,d.getRatio=function(t){var e=t+(.5-t)*this._p;return this._p1>t?this._calcEnd?1-(t=1-t/this._p1)*t:e-(t=1-t/this._p1)*t*t*t*e:t>this._p3?this._calcEnd?1-(t=(t-this._p3)/this._p1)*t:e+(t-e)*(t=(t-this._p3)/this._p1)*t*t*t:this._calcEnd?1:e},m.ease=new m(.7,.7),d.config=m.config=function(t,e,i){return new m(t,e,i)},e=h("easing.SteppedEase",function(t){t=t||1,this._p1=1/t,this._p2=t+1},!0),d=e.prototype=new t,d.constructor=e,d.getRatio=function(t){return 0>t?t=0:t>=1&&(t=.999999999),(this._p2*t>>0)*this._p1},d.config=e.config=function(t){return new e(t)},i=h("easing.RoughEase",function(e){e=e||{};for(var i,s,r,n,a,o,h=e.taper||"none",l=[],_=0,u=0|(e.points||20),p=u,f=e.randomize!==!1,m=e.clamp===!0,d=e.template instanceof t?e.template:null,g="number"==typeof e.strength?.4*e.strength:.4;--p>-1;)i=f?Math.random():1/u*p,s=d?d.getRatio(i):i,"none"===h?r=g:"out"===h?(n=1-i,r=n*n*g):"in"===h?r=i*i*g:.5>i?(n=2*i,r=.5*n*n*g):(n=2*(1-i),r=.5*n*n*g),f?s+=Math.random()*r-.5*r:p%2?s+=.5*r:s-=.5*r,m&&(s>1?s=1:0>s&&(s=0)),l[_++]={x:i,y:s};for(l.sort(function(t,e){return t.x-e.x}),o=new c(1,1,null),p=u;--p>-1;)a=l[p],o=new c(a.x,a.y,o);this._prev=new c(0,0,0!==o.t?o:o.next)},!0),d=i.prototype=new t,d.constructor=i,d.getRatio=function(t){var e=this._prev;if(t>e.t){for(;e.next&&t>=e.t;)e=e.next;e=e.prev}else for(;e.prev&&e.t>=t;)e=e.prev;return this._prev=e,e.v+(t-e.t)/e.gap*e.c},d.config=function(t){return new i(t)},i.ease=new i,u("Bounce",l("BounceOut",function(t){return 1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}),l("BounceIn",function(t){return 1/2.75>(t=1-t)?1-7.5625*t*t:2/2.75>t?1-(7.5625*(t-=1.5/2.75)*t+.75):2.5/2.75>t?1-(7.5625*(t-=2.25/2.75)*t+.9375):1-(7.5625*(t-=2.625/2.75)*t+.984375)}),l("BounceInOut",function(t){var e=.5>t;return t=e?1-2*t:2*t-1,t=1/2.75>t?7.5625*t*t:2/2.75>t?7.5625*(t-=1.5/2.75)*t+.75:2.5/2.75>t?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375,e?.5*(1-t):.5*t+.5})),u("Circ",l("CircOut",function(t){return Math.sqrt(1-(t-=1)*t)}),l("CircIn",function(t){return-(Math.sqrt(1-t*t)-1)}),l("CircInOut",function(t){return 1>(t*=2)?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)})),s=function(e,i,s){var r=h("easing."+e,function(t,e){this._p1=t||1,this._p2=e||s,this._p3=this._p2/a*(Math.asin(1/this._p1)||0)},!0),n=r.prototype=new t;return n.constructor=r,n.getRatio=i,n.config=function(t,e){return new r(t,e)},r},u("Elastic",s("ElasticOut",function(t){return this._p1*Math.pow(2,-10*t)*Math.sin((t-this._p3)*a/this._p2)+1},.3),s("ElasticIn",function(t){return-(this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2))},.3),s("ElasticInOut",function(t){return 1>(t*=2)?-.5*this._p1*Math.pow(2,10*(t-=1))*Math.sin((t-this._p3)*a/this._p2):.5*this._p1*Math.pow(2,-10*(t-=1))*Math.sin((t-this._p3)*a/this._p2)+1},.45)),u("Expo",l("ExpoOut",function(t){return 1-Math.pow(2,-10*t)}),l("ExpoIn",function(t){return Math.pow(2,10*(t-1))-.001}),l("ExpoInOut",function(t){return 1>(t*=2)?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*(t-1)))})),u("Sine",l("SineOut",function(t){return Math.sin(t*o)}),l("SineIn",function(t){return-Math.cos(t*o)+1}),l("SineInOut",function(t){return-.5*(Math.cos(Math.PI*t)-1)})),h("easing.EaseLookup",{find:function(e){return t.map[e]}},!0),_(r.SlowMo,"SlowMo","ease,"),_(i,"RoughEase","ease,"),_(e,"SteppedEase","ease,"),f},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();
/*!
 * VERSION: 1.14.2
 * DATE: 2014-10-28
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
(function(t,e){"use strict";var i=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!i.TweenLite){var s,r,n,a,o,l=function(t){var e,s=t.split("."),r=i;for(e=0;s.length>e;e++)r[s[e]]=r=r[s[e]]||{};return r},h=l("com.greensock"),_=1e-10,u=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},m=function(){},f=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),c={},p=function(s,r,n,a){this.sc=c[s]?c[s].sc:[],c[s]=this,this.gsClass=null,this.func=n;var o=[];this.check=function(h){for(var _,u,m,f,d=r.length,v=d;--d>-1;)(_=c[r[d]]||new p(r[d],[])).gsClass?(o[d]=_.gsClass,v--):h&&_.sc.push(this);if(0===v&&n)for(u=("com.greensock."+s).split("."),m=u.pop(),f=l(u.join("."))[m]=this.gsClass=n.apply(n,o),a&&(i[m]=f,"function"==typeof define&&define.amd?define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+s.split(".").pop(),[],function(){return f}):s===e&&"undefined"!=typeof module&&module.exports&&(module.exports=f)),d=0;this.sc.length>d;d++)this.sc[d].check()},this.check(!0)},d=t._gsDefine=function(t,e,i,s){return new p(t,e,i,s)},v=h._class=function(t,e,i){return e=e||function(){},d(t,[],function(){return e},i),e};d.globals=i;var g=[0,0,1,1],T=[],y=v("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?g.concat(e):g},!0),w=y.map={},P=y.register=function(t,e,i,s){for(var r,n,a,o,l=e.split(","),_=l.length,u=(i||"easeIn,easeOut,easeInOut").split(",");--_>-1;)for(n=l[_],r=s?v("easing."+n,null,!0):h.easing[n]||{},a=u.length;--a>-1;)o=u[a],w[n+"."+o]=w[o+n]=r[o]=t.getRatio?t:t[o]||new t};for(n=y.prototype,n._calcEnd=!1,n.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:.5>t?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:.5>t?s/2:1-s/2},s=["Linear","Quad","Cubic","Quart","Quint,Strong"],r=s.length;--r>-1;)n=s[r]+",Power"+r,P(new y(null,null,1,r),n,"easeOut",!0),P(new y(null,null,2,r),n,"easeIn"+(0===r?",easeNone":"")),P(new y(null,null,3,r),n,"easeInOut");w.linear=h.easing.Linear.easeIn,w.swing=h.easing.Quad.easeInOut;var b=v("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});n=b.prototype,n.addEventListener=function(t,e,i,s,r){r=r||0;var n,l,h=this._listeners[t],_=0;for(null==h&&(this._listeners[t]=h=[]),l=h.length;--l>-1;)n=h[l],n.c===e&&n.s===i?h.splice(l,1):0===_&&r>n.pr&&(_=l+1);h.splice(_,0,{c:e,s:i,up:s,pr:r}),this!==a||o||a.wake()},n.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return s.splice(i,1),void 0},n.dispatchEvent=function(t){var e,i,s,r=this._listeners[t];if(r)for(e=r.length,i=this._eventTarget;--e>-1;)s=r[e],s&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var k=t.requestAnimationFrame,A=t.cancelAnimationFrame,S=Date.now||function(){return(new Date).getTime()},x=S();for(s=["ms","moz","webkit","o"],r=s.length;--r>-1&&!k;)k=t[s[r]+"RequestAnimationFrame"],A=t[s[r]+"CancelAnimationFrame"]||t[s[r]+"CancelRequestAnimationFrame"];v("Ticker",function(t,e){var i,s,r,n,l,h=this,u=S(),f=e!==!1&&k,c=500,p=33,d=function(t){var e,a,o=S()-x;o>c&&(u+=o-p),x+=o,h.time=(x-u)/1e3,e=h.time-l,(!i||e>0||t===!0)&&(h.frame++,l+=e+(e>=n?.004:n-e),a=!0),t!==!0&&(r=s(d)),a&&h.dispatchEvent("tick")};b.call(h),h.time=h.frame=0,h.tick=function(){d(!0)},h.lagSmoothing=function(t,e){c=t||1/_,p=Math.min(e,c,0)},h.sleep=function(){null!=r&&(f&&A?A(r):clearTimeout(r),s=m,r=null,h===a&&(o=!1))},h.wake=function(){null!==r?h.sleep():h.frame>10&&(x=S()-c+5),s=0===i?m:f&&k?k:function(t){return setTimeout(t,0|1e3*(l-h.time)+1)},h===a&&(o=!0),d(2)},h.fps=function(t){return arguments.length?(i=t,n=1/(i||60),l=this.time+n,h.wake(),void 0):i},h.useRAF=function(t){return arguments.length?(h.sleep(),f=t,h.fps(i),void 0):f},h.fps(t),setTimeout(function(){f&&(!r||5>h.frame)&&h.useRAF(!1)},1500)}),n=h.Ticker.prototype=new h.events.EventDispatcher,n.constructor=h.Ticker;var R=v("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=e.immediateRender===!0,this.data=e.data,this._reversed=e.reversed===!0,B){o||a.wake();var i=this.vars.useFrames?q:B;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});a=R.ticker=new h.Ticker,n=R.prototype,n._dirty=n._gc=n._initted=n._paused=!1,n._totalTime=n._time=0,n._rawPrevTime=-1,n._next=n._last=n._onUpdate=n._timeline=n.timeline=null,n._paused=!1;var C=function(){o&&S()-x>2e3&&a.wake(),setTimeout(C,2e3)};C(),n.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},n.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},n.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},n.seek=function(t,e){return this.totalTime(Number(t),e!==!1)},n.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,e!==!1,!0)},n.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},n.render=function(){},n.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},n.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime())>=i&&i+this.totalDuration()/this._timeScale>t},n._enabled=function(t,e){return o||a.wake(),this._gc=!t,this._active=this.isActive(),e!==!0&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},n._kill=function(){return this._enabled(!1,!1)},n.kill=function(t,e){return this._kill(t,e),this},n._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},n._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},n.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var r=this.vars;if(1===arguments.length)return r[t];null==e?delete r[t]:(r[t]=e,r[t+"Params"]=f(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,r[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},n.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},n.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},n.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},n.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},n.totalTime=function(t,e,i){if(o||a.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>t&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,r=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:r._time)-(this._reversed?s-t:t)/this._timeScale,r._dirty||this._uncache(!1),r._timeline)for(;r._timeline;)r._timeline._time!==(r._startTime+r._totalTime)/r._timeScale&&r.totalTime(r._totalTime,!0),r=r._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==t||0===this._duration)&&(this.render(t,e,!1),z.length&&M())}return this},n.progress=n.totalProgress=function(t,e){return arguments.length?this.totalTime(this.duration()*t,e):this._time/this.duration()},n.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},n.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},n.timeScale=function(t){if(!arguments.length)return this._timeScale;if(t=t||_,this._timeline&&this._timeline.smoothChildTiming){var e=this._pauseTime,i=e||0===e?e:this._timeline.totalTime();this._startTime=i-(i-this._startTime)*this._timeScale/t}return this._timeScale=t,this._uncache(!1)},n.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},n.paused=function(t){if(!arguments.length)return this._paused;if(t!=this._paused&&this._timeline){o||t||a.wake();var e=this._timeline,i=e.rawTime(),s=i-this._pauseTime;!t&&e.smoothChildTiming&&(this._startTime+=s,this._uncache(!1)),this._pauseTime=t?i:null,this._paused=t,this._active=this.isActive(),!t&&0!==s&&this._initted&&this.duration()&&this.render(e.smoothChildTiming?this._totalTime:(i-this._startTime)/this._timeScale,!0,!0)}return this._gc&&!t&&this._enabled(!0,!1),this};var D=v("core.SimpleTimeline",function(t){R.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});n=D.prototype=new R,n.constructor=D,n.kill()._gc=!1,n._first=n._last=n._recent=null,n._sortChildren=!1,n.add=n.insert=function(t,e){var i,s;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),i=this._last,this._sortChildren)for(s=t._startTime;i&&i._startTime>s;)i=i._prev;return i?(t._next=i._next,i._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=i,this._recent=t,this._timeline&&this._uncache(!0),this},n._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},n.render=function(t,e,i){var s,r=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;r;)s=r._next,(r._active||t>=r._startTime&&!r._paused)&&(r._reversed?r.render((r._dirty?r.totalDuration():r._totalDuration)-(t-r._startTime)*r._timeScale,e,i):r.render((t-r._startTime)*r._timeScale,e,i)),r=s},n.rawTime=function(){return o||a.wake(),this._totalTime};var I=v("TweenLite",function(e,i,s){if(R.call(this,i,s),this.render=I.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:I.selector(e)||e;var r,n,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?Q[I.defaultOverwrite]:"number"==typeof l?l>>0:Q[l],(o||e instanceof Array||e.push&&f(e))&&"number"!=typeof e[0])for(this._targets=a=u(e),this._propLookup=[],this._siblings=[],r=0;a.length>r;r++)n=a[r],n?"string"!=typeof n?n.length&&n!==t&&n[0]&&(n[0]===t||n[0].nodeType&&n[0].style&&!n.nodeType)?(a.splice(r--,1),this._targets=a=a.concat(u(n))):(this._siblings[r]=$(n,this,!1),1===l&&this._siblings[r].length>1&&H(n,this,null,1,this._siblings[r])):(n=a[r--]=I.selector(n),"string"==typeof n&&a.splice(r+1,1)):a.splice(r--,1);else this._propLookup={},this._siblings=$(e,this,!1),1===l&&this._siblings.length>1&&H(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-_,this.render(-this._delay))},!0),E=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)},O=function(t,e){var i,s={};for(i in t)G[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!U[i]||U[i]&&U[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s};n=I.prototype=new R,n.constructor=I,n.kill()._gc=!1,n.ratio=0,n._firstPT=n._targets=n._overwrittenProps=n._startAt=null,n._notifyPluginsOfEnabled=n._lazy=!1,I.version="1.14.2",I.defaultEase=n._ease=new y(null,null,1,1),I.defaultOverwrite="auto",I.ticker=a,I.autoSleep=!0,I.lagSmoothing=function(t,e){a.lagSmoothing(t,e)},I.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(I.selector=i,i(e)):"undefined"==typeof document?e:document.querySelectorAll?document.querySelectorAll(e):document.getElementById("#"===e.charAt(0)?e.substr(1):e)};var z=[],L={},N=I._internals={isArray:f,isSelector:E,lazyTweens:z},U=I._plugins={},F=N.tweenLookup={},j=0,G=N.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1},Q={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},q=R._rootFramesTimeline=new D,B=R._rootTimeline=new D,M=N.lazyRender=function(){var t,e=z.length;for(L={};--e>-1;)t=z[e],t&&t._lazy!==!1&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);z.length=0};B._startTime=a.time,q._startTime=a.frame,B._active=q._active=!0,setTimeout(M,1),R._updateRoot=I.render=function(){var t,e,i;if(z.length&&M(),B.render((a.time-B._startTime)*B._timeScale,!1,!1),q.render((a.frame-q._startTime)*q._timeScale,!1,!1),z.length&&M(),!(a.frame%120)){for(i in F){for(e=F[i].tweens,t=e.length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete F[i]}if(i=B._first,(!i||i._paused)&&I.autoSleep&&!q._first&&1===a._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||a.sleep()}}},a.addEventListener("tick",R._updateRoot);var $=function(t,e,i){var s,r,n=t._gsTweenID;if(F[n||(t._gsTweenID=n="t"+j++)]||(F[n]={target:t,tweens:[]}),e&&(s=F[n].tweens,s[r=s.length]=e,i))for(;--r>-1;)s[r]===e&&s.splice(r,1);return F[n].tweens},K=function(t,e,i,s){var r,n,a=t.vars.onOverwrite;return a&&(r=a(t,e,i,s)),a=I.onOverwrite,a&&(n=a(t,e,i,s)),r!==!1&&n!==!1},H=function(t,e,i,s,r){var n,a,o,l;if(1===s||s>=4){for(l=r.length,n=0;l>n;n++)if((o=r[n])!==e)o._gc||K(o,e)&&o._enabled(!1,!1)&&(a=!0);else if(5===s)break;return a}var h,u=e._startTime+_,m=[],f=0,c=0===e._duration;for(n=r.length;--n>-1;)(o=r[n])===e||o._gc||o._paused||(o._timeline!==e._timeline?(h=h||J(e,0,c),0===J(o,h,c)&&(m[f++]=o)):u>=o._startTime&&o._startTime+o.totalDuration()/o._timeScale>u&&((c||!o._initted)&&2e-10>=u-o._startTime||(m[f++]=o)));for(n=f;--n>-1;)if(o=m[n],2===s&&o._kill(i,t,e)&&(a=!0),2!==s||!o._firstPT&&o._initted){if(2!==s&&!K(o,e))continue;o._enabled(!1,!1)&&(a=!0)}return a},J=function(t,e,i){for(var s=t._timeline,r=s._timeScale,n=t._startTime;s._timeline;){if(n+=s._startTime,r*=s._timeScale,s._paused)return-100;s=s._timeline}return n/=r,n>e?n-e:i&&n===e||!t._initted&&2*_>n-e?_:(n+=t.totalDuration()/t._timeScale/r)>e+_?0:n-e-_};n._init=function(){var t,e,i,s,r,n=this.vars,a=this._overwrittenProps,o=this._duration,l=!!n.immediateRender,h=n.ease;if(n.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),r={};for(s in n.startAt)r[s]=n.startAt[s];if(r.overwrite=!1,r.immediateRender=!0,r.lazy=l&&n.lazy!==!1,r.startAt=r.delay=null,this._startAt=I.to(this.target,0,r),l)if(this._time>0)this._startAt=null;else if(0!==o)return}else if(n.runBackwards&&0!==o)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(l=!1),i={};for(s in n)G[s]&&"autoCSS"!==s||(i[s]=n[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=l&&n.lazy!==!1,i.immediateRender=l,this._startAt=I.to(this.target,0,i),l){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=h=h?h instanceof y?h:"function"==typeof h?new y(h,n.easeParams):w[h]||I.defaultEase:I.defaultEase,n.easeParams instanceof Array&&h.config&&(this._ease=h.config.apply(h,n.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(t=this._targets.length;--t>-1;)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],a?a[t]:null)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,a);if(e&&I._onPluginEvent("_onInitAllProps",this),a&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),n.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=n.onUpdate,this._initted=!0},n._initProps=function(e,i,s,r){var n,a,o,l,h,_;if(null==e)return!1;L[e._gsTweenID]&&M(),this.vars.css||e.style&&e!==t&&e.nodeType&&U.css&&this.vars.autoCSS!==!1&&O(this.vars,e);for(n in this.vars){if(_=this.vars[n],G[n])_&&(_ instanceof Array||_.push&&f(_))&&-1!==_.join("").indexOf("{self}")&&(this.vars[n]=_=this._swapSelfInParams(_,this));else if(U[n]&&(l=new U[n])._onInitTween(e,this.vars[n],this)){for(this._firstPT=h={_next:this._firstPT,t:l,p:"setRatio",s:0,c:1,f:!0,n:n,pg:!0,pr:l._priority},a=l._overwriteProps.length;--a>-1;)i[l._overwriteProps[a]]=this._firstPT;(l._priority||l._onInitAllProps)&&(o=!0),(l._onDisable||l._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=i[n]=h={_next:this._firstPT,t:e,p:n,f:"function"==typeof e[n],n:n,pg:!1,pr:0},h.s=h.f?e[n.indexOf("set")||"function"!=typeof e["get"+n.substr(3)]?n:"get"+n.substr(3)]():parseFloat(e[n]),h.c="string"==typeof _&&"="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*Number(_.substr(2)):Number(_)-h.s||0;h&&h._next&&(h._next._prev=h)}return r&&this._kill(r,e)?this._initProps(e,i,s,r):this._overwrite>1&&this._firstPT&&s.length>1&&H(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,r)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(L[e._gsTweenID]=!0),o)},n.render=function(t,e,i){var s,r,n,a,o=this._time,l=this._duration,h=this._rawPrevTime;if(t>=l)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,r="onComplete"),0===l&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(0===t||0>h||h===_)&&h!==t&&(i=!0,h>_&&(r="onReverseComplete")),this._rawPrevTime=a=!e||t||h===t?t:_);else if(1e-7>t)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&h>0&&h!==_)&&(r="onReverseComplete",s=this._reversed),0>t&&(this._active=!1,0===l&&(this._initted||!this.vars.lazy||i)&&(h>=0&&(i=!0),this._rawPrevTime=a=!e||t||h===t?t:_)),this._initted||(i=!0);else if(this._totalTime=this._time=t,this._easeType){var u=t/l,m=this._easeType,f=this._easePower;(1===m||3===m&&u>=.5)&&(u=1-u),3===m&&(u*=2),1===f?u*=u:2===f?u*=u*u:3===f?u*=u*u*u:4===f&&(u*=u*u*u*u),this.ratio=1===m?1-u:2===m?u:.5>t/l?u/2:1-u/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=h,z.push(this),this._lazy=[t,e],void 0;this._time&&!s?this.ratio=this._ease.getRatio(this._time/l):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,e,i):r||(r="_dummyGS")),this.vars.onStart&&(0!==this._time||0===l)&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||T))),n=this._firstPT;n;)n.f?n.t[n.p](n.c*this.ratio+n.s):n.t[n.p]=n.c*this.ratio+n.s,n=n._next;this._onUpdate&&(0>t&&this._startAt&&t!==-1e-4&&this._startAt.render(t,e,i),e||(this._time!==o||s)&&this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||T)),r&&(!this._gc||i)&&(0>t&&this._startAt&&!this._onUpdate&&t!==-1e-4&&this._startAt.render(t,e,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[r]&&this.vars[r].apply(this.vars[r+"Scope"]||this,this.vars[r+"Params"]||T),0===l&&this._rawPrevTime===_&&a!==_&&(this._rawPrevTime=0))}},n._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:I.selector(e)||e;var s,r,n,a,o,l,h,_,u;if((f(e)||E(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s])&&(l=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],r=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,r=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(h=t||o,_=t!==r&&"all"!==r&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(I.onOverwrite||this.vars.onOverwrite)){for(n in h)o[n]&&(u||(u=[]),u.push(n));if(!K(this,i,e,u))return!1}for(n in h)(a=o[n])&&(a.pg&&a.t._kill(h)&&(l=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[n]),_&&(r[n]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return l},n.invalidate=function(){return this._notifyPluginsOfEnabled&&I._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],R.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-_,this.render(-this._delay)),this},n._enabled=function(t,e){if(o||a.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=$(s[i],this,!0);else this._siblings=$(this.target,this,!0)}return R.prototype._enabled.call(this,t,e),this._notifyPluginsOfEnabled&&this._firstPT?I._onPluginEvent(t?"_onEnable":"_onDisable",this):!1},I.to=function(t,e,i){return new I(t,e,i)},I.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new I(t,e,i)},I.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new I(t,e,s)},I.delayedCall=function(t,e,i,s,r){return new I(e,0,{delay:t,onComplete:e,onCompleteParams:i,onCompleteScope:s,onReverseComplete:e,onReverseCompleteParams:i,onReverseCompleteScope:s,immediateRender:!1,useFrames:r,overwrite:0})},I.set=function(t,e){return new I(t,0,e)},I.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:I.selector(t)||t;var i,s,r,n;if((f(t)||E(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(I.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(n=s[i],r=i;--r>-1;)n===s[r]&&s.splice(i,1)}else for(s=$(t).concat(),i=s.length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s},I.killTweensOf=I.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=I.getTweensOf(t,e),r=s.length;--r>-1;)s[r]._kill(i,t)};var V=v("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=V.prototype},!0);if(n=V.prototype,V.version="1.10.1",V.API=2,n._firstPT=null,n._addTween=function(t,e,i,s,r,n){var a,o;return null!=s&&(a="number"==typeof s||"="!==s.charAt(1)?Number(s)-i:parseInt(s.charAt(0)+"1",10)*Number(s.substr(2)))?(this._firstPT=o={_next:this._firstPT,t:t,p:e,s:i,c:a,f:"function"==typeof t[e],n:r||e,r:n},o._next&&(o._next._prev=o),o):void 0},n.setRatio=function(t){for(var e,i=this._firstPT,s=1e-6;i;)e=i.c*t+i.s,i.r?e=Math.round(e):s>e&&e>-s&&(e=0),i.f?i.t[i.p](e):i.t[i.p]=e,i=i._next},n._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},n._roundProps=function(t,e){for(var i=this._firstPT;i;)(t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&(i.r=e),i=i._next},I._onPluginEvent=function(t,e){var i,s,r,n,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=r;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:n)?o._prev._next=o:r=o,(o._next=s)?s._prev=o:n=o,o=a}o=e._firstPT=r}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},V.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===V.API&&(U[(new t[e])._propName]=t[e]);return!0},d.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,r=t.overwriteProps,n={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},a=v("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){V.call(this,i,s),this._overwriteProps=r||[]},t.global===!0),o=a.prototype=new V(i);o.constructor=a,a.API=t.API;for(e in n)"function"==typeof t[e]&&(o[n[e]]=t[e]);return a.version=t.version,V.activate([a]),a},s=t._gsQueue){for(r=0;s.length>r;r++)s[r]();for(n in c)c[n].func||t.console.log("GSAP encountered missing dependency: com.greensock."+n)}o=!1}})("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenLite");
Normalize = function() {};

Normalize.init = function()
{
	//TODO 
}

Normalize.touchEvent = function(event) 
{
	if (event.pageX == null && original.clientX != null) 
	{
        event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
        event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
    }
};

Normalize.transform = function(dom, transform)
{
	if(dom) 
	{
		dom.style.transform = transform;
		dom.style.webkitTransform = transform;
		dom.style.mozTransform = transform;
		
	}
};

Normalize.transformOrigin = function(dom, origin)
{
	if(dom) 
	{
		dom.style.transformOrigin = origin;
		dom.style.webkitTransformOrigin = origin;
		dom.style.mozTransformOrigin = origin;
	}
};

Normalize.transition = function(dom, transition)
{
	if(dom) {
		dom.style.transition = transition;
		dom.style.webkitTransition = transition;
		dom.style.mozTransition = transition;
	}
};
/**
* Provides requestAnimationFrame in a cross browser way.
* http://paulirish.com/2011/requestanimationframe-for-smart-animating/
*/
if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = (function (id) {
    	return window.cancelAnimationFrame ||
    	window.webkitCancelRequestAnimationFrame ||
    	window.mozCancelRequestAnimationFrame ||
    	window.oCancelRequestAnimationFrame ||
    	window.msCancelRequestAnimationFrame ||
    	clearTimeout(id);
    })();
}

if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = (function (callback, element, time) {
    	return window.webkitRequestAnimationFrame ||
    	window.mozRequestAnimationFrame ||
    	window.oRequestAnimationFrame ||
    	window.msRequestAnimationFrame ||
    	function (/* function */callback, /* DOMElement */element) {
    		return window.setTimeout(callback, 1000 / 60);
    	};
    })();
}

Handlebars.registerHelper('plus_one', function(index) {
	return index +  1;
});
var App, Carousel, CountDown, Event, Form, Game, Grid, Home, Loader, Parameters, Pics, Router, Screens, Scroll, Snow, SocialSharing, Transitions, Tuto, UI_Slider, Utils, VideoPlayer, VideoPlayer_Controls, VideoPlayer_HTML, VideoPlayer_Templates, W, mediasPath,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

Event = (function() {
  function Event() {}

  Event.MOUSEDOWN = $('body').hasClass('tablet') ? 'touchstart' : 'mousedown';

  Event.MOUSEUP = $('body').hasClass('tablet') ? 'touchend' : 'mouseup';

  Event.MOUSEMOVE = $('body').hasClass('tablet') ? 'touchmove' : 'mousemove';

  Event.CLICK = $('body').hasClass('tablet') ? 'touchstart' : 'click';

  Event.ENTER = $('body').hasClass('tablet') ? 'touchstart' : 'mouseenter';

  Event.KEYDOWN = 'keydown';

  Event.WHEEL = 'mousewheel';

  Event.LOADED = 'loaded';

  Event.STEPS = 'steps';

  Event.SUBMIT = 'submit';

  return Event;

})();

Utils = (function() {
  function Utils() {}

  Utils.getCoverSizeImage = function(picWidth, picHeight, containerWidth, containerHeight) {
    var ch, cr, cw, ph, pr, pw;
    pw = picWidth;
    ph = picHeight;
    cw = containerWidth || W.ww;
    ch = containerHeight || W.wh;
    pr = pw / ph;
    cr = cw / ch;
    if (cr < pr) {
      return {
        'width': ch * pr,
        'height': ch,
        'top': 0,
        'left': -((ch * pr) - cw) * 0.5
      };
    } else {
      return {
        'width': cw,
        'height': cw / pr,
        'top': -((cw / pr) - ch) * 0.5,
        'left': 0
      };
    }
  };

  Utils.getContainSizeImage = function(picWidth, picHeight, containerWidth, containerHeight) {
    var ch, cr, cw, ph, pr, pw;
    pw = picWidth;
    ph = picHeight;
    cw = containerWidth || W.ww;
    ch = containerHeight || W.wh;
    pr = pw / ph;
    cr = cw / ch;
    if (cr < pr) {
      return {
        'width': cw,
        'height': cw / pr,
        'top': (ch - cw / pr) * 0.5,
        'left': 0
      };
    } else {
      return {
        'width': ch * pr,
        'height': ch,
        'top': 0,
        'left': (cw - ch * pr) * 0.5
      };
    }
  };

  Utils.clearTimers = function(timers) {
    return $.each(timers, function(key, timer) {
      return clearTimeout(timer);
    });
  };

  Utils.hexToRgb = function(hex) {
    var result;
    result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
      return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      };
    } else {
      return null;
    }
  };

  return Utils;

})();

W = (function() {
  function W() {}

  W.init = function() {
    W.window = $(window);
    W.body = $('body');
    W.device = $('body').attr('class');
    W.ww = $(window).width();
    W.wh = $(window).height();
    W.sw = screen.width;
    W.sh = screen.height;
    W.scrollTop = {
      real: 0,
      calc: 0
    };
    return W.isTablet = $('body').hasClass('tablet') ? true : false;
  };

  return W;

})();

Carousel = (function() {
  function Carousel(options) {
    this._onNavClick = __bind(this._onNavClick, this);
    this.container = options.container, this.delay = options.delay, this.onUpdate = options.onUpdate;
    this._initContent();
    this._initEvents();
  }

  Carousel.prototype._initContent = function() {
    this.list = this.container.find('.slides');
    this.slides = this.list.find('li');
    this.nav = this.container.find('nav');
    this.navItems = this.nav.find('li');
    this.timer = void 0;
    this.delay = this.delay ||  5000;
    this.currentSlideIndex = 0;
    this.prevSlideIndex = 0;
    this.slidesLength = this.slides.length;
    this.itemWidth = this.slides.width();
    this.slides.addClass('no-transition right');
    this.slides.eq(0).removeClass('right');
    this.navItems.eq(0).addClass('active');
    return this._getSlide();
  };

  Carousel.prototype._initEvents = function() {
    return this.navItems.on(Event.CLICK, this._onNavClick);
  };

  Carousel.prototype._getSlide = function() {
    return this.timer = setTimeout((function(_this) {
      return function() {
        _this.prevSlideIndex = _this.currentSlideIndex;
        _this.currentSlideIndex++;
        if (_this.currentSlideIndex > _this.slidesLength - 1) {
          _this.currentSlideIndex = 0;
        } else if (_this.currentSlideIndex < 0) {
          _this.currentSlideIndex = _this.slidesLength - 1;
        }
        return _this._updateSlides();
      };
    })(this), this.delay);
  };

  Carousel.prototype._updateSlides = function(manual) {
    var direction;
    direction = ['left', 'right'];
    if (manual === true && this.prevSlideIndex > this.currentSlideIndex) {
      direction.reverse();
    }
    this.slides.eq(this.currentSlideIndex).removeClass('left right').addClass('no-transition ' + direction[1]);
    this.slides.eq(this.currentSlideIndex)[0].offsetHeight;
    this.slides.eq(this.currentSlideIndex).removeClass('no-transition');
    this.slides.eq(this.currentSlideIndex)[0].offsetHeight;
    this.slides.eq(this.currentSlideIndex).removeClass(direction[1]);
    this.slides.eq(this.prevSlideIndex).removeClass('no-transition').addClass(direction[0]);
    this.navItems.eq(this.currentSlideIndex).addClass('active').siblings().removeClass('active');
    this._getSlide();
    if (this.onUpdate) {
      return this.onUpdate({
        'prev': this.prevSlideIndex,
        'current': this.currentSlideIndex
      });
    }
  };

  Carousel.prototype._onNavClick = function(e) {
    var index;
    index = $(e.currentTarget).index();
    if (index !== this.currentSlideIndex) {
      this.prevSlideIndex = this.currentSlideIndex;
      this.currentSlideIndex = index;
      clearTimeout(this.timer);
      return this._updateSlides(true);
    }
  };

  return Carousel;

})();

Loader = (function() {
  function Loader(options) {
    var imgInc, imgLength, pics;
    this.container = options.container, this.elm = options.elm, this.custom = options.custom, this.each = options.each, this.complete = options.complete;
    if (this.elm) {
      pics = this.container.find(this.elm);
    } else {
      pics = this.container.find('.img');
    }
    imgLength = pics.length;
    imgInc = 0;
    this.steps = 0;
    this.empty = false;
    if (!pics.length) {
      this.empty = true;
      if (this.complete) {
        this.complete();
      }
    }
    pics.each((function(_this) {
      return function(key, item) {
        var $this, attrs, img, klass, src;
        $this = $(item);
        klass = $this.attr('class').replace('img ', '');
        src = $this.attr('data-src');
        img = new Image();
        attrs = '';
        $.each(item.attributes, function(key, att) {
          if (att.name === 'class') {
            att.value = att.value.replace('img', '');
          }
          if (att.name !== 'data-src') {
            return attrs += att.name + '="' + att.value + '" ';
          }
        });
        img.src = src;
        return img.onload = function() {
          var _ref;
          imgInc++;
          _this.steps = imgInc / imgLength * 100;
          if (_this.each) {
            _this.each($this, '<img src="' + src + '" ' + attrs + '/>', key);
          }
          if ((_ref = _this.custom) === false || _ref === (void 0)) {
            $this.replaceWith('<img src="' + src + '" ' + attrs + '/>');
          }
          $(_this).trigger(Event.STEPS);
          if (imgInc === imgLength) {
            if (_this.complete) {
              _this.complete();
            }
            return $(_this).trigger(Event.LOADED);
          }
        };
      };
    })(this));
  }

  return Loader;

})();

Router = (function() {
  Router.CALLSTART = 'callstart';

  Router.CALLEND = 'callend';

  Router.CALLERROR = 'callerror';

  Router.INITIALIZE = 'initialize';

  Router.CLICK = 'click';

  function Router() {
    this.backCall = __bind(this.backCall, this);
    this.cache = {};
    this.container = $('.ajaxContainer');
    this.current = this.container.attr('id');
    this.headTitle = $('title');
    this.pages = {
      'prev': '',
      'current': this.container.attr('id')
    };
    this.processing = false;
    this.fromCache = false;
    this.events();
    this.initCache();
  }

  Router.prototype.initCache = function() {
    this.href = document.location.pathname;
    this.content = this.container;
    return this.caching();
  };

  Router.prototype.events = function() {
    $(document).on('click', 'a', (function(_this) {
      return function(e) {
        _this.elm = $(e.currentTarget);
        _this.href = _this.elm.attr('href');
        _this.checkRequestAvailability();
        if (_this.isRequestAvailable) {
          _this.getContent();
        }
        if (!_this.isTargetSet) {
          e.preventDefault();
        }
        return $(_this).trigger(Router.CLICK);
      };
    })(this));
    return $(window).on('popstate', (function(_this) {
      return function(event) {
        _this.backCall();
        return event.preventDefault();
      };
    })(this));
  };

  Router.prototype.checkRequestAvailability = function() {
    this.isRequestAvailable = true;
    this.isTargetSet = false;
    if (this.areUrlsMatching()) {
      this.isRequestAvailable = false;
    }
    if (this.processing) {
      this.isRequestAvailable = false;
    }
    if (this.elm.attr('target')) {
      this.isTargetSet = true;
      return this.isRequestAvailable = false;
    }
  };

  Router.prototype.areUrlsMatching = function() {
    var currentPath, currentUrl, urlToCheck;
    urlToCheck = this.href;
    currentPath = document.location.pathname;
    currentUrl = document.location.href;
    if (urlToCheck.substr(-1) === '/') {
      urlToCheck = urlToCheck.substr(0, urlToCheck.length - 1);
    }
    if (currentUrl.substr(-1) === '/') {
      currentUrl = currentUrl.substr(0, currentUrl.length - 1);
      currentPath = currentPath.substr(0, currentPath.length - 1);
    }
    if (urlToCheck === currentPath || urlToCheck === currentUrl) {
      return true;
    }
    return false;
  };

  Router.prototype.backCall = function() {
    if (this.canBack) {
      if (document.location.pathname === this.href) {
        window.history.go(-1);
      } else {
        this.href = document.location.pathname;
        this.getContent();
      }
    }
    return this.canBack = true;
  };

  Router.prototype.getContent = function() {
    this.pages.prev = this.pages.current;
    this.processing = true;
    if (this.cache[this.href]) {
      this.fromCache = true;
      this.content = this.cache[this.href].clone();
      return this.requestSucceeded();
    } else {
      this.fromCache = false;
      return this.request();
    }
  };

  Router.prototype.request = function() {
    $(this).trigger(Router.CALLSTART);
    if (this.ajaxRequest && this.ajaxRequest !== 4) {
      this.ajaxRequest.abort();
    }
    return this.ajaxRequest = $.ajax({
      url: this.href,
      success: (function(_this) {
        return function(response) {
          _this.ajaxResponse = response;
          _this.content = $(response).filter('.ajaxContainer');
          if (_this.content.length === 0) {
            _this.content = $(response).find('.ajaxContainer');
          }
          _this.title = $(response).filter('title').text();
          return _this.requestSucceeded();
        };
      })(this),
      complete: (function(_this) {
        return function(request, status) {};
      })(this),
      error: (function(_this) {
        return function(response) {
          return $(_this).trigger(Router.CALLERROR);
        };
      })(this)
    });
  };

  Router.prototype.requestSucceeded = function(response) {
    this.pages.current = this.content.attr('id');
    this.changeTitle();
    this.caching();
    this.changeUrl();
    return $(this).trigger(Router.CALLEND);
  };

  Router.prototype.changeTitle = function() {
    return this.headTitle.text(this.title);
  };

  Router.prototype.caching = function() {
    return this.cache[this.href] = this.content.clone();
  };

  Router.prototype.changeUrl = function(href) {
    var pathname, state;
    if (href) {
      this.href = href;
    }
    state = {};
    pathname = this.href.split(window.location.host)[1];
    if (pathname) {
      pathname = pathname.substr(4);
    }
    if (window.history.pushState) {
      if (this.pages.current === this.pages.prev) {
        return window.history.replaceState(state, null, this.href);
      } else {
        return window.history.pushState(state, null, this.href);
      }
    } else {
      return window.location.hash = pathname;
    }
  };

  return Router;

})();

Scroll = (function() {
  Scroll.DOWN = 'scroll_active';

  Scroll.UP = 'scroll_inactive';

  function Scroll(options) {
    this.setScale = __bind(this.setScale, this);
    this.resetEase = __bind(this.resetEase, this);
    this.refresh = __bind(this.refresh, this);
    this.goTop = __bind(this.goTop, this);
    this.goTo = __bind(this.goTo, this);
    this.keyDown = __bind(this.keyDown, this);
    this._onMouseWheel = __bind(this._onMouseWheel, this);
    this._onMouseUp = __bind(this._onMouseUp, this);
    this._onMouseMove = __bind(this._onMouseMove, this);
    this._onMouseDown = __bind(this._onMouseDown, this);
    this._initEvents = __bind(this._initEvents, this);
    this.container = options.container;
    this.viewport = this.container.find('.scroll-viewport');
    this.overview = this.container.find('.scroll-overview');
    this.scrollbarContainer = this.container.find('.scrollbar-container');
    this.scrollbarTrack = this.scrollbarContainer.children('.scrollbar-track');
    this.scrollbarThumb = this.scrollbarTrack.children('.scrollbar-thumb');
    this.scrollId = '#' + this.container.attr('id');
    if (this.container.attr('class')) {
      this.scrollId += '.' + this.container.attr('class').split(' ').join('.');
    }
    this.scrollTop = {
      real: 0,
      calc: 0,
      limit: 0,
      perc: 0,
      prev: 0
    };
    this.scrollbar = {
      real: 0,
      calc: 0,
      perc: 0,
      trackHeight: this.scrollbarTrack.height(),
      thumbHeight: this.scrollbarThumb.outerHeight()
    };
    this.overviewHeight = 1;
    this.scale = 1;
    this.isScrollbar = false;
    this.isMouseMoving = false;
    this.scrollEnd = false;
    this.ease = this.initEase = 0.9;
    this.i = 0;
    this.prevY = this.moveY = this.initY = 0;
    this.resize();
    this._initEvents();
  }

  Scroll.prototype._initEvents = function() {
    return this.container.on(Event.MOUSEDOWN, this._onMouseDown).on(Event.WHEEL, this._onMouseWheel);
  };

  Scroll.prototype._onMouseDown = function(event) {
    var e, klass, target, _ref;
    e = event.type === 'touchstart' ? event.originalEvent.touches[0] : event;
    if ((_ref = event.which) === 0 || _ref === 1) {
      target = $(e.target);
      klass = target.attr('class') || '';
      this.scrollbarContainer.addClass('active');
      if (target.parents(this.scrollId).length) {
        if (klass.match('scrollbar') || target.parents('.scrollbar-thumb').length === 1) {
          this.isScrollbar = true;
          this.initScrollY = this.scrollTop.perc * (this.scrollbar.trackHeight - this.scrollbar.thumbHeight);
          this.initY = e.pageY - this.initScrollY;
        } else {
          this.isScrollbar = false;
          this.ease = 1;
          this.initScrollY = this.scrollTop.perc * this.scrollTop.limit;
          this.initY = e.pageY;
        }
        $(this).trigger(Scroll.DOWN);
        W.body.on(Event.MOUSEMOVE, this._onMouseMove).on(Event.MOUSEUP, this._onMouseUp);
      }
      return event.preventDefault();
    }
  };

  Scroll.prototype._onMouseMove = function(event) {
    var e, _ref;
    e = event.type === 'touchmove' ? event.originalEvent.touches[0] : event;
    if ((_ref = event.which) === 0 || _ref === 1) {
      this.isMouseMoving = true;
      if (this.isScrollbar === true) {
        this.moveY = e.pageY - this.initY;
        this.scrollTop.perc = this.moveY / (this.scrollbar.trackHeight - this.scrollbar.thumbHeight);
      } else {
        this.prevY = this.moveY;
        this.moveY = -this.initScrollY + e.pageY - this.initY;
        this.scrollTop.perc = -this.moveY / this.scrollTop.limit;
      }
      return event.preventDefault();
    }
  };

  Scroll.prototype._onMouseUp = function() {
    if (this.isMouseMoving === true && this.isScrollbar === false) {
      this.scrollTop.perc = -(this.moveY + (this.moveY - this.prevY) * 10) / this.scrollTop.limit;
    }
    this.resetEase();
    this.isScrollbar = this.isMouseMoving = false;
    $(this).trigger(Scroll.UP);
    W.body.off(Event.MOUSEMOVE, this._onMouseMove).off(Event.MOUSEUP, this._onMouseUp);
    return this.scrollbarContainer.removeClass('active');
  };

  Scroll.prototype._onMouseWheel = function(e, deltaY) {
    var initScrollY, moveY, target;
    target = $(e.target);
    if (target.parents(this.scrollId).length) {
      this.resetEase();
      initScrollY = this.scrollTop.perc * this.scrollTop.limit;
      moveY = -initScrollY + deltaY;
      this.scrollTop.perc = -moveY / this.scrollTop.limit;
      return e.preventDefault();
    }
  };

  Scroll.prototype.keyDown = function(e) {

    /*
    			32: space
    			40: down
    			38: up
    			16: shift
    			91: cmd
    			18: alt
     */
    var initScrollY, moveY;
    initScrollY = this.scrollTop.perc * this.scrollTop.limit;
    moveY = -initScrollY;
    switch (e.keyCode) {
      case 32:
        moveY -= this.container.height();
        break;
      case 40:
        moveY -= 40;
        break;
      case 38:
        moveY += 40;
    }
    return this.scrollTop.perc = -moveY / this.scrollTop.limit;
  };

  Scroll.prototype.goTo = function(pos, changeEase) {
    if (changeEase) {
      this.ease = 0.1;
    }
    return this.scrollTop.perc = pos / this.scrollTop.limit;
  };

  Scroll.prototype.goTop = function() {
    this.ease = 0.1;
    return this.scrollTop.perc = 0;
  };

  Scroll.prototype.refresh = function() {
    this.viewport = this.container.find('.scroll-viewport');
    this.overview = this.container.find('.scroll-overview');
    this.scrollbarContainer = this.container.find('.scrollbar-container');
    this.scrollbarTrack = this.scrollbarContainer.children('.scrollbar-track');
    this.scrollbarThumb = this.scrollbarTrack.children('.scrollbar-thumb');
    this.scrollTop.perc = 0;
    this.resetEase();
    return this.resize();
  };

  Scroll.prototype.resetEase = function() {
    return this.ease = this.initEase;
  };

  Scroll.prototype.setScale = function(val) {
    return this.scale = val;
  };

  Scroll.prototype.resize = function() {
    this.viewportHeight = this.viewport.outerHeight();
    this.overviewHeight = this.overview.outerHeight();
    this.scrollTop.limit = this.overviewHeight - this.viewportHeight;
    this.scrollbar.trackHeight = this.scrollbarTrack.height();
    if (this.scrollbar.thumbHeight === 0 || this.scrollbar.autoresize === true) {
      this.scrollbar.thumbHeight = Math.max(this.scrollbar.trackHeight / (this.scrollTop.limit / this.viewportHeight), 50);
      this.scrollbar.autoresize = true;
      return this.scrollbarThumb.css({
        'height': this.scrollbar.thumbHeight
      });
    }
  };

  Scroll.prototype.update = function() {
    if (this.scrollTop.perc < 0) {
      this.scrollTop.perc = 0;
    } else if (this.scrollTop.perc > 1) {
      this.scrollTop.perc = 1;
    }
    this.scrollTop.prev = this.scrollTop.calc;
    this.scrollTop.real = this.scrollTop.perc * this.scrollTop.limit;
    this.scrollTop.calc += (this.scrollTop.real - this.scrollTop.calc) * this.ease;
    if (~~this.scrollTop.calc === 0) {
      this.scrollTop.calc = 0;
    }
    if (~~this.scrollTop.prev !== ~~this.scrollTop.calc) {
      Normalize.transform(this.overview[0], 'translate3d(0, ' + (-this.scrollTop.calc * this.scale) + 'px, 0)');
      Normalize.transform(this.scrollbarThumb[0], 'translate3d(0, ' + ((this.scrollTop.real / this.scrollTop.limit) * (this.scrollbar.trackHeight - this.scrollbar.thumbHeight)) + 'px, 0)');
      if (this.scrollEnd === false) {
        this.scrollEnd = true;
        return this.scrollbarContainer.addClass('active');
      }
    } else {
      if (this.scrollEnd === true) {
        this.scrollEnd = false;
        return this.scrollbarContainer.removeClass('active');
      }
    }
  };

  return Scroll;

})();

Transitions = (function() {
  Transitions.INITIALIZE = 'initialize';

  Transitions.CALLSTART = 'callstart';

  Transitions.CALLEND = 'callend';

  Transitions.CALLMIDDLE = 'callmiddle';

  Transitions.CLICK = 'click';

  function Transitions() {
    this.defaultOut = __bind(this.defaultOut, this);
    this.launchIn = __bind(this.launchIn, this);
    this.launchOut = __bind(this.launchOut, this);
    this.end = __bind(this.end, this);
    this.start = __bind(this.start, this);
    this._onRouterClick = __bind(this._onRouterClick, this);
    this.container = $('.ajaxContainer');
    this.blackMask = $('.black_mask');
    this.router = new Router();
    $(this.router).on(Router.CLICK, this._onRouterClick);
    $(this.router).on(Router.CALLSTART, this.start);
    $(this.router).on(Router.CALLEND, this.end);
    this.sectionId = this.router.pages.current;
    this.data = {};
  }

  Transitions.prototype._onRouterClick = function() {
    return $(this).trigger(Transitions.CLICK);
  };

  Transitions.prototype.start = function() {
    $('#loading').css('display', 'block');
    return setTimeout((function(_this) {
      return function() {
        return $('#loading').css('opacity', 1);
      };
    })(this), 10);
  };

  Transitions.prototype.end = function() {
    return this.launchOut();
  };

  Transitions.prototype.launchOut = function() {
    $(this).trigger(Transitions.CALLSTART);
    this.container = {
      prev: $('.ajaxContainer'),
      current: this.router.content
    };
    if (this[this.router.pages.prev + 'Out']) {
      return this[this.router.pages.prev + 'Out']();
    } else {
      return this.defaultOut();
    }
  };

  Transitions.prototype.launchIn = function() {
    this.sectionId = this.router.pages.current;
    if (this[this.router.pages.current + 'In']) {
      this[this.router.pages.current + 'In']();
    } else {
      this.defaultIn();
    }
    return $(this).trigger(Transitions.CALLEND);
  };

  Transitions.prototype.defaultIn = function() {
    this.sectionId = this.router.pages.current;
    this.currentContainer = $('.ajaxContainer');
    this.newContainer = this.router.content;
    this.newContainer.css({
      'width': this.currentContainer.width(),
      'height': this.currentContainer.height()
    });
    this.currentContainer.before(this.newContainer);
    this.newContainer.addClass('new');
    this.currentContainer.addClass('old');
    setTimeout((function(_this) {
      return function() {
        return _this.newContainer.removeClass('new');
      };
    })(this), 100);
    return setTimeout((function(_this) {
      return function() {
        _this.currentContainer.remove();
        return _this.router.processing = false;
      };
    })(this), 1100);
  };

  Transitions.prototype.defaultOut = function() {
    return this.launchIn();
  };

  return Transitions;

})();

UI_Slider = (function() {
  UI_Slider.START = 'start';

  UI_Slider.CHANGE = 'change';

  UI_Slider.END = 'end';

  function UI_Slider(options) {
    this._onMouseUp = __bind(this._onMouseUp, this);
    this._onMouseMove = __bind(this._onMouseMove, this);
    this._onMouseDown = __bind(this._onMouseDown, this);
    this._initSlider = __bind(this._initSlider, this);
    this.container = options.container, this.startValue = options.startValue;
    this.startValue = this.startValue || 0;
    this._initX = 0;
    this._x = 0;
    this._moveX = 0;
    this._initSlider();
  }

  UI_Slider.prototype._initSlider = function() {
    return this.container.on(Event.MOUSEDOWN, this._onMouseDown);
  };

  UI_Slider.prototype._onMouseDown = function(event) {
    var e;
    e = event.type === 'touchstart' ? event.originalEvent.touches[0] : event;
    this.containerWidth = this.container.width();
    this._leftSide = this.container.offset().left;
    this.cursorPos = e.pageX - this._leftSide;
    this.perc = this.cursorPos / this.containerWidth;
    $(document).on(Event.MOUSEMOVE, this._onMouseMove).on(Event.MOUSEUP, this._onMouseUp);
    return $(this).trigger(UI_Slider.START);
  };

  UI_Slider.prototype._onMouseMove = function(event) {
    var e;
    e = event.type === 'touchmove' ? event.originalEvent.touches[0] : event;
    this.cursorPos = e.pageX - this._leftSide;
    this.perc = this.cursorPos / this.containerWidth;
    if (this.perc < 0) {
      this.perc = 0;
    } else if (this.perc > 1) {
      this.perc = 1;
    }
    return $(this).trigger(UI_Slider.CHANGE);
  };

  UI_Slider.prototype._onMouseUp = function() {
    $(document).off(Event.MOUSEMOVE, this._onMouseMove).off(Event.MOUSEUP, this._onMouseUp);
    return $(this).trigger(UI_Slider.END);
  };

  return UI_Slider;

})();

VideoPlayer = (function() {
  function VideoPlayer(options) {
    this._onPlayerPaused = __bind(this._onPlayerPaused, this);
    this._onPlayerEnded = __bind(this._onPlayerEnded, this);
    this._onPlayerPlaying = __bind(this._onPlayerPlaying, this);
    this._onPlayerWaiting = __bind(this._onPlayerWaiting, this);
    this._onPlayerTimeUpdate = __bind(this._onPlayerTimeUpdate, this);
    this._onPlayerProgress = __bind(this._onPlayerProgress, this);
    this._onPlayerCanPlay = __bind(this._onPlayerCanPlay, this);
    this._onControlsSeekEnd = __bind(this._onControlsSeekEnd, this);
    this._onControlsSeekStart = __bind(this._onControlsSeekStart, this);
    this._onControlsVolume = __bind(this._onControlsVolume, this);
    this._onControlsFullscreen = __bind(this._onControlsFullscreen, this);
    this._onControlsStop = __bind(this._onControlsStop, this);
    this._onControlsPause = __bind(this._onControlsPause, this);
    this._onControlsPlay = __bind(this._onControlsPlay, this);
    this._onShieldClick = __bind(this._onShieldClick, this);
    this.hideControls = __bind(this.hideControls, this);
    this.showControls = __bind(this.showControls, this);
    this.setSrc = __bind(this.setSrc, this);
    this.seek = __bind(this.seek, this);
    this.setVolume = __bind(this.setVolume, this);
    this.getSrc = __bind(this.getSrc, this);
    this.getState = __bind(this.getState, this);
    this.getDuration = __bind(this.getDuration, this);
    this.getCurrentTime = __bind(this.getCurrentTime, this);
    this.unmute = __bind(this.unmute, this);
    this.mute = __bind(this.mute, this);
    this.stop = __bind(this.stop, this);
    this.pause = __bind(this.pause, this);
    this.play = __bind(this.play, this);
    this.container = options.container, this.src = options.src, this.poster = options.poster, this.autoplay = options.autoplay, this.loop = options.loop, this.hideControlsAllowed = options.hideControlsAllowed;
    this.isMuted = false;
    this.state = -1;
    this.tempState = null;
    this.canPlay = false;
    this.queueSeek = null;
    this.bufferingInterval = null;
    this.isBuffering = false;
    this.isPaused = false;
    this._initPlayer();
  }

  VideoPlayer.prototype._initPlayer = function() {
    this.container.addClass('stopped');
    this.player = new VideoPlayer_HTML({
      container: this.container,
      src: this.container.attr('data-src') || this.src
    });
    this.video = this.player.$video;
    this.videoContainer = this.player.videoContainer;
    this.controls = new VideoPlayer_Controls({
      container: this.container,
      poster: this.poster,
      autoplay: this.autoplay,
      hideControlsAllowed: this.hideControlsAllowed
    });
    this._initListeners();
    if (this.autoplay) {
      return this.play();
    }
  };

  VideoPlayer.prototype._initListeners = function() {
    $(this.controls).on(VideoPlayer_Controls.SHIELD_CLICK, this._onShieldClick).on(VideoPlayer_Controls.PLAY, this._onControlsPlay).on(VideoPlayer_Controls.PAUSE, this._onControlsPause).on(VideoPlayer_Controls.STOP, this._onControlsStop).on(VideoPlayer_Controls.FULLSCREEN, this._onControlsFullscreen).on(VideoPlayer_Controls.VOLUME, this._onControlsVolume).on(VideoPlayer_Controls.SEEK_START, this._onControlsSeekStart).on(VideoPlayer_Controls.SEEK_END, this._onControlsSeekEnd);
    return $(this.player).on(VideoPlayer.CANPLAY, this._onPlayerCanPlay).on(VideoPlayer.PROGRESS, this._onPlayerProgress).on(VideoPlayer.TIMEUPDATE, this._onPlayerTimeUpdate).on(VideoPlayer.WAITING, this._onPlayerWaiting).on(VideoPlayer.PLAYING, this._onPlayerPlaying).on(VideoPlayer.ENDED, this._onPlayerEnded).on(VideoPlayer.PAUSED, this._onPlayerPaused);
  };

  VideoPlayer.playerState = {
    ENDED: 1,
    PLAYING: 2,
    PAUSED: 3,
    BUFFERING: 4,
    CUED: 5
  };

  VideoPlayer.CANPLAY = 'canplay';

  VideoPlayer.PROGRESS = 'progress';

  VideoPlayer.TIMEUPDATE = 'timeupdate';

  VideoPlayer.WAITING = 'waiting';

  VideoPlayer.PLAYING = 'playing';

  VideoPlayer.SEEKED = 'seeked';

  VideoPlayer.BUFFERING = 'buffering';

  VideoPlayer.ENDED = 'ended';

  VideoPlayer.PAUSED = 'paused';

  VideoPlayer.SHIELD_CLICK = 'shield_click';

  VideoPlayer.MUTE = 'onmute';

  VideoPlayer.UNMUTE = 'onunmute';

  VideoPlayer.prototype.play = function() {
    this.state = VideoPlayer.playerState.PLAYING;
    this.player.play();
    return this.controls.onPlay();
  };

  VideoPlayer.prototype.pause = function() {
    this.state = VideoPlayer.playerState.PAUSED;
    this.player.pause();
    return this.controls.onPause();
  };

  VideoPlayer.prototype.stop = function() {
    this.state = VideoPlayer.playerState.ENDED;
    this.player.stop();
    this.controls.onStop();
    if (this.loop === true) {
      return this.play();
    }
  };

  VideoPlayer.prototype.mute = function() {
    this.isMuted = true;
    this.player.mute();
    this.controls.onMute();
    return $(this).trigger(VideoPlayer.MUTE);
  };

  VideoPlayer.prototype.unmute = function() {
    this.isMuted = false;
    this.player.unmute();
    this.controls.onUnMute();
    return $(this).trigger(VideoPlayer.UNMUTE);
  };

  VideoPlayer.prototype.getCurrentTime = function() {
    return this.player.getCurrentTime();
  };

  VideoPlayer.prototype.getDuration = function() {
    return this.player.getDuration();
  };

  VideoPlayer.prototype.getState = function() {
    return this.state;
  };

  VideoPlayer.prototype.getSrc = function() {
    return this.player.getSrc();
  };

  VideoPlayer.prototype.setVolume = function(val) {
    return this.player.setVolume(val);
  };

  VideoPlayer.prototype.seek = function(val) {
    if (this.canPlay === false) {
      return this.queueSeek = val;
    } else {
      this.player.seek(val);
      this.controls.onSeek(val / this.player.getDuration());
      return $(this).trigger(VideoPlayer.SEEKED);
    }
  };

  VideoPlayer.prototype.setSrc = function(src) {
    this.canPlay = false;
    return this.player.setSrc(src);
  };

  VideoPlayer.prototype.showControls = function() {
    return this.controls.show();
  };

  VideoPlayer.prototype.hideControls = function() {
    return this.controls.hide();
  };

  VideoPlayer.prototype._onShieldClick = function() {
    if (this.state === VideoPlayer.playerState.PLAYING) {
      this.pause();
      return $(this).trigger(VideoPlayer.SHIELD_CLICK);
    } else {
      return this.play();
    }
  };

  VideoPlayer.prototype._onControlsPlay = function() {
    return this.play();
  };

  VideoPlayer.prototype._onControlsPause = function() {
    return this.pause();
  };

  VideoPlayer.prototype._onControlsStop = function() {
    this.pause();
    return this.seek(0);
  };

  VideoPlayer.prototype._onControlsFullscreen = function() {};

  VideoPlayer.prototype._onControlsVolume = function() {
    if (this.isMuted === true) {
      return this.unmute();
    } else {
      return this.mute();
    }
  };

  VideoPlayer.prototype._onControlsSeekStart = function() {
    this.tempState = this.state;
    return this.pause();
  };

  VideoPlayer.prototype._onControlsSeekEnd = function(e, perc) {
    this.seek(perc * this.getDuration());
    if (this.tempState === VideoPlayer.playerState.PLAYING) {
      return this.play();
    }
  };

  VideoPlayer.prototype._onPlayerCanPlay = function() {
    this.canPlay = true;
    if (this.queueSeek !== null) {
      this.seek(this.queueSeek);
      this.queueSeek = null;
    }
    this.controls.setTotalTime(this.getDuration());
    return $(this).trigger(VideoPlayer.CANPLAY);
  };

  VideoPlayer.prototype._onPlayerProgress = function() {
    return $(this).trigger(VideoPlayer.PROGRESS);
  };

  VideoPlayer.prototype._onPlayerTimeUpdate = function() {
    $(this).trigger(VideoPlayer.TIMEUPDATE);
    if (this.state === VideoPlayer.playerState.PLAYING) {
      return this.controls.onUpdate(this.getCurrentTime() / this.getDuration());
    }

    /*clearTimeout(@bufferingInterval)
    		@bufferingInterval = setTimeout () =>
    			if @state != VideoPlayer.playerState.PAUSED
    				@state = VideoPlayer.playerState.BUFFERING
    				@isBuffering = true
    				$(@).trigger(VideoPlayer.BUFFERING)
    		, 500
     */
  };

  VideoPlayer.prototype._onPlayerWaiting = function() {
    return $(this).trigger(VideoPlayer.WAITING);
  };

  VideoPlayer.prototype._onPlayerPlaying = function() {
    this.isBuffering = false;
    return $(this).trigger(VideoPlayer.PLAYING);
  };

  VideoPlayer.prototype._onPlayerEnded = function() {
    this.stop();
    return $(this).trigger(VideoPlayer.ENDED);
  };

  VideoPlayer.prototype._onPlayerPaused = function() {
    return $(this).trigger(VideoPlayer.PAUSED);
  };

  return VideoPlayer;

})();

VideoPlayer_Controls = (function() {
  function VideoPlayer_Controls(options) {
    this.setTotalTime = __bind(this.setTotalTime, this);
    this.show = __bind(this.show, this);
    this.hide = __bind(this.hide, this);
    this.onUnMute = __bind(this.onUnMute, this);
    this.onMute = __bind(this.onMute, this);
    this.onSeek = __bind(this.onSeek, this);
    this.onStop = __bind(this.onStop, this);
    this.onUpdate = __bind(this.onUpdate, this);
    this.onBuffering = __bind(this.onBuffering, this);
    this.onPause = __bind(this.onPause, this);
    this.onPlay = __bind(this.onPlay, this);
    this._sortTime = __bind(this._sortTime, this);
    this._changeTime = __bind(this._changeTime, this);
    this._onMouseMove = __bind(this._onMouseMove, this);
    this._onProgressBarEnd = __bind(this._onProgressBarEnd, this);
    this._onProgressBarChange = __bind(this._onProgressBarChange, this);
    this._onProgressBarStart = __bind(this._onProgressBarStart, this);
    this._onVolumeButtonClick = __bind(this._onVolumeButtonClick, this);
    this._onFullscreenButtonClick = __bind(this._onFullscreenButtonClick, this);
    this._onStopButtonClick = __bind(this._onStopButtonClick, this);
    this._onPauseButtonClick = __bind(this._onPauseButtonClick, this);
    this._onPlayButtonClick = __bind(this._onPlayButtonClick, this);
    this._onShieldClick = __bind(this._onShieldClick, this);
    this.container = options.container, this.poster = options.poster, this.autoplay = options.autoplay, this.hideControlsAllowed = options.hideControlsAllowed;
    this._areControlsHidden = false;
    this._initInterface();
    this._initEvents();
  }

  VideoPlayer_Controls.TEMPLATE = "";

  VideoPlayer_Controls.SHIELD_CLICK = 'shield_click';

  VideoPlayer_Controls.PLAY = 'play';

  VideoPlayer_Controls.PAUSE = 'pause';

  VideoPlayer_Controls.STOP = 'stop';

  VideoPlayer_Controls.FULLSCREEN = 'fullscreen';

  VideoPlayer_Controls.VOLUME = 'volume';

  VideoPlayer_Controls.SEEK_START = 'seek_start';

  VideoPlayer_Controls.SEEK_END = 'seek_end';

  VideoPlayer_Controls.prototype._initInterface = function() {
    this.controls = $(VideoPlayer_Controls.TEMPLATE);
    this.container.append(this.controls);
    if (this.autoplay !== true && this.poster) {
      this.poster = $("<img src=\"" + this.poster + "\" class=\"poster\" />");
      this.container.append(this.poster);
    }
    this.shield = this.container.find('.shield');
    this.playButton = this.container.find('.play-button');
    this.pauseButton = this.container.find('.pause-button');
    this.stopButton = this.container.find('.stop-button');
    this.fullscreenButton = this.container.find('.fullscreen-button');
    this.volumeButton = this.container.find('.volume-button');
    this.timelineContainer = this.container.find('.timeline-container');
    this.timelineProgress = this.timelineContainer.children('.progress');
    this.timeContainer = this.container.find('.time-container');
    this.timeCurrent = this.timeContainer.find('.time-current');
    this.timeTotal = this.timeContainer.find('.time-total');
    return this.progressBar = new UI_Slider({
      container: this.timelineContainer
    });
  };

  VideoPlayer_Controls.prototype._initEvents = function() {
    this.shield.on(Event.CLICK, this._onShieldClick);
    this.playButton.on(Event.CLICK, this._onPlayButtonClick);
    this.pauseButton.on(Event.CLICK, this._onPauseButtonClick);
    this.stopButton.on(Event.CLICK, this._onStopButtonClick);
    this.fullscreenButton.on(Event.CLICK, this._onFullscreenButtonClick);
    this.volumeButton.on(Event.CLICK, this._onVolumeButtonClick);
    $(this.progressBar).on(UI_Slider.START, this._onProgressBarStart);
    $(this.progressBar).on(UI_Slider.CHANGE, this._onProgressBarChange);
    $(this.progressBar).on(UI_Slider.END, this._onProgressBarEnd);
    if (this.hideControlsAllowed) {
      return this.container.on(Event.MOUSEMOVE, this._onMouseMove);
    }
  };

  VideoPlayer_Controls.prototype._onShieldClick = function() {
    return $(this).trigger(VideoPlayer_Controls.SHIELD_CLICK);
  };

  VideoPlayer_Controls.prototype._onPlayButtonClick = function() {
    return $(this).trigger(VideoPlayer_Controls.PLAY);
  };

  VideoPlayer_Controls.prototype._onPauseButtonClick = function() {
    return $(this).trigger(VideoPlayer_Controls.PAUSE);
  };

  VideoPlayer_Controls.prototype._onStopButtonClick = function() {
    return $(this).trigger(VideoPlayer_Controls.STOP);
  };

  VideoPlayer_Controls.prototype._onFullscreenButtonClick = function() {
    return $(this).trigger(VideoPlayer_Controls.FULLSCREEN);
  };

  VideoPlayer_Controls.prototype._onVolumeButtonClick = function() {
    return $(this).trigger(VideoPlayer_Controls.VOLUME);
  };

  VideoPlayer_Controls.prototype._onProgressBarStart = function() {
    $(this).trigger(VideoPlayer_Controls.SEEK_START);
    return this.timelineProgress.css({
      'width': this.progressBar.perc * this.timelineContainer.width()
    });
  };

  VideoPlayer_Controls.prototype._onProgressBarChange = function() {
    return this.timelineProgress.css({
      'width': this.progressBar.perc * this.timelineContainer.width()
    });
  };

  VideoPlayer_Controls.prototype._onProgressBarEnd = function() {
    return $(this).trigger(VideoPlayer_Controls.SEEK_END, [this.progressBar.perc]);
  };

  VideoPlayer_Controls.prototype._onMouseMove = function() {
    this.show();
    clearTimeout(this._moveTimer);
    return this._moveTimer = setTimeout((function(_this) {
      return function() {
        return _this.hide();
      };
    })(this), this._hideControlsDelay);
  };

  VideoPlayer_Controls.prototype._changeTime = function(perc) {
    var newTime;
    newTime = this._sortTime(perc * this.duration);
    if (newTime !== this.timeText) {
      this.timeText = newTime;
      return this.timeCurrent.text(newTime);
    }
  };

  VideoPlayer_Controls.prototype._sortTime = function(time) {
    var m, s;
    m = ~~(time / 60);
    s = ~~(time - m * 60);
    return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
  };

  VideoPlayer_Controls.prototype.onPlay = function() {
    return this.container.addClass('playing').removeClass('paused stopped');
  };

  VideoPlayer_Controls.prototype.onPause = function() {
    return this.container.addClass('paused').removeClass('playing stopped');
  };

  VideoPlayer_Controls.prototype.onBuffering = function() {};

  VideoPlayer_Controls.prototype.onUpdate = function(perc) {
    this.timelineProgress.css({
      'width': perc * this.timelineContainer.width()
    });
    return this._changeTime(perc);
  };

  VideoPlayer_Controls.prototype.onStop = function() {
    this.container.addClass('stopped').removeClass('playing paused');
    return this.timelineProgress.css({
      'width': 0
    });
  };

  VideoPlayer_Controls.prototype.onSeek = function(perc) {
    this.timelineProgress.css({
      'width': perc * this.timelineContainer.width()
    });
    return this._changeTime(perc);
  };

  VideoPlayer_Controls.prototype.onMute = function() {
    return this.container.addClass('muted');
  };

  VideoPlayer_Controls.prototype.onUnMute = function() {
    return this.container.removeClass('muted');
  };

  VideoPlayer_Controls.prototype.hide = function() {
    if (this._areControlsHidden === false) {
      this.controls.addClass('hidden');
      return this._areControlsHidden = true;
    }
  };

  VideoPlayer_Controls.prototype.show = function() {
    if (this._areControlsHidden === true) {
      this.controls.removeClass('hidden');
      return this._areControlsHidden = false;
    }
  };

  VideoPlayer_Controls.prototype.setTotalTime = function(duration) {
    this.duration = duration;
    return this.timeTotal.text(this._sortTime(duration));
  };

  return VideoPlayer_Controls;

})();

VideoPlayer_HTML = (function() {
  function VideoPlayer_HTML(options) {
    this.setSrc = __bind(this.setSrc, this);
    this.seek = __bind(this.seek, this);
    this.setVolume = __bind(this.setVolume, this);
    this.getSrc = __bind(this.getSrc, this);
    this.getState = __bind(this.getState, this);
    this.getDuration = __bind(this.getDuration, this);
    this.getCurrentTime = __bind(this.getCurrentTime, this);
    this.unmute = __bind(this.unmute, this);
    this.mute = __bind(this.mute, this);
    this.stop = __bind(this.stop, this);
    this.pause = __bind(this.pause, this);
    this.play = __bind(this.play, this);
    this._onPause = __bind(this._onPause, this);
    this._onEnded = __bind(this._onEnded, this);
    this._onPlaying = __bind(this._onPlaying, this);
    this._onWaiting = __bind(this._onWaiting, this);
    this._onTimeUpdate = __bind(this._onTimeUpdate, this);
    this._onProgress = __bind(this._onProgress, this);
    this._onLoad = __bind(this._onLoad, this);
    this._onCanPlay = __bind(this._onCanPlay, this);
    this._initEvents = __bind(this._initEvents, this);
    this.container = options.container, this.src = options.src;
    this.html = "<div class=\"video-container\">\n	<video>\n	</video>\n</div>";
    this.videoContainer = $(this.html);
    this.$video = this.videoContainer.children('video');
    this.video = this.$video[0];
    this.volume = 1;
    this.setSrc(this.src);
    this.container.html(this.videoContainer);
    this._initEvents();
  }

  VideoPlayer_HTML.prototype._initEvents = function() {
    return this.$video.on('load', this._onload).on('canplay', this._onCanPlay).on('progress', this._onProgress).on('timeupdate', this._onTimeUpdate).on('waiting', this._onWaiting).on('playing', this._onPlaying).on('ended', this._onEnded).on('pause', this._onPause);
  };

  VideoPlayer_HTML.prototype._onCanPlay = function() {
    return $(this).trigger(VideoPlayer.CANPLAY);
  };

  VideoPlayer_HTML.prototype._onLoad = function() {};

  VideoPlayer_HTML.prototype._onProgress = function() {
    return $(this).trigger(VideoPlayer.PROGRESS);
  };

  VideoPlayer_HTML.prototype._onTimeUpdate = function() {
    return $(this).trigger(VideoPlayer.TIMEUPDATE);
  };

  VideoPlayer_HTML.prototype._onWaiting = function() {
    return $(this).trigger(VideoPlayer.WAITING);
  };

  VideoPlayer_HTML.prototype._onPlaying = function() {
    return $(this).trigger(VideoPlayer.PLAYING);
  };

  VideoPlayer_HTML.prototype._onEnded = function() {
    return $(this).trigger(VideoPlayer.ENDED);
  };

  VideoPlayer_HTML.prototype._onPause = function() {
    return $(this).trigger(VideoPlayer.PAUSED);
  };

  VideoPlayer_HTML.prototype.play = function() {
    return this.video.play();
  };

  VideoPlayer_HTML.prototype.pause = function() {
    return this.video.pause();
  };

  VideoPlayer_HTML.prototype.stop = function() {
    this.video.currentTime = 0;
    return this.video.pause();
  };

  VideoPlayer_HTML.prototype.mute = function() {
    return this.video.volume = 0;
  };

  VideoPlayer_HTML.prototype.unmute = function() {
    return this.video.volume = this.volume;
  };

  VideoPlayer_HTML.prototype.getCurrentTime = function() {
    return this.video.currentTime;
  };

  VideoPlayer_HTML.prototype.getDuration = function() {
    return this.video.duration;
  };

  VideoPlayer_HTML.prototype.getState = function() {
    return null;
  };

  VideoPlayer_HTML.prototype.getSrc = function() {
    return this.video.src;
  };

  VideoPlayer_HTML.prototype.setVolume = function(val) {
    this.volume = val;
    return this.video.volume = val;
  };

  VideoPlayer_HTML.prototype.seek = function(val) {
    return this.video.currentTime = val;
  };

  VideoPlayer_HTML.prototype.setSrc = function(src) {
    var sources;
    if (src) {
      this.srcNoExt = src.substr(0, src.lastIndexOf("."));
    }
    sources = "<source src=\"" + this.srcNoExt + ".webm\" type=\"video/webm\" />\n<source src=\"" + this.srcNoExt + ".mp4\" type=\"video/mp4\" />\n<source src=\"" + this.srcNoExt + ".ogv\" type=\"video/ogg\" />";
    this.$video.html(sources);
    return this.video.load();
  };

  return VideoPlayer_HTML;

})();

VideoPlayer_Templates = (function() {
  function VideoPlayer_Templates() {}

  VideoPlayer_Templates.PLAY_BUTTON = "<span class=\"play-button\"><i></i></span>";

  VideoPlayer_Templates.PAUSE_BUTTON = "<span class=\"pause-button\"><i></i></span>";

  VideoPlayer_Templates.STOP_BUTTON = "<span class=\"stop-button\"></span>";

  VideoPlayer_Templates.FULLSCREEN_BUTTON = "<span class=\"fullscreen-button\"></span>";

  VideoPlayer_Templates.VOLUME_BUTTON = "<span class=\"volume-button\"></span>";

  VideoPlayer_Templates.PROGRESS = "<div class=\"progress-container\">\n	<div class=\"background\"></div>\n	<div class=\"buffering\"></div>\n	<div class=\"progress\"></div>\n</div>";

  return VideoPlayer_Templates;

})();

SocialSharing = (function() {
  function SocialSharing() {
    this._onLinkClick = __bind(this._onLinkClick, this);
    this._initEvents = __bind(this._initEvents, this);
    this.links = $('.social-link');
    this._initEvents();
  }

  SocialSharing.prototype._initEvents = function() {
    return $(document).on(Event.CLICK, '.social-link', this._onLinkClick);
  };

  SocialSharing.prototype._onLinkClick = function(e) {
    var height, leftPosition, link, options, topPosition, width, windowFeatures;
    e.preventDefault();
    link = $(e.currentTarget).attr('href');
    width = 800;
    height = 500;
    leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    options = windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
    return window.open(link, 'Withings Activité', options);
  };

  return SocialSharing;

})();

App = (function() {
  function App() {
    this.update = __bind(this.update, this);
    this._onHomeHidden = __bind(this._onHomeHidden, this);
    this._onWindowBlur = __bind(this._onWindowBlur, this);
    this._onWindowFocus = __bind(this._onWindowFocus, this);
    this._onResize = __bind(this._onResize, this);
    this._onKeyDown = __bind(this._onKeyDown, this);
    this._initLang = __bind(this._initLang, this);
    this._initEvents = __bind(this._initEvents, this);
    this._initContent = __bind(this._initContent, this);
    console.log('%c# --------------------o Running Desktop', 'background: #42e34d; color: #F0F0F0;');
    W.init();
    this.body = $('.body');
    this._initLang();
    this._initContent();
    this._initEvents();
    this._onResize();
  }

  App.prototype._initContent = function() {
    W.time = {
      old: +new Date()
    };
    this.home = new Home();
    $('form').each((function(_this) {
      return function(key, form) {
        return new Form({
          container: $(form)
        });
      };
    })(this));
    return this._isWindowFocused = true;
  };

  App.prototype._initEvents = function() {
    W.window.on('resize', this._onResize).on('focus', this._onWindowFocus).on('blur', this._onWindowBlur);
    return $(this.home).on(Home.HIDDEN, this._onHomeHidden);
  };

  App.prototype._initLang = function() {
    var availablesLang, lang, product, trad;
    lang = (navigator.language || navigator.userLanguage).substr(0, 2);
    availablesLang = [];
    $.each(Trads, (function(_this) {
      return function(key, trad) {
        return availablesLang.push(key);
      };
    })(this));
    if (__indexOf.call(availablesLang, lang) < 0) {
      lang = 'en';
    }
    trad = Trads[lang];
    product = trad.products[currentWeek];
    this.hbSource = this.body.html();
    this.hbTemplate = Handlebars.compile(this.hbSource);
    W.lang = lang;
    this.body.html(this.hbTemplate({
      'trad': trad,
      'product': product
    }));
    return setTimeout((function(_this) {
      return function() {
        return _this.body.css('display', 'block');
      };
    })(this), 100);
  };

  App.prototype._onKeyDown = function(e) {};

  App.prototype._onResize = function() {
    W.sw = screen.width;
    W.sh = screen.height;
    W.ww = W.window.width();
    W.wh = W.window.height();
    if (W.sw > 600) {
      W.body.css({
        'height': W.wh,
        'width': W.ww
      });
    } else {
      W.body.css({
        'height': 'auto',
        'width': '100%'
      });
    }
    if (this.home) {
      this.home.resize();
    }
    if (this.game) {
      return this.game.resize();
    }
  };

  App.prototype._onWindowFocus = function() {
    return this._isWindowFocused = true;
  };

  App.prototype._onWindowBlur = function() {
    return this._isWindowFocused = false;
  };

  App.prototype._onHomeHidden = function() {
    this.home.container.remove();
    return this.game = new Game();
  };

  App.prototype.update = function() {
    W.time.now = +new Date();
    W.time.delta = (W.time.now - W.time.old) / 1000;
    W.time.old = W.time.now;
    if (this.game) {
      return this.game.update();
    }
  };

  return App;

})();

$(function() {
  var app, tick;
  app = new App();
  return (tick = function() {
    app.update();
    return window.requestAnimationFrame(tick);
  })();
});

Game = (function() {
  function Game() {
    this.update = __bind(this.update, this);
    this.render = __bind(this.render, this);
    this.levelUp = __bind(this.levelUp, this);
    this.resize = __bind(this.resize, this);
    this.launch = __bind(this.launch, this);
    this._onGameOverHidden = __bind(this._onGameOverHidden, this);
    this._onTutoHidden = __bind(this._onTutoHidden, this);
    this._onGridWrongAnswer = __bind(this._onGridWrongAnswer, this);
    this._onGridGoodAnswer = __bind(this._onGridGoodAnswer, this);
    this._onCountDownEnd = __bind(this._onCountDownEnd, this);
    this._onTryAgainClick = __bind(this._onTryAgainClick, this);
    this._onGameClick = __bind(this._onGameClick, this);
    this._updateVals = __bind(this._updateVals, this);
    this._stopGame = __bind(this._stopGame, this);
    this._playGame = __bind(this._playGame, this);
    this._pauseGame = __bind(this._pauseGame, this);
    this._initGame = __bind(this._initGame, this);
    this._loadPictures = __bind(this._loadPictures, this);
    this._initEvents = __bind(this._initEvents, this);
    this._initContent = __bind(this._initContent, this);
    this.container = $('.game');
    this._initContent();
    this._initEvents();
  }

  Game.prototype._initContent = function() {
    W.status = {
      level: -1,
      lives: Parameters.lives,
      paused: true,
      stopped: false,
      loading: true,
      launched: false,
      initialized: true,
      ended: false,
      shared: false,
      winner: false
    };
    this.gameParameters = Parameters;
    this._gameLaunched = false;
    this.canvas = this.container.find('canvas')[0];
    this.ctx = this.canvas.getContext('2d');
    this.screens = new Screens();
    this.snow = new Snow({
      ctx: this.ctx
    });
    this.countDown = new CountDown({
      ctx: this.ctx
    });
    W.grid = {
      padding: 75,
      gap: 20
    };
    this.grid = new Grid({
      ctx: this.ctx
    });
    this.livesVal = $('.lives span');
    this.levelVal = $('.level span');
    this.levelVal.siblings('sup').text('/' + Parameters.levels.length);
    this._loadPictures();
    return this.resize();
  };

  Game.prototype._initEvents = function() {
    this.container.on(Event.CLICK, this._onGameClick);
    $(this.countDown).on(CountDown.END, this._onCountDownEnd);
    $(this.grid).on(Grid.GOOD_ANSWER, this._onGridGoodAnswer).on(Grid.WRONG_ANSWER, this._onGridWrongAnswer);
    $('.button.try-again').on(Event.CLICK, this._onTryAgainClick);
    return $(this.screens).on(Screens.TUTO_HIDDEN, this._onTutoHidden).on(Screens.GAMEOVER_HIDDEN, this._onGameOverHidden);
  };

  Game.prototype._loadPictures = function() {
    var inc, perc;
    perc = 0;
    inc = 0;
    W.grid.picLength = 29;
    return $.each(Pics, (function(_this) {
      return function(key, pack) {
        return $.each(pack, function(key, subdiv) {
          return $.each(subdiv, function(key, pic) {
            pic.img = new Image();
            pic.img.onload = function() {
              perc = inc++ / W.grid.picLength;
              if (inc === W.grid.picLength) {
                return _this._initGame();
              }
            };
            return pic.img.src = mediasPath + pic.filename;
          });
        });
      };
    })(this));
  };

  Game.prototype._initGame = function() {
    this.resize();
    return $('.tuto').find('.start-button').css('display', 'block').siblings('.loading').remove();
  };

  Game.prototype._pauseGame = function() {
    W.body.removeClass('playing');
    W.status.paused = true;
    if (W.status.lives === 0) {
      this._stopGame();
    } else {
      $('.try-again').css('display', 'block');
      W.status.lives--;
    }
    this.snow.setColors([]);
    this.container.addClass('hidden');
    return this._updateVals();
  };

  Game.prototype._playGame = function() {
    W.body.addClass('playing');
    W.status.paused = false;
    W.status.stopped = false;
    $('.try-again').css('display', 'none');
    this.countDown.reset();
    this.grid.reset();
    return this.container.removeClass('hidden');
  };

  Game.prototype._stopGame = function() {
    W.body.removeClass('playing');
    W.status.stopped = true;
    this.snow.setColors(['#FFFFFF']);
    return this.container.addClass('hidden');
  };

  Game.prototype._updateVals = function() {
    this.livesVal.text(W.status.lives);
    return this.levelVal.text(W.status.level + 1);
  };

  Game.prototype._onGameClick = function(e) {
    if (W.status.paused === false && e.target.nodeName === 'CANVAS') {
      return this.grid.click(e);
    }
  };

  Game.prototype._onTryAgainClick = function() {
    this.snow.setColors(this.grid.getColors());
    return this._playGame();
  };

  Game.prototype._onCountDownEnd = function() {
    return this._onGridWrongAnswer();
  };

  Game.prototype._onGridGoodAnswer = function() {
    if (W.status.level < Parameters.levels.length - 1) {
      return this.levelUp();
    } else {
      this._stopGame();
      W.status.ended = true;
      W.status.winner = true;
      return this.screens.displayWin();
    }
  };

  Game.prototype._onGridWrongAnswer = function() {
    if (W.status.lives > 1) {
      this._pauseGame();
      this.screens.displayTryAgain();
    } else {
      if (W.status.shared === false) {
        W.status.paused = true;
        this.screens.displayGameOver();
      } else {
        W.status.ended = true;
        this.screens.displayLoose();
      }
      this._stopGame();
    }
    return this._updateVals();
  };

  Game.prototype._onTutoHidden = function() {
    return this.launch();
  };

  Game.prototype._onGameOverHidden = function() {
    W.status.lives = Parameters.lives;
    W.status.level = -1;
    this.launch();
    return this._updateVals();
  };

  Game.prototype.launch = function() {
    W.status.launched = true;
    this._gameLaunched = true;
    this.levelUp();
    return this._playGame();
  };

  Game.prototype.resize = function() {
    W.grid.radius = (Math.min(W.ww, W.wh) - W.grid.padding * 2) * 0.5;
    W.grid.size = 2 * (Math.sin(Math.PI * 0.25) * W.grid.radius);
    W.grid.clockRadius = W.grid.radius + 20;
    W.grid.bottomSpace = 0;
    W.grid.gap = Math.max(5, W.grid.size * 0.05 / W.grid.lines);
    if (W.ww < 640) {
      W.grid.radius = 30;
      W.grid.size = W.ww - 40;
      W.grid.clockRadius = 40;
      this.container.css('height', W.grid.size + 200 + 20);
      this.canvas.width = W.grid.size;
      this.canvas.height = W.grid.size + 200;
    } else {
      this.container.css('height', 'auto');
      this.canvas.width = W.ww;
      this.canvas.height = W.wh;
    }
    if (W.ww > W.wh) {
      W.grid.top = W.grid.padding + W.grid.radius - W.grid.size * 0.5;
      W.grid.left = W.ww * 0.5 - W.grid.radius + (W.grid.radius - W.grid.size * 0.5);
    } else {
      W.grid.top = (W.wh - W.grid.padding - W.grid.radius) * 0.5;
      W.grid.left = W.ww * 0.5 - W.grid.radius + (W.grid.radius - W.grid.size * 0.5);
    }
    if (this._gameLaunched === true) {
      this.render(true);
    }
    return this.snow.resize();
  };

  Game.prototype.levelUp = function() {
    W.status.level++;
    W.grid.lines = ~~Math.sqrt(Parameters.levels[W.status.level].picsLength);
    this.resize();
    this.countDown.levelUp();
    this.grid.levelUp();
    this.snow.setColors(this.grid.getColors());
    this.snow.levelUp();
    return this._updateVals();
  };

  Game.prototype.render = function(resized) {
    this.ctx.clearRect(0, 0, W.ww, W.wh);
    if (W.status.initialized === true) {
      this.snow.render();
      if (W.status.ended !== true) {
        this.countDown.render(resized);
      }
    }
    if (W.status.launched === true && W.status.paused !== true && W.status.stopped !== true) {
      return this.grid.render(resized);
    }
  };

  Game.prototype.update = function() {
    return this.render();
  };

  return Game;

})();

Parameters = {
  time: 5,
  lives: 1,
  levels: [
    {
      difficulty: {
        colors: 2,
        subColors: 1,
        pics: 1
      },
      picsLength: 9,
      moving: false
    }, {
      difficulty: {
        colors: 3,
        subColors: 1,
        pics: 1
      },
      picsLength: 9,
      moving: false
    }, {
      difficulty: {
        colors: 4,
        subColors: 1,
        pics: 1
      },
      picsLength: 9,
      moving: false
    }, {
      difficulty: {
        colors: 2,
        subColors: 1,
        pics: 2
      },
      picsLength: 16,
      moving: false
    }, {
      difficulty: {
        colors: 2,
        subColors: 1,
        pics: 2
      },
      picsLength: 16,
      moving: false
    }, {
      difficulty: {
        colors: 2,
        subColors: 1,
        pics: 2
      },
      picsLength: 16,
      moving: false
    }, {
      difficulty: {
        colors: 2,
        subColors: 1,
        pics: 2
      },
      picsLength: 16,
      moving: false
    }, {
      difficulty: {
        colors: 2,
        subColors: 1,
        pics: 2
      },
      picsLength: 16,
      moving: false
    }, {
      difficulty: {
        colors: 1,
        subColors: 2,
        pics: 1
      },
      picsLength: 9,
      moving: true
    }, {
      difficulty: {
        colors: 2,
        subColors: 1,
        pics: 1
      },
      picsLength: 16,
      moving: true
    }, {
      difficulty: {
        colors: 1,
        subColors: 2,
        pics: 2
      },
      picsLength: 16,
      moving: true
    }, {
      difficulty: {
        colors: 2,
        subColors: 3,
        pics: 1
      },
      picsLength: 16,
      moving: true
    }, {
      difficulty: {
        colors: 1,
        subColors: 2,
        pics: 2
      },
      picsLength: 16,
      moving: true
    }, {
      difficulty: {
        colors: 2,
        subColors: 1,
        pics: 1
      },
      picsLength: 16,
      moving: true
    }, {
      difficulty: {
        colors: 2,
        subColors: 2,
        pics: 1
      },
      picsLength: 16,
      moving: true
    }
  ]
};

Parameters = {
  time: 50,
  lives: 1,
  levels: [
    {
      difficulty: {
        colors: 2,
        subColors: 1,
        pics: 1
      },
      picsLength: 9,
      moving: false
    }
  ]
};

Pics = [
  [
    [
      {
        'filename': '07.jpg',
        'color': '#fcc729'
      }, {
        'filename': '23.jpg',
        'color': '#f1cf61'
      }, {
        'filename': '29.jpg',
        'color': '#ffd640'
      }, {
        'filename': '30.jpg',
        'color': '#ffd262'
      }
    ], [
      {
        'filename': '01.jpg',
        'color': '#f4a36e'
      }, {
        'filename': '13.jpg',
        'color': '#ed6442'
      }, {
        'filename': '26.jpg',
        'color': '#eb5836'
      }, {
        'filename': '34.jpg',
        'color': '#eb6444'
      }, {
        'filename': '36.jpg',
        'color': '#ef6c26'
      }
    ], [
      {
        'filename': '15.jpg',
        'color': '#e93d3d'
      }
    ]
  ], [
    [
      {
        'filename': '03.jpg',
        'color': '#fbdee2'
      }, {
        'filename': '08.jpg',
        'color': '#f6b1b4'
      }, {
        'filename': '41.jpg',
        'color': '#f3abaf'
      }
    ], [
      {
        'filename': '19.jpg',
        'color': '#e9758c'
      }, {
        'filename': '21.jpg',
        'color': '#ef829f'
      }, {
        'filename': '27.jpg',
        'color': '#ef7695'
      }, {
        'filename': '38.jpg',
        'color': '#f083a0'
      }
    ], [
      {
        'filename': '11.jpg',
        'color': '#d4647a'
      }, {
        'filename': '18.jpg',
        'color': '#c14f68'
      }, {
        'filename': '31.jpg',
        'color': '#c9586c'
      }
    ]
  ], [
    [
      {
        'filename': '02.jpg',
        'color': '#b3d9e2'
      }, {
        'filename': '25.jpg',
        'color': '#8dced0'
      }, {
        'filename': '42.jpg',
        'color': '#84cbe7'
      }
    ], [
      {
        'filename': '12.jpg',
        'color': '#48b2e4'
      }, {
        'filename': '35.jpg',
        'color': '#6ab6d8'
      }, {
        'filename': '37.jpg',
        'color': '#3db7e8'
      }
    ], [
      {
        'filename': '28.jpg',
        'color': '#6d8ac6'
      }, {
        'filename': '33.jpg',
        'color': '#5b7abd'
      }, {
        'filename': '40.jpg',
        'color': '#6f8fca'
      }
    ], [
      {
        'filename': '09.jpg',
        'color': '#314874'
      }
    ], [
      {
        'filename': '05.jpg',
        'color': '#a79ecb'
      }, {
        'filename': '45.jpg',
        'color': '#8c81b9'
      }
    ]
  ], [
    [
      {
        'filename': '24.jpg',
        'color': '#8fc683'
      }, {
        'filename': '39.jpg',
        'color': '#96c987'
      }, {
        'filename': '44.jpg',
        'color': '#bcd8a7'
      }
    ], [
      {
        'filename': '32.jpg',
        'color': '#d1ce8b'
      }, {
        'filename': '43.jpg',
        'color': '#caca82'
      }
    ], [
      {
        'filename': '10.jpg',
        'color': '#b2a86d'
      }, {
        'filename': '16.jpg',
        'color': '#796c40'
      }
    ]
  ], [
    [
      {
        'filename': '17.jpg',
        'color': '#f8f2e6'
      }, {
        'filename': '20.jpg',
        'color': '#f5eedc'
      }, {
        'filename': '22.jpg',
        'color': '#f1ecd9'
      }
    ], [
      {
        'filename': '06.jpg',
        'color': '#ebc9ad'
      }, {
        'filename': '14.jpg',
        'color': '#e1c2a5'
      }
    ], [
      {
        'filename': '04.jpg',
        'color': '#babbbd'
      }
    ]
  ]
];

mediasPath = '/dev/medias/products/';

Form = (function() {
  function Form(options) {
    this._onInputBlur = __bind(this._onInputBlur, this);
    this._onInputFocus = __bind(this._onInputFocus, this);
    this._onSubmit = __bind(this._onSubmit, this);
    this._displayError = __bind(this._displayError, this);
    this._initEvents = __bind(this._initEvents, this);
    this.container = options.container;
    this.submitButton = this.container.find('.submit');
    this._initEvents();
  }

  Form.prototype._initEvents = function() {
    this.container.on('submit', this._onSubmit);
    this.submitButton.on(Event.CLICK, this._onSubmit);
    return this.container.find('.input-text').on(Event.CLICK, this._onInputFocus).find('input').on('blur', this._onInputBlur);
  };

  Form.prototype._displayError = function(error) {
    console.log(this.container.find('.error.' + error));
    return this.container.find('.error.' + error).css('display', 'block');
  };

  Form.prototype._onSubmit = function(e) {
    var allFieldsField;
    e.preventDefault();
    allFieldsField = true;
    this.container.find('input').each((function(_this) {
      return function(key, input) {
        if (input.value === '') {
          return allFieldsField = false;
        }
      };
    })(this));
    if (allFieldsField === false) {
      this._displayError('empty-fields');
      return !1;
    }
    console.log(W, W.status);
    this.container.append('<input type="hidden" name="winner" id="winner" value="' + W.status.winner + '" />');
    this.container.append('<input type="hidden" name="locale" id="locale" value="' + W.lang + '" />');
    console.log(this.container.serialize());
    return $.ajax({
      type: 'POST',
      url: 'http://uniqlo.dev/app_dev.php/api/users.json',
      dataType: 'json',
      data: this.container.serialize(),
      success: (function(_this) {
        return function(response) {
          return console.log('success', response);
        };
      })(this),
      error: (function(_this) {
        return function(response) {
          return console.log('error', $.parseJSON(response.responseText));
        };
      })(this)
    });
  };

  Form.prototype._onInputFocus = function(e) {
    var $this;
    $this = $(e.currentTarget);
    return $this.addClass('focus');
  };

  Form.prototype._onInputBlur = function(e) {
    var $this;
    $this = $(e.currentTarget);
    if ($this.val() === '') {
      return $this.parents('.input-text').removeClass('focus');
    }
  };

  return Form;

})();

Home = (function() {
  Home.HIDDEN = 'hidden';

  function Home() {
    this.resize = __bind(this.resize, this);
    this._onPlayButtonClick = __bind(this._onPlayButtonClick, this);
    this._initEvents = __bind(this._initEvents, this);
    this._initContent = __bind(this._initContent, this);
    this.container = $('.home');
    this.carousel = this.container.find('.carousel');
    this._initContent();
    this._initEvents();
  }

  Home.prototype._initContent = function() {
    this.pics = [];
    this.loader = new Loader({
      container: this.carousel,
      custom: true,
      each: (function(_this) {
        return function(elm, img, key) {
          var pic;
          pic = $(img);
          pic.addClass('hidden');
          elm.replaceWith(pic);
          pic[0].offsetHeight;
          pic.removeClass('hidden');
          if (pic.hasClass('background')) {
            _this.pics.push(pic);
          }
          return _this.resize();
        };
      })(this)
    });
    this.carousel = new Carousel({
      container: this.carousel,
      delay: 4000,
      onUpdate: (function(_this) {
        return function(indexes) {
          return _this.container.removeClass('state-' + indexes.prev).addClass('state-' + indexes.current);
        };
      })(this)
    });
    return this.container.addClass('state-0');
  };

  Home.prototype._initEvents = function() {
    return this.container.find('.play-button').on(Event.CLICK, this._onPlayButtonClick);
  };

  Home.prototype._onPlayButtonClick = function() {
    this.container.addClass('hidden');
    $('.uniqlo-logo.main').addClass('displayed');
    return setTimeout((function(_this) {
      return function() {
        return $(_this).trigger(Home.HIDDEN);
      };
    })(this), 1000);
  };

  Home.prototype.resize = function() {
    var dims, i, pic, _i, _ref, _results;
    if (W.ww < 640) {
      dims = Utils.getCoverSizeImage(600, 600, W.ww, 320);
    } else {
      dims = Utils.getCoverSizeImage(600, 600, W.ww * 0.5, W.wh);
    }
    _results = [];
    for (i = _i = 0, _ref = this.pics.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      pic = this.pics[i];
      _results.push(pic.css(dims));
    }
    return _results;
  };

  return Home;

})();

Screens = (function() {
  Screens.TUTO_HIDDEN = 'tuto_hidden';

  Screens.GAMEOVER_HIDDEN = 'gameover_hidden';

  function Screens() {
    this.displayLoose = __bind(this.displayLoose, this);
    this.displayGameOver = __bind(this.displayGameOver, this);
    this.displayWin = __bind(this.displayWin, this);
    this.displayTryAgain = __bind(this.displayTryAgain, this);
    this.displayTuto = __bind(this.displayTuto, this);
    this._onGetNotifiedButtonClick = __bind(this._onGetNotifiedButtonClick, this);
    this._onFacebookButtonClick = __bind(this._onFacebookButtonClick, this);
    this._onReplayButtonClick = __bind(this._onReplayButtonClick, this);
    this._onStartButtonClick = __bind(this._onStartButtonClick, this);
    this._pageShared = __bind(this._pageShared, this);
    this._initEvents = __bind(this._initEvents, this);
    this._initContent = __bind(this._initContent, this);
    this.container = $('.screen');
    this._initContent();
    this._initEvents();
  }

  Screens.prototype._initContent = function() {
    this.gameOverScreen = this.container.filter('.game-over');
    this.tutoScreen = this.container.filter('.tuto');
    this.tryAgainScreen = this.container.filter('.try-again');
    this.winScreen = this.container.filter('.win');
    this.looseScreen = this.container.filter('.loose');
    this.startButton = this.tutoScreen.find('.start-button');
    this.replayButton = this.gameOverScreen.find('.replay-button');
    this.getNotifiedButton = this.gameOverScreen.find('.get-notified');
    this.sharesLinks = this.gameOverScreen.find('li');
    twttr.ready((function(_this) {
      return function() {
        return twttr.events.bind('tweet', function() {
          return _this._pageShared('twitter');
        });
      };
    })(this));
    return this.displayTuto();
  };

  Screens.prototype._initEvents = function() {
    this.startButton.on(Event.CLICK, this._onStartButtonClick);
    this.replayButton.on(Event.CLICK, this._onReplayButtonClick);
    this.sharesLinks.filter('.facebook').on(Event.CLICK, this._onFacebookButtonClick);
    return this.getNotifiedButton.on(Event.CLICK, this._onGetNotifiedButtonClick);
  };

  Screens.prototype._pageShared = function(type) {
    return this.gameOverScreen.find('.replay-button').css('display', 'block').prev().css('display', 'none');
  };

  Screens.prototype._onStartButtonClick = function() {
    this.tutoScreen.remove();
    return $(this).trigger(Screens.TUTO_HIDDEN);
  };

  Screens.prototype._onReplayButtonClick = function() {
    W.status.shared = true;
    this.gameOverScreen.remove();
    return $(this).trigger(Screens.GAMEOVER_HIDDEN);
  };

  Screens.prototype._onFacebookButtonClick = function() {
    return FB.ui({
      method: 'share',
      href: 'http://uniqlocolors.eu'
    }, (function(_this) {
      return function() {
        return _this._pageShared('facebook');
      };
    })(this));
  };

  Screens.prototype._onGetNotifiedButtonClick = function() {
    this.gameOverScreen.css('display', 'none');
    return this.displayLoose();
  };

  Screens.prototype.displayTuto = function() {
    return setTimeout((function(_this) {
      return function() {
        _this.tutoScreen.css('display', 'block');
        _this.tutoScreen[0].offsetHeight;
        return _this.tutoScreen.addClass('displayed');
      };
    })(this), 1000);
  };

  Screens.prototype.displayTryAgain = function() {
    this.tryAgainScreen.css('display', 'block');
    this.tryAgainScreen[0].offsetHeight;
    return this.tryAgainScreen.addClass('displayed');
  };

  Screens.prototype.displayWin = function() {
    this.winScreen.css('display', 'block');
    this.winScreen[0].offsetHeight;
    return this.winScreen.addClass('displayed');
  };

  Screens.prototype.displayGameOver = function() {
    this.gameOverScreen.css('display', 'block');
    this.gameOverScreen[0].offsetHeight;
    return this.gameOverScreen.addClass('displayed');
  };

  Screens.prototype.displayLoose = function() {
    W.status.ended = true;
    this.looseScreen.css('display', 'block');
    this.looseScreen[0].offsetHeight;
    return this.looseScreen.addClass('displayed');
  };

  return Screens;

})();

Tuto = (function() {
  Tuto.HIDDEN = 'hidden';

  function Tuto() {
    this._onStartButtonClick = __bind(this._onStartButtonClick, this);
    this._display = __bind(this._display, this);
    this._initEvents = __bind(this._initEvents, this);
    this.container = $('.tuto');
    this.startButton = this.container.find('.start-button');
    this._display();
    this._initEvents();
  }

  Tuto.prototype._initEvents = function() {
    return this.startButton.on(Event.CLICK, this._onStartButtonClick);
  };

  Tuto.prototype._display = function() {};

  Tuto.prototype._onStartButtonClick = function() {
    this.container.remove();
    return $(this).trigger(Tuto.HIDDEN);
  };

  return Tuto;

})();

CountDown = (function() {
  CountDown.END = 'END';

  function CountDown(options) {
    this.reset = __bind(this.reset, this);
    this.render = __bind(this.render, this);
    this.levelUp = __bind(this.levelUp, this);
    this._drawClock = __bind(this._drawClock, this);
    this._drawProgressCircle = __bind(this._drawProgressCircle, this);
    this._initContent = __bind(this._initContent, this);
    this.ctx = options.ctx;
    this.countDownInterval = void 0;
    this.arcZero = -Math.PI * 0.5;
    this.arcFull = Math.PI * 2;
    this.currentTimeDeg = this.arcZero;
    this.red = '#FF0000';
    this.tweens = {
      clockPerc: 0,
      dash: []
    };
    this._timeOut = false;
    this._progressPerc = 0;
    this._initContent();
  }

  CountDown.prototype._initContent = function() {
    var i, _i, _results;
    TweenLite.to(this.tweens, 2, {
      clockPerc: 1,
      delay: 0,
      ease: Quint.easeOut,
      delay: 0.5
    });
    _results = [];
    for (i = _i = 0; _i < 60; i = ++_i) {
      this.tweens.dash.push({
        perc: 0
      });
      _results.push(TweenLite.to(this.tweens.dash[i], 2, {
        perc: 1,
        delay: 0 + 1 * i / 60 + 1,
        ease: Quint.easeOut
      }));
    }
    return _results;
  };

  CountDown.prototype._drawProgressCircle = function() {
    var pos, speed, top;
    if (W.ww < 640) {
      top = 100;
    } else {
      top = W.wh * 0.5;
    }
    if (this._timeOut === false && W.status.paused !== true && W.status.stopped !== true) {
      speed = Math.PI * 2 / Parameters.time;
      this.currentTimeDeg += speed * W.time.delta;
      this._progressPerc = (this.currentTimeDeg + Math.PI * 0.5) / (Math.PI * 2);
      this.ctx.beginPath();
      this.ctx.fillStyle = this.red;
      this.ctx.globalAlpha = 0.2;
      this.ctx.arc(W.ww * 0.5, top, W.grid.radius + 20, this.arcZero, this.currentTimeDeg, false);
      this.ctx.lineTo(W.ww * 0.5, top);
      this.ctx.fill();
      this.ctx.globalAlpha = 1;
    }
    this.ctx.lineWidth = 2;
    pos = this.arcZero + (W.status.level / Parameters.levels.length) * Math.PI * 2;
    this.ctx.beginPath();
    if (pos < this.arcZero + Math.PI * (1 - W.grid.bottomSpace)) {
      this.ctx.arc(W.ww * 0.5, top, W.grid.radius + 40, this.arcZero, pos, false);
    } else {
      this.ctx.arc(W.ww * 0.5, top, W.grid.radius + 40, this.arcZero, this.arcZero + Math.PI * (1 - W.grid.bottomSpace), false);
    }
    this.ctx.stroke();
    this.ctx.beginPath();
    if (pos > this.arcZero + Math.PI * (1 + W.grid.bottomSpace)) {
      this.ctx.arc(W.ww * 0.5, top, W.grid.radius + 40, this.arcZero + Math.PI * (1 + W.grid.bottomSpace), pos, false);
    } else if (pos === Math.PI * 2) {
      this.ctx.arc(W.ww * 0.5, top, W.grid.radius + 40, this.arcZero + Math.PI * (1 + W.grid.bottomSpace), this.arcZero + Math.PI * 2, false);
    }
    return this.ctx.stroke();
  };

  CountDown.prototype._drawClock = function() {
    var dx, dy, i, length, ox, oy, perc, percProg, radius, rp, top, _i, _results;
    radius = W.grid.clockRadius;
    if (!(W.status.paused === true && W.ww < 640)) {
      if (W.ww < 640) {
        top = 100;
      } else {
        top = W.wh * 0.5;
      }
      this.ctx.lineWidth = 6;
      this.ctx.strokeStyle = this.red;
      if (this.tweens.clockPerc === 1) {
        this.ctx.beginPath();
        this.ctx.arc(W.ww * 0.5, W.wh * 0.5, radius, this.arcZero, this.arcZero + Math.PI * 2, true);
        this.ctx.fillStyle = 'rgba(230, 230, 230, 0.8)';
        this.ctx.fill();
      }
      this.ctx.beginPath();
      this.ctx.arc(W.ww * 0.5, top, radius, this.arcZero, this.arcZero + Math.PI * (1 - W.grid.bottomSpace) * this.tweens.clockPerc, false);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.arc(W.ww * 0.5, top, radius, this.arcZero + Math.PI * 2, this.arcZero + Math.PI * (2 - (1 - W.grid.bottomSpace) * this.tweens.clockPerc), true);
      this.ctx.stroke();
      if (W.ww > 640) {
        _results = [];
        for (i = _i = 0; _i < 120; i = ++_i) {
          this.ctx.beginPath();
          perc = i / 120;
          rp = this.arcZero + Math.PI * 2 * perc;
          ox = W.ww * 0.5 + (radius + 3) * Math.cos(rp);
          oy = W.wh * 0.5 + (radius + 3) * Math.sin(rp);
          if (rp < this.arcZero + Math.PI * (1 - W.grid.bottomSpace) || rp > this.arcZero + Math.PI * (1 + W.grid.bottomSpace)) {
            if (i % 30 === 0) {
              this.ctx.lineWidth = 5;
              length = 15;
            } else if (i % 10 === 0) {
              this.ctx.lineWidth = 3;
              length = 8;
            } else {
              this.ctx.lineWidth = 1;
              length = 5;
            }
            if (i < 60) {
              percProg = this.tweens.dash[i].perc;
            } else {
              percProg = this.tweens.dash[60 - (i - 60)].perc;
            }
            dx = ox + (Math.cos(-Math.PI * 0.5 + Math.PI * 2 * perc) * length) * percProg;
            dy = oy + (Math.sin(-Math.PI * 0.5 + Math.PI * 2 * perc) * length) * percProg;
            this.ctx.moveTo(ox, oy);
            this.ctx.lineTo(dx, dy);
            _results.push(this.ctx.stroke());
          } else {
            _results.push(void 0);
          }
        }
        return _results;
      }
    }
  };

  CountDown.prototype.levelUp = function() {
    return this.currentTimeDeg = this.arcZero;
  };

  CountDown.prototype.render = function(resized) {
    this.ctx.lineCap = 'round';
    this._drawClock();
    if (W.status.launched) {
      this._drawProgressCircle();
    }
    if (this._progressPerc > 1 && this._timeOut !== true) {
      this._timeOut = true;
      return $(this).trigger(CountDown.END);
    }
  };

  CountDown.prototype.reset = function() {
    this._timeOut = false;
    return this.currentTimeDeg = this.arcZero;
  };

  return CountDown;

})();

Grid = (function() {
  Grid.GOOD_ANSWER = 'good_answer';

  Grid.WRONG_ANSWER = 'wrong_answer';

  function Grid(options) {
    this.render = __bind(this.render, this);
    this.levelUp = __bind(this.levelUp, this);
    this.getColors = __bind(this.getColors, this);
    this.click = __bind(this.click, this);
    this.reset = __bind(this.reset, this);
    this._setRandomPics = __bind(this._setRandomPics, this);
    this._drawPictures = __bind(this._drawPictures, this);
    this._picsLoaded = __bind(this._picsLoaded, this);
    this._initEvents = __bind(this._initEvents, this);
    this._initContent = __bind(this._initContent, this);
    this.ctx = options.ctx;
    this.randomPics = [];
    this._initContent();
    this.singleton = this;
    this.scale = 1;
  }

  Grid.prototype._initContent = function() {};

  Grid.prototype._initEvents = function() {};

  Grid.prototype._picsLoaded = function() {
    return this.render();
  };

  Grid.prototype._drawPictures = function() {
    var i, speed, top, _i, _ref, _results;
    this.picSize = (W.grid.size - (W.grid.lines - 1) * W.grid.gap) / W.grid.lines;
    if (W.ww < 640) {
      top = 200;
    } else {
      top = W.grid.top;
    }
    if (W.status.paused === false && Parameters.levels[W.status.level].moving === true) {
      speed = 1 / Parameters.time;
      this.scale -= speed * W.time.delta;
    }
    _results = [];
    for (i = _i = 0, _ref = this.randomPics.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      this.randomPics[i].x = W.grid.left + (this.picSize + W.grid.gap) * (i % W.grid.lines);
      this.randomPics[i].y = top + (this.picSize + W.grid.gap) * ~~(i / W.grid.lines);
      this.ctx.save();
      this.ctx.translate(this.randomPics[i].x, this.randomPics[i].y);
      this.ctx.translate(this.picSize * 0.5, this.picSize * 0.5);
      this.ctx.scale(this.scale, this.scale);
      this.ctx.drawImage(this.randomPics[i].img, -this.picSize * 0.5, -this.picSize * 0.5, this.picSize, this.picSize);
      _results.push(this.ctx.restore());
    }
    return _results;
  };

  Grid.prototype._setRandomPics = function() {
    var ar, diff, i, j, keys, levelParams, neoKey, pic, pics, randomId, randomKey, randomPics, selectedColors, selectedPics, selectedSubColors, toPick, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _ref, _ref1, _ref10, _ref11, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _results, _results1, _results2, _results3, _s, _t;
    levelParams = Parameters.levels[W.status.level];
    diff = levelParams.difficulty;
    pics = Pics.slice(0);
    selectedColors = [];
    selectedSubColors = [];
    selectedPics = [];
    randomPics = [];
    ar = pics;
    keys = (function() {
      _results = [];
      for (var _i = 0, _ref = ar.length; 0 <= _ref ? _i < _ref : _i > _ref; 0 <= _ref ? _i++ : _i--){ _results.push(_i); }
      return _results;
    }).apply(this);
    for (i = _j = 0, _ref1 = diff.colors; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
      randomKey = Math.random() * keys.length |  0;
      randomId = keys[randomKey];
      keys.splice(randomKey, 1);
      if (ar[randomId]) {
        selectedColors.push(ar[randomId]);
      }
    }
    for (i = _k = 0, _ref2 = selectedColors.length; 0 <= _ref2 ? _k < _ref2 : _k > _ref2; i = 0 <= _ref2 ? ++_k : --_k) {
      ar = selectedColors[i];
      keys = (function() {
        _results1 = [];
        for (var _l = 0, _ref3 = ar.length; 0 <= _ref3 ? _l < _ref3 : _l > _ref3; 0 <= _ref3 ? _l++ : _l--){ _results1.push(_l); }
        return _results1;
      }).apply(this);
      for (j = _m = 0, _ref4 = diff.subColors; 0 <= _ref4 ? _m < _ref4 : _m > _ref4; j = 0 <= _ref4 ? ++_m : --_m) {
        randomKey = Math.random() * keys.length |  0;
        randomId = keys[randomKey];
        keys.splice(randomKey, 1);
        if (ar[randomId]) {
          selectedSubColors.push(ar[randomId]);
        }
      }
    }
    for (i = _n = 0, _ref5 = selectedSubColors.length; 0 <= _ref5 ? _n < _ref5 : _n > _ref5; i = 0 <= _ref5 ? ++_n : --_n) {
      ar = selectedSubColors[i];
      keys = (function() {
        _results2 = [];
        for (var _o = 0, _ref6 = ar.length; 0 <= _ref6 ? _o < _ref6 : _o > _ref6; 0 <= _ref6 ? _o++ : _o--){ _results2.push(_o); }
        return _results2;
      }).apply(this);
      for (j = _p = 0, _ref7 = diff.pics; 0 <= _ref7 ? _p < _ref7 : _p > _ref7; j = 0 <= _ref7 ? ++_p : --_p) {
        randomKey = Math.random() * keys.length |  0;
        randomId = keys[randomKey];
        keys.splice(randomKey, 1);
        if (ar[randomId]) {
          selectedPics.push(ar[randomId]);
        }
      }
    }
    neoKey = Math.random() * selectedPics.length |  0;
    selectedPics[neoKey].neo = true;
    randomPics.push(selectedPics[neoKey]);
    selectedPics.splice(neoKey, 1);
    for (i = _q = 0, _ref8 = selectedPics.length; 0 <= _ref8 ? _q < _ref8 : _q > _ref8; i = 0 <= _ref8 ? ++_q : --_q) {
      toPick = levelParams.picsLength / selectedPics.length |  0;
      if (i === selectedPics.length - 1) {
        toPick = levelParams.picsLength - randomPics.length;
      }
      for (j = _r = 0; 0 <= toPick ? _r < toPick : _r > toPick; j = 0 <= toPick ? ++_r : --_r) {
        randomPics.push(selectedPics[i]);
      }
    }
    for (i = _s = _ref9 = randomPics.length - 1; _ref9 <= 1 ? _s <= 1 : _s >= 1; i = _ref9 <= 1 ? ++_s : --_s) {
      j = Math.floor(Math.random() * (i + 1));
      _ref10 = [randomPics[j], randomPics[i]], randomPics[i] = _ref10[0], randomPics[j] = _ref10[1];
    }
    this.randomPics = [];
    _results3 = [];
    for (i = _t = 0, _ref11 = randomPics.length; 0 <= _ref11 ? _t < _ref11 : _t > _ref11; i = 0 <= _ref11 ? ++_t : --_t) {
      pic = {};
      pic.filename = randomPics[i].filename;
      pic.img = randomPics[i].img;
      pic.color = randomPics[i].color;
      pic.neo = randomPics[i].neo;
      _results3.push(this.randomPics.push(pic));
    }
    return _results3;

    /*for i in [0...diff.colors]
    			colorsKey = Math.random() * colorsIds.length | 0
    			colorsId = colorsIds[colorsKey]
    
    			colorsIds.splice(colorsKey, 1)
    			selectedColorsPics.push(pics[colorsId])
    
    			subColorsIds = [0...pics[colorsId].length]
    
    
    		for j in [0...diff.subColors]
    			subColorsKey = Math.random() * subColorsIds.length | 0
    			subColorsId = subColorsIds[subColorsKey]
    
    			subColorsIds.splice(subColorsKey, 1)
    			selectedSubColorsPics.push(selectedColorsPics[subColorsId])
    
    			picsIds = [0...pics[colorsId][subColorsId].length]
    
    
    		for k in [0...diff.pics]
    			picsKey = Math.random() * picsIds.length | 0
    			picsId = picsIds[picsKey]
    
    			picsIds.splice(picsKey, 1)
    			selectedPics.push(selectedSubColorsPics[picsId])
     */

    /*colorsKey = Math.random() * picsKeys.length | 0
    			subDivKeys = [0...pics[colorsKey].length]
    
    			for j in [0...subDivNb]
    				picKey = Math.random() * pics[i].length | 0
    
    				console.log picKey
     */

    /*
    
    		pics = []
    		randomPics = []
    		catsId = [0...Pics.length]
    
    		 * on récupère n tableaux de photos par couleur (défini par le nombre de couleurs du niveau)
    		for i in [0...levelParams.colorsNb]
    			 *console.log catsId
    			id = Math.random() * catsId.length | 0
    			pics.push(Pics[catsId[id]].slice(0))
    			catsId.splice(id, 1)
    
    		 * on récupère une couleur de tableau puis une image dans ce tableau (celle qui sera à cliquer du coup)
    		randomColorArrayId = Math.random() * levelParams.colorsNb | 0
    		randomColorArray = pics[randomColorArrayId]
    		randomColorPicId = Math.random() * randomColorArray | 0
    		randomColorPic = randomColorArray[randomColorPicId]
    		randomColorPic.neo = true 								# neo parce que l'élu dans Matrix
    		randomPics.push(randomColorPic)
    
    		pics.splice(randomColorArrayId, 1)
    
    		 * on récupère n photos dans p tableaux de couleurs
    		randomPicsNb = levelParams.picsLength - 1
    		 *maxSamePic = randomPicsNb / 2 - 1
    		maxSamePic = randomPicsNb - 1
    		incSamePic = 0
    
    		while incSamePic < randomPicsNb
    
    			if randomPicsNb - incSamePic <= 3
    				nbSamePic = randomPicsNb - incSamePic
    				incSamePic = randomPicsNb
    			else
    				nbSamePic = 2 + Math.random() * (maxSamePic - incSamePic) | 0
    				incSamePic += nbSamePic
    
    			if randomPicsNb - incSamePic == 1
    				incSamePic = randomPicsNb
    				nbSamePic++
    
    			randomPackId = Math.random() * pics.length | 0
    			randomPicId = Math.random() * pics[randomPackId].length | 0
    			randomPic = pics[randomPackId][randomPicId]
    			randomPic.neo = false
    
    			for i in [0...nbSamePic]
    				randomPics.push(randomPic)
    			
    			pics[0].splice(randomPicId, 1)
    			
    
    		 * tri aléatoire de l'ordre des images
    		for i in [randomPics.length-1..1]
    			j = Math.floor Math.random() * (i + 1)
    			[randomPics[i], randomPics[j]] = [randomPics[j], randomPics[i]]
    
    
    		 * ajouter les images ds un autre tableau car pb de clone... je sais :(
    		@randomPics = []
    		for i in [0...randomPics.length]
    			pic = {}
    			pic.color = randomPics[i].color
    			pic.img = randomPics[i].img
    			pic.neo = randomPics[i].neo
    			@randomPics.push pic
     */
  };

  Grid.prototype.reset = function() {
    return this.scale = 1;
  };

  Grid.prototype.click = function(e) {
    var i, pic, _i, _ref, _ref1, _ref2;
    for (i = _i = 0, _ref = this.randomPics.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      pic = this.randomPics[i];
      if ((pic.x < (_ref1 = e.pageX) && _ref1 < pic.x + this.picSize) && (pic.y < (_ref2 = e.pageY) && _ref2 < pic.y + this.picSize)) {
        if (pic.neo === true) {
          $(this).trigger(Grid.GOOD_ANSWER);
        } else {
          $(this).trigger(Grid.WRONG_ANSWER);
          return;
        }
      }
    }
  };

  Grid.prototype.getColors = function() {
    var color, colors, i, _i, _ref;
    colors = [];
    for (i = _i = 0, _ref = this.randomPics.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      color = this.randomPics[i].color;
      if (__indexOf.call(colors, color) < 0) {
        colors.push(color);
      }
    }
    return colors;
  };

  Grid.prototype.levelUp = function() {
    this.scale = 1;
    return this._setRandomPics();
  };

  Grid.prototype.render = function(resized) {
    return this._drawPictures();
  };

  return Grid;

})();

Snow = (function() {
  function Snow(options) {
    this.render = __bind(this.render, this);
    this.resize = __bind(this.resize, this);
    this.levelUp = __bind(this.levelUp, this);
    this.setColors = __bind(this.setColors, this);
    this._updateFlakeColor = __bind(this._updateFlakeColor, this);
    this._unleashFlakes = __bind(this._unleashFlakes, this);
    this._initContent = __bind(this._initContent, this);
    this.ctx = options.ctx;
    this.timeFlakeUnleashing = 0;
    this.flakeCount = 0;
    this.rightWind = 0;
    this.rightWindTarget = 0;
    this.colors = [];
    this._initContent();
    this.tween = null;
  }

  Snow.prototype._initContent = function() {
    return this.flakes = [];
  };

  Snow.prototype._unleashFlakes = function() {
    var color, percX;
    if (this.flakeCount < this.timeFlakeUnleashing) {
      this.flakeCount++;
      color = this.colors[Math.random() * this.colors.length | 0] || '#FFFFFF';
      percX = Math.random();
      return this.flakes.push({
        perc: percX,
        x: percX * W.ww |  0,
        y: -10,
        radius: 3 + Math.random() * 7 |  0,
        prevColor: Utils.hexToRgb(color),
        currentColor: Utils.hexToRgb(color),
        color: color
      });
    }
  };

  Snow.prototype._updateFlakeColor = function(perc) {
    var b, flake, g, i, r, _i, _ref, _results;
    _results = [];
    for (i = _i = 0, _ref = this.flakes.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      flake = this.flakes[i];
      r = flake.currentColor.r * perc + flake.prevColor.r * (1 - perc) |  0;
      g = flake.currentColor.g * perc + flake.prevColor.g * (1 - perc) |  0;
      b = flake.currentColor.b * perc + flake.prevColor.b * (1 - perc) |  0;
      _results.push(flake.color = 'rgb(' + r + ',' + g + ',' + b + ')');
    }
    return _results;
  };

  Snow.prototype.setColors = function(colors) {
    var color, i, _i, _ref;
    if (colors && colors.length === 0) {
      colors = ['#FFFFFF'];
    }
    this.colors = colors;
    this.rightWind = 0;
    this.rightWindTarget = 0;
    for (i = _i = 0, _ref = this.flakes.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      this.flakes[i].prevColor = this.flakes[i].currentColor;
      this.flakes[i].currentColor = Utils.hexToRgb(this.colors[Math.random() * this.colors.length | 0]);
    }
    color = {
      perc: 0
    };
    if (this.tween) {
      this.tween.kill();
    }
    return this.tween = TweenLite.to(color, 2, {
      perc: 1,
      ease: Expo.easeOut,
      onUpdate: (function(_this) {
        return function() {
          return _this._updateFlakeColor(color.perc);
        };
      })(this),
      onComplete: (function(_this) {
        return function() {
          return _this._updateFlakeColor(1);
        };
      })(this)
    });
  };

  Snow.prototype.levelUp = function() {
    this.rightWindTarget = 50;
    return setTimeout((function(_this) {
      return function() {
        return _this.rightWindTarget = 0;
      };
    })(this), 500);
  };

  Snow.prototype.resize = function() {
    var flake, i, _i, _ref, _results;
    _results = [];
    for (i = _i = 0, _ref = this.flakes.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
      flake = this.flakes[i];
      _results.push(flake.x = flake.perc * W.ww);
    }
    return _results;
  };

  Snow.prototype.render = function() {
    var flake, flakeSpeed, i, speed, _i, _ref, _results;
    if (W.time.delta) {
      if (this.flakeCount < 100) {
        flakeSpeed = 10;
        this.timeFlakeUnleashing += flakeSpeed * W.time.delta;
        this._unleashFlakes();
      }
      this.rightWind += (this.rightWindTarget - this.rightWind) * 0.05;
      _results = [];
      for (i = _i = 0, _ref = this.flakes.length; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        flake = this.flakes[i];
        speed = flake.radius * 10 + this.rightWind * 50;
        flake.x = flake.x + this.rightWind * 0.35;
        flake.y = (flake.y + speed * W.time.delta) * 1.0025;
        if (flake.y > W.wh + 10) {
          flake.y = -10;
        }
        if (flake.x > W.ww + 10) {
          flake.x = -10;
        }
        this.ctx.beginPath();
        this.ctx.arc(flake.x, flake.y, flake.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = flake.color;
        _results.push(this.ctx.fill());
      }
      return _results;
    }
  };

  return Snow;

})();
