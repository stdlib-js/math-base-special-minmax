// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Number.NEGATIVE_INFINITY,n=r;var u=function(r){return 0===r&&1/r===n},t=Number.POSITIVE_INFINITY,e=t;var f=u,N=function(r){return 0===r&&1/r===e},a=function(r){return r!=r},i=r,o=t;var I=function(r,n,u){var t,e,I,p,v;if(2===(t=arguments.length))return r[0]=n,r[1]=n,r;if(3===t)return a(n)||a(u)?(r[0]=NaN,r[1]=NaN,r):n===u&&0===n?f(n)?(r[0]=n,r[1]=u,r):(r[0]=u,r[1]=n,r):n<u?(r[0]=n,r[1]=u,r):(r[0]=u,r[1]=n,r);for(e=o,I=i,v=0;v<t;v++){if(a(p=arguments[v]))return r[0]=NaN,r[1]=NaN,r;(p<e||0===p&&p===e&&f(p))&&(e=p),(p>I||0===p&&p===I&&N(p))&&(I=p)}return r[0]=e,r[1]=I,r};var p=function(r,n,u){var t,e,f,N;if(1===(f=arguments.length))return I([0,0],r);if(t="number"==typeof arguments[0],2===f)return t?I([0,0],r,n):I(r,n);if(3===f)return t?I([0,0],r,n,u):I(r,n,u);for(t?((e=[]).push([0,0]),N=0):((e=[]).push(arguments[0]),N=1);N<f;N++)e.push(arguments[N]);return I.apply(null,e)};export{p as default};
//# sourceMappingURL=mod.js.map
