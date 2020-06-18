!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){e.exports=React},function(e,t){e.exports=ReactDOM},function(e,t){!function(e){if(!e.hasInitialised){var t={escapeRegExp:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},hasClass:function(e,t){var n=" ";return 1===e.nodeType&&(n+e.className+n).replace(/[\n\t]/g,n).indexOf(n+t+n)>=0},addClass:function(e,t){e.className+=" "+t},removeClass:function(e,t){var n=new RegExp("\\b"+this.escapeRegExp(t)+"\\b");e.className=e.className.replace(n,"")},interpolateString:function(e,t){return e.replace(/{{([a-z][a-z0-9\-_]*)}}/gi,(function(e){return t(arguments[1])||""}))},getCookie:function(e){var t=("; "+document.cookie).split("; "+e+"=");return t.length<2?void 0:t.pop().split(";").shift()},setCookie:function(e,t,n,i,o,s){var r=new Date;r.setHours(r.getHours()+24*(n||365));var a=[e+"="+t,"expires="+r.toUTCString(),"path="+(o||"/")];i&&a.push("domain="+i),s&&a.push("secure"),document.cookie=a.join(";")},deepExtend:function(e,t){for(var n in t)t.hasOwnProperty(n)&&(n in e&&this.isPlainObject(e[n])&&this.isPlainObject(t[n])?this.deepExtend(e[n],t[n]):e[n]=t[n]);return e},throttle:function(e,t){var n=!1;return function(){n||(e.apply(this,arguments),n=!0,setTimeout((function(){n=!1}),t))}},hash:function(e){var t,n,i=0;if(0===e.length)return i;for(t=0,n=e.length;t<n;++t)i=(i<<5)-i+e.charCodeAt(t),i|=0;return i},normaliseHex:function(e){return"#"==e[0]&&(e=e.substr(1)),3==e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),e},getContrast:function(e){return e=this.normaliseHex(e),(299*parseInt(e.substr(0,2),16)+587*parseInt(e.substr(2,2),16)+114*parseInt(e.substr(4,2),16))/1e3>=128?"#000":"#fff"},getLuminance:function(e){var t=parseInt(this.normaliseHex(e),16),n=38+(t>>16),i=38+(t>>8&255),o=38+(255&t);return"#"+(16777216+65536*(n<255?n<1?0:n:255)+256*(i<255?i<1?0:i:255)+(o<255?o<1?0:o:255)).toString(16).slice(1)},isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},isPlainObject:function(e){return"object"==typeof e&&null!==e&&e.constructor==Object},traverseDOMPath:function(e,n){return e&&e.parentNode?t.hasClass(e,n)?e:this.traverseDOMPath(e.parentNode,n):null}};e.status={deny:"deny",allow:"allow",dismiss:"dismiss"},e.transitionEnd=function(){var e=document.createElement("div"),t={t:"transitionend",OT:"oTransitionEnd",msT:"MSTransitionEnd",MozT:"transitionend",WebkitT:"webkitTransitionEnd"};for(var n in t)if(t.hasOwnProperty(n)&&void 0!==e.style[n+"ransition"])return t[n];return""}(),e.hasTransition=!!e.transitionEnd;var n=Object.keys(e.status).map(t.escapeRegExp);e.customStyles={},e.Popup=function(){var i={enabled:!0,container:null,cookie:{name:"cookieconsent_status",path:"/",domain:"",expiryDays:365,secure:!1},onPopupOpen:function(){},onPopupClose:function(){},onInitialise:function(e){},onStatusChange:function(e,t){},onRevokeChoice:function(){},onNoCookieLaw:function(e,t){},content:{header:"Cookies used on the website!",message:"This website uses cookies to ensure you get the best experience on our website.",dismiss:"Got it!",allow:"Allow cookies",deny:"Decline",link:"Learn more",href:"https://www.cookiesandyou.com",close:"&#x274c;",target:"_blank",policy:"Cookie Policy"},elements:{header:'<span class="cc-header">{{header}}</span>&nbsp;',message:'<span id="cookieconsent:desc" class="cc-message">{{message}}</span>',messagelink:'<span id="cookieconsent:desc" class="cc-message">{{message}} <a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a></span>',dismiss:'<a aria-label="dismiss cookie message" role=button tabindex="0" class="cc-btn cc-dismiss">{{dismiss}}</a>',allow:'<a aria-label="allow cookies" role=button tabindex="0"  class="cc-btn cc-allow">{{allow}}</a>',deny:'<a aria-label="deny cookies" role=button tabindex="0" class="cc-btn cc-deny">{{deny}}</a>',link:'<a aria-label="learn more about cookies" role=button tabindex="0" class="cc-link" href="{{href}}" rel="noopener noreferrer nofollow" target="{{target}}">{{link}}</a>',close:'<span aria-label="dismiss cookie message" role=button tabindex="0" class="cc-close">{{close}}</span>'},window:'<div role="dialog" aria-live="polite" aria-label="cookieconsent" aria-describedby="cookieconsent:desc" class="cc-window {{classes}}">\x3c!--googleoff: all--\x3e{{children}}\x3c!--googleon: all--\x3e</div>',revokeBtn:'<div class="cc-revoke {{classes}}">{{policy}}</div>',compliance:{info:'<div class="cc-compliance">{{dismiss}}</div>',"opt-in":'<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>',"opt-out":'<div class="cc-compliance cc-highlight">{{deny}}{{allow}}</div>'},type:"info",layouts:{basic:"{{messagelink}}{{compliance}}","basic-close":"{{messagelink}}{{compliance}}{{close}}","basic-header":"{{header}}{{message}}{{link}}{{compliance}}"},layout:"basic",position:"bottom",theme:"block",static:!1,palette:null,revokable:!1,animateRevokable:!0,showLink:!0,dismissOnScroll:!1,dismissOnTimeout:!1,dismissOnWindowClick:!1,ignoreClicksFrom:["cc-revoke","cc-btn"],autoOpen:!0,autoAttach:!0,whitelistPage:[],blacklistPage:[],overrideHTML:null};function o(){this.initialise.apply(this,arguments)}function s(e){this.openingTimeout=null,t.removeClass(e,"cc-invisible")}function r(t){t.style.display="none",t.removeEventListener(e.transitionEnd,this.afterTransition),this.afterTransition=null}function a(){var e=this.options.position.split("-"),t=[];return e.forEach((function(e){t.push("cc-"+e)})),t}function c(i){var o=this.options,s=document.createElement("div"),r=o.container&&1===o.container.nodeType?o.container:document.body;s.innerHTML=i;var a=s.children[0];return a.style.display="none",t.hasClass(a,"cc-window")&&e.hasTransition&&t.addClass(a,"cc-invisible"),this.onButtonClick=function(i){var o=t.traverseDOMPath(i.target,"cc-btn")||i.target;if(t.hasClass(o,"cc-btn")){var s=o.className.match(new RegExp("\\bcc-("+n.join("|")+")\\b")),r=s&&s[1]||!1;r&&(this.setStatus(r),this.close(!0))}t.hasClass(o,"cc-close")&&(this.setStatus(e.status.dismiss),this.close(!0)),t.hasClass(o,"cc-revoke")&&this.revokeChoice()}.bind(this),a.addEventListener("click",this.onButtonClick),o.autoAttach&&(r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a)),a}function l(e){return"000000"==(e=t.normaliseHex(e))?"#222":t.getLuminance(e)}function u(e,t){for(var n=0,i=e.length;n<i;++n){var o=e[n];if(o instanceof RegExp&&o.test(t)||"string"==typeof o&&o.length&&o===t)return!0}return!1}return o.prototype.initialise=function(n){this.options&&this.destroy(),t.deepExtend(this.options={},i),t.isPlainObject(n)&&t.deepExtend(this.options,n),function(){var t=this.options.onInitialise.bind(this);if(!window.navigator.cookieEnabled)return t(e.status.deny),!0;if(window.CookiesOK||window.navigator.CookiesOK)return t(e.status.allow),!0;var n=Object.keys(e.status),i=this.getStatus(),o=n.indexOf(i)>=0;return o&&t(i),o}.call(this)&&(this.options.enabled=!1),u(this.options.blacklistPage,location.pathname)&&(this.options.enabled=!1),u(this.options.whitelistPage,location.pathname)&&(this.options.enabled=!0);var o=this.options.window.replace("{{classes}}",function(){var n=this.options,i="top"==n.position||"bottom"==n.position?"banner":"floating";t.isMobile()&&(i="floating");var o=["cc-"+i,"cc-type-"+n.type,"cc-theme-"+n.theme];return n.static&&o.push("cc-static"),o.push.apply(o,a.call(this)),function(n){var i=t.hash(JSON.stringify(n)),o="cc-color-override-"+i,s=t.isPlainObject(n);return this.customStyleSelector=s?o:null,s&&function(n,i,o){if(e.customStyles[n])++e.customStyles[n].references;else{var s={},r=i.popup,a=i.button,c=i.highlight;r&&(r.text=r.text?r.text:t.getContrast(r.background),r.link=r.link?r.link:r.text,s[o+".cc-window"]=["color: "+r.text,"background-color: "+r.background],s[o+".cc-revoke"]=["color: "+r.text,"background-color: "+r.background],s[o+" .cc-link,"+o+" .cc-link:active,"+o+" .cc-link:visited"]=["color: "+r.link],a&&(a.text=a.text?a.text:t.getContrast(a.background),a.border=a.border?a.border:"transparent",s[o+" .cc-btn"]=["color: "+a.text,"border-color: "+a.border,"background-color: "+a.background],a.padding&&s[o+" .cc-btn"].push("padding: "+a.padding),"transparent"!=a.background&&(s[o+" .cc-btn:hover, "+o+" .cc-btn:focus"]=["background-color: "+(a.hover||l(a.background))]),c?(c.text=c.text?c.text:t.getContrast(c.background),c.border=c.border?c.border:"transparent",s[o+" .cc-highlight .cc-btn:first-child"]=["color: "+c.text,"border-color: "+c.border,"background-color: "+c.background]):s[o+" .cc-highlight .cc-btn:first-child"]=["color: "+r.text]));var u=document.createElement("style");document.head.appendChild(u),e.customStyles[n]={references:1,element:u.sheet};var d=-1;for(var p in s)s.hasOwnProperty(p)&&u.sheet.insertRule(p+"{"+s[p].join(";")+"}",++d)}}(i,n,"."+o),s}.call(this,this.options.palette),this.customStyleSelector&&o.push(this.customStyleSelector),o}.call(this).join(" ")).replace("{{children}}",function(){var e={},n=this.options;n.showLink||(n.elements.link="",n.elements.messagelink=n.elements.message),Object.keys(n.elements).forEach((function(i){e[i]=t.interpolateString(n.elements[i],(function(e){var t=n.content[e];return e&&"string"==typeof t&&t.length?t:""}))}));var i=n.compliance[n.type];i||(i=n.compliance.info),e.compliance=t.interpolateString(i,(function(t){return e[t]}));var o=n.layouts[n.layout];return o||(o=n.layouts.basic),t.interpolateString(o,(function(t){return e[t]}))}.call(this)),s=this.options.overrideHTML;if("string"==typeof s&&s.length&&(o=s),this.options.static){var r=c.call(this,'<div class="cc-grower">'+o+"</div>");r.style.display="",this.element=r.firstChild,this.element.style.display="none",t.addClass(this.element,"cc-invisible")}else this.element=c.call(this,o);(function(){var n=this.setStatus.bind(this),i=this.close.bind(this),o=this.options.dismissOnTimeout;"number"==typeof o&&o>=0&&(this.dismissTimeout=window.setTimeout((function(){n(e.status.dismiss),i(!0)}),Math.floor(o)));var s=this.options.dismissOnScroll;if("number"==typeof s&&s>=0){var r=function(t){window.pageYOffset>Math.floor(s)&&(n(e.status.dismiss),i(!0),window.removeEventListener("scroll",r),this.onWindowScroll=null)};this.options.enabled&&(this.onWindowScroll=r,window.addEventListener("scroll",r))}var a=this.options.dismissOnWindowClick,c=this.options.ignoreClicksFrom;if(a){var l=function(o){for(var s=!1,r=o.path.length,a=c.length,u=0;u<r;u++)if(!s)for(var d=0;d<a;d++)s||(s=t.hasClass(o.path[u],c[d]));s||(n(e.status.dismiss),i(!0),window.removeEventListener("click",l),window.removeEventListener("touchend",l),this.onWindowClick=null)}.bind(this);this.options.enabled&&(this.onWindowClick=l,window.addEventListener("click",l),window.addEventListener("touchend",l))}}).call(this),function(){if("info"!=this.options.type&&(this.options.revokable=!0),t.isMobile()&&(this.options.animateRevokable=!1),this.options.revokable){var e=a.call(this);this.options.animateRevokable&&e.push("cc-animate"),this.customStyleSelector&&e.push(this.customStyleSelector);var n=this.options.revokeBtn.replace("{{classes}}",e.join(" ")).replace("{{policy}}",this.options.content.policy);this.revokeBtn=c.call(this,n);var i=this.revokeBtn;if(this.options.animateRevokable){var o=t.throttle((function(e){var n=!1,o=window.innerHeight-20;t.hasClass(i,"cc-top")&&e.clientY<20&&(n=!0),t.hasClass(i,"cc-bottom")&&e.clientY>o&&(n=!0),n?t.hasClass(i,"cc-active")||t.addClass(i,"cc-active"):t.hasClass(i,"cc-active")&&t.removeClass(i,"cc-active")}),200);this.onMouseMove=o,window.addEventListener("mousemove",o)}}}.call(this),this.options.autoOpen&&this.autoOpen()},o.prototype.destroy=function(){this.onButtonClick&&this.element&&(this.element.removeEventListener("click",this.onButtonClick),this.onButtonClick=null),this.dismissTimeout&&(clearTimeout(this.dismissTimeout),this.dismissTimeout=null),this.onWindowScroll&&(window.removeEventListener("scroll",this.onWindowScroll),this.onWindowScroll=null),this.onWindowClick&&(window.removeEventListener("click",this.onWindowClick),this.onWindowClick=null),this.onMouseMove&&(window.removeEventListener("mousemove",this.onMouseMove),this.onMouseMove=null),this.element&&this.element.parentNode&&this.element.parentNode.removeChild(this.element),this.element=null,this.revokeBtn&&this.revokeBtn.parentNode&&this.revokeBtn.parentNode.removeChild(this.revokeBtn),this.revokeBtn=null,function(n){if(t.isPlainObject(n)){var i=t.hash(JSON.stringify(n)),o=e.customStyles[i];if(o&&!--o.references){var s=o.element.ownerNode;s&&s.parentNode&&s.parentNode.removeChild(s),e.customStyles[i]=null}}}(this.options.palette),this.options=null},o.prototype.open=function(t){if(this.element)return this.isOpen()||(e.hasTransition?this.fadeIn():this.element.style.display="",this.options.revokable&&this.toggleRevokeButton(),this.options.onPopupOpen.call(this)),this},o.prototype.close=function(t){if(this.element)return this.isOpen()&&(e.hasTransition?this.fadeOut():this.element.style.display="none",t&&this.options.revokable&&this.toggleRevokeButton(!0),this.options.onPopupClose.call(this)),this},o.prototype.fadeIn=function(){var n=this.element;if(e.hasTransition&&n&&(this.afterTransition&&r.call(this,n),t.hasClass(n,"cc-invisible"))){if(n.style.display="",this.options.static){var i=this.element.clientHeight;this.element.parentNode.style.maxHeight=i+"px"}this.openingTimeout=setTimeout(s.bind(this,n),20)}},o.prototype.fadeOut=function(){var n=this.element;e.hasTransition&&n&&(this.openingTimeout&&(clearTimeout(this.openingTimeout),s.bind(this,n)),t.hasClass(n,"cc-invisible")||(this.options.static&&(this.element.parentNode.style.maxHeight=""),this.afterTransition=r.bind(this,n),n.addEventListener(e.transitionEnd,this.afterTransition),t.addClass(n,"cc-invisible")))},o.prototype.isOpen=function(){return this.element&&""==this.element.style.display&&(!e.hasTransition||!t.hasClass(this.element,"cc-invisible"))},o.prototype.toggleRevokeButton=function(e){this.revokeBtn&&(this.revokeBtn.style.display=e?"":"none")},o.prototype.revokeChoice=function(e){this.options.enabled=!0,this.clearStatus(),this.options.onRevokeChoice.call(this),e||this.autoOpen()},o.prototype.hasAnswered=function(t){return Object.keys(e.status).indexOf(this.getStatus())>=0},o.prototype.hasConsented=function(t){var n=this.getStatus();return n==e.status.allow||n==e.status.dismiss},o.prototype.autoOpen=function(e){!this.hasAnswered()&&this.options.enabled?this.open():this.hasAnswered()&&this.options.revokable&&this.toggleRevokeButton(!0)},o.prototype.setStatus=function(n){var i=this.options.cookie,o=t.getCookie(i.name),s=Object.keys(e.status).indexOf(o)>=0;Object.keys(e.status).indexOf(n)>=0?(t.setCookie(i.name,n,i.expiryDays,i.domain,i.path,i.secure),this.options.onStatusChange.call(this,n,s)):this.clearStatus()},o.prototype.getStatus=function(){return t.getCookie(this.options.cookie.name)},o.prototype.clearStatus=function(){var e=this.options.cookie;t.setCookie(e.name,"",-1,e.domain,e.path)},o}(),e.Location=function(){var e={timeout:5e3,services:["ipinfo"],serviceDefinitions:{ipinfo:function(){return{url:"//ipinfo.io",headers:["Accept: application/json"],callback:function(e,t){try{var n=JSON.parse(t);return n.error?s(n):{code:n.country}}catch(e){return s({error:"Invalid response ("+e+")"})}}}},ipinfodb:function(e){return{url:"//api.ipinfodb.com/v3/ip-country/?key={api_key}&format=json&callback={callback}",isScript:!0,callback:function(e,t){try{var n=JSON.parse(t);return"ERROR"==n.statusCode?s({error:n.statusMessage}):{code:n.countryCode}}catch(e){return s({error:"Invalid response ("+e+")"})}}}},maxmind:function(){return{url:"//js.maxmind.com/js/apis/geoip2/v2.1/geoip2.js",isScript:!0,callback:function(e){window.geoip2?geoip2.country((function(t){try{e({code:t.country.iso_code})}catch(t){e(s(t))}}),(function(t){e(s(t))})):e(new Error("Unexpected response format. The downloaded script should have exported `geoip2` to the global scope"))}}}}};function n(n){t.deepExtend(this.options={},e),t.isPlainObject(n)&&t.deepExtend(this.options,n),this.currentServiceIndex=-1}function i(e,t,n){var i,o=document.createElement("script");o.type="text/"+(e.type||"javascript"),o.src=e.src||e,o.async=!1,o.onreadystatechange=o.onload=function(){var e=o.readyState;clearTimeout(i),t.done||e&&!/loaded|complete/.test(e)||(t.done=!0,t(),o.onreadystatechange=o.onload=null)},document.body.appendChild(o),i=setTimeout((function(){t.done=!0,t(),o.onreadystatechange=o.onload=null}),n)}function o(e,t,n,i,o){var s=new(window.XMLHttpRequest||window.ActiveXObject)("MSXML2.XMLHTTP.3.0");if(s.open(i?"POST":"GET",e,1),s.setRequestHeader("Content-type","application/x-www-form-urlencoded"),Array.isArray(o))for(var r=0,a=o.length;r<a;++r){var c=o[r].split(":",2);s.setRequestHeader(c[0].replace(/^\s+|\s+$/g,""),c[1].replace(/^\s+|\s+$/g,""))}"function"==typeof t&&(s.onreadystatechange=function(){s.readyState>3&&t(s)}),s.send(i)}function s(e){return new Error("Error ["+(e.code||"UNKNOWN")+"]: "+e.error)}return n.prototype.getNextService=function(){var e;do{e=this.getServiceByIdx(++this.currentServiceIndex)}while(this.currentServiceIndex<this.options.services.length&&!e);return e},n.prototype.getServiceByIdx=function(e){var n=this.options.services[e];if("function"==typeof n){var i=n();return i.name&&t.deepExtend(i,this.options.serviceDefinitions[i.name](i)),i}return"string"==typeof n?this.options.serviceDefinitions[n]():t.isPlainObject(n)?this.options.serviceDefinitions[n.name](n):null},n.prototype.locate=function(e,t){var n=this.getNextService();n?(this.callbackComplete=e,this.callbackError=t,this.runService(n,this.runNextServiceOnError.bind(this))):t(new Error("No services to run"))},n.prototype.setupUrl=function(e){var t=this.getCurrentServiceOpts();return e.url.replace(/\{(.*?)\}/g,(function(n,i){if("callback"===i){var o="callback"+Date.now();return window[o]=function(t){e.__JSONP_DATA=JSON.stringify(t)},o}if(i in t.interpolateUrl)return t.interpolateUrl[i]}))},n.prototype.runService=function(e,t){var n=this;e&&e.url&&e.callback&&(e.isScript?i:o)(this.setupUrl(e),(function(i){var o=i?i.responseText:"";e.__JSONP_DATA&&(o=e.__JSONP_DATA,delete e.__JSONP_DATA),n.runServiceCallback.call(n,t,e,o)}),this.options.timeout,e.data,e.headers)},n.prototype.runServiceCallback=function(e,t,n){var i=this,o=t.callback((function(t){o||i.onServiceResult.call(i,e,t)}),n);o&&this.onServiceResult.call(this,e,o)},n.prototype.onServiceResult=function(e,t){t instanceof Error||t&&t.error?e.call(this,t,null):e.call(this,null,t)},n.prototype.runNextServiceOnError=function(e,t){if(e){this.logError(e);var n=this.getNextService();n?this.runService(n,this.runNextServiceOnError.bind(this)):this.completeService.call(this,this.callbackError,new Error("All services failed"))}else this.completeService.call(this,this.callbackComplete,t)},n.prototype.getCurrentServiceOpts=function(){var e=this.options.services[this.currentServiceIndex];return"string"==typeof e?{name:e}:"function"==typeof e?e():t.isPlainObject(e)?e:{}},n.prototype.completeService=function(e,t){this.currentServiceIndex=-1,e&&e(t)},n.prototype.logError=function(e){var t=this.currentServiceIndex,n=this.getServiceByIdx(t);console.warn("The service["+t+"] ("+n.url+") responded with the following error",e)},n}(),e.Law=function(){var e={regionalLaw:!0,hasLaw:["AT","BE","BG","HR","CZ","CY","DK","EE","FI","FR","DE","EL","HU","IE","IT","LV","LT","LU","MT","NL","PL","PT","SK","ES","SE","GB","UK","GR","EU"],revokable:["HR","CY","DK","EE","FR","DE","LV","LT","NL","PT","ES"],explicitAction:["HR","IT","ES"]};function n(e){this.initialise.apply(this,arguments)}return n.prototype.initialise=function(n){t.deepExtend(this.options={},e),t.isPlainObject(n)&&t.deepExtend(this.options,n)},n.prototype.get=function(e){var t=this.options;return{hasLaw:t.hasLaw.indexOf(e)>=0,revokable:t.revokable.indexOf(e)>=0,explicitAction:t.explicitAction.indexOf(e)>=0}},n.prototype.applyLaw=function(e,t){var n=this.get(t);return n.hasLaw||(e.enabled=!1,"function"==typeof e.onNoCookieLaw&&e.onNoCookieLaw(t,n)),this.options.regionalLaw&&(n.revokable&&(e.revokable=!0),n.explicitAction&&(e.dismissOnScroll=!1,e.dismissOnTimeout=!1)),e},n}(),e.initialise=function(n,i,o){var s=new e.Law(n.law);i||(i=function(){}),o||(o=function(){});var r=Object.keys(e.status),a=t.getCookie("cookieconsent_status");r.indexOf(a)>=0?i(new e.Popup(n)):e.getCountryCode(n,(function(t){delete n.law,delete n.location,t.code&&(n=s.applyLaw(n,t.code)),i(new e.Popup(n))}),(function(t){delete n.law,delete n.location,o(t,new e.Popup(n))}))},e.getCountryCode=function(t,n,i){t.law&&t.law.countryCode?n({code:t.law.countryCode}):t.location?new e.Location(t.location).locate((function(e){n(e||{})}),i):n({})},e.utils=t,e.hasInitialised=!0,window.cookieconsent=e}}(window.cookieconsent||{})},function(e,t){var n=document.getElementsByClassName("liame"),i="hello.bartosz@"+("liamg".split("").reverse().join("")+".com");!function(){var e=0,t=n.length;for(e=0;e<t;e+=1)n[e].innerHTML="<a href=mailto:"+i+">"+i+"</a>"}()},function(e,t,n){var i=n(5),o=n(6);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var s={insert:"head",singleton:!1},r=(i(o,s),o.locals?o.locals:{});e.exports=r},function(e,t,n){"use strict";var i,o=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},s=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r=[];function a(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},i=[],o=0;o<e.length;o++){var s=e[o],c=t.base?s[0]+t.base:s[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=a(u),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(r[d].references++,r[d].updater(p)):r.push({identifier:u,updater:v(p,t),references:1}),i.push(u)}return i}function l(e){var t=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=n.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){t.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(t);else{var r=s(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,i){var o=n?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=d(t,o);else{var s=document.createTextNode(o),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}function h(e,t,n){var i=n.css,o=n.media,s=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),s&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var f=null,m=0;function v(e,t){var n,i,o;if(t.singleton){var s=m++;n=f||(f=l(t)),i=p.bind(null,n,s,!1),o=p.bind(null,n,s,!0)}else n=l(t),i=h.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return i(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;i(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<n.length;i++){var o=a(n[i]);r[o].references--}for(var s=c(e,t),l=0;l<n.length;l++){var u=a(n[l]);0===r[u].references&&(r[u].updater(),r.splice(u,1))}n=s}}}},function(e,t,n){(t=n(7)(!1)).push([e.i,'#cpm hr {\n  padding: 0.5em;\n}\n\n.cpm--form {\n  max-width: 340px;\n}\n\n.cpm--form__dark {\n  background-color: #afaa99;\n  padding: 1em;\n}\n\n.cpm--input {\n  font-size: 1em;\n  padding: 17px;\n  border-radius: 3px;\n  border-width: 1px;\n  border-color: gray;\n  margin-bottom: 1em;\n  width: 100%;\n}\n\n.cpm-textarea {\n  width: 100%;\n  padding: 0.75em;\n  border-radius: 3px;\n  border-width: 1px;\n  border-color: gray;\n  font-size: 1em;\n  min-height: 6em;\n}\n\ninput[type="file"]#file-upload { \n  display: none;\n}\n\n.cpm--file-list {\n  list-style: georgian;\n}\n\n#cpm--file-list {\n  list-style: none;\n  padding: none;\n}\n\n#cpm--file-list li {\n  font-size: 0.9em;\n  font-style: italic;\n  line-height: 1.2;\n  margin: 0 0 0.75em;\n  padding: 0;\n}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",i=e[3];if(!i)return n;if(t&&"function"==typeof btoa){var o=(r=i,a=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),s=i.sources.map((function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")}));return[n].concat(s).concat([o]).join("\n")}var r,a,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,i){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(i)for(var s=0;s<this.length;s++){var r=this[s][0];null!=r&&(o[r]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);i&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";n.r(t);n(2);window.addEventListener("load",(function(){window.cookieconsent.initialise({palette:{popup:{background:"#335"},button:{background:"#ff7733"}},theme:"classic",content:{message:"This website uses cookies to ensure you get the best experience.",href:"/cookies"}})}));n(3);var i=n(0),o=n.n(i),s=n(1),r=n.n(s);n(4);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],i=!0,o=!1,s=void 0;try{for(var r,a=e[Symbol.iterator]();!(i=(r=a.next()).done)&&(n.push(r.value),!t||n.length!==t);i=!0);}catch(e){o=!0,s=e}finally{try{i||null==a.return||a.return()}finally{if(o)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var c=o.a.createElement("section",{className:"article--narrow"},o.a.createElement((function(e){var t="no files",n="Select PDF files:",s="Re-select PDF files:",r=a(Object(i.useState)([t]),2),c=r[0],l=r[1],u=a(Object(i.useState)(n),2),d=u[0],p=u[1];Object(i.useEffect)((function(){c[0]!==t&&p(s),0===c.length&&(p(n),l([t]))}));var h=c.map((function(e,t){return o.a.createElement("li",{key:t},e)}));return o.a.createElement("section",{id:"cpm"},o.a.createElement("h2",null,"File Selector:"),o.a.createElement("form",{className:"cpm--form",action:"/my-unexisting-form-handling-page",method:"post"},o.a.createElement("fieldset",null,o.a.createElement("h3",{className:"list-title"}," Selected Files: "),o.a.createElement("ul",{id:"cpm--file-list"},h),o.a.createElement("label",{className:"cpm--label button",htmlFor:"file-upload"},d),o.a.createElement("input",{id:"file-upload",type:"file",accept:".pdf",multiple:!0,onChange:function(){return function(e,t){for(var n=e(),i=[],o=0;o<n.length;o+=1)i.push(n[o].name);t(i)}((function(){return document.getElementById("file-upload").files}),l)}})),o.a.createElement("hr",null),o.a.createElement("button",{className:"button--cta cpm--button--cta",type:"submit",value:"Send Request"},"Send Now")))}),null)),l=document.querySelector("#react-root");r.a.render(c,l),console.log("I'm runnin'")}]);
//# sourceMappingURL=main-bundle1592523263311.js.map