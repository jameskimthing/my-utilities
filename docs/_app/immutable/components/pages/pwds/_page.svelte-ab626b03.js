import{S as ae,i as oe,s as ie,k as T,a as v,q as O,P as be,l as g,m as N,h as m,c as E,r as R,n as $,D as d,b as P,L as x,J as q,M as ve,B as W,N as Ee,Q as Ae,u as Te,w as Z,x as M,y as ee,f as te,t as se,z as re}from"../../../chunks/index-315e23ad.js";import{g as ge,s as Q,L as $e}from"../../../chunks/Link-7a54d653.js";import{_ as Pe}from"../../../chunks/preload-helper-b21cceae.js";const ne=function(){const i={argon2d:0,argon2i:1,argon2id:2};function e(t){if(e._promise)return e._promise;if(e._module)return Promise.resolve(e._module);let p=l().then(a=>new Promise(o=>{a.postRun.push(()=>o(a))}));return e._promise=p,p.then(a=>(e._module=a,delete e._promise,a))}function l(){return Pe(()=>import("../../../chunks/argon2-70c53f06.js"),[],import.meta.url).then(t=>t.default)}function n(t,p){const a=p instanceof Uint8Array||p instanceof Array?p:f(p),o=new Uint8Array([...a,0]);return t.allocate(o,"i8",t.ALLOC_NORMAL)}function f(t){if(typeof TextEncoder=="function")return new TextEncoder().encode(t);if(typeof Buffer=="function")return Buffer.from(t);throw new Error("Don't know how to decode UTF8")}function c(t){const p=t.mem||1024;return e().then(a=>{const o=t.time||1,h=t.parallelism||1,w=n(a,t.pass),A=t.pass.length,s=n(a,t.salt),u=t.salt.length,b=a.allocate(new Array(t.hashLen||24),"i8",a.ALLOC_NORMAL),C=t.hashLen||24,V=a.allocate(new Array(512),"i8",a.ALLOC_NORMAL),G=512,I=t.type||i.argon2d,J=19;let H,S;try{S=a._argon2_hash(o,p,h,w,A,s,u,b,C,V,G,I,J)}catch(U){H=U}let k;if(S===0&&!H){let U="";const F=new Uint8Array(C);for(let L=0;L<C;L++){const K=a.HEAP8[b+L];F[L]=K,U+=("0"+(255&K).toString(16)).slice(-2)}const j=a.UTF8ToString(V);k={hash:F,hashHex:U,encoded:j}}else{try{H||(H=a.UTF8ToString(a._argon2_error_message(S)))}catch{}k={message:H,code:S}}try{a._free(w),a._free(s),a._free(b),a._free(V)}catch{}if(H)throw k;return k})}function r(t){return e().then(p=>{const a=n(p,t.pass),o=t.pass.length,h=n(p,t.encoded);let w=t.type;if(w===void 0){let b=t.encoded.split("$")[1];b&&(b=b.replace("a","A"),w=i[b]||i.argon2d)}let A,s;try{s=p._argon2_verify(h,a,o,w)}catch(b){A=b}let u;if(s||A){try{A||(A=p.UTF8ToString(p._argon2_error_message(s)))}catch{}u={message:A,code:s}}try{p._free(a),p._free(h)}catch{}if(A)throw u;return u})}return{ArgonType:i,hash:c,verify:r}}();let z=null;async function _e(i=""){if(z)return z;ne||await new Promise(c=>setTimeout(c,500));const e=(await ge()).data.user,l=e==null?void 0:e.email;for(;!i;){const c=prompt("Please enter your master password","Master Password");if(!c||c==="Master Password")continue;const{error:r}=await Q.auth.signInWithPassword({password:c,email:l});r||(i=c)}let n=e==null?void 0:e.user_metadata.salt;n||(n=Se(10),await Q.auth.updateUser({data:{name:e==null?void 0:e.user_metadata.name,salt:n}}));const f=(await ne.hash({pass:l+i,salt:n,type:ne.ArgonType.Argon2id,hashLen:16,time:2,mem:1024})).hash.buffer;return z=await crypto.subtle.importKey("raw",f,{name:"AES-GCM"},!0,["decrypt","encrypt"]),z}function Se(i){let e=new Uint8Array((i||40)/2);return self.crypto.getRandomValues(e),Array.from(e,l=>l.toString(16).padStart(2,"0")).join("")}async function Le(i){const e=await _e(),l=new TextEncoder().encode(JSON.stringify(i)),n=self.crypto.getRandomValues(new Uint8Array(12)),f=await self.crypto.subtle.encrypt({name:"AES-GCM",iv:n},e,l),c=o=>[...new Uint8Array(o)].map(h=>h.toString(16).padStart(2,"0")).join(""),r=c(f),t=c(n.buffer),{data:p,error:a}=await Q.from("passwords").insert([{epds:r,iv:t}]);if(a)throw a;alert("Added password!")}async function Ue(){const i=await _e(),{data:e,error:l}=await Q.from("passwords").select("created_at,epds,iv");if(l)throw l;const n=c=>new Uint8Array(c.match(/[\da-f]{2}/gi).map(r=>parseInt(r,16))),f=[];for(let c of e){const r=n(c.epds),t=n(c.iv),p=await self.crypto.subtle.decrypt({name:"AES-GCM",iv:t},i,r),a=new TextDecoder().decode(p);f.push(a)}return f}const{document:we}=Ae;function Ne(i){let e,l,n,f,c,r,t,p,a,o,h,w,A,s,u,b,C,V,G,I,J,H,S,k,U,F,j,L,K,D,Y,X,le;return{c(){e=T("script"),l=v(),n=T("p"),f=O("Add password:"),c=v(),r=T("form"),t=T("label"),p=O("Email:"),a=v(),o=T("input"),h=v(),w=T("label"),A=O("Password:"),s=v(),u=T("input"),b=v(),C=T("button"),V=O("(show password)?"),G=v(),I=T("label"),J=O("description:"),H=v(),S=T("input"),k=v(),U=T("label"),F=O("Site: (don't need to add https://, can leave empty)"),j=v(),L=T("input"),K=v(),D=T("button"),Y=O("Submit"),this.h()},l(_){const B=be("svelte-1kwds8g",we.head);e=g(B,"SCRIPT",{});var ye=N(e);ye.forEach(m),B.forEach(m),l=E(_),n=g(_,"P",{});var pe=N(n);f=R(pe,"Add password:"),pe.forEach(m),c=E(_),r=g(_,"FORM",{});var y=N(r);t=g(y,"LABEL",{for:!0});var fe=N(t);p=R(fe,"Email:"),fe.forEach(m),a=E(y),o=g(y,"INPUT",{id:!0,type:!0,placeholder:!0}),h=E(y),w=g(y,"LABEL",{for:!0});var ce=N(w);A=R(ce,"Password:"),ce.forEach(m),s=E(y),u=g(y,"INPUT",{id:!0,type:!0,placeholder:!0}),b=E(y),C=g(y,"BUTTON",{type:!0});var ue=N(C);V=R(ue,"(show password)?"),ue.forEach(m),G=E(y),I=g(y,"LABEL",{for:!0});var de=N(I);J=R(de,"description:"),de.forEach(m),H=E(y),S=g(y,"INPUT",{type:!0,placeholder:!0}),k=E(y),U=g(y,"LABEL",{for:!0});var me=N(U);F=R(me,"Site: (don't need to add https://, can leave empty)"),me.forEach(m),j=E(y),L=g(y,"INPUT",{type:!0,placeholder:!0}),K=E(y),D=g(y,"BUTTON",{type:!0});var he=N(D);Y=R(he,"Submit"),he.forEach(m),y.forEach(m),this.h()},h(){$(t,"for","email"),$(o,"id","email"),$(o,"type","email"),$(o,"placeholder","Email"),o.required=!0,$(w,"for","password"),$(u,"id","pwd"),$(u,"type","password"),$(u,"placeholder","Password"),u.required=!0,$(C,"type","button"),$(I,"for","description"),$(S,"type","text"),$(S,"placeholder","description"),S.required=!0,$(U,"for","site"),$(L,"type","text"),$(L,"placeholder","google.com"),$(D,"type","submit")},m(_,B){d(we.head,e),P(_,l,B),P(_,n,B),d(n,f),P(_,c,B),P(_,r,B),d(r,t),d(t,p),d(r,a),d(r,o),x(o,i[0].email),d(r,h),d(r,w),d(w,A),d(r,s),d(r,u),x(u,i[0].password),d(r,b),d(r,C),d(C,V),d(r,G),d(r,I),d(I,J),d(r,H),d(r,S),x(S,i[0].description),d(r,k),d(r,U),d(U,F),d(r,j),d(r,L),x(L,i[0].site),d(r,K),d(r,D),d(D,Y),X||(le=[q(o,"input",i[2]),q(u,"input",i[3]),q(C,"click",Be),q(S,"input",i[4]),q(L,"input",i[5]),q(r,"submit",ve(i[1]))],X=!0)},p(_,[B]){B&1&&o.value!==_[0].email&&x(o,_[0].email),B&1&&u.value!==_[0].password&&x(u,_[0].password),B&1&&S.value!==_[0].description&&x(S,_[0].description),B&1&&L.value!==_[0].site&&x(L,_[0].site)},i:W,o:W,d(_){m(e),_&&m(l),_&&m(n),_&&m(c),_&&m(r),X=!1,Ee(le)}}}function Be(){const i=document.getElementById("pwd");i.type==="password"?i.type="text":i.type="password"}function Oe(i,e,l){const n={email:"",password:"",description:"",site:""};async function f(){await Le(n)}function c(){n.email=this.value,l(0,n)}function r(){n.password=this.value,l(0,n)}function t(){n.description=this.value,l(0,n)}function p(){n.site=this.value,l(0,n)}return[n,f,c,r,t,p]}class Re extends ae{constructor(e){super(),oe(this,e,Oe,Ne,ie,{})}}function Ce(i){let e,l,n,f,c,r,t,p,a;return{c(){e=T("h1"),l=O("The passwords!!!!!!!"),n=v(),f=T("button"),c=O("Show the passwords"),r=v(),t=O(i[0])},l(o){e=g(o,"H1",{});var h=N(e);l=R(h,"The passwords!!!!!!!"),h.forEach(m),n=E(o),f=g(o,"BUTTON",{});var w=N(f);c=R(w,"Show the passwords"),w.forEach(m),r=E(o),t=R(o,i[0])},m(o,h){P(o,e,h),d(e,l),P(o,n,h),P(o,f,h),d(f,c),P(o,r,h),P(o,t,h),p||(a=q(f,"click",i[1]),p=!0)},p(o,[h]){h&1&&Te(t,o[0])},i:W,o:W,d(o){o&&m(e),o&&m(n),o&&m(f),o&&m(r),o&&m(t),p=!1,a()}}}function He(i,e,l){let n="NOT HERE YET";async function f(){l(0,n=JSON.stringify(await Ue()))}return[n,f]}class Ie extends ae{constructor(e){super(),oe(this,e,He,Ce,ie,{})}}function ke(i){let e,l,n,f,c,r,t,p,a,o,h,w,A;return l=new $e({props:{to:"/"}}),t=new Re({}),w=new Ie({}),{c(){e=v(),Z(l.$$.fragment),n=v(),f=T("h1"),c=O("Passwords!"),r=v(),Z(t.$$.fragment),p=v(),a=T("h1"),o=O("See passwords:"),h=v(),Z(w.$$.fragment)},l(s){e=E(s),M(l.$$.fragment,s),n=E(s),f=g(s,"H1",{});var u=N(f);c=R(u,"Passwords!"),u.forEach(m),r=E(s),M(t.$$.fragment,s),p=E(s),a=g(s,"H1",{});var b=N(a);o=R(b,"See passwords:"),b.forEach(m),h=E(s),M(w.$$.fragment,s)},m(s,u){P(s,e,u),ee(l,s,u),P(s,n,u),P(s,f,u),d(f,c),P(s,r,u),ee(t,s,u),P(s,p,u),P(s,a,u),d(a,o),P(s,h,u),ee(w,s,u),A=!0},p:W,i(s){A||(te(l.$$.fragment,s),te(t.$$.fragment,s),te(w.$$.fragment,s),A=!0)},o(s){se(l.$$.fragment,s),se(t.$$.fragment,s),se(w.$$.fragment,s),A=!1},d(s){s&&m(e),re(l,s),s&&m(n),s&&m(f),s&&m(r),re(t,s),s&&m(p),s&&m(a),s&&m(h),re(w,s)}}}class Fe extends ae{constructor(e){super(),oe(this,e,null,ke,ie,{})}}export{Fe as default};