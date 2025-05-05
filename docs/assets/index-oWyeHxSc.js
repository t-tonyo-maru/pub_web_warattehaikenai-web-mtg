var hl=(r,t)=>()=>(t||r((t={exports:{}}).exports,t),t.exports);var Zy=hl((t0,sl)=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var Vs=function(r,t){return(Vs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])})(r,t)};function gt(r,t){function e(){this.constructor=r}Vs(r,t),r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}function K(r,t,e,n){return new(e||(e=Promise))(function(o,i){function a(c){try{u(n.next(c))}catch(l){i(l)}}function s(c){try{u(n.throw(c))}catch(l){i(l)}}function u(c){c.done?o(c.value):new e(function(l){l(c.value)}).then(a,s)}u((n=n.apply(r,[])).next())})}function X(r,t){var e,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function s(u){return function(c){return function(l){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,n&&(o=2&l[0]?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,n=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(l[0]===6||l[0]===2)){a=0;continue}if(l[0]===3&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(l[0]===6&&a.label<o[1]){a.label=o[1],o=l;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(l);break}o[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(r,a)}catch(h){l=[6,h],n=0}finally{e=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([u,c])}}}var fl=function(){function r(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.populateURLFlags()}return r.prototype.setPlatform=function(t,e){this.platform!=null&&console.warn("Platform "+this.platformName+" has already been set. Overwriting the platform with "+e+"."),this.platformName=t,this.platform=e},r.prototype.registerFlag=function(t,e,n){if(this.flagRegistry[t]={evaluationFn:e,setHook:n},this.urlFlags[t]!=null){var o=this.urlFlags[t];console.warn("Setting feature override from URL "+t+": "+o+"."),this.set(t,o)}},r.prototype.get=function(t){return t in this.flags?this.flags[t]:(this.flags[t]=this.evaluateFlag(t),this.flags[t])},r.prototype.getNumber=function(t){return this.get(t)},r.prototype.getBool=function(t){return this.get(t)},r.prototype.getFlags=function(){return this.flags},Object.defineProperty(r.prototype,"features",{get:function(){return this.flags},enumerable:!0,configurable:!0}),r.prototype.set=function(t,e){if(this.flagRegistry[t]==null)throw new Error("Cannot set flag "+t+" as it has not been registered.");this.flags[t]=e,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(e)},r.prototype.evaluateFlag=function(t){if(this.flagRegistry[t]==null)throw new Error("Cannot evaluate flag '"+t+"': no evaluation function found.");return this.flagRegistry[t].evaluationFn()},r.prototype.setFlags=function(t){this.flags=Object.assign({},t)},r.prototype.reset=function(){this.flags={},this.urlFlags={},this.populateURLFlags()},r.prototype.populateURLFlags=function(){var t=this;if(this.global!==void 0&&this.global.location!==void 0&&this.global.location.search!==void 0){var e,n,o=(e=this.global.location.search,n={},e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,function(i){for(var a=[],s=1;s<arguments.length;s++)a[s-1]=arguments[s];return dl(n,a[0],a[1]),a.join("=")}),n);"tfjsflags"in o&&o.tfjsflags.split(",").forEach(function(i){var a=i.split(":"),s=a[0],u=a[1];t.urlFlags[s]=function(c,l){if((l=l.toLowerCase())==="true"||l==="false")return l==="true";if(""+ +l===l)return+l;throw new Error("Could not parse value flag value "+l+" for flag "+c+".")}(s,u)})}},r}();function dl(r,t,e){r[decodeURIComponent(t)]=decodeURIComponent(e||"")}function M(){return zs}var zs=null,Vr=new Map,ui=new Map;function Us(r,t){var e=Hs(r,t);return Vr.get(e)}function pl(r){return ui.get(r)}function La(r){for(var t=Vr.entries(),e=[];;){var n=t.next(),o=n.done,i=n.value;if(o)break;var a=i[0],s=i[1];a.split("_")[0]===r&&e.push(s)}return e}function Gs(r){var t=r.kernelName,e=r.backendName,n=Hs(t,e);if(Vr.has(n))throw new Error("The kernel '"+t+"' for backend '"+e+"' is already registered");Vr.set(n,r)}function vl(r){var t=r.kernelName;ui.has(t)&&console.warn("Overriding the gradient for '"+t+"'"),ui.set(t,r)}function Hs(r,t){return t+"_"+r}function ci(r,t,e){return Math.max(r,Math.min(t,e))}function qs(r){return r%2==0?r:r+1}function ml(r){for(var t=0,e=0;e<r.length;e++)t+=r[e];return t}function E(r,t){if(!r)throw new Error(typeof t=="string"?t:t())}function ye(r,t,e){e===void 0&&(e=""),E(We(r,t),function(){return e+" Shapes "+r+" and "+t+" must match"})}function Xn(r){E(r!=null,function(){return"The input to the tensor constructor must be a non-null value."})}function Hn(r,t,e){if(t===void 0&&(t=[]),e===void 0&&(e=!1),t==null&&(t=[]),Array.isArray(r)||Rt(r)&&!e)for(var n=0;n<r.length;++n)Hn(r[n],t,e);else t.push(r);return t}function Y(r){if(r.length===0)return 1;for(var t=r[0],e=1;e<r.length;e++)t*=r[e];return t}function We(r,t){if(r===t)return!0;if(r==null||t==null||r.length!==t.length)return!1;for(var e=0;e<r.length;e++)if(r[e]!==t[e])return!1;return!0}function De(r){return r%1==0}function gl(r){if(Math.tanh!=null)return Math.tanh(r);if(r===1/0)return 1;if(r===-1/0)return-1;var t=Math.exp(2*r);return(t-1)/(t+1)}function li(r){var t=Math.ceil(Math.sqrt(r));return[t,Math.ceil(r/t)]}function Bn(r,t){return t<=r.length?r:r+" ".repeat(t-r.length)}function Wa(r,t,e){return t===void 0&&(t=function(n){return 0}),new Promise(function(n,o){var i=0,a=function(){if(r())n();else{i++;var s=t(i);e!=null&&i>=e?o():setTimeout(a,s)}};a()})}function yl(r,t){for(var e=1,n=-1,o=0;o<r.length;++o)if(r[o]>=0)e*=r[o];else if(r[o]===-1){if(n!==-1)throw Error("Shapes can only have 1 implicit size. Found -1 at dim "+n+" and dim "+o);n=o}else if(r[o]<0)throw Error("Shapes can not be < 0. Found "+r[o]+" at dim "+o);if(n===-1){if(t>0&&t!==e)throw Error("Size("+t+") must match the product of shape "+r);return r}if(e===0)throw Error("Cannot infer the missing size in ["+r+"] when there are 0 elements");if(t%e!=0)throw Error("The implicit shape can't be a fractional number. Got "+t+" / "+e);var i=r.slice();return i[n]=t/e,i}function Be(r,t){var e=t.length;return E((r=r==null?t.map(function(n,o){return o}):[].concat(r)).every(function(n){return n>=-e&&n<e}),function(){return"All values in axis param must be in range [-"+e+", "+e+") but got axis "+r}),E(r.every(function(n){return De(n)}),function(){return"All values in axis param must be integers but got axis "+r}),r.map(function(n){return n<0?e+n:n})}function vn(r,t){for(var e=[],n=[],o=t!=null&&Array.isArray(t)&&t.length===0,i=t==null||o?null:Be(t,r).sort(),a=0,s=0;s<r.length;++s){if(i!=null){if(i[a]===s&&r[s]!==1)throw new Error("Can't squeeze axis "+s+" since its dim '"+r[s]+"' is not 1");(i[a]==null||i[a]>s)&&r[s]===1&&(e.push(r[s]),n.push(s)),i[a]<=s&&a++}r[s]!==1&&(e.push(r[s]),n.push(s))}return{newShape:e,keptDims:n}}function ir(r,t){var e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else{if(r!=="bool")throw new Error("Unknown data type "+r);e=new Uint8Array(t)}return e}function zr(r,t){var e=null;if(r==null||r==="float32")e=new Float32Array(t);else if(r==="int32")e=new Int32Array(t);else if(r==="bool")e=new Uint8Array(t);else{if(r!=="string")throw new Error("Unknown data type "+r);e=new Array(t)}return e}function xl(r,t){for(var e=0;e<r.length;e++){var n=r[e];if(isNaN(n)||!isFinite(n))throw Error("A tensor of type "+t+" being uploaded contains "+n+".")}}function bl(r){return r==="bool"||r==="complex64"||r==="float32"||r==="int32"||r==="string"}function wl(r,t){return t!=="complex64"&&(t!=="float32"||r==="complex64")&&(t!=="int32"||r==="float32"||r==="complex64")&&(t!=="bool"||r!=="bool")}function Rt(r){return r instanceof Float32Array||r instanceof Int32Array||r instanceof Uint8Array}function js(r){if(r==="float32"||r==="int32")return 4;if(r==="complex64")return 8;if(r==="bool")return 1;throw new Error("Unknown dtype "+r)}function Cl(r){if(r==null)return 0;var t=0;return r.forEach(function(e){return t+=e.length}),t}function Fi(r){return typeof r=="string"||r instanceof String}function _l(r){return typeof r=="boolean"}function El(r){return typeof r=="number"}function vr(r){return Array.isArray(r)?vr(r[0]):r instanceof Float32Array?"float32":r instanceof Int32Array||r instanceof Uint8Array?"int32":El(r)?"float32":Fi(r)?"string":_l(r)?"bool":"float32"}function hi(r){return!!(r&&r.constructor&&r.call&&r.apply)}function fi(r,t){for(var e=t;e<r;++e)if(r%e==0)return e;return r}function St(r){var t=r.length;if(t<2)return[];var e=new Array(t-1);e[t-2]=r[t-1];for(var n=t-3;n>=0;--n)e[n]=e[n+1]*r[n+1];return e}function $s(r,t,e){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(r)&&(r=Hn(r)),e&&xl(r,t),function(i,a){return i instanceof Float32Array&&a==="float32"||i instanceof Int32Array&&a==="int32"||i instanceof Uint8Array&&a==="bool"}(r,t))return r;if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool"){for(var n=new Uint8Array(r.length),o=0;o<n.length;++o)Math.round(r[o])!==0&&(n[o]=1);return n}throw new Error("Unknown data type "+t)}function Va(r,t){if(r.length===0)return t[0];var e=r.reduce(function(n,o){return n*o});if(e===0)return[];if(e!==t.length)throw new Error("["+r+"] does not match the input size.");return function n(o,i,a){var s=new Array;if(i.length===1)for(var u=i[0],c=0;c<u;c++)s[c]=a[o+c];else{u=i[0];var l=i.slice(1),h=l.reduce(function(f,d){return f*d});for(c=0;c<u;c++)s[c]=n(o+c*h,l,a)}return s}(0,r,t)}function Ks(r,t){for(var e=mr(r,t),n=0;n<e.length;n++)e[n]=1;return e}function mr(r,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(r);if(t==="int32")return new Int32Array(r);if(t==="bool")return new Uint8Array(r);throw new Error("Unknown data type "+t)}function Et(){return M().platform.now()}function Xs(r){r.forEach(function(t){E(Number.isInteger(t)&&t>=0,function(){return"Tensor must have a shape comprised of positive integers but got shape ["+r+"]."})})}function Il(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",M().platform.encode(r,t)}function Ur(r,t){return t===void 0&&(t="utf-8"),t=t||"utf-8",M().platform.decode(r,t)}function za(r,t,e){if(t===0)return 0;if(t===1)return r[0];for(var n=r[r.length-1],o=0;o<r.length-1;++o)n+=e[o]*r[o];return n}function Al(r,t,e){if(t===0)return[];if(t===1)return[r];for(var n=new Array(t),o=0;o<n.length-1;++o)n[o]=Math.floor(r/e[o]),r-=n[o]*e[o];return n[n.length-1]=r,n}var kl=function(){function r(t,e){this.backendTimer=t,this.logger=e,e==null&&(this.logger=new Rl)}return r.prototype.profileKernel=function(t,e,n){var o,i=this,a=this.backendTimer.time(function(){o=n()});return o.forEach(function(s){s.data().then(function(u){(function(c,l,h){if(l!=="float32")return!1;for(var f=0;f<c.length;f++){var d=c[f];if(isNaN(d)||!isFinite(d))return console.warn("Found "+d+" in the result of '"+h+"'"),!0}})(u,s.dtype,t),a.then(function(c){var l="";c.getExtraProfileInfo!=null&&(l=c.getExtraProfileInfo()),i.logger.logKernelProfile(t,s,u,c.kernelMs,e,l)})})}),o},r}(),Rl=function(){function r(){}return r.prototype.logKernelProfile=function(t,e,n,o,i,a){var s=typeof o=="number"?Bn(o+"ms",9):o.error,u=Bn(t,25),c=e.rank,l=e.size,h=Bn(e.shape.toString(),14),f="";for(var d in i){var p=i[d].shape||e.shape,v=p.length;f+=d+": "+v+"D "+(v>0?p:"")+" "}console.log("%c"+u+"	%c"+s+"	%c"+c+"D "+h+"	%c"+l+"	%c"+f+"	%c"+a,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")},r}(),Ua=20,Jn=3,Fo=7;function Sl(r,t,e,n){var o=St(t),i=function(c,l,h,f){var d=Y(l),p=f[f.length-1],v=new Array(p).fill(0),m=l.length,g=h==="complex64"?Zn(c):c;if(m>1)for(var y=0;y<d/p;y++)for(var b=y*p,x=0;x<p;x++)v[x]=Math.max(v[x],Qn(g[b+x],0,h).length);return v}(r,t,e,o),a=t.length,s=function c(l,h,f,d,p,v){v===void 0&&(v=!0);var m=f==="complex64"?2:1,g=h[0],y=h.length;if(y===0)return f==="complex64"?[Qn(Zn(l)[0],0,f)]:f==="bool"?[Ys(l[0])]:[l[0].toString()];if(y===1){if(g>Ua){var b=Jn*m,x=Array.from(l.slice(0,b)),w=Array.from(l.slice((g-Jn)*m,g*m));return f==="complex64"&&(x=Zn(x),w=Zn(w)),["["+x.map(function(B,z){return Qn(B,p[z],f)}).join(", ")+", ..., "+w.map(function(B,z){return Qn(B,p[g-Jn+z],f)}).join(", ")+"]"]}return["["+(f==="complex64"?Zn(l):Array.from(l)).map(function(B,z){return Qn(B,p[z],f)}).join(", ")+"]"]}var C=h.slice(1),R=d.slice(1),k=d[0]*m,I=[];if(g>Ua){for(var A=0;A<Jn;A++){var F=(D=A*k)+k;I.push.apply(I,c(l.slice(D,F),C,f,R,p,!1))}for(I.push("..."),A=g-Jn;A<g;A++)F=(D=A*k)+k,I.push.apply(I,c(l.slice(D,F),C,f,R,p,A===g-1))}else for(A=0;A<g;A++){var D;F=(D=A*k)+k,I.push.apply(I,c(l.slice(D,F),C,f,R,p,A===g-1))}var L=y===2?",":"";for(I[0]="["+I[0]+L,A=1;A<I.length-1;A++)I[A]=" "+I[A]+L;var O=`,
`;for(A=2;A<y;A++)O+=`
`;return I[I.length-1]=" "+I[I.length-1]+"]"+(v?"":O),I}(r,t,e,o,i),u=["Tensor"];return n&&(u.push("  dtype: "+e),u.push("  rank: "+a),u.push("  shape: ["+t+"]"),u.push("  values:")),u.push(s.map(function(c){return"    "+c}).join(`
`)),u.join(`
`)}function Qn(r,t,e){return Bn(Array.isArray(r)?parseFloat(r[0].toFixed(Fo))+" + "+parseFloat(r[1].toFixed(Fo))+"j":Fi(r)?"'"+r+"'":e==="bool"?Ys(r):parseFloat(r.toFixed(Fo)).toString(),t)}function Ys(r){return r===0?"false":"true"}function Zn(r){for(var t=[],e=0;e<r.length;e+=2)t.push([r[e],r[e+1]]);return t}var ar=function(){function r(t,e,n){var o=this;if(this.dtype=e,this.shape=t.slice(),this.size=Y(t),n!=null){var i=n.length;E(i===this.size,function(){return"Length of values '"+i+"' does not match the size inferred by the shape '"+o.size+"'."})}if(e==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||zr(e,this.size),this.strides=St(t)}return r.prototype.set=function(t){for(var e=this,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];n.length===0&&(n=[0]),E(n.length===this.rank,function(){return"The number of provided coordinates ("+n.length+") must match the rank ("+e.rank+")"});var i=this.locToIndex(n);this.values[i]=t},r.prototype.get=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];t.length===0&&(t=[0]);for(var n=0,o=0,i=t;o<i.length;o++){var a=i[o];if(a<0||a>=this.shape[n]){var s="Requested out of range element at "+t+".   Buffer shape="+this.shape;throw new Error(s)}n++}for(var u=t[t.length-1],c=0;c<t.length-1;++c)u+=this.strides[c]*t[c];return this.values[u]},r.prototype.locToIndex=function(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];for(var e=t[t.length-1],n=0;n<t.length-1;++n)e+=this.strides[n]*t[n];return e},r.prototype.indexToLoc=function(t){if(this.rank===0)return[];if(this.rank===1)return[t];for(var e=new Array(this.shape.length),n=0;n<e.length-1;++n)e[n]=Math.floor(t/this.strides[n]),t-=e[n]*this.strides[n];return e[e.length-1]=t,e},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.toTensor=function(){return It().makeTensor(this.values,this.shape,this.dtype)},r}(),It=null,P=null,Js=null,Ee=function(){function r(t,e,n,o){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=e||"float32",this.size=Y(t),this.strides=St(t),this.dataId=n,this.id=o,this.rankType=this.rank<5?this.rank.toString():"higher"}return r.prototype.flatten=function(){return this.throwIfDisposed(),this.as1D()},r.prototype.asScalar=function(){return this.throwIfDisposed(),E(this.size===1,function(){return"The array must have only 1 element."}),this.reshape([])},r.prototype.as1D=function(){return this.throwIfDisposed(),this.reshape([this.size])},r.prototype.as2D=function(t,e){return this.throwIfDisposed(),this.reshape([t,e])},r.prototype.as3D=function(t,e,n){return this.throwIfDisposed(),this.reshape([t,e,n])},r.prototype.as4D=function(t,e,n,o){return this.throwIfDisposed(),this.reshape([t,e,n,o])},r.prototype.as5D=function(t,e,n,o,i){return this.throwIfDisposed(),this.reshape([t,e,n,o,i])},r.prototype.asType=function(t){return this.throwIfDisposed(),P.cast(this,t)},Object.defineProperty(r.prototype,"rank",{get:function(){return this.shape.length},enumerable:!0,configurable:!0}),r.prototype.buffer=function(){return K(this,void 0,void 0,function(){var t;return X(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,P.buffer(this.shape,this.dtype,t)]}})})},r.prototype.bufferSync=function(){return P.buffer(this.shape,this.dtype,this.dataSync())},r.prototype.array=function(){return K(this,void 0,void 0,function(){var t;return X(this,function(e){switch(e.label){case 0:return[4,this.data()];case 1:return t=e.sent(),[2,Va(this.shape,t)]}})})},r.prototype.arraySync=function(){return Va(this.shape,this.dataSync())},r.prototype.data=function(){return K(this,void 0,void 0,function(){var t,e;return X(this,function(n){switch(n.label){case 0:return this.throwIfDisposed(),t=It().read(this.dataId),this.dtype!=="string"?[3,2]:[4,t];case 1:e=n.sent();try{return[2,e.map(function(o){return Ur(o)})]}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}n.label=2;case 2:return[2,t]}})})},r.prototype.dataSync=function(){this.throwIfDisposed();var t=It().readSync(this.dataId);if(this.dtype==="string")try{return t.map(function(e){return Ur(e)})}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t},r.prototype.bytes=function(){return K(this,void 0,void 0,function(){var t;return X(this,function(e){switch(e.label){case 0:return this.throwIfDisposed(),[4,It().read(this.dataId)];case 1:return t=e.sent(),this.dtype==="string"?[2,t]:[2,new Uint8Array(t.buffer)]}})})},r.prototype.dispose=function(){this.isDisposed||(It().disposeTensor(this),this.isDisposedInternal=!0)},Object.defineProperty(r.prototype,"isDisposed",{get:function(){return this.isDisposedInternal},enumerable:!0,configurable:!0}),r.prototype.throwIfDisposed=function(){if(this.isDisposed)throw new Error("Tensor is disposed.")},r.prototype.toFloat=function(){return this.asType("float32")},r.prototype.toInt=function(){return this.asType("int32")},r.prototype.toBool=function(){return this.asType("bool")},r.prototype.print=function(t){return t===void 0&&(t=!1),P.print(this,t)},r.prototype.reshape=function(t){return this.throwIfDisposed(),P.reshape(this,t)},r.prototype.reshapeAs=function(t){return this.throwIfDisposed(),this.reshape(t.shape)},r.prototype.expandDims=function(t){return t===void 0&&(t=0),P.expandDims(this,t)},r.prototype.cumsum=function(t,e,n){return t===void 0&&(t=0),e===void 0&&(e=!1),n===void 0&&(n=!1),P.cumsum(this,t,e,n)},r.prototype.squeeze=function(t){return this.throwIfDisposed(),P.squeeze(this,t)},r.prototype.clone=function(){return this.throwIfDisposed(),P.clone(this)},r.prototype.oneHot=function(t,e,n){return this.throwIfDisposed(),P.oneHot(this,t,e,n)},r.prototype.toString=function(t){return t===void 0&&(t=!1),Sl(this.dataSync(),this.shape,this.dtype,t)},r.prototype.tile=function(t){return this.throwIfDisposed(),P.tile(this,t)},r.prototype.gather=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),P.gather(this,t,e)},r.prototype.matMul=function(t,e,n){return e===void 0&&(e=!1),n===void 0&&(n=!1),this.throwIfDisposed(),P.matMul(this,t,e,n)},r.prototype.dot=function(t){return this.throwIfDisposed(),P.dot(this,t)},r.prototype.norm=function(t,e,n){return t===void 0&&(t="euclidean"),e===void 0&&(e=null),n===void 0&&(n=!1),this.throwIfDisposed(),P.norm(this,t,e,n)},r.prototype.slice=function(t,e){return this.throwIfDisposed(),P.slice(this,t,e)},r.prototype.reverse=function(t){return this.throwIfDisposed(),P.reverse(this,t)},r.prototype.concat=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),t instanceof r&&(t=[t]),P.concat([this].concat(t),e)},r.prototype.split=function(t,e){return e===void 0&&(e=0),this.throwIfDisposed(),P.split(this,t,e)},r.prototype.stack=function(t,e){return e===void 0&&(e=0),P.stack([this,t],e)},r.prototype.unstack=function(t){return t===void 0&&(t=0),P.unstack(this,t)},r.prototype.pad=function(t,e){return e===void 0&&(e=0),P.pad(this,t,e)},r.prototype.batchNormalization=function(t,e,n,o,i){return n===void 0&&(n=.001),Js("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon"),this.batchNorm(t,e,i,o,n)},r.prototype.batchNorm=function(t,e,n,o,i){return i===void 0&&(i=.001),this.throwIfDisposed(),P.batchNorm(this,t,e,n,o,i)},r.prototype.all=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.all(this,t,e)},r.prototype.any=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.any(this,t,e)},r.prototype.logSumExp=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.logSumExp(this,t,e)},r.prototype.sum=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.sum(this,t,e)},r.prototype.prod=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.prod(this,t,e)},r.prototype.mean=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.mean(this,t,e)},r.prototype.min=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.min(this,t,e)},r.prototype.max=function(t,e){return t===void 0&&(t=null),e===void 0&&(e=!1),this.throwIfDisposed(),P.max(this,t,e)},r.prototype.argMin=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),P.argMin(this,t)},r.prototype.argMax=function(t){return t===void 0&&(t=null),this.throwIfDisposed(),P.argMax(this,t)},r.prototype.cast=function(t){return this.throwIfDisposed(),P.cast(this,t)},r.prototype.add=function(t){return this.throwIfDisposed(),P.add(this,t)},r.prototype.addStrict=function(t){return this.throwIfDisposed(),P.addStrict(this,t)},r.prototype.atan2=function(t){return this.throwIfDisposed(),P.atan2(this,t)},r.prototype.sub=function(t){return this.throwIfDisposed(),P.sub(this,t)},r.prototype.subStrict=function(t){return this.throwIfDisposed(),P.subStrict(this,t)},r.prototype.pow=function(t){return this.throwIfDisposed(),P.pow(this,t)},r.prototype.powStrict=function(t){return this.throwIfDisposed(),P.powStrict(this,t)},r.prototype.mul=function(t){return this.throwIfDisposed(),P.mul(this,t)},r.prototype.mulStrict=function(t){return this.throwIfDisposed(),P.mulStrict(this,t)},r.prototype.div=function(t){return this.throwIfDisposed(),P.div(this,t)},r.prototype.divNoNan=function(t){return this.throwIfDisposed(),P.divNoNan(this,t)},r.prototype.floorDiv=function(t){return this.throwIfDisposed(),P.floorDiv(this,t)},r.prototype.divStrict=function(t){return this.throwIfDisposed(),P.divStrict(this,t)},r.prototype.minimum=function(t){return this.throwIfDisposed(),P.minimum(this,t)},r.prototype.minimumStrict=function(t){return this.throwIfDisposed(),P.minimumStrict(this,t)},r.prototype.maximum=function(t){return this.throwIfDisposed(),P.maximum(this,t)},r.prototype.maximumStrict=function(t){return this.throwIfDisposed(),P.maximumStrict(this,t)},r.prototype.mod=function(t){return this.throwIfDisposed(),P.mod(this,t)},r.prototype.modStrict=function(t){return this.throwIfDisposed(),P.modStrict(this,t)},r.prototype.squaredDifferenceStrict=function(t){return this.throwIfDisposed(),P.squaredDifferenceStrict(this,t)},r.prototype.transpose=function(t){return this.throwIfDisposed(),P.transpose(this,t)},r.prototype.notEqual=function(t){return this.throwIfDisposed(),P.notEqual(this,t)},r.prototype.notEqualStrict=function(t){return this.throwIfDisposed(),P.notEqualStrict(this,t)},r.prototype.less=function(t){return this.throwIfDisposed(),P.less(this,t)},r.prototype.lessStrict=function(t){return this.throwIfDisposed(),P.lessStrict(this,t)},r.prototype.equal=function(t){return this.throwIfDisposed(),P.equal(this,t)},r.prototype.equalStrict=function(t){return this.throwIfDisposed(),P.equalStrict(this,t)},r.prototype.lessEqual=function(t){return this.throwIfDisposed(),P.lessEqual(this,t)},r.prototype.lessEqualStrict=function(t){return this.throwIfDisposed(),P.lessEqualStrict(this,t)},r.prototype.greater=function(t){return this.throwIfDisposed(),P.greater(this,t)},r.prototype.greaterStrict=function(t){return this.throwIfDisposed(),P.greaterStrict(this,t)},r.prototype.greaterEqual=function(t){return this.throwIfDisposed(),P.greaterEqual(this,t)},r.prototype.greaterEqualStrict=function(t){return this.throwIfDisposed(),P.greaterEqualStrict(this,t)},r.prototype.logicalAnd=function(t){return this.throwIfDisposed(),P.logicalAnd(this,t)},r.prototype.logicalOr=function(t){return this.throwIfDisposed(),P.logicalOr(this,t)},r.prototype.logicalNot=function(){return this.throwIfDisposed(),P.logicalNot(this)},r.prototype.logicalXor=function(t){return this.throwIfDisposed(),P.logicalXor(this,t)},r.prototype.where=function(t,e){return this.throwIfDisposed(),P.where(t,this,e)},r.prototype.neg=function(){return this.throwIfDisposed(),P.neg(this)},r.prototype.ceil=function(){return this.throwIfDisposed(),P.ceil(this)},r.prototype.floor=function(){return this.throwIfDisposed(),P.floor(this)},r.prototype.sign=function(){return this.throwIfDisposed(),P.sign(this)},r.prototype.isNaN=function(){return this.throwIfDisposed(),P.isNaN(this)},r.prototype.isInf=function(){return this.throwIfDisposed(),P.isInf(this)},r.prototype.isFinite=function(){return this.throwIfDisposed(),P.isFinite(this)},r.prototype.exp=function(){return this.throwIfDisposed(),P.exp(this)},r.prototype.expm1=function(){return this.throwIfDisposed(),P.expm1(this)},r.prototype.log=function(){return this.throwIfDisposed(),P.log(this)},r.prototype.log1p=function(){return this.throwIfDisposed(),P.log1p(this)},r.prototype.sqrt=function(){return this.throwIfDisposed(),P.sqrt(this)},r.prototype.rsqrt=function(){return this.throwIfDisposed(),P.rsqrt(this)},r.prototype.square=function(){return this.throwIfDisposed(),P.square(this)},r.prototype.reciprocal=function(){return this.throwIfDisposed(),P.reciprocal(this)},r.prototype.abs=function(){return this.throwIfDisposed(),P.abs(this)},r.prototype.clipByValue=function(t,e){return this.throwIfDisposed(),P.clipByValue(this,t,e)},r.prototype.relu=function(){return this.throwIfDisposed(),P.relu(this)},r.prototype.relu6=function(){return this.throwIfDisposed(),P.relu6(this)},r.prototype.elu=function(){return this.throwIfDisposed(),P.elu(this)},r.prototype.selu=function(){return this.throwIfDisposed(),P.selu(this)},r.prototype.leakyRelu=function(t){return t===void 0&&(t=.2),this.throwIfDisposed(),P.leakyRelu(this,t)},r.prototype.prelu=function(t){return this.throwIfDisposed(),P.prelu(this,t)},r.prototype.sigmoid=function(){return this.throwIfDisposed(),P.sigmoid(this)},r.prototype.logSigmoid=function(){return this.throwIfDisposed(),P.logSigmoid(this)},r.prototype.softplus=function(){return this.throwIfDisposed(),P.softplus(this)},r.prototype.zerosLike=function(){return this.throwIfDisposed(),P.zerosLike(this)},r.prototype.onesLike=function(){return this.throwIfDisposed(),P.onesLike(this)},r.prototype.sin=function(){return this.throwIfDisposed(),P.sin(this)},r.prototype.cos=function(){return this.throwIfDisposed(),P.cos(this)},r.prototype.tan=function(){return this.throwIfDisposed(),P.tan(this)},r.prototype.asin=function(){return this.throwIfDisposed(),P.asin(this)},r.prototype.acos=function(){return this.throwIfDisposed(),P.acos(this)},r.prototype.atan=function(){return this.throwIfDisposed(),P.atan(this)},r.prototype.sinh=function(){return this.throwIfDisposed(),P.sinh(this)},r.prototype.cosh=function(){return this.throwIfDisposed(),P.cosh(this)},r.prototype.tanh=function(){return this.throwIfDisposed(),P.tanh(this)},r.prototype.asinh=function(){return this.throwIfDisposed(),P.asinh(this)},r.prototype.acosh=function(){return this.throwIfDisposed(),P.acosh(this)},r.prototype.atanh=function(){return this.throwIfDisposed(),P.atanh(this)},r.prototype.erf=function(){return this.throwIfDisposed(),P.erf(this)},r.prototype.round=function(){return this.throwIfDisposed(),P.round(this)},r.prototype.step=function(t){return t===void 0&&(t=0),this.throwIfDisposed(),P.step(this,t)},r.prototype.softmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),P.softmax(this,t)},r.prototype.logSoftmax=function(t){return t===void 0&&(t=-1),this.throwIfDisposed(),P.logSoftmax(this,t)},r.prototype.resizeBilinear=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),P.image.resizeBilinear(this,t,e)},r.prototype.resizeNearestNeighbor=function(t,e){return e===void 0&&(e=!1),this.throwIfDisposed(),P.image.resizeNearestNeighbor(this,t,e)},r.prototype.conv1d=function(t,e,n,o,i,a){return o===void 0&&(o="NWC"),i===void 0&&(i=1),this.throwIfDisposed(),P.conv1d(this,t,e,n,o,i,a)},r.prototype.conv2d=function(t,e,n,o,i,a){return o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]),this.throwIfDisposed(),P.conv2d(this,t,e,n,o,i,a)},r.prototype.conv2dTranspose=function(t,e,n,o,i){return this.throwIfDisposed(),P.conv2dTranspose(this,t,e,n,o,i)},r.prototype.depthwiseConv2D=function(t,e,n,o,i,a){return o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]),this.throwIfDisposed(),P.depthwiseConv2d(this,t,e,n,o,i,a)},r.prototype.separableConv2d=function(t,e,n,o,i,a){return i===void 0&&(i=[1,1]),a===void 0&&(a="NHWC"),this.throwIfDisposed(),P.separableConv2d(this,t,e,n,o,i,a)},r.prototype.avgPool=function(t,e,n,o){return this.throwIfDisposed(),P.avgPool(this,t,e,n,o)},r.prototype.maxPool=function(t,e,n,o){return this.throwIfDisposed(),P.maxPool(this,t,e,n,o)},r.prototype.localResponseNormalization=function(t,e,n,o){return t===void 0&&(t=5),e===void 0&&(e=1),n===void 0&&(n=1),o===void 0&&(o=.5),P.localResponseNormalization(this,t,e,n,o)},r.prototype.pool=function(t,e,n,o,i){return this.throwIfDisposed(),P.pool(this,t,e,n,o,i)},r.prototype.variable=function(t,e,n){return t===void 0&&(t=!0),this.throwIfDisposed(),It().makeVariable(this,t,e,n)},r.prototype.unsortedSegmentSum=function(t,e){return this.throwIfDisposed(),P.unsortedSegmentSum(this,t,e)},r.prototype.batchToSpaceND=function(t,e){return this.throwIfDisposed(),P.batchToSpaceND(this,t,e)},r.prototype.spaceToBatchND=function(t,e){return this.throwIfDisposed(),P.spaceToBatchND(this,t,e)},r.prototype.topk=function(t,e){return t===void 0&&(t=1),e===void 0&&(e=!0),this.throwIfDisposed(),P.topk(this,t,e)},r.prototype.stridedSlice=function(t,e,n,o,i,a,s,u){return o===void 0&&(o=0),i===void 0&&(i=0),a===void 0&&(a=0),s===void 0&&(s=0),u===void 0&&(u=0),this.throwIfDisposed(),P.stridedSlice(this,t,e,n,o,i,a,s,u)},r.prototype.depthToSpace=function(t,e){return this.throwIfDisposed(),P.depthToSpace(this,t,e)},r.prototype.fft=function(){return this.throwIfDisposed(),P.spectral.fft(this)},r.prototype.ifft=function(){return this.throwIfDisposed(),P.spectral.ifft(this)},r.prototype.rfft=function(){return this.throwIfDisposed(),P.spectral.rfft(this)},r.prototype.irfft=function(){return this.throwIfDisposed(),P.spectral.irfft(this)},r}();Object.defineProperty(Ee,Symbol.hasInstance,{value:function(r){return!!r&&r.dataId!=null&&r.shape!=null&&r.dtype!=null}});var Ga,di,pi,vi,mi,qn=function(r){function t(e,n,o,i){var a=r.call(this,e.shape,e.dtype,e.dataId,i)||this;return a.trainable=n,a.name=o,a}return gt(t,r),t.prototype.assign=function(e){if(e.dtype!==this.dtype)throw new Error("dtype of the new value ("+e.dtype+") and previous value ("+this.dtype+") must match");if(!We(e.shape,this.shape))throw new Error("shape of the new value ("+e.shape+") and previous value ("+this.shape+") must match");It().disposeTensor(this),this.dataId=e.dataId,It().incRef(this,null)},t.prototype.dispose=function(){It().disposeVariable(this),this.isDisposedInternal=!0},t}(Ee);Object.defineProperty(qn,Symbol.hasInstance,{value:function(r){return r instanceof Ee&&r.assign!=null&&r.assign instanceof Function}}),function(r){r.R0="R0",r.R1="R1",r.R2="R2",r.R3="R3",r.R4="R4",r.R5="R5",r.R6="R6"}(Ga||(Ga={})),function(r){r.float32="float32",r.int32="int32",r.bool="int32",r.complex64="complex64"}(di||(di={})),function(r){r.float32="float32",r.int32="int32",r.bool="bool",r.complex64="complex64"}(pi||(pi={})),function(r){r.float32="float32",r.int32="float32",r.bool="float32",r.complex64="complex64"}(vi||(vi={})),function(r){r.float32="complex64",r.int32="complex64",r.bool="complex64",r.complex64="complex64"}(mi||(mi={}));var Dl={float32:vi,int32:di,bool:pi,complex64:mi};function Ue(r,t){if(r==="string"||t==="string"){if(r==="string"&&t==="string")return"string";throw new Error("Can not upcast "+r+" with "+t)}return Dl[r][t]}function No(r){return Ue(r,"int32")}function Ae(r,t){if(r.dtype===t.dtype)return[r,t];var e=Ue(r.dtype,t.dtype);return[r.cast(e),t.cast(e)]}function Tl(r,t){E(r.dtype===t.dtype,function(){return"The dtypes of the first("+r.dtype+") and second("+t.dtype+") input must match"})}function Qs(r){var t=[];return function e(n,o,i){if(n!=null){if(n instanceof Ee)return void o.push(n);if(a=n,!(!Array.isArray(a)&&typeof a!="object")){var a,s=n;for(var u in s){var c=s[u];i.has(c)||(i.add(c),e(c,o,i))}}}}(r,t,new Set),t}var Po,Ha=function(){function r(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null}}return r.prototype.dispose=function(){for(var t in this.registeredVariables)this.registeredVariables[t].dispose()},r}(),Fl=function(){function r(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Ha}return r.prototype.ready=function(){return K(this,void 0,void 0,function(){var t,e,n;return X(this,function(o){switch(o.label){case 0:if(this.pendingBackendInit!=null)return[2,this.pendingBackendInit.then(function(){})];if(this.backendInstance!=null)return[2];t=this.getSortedBackends(),e=0,o.label=1;case 1:return e<t.length?(n=t[e],[4,this.initializeBackend(n).success]):[3,5];case 2:return o.sent()?[4,this.setBackend(n)]:[3,4];case 3:return o.sent(),[2];case 4:return e++,[3,1];case 5:throw new Error("Could not initialize any backends, all backend initializations failed.")}})})},Object.defineProperty(r.prototype,"backend",{get:function(){if(this.pendingBackendInit!=null)throw new Error("Backend '"+this.backendName+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");if(this.backendInstance==null){var t=this.initializeBackendsAndReturnBest(),e=t.name;if(t.asyncInit)throw new Error("The highest priority backend '"+e+"' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods");this.setBackend(e)}return this.backendInstance},enumerable:!0,configurable:!0}),r.prototype.backendNames=function(){return Object.keys(this.registryFactory)},r.prototype.findBackend=function(t){return!(t in this.registry)&&(!(t in this.registryFactory)||this.initializeBackend(t).asyncInit)?null:this.registry[t]},r.prototype.findBackendFactory=function(t){return t in this.registryFactory?this.registryFactory[t].factory:null},r.prototype.registerBackend=function(t,e,n){return n===void 0&&(n=1),t in this.registryFactory?(console.warn(t+" backend was already registered. Reusing existing backend factory."),!1):(this.registryFactory[t]={factory:e,priority:n},!0)},r.prototype.setBackend=function(t){return K(this,void 0,void 0,function(){var e,n,o;return X(this,function(i){switch(i.label){case 0:if(this.registryFactory[t]==null)throw new Error("Backend name '"+t+"' not found in registry");return this.backendName=t,this.registry[t]!=null?[3,4]:(this.backendInstance=null,e=this.initializeBackend(t),n=e.success,e.asyncInit?[4,n]:[3,2]);case 1:return o=i.sent(),[3,3];case 2:o=n,i.label=3;case 3:if(!o)return[2,!1];i.label=4;case 4:return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new kl(this.backendInstance),[2,!0]}})})},r.prototype.setupRegisteredKernels=function(){var t=this;La(this.backendName).forEach(function(e){e.setupFunc!=null&&e.setupFunc(t.backendInstance)})},r.prototype.disposeRegisteredKernels=function(t){var e=this;La(t).forEach(function(n){n.disposeFunc!=null&&n.disposeFunc(e.registry[t])})},r.prototype.initializeBackend=function(t){var e=this,n=this.registryFactory[t];if(n==null)throw new Error("Cannot initialize backend "+t+", no registration found.");try{var o=n.factory();if(Promise.resolve(o)===o){var i=++this.pendingBackendInitId,a=o.then(function(s){return!(i<e.pendingBackendInitId)&&(e.registry[t]=s,e.pendingBackendInit=null,!0)}).catch(function(s){return!(i<e.pendingBackendInitId)&&(e.pendingBackendInit=null,console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),!1)});return this.pendingBackendInit=a,{success:a,asyncInit:!0}}return this.registry[t]=o,{success:!0,asyncInit:!1}}catch(s){return console.warn("Initialization of backend "+t+" failed"),console.warn(s.stack||s.message),{success:!1,asyncInit:!1}}},r.prototype.removeBackend=function(t){if(!(t in this.registryFactory))throw new Error(t+" backend not found in registry");this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)},r.prototype.getSortedBackends=function(){var t=this;if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort(function(e,n){return t.registryFactory[n].priority-t.registryFactory[e].priority})},r.prototype.initializeBackendsAndReturnBest=function(){for(var t=this.getSortedBackends(),e=0;e<t.length;e++){var n=t[e],o=this.initializeBackend(n),i=o.success,a=o.asyncInit;if(a||i)return{name:n,asyncInit:a}}throw new Error("Could not initialize any backends, all backend initializations failed.")},r.prototype.moveData=function(t,e){var n=this.state.tensorInfo.get(e),o=n.backend,i=this.readSync(e);o.disposeData(e),n.backend=t,t.move(e,i,n.shape,n.dtype),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++},r.prototype.tidy=function(t,e){var n,o=this,i=null;if(e==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");e=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof e!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");i=t}return this.scopedRun(function(){return o.startScope(i)},function(){return o.endScope(n)},function(){return(n=e())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n})},r.prototype.scopedRun=function(t,e,n){t();try{var o=n();return e(),o}catch(i){throw e(),i}},r.prototype.nextTensorId=function(){return r.nextTensorId++},r.prototype.nextVariableId=function(){return r.nextVariableId++},r.prototype.clone=function(t){var e=this.makeTensorFromDataId(t.dataId,t.shape,t.dtype),n={x:t};return this.addTapeNode(this.state.activeScope.name,n,[e],function(o){return{x:function(){return o.toFloat()}}},[]),e},r.prototype.runKernel=function(t,e,n,o,i){return this.runKernelFunc(null,e,null,t,n,o,i)},r.prototype.shouldCheckForMemLeaks=function(){return this.ENV.getBool("IS_TEST")},r.prototype.checkKernelForMemLeak=function(t,e,n){var o=this.backend.numDataIds(),i=0;n.forEach(function(u){i+=u.dtype==="complex64"?3:1});var a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],s=o-e-i-a;if(s>0)throw new Error("Backend '"+this.backendName+"' has an internal memory leak ("+s+" data ids) after running '"+t+"'")},r.prototype.runKernelFunc=function(t,e,n,o,i,a,s){var u,c=this;a===void 0&&(a=[]),s===void 0&&(s=[]);var l=[],h=this.isTapeOn();o==null&&(o=this.state.activeScope!=null?this.state.activeScope.name:"");var f,d=function(y){h&&(l=y.map(function(b){return c.keep(c.clone(b))}))},p=this.state.numBytes,v=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);var m,g=Us(o,this.backendName);return f=g!=null?function(){var y=c.backend.numDataIds();m=g.kernelFunc({inputs:e,attrs:i,backend:c.backend});var b=Array.isArray(m)?m:[m];c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,y,b);var x=b.map(function(C){var R=C.dataId,k=C.shape,I=C.dtype;return c.makeTensorFromDataId(R,k,I)}),w=x.filter(function(C,R){return s[R]});return d((a||[]).slice().concat(w)),x}:function(){var y=c.backend.numDataIds();m=c.tidy(function(){return t(c.backend,d)});var b=Array.isArray(m)?m:[m];return c.shouldCheckForMemLeaks()&&c.checkKernelForMemLeak(o,y,b),b},this.scopedRun(function(){return c.state.kernelDepth++},function(){return c.state.kernelDepth--},function(){u=c.ENV.getBool("DEBUG")?c.profiler.profileKernel(o,e,function(){return f()}):f()}),h&&this.addTapeNode(o,e,u,n,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:o,bytesAdded:this.state.numBytes-p,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-v,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(e).map(function(y){return e[y].shape}),outputShapes:u.map(function(y){return y.shape})}),Array.isArray(m)?u:u[0]},r.prototype.makeTensor=function(t,e,n,o){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");n=n||"float32",o=o||this.backend;var i=t;n==="string"&&Fi(t[0])&&(i=t.map(function(l){return Il(l)}));var a=o.write(i,e,n),s=new Ee(e,n,a,this.nextTensorId());if(this.incRef(s,o),n==="string"){var u=this.state.tensorInfo.get(a),c=Cl(i);this.state.numBytes+=c-u.bytes,u.bytes=c}return s},r.prototype.makeTensorFromDataId=function(t,e,n,o){var i=new Ee(e,n=n||"float32",t,this.nextTensorId());return this.incRef(i,o),i},r.prototype.makeVariable=function(t,e,n,o){e===void 0&&(e=!0),n=n||this.nextVariableId().toString(),o!=null&&o!==t.dtype&&(t=t.asType(o));var i=new qn(t,e,n,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw new Error("Variable with name "+i.name+" was already registered");return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i},r.prototype.incRef=function(t,e){var n=this.state.tensorInfo.has(t.dataId)?this.state.tensorInfo.get(t.dataId).refCount:0;if(this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++,n===0){this.state.numDataBuffers++;var o=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(o=t.size*js(t.dtype)),this.state.tensorInfo.set(t.dataId,{backend:e||this.backend,dtype:t.dtype,shape:t.shape,bytes:o,refCount:0}),this.state.numBytes+=o}this.state.tensorInfo.get(t.dataId).refCount++,t instanceof qn||this.track(t)},r.prototype.disposeTensor=function(t){if(this.state.tensorInfo.has(t.dataId)){this.state.numTensors--,t.dtype==="string"&&this.state.numStringTensors--;var e=this.state.tensorInfo.get(t.dataId);e.refCount<=1?(t.dtype!=="complex64"&&(this.state.numBytes-=e.bytes),this.state.numDataBuffers--,e.backend.disposeData(t.dataId),this.state.tensorInfo.delete(t.dataId)):this.state.tensorInfo.get(t.dataId).refCount--}},r.prototype.disposeVariables=function(){for(var t in this.state.registeredVariables){var e=this.state.registeredVariables[t];this.disposeVariable(e)}},r.prototype.disposeVariable=function(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]},r.prototype.memory=function(){var t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t},r.prototype.profile=function(t){return K(this,void 0,void 0,function(){var e,n;return X(this,function(o){return this.state.profiling=!0,e=this.state.numBytes,n=this.state.numTensors,this.state.activeProfile.kernels=[],this.state.activeProfile.result=t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max.apply(Math,this.state.activeProfile.kernels.map(function(i){return i.totalBytesSnapshot})),this.state.activeProfile.newBytes=this.state.numBytes-e,this.state.activeProfile.newTensors=this.state.numTensors-n,[2,this.state.activeProfile]})})},r.prototype.isTapeOn=function(){return this.state.gradientDepth>0&&this.state.kernelDepth===0},r.prototype.addTapeNode=function(t,e,n,o,i){var a=this,s={id:this.state.nextTapeNodeId++,kernelName:t,inputs:e,outputs:n,saved:i},u=pl(t);u!=null&&(o=u.gradFunc),o!=null&&(s.gradient=function(c){return c=c.map(function(l,h){if(l==null){var f=n[h],d=mr(f.size,f.dtype);return a.makeTensor(d,f.shape,f.dtype)}return l}),o(c.length>1?c:c[0],i)}),this.state.activeTape.push(s)},r.prototype.keep=function(t){return t.kept=!0,t},r.prototype.startTape=function(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++},r.prototype.endTape=function(){this.state.gradientDepth--},r.prototype.startScope=function(t){var e={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(e.name=t),this.state.scopeStack.push(e),this.state.activeScope=e},r.prototype.endScope=function(t){for(var e=this,n=Qs(t),o=new Set(n.map(function(u){return u.id})),i=0;i<this.state.activeScope.track.length;i++){var a=this.state.activeScope.track[i];a.kept||o.has(a.id)||a.dispose()}var s=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(function(u){u.kept||u.scopeId!==s.id||e.track(u)})},r.prototype.gradients=function(t,e,n,o){var i=this;if(o===void 0&&(o=!1),E(e.length>0,function(){return"gradients() received an empty list of xs."}),n!=null&&n.dtype!=="float32")throw new Error("dy must have 'float32' dtype, but has '"+n.dtype+"'");var a=this.scopedRun(function(){return i.startTape()},function(){return i.endTape()},function(){return i.tidy("forward",t)});E(a instanceof Ee,function(){return"The result y returned by f() must be a tensor."});var s=function(u,c,l){for(var h={},f={},d=0;d<c.length;d++)h[c[d].id]=!0;for(d=0;d<u.length;d++){var p=(C=u[d]).inputs;for(var v in p){for(var m=p[v],g=!1,y=0;y<c.length;y++)if(h[m.id]){C.outputs.forEach(function(A){return h[A.id]=!0}),g=!0,f[C.id]=!0;break}if(g)break}}var b={};b[l.id]=!0;var x={};for(d=u.length-1;d>=0;d--)for(p=(C=u[d]).inputs,y=0;y<C.outputs.length;y++)if(b[C.outputs[y].id]){for(var v in p)b[p[v].id]=!0,x[C.id]=!0;break}var w=[];for(d=0;d<u.length;d++){var C;if(f[(C=u[d]).id]&&x[C.id]){var R={};for(var v in C.inputs){var k=C.inputs[v];h[k.id]&&(R[v]=k)}var I=Object.assign({},C);I.inputs=R,I.outputs=C.outputs,w.push(I)}}return w}(this.state.activeTape,e,a);if(!o&&s.length===0&&e.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",function(){var u,c,l={};l[a.id]=n??(u=a.shape,c=Ks(Y(u),"float32"),T.makeTensor(c,u,"float32")),function(f,d,p){for(var v=function(g){var y=d[g],b=[];if(y.outputs.forEach(function(R){var k=f[R.id];k!=null?b.push(k):b.push(null)}),y.gradient==null)throw new Error("Cannot compute gradient: gradient function not found for "+y.kernelName+".");var x=y.gradient(b),w=function(R){if(!(R in x))throw new Error("Cannot backprop through input "+R+". Available gradients found: "+Object.keys(x)+".");var k=p(function(){return x[R]()});if(k.dtype!=="float32")throw new Error("Error in gradient for op "+y.kernelName+". The gradient of input "+R+" must have 'float32' dtype, but has '"+k.dtype+"'");var I=y.inputs[R];if(!We(k.shape,I.shape))throw new Error("Error in gradient for op "+y.kernelName+". The gradient of input '"+R+"' has shape '"+k.shape+"', which does not match the shape of the input '"+I.shape+"'");if(f[I.id]==null)f[I.id]=k;else{var A=f[I.id];f[I.id]=A.add(k),A.dispose()}};for(var C in y.inputs)w(C)},m=d.length-1;m>=0;m--)v(m)}(l,s,function(f){return i.tidy(f)});var h=e.map(function(f){return l[f.id]});return i.state.gradientDepth===0&&(i.state.activeTape.forEach(function(f){for(var d=0,p=f.saved;d<p.length;d++)p[d].dispose()}),i.state.activeTape=null),{value:a,grads:h}})},r.prototype.customGrad=function(t){var e=this;return E(hi(t),function(){return"The f passed in customGrad(f) must be a function."}),function(){for(var n,o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];E(o.every(function(s){return s instanceof Ee}),function(){return"The args passed in customGrad(f)(x1, x2,...) must all be tensors"});var a={};return o.forEach(function(s,u){a[u]=s}),e.runKernelFunc(function(s,u){return E((n=t.apply(void 0,o.concat([u]))).value instanceof Ee,function(){return"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"}),E(hi(n.gradFunc),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."}),n.value},a,function(s,u){var c=n.gradFunc(s,u),l=Array.isArray(c)?c:[c];E(l.length===o.length,function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."}),E(l.every(function(f){return f instanceof Ee}),function(){return"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors."});var h={};return l.forEach(function(f,d){h[d]=function(){return f}}),h})}},r.prototype.readSync=function(t){return this.state.tensorInfo.get(t).backend.readSync(t)},r.prototype.read=function(t){return this.state.tensorInfo.get(t).backend.read(t)},r.prototype.time=function(t){return K(this,void 0,void 0,function(){var e,n;return X(this,function(o){switch(o.label){case 0:return e=Et(),[4,this.backend.time(t)];case 1:return(n=o.sent()).wallMs=Et()-e,[2,n]}})})},r.prototype.track=function(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t},Object.defineProperty(r.prototype,"registeredVariables",{get:function(){return this.state.registeredVariables},enumerable:!0,configurable:!0}),r.prototype.reset=function(){for(var t in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Ha,this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null},r.nextTensorId=0,r.nextVariableId=0,r}(),T=function(){var r=function(){if(Po==null){var e=void 0;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else{if(typeof self>"u")throw new Error("Could not find a global object");e=self}Po=e}return Po}();if(r._tfengine==null){var t=new fl(r);r._tfengine=new Fl(t)}return function(e){zs=e}(r._tfengine.ENV),It=function(){return r._tfengine},r._tfengine}();function Zs(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}var zt=M();zt.registerFlag("DEBUG",function(){return!1},function(r){r&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),zt.registerFlag("IS_BROWSER",function(){return Zs()}),zt.registerFlag("IS_NODE",function(){return typeof process<"u"&&process.versions!==void 0&&process.versions.node!==void 0}),zt.registerFlag("IS_CHROME",function(){return typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)}),zt.registerFlag("PROD",function(){return!1}),zt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",function(){return zt.getBool("DEBUG")}),zt.registerFlag("DEPRECATION_WARNINGS_ENABLED",function(){return!0}),zt.registerFlag("IS_TEST",function(){return!1});var sr,it,ot,dn={},Mo={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0};function Nl(r,t){dn[r]=t}function Mt(r){r in dn||(dn[r]=function(e){if(e!==1&&e!==2)throw new Error("Cannot get WebGL rendering context, WebGL is disabled.");var n=function(o){if(typeof OffscreenCanvas<"u"&&o===2)return new OffscreenCanvas(300,150);if(typeof document<"u")return document.createElement("canvas");throw new Error("Cannot create a canvas in this context")}(e);return n.addEventListener("webglcontextlost",function(o){o.preventDefault(),delete dn[e]},!1),e===1?n.getContext("webgl",Mo)||n.getContext("experimental-webgl",Mo):n.getContext("webgl2",Mo)}(r));var t=dn[r];return t.isContextLost()?(delete dn[r],Mt(r)):(t.disable(t.DEPTH_TEST),t.disable(t.STENCIL_TEST),t.disable(t.BLEND),t.disable(t.DITHER),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SAMPLE_COVERAGE),t.enable(t.SCISSOR_TEST),t.enable(t.CULL_FACE),t.cullFace(t.BACK),dn[r])}function uo(r,t){return[t,r]}function nr(r){var t=Y(r);return li(Math.ceil(t/4))}function gr(r,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(r/2))]}function Ni(r,t){var e,n,o,i,a,s,u,c,l,h=r;return M().getNumber("WEBGL_VERSION")===2?(e=h.R32F,n=h.R16F,o=h.RGBA16F,i=h.RGBA32F,a=h.RED,s=4,u=1,c=h.HALF_FLOAT,l=h.FLOAT):(e=r.RGBA,n=r.RGBA,o=r.RGBA,i=h.RGBA,a=r.RGBA,s=4,u=4,c=t!=null?t.HALF_FLOAT_OES:null,l=r.FLOAT),{internalFormatFloat:e,internalFormatHalfFloat:n,internalFormatPackedHalfFloat:o,internalFormatPackedFloat:i,textureFormatFloat:a,downloadTextureFormat:r.RGBA,downloadUnpackNumChannels:s,defaultNumChannels:u,textureTypeHalfFloat:c,textureTypeFloat:l}}function J(r,t,e){var n=e();return t&&function(o){var i=o.getError();if(i!==o.NO_ERROR)throw new Error("WebGL Error: "+Bl(o,i))}(r),n}(function(r){r[r.DENSE=0]="DENSE",r[r.SHARED_BATCH=1]="SHARED_BATCH"})(sr||(sr={})),function(r){r[r.RENDER=0]="RENDER",r[r.UPLOAD=1]="UPLOAD",r[r.PIXELS=2]="PIXELS",r[r.DOWNLOAD=3]="DOWNLOAD"}(it||(it={})),function(r){r[r.UNPACKED_FLOAT16=0]="UNPACKED_FLOAT16",r[r.UNPACKED_FLOAT32=1]="UNPACKED_FLOAT32",r[r.PACKED_4X1_UNSIGNED_BYTE=2]="PACKED_4X1_UNSIGNED_BYTE",r[r.PACKED_2X2_FLOAT32=3]="PACKED_2X2_FLOAT32",r[r.PACKED_2X2_FLOAT16=4]="PACKED_2X2_FLOAT16"}(ot||(ot={}));var Pl=596e-10,Ml=65504;function Ol(r){return!!(M().getBool("WEBGL_RENDER_FLOAT32_ENABLED")||r===0||Pl<Math.abs(r)&&Math.abs(r)<Ml)}function Bl(r,t){switch(t){case r.NO_ERROR:return"NO_ERROR";case r.INVALID_ENUM:return"INVALID_ENUM";case r.INVALID_VALUE:return"INVALID_VALUE";case r.INVALID_OPERATION:return"INVALID_OPERATION";case r.INVALID_FRAMEBUFFER_OPERATION:return"INVALID_FRAMEBUFFER_OPERATION";case r.OUT_OF_MEMORY:return"OUT_OF_MEMORY";case r.CONTEXT_LOST_WEBGL:return"CONTEXT_LOST_WEBGL";default:return"Unknown error code "+t}}function Ir(r,t,e){return Ht(r,t,function(){return r.getExtension(e)},'Extension "'+e+'" not supported on this browser.')}function Ll(r,t,e){var n=Ht(r,t,function(){return r.createShader(r.VERTEX_SHADER)},"Unable to create vertex WebGLShader.");if(J(r,t,function(){return r.shaderSource(n,e)}),J(r,t,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw console.log(r.getShaderInfoLog(n)),new Error("Failed to compile vertex shader.");return n}function Wl(r,t,e){var n=Ht(r,t,function(){return r.createShader(r.FRAGMENT_SHADER)},"Unable to create fragment WebGLShader.");if(J(r,t,function(){return r.shaderSource(n,e)}),J(r,t,function(){return r.compileShader(n)}),r.getShaderParameter(n,r.COMPILE_STATUS)===!1)throw function(o,i){var a=Vl.exec(i);if(a==null)return console.log("Couldn't parse line number in error: "+i),void console.log(o);for(var s=+a[1],u=o.split(`
`),c=u.length.toString().length+2,l=u.map(function(m,g){return Bn((g+1).toString(),c)+m}),h=0,f=0;f<l.length;f++)h=Math.max(l[f].length,h);var d=l.slice(0,s-1),p=l.slice(s-1,s),v=l.slice(s);console.log(d.join(`
`)),console.log(i.split(`
`)[0]),console.log("%c "+Bn(p[0],h),"border:1px solid red; background-color:#e3d2d2; color:#a61717"),console.log(v.join(`
`))}(e,r.getShaderInfoLog(n)),new Error("Failed to compile fragment shader.");return n}var Oo,Bo,Vl=/ERROR: [0-9]+:([0-9]+):/g;function zl(r,t){return Ht(r,t,function(){return r.createProgram()},"Unable to create WebGLProgram.")}function Ul(r,t,e){if(J(r,t,function(){return r.linkProgram(e)}),r.getProgramParameter(e,r.LINK_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Failed to link vertex and fragment shaders.")}function Lo(r,t,e){if(J(r,t,function(){return r.validateProgram(e)}),r.getProgramParameter(e,r.VALIDATE_STATUS)===!1)throw console.log(r.getProgramInfoLog(e)),new Error("Shader program validation failed.")}function Gl(r,t,e){var n=Ht(r,t,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return J(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),J(r,t,function(){return r.bufferData(r.ARRAY_BUFFER,e,r.STATIC_DRAW)}),n}function Hl(r,t,e){var n=Ht(r,t,function(){return r.createBuffer()},"Unable to create WebGLBuffer");return J(r,t,function(){return r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,n)}),J(r,t,function(){return r.bufferData(r.ELEMENT_ARRAY_BUFFER,e,r.STATIC_DRAW)}),n}function ql(r,t){return Ht(r,t,function(){return r.createTexture()},"Unable to create WebGLTexture.")}function jl(r,t){var e=M().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(r<=0||t<=0){var n="["+r+"x"+t+"]";throw new Error("Requested texture size "+n+" is invalid.")}if(r>e||t>e)throw n="["+r+"x"+t+"]",new Error("Requested texture size "+n+" greater than WebGL maximum on this browser / GPU "+("["+e+"x"+e+"]")+".")}function $l(r,t){return Ht(r,t,function(){return r.createFramebuffer()},"Unable to create WebGLFramebuffer.")}function qa(r,t,e,n,o,i,a,s){var u=r.getAttribLocation(e,n);return u!==-1&&(J(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,o)}),J(r,t,function(){return r.vertexAttribPointer(u,i,r.FLOAT,!1,a,s)}),J(r,t,function(){return r.enableVertexAttribArray(u)}),!0)}function Kl(r,t,e,n){Zl(r,n),J(r,t,function(){return r.activeTexture(r.TEXTURE0+n)}),J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)})}function Xl(r,t,e,n){return Ht(r,t,function(){return r.getUniformLocation(e,n)},'uniform "'+n+'" not present in program.')}function Yl(r,t,e){return r.getUniformLocation(t,e)}function Jl(r,t,e,n,o,i){J(r,t,function(){return Kl(r,t,n,i)}),J(r,t,function(){return r.uniform1i(o,i)})}function Wo(r,t,e,n){J(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,n)}),J(r,t,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0)})}function ja(r,t,e){J(r,t,function(){return r.bindFramebuffer(r.FRAMEBUFFER,e)}),J(r,t,function(){return r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,null,0)})}function Ar(r){var t=r.checkFramebufferStatus(r.FRAMEBUFFER);if(t!==r.FRAMEBUFFER_COMPLETE)throw new Error("Error binding framebuffer: "+Ql(r,t))}function Ql(r,t){switch(t){case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";default:return"unknown error "+t}}function Ht(r,t,e,n){var o=J(r,t,function(){return e()});if(o==null)throw new Error(n);return o}function Zl(r,t){var e=r.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,n=t+r.TEXTURE0;if(n<r.TEXTURE0||n>e)throw new Error("textureUnit must be in "+("[gl.TEXTURE0, gl.TEXTURE"+e+"]")+".")}function Gr(r,t){return t===void 0&&(t=2),Y(r.slice(0,r.length-t))}function Hr(r){if(r.length===0)throw Error("Cannot get rows and columns of an empty shape array.");return[r.length>1?r[r.length-2]:1,r[r.length-1]]}function Vo(r){var t=[1,1,1];return r.length===0||r.length===1&&r[0]===1||(t=[Gr(r)].concat(Hr(r))),t}function eh(r,t){var e;t===void 0&&(t=!1);var n=M().getNumber("WEBGL_MAX_TEXTURE_SIZE");if(t&&(n*=2,(r=r.map(function(c,l){return l>=r.length-2?qs(r[l]):r[l]})).length===1&&(r=[2,r[0]])),r.length!==2){var o=vn(r);r=o.newShape}var i=Y(r);if(r.length<=1&&i<=n)return[1,i];if(r.length===2&&r[0]<=n&&r[1]<=n)return r;if(r.length===3&&r[0]*r[1]<=n&&r[2]<=n)return[r[0]*r[1],r[2]];if(r.length===3&&r[0]<=n&&r[1]*r[2]<=n)return[r[0],r[1]*r[2]];if(r.length===4&&r[0]*r[1]*r[2]<=n&&r[3]<=n)return[r[0]*r[1]*r[2],r[3]];if(r.length===4&&r[0]<=n&&r[1]*r[2]*r[3]<=n)return[r[0],r[1]*r[2]*r[3]];if(t){var a=Gr(r),s=2,u=2;return r.length&&(s=(e=Hr(r))[0],u=e[1]),li(i=a*(s/2)*(u/2)).map(function(c){return 2*c})}return li(i)}function kr(r){return r%2==0}function Rr(r,t){if(We(r=r.slice(-2),t=t.slice(-2))||!r.length||!t.length||r[0]===0||r[1]===0||t[0]===0||t[1]===0)return!0;if(r.length!==t.length){var e=r.slice(-1)[0],n=t.slice(-1)[0];if(e===n||kr(e)&&kr(n)&&(r[0]===1||t[0]===1))return!0}return r[1]===t[1]&&kr(r[0])&&kr(t[0])}function th(r){if(Oo==null){var t=Mt(r);Oo=t.getParameter(t.MAX_TEXTURE_SIZE)}return Oo}function nh(r){if(Bo==null){var t=Mt(r);Bo=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,Bo)}function rh(r){if(r===0)return 0;var t=Mt(r);return ft(t,"EXT_disjoint_timer_query_webgl2")&&r===2?2:ft(t,"EXT_disjoint_timer_query")?1:0}function ft(r,t){return r.getExtension(t)!=null}function $a(r){try{if(Mt(r)!=null)return!0}catch{return!1}return!1}function oh(r){if(r===0)return!1;var t=Mt(r);if(r===1){if(!ft(t,"OES_texture_float"))return!1}else if(!ft(t,"EXT_color_buffer_float"))return!1;return gi(t)}function ih(r){if(r===0)return!1;var t=Mt(r);if(r!==1){if(ft(t,"EXT_color_buffer_float"))return gi(t);if(ft(t,"EXT_color_buffer_half_float")){var e=t.getExtension("EXT_color_buffer_half_float");return function(n,o){var i=Ni(n,o),a=n.createTexture();n.bindTexture(n.TEXTURE_2D,a),n.texImage2D(n.TEXTURE_2D,0,i.internalFormatHalfFloat,1,1,0,i.textureFormatFloat,i.textureTypeHalfFloat,null);var s=n.createFramebuffer();n.bindFramebuffer(n.FRAMEBUFFER,s),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,a,0);var u=n.checkFramebufferStatus(n.FRAMEBUFFER)===n.FRAMEBUFFER_COMPLETE;return n.bindTexture(n.TEXTURE_2D,null),n.bindFramebuffer(n.FRAMEBUFFER,null),n.deleteTexture(a),n.deleteFramebuffer(s),u}(t,e)}return!1}return!!ft(t,"OES_texture_float")&&!!ft(t,"WEBGL_color_buffer_float")&&gi(t)}function gi(r){var t=Ni(r),e=r.createTexture();r.bindTexture(r.TEXTURE_2D,e),r.texImage2D(r.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);var n=r.createFramebuffer();r.bindFramebuffer(r.FRAMEBUFFER,n),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e,0);var o=r.checkFramebufferStatus(r.FRAMEBUFFER)===r.FRAMEBUFFER_COMPLETE;return r.bindTexture(r.TEXTURE_2D,null),r.bindFramebuffer(r.FRAMEBUFFER,null),r.deleteTexture(e),r.deleteFramebuffer(n),o}function ah(r){return r===2&&Mt(r).fenceSync!=null}var ne=M();function eu(r){M().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(r+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function $(r,t){return T.tidy(r,t)}function Ze(r){Qs(r).forEach(function(t){return t.dispose()})}function sh(r){return T.keep(r)}function qr(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];M().getBool("IS_TEST")||console.warn.apply(console,r)}function un(r,t){var e=r;if(Rt(r))return t==="string"?[]:[r.length];if(!Array.isArray(r))return[];for(var n=[];Array.isArray(e)||Rt(e)&&t!=="string";)n.push(e.length),e=e[0];return Array.isArray(r)&&M().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function o(i,a,s){if(s=s||[],!Array.isArray(i)&&!Rt(i))return void E(a.length===0,function(){return"Element arr["+s.join("][")+"] is a primitive, but should be an array/TypedArray of "+a[0]+" elements"});E(a.length>0,function(){return"Element arr["+s.join("][")+"] should be a primitive, but is an array of "+i.length+" elements"}),E(i.length===a[0],function(){return"Element arr["+s.join("][")+"] should have "+a[0]+" elements, but has "+i.length+" elements"});for(var u=a.slice(1),c=0;c<i.length;++c)o(i[c],u,s.concat(c))}(r,n,[]),n}function Ka(r,t,e,n){if(r!=null&&(r!=="numeric"&&r!==t||r==="numeric"&&t==="string"))throw new Error("Argument '"+e+"' passed to '"+n+"' must be "+r+" tensor, but got "+t+" tensor")}function _(r,t,e,n){if(n===void 0&&(n="numeric"),r instanceof Ee)return Ka(n,r.dtype,t,e),r;var o=vr(r);if(o!=="string"&&["bool","int32","float32"].indexOf(n)>=0&&(o=n),Ka(n,o,t,e),r==null||!Rt(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string"){var i=r==null?"null":r.constructor.name;throw new Error("Argument '"+t+"' passed to '"+e+"' must be a Tensor or TensorLike, but got '"+i+"'")}var a=un(r,o);Rt(r)||Array.isArray(r)||(r=[r]);var s=o!=="string"?$s(r,o,M().getBool("DEBUG")):Hn(r,[],!0);return T.makeTensor(s,a,o)}function jr(r,t,e,n){if(n===void 0&&(n="numeric"),!Array.isArray(r))throw new Error("Argument "+t+" passed to "+e+" must be a `Tensor[]` or `TensorLike[]`");return r.map(function(o,i){return _(o,t+"["+i+"]",e)},n)}function tu(r,t){for(var e=0;e<r.length;++e)if(r[r.length-e-1]!==t-1-e)return!1;return!0}function uh(r,t,e){for(var n=r.length+t.length,o=[],i=0,a=0,s=0;s<n;s++)e.indexOf(s)===-1?o.push(r[i++]):o.push(t[a++]);return o}function qe(r,t){for(var e=[],n=r.length,o=0;o<n;o++)t.indexOf(o)===-1&&e.push(r[o]);return[e,t.map(function(i){return r[i]})]}function et(r,t){return uh(r,t.map(function(e){return 1}),t)}function rt(r,t,e){E(tu(t,e),function(){return r+" supports only inner-most axes for now. Got axes "+t+" and rank-"+e+" input."})}function Ot(r,t){if(tu(r,t))return null;for(var e=[],n=0;n<t;++n)r.indexOf(n)===-1&&e.push(n);return r.forEach(function(o){return e.push(o)}),e}function Pi(r){return r.map(function(t,e){return[e,t]}).sort(function(t,e){return t[1]-e[1]}).map(function(t){return t[0]})}function Bt(r,t){for(var e=[],n=t-r;n<t;++n)e.push(n);return e}function ch(r,t){var e=r[0].length;r.forEach(function(o,i){E(o.length===e,function(){return"Error in concat"+e+"D: rank of tensors["+i+"] must be the same as the rank of the rest ("+e+")"})}),E(t>=0&&t<e,function(){return"Error in concat"+e+"D: axis must be between 0 and "+(e-1)+"."});var n=r[0];r.forEach(function(o,i){for(var a=0;a<e;a++)E(a===t||o[a]===n[a],function(){return"Error in concat"+e+"D: Shape of tensors["+i+"] ("+o+") does not match the shape of the rest ("+n+") along the non-concatenated axis "+i+"."})})}function jn(r,t){for(var e=r[0].slice(),n=1;n<r.length;n++)e[t]+=r[n][t];return e}function S(r){var t=Object.keys(r);if(t.length!==1)throw new Error("Please provide an object with a single key (operation name) mapping to a function. Got an object with "+t.length+" keys.");var e=t[0],n=r[e];e.endsWith("_")&&(e=e.substring(0,e.length-1));var o=function(){for(var i=[],a=0;a<arguments.length;a++)i[a]=arguments[a];T.startScope(e);try{var s=n.apply(void 0,i);return s instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),T.endScope(s),s}catch(u){throw T.endScope(null),u}};return Object.defineProperty(o,"name",{value:e,configurable:!0}),o}ne.registerFlag("HAS_WEBGL",function(){return ne.getNumber("WEBGL_VERSION")>0}),ne.registerFlag("WEBGL_VERSION",function(){return $a(2)?2:$a(1)?1:0}),ne.registerFlag("WEBGL_BUFFER_SUPPORTED",function(){return ne.get("WEBGL_VERSION")===2}),ne.registerFlag("WEBGL_CPU_FORWARD",function(){return!0}),ne.registerFlag("WEBGL_FORCE_F16_TEXTURES",function(){return!1}),ne.registerFlag("WEBGL_PACK",function(){return ne.getBool("HAS_WEBGL")}),ne.registerFlag("WEBGL_PACK_NORMALIZATION",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_CLIP",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_DEPTHWISECONV",function(){return!1}),ne.registerFlag("WEBGL_PACK_BINARY_OPERATIONS",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_UNARY_OPERATIONS",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_ARRAY_OPERATIONS",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_IMAGE_OPERATIONS",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_PACK_REDUCE",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_LAZILY_UNPACK",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_CONV_IM2COL",function(){return ne.getBool("WEBGL_PACK")}),ne.registerFlag("WEBGL_MAX_TEXTURE_SIZE",function(){return th(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_MAX_TEXTURES_IN_SHADER",function(){return nh(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION",function(){var r=ne.getNumber("WEBGL_VERSION");return r===0?0:rh(r)}),ne.registerFlag("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE",function(){return ne.getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0&&(r=navigator.userAgent||navigator.vendor||window.opera,!(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(r)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(r.substr(0,4))));var r}),ne.registerFlag("WEBGL_RENDER_FLOAT32_CAPABLE",function(){return oh(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_RENDER_FLOAT32_ENABLED",function(){return!ne.getBool("WEBGL_FORCE_F16_TEXTURES")&&ne.getBool("WEBGL_RENDER_FLOAT32_CAPABLE")}),ne.registerFlag("WEBGL_DOWNLOAD_FLOAT_ENABLED",function(){return ih(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_FENCE_API_ENABLED",function(){return ah(ne.getNumber("WEBGL_VERSION"))}),ne.registerFlag("WEBGL_SIZE_UPLOAD_UNIFORM",function(){return ne.getBool("WEBGL_RENDER_FLOAT32_ENABLED")?4:0}),Js=eu;var ze=S({complex_:function(r,t){var e=_(r,"real","complex"),n=_(t,"imag","complex");return ye(e.shape,n.shape,"real and imag shapes, "+e.shape+" and "+n.shape+", must match in call to tf.complex()."),T.runKernelFunc(function(o){return o.complex(e,n)},{$real:e,$imag:n})}}),ht=S({real_:function(r){var t=_(r,"input","real");return T.runKernelFunc(function(e){return e.real(t)},{$input:t})}}),At=S({imag_:function(r){var t=_(r,"input","imag");return T.runKernelFunc(function(e){return e.imag(t)},{$input:t})}});function Ge(r,t,e){return cn(r,t,un(r,e),e)}function cn(r,t,e,n){if(n==null&&(n=vr(r)),n==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(!Rt(r)&&!Array.isArray(r)&&typeof r!="number"&&typeof r!="boolean"&&typeof r!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){Xs(t);var o=Y(t),i=Y(e);E(o===i,function(){return"Based on the provided shape, ["+t+"], the tensor should have "+o+" values but has "+i});for(var a=0;a<e.length;++a){var s=e[a],u=a!==e.length-1||s!==Y(t.slice(a));E(e[a]===t[a]||!u,function(){return"Error creating a new Tensor. Inferred shape ("+e+") does not match the provided shape ("+t+"). "})}}return Rt(r)||Array.isArray(r)||(r=[r]),t=t||e,r=n!=="string"?$s(r,n,M().getBool("DEBUG")):Hn(r,[],!0),T.makeTensor(r,t,n)}function q(r,t){if((Rt(r)&&t!=="string"||Array.isArray(r))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&Rt(r)&&!(r instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return cn(r,[],[],t)}function Te(r,t){Xn(r);var e=un(r,t);if(e.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return cn(r,null,e,t)}function rn(r,t,e){if(Xn(r),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");var n=un(r,e);if(n.length!==2&&n.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return cn(r,t,n,e)}function Mi(r,t,e){if(Xn(r),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");var n=un(r,e);if(n.length!==3&&n.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return cn(r,t,n,e)}function Je(r,t,e){if(Xn(r),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");var n=un(r,e);if(n.length!==4&&n.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return cn(r,t,n,e)}function lh(r,t,e){if(Xn(r),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");var n=un(r,e);if(n.length!==5&&n.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return cn(r,t,n,e)}function hh(r,t,e){if(Xn(r),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");var n=un(r,e);if(n.length!==6&&n.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(n.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return cn(r,t=t||n,n,e)}function fh(r,t,e,n){return t===void 0&&(t=!0),T.makeVariable(r,t,e,n)}function Yn(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=Yn(r,"float32"),n=we(r,"float32");return ze(e,n)}var o=Ks(Y(r),t);return T.makeTensor(o,r,t)}function we(r,t){if(t===void 0&&(t="float32"),t==="complex64"){var e=we(r,"float32"),n=we(r,"float32");return ze(e,n)}var o=mr(Y(r),t);return T.makeTensor(o,r,t)}function Dt(r,t,e){return T.runKernelFunc(function(n){return n.fill(r,t,e)},{})}function dh(r,t,e){if(e<=0)throw new Error("The number of values should be positive.");return T.runKernelFunc(function(n){return n.linspace(r,t,e)},{})}function $r(r,t,e,n){if(e===void 0&&(e=1),n===void 0&&(n="float32"),e===0)throw new Error("Cannot have a step of zero");if(r===t||r<t&&e<0||t<r&&e>1)return we([0],n);var o=mr(Math.abs(Math.ceil((t-r)/e)),n);t<r&&e===1&&(e=-1),o[0]=r;for(var i=1;i<o.length;i++)o[i]=o[i-1]+e;return Te(o,n)}var nu=S({onesLike_:function(r){var t=_(r,"x","onesLike");if(t.dtype==="complex64"){var e=nu(ht(t)),n=ve(At(t));return ze(e,n)}return T.runKernelFunc(function(o){return o.onesLike(t)},{$x:t},function(o,i){return{$x:function(){return ve(o)}}})}}),ve=S({zerosLike_:function(r){var t=_(r,"x","zerosLike");return T.runKernelFunc(function(e){return e.zerosLike(t)},{$x:t},function(e,n){return{$x:function(){return ve(e)}}})}}),Ne=S({concat_:function(r,t){t===void 0&&(t=0),E(r.length>=1,function(){return"Pass at least one tensor to concat"});var e=jr(r,"tensors","concat");e[0].dtype==="complex64"&&e.forEach(function(s){if(s.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype `+s.dtype+". ")}),t=Be(t,e[0].shape)[0];var n=jn(e.map(function(s){return s.shape}),t);if(Y(n)===0)return Ge([],n);if((e=e.filter(function(s){return s.size>0})).length===1)return e[0];var o=e.map(function(s){return s.shape});ch(o,t);var i=e,a={axis:t};return T.runKernelFunc(function(s){return s.concat(e,t)},i,function(s){var u=o.map(function(c){return c[t]});return Oi(s,u,t).map(function(c){return function(){return c}})},"Concat",a)}}),ph=S({concat1d_:function(r){return Ne(r,0)}}),vh=S({concat2d_:function(r,t){return Ne(r,t)}}),mh=S({concat3d_:function(r,t){return Ne(r,t)}}),gh=S({concat4d_:function(r,t){return Ne(r,t)}}),Oi=S({split_:function(r,t,e){e===void 0&&(e=0);var n,o=_(r,"x","split");return e=Be(e,o.shape)[0],typeof t=="number"?(E(o.shape[e]%t==0,function(){return"Number of splits must evenly divide the axis."}),n=new Array(t).fill(o.shape[e]/t)):(E(o.shape[e]===t.reduce(function(i,a){return i+a}),function(){return"The sum of sizes must match the size of the axis dimension."}),n=t),T.runKernelFunc(function(i){return i.split(o,n,e)},{$x:o},function(i){return{$x:function(){return Ne(i,e)}}})}});function wn(r,t){return r(t={exports:{}},t.exports),t.exports}var yh=wn(function(r){(function(t,e,n){function o(s){var u,c=this,l=(u=4022871197,function(h){h=h.toString();for(var f=0;f<h.length;f++){var d=.02519603282416938*(u+=h.charCodeAt(f));d-=u=d>>>0,u=(d*=u)>>>0,u+=4294967296*(d-=u)}return 23283064365386963e-26*(u>>>0)});c.next=function(){var h=2091639*c.s0+23283064365386963e-26*c.c;return c.s0=c.s1,c.s1=c.s2,c.s2=h-(c.c=0|h)},c.c=1,c.s0=l(" "),c.s1=l(" "),c.s2=l(" "),c.s0-=l(s),c.s0<0&&(c.s0+=1),c.s1-=l(s),c.s1<0&&(c.s1+=1),c.s2-=l(s),c.s2<0&&(c.s2+=1),l=null}function i(s,u){return u.c=s.c,u.s0=s.s0,u.s1=s.s1,u.s2=s.s2,u}function a(s,u){var c=new o(s),l=u&&u.state,h=c.next;return h.int32=function(){return 4294967296*c.next()|0},h.double=function(){return h()+11102230246251565e-32*(2097152*h()|0)},h.quick=h,l&&(typeof l=="object"&&i(l,c),h.state=function(){return i(c,{})}),h}e&&e.exports?e.exports=a:this.alea=a})(0,r)}),xh=wn(function(r){(function(t,e,n){function o(s){var u=this,c="";u.x=0,u.y=0,u.z=0,u.w=0,u.next=function(){var h=u.x^u.x<<11;return u.x=u.y,u.y=u.z,u.z=u.w,u.w^=u.w>>>19^h^h>>>8},s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),u.next()}function i(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u}function a(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&i(l,c),h.state=function(){return i(c,{})}),h}e&&e.exports?e.exports=a:this.xor128=a})(0,r)}),bh=wn(function(r){(function(t,e,n){function o(s){var u=this,c="";u.next=function(){var h=u.x^u.x>>>2;return u.x=u.y,u.y=u.z,u.z=u.w,u.w=u.v,(u.d=u.d+362437|0)+(u.v=u.v^u.v<<4^h^h<<1)|0},u.x=0,u.y=0,u.z=0,u.w=0,u.v=0,s===(0|s)?u.x=s:c+=s;for(var l=0;l<c.length+64;l++)u.x^=0|c.charCodeAt(l),l==c.length&&(u.d=u.x<<10^u.x>>>4),u.next()}function i(s,u){return u.x=s.x,u.y=s.y,u.z=s.z,u.w=s.w,u.v=s.v,u.d=s.d,u}function a(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&i(l,c),h.state=function(){return i(c,{})}),h}e&&e.exports?e.exports=a:this.xorwow=a})(0,r)}),wh=wn(function(r){(function(t,e,n){function o(s){var u=this;u.next=function(){var c,l,h=u.x,f=u.i;return c=h[f],l=(c^=c>>>7)^c<<24,l^=(c=h[f+1&7])^c>>>10,l^=(c=h[f+3&7])^c>>>3,l^=(c=h[f+4&7])^c<<7,c=h[f+7&7],l^=(c^=c<<13)^c<<9,h[f]=l,u.i=f+1&7,l},function(c,l){var h,f=[];if(l===(0|l))f[0]=l;else for(l=""+l,h=0;h<l.length;++h)f[7&h]=f[7&h]<<15^l.charCodeAt(h)+f[h+1&7]<<13;for(;f.length<8;)f.push(0);for(h=0;h<8&&f[h]===0;++h);for(h==8?f[7]=-1:f[h],c.x=f,c.i=0,h=256;h>0;--h)c.next()}(u,s)}function i(s,u){return u.x=s.x.slice(),u.i=s.i,u}function a(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(l.x&&i(l,c),h.state=function(){return i(c,{})}),h}e&&e.exports?e.exports=a:this.xorshift7=a})(0,r)}),Ch=wn(function(r){(function(t,e,n){function o(s){var u=this;u.next=function(){var c,l,h=u.w,f=u.X,d=u.i;return u.w=h=h+1640531527|0,l=f[d+34&127],c=f[d=d+1&127],l^=l<<13,c^=c<<17,l^=l>>>15,c^=c>>>12,l=f[d]=l^c,u.i=d,l+(h^h>>>16)|0},function(c,l){var h,f,d,p,v,m=[],g=128;for(l===(0|l)?(f=l,l=null):(l+="\0",f=0,g=Math.max(g,l.length)),d=0,p=-32;p<g;++p)l&&(f^=l.charCodeAt((p+32)%l.length)),p===0&&(v=f),f^=f<<10,f^=f>>>15,f^=f<<4,f^=f>>>13,p>=0&&(v=v+1640531527|0,d=(h=m[127&p]^=f+v)==0?d+1:0);for(d>=128&&(m[127&(l&&l.length||0)]=-1),d=127,p=512;p>0;--p)f=m[d+34&127],h=m[d=d+1&127],f^=f<<13,h^=h<<17,f^=f>>>15,h^=h>>>12,m[d]=f^h;c.w=v,c.X=m,c.i=d}(u,s)}function i(s,u){return u.i=s.i,u.w=s.w,u.X=s.X.slice(),u}function a(s,u){s==null&&(s=+new Date);var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(l.X&&i(l,c),h.state=function(){return i(c,{})}),h}e&&e.exports?e.exports=a:this.xor4096=a})(0,r)}),_h=wn(function(r){(function(t,e,n){function o(s){var u=this,c="";u.next=function(){var h=u.b,f=u.c,d=u.d,p=u.a;return h=h<<25^h>>>7^f,f=f-d|0,d=d<<24^d>>>8^p,p=p-h|0,u.b=h=h<<20^h>>>12^f,u.c=f=f-d|0,u.d=d<<16^f>>>16^p,u.a=p-h|0},u.a=0,u.b=0,u.c=-1640531527,u.d=1367130551,s===Math.floor(s)?(u.a=s/4294967296|0,u.b=0|s):c+=s;for(var l=0;l<c.length+20;l++)u.b^=0|c.charCodeAt(l),u.next()}function i(s,u){return u.a=s.a,u.b=s.b,u.c=s.c,u.d=s.d,u}function a(s,u){var c=new o(s),l=u&&u.state,h=function(){return(c.next()>>>0)/4294967296};return h.double=function(){do var f=((c.next()>>>11)+(c.next()>>>0)/4294967296)/2097152;while(f===0);return f},h.int32=c.next,h.quick=h,l&&(typeof l=="object"&&i(l,c),h.state=function(){return i(c,{})}),h}e&&e.exports?e.exports=a:this.tychei=a})(0,r)}),pn=wn(function(r){(function(t,e){var n,o=this,i=256,a=6,s="random",u=e.pow(i,a),c=e.pow(2,52),l=2*c,h=i-1;function f(g,y,b){var x=[],w=v(function k(I,A){var F,D=[],L=typeof I;if(A&&L=="object")for(F in I)try{D.push(k(I[F],A-1))}catch{}return D.length?D:L=="string"?I:I+"\0"}((y=y==1?{entropy:!0}:y||{}).entropy?[g,m(t)]:g??function(){try{var k;return n&&(k=n.randomBytes)?k=k(i):(k=new Uint8Array(i),(o.crypto||o.msCrypto).getRandomValues(k)),m(k)}catch{var I=o.navigator,A=I&&I.plugins;return[+new Date,o,A,o.screen,m(t)]}}(),3),x),C=new d(x),R=function(){for(var k=C.g(a),I=u,A=0;k<c;)k=(k+A)*i,I*=i,A=C.g(1);for(;k>=l;)k/=2,I/=2,A>>>=1;return(k+A)/I};return R.int32=function(){return 0|C.g(4)},R.quick=function(){return C.g(4)/4294967296},R.double=R,v(m(C.S),t),(y.pass||b||function(k,I,A,F){return F&&(F.S&&p(F,C),k.state=function(){return p(C,{})}),A?(e[s]=k,I):k})(R,w,"global"in y?y.global:this==e,y.state)}function d(g){var y,b=g.length,x=this,w=0,C=x.i=x.j=0,R=x.S=[];for(b||(g=[b++]);w<i;)R[w]=w++;for(w=0;w<i;w++)R[w]=R[C=h&C+g[w%b]+(y=R[w])],R[C]=y;(x.g=function(k){for(var I,A=0,F=x.i,D=x.j,L=x.S;k--;)I=L[F=h&F+1],A=A*i+L[h&(L[F]=L[D=h&D+I])+(L[D]=I)];return x.i=F,x.j=D,A})(i)}function p(g,y){return y.i=g.i,y.j=g.j,y.S=g.S.slice(),y}function v(g,y){for(var b,x=g+"",w=0;w<x.length;)y[h&w]=h&(b^=19*y[h&w])+x.charCodeAt(w++);return m(y)}function m(g){return String.fromCharCode.apply(0,g)}if(e["seed"+s]=f,v(e.random(),t),r.exports){r.exports=f;try{n=require("crypto")}catch{}}})([],Math)});pn.alea=yh,pn.xor128=xh,pn.xorwow=bh,pn.xorshift7=wh,pn.xor4096=Ch,pn.tychei=_h;var co=pn.alea,Bi=function(){function r(t,e,n,o,i){this.mean=t,this.stdDev=e,this.dtype=n,this.nextVal=NaN,this.truncated=o,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);var a=i||Math.random();this.random=co(a.toString())}return r.prototype.nextValue=function(){if(!isNaN(this.nextVal)){var t=this.nextVal;return this.nextVal=NaN,t}for(var e,n,o=!1;!o;){var i=void 0,a=void 0,s=void 0;do s=(i=2*this.random()-1)*i+(a=2*this.random()-1)*a;while(s>=1||s===0);var u=Math.sqrt(-2*Math.log(s)/s);e=this.mean+this.stdDev*i*u,n=this.mean+this.stdDev*a*u,this.truncated&&!this.isValidTruncated(e)||(o=!0)}return this.truncated&&!this.isValidTruncated(n)||(this.nextVal=this.convertValue(n)),this.convertValue(e)},r.prototype.convertValue=function(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)},r.prototype.isValidTruncated=function(t){return t<=this.upper&&t>=this.lower},r}(),Eh=function(){function r(t,e,n,o){this.alpha=t,this.beta=1/e,this.dtype=n;var i=o||Math.random();this.randu=co(i.toString()),this.randn=new Bi(0,1,n,!1,this.randu()),this.d=t<1?t+2/3:t-1/3,this.c=1/Math.sqrt(9*this.d)}return r.prototype.nextValue=function(){for(var t,e,n,o,i,a;;){do o=this.randn.nextValue(),a=1+this.c*o;while(a<=0);if(a*=a*a,e=1-.331*(t=o*o)*t,n=.5*t+this.d*(1-a+Math.log(a)),(i=this.randu())<e||Math.log(i)<n)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)},r.prototype.convertValue=function(t){return this.dtype==="float32"?t:Math.round(t)},r}(),Ih=function(){function r(t,e,n,o){var i=this;if(t===void 0&&(t=0),e===void 0&&(e=1),this.canReturnFloat=function(){return i.dtype==null||i.dtype==="float32"},this.min=t,this.range=e-t,this.dtype=n,o==null&&(o=Math.random()),typeof o=="number"&&(o=o.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error("The difference between "+t+" - "+e+" <= 1 and dtype is not float");this.random=co(o)}return r.prototype.convertValue=function(t){return this.canReturnFloat()?t:Math.round(t)},r.prototype.nextValue=function(){return this.convertValue(this.min+this.range*this.random())},r}();function oe(r,t,e){return t===void 0&&(t="float32"),t=t||"float32",Xs(r),new ar(r,t,e)}function Ah(r,t){t===void 0&&(t=!1),console.log(r.toString(t))}var ru=S({batchToSpaceND_:function(r,t,e){var n=_(r,"x","batchToSpaceND"),o=t.reduce(function(i,a){return i*a});return E(n.rank>=1+t.length,function(){return"input rank is "+n.rank+" but should be > than blockShape.length "+t.length}),E(e.length===t.length,function(){return"crops.length is "+e.length+" but should be equal to blockShape.length  "+t.length}),E(n.shape[0]%o==0,function(){return"input tensor batch is "+n.shape[0]+" but is not divisible by the product of the elements of blockShape "+t.join(" * ")+" === "+o}),T.runKernelFunc(function(i){return i.batchToSpaceND(n,t,e)},{$x:n},function(i){return{$x:function(){return i.spaceToBatchND(t,e)}}})}}),kh=S({broadcastTo_:function(r,t){var e=_(r,"broadcastTo","x"),n=e.shape;if(t.some(function(u){return!(u>0)||u%1!=0}))throw new Error("broadcastTo(): Invalid broadcast shape ["+t+"].");if(t.length<e.rank)throw new Error("broadcastTo(): shape.length="+t.length+" < input.rank="+e.rank+".");if(t.length>e.rank){for(var o=e.shape.slice();o.length<t.length;)o.unshift(1);e=e.reshape(o)}for(var i=Array.from(t),a=t.length-1;a>=0;a--)if(e.shape[a]===t[a])i[a]=1;else if(e.shape[a]!==1)throw new Error("broadcastTo(): ["+n+"] cannot be broadcast to ["+t+"].");var s=i.map(function(u,c){return u>1?c:-1}).filter(function(u){return u>=0});return s.length===0?e.clone():T.runKernelFunc(function(u){return u.tile(e,i)},{input:e},function(u){return{input:function(){return u.sum(s,!0)}}})}}),Rh=S({cast_:function(r,t){var e=_(r,"x","cast");if(!bl(t))throw new Error("Failed to cast to unknown dtype "+t);if(t==="string"&&e.dtype!=="string"||t!=="string"&&e.dtype==="string")throw new Error("Only strings can be casted to strings");var n={dtype:t};return T.runKernelFunc(function(o){return o.cast(e,t)},{x:e},function(o){return{x:function(){return o.clone()}}},"Cast",n)}}),Sh=S({clone_:function(r){var t=_(r,"x","clone",null);return T.runKernelFunc(function(){return T.makeTensorFromDataId(t.dataId,t.shape,t.dtype)},{$x:t},function(e){return{$x:function(){return e.toFloat()}}})}}),Dh=S({cumsum_:function(r,t,e,n){t===void 0&&(t=0),e===void 0&&(e=!1),n===void 0&&(n=!1);var o=_(r,"x","cumsum"),i=Ot([t|=0],o.rank),a=o;i!=null&&(a=o.transpose(i));var s=Bt(1,o.rank)[0],u=T.runKernelFunc(function(c){return c.cumsum(a,s,e,n)},{permutedX:a},function(c){return{permutedX:function(){return c.cumsum(t,e,!n)}}});return i!=null&&(u=u.transpose(i)),u}}),Th=S({depthToSpace_:function(r,t,e){e===void 0&&(e="NHWC");var n=_(r,"x","depthToSpace"),o=e==="NHWC"?n.shape[1]:n.shape[2],i=e==="NHWC"?n.shape[2]:n.shape[3],a=e==="NHWC"?n.shape[3]:n.shape[1];return E(o*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+o+" and "+t+`  for depthToSpace with input shape
      `+n.shape}),E(i*t>=0,function(){return`Negative dimension size caused by overflow when multiplying
      `+i+" and "+t+` for depthToSpace with input shape
          `+n.shape}),E(a%(t*t)==0,function(){return"Dimension size must be evenly divisible by "+t*t+" but is "+a+" for depthToSpace with input shape "+n.shape}),T.runKernelFunc(function(s){return s.depthToSpace(n,t,e)},{$x:n})}}),lt=S({expandDims_:function(r,t){t===void 0&&(t=0);var e=_(r,"x","expandDims",null);E(t<=e.rank,function(){return"Axis must be <= rank of the tensor"});var n=e.shape.slice();return t<0&&(E(-(e.rank+1)<=t,function(){return"Axis must be in the interval ["+-(e.rank+1)+", "+e.rank+"]"}),t=e.rank+t+1),n.splice(t,0,1),vt(e,n)}}),ou=S({eye_:function(r,t,e,n){n===void 0&&(n="float32"),t==null&&(t=r);for(var o=oe([r,t],n),i=r<=t?r:t,a=0;a<i;++a)o.set(1,a,a);var s=o.toTensor().as2D(r,t);if(e==null)return s;if(e.length===1)return Ln(lt(s,0),[e[0],1,1]);if(e.length===2)return Ln(lt(lt(s,0),0),[e[0],e[1],1,1]);if(e.length===3)return Ln(lt(lt(lt(s,0),0),0),[e[0],e[1],e[2],1,1]);throw new Error("eye() currently supports only 1D and 2D batchShapes, but received "+e.length+"D.")}}),Fh=S({multinomial_:function(r,t,e,n){n===void 0&&(n=!1);var o=_(r,"logits","multinomial"),i=o.size,a=o.rank;if(i<2)throw new Error("Error in multinomial: you need at least 2 outcomes, but got "+i+".");if(a>2)throw new Error("Rank of probabilities must be 1 or 2, but is "+a);e=e||Math.random();var s=a===1?o.as2D(1,-1):o,u=T.runKernelFunc(function(c){return c.multinomial(s,n,t,e)},{logits2D:s});return a===1?u.as1D():u}}),yi=S({oneHot_:function(r,t,e,n){if(e===void 0&&(e=1),n===void 0&&(n=0),t<2)throw new Error("Error in oneHot: depth must be >=2, but it is "+t);var o=_(r,"indices","oneHot","int32"),i=o.shape.concat([t]);return o=o.flatten(),T.runKernelFunc(function(a){return a.oneHot(o,t,e,n)},{$indices:o},function(a){return{$indices:function(){return we(o.shape,"float32")}}}).reshape(i)}}),Cn=S({pad_:function(r,t,e){e===void 0&&(e=0);var n=_(r,"x","pad");if(n.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");var o={paddings:t,constantValue:e};return T.runKernelFunc(function(i){return i.pad(n,t,e)},{x:n},function(i){var a=t.map(function(s){return s[0]});return{x:function(){return i.slice(a,n.shape)}}},"PadV2",o)}}),Nh=S({pad1d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===2,function(){return"Invalid number of paddings. Must be length of 2."}),Cn(r,[t],e)}}),Ph=S({pad2d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===2&&t[0].length===2&&t[1].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Cn(r,t,e)}}),Mh=S({pad3d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Cn(r,t,e)}}),Oh=S({pad4d_:function(r,t,e){return e===void 0&&(e=0),E(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,function(){return"Invalid number of paddings. Must be length of 2 each."}),Cn(r,t,e)}}),Bh=S({rand_:function(r,t,e){var n=Y(r),o=null;if(e==null||e==="float32")o=new Float32Array(n);else if(e==="int32")o=new Int32Array(n);else{if(e!=="bool")throw new Error("Unknown data type "+e);o=new Uint8Array(n)}for(var i=0;i<n;i++)o[i]=t();return T.makeTensor(o,r,e)}}),Lh=S({randomNormal_:function(r,t,e,n,o){if(t===void 0&&(t=0),e===void 0&&(e=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var i=new Bi(t,e,n,!1,o),a=oe(r,n),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),Wh=S({randomGamma_:function(r,t,e,n,o){if(e===void 0&&(e=1),n===void 0&&(n="float32"),e==null&&(e=1),n==null&&(n="float32"),n!=="float32"&&n!=="int32")throw new Error("Unsupported data type "+n);for(var i=new Eh(t,e,n,o),a=oe(r,n),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),iu=S({randomUniform_:function(r,t,e,n,o){t===void 0&&(t=0),e===void 0&&(e=1),n===void 0&&(n="float32");for(var i=oe(r,n),a=new Ih(t,e,null,o),s=0;s<i.values.length;s++)i.values[s]=a.nextValue();return i.toTensor()}}),vt=S({reshape_:function(r,t){var e=_(r,"x","reshape",null);t=yl(t,e.size),E(e.size===Y(t),function(){return"new shape and old shape must have the same number of elements."});var n={shape:t};return T.runKernelFunc(function(o){return o.reshape(e,t)},{x:e},function(o){return{x:function(){return o.reshape(e.shape)}}},"Reshape",n)}}),au=S({spaceToBatchND_:function(r,t,e){var n=_(r,"x","spaceToBatchND");return E(n.rank>=1+t.length,function(){return"input rank "+n.rank+" should be > than [blockShape] "+t.length}),E(e.length===t.length,function(){return"paddings.shape[0] "+e.length+" must be equal to [blockShape] "+t.length}),E(n.shape.reduce(function(o,i,a){return a>0&&a<=t.length?o&&(i+e[a-1][0]+e[a-1][1])%t[a-1]==0:o},!0),function(){return"input spatial dimensions "+n.shape.slice(1)+" with paddings "+e.toString()+" must be divisible by blockShapes "+t.toString()}),T.runKernelFunc(function(o){return o.spaceToBatchND(n,t,e)},{$x:n},function(o){return{$x:function(){return o.batchToSpaceND(t,e)}}})}}),su=S({squeeze_:function(r,t){var e=_(r,"x","squeeze");return vt(e,vn(e.shape,t).newShape)}}),ut=S({stack_:function(r,t){t===void 0&&(t=0);var e=jr(r,"tensors","stack");if(E(e.length>=1,function(){return"Pass at least one tensor to tf.stack"}),e.length===1)return e[0].expandDims(t);var n=e[0].rank,o=e[0].shape,i=e[0].dtype;E(t<=n,function(){return"Axis must be <= rank of the tensor"}),e.forEach(function(s){ye(o,s.shape,"All tensors passed to stack must have matching shapes")}),e.forEach(function(s){E(i===s.dtype,function(){return"All tensors passed to stack must have matching dtypes"})});var a=e.map(function(s){return s.expandDims(t)});return Ne(a,t)}}),Ln=S({tile_:function(r,t){var e=_(r,"x","tile",null);E(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of reps "+t+"."});var n=[e],o={reps:t};return T.runKernelFunc(function(i,a){var s=i.tile(e,t);return a([e]),s},{x:e},function(i,a){var s=a[0];return{x:function(){var u=ve(s);if(s.rank===1)for(var c=0;c<t[0];++c)u=u.add(i.slice([c*s.shape[0]],[s.shape[0]]));else if(s.rank===2)for(c=0;c<t[0];++c)for(var l=0;l<t[1];++l)u=u.add(i.slice([c*s.shape[0],l*s.shape[1]],[s.shape[0],s.shape[1]]));else if(s.rank===3)for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(var h=0;h<t[2];++h)u=u.add(i.slice([c*s.shape[0],l*s.shape[1],h*s.shape[2]],[s.shape[0],s.shape[1],s.shape[2]]));else{if(s.rank!==4)throw new Error("Gradient for tile operation is not implemented for rank-"+s.rank+" tensors yet.");for(c=0;c<t[0];++c)for(l=0;l<t[1];++l)for(h=0;h<t[2];++h)for(var f=0;f<t[3];++f)u=u.add(i.slice([c*s.shape[0],l*s.shape[1],h*s.shape[2],f*s.shape[3]],[s.shape[0],s.shape[1],s.shape[2],s.shape[3]]))}return u}}},"Tile",o,n)}}),Vh=S({truncatedNormal_:function(r,t,e,n,o){if(t===void 0&&(t=0),e===void 0&&(e=1),n!=null&&n==="bool")throw new Error("Unsupported data type "+n);for(var i=new Bi(t,e,n,!0,o),a=oe(r,n),s=0;s<a.values.length;s++)a.values[s]=i.nextValue();return a.toTensor()}}),Pe=S({unstack_:function(r,t){t===void 0&&(t=0),t=t||0;var e=_(r,"x","unstack");E(t>=-e.shape.length&&t<e.shape.length,function(){return"Axis = "+t+" is not in [-"+e.shape.length+", "+e.shape.length+")"}),t<0&&(t+=e.shape.length);var n={axis:t};return T.runKernelFunc(function(o){return o.unstack(e,t)},{x:e},function(o){return{x:function(){return ut(o,t)}}},"Unpack",n)}}),zh=function(r,t){return K(this,void 0,void 0,function(){var e,n,o,i,a,s,u,c,l,h;return X(this,function(f){switch(f.label){case 0:return e=_(r,"x","setdiff1d"),n=_(t,"y","setdiff1d"),E(e.dtype===n.dtype,function(){return"x and y should have the same dtype, but got x ("+e.dtype+") and y ("+n.dtype+")."}),E(e.rank===1,function(){return"x should be 1D tensor, but got x ("+e.shape+")."}),E(n.rank===1,function(){return"y should be 1D tensor, but got y ("+n.shape+")."}),[4,e.data()];case 1:return o=f.sent(),[4,n.data()];case 2:for(i=f.sent(),a=new Set(i),s=0,l=0;l<o.length;l++)a.has(o[l])||s++;for(u=new ar([s],e.dtype),c=new ar([s],"int32"),l=0,h=0;l<o.length;l++)a.has(o[l])||(u.values[h]=o[l],c.values[h]=l,h++);return[2,[u.toTensor(),c.toTensor()]]}})})};function Kr(r,t,e,n){n===void 0&&(n=!0);var o=[];if(n)(o=o.concat(t.slice(0))).push(r[0]/e),o=o.concat(r.slice(1));else{o=o.concat(r[0]);for(var i=t.length,a=0;a<i;++a)o=o.concat([r[a+1]/t[a],t[a]]);o=o.concat(r.slice(i+1))}return o}function Xr(r,t,e){e===void 0&&(e=!0);var n=[];if(e){n.push(t);for(var o=t+1;o<r;++o)o<=2*t?(n.push(o),n.push(o-(t+1))):n.push(o)}else{var i=[],a=[];for(o=1;o<r;++o)o>=2*t+1||o%2==1?a.push(o):i.push(o);n.push.apply(n,i),n.push(0),n.push.apply(n,a)}return n}function Yr(r,t,e,n){n===void 0&&(n=!0);var o=[];n?o.push(r[0]/e):o.push(r[0]*e);for(var i=1;i<r.length;++i)i<=t.length?n?o.push(t[i-1]*r[i]):o.push(r[i]/t[i-1]):o.push(r[i]);return o}function uu(r,t){for(var e=[0],n=0;n<t;++n)e.push(r[n][0]);return e}function cu(r,t,e){for(var n=r.slice(0,1),o=0;o<e;++o)n.push(r[o+1]-t[o][0]-t[o][1]);return n}function lu(r,t){if(r.rank<1)throw new Error("tf.gatherND() expects the input to be rank 1 or higher, but the rank was "+r.rank+".");if(t.rank<1)throw new Error("tf.gatherND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(t.dtype!=="int32")throw new Error("tf.gatherND() expects the indices to be int32 type, but the dtype was "+t.dtype+".");if(t.shape[t.rank-1]>r.rank)throw new Error("index innermost dimension length must be <= tensor rank; saw: "+t.shape[t.rank-1]+" vs. "+r.rank);if(r.size===0)throw new Error("Requested more than 0 entries, but input is empty. Input shape: "+r.shape+".");for(var e=t.shape,n=e[e.length-1],o=1,i=0;i<e.length-1;++i)o*=e[i];var a=r.shape,s=e.slice();s.pop();var u=1;for(i=n;i<r.rank;++i)u*=a[i],s.push(a[i]);var c=St(r.shape).map(function(l){return l/u}).concat([1]).slice(0,n);return[s,o,u,c]}var hu=30;function zo(r){return r<=hu?r:fi(r,Math.floor(Math.sqrt(r)))}function Uh(r,t,e){var n=t.rank>1?t.shape[t.rank-1]:1,o=t.rank>1?t.rank-1:1,i="Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: "+e.shape+", indices.shape: "+t.shape+", shape: "+r+", sliceDim: "+n+", and batchDim: "+o+".";if(e.rank<o)throw new Error(i+" update.rank < "+o+". ");if(r.length<n+(e.rank-o))throw new Error(i+" Output shape length < "+(n+(e.rank-o)));if(e.rank!==o+r.length-n)throw new Error(i+" update.rank != "+(o+r.length-n));for(var a=0;a<o;++a)if(e.shape[a]!==t.shape[a])throw new Error(i+" updates.shape["+a+"] ("+e.shape[a]+") != indices.shape["+a+"] ("+t.shape[a]+").");for(a=0;a<e.rank-o;++a)if(e.shape[a+o]!==r[a+n])throw new Error(i+" updates.shape["+(a+o)+"] ("+e.shape[a+o]+") != shape["+(a+o)+"] ("+r[a+o]+")")}function Gh(r,t,e){if(t.rank<1)throw new Error("tf.scatterND() expects the indices to be rank 1 or higher, but the rank was "+t.rank+".");if(r.rank<1)throw new Error("tf.scatterND() expects the updates to be rank 1 or higher, but the rank was "+r.rank+".");if(t.dtype!=="int32")throw new Error("The dtype of 'indices' should be int32, but got dtype: "+t.dtype);if(e.length<1)throw new Error("Output rank must be greater or equal to 1, but got shape: "+e);if(e.length===0){if(t.size===0)throw new Error("Indices specified for empty output. indices shape: "+t.shape);if(r.size===0)throw new Error("Updates specified for empty output. updates shape: "+r.shape)}Uh(e,t,r)}function Jr(r,t,e){for(var n=t.shape.length,o=n>1?t.shape[n-1]:1,i=e.length,a=1,s=o;s<i;++s)a*=e[s];var u=o<1?1:o;return{sliceRank:o,numUpdates:Y(t.shape)/u,sliceSize:a,strides:St(e.slice(0,o)).concat([1]),outputSize:Y(e)}}function Hh(r,t,e){E(r.rank===t.length,function(){return"Error in slice"+r.rank+"D: Length of begin "+t+" must match the rank of the array ("+r.rank+")."}),E(r.rank===e.length,function(){return"Error in slice"+r.rank+"D: Length of size "+e+" must match the rank of the array ("+r.rank+")."});for(var n=function(i){E(t[i]+e[i]<=r.shape[i],function(){return"Error in slice"+r.rank+"D: begin["+i+"] + size["+i+"] ("+(t[i]+e[i])+") would overflow input.shape["+i+"] ("+r.shape[i]+")"})},o=0;o<r.rank;++o)n(o)}function Xa(r){for(var t=[],e=0;r>0;)1&r&&t.push(e),r/=2,e++;return t}function Li(r,t,e){for(var n=[],o=0;o<r.length;o++)n[o]=Math.ceil((t[o]-r[o])/e[o]);return n}function qh(r,t,e,n,o){var i=t[o],a=e[o]||1;(r&1<<o||i==null)&&(i=a>0?Number.MIN_SAFE_INTEGER:Number.MAX_SAFE_INTEGER);var s=n[o];return i<0&&(i+=s),i=ci(0,i,s-1)}function jh(r,t,e,n,o){var i=t[o],a=e[o]||1;(r&1<<o||i==null)&&(i=a>0?Number.MAX_SAFE_INTEGER:Number.MIN_SAFE_INTEGER);var s=n[o];return i<0&&(i+=s),i=a>0?ci(0,i,s):ci(-1,i,s-1)}function fu(r,t,e){for(var n=e.length,o=0;o<e.length;o++)if(e[o]>1){n=o;break}for(o=n+1;o<e.length;o++)if(t[o]>0||e[o]!==r[o])return!1;return!0}function du(r,t){for(var e=r.length>0?r[r.length-1]:1,n=0;n<r.length-1;n++)e+=r[n]*t[n];return e}function $h(r,t){E(hi(r),function(){return"The f passed in variableGrads(f) must be a function"}),E(t==null||Array.isArray(t)&&t.every(function(l){return l instanceof qn}),function(){return"The varList passed in variableGrads(f, varList) must be an array of variables"});var e=t!=null;if(!e)for(var n in t=[],T.registeredVariables)t.push(T.registeredVariables[n]);var o=e?t.filter(function(l){return!l.trainable}):null,i=t.length;E((t=t.filter(function(l){return l.trainable})).length>0,function(){return"variableGrads() expects at least one of the input variables to be trainable, but none of the "+i+" variables is trainable."});var a=T.gradients(r,t,null,!0),s=a.value,u=a.grads;E(u.some(function(l){return l!=null}),function(){return"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."}),E(s.rank===0,function(){return"The f passed in variableGrads(f) must return a scalar, but it returned a rank-"+s.rank+" tensor"});var c={};return t.forEach(function(l,h){u[h]!=null&&(c[l.name]=u[h])}),o!=null&&o.forEach(function(l){return c[l.name]=null}),{value:s,grads:c}}function lo(r){return T.customGrad(r)}var qt=S({softmax_:function(r,t){t===void 0&&(t=-1);var e=_(r,"logits","softmax","float32");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and dim was "+t);return T.runKernelFunc(function(n,o){var i=n.softmax(e,t);return o([i]),i},{logits:e},function(n,o){var i=o[0],a=n.mul(i);return{logits:function(){return a.sub(a.sum([t],!0).mul(i))}}},"Softmax",{dim:t},[],[!0])}}),Kh=S({logSoftmax_:function(r,t){t===void 0&&(t=-1);var e=_(r,"logits","logSoftmax");if(t===-1&&(t=e.rank-1),t!==e.rank-1)throw Error("Log Softmax along a non-last dimension is not yet supported. Logits was rank "+e.rank+" and axis was "+t);return lo(function(n,o){var i=n.max(t,!0),a=n.sub(i),s=a.toFloat().sub(a.exp().sum(t,!0).log());return o([s]),{value:s,gradFunc:function(u,c){var l=c[0].exp();return u.sub(u.sum(t,!0).mul(l))}}})(e)}}),pu=function(){function r(t,e){this.backend=t,this.dataMover=e,this.data=new WeakMap,this.dataIdsCount=0}return r.prototype.get=function(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)},r.prototype.set=function(t,e){this.dataIdsCount++,this.data.set(t,e)},r.prototype.has=function(t){return this.data.has(t)},r.prototype.delete=function(t){return this.dataIdsCount--,this.data.delete(t)},r.prototype.numDataIds=function(){return this.dataIdsCount},r}(),vu=function(){function r(){}return r.prototype.time=function(t){return N("time")},r.prototype.read=function(t){return N("read")},r.prototype.readSync=function(t){return N("readSync")},r.prototype.numDataIds=function(){return N("numDataIds")},r.prototype.disposeData=function(t){return N("disposeData")},r.prototype.write=function(t,e,n){return N("write")},r.prototype.move=function(t,e,n,o){return N("move")},r.prototype.memory=function(){return N("memory")},r.prototype.floatPrecision=function(){return N("floatPrecision")},r.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},r.prototype.batchMatMul=function(t,e,n,o){return N("batchMatMul")},r.prototype.fusedBatchMatMul=function(t){return t.a,t.b,t.transposeA,t.transposeB,t.bias,t.activation,t.preluActivationWeights,N("fusedBatchMatMul")},r.prototype.slice=function(t,e,n){return N("slice")},r.prototype.stridedSlice=function(t,e,n,o){return N("stridedSlice")},r.prototype.unstack=function(t,e){return N("unstack")},r.prototype.reverse=function(t,e){return N("reverse")},r.prototype.concat=function(t,e){return N("concat")},r.prototype.neg=function(t){return N("neg")},r.prototype.add=function(t,e){return N("add")},r.prototype.addN=function(t){return N("addN")},r.prototype.subtract=function(t,e){return N("subtract")},r.prototype.multiply=function(t,e){return N("multiply")},r.prototype.realDivide=function(t,e){return N("realDivide")},r.prototype.floorDiv=function(t,e){return N("floorDiv")},r.prototype.sum=function(t,e){return N("sum")},r.prototype.prod=function(t,e){return N("prod")},r.prototype.unsortedSegmentSum=function(t,e,n){return N("unsortedSegmentSum")},r.prototype.argMin=function(t,e){return N("argMin")},r.prototype.argMax=function(t,e){return N("argMax")},r.prototype.equal=function(t,e){return N("equal")},r.prototype.notEqual=function(t,e){return N("notEqual")},r.prototype.less=function(t,e){return N("less")},r.prototype.lessEqual=function(t,e){return N("lessEqual")},r.prototype.greater=function(t,e){return N("greater")},r.prototype.greaterEqual=function(t,e){return N("greaterEqual")},r.prototype.logicalNot=function(t){return N("logicalNot")},r.prototype.logicalAnd=function(t,e){return N("logicalAnd")},r.prototype.logicalOr=function(t,e){return N("logicalOr")},r.prototype.where=function(t){return N("where")},r.prototype.select=function(t,e,n){return N("select")},r.prototype.topk=function(t,e,n){return N("topk")},r.prototype.min=function(t,e){return N("min")},r.prototype.minimum=function(t,e){return N("minimum")},r.prototype.mod=function(t,e){return N("mod")},r.prototype.max=function(t,e){return N("max")},r.prototype.maximum=function(t,e){return N("maximum")},r.prototype.all=function(t,e){return N("all")},r.prototype.any=function(t,e){return N("any")},r.prototype.squaredDifference=function(t,e){return N("squaredDifference")},r.prototype.ceil=function(t){return N("ceil")},r.prototype.floor=function(t){return N("floor")},r.prototype.round=function(t){return N("round")},r.prototype.sign=function(t){return N("sign")},r.prototype.isNaN=function(t){return N("isNaN")},r.prototype.isInf=function(t){return N("isInf")},r.prototype.isFinite=function(t){return N("isFinite")},r.prototype.pow=function(t,e){return N("pow")},r.prototype.exp=function(t){return N("exp")},r.prototype.expm1=function(t){return N("expm1")},r.prototype.softmax=function(t,e){return N("softmax")},r.prototype.log=function(t){return N("log")},r.prototype.log1p=function(t){return N("log1p")},r.prototype.sqrt=function(t){return N("sqrt")},r.prototype.rsqrt=function(t){return N("rsqrt")},r.prototype.square=function(t){return N("square")},r.prototype.reciprocal=function(t){return N("reciprocal")},r.prototype.relu=function(t){return N("relu")},r.prototype.relu6=function(t){return N("relu6")},r.prototype.prelu=function(t,e){return N("prelu")},r.prototype.elu=function(t){return N("elu")},r.prototype.eluDer=function(t,e){return N("eluDer")},r.prototype.selu=function(t){return N("selu")},r.prototype.int=function(t){return N("int")},r.prototype.clip=function(t,e,n){return N("clip")},r.prototype.abs=function(t){return N("abs")},r.prototype.complexAbs=function(t){return N("complexAbs")},r.prototype.sigmoid=function(t){return N("sigmoid")},r.prototype.softplus=function(t){return N("softplus")},r.prototype.sin=function(t){return N("sin")},r.prototype.cos=function(t){return N("cos")},r.prototype.tan=function(t){return N("tan")},r.prototype.asin=function(t){return N("asin")},r.prototype.acos=function(t){return N("acos")},r.prototype.atan=function(t){return N("atan")},r.prototype.atan2=function(t,e){return N("atan2")},r.prototype.sinh=function(t){return N("sinh")},r.prototype.cosh=function(t){return N("cosh")},r.prototype.tanh=function(t){return N("tanh")},r.prototype.asinh=function(t){return N("asinh")},r.prototype.acosh=function(t){return N("acosh")},r.prototype.atanh=function(t){return N("atanh")},r.prototype.erf=function(t){return N("erf")},r.prototype.step=function(t,e){return N("step")},r.prototype.fusedConv2d=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,N("fusedConv2d")},r.prototype.conv2d=function(t,e,n){return N("conv2d")},r.prototype.conv2dDerInput=function(t,e,n){return N("conv2dDerInput")},r.prototype.conv2dDerFilter=function(t,e,n){return N("conv2dDerFilter")},r.prototype.fusedDepthwiseConv2D=function(t){return t.input,t.filter,t.convInfo,t.bias,t.activation,t.preluActivationWeights,N("fusedDepthwiseConv2D")},r.prototype.depthwiseConv2D=function(t,e,n){return N("depthwiseConv2D")},r.prototype.depthwiseConv2DDerInput=function(t,e,n){return N("depthwiseConv2DDerInput")},r.prototype.depthwiseConv2DDerFilter=function(t,e,n){return N("depthwiseConv2DDerFilter")},r.prototype.conv3d=function(t,e,n){return N("conv3d")},r.prototype.conv3dDerInput=function(t,e,n){return N("conv3dDerInput")},r.prototype.conv3dDerFilter=function(t,e,n){return N("conv3dDerFilter")},r.prototype.maxPool=function(t,e){return N("maxPool")},r.prototype.maxPoolBackprop=function(t,e,n,o){return N("maxPoolBackprop")},r.prototype.avgPool=function(t,e){return N("avgPool")},r.prototype.avgPoolBackprop=function(t,e,n){return N("avgPoolBackprop")},r.prototype.avgPool3d=function(t,e){return N("avgPool3d")},r.prototype.avgPool3dBackprop=function(t,e,n){return N("avgPool3dBackprop")},r.prototype.maxPool3d=function(t,e){return N("maxPool3d")},r.prototype.maxPool3dBackprop=function(t,e,n,o){return N("maxPool3dBackprop")},r.prototype.reshape=function(t,e){return N("reshape")},r.prototype.cast=function(t,e){return N("cast")},r.prototype.tile=function(t,e){return N("tile")},r.prototype.pad=function(t,e,n){return N("pad")},r.prototype.transpose=function(t,e){return N("transpose")},r.prototype.gather=function(t,e,n){return N("gather")},r.prototype.gatherND=function(t,e){return N("gatherND")},r.prototype.scatterND=function(t,e,n){return N("scatterND")},r.prototype.batchToSpaceND=function(t,e,n){return N("batchToSpaceND")},r.prototype.spaceToBatchND=function(t,e,n){return N("spaceToBatchND")},r.prototype.resizeBilinear=function(t,e,n,o){return N("resizeBilinear")},r.prototype.resizeBilinearBackprop=function(t,e,n){return N("resizeBilinearBackprop")},r.prototype.resizeNearestNeighbor=function(t,e,n,o){return N("resizeNearestNeighbor")},r.prototype.resizeNearestNeighborBackprop=function(t,e,n){return N("resizeNearestNeighborBackprop")},r.prototype.batchNormalization=function(t,e,n,o,i,a){return N("batchNormalization")},r.prototype.localResponseNormalization4D=function(t,e,n,o,i){return N("localResponseNormalization4D")},r.prototype.LRNGrad=function(t,e,n,o,i,a,s){return N("LRNGrad")},r.prototype.multinomial=function(t,e,n,o){return N("multinomial")},r.prototype.oneHot=function(t,e,n,o){return N("oneHot")},r.prototype.cumsum=function(t,e,n,o){return N("cumsum")},r.prototype.nonMaxSuppression=function(t,e,n,o,i){return N("nonMaxSuppression")},r.prototype.fft=function(t){return N("fft")},r.prototype.ifft=function(t){return N("ifft")},r.prototype.complex=function(t,e){return N("complex")},r.prototype.real=function(t){return N("real")},r.prototype.imag=function(t){return N("imag")},r.prototype.cropAndResize=function(t,e,n,o,i,a){return N("cropAndResize")},r.prototype.depthToSpace=function(t,e,n){return N("depthToSpace")},r.prototype.split=function(t,e,n){return N("split")},r.prototype.sparseToDense=function(t,e,n,o){return N("sparseToDense")},r.prototype.diag=function(t){return N("diag")},r.prototype.fill=function(t,e,n){return N("fill")},r.prototype.onesLike=function(t){return N("onesLike")},r.prototype.zerosLike=function(t){return N("zerosLike")},r.prototype.linspace=function(t,e,n){return N("linspace")},r.prototype.dispose=function(){return N("dispose")},r}();function N(r){throw new Error("'"+r+"' not yet implemented or not found in the registry. Did you forget to import the kernel?")}function en(r,t){for(var e=r.length,n=[],o=0;o<e;o++){var i=e-1-o,a=r[i]||1;(t[t.length-1-o]||1)>1&&a===1&&n.unshift(i)}return n}function Me(r,t){for(var e=[],n=0;n<t.length;n++){var o=r[r.length-n-1],i=t.length-n-1,a=t[i];(o==null||o===1&&a>1)&&e.unshift(i)}return e}function le(r,t){for(var e=[],n=Math.max(r.length,t.length),o=0;o<n;o++){var i=r[r.length-o-1];i==null&&(i=1);var a=t[t.length-o-1];if(a==null&&(a=1),i===1)e.unshift(a);else if(a===1)e.unshift(i);else{if(i!==a)throw Error("Operands could not be broadcast together with shapes "+r+" and "+t+".");e.unshift(i)}}return e}function ur(r,t,e,n,o,i,a){a===void 0&&(a="channelsLast");var s,u=eo(t),c=u[0],l=u[1];if(a==="channelsLast")s=[c,l,r[3],r[3]];else{if(a!=="channelsFirst")throw new Error("Unknown dataFormat "+a);s=[c,l,r[1],r[1]]}return _n(r,s,e,n,o,i,!1,a)}function Qr(r,t,e,n,o,i,a){a===void 0&&(a="NDHWC");var s,u,c=xi(t),l=c[0],h=c[1],f=c[2];if(a==="NDHWC")u="channelsLast",s=[l,h,f,r[4],r[4]];else{if(a!=="NCDHW")throw new Error("Unknown dataFormat "+a);u="channelsFirst",s=[l,h,f,r[1],r[1]]}return Zr(r,s,e,n,o,!1,u,i)}function _n(r,t,e,n,o,i,a,s){a===void 0&&(a=!1),s===void 0&&(s="channelsLast");var u=[-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],f=u[3];if(s==="channelsLast")c=r[0],l=r[1],h=r[2],f=r[3];else{if(s!=="channelsFirst")throw new Error("Unknown dataFormat "+s);c=r[0],f=r[1],l=r[2],h=r[3]}var d,p=t[0],v=t[1],m=t[3],g=eo(e),y=g[0],b=g[1],x=eo(n),w=x[0],C=x[1],R=Wn(p,w),k=Wn(v,C),I=function(O,B,z,V,W,G,H,j){var ee,te,ae;if(typeof O=="number"){ee={top:O,bottom:O,left:O,right:O,type:O===0?"VALID":"NUMBER"};var se=function(fe,xe,ge,ke,Ce){ke==null&&(ke=mu(fe,xe,ge));var _e=fe[0],xt=fe[1],bt=rr((_e-xe+2*ke)/ge+1,Ce);E(De(bt),function(){return"The output # of rows ("+bt+") must be an integer. Change the stride and/or zero pad parameters"});var nt=rr((xt-xe+2*ke)/ge+1,Ce);return E(De(nt),function(){return"The output # of columns ("+nt+") must be an integer. Change the stride and/or zero pad parameters"}),[bt,nt]}([B,z],G,V,O,j);te=se[0],ae=se[1]}else if(O==="same"){te=Math.ceil(B/V),ae=Math.ceil(z/W);var ce=Math.max(0,(te-1)*V+G-B),de=Math.max(0,(ae-1)*W+H-z),he=Math.floor(ce/2),pe=ce-he,Se=Math.floor(de/2);ee={top:he,bottom:pe,left:Se,right:de-Se,type:"SAME"}}else{if(O!=="valid")throw Error("Unknown padding parameter: "+O);ee={top:0,bottom:0,left:0,right:0,type:"VALID"},te=Math.ceil((B-G+1)/V),ae=Math.ceil((z-H+1)/W)}return{padInfo:ee,outHeight:te,outWidth:ae}}(o,l,h,y,b,R,k,i),A=I.padInfo,F=I.outHeight,D=I.outWidth,L=a?m*f:m;return s==="channelsFirst"?d=[c,L,F,D]:s==="channelsLast"&&(d=[c,F,D,L]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:h,inChannels:f,outHeight:F,outWidth:D,outChannels:L,padInfo:A,strideHeight:y,strideWidth:b,filterHeight:p,filterWidth:v,effectiveFilterHeight:R,effectiveFilterWidth:k,dilationHeight:w,dilationWidth:C,inShape:r,outShape:d,filterShape:t}}function Zr(r,t,e,n,o,i,a,s){i===void 0&&(i=!1),a===void 0&&(a="channelsLast");var u=[-1,-1,-1,-1,-1],c=u[0],l=u[1],h=u[2],f=u[3],d=u[4];if(a==="channelsLast")c=r[0],l=r[1],h=r[2],f=r[3],d=r[4];else{if(a!=="channelsFirst")throw new Error("Unknown dataFormat "+a);c=r[0],d=r[1],l=r[2],h=r[3],f=r[4]}var p,v=t[0],m=t[1],g=t[2],y=t[4],b=xi(e),x=b[0],w=b[1],C=b[2],R=xi(n),k=R[0],I=R[1],A=R[2],F=Wn(v,k),D=Wn(m,I),L=Wn(g,A),O=function(H,j,ee,te,ae,se,ce,de,he,pe,Se){var fe,xe,ge,ke;if(typeof H=="number"){fe={top:H,bottom:H,left:H,right:H,front:H,back:H,type:H===0?"VALID":"NUMBER"};var Ce=function(kn,Vt,ko,Rn,wt,Ro){wt==null&&(wt=mu(kn,Vt,Rn));var ul=kn[0],cl=kn[1],ll=kn[2],So=rr((ul-Vt+2*wt)/Rn+1,Ro);E(De(So),function(){return"The output # of depths ("+So+") must be an integer. Change the stride and/or zero pad parameters"});var Do=rr((cl-Vt+2*wt)/Rn+1,Ro);E(De(Do),function(){return"The output # of rows ("+Do+") must be an integer. Change the stride and/or zero pad parameters"});var To=rr((ll-Vt+2*wt)/Rn+1,Ro);return E(De(To),function(){return"The output # of columns ("+To+") must be an integer. Change the stride and/or zero pad parameters"}),[So,Do,To,ko]}([j,ee,te,1],de,1,ae,H,Se);xe=Ce[0],ge=Ce[1],ke=Ce[2]}else if(H==="same"){xe=Math.ceil(j/ae),ge=Math.ceil(ee/se),ke=Math.ceil(te/ce);var _e=(xe-1)*ae+de-j,xt=(ge-1)*se+he-ee,bt=(ke-1)*ce+pe-te,nt=Math.floor(_e/2),An=_e-nt,Lt=Math.floor(xt/2),Yt=xt-Lt,Wt=Math.floor(bt/2);fe={top:Lt,bottom:Yt,left:Wt,right:bt-Wt,front:nt,back:An,type:"SAME"}}else{if(H!=="valid")throw Error("Unknown padding parameter: "+H);fe={top:0,bottom:0,left:0,right:0,front:0,back:0,type:"VALID"},xe=Math.ceil((j-de+1)/ae),ge=Math.ceil((ee-he+1)/se),ke=Math.ceil((te-pe+1)/ce)}return{padInfo:fe,outDepth:xe,outHeight:ge,outWidth:ke}}(o,l,h,f,x,w,C,F,D,L,s),B=O.padInfo,z=O.outDepth,V=O.outHeight,W=O.outWidth,G=i?y*d:y;return a==="channelsFirst"?p=[c,G,z,V,W]:a==="channelsLast"&&(p=[c,z,V,W,G]),{batchSize:c,dataFormat:a,inDepth:l,inHeight:h,inWidth:f,inChannels:d,outDepth:z,outHeight:V,outWidth:W,outChannels:G,padInfo:B,strideDepth:x,strideHeight:w,strideWidth:C,filterDepth:v,filterHeight:m,filterWidth:g,effectiveFilterDepth:F,effectiveFilterHeight:D,effectiveFilterWidth:L,dilationDepth:k,dilationHeight:I,dilationWidth:A,inShape:r,outShape:p,filterShape:t}}function mu(r,t,e,n){n===void 0&&(n=1);var o=Wn(t,n);return Math.floor((r[0]*(e-1)-e+o)/2)}function eo(r){return typeof r=="number"?[r,r,r]:r.length===2?[r[0],r[1],1]:r}function xi(r){return typeof r=="number"?[r,r,r]:r}function Wn(r,t){return t<=1?r:r+(r-1)*(t-1)}function rr(r,t){if(!t)return r;switch(t){case"round":return Math.round(r);case"ceil":return Math.ceil(r);case"floor":return Math.floor(r);default:throw new Error("Unknown roundingMode "+t)}}function $n(r){var t=eo(r),e=t[0],n=t[1],o=t[2];return e===1&&n===1&&o===1}function tt(r,t){return $n(r)||$n(t)}function Wi(r){if(r==="NHWC")return"channelsLast";if(r==="NCHW")return"channelsFirst";throw new Error("Unknown dataFormat "+r)}function gu(r,t,e){if(t==="complex64"){if(r.dtype==="complex64")return r.clone();var n=we(r.shape),o=r.toFloat(),i=e.complex(o,n);return n.dispose(),o.dispose(),i}if(!wl(r.dtype,t))return T.makeTensorFromDataId(r.dataId,r.shape,t);if(r.dtype==="complex64"){var a=e.real(r);return i=a.cast(t),a.dispose(),i}if(t==="int32")return e.int(r);if(t==="bool"){var s=q(0,r.dtype);return i=e.notEqual(r,s),s.dispose(),i}throw new Error("Error in Cast: failed to cast "+r.dtype+" to "+t)}function bi(r,t){return T.makeTensorFromDataId(r.dataId,t,r.dtype)}function yu(r,t,e){var n=(t-r)/(e-1),o=mr(e,"float32");o[0]=r;for(var i=1;i<o.length;i++)o[i]=o[i-1]+n;return Te(o,"float32")}function wi(r,t){if(r.length!==t.length)throw new Error("Cannot merge real and imag arrays of different lengths. real:"+r.length+", imag: "+t.length+".");for(var e=new Float32Array(2*r.length),n=0;n<e.length;n+=2)e[n]=r[n/2],e[n+1]=t[n/2];return e}function Ya(r,t){return{real:r[2*t],imag:r[2*t+1]}}function Xh(r,t,e,n){r[2*n]=t,r[2*n+1]=e}function Yh(r,t,e){var n=(e?2:-2)*Math.PI*(r/t);return{real:Math.cos(n),imag:Math.sin(n)}}function Jh(r,t,e){var n=function(i,a,s){return function(u,c,l){for(var h=0,f=u.length,d=0,p=!1;h<f;){var v=l(c,u[d=h+(f-h>>>1)]);v>0?h=d+1:(f=d,p=!v)}return p?h:-h-1}(i,a,s||Qh)}(r,t,e),o=n<0?-(n+1):n;r.splice(o,0,t)}function Qh(r,t){return r>t?1:r<t?-1:0}function Vi(r,t,e,n,o){return xu(r,t,e,n,o,0).selectedIndices}function zi(r,t,e,n,o,i){var a=xu(r,t,e,n,o,i);return a.numValidOutputs.dispose(),{selectedIndices:a.selectedIndices,selectedScores:a.selectedScores}}function xu(r,t,e,n,o,i,a,s){s===void 0&&(s=!1);for(var u=Array.from(t).map(function(x,w){return{score:x,boxIndex:w,suppressBeginIndex:0}}).filter(function(x){return x.score>o}).sort(Ja),c=i>0?-.5/i:0,l=[],h=[];l.length<e&&u.length>0;){var f=u.pop(),d=f.score,p=f.boxIndex,v=f.suppressBeginIndex;if(d<o)break;for(var m=!1,g=l.length-1;g>=v;--g){var y=Zh(r,p,l[g]);if(y>=n){m=!0;break}if(f.score=f.score*ef(n,c,y),f.score<=o)break}f.suppressBeginIndex=l.length,m||(f.score===d?(l.push(p),h.push(f.score)):f.score>o&&Jh(u,f,Ja))}var b=l.length;return s&&(l.fill(0,b),h.fill(0,b)),{selectedIndices:Te(l,"int32"),selectedScores:Te(h,"float32"),numValidOutputs:q(b,"int32")}}function Zh(r,t,e){var n=r.subarray(4*t,4*t+4),o=r.subarray(4*e,4*e+4),i=Math.min(n[0],n[2]),a=Math.min(n[1],n[3]),s=Math.max(n[0],n[2]),u=Math.max(n[1],n[3]),c=Math.min(o[0],o[2]),l=Math.min(o[1],o[3]),h=Math.max(o[0],o[2]),f=Math.max(o[1],o[3]),d=(s-i)*(u-a),p=(h-c)*(f-l);if(d<=0||p<=0)return 0;var v=Math.max(i,c),m=Math.max(a,l),g=Math.min(s,h),y=Math.min(u,f),b=Math.max(g-v,0)*Math.max(y-m,0);return b/(d+p-b)}function ef(r,t,e){var n=Math.exp(t*e*e);return e<=r?n:0}function Ja(r,t){return r.score-t.score||r.score===t.score&&t.boxIndex-r.boxIndex}function bu(r,t,e){var n=new Array(r.rank).fill(0),o=r.shape.slice();return t.map(function(i){o[e]=i;var a=r.slice(n,o);return n[e]+=i,a})}function wu(r,t){for(var e=new Array(r.rank),n=0;n<e.length;n++)e[n]=r.shape[n]*t[n];var o=oe(e,r.dtype);for(n=0;n<o.values.length;++n){for(var i=o.indexToLoc(n),a=new Array(r.rank),s=0;s<a.length;s++)a[s]=i[s]%r.shape[s];var u=r.locToIndex(a);o.values[n]=r.values[u]}return o.toTensor()}function Cu(r,t,e,n,o){for(var i=t[t.length-1],a=[r.length/i,i],s=a[0],u=a[1],c=ir(e,s*n),l=ir("int32",s*n),h=0;h<s;h++){for(var f=h*u,d=r.subarray(f,f+u),p=[],v=0;v<d.length;v++)p.push({value:d[v],index:v});p.sort(function(x,w){return w.value-x.value});var m=h*n,g=c.subarray(m,m+n),y=l.subarray(m,m+n);for(v=0;v<n;v++)g[v]=p[v].value,y[v]=p[v].index}var b=t.slice();return b[b.length-1]=n,[Ge(c,b,e),Ge(l,b,"int32")]}function Ui(r,t){for(var e=[],n=0;n<t.length;n++)t[n]&&e.push(n);var o=oe(r,"int32"),i=oe([e.length,r.length],"int32");for(n=0;n<e.length;n++){var a=o.indexToLoc(e[n]),s=n*r.length;i.values.set(a,s)}return i.toTensor()}var tf=function(r,t){this.outputShape=[],this.outputShape=r,this.variableNames=t.map(function(o,i){return"T"+i});var e=[];this.variableNames.forEach(function(o){e.push("float v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        float result = `+n+`;
        setOutput(result);
      }
    `},nf=function(r,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.variableNames=t.map(function(o,i){return"T"+i});var e=[];this.variableNames.forEach(function(o){e.push("vec4 v"+o+" = get"+o+"AtOutCoords();")});var n=this.variableNames.map(function(o){return"v"+o}).join(" + ");this.userCode=`
      void main() {
        `+e.join(`
        `)+`

        vec4 result = `+n+`;
        setOutput(result);
      }
    `},rf=function(r,t,e){this.variableNames=["A"];var n=r.windowSize,o=r.batchSize,i=r.inSize,a=Math.ceil(i/n);e||this.variableNames.push("bestIndicesA"),this.outputShape=[o,a];var s=t==="max"?">":"<",u=e?"inOffset + i;":"round(getBestIndicesA(batch, inOffset + i));";this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+n+`;

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < `+n+`; i++) {
          int inIdx = `+u+`;
          float candidate = getA(batch, inIdx);
          if (candidate `+s+` bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `};function _u(r,t){return["x","y","z","w","u","v"].slice(0,t).map(function(e){return r+"."+e})}function Qe(r,t){return t===1?[r]:_u(r,t)}function $e(){var r,t,e,n,o,i,a,s,u,c;return M().getNumber("WEBGL_VERSION")===2?(r="#version 300 es",t="in",e="out",n="in",o="texture",i="outputColor",a="out vec4 outputColor;",s=`
      bool isnan_custom(float val) {
        return (val > 0.0 || val < 0.0) ? false : val != 0.0;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `,u="",c=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(r="",t="attribute",e="varying",n="varying",o="texture2D",i="gl_FragColor",a="",s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,u=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,c=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:r,attribute:t,varyingVs:e,varyingFs:n,texture2D:o,output:i,defineOutput:a,defineSpecialNaN:s,defineSpecialInf:u,defineRound:c}}function mn(r,t,e){e===void 0&&(e="index");var n=St(t);return n.map(function(o,i){return"int "+r[i]+" = "+e+" / "+o+"; "+(i===n.length-1?"int "+r[i+1]+" = "+e+" - "+r[i]+" * "+o:"index -= "+r[i]+" * "+o)+";"}).join("")}function Gi(r){var t=St(r).map(function(e){return e.toString()});return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * `+t[0]+" + coords.y * "+t[1]+` + coords.z;
  }
`}var Eu=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`;function of(r,t,e,n){var o=[];r.forEach(function(d){var p=Y(d.shapeInfo.logicalShape);d.shapeInfo.isUniform?o.push("uniform float "+d.name+(p>1?"["+p+"]":"")+";"):(o.push("uniform sampler2D "+d.name+";"),o.push("uniform int offset"+d.name+";"))});var i,a,s=o.join(`
`),u=r.map(function(d){return function(p,v,m){m===void 0&&(m=!1);var g="";g+=m?Iu(p):Nn(p);var y=p.shapeInfo.logicalShape,b=v.logicalShape;return y.length<=b.length&&(g+=m?function(x,w){var C,R=x.name,k=R.charAt(0).toUpperCase()+R.slice(1),I="get"+k+"AtOutCoords",A=x.shapeInfo.logicalShape.length,F=w.logicalShape.length,D=en(x.shapeInfo.logicalShape,w.logicalShape),L=be(F),O=F-A,B=["x","y","z","w","u","v"];C=A===0?"":F<2&&D.length>=1?"coords = 0;":D.map(function(ee){return"coords."+B[ee+O]+" = 0;"}).join(`
`);var z="";z=F<2&&A>0?"coords":x.shapeInfo.logicalShape.map(function(ee,te){return"coords."+B[te+O]}).join(", ");var V="return outputValue;",W=Y(x.shapeInfo.logicalShape)===1,G=Y(w.logicalShape)===1;if(A!==1||W||G){if(W&&!G)V=F===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(D.length){var H=A-2,j=A-1;D.indexOf(H)>-1&&D.indexOf(j)>-1?V="return vec4(outputValue.x);":D.indexOf(H)>-1?V="return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);":D.indexOf(j)>-1&&(V="return vec4(outputValue.xx, outputValue.zz);")}}else V=`
      return vec4(outputValue.xy, outputValue.xy);
    `;return`
    vec4 `+I+`() {
      `+L+` coords = getOutputCoords();
      `+C+`
      vec4 outputValue = get`+k+"("+z+`);
      `+V+`
    }
  `}(p,v):function(x,w){var C=x.name,R=C.charAt(0).toUpperCase()+C.slice(1),k="get"+R+"AtOutCoords",I=w.texShape,A=x.shapeInfo.texShape,F=x.shapeInfo.logicalShape.length,D=w.logicalShape.length;if(!x.shapeInfo.isUniform&&F===D&&x.shapeInfo.flatOffset==null&&We(A,I))return`
      float `+k+`() {
        return sampleTexture(`+C+`, resultUV);
      }
    `;var L,O=be(D),B=en(x.shapeInfo.logicalShape,w.logicalShape),z=D-F,V=["x","y","z","w","u","v"];L=F===0?"":D<2&&B.length>=1?"coords = 0;":B.map(function(G){return"coords."+V[G+z]+" = 0;"}).join(`
`);var W="";return W=D<2&&F>0?"coords":x.shapeInfo.logicalShape.map(function(G,H){return"coords."+V[H+z]}).join(", "),`
    float `+k+`() {
      `+O+` coords = getOutputCoords();
      `+L+`
      return get`+R+"("+W+`);
    }
  `}(p,v)),g}(d,t,n)}).join(`
`),c=t.texShape,l=$e(),h=function(d){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return `+d.texture2D+`(textureSampler, uv).r;
    }
  `}(l),f=function(d){return d.version+`
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    `+d.varyingFs+` vec2 resultUV;
    `+d.defineOutput+`
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    `+d.defineSpecialNaN+`
    `+d.defineSpecialInf+`
    `+d.defineRound+`

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    `+af+`
    `+sf+`
    `+uf+`
  `}(l);return t.isPacked?(i=function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(x,w){var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];return C[0]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * `+C[1]+`.0);
      }
    `:C[1]===1?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * `+C[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      return 2 * (resTexRC.x * `+C[1]+` + resTexRC.y);
    }
  `}(0,p);case 2:return function(x,w){var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)];if(We(x,w))return`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(`+C[0]+", "+C[1]+`));
      }
    `;var R=Math.ceil(x[1]/2);return`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));

      int index = resTexRC.x * `+C[1]+` + resTexRC.y;
      int r = 2 * (index / `+R+`);
      int c = imod(index, `+R+`) * 2;

      return ivec2(r, c);
    }
  `}(d,p);case 3:return v=d,m=p,g=[Math.ceil(m[0]/2),Math.ceil(m[1]/2)],y=Math.ceil(v[2]/2),b=y*Math.ceil(v[1]/2),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+g[0]+", "+g[1]+`));
      int index = resTexRC.x * `+g[1]+` + resTexRC.y;

      int b = index / `+b+`;
      index -= b * `+b+`;

      int r = 2 * (index / `+y+`);
      int c = imod(index, `+y+`) * 2;

      return ivec3(b, r, c);
    }
  `;default:return function(x,w){for(var C=[Math.ceil(w[0]/2),Math.ceil(w[1]/2)],R=Math.ceil(x[x.length-1]/2),k=R*Math.ceil(x[x.length-2]/2),I=k,A="",F="b, r, c",D=2;D<x.length-1;D++)I*=x[x.length-D-1],A=`
      int b`+D+" = index / "+I+`;
      index -= b`+D+" * "+I+`;
    `+A,F="b"+D+", "+F;return`
    ivec`+x.length+` getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+C[0]+", "+C[1]+`));
      int index = resTexRC.x * `+C[1]+` + resTexRC.y;

      `+A+`

      int b = index / `+k+`;
      index -= b * `+k+`;

      int r = 2 * (index / `+R+`);
      int c = imod(index, `+R+`) * 2;

      return ivec`+x.length+"("+F+`);
    }
  `}(d,p)}var v,m,g,y,b}(t.logicalShape,c),a=function(d){return`
    void setOutput(vec4 val) {
      `+d.output+` = val;
    }
  `}(l)):(i=function(d,p){switch(d.length){case 0:return`
    int getOutputCoords() {
      return 0;
    }
  `;case 1:return function(g,y){return y[0]===1?`
      int getOutputCoords() {
        return int(resultUV.x * `+y[1]+`.0);
      }
    `:y[1]===1?`
      int getOutputCoords() {
        return int(resultUV.y * `+y[0]+`.0);
      }
    `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+y[0]+", "+y[1]+`));
      return resTexRC.x * `+y[1]+` + resTexRC.y;
    }
  `}(0,p);case 2:return function(g,y){return We(g,y)?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(`+y[0]+", "+y[1]+`));
      }
    `:g[1]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+y[0]+", "+y[1]+`));
        int index = resTexRC.x * `+y[1]+` + resTexRC.y;
        return ivec2(index, 0);
      }
    `:g[0]===1?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(`+y[0]+", "+y[1]+`));
        int index = resTexRC.x * `+y[1]+` + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;
      int r = index / `+g[1]+`;
      int c = index - r * `+g[1]+`;
      return ivec2(r, c);
    }
  `}(d,p);case 3:return v=p,m=mn(["r","c","d"],d),`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(`+v[0]+", "+v[1]+`));
      int index = resTexRC.x * `+v[1]+` + resTexRC.y;
      `+m+`
      return ivec3(r, c, d);
    }
  `;case 4:return function(g,y){var b=mn(["r","c","d","d2"],g);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;
      `+b+`
      return ivec4(r, c, d, d2);
    }
  `}(d,p);case 5:return function(g,y){var b=mn(["r","c","d","d2","d3"],g);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(`+y[0]+`,
                             `+y[1]+`));

      int index = resTexRC.x * `+y[1]+` + resTexRC.y;

      `+b+`

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}(d,p);case 6:return function(g,y){var b=mn(["r","c","d","d2","d3","d4"],g);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(`+y[0]+", "+y[1]+`));
      int index = resTexRC.x * `+y[1]+` + resTexRC.y;

      `+b+`

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}(d,p);default:throw new Error(d.length+"-D output sampling is not yet supported")}var v,m}(t.logicalShape,c),a=function(d){return`
    void setOutput(float val) {
      `+d.output+` = vec4(val, 0, 0, 0);
    }
  `}(l)),n&&(f+=cf),[f,h,a,s,i,u,e].join(`
`)}function Nn(r){var t=r.shapeInfo.logicalShape;switch(t.length){case 0:return function(e){var n=e.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return"float "+o+"() {return "+n+";}";var i=e.shapeInfo.texShape,a=i[0],s=i[1];if(a===1&&s===1)return`
      float `+o+`() {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=e.shapeInfo.texShape,c=u[0],l=u[1],h=hn(n);return`
    float `+o+`() {
      vec2 uv = uvFromFlat(`+c+", "+l+", "+h+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 1:return function(e){var n=e.name,o="get"+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`
      float `+o+`(int index) {
        `+Sn(e)+`
      }
    `;var i=e.shapeInfo.texShape,a=i[0],s=i[1];if(s===1&&a===1)return`
      float `+o+`(int index) {
        return sampleTexture(`+n+`, halfCR);
      }
    `;var u=hn(n);return s===1?`
      float `+o+`(int index) {
        vec2 uv = vec2(0.5, (float(index + `+u+") + 0.5) / "+a+`.0);
        return sampleTexture(`+n+`, uv);
      }
    `:a===1?`
      float `+o+`(int index) {
        vec2 uv = vec2((float(index + `+u+") + 0.5) / "+s+`.0, 0.5);
        return sampleTexture(`+n+`, uv);
      }
    `:`
    float `+o+`(int index) {
      vec2 uv = uvFromFlat(`+a+", "+s+", index + "+u+`);
      return sampleTexture(`+n+`, uv);
    }
  `}(r);case 2:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=e.shapeInfo.texShape;if(a!=null&&We(n,a)){var s=a[0],u=a[1];return`
    float `+i+`(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(`+u+".0, "+s+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `}var c=vn(n),l=c.newShape,h=c.keptDims,f=l;if(f.length<n.length){var d=Pn(e,f);return`
      `+Nn(d)+`
      float `+i+`(int row, int col) {
        return `+i+"("+Mn(["row","col"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(`+n[1]+`, 1)));
        `+Sn(e)+`
      }
    `;var p=a[0],v=a[1],m=hn(o);return v===1?`
    float `+i+`(int row, int col) {
      float index = dot(vec3(row, col, `+m+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / `+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `:p===1?`
    float `+i+`(int row, int col) {
      float index = dot(vec3(row, col, `+m+"), vec3("+n[1]+`, 1, 1));
      vec2 uv = vec2((index + 0.5) / `+v+`.0, 0.5);
      return sampleTexture(`+o+`, uv);
    }
  `:`
  float `+i+`(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * `+n[1]+" + col + "+m+`;
    vec2 uv = uvFromFlat(`+p+", "+v+`, index);
    return sampleTexture(`+o+`, uv);
  }
`}(r);case 3:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=n[1]*n[2],s=n[2],u=vn(n),c=u.newShape,l=u.keptDims,h=c;if(h.length<n.length){var f=Pn(e,h);return`
        `+Nn(f)+`
        float `+i+`(int row, int col, int depth) {
          return `+i+"("+Mn(["row","col","depth"],l)+`);
        }
      `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(`+a+", "+s+`, 1)));
        `+Sn(e)+`
      }
    `;var d=e.shapeInfo.texShape,p=d[0],v=d[1],m=e.shapeInfo.flatOffset;if(v===a&&m==null)return`
        float `+i+`(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(`+s+`, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(`+v+".0, "+p+`.0);
          return sampleTexture(`+o+`, uv);
        }
      `;if(v===s&&m==null)return`
    float `+i+`(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(`+n[1]+`, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+v+".0, "+p+`.0);
      return sampleTexture(`+o+`, uv);
    }
  `;var g=hn(o);return`
      float `+i+`(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * `+a+" + col * "+s+" + depth + "+g+`;
        vec2 uv = uvFromFlat(`+p+", "+v+`, index);
        return sampleTexture(`+o+`, uv);
      }
  `}(r);case 4:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=n[3],s=n[2]*a,u=n[1]*s,c=vn(n),l=c.newShape,h=c.keptDims;if(l.length<n.length){var f=Pn(e,l);return`
      `+Nn(f)+`
      float `+i+`(int row, int col, int depth, int depth2) {
        return `+i+"("+Mn(["row","col","depth","depth2"],h)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(`+u+", "+s+", "+a+`, 1)));
        `+Sn(e)+`
      }
    `;var d=e.shapeInfo.flatOffset,p=e.shapeInfo.texShape,v=p[0],m=p[1];if(m===u&&d==null)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(`+s+", "+a+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(m===a&&d==null)return`
      float `+i+`(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(`+n[1]*n[2]+", "+n[2]+`, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+m+".0, "+v+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var g=hn(o);return`
    float `+i+`(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+u+" + col * "+s+` +
          depth * `+a+` + depth2;
      vec2 uv = uvFromFlat(`+v+", "+m+", index + "+g+`);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 5:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=n[4],s=n[3]*a,u=n[2]*s,c=n[1]*u,l=vn(n),h=l.newShape,f=l.keptDims;if(h.length<n.length){var d=Pn(e,h);return`
      `+Nn(d)+`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        return `+i+"("+Mn(["row","col","depth","depth2","depth3"],f)+`);
      }
    `}if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(`+c+", "+u+", "+s+", "+a+`)) +
          depth3;
        `+Sn(e)+`
      }
    `;var p=e.shapeInfo.flatOffset,v=e.shapeInfo.texShape,m=v[0],g=v[1];if(g===c&&p==null)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(`+u+", "+s+", "+a+`, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+g+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(g===a&&p==null)return`
      float `+i+`(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]+`,
               `+n[2]*n[3]+", "+n[3]+`, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+g+".0, "+m+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var y=hn(o);return`
    float `+i+`(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+c+" + col * "+u+" + depth * "+s+` +
          depth2 * `+a+" + depth3 + "+y+`;
      vec2 uv = uvFromFlat(`+m+", "+g+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);case 6:return function(e){var n=e.shapeInfo.logicalShape,o=e.name,i="get"+o.charAt(0).toUpperCase()+o.slice(1),a=vn(n),s=a.newShape,u=a.keptDims;if(s.length<n.length){var c=Pn(e,s);return`
      `+Nn(c)+`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return `+i+"("+Mn(["row","col","depth","depth2","depth3","depth4"],u)+`);
      }
    `}var l=n[5],h=n[4]*l,f=n[3]*h,d=n[2]*f,p=n[1]*d;if(e.shapeInfo.isUniform)return`
      float `+i+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(`+p+", "+d+", "+f+", "+h+`)) +
          dot(
            vec2(depth3, depth4),
            vec2(`+l+`, 1)));
        `+Sn(e)+`
      }
    `;var v=e.shapeInfo.flatOffset,m=e.shapeInfo.texShape,g=m[0],y=m[1];if(y===p&&v==null)return`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(`+d+", "+f+", "+h+", "+l+`)) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(`+y+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;if(y===l&&v==null)return`
      float `+i+`(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(`+n[1]*n[2]*n[3]*n[4]+`,
               `+n[2]*n[3]*n[4]+`,
               `+n[3]*n[4]+`,
               `+n[4]+`)) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(`+y+".0, "+g+`.0);
        return sampleTexture(`+o+`, uv);
      }
    `;var b=hn(o);return`
    float `+i+`(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * `+p+" + col * "+d+" + depth * "+f+` +
          depth2 * `+h+" + depth3 * "+l+" + depth4 + "+b+`;
      vec2 uv = uvFromFlat(`+g+", "+y+`, index);
      return sampleTexture(`+o+`, uv);
    }
  `}(r);default:throw new Error(t.length+"-D input sampling is not yet supported")}}function Iu(r){var t,e,n;switch(r.shapeInfo.logicalShape.length){case 0:return t=r.name,e="get"+t.charAt(0).toUpperCase()+t.slice(1),n=$e(),`
    vec4 `+e+`() {
      return `+n.texture2D+"("+t+`, halfCR);
    }
  `;case 1:return function(o){var i=o.name,a="get"+i.charAt(0).toUpperCase()+i.slice(1),s=o.shapeInfo.texShape,u=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],c=$e();return`
    vec4 `+a+`(int index) {
      vec2 uv = packedUVfrom1D(
        `+u[0]+", "+u[1]+`, index);
      return `+c.texture2D+"("+i+`, uv);
    }
  `}(r);case 2:return function(o){var i=o.shapeInfo.logicalShape,a=o.name,s="get"+a.charAt(0).toUpperCase()+a.slice(1),u=o.shapeInfo.texShape,c=u[0],l=u[1],h=$e();if(u!=null&&We(i,u))return`
      vec4 `+s+`(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(`+l+".0, "+c+`.0);

        return `+h.texture2D+"("+a+`, uv);
      }
    `;var f=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)],d=Math.ceil(i[1]/2);return`
    vec4 `+s+`(int row, int col) {
      vec2 uv = packedUVfrom2D(`+d+", "+f[0]+", "+f[1]+`, row, col);
      return `+h.texture2D+"("+a+`, uv);
    }
  `}(r);case 3:return function(o){var i=o.shapeInfo.logicalShape,a=o.name,s="get"+a.charAt(0).toUpperCase()+a.slice(1),u=o.shapeInfo.texShape,c=[Math.ceil(u[0]/2),Math.ceil(u[1]/2)];if(i[0]===1){var l=i.slice(1),h=Pn(o,l);return`
        `+Iu(h)+`
        vec4 `+s+`(int b, int row, int col) {
          return `+s+"("+Mn(["b","row","col"],[1,2])+`);
        }
      `}var f=c[0],d=c[1],p=Math.ceil(i[2]/2),v=p*Math.ceil(i[1]/2),m=$e();return`
    vec4 `+s+`(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        `+f+", "+d+", "+v+", "+p+`, b, row, col);
      return `+m.texture2D+"("+a+`, uv);
    }
  `}(r);default:return function(o){for(var i=o.shapeInfo.logicalShape,a=i.length,s=o.name,u="get"+s.charAt(0).toUpperCase()+s.slice(1),c=o.shapeInfo.texShape,l=[Math.ceil(c[0]/2),Math.ceil(c[1]/2)],h=l[0],f=l[1],d=Math.ceil(i[a-1]/2),p=d*Math.ceil(i[a-2]/2),v="int b, int row, int col",m="b * "+p+" + (row / 2) * "+d+" + (col / 2)",g=2;g<a-1;g++)v="int b"+g+", "+v,p*=i[a-g-1],m="b"+g+" * "+p+" + "+m;var y=$e();return`
    vec4 `+u+"("+v+`) {
      int index = `+m+`;
      int texR = index / `+f+`;
      int texC = index - texR * `+f+`;
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+f+", "+h+`);
      return `+y.texture2D+"("+s+`, uv);
    }
  `}(r)}}var af=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,sf=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,uf=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,cf=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`;function hn(r){return"offset"+r}function Sn(r){var t=r.name,e=Y(r.shapeInfo.logicalShape);return e<2?"return "+t+";":`
    for (int i = 0; i < `+e+`; i++) {
      if (i == index) {
        return `+t+`[i];
      }
    }
  `}function be(r){if(r<=1)return"int";if(r===2)return"ivec2";if(r===3)return"ivec3";if(r===4)return"ivec4";if(r===5)return"ivec5";if(r===6)return"ivec6";throw Error("GPU for rank "+r+" is not yet supported")}function Pn(r,t){var e=JSON.parse(JSON.stringify(r));return e.shapeInfo.logicalShape=t,e}function Mn(r,t){return t.map(function(e){return r[e]}).join(", ")}var lf=function(r,t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,E(r.length>2,function(){return"Packed arg"+(e.charAt(0).toUpperCase()+e.slice(1))+" supports only inputs with rank above 2."});var o=r[r.length-1],i=Math.ceil(o/t);this.outputShape=r.slice(0,-1),i>1&&this.outputShape.push(i),n||this.variableNames.push("bestIndicesA");var a,s,u=this.outputShape,c=u.length,l=be(c),h=Qe("coords",c);if(i===1){var f=be(s=c+1);a=`
        `+f+" sourceLocR = "+f+"("+h.join()+`, 0);
        ++`+h[c-1]+`;
        `+f+" sourceLocG = "+f+"("+h.join()+`, 0);
        ++`+h[c-2]+`;
        `+f+" sourceLocA = "+f+"("+h.join()+`, 0);
        --`+h[c-1]+`;
        `+f+" sourceLocB = "+f+"("+h.join()+`, 0);
        --`+h[c-2]+";"}else s=c,a=`
        `+l+` sourceLocR = coords;
        ++`+h[c-1]+`;
        `+l+` sourceLocG = coords;
        ++`+h[c-2]+`;
        `+l+` sourceLocA = coords;
        --`+h[c-1]+`;
        `+l+` sourceLocB = coords;
        --`+h[c-2]+";";var d=["x","y","z","w","u","v"].slice(0,s),p="."+d[s-1],v=d.map(function(k){return"int "+k}),m=Qe("sourceLocR",s-1).concat("inIdx.r"),g=Qe("sourceLocG",s-1).concat("inIdx.g"),y=Qe("sourceLocB",s-1).concat("inIdx.b"),b=Qe("sourceLocA",s-1).concat("inIdx.a"),x=e==="max"?"greaterThan":"lessThan",w=n?"":`
          inIdx = round(vec4(getBestIndicesAChannel(`+m.join()+`),
                             getBestIndicesAChannel(`+g.join()+`),
                             getBestIndicesAChannel(`+y.join()+`),
                             getBestIndicesAChannel(`+b.join()+")));",C=`vec4(
            getAChannel(`+m.join()+`),
            hasNextCol ? getAChannel(`+g.join()+`) : 0.,
            hasNextRow ? getAChannel(`+y.join()+`) : 0.,
            hasNextRow && hasNextCol ? getAChannel(`+b.join()+") : 0.)",R=n?"":`
      float getBestIndicesAChannel(`+v.join()+`) {
        return getChannel(getBestIndicesA(`+d.join()+`),
                                          vec2(`+d.slice(-2).join()+`));
      }`;this.userCode=`
      float getAChannel(`+v.join()+`) {
        return getChannel(getA(`+d.join()+`),
                               vec2(`+d.slice(-2).join()+`));
      }
      `+R+`
      void main() {
        `+l+` coords = getOutputCoords();
        bool hasNextCol = `+h[c-1]+" < "+(u[c-1]-1)+`;
        bool hasNextRow = `+h[c-2]+" < "+(u[c-2]-1)+`;
        `+a+`
        ivec4 srcIdx = ivec4(sourceLocR`+p+", sourceLocG"+p+`,
          sourceLocB`+p+", sourceLocA"+p+") * "+t+`;
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = `+C+`;

        for (int i = 0; i < `+t+`; i++) {
          inIdx = srcIdx;
          `+w+`
          vec4 candidate = `+C+`;
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(`+x+`(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `},hf=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,i=r.dilationHeight,a=r.dilationWidth,s=r.effectiveFilterHeight,u=r.effectiveFilterWidth,c=s-1-r.padInfo.top,l=u-1-r.padInfo.left,h=1/(t*e);this.userCode=`
      const ivec2 pads = ivec2(`+c+", "+l+`);
      const float avgMultiplier = float(`+h+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+s+`;
            wR += `+i+`) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+u+`;
            wC+= `+a+`) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `},ff=function(r){this.variableNames=["dy"],this.outputShape=r.inShape;var t=r.filterDepth,e=r.filterHeight,n=r.filterWidth,o=r.strideDepth,i=r.strideHeight,a=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,h=r.effectiveFilterHeight,f=r.effectiveFilterWidth,d=l-1-r.padInfo.front,p=h-1-r.padInfo.top,v=f-1-r.padInfo.left,m=1/(t*e*n);this.userCode=`
      const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);
      const float avgMultiplier = float(`+m+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          float dyD = float(dyDCorner + wD) / `+o+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+h+`;
              wR += `+u+`) {
            float dyR = float(dyRCorner + wR) / `+i+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+f+`;
                wC += `+c+`) {
              float dyC = float(dyCCorner + wC) / `+a+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `},df=function(r,t,e,n,o,i){this.outputShape=[],this.variableNames=["x","mean","variance"],le(r,t),le(r,e);var a="0.0";n!=null&&(le(r,n),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");var s="1.0";o!=null&&(le(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = `+a+`;
        float scale = `+s+`;
        float inv = scale * inversesqrt(variance + float(`+i+`));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `},pf=function(r,t,e,n,o,i){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=["x","mean","variance"],le(r,t),le(r,e);var a="vec4(0.0)";n!=null&&(le(r,n),this.variableNames.push("offset"),a="getOffsetAtOutCoords()");var s="vec4(1.0)";o!=null&&(le(r,o),this.variableNames.push("scale"),s="getScaleAtOutCoords()"),this.outputShape=r,this.userCode=`
      void main() {
        vec4 offset = `+a+`;
        vec4 scale = `+s+`;

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(`+i+`));

        setOutput((x - mean) * inv + offset);
      }
    `},vf="return areal * breal - aimag * bimag;",mf="return areal * bimag + aimag * breal;",Qa=function(r,t,e){this.variableNames=["AReal","AImag","BReal","BImag"],this.outputShape=le(t,e),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        `+r+`
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `},Uo="return a + b;",Go="return a - b;",Za="return a * b;",Au="return (a < 0.) ? b * a : a;",Re=function(r,t,e){this.variableNames=["A","B"],this.outputShape=le(t,e),this.userCode=`
      float binaryOperation(float a, float b) {
        `+r+`
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `},ku=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,Ut=function(r,t,e,n){n===void 0&&(n=!1),this.variableNames=["A","B"],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=le(t,e);var o=this.outputShape.length,i="";if(n)if(o===0||Y(this.outputShape)===1)i=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(i=`
          `+be(o)+` coords = getOutputCoords();
        `,o===1)i+=`
            result.y = (coords + 1) >= `+this.outputShape[0]+` ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{var a=Qe("coords",o);i+=`
            bool nextRowOutOfBounds =
              (`+a[o-2]+" + 1) >= "+this.outputShape[o-2]+`;
            bool nextColOutOfBounds =
              (`+a[o-1]+" + 1) >= "+this.outputShape[o-1]+`;
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        `+r+`
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        `+i+`

        setOutput(result);
      }
    `},gf=function(){function r(t){this.variableNames=["A"],this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(o,i){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(i,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(i,"maxVal")),o.gl.uniform1f(n.minLoc,t),o.gl.uniform1f(n.maxLoc,e)}},r}(),yf=function(){function r(t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.userCode=`
      uniform float minVal;
      uniform float maxVal;

      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}return r.prototype.getCustomSetupFunc=function(t,e){var n=this;return function(o,i){n.minLoc==null&&(n.minLoc=o.getUniformLocationNoThrow(i,"minVal"),n.maxLoc=o.getUniformLocationNoThrow(i,"maxVal")),o.gl.uniform1f(n.minLoc,t),o.gl.uniform1f(n.maxLoc,e)}},r}(),xf=function(r){this.variableNames=["real","imag"],this.outputShape=r,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `},bf=function(r){this.outputShape=[],this.outputShape=jn(r,1),this.variableNames=r.map(function(s,u){return"T"+u});var t=new Array(r.length-1);t[0]=r[0][1];for(var e=1;e<t.length;e++)t[e]=t[e-1]+r[e][1];var n=["if (yC < "+t[0]+") setOutput(getT0(yR, yC));"];for(e=1;e<t.length;e++){var o=t[e-1];n.push("else if (yC < "+t[e]+") setOutput(getT"+e+"(yR, yC-"+o+"));")}var i=t.length,a=t[t.length-1];n.push("else setOutput(getT"+i+"(yR, yC-"+a+"));"),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        `+n.join(`
        `)+`
      }
    `},wf=function(r,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=jn(r,t);var e=this.outputShape,n=e.length,o=be(n),i=Qe("coords",n),a=["x","y","z","w","u","v"].slice(0,n);this.variableNames=r.map(function(m,g){return"T"+g});var s=new Array(r.length-1);s[0]=r[0][t];for(var u=1;u<s.length;u++)s[u]=s[u-1]+r[u][t];var c=a[t],l=a.slice(-2),h=a.join(),f="if ("+c+" < "+s[0]+`) {
        return getChannel(
            getT0(`+h+"), vec2("+l.join()+`));
        }`;for(u=1;u<s.length;u++){var d=s[u-1];f+=`
        if (`+c+" < "+s[u]+"  && "+c+" >= "+s[u-1]+`) {
          return getChannel(
            getT`+u+"("+Sr(a,c,d)+`),
            vec2(`+Sr(l,c,d)+`));
        }`}var p=s.length,v=s[s.length-1];f+=`
        return getChannel(
          getT`+p+"("+Sr(a,c,v)+`),
          vec2(`+Sr(l,c,v)+"));",this.userCode=`
      float getValue(`+a.map(function(m){return"int "+m})+`) {
        `+f+`
      }

      void main() {
        `+o+` coords = getOutputCoords();
        vec4 result = vec4(getValue(`+i+`), 0., 0., 0.);

        `+i[n-1]+" = "+i[n-1]+` + 1;
        if (`+i[n-1]+" < "+e[n-1]+`) {
          result.g = getValue(`+i+`);
        }

        `+i[n-2]+" = "+i[n-2]+` + 1;
        if (`+i[n-2]+" < "+e[n-2]+`) {
          result.a = getValue(`+i+`);
        }

        `+i[n-1]+" = "+i[n-1]+` - 1;
        if (`+i[n-2]+" < "+e[n-2]+` &&
            `+i[n-1]+" < "+e[n-1]+`) {
          result.b = getValue(`+i+`);
        }
        setOutput(result);
      }
    `};function Sr(r,t,e){var n=r.indexOf(t);return r.map(function(o,i){return i===n?o+" - "+e:o}).join()}var Cf=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,e=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,i=r.dataFormat==="channelsLast";this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              if (`+i+`) {
                float dyValue = getDy(b, yR, yC, d2);
                float xValue = getX(b, xR, xC, d1);
                dotProd += (xValue * dyValue);
              } else {
                float dyValue = getDy(b, d2, yR, yC);
                float xValue = getX(b, d1, xR, xC);
                dotProd += (xValue * dyValue);
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},_f=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,i=r.dataFormat==="channelsLast",a=t-1-r.padInfo.top,s=e-1-r.padInfo.left,u=i?1:2,c=i?2:3,l=i?3:1;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[`+l+`];

        ivec2 dyCorner = ivec2(coords[`+u+"], coords["+c+`]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {

              if (`+i+`) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `},Ef=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideDepth,e=r.strideHeight,n=r.strideWidth,o=r.padInfo.front,i=r.padInfo.top,a=r.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yF = 0; yF < `+r.outDepth+`; yF++) {
            int xF = wF + yF * `+t+" - "+o+`;

            if (xF < 0 || xF >= `+r.inDepth+`) {
              continue;
            }

            for (int yR = 0; yR < `+r.outHeight+`; yR++) {
              int xR = wR + yR * `+e+" - "+i+`;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int yC = 0; yC < `+r.outWidth+`; yC++) {
                int xC = wC + yC * `+n+" - "+a+`;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},If=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterDepth,e=r.filterHeight,n=r.filterWidth,o=r.strideDepth,i=r.strideHeight,a=r.strideWidth,s=t-1-r.padInfo.front,u=e-1-r.padInfo.top,c=n-1-r.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(`+s+", "+u+", "+c+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < `+t+`; wF++) {
          float dyF = float(dyFCorner + wF) / `+o+`.0;

          if (dyF < 0.0 || dyF >= `+r.outDepth+`.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = `+t+` - 1 - wF;

          for (int wR = 0; wR < `+e+`; wR++) {
            float dyR = float(dyRCorner + wR) / `+i+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = `+e+` - 1 - wR;

            for (int wC = 0; wC < `+n+`; wC++) {
              float dyC = float(dyCCorner + wC) / `+a+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = `+n+` - 1 - wC;

              for (int d2 = 0; d2 < `+r.outChannels+`; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},Af=function(r){this.variableNames=["x","dy"],this.outputShape=r.filterShape;var t=r.strideHeight,e=r.strideWidth,n=r.padInfo.top,o=r.padInfo.left,i=r.outChannels/r.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * `+i+` + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < `+r.batchSize+`; b++) {
          for (int yR = 0; yR < `+r.outHeight+`; yR++) {
            int xR = wR + yR * `+t+" - "+n+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int yC = 0; yC < `+r.outWidth+`; yC++) {
              int xC = wC + yC * `+e+" - "+o+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `},kf=function(r){this.variableNames=["dy","W"],this.outputShape=r.inShape;var t=r.filterHeight,e=r.filterWidth,n=r.strideHeight,o=r.strideWidth,i=t-1-r.padInfo.top,a=e-1-r.padInfo.left,s=r.outChannels/r.inChannels;this.userCode=`
      const ivec2 pads = ivec2(`+i+", "+a+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < `+t+`; wR++) {
          float dyR = float(dyRCorner + wR) / `+n+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = `+t+` - 1 - wR;

          for (int wC = 0; wC < `+e+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+o+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = `+e+` - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < `+s+`; dm++) {
              int d2 = d1 * `+s+` + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `},es=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.padInfo.top,i=r.padInfo.left,a=r.strideHeight,s=r.strideWidth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterHeight,h=r.filterWidth,f=4*Math.floor(r.inChannels/4),d=r.inChannels%4,p=r.dataFormat==="channelsLast",v=p?1:2,m=p?2:3,g=p?3:1,y="",b="";e&&(y=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,b="result = activation(result);");var x=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+y+`

      const ivec2 strides = ivec2(`+a+", "+s+`);
      const ivec2 pads = ivec2(`+o+", "+i+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[`+g+`];

        ivec2 xRCCorner =
            ivec2(coords[`+v+"], coords["+m+`]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+l+`; wR++) {
          int xR = xRCorner + wR * `+u+`;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+h+`; wC++) {
            int xC = xCCorner + wC * `+c+`;

            if (xC < 0 || xC >= `+r.inWidth+`) {
              continue;
            }

            for (int d1 = 0; d1 < `+f+`; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (`+p+`) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (`+(d===1)+`) {

              if (`+p+`) {
                dotProd +=
                    getX(batch, xR, xC, `+f+`) *
                    getW(wR, wC, `+f+`, d2);
              } else {
                dotProd +=
                    getX(batch, `+f+`, xR, xC) *
                    getW(wR, wC, `+f+`, d2);
              }

            } else if (`+(d===2)+`) {
              vec2 wValues = vec2(
                getW(wR, wC, `+f+`, d2),
                getW(wR, wC, `+f+` + 1, d2)
              );

              if (`+p+`) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, `+f+`),
                  getX(batch, xR, xC, `+f+` + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, `+f+`, xR, xC),
                  getX(batch, `+f+` + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (`+(d===3)+`) {
              vec3 wValues = vec3(
                getW(wR, wC, `+f+`, d2),
                getW(wR, wC, `+f+` + 1, d2),
                getW(wR, wC, `+f+` + 2, d2)
              );

              if (`+p+`) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, `+f+`),
                  getX(batch, xR, xC, `+f+` + 1),
                  getX(batch, xR, xC, `+f+` + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, `+f+`, xR, xC),
                  getX(batch, `+f+` + 1, xR, xC),
                  getX(batch, `+f+` + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        `+x+`
        `+b+`
        setOutput(result);
      }
    `},Rf=function(r){this.variableNames=["x","W"],this.outputShape=r.outShape;var t=r.padInfo.front,e=r.padInfo.top,n=r.padInfo.left,o=r.strideDepth,i=r.strideHeight,a=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.filterDepth,h=r.filterHeight,f=r.filterWidth,d=4*Math.floor(r.inChannels/4),p=r.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(`+o+", "+i+", "+a+`);
      const ivec3 pads = ivec3(`+t+", "+e+", "+n+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < `+l+`; wF++) {
          int xF = xFCorner + wF * `+s+`;

          if (xF < 0 || xF >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+h+`; wR++) {
            int xR = xRCorner + wR * `+u+`;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+f+`; wC++) {
              int xC = xCCorner + wC * `+c+`;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              for (int d1 = 0; d1 < `+d+`; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (`+(p===1)+`) {
                dotProd +=
                  getX(batch, xF, xR, xC, `+d+`) *
                  getW(wF, wR, wC, `+d+`, d2);
              } else if (`+(p===2)+`) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (`+(p===3)+`) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, `+d+`),
                  getX(batch, xF, xR, xC, `+d+` + 1),
                  getX(batch, xF, xR, xC, `+d+` + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, `+d+`, d2),
                  getW(wF, wR, wC, `+d+` + 1, d2),
                  getW(wF, wR, wC, `+d+` + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `},ts=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.outputShape=r.outShape;var o=r.inHeight,i=r.inWidth,a=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,h=r.dilationWidth,f=r.filterHeight,d=r.filterWidth,p=r.outChannels/r.inChannels,v="",m="";e&&(v=n?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`
          float activation(float x) {
            `+e+`
          }
        `,m="result = activation(result);");var g=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+v+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / `+p+`;
        int q = d2 - d1 * `+p+`;

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < `+f+`; wR++) {
          int xR = xRCorner + wR * `+l+`;

          if (xR < 0 || xR >= `+o+`) {
            continue;
          }

          for (int wC = 0; wC < `+d+`; wC++) {
            int xC = xCCorner + wC * `+h+`;

            if (xC < 0 || xC >= `+i+`) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        `+g+`
        `+m+`
        setOutput(result);
      }
    `},ns=function(r,t,e,n){t===void 0&&(t=!1),e===void 0&&(e=null),n===void 0&&(n=!1),this.variableNames=["x","W"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r.outShape;for(var o=r.inHeight,i=r.inWidth,a=r.padInfo.top,s=r.padInfo.left,u=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,h=r.dilationWidth,f=r.filterHeight,d=r.filterWidth,p=d,v="int xR; int xC; int xCOffset;",m=0;m<f;m++)for(var g=0;g<d;g++)v+=`
          vec4 xTexelR`+m+"C"+2*g+` = vec4(0.);
          vec4 wR`+m+"C"+g+` = vec4(0.);
          vec4 xR`+m+"C"+g+" = vec4(0.);";for(m=0;m<f;m++)for(var y=0;y<p;y++){if(v+=`
          xR = xRCorner + `+m*l+`;
          xC = xCCorner + `+(g=2*y)*h+`;
        `,c===1){if(g<d&&(v+=s%2==1?`
                xCOffset = xC + 1;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+i+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+i+`) {
                    xTexelR`+m+"C"+g+`.zw = vec2(0.);
                  }
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + 1 - 2;
                if(xR >= 0 && xR < `+o+" && xCOffset >= 0 && xCOffset < "+i+`) {
                  vec4 previous = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if(xCOffset + 1 >= `+i+`) {
                    previous.zw = vec2(0.);
                  }

                  xR`+m+"C"+g+" = vec4(previous.zw, xTexelR"+m+"C"+g+`.xy);
                } else {
                  xR`+m+"C"+g+" = vec4(0, 0, xTexelR"+m+"C"+g+`.xy);
                }
              `:`
                if(xR >= 0 && xR < `+o+" && xC >= 0 && xC < "+i+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xR`+m+"C"+g+" = xTexelR"+m+"C"+g+`;
              `,g+1<d)){var b=s%2==0?qs(h):h;h%2==0&&s%2==1||h%2!=0&&s%2!=1?(v+=`
                  xCOffset = xC + `+s%2+" + "+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+i+`) {
                    xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }
                `,h>1&&(v+=`
                    xCOffset -= 2;
                    if(xR >= 0 && xR < `+o+` &&
                      xCOffset >= 0 && xCOffset < `+i+`) {
                      xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);
                    } else {
                      xTexelR`+m+"C"+g+` = vec4(0.);
                    }
                  `),v+=`
                  xR`+m+"C"+(g+1)+` = vec4(
                    xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.xy);
                `):v+=`
                  xCOffset = xC + `+b+`;

                  if(xR >= 0 && xR < `+o+` &&
                    xCOffset >= 0 && xCOffset < `+i+`) {
                    xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                  }

                  xR`+m+"C"+(g+1)+" = xTexelR"+m+"C"+(g+2)+`;
                `}}else g<d&&(v+=`
              if(xR >= 0 && xR < `+o+`) {
            `,s%2==1?(v+=`
                xCOffset = xC + 1 - `+c+`;
                if(xCOffset >= 0 && xCOffset < `+i+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                if(xC + 1 >= 0 && xC + 1 < `+i+`) {
                  xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xC + 1, d1);
                } else {
                  xTexelR`+m+"C"+(g+2)+` = vec4(0.);
                }

                xR`+m+"C"+g+` = vec4(
                  xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.zw);
              `,g+1<d&&(v+=`
                  vec4 final = vec4(0.);
                  xCOffset = xC + 1 + `+c+`;
                  if(xCOffset >= 0 && xCOffset < `+i+`) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xR`+m+"C"+(g+1)+" = vec4(xTexelR"+m+"C"+(g+2)+`.xy, final.xy);
                `)):(v+=`
                if(xC >= 0 && xC < `+i+`) {
                  xTexelR`+m+"C"+g+` = getX(batch, xR, xC, d1);
                } else {
                  xTexelR`+m+"C"+g+` = vec4(0.);
                }

                xCOffset = xC + `+c+`;
                if(xCOffset >= 0 && xCOffset < `+i+`) {
                  xTexelR`+m+"C"+(g+2)+` = getX(batch, xR, xCOffset, d1);
                } else {
                  xTexelR`+m+"C"+(g+2)+` = vec4(0.);
                }

                xR`+m+"C"+g+` = vec4(
                  xTexelR`+m+"C"+g+".xy, xTexelR"+m+"C"+(g+2)+`.xy);
              `,g+1<d&&(v+=`
                  xR`+m+"C"+(g+1)+` = vec4(
                    xTexelR`+m+"C"+g+".zw, xTexelR"+m+"C"+(g+2)+`.zw);
                `)),v+="}");g<d&&(v+=`
            vec4 wTexelR`+m+"C"+g+" = getW("+m+", "+g+`, d1, q);
            wR`+m+"C"+g+" = vec4(wTexelR"+m+"C"+g+".xz, wTexelR"+m+"C"+g+`.xz);
          `,g+1<d&&(v+=`
              vec4 wTexelR`+m+"C"+(g+1)+" = getW("+m+", "+(g+1)+`, d1, q);
              wR`+m+"C"+(g+1)+` =
                vec4(wTexelR`+m+"C"+(g+1)+".xz, wTexelR"+m+"C"+(g+1)+".xz);"))}for(m=0;m<f;m++)for(g=0;g<d;g++)v+="dotProd += xR"+m+"C"+g+" * wR"+m+"C"+g+";";var x="",w="";e&&(x=n?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+e+`
        }`:`vec4 activation(vec4 x) {
          `+e+`
        }`,w="result = activation(result);");var C=t?"result += getBiasAtOutCoords();":"";t&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+x+`

      const ivec2 strides = ivec2(`+u+", "+c+`);
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {

        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2;
        int q = 0;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        vec4 dotProd = vec4(0.);

        `+v+`

        vec4 result = dotProd;
        `+C+`
        `+w+`
        setOutput(result);
      }
    `},Sf=function(r,t,e,n,o){this.variableNames=["Image","Boxes","BoxInd"],this.outputShape=[];var i=r[0],a=r[1],s=r[2],u=r[3],c=t[0],l=e[0],h=e[1];this.outputShape=[c,l,h,u];var f=n==="bilinear"?1:0,d=[a-1+".0",s-1+".0"],p=d[0],v=d[1],m=l>1?[""+(a-1)/(l-1),"(y2-y1) * height_ratio","y1*"+p+" + float(y)*(height_scale)"]:["0.0","0.0","0.5 * (y1+y2) * "+p],g=m[0],y=m[1],b=m[2],x=h>1?[""+(s-1)/(h-1),"(x2-x1) * width_ratio","x1*"+v+" + float(x)*(width_scale)"]:["0.0","0.0","0.5 * (x1+x2) * "+v],w=x[0],C=x[1],R=x[2];this.userCode=`
      const float height_ratio = float(`+g+`);
      const float width_ratio = float(`+w+`);
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= `+i+`) {
          return;
        }

        float height_scale = `+y+`;
        float width_scale = `+C+`;

        float in_y = `+b+`;
        if( in_y < 0.0 || in_y > `+p+` ) {
          setOutput(float(`+o+`));
          return;
        }
        float in_x = `+R+`;
        if( in_x < 0.0 || in_x > `+v+` ) {
          setOutput(float(`+o+`));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(`+f+` == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `},Df=function(r,t,e){this.variableNames=["x"],this.outputShape=r;var n=r.length,o=r[r.length-1],i=e?"<":">";this.userCode=`
      int getIndex(int i) {
        `+(e?"return "+o+" -i - 1;":"return i;")+`
      }

      void main() {
        `+be(n)+` coords = getOutputCoords();
        int end = `+rs(n,"coords")+`;
        float val = 0.0;
        for (int i = `+o+` - 1; i >= 0; i -= 1) {
          int idx = getIndex(i);
          if (idx `+i+` end) {
            continue;
          }
          if (idx == end && `+t+`) {
            continue;
          }
          `+rs(n,"coords")+` = idx;
          val += getX(`+function(a,s){if(a===1)return""+s;if(a===2)return s+".x, "+s+".y";if(a===3)return s+".x, "+s+".y, "+s+".z";if(a===4)return s+".x, "+s+".y, "+s+".z, "+s+".w";throw Error("Cumulative sum for rank "+a+" is not yet supported")}(n,"coords")+`);
        }
        setOutput(val);
      }
    `};function rs(r,t){if(r===1)return""+t;if(r===2)return t+".y";if(r===3)return t+".z";if(r===4)return t+".w";throw Error("Cumulative sum for rank "+r+" is not yet supported")}var Tf=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=sr.DENSE;var t=nr(r),e=$e();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+mn(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        `+e.output+` = result;
      }
    `},Ff=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=sr.DENSE;var t=nr(r),e=$e();this.outputShape=r,this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        `+mn(["r","c","d"],r)+`
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx *
          vec2(`+t[0]+", "+t[1]+`));
        int index = 4 * (resTexRC.x * `+t[1]+` + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        `+e.output+` = result;
      }
    `},Nf=function(){function r(t,e,n){this.variableNames=["x"],this.outputShape=[],this.outputShape=t,this.blockSize=e,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = `+this.getHeightCoordString()+`;
      int w = `+this.getWidthCoordString()+`;
      int d = `+this.getDepthCoordString()+`;

      int in_h = h / `+e+`;
      int offset_h = imod(h, `+e+`);
      int in_w = w / `+e+`;
      int offset_w = imod(w, `+e+`);
      int offset_d = (offset_h * `+e+` + offset_w) *
        `+this.getOutputDepthSize()+`;
      int in_d = d + offset_d;

      float result = `+this.getInputSamplingString()+`;
      setOutput(result);
    }
  `}return r.prototype.getHeightCoordString=function(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"},r.prototype.getWidthCoordString=function(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"},r.prototype.getDepthCoordString=function(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"},r.prototype.getOutputDepthSize=function(){return this.dataFormat==="NHWC"?this.outputShape[3]:this.outputShape[1]},r.prototype.getInputSamplingString=function(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"},r}(),Pf=function(r){this.variableNames=["X"],this.outputShape=[r,r],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `},Mf=function(r){this.variableNames=["A"],this.outTexUsage=it.DOWNLOAD;var t=$e();this.outputShape=r,this.userCode=`
      `+Eu+`

      void main() {
        float x = getAAtOutCoords();
        `+t.output+` = encode_float(x);
      }
    `},Of=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=it.DOWNLOAD;var t=$e();this.outputShape=r,this.userCode=`
      `+Eu+`

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        `+t.output+` = encode_float(x);
      }
    `},Bf=function(r,t,e){e===void 0&&(e=!1),this.variableNames=["A"];var n=$e(),o=t[0],i=t[1];this.outputShape=r;var a="result";e&&(a="floor(result * 255. + 0.5)"),this.userCode=`
      `+Gi(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        int flatIndex = getFlatIndex(coords);
        int offset = imod(flatIndex, 4);

        flatIndex = idiv(flatIndex, 4, 1.);
        
        int r = flatIndex / `+i+`;
        int c = imod(flatIndex, `+i+`);
        vec2 uv = (vec2(c, r) + halfCR) / vec2(`+i+".0, "+o+`.0);
        vec4 values = `+n.texture2D+`(A, uv);

        float result;

        if(offset == 0) {
          result = values[0];
        } else if(offset == 1) {
          result = values[1];
        } else if(offset == 2) {
          result = values[2];
        } else {
          result = values[3];
        }

        `+n.output+" = vec4("+a+`, 0., 0., 0.);
      }
    `},Lf=function(r,t,e){e===void 0&&(e=!1),this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var n=$e(),o=t[0],i=t[1];this.outputShape=r;var a="",s="result";e&&(s="floor(result * 255. + 0.5)");for(var u=0;u<=1;u++)for(var c=0;c<=1;c++){var l=2*u+c;a+=`
          localCoords = coords;
          if(localCoords[2] + `+c+" < "+r[2]+`) {
            localCoords[2] += `+c+`;
            if(localCoords[1] + `+u+" < "+r[1]+`) {
              localCoords[1] += `+u+`;

              flatIndex = getFlatIndex(localCoords);
              offset = imod(flatIndex, 4);

              flatIndex = idiv(flatIndex, 4, 1.);

              r = flatIndex / `+i+`;
              c = imod(flatIndex, `+i+`);
              uv = (vec2(c, r) + halfCR) / vec2(`+i+".0, "+o+`.0);
              values = `+n.texture2D+`(A, uv);

              if(offset == 0) {
                result[`+l+`] = values[0];
              } else if(offset == 1) {
                result[`+l+`] = values[1];
              } else if(offset == 2) {
                result[`+l+`] = values[2];
              } else {
                result[`+l+`] = values[3];
              }
            }
          }
        `}this.userCode=`
      `+Gi(r)+`

      void main() {
        ivec3 coords = getOutputCoords();

        vec4 result = vec4(0.);
        int flatIndex, r, c, offset;
        ivec3 localCoords;
        vec2 uv;
        vec4 values;

        `+a+`

        `+n.output+" = "+s+`;
      }
    `},Wf="return real * expR - imag * expI;",Vf="return real * expI + imag * expR;",os=function(r,t,e){this.variableNames=["real","imag"];var n=t[1];this.outputShape=t;var o=e?"2.0 * "+Math.PI:"-2.0 * "+Math.PI,i=e?n+".0":"1.0";this.userCode=`
      const float exponentMultiplier = `+o+`;

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        `+r+`
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(`+n+`);
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < `+n+`; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / `+i+`;
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `},zf=function(){function r(t,e){this.outputShape=[],this.variableNames=["x"],this.outputShape=t,this.userCode=`
      uniform float value;
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,o){e.valueLoc==null&&(e.valueLoc=n.getUniformLocationNoThrow(o,"value")),n.gl.uniform1f(e.valueLoc,t)}},r}(),Uf=function(r,t,e){this.variableNames=["A","indices"];var n=r.slice();n[e]=t,this.outputShape=n,this.rank=n.length;var o=be(this.rank),i=function(a,s){var u=a.length;if(u>4)throw Error("Gather for rank "+u+" is not yet supported");if(u===1)return"int(getIndices(resRC))";for(var c=["resRC.x","resRC.y","resRC.z","resRC.w"],l=[],h=0;h<a.length;h++)h===s?l.push("int(getIndices("+c[h]+"))"):l.push(""+c[h]);return l.join()}(r,e);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+i+`));
      }
    `},Gf=function(r,t,e){this.sliceDim=r,this.strides=t,this.variableNames=["x","indices"],this.outputShape=e;var n=be(t.length),o=be(e.length),i=this.sliceDim>1?"strides[j]":"strides";this.userCode=`
        `+n+" strides = "+n+"("+this.strides+`);
         void main() {
          `+o+` coords = getOutputCoords();
          int flattenIndex = 0;
          for (int j = 0; j < `+this.sliceDim+`; j++) {
            int index = round(getIndices(coords[0], j));
            flattenIndex += index * `+i+`;
          }
          setOutput(getX(flattenIndex, coords[1]));
        }
      `};function Hf(r,t){var e=$e();return Ll(r,t,e.version+`
    precision highp float;
    `+e.attribute+` vec3 clipSpacePos;
    `+e.attribute+` vec2 uv;
    `+e.varyingVs+` vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function qf(r,t){return Gl(r,t,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function jf(r,t){return Hl(r,t,new Uint16Array([0,1,2,2,1,3]))}function yr(r,t,e,n,o,i,a){jl(e,n);var s=ql(r,t),u=r.TEXTURE_2D;return J(r,t,function(){return r.bindTexture(u,s)}),J(r,t,function(){return r.texParameteri(u,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE)}),J(r,t,function(){return r.texParameteri(u,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}),J(r,t,function(){return r.texParameteri(u,r.TEXTURE_MIN_FILTER,r.NEAREST)}),J(r,t,function(){return r.texParameteri(u,r.TEXTURE_MAG_FILTER,r.NEAREST)}),J(r,t,function(){return r.texImage2D(u,0,o,e,n,0,i,a,null)}),J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)}),s}function $f(r,t,e,n,o){var i=uo(e,n);return yr(r,t,i[0],i[1],o.internalFormatFloat,o.textureFormatFloat,r.FLOAT)}function Kf(r,t,e,n,o){var i=uo(e,n);return yr(r,t,i[0],i[1],o.internalFormatHalfFloat,o.textureFormatFloat,o.textureTypeHalfFloat)}function Xf(r,t,e,n,o){var i=uo(e,n);return yr(r,t,i[0],i[1],r.RGBA,r.RGBA,r.UNSIGNED_BYTE)}function Yf(r,t,e,n,o){var i=gr(e,n);return yr(r,t,i[0],i[1],o.internalFormatPackedFloat,r.RGBA,r.FLOAT)}function Jf(r,t,e,n,o){var i=gr(e,n);return yr(r,t,i[0],i[1],o.internalFormatPackedHalfFloat,r.RGBA,o.textureTypeHalfFloat)}function Qf(r,t,e,n){return J(r,t,function(){return r.bindBuffer(r.ARRAY_BUFFER,n)}),qa(r,t,e,"clipSpacePos",n,3,20,0)&&qa(r,t,e,"uv",n,2,20,12)}function Zf(r,t,e,n,o,i,a){var s,u,c;J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)}),i instanceof Uint8Array?(s=new Uint8Array(n*o*4),u=r.UNSIGNED_BYTE,c=r.RGBA):(s=new Float32Array(n*o*4),u=r.FLOAT,c=a.internalFormatPackedFloat),s.set(i),J(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,c,n,o,0,r.RGBA,u,s)}),J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function ed(r,t,e,n){J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,e)}),n.data instanceof Uint8Array?J(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,n.width,n.height,0,r.RGBA,r.UNSIGNED_BYTE,n.data)}):J(r,t,function(){return r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,n)}),J(r,t,function(){return r.bindTexture(r.TEXTURE_2D,null)})}function td(r,t,e,n,o){var i=r.createBuffer();J(r,t,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,i)});var a=16*e*n;return J(r,t,function(){return r.bufferData(r.PIXEL_PACK_BUFFER,a,r.STREAM_READ)}),J(r,t,function(){return r.readPixels(0,0,n,e,r.RGBA,r.FLOAT,0)}),J(r,t,function(){return r.bindBuffer(r.PIXEL_PACK_BUFFER,null)}),i}function nd(r,t,e){var n=r,o=new Float32Array(e);return n.bindBuffer(n.PIXEL_PACK_BUFFER,t),n.getBufferSubData(n.PIXEL_PACK_BUFFER,0,o),n.bindBuffer(n.PIXEL_PACK_BUFFER,null),o}function rd(r,t,e,n,o){var i=uo(e,n),a=i[0],s=i[1],u=new Uint8Array(e*n*4);return J(r,t,function(){return r.readPixels(0,0,a,s,o.downloadTextureFormat,r.UNSIGNED_BYTE,u)}),new Float32Array(u.buffer)}function od(r,t,e,n,o,i,a,s){var u=r,c=new Float32Array(function(l,h){var f=gr(l,h);return f[0]*f[1]*4}(i,a));return u.bindBuffer(u.PIXEL_PACK_BUFFER,t),u.getBufferSubData(u.PIXEL_PACK_BUFFER,0,c),u.bindBuffer(u.PIXEL_PACK_BUFFER,null),c}function id(r,t,e,n){var o=new Float32Array(e*n*4);return J(r,t,function(){return r.readPixels(0,0,n,e,r.RGBA,r.FLOAT,o)}),o}var ad=function(){function r(t){this.outputTexture=null,this.program=null,this.disposed=!1,this.vertexAttrsAreBound=!1,this.itemsToPoll=[];var e=M().getNumber("WEBGL_VERSION");t!=null?(this.gl=t,Nl(e,t)):this.gl=Mt(e);var n="WEBGL_color_buffer_float";if(M().getNumber("WEBGL_VERSION")===1){if(this.textureFloatExtension=Ir(this.gl,this.debug,"OES_texture_float"),ft(this.gl,"OES_texture_half_float"))this.textureHalfFloatExtension=Ir(this.gl,this.debug,"OES_texture_half_float");else if(M().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.");if(this.colorBufferFloatExtension=this.gl.getExtension(n),ft(this.gl,"EXT_color_buffer_half_float"))this.colorBufferHalfFloatExtension=Ir(this.gl,this.debug,"EXT_color_buffer_half_float");else if(M().get("WEBGL_FORCE_F16_TEXTURES"))throw new Error("GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.")}else if(n="EXT_color_buffer_float",ft(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else{if(!ft(this.gl,"EXT_color_buffer_half_float"))throw new Error("GL context does not support color renderable floats");this.colorBufferHalfFloatExtension=this.gl.getExtension("EXT_color_buffer_half_float")}this.vertexBuffer=qf(this.gl,this.debug),this.indexBuffer=jf(this.gl,this.debug),this.framebuffer=$l(this.gl,this.debug),this.textureConfig=Ni(this.gl,this.textureHalfFloatExtension)}return Object.defineProperty(r.prototype,"debug",{get:function(){return M().getBool("DEBUG")},enumerable:!0,configurable:!0}),r.prototype.dispose=function(){var t=this;if(!this.disposed){this.program!=null&&console.warn("Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing."),this.outputTexture!=null&&console.warn("Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.");var e=this.gl;J(e,this.debug,function(){return e.finish()}),J(e,this.debug,function(){return e.bindFramebuffer(e.FRAMEBUFFER,null)}),J(e,this.debug,function(){return e.deleteFramebuffer(t.framebuffer)}),J(e,this.debug,function(){return e.bindBuffer(e.ARRAY_BUFFER,null)}),J(e,this.debug,function(){return e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)}),J(e,this.debug,function(){return e.deleteBuffer(t.indexBuffer)}),this.disposed=!0}},r.prototype.createFloat32MatrixTexture=function(t,e){return this.throwIfDisposed(),$f(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createFloat16MatrixTexture=function(t,e){return this.throwIfDisposed(),Kf(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createUnsignedBytesMatrixTexture=function(t,e){return this.throwIfDisposed(),Xf(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.uploadPixelDataToTexture=function(t,e){this.throwIfDisposed(),ed(this.gl,this.debug,t,e)},r.prototype.uploadDenseMatrixToTexture=function(t,e,n,o){this.throwIfDisposed(),Zf(this.gl,this.debug,t,e,n,o,this.textureConfig)},r.prototype.createFloat16PackedMatrixTexture=function(t,e){return this.throwIfDisposed(),Jf(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.createPackedMatrixTexture=function(t,e){return this.throwIfDisposed(),Yf(this.gl,this.debug,t,e,this.textureConfig)},r.prototype.deleteMatrixTexture=function(t){var e=this;this.throwIfDisposed(),this.outputTexture===t&&(ja(this.gl,this.debug,this.framebuffer),this.outputTexture=null),J(this.gl,this.debug,function(){return e.gl.deleteTexture(t)})},r.prototype.downloadByteEncodedFloatMatrixFromOutputTexture=function(t,e,n){var o=this;return this.downloadMatrixDriver(t,function(){return rd(o.gl,o.debug,e,n,o.textureConfig)})},r.prototype.downloadPackedMatrixFromBuffer=function(t,e,n,o,i,a){return od(this.gl,t,0,0,0,i,a,this.textureConfig)},r.prototype.downloadFloat32MatrixFromBuffer=function(t,e){return nd(this.gl,t,e)},r.prototype.createBufferFromTexture=function(t,e,n){this.bindTextureToFrameBuffer(t);var o=td(this.gl,this.debug,e,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),o},r.prototype.createAndWaitForFence=function(){var t=this.createFence(this.gl);return this.pollFence(t)},r.prototype.createFence=function(t){var e,n,o=this;if(M().getBool("WEBGL_FENCE_API_ENABLED")){var i=t,a=i.fenceSync(i.SYNC_GPU_COMMANDS_COMPLETE,0);t.flush(),n=function(){var s=i.clientWaitSync(a,0,0);return s===i.ALREADY_SIGNALED||s===i.CONDITION_SATISFIED},e=a}else M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")>0?(e=this.beginQuery(),this.endQuery(),n=function(){return o.isQueryAvailable(e,M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))}):n=function(){return!0};return{query:e,isFencePassed:n}},r.prototype.downloadMatrixFromPackedTexture=function(t,e,n){var o=this;return this.downloadMatrixDriver(t,function(){return id(o.gl,o.debug,e,n)})},r.prototype.createProgram=function(t){this.throwIfDisposed();var e=this.gl,n=Wl(e,this.debug,t),o=Hf(e,this.debug),i=zl(e,this.debug);return J(e,this.debug,function(){return e.attachShader(i,o)}),J(e,this.debug,function(){return e.attachShader(i,n)}),Ul(e,this.debug,i),this.debug&&Lo(e,this.debug,i),this.vertexAttrsAreBound||(this.setProgram(i),this.vertexAttrsAreBound=Qf(e,this.debug,this.program,this.vertexBuffer)),i},r.prototype.deleteProgram=function(t){var e=this;this.throwIfDisposed(),t===this.program&&(this.program=null),t!=null&&J(this.gl,this.debug,function(){return e.gl.deleteProgram(t)})},r.prototype.setProgram=function(t){var e=this;this.throwIfDisposed(),this.program=t,this.program!=null&&this.debug&&Lo(this.gl,this.debug,this.program),J(this.gl,this.debug,function(){return e.gl.useProgram(t)})},r.prototype.getUniformLocation=function(t,e,n){return n===void 0&&(n=!0),this.throwIfDisposed(),n?Xl(this.gl,this.debug,t,e):Yl(this.gl,t,e)},r.prototype.getAttributeLocation=function(t,e){var n=this;return this.throwIfDisposed(),J(this.gl,this.debug,function(){return n.gl.getAttribLocation(t,e)})},r.prototype.getUniformLocationNoThrow=function(t,e){return this.throwIfDisposed(),this.gl.getUniformLocation(t,e)},r.prototype.setInputMatrixTexture=function(t,e,n){this.throwIfDisposed(),this.throwIfNoProgram(),Jl(this.gl,this.debug,this.program,t,e,n)},r.prototype.setOutputMatrixTexture=function(t,e,n){this.setOutputMatrixTextureDriver(t,n,e)},r.prototype.setOutputPackedMatrixTexture=function(t,e,n){this.throwIfDisposed();var o=gr(e,n),i=o[0],a=o[1];this.setOutputMatrixTextureDriver(t,i,a)},r.prototype.setOutputMatrixWriteRegion=function(t,e,n,o){this.setOutputMatrixWriteRegionDriver(n,t,o,e)},r.prototype.setOutputPackedMatrixWriteRegion=function(t,e,n,o){throw new Error("setOutputPackedMatrixWriteRegion not implemented.")},r.prototype.debugValidate=function(){this.program!=null&&Lo(this.gl,this.debug,this.program),Ar(this.gl)},r.prototype.executeProgram=function(){this.throwIfDisposed(),this.throwIfNoProgram();var t=this.gl;this.debug&&this.debugValidate(),J(t,this.debug,function(){return t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0)})},r.prototype.blockUntilAllProgramsCompleted=function(){var t=this;this.throwIfDisposed(),J(this.gl,this.debug,function(){return t.gl.finish()})},r.prototype.getQueryTimerExtension=function(){return this.disjointQueryTimerExtension==null&&(this.disjointQueryTimerExtension=Ir(this.gl,this.debug,M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2?"EXT_disjoint_timer_query_webgl2":"EXT_disjoint_timer_query")),this.disjointQueryTimerExtension},r.prototype.getQueryTimerExtensionWebGL2=function(){return this.getQueryTimerExtension()},r.prototype.getQueryTimerExtensionWebGL1=function(){return this.getQueryTimerExtension()},r.prototype.beginQuery=function(){if(M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")===2){var t=this.gl,e=this.getQueryTimerExtensionWebGL2(),n=t.createQuery();return t.beginQuery(e.TIME_ELAPSED_EXT,n),n}var o=this.getQueryTimerExtensionWebGL1(),i=o.createQueryEXT();return o.beginQueryEXT(o.TIME_ELAPSED_EXT,i),i},r.prototype.endQuery=function(){if(M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION")!==2){var t=this.getQueryTimerExtensionWebGL1();t.endQueryEXT(t.TIME_ELAPSED_EXT)}else{var e=this.gl,n=this.getQueryTimerExtensionWebGL2();e.endQuery(n.TIME_ELAPSED_EXT)}},r.prototype.waitForQueryAndGetTime=function(t){return K(this,void 0,void 0,function(){var e=this;return X(this,function(n){switch(n.label){case 0:return[4,Wa(function(){return e.disposed||e.isQueryAvailable(t,M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))})];case 1:return n.sent(),[2,this.getQueryTime(t,M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION"))]}})})},r.prototype.getQueryTime=function(t,e){if(e===0)return null;if(e===2){var n=this.gl;return n.getQueryParameter(t,n.QUERY_RESULT)/1e6}var o=this.getQueryTimerExtensionWebGL1();return o.getQueryObjectEXT(t,o.QUERY_RESULT_EXT)/1e6},r.prototype.isQueryAvailable=function(t,e){if(e===0)return!0;if(e===2){var n=this.gl,o=this.getQueryTimerExtensionWebGL2(),i=n.getQueryParameter(t,n.QUERY_RESULT_AVAILABLE);return this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),i&&!this.disjoint}return i=(o=this.getQueryTimerExtensionWebGL1()).getQueryObjectEXT(t,o.QUERY_RESULT_AVAILABLE_EXT),this.disjoint==null&&(this.disjoint=this.gl.getParameter(o.GPU_DISJOINT_EXT)),i&&!this.disjoint},r.prototype.pollFence=function(t){var e=this;return new Promise(function(n){e.addItemToPoll(function(){return t.isFencePassed()},function(){return n()})})},r.prototype.pollItems=function(){for(var t=function(n){for(var o=0;o<n.length&&n[o]();++o);return o-1}(this.itemsToPoll.map(function(n){return n.isDoneFn})),e=0;e<=t;++e)(0,this.itemsToPoll[e].resolveFn)();this.itemsToPoll=this.itemsToPoll.slice(t+1)},r.prototype.addItemToPoll=function(t,e){var n=this;this.itemsToPoll.push({isDoneFn:t,resolveFn:e}),this.itemsToPoll.length>1||Wa(function(){return n.pollItems(),n.itemsToPoll.length===0})},r.prototype.bindTextureToFrameBuffer=function(t){this.throwIfDisposed(),Wo(this.gl,this.debug,t,this.framebuffer),this.debug&&Ar(this.gl)},r.prototype.unbindTextureToFrameBuffer=function(){this.outputTexture!=null?(Wo(this.gl,this.debug,this.outputTexture,this.framebuffer),this.debug&&Ar(this.gl)):ja(this.gl,this.debug,this.framebuffer)},r.prototype.downloadMatrixDriver=function(t,e){this.bindTextureToFrameBuffer(t);var n=e();return this.unbindTextureToFrameBuffer(),n},r.prototype.setOutputMatrixTextureDriver=function(t,e,n){this.throwIfDisposed();var o=this.gl;Wo(o,this.debug,t,this.framebuffer),this.debug&&Ar(o),this.outputTexture=t,J(o,this.debug,function(){return o.viewport(0,0,e,n)}),J(o,this.debug,function(){return o.scissor(0,0,e,n)})},r.prototype.setOutputMatrixWriteRegionDriver=function(t,e,n,o){var i=this;this.throwIfDisposed(),J(this.gl,this.debug,function(){return i.gl.scissor(t,e,n,o)})},r.prototype.throwIfDisposed=function(){if(this.disposed)throw new Error("Attempted to use disposed GPGPUContext.")},r.prototype.throwIfNoProgram=function(){if(this.program==null)throw new Error("No GPU program is currently set.")},r}();function is(r,t){if(r.length!==t.length)throw Error("Binary was compiled with "+r.length+" inputs, but was executed with "+t.length+" inputs");r.forEach(function(e,n){var o=e.logicalShape,i=t[n],a=i.shape;if(!We(o,a))throw Error("Binary was compiled with different shapes than the current args. Shapes "+o+" and "+a+" must match");if(!e.isUniform||!i.isUniform){var s=e.texShape,u=i.isUniform?null:i.texData.texShape;if(!We(s,u))throw Error("Binary was compiled with different texture shapes than the current args. Shape "+s+" and "+u+" must match")}})}var sd=function(r,t,e){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var n=e.filterWidth,o=e.inChannels,i=e.strideWidth,a=e.strideHeight,s=e.padInfo,u=e.outWidth,c=e.dilationWidth,l=e.dilationHeight,h=e.dataFormat,f=s.left,d=s.top,p=o*n,v=$e(),m=h==="channelsLast",g=m?0:1,y=m?1:2,b="",x=0;x<=1;x++)for(var w=0;w<=1;w++)b+=`
          blockIndex = rc.y + `+w+`;
          pos = rc.x + `+x+`;

          if(blockIndex < `+r[1]+" && pos < "+r[0]+`) {
            offsetY = int(blockIndex / (`+u+")) * "+a+" - "+d+`;
            d0 = offsetY + `+l+" * (pos / "+p+`);

            if(d0 < `+t[g]+` && d0 >= 0) {

              offsetX = int(mod(float(blockIndex), `+u+".) * "+i+". - "+f+`.);
              d1 = offsetX + `+c+" * (int(mod(float(pos), "+p+".) / "+o+`.));

              if(d1 < `+t[y]+` && d1 >= 0) {

                ch = int(mod(float(pos), `+o+`.));

                if (`+m+`) {
                  innerDims = vec2(d1, ch);
                  result[`+(2*x+w)+`] = getChannel(
                    getA(d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[`+(2*x+w)+`] = getChannel(
                    getA(ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec2 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        `+b+`

        `+v.output+` = result;
      }
    `},ud=function(r,t,e,n,o){this.variableNames=["x"],this.outputShape=[];var i,a=t,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+n+") * sum";i=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -`+a+"; j <= "+a+`; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  `+s+`) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * `+i+`;
        setOutput(val);
      }
    `},cd=function(r,t,e,n,o){this.variableNames=["inputImage","outputImage","dy"],this.outputShape=[],this.outputShape=r,this.depth=r[3],this.depthRadius=t,this.bias=e,this.alpha=n,this.beta=o,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < `+this.depth+`; ++d) {
          int depthBegin = int(max(0.0, float(d - `+t+`)));
          int depthEnd = int(min(float(`+this.depth+`),
              float(d + `+t+` + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = `+this.depth+`;

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(`+n+") * norm + float("+e+`);

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(`+n+`)
                * float(`+o+`)
                * getInputImage(b ,r ,c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * `+o+`);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `},ld=function(r,t,e,n,o){this.variableNames=["x"],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;var i,a=t,s=r[3]-1;this.outputShape=r;var u="float("+e+") + float("+n+") * sum";i=o===.5?"inversesqrt("+u+")":o===1?"1.0/("+u+")":"exp(log("+u+") * float(-"+o+"));",this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < `+this.outputShape[3]+`;
        bool hasNextRow = c < `+this.outputShape[2]+`;

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - `+a+`;
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - `+a+"; j <= "+a+`; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(`+s+`));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * `+i+`;
        setOutput(result);
      }
    `},hd=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideHeight,e=r.strideWidth,n=r.dilationHeight,o=r.effectiveFilterHeight,i=r.effectiveFilterWidth,a=o-1-r.padInfo.top,s=i-1-r.padInfo.left,u=o*i-1;this.userCode=`
      const ivec2 pads = ivec2(`+a+", "+s+`);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < `+o+`;
          wR += `+n+`) {
          float dyR = float(dyRCorner + wR) / `+t+`.0;

          if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < `+i+`; wC++) {
            float dyC = float(dyCCorner + wC) / `+e+`.0;

            if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = `+u+` - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * `+i+` + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `},fd=function(r){this.variableNames=["dy","maxPos"],this.outputShape=r.inShape;var t=r.strideDepth,e=r.strideHeight,n=r.strideWidth,o=r.dilationDepth,i=r.dilationHeight,a=r.dilationWidth,s=r.effectiveFilterDepth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=s-1-r.padInfo.front,h=u-1-r.padInfo.top,f=c-1-r.padInfo.left,d=s*u*c-1;this.userCode=`
      const ivec3 pads = ivec3(`+l+", "+h+", "+f+`);

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < `+s+`;
           wD += `+o+`) {
          float dyD = float(dyDCorner + wD) / `+t+`.0;

          if (dyD < 0.0 || dyD >= `+r.outDepth+`.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < `+u+`;
              wR += `+i+`) {
            float dyR = float(dyRCorner + wR) / `+e+`.0;

            if (dyR < 0.0 || dyR >= `+r.outHeight+`.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < `+c+`;
                wC += `+a+`) {
              float dyC = float(dyCCorner + wC) / `+n+`.0;

              if (dyC < 0.0 || dyC >= `+r.outWidth+`.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = `+d+` -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * `+u+" * "+c+` +
                  wR * `+c+` + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `},Ho=function(r,t,e,n,o,i,a){e===void 0&&(e=!1),n===void 0&&(n=!1),o===void 0&&(o=!1),i===void 0&&(i=null),a===void 0&&(a=!1),this.variableNames=["matrixA","matrixB"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t;var s=e?r[1]:r[2],u=Math.ceil(s/2),c=e?"i * 2, rc.y":"rc.y, i * 2",l=n?"rc.z, i * 2":"i * 2, rc.z",h=e?["a.xxyy","a.zzww"]:["a.xxzz","a.yyww"],f=n?["b.xzxz","b.ywyw"]:["b.xyxy","b.zwzw"],d="",p="";i&&(d=a?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          `+i+`
        }`:`vec4 activation(vec4 x) {
          `+i+`
        }`,p="result = activation(result);");var v=o?"result += getBiasAtOutCoords();":"";o&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),this.userCode=`
      `+d+`

      const float sharedDimension = `+u+`.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        for (int i = 0; i < `+u+`; i++) {
          vec4 a = getMatrixA(rc.x, `+c+`);
          vec4 b = getMatrixB(rc.x, `+l+`);

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (`+h[0]+" * "+f[0]+`);
          result += (`+h[1]+" * "+f[1]+`);
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        `+v+`

        `+p+`

        setOutput(result);
      }
    `},dd=function(){function r(t,e,n){this.variableNames=["probs"],this.outputShape=[t,n],this.userCode=`
      uniform float seed;

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < `+(e-1)+`; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(`+(e-1)+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;return function(n,o){e.seedLoc==null&&(e.seedLoc=n.getUniformLocation(o,"seed")),n.gl.uniform1f(e.seedLoc,t)}},r}(),pd=function(r,t,e,n){this.variableNames=["indices"],this.outputShape=[r,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(`+n+"), float("+e+`),
                      float(index == coords.y)));
      }
    `},vd=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=r;var t=r.length;if(t===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{var e=Qe("rc",t),n=be(t),o=function(s,u,c){if(s===1)return"rc > "+u[0];for(var l="",h=s-2;h<s;h++)l+=c[h]+" >= "+u[h],h<s-1&&(l+="||");return l}(t,r,e),i=function(s,u,c,l){if(s===1)return"";var h=l.slice(-2);return`
    int r = `+h[0]+`;
    int c = `+h[1]+`;
    int rp1 = r + 1;
    int cp1 = c + 1;

    bool cEdge = cp1 >= `+u+`;
    bool rEdge = rp1 >= `+c+`;
  `}(t,r[r.length-1],r[r.length-2],e),a=function(s,u){var c=s.length,l=function(h,f){for(var d=[],p=0;p<=1;p++)for(var v=0;v<=1;v++){for(var m=(p===0?"r":"rp1")+", "+(v===0?"c":"cp1"),g=2;g<h;g++)m=f[f.length-1-g]+","+m;d.push(m)}return d}(c,u);return c===1?`getA(rc),
            rc + 1 >= `+s[0]+` ? 0. : getA(rc + 1),
            0, 0`:"getA("+l[0]+`),
          cEdge ? 0. : getA(`+l[1]+`),
          rEdge ? 0. : getA(`+l[2]+`),
          rEdge || cEdge ? 0. : getA(`+l[3]+")"}(r,e);this.userCode=`
        void main() {
          `+n+` rc = getOutputCoords();

          if(`+o+`) {
            setOutput(vec4(0));
          } else {
            `+i+`

            setOutput(vec4(`+a+`));
          }
        }
      `}},md=function(r,t,e){this.variableNames=["x"],this.outputShape=t.map(function(u,c){return u[0]+r[c]+u[1]});var n=r.length,o=be(n),i=t.map(function(u){return u[0]}).join(","),a=t.map(function(u,c){return u[0]+r[c]}).join(","),s=["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,n);this.userCode=n!==1?`
      `+o+" start = "+o+"("+i+`);
      `+o+" end = "+o+"("+a+`);

      void main() {
        `+o+` outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(float(`+e+`));
        } else {
          `+o+` coords = outC - start;
          setOutput(getX(`+s+`));
        }
      }
    `:`
        int start = `+i+`;
        int end = `+a+`;

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(float(`+e+`));
          } else {
            setOutput(getX(outC - start));
          }
        }
      `},gd=function(r,t,e){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map(function(m,g){return m[0]+r[g]+m[1]});for(var n=r.length,o=be(n),i=t.map(function(m){return m[0]}).join(","),a=t.map(function(m,g){return m[0]+r[g]}).join(","),s=Qe("rc",n),u=Qe("source",n),c=s[n-1]+" < "+this.outputShape[n-1],l=n===1?"source":"vec2("+u.slice(-2).join()+")",h=[o+" rc = outputLoc;",s[n-1]+` += 1;
       if(`+c+`) {
      `,n===1?"":`}
       rc = outputLoc;
       `+s[n-2]+` += 1;
       if(`+s[n-2]+" < "+this.outputShape[n-2]+") {",n===1?"":"  "+s[n-1]+` += 1;
         if(`+c+") {"],f=n===1?"rc < start || rc >= end":"any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))",d="",p=0,v=n===1?2:4;p<v;p++)d+=`
        `+h[p]+`
        if (`+f+`) {
          result[`+p+"] = float("+e+`);
        } else {
          `+o+` source = rc - start;
          result[`+p+"] = getChannel(getX("+u.join()+"), "+l+`);
        }
      `;d+=n===1?"} ":"}}",this.userCode=`
      const `+o+" start = "+o+"("+i+`);
      const `+o+" end = "+o+"("+a+`);

      void main() {
        `+o+` outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        `+d+`
        setOutput(result);
      }
    `},qo=function(r,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideHeight,i=r.strideWidth,a=r.dilationHeight,s=r.dilationWidth,u=r.effectiveFilterHeight,c=r.effectiveFilterWidth,l=r.padInfo.top,h=r.padInfo.left;this.outputShape=r.outShape;var f=t==="avg",d="0.0";if(f||(d="-1.0 / 1e-20"),e)this.userCode=`
        const ivec2 strides = ivec2(`+o+", "+i+`);
        const ivec2 pads = ivec2(`+l+", "+h+`);

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < `+u+`;
              wR += `+a+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+c+`;
                wC += `+s+`) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= `+r.inWidth+`) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = wR * `+c+` + wC;
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var p=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(p="avgValue / count");var v=4*Math.floor(n/4),m=n%4,g=`
      if (`+f+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(`+o+", "+i+`);
      const ivec2 pads = ivec2(`+l+", "+h+`);
      const float initializationValue = `+d+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+d+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < `+u+`;
            wR += `+a+`) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= `+r.inHeight+`) {
            continue;
          }

          for (int wC = 0; wC < `+v+`; wC += 4) {
            int xC = xCCorner + wC * `+s+`;

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              getValue(batch, xR, xC + 3 * `+s+`, d)
            );

            `+g+`
          }

          int xC = xCCorner + `+v+`;
          if (`+(m===1)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(m===2)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              initializationValue,
              initializationValue
            );

            `+g+`
          } else if (`+(m===3)+`) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + `+s+`, d),
              getValue(batch, xR, xC + 2 * `+s+`, d),
              initializationValue
            );

            `+g+`
          }
        }
        setOutput(`+p+`);
      }
    `}},jo=function(r,t,e){if(this.variableNames=["x"],t==="avg"&&e)throw new Error("Cannot compute positions for average pool.");var n=r.filterWidth,o=r.strideDepth,i=r.strideHeight,a=r.strideWidth,s=r.dilationDepth,u=r.dilationHeight,c=r.dilationWidth,l=r.effectiveFilterDepth,h=r.effectiveFilterHeight,f=r.effectiveFilterWidth,d=r.padInfo.front,p=r.padInfo.top,v=r.padInfo.left;this.outputShape=r.outShape;var m=t==="avg",g="0.0";if(m||(g="-1.0 / 1e-20"),e)this.userCode=`
        const ivec3 strides =
            ivec3(`+o+", "+i+", "+a+`);
        const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < `+l+`;
              wD += `+s+`) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= `+r.inDepth+`) {
              continue;
            }

            for (int wR = 0; wR < `+h+`;
                wR += `+u+`) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= `+r.inHeight+`) {
                continue;
              }

              for (int wC = 0; wC < `+f+`;
                  wC += `+c+`) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= `+r.inWidth+`) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition =
                      wD * `+h+" * "+f+` +
                      wR * `+f+` + wC;;
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;else{var y=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="avg"&&(y="avgValue / count");var b=4*Math.floor(n/4),x=n%4,w=`
      if (`+m+`) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(`+o+", "+i+", "+a+`);
      const ivec3 pads = ivec3(`+d+", "+p+", "+v+`);
      const float initializationValue = `+g+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= `+r.inWidth+`) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(`+g+`);
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < `+l+`;
            wD += `+s+`) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= `+r.inDepth+`) {
            continue;
          }

          for (int wR = 0; wR < `+h+`;
            wR += `+u+`) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= `+r.inHeight+`) {
              continue;
            }

            for (int wC = 0; wC < `+b+`; wC += 4) {
              int xC = xCCorner + wC * `+c+`;

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                getValue(batch, xD, xR, xC + 3 * `+c+`, ch)
              );

              `+w+`
            }

            int xC = xCCorner + `+b+`;
            if (`+(x===1)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(x===2)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                initializationValue,
                initializationValue
              );

              `+w+`
            } else if (`+(x===3)+`) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + `+c+`, ch),
                getValue(batch, xD, xR, xC + 2 * `+c+`, ch),
                initializationValue
              );

              `+w+`
            }
          }
          setOutput(`+y+`);
        }
      }
    `}},yd=function(r,t){this.variableNames=["x"];var e=r.windowSize,n=r.batchSize,o=r.inSize,i=Math.ceil(o/e);this.outputShape=[n,i];var a="0.0",s="";t==="prod"?a="1.0":t==="min"?(a="1.0 / 1e-20",s="min"):t==="max"&&(a="-1.0 / 1e-20",s="max");var u=t+"("+t+"("+t+"(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])";t==="sum"?u="sumValue":t==="prod"?u="prodValue":t==="all"?u="allValue":t==="any"&&(u="anyValue");var c=4*Math.floor(e/4),l=e%4,h=`
      if (`+(t==="sum")+`) {
        sumValue += dot(values, ones);
      } else if (`+(t==="prod")+`) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = `+s+`(values, minMaxValue);
      }
    `,f="vec4";t==="all"?(a="1.0",h=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f="bvec4"):t==="any"&&(a="0.0",h=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f="bvec4");var d="";o%e>0&&(d=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = `+a+`;
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        `+d+`
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * `+e+`;

        vec4 minMaxValue = vec4(`+a+`);
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < `+c+`; i += 4) {
          int inIdx = inOffset + i;
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          `+h+`
        }

        int inIdx = inOffset + `+c+`;
        if (`+(l===1)+`) {
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          `+h+`
        } else if (`+(l===2)+`) {
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          `+h+`
        } else if (`+(l===3)+`) {
          `+f+" values = "+f+`(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          `+h+`
        }
        setOutput(`+u+`);
      }
    `},xd=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r;for(var e="",n=0;n<4;n++){var o="thisRC = rc;";n%2==1&&(o+="thisRC.z += 1;"),n>1&&(o+="thisRC.y += 1;"),e+=`
        `+o+`
        `+(n>0?"if(thisRC.y < rows && thisRC.z < cols){":"")+`
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[`+n+`] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        `+(n>0?"}":"")+`
      `}this.userCode=`
      
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      `+mn(["r","c","d"],t)+`
      return ivec3(r, c, d);
    }
  
      `+Gi(r)+`

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = `+r[1]+`;
        int cols = `+r[2]+`;

        `+e+`

        setOutput(result);
      }
    `},bd=function(r,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var n=t.shape,o=n[1],i=n[2],a=r.shape,s=a[1],u=a[2],c=[e&&s>1?o-1:o,e&&u>1?i-1:i],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],h=c[0]/l[0],f=c[1]/l[1],d=1/h,p=1/f,v=2*Math.ceil(d)+2,m=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+h+`);
        const float widthScale = float(`+f+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+v+`);
        const int winWidth = int(`+m+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), `+(o-1)+`.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), `+(i-1)+`.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},wd=function(r,t,e,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],i=r[1],a=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?i-1:i,n&&e>1?a-1:a],c=[n&&t>1?t-1:t,n&&e>1?e-1:e];this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+i+".0, "+a+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(sourceFracIndexRC);
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `},Cd=function(r,t,e,n){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];var o=r[0],i=r[1],a=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?i-1:i,n&&e>1?a-1:a],c=[n&&t>1?t-1:t,n&&e>1?e-1:e];this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`,
          `+u[1]/c[1]+`);
      const vec3 inputShapeRC = vec3(`+i+".0, "+a+`.0,
                                     `+a+`.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = vec3(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(sourceFracIndexRC);
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < `+(s-1)+`;
        bool hasNextRow = coords.z < `+(e-1)+`;

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `},_d=function(r,t,e){this.variableNames=["dy"],this.outputShape=[],this.outputShape=t.shape;var n=t.shape,o=n[1],i=n[2],a=r.shape,s=a[1],u=a[2],c=[e&&s>1?o-1:o,e&&u>1?i-1:i],l=[e&&s>1?s-1:s,e&&u>1?u-1:u],h=c[0]/l[0],f=c[1]/l[1],d=1/h,p=1/f,v=2*Math.ceil(d)+2,m=2*Math.ceil(p)+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(`+h+`);
        const float widthScale = float(`+f+`);

        const float invHeightScale = float(`+d+`);
        const float invWidthScale = float(`+p+`);

        const int winHeight = int(`+v+`);
        const int winWidth = int(`+m+`);

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= `+s+`) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= `+u+`) {
              continue;
            }

            float sourceFracRow =
              float(`+c[0]+`) *
                (float(dyR) / float(`+l[0]+`));

            float sourceFracCol =
                float(`+c[1]+`) *
                  (float(dyC) / float(`+l[1]+`));

            int sourceNearestRow = int(min(
                float(int(`+o+`) - 1),
                `+e+` ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(`+i+`) - 1),
                `+e+` ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `},Ed=function(r,t,e,n){this.variableNames=["A"],this.outputShape=[];var o=r[0],i=r[1],a=r[2],s=r[3];this.outputShape=[o,t,e,s];var u=[n&&t>1?i-1:i,n&&e>1?a-1:a],c=[n&&t>1?t-1:t,n&&e>1?e-1:e],l=n?"0.5":"0.0";this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          `+u[0]/c[0]+`,
          `+u[1]/c[1]+`);
      const vec2 inputShapeRC = vec2(`+i+".0, "+a+`.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = vec2(yRC) * effectiveInputOverOutputRatioRC;

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + `+l+`)));

        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `},Id=function(r,t){this.variableNames=["x"];var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");if(this.outputShape=r,e!==1){var n=r.map(function(i,a){return function(s){return t.indexOf(s)!==-1&&r[s]!==1?r[s]+" - coords["+s+"] - 1":"coords["+s+"]"}(a)}).join(","),o=be(e);this.userCode=`
      void main() {
        `+o+` coords = getOutputCoords();
        setOutput(getX(`+n+`));
      }
    `}else this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(`+r[0]+` - coord - 1));
        }
      `},Ad=function(r,t){this.variableNames=["x"],this.packedInputs=!0,this.packedOutput=!0;var e=r.length;if(e>4)throw new Error("WebGL backend: Reverse of rank-"+e+" tensor is not yet supported");this.outputShape=r;var n=Qe("rc",e),o=n[e-1]+" + 1 < "+this.outputShape[e-1],i=n[e-2]+" + 1 < "+this.outputShape[e-2],a=be(e);function s(u){var c=r.map(function(l,h){return function(f,d){return t.indexOf(f)!==-1&&r[f]!==1?r[f]+" - "+d[f]+" - 1":""+d[f]}(h,u)});return"getChannel(getX("+c.join(",")+"), vec2("+c.slice(-2).join(",")+"))"}this.userCode=e===1?`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(`+r[0]+` - rc - 1),
            `+r[0]+` - rc - 1);
          if(`+o+`){
              result.g = getChannel(getX(`+r[0]+` - (rc  + 1) - 1),
                `+r[0]+` - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:`
        void main() {
          `+a+` rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = `+function(u){return s(u)}(n.slice())+`;
          if(`+o+`){
            result.g = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",s(u)}(n.slice())+`;
          }
          if(`+i+`) {
            result.b = `+function(u){return u[e-2]="("+u[e-2]+" + 1)",s(u)}(n.slice())+`;
            if(`+o+`) {
              result.a = `+function(u){return u[e-1]="("+u[e-1]+" + 1)",u[e-2]="("+u[e-2]+" + 1)",s(u)}(n.slice())+`;
            }
          }
          setOutput(result);
        }
    `},as=function(r,t,e,n,o,i,a){this.variableNames=["updates","indices","defaultValue"],this.outputShape=i;var s=be(o.length),u=be(i.length),c="";e===1?c="i":e===2&&(c="i, j");var l="getIndices("+c+")",h="";n===1?h="i":n===2&&(h="i, coords[1]");var f="getUpdates("+h+")",d=t>1?"strides[j]":"strides";this.userCode=`
        `+s+" strides = "+s+"("+o+`);

        void main() {
          `+u+` coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < `+r+`; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < `+t+`; j++) {
              int index = round(`+l+`);
              flattenedIndex += index * `+d+`;
            }
            if (flattenedIndex == coords[0]) {
              sum += `+f+`;
              found = true;
            }
          }
          setOutput(mix(getDefaultValue(), sum, float(found)));
        }
      `},kd=function(r,t){this.variableNames=["x","segmentIds"];var e=r.windowSize,n=r.batchSize,o=r.inSize,i=r.numSegments,a=i*Math.ceil(o/e);this.outputShape=[n,a];var s=4*Math.floor(e/4),u=e%4,c=`
        sumValue += dot(values, segFilter);
    `,l="";o%e>0&&(l=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return initializationValue;
        }
      `);var h="";o%e>0&&(h=`
        if (inIdx < 0 || inIdx >= `+o+`) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        `+l+`
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        `+h+`
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          `+i+")) * float("+e+`));
        int currentSeg = int(mod(float(outIdx), float(`+i+`)));

        float sumValue = 0.0;

        for (int i = 0; i < `+s+`; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          `+c+`
        }

        int inIdx = inOffset + `+s+`;
        if (`+(u===1)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          `+c+`
        } else if (`+(u===2)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          `+c+`
        } else if (`+(u===3)+`) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          `+c+`
        }
        setOutput(sumValue);
      }
    `},Rd=function(r,t,e){var n,o;if(this.variableNames=["c","a","b"],this.outputShape=t,e>4)throw Error("Where for rank "+e+" is not yet supported");if(e===1)o="resRC",n="resRC";else{for(var i=["resRC.x","resRC.y","resRC.z","resRC.w"],a=[],s=[],u=0;u<t.length;u++)s.push(""+i[u]),u<r&&a.push(""+i[u]);n=a.join(),o=s.join()}var c=be(e);this.userCode=`
      void main() {
        `+c+` resRC = getOutputCoords();
        float cVal = getC(`+n+`);
        if (cVal >= 1.0) {
          setOutput(getA(`+o+`));
        } else {
          setOutput(getB(`+o+`));
        }
      }
    `},Sd=function(){function r(t){this.variableNames=["source"],this.outputShape=t,this.rank=t.length;var e,n=be(this.rank),o="uniform int start["+this.rank+"];",i=function(a){if(a===1)return"sourceLoc";if(a<=6)return $o.slice(0,a).map(function(s){return"sourceLoc."+s}).join(",");throw Error("Slicing for rank "+a+" is not yet supported")}(this.rank);e=`
        `+n+` sourceLoc;
        `+n+` coords = getOutputCoords();
        `+t.map(function(a,s){return"sourceLoc."+$o[s]+" = start["+s+"] + coords."+$o[s]+";"}).join(`
`)+`
      `,this.userCode=`
      `+o+`
      void main() {
        `+e+`
        setOutput(getSource(`+i+`));
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,o){e.startLoc==null&&(e.startLoc=n.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||n.gl.uniform1iv(e.startLoc,t)}},r}(),$o=["x","y","z","w","u","v"],Dd=function(){function r(t){this.variableNames=["source"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t,this.rank=t.length;var e=be(this.rank),n=Qe("coords",this.rank),o=Qe("sourceLoc",this.rank),i=this.rank===1?"sourceLoc":"vec2("+o.slice(-2).join()+")",a="getChannel(getSource("+o.join()+"), "+i+")",s=`
      result.x = `+a+`;
      if (++`+n[this.rank-1]+" < "+t[this.rank-1]+`) {
        ++`+o[this.rank-1]+`;
        result.y = `+a+`;
        --`+o[this.rank-1]+`;
      }
    `,u=this.rank===1?"":`
      --`+n[this.rank-1]+`;
      if (++`+n[this.rank-2]+" < "+t[this.rank-2]+`) {
        ++`+o[this.rank-2]+`;
        result.z = `+a+`;
        if (++`+n[this.rank-1]+" < "+t[this.rank-1]+`) {
          ++`+o[this.rank-1]+`;
          result.w = `+a+`;
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            `+e+"("+t.map(function(l,h){return"start["+h+"]"}).join()+");":t.map(function(l,h){return o[h]+" = "+n[h]+" + start["+h+"];"}).join(`
`);this.userCode=`
      uniform int start[`+this.rank+`];
      void main() {
        `+e+` coords = getOutputCoords();
        `+e+` sourceLoc;
        `+c+`
        vec4 result = vec4(0.);
        `+s+`
        `+u+`
        setOutput(result);
      }
    `}return r.prototype.getCustomSetupFunc=function(t){var e=this;if(t.length!==this.rank)throw Error("The rank ("+this.rank+") of the program must match the length of start ("+t.length+")");return function(n,o){e.startLoc==null&&(e.startLoc=n.getUniformLocationNoThrow(o,"start"),e.startLoc==null)||n.gl.uniform1iv(e.startLoc,t)}},r}(),Td=function(r,t,e){this.variableNames=["x"],this.outputShape=e;var n=e.length,o=be(e.length),i=be(e.length),a="";if(n===1)a="coords * strides + begin";else{var s=0;a=e.map(function(u,c){return s++,e.length===1?"coords * strides["+c+"] + begin["+c+"]":"coords["+(s-1)+"] * strides["+c+"] + begin["+c+"]"}).join(",")}this.userCode=`
      `+o+" begin = "+o+"("+r+`);
      `+o+" strides = "+o+"("+t+`);

      void main() {
        `+i+` coords = getOutputCoords();
        setOutput(getX(`+a+`));
      }
    `},Fd=function(){function r(t){this.gpgpu=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures={},this.logEnabled=!1,this.usedTextures={}}return r.prototype.acquireTexture=function(t,e,n){var o,i=ss(e,n),a=us(t,i,n);if(a in this.freeTextures||(this.freeTextures[a]=[]),a in this.usedTextures||(this.usedTextures[a]=[]),this.freeTextures[a].length>0){this.numFreeTextures--,this.numUsedTextures++,this.log();var s=this.freeTextures[a].shift();return this.usedTextures[a].push(s),s}return this.numUsedTextures++,this.log(),i===ot.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(t[0],t[1]):i===ot.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(t[0],t[1]):i===ot.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(t[0],t[1]):i===ot.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(t[0],t[1]):i===ot.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(t[0],t[1])),this.usedTextures[a].push(o),o},r.prototype.releaseTexture=function(t,e,n,o){if(this.freeTextures!=null){var i=us(e,ss(n,o),o);i in this.freeTextures||(this.freeTextures[i]=[]),this.freeTextures[i].push(t),this.numFreeTextures++,this.numUsedTextures--;var a=this.usedTextures[i],s=a.indexOf(t);if(s<0)throw new Error("Cannot release a texture that was never provided by this texture manager");a.splice(s,1),this.log()}},r.prototype.log=function(){if(this.logEnabled){var t=this.numFreeTextures+this.numUsedTextures;console.log("Free/Used",this.numFreeTextures+" / "+this.numUsedTextures,"("+t+")")}},r.prototype.getNumUsedTextures=function(){return this.numUsedTextures},r.prototype.getNumFreeTextures=function(){return this.numFreeTextures},r.prototype.dispose=function(){var t=this;if(this.freeTextures!=null){for(var e in this.freeTextures)this.freeTextures[e].forEach(function(n){t.gpgpu.deleteMatrixTexture(n)});for(var e in this.usedTextures)this.usedTextures[e].forEach(function(o){t.gpgpu.deleteMatrixTexture(o)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0}},r}();function ss(r,t){if(r===it.UPLOAD)return ot.PACKED_2X2_FLOAT32;if(r===it.RENDER||r==null)return function(e){return M().getBool("WEBGL_RENDER_FLOAT32_ENABLED")?e?ot.PACKED_2X2_FLOAT32:ot.UNPACKED_FLOAT32:e?ot.PACKED_2X2_FLOAT16:ot.UNPACKED_FLOAT16}(t);if(r===it.DOWNLOAD||r===it.PIXELS)return ot.PACKED_4X1_UNSIGNED_BYTE;throw new Error("Unknown logical texture type "+r)}function us(r,t,e){return r[0]+"_"+r[1]+"_"+t+"_"+e}var Nd=function(r,t){this.variableNames=["A"];for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[n]*t[n];this.outputShape=e,this.rank=e.length;var o=be(this.rank),i=function(a){var s=a.length;if(s>5)throw Error("Tile for rank "+s+" is not yet supported");if(s===1)return"imod(resRC, "+a[0]+")";for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u"],c=[],l=0;l<a.length;l++)c.push("imod("+u[l]+", "+a[l]+")");return c.join()}(r);this.userCode=`
      void main() {
        `+o+` resRC = getOutputCoords();
        setOutput(getA(`+i+`));
      }
    `},Pd=function(r,t){this.variableNames=["A"];for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[t[n]];this.outputShape=e,this.rank=e.length;var o=be(this.rank),i=function(a){var s=a.length;if(s>6)throw Error("Transpose for rank "+s+" is not yet supported");for(var u=["resRC.x","resRC.y","resRC.z","resRC.w","resRC.u","resRC.v"],c=new Array(s),l=0;l<a.length;l++)c[a[l]]=u[l];return c.join()}(t);this.userCode=`
    void main() {
      `+o+` resRC = getOutputCoords();
      setOutput(getA(`+i+`));
    }
    `},Md=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0;for(var e=new Array(r.length),n=0;n<e.length;n++)e[n]=r[t[n]];if(this.outputShape=e,this.rank=e.length,this.rank>6)throw Error("Packed transpose for rank "+this.rank+" is not yet supported.");var o=be(this.rank),i=_u("rc",this.rank),a=new Array(this.rank);for(n=0;n<t.length;n++)a[t[n]]=i[n];var s="vec2("+a.slice(-2).join()+")",u="++"+i[this.rank-1]+" < "+e[this.rank-1],c="getChannel(getA("+a.join()+"), "+s+")";this.userCode=`
    void main() {
      `+o+` rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = `+c+`;
      if(`+u+`) {
        result[1] = `+c+`;
      }
      --`+i[this.rank-1]+`;
      if(++`+i[this.rank-2]+" < "+e[this.rank-2]+`) {
        result[2] = `+c+`;
        if(`+u+`) {
          result[3] = `+c+`;
        }
      }
      setOutput(result);
    }
    `},Hi=1.7580993408473768,qi=1.0507009873554805,ie=function(r,t){this.variableNames=["A"],this.outputShape=r,this.userCode=`
      float unaryOperation(float x) {
        `+t+`
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `},yt="if (isnan(x)) return x;",Od="return x;",cs="return abs(x);",Ru=yt+`
  return (x < 0.0) ? 0.0 : x;
`,Su=yt+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,Du="return (x >= 0.0) ? x : (exp(x) - 1.0);",Bd=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = `+Hi+`;
  float scale = `+qi+`;
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,ls="return -x;",hs="return ceil(x);",fs="return floor(x);",ds="return exp(x);",ps="return exp(x) - 1.0;",Ld=yt+`
  return sin(x);
`,Wd=yt+`
  return cos(x);
`,Vd=yt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,zd=yt+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,Ud=yt+`
  return atan(x);
`,Gd=yt+"return log(x + sqrt(x * x + 1.0));",Hd=yt+`
  if (x < 1.0) return NAN;
  return log(x + sqrt(x * x - 1.0));`,qd=yt+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
  return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,Dr="return x;",jd="return x;",Tu=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Fu=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,Nu=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,er=function(r,t){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=r,this.userCode=`
      vec4 unaryOperation(vec4 x) {
        `+t+`
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `},$d=function(r){this.variableNames=["A"],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=r;var t=r.length,e=Qe("rc",t),n=be(t),o=function(s,u){if(s===1)return"rc";for(var c="",l=0;l<s;l++)c+=u[l],l<s-1&&(c+=",");return c}(t,e),i=e.slice(-2),a=t<=1?"rc":"vec2("+i.join(",")+")";this.userCode=`
      void main() {
        `+n+` rc = getOutputCoords();
        vec4 packedInput = getA(`+o+`);

        setOutput(getChannel(packedInput, `+a+`));
      }
    `},Tr={};function Fr(r,t){if(t===void 0&&(t=!1),r==="linear")return t?jd:Od;if(r==="relu")return t?Tu:Ru;if(r==="elu")return t?Nu:Du;if(r==="relu6")return t?Fu:Su;if(r==="prelu")return t?ku:Au;throw new Error("Activation "+r+" has not been implemented for the WebGL backend.")}var Kd=600,Xd=function(r){function t(e){var n,o=r.call(this)||this;if(o.pendingRead=new WeakMap,o.pendingDisposal=new WeakSet,o.dataRefCount=new WeakMap,o.numBytesInGPU=0,o.uploadWaitMs=0,o.downloadWaitMs=0,o.warnedAboutMemory=!1,o.pendingDeletes=0,o.disposed=!1,!M().getBool("HAS_WEBGL"))throw new Error("WebGL is not supported on this device");if(e==null){var i=Mt(M().getNumber("WEBGL_VERSION"));o.binaryCache=((n=M().getNumber("WEBGL_VERSION"))in Tr||(Tr[n]={}),Tr[n]),o.gpgpu=new ad(i),o.canvas=i.canvas,o.gpgpuCreatedLocally=!0}else o.gpgpu=e,o.binaryCache={},o.gpgpuCreatedLocally=!1,o.canvas=e.gl.canvas;return o.textureManager=new Fd(o.gpgpu),o.numMBBeforeWarning=M().global.screen==null?1024:M().global.screen.height*M().global.screen.width*window.devicePixelRatio*Kd/1024/1024,o.texData=new pu(o,T),o}return gt(t,r),t.prototype.numDataIds=function(){return this.texData.numDataIds()+(this.cpuBackend?this.cpuBackend.numDataIds():0)-this.pendingDeletes},t.prototype.write=function(e,n,o){if(M().getBool("DEBUG")&&this.checkNumericalProblems(e),o==="complex64"&&e!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");var i={};return this.texData.set(i,{shape:n,dtype:o,values:e,usage:it.UPLOAD}),i},t.prototype.move=function(e,n,o,i){if(M().getBool("DEBUG")&&this.checkNumericalProblems(n),i==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.texData.set(e,{shape:o,dtype:i,values:n,usage:it.UPLOAD})},t.prototype.readSync=function(e){var n=this.texData.get(e),o=n.values,i=n.dtype,a=n.complexTensors,s=n.slice,u=n.shape,c=n.isPacked;if(s!=null){var l=void 0;l=c?new er(u,Dr):new ie(u,Dr);var h=this.runWebGLProgram(l,[{dataId:e,shape:u,dtype:i}],i),f=this.readSync(h.dataId);return this.disposeData(h.dataId),f}if(o!=null)return this.convertAndCacheOnCPU(e);if(i==="string")return o;var d,p,v=this.activeTimers!=null;return v&&(d=Et()),i==="complex64"?p=wi(a.real.dataSync(),a.imag.dataSync()):p=this.getValuesFromTexture(e),v&&(this.downloadWaitMs+=Et()-d),this.convertAndCacheOnCPU(e,p)},t.prototype.read=function(e){return K(this,void 0,void 0,function(){var n,o,i,a,s,u,c,l,h,f,d,p,v,m,g,y,b,x,w,C,R,k;return X(this,function(I){switch(I.label){case 0:if(this.pendingRead.has(e))return n=this.pendingRead.get(e),[2,new Promise(function(A){return n.push(A)})];if(o=this.texData.get(e),i=o.values,a=o.shape,s=o.slice,u=o.dtype,c=o.complexTensors,l=o.isPacked,s!=null)return h=void 0,h=l?new er(a,Dr):new ie(a,Dr),f=this.runWebGLProgram(h,[{dataId:e,shape:a,dtype:u}],u),d=this.read(f.dataId),this.disposeData(f.dataId),[2,d];if(i!=null)return[2,this.convertAndCacheOnCPU(e)];if(!M().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")&&M().getNumber("WEBGL_VERSION")===2)throw new Error("tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.");return p=null,u!=="complex64"&&M().get("WEBGL_BUFFER_SUPPORTED")&&(v=this.decode(e),m=this.texData.get(v.dataId),p=(k=this.gpgpu).createBufferFromTexture.apply(k,[m.texture].concat(nr(a)))),this.pendingRead.set(e,[]),u==="complex64"?[3,2]:[4,this.gpgpu.createAndWaitForFence()];case 1:I.sent(),I.label=2;case 2:return u!=="complex64"?[3,4]:[4,Promise.all([c.real.data(),c.imag.data()])];case 3:return y=I.sent(),b=y[0],x=y[1],g=wi(b,x),[3,5];case 4:p==null?g=this.getValuesFromTexture(e):(w=Y(a),g=this.gpgpu.downloadFloat32MatrixFromBuffer(p,w)),I.label=5;case 5:return v!=null&&this.disposeData(v.dataId),C=this.convertAndCacheOnCPU(e,g),R=this.pendingRead.get(e),this.pendingRead.delete(e),R.forEach(function(A){return A(C)}),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e),this.pendingDeletes--),[2,C]}})})},t.prototype.checkNumericalProblems=function(e){if(e!=null)for(var n=0;n<e.length;n++){var o=e[n];if(!Ol(o))throw M().getBool("WEBGL_RENDER_FLOAT32_CAPABLE")?Error("The value "+o+" cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'"):Error("The value "+o+" cannot be represented on this device.")}},t.prototype.getValuesFromTexture=function(e){var n,o=this.texData.get(e),i=o.shape,a=o.dtype,s=o.isPacked,u=Y(i);if(M().getBool("WEBGL_DOWNLOAD_FLOAT_ENABLED")){var c=this.decode(e),l=this.texData.get(c.dataId),h=(n=this.gpgpu).downloadMatrixFromPackedTexture.apply(n,[l.texture].concat(nr(i))).subarray(0,u);return this.disposeData(c.dataId),h}var f=M().getBool("WEBGL_PACK")&&s===!0,d=f?Vo(i):i,p=f?new Of(d):new Mf(d),v=this.runWebGLProgram(p,[{shape:d,dtype:a,dataId:e}],"float32"),m=this.texData.get(v.dataId),g=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(m.texture,m.texShape[0],m.texShape[1]).subarray(0,u);return this.disposeData(v.dataId),g},t.prototype.time=function(e){return K(this,void 0,void 0,function(){var n,o,i,a,s,u,c;return X(this,function(l){switch(l.label){case 0:return n=this.activeTimers,o=[],i=!1,this.programTimersStack==null?(this.programTimersStack=o,i=!0):this.activeTimers.push(o),this.activeTimers=o,e(),a=Hn(this.activeTimers.map(function(h){return h.query})).filter(function(h){return h!=null}),s=Hn(this.activeTimers.map(function(h){return h.name})).filter(function(h){return h!=null}),this.activeTimers=n,i&&(this.programTimersStack=null),u={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[4,Promise.all(a)]:[3,2];case 1:return c=l.sent(),u.kernelMs=ml(c),u.getExtraProfileInfo=function(){return c.map(function(h,f){return{name:s[f],ms:h}}).map(function(h){return h.name+": "+h.ms}).join(", ")},[3,3];case 2:u.kernelMs={error:"WebGL query timers are not supported in this environment."},l.label=3;case 3:return this.uploadWaitMs=0,this.downloadWaitMs=0,[2,u]}})})},t.prototype.memory=function(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU}},t.prototype.startTimer=function(){return M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?this.gpgpu.beginQuery():{startMs:Et(),endMs:null}},t.prototype.endTimer=function(e){return M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?(this.gpgpu.endQuery(),e):(e.endMs=Et(),e)},t.prototype.getQueryTime=function(e){return K(this,void 0,void 0,function(){var n;return X(this,function(o){return M().getNumber("WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE")>0?[2,this.gpgpu.waitForQueryAndGetTime(e)]:[2,(n=e).endMs-n.startMs]})})},t.prototype.disposeData=function(e){if(!this.pendingDisposal.has(e)){if(this.pendingRead.has(e))return this.pendingDisposal.add(e),void this.pendingDeletes++;if(this.texData.has(e)){this.releaseGPUData(e);var n=this.texData.get(e).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.texData.delete(e)}}},t.prototype.releaseGPUData=function(e){var n=this.texData.get(e),o=n.texture,i=n.dtype,a=n.texShape,s=n.usage,u=n.isPacked,c=n.slice,l=c&&c.origDataId||e,h=this.dataRefCount.get(l);h>1?this.dataRefCount.set(l,h-1):(this.dataRefCount.delete(l),o!=null&&(this.numBytesInGPU-=this.computeBytes(a,i),this.textureManager.releaseTexture(o,a,s,u)));var f=this.texData.get(e);f.texture=null,f.texShape=null,f.isPacked=!1,f.slice=null},t.prototype.getTexture=function(e){return this.uploadToGPU(e),this.texData.get(e).texture},t.prototype.getDataInfo=function(e){return this.texData.get(e)},t.prototype.getCPUBackend=function(){return M().getBool("WEBGL_CPU_FORWARD")?(this.cpuBackend==null&&(this.cpuBackend=T.findBackend("cpu")),this.cpuBackend):null},t.prototype.shouldExecuteOnCPU=function(e,n){var o=this;return n===void 0&&(n=128),this.getCPUBackend()!=null&&e.every(function(i){return o.texData.get(i.dataId).texture==null&&i.size<n})},t.prototype.getGPGPUContext=function(){return this.gpgpu},t.prototype.complex=function(e,n){var o=this.makeOutput(e.shape,"complex64");return this.texData.get(o.dataId).complexTensors={real:T.keep(e.clone()),imag:T.keep(n.clone())},o},t.prototype.real=function(e){return this.texData.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.texData.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,n,o){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.slice(e,n,o);if(Y(o)===0)return Ge([],o,e.dtype);var i=this.texData.get(e.dataId).isPacked,a=fu(e.shape,n,o);if(i||!a){var s=M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Dd(o):new Sd(o),u=s.getCustomSetupFunc(n);return this.compileAndRun(s,[e],null,u)}return this.uploadToGPU(e.dataId),this.shallowSlice(e,n,o)},t.prototype.shallowSlice=function(e,n,o){var i=this.texData.get(e.dataId),a=this.makeOutput(o,e.dtype),s=this.texData.get(a.dataId);Object.assign(s,i),s.shape=o,s.dtype=e.dtype;var u=du(n,e.strides);i.slice&&(u+=i.slice.flatOffset),s.slice={flatOffset:u,origDataId:i.slice&&i.slice.origDataId||e.dataId};var c=this.dataRefCount.get(s.slice.origDataId)||1;return this.dataRefCount.set(s.slice.origDataId,c+1),a},t.prototype.stridedSlice=function(e,n,o,i){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.stridedSlice(e,n,o,i);var a=Li(n,o,i);if(a.some(function(u){return u===0}))return Ge([],a);var s=new Td(n,i,a);return this.compileAndRun(s,[e])},t.prototype.reverse=function(e,n){var o=M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Ad(e.shape,n):new Id(e.shape,n);return this.compileAndRun(o,[e])},t.prototype.concat=function(e,n){if(e[0].dtype==="complex64"){var o=e.map(function(d){return ht(d)}),i=e.map(function(d){return At(d)});return ze(this.concat(o,n),this.concat(i,n))}if(this.shouldExecuteOnCPU(e))return this.cpuBackend.concat(e,n);if(e.length===1)return e[0];if(e.length>M().getNumber("WEBGL_MAX_TEXTURES_IN_SHADER")){var a=Math.floor(e.length/2),s=this.concat(e.slice(0,a),n),u=this.concat(e.slice(a),n);return this.concat([s,u],n)}if(M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")&&e[0].rank>1){var c=new wf(e.map(function(d){return d.shape}),n);return this.compileAndRun(c,e)}var l=jn(e.map(function(d){return d.shape}),n),h=e.map(function(d){return d.as2D(-1,Y(d.shape.slice(n)))}),f=new bf(h.map(function(d){return d.shape}));return this.compileAndRun(f,h).reshape(l)},t.prototype.neg=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.neg(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,ls,e.dtype);var n=new ie(e.shape,ls);return this.compileAndRun(n,[e])},t.prototype.batchMatMul=function(e,n,o,i){var a=o?e.shape[2]:e.shape[1],s=i?n.shape[1]:n.shape[2],u=o?e.shape[1]:e.shape[2],c=e.shape[0];if((a===1||s===1)&&u>1e3){o&&(e=e.transpose([0,2,1])),i&&(n=n.transpose([0,2,1]));var l=s===1?e:e.as3D(c,u,1),h=s===1?2:1,f=s===1?n.as3D(c,1,u):n;return this.multiply(l,f).sum(h,!0)}var d=Ue(e.dtype,n.dtype),p=new Ho(e.shape,[c,a,s],o,i);return this.compileAndRun(p,[e,n],d)},t.prototype.fusedBatchMatMul=function(e){var n=e.a,o=e.b,i=e.transposeA,a=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=i?n.shape[2]:n.shape[1],h=a?o.shape[1]:o.shape[2],f=n.shape[0],d=Ue(n.dtype,o.dtype),p=s!=null,v=c!=null,m=u?Fr(u,!0):null,g=new Ho(n.shape,[f,l,h],i,a,p,m,v),y=[n,o];return s&&y.push(s),c&&y.push(c),this.compileAndRun(g,y,d)},t.prototype.multiply=function(e,n){if(e.dtype==="complex64"){var o=this.texData.get(e.dataId),i=this.texData.get(n.dataId),a=new Qa(vf,e.shape,n.shape),s=new Qa(mf,e.shape,n.shape),u=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag),this.makeComplexComponentTensorInfo(n,i.complexTensors.real),this.makeComplexComponentTensorInfo(n,i.complexTensors.imag)],c=this.compileAndRun(a,u),l=this.compileAndRun(s,u),h=this.complex(c,l);return c.dispose(),l.dispose(),h}if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.multiply(e,n);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,Za,e.dtype);var f=new Re(Za,e.shape,n.shape);return this.compileAndRun(f,[e,n],e.dtype)},t.prototype.batchNormalization=function(e,n,o,i,a,s){var u=[e,n,o],c=null;s!=null&&(c=s.shape,u.push(s));var l=null;if(a!=null&&(l=a.shape,u.push(a)),M().getBool("WEBGL_PACK_NORMALIZATION")){var h=new pf(e.shape,n.shape,o.shape,c,l,i);return this.compileAndRun(h,u)}var f=new df(e.shape,n.shape,o.shape,c,l,i);return this.compileAndRun(f,u)},t.prototype.localResponseNormalization4D=function(e,n,o,i,a){var s=M().getBool("WEBGL_PACK_NORMALIZATION")?new ld(e.shape,n,o,i,a):new ud(e.shape,n,o,i,a);return this.compileAndRun(s,[e])},t.prototype.LRNGrad=function(e,n,o,i,a,s,u){var c=new cd(n.shape,i,a,s,u);return this.compileAndRun(c,[n,o,e])},t.prototype.tile=function(e,n){if(e.dtype==="string"){var o=this.readSync(e.dataId).map(function(a){return Ur(a)});return wu(oe(e.shape,e.dtype,o),n)}var i=new Nd(e.shape,n);return this.compileAndRun(i,[e])},t.prototype.pad=function(e,n,o){var i=M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new gd(e.shape,n,o):new md(e.shape,n,o);return this.compileAndRun(i,[e])},t.prototype.transpose=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.transpose(e,n);var o=M().getBool("WEBGL_PACK_ARRAY_OPERATIONS")?new Md(e.shape,n):new Pd(e.shape,n);return this.compileAndRun(o,[e])},t.prototype.gather=function(e,n,o){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.gather(e,n,o);var i=new Uf(e.shape,n.size,o);return this.compileAndRun(i,[e,n])},t.prototype.batchToSpaceND=function(e,n,o){E(e.rank<=4,function(){return"batchToSpaceND for rank > 4 with a WebGL backend not implemented yet"});var i=n.reduce(function(h,f){return h*f}),a=Kr(e.shape,n,i),s=Xr(a.length,n.length),u=Yr(e.shape,n,i),c=uu(o,n.length),l=cu(u,o,n.length);return e.reshape(a).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,n,o){E(e.rank<=4,function(){return"spaceToBatchND for rank > 4 with a WebGL backend not implemented yet"});var i=n.reduce(function(f,d){return f*d}),a=[[0,0]];a.push.apply(a,o);for(var s=1+n.length;s<e.shape.length;++s)a.push([0,0]);var u=e.pad(a),c=Kr(u.shape,n,i,!1),l=Xr(c.length,n.length,!1),h=Yr(u.shape,n,i,!1);return u.reshape(c).transpose(l).reshape(h)},t.prototype.reduce=function(e,n,o){var i=e.shape[0],a=e.shape[1],s=zo(a),u=new yd({windowSize:s,inSize:a,batchSize:i},n),c=this.compileAndRun(u,[e],o);return c.shape[1]===1?c:this.reduce(c,n,o)},t.prototype.argReduce=function(e,n,o){o===void 0&&(o=null);var i=e.shape[0],a=e.shape[1];o!=null&&(i=o.shape[0],a=o.shape[1]);var s=zo(a),u=new rf({windowSize:s,inSize:a,batchSize:i},n,o==null),c=[e];o!=null&&c.push(o);var l=this.compileAndRun(u,c,"int32");return l.shape[1]===1?l:this.argReduce(e,n,l)},t.prototype.argReducePacked=function(e,n,o){o===void 0&&(o=null);var i=o!=null?o.shape:e.shape,a=zo(i[i.length-1]),s=new lf(i,a,n,o==null),u=o==null?[e]:[e,o],c=this.compileAndRun(s,u,"int32");return c.rank===e.rank?this.argReducePacked(e,n,c):c},t.prototype.sum=function(e,n){rt("sum",n,e.rank);var o=qe(e.shape,n),i=o[0],a=Y(o[1]),s=e.as2D(-1,a),u=No(e.dtype);return this.reduce(s,"sum",u).reshape(i)},t.prototype.prod=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.prod(e,n);var o=qe(e.shape,n),i=o[0],a=Y(o[1]),s=e.as2D(-1,a),u=No(e.dtype);return this.reduce(s,"prod",u).reshape(i)},t.prototype.unsortedSegmentSum=function(e,n,o){var i=0,a=Ot([i],e.rank),s=e;a!=null&&(s=e.transpose(a),i=Bt(1,e.rank)[0]);var u=function(d,p,v){for(var m=[],g=d.length,y=0;y<g;y++)y!==p?m.push(d[y]):m.push(v);return m}(s.shape,i,o),c=Y([s.shape[i]]),l=s.as2D(-1,c),h=No(e.dtype),f=this.segOpCompute(l,"unsortedSegmentSum",n,h,o).reshape(u);return a!=null&&(f=f.transpose(Pi(a))),f},t.prototype.segOpCompute=function(e,n,o,i,a){var s=e.shape[0],u=e.shape[1],c=function(f,d){var p,v=!1;for(f<=hu?(p=f,v=!0):p=fi(f,Math.floor(Math.sqrt(f)));!v;)p>d||p===f?v=!0:p=fi(f,p+1);return p}(u,a),l=new kd({windowSize:c,inSize:u,batchSize:s,numSegments:a}),h=this.compileAndRun(l,[e,o],i);return h.shape[1]===a?h:(o=$r(0,a).tile([u/c]),this.segOpCompute(h,n,o,i,a))},t.prototype.argMinMaxReduce=function(e,n,o){var i=[n];if(rt("arg"+o.charAt(0).toUpperCase()+o.slice(1),i,e.rank),!M().getBool("WEBGL_PACK_REDUCE")||e.rank<=2){var a=qe(e.shape,i),s=a[0],u=Y(a[1]),c=e.as2D(-1,u);return this.argReduce(c,o).reshape(s)}return this.argReducePacked(e,o)},t.prototype.argMin=function(e,n){return this.argMinMaxReduce(e,n,"min")},t.prototype.argMax=function(e,n){return this.argMinMaxReduce(e,n,"max")},t.prototype.cumsum=function(e,n,o,i){if(n!==e.rank-1)throw new Error("WebGL cumsum shader expects an inner-most axis="+(e.rank-1)+" but got axis="+n);var a=new Df(e.shape,o,i);return this.compileAndRun(a,[e])},t.prototype.equal=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(equal(a, b));
`,"bool");var o=new Re("return float(a == b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.notEqual=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(notEqual(a, b));
`,"bool");var o=new Re("return float(a != b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.less=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.less(e,n);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(lessThan(a, b));
`,"bool");var o=new Re("return float(a < b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.lessEqual=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(lessThanEqual(a, b));
`,"bool");var o=new Re("return float(a <= b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.greater=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.greater(e,n);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(greaterThan(a, b));
`,"bool");var o=new Re("return float(a > b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.greaterEqual=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(greaterThanEqual(a, b));
`,"bool");var o=new Re("return float(a >= b);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.logicalNot=function(e){var n=new ie(e.shape,"return float(!(x >= 1.0));");return this.compileAndRun(n,[e])},t.prototype.logicalAnd=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,"bool");var o=new Re("return float(a >= 1.0 && b >= 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.logicalOr=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,"bool");var o=new Re("return float(a >= 1.0 || b >= 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n],"bool")},t.prototype.select=function(e,n,o){var i=new Rd(e.rank,n.shape,n.rank);return this.compileAndRun(i,[e,n,o],Ue(n.dtype,o.dtype))},t.prototype.where=function(e){qr("tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead");var n=e.dataSync();return Ui(e.shape,n)},t.prototype.topk=function(e,n,o){return Cu(e.dataSync(),e.shape,e.dtype,n)},t.prototype.min=function(e,n){rt("min",n,e.rank);var o=qe(e.shape,n),i=o[0],a=Y(o[1]),s=e.as2D(-1,a);return this.reduce(s,"min",s.dtype).reshape(i)},t.prototype.minimum=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.minimum(e,n);var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ut(`
  vec4 result = vec4(min(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Re(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return min(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.mod=function(e,n){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ut(`
  vec4 result = mod(a, b);
  vec4 isNaN = vec4(equal(b, vec4(0.0)));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Re(`if (b == 0.0) return NAN;
  return mod(a, b);`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.max=function(e,n){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.max(e,n);rt("max",n,e.rank);var o=qe(e.shape,n),i=o[0],a=Y(o[1]),s=e.as2D(-1,a);return this.reduce(s,"max",s.dtype).reshape(i)},t.prototype.maximum=function(e,n){if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.maximum(e,n);var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ut(`
  vec4 result = vec4(max(a, b));
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Re(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return max(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.all=function(e,n){rt("all",n,e.rank);var o=qe(e.shape,n),i=o[0],a=Y(o[1]),s=e.as2D(-1,a);return this.reduce(s,"all",s.dtype).reshape(i)},t.prototype.any=function(e,n){rt("any",n,e.rank);var o=qe(e.shape,n),i=o[0],a=Y(o[1]),s=e.as2D(-1,a);return this.reduce(s,"any",s.dtype).reshape(i)},t.prototype.realDivide=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,"float32",!0);var o=new Re(`
if (a == b) {
  return 1.0;
};
return a / b;`,e.shape,n.shape);return this.compileAndRun(o,[e,n],"float32")},t.prototype.floorDiv=function(e,n){if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,"int32");var o=new Re(`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,e.shape,n.shape);return this.compileAndRun(o,[e,n],"int32")},t.prototype.add=function(e,n){if(e.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(e,n,Uo);if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.add(e,n);var o=Ue(e.dtype,n.dtype);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,Uo,o);var i=new Re(Uo,e.shape,n.shape);return this.compileAndRun(i,[e,n],o)},t.prototype.packedUnaryOp=function(e,n,o){var i=new er(e.shape,n);return this.compileAndRun(i,[e],o)},t.prototype.packedBinaryOp=function(e,n,o,i,a){a===void 0&&(a=!1);var s=new Ut(o,e.shape,n.shape,a);return this.compileAndRun(s,[e,n],i)},t.prototype.complexSeparableBinaryOp=function(e,n,o){var i=this,a=this.texData.get(e.dataId),s=this.texData.get(n.dataId),u=[[a.complexTensors.real,s.complexTensors.real],[a.complexTensors.imag,s.complexTensors.imag]].map(function(f){var d=f[0],p=f[1],v=i.makeComplexComponentTensorInfo(e,d),m=i.makeComplexComponentTensorInfo(n,p),g=new Re(o,e.shape,n.shape);return i.compileAndRun(g,[v,m],Ue(d.dtype,p.dtype))}),c=u[0],l=u[1],h=this.complex(c,l);return c.dispose(),l.dispose(),h},t.prototype.makeComplexComponentTensorInfo=function(e,n){return{dataId:n.dataId,dtype:n.dtype,shape:e.shape}},t.prototype.addN=function(e){if(e.length===1)return e[0];if(e.length>M().get("WEBGL_MAX_TEXTURES_IN_SHADER")){var n=Math.floor(e.length/2),o=this.addN(e.slice(0,n)),i=this.addN(e.slice(n));return this.addN([o,i])}var a=e.map(function(c){return c.dtype}).reduce(function(c,l){return Ue(c,l)}),s=e.map(function(c){return c.shape}),u=M().getBool("WEBGL_PACK")?new nf(e[0].shape,s):new tf(e[0].shape,s);return this.compileAndRun(u,e,a)},t.prototype.subtract=function(e,n){if(e.dtype==="complex64"&&n.dtype==="complex64")return this.complexSeparableBinaryOp(e,n,Go);if(this.shouldExecuteOnCPU([e,n]))return this.cpuBackend.subtract(e,n);var o=Ue(e.dtype,n.dtype);if(M().getBool("WEBGL_PACK_BINARY_OPERATIONS"))return this.packedBinaryOp(e,n,Go,e.dtype);var i=new Re(Go,e.shape,n.shape);return this.compileAndRun(i,[e,n],o)},t.prototype.pow=function(e,n){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ut(`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  vec4 isNaN = vec4(lessThan(a, vec4(0.0))) * vec4(lessThan(floor(b), b));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Re(`
if(a < 0.0 && floor(b) < b){
  return NAN;
}
if (b == 0.0) {
  return 1.0;
}
return (round(mod(b, 2.0)) != 1) ?
    pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,e.shape,n.shape),i=Ue(e.dtype,n.dtype);return this.compileAndRun(o,[e,n],i)},t.prototype.ceil=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.ceil(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,hs,e.dtype);var n=new ie(e.shape,hs);return this.compileAndRun(n,[e])},t.prototype.floor=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.floor(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,fs,e.dtype);var n=new ie(e.shape,fs);return this.compileAndRun(n,[e])},t.prototype.sign=function(e){var n=new ie(e.shape,`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`);return this.compileAndRun(n,[e])},t.prototype.isNaN=function(e){var n=new ie(e.shape,"return float(isnan(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.isInf=function(e){var n=new ie(e.shape,"return float(isinf(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.isFinite=function(e){var n=new ie(e.shape,"return float(!isnan(x) && !isinf(x));");return this.compileAndRun(n,[e],"bool")},t.prototype.round=function(e){var n=new ie(e.shape,`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`);return this.compileAndRun(n,[e])},t.prototype.exp=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.exp(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,ds,e.dtype);var n=new ie(e.shape,ds);return this.compileAndRun(n,[e])},t.prototype.expm1=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.expm1(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,ps,e.dtype);var n=new ie(e.shape,ps);return this.compileAndRun(n,[e])},t.prototype.softmax=function(e,n){var o=Be([n],e.shape),i=this.max(e,o),a=et(i.shape,o),s=this.subtract(e,i.reshape(a)),u=this.exp(s),c=this.sum(u,o).reshape(a);return this.realDivide(u,c)},t.prototype.log=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.log(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,`
  vec4 result = log(x);
  vec4 isNaN = vec4(lessThan(x, vec4(0.0)));
  result.r = isNaN.r == 1.0 ? NAN : result.r;
  result.g = isNaN.g == 1.0 ? NAN : result.g;
  result.b = isNaN.b == 1.0 ? NAN : result.b;
  result.a = isNaN.a == 1.0 ? NAN : result.a;

  return result;
`,e.dtype);var n=new ie(e.shape,`if (x < 0.0) return NAN;
  return log(x);`);return this.compileAndRun(n,[e])},t.prototype.log1p=function(e){var n=new ie(e.shape,"return log(1.0 + x);");return this.compileAndRun(n,[e])},t.prototype.sqrt=function(e){var n=new ie(e.shape,"return sqrt(x);");return this.compileAndRun(n,[e])},t.prototype.rsqrt=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.rsqrt(e);var n=new ie(e.shape,"return inversesqrt(x);");return this.compileAndRun(n,[e])},t.prototype.reciprocal=function(e){var n=new ie(e.shape,"return 1.0 / x;");return this.compileAndRun(n,[e])},t.prototype.relu=function(e){var n;return n=M().getBool("WEBGL_PACK")?new er(e.shape,Tu):new ie(e.shape,Ru),this.compileAndRun(n,[e])},t.prototype.relu6=function(e){var n;return n=M().getBool("WEBGL_PACK")?new er(e.shape,Fu):new ie(e.shape,Su),this.compileAndRun(n,[e])},t.prototype.prelu=function(e,n){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ut(ku,e.shape,n.shape):new Re(Au,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.elu=function(e){if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,Nu,e.dtype);var n=new ie(e.shape,Du);return this.compileAndRun(n,[e])},t.prototype.eluDer=function(e,n){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ut(`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,e.shape,n.shape):new Re("return (b >= 1.0) ? a : a * (b + 1.0);",e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.selu=function(e){var n=new ie(e.shape,Bd);return this.compileAndRun(n,[e])},t.prototype.int=function(e){var n=new ie(e.shape,"return float(int(x));");return this.compileAndRun(n,[e],"int32")},t.prototype.clip=function(e,n,o){var i,a=(i=M().getBool("WEBGL_PACK_CLIP")?new yf(e.shape):new gf(e.shape)).getCustomSetupFunc(n,o);return this.compileAndRun(i,[e],null,a)},t.prototype.abs=function(e){if(this.shouldExecuteOnCPU([e]))return this.cpuBackend.abs(e);if(M().getBool("WEBGL_PACK_UNARY_OPERATIONS"))return this.packedUnaryOp(e,cs,e.dtype);var n=new ie(e.shape,cs);return this.compileAndRun(n,[e])},t.prototype.complexAbs=function(e){var n=this.texData.get(e.dataId),o=new xf(e.shape),i=[this.makeComplexComponentTensorInfo(e,n.complexTensors.real),this.makeComplexComponentTensorInfo(e,n.complexTensors.imag)];return this.compileAndRun(o,i)},t.prototype.sigmoid=function(e){var n=new ie(e.shape,"return 1.0 / (1.0 + exp(-1.0 * x));");return this.compileAndRun(n,[e])},t.prototype.softplus=function(e){var n=new ie(e.shape,`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`);return this.compileAndRun(n,[e])},t.prototype.sin=function(e){var n=new ie(e.shape,Ld);return this.compileAndRun(n,[e])},t.prototype.cos=function(e){var n=new ie(e.shape,Wd);return this.compileAndRun(n,[e])},t.prototype.tan=function(e){var n=new ie(e.shape,"return tan(x);");return this.compileAndRun(n,[e])},t.prototype.asin=function(e){var n=new ie(e.shape,Vd);return this.compileAndRun(n,[e])},t.prototype.acos=function(e){var n=new ie(e.shape,zd);return this.compileAndRun(n,[e])},t.prototype.atan=function(e){var n=new ie(e.shape,Ud);return this.compileAndRun(n,[e])},t.prototype.atan2=function(e,n){var o=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ut(`
  vec4 result = atan(a, b);
  vec4 isNaN = min(vec4(isnan(a)) + vec4(isnan(b)), vec4(1.0));
  
  result.r = isNaN.r > 0. ? NAN : result.r;
  result.g = isNaN.g > 0. ? NAN : result.g;
  result.b = isNaN.b > 0. ? NAN : result.b;
  result.a = isNaN.a > 0. ? NAN : result.a;

  return result;
`,e.shape,n.shape):new Re(`
  if (isnan(a)) return a;
  if (isnan(b)) return b;

  return atan(a, b);
`,e.shape,n.shape);return this.compileAndRun(o,[e,n])},t.prototype.sinh=function(e){var n=new ie(e.shape,`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[e])},t.prototype.cosh=function(e){var n=new ie(e.shape,`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`);return this.compileAndRun(n,[e])},t.prototype.tanh=function(e){var n=new ie(e.shape,`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`);return this.compileAndRun(n,[e])},t.prototype.asinh=function(e){var n=new ie(e.shape,Gd);return this.compileAndRun(n,[e])},t.prototype.acosh=function(e){var n=new ie(e.shape,Hd);return this.compileAndRun(n,[e])},t.prototype.atanh=function(e){var n=new ie(e.shape,qd);return this.compileAndRun(n,[e])},t.prototype.erf=function(e){var n=new ie(e.shape,`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = 0.3275911;
  float a1 = 0.254829592;
  float a2 = -0.284496736;
  float a3 = 1.421413741;
  float a4 = -1.453152027;
  float a5 = 1.061405429;

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`);return this.compileAndRun(n,[e])},t.prototype.step=function(e,n){var o=new ie(e.shape,function(i){return i===void 0&&(i=0),yt+`
    return x > 0.0 ? 1.0 : float(`+i+`);
  `}(n));return this.compileAndRun(o,[e])},t.prototype.conv2dByMatMul=function(e,n,o,i,a,s){var u=e.shape,c=this.texData.get(e.dataId),l=o.inChannels,h=u[0]*u[1]*u[2],f=o.outChannels,d=o.dataFormat==="channelsLast",p=(h===1||f===1)&&l>1e3,v=u[2]%2!=0&&!!c.isPacked;if(p||!M().getBool("WEBGL_LAZILY_UNPACK")||!M().getBool("WEBGL_PACK_BINARY_OPERATIONS")||!v){var m=d?u[0]*u[1]*u[2]:u[0]*u[2]*u[3],g=this.reshape(e,[1,m,o.inChannels]),y=this.reshape(n,[1,o.inChannels,o.outChannels]);return this.reshape(this.fusedBatchMatMul({a:g,b:y,transposeA:!1,transposeB:!1,bias:i,activation:a,preluActivationWeights:s}),o.outShape)}var b=d?u[0]*u[1]*(u[2]+1):u[0]*u[2]*(u[3]+1),x={dataId:e.dataId,shape:[1,b,o.inChannels],dtype:e.dtype},w=c.shape;c.shape=c.shape.slice(),c.shape[c.shape.length-2]++,E(Rr(c.shape,x.shape),function(){return"packed reshape "+c.shape+" to "+x.shape+" isn't free"});var C=this.reshape(n,[1,o.inChannels,o.outChannels]),R=this.fusedBatchMatMul({a:x,b:C,transposeA:!1,transposeB:!1,bias:i,activation:a,preluActivationWeights:s}),k=this.texData.get(R.dataId);return E(k.isPacked,function(){return"batchMatMul result is expected to be packed"}),c.shape=w,k.shape=o.outShape,T.makeTensorFromDataId(R.dataId,o.outShape,R.dtype)},t.prototype.conv2dWithIm2Row=function(e,n,o,i,a,s){var u=o.filterWidth,c=o.filterHeight,l=o.inChannels,h=o.outWidth,f=o.outHeight,d=o.dataFormat==="channelsLast",p=u*c*l,v=f*h,m=[p,v],g=e.squeeze([0]),y=n.reshape([1,p,-1]),b=new sd(m,g.shape,o),x=this.compileAndRun(b,[g]).reshape([1,m[0],m[1]]),w=i!=null,C=s!=null,R=a?Fr(a,!0):null,k=new Ho(x.shape,[1,v,o.outChannels],!0,!1,w,R,C),I=[x,y];i&&I.push(i),C&&I.push(s);var A=this.compileAndRun(k,I);return d?A.reshape([1,f,h,o.outChannels]):A.reshape([1,o.outChannels,f,h])},t.prototype.fusedConv2d=function(e){var n=e.input,o=e.filter,i=e.convInfo,a=e.bias,s=e.activation,u=e.preluActivationWeights;if(i.filterHeight===1&&i.filterWidth===1&&i.dilationHeight===1&&i.dilationWidth===1&&i.strideHeight===1&&i.strideWidth===1&&(i.padInfo.type==="SAME"||i.padInfo.type==="VALID"))return this.conv2dByMatMul(n,o,i,a,s,u);if(M().getBool("WEBGL_CONV_IM2COL")&&n.shape[0]===1)return this.conv2dWithIm2Row(n,o,i,a,s,u);var c=a!=null,l=u!=null,h=s?Fr(s,!1):null,f=new es(i,c,h,l),d=[n,o];return a&&d.push(a),u&&d.push(u),this.compileAndRun(f,d)},t.prototype.conv2d=function(e,n,o){if(o.filterHeight===1&&o.filterWidth===1&&o.dilationHeight===1&&o.dilationWidth===1&&o.strideHeight===1&&o.strideWidth===1&&(o.padInfo.type==="SAME"||o.padInfo.type==="VALID"))return this.conv2dByMatMul(e,n,o);if(M().getBool("WEBGL_CONV_IM2COL")&&e.shape[0]===1)return this.conv2dWithIm2Row(e,n,o);var i=new es(o);return this.compileAndRun(i,[e,n])},t.prototype.conv2dDerInput=function(e,n,o){var i=new _f(o);return this.compileAndRun(i,[e,n])},t.prototype.conv2dDerFilter=function(e,n,o){var i=new Cf(o);return this.compileAndRun(i,[e,n])},t.prototype.fusedDepthwiseConv2D=function(e){var n,o=e.input,i=e.filter,a=e.convInfo,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=M().getBool("WEBGL_PACK_DEPTHWISECONV")&&a.strideWidth<=2&&a.outChannels/a.inChannels==1,h=u?Fr(u,l):null,f=[o,i],d=s!=null,p=c!=null;return d&&f.push(s),p&&f.push(c),l?(n=new ns(a,d,h,p),this.compileAndRun(n,f)):(n=new ts(a,d,h,p),this.compileAndRun(n,f))},t.prototype.depthwiseConv2D=function(e,n,o){var i;return M().getBool("WEBGL_PACK_DEPTHWISECONV")&&o.strideWidth<=2&&o.outChannels/o.inChannels==1?(i=new ns(o),this.compileAndRun(i,[e,n])):(i=new ts(o),this.compileAndRun(i,[e,n]))},t.prototype.depthwiseConv2DDerInput=function(e,n,o){var i=new kf(o);return this.compileAndRun(i,[e,n])},t.prototype.depthwiseConv2DDerFilter=function(e,n,o){var i=new Af(o);return this.compileAndRun(i,[e,n])},t.prototype.conv3d=function(e,n,o){var i=new Rf(o);return this.compileAndRun(i,[e,n])},t.prototype.conv3dDerInput=function(e,n,o){var i=new If(o);return this.compileAndRun(i,[e,n])},t.prototype.conv3dDerFilter=function(e,n,o){var i=new Ef(o);return this.compileAndRun(i,[e,n])},t.prototype.maxPool=function(e,n){var o=new qo(n,"max",!1);return this.compileAndRun(o,[e])},t.prototype.avgPool=function(e,n){var o=new qo(n,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPoolBackprop=function(e,n,o,i){var a=new qo(i,"max",!0),s=this.compileAndRun(a,[n]),u=new hd(i),c=this.compileAndRun(u,[e,s],n.dtype);return s.dispose(),c},t.prototype.avgPoolBackprop=function(e,n,o){var i=new hf(o);return this.compileAndRun(i,[e],n.dtype)},t.prototype.cast=function(e,n){return gu(e,n,this)},t.prototype.unstack=function(e,n){for(var o=e.shape[n],i=new Array(e.rank-1),a=0,s=0;s<e.rank;s++)s!==n&&(i[a++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(e,u,c).reshape(i);return l},t.prototype.avgPool3d=function(e,n){var o=new jo(n,"avg",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.avgPool3dBackprop=function(e,n,o){var i=new ff(o);return this.compileAndRun(i,[e],n.dtype)},t.prototype.maxPool3d=function(e,n){var o=new jo(n,"max",!1);return this.compileAndRun(o,[e],"float32")},t.prototype.maxPool3dBackprop=function(e,n,o,i){var a=new jo(i,"max",!0),s=this.compileAndRun(a,[n]),u=new fd(i),c=this.compileAndRun(u,[e,s],n.dtype);return s.dispose(),c},t.prototype.reshape=function(e,n){var o=this.texData.get(e.dataId);if(o.isPacked&&!Rr(e.shape,n)&&(o.texture===null||!Rr(o.shape,n))){var i=this.packedReshape(e,n);return T.makeTensorFromDataId(i.dataId,i.shape,i.dtype)}return bi(e,n)},t.prototype.resizeBilinear=function(e,n,o,i){var a=M().getBool("WEBGL_PACK_IMAGE_OPERATIONS")?new Cd(e.shape,n,o,i):new wd(e.shape,n,o,i);return this.compileAndRun(a,[e],"float32")},t.prototype.resizeBilinearBackprop=function(e,n,o){var i=new bd(e,n,o);return this.compileAndRun(i,[e])},t.prototype.resizeNearestNeighbor=function(e,n,o,i){var a=new Ed(e.shape,n,o,i);return this.compileAndRun(a,[e])},t.prototype.resizeNearestNeighborBackprop=function(e,n,o){var i=new _d(e,n,o);return this.compileAndRun(i,[e])},t.prototype.multinomial=function(e,n,o,i){var a=n?e:qt(e),s=a.shape[0],u=a.shape[1],c=new dd(s,u,o),l=c.getCustomSetupFunc(i);return this.compileAndRun(c,[a],"int32",l)},t.prototype.oneHot=function(e,n,o,i){var a=new pd(e.size,n,o,i);return this.compileAndRun(a,[e])},t.prototype.diag=function(e){var n=new Pf(e.size);return this.compileAndRun(n,[e])},t.prototype.nonMaxSuppression=function(e,n,o,i,a){return qr("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead"),Vi(e.dataSync(),n.dataSync(),o,i,a)},t.prototype.cropAndResize=function(e,n,o,i,a,s){var u=new Sf(e.shape,n.shape,i,a,s);return this.compileAndRun(u,[e,n,o],"float32")},t.prototype.depthToSpace=function(e,n,o){E(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});var i=e.shape[0],a=o==="NHWC"?e.shape[1]:e.shape[2],s=o==="NHWC"?e.shape[2]:e.shape[3],u=o==="NHWC"?e.shape[3]:e.shape[1],c=a*n,l=s*n,h=u/(n*n),f=new Nf(o==="NHWC"?[i,c,l,h]:[i,h,c,l],n,o);return this.compileAndRun(f,[e])},t.prototype.split=function(e,n,o){return bu(e,n,o)},t.prototype.scatterND=function(e,n,o){var i=Jr(0,e,o),a=i.sliceRank,s=i.numUpdates,u=i.sliceSize,c=i.strides,l=i.outputSize,h=[l/u,u],f=e.reshape([s,a]),d=n.reshape([s,u]);if(l===0)return bi(Ge([]),o);var p=q(0),v=new as(s,a,f.rank,d.rank,c,h);return this.compileAndRun(v,[d,f,p]).reshape(o)},t.prototype.sparseToDense=function(e,n,o,i){var a=Jr(0,e,o),s=a.sliceRank,u=a.numUpdates,c=a.strides,l=a.outputSize,h=new as(u,s,e.rank,n.rank,c,[l,1]);return this.compileAndRun(h,[n,e,i]).reshape(o)},t.prototype.fft=function(e){return this.fftImpl(e,!1)},t.prototype.ifft=function(e){return this.fftImpl(e,!0)},t.prototype.fftImpl=function(e,n){var o=this.texData.get(e.dataId),i=new os(Wf,e.shape,n),a=new os(Vf,e.shape,n),s=[this.makeComplexComponentTensorInfo(e,o.complexTensors.real),this.makeComplexComponentTensorInfo(e,o.complexTensors.imag)],u=this.compileAndRun(i,s),c=this.compileAndRun(a,s),l=this.complex(u,c).as2D(e.shape[0],e.shape[1]);return u.dispose(),c.dispose(),l},t.prototype.gatherND=function(e,n){var o=n.shape,i=o[o.length-1],a=lu(e,n),s=a[0],u=a[1],c=a[2],l=a[3],h=n.reshape([u,i]),f=e.reshape([e.size/c,c]),d=new Gf(i,l,[u,c]);return this.compileAndRun(d,[f,h]).reshape(s)},t.prototype.fill=function(e,n,o){if((o=o||vr(n))==="string"){var i=zr(o,Y(e));return i.fill(n),T.makeTensor(i,e,o,this)}var a=new zf(e,n),s=a.getCustomSetupFunc(n);return this.compileAndRun(a,[],o,s)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported under string dtype");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){return this.fill(e.shape,e.dtype==="string"?"":0,e.dtype)},t.prototype.linspace=function(e,n,o){return yu(e,n,o)},t.prototype.makeTensorInfo=function(e,n){var o=this.write(null,e,n);return this.texData.get(o).usage=null,{dataId:o,shape:e,dtype:n}},t.prototype.makeOutput=function(e,n){var o=this.makeTensorInfo(e,n).dataId;return T.makeTensorFromDataId(o,e,n,this)},t.prototype.unpackTensor=function(e){var n=new $d(e.shape);return this.runWebGLProgram(n,[e],e.dtype)},t.prototype.packTensor=function(e){var n=new vd(e.shape);return this.runWebGLProgram(n,[e],e.dtype,null,!0)},t.prototype.packedReshape=function(e,n){var o=[Gr(e.shape)].concat(Hr(e.shape)),i={dtype:e.dtype,shape:o,dataId:e.dataId},a=[Gr(n)].concat(Hr(n)),s=new xd(a,o),u=this.runWebGLProgram(s,[i],e.dtype,null,!0);return{dataId:u.dataId,shape:n,dtype:u.dtype}},t.prototype.decode=function(e){var n,o=this.texData.get(e),i=o.isPacked,a=o.shape,s=o.dtype,u=Vo(a);return n=i?new Ff(u):new Tf(u),{dtype:s,shape:a,dataId:this.runWebGLProgram(n,[{shape:u,dtype:s,dataId:e}],s,null,!0).dataId}},t.prototype.runWebGLProgram=function(e,n,o,i,a){var s=this;a===void 0&&(a=!1);var u=this.makeTensorInfo(e.outputShape,o),c=this.texData.get(u.dataId);if(e.packedOutput&&(c.isPacked=!0),e.outPackingScheme===sr.DENSE){var l=nr(e.outputShape);c.texShape=l.map(function(b){return 2*b})}if(e.outTexUsage!=null&&(c.usage=e.outTexUsage),Y(u.shape)===0)return c.values=ir(u.dtype,0),u;var h=[],f=n.map(function(b){if(b.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");var x=s.texData.get(b.dataId);if(x.texture==null){if(!e.packedInputs&&Y(b.shape)<=M().getNumber("WEBGL_SIZE_UPLOAD_UNIFORM"))return{shape:b.shape,texData:null,isUniform:!0,uniformValues:x.values};e.packedInputs&&(x.isPacked=!0,x.shape=b.shape)}else if(!!x.isPacked!=!!e.packedInputs)b=x.isPacked?s.unpackTensor(b):s.packTensor(b),h.push(b),x=s.texData.get(b.dataId);else if(x.isPacked&&!Rr(x.shape,b.shape)){var w=b,C=b.shape;b.shape=x.shape,b=s.packedReshape(b,C),h.push(b),x=s.texData.get(b.dataId),w.shape=C}return s.uploadToGPU(b.dataId),{shape:b.shape,texData:x,isUniform:!1}});this.uploadToGPU(u.dataId);var d,p={shape:u.shape,texData:c,isUniform:!1},v=function(b,x,w){var C="";x.concat(w).forEach(function(I){var A=I.texData!=null&&I.texData.slice!=null&&I.texData.slice.flatOffset>0,F=I.isUniform?"uniform":I.texData.texShape;C+=I.shape+"_"+F+"_"+A});var R=b.userCode,k=b.constructor.name;return k+="_"+C+"_"+R}(e,f,p),m=this.getAndSaveBinary(v,function(){return function(b,x,w,C){var R=x.userCode,k=w.map(function(W,G){var H={logicalShape:W.shape,texShape:W.isUniform?null:W.texData.texShape,isUniform:W.isUniform,isPacked:!W.isUniform&&W.texData.isPacked,flatOffset:null};return W.texData!=null&&W.texData.slice!=null&&W.texData.slice.flatOffset>0&&(H.flatOffset=W.texData.slice.flatOffset),{name:x.variableNames[G],shapeInfo:H}}),I=k.map(function(W){return W.shapeInfo}),A={logicalShape:C.shape,texShape:C.texData.texShape,isUniform:!1,isPacked:C.texData.isPacked,flatOffset:null},F=of(k,A,R,x.packedInputs),D=b.createProgram(F),L=null,O=b.getUniformLocation(D,"NAN",!1);M().getNumber("WEBGL_VERSION")===1&&(L=b.getUniformLocation(D,"INFINITY",!1));for(var B={},z=0;z<x.variableNames.length;z++){var V=x.variableNames[z];B[V]=b.getUniformLocation(D,V,!1),B["offset"+V]=b.getUniformLocation(D,"offset"+V,!1)}return{program:x,source:F,webGLProgram:D,uniformLocations:B,inShapeInfos:I,outShapeInfo:A,infLoc:L,nanLoc:O}}(s.gpgpu,e,f,p)}),g=this.activeTimers!=null;if(g&&(d=this.startTimer()),function(b,x,w,C,R){is(x.inShapeInfos,w),is([x.outShapeInfo],[C]);var k=C.texData.texture,I=C.texData.texShape;C.texData.isPacked?b.setOutputPackedMatrixTexture(k,I[0],I[1]):b.setOutputMatrixTexture(k,I[0],I[1]),b.setProgram(x.webGLProgram),M().getNumber("WEBGL_VERSION")===1&&x.infLoc!==null&&b.gl.uniform1f(x.infLoc,1/0),x.nanLoc!==null&&b.gl.uniform1f(x.nanLoc,NaN),w.forEach(function(A,F){var D=x.program.variableNames[F],L=x.uniformLocations[D],O=x.uniformLocations["offset"+D];if(L!=null)if(A.isUniform)if(Y(A.shape)<2)b.gl.uniform1f(L,A.uniformValues[0]);else{var B=A.uniformValues;B instanceof Float32Array||(B=new Float32Array(B)),b.gl.uniform1fv(L,B)}else A.texData.slice!=null&&O!=null&&b.gl.uniform1i(O,A.texData.slice.flatOffset),b.setInputMatrixTexture(A.texData.texture,L,F)}),R!=null&&R(b,x.webGLProgram),b.executeProgram()}(this.gpgpu,m,f,p,i),h.forEach(function(b){return s.disposeData(b.dataId)}),g&&(d=this.endTimer(d),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(d)})),!M().getBool("WEBGL_LAZILY_UNPACK")&&c.isPacked&&a===!1){var y=this.unpackTensor(u);return this.disposeData(u.dataId),y}return u},t.prototype.compileAndRun=function(e,n,o,i,a){a===void 0&&(a=!1),o=o||n[0].dtype;var s=this.runWebGLProgram(e,n,o,i,a);return T.makeTensorFromDataId(s.dataId,s.shape,s.dtype)},t.prototype.getAndSaveBinary=function(e,n){return e in this.binaryCache||(this.binaryCache[e]=n()),this.binaryCache[e]},t.prototype.getTextureManager=function(){return this.textureManager},t.prototype.dispose=function(){var e=this;this.disposed||(M().getBool("IS_TEST")||Object.keys(this.binaryCache).forEach(function(n){e.gpgpu.deleteProgram(e.binaryCache[n].webGLProgram),delete e.binaryCache[n]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<"u"&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),this.disposed=!0)},t.prototype.floatPrecision=function(){var e=this;return this.floatPrecisionValue==null&&(this.floatPrecisionValue=$(function(){if(!M().get("WEBGL_RENDER_FLOAT32_ENABLED")){var n=M().getBool("DEBUG");M().set("DEBUG",!1);var o=e.abs(q(1e-8)).dataSync()[0];if(M().set("DEBUG",n),o>0)return 32}return 16})),this.floatPrecisionValue},t.prototype.epsilon=function(){return this.floatPrecision()===32?1e-7:1e-4},t.prototype.uploadToGPU=function(e){var n,o=this.texData.get(e),i=o.shape,a=o.dtype,s=o.values,u=o.texture,c=o.usage,l=o.isPacked;if(u==null){var h,f=this.activeTimers!=null;f&&(h=Et());var d=o.texShape;if(d==null&&(d=eh(i,l),o.texShape=d),s!=null){var p=Vo(i),v=void 0,m=d[1],g=d[0],y=s instanceof Uint8Array;l?(m=(n=gr(d[0],d[1]))[0],g=n[1],v=new Lf(p,[g,m],y)):v=new Bf(p,[g,m],y);var b=this.makeTensorInfo([g,m],a);this.texData.get(b.dataId).usage=y?it.PIXELS:it.UPLOAD,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(b.dataId),m,g,s);var x=this.runWebGLProgram(v,[b],a,null,!0),w=this.texData.get(x.dataId);o.texture=w.texture,o.texShape=w.texShape,o.isPacked=w.isPacked,o.usage=w.usage,this.disposeData(b.dataId),this.texData.delete(x.dataId),o.values=null,f&&(this.uploadWaitMs+=Et()-h)}else{var C=this.acquireTexture(d,c,a,l);o.texture=C}}},t.prototype.convertAndCacheOnCPU=function(e,n){var o=this.texData.get(e),i=o.dtype;return this.releaseGPUData(e),n!=null&&(o.values=function(a,s){if(s==="float32"||s==="complex64")return a;if(s==="int32"||s==="bool"){for(var u=s==="int32"?new Int32Array(a.length):new Uint8Array(a.length),c=0;c<u.length;++c)u[c]=Math.round(a[c]);return u}throw new Error("Unknown dtype "+s)}(n,i)),o.values},t.prototype.acquireTexture=function(e,n,o,i){if(this.numBytesInGPU+=this.computeBytes(e,o),!this.warnedAboutMemory&&this.numBytesInGPU>1024*this.numMBBeforeWarning*1024){var a=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn("High memory usage in GPU: "+a+" MB, most likely due to a memory leak")}return this.textureManager.acquireTexture(e,n,i)},t.prototype.computeBytes=function(e,n){return e[0]*e[1]*js(n)},t}(vu);Zs()&&T.registerBackend("webgl",function(){return new Xd},2);var Yd=S({square_:function(r){var t=_(r,"x","square"),e=[t];return T.runKernelFunc(function(n,o){return o([t]),n.square(t)},{x:t},null,"Square",{},e,[])}}),cr="SquaredDifference",Pu=S({squaredDifference_:function(r,t){var e,n=_(r,"a","squaredDifference"),o=_(t,"b","squaredDifference");e=Ae(n,o),n=e[0],o=e[1],le(n.shape,o.shape);var i={a:n,b:o},a=[n,o];return T.runKernelFunc(function(s,u){var c=s.squaredDifference(n,o);return u([n,o]),c},i,function(s,u){var c=u[0],l=u[1],h=q(2);return{a:function(){return s.mul(c.sub(l).mul(h))},b:function(){return s.mul(l.sub(c).mul(h))}}},cr,{},a,[])}}),Jd=S({abs_:function(r){var t=_(r,"x","abs");return t.dtype==="complex64"?T.runKernelFunc(function(e){return e.complexAbs(t)},{$x:t}):T.runKernelFunc(function(e,n){var o=e.abs(t);return n([t]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mul(o.toFloat().step(-1))}}},"Abs")}}),Qd=S({acos_:function(r){var t=_(r,"x","acos");return T.runKernelFunc(function(e,n){var o=e.acos(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(q(1).sub(o.toFloat().square()).sqrt()).neg()}}})}}),Zd=S({acosh_:function(r){var t=_(r,"x","acosh");return T.runKernelFunc(function(e,n){var o=e.acosh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(o.toFloat().square().sub(1).sqrt())}}})}}),ep=S({asin_:function(r){var t=_(r,"x","asin");return T.runKernelFunc(function(e,n){var o=e.asin(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(q(1).sub(o.toFloat().square()).sqrt())}}})}}),tp=S({asinh_:function(r){var t=_(r,"x","asinh");return T.runKernelFunc(function(e,n){var o=e.asinh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.divStrict(q(1).add(o.toFloat().square()).sqrt())}}})}}),np=S({atan_:function(r){var t=_(r,"x","atan");return T.runKernelFunc(function(e,n){var o=e.atan(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.toFloat().square().add(1))}}})}}),rp=S({atanh_:function(r){var t=_(r,"x","atanh");return T.runKernelFunc(function(e,n){var o=e.atanh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(q(1).sub(o.toFloat().square()))}}})}}),op=S({ceil_:function(r){var t=_(r,"x","ceil");return T.runKernelFunc(function(e){return e.ceil(t)},{$x:t},function(e){return{$x:function(){return ve(e)}}})}}),ji=S({clipByValue_:function(r,t,e){var n=_(r,"x","clipByValue");E(t<=e,function(){return"Error in clip: min ("+t+") must be less than or equal to max ("+e+")."});var o=[n],i={min:t,max:e};return T.runKernelFunc(function(a,s){var u=a.clip(n,t,e);return s([n]),u},{x:n},function(a,s){var u=s[0];return{x:function(){return a.where(u.greaterEqual(t).logicalAnd(u.lessEqual(e)),ve(a))}}},"ClipByValue",i,o)}}),ip=S({cos_:function(r){var t=_(r,"x","cos"),e=[t];return T.runKernelFunc(function(n,o){var i=n.cos(t);return o([t]),i},{x:t},function(n,o){var i=o[0];return{x:function(){return i.toFloat().sin().neg().mul(n)}}},"Cos",{},e)}}),ap=S({cosh_:function(r){var t=_(r,"x","cosh");return T.runKernelFunc(function(e,n){var o=e.cosh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return o.toFloat().sinh().mulStrict(e)}}})}}),sp=S({erf_:function(r){var t=_(r,"x","erf");return E(t.dtype==="int32"||t.dtype==="float32",function(){return"Input dtype must be `int32` or `float32`."}),t.dtype==="int32"&&(t=t.toFloat()),T.runKernelFunc(function(e,n){var o=e.erf(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.square().neg().exp().mul(2/Math.sqrt(Math.PI)))}}})}}),Ci=S({exp_:function(r){var t=_(r,"x","exp");return T.runKernelFunc(function(e,n){var o=e.exp(t);return n([o]),o},{x:t},function(e,n){return{x:function(){return e.mulStrict(n[0])}}},"Exp",{},[],[!0])}}),up=S({expm1_:function(r){var t=_(r,"x","expm1");return T.runKernelFunc(function(e,n){var o=e.expm1(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.exp())}}})}}),cp=S({floor_:function(r){var t=_(r,"x","floor");return T.runKernelFunc(function(e){return e.floor(t)},{$x:t},function(e){return{$x:function(){return ve(e)}}})}}),lp=S({log_:function(r){var t=_(r,"x","log"),e=[t];return T.runKernelFunc(function(n,o){var i=n.log(t);return o([t]),i},{x:t},function(n,o){var i=o[0];return{x:function(){return n.div(i.toFloat())}}},"Log",{},e)}}),hp=S({log1p_:function(r){var t=_(r,"x","log1p");return T.runKernelFunc(function(e,n){var o=e.log1p(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.add(1))}}})}}),fp=S({logSigmoid_:function(r){var t=_(r,"x","logSigmoid");return T.runKernelFunc(function(e,n){var o=e.softplus(t.neg()).neg();return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.neg().sigmoid())}}})}}),to=S({neg_:function(r){var t=_(r,"x","neg"),e=[t];return T.runKernelFunc(function(n){return n.neg(t)},{x:t},function(n){return{x:function(){return n.neg()}}},"Neg",{},e)}}),dp=S({reciprocal_:function(r){var t=_(r,"x","reciprocal");return T.runKernelFunc(function(e,n){var o=e.reciprocal(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.square().neg())}}})}}),pp=S({round_:function(r){var t=_(r,"x","round");return T.runKernelFunc(function(e){return e.round(t)},{$x:t},function(e){return{$x:function(){return ve(e)}}})}}),Mu=S({rsqrt_:function(r){var t=_(r,"x","rsqrt"),e=[t];return T.runKernelFunc(function(n,o){var i=n.rsqrt(t);return o([t]),i},{x:t},function(n,o){var i=o[0];return{x:function(){return n.div(i.pow(1.5).mul(2)).neg()}}},"Rsqrt",{},e)}}),Ou=S({sigmoid_:function(r){var t=_(r,"x","sigmoid");return T.runKernelFunc(function(e,n){var o=e.sigmoid(t);return n([o]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mul(o.mul(q(1).sub(o)))}}},"Sigmoid")}}),vp=S({sign_:function(r){var t=_(r,"x","sign");return T.runKernelFunc(function(e){return e.sign(t)},{$x:t},function(e){return{$x:function(){return ve(e)}}})}}),mp=S({isNaN_:function(r){var t=_(r,"x","isNaN");return T.runKernelFunc(function(e){return e.isNaN(t)},{$x:t},function(e){return{$x:function(){return ve(e)}}})}}),gp=S({isInf_:function(r){var t=_(r,"x","isInf");return T.runKernelFunc(function(e){return e.isInf(t)},{$x:t},function(e){return{$x:function(){return ve(e)}}})}}),yp=S({isFinite_:function(r){var t=_(r,"x","isFinite");return T.runKernelFunc(function(e){return e.isFinite(t)},{$x:t},function(e){return{$x:function(){return ve(e)}}})}}),xp=S({sin_:function(r){var t=_(r,"x","sin"),e=[t];return T.runKernelFunc(function(n,o){var i=n.sin(t);return o([t]),i},{x:t},function(n,o){var i=o[0];return{x:function(){return i.toFloat().cos().mul(n)}}},"Sin",{},e)}}),bp=S({sinh_:function(r){var t=_(r,"x","sinh");return T.runKernelFunc(function(e,n){var o=e.sinh(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return o.toFloat().cosh().mulStrict(e)}}})}}),wp=S({softplus_:function(r){var t=_(r,"x","softplus");return T.runKernelFunc(function(e,n){var o=e.softplus(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.mul(o.sigmoid())}}})}}),Cp=S({sqrt_:function(r){var t=_(r,"x","sqrt");return T.runKernelFunc(function(e,n){var o=e.sqrt(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.toFloat().sqrt().mul(2))}}})}}),_p=S({step_:function(r,t){t===void 0&&(t=0);var e=_(r,"x","step");return T.runKernelFunc(function(n){return n.step(e,t)},{$x:e},function(n){return{$x:function(){return ve(n)}}})}}),Ep=S({tan_:function(r){var t=_(r,"x","tan");return T.runKernelFunc(function(e,n){var o=e.tan(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return e.div(o.cos().square())}}})}}),Ip=S({tanh_:function(r){var t=_(r,"x","tanh");return T.runKernelFunc(function(e,n){var o=e.tanh(t);return n([o]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return q(1).sub(o.square()).mulStrict(e)}}},"Tanh",{},null,[!0])}});function Bu(r,t,e,n,o,i){var a,s,u=_(r,"x","batchNorm"),c=_(t,"mean","batchNorm"),l=_(e,"variance","batchNorm");return o!=null&&(a=_(o,"scale","batchNorm")),n!=null&&(s=_(n,"offset","batchNorm")),E(u.rank===2,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===2||c.rank===1,function(){return"Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank "+c.rank+"."}),E(l.rank===2||l.rank===1,function(){return"Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank "+l.rank+"."}),a!=null&&E(a.rank===2||a.rank===1,function(){return"Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank "+a.rank+"."}),s!=null&&E(s.rank===2||s.rank===1,function(){return"Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank "+s.rank+"."}),xr(u,c,l,s,a,i)}function Lu(r,t,e,n,o,i){var a,s,u=_(r,"x","batchNorm"),c=_(t,"mean","batchNorm"),l=_(e,"variance","batchNorm");return o!=null&&(a=_(o,"scale","batchNorm")),n!=null&&(s=_(n,"offset","batchNorm")),E(u.rank===3,function(){return"Error in batchNorm3D: x must be rank 3 but got rank "+u.rank+"."}),E(c.rank===3||c.rank===1,function(){return"Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank "+c.rank+"."}),E(l.rank===3||l.rank===1,function(){return"Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank "+l.rank+"."}),a!=null&&E(a.rank===3||a.rank===1,function(){return"Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank "+a.rank+"."}),s!=null&&E(s.rank===3||s.rank===1,function(){return"Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank "+s.rank+"."}),xr(u,c,l,s,a,i)}function Wu(r,t,e,n,o,i){var a,s,u=_(r,"x","batchNorm"),c=_(t,"mean","batchNorm"),l=_(e,"variance","batchNorm");return o!=null&&(a=_(o,"scale","batchNorm")),n!=null&&(s=_(n,"offset","batchNorm")),E(u.rank===4,function(){return"Error in batchNorm4D: x must be rank 4 but got rank "+u.rank+"."}),E(c.rank===4||c.rank===1,function(){return"Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank "+c.rank+"."}),E(l.rank===4||l.rank===1,function(){return"Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank "+l.rank+"."}),a!=null&&E(a.rank===4||a.rank===1,function(){return"Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank "+a.rank+"."}),s!=null&&E(s.rank===4||s.rank===1,function(){return"Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank "+s.rank+"."}),xr(u,c,l,s,a,i)}function xr(r,t,e,n,o,i){i==null&&(i=.001);var a,s,u,c=_(r,"x","batchNorm"),l=_(t,"mean","batchNorm"),h=_(e,"variance","batchNorm");o!=null&&(a=_(o,"scale","batchNorm")),n!=null&&(s=_(n,"offset","batchNorm")),E(l.rank===h.rank,function(){return"Batch normalization gradient requires mean and variance to have equal ranks."}),E(s==null||l.rank===s.rank,function(){return"Batch normalization gradient requires mean and offset to have equal ranks."}),E(a==null||l.rank===a.rank,function(){return"Batch normalization gradient requires mean and scale to have equal ranks."}),u=c.rank===0||c.rank===1?c.as4D(1,1,1,c.size):c.rank===2?c.as4D(1,1,c.shape[0],c.shape[1]):c.rank===3?c.as4D(1,c.shape[0],c.shape[1],c.shape[2]):c;var f=[c,l,h,a];return T.runKernelFunc(function(d,p){var v=d.batchNormalization(u,Nr(l),Nr(h),i,Nr(a),Nr(s));return p([c,l,h,a]),v},{x:c,mean:l,variance:h,scale:a,offset:s},function(d,p){var v=p,m=v[0],g=v[1],y=v[2],b=v[3],x=b??q(1),w=Me(g.shape,u.shape),C=[];if(g.rank===1){for(var R=0;R<u.shape.length-1;++R)C.push(u.shape[R]);C.push(1)}var k=m.sub(g),I=d.mul(x),A=Mu(y.add(q(i))),F=A.mul(A).mul(A).mul(q(-.5));return{x:function(){return g.rank===1?d.mul(Ln(A.as4D(1,1,1,g.shape[0]),C)).mul(x).reshape(m.shape):d.mul(A).mul(x).reshape(m.shape)},mean:function(){var D=A.mul(q(-1)).mul(I);return g.rank===1&&(D=D.sum(w)),D.reshape(g.shape)},variance:function(){var D=F.mul(k).mul(I);return g.rank===1&&(D=D.sum(w)),D.reshape(g.shape)},scale:function(){var D=k.mul(A),L=d.mul(D);return g.rank===1&&(L=L.sum(w)),L.reshape(g.shape)},offset:function(){var D=d;return g.rank===1&&(D=D.sum(w)),D.reshape(g.shape)}}},"BatchNormalization",{varianceEpsilon:i},f).reshape(c.shape)}function Nr(r){return r==null?null:r.rank===0?r.as1D():r.rank===1?r:r.rank===2?r.as4D(1,1,r.shape[0],r.shape[1]):r.rank===3?r.as4D(1,r.shape[0],r.shape[1],r.shape[2]):r}function ho(){eu("tf.batchNormalization() is going away. Use tf.batchNorm() instead, and note the positional argument change of scale, offset, and varianceEpsilon")}var Ap=S({batchNormalization2d_:function(r,t,e,n,o,i){return n===void 0&&(n=.001),ho(),Bu(r,t,e,i,o,n)}}),kp=S({batchNormalization3d_:function(r,t,e,n,o,i){return n===void 0&&(n=.001),ho(),Lu(r,t,e,i,o,n)}}),Rp=S({batchNormalization4d_:function(r,t,e,n,o,i){return n===void 0&&(n=.001),ho(),Wu(r,t,e,i,o,n)}}),Sp=S({batchNormalization_:function(r,t,e,n,o,i){return n===void 0&&(n=.001),ho(),xr(r,t,e,i,o,n)}}),Vu=S({batchNorm_:xr}),Dp=S({batchNorm2d_:Bu}),Tp=S({batchNorm3d_:Lu}),Fp=S({batchNorm4d_:Wu}),fo=S({logicalAnd_:function(r,t){var e=_(r,"a","logicalAnd","bool"),n=_(t,"b","logicalAnd","bool");return le(e.shape,n.shape),T.runKernelFunc(function(o){return o.logicalAnd(e,n)},{a:e,b:n},null,"LogicalAnd")}}),Np=S({logicalNot_:function(r){var t=_(r,"x","logicalNot","bool");return T.runKernelFunc(function(e){return e.logicalNot(t)},{$x:t})}}),zu=S({logicalOr_:function(r,t){var e=_(r,"a","logicalOr","bool"),n=_(t,"b","logicalOr","bool");return le(e.shape,n.shape),T.runKernelFunc(function(o){return o.logicalOr(e,n)},{$a:e,$b:n})}}),Pp=S({logicalXor_:function(r,t){var e=_(r,"a","logicalXor","bool"),n=_(t,"b","logicalXor","bool");return le(e.shape,n.shape),zu(r,t).logicalAnd(fo(r,t).logicalNot())}}),bn=S({where_:function(r,t,e){var n=_(t,"a","where"),o=_(e,"b","where"),i=_(r,"condition","where","bool");return ye(n.shape,o.shape,"Error in where: "),i.rank===1?E(i.shape[0]===n.shape[0],function(){return"The first dimension of `a` must match the size of `condition`."}):ye(i.shape,o.shape,"Error in where: "),T.runKernelFunc(function(a,s){var u=a.select(i,n,o);return s([i]),u},{$condition:i,$a:n,$b:o},function(a,s){var u=s[0];return{$condition:function(){return ve(u).toFloat()},$a:function(){return a.mul(u.cast(a.dtype))},$b:function(){return a.mul(u.logicalNot().cast(a.dtype))}}})}}),Uu=function(r){return K(this,void 0,void 0,function(){var t,e,n;return X(this,function(o){switch(o.label){case 0:return[4,(t=_(r,"condition","whereAsync","bool")).data()];case 1:return e=o.sent(),n=Ui(t.shape,e),r!==t&&t.dispose(),[2,n]}})})},ue=S({add_:function(r,t){var e,n=_(r,"a","add"),o=_(t,"b","add");e=Ae(n,o),n=e[0],o=e[1];var i=le(n.shape,o.shape);return T.runKernelFunc(function(a){return a.add(n,o)},{a:n,b:o},function(a){return{a:function(){var s=a,u=Me(n.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=a,u=Me(o.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(o.shape)}}},"Add")}}),Mp=S({addN_:function(r){E(Array.isArray(r),function(){return"The argument passed to tf.addN() must be a list of tensors"}),E(r.length>=1,function(){return"Must pass at least one tensor to tf.addN(), but got "+r.length});var t=r.map(function(o,i){return _(o,"tensors"+i,"addN")}),e=t[0];t.forEach(function(o){if(o.dtype!==e.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(function(o){if(!We(o.shape,e.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});var n=t;return T.runKernelFunc(function(o){return o.addN(t)},n,function(o){var i={};return t.forEach(function(a,s){i[s]=function(){return o.clone()}}),i},"AddN")}}),Op=S({addStrict_:function(r,t){var e=_(r,"a","addStrict"),n=_(t,"b","addStrict");return ye(e.shape,n.shape,"Error in addStrict: "),e.add(n)}}),Bp=S({atan2_:function(r,t){var e,n=_(r,"a","atan2"),o=_(t,"b","atan2");e=Ae(n,o),n=e[0],o=e[1];var i=le(n.shape,o.shape);return T.runKernelFunc(function(a,s){var u=a.atan2(n,o);return s([n,o]),u},{$a:n,$b:o},function(a,s){var u=s[0],c=s[1];return{$a:function(){var l=ue(u.square(),c.square()),h=a.mul(c.div(l)),f=Me(u.shape,i);return f.length>0&&(h=h.sum(f)),h.reshape(u.shape)},$b:function(){var l=ue(u.square(),c.square()),h=to(a.mul(u.div(l))),f=Me(c.shape,i);return f.length>0&&(h=h.sum(f)),h.reshape(c.shape)}}})}}),pt=S({div_:function(r,t){var e,n=_(r,"a","div"),o=_(t,"b","div");if(e=Ae(n,o),n=e[0],o=e[1],n.dtype==="int32"&&o.dtype==="int32")return Gu(n,o);var i=le(n.shape,o.shape);return T.runKernelFunc(function(a,s){var u=a.realDivide(n,o);return s([n,o]),u},{a:n,b:o},function(a,s){var u=s[0],c=s[1];return{a:function(){var l=a.div(c.toFloat()),h=Me(u.shape,i);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=a.mul(u.toFloat()),h=Me(c.shape,i);h.length>0&&(l=l.sum(h).reshape(c.shape));var f=c.square();return l.div(f.toFloat()).neg()}}},"Div")}}),Lp=S({divNoNan_:function(r,t){var e,n=_(r,"a","div"),o=_(t,"b","div");n=(e=Ae(n,o))[0],o=e[1];var i=pt(n,o),a=ve(i),s=o.equal(a);return bn(s,a,i)}}),Wp=S({divStrict_:function(r,t){var e=_(r,"a","div"),n=_(t,"b","div");return ye(e.shape,n.shape,"Error in divideStrict: "),e.div(n)}}),Gu=S({floorDiv_:function(r,t){var e,n=_(r,"a","floorDiv"),o=_(t,"b","floorDiv");e=Ae(n,o),n=e[0],o=e[1];var i=le(n.shape,o.shape);return T.runKernelFunc(function(a,s){var u=a.floorDiv(n,o);return s([n,o]),u},{a:n,b:o},function(a,s){var u=s[0],c=s[1];return{a:function(){var l=a.div(c.toFloat()),h=Me(u.shape,i);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=a.mul(u.toFloat()),h=Me(c.shape,i);h.length>0&&(l=l.sum(h).reshape(c.shape));var f=c.square();return l.div(f.toFloat()).neg()}}},"FloorDiv")}}),$i=S({maximum_:function(r,t){var e,n=_(r,"a","maximum"),o=_(t,"b","maximum");return e=Ae(n,o),n=e[0],o=e[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),le(n.shape,o.shape),T.runKernelFunc(function(i,a){var s=i.maximum(n,o);return a([n,o]),s},{a:n,b:o},function(i,a){var s=a[0],u=a[1];return{a:function(){return i.mul(s.greaterEqual(u).toFloat())},b:function(){return i.mul(s.less(u).toFloat())}}},"Maximum")}}),Vp=S({maximumStrict_:function(r,t){var e=_(r,"a","maximumStrict"),n=_(t,"b","maximumStrict");return ye(e.shape,n.shape,"Error in maximumStrict: "),e.maximum(n)}}),Hu=S({minimum_:function(r,t){var e,n=_(r,"a","minimum"),o=_(t,"b","minimum");return e=Ae(n,o),n=e[0],o=e[1],n.dtype==="bool"&&(n=n.toInt(),o=o.toInt()),le(n.shape,o.shape),T.runKernelFunc(function(i,a){var s=i.minimum(n,o);return a([n,o]),s},{a:n,b:o},function(i,a){var s=a[0],u=a[1];return{a:function(){return i.mul(s.lessEqual(u).toFloat())},b:function(){return i.mul(s.greater(u).toFloat())}}},"Minimum")}}),zp=S({minimumStrict_:function(r,t){var e=_(r,"a","minimumStrict"),n=_(t,"b","minimumStrict");return ye(e.shape,n.shape,"Error in minimumStrict: "),e.minimum(n)}}),Up=S({mod_:function(r,t){var e,n=_(r,"a","mod"),o=_(t,"b","mod");e=Ae(n,o),n=e[0],o=e[1];var i=le(n.shape,o.shape);return T.runKernelFunc(function(a,s){var u=a.mod(n,o);return s([n,o]),u},{$a:n,$b:o},function(a,s){var u=s[0],c=s[1];return{$a:function(){var l=Me(u.shape,i);return l.length>0?a.sum(l).reshape(u.shape):a},$b:function(){var l=a.mul(u.div(c).floor().neg()),h=Me(c.shape,i);return h.length>0?l.sum(h).reshape(c.shape):l}}})}}),Gp=S({modStrict_:function(r,t){var e=_(r,"a","modStrict"),n=_(t,"b","modStrict");return ye(e.shape,n.shape,"Error in modStrict: "),e.mod(n)}}),Xe=S({mul_:function(r,t){var e,n=_(r,"a","mul"),o=_(t,"b","mul");e=Ae(n,o),n=e[0],o=e[1];var i=le(n.shape,o.shape);return T.runKernelFunc(function(a,s){var u=a.multiply(n,o);return s([n,o]),u},{a:n,b:o},function(a,s){var u=s[0],c=s[1];return{a:function(){var l=a.mul(c.toFloat()),h=Me(u.shape,i);return h.length>0?l.sum(h).reshape(u.shape):l},b:function(){var l=a.mul(u.toFloat()),h=Me(c.shape,i);return h.length>0?l.sum(h).reshape(c.shape):l}}},"Mul")}}),Hp=S({mulStrict_:function(r,t){var e=_(r,"a","mul"),n=_(t,"b","mul");return ye(e.shape,n.shape,"Error in multiplyStrict: "),e.mul(n)}}),no=S({pow_:function(r,t){var e,n=_(r,"base","pow"),o=_(t,"exp","pow");e=Ae(n,o),n=e[0],o=e[1];var i=le(n.shape,o.shape),a=[n,o];return T.runKernelFunc(function(s,u){var c=s.pow(n,o);return u([n,o,c]),c},{a:n,b:o},function(s,u){var c=u[0],l=u[1],h=u[2];return{a:function(){var f=l.toFloat(),d=s.mul(f.mul(c.pow(f.sub(q(1))))),p=Me(c.shape,i);return p.length>0&&(d=d.sum(p)),d.reshape(c.shape)},b:function(){var f=c.greater(0),d=c.log().where(f,ve(c)),p=s.mul(h.mul(d)),v=Me(l.shape,i);return v.length>0&&(p=p.sum(v)),p.reshape(l.shape)}}},"Pow",{},a,[!0])}}),qp=S({powStrict_:function(r,t){return ye(r.shape,t.shape,"Error in powStrict: "),r.pow(t)}}),jp=S({squaredDifferenceStrict_:function(r,t){var e=_(r,"a","squaredDifferenceStrict"),n=_(t,"b","squaredDifferenceStrict");return ye(e.shape,n.shape,"Error in squaredDifferenceStrict: "),e.squaredDifference(n)}}),Oe=S({sub_:function(r,t){var e,n=_(r,"a","sub"),o=_(t,"b","sub");e=Ae(n,o),n=e[0],o=e[1];var i=le(n.shape,o.shape);return T.runKernelFunc(function(a){return a.subtract(n,o)},{a:n,b:o},function(a){return{a:function(){var s=a,u=Me(n.shape,i);return u.length>0&&(s=s.sum(u)),s.reshape(n.shape)},b:function(){var s=a,u=Me(o.shape,i);return u.length>0&&(s=s.sum(u)),s.neg().reshape(o.shape)}}},"Sub")}}),$p=S({subStrict_:function(r,t){var e=_(r,"a","subStrict"),n=_(t,"b","subStrict");return ye(e.shape,n.shape,"Error in subStrict: "),e.sub(n)}}),qu=S({equal_:function(r,t){var e,n=_(r,"a","equal"),o=_(t,"b","equal");return e=Ae(n,o),n=e[0],o=e[1],le(n.shape,o.shape),T.runKernelFunc(function(i){return i.equal(n,o)},{$a:n,$b:o})}}),Kp=S({equalStrict_:function(r,t){var e=_(r,"a","equalStrict"),n=_(t,"b","equalStrict");return ye(e.shape,n.shape,"Error in equalStrict: "),e.equal(n)}}),Xp=S({greater_:function(r,t){var e,n=_(r,"a","greater"),o=_(t,"b","greater");return e=Ae(n,o),n=e[0],o=e[1],le(n.shape,o.shape),T.runKernelFunc(function(i){return i.greater(n,o)},{a:n,b:o},null,"Greater")}}),ju=S({greaterEqual_:function(r,t){var e,n=_(r,"a","greaterEqual"),o=_(t,"b","greaterEqual");return e=Ae(n,o),n=e[0],o=e[1],le(n.shape,o.shape),T.runKernelFunc(function(i,a){var s=i.greaterEqual(n,o);return a([n,o]),s},{a:n,b:o},function(i,a){var s=a[0],u=a[1];return{a:function(){return ve(s)},b:function(){return ve(u)}}},"GreaterEqual")}}),Yp=S({greaterEqualStrict_:function(r,t){var e=_(r,"a","greaterEqualStrict"),n=_(t,"b","greaterEqualStrict");return ye(e.shape,n.shape,"Error in greaterEqualStrict: "),e.greaterEqual(n)}}),Jp=S({greaterStrict_:function(r,t){var e=_(r,"a","greaterStrict"),n=_(t,"b","greaterStrict");return ye(e.shape,n.shape,"Error in greaterStrict: "),e.greater(n)}}),Qp=S({less_:function(r,t){var e,n=_(r,"a","less"),o=_(t,"b","less");return e=Ae(n,o),n=e[0],o=e[1],le(n.shape,o.shape),T.runKernelFunc(function(i){return i.less(n,o)},{a:n,b:o},null,"Less")}}),Zp=S({lessEqual_:function(r,t){var e,n=_(r,"a","lessEqual"),o=_(t,"b","lessEqual");return e=Ae(n,o),n=e[0],o=e[1],le(n.shape,o.shape),T.runKernelFunc(function(i,a){var s=i.lessEqual(n,o);return a([n,o]),s},{a:n,b:o},null,"LessEqual")}}),ev=S({lessEqualStrict_:function(r,t){var e=_(r,"a","lessEqualStrict"),n=_(t,"b","lessEqualStrict");return ye(e.shape,n.shape,"Error in lessEqualStrict: "),e.lessEqual(n)}}),tv=S({lessStrict_:function(r,t){var e=_(r,"a","lessStrict"),n=_(t,"b","lessStrict");return ye(e.shape,n.shape,"Error in lessStrict: "),e.less(n)}}),nv=S({notEqual_:function(r,t){var e,n=_(r,"a","notEqual"),o=_(t,"b","notEqual");return e=Ae(n,o),n=e[0],o=e[1],le(n.shape,o.shape),T.runKernelFunc(function(i){return i.notEqual(n,o)},{a:n,b:o},null,"NotEqual")}}),rv=S({notEqualStrict_:function(r,t){var e=_(r,"a","notEqualStrict"),n=_(t,"b","notEqualStrict");return ye(e.shape,n.shape,"Error in notEqualStrict: "),e.notEqual(n)}});function vs(r,t){for(var e=[],n=r;n<t;++n)e.push(n);return e}function ms(r){for(var t=[],e=0;e<r.length;++e)for(var n=0;n<r[e].length;++n)t.push(r[e][n]);return t}var Ki=S({gather_:function(r,t,e){e===void 0&&(e=0);var n=_(r,"x","gather"),o=_(t,"indices","gather","int32");e=Be(e,n.shape)[0];var i=function(a,s,u){for(var c=a.shape[u],l=[],h=1,f=1,d=0;d<u;d++)l.push(a.shape[d]),h*=a.shape[d];for(d=0;d<s.rank;d++)l.push(s.shape[d]);for(d=u+1;d<a.rank;d++)l.push(a.shape[d]),f*=a.shape[d];return{batchSize:h,sliceSize:f,dimSize:c,outputShape:l}}(n,o,e);return T.runKernelFunc(function(a,s){var u=a.gather(n,o.flatten(),e);return s([o]),u},{x:n,indices:o},function(a,s){var u=s[0];return{x:function(){var c=n.shape,l=u.size,h=c.slice(0,e),f=h.length,d=c.slice(e,c.length).slice(1),p=d.length,v=vs(0,f),m=vs(f+1,f+1+p),g=ms([h,[l],d]),y=a.reshape(g),b=u.reshape([l]),x=ms([[f],v,m]),w=y.transpose(x),C=$u(w,b,n.shape[e]),R=Pi(x);return C=C.transpose(R)},indices:function(){return u}}},"Gather",{axis:e}).reshape(i.outputShape)}}),$u=S({unsortedSegmentSum_:function(r,t,e){var n=_(r,"x","unsortedSegmentSum"),o=_(t,"segmentIds","unsortedSegmentSum","int32");return E(De(e),function(){return"numSegments must be of dtype int"}),T.runKernelFunc(function(i,a){var s=i.unsortedSegmentSum(n,o,e);return a([o]),s},{$x:n},function(i,a){var s=a[0];return{$x:function(){return function(u,c){for(var l=$i(c,ve(c)),h=Ki(u,l),f=ju(c,q(0,"int32")),d=h.rank-f.rank,p=0;p<d;++p)f=lt(f,p+1);f=fo(f,Yn(h.shape,"bool"));var v=ve(h);return bn(f,h,v)}(i,s)}}})}}),ov=function(r,t,e){return K(this,void 0,void 0,function(){var n,o,i,a,s,u,c,l,h,f,d,p,v;return X(this,function(m){switch(m.label){case 0:for(n=_(r,"tensor","boolMask"),o=_(t,"mask","boolMask","bool"),i=e??0,a=o.rank,s=n.shape,E(a>0,function(){return"mask cannot be scalar"}),ye(s.slice(i,i+a),o.shape,"mask's shape must match the first K dimensions of tensor's shape,"),u=1,c=i;c<i+a;c++)u*=s[c];return l=s.slice(0,i).concat([u],s.slice(i+a)),h=n.reshape(l),f=o.reshape([-1]),[4,Uu(f)];case 1:return d=m.sent(),p=d.squeeze([1]),v=Ki(h,p,i),r!==n&&n.dispose(),t!==o&&o.dispose(),p.dispose(),h.dispose(),f.dispose(),d.dispose(),[2,v]}})})};function Ku(r,t,e,n,o,i,a){i===void 0&&(i="NHWC"),E(r.length===t.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"});var s=r,u=t,c=!1;t.rank===3&&(c=!0,u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]),s=[1,r[0],r[1],r[2]]),E(s.length===4,function(){return"Error in conv2dDerInput: inShape must be length 4, but got length "+s.length+"."}),E(u.rank===4,function(){return"Error in conv2dDerInput: dy must be rank 4, but got rank "+u.rank}),E(e.rank===4,function(){return"Error in conv2dDerInput: filter must be rank 4, but got rank "+e.rank});var l=i==="NHWC"?s[3]:s[1],h=i==="NHWC"?u.shape[3]:u.shape[1];E(l===e.shape[2],function(){return"Error in conv2dDerInput: depth of input ("+l+") must match input depth for filter "+e.shape[2]+"."}),E(h===e.shape[3],function(){return"Error in conv2dDerInput: depth of output ("+h+") must match output depth for filter "+e.shape[3]+"."}),a!=null&&E(De(o),function(){return"Error in conv2dDerInput: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var f=Wi(i),d=_n(s,e.shape,n,1,o,a,!1,f),p=T.runKernelFunc(function(v,m){var g=v.conv2dDerInput(u,e,d);return m([e,u]),g},{dy4D:u,filter:e},function(v,m){var g=m[0],y=m[1];return{dy4D:function(){return dt(v,g,n,o,i,1,a)},filter:function(){return Xi(v,y,g.shape,n,o,i,a)}}});return c?p.as3D(p.shape[1],p.shape[2],p.shape[3]):p}function Ko(r){var t=function(i){return typeof i=="number"?[i,i,i]:i.length===2?[i[0],i[1],1]:i}(r),e=t[0],n=t[1],o=t[2];return e===1&&n===1&&o===1}function Xu(r,t,e,n,o){E(r.length===t.rank,function(){return"Length of inShape ("+r.length+") and rank of dy ("+t.rank+") must match"});var i=r,a=t,s=!1;t.rank===4&&(s=!0,a=t.as5D(1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]),i=[1,r[0],r[1],r[2],r[3]]);var u=i[4],c=a.shape[4];E(i.length===5,function(){return"Error in conv3dDerInput: inShape must be length 5, but got length "+i.length+"."}),E(a.rank===5,function(){return"Error in conv3dDerInput: dy must be rank 5, but got rank "+a.rank}),E(e.rank===5,function(){return"Error in conv3dDerInput: filter must be rank 5, but got rank "+e.rank}),E(u===e.shape[3],function(){return"Error in conv3dDerInput: depth of input ("+u+") must match input depth for filter "+e.shape[3]+"."}),E(c===e.shape[4],function(){return"Error in conv3dDerInput: depth of output ("+c+") must match output depth for filter "+e.shape[4]+"."});var l=Zr(i,e.shape,n,1,o),h=T.runKernelFunc(function(f){return f.conv3dDerInput(a,e,l)},{dy5D:a});return s?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}var iv=S({conv1d_:function(r,t,e,n,o,i,a){o===void 0&&(o="NWC"),i===void 0&&(i=1);var s=_(r,"x","conv1d"),u=_(t,"filter","conv1d"),c=s,l=!1;s.rank===2&&(l=!0,c=s.as3D(1,s.shape[0],s.shape[1])),E(c.rank===3,function(){return"Error in conv1d: input must be rank 3, but got rank "+c.rank+"."}),E(u.rank===3,function(){return"Error in conv1d: filter must be rank 3, but got rank "+u.rank+"."}),a!=null&&E(De(n),function(){return"Error in conv1d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+n+"."}),E(c.shape[2]===u.shape[1],function(){return"Error in conv1d: depth of input ("+c.shape[2]+") must match input depth for filter "+u.shape[1]+"."}),E(tt(e,i),function(){return"Error in conv1D: Either stride or dilation must be 1. Got stride "+e+" and dilation '"+i+"'"}),E(o==="NWC",function(){return"Error in conv1d: got dataFormat of "+o+" but only NWC is currently supported."});var h=u.as4D(1,u.shape[0],u.shape[1],u.shape[2]),f=c.as4D(c.shape[0],1,c.shape[1],c.shape[2]),d=dt(f,h,[1,e],n,"NHWC",[1,i],a);return l?d.as2D(d.shape[2],d.shape[3]):d.as3D(d.shape[0],d.shape[2],d.shape[3])}}),dt=S({conv2d_:function(r,t,e,n,o,i,a){o===void 0&&(o="NHWC"),i===void 0&&(i=[1,1]);var s=_(r,"x","conv2d"),u=_(t,"filter","conv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in conv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in conv2d: filter must be rank 4, but got rank "+u.rank+"."}),a!=null&&E(De(n),function(){return"Error in conv2d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+n+"."});var h=o==="NHWC"?c.shape[3]:c.shape[1];E(h===u.shape[2],function(){return"Error in conv2d: depth of input ("+h+") must match input depth for filter "+u.shape[2]+"."}),E(tt(e,i),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"});var f=Wi(o),d=_n(c.shape,u.shape,e,i,n,a,!1,f),p=[u,c],v=T.runKernelFunc(function(m,g){var y=m.conv2d(c,u,d);return g([u,c]),y},{x:c,filter:u},function(m,g){var y=g,b=y[0],x=y[1];return E($n(i),function(){return"Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+i+"'"}),{x:function(){return Yu(x.shape,m,b,e,n,o)},filter:function(){return Xi(x,m,b.shape,e,n,o)}}},"Conv2D",d,p);return l?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),av=S({conv3d_:function(r,t,e,n,o,i){o===void 0&&(o="NDHWC"),i===void 0&&(i=[1,1,1]);var a=_(r,"x","conv3d"),s=_(t,"filter","conv3d"),u=a,c=!1;a.rank===4&&(c=!0,u=a.as5D(1,a.shape[0],a.shape[1],a.shape[2],a.shape[3])),E(u.rank===5,function(){return"Error in conv3d: input must be rank 5, but got rank "+u.rank+"."}),E(s.rank===5,function(){return"Error in conv3d: filter must be rank 5, but got rank "+s.rank+"."}),E(u.shape[4]===s.shape[3],function(){return"Error in conv3d: depth of input ("+u.shape[4]+") must match input depth for filter "+s.shape[3]+"."}),E(function(f,d){return Ko(f)||Ko(d)}(e,i),function(){return"Error in conv3D: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),E(o==="NDHWC",function(){return"Error in conv3d: got dataFormat of "+o+" but only NDHWC is currently supported."});var l=Zr(u.shape,s.shape,e,i,n),h=T.runKernelFunc(function(f,d){var p=f.conv3d(u,s,l);return d([u,s]),p},{x:u,$filter:s},function(f,d){E(Ko(i),function(){return"Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+i+"'"});var p=d[0],v=d[1];return{x:function(){return Xu(p.shape,f,v,e,n)},$filter:function(){return function(m,g,y,b,x){var w=m;m.rank===4&&(w=m.as5D(1,m.shape[0],m.shape[1],m.shape[2],m.shape[3]));var C=g;C.rank===4&&(C=g.as5D(1,g.shape[0],g.shape[1],g.shape[2],g.shape[3])),E(w.rank===5,function(){return"Error in conv3dDerFilter: input must be rank 5, but got shape "+w.shape+"."}),E(C.rank===5,function(){return"Error in conv3dDerFilter: dy must be rank 5, but got shape "+C.shape+"."}),E(y.length===5,function(){return"Error in conv3dDerFilter: filterShape must be length 5, but got "+y+"."}),E(w.shape[4]===y[3],function(){return"Error in conv3dDerFilter: depth of input "+w.shape[4]+") must match input depth in filter ("+y[3]+"."}),E(C.shape[4]===y[4],function(){return"Error in conv3dDerFilter: depth of dy ("+C.shape[4]+") must match output depth for filter ("+y[4]+")."});var R=Zr(w.shape,y,b,1,x);return T.runKernelFunc(function(k){return k.conv3dDerFilter(w,C,R)},{x5D:w,dy5D:C})}(p,f,v.shape,e,n)}}});return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),Xi=S({conv2dDerFilter_:function(r,t,e,n,o,i,a){i===void 0&&(i="NHWC");var s=r;r.rank===3&&(s=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var u=t;u.rank===3&&(u=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),E(s.rank===4,function(){return"Error in conv2dDerFilter: input must be rank 4, but got shape "+s.shape+"."}),E(u.rank===4,function(){return"Error in conv2dDerFilter: dy must be rank 4, but got shape "+u.shape+"."}),E(e.length===4,function(){return"Error in conv2dDerFilter: filterShape must be length 4, but got "+e+"."});var c=i==="NHWC"?s.shape[3]:s.shape[1],l=i==="NHWC"?u.shape[3]:u.shape[1];E(c===e[2],function(){return"Error in conv2dDerFilter: depth of input "+c+") must match input depth in filter ("+e[2]+"."}),E(l===e[3],function(){return"Error in conv2dDerFilter: depth of dy ("+l+") must match output depth for filter ("+e[3]+")."}),a!=null&&E(De(o),function(){return"Error in conv2dDerFilter: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+o+"."});var h=Wi(i),f=_n(s.shape,e,n,1,o,a,!1,h);return T.runKernelFunc(function(d){return d.conv2dDerFilter(s,u,f)},{x4D:s,dy4D:u})}}),Yu=S({conv2dDerInput_:Ku}),po=S({depthwiseConv2d_:function(r,t,e,n,o,i,a){i===void 0&&(i=[1,1]);var s=_(r,"x","depthwiseConv2d"),u=_(t,"filter","depthwiseConv2d"),c=s,l=!1;s.rank===3&&(l=!0,c=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),E(c.rank===4,function(){return"Error in depthwiseConv2d: input must be rank 4, but got rank "+c.rank+"."}),E(u.rank===4,function(){return"Error in depthwiseConv2d: filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[3]===u.shape[2],function(){return"Error in depthwiseConv2d: number of input channels ("+c.shape[3]+") must match the inChannels dimension in filter "+u.shape[2]+"."}),i==null&&(i=[1,1]),E(tt(e,i),function(){return"Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+i+"'"}),a!=null&&E(De(n),function(){return"Error in depthwiseConv2d: pad must be an integer when using, dimRoundingMode "+a+" but got pad "+n+"."});var h=_n(c.shape,u.shape,e,i,n,a,!0),f=[c,u],d=T.runKernelFunc(function(p,v){var m=p.depthwiseConv2D(c,u,h);return v([c,u]),m},{x:c,filter:u},function(p,v){E($n(i),function(){return"Error in gradient of depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+i+"'"});var m=v[0],g=v[1];return{x:function(){return Ju(m.shape,p,g,h)},filter:function(){return Qu(m,p,g.shape,h)}}},"DepthwiseConv2dNative",h,f);return l?d.as3D(d.shape[1],d.shape[2],d.shape[3]):d}}),Ju=S({depthwiseConv2dDerInput_:function(r,t,e,n){var o=t,i=!1;t.rank===3&&(i=!0,o=t.as4D(1,t.shape[0],t.shape[1],t.shape[2]));var a=T.runKernelFunc(function(s){return s.depthwiseConv2DDerInput(o,e,n)},{dy4D:o});return i?a.as3D(a.shape[1],a.shape[2],a.shape[3]):a}}),Qu=S({depthwiseConv2dDerFilter_:function(r,t,e,n){var o=r;r.rank===3&&(o=r.as4D(1,r.shape[0],r.shape[1],r.shape[2]));var i=t;return i.rank===3&&(i=t.as4D(1,t.shape[0],t.shape[1],t.shape[2])),T.runKernelFunc(function(a){return a.depthwiseConv2DDerFilter(o,i,n)},{x4D:o,dy4D:i})}}),Yi=S({separableConv2d_:function(r,t,e,n,o,i,a){i===void 0&&(i=[1,1]),a===void 0&&(a="NHWC");var s=_(r,"x","separableConv2d"),u=_(t,"depthwiseFilter","separableConv2d"),c=_(e,"pointwiseFilter","separableConv2d"),l=s,h=!1;if(s.rank===3&&(h=!0,l=s.as4D(1,s.shape[0],s.shape[1],s.shape[2])),a==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");E(l.rank===4,function(){return"Error in separableConv2d: input must be rank 4, but got rank "+l.rank+"."}),E(u.rank===4,function(){return"Error in separableConv2d: depthwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.rank===4,function(){return"Error in separableConv2d: pointwise filter must be rank 4, but got rank "+u.rank+"."}),E(c.shape[0]===1,function(){return"Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got "+c.shape[0]+"."}),E(c.shape[1]===1,function(){return"Error in separableConv2d: the second dimension of pointwise filter must be 1, but got "+c.shape[1]+"."});var f=u.shape[2],d=u.shape[3];E(c.shape[2]===f*d,function(){return"Error in separableConv2d: the third dimension of pointwise filter must be "+f*d+", but got "+c.shape[2]+"."});var p=po(l,u,n,o,a,i),v=dt(p,c,1,"valid",a);return h?v.as3D(v.shape[1],v.shape[2],v.shape[3]):v}}),sv=S({conv2dTranspose_:function(r,t,e,n,o,i){return Ku(e,_(r,"x","conv2dTranspose"),_(t,"filter","conv2dTranspose"),n,o,"NHWC",i)}}),uv=S({conv3dTranspose_:function(r,t,e,n,o){return Xu(e,_(r,"x","conv3dTranspose"),_(t,"filter","conv3dTranspose"),n,o)}}),vo=S({matMul_:function(r,t,e,n){var o;e===void 0&&(e=!1),n===void 0&&(n=!1);var i=_(r,"a","matMul"),a=_(t,"b","matMul");o=Ae(i,a),i=o[0],a=o[1];var s=e?i.shape[i.rank-2]:i.shape[i.rank-1],u=n?a.shape[a.rank-1]:a.shape[a.rank-2],c=e?i.shape[i.rank-1]:i.shape[i.rank-2],l=n?a.shape[a.rank-2]:a.shape[a.rank-1],h=i.shape.slice(0,-2),f=a.shape.slice(0,-2),d=Y(h),p=Y(f);E(i.rank>=2&&a.rank>=2&&i.rank===a.rank,function(){return"Error in matMul: inputs must have the same rank of at least 2, got ranks "+i.rank+" and "+a.rank+"."}),E(We(h,f),function(){return"Error in matMul: outer dimensions ("+h+") and ("+f+") of Tensors with shapes "+i.shape+" and "+a.shape+" must match."}),E(s===u,function(){return"Error in matMul: inner shapes ("+s+") and ("+u+") of Tensors with shapes "+i.shape+" and "+a.shape+" and transposeA="+e+" and transposeB="+n+" must match."});var v=i.shape.slice(0,-2).concat([c,l]),m=e?i.as3D(d,s,c):i.as3D(d,c,s),g=n?a.as3D(p,l,u):a.as3D(p,u,l),y={transposeA:e,transposeB:n};return T.runKernelFunc(function(b,x){var w=b.batchMatMul(m,g,e,n);return x([m,g]),w},{a:m,b:g},function(b,x){var w=x,C=w[0],R=w[1];return e||n?!e&&n?{a:function(){return b.matMul(R,!1,!1)},b:function(){return b.matMul(C,!0,!1)}}:e&&!n?{a:function(){return R.matMul(b,!1,!0)},b:function(){return C.matMul(b,!1,!1)}}:{a:function(){return R.matMul(b,!0,!0)},b:function(){return b.matMul(C,!0,!0)}}:{a:function(){return b.matMul(R,!1,!0)},b:function(){return C.matMul(b,!0,!1)}}},"BatchMatMul",y).reshape(v)}}),cv=S({dot_:function(r,t){var e=_(r,"t1","dot"),n=_(t,"t2","dot");E(!(e.rank!==1&&e.rank!==2||n.rank!==1&&n.rank!==2),function(){return"Error in dot: inputs must all be rank 1 or 2, but got ranks "+e.rank+" and "+n.rank+"."});var o=e.rank===1?e.size:e.shape[1],i=n.rank===1?n.size:n.shape[0];return E(o===i,function(){return"Error in dot: inner dimensions of inputs must match, but got "+o+" and "+i+"."}),e.rank===1&&n.rank===1?e.as2D(1,-1).matMul(n.as2D(-1,1)).asScalar():e.rank===1&&n.rank===2?e.as2D(1,-1).matMul(n.as2D(n.shape[0],n.shape[1])).as1D():e.rank===2&&n.rank===1?e.matMul(n.as2D(-1,1)).as1D():e.matMul(n.as2D(n.shape[0],n.shape[1]))}}),lv=S({outerProduct_:function(r,t){var e=_(r,"v1","outerProduct"),n=_(t,"v2","outerProduct");return E(e.rank===1&&n.rank===1,function(){return"Error in outerProduct: inputs must be rank 1, but got ranks "+e.rank+" and "+n.rank+"."}),e.as2D(-1,1).matMul(n.as2D(1,-1))}}),br=S({reverse_:function(r,t){var e=_(r,"x","reverse");if(e.rank===0)return e.clone();var n=Be(t,e.shape);return T.runKernelFunc(function(o){return o.reverse(e,n)},{$x:e},function(o){return{$x:function(){return o.reverse(n)}}}).reshapeAs(e)}}),hv=S({reverse1d_:function(r){var t=_(r,"x","reverse");return E(t.rank===1,function(){return"Error in reverse1D: x must be rank 1 but got rank "+t.rank+"."}),br(t,0)}}),fv=S({reverse2d_:function(r,t){var e=_(r,"x","reverse");return E(e.rank===2,function(){return"Error in reverse2D: x must be rank 2 but got rank "+e.rank+"."}),br(e,t)}}),dv=S({reverse3d_:function(r,t){var e=_(r,"x","reverse");return E(e.rank===3,function(){return"Error in reverse3D: x must be rank 3 but got rank "+e.rank+"."}),br(e,t)}}),pv=S({reverse4d_:function(r,t){var e=_(r,"x","reverse");return E(e.rank===4,function(){return"Error in reverse4D: x must be rank 4 but got rank "+e.rank+"."}),br(e,t)}});function Zu(r,t,e,n,o,i){var a=_(r,"x","maxPool"),s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),E(s.rank===4,function(){return"Error in maxPool: input must be rank 4 but got rank "+s.rank+"."}),E(tt(e,n),function(){return"Error in maxPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+n+"'"}),i!=null&&E(De(o),function(){return"Error in maxPool: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var c=ur(s.shape,t,e,n,o,i);if(c.filterWidth===1&&c.filterHeight===1&&We(c.inShape,c.outShape))return a.clone();var l=[s],h=T.runKernelFunc(function(f,d){var p=f.maxPool(s,c);return d([s,p]),p},{x:s},function(f,d){var p=d[0],v=d[1];return{x:function(){return function(m,g,y,b,x,w,C,R){var k=_(m,"dy","maxPoolBackprop"),I=_(g,"input","maxPoolBackprop"),A=_(y,"output","maxPoolBackprop");E(I.rank===k.rank,function(){return"Rank of input ("+I.rank+") does not match rank of dy ("+k.rank+")"}),E(tt(x,w),function(){return"Error in maxPoolBackProp: Either strides or dilations must be 1. Got strides "+x+" and dilations '"+w+"'"}),E(k.rank===4,function(){return"Error in maxPoolBackprop: dy must be rank 4 but got rank "+k.rank+"."}),E(I.rank===4,function(){return"Error in maxPoolBackprop: input must be rank 4 but got rank "+I.rank+"."});var F=ur(I.shape,b,x,w,C,R);return T.runKernelFunc(function(D){return D.maxPoolBackprop(k,I,A,F)},{$dy:k,$input:I})}(f,p,v,t,e,n,o)}}},"MaxPool",c,l);return u?h.as3D(h.shape[1],h.shape[2],h.shape[3]):h}function ec(r,t,e,n,o,i){var a=_(r,"x","avgPool","float32");E(tt(e,n),function(){return"Error in avgPool: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+n+"'"});var s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),E(s.rank===4,function(){return"Error in avgPool: x must be rank 4 but got rank "+s.rank+"."}),i!=null&&E(De(o),function(){return"Error in avgPool: pad must be an integer when using, dimRoundingMode "+i+" but got pad "+o+"."});var c=ur(s.shape,t,e,n,o,i);if(c.filterWidth===1&&c.filterHeight===1&&We(c.inShape,c.outShape))return a.clone();var l=T.runKernelFunc(function(h){return h.avgPool(s,c)},{x:s},function(h){return{x:function(){return function(f,d,p,v,m,g){var y=_(f,"dy","avgPoolBackprop"),b=_(d,"input","avgPoolBackprop");E(b.rank===y.rank,function(){return"Rank of input ("+b.rank+") does not match rank of dy ("+y.rank+")"}),E(tt(v,m),function(){return"Error in avgPoolBackprop: Either strides or dilations must be 1. Got strides "+v+" and dilations '"+m+"'"});var x=b,w=y,C=!1;b.rank===3&&(C=!0,x=b.as4D(1,b.shape[0],b.shape[1],b.shape[2]),w=y.as4D(1,y.shape[0],y.shape[1],y.shape[2])),E(w.rank===4,function(){return"Error in avgPoolBackprop: dy must be rank 4 but got rank "+w.rank+"."}),E(x.rank===4,function(){return"Error in avgPoolBackprop: input must be rank 4 but got rank "+x.rank+"."});var R=ur(x.shape,p,v,m,g),k=T.runKernelFunc(function(I){return I.avgPoolBackprop(w,x,R)},{dy4D:w,input4D:x});return C?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}(h,s,t,e,n,o)}}},"AvgPool",c);return l=l.cast(a.dtype),u?l.as3D(l.shape[1],l.shape[2],l.shape[3]):l}var Le=S({maxPool_:function(r,t,e,n,o){return Zu(r,t,e,1,n,o)}}),wr=S({avgPool_:function(r,t,e,n,o){return ec(r,t,e,1,n,o)}}),vv=S({pool_:function(r,t,e,n,o,i){o==null&&(o=[1,1]),i==null&&(i=1),n===0&&(n="valid");var a=_(r,"x","maxPool"),s=a,u=!1;a.rank===3&&(u=!0,s=a.as4D(1,a.shape[0],a.shape[1],a.shape[2])),E(tt(i,o),function(){return"Error in pool: Either strides or dilations must be 1. Got strides "+i+" and dilations '"+o+"'"});var c,l=ur(s.shape,t,i,o,n),h=[l.dilationHeight,l.dilationWidth];c=n==="same"?function(x,w){var C=x.map(function(I,A){return I+(I-1)*(w[A]-1)}).map(function(I){return I-1}),R=C.map(function(I){return Math.floor(I/2)}),k=C.map(function(I,A){return I-R[A]});return C.map(function(I,A){return[R[A],k[A]]})}([l.filterHeight,l.filterWidth],h):[[0,0],[0,0]];var f=h[0]===1&&h[1]===1,d=function(x,w,C){var R=C.map(function(O){return O[0]}),k=C.map(function(O){return O[1]}),I=x.concat(R,k),A=w.map(function(O,B){return(O-I[B]%O)%O}),F=k.map(function(O,B){return O+A[B]}),D=w.map(function(O,B){return[R[B],F[B]]}),L=w.map(function(O,B){return[0,A[B]]});return[D,L]}([l.inHeight,l.inWidth],h,c),p=d[0],v=d[1],m=f?n:"valid",g=f?s:au(s,h,p),y=(e==="avg"?function(){return ec(g,t,i,1,m)}:function(){return Zu(g,t,i,1,m)})(),b=f?y:ru(y,h,v);return u?b.as3D(b.shape[1],b.shape[2],b.shape[3]):b}}),mv=S({maxPool3d_:function(r,t,e,n,o,i,a){i===void 0&&(i="NDHWC");var s=_(r,"x","maxPool3d"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),a==null&&(a=[1,1,1]),E(u.rank===5,function(){return"Error in maxPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(i==="NDHWC",function(){return"Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of "+i}),E(tt(e,a),function(){return"Error in maxPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),o!=null&&E(De(n),function(){return"Error in maxPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=Qr(u.shape,t,e,a,n,o,i),h=T.runKernelFunc(function(f,d){var p=f.maxPool3d(u,l);return d([u,p]),p},{x:u},function(f,d){var p=d[0],v=d[1];return{x:function(){return function(m,g,y,b,x,w,C,R){var k=_(m,"dy","maxPool3dBackprop"),I=_(g,"input","maxPool3dBackprop"),A=_(y,"output","maxPool3dBackprop"),F=k,D=I,L=A,O=!1;I.rank===4&&(O=!0,F=k.as5D(1,k.shape[0],k.shape[1],k.shape[2],k.shape[3]),D=I.as5D(1,I.shape[0],I.shape[1],I.shape[2],I.shape[3]),L=A.as5D(1,A.shape[0],A.shape[1],A.shape[2],A.shape[3])),E(F.rank===5,function(){return"Error in maxPool3dBackprop: dy must be rank 5 but got rank "+F.rank+"."}),E(D.rank===5,function(){return"Error in maxPool3dBackprop: input must be rank 5 but got rank "+D.rank+"."}),E(L.rank===5,function(){return"Error in maxPool3dBackprop: output must be rank 5 but got rank "+L.rank+"."}),w==null&&(w=[1,1,1]),E(tt(x,w),function(){return"Error in maxPool3dBackprop: Either strides or dilations must be 1. Got strides "+x+" and dilations '"+w+"'"}),R!=null&&E(De(C),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+R+" but got pad "+C+"."});var B=Qr(D.shape,b,x,w,C,R),z=T.runKernelFunc(function(V){return V.maxPool3dBackprop(F,D,L,B)},{dy5D:F,input5D:D});return O?z.as4D(z.shape[1],z.shape[2],z.shape[3],z.shape[4]):z}(f,p,v,t,e,a,n,o)}}});return c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),gv=S({avgPool3d_:function(r,t,e,n,o,i,a){i===void 0&&(i="NDHWC");var s=_(r,"x","avgPool3d","float32"),u=s,c=!1;s.rank===4&&(c=!0,u=s.as5D(1,s.shape[0],s.shape[1],s.shape[2],s.shape[3])),a==null&&(a=[1,1,1]),E(u.rank===5,function(){return"Error in avgPool3d: x must be rank 5 but got rank "+u.rank+"."}),E(i==="NDHWC",function(){return"Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of "+i}),E(tt(e,a),function(){return"Error in avgPool3d: Either strides or dilations must be 1. Got strides "+e+" and dilations '"+a+"'"}),o!=null&&E(De(n),function(){return"Error in avgPool3d: pad must be an integer when using, dimRoundingMode "+o+" but got pad "+n+"."});var l=Qr(u.shape,t,e,a,n,o,i),h=T.runKernelFunc(function(f){return f.avgPool3d(u,l)},{x:u},function(f){return{x:function(){return function(d,p,v,m,g,y,b){var x=_(d,"dy","avgPool3dBackprop"),w=_(p,"input","avgPool3dBackprop"),C=x,R=w,k=!1;w.rank===4&&(k=!0,C=x.as5D(1,x.shape[0],x.shape[1],x.shape[2],x.shape[3]),R=w.as5D(1,w.shape[0],w.shape[1],w.shape[2],w.shape[3])),E(C.rank===5,function(){return"Error in avgPool3dBackprop: dy must be rank 5 but got rank "+C.rank+"."}),E(R.rank===5,function(){return"Error in avgPool3dBackprop: input must be rank 5 but got rank "+R.rank+"."}),g==null&&(g=[1,1,1]),E(tt(m,g),function(){return"Error in avgPool3dBackprop: Either strides or dilations must be 1. Got strides "+m+" and dilations '"+g+"'"}),b!=null&&E(De(y),function(){return"Error in maxPool3dBackprop: pad must be an integer when using, dimRoundingMode "+b+" but got pad "+y+"."});var I=Qr(R.shape,v,m,g,y,b),A=T.runKernelFunc(function(F){return F.avgPool3dBackprop(C,R,I)},{dy5D:C,input5D:R});return k?A.as4D(A.shape[1],A.shape[2],A.shape[3],A.shape[4]):A}(f,u,t,e,a,n,o)}}});return h=h.cast(u.dtype),c?h.as4D(h.shape[1],h.shape[2],h.shape[3],h.shape[4]):h}}),Ft=S({slice_:function(r,t,e){var n,o,i=_(r,"x","slice");if(i.rank===0)throw new Error("Slicing scalar is not possible");(n=typeof t=="number"?[t].concat(new Array(i.rank-1).fill(0)):t.length<i.rank?t.concat(new Array(i.rank-t.length).fill(0)):t.slice()).forEach(function(u){E(u!==-1,function(){return"slice() does not support negative begin indexing."})}),o=(o=e==null?new Array(i.rank).fill(-1):typeof e=="number"?[e].concat(new Array(i.rank-1).fill(-1)):e.length<i.rank?e.concat(new Array(i.rank-e.length).fill(-1)):e).map(function(u,c){return u>=0?u:(E(u===-1,function(){return"Negative size values should be exactly -1 but got "+u+" for the slice() size at index "+c+"."}),i.shape[c]-n[c])}),Hh(i,n,o);var a=i.shape,s={begin:n,size:o};return T.runKernelFunc(function(u){return u.slice(i,n,o)},{x:i},function(u){for(var c=[],l=0;l<u.rank;l++)c.push([n[l],a[l]-n[l]-o[l]]);return{x:function(){return u.pad(c)}}},"Slice",s)}}),yv=S({slice1d_:function(r,t,e){var n=_(r,"x","slice1d");return E(n.rank===1,function(){return"slice1d expects a rank-1 tensor, but got a rank-"+n.rank+" tensor"}),Ft(n,[t],[e])}}),xv=S({slice2d_:function(r,t,e){var n=_(r,"x","slice2d");return E(n.rank===2,function(){return"slice2d expects a rank-2 tensor, but got a rank-"+n.rank+" tensor"}),Ft(n,t,e)}}),tc=S({slice3d_:function(r,t,e){var n=_(r,"x","slice3d");return E(n.rank===3,function(){return"slice3d expects a rank-3 tensor, but got a rank-"+n.rank+" tensor"}),Ft(n,t,e)}}),bv=S({slice4d_:function(r,t,e){var n=_(r,"x","slice4d");return E(n.rank===4,function(){return"slice4d expects a rank-4 tensor, but got a rank-"+n.rank+" tensor"}),Ft(n,t,e)}});function nc(r,t,e,n,o){return t.rank<e.rank&&(t=t.reshape(et(t.shape,n))),r.rank<e.rank&&(r=r.reshape(et(r.shape,n))),{x:function(){var i=r.mul(e.equal(t).cast(r.dtype));return o==null?i:i.transpose(o)}}}var wv=S({all_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","all","bool"),o=Be(t,n.shape),i=o,a=Ot(i,n.rank);a!=null&&(n=n.transpose(a),i=Bt(i.length,n.rank));var s=T.runKernelFunc(function(c){return c.all(n,i)},{$x:n});if(e){var u=et(s.shape,o);return s.reshape(u)}return s}}),Cv=S({any_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","any","bool"),o=Be(t,n.shape),i=o,a=Ot(i,n.rank);a!=null&&(n=n.transpose(a),i=Bt(i.length,n.rank));var s=T.runKernelFunc(function(c){return c.any(n,i)},{$x:n});if(e){var u=et(s.shape,o);return s.reshape(u)}return s}}),_v=S({argMax_:function(r,t){t===void 0&&(t=0);var e=_(r,"x","argMax");t==null&&(t=0);var n=Be(t,e.shape),o=Ot(n,e.rank);o!=null&&(e=e.transpose(o),n=Bt(n.length,e.rank));var i={axis:n[0]},a=[e];return T.runKernelFunc(function(s,u){var c=s.argMax(e,n[0]);return u([e]),c},{x:e},function(s,u){var c=u[0];return{x:function(){return ve(c)}}},"ArgMax",i,a)}}),Ev=S({argMin_:function(r,t){t===void 0&&(t=0);var e=_(r,"x","argMin");t==null&&(t=0);var n=Be(t,e.shape),o=Ot(n,e.rank);return o!=null&&(e=e.transpose(o),n=Bt(n.length,e.rank)),T.runKernelFunc(function(i,a){var s=i.argMin(e,n[0]);return a([e]),s},{$x:e},function(i,a){var s=a[0];return{$x:function(){return ve(s)}}})}}),Iv=S({logSumExp_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","logSumExp"),o=Be(t,n.shape),i=n.max(o,!0),a=n.sub(i).exp().sum(o).log(),s=i.reshape(a.shape).add(a);if(e){var u=et(s.shape,o);return s.reshape(u)}return s}}),mo=S({max_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","max"),o=n,i=Be(t,n.shape),a=i,s=Ot(a,n.rank);s!=null&&(n=n.transpose(s),a=Bt(a.length,n.rank));var u=[n],c=T.runKernelFunc(function(h,f){var d=h.max(n,a);return f([o,d]),d},{x:n},function(h,f){return nc(h,f[1],f[0],i,s)},"Max",{axes:a},u,[!0]);if(e){var l=et(c.shape,i);c=c.reshape(l)}return c}}),Av=S({mean_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","mean"),o=Be(t,n.shape),i=Y(qe(n.shape,o)[1]);return lo(function(a){var s=q(i);return{value:(s.dtype===a.dtype?a:a.cast(s.dtype)).div(s).sum(t,e),gradFunc:function(u){var c=a.shape.slice();return o.forEach(function(l){c[l]=1}),u.reshape(c).mul(Yn(a.shape,"float32")).div(i)}}})(n)}}),kv=S({min_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","min"),o=n,i=Be(t,n.shape),a=i,s=Ot(a,n.rank);s!=null&&(n=n.transpose(s),a=Bt(a.length,n.rank));var u=[n],c=T.runKernelFunc(function(h,f){var d=h.min(n,a);return f([o,d]),d},{x:n},function(h,f){return nc(h,f[1],f[0],i,s)},"Min",{axes:a},u,[!0]);if(e){var l=et(c.shape,i);c=c.reshape(l)}return c}}),Rv=S({moments_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=Be(t,(r=_(r,"x","moments")).shape),o=r.mean(n,e),i=o.shape;e||(i=et(o.shape,n));var a=r.toFloat().sub(o.reshape(i)).square();return{mean:o,variance:a.mean(n,e)}}}),rc=S({sum_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","sum");n.dtype==="bool"&&(n=n.toInt());var o=Be(t,n.shape);return lo(function(i){var a=Ot(o,i.rank),s=o,u=i;a!=null&&(u=i.transpose(a),s=Bt(s.length,i.rank));var c=function(d){var p=i.shape.slice();return o.forEach(function(v){p[v]=1}),d.reshape(p).mul(Yn(i.shape,"float32"))},l={axes:s},h=T.runKernelFunc(function(d){return d.sum(u,s)},{x:u},function(d){return{x:function(){return c(d)}}},"Sum",l);if(e){var f=et(h.shape,o);h=h.reshape(f)}return{value:h,gradFunc:c}})(n)}}),Sv=S({prod_:function(r,t,e){t===void 0&&(t=null),e===void 0&&(e=!1);var n=_(r,"x","prod");n.dtype==="bool"&&(n=n.toInt());var o=Be(t,n.shape),i=Ot(o,n.rank),a=o,s=n;i!=null&&(s=n.transpose(i),a=Bt(a.length,n.rank));var u=T.runKernelFunc(function(l){return l.prod(s,a)},{permutedX:s});if(e){var c=et(u.shape,o);u=u.reshape(c)}return u}}),oc=S({elu_:function(r){var t=_(r,"x","elu");return T.runKernelFunc(function(e,n){var o=e.elu(t);return n([o]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){return T.runKernelFunc(function(i){return i.eluDer(e,o)},{dy:e,y:o})}}})}}),Dv=S({leakyRelu_:function(r,t){t===void 0&&(t=.2);var e=_(r,"x","leakyRelu");return $i(q(t).mul(e),e)}}),ic=S({prelu_:function(r,t){var e=_(r,"x","prelu"),n=_(t,"alpha","prelu");return T.runKernelFunc(function(o,i){var a=o.prelu(e,n);return i([e,n]),a},{x:e,alpha:n},function(o,i){var a=i[0],s=i[1],u=a.greater(0);return{x:function(){return bn(u,o,o.mul(s))},alpha:function(){var c=bn(u,ve(o),o.mul(a)),l=Me(s.shape,o.shape);return l.length>0&&(c=c.sum(l)),c.reshape(s.shape)}}},"Prelu")}}),Ie=S({relu_:function(r){var t=_(r,"x","relu");return t.dtype==="bool"?t.toInt():T.runKernelFunc(function(e,n){var o=e.relu(t);return n([t]),o},{x:t},function(e,n){var o=n[0];return{x:function(){return e.mulStrict(o.step().toFloat())}}},"Relu")}}),ac=S({relu6_:function(r){var t=_(r,"x","relu6");return t.dtype==="bool"?t.toInt():T.runKernelFunc(function(e,n){var o=e.relu6(t);return n([t]),o},{x:t},function(e,n){var o=n[0],i=o.lessEqual(6).mul(o.step());return{x:function(){return e.mulStrict(i.toFloat())}}},"Relu6")}}),Tv=S({selu_:function(r){var t=_(r,"x","selu");return T.runKernelFunc(function(e,n){var o=e.selu(t);return n([t]),o},{$x:t},function(e,n){var o=n[0];return{$x:function(){var i=o.greater(q(0)),a=q(Hi),s=q(qi),u=e.mul(s),c=e.mul(a).mul(o.toFloat().exp());return bn(i,u,c)}}})}}),sn=S({transpose_:function(r,t){var e=_(r,"x","transpose");if(t==null&&(t=e.shape.map(function(o,i){return i}).reverse()),E(e.rank===t.length,function(){return"Error in transpose: rank of input "+e.rank+" must match length of perm "+t+"."}),t.forEach(function(o){E(o>=0&&o<e.rank,function(){return"All entries in 'perm' must be between 0 and "+(e.rank-1)+" but got "+t})}),e.rank<=1)return e.clone();var n={perm:t};return T.runKernelFunc(function(o){return o.transpose(e,t)},{x:e},function(o){var i=Pi(t);return{x:function(){return o.transpose(i)}}},"Transpose",n)}}),Fv=S({localResponseNormalization_:function(r,t,e,n,o){t===void 0&&(t=5),e===void 0&&(e=1),n===void 0&&(n=1),o===void 0&&(o=.5);var i=_(r,"x","localResponseNormalization");E(i.rank===4||i.rank===3,function(){return`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank `+i.rank+"."}),E(De(t),function(){return"Error in localResponseNormalization: depthRadius must be an integer but got depthRadius "+t+"."});var a=i,s=!1;i.rank===3&&(s=!0,a=i.as4D(1,i.shape[0],i.shape[1],i.shape[2]));var u=T.runKernelFunc(function(c,l){var h=c.localResponseNormalization4D(a,t,e,n,o);return l([a,h]),h},{x4D:a},function(c,l){var h=l[0],f=l[1];return{x4D:function(){return T.runKernelFunc(function(d){return d.LRNGrad(c,h,f,t,e,n,o)},{})}}});return s?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),sc=S({norm_:function(r,t,e,n){t===void 0&&(t="euclidean"),e===void 0&&(e=null),n===void 0&&(n=!1);var o=function s(u,c,l){if(l===void 0&&(l=null),u.rank===0)return u.abs();if(u.rank!==1&&l===null)return s(u.reshape([-1]),c,l);if(u.rank===1||typeof l=="number"||Array.isArray(l)&&l.length===1){if(c===1)return u.abs().sum(l);if(c===1/0)return u.abs().max(l);if(c===-1/0)return u.abs().min(l);if(c==="euclidean"||c===2)return u.abs().pow(q(2,"int32")).sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}if(Array.isArray(l)&&l.length===2){if(c===1)return u.abs().sum(l[0]).max(l[1]-1);if(c===1/0)return u.abs().sum(l[1]).max(l[0]);if(c===-1/0)return u.abs().sum(l[1]).min(l[0]);if(c==="fro"||c==="euclidean")return u.square().sum(l).sqrt();throw new Error("Error in norm: invalid ord value: "+c)}throw new Error("Error in norm: invalid axis: "+l)}(r=_(r,"x","norm"),t,e),i=o.shape;if(n){var a=Be(e,r.shape);i=et(o.shape,a)}return o.reshape(i)}}),Nv=S({basicLSTMCell_:function(r,t,e,n,o,i){var a=_(r,"forgetBias","basicLSTMCell"),s=_(t,"lstmKernel","basicLSTMCell"),u=_(e,"lstmBias","basicLSTMCell"),c=_(n,"data","basicLSTMCell"),l=_(o,"c","basicLSTMCell"),h=_(i,"h","basicLSTMCell"),f=c.concat(h,1).matMul(s).add(u),d=f.shape[0],p=f.shape[1]/4,v=[d,p],m=f.slice([0,0],v),g=f.slice([0,p],v),y=f.slice([0,2*p],v),b=f.slice([0,3*p],v),x=m.sigmoid().mulStrict(g.tanh()).addStrict(l.mulStrict(a.add(y).sigmoid())),w=x.tanh().mulStrict(b.sigmoid());return[x,w]}}),Pv=S({multiRNNCell_:function(r,t,e,n){for(var o=_(t,"data","multiRNNCell"),i=jr(e,"c","multiRNNCell"),a=jr(n,"h","multiRNNCell"),s=o,u=[],c=0;c<r.length;c++){var l=r[c](s,i[c],a[c]);u.push(l[0]),u.push(l[1]),s=l[1]}var h=[],f=[];for(c=0;c<u.length;c+=2)h.push(u[c]),f.push(u[c+1]);return[h,f]}}),Mv=S({movingAverage_:function(r,t,e,n,o){o===void 0&&(o=!0);var i=_(r,"v","movingAverage"),a=_(t,"x","movingAverage"),s=_(e,"decay","movingAverage");Tl(i,a),E(We(i.shape,a.shape),function(){return"Shape mismatch in v and x"});var u=q(1),c=u.sub(s),l=a.sub(i).mul(c);if(o){E(n!=null,function(){return"When using zeroDebias: true, step is required."});var h=_(n,"step","movingAverage");l=l.div(u.sub(no(s,h)))}return i.add(l)}}),Ov=S({stridedSlice_:function(r,t,e,n,o,i,a,s,u){if(o===void 0&&(o=0),i===void 0&&(i=0),a===void 0&&(a=0),s===void 0&&(s=0),u===void 0&&(u=0),n==null&&(n=new Array(t.length)),a!==0)throw new Error("ellipsis mask is not yet supported");var c=_(r,"x","stridedSlice"),l=Xa(s),h=c.shape.slice();l.forEach(function(m){t[m]=0,e[m]=1,h.splice(m,0,1)}),c=c.reshape(h);for(var f=0;f<c.rank;f++)t[f]=qh(o,t,n,c.shape,f),e[f]=jh(i,e,n,c.shape,f),n[f]=n[f]||1;var d=Xa(u);d.forEach(function(m){e[m]=t[m]+1,n[m]=1});var p=Li(t,e,n),v=p.filter(function(m,g){return d.indexOf(g)===-1});return n.every(function(m){return m===1})?Ft(c,t,p).reshape(v):T.runKernelFunc(function(m){return m.stridedSlice(c,t,e,n)},{$x:c}).reshape(v)}}),Bv=S({topk_:function(r,t,e){t===void 0&&(t=1),e===void 0&&(e=!0);var n=_(r,"x","topk");if(n.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");var o=n.shape[n.shape.length-1];if(t>o)throw new Error("'k' passed to topk() must be <= the last dimension ("+o+") but got "+t);var i=T.runKernelFunc(function(a){return a.topk(n,t,e)},{$x:n});return{values:i[0],indices:i[1]}}}),Lv=S({scatterND_:function(r,t,e){var n=_(r,"indices","scatterND","int32"),o=_(t,"updates","scatterND");return Gh(o,n,e),T.runKernelFunc(function(i){return i.scatterND(n,o,e)},{indices:n,updates:o},null,"ScatterNd",{shape:e})}}),Ji=S({fft_:function(r){E(r.dtype==="complex64",function(){return"The dtype for tf.spectral.fft() must be complex64 but got "+r.dtype+"."});var t=r.shape[r.shape.length-1],e=r.size/t,n=r.as2D(e,t);return T.runKernelFunc(function(o){return o.fft(n)},{input:r}).reshape(r.shape)}}),ro=S({ifft_:function(r){E(r.dtype==="complex64",function(){return"The dtype for tf.spectral.ifft() must be complex64 but got "+r.dtype+"."});var t=r.shape[r.shape.length-1],e=r.size/t,n=r.as2D(e,t);return T.runKernelFunc(function(o){return o.ifft(n)},{input:r}).reshape(r.shape)}}),Qi=S({rfft_:function(r,t){E(r.dtype==="float32",function(){return"The dtype for rfft() must be real value but got "+r.dtype});var e,n=r.shape[r.shape.length-1],o=r.size/n;if(t!=null&&t<n){var i=r.shape.map(function(g){return 0}),a=r.shape.map(function(g){return g});a[r.shape.length-1]=t,e=r.slice(i,a),n=t}else if(t!=null&&t>n){var s=r.shape.map(function(g){return g});s[r.shape.length-1]=t-n,e=r.concat(we(s),r.shape.length-1),n=t}else e=r;var u=e.zerosLike(),c=ze(e,u).as2D(o,n),l=Ji(c),h=Math.floor(n/2)+1,f=ht(l),d=At(l),p=f.split([h,n-h],f.shape.length-1),v=d.split([h,n-h],d.shape.length-1),m=e.shape.slice();return m[e.shape.length-1]=h,ze(p[0],v[0]).reshape(m)}}),uc=S({irfft_:function(r){var t=r.shape[r.shape.length-1],e=r.size/t;if(t<=2){var n=r.as2D(e,t),o=ro(n);return ht(o)}var i=[e,2*(t-1)],a=ht(r).as2D(e,t),s=At(r).as2D(e,t),u=a.slice([0,1],[e,t-2]).reverse(1),c=s.slice([0,1],[e,t-2]).reverse(1).mul(q(-1)),l=a.concat(u,1),h=s.concat(c,1);return n=ze(l,h).as2D(i[0],i[1]),o=ro(n),ht(o)}}),Wv=Object.freeze({fft:Ji,ifft:ro,rfft:Qi,irfft:uc}),Vv=S({sparseToDense_:function(r,t,e,n){n===void 0&&(n=0);var o=_(r,"sparseIndices","sparseToDense","int32"),i=_(t,"sparseValues","sparseToDense"),a=_(n,"defaultValue","sparseToDense",i.dtype);return function(s,u,c,l){if(s.dtype!=="int32")throw new Error("tf.sparseToDense() expects the indices to be int32 type, but the dtype was "+s.dtype+".");if(s.rank>2)throw new Error("sparseIndices should be a scalar, vector, or matrix, but got shape "+s.shape+".");var h=s.rank>0?s.shape[0]:1,f=s.rank>1?s.shape[1]:1;if(c.length!==f)throw new Error("outputShape has incorrect number of elements:, "+c.length+", should be: "+f+".");var d=u.size;if(u.rank!==0&&(u.rank!==1||d!==h))throw new Error("sparseValues has incorrect shape "+u.shape+", should be [] or ["+h+"]");if(u.dtype!==l.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}(o,i,e,a),T.runKernelFunc(function(s){return s.sparseToDense(o,i,e,a)},{$sparseIndices:o,$sparseValues:i,$defaultValue:a})}}),zv=S({gatherND_:function(r,t){var e=_(t,"indices","gatherND","int32"),n=_(r,"x","gatherND");return T.runKernelFunc(function(o){return o.gatherND(n,e)},{x:n,indices:e},null,"GatherNd")}}),Uv=S({diag_:function(r){var t=_(r,"x","diag").flatten(),e=r.shape.concat(r.shape);return T.runKernelFunc(function(n){return n.diag(t)},{$x:t}).reshape(e)}}),Gv=S({dropout_:function(r,t,e,n){var o=_(r,"x","dropout");if(E(o.dtype==="float32",function(){return"x has to be a floating point tensor since it's going to be scaled, but got a "+o.dtype+" tensor instead."}),E(t>=0&&t<1,function(){return"rate must be a float in the range [0, 1), but got "+t+"."}),t===0)return r instanceof Ee?o.clone():o;var i=function(u,c){if(c==null)return u.shape.slice();if(We(u.shape,c))return c;if(u.shape.length===c.length){for(var l=[],h=0;h<u.shape.length;h++)c[h]==null&&u.shape[h]!=null?l.push(u.shape[h]):l.push(c[h]);return l}return c}(o,e),a=1-t,s=iu(i,0,1,"float32",n).add(a).floor().div(a);return o.mul(s)}});function cc(r,t,e){for(var n=1-r%2,o=new Float32Array(r),i=0;i<r;++i){var a=2*Math.PI*i/(r+n-1);o[i]=t-e*Math.cos(a)}return Te(o,"float32")}var Zi=S({hannWindow_:function(r){return cc(r,.5,.5)}}),lc=S({hammingWindow_:function(r){return cc(r,.54,.46)}}),ea=S({frame_:function(r,t,e,n,o){n===void 0&&(n=!1),o===void 0&&(o=0);for(var i=0,a=[];i+t<=r.size;)a.push(Ft(r,i,t)),i+=e;if(n)for(;i<r.size;){var s=i+t-r.size,u=Ne([Ft(r,i,t-s),Dt([s],o)]);a.push(u),i+=e}return a.length===0?rn([],[0,t]):Ne(a).as2D(a.length,t)}}),hc=S({stft_:function(r,t,e,n,o){var i;o===void 0&&(o=Zi),n==null&&(i=t,n=Math.floor(Math.pow(2,Math.ceil(Math.log(i)/Math.log(2)))));for(var a=ea(r,t,e),s=Xe(a,o(t)),u=[],c=0;c<a.shape[0];c++)u.push(Qi(s.slice([c,0],[1,t]),n));return Ne(u)}}),Hv=Object.freeze({hannWindow:Zi,hammingWindow:lc,frame:ea,stft:hc}),Ke,qv=function(r,t,e){return e===void 0&&(e=1),K(this,void 0,void 0,function(){var n,o,i,a,s,u,c,l,h,f,d,p,v,m;return X(this,function(g){switch(g.label){case 0:return n=_(r,"predictions","inTopK"),o=_(t,"targets","inTopK"),E(n.rank>1,function(){return"inTopK() expects the predictions to be of rank 2 or higher, but got "+n.rank}),E(n.rank-1===o.rank,function(){return"predictions rank should be 1 larger than targets rank, but got predictions rank "+n.rank+" and targets rank "+o.rank}),ye(n.shape.slice(0,n.shape.length-1),o.shape,"predictions's shape should be align with the targets' shape, except the last dimension."),i=n.shape[n.shape.length-1],E(e>0&&e<=i,function(){return"'k' passed to inTopK() must be > 0 && <= the predictions last dimension ("+i+"), but got "+e}),[4,n.data()];case 1:return a=g.sent(),[4,o.data()];case 2:for(s=g.sent(),u=[a.length/i,i],l=u[1],h=ir("bool",c=u[0]),f=0;f<c;f++){for(d=f*l,p=a.subarray(d,d+l),v=[],m=0;m<p.length;m++)v.push({value:p[m],index:m});for(v.sort(function(y,b){return b.value-y.value}),h[f]=0,m=0;m<e;m++)if(v[m].index===s[f]){h[f]=1;break}}return r!==n&&n.dispose(),t!==o&&o.dispose(),[2,Ge(h,o.shape,"bool")]}})})};(function(r){r[r.NONE=0]="NONE",r[r.MEAN=1]="MEAN",r[r.SUM=2]="SUM",r[r.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(Ke||(Ke={}));var jv=S({absoluteDifference_:function(r,t,e,n){n===void 0&&(n=Ke.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","absoluteDifference"),i=_(t,"predictions","absoluteDifference"),a=null;e!=null&&(a=_(e,"weights","absoluteDifference")),ye(o.shape,i.shape,"Error in absoluteDifference: ");var s=o.sub(i).abs();return jt(s,a,n)}}),jt=S({computeWeightedLoss_:function(r,t,e){e===void 0&&(e=Ke.SUM_BY_NONZERO_WEIGHTS);var n=_(r,"losses","computeWeightedLoss"),o=null;t!=null&&(o=_(t,"weights","computeWeightedLoss"));var i=o==null?n:n.mul(o);if(e===Ke.NONE)return i;if(e===Ke.SUM)return i.sum();if(e===Ke.MEAN){if(o==null)return i.mean();var a=n.size/o.size,s=i.sum().div(o.sum());return a>1?s.div(q(a)):s}if(e===Ke.SUM_BY_NONZERO_WEIGHTS){if(o==null)return i.sum().div(q(n.size));var u=o.mul(Yn(n.shape)).notEqual(q(0)).sum().toFloat();return i.sum().div(u)}throw Error("Unknown reduction: "+e)}}),$v=S({cosineDistance_:function(r,t,e,n,o){o===void 0&&(o=Ke.SUM_BY_NONZERO_WEIGHTS);var i=_(r,"labels","cosineDistance"),a=_(t,"predictions","cosineDistance"),s=null;n!=null&&(s=_(n,"weights","cosineDistance")),ye(i.shape,a.shape,"Error in cosineDistance: ");var u=q(1).sub(i.mul(a).sum(e,!0));return jt(u,s,o)}}),Kv=S({hingeLoss_:function(r,t,e,n){n===void 0&&(n=Ke.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","hingeLoss"),i=_(t,"predictions","hingeLoss"),a=null;e!=null&&(a=_(e,"weights","hingeLoss")),ye(o.shape,i.shape,"Error in hingeLoss: ");var s=q(1);o=q(2).mul(o).sub(s);var u=s.sub(o.mul(i)).relu();return jt(u,a,n)}}),Xv=S({huberLoss_:function(r,t,e,n,o){n===void 0&&(n=1),o===void 0&&(o=Ke.SUM_BY_NONZERO_WEIGHTS);var i=_(r,"labels","huberLoss"),a=_(t,"predictions","huberLoss"),s=null;e!=null&&(s=_(e,"weights","huberLoss")),ye(i.shape,a.shape,"Error in huberLoss: ");var u=q(n),c=a.sub(i).abs(),l=Hu(c,u),h=c.sub(l),f=q(.5).mul(l.square()).add(u.mul(h));return jt(f,s,o)}}),Yv=S({logLoss_:function(r,t,e,n,o){n===void 0&&(n=1e-7),o===void 0&&(o=Ke.SUM_BY_NONZERO_WEIGHTS);var i=_(r,"labels","logLoss"),a=_(t,"predictions","logLoss"),s=null;e!=null&&(s=_(e,"weights","logLoss")),ye(i.shape,a.shape,"Error in logLoss: ");var u=q(1),c=q(n),l=i.mul(a.add(c).log()).neg().sub(u.sub(i).mul(u.sub(a).add(c).log()));return jt(l,s,o)}}),Jv=S({meanSquaredError_:function(r,t,e,n){n===void 0&&(n=Ke.SUM_BY_NONZERO_WEIGHTS);var o=_(r,"labels","meanSquaredError"),i=_(t,"predictions","meanSquaredError"),a=null;e!=null&&(a=_(e,"weights","meanSquaredError")),ye(o.shape,i.shape,"Error in meanSquaredError: ");var s=o.squaredDifference(i);return jt(s,a,n)}}),Qv=S({sigmoidCrossEntropy_:function(r,t,e,n,o){n===void 0&&(n=0),o===void 0&&(o=Ke.SUM_BY_NONZERO_WEIGHTS);var i=_(r,"multiClassLabels","sigmoidCrossEntropy"),a=_(t,"logits","sigmoidCrossEntropy"),s=null;if(e!=null&&(s=_(e,"weights","sigmoidCrossEntropy")),ye(i.shape,a.shape,"Error in sigmoidCrossEntropy: "),n>0){var u=q(n),c=q(1),l=q(.5);i=i.mul(c.sub(u)).add(l.mul(u))}var h=function(f,d){var p=_(f,"labels","sigmoidCrossEntropyWithLogits"),v=_(d,"logits","sigmoidCrossEntropyWithLogits");ye(p.shape,v.shape,"Error in sigmoidCrossEntropyWithLogits: ");var m=v.relu(),g=v.mul(p),y=v.abs().neg().exp().log1p();return m.sub(g).add(y)}(i,a);return jt(h,s,o)}}),Zv=S({softmaxCrossEntropy_:function(r,t,e,n,o){n===void 0&&(n=0),o===void 0&&(o=Ke.SUM_BY_NONZERO_WEIGHTS);var i=_(r,"onehotLabels","softmaxCrossEntropy"),a=_(t,"logits","softmaxCrossEntropy"),s=null;if(e!=null&&(s=_(e,"weights","softmaxCrossEntropy")),ye(i.shape,a.shape,"Error in softmaxCrossEntropy: "),n>0){var u=q(n),c=q(1),l=q(i.shape[1]);i=i.mul(c.sub(u)).add(u.div(l))}var h=function(f,d,p){if(p===void 0&&(p=-1),p===-1&&(p=d.rank-1),p!==d.rank-1)throw Error("Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank "+d.rank+" and dim was "+p);return lo(function(v,m,g){var y=m.logSumExp([p],!0),b=m.toFloat().sub(y);return g([v,b]),{value:b.mul(v).neg().sum([p]),gradFunc:function(x,w){var C=w[0],R=w[1],k=et(x.shape,[p]);return[x.reshape(k).mul(C.toFloat().sub(R.exp())),x.reshape(k).mul(R.exp().sub(C.toFloat()))]}}})(f,d)}(i,a);return jt(h,s,o)}}),em=Object.freeze({get Reduction(){return Ke},absoluteDifference:jv,computeWeightedLoss:jt,cosineDistance:$v,hingeLoss:Kv,huberLoss:Xv,logLoss:Yv,meanSquaredError:Jv,sigmoidCrossEntropy:Qv,softmaxCrossEntropy:Zv});function gs(r,t){return t===void 0&&(t=!1),T.tidy(function(){if(r.shape.length!==2)throw new Error("qr2d() requires a 2D Tensor, but got a "+r.shape.length+"D Tensor.");for(var e=r.shape[0],n=r.shape[1],o=ou(e),i=r.clone(),a=rn([[1]],[1,1]),s=a.clone(),u=e>=n?n:e,c=function(h){var f,d=i,p=s,v=o;f=T.tidy(function(){var m=i.slice([h,h],[e-h,1]),g=m.norm(),y=i.slice([h,h],[1,1]),b=rn([[-1]]).where(y.greater(0),rn([[1]])),x=y.sub(b.mul(g)),w=m.div(x);s=w.shape[0]===1?a.clone():a.concat(w.slice([1,0],[w.shape[0]-1,w.shape[1]]),0);var C=b.matMul(x).div(g).neg(),R=i.slice([h,0],[e-h,n]),k=C.mul(s);if(h===0)i=R.sub(k.matMul(s.transpose().matMul(R)));else{var I=R.sub(k.matMul(s.transpose().matMul(R)));i=i.slice([0,0],[h,n]).concat(I,0)}var A=o.slice([0,h],[e,o.shape[1]-h]);if(h===0)o=A.sub(A.matMul(s).matMul(k.transpose()));else{var F=A.sub(A.matMul(s).matMul(k.transpose()));o=o.slice([0,0],[e,h]).concat(F,1)}return[s,i,o]}),s=f[0],i=f[1],o=f[2],Ze([d,p,v])},l=0;l<u;++l)c(l);return!t&&e>n&&(o=o.slice([0,0],[e,n]),i=i.slice([0,0],[n,n])),[o,i]})}var tm=S({bandPart_:function(r,t,e){if(t%1!=0)throw new Error("bandPart(): numLower must be an integer, got "+t+".");if(e%1!=0)throw new Error("bandPart(): numUpper must be an integer, got "+e+".");var n=_(r,"a","bandPart");if(n.rank<2)throw new Error("bandPart(): Rank must be at least 2, got "+n.rank+".");var o=n.shape,i=n.shape.slice(-2),a=i[0],s=i[1];if(!(t<=a))throw new Error("bandPart(): numLower ("+t+") must not be greater than the number of rows ("+a+").");if(!(e<=s))throw new Error("bandPart(): numUpper ("+e+") must not be greater than the number of columns ("+s+").");t<0&&(t=a),e<0&&(e=s);var u=$r(0,a,1,"int32").reshape([-1,1]),c=$r(0,s,1,"int32"),l=Oe(u,c),h=fo(l.lessEqual(q(+t,"int32")),l.greaterEqual(q(-e,"int32"))),f=we([a,s],n.dtype);return ut(Pe(n.reshape([-1,a,s])).map(function(d){return bn(h,d,f)})).reshape(o)}}),nm=S({gramSchmidt_:function(r){var t;if(Array.isArray(r)){t=!1,E(r!=null&&r.length>0,function(){return"Gram-Schmidt process: input must not be null, undefined, or empty"});for(var e=r[0].shape[0],n=function(u){E(r[u].shape[0]===e,function(){return"Gram-Schmidt: Non-unique lengths found in the input vectors: ("+r[u].shape[0]+" vs. "+e+")"})},o=1;o<r.length;++o)n(o)}else t=!0,r=Oi(r,r.shape[0],0).map(function(u){return su(u,[0])});E(r.length<=r[0].shape[0],function(){return"Gram-Schmidt: Number of vectors ("+r.length+") exceeds number of dimensions ("+r[0].shape[0]+")."});var i=[],a=r,s=function(u){i.push(T.tidy(function(){var c=a[u];if(u>0)for(var l=0;l<u;++l){var h=rc(i[l].mulStrict(c)).mul(i[l]);c=c.sub(h)}return c.div(sc(c,"euclidean"))}))};for(o=0;o<r.length;++o)s(o);return t?ut(i,0):i}}),rm=S({qr_:function(r,t){if(t===void 0&&(t=!1),r.rank<2)throw new Error("qr() requires input tensor to have a rank >= 2, but got rank "+r.rank);if(r.rank===2)return gs(r,t);var e=r.shape.slice(0,r.shape.length-2).reduce(function(a,s){return a*s}),n=Pe(r.reshape([e,r.shape[r.shape.length-2],r.shape[r.shape.length-1]]),0),o=[],i=[];return n.forEach(function(a){var s=gs(a,t),u=s[0],c=s[1];o.push(u),i.push(c)}),[ut(o,0).reshape(r.shape),ut(i,0).reshape(r.shape)]}}),om=Object.freeze({bandPart:tm,gramSchmidt:nm,qr:rm});function go(r,t,e,n,o,i){n==null&&(n=.5),o==null&&(o=Number.NEGATIVE_INFINITY),i==null&&(i=0);var a=r.shape[0];return e=Math.min(e,a),E(0<=n&&n<=1,function(){return"iouThreshold must be in [0, 1], but was '"+n+"'"}),E(r.rank===2,function(){return"boxes must be a 2D tensor, but was of rank '"+r.rank+"'"}),E(r.shape[1]===4,function(){return"boxes must have 4 columns, but 2nd dimension was "+r.shape[1]}),E(t.rank===1,function(){return"scores must be a 1D tensor"}),E(t.shape[0]===a,function(){return"scores has incompatible shape with boxes. Expected "+a+", but was "+t.shape[0]}),E(0<=i&&i<=1,function(){return"softNmsSigma must be in [0, 1], but was '"+i+"'"}),{maxOutputSize:e,iouThreshold:n,scoreThreshold:o,softNmsSigma:i}}var im=S({resizeBilinear_:function(r,t,e){e===void 0&&(e=!1);var n=_(r,"images","resizeBilinear");E(n.rank===3||n.rank===4,function(){return"Error in resizeBilinear: x must be rank 3 or 4, but got rank "+n.rank+"."}),E(t.length===2,function(){return"Error in resizeBilinear: new shape must 2D, but got shape "+t+"."});var o=n,i=!1;n.rank===3&&(i=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var a=t[0],s=t[1],u=T.runKernelFunc(function(c,l){return l([o]),c.resizeBilinear(o,a,s,e)},{x:o},function(c,l){return{x:function(){return T.runKernelFunc(function(h){return h.resizeBilinearBackprop(c,l[0],e)},{})}}},"ResizeBilinear",{alignCorners:e,newHeight:a,newWidth:s});return i?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),am=S({resizeNearestNeighbor_:function(r,t,e){e===void 0&&(e=!1);var n=_(r,"images","resizeNearestNeighbor");E(n.rank===3||n.rank===4,function(){return"Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank "+n.rank+"."}),E(t.length===2,function(){return"Error in resizeNearestNeighbor: new shape must 2D, but got shape "+t+"."}),E(n.dtype==="float32"||n.dtype==="int32",function(){return"`images` must have `int32` or `float32` as dtype"});var o=n,i=!1;n.rank===3&&(i=!0,o=n.as4D(1,n.shape[0],n.shape[1],n.shape[2]));var a=t[0],s=t[1],u=T.runKernelFunc(function(c,l){return l([o]),c.resizeNearestNeighbor(o,a,s,e)},{batchImages:o},function(c,l){return{batchImages:function(){return T.runKernelFunc(function(h){return h.resizeNearestNeighborBackprop(c,l[0],e)},{})}}});return i?u.as3D(u.shape[1],u.shape[2],u.shape[3]):u}}),sm=S({nonMaxSuppression_:function(r,t,e,n,o){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY);var i=_(r,"boxes","nonMaxSuppression"),a=_(t,"scores","nonMaxSuppression"),s=go(i,a,e,n,o);e=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold;var u={maxOutputSize:e,iouThreshold:n,scoreThreshold:o};return T.runKernelFunc(function(c){return c.nonMaxSuppression(i,a,e,n,o)},{boxes:i,scores:a},null,"NonMaxSuppressionV3",u)}}),um=function(r,t,e,n,o){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),K(this,void 0,void 0,function(){var i,a,s,u,c,l,h;return X(this,function(f){switch(f.label){case 0:return i=_(r,"boxes","nonMaxSuppressionAsync"),a=_(t,"scores","nonMaxSuppressionAsync"),s=go(i,a,e,n,o),e=s.maxOutputSize,n=s.iouThreshold,o=s.scoreThreshold,[4,Promise.all([i.data(),a.data()])];case 1:return u=f.sent(),c=u[0],l=u[1],h=Vi(c,l,e,n,o),i!==r&&i.dispose(),a!==t&&a.dispose(),[2,h]}})})},cm=S({nonMaxSuppressionWithScore_:function(r,t,e,n,o,i){n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),i===void 0&&(i=0);var a=_(r,"boxes","nonMaxSuppression"),s=_(t,"scores","nonMaxSuppression"),u=go(a,s,e,n,o,i),c={maxOutputSize:e=u.maxOutputSize,iouThreshold:n=u.iouThreshold,scoreThreshold:o=u.scoreThreshold,softNmsSigma:i=u.softNmsSigma},l=T.runKernel("NonMaxSuppressionV5",{boxes:a,scores:s},c);return{selectedIndices:l[0],selectedScores:l[1]}}}),lm=function(r,t,e,n,o,i){return n===void 0&&(n=.5),o===void 0&&(o=Number.NEGATIVE_INFINITY),i===void 0&&(i=0),K(this,void 0,void 0,function(){var a,s,u,c,l,h,f;return X(this,function(d){switch(d.label){case 0:return a=_(r,"boxes","nonMaxSuppressionAsync"),s=_(t,"scores","nonMaxSuppressionAsync"),u=go(a,s,e,n,o,i),e=u.maxOutputSize,n=u.iouThreshold,o=u.scoreThreshold,i=u.softNmsSigma,[4,Promise.all([a.data(),s.data()])];case 1:return c=d.sent(),l=c[0],h=c[1],f=zi(l,h,e,n,o,i),a!==r&&a.dispose(),s!==t&&s.dispose(),[2,f]}})})},hm=S({cropAndResize_:function(r,t,e,n,o,i){var a=_(r,"image","cropAndResize"),s=_(t,"boxes","cropAndResize","float32"),u=_(e,"boxInd","cropAndResize","int32");o=o||"bilinear",i=i||0;var c=s.shape[0];return E(a.rank===4,function(){return"Error in cropAndResize: image must be rank 4,but got rank "+a.rank+"."}),E(s.rank===2&&s.shape[1]===4,function(){return"Error in cropAndResize: boxes must be have size ["+c+",4] but had shape "+s.shape+"."}),E(u.rank===1&&u.shape[0]===c,function(){return"Error in cropAndResize: boxInd must be have size ["+c+"] but had shape "+s.shape+"."}),E(n.length===2,function(){return"Error in cropAndResize: cropSize must be of length 2, but got length "+n.length+"."}),E(n[0]>=1&&n[1]>=1,function(){return"cropSize must be atleast [1,1], but was "+n}),E(o==="bilinear"||o==="nearest",function(){return"method must be bilinear or nearest, but was "+o}),T.runKernelFunc(function(l,h){return l.cropAndResize(a,s,u,n,o,i)},{images:a,boxes:s,boxInd:u},null,"CropAndResize",{method:o,extrapolationValue:i,cropSize:n})}}),ta=Object.freeze({resizeBilinear:im,resizeNearestNeighbor:am,nonMaxSuppression:sm,nonMaxSuppressionAsync:um,nonMaxSuppressionWithScore:cm,nonMaxSuppressionWithScoreAsync:lm,cropAndResize:hm}),na=function(r,t){return!(r>0)||t==="linear"},ra=function(r,t,e){if(e==null||e==="linear")return r;if(e==="relu")return r.mul(t.step());throw new Error("Gradient for activation "+e+" has not been implemented yet.")},oa=function(r,t){var e=t,n=Me(r.shape,t.shape);return n.length>0&&(e=e.sum(n)),e.reshape(r.shape)},ia=function(r,t,e){if(t==="linear")return r;if(t==="relu")return Ie(r);if(t==="elu")return oc(r);if(t==="relu6")return ac(r);if(t==="prelu")return ic(r,e);throw new Error("Unknown fused activation "+t+".")},fm=S({fusedMatMul_:function(r){var t,e=r.a,n=r.b,o=r.transposeA,i=o!==void 0&&o,a=r.transposeB,s=a!==void 0&&a,u=r.bias,c=r.activation,l=c===void 0?"linear":c,h=r.preluActivationWeights;if(na(T.state.gradientDepth,l)===!1){var f=vo(e,n,i,s);return u!=null&&(f=ue(f,u)),ia(f,l,h)}var d=_(e,"a","fused matMul"),p=_(n,"b","fused matMul");t=Ae(d,p),d=t[0],p=t[1];var v=i?d.shape[d.rank-2]:d.shape[d.rank-1],m=s?p.shape[p.rank-1]:p.shape[p.rank-2],g=i?d.shape[d.rank-1]:d.shape[d.rank-2],y=s?p.shape[p.rank-2]:p.shape[p.rank-1],b=d.shape.slice(0,-2),x=p.shape.slice(0,-2),w=Y(b),C=Y(x);E(d.rank>=2&&p.rank>=2&&d.rank===p.rank,function(){return"Error in fused matMul: inputs must have the same rank of at least 2, got ranks "+d.rank+" and "+p.rank+"."}),E(We(b,x),function(){return"Error in fused matMul: outer dimensions ("+b+") and ("+x+") of Tensors with shapes "+d.shape+" and "+p.shape+" must match."}),E(v===m,function(){return"Error in fused matMul: inner shapes ("+v+") and ("+m+") of Tensors with shapes "+d.shape+" and "+p.shape+" and transposeA="+i+" and transposeB="+s+" must match."});var R,k,I=d.shape.slice(0,-2).concat([g,y]),A=i?d.as3D(w,v,g):d.as3D(w,g,v),F=s?p.as3D(C,y,m):p.as3D(C,m,y);u!=null&&le(I,(R=Ae(R=_(u,"bias","fused matMul"),d)[0]).shape),h!=null&&(k=_(h,"prelu weights","fused matMul"));var D={a:A,b:F};u!=null&&(D.bias=R),h!=null&&(D.preluActivationWeights=k);var L=[A,F];return T.runKernelFunc(function(O,B){var z=O.fusedBatchMatMul({a:A,b:F,transposeA:i,transposeB:s,bias:R,activation:l,preluActivationWeights:k});return B([A,F,z]),z},D,function(O,B){var z=B[0],V=B[1],W=B[2],G=ra(O,W,l),H={};return u!=null&&(H={bias:function(){return oa(R,G)}}),Object.assign(i||s?!i&&s?{a:function(){return G.matMul(V,!1,!1)},b:function(){return G.matMul(z,!0,!1)}}:i&&!s?{a:function(){return V.matMul(G,!1,!0)},b:function(){return z.matMul(G,!1,!1)}}:{a:function(){return V.matMul(G,!0,!0)},b:function(){return G.matMul(z,!0,!0)}}:{a:function(){return G.matMul(V,!1,!0)},b:function(){return z.matMul(G,!0,!1)}},H)},"_FusedMatMul",{transposeA:i,transposeB:s,activation:l},L,[!0]).reshape(I)}}),dm=S({fusedConv2d_:function(r){var t=r.x,e=r.filter,n=r.strides,o=r.pad,i=r.dataFormat,a=i===void 0?"NHWC":i,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,h=r.activation,f=h===void 0?"linear":h,d=r.preluActivationWeights;if(f=f||"linear",na(T.state.gradientDepth,f)===!1){var p=dt(t,e,n,o,a,u,c);return l!=null&&(p=ue(p,l)),ia(p,f,d)}var v=_(t,"x","conv2d"),m=_(e,"filter","conv2d"),g=v,y=!1;v.rank===3&&(y=!0,g=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),E(g.rank===4,function(){return"Error in fused conv2d: input must be rank 4, but got rank "+g.rank+"."}),E(m.rank===4,function(){return"Error in fused conv2d: filter must be rank 4, but got rank "+m.rank+"."}),c!=null&&E(De(o),function(){return"Error in fused conv2d: pad must be an integer when using, dimRoundingMode "+c+" but got pad "+o+"."}),E(g.shape[3]===m.shape[2],function(){return"Error in conv2d: depth of input ("+g.shape[3]+") must match input depth for filter "+m.shape[2]+"."}),E(tt(n,u),function(){return"Error in conv2D: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),E(a==="NHWC",function(){return"Error in conv2d: got dataFormat of "+a+" but only NHWC is currently supported."});var b,x,w=_n(g.shape,m.shape,n,u,o,c);l!=null&&(b=Ae(b=_(l,"bias","fused conv2d"),v)[0],le(w.outShape,b.shape)),d!=null&&(x=_(d,"prelu weights","fused conv2d"));var C={x:g,filter:m};l!=null&&(C.bias=b),d!=null&&(C.preluActivationWeights=x);var R=[m,g],k=T.runKernelFunc(function(I,A){var F=I.fusedConv2d({input:g,filter:m,convInfo:w,bias:b,activation:f,preluActivationWeights:x});return A([m,g,F]),F},C,function(I,A){var F=A,D=F[0],L=F[1],O=F[2],B=ra(I,O,f);E($n(u),function(){return"Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '"+u+"'"});var z={};return l!=null&&(z={bias:function(){return oa(b,B)}}),Object.assign({x:function(){return Yu(L.shape,B,D,n,o)},filter:function(){return Xi(L,B,D.shape,n,o)}},z)},"FusedConv2D",{convInfo:w,activation:f},R,[!0]);return y?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}}),pm=S({fusedDepthwiseConv2d_:function(r){var t=r.x,e=r.filter,n=r.strides,o=r.pad,i=r.dataFormat,a=i===void 0?"NHWC":i,s=r.dilations,u=s===void 0?[1,1]:s,c=r.dimRoundingMode,l=r.bias,h=r.activation,f=h===void 0?"linear":h,d=r.preluActivationWeights;if(na(T.state.gradientDepth,f)===!1){var p=po(t,e,n,o,a,u,c);return l!=null&&(p=ue(p,l)),ia(p,f,d)}var v=_(t,"x","depthwiseConv2d"),m=_(e,"filter","depthwiseConv2d"),g=v,y=!1;v.rank===3&&(y=!0,g=v.as4D(1,v.shape[0],v.shape[1],v.shape[2])),E(g.rank===4,function(){return"Error in fused depthwiseConv2d: input must be rank 4, but got rank "+g.rank+"."}),E(m.rank===4,function(){return"Error in fused depthwiseConv2d: filter must be rank 4, but got rank "+m.rank+"."}),E(g.shape[3]===m.shape[2],function(){return"Error in fused depthwiseConv2d: number of input channels ("+g.shape[3]+") must match the inChannels dimension in filter "+m.shape[2]+"."}),u==null&&(u=[1,1]),E(tt(n,u),function(){return"Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides "+n+" and dilations '"+u+"'"}),c!=null&&E(De(o),function(){return"Error in fused depthwiseConv2d: pad must be an integer when using dimRoundingMode "+c+" but got pad "+o+"."});var b,x,w=_n(g.shape,m.shape,n,u,o,c,!0);l!=null&&(b=Ae(b=_(l,"bias","fused conv2d"),v)[0],le(w.outShape,b.shape)),d!=null&&(x=_(d,"prelu weights","fused depthwiseConv2d"));var C={x:g,filter:m};l!=null&&(C.bias=b),d!=null&&(C.preluActivationWeights=x);var R=[m,g],k=T.runKernelFunc(function(I,A){var F=I.fusedDepthwiseConv2D({input:g,filter:m,convInfo:w,bias:b,activation:f,preluActivationWeights:x});return A([m,g,F]),F},C,function(I,A){E($n(u),function(){return"Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '"+u+"'"});var F=A[0],D=A[1],L=A[2],O=ra(I,L,f),B={};return l!=null&&(B={bias:function(){return oa(b,O)}}),Object.assign({x:function(){return Ju(D.shape,O,F,w)},filter:function(){return Qu(D,O,F.shape,w)}},B)},"FusedDepthwiseConv2D",{convInfo:w,activation:f},R,[!0]);return y?k.as3D(k.shape[1],k.shape[2],k.shape[3]):k}}),vm=Object.freeze({matMul:fm,conv2d:dm,depthwiseConv2d:pm}),mm=Object.freeze({image:ta,linalg:om,losses:em,spectral:Wv,fused:vm,signal:Hv,square:Yd,squaredDifference:Pu,conv1d:iv,conv2d:dt,conv3d:av,depthwiseConv2d:po,separableConv2d:Yi,conv2dTranspose:sv,conv3dTranspose:uv,op:S,batchNormalization2d:Ap,batchNormalization3d:kp,batchNormalization4d:Rp,batchNormalization:Sp,batchNorm:Vu,batchNorm2d:Dp,batchNorm3d:Tp,batchNorm4d:Fp,booleanMaskAsync:ov,complex:ze,real:ht,imag:At,concat:Ne,concat1d:ph,concat2d:vh,concat3d:mh,concat4d:gh,split:Oi,matMul:vo,dot:cv,outerProduct:lv,reverse:br,reverse1d:hv,reverse2d:fv,reverse3d:dv,reverse4d:pv,maxPool:Le,avgPool:wr,pool:vv,maxPool3d:mv,avgPool3d:gv,slice:Ft,slice1d:yv,slice2d:xv,slice3d:tc,slice4d:bv,abs:Jd,acos:Qd,acosh:Zd,asin:ep,asinh:tp,atan:np,atanh:rp,ceil:op,clipByValue:ji,cos:ip,cosh:ap,erf:sp,exp:Ci,expm1:up,floor:cp,log:lp,log1p:hp,logSigmoid:fp,neg:to,reciprocal:dp,round:pp,rsqrt:Mu,sigmoid:Ou,sign:vp,isNaN:mp,isInf:gp,isFinite:yp,sin:xp,sinh:bp,softplus:wp,sqrt:Cp,step:_p,tan:Ep,tanh:Ip,all:wv,any:Cv,argMax:_v,argMin:Ev,logSumExp:Iv,max:mo,mean:Av,min:kv,moments:Rv,sum:rc,prod:Sv,equal:qu,equalStrict:Kp,greater:Xp,greaterEqual:ju,greaterEqualStrict:Yp,greaterStrict:Jp,less:Qp,lessEqual:Zp,lessEqualStrict:ev,lessStrict:tv,notEqual:nv,notEqualStrict:rv,add:ue,addN:Mp,addStrict:Op,atan2:Bp,div:pt,divNoNan:Lp,divStrict:Wp,floorDiv:Gu,maximum:$i,maximumStrict:Vp,minimum:Hu,minimumStrict:zp,mod:Up,modStrict:Gp,mul:Xe,mulStrict:Hp,pow:no,powStrict:qp,squaredDifferenceStrict:jp,sub:Oe,subStrict:$p,elu:oc,leakyRelu:Dv,prelu:ic,relu:Ie,relu6:ac,selu:Tv,logicalAnd:fo,logicalNot:Np,logicalOr:zu,logicalXor:Pp,where:bn,whereAsync:Uu,buffer:oe,print:Ah,batchToSpaceND:ru,broadcastTo:kh,cast:Rh,clone:Sh,cumsum:Dh,depthToSpace:Th,expandDims:lt,eye:ou,multinomial:Fh,oneHot:yi,pad:Cn,pad1d:Nh,pad2d:Ph,pad3d:Mh,pad4d:Oh,rand:Bh,randomNormal:Lh,randomGamma:Wh,randomUniform:iu,reshape:vt,spaceToBatchND:au,squeeze:su,stack:ut,tile:Ln,truncatedNormal:Vh,unstack:Pe,setdiff1dAsync:zh,fill:Dt,linspace:dh,ones:Yn,range:$r,scalar:q,tensor:Ge,tensor1d:Te,tensor2d:rn,tensor3d:Mi,tensor4d:Je,tensor5d:lh,tensor6d:hh,variable:fh,zeros:we,onesLike:nu,zerosLike:ve,transpose:sn,softmax:qt,logSoftmax:Kh,localResponseNormalization:Fv,norm:sc,gather:Ki,unsortedSegmentSum:$u,basicLSTMCell:Nv,multiRNNCell:Pv,movingAverage:Mv,stridedSlice:Ov,topk:Bv,scatterND:Lv,fft:Ji,ifft:ro,rfft:Qi,irfft:uc,sparseToDense:Vv,gatherND:zv,diag:Uv,dropout:Gv,hannWindow:Zi,hammingWindow:lc,frame:ea,stft:hc,inTopKAsync:qv});function U(r,t){Array.isArray(r)||(r=[r]),r.forEach(function(e){e!=null&&E(e.dtype!=="complex64",function(){return t+" does not support complex64 tensors."})})}function Xo(r,t,e,n){if(e==="linear")return r.linear(t);if(e==="relu")return r.relu(t);if(e==="elu")return r.elu(t);if(e==="relu6")return r.relu6(t);if(e==="prelu")return r.prelu(t,n);throw new Error("Activation "+e+" has not been implemented for the CPU backend.")}var gm=function(r){function t(){var e=r.call(this)||this;return e.blockSize=48,e.firstUse=!0,e.data=new pu(e,T),e}return gt(t,r),t.prototype.write=function(e,n,o){this.firstUse&&(this.firstUse=!1,M().get("IS_NODE")&&qr(`
============================
Hi there 👋. Looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, which binds to TensorFlow C++, by running npm i @tensorflow/tfjs-node, or npm i @tensorflow/tfjs-node-gpu if you have CUDA. Then call require('@tensorflow/tfjs-node'); (-gpu suffix for CUDA) at the start of your program. Visit https://github.com/tensorflow/tfjs-node for more details.
============================`));var i={};return this.data.set(i,{values:e,dtype:o}),i},t.prototype.move=function(e,n,o,i){this.data.set(e,{values:n,dtype:i})},t.prototype.numDataIds=function(){return this.data.numDataIds()},t.prototype.read=function(e){return K(this,void 0,void 0,function(){return X(this,function(n){return[2,this.readSync(e)]})})},t.prototype.readSync=function(e){var n=this.data.get(e),o=n.dtype,i=n.complexTensors;return o==="complex64"?wi(this.readSync(i.real.dataId),this.readSync(i.imag.dataId)):this.data.get(e).values},t.prototype.bufferSync=function(e){var n=this.readSync(e.dataId),o=n;if(e.dtype==="string")try{o=n.map(function(i){return Ur(i)})}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return oe(e.shape,e.dtype,o)},t.prototype.makeOutput=function(e,n,o){var i=this.write(e,n,o);return T.makeTensorFromDataId(i,n,o,this)},t.prototype.disposeData=function(e){if(this.data.has(e)){var n=this.data.get(e).complexTensors;n!=null&&(n.real.dispose(),n.imag.dispose()),this.data.delete(e)}},t.prototype.time=function(e){return K(this,void 0,void 0,function(){var n;return X(this,function(o){return n=Et(),e(),[2,{kernelMs:Et()-n}]})})},t.prototype.memory=function(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}},t.prototype.complex=function(e,n){var o=this.makeOutput(null,e.shape,"complex64");return this.data.get(o.dataId).complexTensors={real:T.keep(e.clone()),imag:T.keep(n.clone())},o},t.prototype.real=function(e){return this.data.get(e.dataId).complexTensors.real.clone()},t.prototype.imag=function(e){return this.data.get(e.dataId).complexTensors.imag.clone()},t.prototype.slice=function(e,n,o){if(U(e,"slice"),fu(e.shape,n,o)){var i=du(n,e.strides),a=Y(o);return Ge(this.readSync(e.dataId).subarray(i,i+a),o,e.dtype)}for(var s=oe(o,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c).map(function(h,f){return h+n[f]});s.values[c]=u.get.apply(u,l)}return s.toTensor()},t.prototype.stridedSlice=function(e,n,o,i){U(e,"stridedSlice");var a=Li(n,o,i);if(a.some(function(d){return d===0}))return Ge([],a);for(var s=oe(a,e.dtype),u=this.bufferSync(e),c=0;c<s.size;c++){for(var l=s.indexToLoc(c),h=new Array(l.length),f=0;f<h.length;f++)h[f]=l[f]*i[f]+n[f];s.set.apply(s,[u.get.apply(u,h)].concat(l))}return s.toTensor()},t.prototype.diag=function(e){for(var n=this.readSync(e.dataId),o=oe([e.size,e.size],e.dtype),i=o.values,a=0;a<n.length;a++)i[a*e.size+a]=n[a];return o.toTensor()},t.prototype.unstack=function(e,n){for(var o=e.shape[n],i=new Array(e.rank-1),a=0,s=0;s<e.rank;s++)s!==n&&(i[a++]=e.shape[s]);var u=new Array(e.rank).fill(0),c=e.shape.slice();c[n]=1;var l=new Array(o);for(s=0;s<l.length;s++)u[n]=s,l[s]=this.slice(e,u,c).reshape(i);return l},t.prototype.reverse=function(e,n){U(e,"reverse");for(var o=oe(e.shape,e.dtype),i=this.bufferSync(e),a=function(u){var c=o.indexToLoc(u),l=c.slice();n.forEach(function(h){return l[h]=e.shape[h]-1-l[h]}),o.set.apply(o,[i.get.apply(i,l)].concat(c))},s=0;s<o.size;s++)a(s);return o.toTensor()},t.prototype.concat=function(e,n){var o=this;if(e[0].dtype==="complex64"){var i=e.map(function(d){return ht(d)}),a=e.map(function(d){return At(d)});return ze(this.concat(i,n),this.concat(a,n))}var s=e.map(function(d){var p=Y(d.shape.slice(n));return d.as2D(-1,p)}),u=jn(s.map(function(d){return d.shape}),1),c=oe(u,e[0].dtype).values;if(s[0].shape[0]===1){var l=0;s.forEach(function(d){c.set(o.readSync(d.dataId),l),l+=d.size})}else{var h=0;s.forEach(function(d){for(var p=o.readSync(d.dataId),v=0,m=0;m<d.shape[0];++m)for(var g=m*u[1]+h,y=0;y<d.shape[1];++y)c[g+y]=p[v++];h+=d.shape[1]})}var f=jn(e.map(function(d){return d.shape}),n);return Ge(c,f,e[0].dtype)},t.prototype.neg=function(e){return U(e,"neg"),this.multiply(q(-1),e)},t.prototype.add=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,i,a,s){return{real:o+a,imag:i+s}}):this.broadcastedBinaryOp(e,n,Ue(e.dtype,n.dtype),function(o,i){return o+i})},t.prototype.addN=function(e){var n=this;U(e,"addN");for(var o=e.map(function(l){return n.readSync(l.dataId)}),i=oe(e[0].shape,e[0].dtype),a=i.values,s=0;s<e.length;s++)for(var u=o[s],c=0;c<a.length;c++)a[c]+=u[c];return i.toTensor()},t.prototype.softmax=function(e,n){var o=Be([n],e.shape),i=this.max(e,o),a=et(i.shape,o),s=this.subtract(e,i.reshape(a)),u=this.exp(s),c=this.sum(u,o).reshape(a);return this.realDivide(u,c)},t.prototype.subtract=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,i,a,s){return{real:o-a,imag:i-s}}):this.broadcastedBinaryOp(e,n,Ue(e.dtype,n.dtype),function(o,i){return o-i})},t.prototype.pow=function(e,n){return U([e,n],"pow"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,i){return Math.pow(o,i)})},t.prototype.batchMatMul=function(e,n,o,i){U([e,n],"matMul");for(var a=o?e.shape[1]:e.shape[2],s=o?e.shape[2]:e.shape[1],u=i?n.shape[1]:n.shape[2],c=e.shape[0],l=this.readSync(e.dataId),h=this.readSync(n.dataId),f=o?[e.strides[0],1,e.strides[1]]:[e.strides[0],e.strides[1],1],d=f[0],p=f[1],v=f[2],m=i?[1,n.strides[1],n.strides[0]]:[n.strides[1],1,n.strides[0]],g=m[0],y=m[1],b=m[2],x=s*u,w=oe([c,s,u],e.dtype),C=w.values,R=this.blockSize,k=0;k<c;k++)for(var I=0;I<s;I+=R)for(var A=0;A<u;A+=R)for(var F=0;F<a;F+=R)for(var D=Math.min(I+R,s),L=Math.min(A+R,u),O=Math.min(F+R,a),B=I;B<D;B++)for(var z=A;z<L;z++){for(var V=0,W=F;W<O;W++)V+=l[k*d+B*p+W*v]*h[W*g+z*y+k*b];C[k*x+(B*u+z)]+=V}return w.toTensor()},t.prototype.fusedBatchMatMul=function(e){var n=e.a,o=e.b,i=e.transposeA,a=e.transposeB,s=e.bias,u=e.activation,c=e.preluActivationWeights,l=this.batchMatMul(n,o,i,a);return s&&(l=this.add(l,s)),u&&(l=Xo(this,l,u,c)),l},t.prototype.multiply=function(e,n){return e.dtype==="complex64"||n.dtype==="complex64"?this.broadcastedBinaryComplexOp(e.cast("complex64"),n.cast("complex64"),function(o,i,a,s){return{real:o*a-i*s,imag:o*s+i*a}}):this.broadcastedBinaryOp(e,n,Ue(e.dtype,n.dtype),function(o,i){return o*i})},t.prototype.realDivide=function(e,n){return U([e,n],"realDivide"),this.broadcastedBinaryOp(e,n,"float32",function(o,i){return o/i})},t.prototype.floorDiv=function(e,n){return U([e,n],"floorDiv"),this.broadcastedBinaryOp(e,n,"int32",function(o,i){return Math.floor(o/i)})},t.prototype.sum=function(e,n){U(e,"sum"),rt("sum",n,e.rank);for(var o=qe(e.shape,n),i=o[0],a=o[1],s=we(i,Ue(e.dtype,"int32")),u=Y(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var f=h*u,d=0,p=0;p<u;++p)d+=l[f+p];c[h]=d}return s},t.prototype.prod=function(e,n){U(e,"sum");for(var o=qe(e.shape,n),i=o[0],a=o[1],s=we(i,Ue(e.dtype,"int32")),u=Y(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var f=h*u,d=1,p=0;p<u;++p)d*=l[f+p];c[h]=d}return s},t.prototype.unsortedSegmentSum=function(e,n,o){U(e,"unsortedSegmentSum");for(var i=[],a=e.rank-n.rank,s=0;s<a;++s)n=n.expandDims(s+1);for(s=0;s<o;++s){var u=q(s,"int32"),c=qu(u,n).asType("float32").mul(e).sum(0);i.push(c)}return ut(i)},t.prototype.argMin=function(e,n){U(e,"argMin");var o=[n];rt("argMin",o,e.rank);for(var i=qe(e.shape,o),a=i[0],s=i[1],u=we(a,"int32"),c=Y(s),l=this.readSync(u.dataId),h=this.readSync(e.dataId),f=0;f<l.length;++f){for(var d=f*c,p=h[d],v=0,m=0;m<c;++m){var g=h[d+m];g<p&&(p=g,v=m)}l[f]=v}return u},t.prototype.argMax=function(e,n){U(e,"argMax");var o=[n];rt("argMax",o,e.rank);for(var i=qe(e.shape,o),a=i[0],s=i[1],u=we(a,"int32"),c=Y(s),l=this.readSync(u.dataId),h=this.readSync(e.dataId),f=0;f<l.length;++f){for(var d=f*c,p=h[d],v=0,m=0;m<c;++m){var g=h[d+m];g>p&&(p=g,v=m)}l[f]=v}return u},t.prototype.cumsum=function(e,n,o,i){if(U(e,"cumsum"),n!==e.rank-1)throw new Error("backend.cumsum in CPU expects an inner-most axis="+(e.rank-1)+" but got axis="+n);for(var a=Ue(e.dtype,"int32"),s=we(e.shape,a),u=this.readSync(s.dataId),c=this.readSync(e.dataId),l=e.shape[e.rank-1],h=i?function(m,g){return m+l-g-1}:function(m,g){return m+g},f=0;f<c.length;f+=l)for(var d=0;d<l;d++){var p=h(f,d);if(d===0)u[p]=o?0:c[p];else{var v=h(f,d-1);u[p]=o?c[v]+u[v]:c[p]+u[v]}}return s},t.prototype.equal=function(e,n){return U([e,n],"equal"),this.broadcastedBinaryOp(e,n,"bool",function(o,i){return o===i?1:0})},t.prototype.notEqual=function(e,n){return U([e,n],"notEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,i){return o!==i?1:0})},t.prototype.less=function(e,n){return U([e,n],"less"),this.broadcastedBinaryOp(e,n,"bool",function(o,i){return o<i?1:0})},t.prototype.lessEqual=function(e,n){return U([e,n],"lessEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,i){return o<=i?1:0})},t.prototype.greater=function(e,n){return U([e,n],"greater"),this.broadcastedBinaryOp(e,n,"bool",function(o,i){return o>i?1:0})},t.prototype.greaterEqual=function(e,n){return U([e,n],"greaterEqual"),this.broadcastedBinaryOp(e,n,"bool",function(o,i){return o>=i?1:0})},t.prototype.logicalNot=function(e){U(e,"logicalNot");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),i=0;i<n.length;++i)o[i]=n[i]?0:1;return this.makeOutput(o,e.shape,"bool")},t.prototype.logicalAnd=function(e,n){return U([e,n],"logicalAnd"),this.broadcastedBinaryOp(e,n,"bool",function(o,i){return o&&i})},t.prototype.logicalOr=function(e,n){return U([e,n],"logicalOr"),this.broadcastedBinaryOp(e,n,"bool",function(o,i){return o||i})},t.prototype.select=function(e,n,o){U([e,n,o],"select");for(var i=this.readSync(e.dataId),a=this.readSync(n.dataId),s=this.readSync(o.dataId),u=we(n.shape,Ue(n.dtype,o.dtype)),c=this.readSync(u.dataId),l=0,h=e.rank===0||e.rank>1||n.rank===1?1:Y(n.shape.slice(1)),f=0;f<i.length;f++)for(var d=0;d<h;d++)i[f]===1?c[l++]=a[f]:c[l++]=s[f];return u},t.prototype.where=function(e){U([e],"where");var n=this.readSync(e.dataId);return Ui(e.shape,n)},t.prototype.topk=function(e,n,o){return U(e,"topk"),Cu(this.readSync(e.dataId),e.shape,e.dtype,n)},t.prototype.min=function(e,n){U(e,"min"),rt("min",n,e.rank);for(var o=qe(e.shape,n),i=o[0],a=o[1],s=we(i,e.dtype),u=Y(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var f=h*u,d=l[f],p=0;p<u;++p){var v=l[f+p];v<d&&(d=v)}c[h]=d}return s},t.prototype.minimum=function(e,n){return U([e,n],"minimum"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,i){return Math.min(o,i)})},t.prototype.mod=function(e,n){return U([e,n],"mod"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,i){var a=o%i;return o<0&&i<0||o>=0&&i>=0?a:(a+i)%i})},t.prototype.max=function(e,n){U(e,"max"),rt("max",n,e.rank);for(var o=qe(e.shape,n),i=o[0],a=o[1],s=we(i,e.dtype),u=Y(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var f=h*u,d=l[f],p=0;p<u;++p){var v=l[f+p];v>d&&(d=v)}c[h]=d}return s},t.prototype.maximum=function(e,n){return U([e,n],"maximum"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,i){return Math.max(o,i)})},t.prototype.all=function(e,n){U(e,"all"),rt("all",n,e.rank);for(var o=qe(e.shape,n),i=o[0],a=o[1],s=we(i,e.dtype),u=Y(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var f=h*u,d=l[f],p=0;p<u;++p){var v=l[f+p];d=d&&v}c[h]=d}return s},t.prototype.any=function(e,n){U(e,"any"),rt("any",n,e.rank);for(var o=qe(e.shape,n),i=o[0],a=o[1],s=we(i,e.dtype),u=Y(a),c=this.readSync(s.dataId),l=this.readSync(e.dataId),h=0;h<c.length;++h){for(var f=h*u,d=l[f],p=0;p<u;++p){var v=l[f+p];d=d||v}c[h]=d}return s},t.prototype.squaredDifference=function(e,n){return U([e,n],"squaredDifference"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,i){var a=o-i;return a*a})},t.prototype.ceil=function(e){U(e,"ceil");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),i=0;i<n.length;++i)o[i]=Math.ceil(n[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.floor=function(e){U(e,"floor");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),i=0;i<n.length;++i)o[i]=Math.floor(n[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.sign=function(e){U(e,"x");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),i=0;i<n.length;++i)n[i]<0?o[i]=-1:n[i]>0?o[i]=1:o[i]=0;return this.makeOutput(o,e.shape,"float32")},t.prototype.isNaN=function(e){U(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),i=0;i<n.length;++i)Number.isNaN(n[i])&&(o[i]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isInf=function(e){U(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),i=0;i<n.length;++i)Math.abs(n[i])===1/0&&(o[i]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.isFinite=function(e){U(e,"x");for(var n=this.readSync(e.dataId),o=new Uint8Array(n.length),i=0;i<n.length;++i)Number.isFinite(n[i])&&(o[i]=1);return this.makeOutput(o,e.shape,"bool")},t.prototype.round=function(e){U(e,"round");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),i=0;i<n.length;++i){var a=Math.floor(n[i]);n[i]-a<.5?o[i]=Math.floor(n[i]):n[i]-a>.5?o[i]=Math.ceil(n[i]):o[i]=a%2==0?a:a+1}return this.makeOutput(o,e.shape,"float32")},t.prototype.exp=function(e){U(e,"exp");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),i=0;i<n.length;++i)o[i]=Math.exp(n[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.expm1=function(e){U(e,"expm1");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),i=0;i<n.length;++i)o[i]=Math.expm1(n[i]);return this.makeOutput(o,e.shape,"float32")},t.prototype.log=function(e){U(e,"log");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),i=0;i<n.length;++i){var a=n[i];o[i]=Math.log(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.log1p=function(e){U(e,"log1p");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),i=0;i<n.length;++i){var a=n[i];o[i]=Math.log1p(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.sqrt=function(e){U(e,"sqrt");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),i=0;i<n.length;++i){var a=n[i];o[i]=Math.sqrt(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.rsqrt=function(e){U(e,"rsqrt");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),i=0;i<n.length;++i){var a=n[i];o[i]=1/Math.sqrt(a)}return this.makeOutput(o,e.shape,"float32")},t.prototype.reciprocal=function(e){U(e,"reciprocal");for(var n=this.readSync(e.dataId),o=new Float32Array(n.length),i=0;i<n.length;++i)o[i]=1/n[i];return this.makeOutput(o,e.shape,"float32")},t.prototype.linear=function(e){return e},t.prototype.relu=function(e){U(e,"relu");for(var n=we(e.shape,e.dtype),o=this.readSync(n.dataId),i=this.readSync(e.dataId),a=0;a<i.length;++a)o[a]=Math.max(0,i[a]);return n},t.prototype.relu6=function(e){U(e,"relu");for(var n=we(e.shape,e.dtype),o=this.readSync(n.dataId),i=this.readSync(e.dataId),a=0;a<i.length;++a)o[a]=Math.min(Math.max(0,i[a]),6);return n},t.prototype.prelu=function(e,n){return U([e,n],"prelu"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,i){return o<0?i*o:o})},t.prototype.elu=function(e){U(e,"elu");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i){var a=o[i];n[i]=a>=0?a:Math.exp(a)-1}return this.makeOutput(n,e.shape,"float32")},t.prototype.eluDer=function(e,n){U([e,n],"eluDer");for(var o=new Float32Array(n.size),i=this.readSync(n.dataId),a=this.readSync(e.dataId),s=0;s<i.length;++s){var u=i[s];o[s]=u>=1?a[s]:a[s]*(u+1)}return this.makeOutput(o,n.shape,"float32")},t.prototype.selu=function(e){U(e,"selu");for(var n=Hi,o=qi,i=new Float32Array(e.size),a=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];i[s]=u>=0?o*u:n*(Math.exp(u)-1)}return this.makeOutput(i,e.shape,"float32")},t.prototype.clip=function(e,n,o){U(e,"clip");for(var i=new Float32Array(e.size),a=this.readSync(e.dataId),s=0;s<a.length;++s){var u=a[s];i[s]=u>o?o:u<n?n:u}return this.makeOutput(i,e.shape,"float32")},t.prototype.abs=function(e){for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=Math.abs(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.complexAbs=function(e){for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<e.size;++i){var a=o[2*i],s=o[2*i+1];n[i]=Math.hypot(a,s)}return this.makeOutput(n,e.shape,"float32")},t.prototype.int=function(e){U(e,"int");for(var n=new Int32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=o[i];return this.makeOutput(n,e.shape,"int32")},t.prototype.sigmoid=function(e){U(e,"sigmoid");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=1/(1+Math.exp(-o[i]));return this.makeOutput(n,e.shape,"float32")},t.prototype.softplus=function(e){U(e,"softplus");for(var n=Math.log(11920928955078125e-23)+2,o=new Float32Array(e.size),i=this.readSync(e.dataId),a=0;a<i.length;++a){var s=i[a]>-n,u=i[a]<n,c=Math.exp(i[a]),l=void 0;l=u?c:s?i[a]:Math.log(1+c),o[a]=l}return this.makeOutput(o,e.shape,"float32")},t.prototype.sin=function(e){U(e,"sin");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=Math.sin(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.cos=function(e){U(e,"cos");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=Math.cos(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.tan=function(e){U(e,"tan");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=Math.tan(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.asin=function(e){U(e,"asin");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=Math.asin(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.acos=function(e){U(e,"acos");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=Math.acos(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atan=function(e){U(e,"atan");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=Math.atan(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atan2=function(e,n){return U([e,n],"atan2"),this.broadcastedBinaryOp(e,n,e.dtype,function(o,i){return Math.atan2(o,i)})},t.prototype.sinh=function(e){U(e,"sinh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=Math.sinh(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.cosh=function(e){U(e,"cosh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=Math.cosh(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.tanh=function(e){U(e,"tanh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=gl(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.asinh=function(e){U(e,"asinh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=Math.asinh(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.acosh=function(e){U(e,"acosh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=Math.acosh(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.atanh=function(e){U(e,"atanh");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i)n[i]=Math.atanh(o[i]);return this.makeOutput(n,e.shape,"float32")},t.prototype.erf=function(e){U(e,"erf");for(var n=new Float32Array(e.size),o=this.readSync(e.dataId),i=0;i<o.length;++i){var a=Math.sign(o[i]),s=Math.abs(o[i]),u=1/(1+.3275911*s);n[i]=a*(1-((((1.061405429*u-1.453152027)*u+1.421413741)*u-.284496736)*u+.254829592)*u*Math.exp(-s*s))}return this.makeOutput(n,e.shape,"float32")},t.prototype.step=function(e,n){n===void 0&&(n=0),U(e,"step");for(var o=new Float32Array(e.size),i=this.readSync(e.dataId),a=0;a<i.length;++a){var s=i[a];isNaN(s)?o[a]=NaN:o[a]=s>0?1:n}return this.makeOutput(o,e.shape,"float32")},t.prototype.fusedConv2d=function(e){var n=e.input,o=e.filter,i=e.convInfo,a=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.conv2d(n,o,i);return a&&(c=this.add(c,a)),s&&(c=Xo(this,c,s,u)),c},t.prototype.conv2d=function(e,n,o){U([e,n],"conv2d");for(var i=o.filterHeight,a=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,h=o.dataFormat==="channelsLast",f=oe(o.outShape,e.dtype),d=e.strides[0],p=h?e.strides[1]:e.strides[2],v=h?e.strides[2]:1,m=h?1:e.strides[1],g=f.strides[0],y=h?f.strides[1]:f.strides[2],b=h?f.strides[2]:1,x=h?1:f.strides[1],w=this.readSync(e.dataId),C=this.readSync(n.dataId),R=f.values,k=0;k<o.batchSize;++k)for(var I=k*d,A=k*g,F=0;F<o.outHeight;++F)for(var D=A+F*y,L=F*o.strideHeight-l,O=0;O<i;O++){var B=L+O*s;if(!(B<0||B>=o.inHeight))for(var z=O*n.strides[0],V=I+B*p,W=0;W<o.outWidth;++W)for(var G=D+W*b,H=W*o.strideWidth-c,j=0;j<a;j++){var ee=H+j*u;if(!(ee<0||ee>=o.inWidth))for(var te=V+ee*v,ae=z+j*n.strides[1],se=0;se<o.inChannels;++se){for(var ce=w[te+se*m],de=0;de<o.outChannels;++de)R[G+de*x]+=ce*C[ae+de];ae+=o.outChannels}}}return f.toTensor()},t.prototype.conv3d=function(e,n,o){for(var i=o.filterDepth,a=o.filterHeight,s=o.filterWidth,u=o.dilationDepth,c=o.dilationHeight,l=o.dilationWidth,h=o.padInfo.front,f=o.padInfo.left,d=o.padInfo.top,p=oe(o.outShape,e.dtype),v=this.readSync(e.dataId),m=this.readSync(n.dataId),g=p.values,y=0;y<o.batchSize;++y)for(var b=y*e.strides[0],x=y*p.strides[0],w=0;w<o.outDepth;++w)for(var C=x+w*p.strides[1],R=w*o.strideDepth-h,k=0;k<i;k++){var I=R+k*u;if(!(I<0||I>=o.inDepth))for(var A=k*n.strides[0],F=b+I*e.strides[1],D=0;D<o.outHeight;++D)for(var L=C+D*p.strides[2],O=D*o.strideHeight-d,B=0;B<a;B++){var z=O+B*c;if(!(z<0||z>=o.inHeight))for(var V=A+B*n.strides[1],W=F+z*e.strides[2],G=0;G<o.outWidth;++G)for(var H=L+G*o.outChannels,j=G*o.strideWidth-f,ee=0;ee<s;ee++){var te=j+ee*l;if(!(te<0||te>=o.inWidth))for(var ae=V+ee*n.strides[2],se=W+te*o.inChannels,ce=ae,de=0;de<o.inChannels;++de){for(var he=v[se+de],pe=0;pe<o.outChannels;++pe)g[H+pe]+=he*m[ce+pe];ce+=o.outChannels}}}}return p.toTensor()},t.prototype.conv2dDerInput=function(e,n,o){U([e,n],"conv2dDerInput");for(var i=oe(o.inShape,"float32"),a=i.values,s=this.readSync(e.dataId),u=this.readSync(n.dataId),c=n.strides,l=c[0],h=c[1],f=c[2],d=o.batchSize,p=o.filterHeight,v=o.filterWidth,m=o.inChannels,g=o.inHeight,y=o.inWidth,b=o.outChannels,x=o.outHeight,w=o.outWidth,C=o.strideHeight,R=o.strideWidth,k=o.dataFormat,I=p-1-o.padInfo.top,A=v-1-o.padInfo.left,F=k==="channelsLast",D=i.strides[0],L=F?i.strides[1]:i.strides[2],O=F?i.strides[2]:1,B=F?1:i.strides[1],z=e.strides[0],V=F?e.strides[1]:e.strides[2],W=F?e.strides[2]:1,G=F?1:e.strides[1],H=0;H<d;++H)for(var j=0;j<m;++j)for(var ee=0;ee<g;++ee)for(var te=ee-I,ae=Math.max(0,Math.ceil(te/C)),se=Math.min(x,(p+te)/C),ce=0;ce<y;++ce){for(var de=ce-A,he=Math.max(0,Math.ceil(de/R)),pe=Math.min(w,(v+de)/R),Se=0,fe=ae;fe<se;++fe)for(var xe=fe*C-te,ge=he;ge<pe;++ge)for(var ke=z*H+V*fe+W*ge,Ce=l*(p-1-xe)+h*(v-1-(ge*R-de))+f*j,_e=0;_e<b;++_e)Se+=s[ke+G*_e]*u[Ce+_e];a[D*H+L*ee+O*ce+B*j]=Se}return i.toTensor()},t.prototype.conv3dDerInput=function(e,n,o){for(var i=oe(o.inShape,"float32"),a=i.values,s=i.strides,u=s[0],c=s[1],l=s[2],h=s[3],f=this.readSync(e.dataId),d=e.strides,p=d[0],v=d[1],m=d[2],g=d[3],y=this.readSync(n.dataId),b=n.strides,x=b[0],w=b[1],C=b[2],R=b[3],k=o.batchSize,I=o.filterDepth,A=o.filterHeight,F=o.filterWidth,D=o.inChannels,L=o.inDepth,O=o.inHeight,B=o.inWidth,z=o.outChannels,V=o.outDepth,W=o.outHeight,G=o.outWidth,H=o.strideDepth,j=o.strideHeight,ee=o.strideWidth,te=I-1-o.padInfo.front,ae=A-1-o.padInfo.top,se=F-1-o.padInfo.left,ce=0;ce<k;++ce)for(var de=0;de<D;++de)for(var he=0;he<L;++he)for(var pe=he-te,Se=Math.max(0,Math.ceil(pe/H)),fe=Math.min(V,(I+pe)/H),xe=0;xe<O;++xe)for(var ge=xe-ae,ke=Math.max(0,Math.ceil(ge/j)),Ce=Math.min(W,(A+ge)/j),_e=0;_e<B;++_e){for(var xt=_e-se,bt=Math.max(0,Math.ceil(xt/ee)),nt=Math.min(G,(F+xt)/ee),An=0,Lt=Se;Lt<fe;++Lt)for(var Yt=Lt*H-pe,Wt=ke;Wt<Ce;++Wt)for(var kn=Wt*j-ge,Vt=bt;Vt<nt;++Vt)for(var ko=p*ce+v*Lt+m*Wt+g*Vt,Rn=x*(I-1-Yt)+w*(A-1-kn)+C*(F-1-(Vt*ee-xt))+R*de,wt=0;wt<z;++wt)An+=f[ko+wt]*y[Rn+wt];a[u*ce+c*he+l*xe+h*_e+de]=An}return i.toTensor()},t.prototype.conv2dDerFilter=function(e,n,o){U([e,n],"conv2dDerFilter");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dataFormat==="channelsLast",l=oe(o.filterShape,"float32"),h=o.padInfo.left,f=o.padInfo.top,d=this.bufferSync(e),p=this.bufferSync(n),v=0;v<s;++v)for(var m=Math.max(0,Math.ceil((f-v)/i)),g=Math.min(o.outHeight,(o.inHeight+f-v)/i),y=0;y<u;++y)for(var b=Math.max(0,Math.ceil((h-y)/a)),x=Math.min(o.outWidth,(o.inWidth+h-y)/a),w=0;w<o.inChannels;++w)for(var C=0;C<o.outChannels;++C){for(var R=0,k=0;k<o.batchSize;++k)for(var I=m;I<g;++I)for(var A=v+I*i-f,F=b;F<x;++F){var D=y+F*a-h;R+=c?d.get(k,A,D,w)*p.get(k,I,F,C):d.get(k,w,A,D)*p.get(k,C,I,F)}l.set(R,v,y,w,C)}return l.toTensor()},t.prototype.conv3dDerFilter=function(e,n,o){for(var i=o.strideDepth,a=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,h=oe(o.filterShape,"float32"),f=h.values,d=h.strides,p=d[0],v=d[1],m=d[2],g=d[3],y=this.readSync(n.dataId),b=n.strides,x=b[0],w=b[1],C=b[2],R=b[3],k=this.readSync(e.dataId),I=e.strides,A=I[0],F=I[1],D=I[2],L=I[3],O=o.padInfo.front,B=o.padInfo.left,z=o.padInfo.top,V=0;V<u;++V)for(var W=Math.max(0,Math.ceil((O-V)/i)),G=Math.min(o.outDepth,(o.inDepth+O-V)/i),H=V*p,j=0;j<c;++j)for(var ee=Math.max(0,Math.ceil((z-j)/a)),te=Math.min(o.outHeight,(o.inHeight+z-j)/a),ae=j*v+H,se=0;se<l;++se)for(var ce=Math.max(0,Math.ceil((B-se)/s)),de=Math.min(o.outWidth,(o.inWidth+B-se)/s),he=se*m+ae,pe=0;pe<o.inChannels;++pe)for(var Se=pe*g+he,fe=0;fe<o.outChannels;++fe){for(var xe=0,ge=0;ge<o.batchSize;++ge)for(var ke=ge*A,Ce=ge*x,_e=W;_e<G;++_e)for(var xt=(V+_e*i-O)*F+ke,bt=_e*w+Ce,nt=ee;nt<te;++nt)for(var An=(j+nt*a-z)*D+xt,Lt=nt*C+bt,Yt=ce;Yt<de;++Yt){var Wt=Yt*R+Lt;xe+=k[(se+Yt*s-B)*L+An+pe]*y[Wt+fe]}f[Se+fe]=xe}return h.toTensor()},t.prototype.fusedDepthwiseConv2D=function(e){var n=e.input,o=e.filter,i=e.convInfo,a=e.bias,s=e.activation,u=e.preluActivationWeights,c=this.depthwiseConv2D(n,o,i);return a&&(c=this.add(c,a)),s&&(c=Xo(this,c,s,u)),c},t.prototype.depthwiseConv2D=function(e,n,o){U([e,n],"depthwiseConv2D");for(var i=o.filterHeight,a=o.filterWidth,s=o.dilationHeight,u=o.dilationWidth,c=o.padInfo.left,l=o.padInfo.top,h=o.outChannels/o.inChannels,f=oe(o.outShape,e.dtype),d=this.readSync(e.dataId),p=this.readSync(n.dataId),v=f.values,m=0;m<o.batchSize;++m)for(var g=m*e.strides[0],y=m*f.strides[0],b=0;b<o.outHeight;++b)for(var x=y+b*f.strides[1],w=b*o.strideHeight-c,C=0;C<i;++C){var R=w+C*s;if(!(R<0||R>=o.inHeight))for(var k=C*n.strides[0],I=g+R*e.strides[1],A=0;A<o.outWidth;++A)for(var F=x+A*f.strides[2],D=A*o.strideWidth-l,L=0;L<a;++L){var O=D+L*u;if(!(O<0||O>=o.inWidth))for(var B=k+L*n.strides[1],z=I+O*o.inChannels,V=F,W=B,G=0;G<o.inChannels;++G){for(var H=d[z+G],j=0;j<h;++j)v[V+j]+=H*p[W+j];V+=h,W+=h}}}return f.toTensor()},t.prototype.depthwiseConv2DDerInput=function(e,n,o){U([e,n],"depthwiseConv2DDerInput");for(var i=oe(o.inShape,"float32"),a=i.values,s=i.strides,u=s[0],c=s[1],l=s[2],h=this.readSync(e.dataId),f=e.strides,d=f[0],p=f[1],v=f[2],m=this.readSync(n.dataId),g=n.strides,y=g[0],b=g[1],x=g[2],w=o.batchSize,C=o.filterHeight,R=o.filterWidth,k=o.inChannels,I=o.inHeight,A=o.inWidth,F=o.outChannels,D=o.outHeight,L=o.outWidth,O=o.strideHeight,B=o.strideWidth,z=C-1-o.padInfo.top,V=R-1-o.padInfo.left,W=F/k,G=0;G<w;++G)for(var H=0;H<k;++H)for(var j=0;j<I;++j)for(var ee=j-z,te=Math.max(0,Math.ceil(ee/O)),ae=Math.min(D,(C+ee)/O),se=0;se<A;++se){for(var ce=se-V,de=Math.max(0,Math.ceil(ce/B)),he=Math.min(L,(R+ce)/B),pe=0,Se=te;Se<ae;++Se)for(var fe=Se*O-ee,xe=de;xe<he;++xe)for(var ge=d*G+p*Se+v*xe,ke=y*(C-1-fe)+b*(R-1-(xe*B-ce))+x*H,Ce=0;Ce<W;++Ce)pe+=h[ge+(H*W+Ce)]*m[ke+Ce];a[u*G+c*j+l*se+H]=pe}return i.toTensor()},t.prototype.depthwiseConv2DDerFilter=function(e,n,o){U([e,n],"depthwiseConv2DDerFilter");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=oe(o.filterShape,"float32"),l=o.padInfo.left,h=o.padInfo.top,f=o.outChannels/o.inChannels,d=this.bufferSync(e),p=this.bufferSync(n),v=0;v<s;++v)for(var m=Math.max(0,Math.ceil((h-v)/i)),g=Math.min(o.outHeight,(o.inHeight+h-v)/i),y=0;y<u;++y)for(var b=Math.max(0,Math.ceil((l-y)/a)),x=Math.min(o.outWidth,(o.inWidth+l-y)/a),w=0;w<o.outChannels;++w){for(var C=Math.trunc(w/f),R=w%f,k=0,I=0;I<o.batchSize;++I)for(var A=m;A<g;++A)for(var F=v+A*i-h,D=b;D<x;++D){var L=y+D*a-l;k+=d.get(I,F,L,C)*p.get(I,A,D,w)}c.set(k,v,y,C,R)}return c.toTensor()},t.prototype.tile=function(e,n){return U(e,"tile"),wu(this.bufferSync(e),n)},t.prototype.pad=function(e,n,o){U(e,"pad");var i=n.map(function(f,d){return f[0]+e.shape[d]+f[1]}),a=n.map(function(f){return f[0]}),s=this.bufferSync(e),u=oe(i,e.dtype);o!==0&&u.values.fill(o);for(var c=0;c<e.size;c++){var l=s.indexToLoc(c),h=l.map(function(f,d){return f+a[d]});u.set.apply(u,[s.get.apply(s,l)].concat(h))}return u.toTensor()},t.prototype.transpose=function(e,n){U(e,"transpose");for(var o=new Array(e.rank),i=0;i<o.length;i++)o[i]=e.shape[n[i]];var a=this.readSync(e.dataId),s=oe(o,e.dtype),u=this.bufferSync(e);for(i=0;i<e.size;++i){for(var c=u.indexToLoc(i),l=new Array(c.length),h=0;h<l.length;h++)l[h]=c[n[h]];var f=s.locToIndex(l);s.values[f]=a[i]}return s.toTensor()},t.prototype.gather=function(e,n,o){U([e,n],"gather");var i=e.shape.slice(),a=this.readSync(n.dataId);i[o]=a.length;for(var s=oe(i,e.dtype),u=this.bufferSync(e),c=0;c<s.size;++c){var l=s.indexToLoc(c),h=l.slice();h[o]=a[l[o]];var f=u.locToIndex(h);s.values[c]=u.values[f]}return s.toTensor()},t.prototype.batchToSpaceND=function(e,n,o){U([e],"batchToSpaceND");var i=n.reduce(function(h,f){return h*f}),a=Kr(e.shape,n,i),s=Xr(a.length,n.length),u=Yr(e.shape,n,i),c=uu(o,n.length),l=cu(u,o,n.length);return e.reshape(a).transpose(s).reshape(u).slice(c,l)},t.prototype.spaceToBatchND=function(e,n,o){U([e],"spaceToBatchND");var i=n.reduce(function(f,d){return f*d}),a=[[0,0]];a.push.apply(a,o);for(var s=1+n.length;s<e.shape.length;++s)a.push([0,0]);var u=e.pad(a),c=Kr(u.shape,n,i,!1),l=Xr(c.length,n.length,!1),h=Yr(u.shape,n,i,!1);return u.reshape(c).transpose(l).reshape(h)},t.prototype.pool=function(e,n,o){U(e,"pool");for(var i=n.strideHeight,a=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,h=n.padInfo.top,f=n.padInfo.left,d=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,p=this.readSync(e.dataId),v=oe(n.outShape,e.dtype),m=v.values,g=n.outShape[1]*n.outShape[2]*n.outShape[3],y=n.outShape[2]*n.outShape[3],b=n.outShape[3],x=0;x<n.batchSize;++x)for(var w=x*g,C=x*e.strides[0],R=0;R<n.inChannels;++R)for(var k=0;k<n.outHeight;++k)for(var I=k*i-h,A=Math.max(0,I),F=Math.min(n.inHeight,c+I),D=w+k*y,L=0;L<n.outWidth;++L){for(var O=L*a-f,B=Math.max(0,O),z=Math.min(n.inWidth,l+O),V=d,W=0,G=0,H=A;H<F;H+=s){for(var j=C+H*e.strides[1],ee=B;ee<z;ee+=u){var te=p[j+ee*e.strides[2]+R];o==="max"&&te>V?V=te:o==="avg"&&(W+=te,G++)}if(isNaN(V))break}m[D+L*b+R]=o==="avg"?W/G:V}return v.toTensor()},t.prototype.maxPool=function(e,n){return this.pool(e,n,"max")},t.prototype.maxPoolPositions=function(e,n){for(var o=oe(n.outShape,"int32"),i=n.strideHeight,a=n.strideWidth,s=n.dilationHeight,u=n.dilationWidth,c=n.effectiveFilterHeight,l=n.effectiveFilterWidth,h=n.padInfo.top,f=n.padInfo.left,d=this.bufferSync(e),p=0;p<n.batchSize;++p)for(var v=0;v<n.inChannels;++v)for(var m=0;m<n.outHeight;++m){for(var g=m*i-h,y=g;y<0;)y+=s;for(var b=Math.min(n.inHeight,c+g),x=0;x<n.outWidth;++x){for(var w=x*a-f,C=w;C<0;)C+=u;for(var R=Math.min(n.inWidth,l+w),k=Number.NEGATIVE_INFINITY,I=-1,A=y;A<b;A+=s)for(var F=A-g,D=C;D<R;D+=u){var L=D-w,O=d.get(p,A,D,v);O>k&&(k=O,I=F*l+L)}o.set(I,p,m,x,v)}}return o.toTensor()},t.prototype.maxPoolBackprop=function(e,n,o,i){U([n,o],"maxPoolBackprop");for(var a=this.maxPoolPositions(n,i),s=i.strideHeight,u=i.strideWidth,c=i.dilationHeight,l=i.dilationWidth,h=i.effectiveFilterHeight,f=i.effectiveFilterWidth,d=f-1-i.padInfo.left,p=h-1-i.padInfo.top,v=oe(n.shape,"float32"),m=this.bufferSync(a),g=this.bufferSync(e),y=0;y<i.batchSize;++y)for(var b=0;b<i.inChannels;++b)for(var x=0;x<i.inHeight;++x)for(var w=0;w<i.inWidth;++w){for(var C=x-p,R=w-d,k=0,I=0;I<h;I+=c){var A=(C+I)/s;if(!(A<0||A>=i.outHeight||Math.floor(A)!==A))for(var F=0;F<f;F+=l){var D=(R+F)/u;if(!(D<0||D>=i.outWidth||Math.floor(D)!==D)){var L=h*f-1-m.get(y,A,D,b)===I*f+F?1:0;L!==0&&(k+=g.get(y,A,D,b)*L)}}}v.set(k,y,x,w,b)}return v.toTensor()},t.prototype.avgPoolBackprop=function(e,n,o){U([e,n],"avgPoolBackprop");for(var i=o.strideHeight,a=o.strideWidth,s=o.filterHeight,u=o.filterWidth,c=o.dilationHeight,l=o.dilationWidth,h=o.effectiveFilterHeight,f=o.effectiveFilterWidth,d=f-1-o.padInfo.left,p=h-1-o.padInfo.top,v=oe(n.shape,"float32"),m=1/(s*u),g=this.bufferSync(e),y=0;y<o.batchSize;++y)for(var b=0;b<o.inChannels;++b)for(var x=0;x<o.inHeight;++x)for(var w=0;w<o.inWidth;++w){for(var C=x-p,R=w-d,k=0,I=0;I<h;I+=c){var A=(C+I)/i;if(!(A<0||A>=o.outHeight||Math.floor(A)!==A))for(var F=0;F<f;F+=l){var D=(R+F)/a;D<0||D>=o.outWidth||Math.floor(D)!==D||(k+=g.get(y,A,D,b))}}v.set(k*m,y,x,w,b)}return v.toTensor()},t.prototype.pool3d=function(e,n,o){U(e,"pool3d");for(var i=n.strideDepth,a=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,h=n.effectiveFilterDepth,f=n.effectiveFilterHeight,d=n.effectiveFilterWidth,p=n.padInfo.front,v=n.padInfo.top,m=n.padInfo.left,g=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,y=this.readSync(e.dataId),b=oe(n.outShape,e.dtype),x=b.values,w=n.outShape[1]*n.outShape[2]*n.outShape[3]*n.outShape[4],C=n.outShape[2]*n.outShape[3]*n.outShape[4],R=n.outShape[3]*n.outShape[4],k=n.outShape[4],I=0;I<n.batchSize;++I)for(var A=I*w,F=I*e.strides[0],D=0;D<n.inChannels;++D)for(var L=0;L<n.outDepth;++L){for(var O=L*i-p,B=O;B<0;)B+=u;for(var z=Math.min(n.inDepth,h+O),V=A+L*C,W=0;W<n.outHeight;++W){for(var G=W*a-v,H=G;H<0;)H+=c;for(var j=Math.min(n.inHeight,f+G),ee=V+W*R,te=0;te<n.outWidth;++te){for(var ae=te*s-m,se=ae;se<0;)se+=l;for(var ce=Math.min(n.inWidth,d+ae),de=ee+te*k,he=g,pe=0,Se=0,fe=B;fe<z;fe+=u){for(var xe=F+fe*e.strides[1],ge=H;ge<j;ge+=c){for(var ke=xe+ge*e.strides[2],Ce=se;Ce<ce;Ce+=l){var _e=y[ke+Ce*e.strides[3]+D];if(o==="max"&&_e>he?he=_e:o==="avg"&&(pe+=_e,Se++),isNaN(he))break}if(isNaN(he))break}if(isNaN(he))break}x[de+D]=o==="avg"?pe/Se:he}}}return b.toTensor()},t.prototype.avgPool3d=function(e,n){return U(e,"avgPool3d"),this.pool3d(e,n,"avg").toFloat()},t.prototype.avgPool3dBackprop=function(e,n,o){U([e,n],"avgPool3dBackprop");for(var i=o.strideDepth,a=o.strideHeight,s=o.strideWidth,u=o.filterDepth,c=o.filterHeight,l=o.filterWidth,h=o.dilationDepth,f=o.dilationHeight,d=o.dilationWidth,p=o.effectiveFilterDepth,v=o.effectiveFilterHeight,m=o.effectiveFilterWidth,g=p-1-o.padInfo.front,y=m-1-o.padInfo.left,b=v-1-o.padInfo.top,x=oe(n.shape,"float32"),w=1/(u*c*l),C=this.bufferSync(e),R=0;R<o.batchSize;++R)for(var k=0;k<o.inChannels;++k)for(var I=0;I<o.inDepth;++I)for(var A=0;A<o.inHeight;++A)for(var F=0;F<o.inWidth;++F){for(var D=I-g,L=A-b,O=F-y,B=0,z=0;z<p;z+=h){var V=(D+z)/i;if(!(V<0||V>=o.outDepth||Math.floor(V)!==V))for(var W=0;W<v;W+=f){var G=(L+W)/a;if(!(G<0||G>=o.outHeight||Math.floor(G)!==G))for(var H=0;H<m;H+=d){var j=(O+H)/s;j<0||j>=o.outWidth||Math.floor(j)!==j||(B+=C.get(R,V,G,j,k))}}}x.set(B*w,R,I,A,F,k)}return x.toTensor()},t.prototype.maxPool3d=function(e,n){return U(e,"maxPool3d"),this.pool3d(e,n,"max").toFloat()},t.prototype.maxPool3dPositions=function(e,n){for(var o=oe(n.outShape,"int32"),i=n.strideDepth,a=n.strideHeight,s=n.strideWidth,u=n.dilationDepth,c=n.dilationHeight,l=n.dilationWidth,h=n.effectiveFilterDepth,f=n.effectiveFilterHeight,d=n.effectiveFilterWidth,p=n.padInfo.front,v=n.padInfo.top,m=n.padInfo.left,g=this.bufferSync(e),y=0;y<n.batchSize;++y)for(var b=0;b<n.inChannels;++b)for(var x=0;x<n.outDepth;++x){for(var w=x*i-p,C=w;C<0;)C+=u;for(var R=Math.min(n.inDepth,h+w),k=0;k<n.outHeight;++k){for(var I=k*a-v,A=I;A<0;)A+=c;for(var F=Math.min(n.inHeight,f+I),D=0;D<n.outWidth;++D){for(var L=D*s-m,O=L;O<0;)O+=l;for(var B=Math.min(n.inWidth,d+L),z=Number.NEGATIVE_INFINITY,V=-1,W=C;W<R;W+=u)for(var G=W-w,H=A;H<F;H+=c)for(var j=H-I,ee=O;ee<B;ee+=l){var te=ee-L,ae=g.get(y,W,H,ee,b);ae>=z&&(z=ae,V=G*f*d+j*f+te)}o.set(V,y,x,k,D,b)}}}return o.toTensor()},t.prototype.maxPool3dBackprop=function(e,n,o,i){U([n,o],"maxPool3dBackprop");for(var a=this.maxPool3dPositions(n,i),s=i.strideDepth,u=i.strideHeight,c=i.strideWidth,l=i.dilationDepth,h=i.dilationHeight,f=i.dilationWidth,d=i.effectiveFilterDepth,p=i.effectiveFilterHeight,v=i.effectiveFilterWidth,m=d-1-i.padInfo.front,g=v-1-i.padInfo.left,y=p-1-i.padInfo.top,b=oe(n.shape,"float32"),x=this.bufferSync(a),w=this.bufferSync(e),C=0;C<i.batchSize;++C)for(var R=0;R<i.inChannels;++R)for(var k=0;k<i.inDepth;++k)for(var I=0;I<i.inHeight;++I)for(var A=0;A<i.inWidth;++A){for(var F=k-m,D=I-y,L=A-g,O=0,B=0;B<d;B+=l){var z=(F+B)/s;if(!(z<0||z>=i.outDepth||Math.floor(z)!==z))for(var V=0;V<p;V+=h){var W=(D+V)/u;if(!(W<0||W>=i.outHeight||Math.floor(W)!==W))for(var G=0;G<v;G+=f){var H=(L+G)/c;if(!(H<0||H>=i.outWidth||Math.floor(H)!==H)){var j=d*p*v-1-x.get(C,z,W,H,R)===B*p*v+V*v+G?1:0;j!==0&&(O+=w.get(C,z,W,H,R)*j)}}}}b.set(O,C,k,I,A,R)}return b.toTensor()},t.prototype.cast=function(e,n){return gu(e,n,this)},t.prototype.reshape=function(e,n){return bi(e,n)},t.prototype.avgPool=function(e,n){return U(e,"avgPool"),this.pool(e,n,"avg").toFloat()},t.prototype.resizeBilinear=function(e,n,o,i){U(e,"resizeBilinear");for(var a=e.shape,s=a[0],u=a[1],c=a[2],l=a[3],h=this.readSync(e.dataId),f=new Float32Array(Y([s,n,o,l])),d=[i&&n>1?u-1:u,i&&o>1?c-1:c],p=[i&&n>1?n-1:n,i&&o>1?o-1:o],v=0,m=d[0]/p[0],g=d[1]/p[1],y=0;y<s;y++)for(var b=0;b<n;b++)for(var x=m*b,w=Math.floor(x),C=x-w,R=Math.min(u-1,Math.ceil(x)),k=y*e.strides[0]+w*e.strides[1],I=y*e.strides[0]+R*e.strides[1],A=0;A<o;A++)for(var F=g*A,D=Math.floor(F),L=F-D,O=Math.min(c-1,Math.ceil(F)),B=k+D*e.strides[2],z=I+D*e.strides[2],V=k+O*e.strides[2],W=I+O*e.strides[2],G=0;G<l;G++){var H=h[B+G],j=h[z+G],ee=H+(h[V+G]-H)*L,te=ee+(j+(h[W+G]-j)*L-ee)*C;f[v++]=te}return Ge(f,[s,n,o,l])},t.prototype.resizeBilinearBackprop=function(e,n,o){U([e,n],"resizeBilinearBackprop");for(var i=n.shape,a=i[0],s=i[1],u=i[2],c=i[3],l=e.shape,h=l[1],f=l[2],d=new Float32Array(a*s*u*c),p=[o&&h>1?s-1:s,o&&f>1?u-1:u],v=[o&&h>1?h-1:h,o&&f>1?f-1:f],m=p[0]/v[0],g=p[1]/v[1],y=this.readSync(e.dataId),b=0,x=0;x<a;x++)for(var w=x*n.strides[0],C=0;C<h;C++)for(var R=C*m,k=Math.floor(R),I=Math.min(Math.ceil(R),s-1),A=w+k*n.strides[1],F=w+I*n.strides[1],D=R-k,L=1-D,O=0;O<f;O++)for(var B=O*g,z=Math.floor(B),V=Math.min(Math.ceil(B),u-1),W=B-z,G=1-W,H=A+z*n.strides[2],j=A+V*n.strides[2],ee=F+z*n.strides[2],te=F+V*n.strides[2],ae=L*G,se=L*W,ce=D*G,de=D*W,he=0;he<c;he++){var pe=y[b++];d[H+he]+=pe*ae,d[j+he]+=pe*se,d[ee+he]+=pe*ce,d[te+he]+=pe*de}return Je(d,[a,u,s,c],n.dtype)},t.prototype.resizeNearestNeighbor=function(e,n,o,i){U(e,"resizeNearestNeighbor");for(var a=e.shape,s=a[0],u=a[1],c=a[2],l=a[3],h=this.readSync(e.dataId),f=new Float32Array(s*n*o*l),d=[i&&n>1?u-1:u,i&&o>1?c-1:c],p=[i&&n>1?n-1:n,i&&o>1?o-1:o],v=d[0]/p[0],m=d[1]/p[1],g=0,y=0;y<s;y++)for(var b=y*e.strides[0],x=0;x<n;x++)for(var w=v*x,C=b+Math.min(u-1,i?Math.round(w):Math.floor(w))*e.strides[1],R=0;R<o;R++)for(var k=m*R,I=C+Math.min(c-1,i?Math.round(k):Math.floor(k))*e.strides[2],A=0;A<l;A++){var F=h[I+A];f[g++]=F}return Ge(f,[s,n,o,l],e.dtype)},t.prototype.resizeNearestNeighborBackprop=function(e,n,o){U([e,n],"resizeNearestNeighborBackprop");for(var i=n.shape,a=i[0],s=i[1],u=i[2],c=i[3],l=e.shape,h=l[1],f=l[2],d=new Float32Array(a*s*u*c),p=this.readSync(e.dataId),v=[o&&h>1?s-1:s,o&&f>1?u-1:u],m=[o&&h>1?h-1:h,o&&f>1?f-1:f],g=v[0]/m[0],y=v[1]/m[1],b=1/g,x=1/y,w=2*Math.ceil(b)+2,C=2*Math.ceil(x)+2,R=0;R<a;R++)for(var k=R*n.strides[0],I=0;I<s;I++)for(var A=k+I*n.strides[1],F=Math.floor(I*b),D=Math.floor(F-w/2),L=0;L<u;L++)for(var O=A+L*n.strides[2],B=Math.floor(L*x),z=Math.floor(B-C/2),V=0;V<c;V++){for(var W=0,G=0;G<w;G++){var H=G+D;if(!(H<0||H>=h)){var j=k+H*e.strides[1],ee=H*g;if(I===Math.min(s-1,o?Math.round(ee):Math.floor(ee)))for(var te=0;te<C;te++){var ae=te+z;if(!(ae<0||ae>=f)){var se=j+ae*e.strides[2],ce=ae*y;L===Math.min(u-1,o?Math.round(ce):Math.floor(ce))&&(W+=p[se+V])}}}}d[O+V]=W}return Je(d,n.shape,n.dtype)},t.prototype.batchNormalization=function(e,n,o,i,a,s){U([e,n,o,a,s],"batchNorm");for(var u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=this.readSync(o.dataId),h=a?this.readSync(a.dataId):new Float32Array([1]),f=s?this.readSync(s.dataId):new Float32Array([0]),d=new Float32Array(u.length),p=f.length,v=h.length,m=l.length,g=c.length,y=0,b=0,x=0,w=0,C=0;C<u.length;++C)d[C]=f[y++]+(u[C]-c[b++])*h[x++]/Math.sqrt(l[w++]+i),y>=p&&(y=0),b>=g&&(b=0),x>=v&&(x=0),w>=m&&(w=0);return Je(d,e.shape)},t.prototype.localResponseNormalization4D=function(e,n,o,i,a){U(e,"localResponseNormalization4D");var s=e.shape[3],u=s-1,c=this.readSync(e.dataId),l=e.size,h=new Float32Array(l);function f(m){for(var g=m%s,y=m-g+Math.max(0,g-n),b=m-g+Math.min(g+n,u),x=0;y<=b;y++){var w=c[y];x+=w*w}return x}for(var d=0;d<l;d++){var p=f(d),v=c[d]*Math.pow(o+i*p,-a);h[d]=v}return Je(h,e.shape)},t.prototype.LRNGrad=function(e,n,o,i,a,s,u){U(e,"LRNGrad");for(var c=e.shape[3],l=this.readSync(e.dataId),h=this.readSync(n.dataId),f=this.readSync(o.dataId),d=new Float32Array(e.size),p=e.size,v=0;v<p;v++){for(var m=v%c,g=v-m+Math.max(0,m-i),y=v-m+Math.min(c,m+i+1),b=0,x=g;x<y;x++)b+=Math.pow(h[x],2);for(b=s*b+a,x=g;x<y;x++){var w=-2*s*u*h[x]*f[v]/b;v===x&&(w+=Math.pow(b,-u)),w*=l[v],d[x]+=w}}return Je(d,e.shape)},t.prototype.multinomial=function(e,n,o,i){U(e,"multinomial");for(var a=n?e:qt(e),s=a.shape[0],u=a.shape[1],c=we([s,o],"int32"),l=this.readSync(c.dataId),h=this.readSync(a.dataId),f=0;f<s;++f){var d=f*u,p=new Float32Array(u-1);p[0]=h[d];for(var v=1;v<p.length;++v)p[v]=p[v-1]+h[d+v];for(var m=co(i.toString()),g=f*o,y=0;y<o;++y){var b=m();l[g+y]=p.length;for(var x=0;x<p.length;x++)if(b<p[x]){l[g+y]=x;break}}}return c},t.prototype.oneHot=function(e,n,o,i){U(e,"oneHot");var a=new Float32Array(e.size*n);a.fill(i);for(var s=this.readSync(e.dataId),u=0;u<e.size;++u)s[u]>=0&&s[u]<n&&(a[u*n+s[u]]=o);return rn(a,[e.size,n],"int32")},t.prototype.nonMaxSuppression=function(e,n,o,i,a){return U(e,"nonMaxSuppression"),Vi(this.readSync(e.dataId),this.readSync(n.dataId),o,i,a)},t.prototype.fft=function(e){return this.fftBatch(e,!1)},t.prototype.ifft=function(e){return this.fftBatch(e,!0)},t.prototype.fftBatch=function(e,n){for(var o=e.shape[0],i=e.shape[1],a=oe(e.shape,"float32"),s=oe(e.shape,"float32"),u=ht(e).as2D(o,i),c=At(e).as2D(o,i),l=0;l<o;l++)for(var h=u.slice([l,0],[1,i]),f=c.slice([l,0],[1,i]),d=ze(h,f),p=this.readSync(this.fftImpl(d,n).dataId),v=0;v<i;v++){var m=Ya(p,v);a.values[l*i+v]=m.real,s.values[l*i+v]=m.imag}return ze(a.toTensor(),s.toTensor()).as2D(o,i)},t.prototype.fftImpl=function(e,n){var o=e.as1D(),i=o.size;if(this.isExponentOf2(i)){var a=this.fftRadix2(o,i,n).as2D(e.shape[0],e.shape[1]);return n&&(a=ze(ht(a).div(q(i)),At(a).div(q(i)))),a}var s=this.readSync(e.dataId),u=function(c){for(var l=new Float32Array(c.length/2),h=new Float32Array(c.length/2),f=0;f<c.length;f+=2)l[f/2]=c[f],h[f/2]=c[f+1];return{real:l,imag:h}}(this.fourierTransformByMatmul(s,i,n));return ze(u.real,u.imag).as2D(e.shape[0],e.shape[1])},t.prototype.isExponentOf2=function(e){return(e&e-1)==0},t.prototype.fftRadix2=function(e,n,o){if(n===1)return e;var i=this.readSync(e.dataId),a=n/2,s=function(g){for(var y=Math.ceil(g.length/4),b=new Float32Array(y),x=new Float32Array(y),w=0;w<g.length;w+=4)b[Math.floor(w/4)]=g[w],x[Math.floor(w/4)]=g[w+1];return{real:b,imag:x}}(i),u=ze(s.real,s.imag).as1D(),c=function(g){for(var y=Math.floor(g.length/4),b=new Float32Array(y),x=new Float32Array(y),w=2;w<g.length;w+=4)b[Math.floor(w/4)]=g[w],x[Math.floor(w/4)]=g[w+1];return{real:b,imag:x}}(i),l=ze(c.real,c.imag).as1D();u=this.fftRadix2(u,a,o),l=this.fftRadix2(l,a,o);var h=function(g,y){for(var b=new Float32Array(g/2),x=new Float32Array(g/2),w=0;w<Math.ceil(g/2);w++){var C=(y?2:-2)*Math.PI*(w/g);b[w]=Math.cos(C),x[w]=Math.sin(C)}return{real:b,imag:x}}(n,o),f=ze(h.real,h.imag).mul(l),d=u.add(f),p=u.sub(f),v=ht(d).concat(ht(p)),m=At(d).concat(At(p));return ze(v,m).as1D()},t.prototype.fourierTransformByMatmul=function(e,n,o){for(var i=new Float32Array(2*n),a=0;a<n;a++){for(var s=0,u=0,c=0;c<n;c++){var l=Yh(a*c,n,o),h=Ya(e,c);s+=h.real*l.real-h.imag*l.imag,u+=h.real*l.imag+h.imag*l.real}o&&(s/=n,u/=n),Xh(i,s,u,a)}return i},t.prototype.depthToSpace=function(e,n,o){E(o==="NHWC",function(){return"Only NHWC dataFormat supported on CPU for depthToSpace. Got "+o}),E(n>1,function(){return"blockSize should be > 1 for depthToSpace, but was: "+n});for(var i=e.shape[0],a=e.shape[1],s=e.shape[2],u=e.shape[3],c=a*n,l=s*n,h=u/(n*n),f=this.readSync(e.dataId),d=new Float32Array(i*c*l*h),p=0,v=0;v<i;++v)for(var m=0;m<c;++m)for(var g=Math.floor(m/n),y=m%n,b=0;b<l;++b)for(var x=Math.floor(b/n),w=(y*n+b%n)*h,C=0;C<h;++C){var R=C+w+u*(x+s*(g+a*v));d[p++]=f[R]}return Je(d,[i,c,l,h])},t.prototype.broadcastedBinaryOp=function(e,n,o,i){var a=le(e.shape,n.shape),s=oe(a,o),u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=en(e.shape,a),h=en(n.shape,a),f=s.values;if(l.length+h.length===0)for(var d=0;d<f.length;++d)f[d]=i(u[d%u.length],c[d%c.length]);else{var p=this.bufferSync(e),v=this.bufferSync(n),m=function(g){var y=s.indexToLoc(g),b=y.slice(-e.rank);l.forEach(function(R){return b[R]=0});var x=p.locToIndex(b),w=y.slice(-n.rank);h.forEach(function(R){return w[R]=0});var C=v.locToIndex(w);f[g]=i(u[x],c[C])};for(d=0;d<f.length;++d)m(d)}return s.toTensor()},t.prototype.broadcastedBinaryComplexOp=function(e,n,o){var i=le(e.shape,n.shape),a=oe(i,"float32"),s=oe(i,"float32"),u=this.readSync(e.dataId),c=this.readSync(n.dataId),l=en(e.shape,i),h=en(n.shape,i),f=a.values,d=s.values;if(l.length+h.length===0)for(var p=0;p<f.length;p++){var v=p%u.length,m=p%c.length,g=o(u[2*v],u[2*v+1],c[2*m],c[2*m+1]);f[p]=g.real,d[p]=g.imag}else{var y=this.bufferSync(this.data.get(e.dataId).complexTensors.real),b=this.bufferSync(this.data.get(n.dataId).complexTensors.real),x=function(w){var C=a.indexToLoc(w),R=C.slice(-e.rank);l.forEach(function(D){return R[D]=0});var k=y.locToIndex(R),I=C.slice(-n.rank);h.forEach(function(D){return I[D]=0});var A=b.locToIndex(I),F=o(u[2*k],u[2*k+1],c[2*A],c[2*A+1]);f[w]=F.real,d[w]=F.imag};for(p=0;p<f.length;p++)x(p)}return this.complex(a.toTensor(),s.toTensor())},t.prototype.split=function(e,n,o){return bu(e,n,o)},t.prototype.dispose=function(){},t.prototype.floatPrecision=function(){return 32},t.prototype.epsilon=function(){return 1e-7},t.prototype.cropAndResize=function(e,n,o,i,a,s){for(var u=e.shape,c=u[0],l=u[1],h=u[2],f=u[3],d=n.shape[0],p=i[0],v=i[1],m=oe([d,p,v,f],"float32"),g=this.readSync(n.dataId),y=this.readSync(o.dataId),b=this.readSync(e.dataId),x=e.strides,w=m.strides,C=0;C<d;C++){var R=4*C,k=g[R],I=g[R+1],A=g[R+2],F=g[R+3],D=y[C];if(!(D>=c))for(var L=p>1?(A-k)*(l-1)/(p-1):0,O=v>1?(F-I)*(h-1)/(v-1):0,B=0;B<p;B++){var z=p>1?k*(l-1)+B*L:.5*(k+A)*(l-1);if(z<0||z>l-1)for(var V=0;V<v;V++)for(var W=0;W<f;W++){var G=W+V*w[2]+B*w[1]+C*w[0];m.values[G]=s}else if(a==="bilinear"){var H=Math.floor(z),j=Math.ceil(z),ee=z-H;for(V=0;V<v;V++)if((fe=v>1?I*(h-1)+V*O:.5*(I+F)*(h-1))<0||fe>h-1)for(W=0;W<f;W++)G=W+V*w[2]+B*w[1]+C*w[0],m.values[G]=s;else{var te=Math.floor(fe),ae=Math.ceil(fe),se=fe-te;for(W=0;W<f;W++){var ce=b[G=W+te*x[2]+H*x[1]+D*x[0]],de=b[G=W+ae*x[2]+H*x[1]+D*x[0]],he=b[G=W+te*x[2]+j*x[1]+D*x[0]],pe=ce+(de-ce)*se,Se=he+(b[G=W+ae*x[2]+j*x[1]+D*x[0]]-he)*se;G=W+V*w[2]+B*w[1]+C*w[0],m.values[G]=pe+(Se-pe)*ee}}}else for(V=0;V<v;++V){var fe;if((fe=v>1?I*(h-1)+V*O:.5*(I+F)*(h-1))<0||fe>h-1)for(W=0;W<f;W++)G=W+V*w[2]+B*w[1]+C*w[0],m.values[G]=s;else{var xe=Math.round(fe),ge=Math.round(z);for(W=0;W<f;W++){var ke=W+xe*x[2]+ge*x[1]+D*x[0],Ce=W+V*w[2]+B*w[1]+C*w[0];m.values[Ce]=b[ke]}}}}}return m.toTensor()},t.prototype.sparseToDense=function(e,n,o,i){var a=Jr(0,e,o),s=a.sliceRank,u=a.numUpdates,c=a.sliceSize,l=a.strides,h=a.outputSize;return this.scatter(e,n,o,h,c,u,s,l,i,!1)},t.prototype.gatherND=function(e,n){var o=n.shape,i=o[o.length-1],a=lu(e,n),s=a[0],u=a[1],c=a[2],l=a[3];if(u===0)return Ge([],s,e.dtype);for(var h=new ar([u,c],e.dtype),f=this.readSync(n.dataId),d=this.readSync(e.dataId),p=0;p<u;p++){for(var v=[],m=0,g=0;g<i;g++){var y=f[p*i+g];m+=y*l[g],v.push(y)}if(m<0||m>=e.size/c)throw new Error("Invalid indices: "+v+" does not index into "+e.shape);for(var b=0;b<c;b++)h.values[p*c+b]=d[m*c+b]}return h.toTensor().reshape(s)},t.prototype.scatterND=function(e,n,o){var i=Jr(0,e,o),a=i.sliceRank,s=i.numUpdates,u=i.sliceSize,c=i.strides,l=i.outputSize,h=q(0);return this.scatter(e,n,o,l,u,s,a,c,h,!0)},t.prototype.fill=function(e,n,o){var i=zr(o=o||vr(n),Y(e));return i.fill(n),T.makeTensor(i,e,o,this)},t.prototype.onesLike=function(e){if(e.dtype==="string")throw new Error("onesLike is not supported for string tensors");return this.fill(e.shape,1,e.dtype)},t.prototype.zerosLike=function(e){var n=zr(e.dtype,Y(e.shape));return this.makeOutput(n,e.shape,e.dtype)},t.prototype.linspace=function(e,n,o){return yu(e,n,o)},t.prototype.scatter=function(e,n,o,i,a,s,u,c,l,h){var f=[i/a,a],d=this.readSync(e.dataId),p=this.readSync(n.dataId);if(i===0)return Ge([],o,n.dtype);var v=new ar(f,n.dtype);v.values.fill(this.readSync(l.dataId)[0]);for(var m=0;m<s;m++){for(var g=[],y=0,b=0;b<u;b++){var x=d[m*u+b];g.push(x),y+=x*c[b]}if(y<0||y>=i/a)throw new Error("Invalid indices: "+g+" does not index into "+o);for(var w=0;w<a;w++)h?v.values[y*a+w]+=p[m*a+w]:v.values[y*a+w]=n.rank===0?p[0]:p[m*a+w]}return v.toTensor().reshape(o)},t}(vu);T.registerBackend("cpu",function(){return new gm},1);for(var Yo=0,ys=[{kernelName:"NonMaxSuppressionV5",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs,o=t,i=o.boxes,a=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,f=e;U(i,"NonMaxSuppressionWithScore");var d=zi(f.data.get(i.dataId).values,f.data.get(a.dataId).values,u,c,l,h);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t.x,o=e;U(n,"square");for(var i=o.data.get(n.dataId).values,a=new Float32Array(i.length),s=0;s<i.length;++s){var u=i[s];a[s]=u*u}return{dataId:o.write(a,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}},{kernelName:cr,backendName:"cpu",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t,o=n.a,i=n.b,a=e;U([o,i],cr);var s=a.data.get(o.dataId).values,u=a.data.get(i.dataId).values,c=function(f,d,p,v,m,g){var y=le(f,d),b=y.length,x=St(y),w=ir(m,Y(y)),C=f.length,R=d.length,k=St(f),I=St(d),A=en(f,y),F=en(d,y);if(A.length+F.length===0)for(var D=0;D<w.length;++D)w[D]=g(p[D%p.length],v[D%v.length]);else{var L=function(O){var B=Al(O,b,x),z=B.slice(-C);A.forEach(function(H){return z[H]=0});var V=za(z,C,k),W=B.slice(-R);F.forEach(function(H){return W[H]=0});var G=za(W,R,I);w[O]=g(p[V],v[G])};for(D=0;D<w.length;++D)L(D)}return[w,y]}(o.shape,i.shape,s,u,o.dtype,function(f,d){var p=f-d;return p*p}),l=c[0],h=c[1];return{dataId:a.write(l,h,o.dtype),shape:h,dtype:o.dtype}}}];Yo<ys.length;Yo++)Gs(ys[Yo]);var Dn,ym=function(r){this.variableNames=["A"];var t=$e(),e=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(`+n+".0, "+e+`.0);

        vec4 values = `+t.texture2D+`(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `},xm=function(r){this.variableNames=["A"],this.packedInputs=!1,this.packedOutput=!0;var t=$e(),e=r[0],n=r[1];this.outputShape=r,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(`+n+".0, "+e+`.0);
            vec4 values = `+t.texture2D+`(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        `+t.output+` = result;
      }
    `};for(var Jo=0,xs=[{kernelName:"FromPixels",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs,o=t.pixels,i=n.numChannels,a=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,s=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,u=a?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=u[0],l=u[1],h=[l,c],f=[l,c,i];(s||a)&&(Dn==null&&(Dn=document.createElement("canvas").getContext("2d")),Dn.canvas.width=c,Dn.canvas.height=l,Dn.drawImage(o,0,0,c,l),o=Dn.canvas);var d=e.makeTensorInfo(h,"int32");e.texData.get(d.dataId).usage=it.PIXELS,e.gpgpu.uploadPixelDataToTexture(e.getTexture(d.dataId),o);var p=M().getBool("WEBGL_PACK")?new xm(f):new ym(f),v=e.runWebGLProgram(p,[d],"int32");return e.disposeData(d.dataId),v}},{kernelName:"NonMaxSuppressionV5",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=r.attrs;qr("tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");var o=t,i=o.boxes,a=o.scores,s=n,u=s.maxOutputSize,c=s.iouThreshold,l=s.scoreThreshold,h=s.softNmsSigma,f=e,d=zi(f.readSync(i.dataId),f.readSync(a.dataId),u,c,l,h);return[d.selectedIndices,d.selectedScores]}},{kernelName:"Square",backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t.x,o=e,i=new ie(n.shape,"return x * x;");return o.runWebGLProgram(i,[n],n.dtype)}},{kernelName:cr,backendName:"webgl",kernelFunc:function(r){var t=r.inputs,e=r.backend,n=t,o=n.a,i=n.b,a=e,s=M().getBool("WEBGL_PACK_BINARY_OPERATIONS")?new Ut("return (a - b) * (a - b);",o.shape,i.shape):new Re("return (a - b) * (a - b);",o.shape,i.shape);return a.compileAndRun(s,[o,i])}}];Jo<xs.length;Jo++)Gs(xs[Jo]);for(var Qo=0,bs=[{kernelName:"Square",gradFunc:function(r,t){var e=t[0];return{x:function(){return r.mul(e.toFloat().mul(2))}}}},{kernelName:cr,gradFunc:function(r,t){var e=t[0],n=t[1],o=q(2);return{a:function(){return Xe(r,Xe(o,Oe(e,n)))},b:function(){return Xe(r,Xe(o,Oe(n,e)))}}}}];Qo<bs.length;Qo++)vl(bs[Qo]);var bm=function(){function r(){}return r.prototype.fetch=function(t,e){return fetch(t,e)},r.prototype.now=function(){return performance.now()},r.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Browser's encoder only supports utf-8, but got "+e);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)},r.prototype.decode=function(t,e){return new TextDecoder(e).decode(t)},r}();M().get("IS_BROWSER")&&M().setPlatform("browser",new bm);var Zo,wm=function(){return require("node-fetch")},Cm=function(){function r(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}return r.prototype.fetch=function(t,e){return M().global.fetch!=null?M().global.fetch(t,e):(Zo==null&&(Zo=wm()),Zo(t,e))},r.prototype.now=function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6},r.prototype.encode=function(t,e){if(e!=="utf-8"&&e!=="utf8")throw new Error("Node built-in encoder only supports utf-8, but got "+e);return this.textEncoder.encode(t)},r.prototype.decode=function(t,e){return t.length===0?"":new this.util.TextDecoder(e).decode(t)},r}();M().get("IS_NODE")&&M().setPlatform("node",new Cm);var _i={float32:4,int32:4,uint16:2,uint8:1,bool:1},oo=4;function fc(r,t){for(var e={},n=0,o=function(s){var u=s.name,c=s.dtype,l=s.shape,h=Y(l),f=void 0;if("quantization"in s){var d=s.quantization;if(d.dtype!=="uint8"&&d.dtype!=="uint16")throw new Error("Weight "+s.name+" has unknown quantization dtype "+d.dtype+". Supported quantization dtypes are: 'uint8' and 'uint16'.");var p=_i[d.dtype],v=r.slice(n,n+h*p),m=d.dtype==="uint8"?new Uint8Array(v):new Uint16Array(v);if(c==="float32")f=Float32Array.from(m,function(C){return C*d.scale+d.min});else{if(c!=="int32")throw new Error("Unsupported dtype in weight '"+u+"': "+c);f=Int32Array.from(m,function(C){return Math.round(C*d.scale+d.min)})}n+=h*p}else if(c==="string"){var g=Y(s.shape);f=[];for(var y=0;y<g;y++){var b=new Uint32Array(r.slice(n,n+oo))[0];n+=oo;var x=new Uint8Array(r.slice(n,n+b));f.push(x),n+=b}}else{var w=_i[c];if(v=r.slice(n,n+h*w),c==="float32")f=new Float32Array(v);else if(c==="int32")f=new Int32Array(v);else{if(c!=="bool")throw new Error("Unsupported dtype in weight '"+u+"': "+c);f=new Uint8Array(v)}n+=h*w}e[u]=Ge(f,l,c)},i=0,a=t;i<a.length;i++)o(a[i]);return e}function _m(r){if(r===null)throw new Error("Invalid input value: "+JSON.stringify(r));var t=0,e=[];r.forEach(function(i){if(t+=i.byteLength,e.push(i.byteLength===i.buffer.byteLength?i:new i.constructor(i)),!(i instanceof Float32Array||i instanceof Int32Array||i instanceof Uint8Array))throw new Error("Unsupported TypedArray subtype: "+i.constructor.name)});var n=new Uint8Array(t),o=0;return e.forEach(function(i){n.set(new Uint8Array(i.buffer),o),o+=i.byteLength}),n.buffer}var Ei=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function ws(r){return Ei?Buffer.byteLength(r):new Blob([r]).size}function aa(r){var t=0;r.forEach(function(o){t+=o.byteLength});var e=new Uint8Array(t),n=0;return r.forEach(function(o){e.set(new Uint8Array(o),n),n+=o.byteLength}),e.buffer}function Cs(r){for(r=r.trim();r.endsWith("/");)r=r.slice(0,r.length-1);var t=r.split("/");return t[t.length-1]}function Cr(r){if(r.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:r.modelTopology==null?0:ws(JSON.stringify(r.modelTopology)),weightSpecsBytes:r.weightSpecs==null?0:ws(JSON.stringify(r.weightSpecs)),weightDataBytes:r.weightData==null?0:r.weightData.byteLength}}var at=function(){function r(){this.saveRouters=[],this.loadRouters=[]}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerSaveRouter=function(t){r.getInstance().saveRouters.push(t)},r.registerLoadRouter=function(t){r.getInstance().loadRouters.push(t)},r.getSaveHandlers=function(t){return r.getHandlers(t,"save")},r.getLoadHandlers=function(t,e){return r.getHandlers(t,"load",e)},r.getHandlers=function(t,e,n){var o=[];return(e==="load"?r.getInstance().loadRouters:r.getInstance().saveRouters).forEach(function(i){var a=i(t,n);a!==null&&o.push(a)}),o},r}(),Vn="://",on=function(){function r(){this.managers={}}return r.getInstance=function(){return r.instance==null&&(r.instance=new r),r.instance},r.registerManager=function(t,e){E(t!=null,function(){return"scheme must not be undefined or null."}),t.endsWith(Vn)&&(t=t.slice(0,t.indexOf(Vn))),E(t.length>0,function(){return"scheme must not be an empty string."});var n=r.getInstance();E(n.managers[t]==null,function(){return"A model store manager is already registered for scheme '"+t+"'."}),n.managers[t]=e},r.getManager=function(t){var e=this.getInstance().managers[t];if(e==null)throw new Error("Cannot find model manager for scheme '"+t+"'");return e},r.getSchemes=function(){return Object.keys(this.getInstance().managers)},r}();function Wr(r){if(r.indexOf(Vn)===-1)throw new Error("The url string provided does not contain a scheme. Supported schemes are: "+on.getSchemes().join(","));return{scheme:r.split(Vn)[0],path:r.split(Vn)[1]}}function _s(r,t,e){return e===void 0&&(e=!1),K(this,void 0,void 0,function(){var n,o,i,a,s,u,c,l,h;return X(this,function(f){switch(f.label){case 0:return E(r!==t,function(){return"Old path and new path are the same: '"+r+"'"}),E((n=at.getLoadHandlers(r)).length>0,function(){return"Copying failed because no load handler is found for source URL "+r+"."}),E(n.length<2,function(){return"Copying failed because more than one ("+n.length+") load handlers for source URL "+r+"."}),o=n[0],E((i=at.getSaveHandlers(t)).length>0,function(){return"Copying failed because no save handler is found for destination URL "+t+"."}),E(i.length<2,function(){return"Copying failed because more than one ("+n.length+") save handlers for destination URL "+t+"."}),a=i[0],s=Wr(r).scheme,u=Wr(r).path,c=s===Wr(r).scheme,[4,o.load()];case 1:return l=f.sent(),e&&c?[4,on.getManager(s).removeModel(u)]:[3,3];case 2:f.sent(),f.label=3;case 3:return[4,a.save(l)];case 4:return h=f.sent(),!e||c?[3,6]:[4,on.getManager(s).removeModel(u)];case 5:f.sent(),f.label=6;case 6:return[2,h.modelArtifactsInfo]}})})}var gn="models_store",tn="model_info_store";function dc(){if(!M().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");var r=window||self,t=r.indexedDB||r.mozIndexedDB||r.webkitIndexedDB||r.msIndexedDB||r.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function Ii(r){var t=r.result;t.createObjectStore(gn,{keyPath:"modelPath"}),t.createObjectStore(tn,{keyPath:"modelPath"})}var zn=function(){function r(t){if(this.indexedDB=dc(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}return r.prototype.save=function(t){return K(this,void 0,void 0,function(){return X(this,function(e){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return[2,this.databaseAction(this.modelPath,t)]})})},r.prototype.load=function(){return K(this,void 0,void 0,function(){return X(this,function(t){return[2,this.databaseAction(this.modelPath)]})})},r.prototype.databaseAction=function(t,e){var n=this;return new Promise(function(o,i){var a=n.indexedDB.open("tensorflowjs",1);a.onupgradeneeded=function(){return Ii(a)},a.onsuccess=function(){var s=a.result;if(e==null){var u=s.transaction(gn,"readonly"),c=u.objectStore(gn).get(n.modelPath);c.onsuccess=function(){if(c.result==null)return s.close(),i(new Error("Cannot find model with path '"+n.modelPath+"' in IndexedDB."));o(c.result.modelArtifacts)},c.onerror=function(v){return s.close(),i(c.error)},u.oncomplete=function(){return s.close()}}else{var l,h=Cr(e),f=s.transaction(tn,"readwrite"),d=f.objectStore(tn),p=d.put({modelPath:n.modelPath,modelArtifactsInfo:h});p.onsuccess=function(){var v=(l=s.transaction(gn,"readwrite")).objectStore(gn).put({modelPath:n.modelPath,modelArtifacts:e,modelArtifactsInfo:h});v.onsuccess=function(){return o({modelArtifactsInfo:h})},v.onerror=function(m){var g=(d=f.objectStore(tn)).delete(n.modelPath);g.onsuccess=function(){return s.close(),i(v.error)},g.onerror=function(y){return s.close(),i(v.error)}}},p.onerror=function(v){return s.close(),i(p.error)},f.oncomplete=function(){l==null?s.close():l.oncomplete=function(){return s.close()}}}},a.onerror=function(s){return i(a.error)}})},r.URL_SCHEME="indexeddb://",r}(),Es=function(r){return M().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(zn.URL_SCHEME)?(t=r.slice(zn.URL_SCHEME.length),new zn(t)):null;var t};at.registerSaveRouter(Es),at.registerLoadRouter(Es);var Em=function(){function r(){this.indexedDB=dc()}return r.prototype.listModels=function(){return K(this,void 0,void 0,function(){var t=this;return X(this,function(e){return[2,new Promise(function(n,o){var i=t.indexedDB.open("tensorflowjs",1);i.onupgradeneeded=function(){return Ii(i)},i.onsuccess=function(){var a=i.result,s=a.transaction(tn,"readonly"),u=s.objectStore(tn).getAll();u.onsuccess=function(){for(var c={},l=0,h=u.result;l<h.length;l++){var f=h[l];c[f.modelPath]=f.modelArtifactsInfo}n(c)},u.onerror=function(c){return a.close(),o(u.error)},s.oncomplete=function(){return a.close()}},i.onerror=function(a){return o(i.error)}})]})})},r.prototype.removeModel=function(t){return K(this,void 0,void 0,function(){var e=this;return X(this,function(n){var o;return t=(o=t).startsWith(zn.URL_SCHEME)?o.slice(zn.URL_SCHEME.length):o,[2,new Promise(function(i,a){var s=e.indexedDB.open("tensorflowjs",1);s.onupgradeneeded=function(){return Ii(s)},s.onsuccess=function(){var u,c=s.result,l=c.transaction(tn,"readwrite"),h=l.objectStore(tn),f=h.get(t);f.onsuccess=function(){if(f.result==null)return c.close(),a(new Error("Cannot find model with path '"+t+"' in IndexedDB."));var d=h.delete(t),p=function(){var v=(u=c.transaction(gn,"readwrite")).objectStore(gn).delete(t);v.onsuccess=function(){return i(f.result.modelArtifactsInfo)},v.onerror=function(m){return a(f.error)}};d.onsuccess=p,d.onerror=function(v){return p(),c.close(),a(f.error)}},f.onerror=function(d){return c.close(),a(f.error)},l.oncomplete=function(){u==null?c.close():u.oncomplete=function(){return c.close()}}},s.onerror=function(u){return a(s.error)}})]})})},r}();if(M().getBool("IS_BROWSER"))try{on.registerManager(zn.URL_SCHEME,new Em)}catch{}var Gt="/",On="tensorflowjs_models",pc="info",Im="model_topology",Am="weight_specs",km="weight_data",Rm="model_metadata";function vc(r){return{info:[On,r,pc].join(Gt),topology:[On,r,Im].join(Gt),weightSpecs:[On,r,Am].join(Gt),weightData:[On,r,km].join(Gt),modelMetadata:[On,r,Rm].join(Gt)}}function Sm(r){var t=r.split(Gt);if(t.length<3)throw new Error("Invalid key format: "+r);return t.slice(1,t.length-1).join(Gt)}var Un=function(){function r(t){if(!M().getBool("IS_BROWSER")||typeof window>"u"||window.localStorage===void 0)throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=vc(this.modelPath)}return r.prototype.save=function(t){return K(this,void 0,void 0,function(){var e,n,o;return X(this,function(i){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");e=JSON.stringify(t.modelTopology),n=JSON.stringify(t.weightSpecs),o=Cr(t);try{return this.LS.setItem(this.keys.info,JSON.stringify(o)),this.LS.setItem(this.keys.topology,e),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,function(a){if(Ei)return Buffer.from(a).toString("base64");for(var s=new Uint8Array(a),u="",c=0,l=s.length;c<l;c++)u+=String.fromCharCode(s[c]);return btoa(u)}(t.weightData)),this.LS.setItem(this.keys.modelMetadata,JSON.stringify({format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata})),[2,{modelArtifactsInfo:o}]}catch{throw this.LS.removeItem(this.keys.info),this.LS.removeItem(this.keys.topology),this.LS.removeItem(this.keys.weightSpecs),this.LS.removeItem(this.keys.weightData),this.LS.removeItem(this.keys.modelMetadata),new Error("Failed to save model '"+this.modelPath+"' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes="+o.modelTopologyBytes+", weightSpecsBytes="+o.weightSpecsBytes+", weightDataBytes="+o.weightDataBytes+".")}return[2]})})},r.prototype.load=function(){return K(this,void 0,void 0,function(){var t,e,n,o,i,a,s;return X(this,function(u){if((t=JSON.parse(this.LS.getItem(this.keys.info)))==null)throw new Error("In local storage, there is no model with name '"+this.modelPath+"'");if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");if(e={},(n=JSON.parse(this.LS.getItem(this.keys.topology)))==null)throw new Error("In local storage, the topology of model '"+this.modelPath+"' is missing.");if(e.modelTopology=n,(o=JSON.parse(this.LS.getItem(this.keys.weightSpecs)))==null)throw new Error("In local storage, the weight specs of model '"+this.modelPath+"' are missing.");if(e.weightSpecs=o,(i=this.LS.getItem(this.keys.modelMetadata))!=null&&(a=JSON.parse(i),e.format=a.format,e.generatedBy=a.generatedBy,e.convertedBy=a.convertedBy,e.userDefinedMetadata=a.userDefinedMetadata),(s=this.LS.getItem(this.keys.weightData))==null)throw new Error("In local storage, the binary weight values of model '"+this.modelPath+"' are missing.");return e.weightData=function(c){if(Ei){var l=Buffer.from(c,"base64");return l.buffer.slice(l.byteOffset,l.byteOffset+l.byteLength)}for(var h=atob(c),f=new Uint8Array(h.length),d=0;d<h.length;++d)f.set([h.charCodeAt(d)],d);return f.buffer}(s),[2,e]})})},r.URL_SCHEME="localstorage://",r}(),Is=function(r){return M().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(Un.URL_SCHEME)?(t=r.slice(Un.URL_SCHEME.length),new Un(t)):null;var t};at.registerSaveRouter(Is),at.registerLoadRouter(Is);var Dm=function(){function r(){E(M().getBool("IS_BROWSER"),function(){return"Current environment is not a web browser"}),E(typeof window>"u"||window.localStorage!==void 0,function(){return"Current browser does not appear to support localStorage"}),this.LS=window.localStorage}return r.prototype.listModels=function(){return K(this,void 0,void 0,function(){var t,e,n,o,i,a;return X(this,function(s){for(t={},e=On+Gt,n=Gt+pc,o=0;o<this.LS.length;++o)(i=this.LS.key(o)).startsWith(e)&&i.endsWith(n)&&(a=Sm(i),t[a]=JSON.parse(this.LS.getItem(i)));return[2,t]})})},r.prototype.removeModel=function(t){return K(this,void 0,void 0,function(){var e,n;return X(this,function(o){var i;if(t=(i=t).startsWith(Un.URL_SCHEME)?i.slice(Un.URL_SCHEME.length):i,e=vc(t),this.LS.getItem(e.info)==null)throw new Error("Cannot find model at path '"+t+"'");return n=JSON.parse(this.LS.getItem(e.info)),this.LS.removeItem(e.info),this.LS.removeItem(e.topology),this.LS.removeItem(e.weightSpecs),this.LS.removeItem(e.weightData),[2,n]})})},r}();if(M().getBool("IS_BROWSER"))try{on.registerManager(Un.URL_SCHEME,new Dm)}catch{}var Tm="model",Fm=".json",Nm=".weights.bin";function As(r){return new Promise(function(t){return setTimeout(t)}).then(r)}var ei=function(){function r(t){if(!M().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(r.URL_SCHEME)&&(t=t.slice(r.URL_SCHEME.length)),t!=null&&t.length!==0||(t=Tm),this.modelTopologyFileName=t+Fm,this.weightDataFileName=t+Nm}return r.prototype.save=function(t){return K(this,void 0,void 0,function(){var e,n,o,i,a,s;return X(this,function(u){switch(u.label){case 0:if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");if(e=window.URL.createObjectURL(new Blob([t.weightData],{type:"application/octet-stream"})),!(t.modelTopology instanceof ArrayBuffer))return[3,1];throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");case 1:return n=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,weightsManifest:n},i=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),(a=this.jsonAnchor==null?document.createElement("a"):this.jsonAnchor).download=this.modelTopologyFileName,a.href=i,[4,As(function(){return a.dispatchEvent(new MouseEvent("click"))})];case 2:return u.sent(),t.weightData==null?[3,4]:((s=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor).download=this.weightDataFileName,s.href=e,[4,As(function(){return s.dispatchEvent(new MouseEvent("click"))})]);case 3:u.sent(),u.label=4;case 4:return[2,{modelArtifactsInfo:Cr(t)}]}})})},r.URL_SCHEME="downloads://",r}(),Pm=function(){function r(t){if(t==null||t.length<1)throw new Error("When calling browserFiles, at least 1 file is required, but received "+t);this.files=t}return r.prototype.load=function(){return K(this,void 0,void 0,function(){var t,e,n=this;return X(this,function(o){return t=this.files[0],e=this.files.slice(1),[2,new Promise(function(i,a){var s=new FileReader;s.onload=function(u){var c=JSON.parse(u.target.result),l=c.modelTopology;if(l!=null){e.length===0&&i({modelTopology:l});var h=c.weightsManifest;if(h!=null){var f;try{f=n.checkManifestAndWeightFiles(h,e)}catch(m){return void a(m)}var d=[],p=[],v=[];h.forEach(function(m){m.paths.forEach(function(g){p.push(g),v.push(null)}),d.push.apply(d,m.weights)}),h.forEach(function(m){m.paths.forEach(function(g){var y=new FileReader;y.onload=function(b){var x=b.target.result,w=p.indexOf(g);v[w]=x,v.indexOf(null)===-1&&i({modelTopology:l,weightSpecs:d,weightData:aa(v),format:c.format,generatedBy:c.generatedBy,convertedBy:c.convertedBy,userDefinedMetadata:c.userDefinedMetadata})},y.onerror=function(b){return a("Failed to weights data from file of path '"+g+"'.")},y.readAsArrayBuffer(f[g])})})}else a(new Error("weightManifest field is missing from file "+t.name))}else a(new Error("modelTopology field is missing from file "+t.name))},s.onerror=function(u){return a("Failed to read model topology and weights manifest JSON from file '"+t.name+"'. BrowserFiles supports loading Keras-style tf.Model artifacts only.")},s.readAsText(t)})]})})},r.prototype.checkManifestAndWeightFiles=function(t,e){for(var n=[],o=e.map(function(u){return Cs(u.name)}),i={},a=0,s=t;a<s.length;a++)s[a].paths.forEach(function(u){var c=Cs(u);if(n.indexOf(c)!==-1)throw new Error("Duplicate file basename found in weights manifest: '"+c+"'");if(n.push(c),o.indexOf(c)===-1)throw new Error("Weight file with basename '"+c+"' is not provided.");i[u]=e[o.indexOf(c)]});if(n.length!==e.length)throw new Error("Mismatch in the number of files in weights manifest ("+n.length+") and the number of weight files provided ("+e.length+").");return i},r}();function ks(r,t,e,n){(function(i){E(i!=null&&Array.isArray(i)&&i.length>0,function(){return"promises must be a none empty array"})})(r),function(i,a){E(i>=0&&i<=1,function(){return"Progress fraction must be in range [0, 1], but got startFraction "+i}),E(a>=0&&a<=1,function(){return"Progress fraction must be in range [0, 1], but got endFraction "+a}),E(a>=i,function(){return"startFraction must be no more than endFraction, but got startFraction "+i+" and endFraction "+a})}(e=e??0,n=n??1);var o=0;return Promise.all(r.map(function(i){return i.then(function(a){var s=e+ ++o/r.length*(n-e);return t(s),a}),i}))}function mc(r,t){return K(this,void 0,void 0,function(){var e,n,o,i,a,s,u,c,l;return X(this,function(h){switch(h.label){case 0:return t==null&&(t={}),e=t.fetchFunc==null?M().platform.fetch:t.fetchFunc,n=r.map(function(f){return e(f,t.requestInit,{isBinary:!0})}),o=0,i=.5,t.onProgress!=null?[3,2]:[4,Promise.all(n)];case 1:return a=h.sent(),[3,4];case 2:return[4,ks(n,t.onProgress,o,i)];case 3:a=h.sent(),h.label=4;case 4:return s=a.map(function(f){return f.arrayBuffer()}),u=.5,c=1,t.onProgress!=null?[3,6]:[4,Promise.all(s)];case 5:return l=h.sent(),[3,8];case 6:return[4,ks(s,t.onProgress,u,c)];case 7:l=h.sent(),h.label=8;case 8:return[2,l]}})})}function Rs(r){var t=this;return function(e,n,o){return n===void 0&&(n=""),K(t,void 0,void 0,function(){var i,a,s,u,c,l,h,f,d,p;return X(this,function(v){switch(v.label){case 0:if(i=e.map(function(){return!1}),a={},s=o!=null?o.map(function(){return!1}):[],u=[],e.forEach(function(m,g){var y=0;m.weights.forEach(function(b){var x="quantization"in b?b.quantization.dtype:b.dtype,w=_i[x]*Y(b.shape),C=function(){i[g]=!0,a[g]==null&&(a[g]=[]),a[g].push({manifestEntry:b,groupOffset:y,sizeBytes:w})};o!=null?o.forEach(function(R,k){R===b.name&&(C(),s[k]=!0)}):C(),u.push(b.name),y+=w})}),!s.every(function(m){return m}))throw c=o.filter(function(m,g){return!s[g]}),new Error("Could not find weights in manifest with names: "+c.join(", ")+`. 
Manifest JSON has weights with names: `+u.join(", ")+".");return l=i.reduce(function(m,g,y){return g&&m.push(y),m},[]),h=[],l.forEach(function(m){e[m].paths.forEach(function(g){var y=n+(n.endsWith("/")?"":"/")+g;h.push(y)})}),[4,r(h)];case 1:return f=v.sent(),d={},p=0,l.forEach(function(m){for(var g=e[m].paths.length,y=0,b=0;b<g;b++)y+=f[p+b].byteLength;for(var x=new ArrayBuffer(y),w=new Uint8Array(x),C=0,R=0;R<g;R++){var k=new Uint8Array(f[p+R]);w.set(k,C),C+=k.byteLength}a[m].forEach(function(I){var A=fc(x.slice(I.groupOffset,I.groupOffset+I.sizeBytes),[I.manifestEntry]);for(var F in A)d[F]=A[F]}),p+=g}),[2,d]}})})}}at.registerSaveRouter(function(r){return M().getBool("IS_BROWSER")&&!Array.isArray(r)&&r.startsWith(ei.URL_SCHEME)?function(t){return t===void 0&&(t="model"),new ei(t)}(r.slice(ei.URL_SCHEME.length)):null});var gc=function(){function r(t,e){if(this.DEFAULT_METHOD="POST",e==null&&(e={}),this.weightPathPrefix=e.weightPathPrefix,this.onProgress=e.onProgress,e.fetchFunc!=null?(E(typeof e.fetchFunc=="function",function(){return"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"}),this.fetch=e.fetchFunc):this.fetch=M().platform.fetch,E(t!=null&&t.length>0,function(){return"URL path for http must not be null, undefined or empty."}),Array.isArray(t)&&E(t.length===2,function(){return"URL paths for http must have a length of 2, (actual length is "+t.length+")."}),this.path=t,e.requestInit!=null&&e.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=e.requestInit||{}}return r.prototype.save=function(t){return K(this,void 0,void 0,function(){var e,n,o,i;return X(this,function(a){switch(a.label){case 0:if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");return(e=Object.assign({method:this.DEFAULT_METHOD},this.requestInit)).body=new FormData,n=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],o={modelTopology:t.modelTopology,format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,userDefinedMetadata:t.userDefinedMetadata,weightsManifest:n},e.body.append("model.json",new Blob([JSON.stringify(o)],{type:"application/json"}),"model.json"),t.weightData!=null&&e.body.append("model.weights.bin",new Blob([t.weightData],{type:"application/octet-stream"}),"model.weights.bin"),[4,this.fetch(this.path,e)];case 1:if((i=a.sent()).ok)return[2,{modelArtifactsInfo:Cr(t),responses:[i]}];throw new Error("BrowserHTTPRequest.save() failed due to HTTP response status "+i.status+".")}})})},r.prototype.load=function(){return K(this,void 0,void 0,function(){var t,e,n,o,i,a,s,u,c,l,h,f;return X(this,function(d){switch(d.label){case 0:return[4,this.fetch(this.path,this.requestInit)];case 1:if(!(t=d.sent()).ok)throw new Error("Request to "+this.path+" failed with status code "+t.status+". Please verify this URL points to the model JSON of the model to load.");d.label=2;case 2:return d.trys.push([2,4,,5]),[4,t.json()];case 3:return e=d.sent(),[3,5];case 4:throw d.sent(),n="Failed to parse model JSON of response from "+this.path+".",this.path.endsWith(".pb")?n+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":n+=" Please make sure the server is serving valid JSON for this request.",new Error(n);case 5:if(o=e.modelTopology,i=e.weightsManifest,a=e.generatedBy,s=e.convertedBy,u=e.format,c=e.userDefinedMetadata,o==null&&i==null)throw new Error("The JSON from HTTP path "+this.path+" contains neither model topology or manifest for weights.");return i==null?[3,7]:[4,this.loadWeights(i)];case 6:f=d.sent(),l=f[0],h=f[1],d.label=7;case 7:return[2,{modelTopology:o,weightSpecs:l,weightData:h,userDefinedMetadata:c,generatedBy:a,convertedBy:s,format:u}]}})})},r.prototype.loadWeights=function(t){return K(this,void 0,void 0,function(){var e,n,o,i,a,s,u,c,l,h,f;return X(this,function(d){switch(d.label){case 0:for(e=Array.isArray(this.path)?this.path[1]:this.path,n=function(p){var v=p.lastIndexOf("/"),m=p.lastIndexOf("?"),g=p.substring(0,v),y=m>v?p.substring(m):"";return[g+"/",y]}(e),o=n[0],i=n[1],a=this.weightPathPrefix||o,s=[],u=0,c=t;u<c.length;u++)l=c[u],s.push.apply(s,l.weights);return h=[],t.forEach(function(p){p.paths.forEach(function(v){h.push(a+v+i)})}),[4,mc(h,{requestInit:this.requestInit,fetchFunc:this.fetch,onProgress:this.onProgress})];case 1:return f=d.sent(),[2,[s,aa(f)]]}})})},r.URL_SCHEME_REGEX=/^https?:\/\//,r}();function Ai(r){return r.match(gc.URL_SCHEME_REGEX)!=null}var Ss=function(r,t){return typeof fetch>"u"?null:(Array.isArray(r)?r.every(function(e){return Ai(e)}):Ai(r))?ki(r,{onProgress:t}):null};function ki(r,t){return new gc(r,t)}at.registerSaveRouter(Ss),at.registerLoadRouter(Ss);var ti=function(){function r(t){this.modelArtifacts=t}return r.prototype.load=function(){return K(this,void 0,void 0,function(){return X(this,function(t){return[2,this.modelArtifacts]})})},r}(),Mm=function(){function r(t){this.saveHandler=t}return r.prototype.save=function(t){return K(this,void 0,void 0,function(){return X(this,function(e){return[2,this.saveHandler(t)]})})},r}(),yc=Object.freeze({browserFiles:function(r){return new Pm(r)},browserHTTPRequest:function(r,t){return ki(r,t)},concatenateArrayBuffers:aa,decodeWeights:fc,encodeWeights:function(r,t){return K(this,void 0,void 0,function(){var e,n,o,i,a,s=this;return X(this,function(u){switch(u.label){case 0:for(e=[],n=[],o=Array.isArray(r)?r.map(function(c){return c.name}):Object.keys(r),i=function(c){var l=o[c],h=Array.isArray(r)?r[c].tensor:r[l];if(h.dtype!=="float32"&&h.dtype!=="int32"&&h.dtype!=="bool"&&h.dtype!=="string")throw new Error("Unsupported dtype in weight '"+l+"': "+h.dtype);var f={name:l,shape:h.shape,dtype:h.dtype};if(h.dtype==="string"){var d=new Promise(function(p){return K(s,void 0,void 0,function(){var v,m,g,y,b,x,w;return X(this,function(C){switch(C.label){case 0:return[4,h.bytes()];case 1:for(v=C.sent(),m=v.reduce(function(R,k){return R+k.length},0)+oo*v.length,g=new Uint8Array(m),y=0,b=0;b<v.length;b++)x=v[b],w=new Uint8Array(new Uint32Array([x.length]).buffer),g.set(w,y),y+=oo,g.set(x,y),y+=x.length;return p(g),[2]}})})});n.push(d)}else n.push(h.data());t!=null&&(f.group=t),e.push(f)},a=0;a<o.length;++a)i(a);return[4,Promise.all(n)];case 1:return[2,{data:_m(u.sent()),specs:e}]}})})},fromMemory:function(r,t,e,n){return arguments.length===1?r.modelTopology!=null||r.weightSpecs!=null?new ti(r):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new ti({modelTopology:r})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new ti({modelTopology:r,weightSpecs:t,weightData:e,trainingConfig:n}))},getLoadHandlers:function(r,t){return at.getLoadHandlers(r,t)},getModelArtifactsInfoForJSON:Cr,getSaveHandlers:function(r){return at.getSaveHandlers(r)},http:ki,isHTTPScheme:Ai,loadWeights:function(r,t,e,n){return t===void 0&&(t=""),K(this,void 0,void 0,function(){return X(this,function(o){return[2,Rs(function(i){return mc(i,{requestInit:n})})(r,t,e)]})})},registerLoadRouter:function(r){return at.registerLoadRouter(r)},registerSaveRouter:function(r){return at.registerSaveRouter(r)},weightsLoaderFactory:Rs,withSaveHandler:function(r){return new Mm(r)},copyModel:function(r,t){return K(this,void 0,void 0,function(){return X(this,function(e){return[2,_s(r,t,!1)]})})},listModels:function(){return K(this,void 0,void 0,function(){var r,t,e,n,o,i,a;return X(this,function(s){switch(s.label){case 0:r=on.getSchemes(),t={},e=0,n=r,s.label=1;case 1:return e<n.length?(o=n[e],[4,on.getManager(o).listModels()]):[3,4];case 2:for(a in i=s.sent())t[o+Vn+a]=i[a];s.label=3;case 3:return e++,[3,1];case 4:return[2,t]}})})},moveModel:function(r,t){return K(this,void 0,void 0,function(){return X(this,function(e){return[2,_s(r,t,!0)]})})},removeModel:function(r){return K(this,void 0,void 0,function(){var t;return X(this,function(e){return t=Wr(r),[2,on.getManager(t.scheme).removeModel(t.path)]})})}}),Tn;S({confusionMatrix_:function(r,t,e){var n=_(r,"labels","confusionMatrix"),o=_(t,"predictions","confusionMatrix");E(e==null||e>0&&Number.isInteger(e),function(){return"If provided, numClasses must be a positive integer, but got "+e}),E(n.rank===1,function(){return"Expected the rank of labels to be 1, but got "+n.rank}),E(o.rank===1,function(){return"Expected the rank of predictions to be 1, but got "+o.rank}),E(n.shape[0]===o.shape[0],function(){return"Mismatch in the number of examples: "+n.shape[0]+" vs. "+o.shape[0]+". Labels and predictions should have the same number of elements."}),E(e>0&&Number.isInteger(e),function(){return"numClasses is required to be a positive integer, but got "+e});var i=yi(n.asType("int32"),e),a=yi(o.asType("int32"),e);return i.transpose().matMul(a).asType("int32")}});var Om=S({fromPixels_:function(r,t){if(t===void 0&&(t=3),t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(r==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");var e=!1,n=!1,o=!1,i=!1,a=!1;if(r.data instanceof Uint8Array)e=!0;else if(typeof ImageData<"u"&&r instanceof ImageData)n=!0;else if(typeof HTMLVideoElement<"u"&&r instanceof HTMLVideoElement)o=!0;else if(typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement)i=!0;else{if(r.getContext==null)throw new Error("pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was "+r.constructor.name);a=!0}if(o&&o&&r.readyState<2)throw new Error("The video element has not loaded data yet. Please wait for `loadeddata` event on the <video> element.");if(Us("FromPixels",T.backendName)!=null)return T.runKernel("FromPixels",{pixels:r},{numChannels:t});var s,u,c=o?[r.videoWidth,r.videoHeight]:[r.width,r.height],l=c[0],h=c[1];if(a?s=r.getContext("2d").getImageData(0,0,l,h).data:n||e?s=r.data:(i||o)&&(Tn==null&&(Tn=document.createElement("canvas").getContext("2d")),Tn.canvas.width=l,Tn.canvas.height=h,Tn.drawImage(r,0,0,l,h),s=Tn.getImageData(0,0,l,h).data),t===4)u=new Int32Array(s);else{var f=l*h;u=new Int32Array(f*t);for(var d=0;d<f;d++)for(var p=0;p<t;++p)u[d*t+p]=s[4*d+p]}return Mi(u,[h,l,t],"int32")}}),sa=Object.freeze({toPixels:function(r,t){return K(this,void 0,void 0,function(){var e,n,o,i,a,s,u,c,l,h,f,d,p,v,m,g,y,b,x,w,C,R,k;return X(this,function(I){switch(I.label){case 0:if(e=_(r,"img","toPixels"),r instanceof Ee||(e=e.toInt()),e.rank!==2&&e.rank!==3)throw new Error("toPixels only supports rank 2 or 3 tensors, got rank "+e.rank+".");if(n=e.shape.slice(0,2),o=n[0],i=n[1],(a=e.rank===2?1:e.shape[2])>4||a===2)throw new Error("toPixels only supports depth of size 1, 3 or 4 but got "+a);return[4,e.data()];case 1:return s=I.sent(),u=e.min(),c=e.max(),[4,Promise.all([u.data(),c.data()])];case 2:if(l=I.sent(),h=l[0],f=l[1],d=h[0],p=f[0],u.dispose(),c.dispose(),e.dtype==="float32"){if(d<0||p>1)throw new Error("Tensor values for a float32 Tensor must be in the range [0 - 1] but got range ["+d+" - "+p+"].")}else{if(e.dtype!=="int32")throw new Error("Unsupported type for toPixels: "+e.dtype+". Please use float32 or int32 tensors.");if(d<0||p>255)throw new Error("Tensor values for a int32 Tensor must be in the range [0 - 255] but got range ["+d+" - "+p+"].")}for(v=e.dtype==="float32"?255:1,m=new Uint8ClampedArray(i*o*4),g=0;g<o*i;++g)y=void 0,b=void 0,x=void 0,w=void 0,a===1?(y=s[g]*v,b=s[g]*v,x=s[g]*v,w=255):a===3?(y=s[3*g]*v,b=s[3*g+1]*v,x=s[3*g+2]*v,w=255):a===4&&(y=s[4*g]*v,b=s[4*g+1]*v,x=s[4*g+2]*v,w=s[4*g+3]*v),m[(C=4*g)+0]=Math.round(y),m[C+1]=Math.round(b),m[C+2]=Math.round(x),m[C+3]=Math.round(w);return t!=null&&(t.width=i,t.height=o,R=t.getContext("2d"),k=new ImageData(m,i,o),R.putImageData(k,0,0)),e!==r&&e.dispose(),[2,m]}})})},fromPixels:Om}),Bm=function(){function r(){}return r.prototype.getClassName=function(){return this.constructor.className},r.fromConfig=function(t,e){return new t(e)},r}(),Lm=function(){function r(){this.classNameMap={}}return r.getMap=function(){return r.instance==null&&(r.instance=new r),r.instance},r.register=function(t){r.getMap().classNameMap[t.className]=[t,t.fromConfig]},r}();function En(r){E(r.className!=null,function(){return"Class being registered does not have the static className property defined."}),E(typeof r.className=="string",function(){return"className is required to be a string, but got type "+typeof r.className}),E(r.className.length>0,function(){return"Class being registered has an empty-string as its className, which is disallowed."}),Lm.register(r)}var In=function(r){function t(){return r!==null&&r.apply(this,arguments)||this}return gt(t,r),t.prototype.minimize=function(e,n,o){n===void 0&&(n=!1);var i=this.computeGradients(e,o),a=i.value,s=i.grads;if(o!=null){var u=o.map(function(c){return{name:c.name,tensor:s[c.name]}});this.applyGradients(u)}else this.applyGradients(s);return Ze(s),n?a:(a.dispose(),null)},Object.defineProperty(t.prototype,"iterations",{get:function(){return this.iterations_==null&&(this.iterations_=0),this.iterations_},enumerable:!0,configurable:!0}),t.prototype.incrementIterations=function(){this.iterations_=this.iterations+1},t.prototype.computeGradients=function(e,n){return $h(e,n)},t.prototype.dispose=function(){this.iterations_!=null&&Ze(this.iterations_)},t.prototype.saveIterations=function(){return K(this,void 0,void 0,function(){return X(this,function(e){return this.iterations_==null&&(this.iterations_=0),[2,{name:"iter",tensor:q(this.iterations_,"int32")}]})})},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(e){throw new Error("getWeights() is not implemented for this optimizer yet.")})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){return X(this,function(n){throw new Error("setWeights() is not implemented for this optimizer class "+this.getClassName())})})},t.prototype.extractIterations=function(e){return K(this,void 0,void 0,function(){var n;return X(this,function(o){switch(o.label){case 0:return n=this,[4,e[0].tensor.data()];case 1:return n.iterations_=o.sent()[0],[2,e.slice(1)]}})})},t}(Bm);Object.defineProperty(In,Symbol.hasInstance,{value:function(r){return r.minimize!=null&&r.computeGradients!=null&&r.applyGradients!=null}});var Wm=function(r){function t(e,n,o){o===void 0&&(o=null);var i=r.call(this)||this;return i.learningRate=e,i.rho=n,i.epsilon=o,i.accumulatedGrads=[],i.accumulatedUpdates=[],o==null&&(i.epsilon=T.backend.epsilon()),i}return gt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=T.registeredVariables[o];n.accumulatedGrads[i]==null&&(n.accumulatedGrads[i]={originalName:o+"/accum_grad",variable:$(function(){return ve(a).variable(!1)})}),n.accumulatedUpdates[i]==null&&(n.accumulatedUpdates[i]={originalName:o+"/accum_var",variable:$(function(){return ve(a).variable(!1)})});var s=Array.isArray(e)?e[i].tensor:e[o];if(s!=null){var u=n.accumulatedGrads[i].variable,c=n.accumulatedUpdates[i].variable;$(function(){var l=u.mul(n.rho).add(s.square().mul(1-n.rho)),h=c.add(n.epsilon).sqrt().div(u.add(n.epsilon).sqrt()).mul(s),f=c.mul(n.rho).add(h.square().mul(1-n.rho));u.assign(l),c.assign(f);var d=h.mul(-n.learningRate).add(a);a.assign(d)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedUpdates!=null&&(Ze(this.accumulatedGrads.map(function(e){return e.variable})),Ze(this.accumulatedUpdates.map(function(e){return e.variable})))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){var e;return X(this,function(n){switch(n.label){case 0:return e=this.accumulatedGrads.concat(this.accumulatedUpdates),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){var n;return X(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),n=e.length/2,this.accumulatedGrads=e.slice(0,n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedUpdates=e.slice(n,2*n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}},t.fromConfig=function(e,n){return new e(n.learningRate,n.rho,n.epsilon)},t.className="Adadelta",t}(In);En(Wm);var Vm=function(r){function t(e,n){n===void 0&&(n=.1);var o=r.call(this)||this;return o.learningRate=e,o.initialAccumulatorValue=n,o.accumulatedGrads=[],o}return gt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=T.registeredVariables[o];n.accumulatedGrads[i]==null&&(n.accumulatedGrads[i]={originalName:o+"/accumulator",variable:$(function(){return Dt(a.shape,n.initialAccumulatorValue).variable(!1)})});var s=Array.isArray(e)?e[i].tensor:e[o];if(s!=null){var u=n.accumulatedGrads[i].variable;$(function(){var c=u.add(s.square());u.assign(c);var l=s.div(c.add(T.backend.epsilon()).sqrt()).mul(-n.learningRate).add(a);a.assign(l)})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedGrads!=null&&Ze(this.accumulatedGrads.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulatedGrads.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){return X(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),this.accumulatedGrads=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}},t.fromConfig=function(e,n){return new e(n.learningRate,n.initialAccumulatorValue)},t.className="Adagrad",t}(In);En(Vm);var zm=function(r){function t(e,n,o,i){i===void 0&&(i=null);var a=r.call(this)||this;return a.learningRate=e,a.beta1=n,a.beta2=o,a.epsilon=i,a.accumulatedFirstMoment=[],a.accumulatedSecondMoment=[],$(function(){a.accBeta1=q(n).variable(),a.accBeta2=q(o).variable()}),i==null&&(a.epsilon=T.backend.epsilon()),a}return gt(t,r),t.prototype.applyGradients=function(e){var n=this,o=Array.isArray(e)?e.map(function(i){return i.name}):Object.keys(e);$(function(){var i=Oe(1,n.accBeta1),a=Oe(1,n.accBeta2);o.forEach(function(s,u){var c=T.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:$(function(){return ve(c).variable(!1)})}),n.accumulatedSecondMoment[u]==null&&(n.accumulatedSecondMoment[u]={originalName:s+"/v",variable:$(function(){return ve(c).variable(!1)})});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var h=n.accumulatedFirstMoment[u].variable,f=n.accumulatedSecondMoment[u].variable,d=h.mul(n.beta1).add(l.mul(1-n.beta1)),p=f.mul(n.beta2).add(l.square().mul(1-n.beta2)),v=d.div(i),m=p.div(a);h.assign(d),f.assign(p);var g=v.div(m.sqrt().add(n.epsilon)).mul(-n.learningRate).add(c);c.assign(g)}}),n.accBeta1.assign(n.accBeta1.mul(n.beta1)),n.accBeta2.assign(n.accBeta2.mul(n.beta2))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Ze(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedSecondMoment!=null&&Ze(this.accumulatedSecondMoment.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){var e;return X(this,function(n){switch(n.label){case 0:return e=this.accumulatedFirstMoment.concat(this.accumulatedSecondMoment),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){var n,o=this;return X(this,function(i){switch(i.label){case 0:return[4,this.extractIterations(e)];case 1:return e=i.sent(),$(function(){o.accBeta1.assign(no(o.beta1,o.iterations_+1)),o.accBeta2.assign(no(o.beta2,o.iterations_+1))}),n=e.length/2,this.accumulatedFirstMoment=e.slice(0,n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),this.accumulatedSecondMoment=e.slice(n,2*n).map(function(a){return{originalName:a.name,variable:a.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}},t.fromConfig=function(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon)},t.className="Adam",t}(In);En(zm);var Um=function(r){function t(e,n,o,i,a){i===void 0&&(i=null),a===void 0&&(a=0);var s=r.call(this)||this;return s.learningRate=e,s.beta1=n,s.beta2=o,s.epsilon=i,s.decay=a,s.accumulatedFirstMoment=[],s.accumulatedWeightedInfNorm=[],$(function(){s.iteration=q(0).variable(),s.accBeta1=q(n).variable()}),i==null&&(s.epsilon=T.backend.epsilon()),s}return gt(t,r),t.prototype.applyGradients=function(e){var n=this,o=Array.isArray(e)?e.map(function(i){return i.name}):Object.keys(e);$(function(){var i=Oe(1,n.accBeta1),a=pt(-n.learningRate,n.iteration.mul(n.decay).add(1));o.forEach(function(s,u){var c=T.registeredVariables[s];n.accumulatedFirstMoment[u]==null&&(n.accumulatedFirstMoment[u]={originalName:s+"/m",variable:ve(c).variable(!1)}),n.accumulatedWeightedInfNorm[u]==null&&(n.accumulatedWeightedInfNorm[u]={originalName:s+"/v",variable:ve(c).variable(!1)});var l=Array.isArray(e)?e[u].tensor:e[s];if(l!=null){var h=n.accumulatedFirstMoment[u].variable,f=n.accumulatedWeightedInfNorm[u].variable,d=h.mul(n.beta1).add(l.mul(1-n.beta1)),p=f.mul(n.beta2),v=l.abs(),m=p.maximum(v);h.assign(d),f.assign(m);var g=a.div(i).mul(d.div(m.add(n.epsilon))).add(c);c.assign(g)}}),n.iteration.assign(n.iteration.add(1)),n.accBeta1.assign(n.accBeta1.mul(n.beta1))}),this.incrementIterations()},t.prototype.dispose=function(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Ze(this.accumulatedFirstMoment.map(function(e){return e.variable})),this.accumulatedWeightedInfNorm!=null&&Ze(this.accumulatedWeightedInfNorm.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(e){throw new Error("getWeights() is not implemented for Adamax yet.")})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){return X(this,function(n){throw new Error("setWeights() is not implemented for Adamax yet.")})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}},t.fromConfig=function(e,n){return new e(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)},t.className="Adamax",t}(In);En(Um);var xc=function(r){function t(e){var n=r.call(this)||this;return n.learningRate=e,n.setLearningRate(e),n}return gt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=Array.isArray(e)?e[i].tensor:e[o];if(a!=null){var s=T.registeredVariables[o];$(function(){var u=n.c.mul(a).add(s);s.assign(u)})}}),this.incrementIterations()},t.prototype.setLearningRate=function(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=sh(q(-e))},t.prototype.dispose=function(){this.c.dispose()},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()]]}})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){return X(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:if((e=n.sent()).length!==0)throw new Error("SGD optimizer does not have settable weights.");return[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate}},t.fromConfig=function(e,n){return new e(n.learningRate)},t.className="SGD",t}(In);En(xc);var Gm=function(r){function t(e,n,o){o===void 0&&(o=!1);var i=r.call(this,e)||this;return i.learningRate=e,i.momentum=n,i.useNesterov=o,i.accumulations=[],i.m=q(i.momentum),i}return gt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=T.registeredVariables[o];n.accumulations[i]==null&&(n.accumulations[i]={originalName:o+"/momentum",variable:$(function(){return ve(a).variable(!1)})});var s=n.accumulations[i].variable,u=Array.isArray(e)?e[i].tensor:e[o];u!=null&&$(function(){var c,l=n.m.mul(s).add(u);c=n.useNesterov?n.c.mul(u.add(l.mul(n.m))).add(a):n.c.mul(l).add(a),s.assign(l),a.assign(c)})}),this.incrementIterations()},t.prototype.dispose=function(){this.m.dispose(),this.accumulations!=null&&Ze(this.accumulations.map(function(e){return e.variable}))},t.prototype.setMomentum=function(e){this.momentum=e},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){return X(this,function(e){switch(e.label){case 0:return[4,this.saveIterations()];case 1:return[2,[e.sent()].concat(this.accumulations.map(function(n){return{name:n.originalName,tensor:n.variable}}))]}})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){return X(this,function(n){switch(n.label){case 0:return[4,this.extractIterations(e)];case 1:return e=n.sent(),this.accumulations=e.map(function(o){return{originalName:o.name,variable:o.tensor.variable(!1)}}),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}},t.fromConfig=function(e,n){return new e(n.learningRate,n.momentum,n.useNesterov)},t.className="Momentum",t}(xc);En(Gm);var Hm=function(r){function t(e,n,o,i,a){n===void 0&&(n=.9),o===void 0&&(o=0),i===void 0&&(i=null),a===void 0&&(a=!1);var s=r.call(this)||this;if(s.learningRate=e,s.decay=n,s.momentum=o,s.epsilon=i,s.accumulatedMeanSquares=[],s.accumulatedMoments=[],s.accumulatedMeanGrads=[],s.centered=a,i==null&&(s.epsilon=T.backend.epsilon()),e==null)throw new Error("learningRate for RMSPropOptimizer must be defined.");return s}return gt(t,r),t.prototype.applyGradients=function(e){var n=this;(Array.isArray(e)?e.map(function(o){return o.name}):Object.keys(e)).forEach(function(o,i){var a=T.registeredVariables[o];n.accumulatedMeanSquares[i]==null&&(n.accumulatedMeanSquares[i]={originalName:o+"/rms",variable:$(function(){return ve(a).variable(!1)})}),n.accumulatedMoments[i]==null&&(n.accumulatedMoments[i]={originalName:o+"/momentum",variable:$(function(){return ve(a).variable(!1)})}),n.accumulatedMeanGrads[i]==null&&n.centered&&(n.accumulatedMeanGrads[i]={originalName:o+"/mg",variable:$(function(){return ve(a).variable(!1)})});var s=Array.isArray(e)?e[i].tensor:e[o];if(s!=null){var u=n.accumulatedMeanSquares[i].variable,c=n.accumulatedMoments[i].variable;$(function(){var l=u.mul(n.decay).add(s.square().mul(1-n.decay));if(n.centered){var h=n.accumulatedMeanGrads[i].variable,f=h.mul(n.decay).add(s.mul(1-n.decay)),d=c.mul(n.momentum).add(s.mul(n.learningRate).div(l.sub(f.square().add(n.epsilon)).sqrt()));u.assign(l),h.assign(f),c.assign(d);var p=a.sub(d);a.assign(p)}else{var v=u.mul(n.decay).add(s.square().mul(1-n.decay));d=c.mul(n.momentum).add(s.mul(n.learningRate).div(v.add(n.epsilon).sqrt())),u.assign(v),c.assign(d),p=a.sub(d),a.assign(p)}})}}),this.incrementIterations()},t.prototype.dispose=function(){this.accumulatedMeanSquares!=null&&Ze(this.accumulatedMeanSquares.map(function(e){return e.variable})),this.accumulatedMeanGrads!=null&&this.centered&&Ze(this.accumulatedMeanGrads.map(function(e){return e.variable})),this.accumulatedMoments!=null&&Ze(this.accumulatedMoments.map(function(e){return e.variable}))},t.prototype.getWeights=function(){return K(this,void 0,void 0,function(){var e;return X(this,function(n){switch(n.label){case 0:return e=this.accumulatedMeanSquares.concat(this.accumulatedMoments),this.centered&&e.push.apply(e,this.accumulatedMeanGrads),[4,this.saveIterations()];case 1:return[2,[n.sent()].concat(e.map(function(o){return{name:o.originalName,tensor:o.variable}}))]}})})},t.prototype.setWeights=function(e){return K(this,void 0,void 0,function(){var n;return X(this,function(o){switch(o.label){case 0:return[4,this.extractIterations(e)];case 1:return e=o.sent(),n=this.centered?e.length/3:e.length/2,this.accumulatedMeanSquares=e.slice(0,n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.accumulatedMoments=e.slice(n,2*n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}}),this.centered&&(this.accumulatedMeanGrads=e.slice(2*n,3*n).map(function(i){return{originalName:i.name,variable:i.tensor.variable(!1)}})),[2]}})})},t.prototype.getConfig=function(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}},t.fromConfig=function(e,n){return new e(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)},t.className="RMSProp",t}(In);En(Hm);Ee.prototype.squaredDifference=function(r){return Pu(this,r)},P=mm;function fn(r,t,e){if(e===void 0&&(e=!1),r.beginPath(),t.slice(1).forEach(function(i,a){var s=i.x,u=i.y,c=t[a];r.moveTo(c.x,c.y),r.lineTo(s,u)}),e){var n=t[t.length-1],o=t[0];if(!n||!o)return;r.moveTo(n.x,n.y),r.lineTo(o.x,o.y)}r.stroke()}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ri=function(r,t){return Ri=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]=n[o])},Ri(r,t)};function re(r,t){Ri(r,t);function e(){this.constructor=r}r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}var je=function(){return je=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},je.apply(this,arguments)};function Q(r,t,e,n){function o(i){return i instanceof e?i:new e(function(a){a(i)})}return new(e||(e=Promise))(function(i,a){function s(l){try{c(n.next(l))}catch(h){a(h)}}function u(l){try{c(n.throw(l))}catch(h){a(h)}}function c(l){l.done?i(l.value):o(l.value).then(s,u)}c((n=n.apply(r,[])).next())})}function Z(r,t){var e={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(c){return function(l){return u([c,l])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;e;)try{if(n=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return e.label++,{value:c[1],done:!1};case 5:e.label++,o=c[1],c=[0];continue;case 7:c=e.ops.pop(),e.trys.pop();continue;default:if(i=e.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){e=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){e.label=c[1];break}if(c[0]===6&&e.label<i[1]){e.label=i[1],i=c;break}if(i&&e.label<i[2]){e.label=i[2],e.ops.push(c);break}i[2]&&e.ops.pop(),e.trys.pop();continue}c=t.call(r,e)}catch(l){c=[6,l],o=0}finally{n=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function or(){for(var r=0,t=0,e=arguments.length;t<e;t++)r+=arguments[t].length;for(var n=Array(r),o=0,t=0;t<e;t++)for(var i=arguments[t],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n}var yn=function(){function r(t,e){if(!xn(t)||!xn(e))throw new Error("Dimensions.constructor - expected width and height to be valid numbers, instead have "+JSON.stringify({width:t,height:e}));this._width=t,this._height=e}return Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),r.prototype.reverse=function(){return new r(1/this.width,1/this.height)},r}();function yo(r,t){return r instanceof Ee&&r.shape.length===t}function qm(r){return yo(r,2)}function xo(r){return yo(r,3)}function an(r){return yo(r,4)}function jm(r){return r%1!==0}function Ds(r){return r%2===0}function ua(r,t){t===void 0&&(t=2);var e=Math.pow(10,t);return Math.floor(r*e)/e}function Ts(r){return r&&r.width&&r.height}function $m(r,t){var e=r.width,n=r.height,o=t/Math.max(n,e);return new yn(Math.round(e*o),Math.round(n*o))}function ca(r){return r.reduce(function(t,e){return t.add(e)},new me(0,0)).div(new me(r.length,r.length))}function lr(r,t,e){return Array(r).fill(0).map(function(n,o){return t+o*e})}function xn(r){return!!r&&r!==1/0&&r!==-1/0&&!isNaN(r)||r===0}function Fs(r){return xn(r)&&0<=r&&r<=1}var me=function(){function r(t,e){this._x=t,this._y=e}return Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),r.prototype.add=function(t){return new r(this.x+t.x,this.y+t.y)},r.prototype.sub=function(t){return new r(this.x-t.x,this.y-t.y)},r.prototype.mul=function(t){return new r(this.x*t.x,this.y*t.y)},r.prototype.div=function(t){return new r(this.x/t.x,this.y/t.y)},r.prototype.abs=function(){return new r(Math.abs(this.x),Math.abs(this.y))},r.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},r.prototype.floor=function(){return new r(Math.floor(this.x),Math.floor(this.y))},r}(),Nt=function(){function r(t,e){e===void 0&&(e=!0);var n=t||{},o=[n.left,n.top,n.right,n.bottom].every(xn),i=[n.x,n.y,n.width,n.height].every(xn);if(!i&&!o)throw new Error("Box.constructor - expected box to be IBoundingBox | IRect, instead have "+JSON.stringify(n));var a=i?[n.x,n.y,n.width,n.height]:[n.left,n.top,n.right-n.left,n.bottom-n.top],s=a[0],u=a[1],c=a[2],l=a[3];r.assertIsValidBox({x:s,y:u,width:c,height:l},"Box.constructor",e),this._x=s,this._y=u,this._width=c,this._height=l}return r.isRect=function(t){return!!t&&[t.x,t.y,t.width,t.height].every(xn)},r.assertIsValidBox=function(t,e,n){if(n===void 0&&(n=!1),!r.isRect(t))throw new Error(e+" - invalid box: "+JSON.stringify(t)+", expected object with properties x, y, width, height");if(!n&&(t.width<0||t.height<0))throw new Error(e+" - width ("+t.width+") and height ("+t.height+") must be positive numbers")},Object.defineProperty(r.prototype,"x",{get:function(){return this._x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"left",{get:function(){return this.x},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"top",{get:function(){return this.y},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"right",{get:function(){return this.x+this.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"area",{get:function(){return this.width*this.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topLeft",{get:function(){return new me(this.left,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"topRight",{get:function(){return new me(this.right,this.top)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomLeft",{get:function(){return new me(this.left,this.bottom)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"bottomRight",{get:function(){return new me(this.right,this.bottom)},enumerable:!0,configurable:!0}),r.prototype.round=function(){var t=[this.x,this.y,this.width,this.height].map(function(a){return Math.round(a)}),e=t[0],n=t[1],o=t[2],i=t[3];return new r({x:e,y:n,width:o,height:i})},r.prototype.floor=function(){var t=[this.x,this.y,this.width,this.height].map(function(a){return Math.floor(a)}),e=t[0],n=t[1],o=t[2],i=t[3];return new r({x:e,y:n,width:o,height:i})},r.prototype.toSquare=function(){var t=this,e=t.x,n=t.y,o=t.width,i=t.height,a=Math.abs(o-i);return o<i&&(e-=a/2,o+=a),i<o&&(n-=a/2,i+=a),new r({x:e,y:n,width:o,height:i})},r.prototype.rescale=function(t){var e=Ts(t)?t.width:t,n=Ts(t)?t.height:t;return new r({x:this.x*e,y:this.y*n,width:this.width*e,height:this.height*n})},r.prototype.pad=function(t,e){var n=[this.x-t/2,this.y-e/2,this.width+t,this.height+e],o=n[0],i=n[1],a=n[2],s=n[3];return new r({x:o,y:i,width:a,height:s})},r.prototype.clipAtImageBorders=function(t,e){var n=this,o=n.x,i=n.y,a=n.right,s=n.bottom,u=Math.max(o,0),c=Math.max(i,0),l=a-u,h=s-c,f=Math.min(l,t-u),d=Math.min(h,e-c);return new r({x:u,y:c,width:f,height:d}).floor()},r.prototype.shift=function(t,e){var n=this,o=n.width,i=n.height,a=this.x+t,s=this.y+e;return new r({x:a,y:s,width:o,height:i})},r.prototype.padAtBorders=function(t,e){var n=this.width+1,o=this.height+1,i=1,a=1,s=n,u=o,c=this.left,l=this.top,h=this.right,f=this.bottom;return h>e&&(s=-h+e+n,h=e),f>t&&(u=-f+t+o,f=t),c<1&&(u=2-c,c=1),l<1&&(u=2-l,l=1),{dy:a,edy:u,dx:i,edx:s,y:l,ey:f,x:c,ex:h,w:n,h:o}},r.prototype.calibrate=function(t){return new r({left:this.left+t.left*this.width,top:this.top+t.top*this.height,right:this.right+t.right*this.width,bottom:this.bottom+t.bottom*this.height}).toSquare().round()},r}(),bo=function(r){re(t,r);function t(e,n,o,i,a){return a===void 0&&(a=!1),r.call(this,{left:e,top:n,right:o,bottom:i},a)||this}return t}(Nt),bc=function(){function r(t,e,n,o,i){this._imageDims=new yn(i.width,i.height),this._score=t,this._classScore=e,this._className=n,this._box=new Nt(o).rescale(this._imageDims)}return Object.defineProperty(r.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"className",{get:function(){return this._className},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"box",{get:function(){return this._box},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageDims",{get:function(){return this._imageDims},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this.imageDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this.imageDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativeBox",{get:function(){return new Nt(this._box).rescale(this.imageDims.reverse())},enumerable:!0,configurable:!0}),r.prototype.forSize=function(t,e){return new r(this.score,this.classScore,this.className,this.relativeBox,{width:t,height:e})},r}(),ct=function(r){re(t,r);function t(e,n,o){return r.call(this,e,e,"",n,o)||this}return t.prototype.forSize=function(e,n){var o=r.prototype.forSize.call(this,e,n),i=o.score,a=o.relativeBox,s=o.imageDims;return new t(i,a,s)},t}(bc);function Km(r,t,e){e===void 0&&(e=!0);var n=Math.max(0,Math.min(r.right,t.right)-Math.max(r.left,t.left)),o=Math.max(0,Math.min(r.bottom,t.bottom)-Math.max(r.top,t.top)),i=n*o;return e?i/(r.area+t.area-i):i/Math.min(r.area,t.area)}function Xm(r){var t=r.map(function(s){return s.x}),e=r.map(function(s){return s.y}),n=t.reduce(function(s,u){return u<s?u:s},1/0),o=e.reduce(function(s,u){return u<s?u:s},1/0),i=t.reduce(function(s,u){return s<u?u:s},0),a=e.reduce(function(s,u){return s<u?u:s},0);return new bo(n,o,i,a)}function hr(r,t,e,n){n===void 0&&(n=!0);for(var o=t.map(function(s,u){return{score:s,boxIndex:u}}).sort(function(s,u){return s.score-u.score}).map(function(s){return s.boxIndex}),i=[],a=function(){var s=o.pop();i.push(s);for(var u=o,c=[],l=0;l<u.length;l++){var h=u[l],f=r[s],d=r[h];c.push(Km(f,d,n))}o=o.filter(function(p,v){return c[v]<=e})};o.length>0;)a();return i}function _r(r,t){return $(function(){var e=t[0],n=t[1],o=t[2],i=Dt(or(r.shape.slice(0,3),[1]),e),a=Dt(or(r.shape.slice(0,3),[1]),n),s=Dt(or(r.shape.slice(0,3),[1]),o),u=Ne([i,a,s],3);return Oe(r,u)})}function Ym(r,t){return t===void 0&&(t=!1),$(function(){var e=r.shape.slice(1),n=e[0],o=e[1];if(n===o)return r;var i=Math.abs(n-o),a=Math.round(i*(t?.5:1)),s=n>o?2:1,u=function(d){var p=r.shape.slice();return p[s]=d,Dt(p,0)},c=u(a),l=i-c.shape[s],h=t&&l?u(l):null,f=[h,r,c].filter(function(d){return!!d}).map(function(d){return d.toFloat()});return Ne(f,s)})}function ni(r){return 1/(1+Math.exp(-r))}var la=function(r){re(t,r);function t(e,n,o,i,a){return a===void 0&&(a=!1),r.call(this,{x:e,y:n,width:o,height:i},a)||this}return t}(Nt),Jm=.5,Qm=.43,Zm=.45,Kn=function(){function r(t,e,n){n===void 0&&(n=new me(0,0));var o=e.width,i=e.height;this._imgDims=new yn(o,i),this._shift=n,this._positions=t.map(function(a){return a.mul(new me(o,i)).add(n)})}return Object.defineProperty(r.prototype,"shift",{get:function(){return new me(this._shift.x,this._shift.y)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageWidth",{get:function(){return this._imgDims.width},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"imageHeight",{get:function(){return this._imgDims.height},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"positions",{get:function(){return this._positions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"relativePositions",{get:function(){var t=this;return this._positions.map(function(e){return e.sub(t._shift).div(new me(t.imageWidth,t.imageHeight))})},enumerable:!0,configurable:!0}),r.prototype.forSize=function(t,e){return new this.constructor(this.relativePositions,{width:t,height:e})},r.prototype.shiftBy=function(t,e){return new this.constructor(this.relativePositions,this._imgDims,new me(t,e))},r.prototype.shiftByPoint=function(t){return this.shiftBy(t.x,t.y)},r.prototype.align=function(t,e){if(e===void 0&&(e={}),t){var n=t instanceof ct?t.box.floor():new Nt(t);return this.shiftBy(n.x,n.y).align(null,e)}var o=Object.assign({},{useDlibAlignment:!1,minBoxPadding:.2},e),i=o.useDlibAlignment,a=o.minBoxPadding;return i?this.alignDlib():this.alignMinBbox(a)},r.prototype.alignDlib=function(){var t=this.getRefPointsForAlignment(),e=t[0],n=t[1],o=t[2],i=function(h){return o.sub(h).magnitude()},a=(i(e)+i(n))/2,s=Math.floor(a/Zm),u=ca(t),c=Math.floor(Math.max(0,u.x-Jm*s)),l=Math.floor(Math.max(0,u.y-Qm*s));return new la(c,l,Math.min(s,this.imageWidth+c),Math.min(s,this.imageHeight+l))},r.prototype.alignMinBbox=function(t){var e=Xm(this.positions);return e.pad(e.width*t,e.height*t)},r.prototype.getRefPointsForAlignment=function(){throw new Error("getRefPointsForAlignment not implemented by base class")},r}(),eg=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getRefPointsForAlignment=function(){var e=this.positions;return[e[0],e[1],ca([e[3],e[4]])]},t}(Kn),wc=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getJawOutline=function(){return this.positions.slice(0,17)},t.prototype.getLeftEyeBrow=function(){return this.positions.slice(17,22)},t.prototype.getRightEyeBrow=function(){return this.positions.slice(22,27)},t.prototype.getNose=function(){return this.positions.slice(27,36)},t.prototype.getLeftEye=function(){return this.positions.slice(36,42)},t.prototype.getRightEye=function(){return this.positions.slice(42,48)},t.prototype.getMouth=function(){return this.positions.slice(48,68)},t.prototype.getRefPointsForAlignment=function(){return[this.getLeftEye(),this.getRightEye(),this.getMouth()].map(ca)},t}(Kn),Ns=function(){function r(t,e){this._label=t,this._distance=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distance",{get:function(){return this._distance},enumerable:!0,configurable:!0}),r.prototype.toString=function(t){return t===void 0&&(t=!0),""+this.label+(t?" ("+ua(this.distance)+")":"")},r}(),Ps=function(r){re(t,r);function t(e,n){var o=r.call(this,e)||this;return o._label=n,o}return t.assertIsValidLabeledBox=function(e,n){if(Nt.assertIsValidBox(e,n),!xn(e.label))throw new Error(n+" - expected property label ("+e.label+") to be a number")},Object.defineProperty(t.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),t}(Nt),Pr=function(){function r(t,e){if(typeof t!="string")throw new Error("LabeledFaceDescriptors - constructor expected label to be a string");if(!Array.isArray(e)||e.some(function(n){return!(n instanceof Float32Array)}))throw new Error("LabeledFaceDescriptors - constructor expected descriptors to be an array of Float32Array");this._label=t,this._descriptors=e}return Object.defineProperty(r.prototype,"label",{get:function(){return this._label},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"descriptors",{get:function(){return this._descriptors},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){return{label:this.label,descriptors:this.descriptors.map(function(t){return Array.from(t)})}},r.fromJSON=function(t){var e=t.descriptors.map(function(n){return new Float32Array(n)});return new r(t.label,e)},r}();(function(r){re(t,r);function t(e,n,o,i){var a=r.call(this,e,n)||this;return a._score=o,a._classScore=i,a}return t.assertIsValidPredictedBox=function(e,n){if(Ps.assertIsValidLabeledBox(e,n),!Fs(e.score)||!Fs(e.classScore))throw new Error(n+" - expected properties score ("+e.score+") and ("+e.classScore+") to be a number between [0, 1]")},Object.defineProperty(t.prototype,"score",{get:function(){return this._score},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"classScore",{get:function(){return this._classScore},enumerable:!0,configurable:!0}),t})(Ps);function fr(r){return r.detection instanceof ct}function dr(r,t){var e={detection:t};return Object.assign({},r,e)}function Cc(){var r=window.fetch||function(){throw new Error("fetch - missing fetch implementation for browser environment")},t=function(){throw new Error("readFile - filesystem not available for browser environment")};return{Canvas:HTMLCanvasElement,CanvasRenderingContext2D,Image:HTMLImageElement,ImageData,Video:HTMLVideoElement,createCanvasElement:function(){return document.createElement("canvas")},createImageElement:function(){return document.createElement("img")},fetch:r,readFile:t}}function _c(r){var t="";if(!r)try{r=require("fs")}catch(n){t=n.toString()}var e=r?function(n){return new Promise(function(o,i){r.readFile(n,function(a,s){return a?i(a):o(s)})})}:function(){throw new Error("readFile - failed to require fs in nodejs environment with error: "+t)};return{readFile:e}}function Ec(){var r=global.Canvas||global.HTMLCanvasElement,t=global.Image||global.HTMLImageElement,e=function(){if(r)return new r;throw new Error("createCanvasElement - missing Canvas implementation for nodejs environment")},n=function(){if(t)return new t;throw new Error("createImageElement - missing Image implementation for nodejs environment")},o=global.fetch||function(){throw new Error("fetch - missing fetch implementation for nodejs environment")},i=_c();return je({Canvas:r||function(){function a(){}return a}(),CanvasRenderingContext2D:global.CanvasRenderingContext2D||function(){function a(){}return a}(),Image:t||function(){function a(){}return a}(),ImageData:global.ImageData||function(){function a(){}return a}(),Video:global.HTMLVideoElement||function(){function a(){}return a}(),createCanvasElement:e,createImageElement:n,fetch:o},i)}function Ic(){return typeof window=="object"&&typeof document<"u"&&typeof HTMLImageElement<"u"&&typeof HTMLCanvasElement<"u"&&typeof HTMLVideoElement<"u"&&typeof ImageData<"u"&&typeof CanvasRenderingContext2D<"u"}function Ac(){return typeof global=="object"&&typeof require=="function"&&typeof sl<"u"&&typeof process<"u"&&!!process.version}var Fe;function tg(){if(!Fe)throw new Error("getEnv - environment is not defined, check isNodejs() and isBrowser()");return Fe}function Si(r){Fe=r}function ha(){Ic()&&Si(Cc()),Ac()&&Si(Ec())}function ng(r){if(Fe||ha(),!Fe)throw new Error("monkeyPatch - environment is not defined, check isNodejs() and isBrowser()");var t=r.Canvas,e=t===void 0?Fe.Canvas:t,n=r.Image,o=n===void 0?Fe.Image:n;Fe.Canvas=e,Fe.Image=o,Fe.createCanvasElement=r.createCanvasElement||function(){return new e},Fe.createImageElement=r.createImageElement||function(){return new o},Fe.ImageData=r.ImageData||Fe.ImageData,Fe.Video=r.Video||Fe.Video,Fe.fetch=r.fetch||Fe.fetch,Fe.readFile=r.readFile||Fe.readFile}var Ye={getEnv:tg,setEnv:Si,initialize:ha,createBrowserEnv:Cc,createFileSystem:_c,createNodejsEnv:Ec,monkeyPatch:ng,isBrowser:Ic,isNodejs:Ac};ha();function fa(r){return!Ye.isNodejs()&&typeof r=="string"?document.getElementById(r):r}function Pt(r){var t=Ye.getEnv(),e=t.Canvas,n=t.CanvasRenderingContext2D;if(r instanceof n)return r;var o=fa(r);if(!(o instanceof e))throw new Error("resolveContext2d - expected canvas to be of instance of Canvas");var i=o.getContext("2d");if(!i)throw new Error("resolveContext2d - canvas 2d context is null");return i}var nn;(function(r){r.TOP_LEFT="TOP_LEFT",r.TOP_RIGHT="TOP_RIGHT",r.BOTTOM_LEFT="BOTTOM_LEFT",r.BOTTOM_RIGHT="BOTTOM_RIGHT"})(nn||(nn={}));var kc=function(){function r(t){t===void 0&&(t={});var e=t.anchorPosition,n=t.backgroundColor,o=t.fontColor,i=t.fontSize,a=t.fontStyle,s=t.padding;this.anchorPosition=e||nn.TOP_LEFT,this.backgroundColor=n||"rgba(0, 0, 0, 0.5)",this.fontColor=o||"rgba(255, 255, 255, 1)",this.fontSize=i||14,this.fontStyle=a||"Georgia",this.padding=s||4}return r}(),Rc=function(){function r(t,e,n){n===void 0&&(n={}),this.text=typeof t=="string"?[t]:t instanceof r?t.text:t,this.anchor=e,this.options=new kc(n)}return r.prototype.measureWidth=function(t){var e=this.options.padding;return this.text.map(function(n){return t.measureText(n).width}).reduce(function(n,o){return n<o?o:n},0)+2*e},r.prototype.measureHeight=function(){var t=this.options,e=t.fontSize,n=t.padding;return this.text.length*e+2*n},r.prototype.getUpperLeft=function(t,e){var n=this.options.anchorPosition,o=n===nn.BOTTOM_RIGHT||n===nn.TOP_RIGHT,i=n===nn.BOTTOM_LEFT||n===nn.BOTTOM_RIGHT,a=this.measureWidth(t),s=this.measureHeight(),u=o?this.anchor.x-a:this.anchor.x,c=i?this.anchor.y-s:this.anchor.y;if(e){var l=e.width,h=e.height,f=Math.max(Math.min(u,l-a),0),d=Math.max(Math.min(c,h-s),0);return{x:f,y:d}}return{x:u,y:c}},r.prototype.draw=function(t){var e=fa(t),n=Pt(e),o=this.options,i=o.backgroundColor,a=o.fontColor,s=o.fontSize,u=o.fontStyle,c=o.padding;n.font=s+"px "+u;var l=this.measureWidth(n),h=this.measureHeight();n.fillStyle=i;var f=this.getUpperLeft(n,e);n.fillRect(f.x,f.y,l,h),n.fillStyle=a,this.text.forEach(function(d,p){var v=c+f.x,m=c+f.y+(p+1)*s;n.fillText(d,v,m)})},r}(),rg=function(){function r(t){t===void 0&&(t={});var e=t.boxColor,n=t.lineWidth,o=t.label,i=t.drawLabelOptions;this.boxColor=e||"rgba(0, 0, 255, 1)",this.lineWidth=n||2,this.label=o;var a={anchorPosition:nn.BOTTOM_LEFT,backgroundColor:this.boxColor};this.drawLabelOptions=new kc(Object.assign({},a,i))}return r}(),Sc=function(){function r(t,e){e===void 0&&(e={}),this.box=new Nt(t),this.options=new rg(e)}return r.prototype.draw=function(t){var e=Pt(t),n=this.options,o=n.boxColor,i=n.lineWidth,a=this.box,s=a.x,u=a.y,c=a.width,l=a.height;e.strokeStyle=o,e.lineWidth=i,e.strokeRect(s,u,c,l);var h=this.options.label;h&&new Rc([h],{x:s-i/2,y:u},this.options.drawLabelOptions).draw(t)},r}();function og(r,t){var e=Array.isArray(t)?t:[t];e.forEach(function(n){var o=n instanceof ct?n.score:fr(n)?n.detection.score:void 0,i=n instanceof ct?n.box:fr(n)?n.detection.box:new Nt(n),a=o?""+ua(o):void 0;new Sc(i,{label:a}).draw(r)})}function Dc(r){var t=Ye.getEnv(),e=t.Image,n=t.Video;return r instanceof e&&r.complete||r instanceof n&&r.readyState>=3}function ig(r){return new Promise(function(t,e){if(r instanceof Ye.getEnv().Canvas||Dc(r))return t();function n(i){i.currentTarget&&(i.currentTarget.removeEventListener("load",n),i.currentTarget.removeEventListener("error",o),t(i))}function o(i){i.currentTarget&&(i.currentTarget.removeEventListener("load",n),i.currentTarget.removeEventListener("error",o),e(i))}r.addEventListener("load",n),r.addEventListener("error",o)})}function da(r){var t=Ye.getEnv(),e=t.Image,n=t.Video;return r instanceof e?new yn(r.naturalWidth,r.naturalHeight):r instanceof n?new yn(r.videoWidth,r.videoHeight):new yn(r.width,r.height)}function wo(r){var t=r.width,e=r.height,n=Ye.getEnv().createCanvasElement,o=n();return o.width=t,o.height=e,o}function Co(r,t){var e=Ye.getEnv().ImageData;if(!(r instanceof e)&&!Dc(r))throw new Error("createCanvasFromMedia - media has not finished loading yet");var n=da(r),o=n.width,i=n.height,a=wo({width:o,height:i});return r instanceof e?Pt(a).putImageData(r,0,0):Pt(a).drawImage(r,0,0,o,i),a}function ag(r,t){return Q(this,void 0,void 0,function(){var e,n,o,i,a,s;return Z(this,function(u){switch(u.label){case 0:return e=Ye.getEnv().createCanvasElement(),n=r.shape.slice(an(r)?1:0),o=n[0],i=n[1],a=n[2],s=$(function(){return r.as3D(o,i,a).toInt()}),[4,sa.toPixels(s,e)];case 1:return u.sent(),s.dispose(),[2,e]}})})}function Ms(r){var t=Ye.getEnv(),e=t.Image,n=t.Canvas,o=t.Video;return r instanceof e||r instanceof n||r instanceof o}function sg(r,t,e){e===void 0&&(e=!1);var n=Ye.getEnv(),o=n.Image,i=n.Canvas;if(!(r instanceof o||r instanceof i))throw new Error("imageToSquare - expected arg0 to be HTMLImageElement | HTMLCanvasElement");var a=da(r),s=t/Math.max(a.height,a.width),u=s*a.width,c=s*a.height,l=wo({width:t,height:t}),h=r instanceof i?r:Co(r),f=Math.abs(u-c)/2,d=e&&u<c?f:0,p=e&&c<u?f:0;return Pt(l).drawImage(h,d,p,u,c),l}var io=function(){function r(t,e){var n=this;if(e===void 0&&(e=!1),this._imageTensors=[],this._canvases=[],this._treatAsBatchInput=!1,this._inputDimensions=[],!Array.isArray(t))throw new Error("NetInput.constructor - expected inputs to be an Array of TResolvedNetInput or to be instanceof tf.Tensor4D, instead have "+t);this._treatAsBatchInput=e,this._batchSize=t.length,t.forEach(function(o,i){if(xo(o)){n._imageTensors[i]=o,n._inputDimensions[i]=o.shape;return}if(an(o)){var a=o.shape[0];if(a!==1)throw new Error("NetInput - tf.Tensor4D with batchSize "+a+" passed, but not supported in input array");n._imageTensors[i]=o,n._inputDimensions[i]=o.shape.slice(1);return}var s=o instanceof Ye.getEnv().Canvas?o:Co(o);n._canvases[i]=s,n._inputDimensions[i]=[s.height,s.width,3]})}return Object.defineProperty(r.prototype,"imageTensors",{get:function(){return this._imageTensors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"canvases",{get:function(){return this._canvases},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isBatchInput",{get:function(){return this.batchSize>1||this._treatAsBatchInput},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"batchSize",{get:function(){return this._batchSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputDimensions",{get:function(){return this._inputDimensions},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"reshapedInputDimensions",{get:function(){var t=this;return lr(this.batchSize,0,1).map(function(e,n){return t.getReshapedInputDimensions(n)})},enumerable:!0,configurable:!0}),r.prototype.getInput=function(t){return this.canvases[t]||this.imageTensors[t]},r.prototype.getInputDimensions=function(t){return this._inputDimensions[t]},r.prototype.getInputHeight=function(t){return this._inputDimensions[t][0]},r.prototype.getInputWidth=function(t){return this._inputDimensions[t][1]},r.prototype.getReshapedInputDimensions=function(t){if(typeof this.inputSize!="number")throw new Error("getReshapedInputDimensions - inputSize not set, toBatchTensor has not been called yet");var e=this.getInputWidth(t),n=this.getInputHeight(t);return $m({width:e,height:n},this.inputSize)},r.prototype.toBatchTensor=function(t,e){var n=this;return e===void 0&&(e=!0),this._inputSize=t,$(function(){var o=lr(n.batchSize,0,1).map(function(a){var s=n.getInput(a);if(s instanceof Ee){var u=an(s)?s:s.expandDims();return u=Ym(u,e),(u.shape[1]!==t||u.shape[2]!==t)&&(u=ta.resizeBilinear(u,[t,t])),u.as3D(t,t,3)}if(s instanceof Ye.getEnv().Canvas)return sa.fromPixels(sg(s,t,e));throw new Error("toBatchTensor - at batchIdx "+a+", expected input to be instanceof tf.Tensor or instanceof HTMLCanvasElement, instead have "+s)}),i=ut(o.map(function(a){return a.toFloat()})).as4D(n.batchSize,t,t,3);return i})},r}();function Ve(r){return Q(this,void 0,void 0,function(){var t,e,n;return Z(this,function(o){switch(o.label){case 0:if(r instanceof io)return[2,r];if(t=Array.isArray(r)?r:[r],!t.length)throw new Error("toNetInput - empty array passed as input");return e=function(i){return Array.isArray(r)?" at input index "+i+":":""},n=t.map(fa),n.forEach(function(i,a){if(!Ms(i)&&!xo(i)&&!an(i))throw typeof t[a]=="string"?new Error("toNetInput -"+e(a)+" string passed, but could not resolve HTMLElement for element id "+t[a]):new Error("toNetInput -"+e(a)+" expected media to be of type HTMLImageElement | HTMLVideoElement | HTMLCanvasElement | tf.Tensor3D, or to be an element id");if(an(i)){var s=i.shape[0];if(s!==1)throw new Error("toNetInput -"+e(a)+" tf.Tensor4D with batchSize "+s+" passed, but not supported in input array")}}),[4,Promise.all(n.map(function(i){return Ms(i)&&ig(i)}))];case 1:return o.sent(),[2,new io(n,Array.isArray(r))]}})})}function pa(r,t){return Q(this,void 0,void 0,function(){var e,n,o,i,a,s,u;return Z(this,function(c){switch(c.label){case 0:return e=Ye.getEnv().Canvas,n=r,r instanceof e?[3,5]:[4,Ve(r)];case 1:if(o=c.sent(),o.batchSize>1)throw new Error("extractFaces - batchSize > 1 not supported");return i=o.getInput(0),i instanceof e?(a=i,[3,4]):[3,2];case 2:return[4,ag(i)];case 3:a=c.sent(),c.label=4;case 4:n=a,c.label=5;case 5:return s=Pt(n),u=t.map(function(l){return l instanceof ct?l.forSize(n.width,n.height).box.floor():l}).map(function(l){return l.clipAtImageBorders(n.width,n.height)}),[2,u.map(function(l){var h=l.x,f=l.y,d=l.width,p=l.height,v=wo({width:d,height:p});return Pt(v).putImageData(s.getImageData(h,f,d,p),0,0),v})]}})})}function va(r,t){return Q(this,void 0,void 0,function(){return Z(this,function(e){if(!xo(r)&&!an(r))throw new Error("extractFaceTensors - expected image tensor to be 3D or 4D");if(an(r)&&r.shape[0]>1)throw new Error("extractFaceTensors - batchSize > 1 not supported");return[2,$(function(){var n=r.shape.slice(an(r)?1:0),o=n[0],i=n[1],a=n[2],s=t.map(function(c){return c instanceof ct?c.forSize(i,o).box:c}).map(function(c){return c.clipAtImageBorders(i,o)}),u=s.map(function(c){var l=c.x,h=c.y,f=c.width,d=c.height;return tc(r.as3D(o,i,a),[h,l,0],[d,f,a])});return u})]})})}function ug(r,t){return Q(this,void 0,void 0,function(){var e,n;return Z(this,function(o){switch(o.label){case 0:return e=Ye.getEnv().fetch,[4,e(r,t)];case 1:if(n=o.sent(),!(n.status<400))throw new Error("failed to fetch: ("+n.status+") "+n.statusText+", from url: "+n.url);return[2,n]}})})}function cg(r){return Q(this,void 0,void 0,function(){return Z(this,function(t){switch(t.label){case 0:return[4,ug(r)];case 1:return[2,t.sent().json()]}})})}function Tc(r,t){var e=t+"-weights_manifest.json";if(!r)return{modelBaseUri:"",manifestUri:e};if(r==="/")return{modelBaseUri:"/",manifestUri:"/"+e};var n=r.startsWith("http://")?"http://":r.startsWith("https://")?"https://":"";r=r.replace(n,"");var o=r.split("/").filter(function(s){return s}),i=r.endsWith(".json")?o[o.length-1]:e,a=n+(r.endsWith(".json")?o.slice(0,o.length-1):o).join("/");return a=r.startsWith("/")?"/"+a:a,{modelBaseUri:a,manifestUri:a==="/"?"/"+i:a+"/"+i}}function lg(r,t){return Q(this,void 0,void 0,function(){var e,n,o,i;return Z(this,function(a){switch(a.label){case 0:return e=Tc(r,t),n=e.manifestUri,o=e.modelBaseUri,[4,cg(n)];case 1:return i=a.sent(),[2,yc.loadWeights(i,o)]}})})}function hg(r,t,e){e===void 0&&(e=!1);var n=e?da(t):t,o=n.width,i=n.height;return r.width=o,r.height=i,{width:o,height:i}}var $t=function(){function r(t){this._name=t,this._params=void 0,this._paramMappings=[]}return Object.defineProperty(r.prototype,"params",{get:function(){return this._params},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"paramMappings",{get:function(){return this._paramMappings},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"isLoaded",{get:function(){return!!this.params},enumerable:!0,configurable:!0}),r.prototype.getParamFromPath=function(t){var e=this.traversePropertyPath(t),n=e.obj,o=e.objProp;return n[o]},r.prototype.reassignParamFromPath=function(t,e){var n=this.traversePropertyPath(t),o=n.obj,i=n.objProp;o[i].dispose(),o[i]=e},r.prototype.getParamList=function(){var t=this;return this._paramMappings.map(function(e){var n=e.paramPath;return{path:n,tensor:t.getParamFromPath(n)}})},r.prototype.getTrainableParams=function(){return this.getParamList().filter(function(t){return t.tensor instanceof qn})},r.prototype.getFrozenParams=function(){return this.getParamList().filter(function(t){return!(t.tensor instanceof qn)})},r.prototype.variable=function(){var t=this;this.getFrozenParams().forEach(function(e){var n=e.path,o=e.tensor;t.reassignParamFromPath(n,o.variable())})},r.prototype.freeze=function(){var t=this;this.getTrainableParams().forEach(function(e){var n=e.path,o=e.tensor,i=Ge(o.dataSync());o.dispose(),t.reassignParamFromPath(n,i)})},r.prototype.dispose=function(t){t===void 0&&(t=!0),this.getParamList().forEach(function(e){if(t&&e.tensor.isDisposed)throw new Error("param tensor has already been disposed for path "+e.path);e.tensor.dispose()}),this._params=void 0},r.prototype.serializeParams=function(){return new Float32Array(this.getParamList().map(function(t){var e=t.tensor;return Array.from(e.dataSync())}).reduce(function(t,e){return t.concat(e)}))},r.prototype.load=function(t){return Q(this,void 0,void 0,function(){return Z(this,function(e){switch(e.label){case 0:return t instanceof Float32Array?(this.extractWeights(t),[2]):[4,this.loadFromUri(t)];case 1:return e.sent(),[2]}})})},r.prototype.loadFromUri=function(t){return Q(this,void 0,void 0,function(){var e;return Z(this,function(n){switch(n.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromUri - expected model uri");return[4,lg(t,this.getDefaultModelName())];case 1:return e=n.sent(),this.loadFromWeightMap(e),[2]}})})},r.prototype.loadFromDisk=function(t){return Q(this,void 0,void 0,function(){var e,n,o,i,a,s,u,c,l,h;return Z(this,function(f){switch(f.label){case 0:if(t&&typeof t!="string")throw new Error(this._name+".loadFromDisk - expected model file path");return e=Ye.getEnv().readFile,n=Tc(t,this.getDefaultModelName()),o=n.manifestUri,i=n.modelBaseUri,a=function(d){return Promise.all(d.map(function(p){return e(p).then(function(v){return v.buffer})}))},s=yc.weightsLoaderFactory(a),l=(c=JSON).parse,[4,e(o)];case 1:return u=l.apply(c,[f.sent().toString()]),[4,s(u,i)];case 2:return h=f.sent(),this.loadFromWeightMap(h),[2]}})})},r.prototype.loadFromWeightMap=function(t){var e=this.extractParamsFromWeigthMap(t),n=e.paramMappings,o=e.params;this._paramMappings=n,this._params=o},r.prototype.extractWeights=function(t){var e=this.extractParams(t),n=e.paramMappings,o=e.params;this._paramMappings=n,this._params=o},r.prototype.traversePropertyPath=function(t){if(!this.params)throw new Error("traversePropertyPath - model has no loaded params");var e=t.split("/").reduce(function(i,a){if(!i.nextObj.hasOwnProperty(a))throw new Error("traversePropertyPath - object does not have property "+a+", for path "+t);return{obj:i.nextObj,objProp:a,nextObj:i.nextObj[a]}},{nextObj:this.params}),n=e.obj,o=e.objProp;if(!n||!o||!(n[o]instanceof Ee))throw new Error("traversePropertyPath - parameter is not a tensor, for path "+t);return{obj:n,objProp:o}},r}();function st(r,t,e){return $(function(){var n=Yi(r,t.depthwise_filter,t.pointwise_filter,e,"same");return n=ue(n,t.bias),n})}function ri(r,t,e){return e===void 0&&(e=!1),$(function(){var n=Ie(e?ue(dt(r,t.conv0.filters,[2,2],"same"),t.conv0.bias):st(r,t.conv0,[2,2])),o=st(n,t.conv1,[1,1]),i=Ie(ue(n,o)),a=st(i,t.conv2,[1,1]);return Ie(ue(n,ue(o,a)))})}function Mr(r,t,e,n){return e===void 0&&(e=!1),n===void 0&&(n=!0),$(function(){var o=Ie(e?ue(dt(r,t.conv0.filters,n?[2,2]:[1,1],"same"),t.conv0.bias):st(r,t.conv0,n?[2,2]:[1,1])),i=st(o,t.conv1,[1,1]),a=Ie(ue(o,i)),s=st(a,t.conv2,[1,1]),u=Ie(ue(o,ue(i,s))),c=st(u,t.conv3,[1,1]);return Ie(ue(o,ue(i,ue(s,c))))})}function mt(r,t,e,n){return e===void 0&&(e="same"),n===void 0&&(n=!1),$(function(){var o=ue(dt(r,t.filters,[1,1],e),t.bias);return n?Ie(o):o})}function Kt(r,t){Object.keys(r).forEach(function(e){t.some(function(n){return n.originalPath===e})||r[e].dispose()})}function _o(r,t){return function(e,n,o,i){var a=Je(r(e*n*o*o),[o,o,e,n]),s=Te(r(n));return t.push({paramPath:i+"/filters"},{paramPath:i+"/bias"}),{filters:a,bias:s}}}function ma(r,t){return function(e,n,o){var i=rn(r(e*n),[e,n]),a=Te(r(n));return t.push({paramPath:o+"/weights"},{paramPath:o+"/bias"}),{weights:i,bias:a}}}var Fc=function(){function r(t,e,n){this.depthwise_filter=t,this.pointwise_filter=e,this.bias=n}return r}();function ga(r,t){return function(e,n,o){var i=Je(r(9*e),[3,3,e,1]),a=Je(r(e*n),[1,1,e,n]),s=Te(r(n));return t.push({paramPath:o+"/depthwise_filter"},{paramPath:o+"/pointwise_filter"},{paramPath:o+"/bias"}),new Fc(i,a,s)}}function ya(r){return function(t){var e=r(t+"/depthwise_filter",4),n=r(t+"/pointwise_filter",4),o=r(t+"/bias",1);return new Fc(e,n,o)}}function ln(r,t){return function(e,n,o){var i=r[e];if(!yo(i,n))throw new Error("expected weightMap["+e+"] to be a Tensor"+n+"D, instead have "+i);return t.push({originalPath:e,paramPath:o||e}),i}}function Xt(r){var t=r;function e(o){var i=t.slice(0,o);return t=t.slice(o),i}function n(){return t}return{extractWeights:e,getRemainingWeights:n}}function Nc(r,t){var e=_o(r,t),n=ga(r,t);function o(a,s,u,c){c===void 0&&(c=!1);var l=c?e(a,s,3,u+"/conv0"):n(a,s,u+"/conv0"),h=n(s,s,u+"/conv1"),f=n(s,s,u+"/conv2");return{conv0:l,conv1:h,conv2:f}}function i(a,s,u,c){c===void 0&&(c=!1);var l=o(a,s,u,c),h=l.conv0,f=l.conv1,d=l.conv2,p=n(s,s,u+"/conv3");return{conv0:h,conv1:f,conv2:d,conv3:p}}return{extractDenseBlock3Params:o,extractDenseBlock4Params:i}}function fg(r){var t=[],e=Xt(r),n=e.extractWeights,o=e.getRemainingWeights,i=Nc(n,t).extractDenseBlock4Params,a=i(3,32,"dense0",!0),s=i(32,64,"dense1"),u=i(64,128,"dense2"),c=i(128,256,"dense3");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:a,dense1:s,dense2:u,dense3:c}}}function Pc(r){return function(t){var e=r(t+"/filters",4),n=r(t+"/bias",1);return{filters:e,bias:n}}}function Mc(r,t){var e=ln(r,t),n=Pc(e),o=ya(e);function i(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),h=o(s+"/conv2");return{conv0:c,conv1:l,conv2:h}}function a(s,u){u===void 0&&(u=!1);var c=u?n(s+"/conv0"):o(s+"/conv0"),l=o(s+"/conv1"),h=o(s+"/conv2"),f=o(s+"/conv3");return{conv0:c,conv1:l,conv2:h,conv3:f}}return{extractDenseBlock3Params:i,extractDenseBlock4Params:a}}function dg(r){var t=[],e=Mc(r,t).extractDenseBlock4Params,n={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2"),dense3:e("dense3")};return Kt(r,t),{params:n,paramMappings:t}}var Oc=function(r){re(t,r);function t(){return r.call(this,"FaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("FaceFeatureExtractor - load model before inference");return $(function(){var o=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],a=_r(o,i).div(q(255)),s=Mr(a,n.dense0,!0);return s=Mr(s,n.dense1),s=Mr(s,n.dense2),s=Mr(s,n.dense3),s=wr(s,[7,7],[2,2],"valid"),s})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ve(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_model"},t.prototype.extractParamsFromWeigthMap=function(e){return dg(e)},t.prototype.extractParams=function(e){return fg(e)},t}($t);function kt(r,t){return $(function(){return ue(vo(r,t.weights),t.bias)})}function pg(r,t,e){var n=[],o=Xt(r),i=o.extractWeights,a=o.getRemainingWeights,s=ma(i,n),u=s(t,e,"fc");if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{paramMappings:n,params:{fc:u}}}function vg(r){var t=[],e=ln(r,t);function n(i){var a=e(i+"/weights",2),s=e(i+"/bias",1);return{weights:a,bias:s}}var o={fc:n("fc")};return Kt(r,t),{params:o,paramMappings:t}}function Bc(r){var t={},e={};return Object.keys(r).forEach(function(n){var o=n.startsWith("fc")?e:t;o[n]=r[n]}),{featureExtractorMap:t,classifierMap:e}}var Lc=function(r){re(t,r);function t(e,n){var o=r.call(this,e)||this;return o._faceFeatureExtractor=n,o}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return $(function(){var i=e instanceof io?n.faceFeatureExtractor.forwardInput(e):e;return kt(i.as2D(i.shape[0],-1),o.fc)})},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var n=this.extractClassifierParams(e),o=n.params,i=n.paramMappings;this._params=o,this._paramMappings=i},t.prototype.extractClassifierParams=function(e){return pg(e,this.getClassifierChannelsIn(),this.getClassifierChannelsOut())},t.prototype.extractParamsFromWeigthMap=function(e){var n=Bc(e),o=n.featureExtractorMap,i=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),vg(i)},t.prototype.extractParams=function(e){var n=this.getClassifierChannelsIn(),o=this.getClassifierChannelsOut(),i=o*n+o,a=e.slice(0,e.length-i),s=e.slice(e.length-i);return this.faceFeatureExtractor.extractWeights(a),this.extractClassifierParams(s)},t}($t),Os=["neutral","happy","sad","angry","fearful","disgusted","surprised"],xa=function(){function r(t){var e=this;if(t.length!==7)throw new Error("FaceExpressions.constructor - expected probabilities.length to be 7, have: "+t.length);Os.forEach(function(n,o){e[n]=t[o]})}return r.prototype.asSortedArray=function(){var t=this;return Os.map(function(e){return{expression:e,probability:t[e]}}).sort(function(e,n){return n.probability-e.probability})},r}(),mg=function(r){re(t,r);function t(e){return e===void 0&&(e=new Oc),r.call(this,"FaceExpressionNet",e)||this}return t.prototype.forwardInput=function(e){var n=this;return $(function(){return qt(n.runNet(e))})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ve(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.predictExpressions=function(e){return Q(this,void 0,void 0,function(){var n,o,i,a,s=this;return Z(this,function(u){switch(u.label){case 0:return[4,Ve(e)];case 1:return n=u.sent(),[4,this.forwardInput(n)];case 2:return o=u.sent(),[4,Promise.all(Pe(o).map(function(c){return Q(s,void 0,void 0,function(){var l;return Z(this,function(h){switch(h.label){case 0:return[4,c.data()];case 1:return l=h.sent(),c.dispose(),[2,l]}})})}))];case 3:return i=u.sent(),o.dispose(),a=i.map(function(c){return new xa(c)}),[2,n.isBatchInput?a:a[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_expression_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t.prototype.getClassifierChannelsOut=function(){return 7},t}(Lc);function gg(r){return r.expressions instanceof xa}function Wc(r,t){var e={expressions:t};return Object.assign({},r,e)}function yg(r,t,e,n){e===void 0&&(e=.1);var o=Array.isArray(t)?t:[t];o.forEach(function(i){var a=i instanceof xa?i:gg(i)?i.expressions:void 0;if(!a)throw new Error("drawFaceExpressions - expected faceExpressions to be FaceExpressions | WithFaceExpressions<{}> or array thereof");var s=a.asSortedArray(),u=s.filter(function(h){return h.probability>e}),c=fr(i)?i.detection.box.bottomLeft:new me(0,0),l=new Rc(u.map(function(h){return h.expression+" ("+ua(h.probability)+")"}),c);l.draw(r)})}function ba(r){return fr(r)&&r.landmarks instanceof Kn&&r.unshiftedLandmarks instanceof Kn&&r.alignedRect instanceof ct}function Eo(r,t){var e=r.detection.box,n=t.shiftBy(e.x,e.y),o=n.align(),i=r.detection.imageDims,a=new ct(r.detection.score,o.rescale(i.reverse()),i),s={landmarks:n,unshiftedLandmarks:t,alignedRect:a};return Object.assign({},r,s)}var xg=function(){function r(t){t===void 0&&(t={});var e=t.drawLines,n=e===void 0?!0:e,o=t.drawPoints,i=o===void 0?!0:o,a=t.lineWidth,s=t.lineColor,u=t.pointSize,c=t.pointColor;this.drawLines=n,this.drawPoints=i,this.lineWidth=a||1,this.pointSize=u||2,this.lineColor=s||"rgba(0, 255, 255, 1)",this.pointColor=c||"rgba(255, 0, 255, 1)"}return r}(),bg=function(){function r(t,e){e===void 0&&(e={}),this.faceLandmarks=t,this.options=new xg(e)}return r.prototype.draw=function(t){var e=Pt(t),n=this.options,o=n.drawLines,i=n.drawPoints,a=n.lineWidth,s=n.lineColor,u=n.pointSize,c=n.pointColor;if(o&&this.faceLandmarks instanceof wc&&(e.strokeStyle=s,e.lineWidth=a,fn(e,this.faceLandmarks.getJawOutline()),fn(e,this.faceLandmarks.getLeftEyeBrow()),fn(e,this.faceLandmarks.getRightEyeBrow()),fn(e,this.faceLandmarks.getNose()),fn(e,this.faceLandmarks.getLeftEye(),!0),fn(e,this.faceLandmarks.getRightEye(),!0),fn(e,this.faceLandmarks.getMouth(),!0)),i){e.strokeStyle=c,e.fillStyle=c;var l=function(h){e.beginPath(),e.arc(h.x,h.y,u,0,2*Math.PI),e.fill()};this.faceLandmarks.positions.forEach(l)}},r}();function wg(r,t){var e=Array.isArray(t)?t:[t];e.forEach(function(n){var o=n instanceof Kn?n:ba(n)?n.landmarks:void 0;if(!o)throw new Error("drawFaceLandmarks - expected faceExpressions to be FaceLandmarks | WithFaceLandmarks<WithFaceDetection<{}>> or array thereof");new bg(o).draw(r)})}function Cg(r,t){var e=_o(r,t),n=ga(r,t);function o(a,s,u){var c=n(a,s,u+"/separable_conv0"),l=n(s,s,u+"/separable_conv1"),h=e(a,s,1,u+"/expansion_conv");return{separable_conv0:c,separable_conv1:l,expansion_conv:h}}function i(a,s){var u=n(a,a,s+"/separable_conv0"),c=n(a,a,s+"/separable_conv1"),l=n(a,a,s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:e,extractSeparableConvParams:n,extractReductionBlockParams:o,extractMainBlockParams:i}}function _g(r,t){var e=[],n=Xt(r),o=n.extractWeights,i=n.getRemainingWeights,a=Cg(o,e),s=a.extractConvParams,u=a.extractSeparableConvParams,c=a.extractReductionBlockParams,l=a.extractMainBlockParams,h=s(3,32,3,"entry_flow/conv_in"),f=c(32,64,"entry_flow/reduction_block_0"),d=c(64,128,"entry_flow/reduction_block_1"),p={conv_in:h,reduction_block_0:f,reduction_block_1:d},v={};lr(t,0,1).forEach(function(b){v["main_block_"+b]=l(128,"middle_flow/main_block_"+b)});var m=c(128,256,"exit_flow/reduction_block"),g=u(256,512,"exit_flow/separable_conv"),y={reduction_block:m,separable_conv:g};if(i().length!==0)throw new Error("weights remaing after extract: "+i().length);return{paramMappings:e,params:{entry_flow:p,middle_flow:v,exit_flow:y}}}function Eg(r,t){var e=ln(r,t),n=Pc(e),o=ya(e);function i(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=n(s+"/expansion_conv");return{separable_conv0:u,separable_conv1:c,expansion_conv:l}}function a(s){var u=o(s+"/separable_conv0"),c=o(s+"/separable_conv1"),l=o(s+"/separable_conv2");return{separable_conv0:u,separable_conv1:c,separable_conv2:l}}return{extractConvParams:n,extractSeparableConvParams:o,extractReductionBlockParams:i,extractMainBlockParams:a}}function Ig(r,t){var e=[],n=Eg(r,e),o=n.extractConvParams,i=n.extractSeparableConvParams,a=n.extractReductionBlockParams,s=n.extractMainBlockParams,u=o("entry_flow/conv_in"),c=a("entry_flow/reduction_block_0"),l=a("entry_flow/reduction_block_1"),h={conv_in:u,reduction_block_0:c,reduction_block_1:l},f={};lr(t,0,1).forEach(function(m){f["main_block_"+m]=s("middle_flow/main_block_"+m)});var d=a("exit_flow/reduction_block"),p=i("exit_flow/separable_conv"),v={reduction_block:d,separable_conv:p};return Kt(r,e),{params:{entry_flow:h,middle_flow:f,exit_flow:v},paramMappings:e}}function Vc(r,t,e){return ue(dt(r,t.filters,e,"same"),t.bias)}function oi(r,t,e){e===void 0&&(e=!0);var n=e?Ie(r):r;return n=st(n,t.separable_conv0,[1,1]),n=st(Ie(n),t.separable_conv1,[1,1]),n=Le(n,[3,3],[2,2],"same"),n=ue(n,Vc(r,t.expansion_conv,[2,2])),n}function Ag(r,t){var e=st(Ie(r),t.separable_conv0,[1,1]);return e=st(Ie(e),t.separable_conv1,[1,1]),e=st(Ie(e),t.separable_conv2,[1,1]),e=ue(e,r),e}var kg=function(r){re(t,r);function t(e){var n=r.call(this,"TinyXception")||this;return n._numMainBlocks=e,n}return t.prototype.forwardInput=function(e){var n=this,o=this.params;if(!o)throw new Error("TinyXception - load model before inference");return $(function(){var i=e.toBatchTensor(112,!0),a=[122.782,117.001,104.298],s=_r(i,a).div(q(256)),u=Ie(Vc(s,o.entry_flow.conv_in,[2,2]));return u=oi(u,o.entry_flow.reduction_block_0,!1),u=oi(u,o.entry_flow.reduction_block_1),lr(n._numMainBlocks,0,1).forEach(function(c){u=Ag(u,o.middle_flow["main_block_"+c])}),u=oi(u,o.exit_flow.reduction_block),u=Ie(st(u,o.exit_flow.separable_conv,[1,1])),u})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ve(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"tiny_xception_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Ig(e,this._numMainBlocks)},t.prototype.extractParams=function(e){return _g(e,this._numMainBlocks)},t}($t);function Rg(r){var t=[],e=Xt(r),n=e.extractWeights,o=e.getRemainingWeights,i=ma(n,t),a=i(512,1,"fc/age"),s=i(512,2,"fc/gender");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{fc:{age:a,gender:s}}}}function Sg(r){var t=[],e=ln(r,t);function n(i){var a=e(i+"/weights",2),s=e(i+"/bias",1);return{weights:a,bias:s}}var o={fc:{age:n("fc/age"),gender:n("fc/gender")}};return Kt(r,t),{params:o,paramMappings:t}}var ao;(function(r){r.FEMALE="female",r.MALE="male"})(ao||(ao={}));var Dg=function(r){re(t,r);function t(e){e===void 0&&(e=new kg(2));var n=r.call(this,"AgeGenderNet")||this;return n._faceFeatureExtractor=e,n}return Object.defineProperty(t.prototype,"faceFeatureExtractor",{get:function(){return this._faceFeatureExtractor},enumerable:!0,configurable:!0}),t.prototype.runNet=function(e){var n=this,o=this.params;if(!o)throw new Error(this._name+" - load model before inference");return $(function(){var i=e instanceof io?n.faceFeatureExtractor.forwardInput(e):e,a=wr(i,[7,7],[2,2],"valid").as2D(i.shape[0],-1),s=kt(a,o.fc.age).as1D(),u=kt(a,o.fc.gender);return{age:s,gender:u}})},t.prototype.forwardInput=function(e){var n=this;return $(function(){var o=n.runNet(e),i=o.age,a=o.gender;return{age:i,gender:qt(a)}})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ve(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.predictAgeAndGender=function(e){return Q(this,void 0,void 0,function(){var n,o,i,a,s,u,c=this;return Z(this,function(l){switch(l.label){case 0:return[4,Ve(e)];case 1:return n=l.sent(),[4,this.forwardInput(n)];case 2:return o=l.sent(),i=Pe(o.age),a=Pe(o.gender),s=i.map(function(h,f){return{ageTensor:h,genderTensor:a[f]}}),[4,Promise.all(s.map(function(h){var f=h.ageTensor,d=h.genderTensor;return Q(c,void 0,void 0,function(){var p,v,m,g,y;return Z(this,function(b){switch(b.label){case 0:return[4,f.data()];case 1:return p=b.sent()[0],[4,d.data()];case 2:return v=b.sent()[0],m=v>.5,g=m?ao.MALE:ao.FEMALE,y=m?v:1-v,f.dispose(),d.dispose(),[2,{age:p,gender:g,genderProbability:y}]}})})}))];case 3:return u=l.sent(),o.age.dispose(),o.gender.dispose(),[2,n.isBatchInput?u:u[0]]}})})},t.prototype.getDefaultModelName=function(){return"age_gender_model"},t.prototype.dispose=function(e){e===void 0&&(e=!0),this.faceFeatureExtractor.dispose(e),r.prototype.dispose.call(this,e)},t.prototype.loadClassifierParams=function(e){var n=this.extractClassifierParams(e),o=n.params,i=n.paramMappings;this._params=o,this._paramMappings=i},t.prototype.extractClassifierParams=function(e){return Rg(e)},t.prototype.extractParamsFromWeigthMap=function(e){var n=Bc(e),o=n.featureExtractorMap,i=n.classifierMap;return this.faceFeatureExtractor.loadFromWeightMap(o),Sg(i)},t.prototype.extractParams=function(e){var n=1539,o=e.slice(0,e.length-n),i=e.slice(e.length-n);return this.faceFeatureExtractor.extractWeights(o),this.extractClassifierParams(i)},t}($t),zc=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.postProcess=function(e,n,o){var i=o.map(function(s){var u=s.width,c=s.height,l=n/Math.max(c,u);return{width:u*l,height:c*l}}),a=i.length;return $(function(){var s=function(f,d){return ut([Dt([68],f),Dt([68],d)],1).as2D(1,136).as1D()},u=function(f,d){var p=i[f],v=p.width,m=p.height;return d(v,m)?Math.abs(v-m)/2:0},c=function(f){return u(f,function(d,p){return d<p})},l=function(f){return u(f,function(d,p){return p<d})},h=e.mul(Dt([a,136],n)).sub(ut(Array.from(Array(a),function(f,d){return s(c(d),l(d))}))).div(ut(Array.from(Array(a),function(f,d){return s(i[d].width,i[d].height)})));return h})},t.prototype.forwardInput=function(e){var n=this;return $(function(){var o=n.runNet(e);return n.postProcess(o,e.inputSize,e.inputDimensions.map(function(i){var a=i[0],s=i[1];return{height:a,width:s}}))})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ve(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.detectLandmarks=function(e){return Q(this,void 0,void 0,function(){var n,o,i,a=this;return Z(this,function(s){switch(s.label){case 0:return[4,Ve(e)];case 1:return n=s.sent(),o=$(function(){return Pe(a.forwardInput(n))}),[4,Promise.all(o.map(function(u,c){return Q(a,void 0,void 0,function(){var l,h,f,d,p;return Z(this,function(v){switch(v.label){case 0:return f=(h=Array).from,[4,u.data()];case 1:return l=f.apply(h,[v.sent()]),d=l.filter(function(m,g){return Ds(g)}),p=l.filter(function(m,g){return!Ds(g)}),[2,new wc(Array(68).fill(0).map(function(m,g){return new me(d[g],p[g])}),{height:n.getInputHeight(c),width:n.getInputWidth(c)})]}})})}))];case 2:return i=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?i:i[0]]}})})},t.prototype.getClassifierChannelsOut=function(){return 136},t}(Lc),Uc=function(r){re(t,r);function t(e){return e===void 0&&(e=new Oc),r.call(this,"FaceLandmark68Net",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_model"},t.prototype.getClassifierChannelsIn=function(){return 256},t}(zc);function Tg(r){var t=[],e=Mc(r,t).extractDenseBlock3Params,n={dense0:e("dense0",!0),dense1:e("dense1"),dense2:e("dense2")};return Kt(r,t),{params:n,paramMappings:t}}function Fg(r){var t=[],e=Xt(r),n=e.extractWeights,o=e.getRemainingWeights,i=Nc(n,t).extractDenseBlock3Params,a=i(3,32,"dense0",!0),s=i(32,64,"dense1"),u=i(64,128,"dense2");if(o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{paramMappings:t,params:{dense0:a,dense1:s,dense2:u}}}var Ng=function(r){re(t,r);function t(){return r.call(this,"TinyFaceFeatureExtractor")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("TinyFaceFeatureExtractor - load model before inference");return $(function(){var o=e.toBatchTensor(112,!0),i=[122.782,117.001,104.298],a=_r(o,i).div(q(255)),s=ri(a,n.dense0,!0);return s=ri(s,n.dense1),s=ri(s,n.dense2),s=wr(s,[14,14],[2,2],"valid"),s})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ve(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.getDefaultModelName=function(){return"face_feature_extractor_tiny_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Tg(e)},t.prototype.extractParams=function(e){return Fg(e)},t}($t),Pg=function(r){re(t,r);function t(e){return e===void 0&&(e=new Ng),r.call(this,"FaceLandmark68TinyNet",e)||this}return t.prototype.getDefaultModelName=function(){return"face_landmark_68_tiny_model"},t.prototype.getClassifierChannelsIn=function(){return 128},t}(zc);(function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t})(Uc);function Mg(r,t){return ue(Xe(r,t.weights),t.biases)}function wa(r,t,e,n,o){o===void 0&&(o="same");var i=t.conv,a=i.filters,s=i.bias,u=dt(r,a,e,o);return u=ue(u,s),u=Mg(u,t.scale),n?Ie(u):u}function Og(r,t){return wa(r,t,[1,1],!0)}function Gc(r,t){return wa(r,t,[1,1],!1)}function Hc(r,t){return wa(r,t,[2,2],!0,"valid")}function Bg(r,t){function e(s,u,c){var l=r(s),h=l.length/(u*c*c);if(jm(h))throw new Error("depth has to be an integer: "+h+", weights.length: "+l.length+", numFilters: "+u+", filterSize: "+c);return $(function(){return sn(Je(l,[u,h,c,c]),[2,3,1,0])})}function n(s,u,c,l){var h=e(s,u,c),f=Te(r(u));return t.push({paramPath:l+"/filters"},{paramPath:l+"/bias"}),{filters:h,bias:f}}function o(s,u){var c=Te(r(s)),l=Te(r(s));return t.push({paramPath:u+"/weights"},{paramPath:u+"/biases"}),{weights:c,biases:l}}function i(s,u,c,l){var h=n(s,u,c,l+"/conv"),f=o(u,l+"/scale");return{conv:h,scale:f}}function a(s,u,c,l,h){h===void 0&&(h=!1);var f=i((h?.5:1)*s,u,c,l+"/conv1"),d=i(s,u,c,l+"/conv2");return{conv1:f,conv2:d}}return{extractConvLayerParams:i,extractResidualLayerParams:a}}function Lg(r){var t=Xt(r),e=t.extractWeights,n=t.getRemainingWeights,o=[],i=Bg(e,o),a=i.extractConvLayerParams,s=i.extractResidualLayerParams,u=a(4704,32,7,"conv32_down"),c=s(9216,32,3,"conv32_1"),l=s(9216,32,3,"conv32_2"),h=s(9216,32,3,"conv32_3"),f=s(36864,64,3,"conv64_down",!0),d=s(36864,64,3,"conv64_1"),p=s(36864,64,3,"conv64_2"),v=s(36864,64,3,"conv64_3"),m=s(147456,128,3,"conv128_down",!0),g=s(147456,128,3,"conv128_1"),y=s(147456,128,3,"conv128_2"),b=s(589824,256,3,"conv256_down",!0),x=s(589824,256,3,"conv256_1"),w=s(589824,256,3,"conv256_2"),C=s(589824,256,3,"conv256_down_out"),R=$(function(){return sn(rn(e(256*128),[128,256]),[1,0])});if(o.push({paramPath:"fc"}),n().length!==0)throw new Error("weights remaing after extract: "+n().length);var k={conv32_down:u,conv32_1:c,conv32_2:l,conv32_3:h,conv64_down:f,conv64_1:d,conv64_2:p,conv64_3:v,conv128_down:m,conv128_1:g,conv128_2:y,conv256_down:b,conv256_1:x,conv256_2:w,conv256_down_out:C,fc:R};return{params:k,paramMappings:o}}function Wg(r,t){var e=ln(r,t);function n(a){var s=e(a+"/scale/weights",1),u=e(a+"/scale/biases",1);return{weights:s,biases:u}}function o(a){var s=e(a+"/conv/filters",4),u=e(a+"/conv/bias",1),c=n(a);return{conv:{filters:s,bias:u},scale:c}}function i(a){return{conv1:o(a+"/conv1"),conv2:o(a+"/conv2")}}return{extractConvLayerParams:o,extractResidualLayerParams:i}}function Vg(r){var t=[],e=Wg(r,t),n=e.extractConvLayerParams,o=e.extractResidualLayerParams,i=n("conv32_down"),a=o("conv32_1"),s=o("conv32_2"),u=o("conv32_3"),c=o("conv64_down"),l=o("conv64_1"),h=o("conv64_2"),f=o("conv64_3"),d=o("conv128_down"),p=o("conv128_1"),v=o("conv128_2"),m=o("conv256_down"),g=o("conv256_1"),y=o("conv256_2"),b=o("conv256_down_out"),x=r.fc;if(t.push({originalPath:"fc",paramPath:"fc"}),!qm(x))throw new Error("expected weightMap[fc] to be a Tensor2D, instead have "+x);var w={conv32_down:i,conv32_1:a,conv32_2:s,conv32_3:u,conv64_down:c,conv64_1:l,conv64_2:h,conv64_3:f,conv128_down:d,conv128_1:p,conv128_2:v,conv256_down:m,conv256_1:g,conv256_2:y,conv256_down_out:b,fc:x};return Kt(r,t),{params:w,paramMappings:t}}function Ct(r,t){var e=Og(r,t.conv1);return e=Gc(e,t.conv2),e=ue(e,r),e=Ie(e),e}function Or(r,t){var e=Hc(r,t.conv1);e=Gc(e,t.conv2);var n=wr(r,2,2,"valid"),o=we(n.shape),i=n.shape[3]!==e.shape[3],a=n.shape[1]!==e.shape[1]||n.shape[2]!==e.shape[2];if(a){var s=or(e.shape);s[1]=1;var u=we(s);e=Ne([e,u],1);var c=or(e.shape);c[2]=1;var l=we(c);e=Ne([e,l],2)}return n=i?Ne([n,o],3):n,e=ue(n,e),e=Ie(e),e}var zg=function(r){re(t,r);function t(){return r.call(this,"FaceRecognitionNet")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("FaceRecognitionNet - load model before inference");return $(function(){var o=e.toBatchTensor(150,!0).toFloat(),i=[122.782,117.001,104.298],a=_r(o,i).div(q(256)),s=Hc(a,n.conv32_down);s=Le(s,3,2,"valid"),s=Ct(s,n.conv32_1),s=Ct(s,n.conv32_2),s=Ct(s,n.conv32_3),s=Or(s,n.conv64_down),s=Ct(s,n.conv64_1),s=Ct(s,n.conv64_2),s=Ct(s,n.conv64_3),s=Or(s,n.conv128_down),s=Ct(s,n.conv128_1),s=Ct(s,n.conv128_2),s=Or(s,n.conv256_down),s=Ct(s,n.conv256_1),s=Ct(s,n.conv256_2),s=Or(s,n.conv256_down_out);var u=s.mean([1,2]),c=vo(u,n.fc);return c})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ve(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.computeFaceDescriptor=function(e){return Q(this,void 0,void 0,function(){var n,o,i,a=this;return Z(this,function(s){switch(s.label){case 0:return[4,Ve(e)];case 1:return n=s.sent(),o=$(function(){return Pe(a.forwardInput(n))}),[4,Promise.all(o.map(function(u){return u.data()}))];case 2:return i=s.sent(),o.forEach(function(u){return u.dispose()}),[2,n.isBatchInput?i:i[0]]}})})},t.prototype.getDefaultModelName=function(){return"face_recognition_model"},t.prototype.extractParamsFromWeigthMap=function(e){return Vg(e)},t.prototype.extractParams=function(e){return Lg(e)},t}($t);function qc(r,t){var e={descriptor:t};return Object.assign({},r,e)}function jc(r,t){var e={age:t};return Object.assign({},r,e)}function $c(r,t,e){var n={gender:t,genderProbability:e};return Object.assign({},r,n)}var Kc=function(){function r(t){var e=t===void 0?{}:t,n=e.minFaceSize,o=e.scaleFactor,i=e.maxNumScales,a=e.scoreThresholds,s=e.scaleSteps;if(this._name="MtcnnOptions",this._minFaceSize=n||20,this._scaleFactor=o||.709,this._maxNumScales=i||10,this._scoreThresholds=a||[.6,.7,.7],this._scaleSteps=s,typeof this._minFaceSize!="number"||this._minFaceSize<0)throw new Error(this._name+" - expected minFaceSize to be a number > 0");if(typeof this._scaleFactor!="number"||this._scaleFactor<=0||this._scaleFactor>=1)throw new Error(this._name+" - expected scaleFactor to be a number between 0 and 1");if(typeof this._maxNumScales!="number"||this._maxNumScales<0)throw new Error(this._name+" - expected maxNumScales to be a number > 0");if(!Array.isArray(this._scoreThresholds)||this._scoreThresholds.length!==3||this._scoreThresholds.some(function(u){return typeof u!="number"}))throw new Error(this._name+" - expected scoreThresholds to be an array of numbers of length 3");if(this._scaleSteps&&(!Array.isArray(this._scaleSteps)||this._scaleSteps.some(function(u){return typeof u!="number"})))throw new Error(this._name+" - expected scaleSteps to be an array of numbers")}return Object.defineProperty(r.prototype,"minFaceSize",{get:function(){return this._minFaceSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleFactor",{get:function(){return this._scaleFactor},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxNumScales",{get:function(){return this._maxNumScales},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThresholds",{get:function(){return this._scoreThresholds},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scaleSteps",{get:function(){return this._scaleSteps},enumerable:!0,configurable:!0}),r}();function Ug(r,t){function e(u,c){var l=Je(r(9*u),[3,3,u,1]),h=Te(r(u)),f=Te(r(u)),d=Te(r(u)),p=Te(r(u));return t.push({paramPath:c+"/filters"},{paramPath:c+"/batch_norm_scale"},{paramPath:c+"/batch_norm_offset"},{paramPath:c+"/batch_norm_mean"},{paramPath:c+"/batch_norm_variance"}),{filters:l,batch_norm_scale:h,batch_norm_offset:f,batch_norm_mean:d,batch_norm_variance:p}}function n(u,c,l,h,f){var d=Je(r(u*c*l*l),[l,l,u,c]),p=Te(r(c));return t.push({paramPath:h+"/filters"},{paramPath:h+"/"+(f?"batch_norm_offset":"bias")}),{filters:d,bias:p}}function o(u,c,l,h){var f=n(u,c,l,h,!0),d=f.filters,p=f.bias;return{filters:d,batch_norm_offset:p}}function i(u,c,l){var h=e(u,l+"/depthwise_conv"),f=o(u,c,1,l+"/pointwise_conv");return{depthwise_conv:h,pointwise_conv:f}}function a(){var u=o(3,32,3,"mobilenetv1/conv_0"),c=i(32,64,"mobilenetv1/conv_1"),l=i(64,128,"mobilenetv1/conv_2"),h=i(128,128,"mobilenetv1/conv_3"),f=i(128,256,"mobilenetv1/conv_4"),d=i(256,256,"mobilenetv1/conv_5"),p=i(256,512,"mobilenetv1/conv_6"),v=i(512,512,"mobilenetv1/conv_7"),m=i(512,512,"mobilenetv1/conv_8"),g=i(512,512,"mobilenetv1/conv_9"),y=i(512,512,"mobilenetv1/conv_10"),b=i(512,512,"mobilenetv1/conv_11"),x=i(512,1024,"mobilenetv1/conv_12"),w=i(1024,1024,"mobilenetv1/conv_13");return{conv_0:u,conv_1:c,conv_2:l,conv_3:h,conv_4:f,conv_5:d,conv_6:p,conv_7:v,conv_8:m,conv_9:g,conv_10:y,conv_11:b,conv_12:x,conv_13:w}}function s(){var u=o(1024,256,1,"prediction_layer/conv_0"),c=o(256,512,3,"prediction_layer/conv_1"),l=o(512,128,1,"prediction_layer/conv_2"),h=o(128,256,3,"prediction_layer/conv_3"),f=o(256,128,1,"prediction_layer/conv_4"),d=o(128,256,3,"prediction_layer/conv_5"),p=o(256,64,1,"prediction_layer/conv_6"),v=o(64,128,3,"prediction_layer/conv_7"),m=n(512,12,1,"prediction_layer/box_predictor_0/box_encoding_predictor"),g=n(512,9,1,"prediction_layer/box_predictor_0/class_predictor"),y=n(1024,24,1,"prediction_layer/box_predictor_1/box_encoding_predictor"),b=n(1024,18,1,"prediction_layer/box_predictor_1/class_predictor"),x=n(512,24,1,"prediction_layer/box_predictor_2/box_encoding_predictor"),w=n(512,18,1,"prediction_layer/box_predictor_2/class_predictor"),C=n(256,24,1,"prediction_layer/box_predictor_3/box_encoding_predictor"),R=n(256,18,1,"prediction_layer/box_predictor_3/class_predictor"),k=n(256,24,1,"prediction_layer/box_predictor_4/box_encoding_predictor"),I=n(256,18,1,"prediction_layer/box_predictor_4/class_predictor"),A=n(128,24,1,"prediction_layer/box_predictor_5/box_encoding_predictor"),F=n(128,18,1,"prediction_layer/box_predictor_5/class_predictor"),D={box_encoding_predictor:m,class_predictor:g},L={box_encoding_predictor:y,class_predictor:b},O={box_encoding_predictor:x,class_predictor:w},B={box_encoding_predictor:C,class_predictor:R},z={box_encoding_predictor:k,class_predictor:I},V={box_encoding_predictor:A,class_predictor:F};return{conv_0:u,conv_1:c,conv_2:l,conv_3:h,conv_4:f,conv_5:d,conv_6:p,conv_7:v,box_predictor_0:D,box_predictor_1:L,box_predictor_2:O,box_predictor_3:B,box_predictor_4:z,box_predictor_5:V}}return{extractMobilenetV1Params:a,extractPredictionLayerParams:s}}function Gg(r){var t=[],e=Xt(r),n=e.extractWeights,o=e.getRemainingWeights,i=Ug(n,t),a=i.extractMobilenetV1Params,s=i.extractPredictionLayerParams,u=a(),c=s(),l=Mi(n(5118*4),[1,5118,4]),h={extra_dim:l};if(t.push({paramPath:"output_layer/extra_dim"}),o().length!==0)throw new Error("weights remaing after extract: "+o().length);return{params:{mobilenetv1:u,prediction_layer:c,output_layer:h},paramMappings:t}}function Hg(r,t){var e=ln(r,t);function n(c,l,h){var f=e(c+"/Conv2d_"+l+"_pointwise/weights",4,h+"/filters"),d=e(c+"/Conv2d_"+l+"_pointwise/convolution_bn_offset",1,h+"/batch_norm_offset");return{filters:f,batch_norm_offset:d}}function o(c){var l="mobilenetv1/conv_"+c,h="MobilenetV1/Conv2d_"+c+"_depthwise",f=l+"/depthwise_conv",d=l+"/pointwise_conv",p=e(h+"/depthwise_weights",4,f+"/filters"),v=e(h+"/BatchNorm/gamma",1,f+"/batch_norm_scale"),m=e(h+"/BatchNorm/beta",1,f+"/batch_norm_offset"),g=e(h+"/BatchNorm/moving_mean",1,f+"/batch_norm_mean"),y=e(h+"/BatchNorm/moving_variance",1,f+"/batch_norm_variance");return{depthwise_conv:{filters:p,batch_norm_scale:v,batch_norm_offset:m,batch_norm_mean:g,batch_norm_variance:y},pointwise_conv:n("MobilenetV1",c,d)}}function i(){return{conv_0:n("MobilenetV1",0,"mobilenetv1/conv_0"),conv_1:o(1),conv_2:o(2),conv_3:o(3),conv_4:o(4),conv_5:o(5),conv_6:o(6),conv_7:o(7),conv_8:o(8),conv_9:o(9),conv_10:o(10),conv_11:o(11),conv_12:o(12),conv_13:o(13)}}function a(c,l){var h=e(c+"/weights",4,l+"/filters"),f=e(c+"/biases",1,l+"/bias");return{filters:h,bias:f}}function s(c){var l=a("Prediction/BoxPredictor_"+c+"/BoxEncodingPredictor","prediction_layer/box_predictor_"+c+"/box_encoding_predictor"),h=a("Prediction/BoxPredictor_"+c+"/ClassPredictor","prediction_layer/box_predictor_"+c+"/class_predictor");return{box_encoding_predictor:l,class_predictor:h}}function u(){return{conv_0:n("Prediction",0,"prediction_layer/conv_0"),conv_1:n("Prediction",1,"prediction_layer/conv_1"),conv_2:n("Prediction",2,"prediction_layer/conv_2"),conv_3:n("Prediction",3,"prediction_layer/conv_3"),conv_4:n("Prediction",4,"prediction_layer/conv_4"),conv_5:n("Prediction",5,"prediction_layer/conv_5"),conv_6:n("Prediction",6,"prediction_layer/conv_6"),conv_7:n("Prediction",7,"prediction_layer/conv_7"),box_predictor_0:s(0),box_predictor_1:s(1),box_predictor_2:s(2),box_predictor_3:s(3),box_predictor_4:s(4),box_predictor_5:s(5)}}return{extractMobilenetV1Params:i,extractPredictionLayerParams:u}}function qg(r){var t=[],e=Hg(r,t),n=e.extractMobilenetV1Params,o=e.extractPredictionLayerParams,i=r["Output/extra_dim"];if(t.push({originalPath:"Output/extra_dim",paramPath:"output_layer/extra_dim"}),!xo(i))throw new Error("expected weightMap['Output/extra_dim'] to be a Tensor3D, instead have "+i);var a={mobilenetv1:n(),prediction_layer:o(),output_layer:{extra_dim:i}};return Kt(r,t),{params:a,paramMappings:t}}function _t(r,t,e){return $(function(){var n=dt(r,t.filters,e,"same");return n=ue(n,t.batch_norm_offset),ji(n,0,6)})}var jg=.0010000000474974513;function $g(r,t,e){return $(function(){var n=po(r,t.filters,e,"same");return n=Vu(n,t.batch_norm_mean,t.batch_norm_variance,t.batch_norm_offset,t.batch_norm_scale,jg),ji(n,0,6)})}function Kg(r){return[2,4,6,12].some(function(t){return t===r})?[2,2]:[1,1]}function Xg(r,t){return $(function(){var e=null,n=_t(r,t.conv_0,[2,2]),o=[t.conv_1,t.conv_2,t.conv_3,t.conv_4,t.conv_5,t.conv_6,t.conv_7,t.conv_8,t.conv_9,t.conv_10,t.conv_11,t.conv_12,t.conv_13];if(o.forEach(function(i,a){var s=a+1,u=Kg(s);n=$g(n,i.depthwise_conv,u),n=_t(n,i.pointwise_conv,[1,1]),s===11&&(e=n)}),e===null)throw new Error("mobileNetV1 - output of conv layer 11 is null");return{out:n,conv11:e}})}function Yg(r,t,e,n,o){var i=r.shape[0],a=Math.min(e,i),s=t.map(function(l,h){return{score:l,boxIndex:h}}).filter(function(l){return l.score>o}).sort(function(l,h){return h.score-l.score}),u=function(l){return l<=n?1:0},c=[];return s.forEach(function(l){if(!(c.length>=a)){for(var h=l.score,f=c.length-1;f>=0;--f){var d=Jg(r,l.boxIndex,c[f]);if(d!==0&&(l.score*=u(d),l.score<=o))break}h===l.score&&c.push(l.boxIndex)}}),c}function Jg(r,t,e){var n=r.arraySync(),o=Math.min(n[t][0],n[t][2]),i=Math.min(n[t][1],n[t][3]),a=Math.max(n[t][0],n[t][2]),s=Math.max(n[t][1],n[t][3]),u=Math.min(n[e][0],n[e][2]),c=Math.min(n[e][1],n[e][3]),l=Math.max(n[e][0],n[e][2]),h=Math.max(n[e][1],n[e][3]),f=(a-o)*(s-i),d=(l-u)*(h-c);if(f<=0||d<=0)return 0;var p=Math.max(o,u),v=Math.max(i,c),m=Math.min(a,l),g=Math.min(s,h),y=Math.max(m-p,0)*Math.max(g-v,0);return y/(f+d-y)}function Qg(r){var t=Pe(sn(r,[1,0])),e=[Oe(t[2],t[0]),Oe(t[3],t[1])],n=[ue(t[0],pt(e[0],q(2))),ue(t[1],pt(e[1],q(2)))];return{sizes:e,centers:n}}function Zg(r,t){var e=Qg(r),n=e.sizes,o=e.centers,i=Pe(sn(t,[1,0])),a=pt(Xe(Ci(pt(i[2],q(5))),n[0]),q(2)),s=ue(Xe(pt(i[0],q(10)),n[0]),o[0]),u=pt(Xe(Ci(pt(i[3],q(5))),n[1]),q(2)),c=ue(Xe(pt(i[1],q(10)),n[1]),o[1]);return sn(ut([Oe(s,a),Oe(c,u),ue(s,a),ue(c,u)]),[1,0])}function ey(r,t,e){return $(function(){var n=r.shape[0],o=Zg(vt(Ln(e.extra_dim,[n,1,1]),[-1,4]),vt(r,[-1,4]));o=vt(o,[n,o.shape[0]/n,4]);var i=Ou(Ft(t,[0,0,1],[-1,-1,-1])),a=Ft(i,[0,0,0],[-1,-1,1]);a=vt(a,[n,a.shape[1]]);var s=Pe(o),u=Pe(a);return{boxes:s,scores:u}})}function Fn(r,t){return $(function(){var e=r.shape[0],n=vt(mt(r,t.box_encoding_predictor),[e,-1,1,4]),o=vt(mt(r,t.class_predictor),[e,-1,3]);return{boxPredictionEncoding:n,classPrediction:o}})}function ty(r,t,e){return $(function(){var n=_t(r,e.conv_0,[1,1]),o=_t(n,e.conv_1,[2,2]),i=_t(o,e.conv_2,[1,1]),a=_t(i,e.conv_3,[2,2]),s=_t(a,e.conv_4,[1,1]),u=_t(s,e.conv_5,[2,2]),c=_t(u,e.conv_6,[1,1]),l=_t(c,e.conv_7,[2,2]),h=Fn(t,e.box_predictor_0),f=Fn(r,e.box_predictor_1),d=Fn(o,e.box_predictor_2),p=Fn(a,e.box_predictor_3),v=Fn(u,e.box_predictor_4),m=Fn(l,e.box_predictor_5),g=Ne([h.boxPredictionEncoding,f.boxPredictionEncoding,d.boxPredictionEncoding,p.boxPredictionEncoding,v.boxPredictionEncoding,m.boxPredictionEncoding],1),y=Ne([h.classPrediction,f.classPrediction,d.classPrediction,p.classPrediction,v.classPrediction,m.classPrediction],1);return{boxPredictions:g,classPredictions:y}})}var Io=function(){function r(t){var e=t===void 0?{}:t,n=e.minConfidence,o=e.maxResults;if(this._name="SsdMobilenetv1Options",this._minConfidence=n||.5,this._maxResults=o||100,typeof this._minConfidence!="number"||this._minConfidence<=0||this._minConfidence>=1)throw new Error(this._name+" - expected minConfidence to be a number between 0 and 1");if(typeof this._maxResults!="number")throw new Error(this._name+" - expected maxResults to be a number")}return Object.defineProperty(r.prototype,"minConfidence",{get:function(){return this._minConfidence},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"maxResults",{get:function(){return this._maxResults},enumerable:!0,configurable:!0}),r}(),Xc=function(r){re(t,r);function t(){return r.call(this,"SsdMobilenetv1")||this}return t.prototype.forwardInput=function(e){var n=this.params;if(!n)throw new Error("SsdMobilenetv1 - load model before inference");return $(function(){var o=e.toBatchTensor(512,!1).toFloat(),i=Oe(Xe(o,q(.007843137718737125)),q(1)),a=Xg(i,n.mobilenetv1),s=ty(a.out,a.conv11,n.prediction_layer),u=s.boxPredictions,c=s.classPredictions;return ey(u,c,n.output_layer)})},t.prototype.forward=function(e){return Q(this,void 0,void 0,function(){var n;return Z(this,function(o){switch(o.label){case 0:return n=this.forwardInput,[4,Ve(e)];case 1:return[2,n.apply(this,[o.sent()])]}})})},t.prototype.locateFaces=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o,i,a,s,u,c,l,h,f,d,p,v,m,g,y,b,x,w,C,R,k;return Z(this,function(I){switch(I.label){case 0:return o=new Io(n),i=o.maxResults,a=o.minConfidence,[4,Ve(e)];case 1:for(s=I.sent(),u=this.forwardInput(s),c=u.boxes,l=u.scores,h=c[0],f=l[0],d=1;d<c.length;d++)c[d].dispose(),l[d].dispose();return m=(v=Array).from,[4,f.data()];case 2:return p=m.apply(v,[I.sent()]),g=.5,y=Yg(h,p,i,g,a),b=s.getReshapedInputDimensions(0),x=s.inputSize,w=x/b.width,C=x/b.height,R=h.arraySync(),k=y.map(function(A){var F=[Math.max(0,R[A][0]),Math.min(1,R[A][2])].map(function(V){return V*C}),D=F[0],L=F[1],O=[Math.max(0,R[A][1]),Math.min(1,R[A][3])].map(function(V){return V*w}),B=O[0],z=O[1];return new ct(p[A],new la(B,D,z-B,L-D),{height:s.getInputHeight(0),width:s.getInputWidth(0)})}),h.dispose(),f.dispose(),[2,k]}})})},t.prototype.getDefaultModelName=function(){return"ssd_mobilenetv1_model"},t.prototype.extractParamsFromWeigthMap=function(e){return qg(e)},t.prototype.extractParams=function(e){return Gg(e)},t}($t);(function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t})(Xc);var ny=.4,ry=[new me(.738768,.874946),new me(2.42204,2.65704),new me(4.30971,7.04493),new me(10.246,4.59428),new me(12.6868,11.8741)],oy=[new me(1.603231,2.094468),new me(6.041143,7.080126),new me(2.882459,3.518061),new me(4.266906,5.178857),new me(9.041765,10.66308)],iy=[117.001,114.697,97.404],ay="tiny_yolov2_model",sy="tiny_yolov2_separable_conv_model",Br=function(r){return typeof r=="number"};function uy(r){if(!r)throw new Error("invalid config: "+r);if(typeof r.withSeparableConvs!="boolean")throw new Error("config.withSeparableConvs has to be a boolean, have: "+r.withSeparableConvs);if(!Br(r.iouThreshold)||r.iouThreshold<0||r.iouThreshold>1)throw new Error("config.iouThreshold has to be a number between [0, 1], have: "+r.iouThreshold);if(!Array.isArray(r.classes)||!r.classes.length||!r.classes.every(function(t){return typeof t=="string"}))throw new Error("config.classes has to be an array class names: string[], have: "+JSON.stringify(r.classes));if(!Array.isArray(r.anchors)||!r.anchors.length||!r.anchors.map(function(t){return t||{}}).every(function(t){return Br(t.x)&&Br(t.y)}))throw new Error("config.anchors has to be an array of { x: number, y: number }, have: "+JSON.stringify(r.anchors));if(r.meanRgb&&(!Array.isArray(r.meanRgb)||r.meanRgb.length!==3||!r.meanRgb.every(Br)))throw new Error("config.meanRgb has to be an array of shape [number, number, number], have: "+JSON.stringify(r.meanRgb))}function Ca(r){return $(function(){var t=Xe(r,q(.10000000149011612));return ue(Ie(Oe(r,t)),t)})}function Jt(r,t){return $(function(){var e=Cn(r,[[0,0],[1,1],[1,1],[0,0]]);return e=dt(e,t.conv.filters,[1,1],"valid"),e=Oe(e,t.bn.sub),e=Xe(e,t.bn.truediv),e=ue(e,t.conv.bias),Ca(e)})}function Qt(r,t){return $(function(){var e=Cn(r,[[0,0],[1,1],[1,1],[0,0]]);return e=Yi(e,t.depthwise_filter,t.pointwise_filter,[1,1],"valid"),e=ue(e,t.bias),Ca(e)})}function cy(r,t){var e=_o(r,t);function n(a,s){var u=Te(r(a)),c=Te(r(a));return t.push({paramPath:s+"/sub"},{paramPath:s+"/truediv"}),{sub:u,truediv:c}}function o(a,s,u){var c=e(a,s,3,u+"/conv"),l=n(s,u+"/bn");return{conv:c,bn:l}}var i=ga(r,t);return{extractConvParams:e,extractConvWithBatchNormParams:o,extractSeparableConvParams:i}}function ly(r,t,e,n){var o=Xt(r),i=o.extractWeights,a=o.getRemainingWeights,s=[],u=cy(i,s),c=u.extractConvParams,l=u.extractConvWithBatchNormParams,h=u.extractSeparableConvParams,f;if(t.withSeparableConvs){var d=n[0],p=n[1],v=n[2],m=n[3],g=n[4],y=n[5],b=n[6],x=n[7],w=n[8],C=t.isFirstLayerConv2d?c(d,p,3,"conv0"):h(d,p,"conv0"),R=h(p,v,"conv1"),k=h(v,m,"conv2"),I=h(m,g,"conv3"),A=h(g,y,"conv4"),F=h(y,b,"conv5"),D=x?h(b,x,"conv6"):void 0,L=w?h(x,w,"conv7"):void 0,O=c(w||x||b,5*e,1,"conv8");f={conv0:C,conv1:R,conv2:k,conv3:I,conv4:A,conv5:F,conv6:D,conv7:L,conv8:O}}else{var d=n[0],p=n[1],v=n[2],m=n[3],g=n[4],y=n[5],b=n[6],x=n[7],w=n[8],C=l(d,p,"conv0"),R=l(p,v,"conv1"),k=l(v,m,"conv2"),I=l(m,g,"conv3"),A=l(g,y,"conv4"),F=l(y,b,"conv5"),D=l(b,x,"conv6"),L=l(x,w,"conv7"),O=c(w,5*e,1,"conv8");f={conv0:C,conv1:R,conv2:k,conv3:I,conv4:A,conv5:F,conv6:D,conv7:L,conv8:O}}if(a().length!==0)throw new Error("weights remaing after extract: "+a().length);return{params:f,paramMappings:s}}function hy(r,t){var e=ln(r,t);function n(s){var u=e(s+"/sub",1),c=e(s+"/truediv",1);return{sub:u,truediv:c}}function o(s){var u=e(s+"/filters",4),c=e(s+"/bias",1);return{filters:u,bias:c}}function i(s){var u=o(s+"/conv"),c=n(s+"/bn");return{conv:u,bn:c}}var a=ya(e);return{extractConvParams:o,extractConvWithBatchNormParams:i,extractSeparableConvParams:a}}function fy(r,t){var e=[],n=hy(r,e),o=n.extractConvParams,i=n.extractConvWithBatchNormParams,a=n.extractSeparableConvParams,s;if(t.withSeparableConvs){var u=t.filterSizes&&t.filterSizes.length||9;s={conv0:t.isFirstLayerConv2d?o("conv0"):a("conv0"),conv1:a("conv1"),conv2:a("conv2"),conv3:a("conv3"),conv4:a("conv4"),conv5:a("conv5"),conv6:u>7?a("conv6"):void 0,conv7:u>8?a("conv7"):void 0,conv8:o("conv8")}}else s={conv0:i("conv0"),conv1:i("conv1"),conv2:i("conv2"),conv3:i("conv3"),conv4:i("conv4"),conv5:i("conv5"),conv6:i("conv6"),conv7:i("conv7"),conv8:o("conv8")};return Kt(r,e),{params:s,paramMappings:e}}var Bs;(function(r){r[r.XS=224]="XS",r[r.SM=320]="SM",r[r.MD=416]="MD",r[r.LG=608]="LG"})(Bs||(Bs={}));var _a=function(){function r(t){var e=t===void 0?{}:t,n=e.inputSize,o=e.scoreThreshold;if(this._name="TinyYolov2Options",this._inputSize=n||416,this._scoreThreshold=o||.5,typeof this._inputSize!="number"||this._inputSize%32!==0)throw new Error(this._name+" - expected inputSize to be a number divisible by 32");if(typeof this._scoreThreshold!="number"||this._scoreThreshold<=0||this._scoreThreshold>=1)throw new Error(this._name+" - expected scoreThreshold to be a number between 0 and 1")}return Object.defineProperty(r.prototype,"inputSize",{get:function(){return this._inputSize},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scoreThreshold",{get:function(){return this._scoreThreshold},enumerable:!0,configurable:!0}),r}(),Yc=function(r){re(t,r);function t(e){var n=r.call(this,"TinyYolov2")||this;return uy(e),n._config=e,n}return Object.defineProperty(t.prototype,"config",{get:function(){return this._config},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"withClassScores",{get:function(){return this.config.withClassScores||this.config.classes.length>1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"boxEncodingSize",{get:function(){return 5+(this.withClassScores?this.config.classes.length:0)},enumerable:!0,configurable:!0}),t.prototype.runTinyYolov2=function(e,n){var o=Jt(e,n.conv0);return o=Le(o,[2,2],[2,2],"same"),o=Jt(o,n.conv1),o=Le(o,[2,2],[2,2],"same"),o=Jt(o,n.conv2),o=Le(o,[2,2],[2,2],"same"),o=Jt(o,n.conv3),o=Le(o,[2,2],[2,2],"same"),o=Jt(o,n.conv4),o=Le(o,[2,2],[2,2],"same"),o=Jt(o,n.conv5),o=Le(o,[2,2],[1,1],"same"),o=Jt(o,n.conv6),o=Jt(o,n.conv7),mt(o,n.conv8,"valid",!1)},t.prototype.runMobilenet=function(e,n){var o=this.config.isFirstLayerConv2d?Ca(mt(e,n.conv0,"valid",!1)):Qt(e,n.conv0);return o=Le(o,[2,2],[2,2],"same"),o=Qt(o,n.conv1),o=Le(o,[2,2],[2,2],"same"),o=Qt(o,n.conv2),o=Le(o,[2,2],[2,2],"same"),o=Qt(o,n.conv3),o=Le(o,[2,2],[2,2],"same"),o=Qt(o,n.conv4),o=Le(o,[2,2],[2,2],"same"),o=Qt(o,n.conv5),o=Le(o,[2,2],[1,1],"same"),o=n.conv6?Qt(o,n.conv6):o,o=n.conv7?Qt(o,n.conv7):o,mt(o,n.conv8,"valid",!1)},t.prototype.forwardInput=function(e,n){var o=this,i=this.params;if(!i)throw new Error("TinyYolov2 - load model before inference");return $(function(){var a=e.toBatchTensor(n,!1).toFloat();return a=o.config.meanRgb?_r(a,o.config.meanRgb):a,a=a.div(q(256)),o.config.withSeparableConvs?o.runMobilenet(a,i):o.runTinyYolov2(a,i)})},t.prototype.forward=function(e,n){return Q(this,void 0,void 0,function(){var o;return Z(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,Ve(e)];case 1:return[4,o.apply(this,[i.sent(),n])];case 2:return[2,i.sent()]}})})},t.prototype.detect=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o,i,a,s,u,c,l,h,f,d,p,v,m,g,y=this;return Z(this,function(b){switch(b.label){case 0:return o=new _a(n),i=o.inputSize,a=o.scoreThreshold,[4,Ve(e)];case 1:return s=b.sent(),[4,this.forwardInput(s,i)];case 2:return u=b.sent(),c=$(function(){return Pe(u)[0].expandDims()}),l={width:s.getInputWidth(0),height:s.getInputHeight(0)},[4,this.extractBoxes(c,s.getReshapedInputDimensions(0),a)];case 3:return h=b.sent(),u.dispose(),c.dispose(),f=h.map(function(x){return x.box}),d=h.map(function(x){return x.score}),p=h.map(function(x){return x.classScore}),v=h.map(function(x){return y.config.classes[x.label]}),m=hr(f.map(function(x){return x.rescale(i)}),d,this.config.iouThreshold,!0),g=m.map(function(x){return new bc(d[x],p[x],v[x],f[x],l)}),[2,g]}})})},t.prototype.getDefaultModelName=function(){return""},t.prototype.extractParamsFromWeigthMap=function(e){return fy(e,this.config)},t.prototype.extractParams=function(e){var n=this.config.filterSizes||t.DEFAULT_FILTER_SIZES,o=n?n.length:void 0;if(o!==7&&o!==8&&o!==9)throw new Error("TinyYolov2 - expected 7 | 8 | 9 convolutional filters, but found "+o+" filterSizes in config");return ly(e,this.config,this.boxEncodingSize,n)},t.prototype.extractBoxes=function(e,n,o){return Q(this,void 0,void 0,function(){var i,a,s,u,c,l,h,f,d,p,v,m,g,y,b,x,w,C,R,k,I,A,F,D,L,O,B,z,V,W=this;return Z(this,function(G){switch(G.label){case 0:return i=n.width,a=n.height,s=Math.max(i,a),u=s/i,c=s/a,l=e.shape[1],h=this.config.anchors.length,f=$(function(){var H=e.reshape([l,l,h,W.boxEncodingSize]),j=H.slice([0,0,0,0],[l,l,h,4]),ee=H.slice([0,0,0,4],[l,l,h,1]),te=W.withClassScores?qt(H.slice([0,0,0,5],[l,l,h,W.config.classes.length]),3):q(0);return[j,ee,te]}),d=f[0],p=f[1],v=f[2],m=[],[4,p.array()];case 1:return g=G.sent(),[4,d.array()];case 2:y=G.sent(),b=0,G.label=3;case 3:if(!(b<l))return[3,12];x=0,G.label=4;case 4:if(!(x<l))return[3,11];w=0,G.label=5;case 5:return w<h?(C=ni(g[b][x][w][0]),!o||C>o?(R=(x+ni(y[b][x][w][0]))/l*u,k=(b+ni(y[b][x][w][1]))/l*c,I=Math.exp(y[b][x][w][2])*this.config.anchors[w].x/l*u,A=Math.exp(y[b][x][w][3])*this.config.anchors[w].y/l*c,F=R-I/2,D=k-A/2,L={row:b,col:x,anchor:w},this.withClassScores?[4,this.extractPredictedClass(v,L)]:[3,7]):[3,9]):[3,10];case 6:return V=G.sent(),[3,8];case 7:V={classScore:1,label:0},G.label=8;case 8:O=V,B=O.classScore,z=O.label,m.push(je({box:new bo(F,D,F+I,D+A),score:C,classScore:C*B,label:z},L)),G.label=9;case 9:return w++,[3,5];case 10:return x++,[3,4];case 11:return b++,[3,3];case 12:return d.dispose(),p.dispose(),v.dispose(),[2,m]}})})},t.prototype.extractPredictedClass=function(e,n){return Q(this,void 0,void 0,function(){var o,i,a,s;return Z(this,function(u){switch(u.label){case 0:return o=n.row,i=n.col,a=n.anchor,[4,e.array()];case 1:return s=u.sent(),[2,Array(this.config.classes.length).fill(0).map(function(c,l){return s[o][i][a][l]}).map(function(c,l){return{classScore:c,label:l}}).reduce(function(c,l){return c.classScore>l.classScore?c:l})]}})})},t.DEFAULT_FILTER_SIZES=[3,16,32,64,128,256,512,1024,1024],t}($t),dy=function(r){re(t,r);function t(e){e===void 0&&(e=!0);var n=this,o=Object.assign({},{withSeparableConvs:e,iouThreshold:ny,classes:["face"]},e?{anchors:oy,meanRgb:iy}:{anchors:ry,withClassScores:!0});return n=r.call(this,o)||this,n}return Object.defineProperty(t.prototype,"withSeparableConvs",{get:function(){return this.config.withSeparableConvs},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,n){return Q(this,void 0,void 0,function(){var o;return Z(this,function(i){switch(i.label){case 0:return[4,this.detect(e,n)];case 1:return o=i.sent(),[2,o.map(function(a){return new ct(a.score,a.relativeBox,{width:a.imageWidth,height:a.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return this.withSeparableConvs?sy:ay},t.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},t}(Yc),Jc=function(r){re(t,r);function t(){var e=r!==null&&r.apply(this,arguments)||this;return e._name="TinyFaceDetectorOptions",e}return t}(_a),Er=function(){function r(){}return r.prototype.then=function(t){return Q(this,void 0,void 0,function(){var e;return Z(this,function(n){switch(n.label){case 0:return e=t,[4,this.run()];case 1:return[2,e.apply(void 0,[n.sent()])]}})})},r.prototype.run=function(){return Q(this,void 0,void 0,function(){return Z(this,function(t){throw new Error("ComposableTask - run is not implemented")})})},r}();function Ao(r,t,e,n,o){return o===void 0&&(o=function(i){var a=i.alignedRect;return a}),Q(this,void 0,void 0,function(){var i,a,s,u,c;return Z(this,function(l){switch(l.label){case 0:return i=r.map(function(h){return ba(h)?o(h):h.detection}),s=n,s?[3,5]:t instanceof Ee?[4,va(t,i)]:[3,2];case 1:return u=l.sent(),[3,4];case 2:return[4,pa(t,i)];case 3:u=l.sent(),l.label=4;case 4:s=u,l.label=5;case 5:return a=s,[4,e(a)];case 6:return c=l.sent(),a.forEach(function(h){return h instanceof Ee&&h.dispose()}),[2,c]}})})}function Ea(r,t,e,n,o){return Q(this,void 0,void 0,function(){var i=this;return Z(this,function(a){return[2,Ao([r],t,function(s){return Q(i,void 0,void 0,function(){return Z(this,function(u){return[2,e(s[0])]})})},n,o)]})})}function py(r){return $(function(){return ut(Pe(r,3).reverse(),3)})}var Lr=2,so=12;function vy(r,t){var e=_o(r,t),n=ma(r,t);function o(c,l){var h=Te(r(c));return t.push({paramPath:l}),h}function i(c,l,h){h===void 0&&(h=!1);var f=e(c[0],c[1],3,l+"/conv1"),d=o(c[1],l+"/prelu1_alpha"),p=e(c[1],c[2],3,l+"/conv2"),v=o(c[2],l+"/prelu2_alpha"),m=e(c[2],c[3],h?2:3,l+"/conv3"),g=o(c[3],l+"/prelu3_alpha");return{conv1:f,prelu1_alpha:d,conv2:p,prelu2_alpha:v,conv3:m,prelu3_alpha:g}}function a(){var c=i([3,10,16,32],"pnet"),l=e(32,2,1,"pnet/conv4_1"),h=e(32,4,1,"pnet/conv4_2");return je(je({},c),{conv4_1:l,conv4_2:h})}function s(){var c=i([3,28,48,64],"rnet",!0),l=n(576,128,"rnet/fc1"),h=o(128,"rnet/prelu4_alpha"),f=n(128,2,"rnet/fc2_1"),d=n(128,4,"rnet/fc2_2");return je(je({},c),{fc1:l,prelu4_alpha:h,fc2_1:f,fc2_2:d})}function u(){var c=i([3,32,64,64],"onet"),l=e(64,128,2,"onet/conv4"),h=o(128,"onet/prelu4_alpha"),f=n(1152,256,"onet/fc1"),d=o(256,"onet/prelu5_alpha"),p=n(256,2,"onet/fc2_1"),v=n(256,4,"onet/fc2_2"),m=n(256,10,"onet/fc2_3");return je(je({},c),{conv4:l,prelu4_alpha:h,fc1:f,prelu5_alpha:d,fc2_1:p,fc2_2:v,fc2_3:m})}return{extractPNetParams:a,extractRNetParams:s,extractONetParams:u}}function my(r){var t=Xt(r),e=t.extractWeights,n=t.getRemainingWeights,o=[],i=vy(e,o),a=i.extractPNetParams,s=i.extractRNetParams,u=i.extractONetParams,c=a(),l=s(),h=u();if(n().length!==0)throw new Error("weights remaing after extract: "+n().length);return{params:{pnet:c,rnet:l,onet:h},paramMappings:o}}function gy(r,t){var e=ln(r,t);function n(l){var h=e(l+"/weights",4,l+"/filters"),f=e(l+"/bias",1);return{filters:h,bias:f}}function o(l){var h=e(l+"/weights",2),f=e(l+"/bias",1);return{weights:h,bias:f}}function i(l){return e(l,1)}function a(l){var h=n(l+"/conv1"),f=i(l+"/prelu1_alpha"),d=n(l+"/conv2"),p=i(l+"/prelu2_alpha"),v=n(l+"/conv3"),m=i(l+"/prelu3_alpha");return{conv1:h,prelu1_alpha:f,conv2:d,prelu2_alpha:p,conv3:v,prelu3_alpha:m}}function s(){var l=a("pnet"),h=n("pnet/conv4_1"),f=n("pnet/conv4_2");return je(je({},l),{conv4_1:h,conv4_2:f})}function u(){var l=a("rnet"),h=o("rnet/fc1"),f=i("rnet/prelu4_alpha"),d=o("rnet/fc2_1"),p=o("rnet/fc2_2");return je(je({},l),{fc1:h,prelu4_alpha:f,fc2_1:d,fc2_2:p})}function c(){var l=a("onet"),h=n("onet/conv4"),f=i("onet/prelu4_alpha"),d=o("onet/fc1"),p=i("onet/prelu5_alpha"),v=o("onet/fc2_1"),m=o("onet/fc2_2"),g=o("onet/fc2_3");return je(je({},l),{conv4:h,prelu4_alpha:f,fc1:d,prelu5_alpha:p,fc2_1:v,fc2_2:m,fc2_3:g})}return{extractPNetParams:s,extractRNetParams:u,extractONetParams:c}}function yy(r){var t=[],e=gy(r,t),n=e.extractPNetParams,o=e.extractRNetParams,i=e.extractONetParams,a=n(),s=o(),u=i();return Kt(r,t),{params:{pnet:a,rnet:s,onet:u},paramMappings:t}}function Di(r,t){var e=t[0],n=t[1];return{height:Math.floor(e*r),width:Math.floor(n*r)}}function xy(r,t,e){for(var n=e[0],o=e[1],i=so/r,a=[],s=Math.min(n,o)*i,u=0;s>=12;)a.push(i*Math.pow(t,u)),s=s*t,u+=1;return a}var Ia=function(r){re(t,r);function t(e,n,o,i){return r.call(this,{left:e,top:n,right:o,bottom:i},!0)||this}return t}(Nt);function Qc(r){return $(function(){return Xe(Oe(r,q(127.5)),q(.0078125))})}function Gn(r,t){return $(function(){return ue(Ie(r),Xe(t,to(Ie(to(r)))))})}function Aa(r,t,e){return e===void 0&&(e=!1),$(function(){var n=mt(r,t.conv1,"valid");return n=Gn(n,t.prelu1_alpha),n=Le(n,e?[2,2]:[3,3],[2,2],"same"),n=mt(n,t.conv2,"valid"),n=Gn(n,t.prelu2_alpha),n=e?n:Le(n,[3,3],[2,2],"valid"),n=mt(n,t.conv3,"valid"),n=Gn(n,t.prelu3_alpha),n})}function by(r,t){return $(function(){var e=Aa(r,t,!0),n=mt(e,t.conv4_1,"valid"),o=lt(mo(n,3),3),i=qt(Oe(n,o),3),a=mt(e,t.conv4_2,"valid");return{prob:i,regions:a}})}function wy(r,t){return $(function(){var e=Di(t,r.shape.slice(1)),n=e.height,o=e.width,i=ta.resizeBilinear(r,[n,o]),a=Qc(i);return sn(a,[0,2,1,3])})}function Cy(r,t,e,n){for(var o=[],i=r.arraySync(),a=0;a<r.shape[0];a++)for(var s=0;s<r.shape[1];s++)i[a][s]>=n&&o.push(new me(s,a));var u=o.map(function(c){var l=new bo(Math.round((c.y*Lr+1)/e),Math.round((c.x*Lr+1)/e),Math.round((c.y*Lr+so)/e),Math.round((c.x*Lr+so)/e)),h=i[c.y][c.x],f=t.arraySync(),d=new Ia(f[c.y][c.x][0],f[c.y][c.x][1],f[c.y][c.x][2],f[c.y][c.x][3]);return{cell:l,score:h,region:d}});return u}function _y(r,t,e,n,o){o.stage1=[];var i=t.map(function(f){return $(function(){var d={scale:f},p=wy(r,f),v=Date.now(),m=by(p,n),g=m.prob,y=m.regions;d.pnet=Date.now()-v;var b=Pe(Pe(g,3)[1])[0],x=Pe(y)[0];return{scoresTensor:b,regionsTensor:x,scale:f,statsForScale:d}})}),a=i.map(function(f){var d=f.scoresTensor,p=f.regionsTensor,v=f.scale,m=f.statsForScale,g=Cy(d,p,v,e);if(d.dispose(),p.dispose(),!g.length)return o.stage1.push(m),[];var y=Date.now(),b=hr(g.map(function(x){return x.cell}),g.map(function(x){return x.score}),.5);return m.nms=Date.now()-y,m.numBoxes=b.length,o.stage1.push(m),b.map(function(x){return g[x]})}),s=a.reduce(function(f,d){return f.concat(d)},[]),u=[],c=[];if(s.length>0){var l=Date.now(),h=hr(s.map(function(f){return f.cell}),s.map(function(f){return f.score}),.7);o.stage1_nms=Date.now()-l,c=h.map(function(f){return s[f].score}),u=h.map(function(f){return s[f]}).map(function(f){var d=f.cell,p=f.region;return new bo(d.left+p.left*d.width,d.top+p.top*d.height,d.right+p.right*d.width,d.bottom+p.bottom*d.height).toSquare().round()})}return{boxes:u,scores:c}}function Zc(r,t,e){var n=e.width,o=e.height;return Q(this,void 0,void 0,function(){var i,a,s,u=this;return Z(this,function(c){switch(c.label){case 0:return i=Pt(r),[4,Promise.all(t.map(function(l){return Q(u,void 0,void 0,function(){var h,f,d,p,v,m,g,y;return Z(this,function(b){return h=l.padAtBorders(r.height,r.width),f=h.y,d=h.ey,p=h.x,v=h.ex,m=p-1,g=f-1,y=i.getImageData(m,g,v-m,d-g),[2,Ye.isNodejs()?Co(y):createImageBitmap(y)]})})}))];case 1:return a=c.sent(),s=[],a.forEach(function(l){var h=wo({width:n,height:o}),f=Pt(h);f.drawImage(l,0,0,n,o);for(var d=f.getImageData(0,0,n,o).data,p=[],v=0;v<d.length;v+=4)p.push(d[v+2]),p.push(d[v+1]),p.push(d[v]);s.push(p)}),[2,s.map(function(l){var h=$(function(){var f=sn(Je(l,[1,n,o,3]),[0,2,1,3]).toFloat();return Qc(f)});return h})]}})})}function Ey(r,t){return $(function(){var e=Aa(r,t),n=vt(e,[e.shape[0],t.fc1.weights.shape[0]]),o=kt(n,t.fc1),i=Gn(o,t.prelu4_alpha),a=kt(i,t.fc2_1),s=lt(mo(a,1),1),u=qt(Oe(a,s),1),c=kt(i,t.fc2_2),l=Pe(u,1)[1];return{scores:l,regions:c}})}function Iy(r,t,e,n,o){return Q(this,void 0,void 0,function(){var i,a,s,u,c,l,h,f,d,p,v,m,g,y;return Z(this,function(b){switch(b.label){case 0:return i=Date.now(),[4,Zc(r,t,{width:24,height:24})];case 1:return a=b.sent(),o.stage2_extractImagePatches=Date.now()-i,i=Date.now(),s=a.map(function(x){var w=Ey(x,n);return x.dispose(),w}),o.stage2_rnet=Date.now()-i,u=s.length>1?Ne(s.map(function(x){return x.scores})):s[0].scores,h=(l=Array).from,[4,u.data()];case 2:return c=h.apply(l,[b.sent()]),u.dispose(),f=c.map(function(x,w){return{score:x,idx:w}}).filter(function(x){return x.score>e}).map(function(x){var w=x.idx;return w}),d=f.map(function(x){return t[x]}),p=f.map(function(x){return c[x]}),v=[],m=[],d.length>0&&(i=Date.now(),g=hr(d,p,.7),o.stage2_nms=Date.now()-i,y=g.map(function(x){var w=s[f[x]].regions.arraySync();return new Ia(w[0][0],w[0][1],w[0][2],w[0][3])}),m=g.map(function(x){return p[x]}),v=g.map(function(x,w){return d[x].calibrate(y[w])})),s.forEach(function(x){x.regions.dispose(),x.scores.dispose()}),[2,{boxes:v,scores:m}]}})})}function Ay(r,t){return $(function(){var e=Aa(r,t);e=Le(e,[2,2],[2,2],"same"),e=mt(e,t.conv4,"valid"),e=Gn(e,t.prelu4_alpha);var n=vt(e,[e.shape[0],t.fc1.weights.shape[0]]),o=kt(n,t.fc1),i=Gn(o,t.prelu5_alpha),a=kt(i,t.fc2_1),s=lt(mo(a,1),1),u=qt(Oe(a,s),1),c=kt(i,t.fc2_2),l=kt(i,t.fc2_3),h=Pe(u,1)[1];return{scores:h,regions:c,points:l}})}function ky(r,t,e,n,o){return Q(this,void 0,void 0,function(){var i,a,s,u,c,l,h,f,d,p,v,m,g,y,b;return Z(this,function(x){switch(x.label){case 0:return i=Date.now(),[4,Zc(r,t,{width:48,height:48})];case 1:return a=x.sent(),o.stage3_extractImagePatches=Date.now()-i,i=Date.now(),s=a.map(function(w){var C=Ay(w,n);return w.dispose(),C}),o.stage3_onet=Date.now()-i,u=s.length>1?Ne(s.map(function(w){return w.scores})):s[0].scores,h=(l=Array).from,[4,u.data()];case 2:return c=h.apply(l,[x.sent()]),u.dispose(),f=c.map(function(w,C){return{score:w,idx:C}}).filter(function(w){return w.score>e}).map(function(w){var C=w.idx;return C}),d=f.map(function(w){var C=s[w].regions.arraySync();return new Ia(C[0][0],C[0][1],C[0][2],C[0][3])}),p=f.map(function(w,C){return t[w].calibrate(d[C])}),v=f.map(function(w){return c[w]}),m=[],g=[],y=[],p.length>0&&(i=Date.now(),b=hr(p,v,.7,!1),o.stage3_nms=Date.now()-i,m=b.map(function(w){return p[w]}),g=b.map(function(w){return v[w]}),y=b.map(function(w,C){return Array(5).fill(0).map(function(R,k){var I=s[w].points.arraySync();return new me(I[0][k]*(m[C].width+1)+m[C].left,I[0][k+5]*(m[C].height+1)+m[C].top)})})),s.forEach(function(w){w.regions.dispose(),w.scores.dispose(),w.points.dispose()}),[2,{boxes:m,scores:g,points:y}]}})})}var Ry=function(r){re(t,r);function t(){return r.call(this,"Mtcnn")||this}return t.prototype.load=function(e){return Q(this,void 0,void 0,function(){return Z(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.load.call(this,e)]})})},t.prototype.loadFromDisk=function(e){return Q(this,void 0,void 0,function(){return Z(this,function(n){return console.warn("mtcnn is deprecated and will be removed soon"),[2,r.prototype.loadFromDisk.call(this,e)]})})},t.prototype.forwardInput=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o,i,a,s,u,c,l,h,f,d,p,v,m,g,y,b,x,w,C,R,k;return Z(this,function(I){switch(I.label){case 0:if(o=this.params,!o)throw new Error("Mtcnn - load model before inference");if(i=e.canvases[0],!i)throw new Error("Mtcnn - inputCanvas is not defined, note that passing tensors into Mtcnn.forwardInput is not supported yet.");return a={},s=Date.now(),u=$(function(){return py(lt(sa.fromPixels(i)).toFloat())}),c=function(A){return u.dispose(),a.total=Date.now()-s,A},l=u.shape.slice(1),h=l[0],f=l[1],d=new Kc(n),p=d.minFaceSize,v=d.scaleFactor,m=d.maxNumScales,g=d.scoreThresholds,y=d.scaleSteps,b=(y||xy(p,v,[h,f])).filter(function(A){var F=Di(A,[h,f]);return Math.min(F.width,F.height)>so}).slice(0,m),a.scales=b,a.pyramid=b.map(function(A){return Di(A,[h,f])}),x=Date.now(),[4,_y(u,b,g[0],o.pnet,a)];case 1:return w=I.sent(),a.total_stage1=Date.now()-x,w.boxes.length?(a.stage2_numInputBoxes=w.boxes.length,x=Date.now(),[4,Iy(i,w.boxes,g[1],o.rnet,a)]):[2,c({results:[],stats:a})];case 2:return C=I.sent(),a.total_stage2=Date.now()-x,C.boxes.length?(a.stage3_numInputBoxes=C.boxes.length,x=Date.now(),[4,ky(i,C.boxes,g[2],o.onet,a)]):[2,c({results:[],stats:a})];case 3:return R=I.sent(),a.total_stage3=Date.now()-x,k=R.boxes.map(function(A,F){return Eo(dr({},new ct(R.scores[F],new la(A.left/f,A.top/h,A.width/f,A.height/h),{height:h,width:f})),new eg(R.points[F].map(function(D){return D.sub(new me(A.left,A.top)).div(new me(A.width,A.height))}),{width:A.width,height:A.height}))}),[2,c({results:k,stats:a})]}})})},t.prototype.forward=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o;return Z(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,Ve(e)];case 1:return[4,o.apply(this,[i.sent(),n])];case 2:return[2,i.sent().results]}})})},t.prototype.forwardWithStats=function(e,n){return n===void 0&&(n={}),Q(this,void 0,void 0,function(){var o;return Z(this,function(i){switch(i.label){case 0:return o=this.forwardInput,[4,Ve(e)];case 1:return[2,o.apply(this,[i.sent(),n])]}})})},t.prototype.getDefaultModelName=function(){return"mtcnn_model"},t.prototype.extractParamsFromWeigthMap=function(e){return yy(e)},t.prototype.extractParams=function(e){return my(e)},t}($t),Sy=.4,Dy=[new me(1.603231,2.094468),new me(6.041143,7.080126),new me(2.882459,3.518061),new me(4.266906,5.178857),new me(9.041765,10.66308)],Ty=[117.001,114.697,97.404],Fy=function(r){re(t,r);function t(){var e=this,n={withSeparableConvs:!0,iouThreshold:Sy,classes:["face"],anchors:Dy,meanRgb:Ty,isFirstLayerConv2d:!0,filterSizes:[3,16,32,64,128,256,512]};return e=r.call(this,n)||this,e}return Object.defineProperty(t.prototype,"anchors",{get:function(){return this.config.anchors},enumerable:!0,configurable:!0}),t.prototype.locateFaces=function(e,n){return Q(this,void 0,void 0,function(){var o;return Z(this,function(i){switch(i.label){case 0:return[4,this.detect(e,n)];case 1:return o=i.sent(),[2,o.map(function(a){return new ct(a.score,a.relativeBox,{width:a.imageWidth,height:a.imageHeight})})]}})})},t.prototype.getDefaultModelName=function(){return"tiny_face_detector_model"},t.prototype.extractParamsFromWeigthMap=function(e){return r.prototype.extractParamsFromWeigthMap.call(this,e)},t}(Yc),He={ssdMobilenetv1:new Xc,tinyFaceDetector:new Fy,tinyYolov2:new dy,mtcnn:new Ry,faceLandmark68Net:new Uc,faceLandmark68TinyNet:new Pg,faceRecognitionNet:new zg,faceExpressionNet:new mg,ageGenderNet:new Dg},el=function(r){re(t,r);function t(e,n,o){var i=r.call(this)||this;return i.parentTask=e,i.input=n,i.extractedFaces=o,i}return t}(Er),ka=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,o=this;return Z(this,function(i){switch(i.label){case 0:return[4,this.parentTask];case 1:return e=i.sent(),[4,Ao(e,this.input,function(a){return Q(o,void 0,void 0,function(){return Z(this,function(s){switch(s.label){case 0:return[4,Promise.all(a.map(function(u){return He.faceExpressionNet.predictExpressions(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=i.sent(),[2,e.map(function(a,s){return Wc(a,n[s])})]}})})},t.prototype.withAgeAndGender=function(){return new Ta(this,this.input)},t}(el),Ra=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n;return Z(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,Ea(e,this.input,function(i){return He.faceExpressionNet.predictExpressions(i)},this.extractedFaces)]:[2];case 2:return n=o.sent(),[2,Wc(e,n)]}})})},t.prototype.withAgeAndGender=function(){return new Fa(this,this.input)},t}(el),Sa=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new Na(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Ma(this,this.input)},t}(ka),Da=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withAgeAndGender=function(){return new Pa(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Oa(this,this.input)},t}(Ra),tl=function(r){re(t,r);function t(e,n,o){var i=r.call(this)||this;return i.parentTask=e,i.input=n,i.extractedFaces=o,i}return t}(Er),Ta=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,o=this;return Z(this,function(i){switch(i.label){case 0:return[4,this.parentTask];case 1:return e=i.sent(),[4,Ao(e,this.input,function(a){return Q(o,void 0,void 0,function(){return Z(this,function(s){switch(s.label){case 0:return[4,Promise.all(a.map(function(u){return He.ageGenderNet.predictAgeAndGender(u)}))];case 1:return[2,s.sent()]}})})},this.extractedFaces)];case 2:return n=i.sent(),[2,e.map(function(a,s){var u=n[s],c=u.age,l=u.gender,h=u.genderProbability;return jc($c(a,l,h),c)})]}})})},t.prototype.withFaceExpressions=function(){return new ka(this,this.input)},t}(tl),Fa=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,o,i,a;return Z(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?[4,Ea(e,this.input,function(u){return He.ageGenderNet.predictAgeAndGender(u)},this.extractedFaces)]:[2];case 2:return n=s.sent(),o=n.age,i=n.gender,a=n.genderProbability,[2,jc($c(e,i,a),o)]}})})},t.prototype.withFaceExpressions=function(){return new Ra(this,this.input)},t}(tl),Na=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new Sa(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Ma(this,this.input)},t}(Ta),Pa=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.withFaceExpressions=function(){return new Da(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Oa(this,this.input)},t}(Fa),nl=function(r){re(t,r);function t(e,n){var o=r.call(this)||this;return o.parentTask=e,o.input=n,o}return t}(Er),Ma=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n;return Z(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),[4,Ao(e,this.input,function(i){return Promise.all(i.map(function(a){return He.faceRecognitionNet.computeFaceDescriptor(a)}))},null,function(i){return i.landmarks.align(null,{useDlibAlignment:!0})})];case 2:return n=o.sent(),[2,n.map(function(i,a){return qc(e[a],i)})]}})})},t.prototype.withFaceExpressions=function(){return new Sa(this,this.input)},t.prototype.withAgeAndGender=function(){return new Na(this,this.input)},t}(nl),Oa=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n;return Z(this,function(o){switch(o.label){case 0:return[4,this.parentTask];case 1:return e=o.sent(),e?[4,Ea(e,this.input,function(i){return He.faceRecognitionNet.computeFaceDescriptor(i)},null,function(i){return i.landmarks.align(null,{useDlibAlignment:!0})})]:[2];case 2:return n=o.sent(),[2,qc(e,n)]}})})},t.prototype.withFaceExpressions=function(){return new Da(this,this.input)},t.prototype.withAgeAndGender=function(){return new Pa(this,this.input)},t}(nl),rl=function(r){re(t,r);function t(e,n,o){var i=r.call(this)||this;return i.parentTask=e,i.input=n,i.useTinyLandmarkNet=o,i}return Object.defineProperty(t.prototype,"landmarkNet",{get:function(){return this.useTinyLandmarkNet?He.faceLandmark68TinyNet:He.faceLandmark68Net},enumerable:!0,configurable:!0}),t}(Er),Ny=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,o,i,a,s=this;return Z(this,function(u){switch(u.label){case 0:return[4,this.parentTask];case 1:return e=u.sent(),n=e.map(function(c){return c.detection}),this.input instanceof Ee?[4,va(this.input,n)]:[3,3];case 2:return i=u.sent(),[3,5];case 3:return[4,pa(this.input,n)];case 4:i=u.sent(),u.label=5;case 5:return o=i,[4,Promise.all(o.map(function(c){return s.landmarkNet.detectLandmarks(c)}))];case 6:return a=u.sent(),o.forEach(function(c){return c instanceof Ee&&c.dispose()}),[2,e.map(function(c,l){return Eo(c,a[l])})]}})})},t.prototype.withFaceExpressions=function(){return new Sa(this,this.input)},t.prototype.withAgeAndGender=function(){return new Na(this,this.input)},t.prototype.withFaceDescriptors=function(){return new Ma(this,this.input)},t}(rl),Py=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,o,i,a;return Z(this,function(s){switch(s.label){case 0:return[4,this.parentTask];case 1:return e=s.sent(),e?(n=e.detection,this.input instanceof Ee?[4,va(this.input,[n])]:[3,3]):[2];case 2:return i=s.sent(),[3,5];case 3:return[4,pa(this.input,[n])];case 4:i=s.sent(),s.label=5;case 5:return o=i,[4,this.landmarkNet.detectLandmarks(o[0])];case 6:return a=s.sent(),o.forEach(function(u){return u instanceof Ee&&u.dispose()}),[2,Eo(e,a)]}})})},t.prototype.withFaceExpressions=function(){return new Da(this,this.input)},t.prototype.withAgeAndGender=function(){return new Pa(this,this.input)},t.prototype.withFaceDescriptor=function(){return new Oa(this,this.input)},t}(rl),ol=function(r){re(t,r);function t(e,n){n===void 0&&(n=new Io);var o=r.call(this)||this;return o.input=e,o.options=n,o}return t}(Er),il=function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n,o,i;return Z(this,function(a){switch(a.label){case 0:return e=this,n=e.input,o=e.options,o instanceof Kc?[4,He.mtcnn.forward(n,o)]:[3,2];case 1:return[2,a.sent().map(function(s){return s.detection})];case 2:if(i=o instanceof Jc?function(s){return He.tinyFaceDetector.locateFaces(s,o)}:o instanceof Io?function(s){return He.ssdMobilenetv1.locateFaces(s,o)}:o instanceof _a?function(s){return He.tinyYolov2.locateFaces(s,o)}:null,!i)throw new Error("detectFaces - expected options to be instance of TinyFaceDetectorOptions | SsdMobilenetv1Options | MtcnnOptions | TinyYolov2Options");return[2,i(n)]}})})},t.prototype.runAndExtendWithFaceDetections=function(){var e=this;return new Promise(function(n){return Q(e,void 0,void 0,function(){var o;return Z(this,function(i){switch(i.label){case 0:return[4,this.run()];case 1:return o=i.sent(),[2,n(o.map(function(a){return dr({},a)}))]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new Ny(this.runAndExtendWithFaceDetections(),this.input,e)},t.prototype.withFaceExpressions=function(){return new ka(this.runAndExtendWithFaceDetections(),this.input)},t.prototype.withAgeAndGender=function(){return new Ta(this.runAndExtendWithFaceDetections(),this.input)},t}(ol);(function(r){re(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.run=function(){return Q(this,void 0,void 0,function(){var e,n;return Z(this,function(o){switch(o.label){case 0:return[4,new il(this.input,this.options)];case 1:return e=o.sent(),n=e[0],e.forEach(function(i){i.score>n.score&&(n=i)}),[2,n]}})})},t.prototype.runAndExtendWithFaceDetection=function(){var e=this;return new Promise(function(n){return Q(e,void 0,void 0,function(){var o;return Z(this,function(i){switch(i.label){case 0:return[4,this.run()];case 1:return o=i.sent(),[2,n(o?dr({},o):void 0)]}})})})},t.prototype.withFaceLandmarks=function(e){return e===void 0&&(e=!1),new Py(this.runAndExtendWithFaceDetection(),this.input,e)},t.prototype.withFaceExpressions=function(){return new Ra(this.runAndExtendWithFaceDetection(),this.input)},t.prototype.withAgeAndGender=function(){return new Fa(this.runAndExtendWithFaceDetection(),this.input)},t})(ol);function My(r,t){return t===void 0&&(t=new Io),new il(r,t)}function Oy(r,t){if(r.length!==t.length)throw new Error("euclideanDistance: arr1.length !== arr2.length");var e=Array.from(r),n=Array.from(t);return Math.sqrt(e.map(function(o,i){return o-n[i]}).reduce(function(o,i){return o+Math.pow(i,2)},0))}(function(){function r(t,e){e===void 0&&(e=.6),this._distanceThreshold=e;var n=Array.isArray(t)?t:[t];if(!n.length)throw new Error("FaceRecognizer.constructor - expected atleast one input");var o=1,i=function(){return"person "+o++};this._labeledDescriptors=n.map(function(a){if(a instanceof Pr)return a;if(a instanceof Float32Array)return new Pr(i(),[a]);if(a.descriptor&&a.descriptor instanceof Float32Array)return new Pr(i(),[a.descriptor]);throw new Error("FaceRecognizer.constructor - expected inputs to be of type LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array | Array<LabeledFaceDescriptors | WithFaceDescriptor<any> | Float32Array>")})}return Object.defineProperty(r.prototype,"labeledDescriptors",{get:function(){return this._labeledDescriptors},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"distanceThreshold",{get:function(){return this._distanceThreshold},enumerable:!0,configurable:!0}),r.prototype.computeMeanDistance=function(t,e){return e.map(function(n){return Oy(n,t)}).reduce(function(n,o){return n+o},0)/(e.length||1)},r.prototype.matchDescriptor=function(t){var e=this;return this.labeledDescriptors.map(function(n){var o=n.descriptors,i=n.label;return new Ns(i,e.computeMeanDistance(t,o))}).reduce(function(n,o){return n.distance<o.distance?n:o})},r.prototype.findBestMatch=function(t){var e=this.matchDescriptor(t);return e.distance<this.distanceThreshold?e:new Ns("unknown",e.distance)},r.prototype.toJSON=function(){return{distanceThreshold:this.distanceThreshold,labeledDescriptors:this.labeledDescriptors.map(function(t){return t.toJSON()})}},r.fromJSON=function(t){var e=t.labeledDescriptors.map(function(n){return Pr.fromJSON(n)});return new r(e,t.distanceThreshold)},r})();function al(r,t){var e=new yn(t.width,t.height),n=e.width,o=e.height;if(n<=0||o<=0)throw new Error("resizeResults - invalid dimensions: "+JSON.stringify({width:n,height:o}));if(Array.isArray(r))return r.map(function(s){return al(s,{width:n,height:o})});if(ba(r)){var i=r.detection.forSize(n,o),a=r.unshiftedLandmarks.forSize(i.box.width,i.box.height);return Eo(dr(r,i),a)}return fr(r)?dr(r,r.detection.forSize(n,o)):r instanceof Kn||r instanceof ct?r.forSize(n,o):r}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */class Tt{constructor(t,e,n,o,i="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(i),this.domElement.classList.add("controller"),this.domElement.classList.add(o),this.$name=document.createElement("div"),this.$name.classList.add("name"),Tt.nextNameID=Tt.nextNameID||0,this.$name.id=`lil-gui-name-${++Tt.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",a=>a.stopPropagation()),this.domElement.addEventListener("keyup",a=>a.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class By extends Tt{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Ti(r){let t,e;return(t=r.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const Ly={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Ti,toHexString:Ti},pr={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},Wy={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,t,e=1){const n=pr.fromHexString(r);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([r,t,e],n=1){n=255/n;const o=r*n<<16^t*n<<8^e*n<<0;return pr.toHexString(o)}},Vy={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,t,e=1){const n=pr.fromHexString(r);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r,g:t,b:e},n=1){n=255/n;const o=r*n<<16^t*n<<8^e*n<<0;return pr.toHexString(o)}},zy=[Ly,pr,Wy,Vy];function Uy(r){return zy.find(t=>t.match(r))}class Gy extends Tt{constructor(t,e,n,o){super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Uy(this.initialValue),this._rgbScale=o,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const i=Ti(this.$text.value);i&&this._setValueFromHexString(i)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class ii extends Tt{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",o=>{o.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Hy extends Tt{constructor(t,e,n,o,i,a){super(t,e,n,"number"),this._initInput(),this.min(o),this.max(i);const s=a!==void 0;this.step(s?a:this._getImplicitStep(),s),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let y=parseFloat(this.$input.value);isNaN(y)||(this._stepExplicit&&(y=this._snap(y)),this.setValue(this._clamp(y)))},n=y=>{const b=parseFloat(this.$input.value);isNaN(b)||(this._snapClampSetValue(b+y),this.$input.value=this.getValue())},o=y=>{y.key==="Enter"&&this.$input.blur(),y.code==="ArrowUp"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y))),y.code==="ArrowDown"&&(y.preventDefault(),n(this._step*this._arrowKeyMultiplier(y)*-1))},i=y=>{this._inputFocused&&(y.preventDefault(),n(this._step*this._normalizeMouseWheel(y)))};let a=!1,s,u,c,l,h;const f=5,d=y=>{s=y.clientX,u=c=y.clientY,a=!0,l=this.getValue(),h=0,window.addEventListener("mousemove",p),window.addEventListener("mouseup",v)},p=y=>{if(a){const b=y.clientX-s,x=y.clientY-u;Math.abs(x)>f?(y.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(b)>f&&v()}if(!a){const b=y.clientY-c;h-=b*this._step*this._arrowKeyMultiplier(y),l+h>this._max?h=this._max-l:l+h<this._min&&(h=this._min-l),this._snapClampSetValue(l+h)}c=y.clientY},v=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",p),window.removeEventListener("mouseup",v)},m=()=>{this._inputFocused=!0},g=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",o),this.$input.addEventListener("wheel",i,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",m),this.$input.addEventListener("blur",g)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=(g,y,b,x,w)=>(g-y)/(b-y)*(w-x)+x,e=g=>{const y=this.$slider.getBoundingClientRect();let b=t(g,y.left,y.right,this._min,this._max);this._snapClampSetValue(b)},n=g=>{this._setDraggingStyle(!0),e(g.clientX),window.addEventListener("mousemove",o),window.addEventListener("mouseup",i)},o=g=>{e(g.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",i)};let a=!1,s,u;const c=g=>{g.preventDefault(),this._setDraggingStyle(!0),e(g.touches[0].clientX),a=!1},l=g=>{g.touches.length>1||(this._hasScrollBar?(s=g.touches[0].clientX,u=g.touches[0].clientY,a=!0):c(g),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",f))},h=g=>{if(a){const y=g.touches[0].clientX-s,b=g.touches[0].clientY-u;Math.abs(y)>Math.abs(b)?c(g):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f))}else g.preventDefault(),e(g.touches[0].clientX)},f=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",f)},d=this._callOnFinishChange.bind(this),p=400;let v;const m=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();const b=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+b),this.$input.value=this.getValue(),clearTimeout(v),v=setTimeout(d,p)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",l,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class qy extends Tt{constructor(t,e,n,o){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(o)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class jy extends Tt{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",o=>{o.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var $y=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Ky(r){const t=document.createElement("style");t.innerHTML=r;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Ls=!1;class Ba{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:o,title:i="Controls",closeFolders:a=!1,injectStyles:s=!0,touchStyles:u=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(i),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),u&&this.domElement.classList.add("allow-touch-styles"),!Ls&&s&&(Ky($y),Ls=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),o&&this.domElement.style.setProperty("--width",o+"px"),this._closeFolders=a}add(t,e,n,o,i){if(Object(n)===n)return new qy(this,t,e,n);const a=t[e];switch(typeof a){case"number":return new Hy(this,t,e,n,o,i);case"boolean":return new By(this,t,e);case"string":return new jy(this,t,e);case"function":return new ii(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,n=1){return new Gy(this,t,e,n)}addFolder(t){const e=new Ba({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof ii||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof ii)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=i=>{i.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const o=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=o+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const tr="/pub_web_warattehaikenai-web-mtg",Zt={w:640,h:480},ai=5*1e3,Xy=.5,Ws=.25,Yy=!0,Jy="田中",si=100,Qy=async()=>{let r=!1,t=0,e=Xy,n=Jy;const o=document.getElementById("app"),i=document.getElementById("video"),a=document.getElementById("se");a.volume=Ws;const s=new Ba;s.add({smileBorderLine:e},"smileBorderLine",.25,1,.01).name("笑顔の判定ライン").onChange(u=>{e=u}),s.add({volume:Ws},"volume",0,1,.01).name("SE のボリューム").onChange(u=>{a.volume=u}),s.add({isPlay:Yy},"isPlay").name("SE を再生する").onChange(u=>{a.muted=!u}),s.add({outUserName:n},"outUserName").name("罰ゲーム対象者").onChange(u=>{n=u}),await Promise.all([He.tinyFaceDetector.loadFromUri(`${tr}/weights`),He.faceLandmark68Net.loadFromUri(`${tr}/weights`),He.faceRecognitionNet.loadFromUri(`${tr}/weights`),He.faceExpressionNet.loadFromUri(`${tr}/weights`),He.ageGenderNet.loadFromUri(`${tr}/weights`)]).then(async()=>await navigator.mediaDevices.getUserMedia({video:{width:{ideal:Zt.w},height:{ideal:Zt.h}}})).then(u=>{i.srcObject=u}).catch(u=>{console.error(u)}),i.addEventListener("play",()=>{const u=Co(i);u.id="canvas",u.width=Zt.w,u.height=Zt.h,o.append(u);const c=u.getContext("2d");hg(u,{width:Zt.w,height:Zt.h});const l=async()=>{const h=await My(i,new Jc).withFaceLandmarks().withFaceExpressions().withAgeAndGender(),f=al(h,{width:Zt.w,height:Zt.h});if(c&&c.clearRect(0,0,u.width,u.height),og(u,f),wg(u,f),yg(u,f),r&&c){const d=`${n} OUT`;c.font="bold 48px Arial",c.textAlign="center",c.strokeStyle="white",c.lineWidth=4,c.strokeText(d,u.width/2,u.height-40),c.fillStyle="red",c.fillText(d,u.width/2,u.height-40),c.textAlign="left"}for(const d of f)new Sc(d.detection.box,{}).draw(u),d.expressions.happy>e&&(t<ai||(r=!0,t=ai,a.play())),r&&(t-=si),t<=0&&(r=!1,t=ai);setTimeout(()=>l(),si)};setTimeout(()=>l(),si)})};Qy()});export default Zy();
