// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zero@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";function i(i,a,m){var o,d,f,p,h;if(2===(o=arguments.length))return i[0]=a,i[1]=a,i;if(3===o)return e(a)||e(m)?(i[0]=NaN,i[1]=NaN,i):a===m&&0===a?t(a)?(i[0]=a,i[1]=m,i):(i[0]=m,i[1]=a,i):a<m?(i[0]=a,i[1]=m,i):(i[0]=m,i[1]=a,i);for(d=n,f=r,h=0;h<o;h++){if(e(p=arguments[h]))return i[0]=NaN,i[1]=NaN,i;(p<d||0===p&&p===d&&t(p))&&(d=p),(p>f||0===p&&p===f&&s(p))&&(f=p)}return i[0]=d,i[1]=f,i}function a(t,s,e){var r,n,a,m;if(1===(a=arguments.length))return i([0,0],t);if(r="number"==typeof arguments[0],2===a)return r?i([0,0],t,s):i(t,s);if(3===a)return r?i([0,0],t,s,e):i(t,s,e);for(r?((n=[]).push([0,0]),m=0):((n=[]).push(arguments[0]),m=1);m<a;m++)n.push(arguments[m]);return i.apply(null,n)}export{a as default};
//# sourceMappingURL=index.mjs.map