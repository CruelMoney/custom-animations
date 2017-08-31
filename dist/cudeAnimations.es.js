!function(t,e){for(var r in e)t[r]=e[r]}(exports,function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e,r,n){return r*t/n+e},o=function(t,e,r,n){return t/=n,r*t*t+e},i=function(t,e,r,n){return t/=n,-r*t*(t-2)+e},a=function(t,e,r,n){return-r/2*(Math.cos(Math.PI*t/n)-1)+e},s=function(t,e,r,n){return r*Math.sin(t/n*(Math.PI/2))+e},u=function(t,e,r,n){return t/=n,t--,-r*(t*t*t*t-1)+e},c=function(t,e,r,n){return t/=n,t--,r*Math.sqrt(1-t*t)+e},l=function(t,e,r,n){return r*(1-Math.pow(2,-10*t/n))+e},f=function(t,e,r,n){return(t/=n/2)<1?r/2*Math.pow(2,10*(t-1))+e:(t--,r/2*(2-Math.pow(2,-10*t))+e)};e.linear=n,e.easeInOutQuad=a,e.easeInQuad=o,e.easeOutQuad=i,e.easeOutSine=s,e.easeOutQuart=u,e.easeOutCirc=c,e.easeOutExpo=l,e.easeInOutExpo=f},function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Animate=e.ScrollAnimator=void 0,r(2);var o=r(3),i=n(o),a=r(5),s=n(a);"undefined"!=typeof window&&(window.cudeAnimations={ScrollAnimator:i.default,Animate:s.default}),e.ScrollAnimator=i.default,e.Animate=s.default},function(t,e,r){"use strict";"undefined"!=typeof window&&function(){if("function"==typeof NodeList.prototype.forEach)return!1;NodeList.prototype.forEach=Array.prototype.forEach}()},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=r(4),i=r(0),a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(i),s=function t(e,r){var i=this,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;n(this,t),this.setupValues=function(){i.scrollTop=window.scrollY-i.pageOffset,i.windowHeight=window.innerHeight,i.windowWidth=window.innerWidth,i.convertAllPropsToPx(),i.buildPage()},this.buildPage=function(){var t,e;for(t=0;t<i.keyframes.length;t++)for(i.bodyHeight+=i.keyframes[t].duration,-1==i.wrappers.indexOf(i.keyframes[t].wrapper)&&i.wrappers.push(i.keyframes[t].wrapper),e=0;e<i.keyframes[t].animations.length;e++)Object.keys(i.keyframes[t].animations[e]).forEach(function(r){var n=i.keyframes[t].animations[e][r];if("selector"!==r&&"easing"!==r&&n instanceof Array==!1&&"function"!=typeof n){var o=[];o.push(i.getDefaultPropertyValue(r),n),n=o}i.keyframes[t].animations[e][r]=n});i.container.style.height=i.bodyHeight+"px"},this.convertAllPropsToPx=function(){var t,e,r;for(t=0;t<i.keyframes.length;t++){var n=i.convertPercentToPx(i.keyframes[t].duration,"y");for(i.keyframes[t].duration=n,i.keyframes[t].originalDuration=n,e=0;e<i.keyframes[t].animations.length;e++)if(Object.keys(i.keyframes[t].animations[e]).forEach(function(n){var o=i.keyframes[t].animations[e][n];if("selector"!==n&&"easing"!==n&&"function"!=typeof o){if(o instanceof Array)for(r=0;r<o.length;r++)"string"==typeof o[r]&&(o[r]="translateY"===n?i.convertPercentToPx(o[r],"y"):i.convertPercentToPx(o[r],"x"));else"string"==typeof o&&(o="translateY"===n?i.convertPercentToPx(o,"y"):i.convertPercentToPx(o,"x"));i.keyframes[t].animations[e][n]=o}}),i.keyframes[t].animations[e].delay){var o=i.keyframes[t].animations[e].delay;i.keyframes[t].duration=Math.max(i.keyframes[t].duration,n+o)}}},this.getDefaultPropertyValue=function(t){switch(t){case"translateX":case"translateY":return 0;case"scale":return 1;case"rotate":return 0;case"opacity":return 1;default:return null}},this.updatePage=function(){window.requestAnimationFrame(function(){i.setScrollTops(),i.scrollTop>0&&i.scrollTop<=i.bodyHeight-i.windowHeight?(i.animateElements(),i.setKeyframe(),console.log("true")):(i.currentWrapper&&i.currentWrapper.classList.remove("active"),i.currentWrapper=null,console.log("false"))})},this.setScrollTops=function(){i.scrollTop=window.scrollY-i.pageOffset,i.relativeScrollTop=i.scrollTop-i.prevKeyframesDurations},this.animateElements=function(){for(var t,e,r,n,o,a,s=0;s<i.keyframes[i.currentKeyframe].animations.length;s++)if(t=i.keyframes[i.currentKeyframe].animations[s],t.manipulator){var u=i.calcPropValue(t,"valueRange");t.manipulator(u)}else{e=i.calcPropValue(t,"translateY"),r=i.calcPropValue(t,"translateX"),n=i.calcPropValue(t,"scale"),o=i.calcPropValue(t,"rotate"),a=i.calcPropValue(t,"opacity");var c=document.querySelector(t.selector);c&&(c.style.transform="translate3d("+r+"px, "+e+"px, 0) scale("+n+") rotate("+o+"deg)",c.style.opacity=a)}},this.calcPropValue=function(t,e){var r=t[e],n=i.keyframes[i.currentKeyframe].originalDuration;n=t.delay?n+t.delay[1]:n;var o="linear"===t.easing?a.linear:a.easeInOutQuad,s=Math.min(i.relativeScrollTop,n);return r=r?o(s,r[0],r[1]-r[0],n):i.getDefaultPropertyValue(e),r=+r.toFixed(2)},this.setKeyframe=function(){i.currentWrapper||(i.currentWrapper=i.wrappers[0],i.currentWrapper.classList.add("active")),i.scrollTop>i.keyframes[i.currentKeyframe].duration+i.prevKeyframesDurations?(i.prevKeyframesDurations+=i.keyframes[i.currentKeyframe].duration,i.currentKeyframe++,i.showCurrentWrappers()):i.scrollTop<i.prevKeyframesDurations&&(i.currentKeyframe--,i.prevKeyframesDurations-=i.keyframes[i.currentKeyframe].duration,i.showCurrentWrappers())},this.showCurrentWrappers=function(){i.keyframes[i.currentKeyframe].wrapper!=i.currentWrapper&&(i.currentWrapper.classList.remove("active"),i.keyframes[i.currentKeyframe].wrapper.classList.add("active"),i.currentWrapper=i.keyframes[i.currentKeyframe].wrapper,i.keyframes[i.currentKeyframe].keyframeStarted&&i.keyframes[i.currentKeyframe].keyframeStarted())},this.convertPercentToPx=function(t,e){return"string"==typeof t&&t.match(/%/g)&&("y"===e&&(t=parseFloat(t)/100*i.windowHeight),"x"===e&&(t=parseFloat(t)/100*i.windowWidth)),t},this.throwError=function(){console.log("errrrrooorrr 💥")},this.isTouchDevice=function(){return"ontouchstart"in window||"onmsgesturechange"in window},this.start=function(){i.scrollHandler=(0,o.throttle)(i.updatePage,10),window.addEventListener("scroll",i.scrollHandler)},this.stop=function(){window.removeEventListener("scroll",i.scrollHandler)},this.PROPERTIES=["translateX","translateY","opacity","rotate","scale"],this.container=e,this.pageOffset=s,this.wrappers=[],this.currentWrapper=null,this.scrollTimeoutID=0,this.bodyHeight=0,this.windowHeight=0,this.windowWidth=0,this.prevKeyframesDurations=0,this.scrollTop=0,this.relativeScrollTop=0,this.currentKeyframe=0,this.keyframes=r,this.setupValues()};e.default=s},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=arguments;e.debounce=function(t,e,r){var o;return function(){var i=n,a=function(){o=null,r||t.apply(void 0,i)},s=r&&!o;clearTimeout(o),o=setTimeout(a,e),s&&t.apply(void 0,i)}},e.throttle=function(t,e){var r,n;return function(){var o=this,i=arguments;return r?(clearTimeout(n),n=setTimeout(function(){t.apply(o,i),r=!1},e)):(t.apply(o,i),r=!0,setTimeout(function(){return r=!1},e))}}},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=r(0),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(o),a="undefined"==typeof Promise?r(6).Promise:Promise,s=function t(e){var r=this;if(n(this,t),this.start=function(){return new a(function(t,e){var n=setInterval(function(){window.requestAnimationFrame(function(){var e=r.easing(r.time,r.startValue,r.change,r.duration);r.manipulator(e),r.time=r.reverse?r.time-10:r.time+10,(r.time>=r.duration||r.reverse&&r.time<=0)&&(clearInterval(n),r.manipulator(r.endValue,!0),t())})},10)})},!e.target&&!e.manipulator)throw Error("An element or manipulator need to be specified in options.");var o=null;if(e.target){var s=document.querySelectorAll(e.target);o=function(t,e){s.forEach(function(e){e.innerHTML=Math.floor(t)})}}this.startValue=Number(e.start),this.endValue=Number(e.end),this.change=this.endValue-this.startValue,this.duration=Number(e.duration||250),this.reverse=!!e.reverse,this.time=this.reverse?this.duration:0,this.easing=e.customEasing||i.easeInOutExpo,this.manipulator=e.manipulator||o};e.default=s},function(t,e,r){(function(e,n){/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.1
 */
!function(e,r){t.exports=r()}(0,function(){"use strict";function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function o(t){return"function"==typeof t}function i(t){R=t}function a(t){X=t}function s(){return void 0!==Q?function(){Q(c)}:u()}function u(){var t=setTimeout;return function(){return t(c,1)}}function c(){for(var t=0;t<q;t+=2){(0,Z[t])(Z[t+1]),Z[t]=void 0,Z[t+1]=void 0}q=0}function l(t,e){var r=arguments,n=this,o=new this.constructor(p);void 0===o[tt]&&K(o);var i=n._state;return i?function(){var t=r[i-1];X(function(){return E(i,o,t,n._result)})}():k(n,o,t,e),o}function f(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var r=new e(p);return _(r,t),r}function p(){}function h(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function m(t){try{return t.then}catch(t){return ot.error=t,ot}}function y(t,e,r,n){try{t.call(e,r,n)}catch(t){return t}}function v(t,e,r){X(function(t){var n=!1,o=y(r,e,function(r){n||(n=!0,e!==r?_(t,r):T(t,r))},function(e){n||(n=!0,P(t,e))},"Settle: "+(t._label||" unknown promise"));!n&&o&&(n=!0,P(t,o))},t)}function w(t,e){e._state===rt?T(t,e._result):e._state===nt?P(t,e._result):k(e,void 0,function(e){return _(t,e)},function(e){return P(t,e)})}function g(t,e,r){e.constructor===t.constructor&&r===l&&e.constructor.resolve===f?w(t,e):r===ot?(P(t,ot.error),ot.error=null):void 0===r?T(t,e):o(r)?v(t,e,r):T(t,e)}function _(e,r){e===r?P(e,h()):t(r)?g(e,r,m(r)):T(e,r)}function b(t){t._onerror&&t._onerror(t._result),A(t)}function T(t,e){t._state===et&&(t._result=e,t._state=rt,0!==t._subscribers.length&&X(A,t))}function P(t,e){t._state===et&&(t._state=nt,t._result=e,X(b,t))}function k(t,e,r,n){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+rt]=r,o[i+nt]=n,0===i&&t._state&&X(A,t)}function A(t){var e=t._subscribers,r=t._state;if(0!==e.length){for(var n=void 0,o=void 0,i=t._result,a=0;a<e.length;a+=3)n=e[a],o=e[a+r],n?E(r,n,o,i):o(i);t._subscribers.length=0}}function O(){this.error=null}function x(t,e){try{return t(e)}catch(t){return it.error=t,it}}function E(t,e,r,n){var i=o(r),a=void 0,s=void 0,u=void 0,c=void 0;if(i){if(a=x(r,n),a===it?(c=!0,s=a.error,a.error=null):u=!0,e===a)return void P(e,d())}else a=n,u=!0;e._state!==et||(i&&u?_(e,a):c?P(e,s):t===rt?T(e,a):t===nt&&P(e,a))}function M(t,e){try{e(function(e){_(t,e)},function(e){P(t,e)})}catch(e){P(t,e)}}function S(){return at++}function K(t){t[tt]=at++,t._state=void 0,t._result=void 0,t._subscribers=[]}function j(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[tt]||K(this.promise),N(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?T(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&T(this.promise,this._result))):P(this.promise,V())}function V(){return new Error("Array Methods must be provided an Array")}function W(t){return new j(this,t).promise}function L(t){var e=this;return new e(N(t)?function(r,n){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(r,n)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function D(t){var e=this,r=new e(p);return P(r,t),r}function H(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function C(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function I(t){this[tt]=S(),this._result=this._state=void 0,this._subscribers=[],p!==t&&("function"!=typeof t&&H(),this instanceof I?M(this,t):C())}function Y(){var t=void 0;if(void 0!==n)t=n;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var r=null;try{r=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===r&&!e.cast)return}t.Promise=I}var F=void 0;F=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var N=F,q=0,Q=void 0,R=void 0,X=function(t,e){Z[q]=t,Z[q+1]=e,2===(q+=2)&&(R?R(c):$())},U="undefined"!=typeof window?window:void 0,z=U||{},B=z.MutationObserver||z.WebKitMutationObserver,G="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),J="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,Z=new Array(1e3),$=void 0;$=G?function(){return function(){return e.nextTick(c)}}():B?function(){var t=0,e=new B(c),r=document.createTextNode("");return e.observe(r,{characterData:!0}),function(){r.data=t=++t%2}}():J?function(){var t=new MessageChannel;return t.port1.onmessage=c,function(){return t.port2.postMessage(0)}}():void 0===U?function(){try{var t=r(9);return Q=t.runOnLoop||t.runOnContext,s()}catch(t){return u()}}():u();var tt=Math.random().toString(36).substring(16),et=void 0,rt=1,nt=2,ot=new O,it=new O,at=0;return j.prototype._enumerate=function(t){for(var e=0;this._state===et&&e<t.length;e++)this._eachEntry(t[e],e)},j.prototype._eachEntry=function(t,e){var r=this._instanceConstructor,n=r.resolve;if(n===f){var o=m(t);if(o===l&&t._state!==et)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(r===I){var i=new r(p);g(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new r(function(e){return e(t)}),e)}else this._willSettleAt(n(t),e)},j.prototype._settledAt=function(t,e,r){var n=this.promise;n._state===et&&(this._remaining--,t===nt?P(n,r):this._result[e]=r),0===this._remaining&&T(n,this._result)},j.prototype._willSettleAt=function(t,e){var r=this;k(t,void 0,function(t){return r._settledAt(rt,e,t)},function(t){return r._settledAt(nt,e,t)})},I.all=W,I.race=L,I.resolve=f,I.reject=D,I._setScheduler=i,I._setAsap=a,I._asap=X,I.prototype={constructor:I,then:l,catch:function(t){return this.then(null,t)}},I.polyfill=Y,I.Promise=I,I})}).call(e,r(7),r(8))},function(t,e){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(t){if(l===setTimeout)return setTimeout(t,0);if((l===r||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===n||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){m&&h&&(m=!1,h.length?d=h.concat(d):y=-1,d.length&&s())}function s(){if(!m){var t=o(a);m=!0;for(var e=d.length;e;){for(h=d,d=[];++y<e;)h&&h[y].run();y=-1,e=d.length}h=null,m=!1,i(t)}}function u(t,e){this.fun=t,this.array=e}function c(){}var l,f,p=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:r}catch(t){l=r}try{f="function"==typeof clearTimeout?clearTimeout:n}catch(t){f=n}}();var h,d=[],m=!1,y=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];d.push(new u(t,e)),1!==d.length||m||o(s)},u.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(t){return[]},p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e){}]));
//# sourceMappingURL=cudeAnimations.es.js.map