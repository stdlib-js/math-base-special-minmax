// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=Number.NEGATIVE_INFINITY;function n(n){return 0===n&&1/n===e}var r=Number.POSITIVE_INFINITY;function t(e){return 0===e&&1/e===r}function u(e){return e!=e}function f(f,i,o){var N,a,l,p,s;if(2===(N=arguments.length))return f[0]=i,f[1]=i,f;if(3===N)return u(i)||u(o)?(f[0]=NaN,f[1]=NaN,f):i===o&&0===i?n(i)?(f[0]=i,f[1]=o,f):(f[0]=o,f[1]=i,f):i<o?(f[0]=i,f[1]=o,f):(f[0]=o,f[1]=i,f);for(a=r,l=e,s=0;s<N;s++){if(u(p=arguments[s]))return f[0]=NaN,f[1]=NaN,f;(p<a||0===p&&p===a&&n(p))&&(a=p),(p>l||0===p&&p===l&&t(p))&&(l=p)}return f[0]=a,f[1]=l,f}return function(e,n,r){var t,u,i,o;if(1===(i=arguments.length))return f([0,0],e);if(t="number"==typeof arguments[0],2===i)return t?f([0,0],e,n):f(e,n);if(3===i)return t?f([0,0],e,n,r):f(e,n,r);for(t?((u=[]).push([0,0]),o=0):((u=[]).push(arguments[0]),o=1);o<i;o++)u.push(arguments[o]);return f.apply(null,u)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).minmax=n();
//# sourceMappingURL=index.js.map
