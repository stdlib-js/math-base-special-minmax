// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@v0.1.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";function n(s,n,i,r,a){return t(s)||t(n)?(i[a]=NaN,i[a+r]=NaN,i):s===n&&0===s?e(s)?(i[a]=s,i[a+r]=n,i):(i[a]=n,i[a+r]=s,i):s<n?(i[a]=s,i[a+r]=n,i):(i[a]=n,i[a+r]=s,i)}function i(s,e){return n(s,e,[0,0],1,0)}s(i,"assign",n);export{n as assign,i as default};
//# sourceMappingURL=index.mjs.map
