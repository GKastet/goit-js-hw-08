!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var r,i,f,a,u,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(o);function p(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function O(e){return c=e,u=setTimeout(w,t),s?p(e):a}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=f}function w(){var e=b();if(h(e))return S(e);u=setTimeout(w,function(e){var n=t-(e-l);return d?g(n,f-(e-c)):n}(e))}function S(e){return u=void 0,m&&r?p(e):(r=i=void 0,a)}function T(){var e=b(),n=h(e);if(r=arguments,i=this,l=e,n){if(void 0===u)return O(l);if(d)return u=setTimeout(w,t),p(l)}return void 0===u&&(u=setTimeout(w,t)),a}return t=j(t)||0,y(n)&&(s=!!n.leading,f=(d="maxWait"in n)?v(j(n.maxWait)||0,t):f,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=i=u=void 0},T.flush=function(){return void 0===u?a:S(b())},T}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=a.test(t);return o||u.test(t)?l(t.slice(2),o?2:8):f.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};var O={form:document.querySelector(".feedback-form")},h=O.form,w=O.form.elements.email,S=O.form.elements.message,T=JSON.parse(localStorage.getItem("feedback-form-state"))||{};h.addEventListener("input",e(t)((function(e){T[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(T))})),500),w.value=T.email||"",S.value=T.message||"",h.addEventListener("submit",(function(e){e.preventDefault(),console.log(T),localStorage.removeItem("feedback-form-state"),e.target.reset(),T={}}))}();
//# sourceMappingURL=03-feedback.f7461008.js.map