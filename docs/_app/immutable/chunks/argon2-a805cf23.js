import{_ as R}from"./preload-helper-9b728935.js";const F=function(){const _={argon2d:0,argon2i:1,argon2id:2};function o(t){if(o._promise)return o._promise;if(o._module)return Promise.resolve(o._module);let n=L().then(e=>new Promise(c=>{e.postRun.push(()=>c(e))}));return o._promise=n,n.then(e=>(o._module=e,delete o._promise,e))}function L(){return R(()=>import("./argon2-70c53f06.js"),[],import.meta.url).then(t=>t.default)}function y(t,n){const e=n instanceof Uint8Array||n instanceof Array?n:U(n),c=new Uint8Array([...e,0]);return t.allocate(c,"i8",t.ALLOC_NORMAL)}function U(t){if(typeof TextEncoder=="function")return new TextEncoder().encode(t);if(typeof Buffer=="function")return Buffer.from(t);throw new Error("Don't know how to decode UTF8")}function v(t){const n=t.mem||1024;return o().then(e=>{const c=t.time||1,g=t.parallelism||1,a=y(e,t.pass),s=t.pass.length,i=y(e,t.salt),l=t.salt.length,r=e.allocate(new Array(t.hashLen||24),"i8",e.ALLOC_NORMAL),A=t.hashLen||24,u=e.allocate(new Array(512),"i8",e.ALLOC_NORMAL),x=512,E=t.type||_.argon2d,C=19;let f,d;try{d=e._argon2_hash(c,n,g,a,s,i,l,r,A,u,x,E,C)}catch(h){f=h}let p;if(d===0&&!f){let h="";const w=new Uint8Array(A);for(let m=0;m<A;m++){const T=e.HEAP8[r+m];w[m]=T,h+=("0"+(255&T).toString(16)).slice(-2)}const P=e.UTF8ToString(u);p={hash:w,hashHex:h,encoded:P}}else{try{f||(f=e.UTF8ToString(e._argon2_error_message(d)))}catch{}p={message:f,code:d}}try{e._free(a),e._free(i),e._free(r),e._free(u)}catch{}if(f)throw p;return p})}function S(t){return o().then(n=>{const e=y(n,t.pass),c=t.pass.length,g=y(n,t.encoded);let a=t.type;if(a===void 0){let r=t.encoded.split("$")[1];r&&(r=r.replace("a","A"),a=_[r]||_.argon2d)}let s,i;try{i=n._argon2_verify(g,e,c,a)}catch(r){s=r}let l;if(i||s){try{s||(s=n.UTF8ToString(n._argon2_error_message(i)))}catch{}l={message:s,code:i}}try{n._free(e),n._free(g)}catch{}if(s)throw l;return l})}return{ArgonType:_,hash:v,verify:S}}(),{ArgonType:H,hash:N,verify:B}=F;export{H as ArgonType,F as default,N as hash,B as verify};