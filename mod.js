// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Number.NEGATIVE_INFINITY,n=r;var u=function(r){return 0===r&&1/r===n},t=Number.POSITIVE_INFINITY,e=t;var f=function(r){return 0===r&&1/r===e};var N=function(r){return r!=r};function a(n,e,a){var i,o,I,p,l;if(2===(i=arguments.length))return n[0]=e,n[1]=e,n;if(3===i)return N(e)||N(a)?(n[0]=NaN,n[1]=NaN,n):e===a&&0===e?u(e)?(n[0]=e,n[1]=a,n):(n[0]=a,n[1]=e,n):e<a?(n[0]=e,n[1]=a,n):(n[0]=a,n[1]=e,n);for(o=t,I=r,l=0;l<i;l++){if(N(p=arguments[l]))return n[0]=NaN,n[1]=NaN,n;(p<o||0===p&&p===o&&u(p))&&(o=p),(p>I||0===p&&p===I&&f(p))&&(I=p)}return n[0]=o,n[1]=I,n}function i(r,n,u){var t,e,f,N;if(1===(f=arguments.length))return a([0,0],r);if(t="number"==typeof arguments[0],2===f)return t?a([0,0],r,n):a(r,n);if(3===f)return t?a([0,0],r,n,u):a(r,n,u);for(t?((e=[]).push([0,0]),N=0):((e=[]).push(arguments[0]),N=1);N<f;N++)e.push(arguments[N]);return a.apply(null,e)}export{i as default};
//# sourceMappingURL=mod.js.map
