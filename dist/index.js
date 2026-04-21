"use strict";var m=function(n,i){return function(){return i||n((i={exports:{}}).exports,i),i.exports}};var v=m(function(h,c){
var p=require('@stdlib/math-base-assert-is-negative-zero/dist'),q=require('@stdlib/math-base-assert-is-nan/dist');function u(n,i,r,e,a){return q(n)||q(i)?(r[a]=NaN,r[a+e]=NaN,r):n===i&&n===0?p(n)?(r[a]=n,r[a+e]=i,r):(r[a]=i,r[a+e]=n,r):n<i?(r[a]=n,r[a+e]=i,r):(r[a]=i,r[a+e]=n,r)}c.exports=u
});var N=m(function(j,s){
var l=v();function O(n,i){return l(n,i,[0,0],1,0)}s.exports=O
});var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),Z=v(),g=N();R(g,"assign",Z);module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
