import{S as Q,i as Z,s as tt,k as _,a as v,q as T,a0 as yt,l as y,m as S,h as p,c as E,r as A,n as b,K as l,b as P,X as N,L as O,Y as bt,B as q,P as vt,a1 as Et,u as Pt,w as pt,x as ut,y as dt,f as ft,t as ct,z as mt}from"../../../chunks/index-74e6ecb3.js";import{s as M}from"../../../chunks/supabase-21b9380c.js";import{_ as St}from"../../../chunks/preload-helper-9b728935.js";let C=null;async function ht(n=""){if(C)return C;const r=await St(()=>import("../../../chunks/argon2-a805cf23.js"),["..\\..\\..\\chunks\\argon2-a805cf23.js","..\\..\\..\\chunks\\preload-helper-9b728935.js"],import.meta.url),o=(await M.auth.getUser()).data.user,s=o==null?void 0:o.email;for(;!n;){const t=prompt("Please enter your master password","Master Password");if(!t||t==="Master Password")continue;const{error:d}=await M.auth.signInWithPassword({password:t,email:s});d||(n=t)}let i=o==null?void 0:o.user_metadata.salt;i||(i=$t(10),await M.auth.updateUser({data:{name:o==null?void 0:o.user_metadata.name,salt:i}}));const u=(await r.hash({pass:s+n,salt:i,type:r.ArgonType.Argon2id,hashLen:16,time:2,mem:1024})).hash.buffer;return C=await crypto.subtle.importKey("raw",u,{name:"AES-GCM"},!0,["decrypt","encrypt"]),C}function $t(n){let r=new Uint8Array((n||40)/2);return self.crypto.getRandomValues(r),Array.from(r,o=>o.toString(16).padStart(2,"0")).join("")}async function Tt(n){const r=await ht(),o=new TextEncoder().encode(JSON.stringify(n)),s=self.crypto.getRandomValues(new Uint8Array(12)),i=await self.crypto.subtle.encrypt({name:"AES-GCM",iv:s},r,o),u=a=>[...new Uint8Array(a)].map(e=>e.toString(16).padStart(2,"0")).join(""),t=u(i),d=u(s.buffer),{data:h,error:w}=await M.from("passwords").insert([{epds:t,iv:d}]);if(w)throw w;alert("Added password!")}async function At(){const n=await ht(),{data:r,error:o}=await M.from("passwords").select("created_at,epds,iv");if(o)throw o;const s=u=>new Uint8Array(u.match(/[\da-f]{2}/gi).map(t=>parseInt(t,16))),i=[];for(let u of r){const t=s(u.epds),d=s(u.iv),h=await self.crypto.subtle.decrypt({name:"AES-GCM",iv:d},n,t),w=new TextDecoder().decode(h);i.push(w)}return i}const{document:wt}=Et;function Ut(n){let r,o,s,i,u,t,d,h,w,a,e,c,R,V,U,k,I,G,j,g,x,D,L,J,H,Y,z,B,F,K,W,X,et;return{c(){r=_("script"),o=v(),s=_("p"),i=T("Add password:"),u=v(),t=_("form"),d=_("label"),h=T("Email:"),w=v(),a=_("input"),e=v(),c=_("label"),R=T("Password:"),V=v(),U=_("input"),k=v(),I=_("button"),G=T("(show password)?"),j=v(),g=_("label"),x=T("description:"),D=v(),L=_("input"),J=v(),H=_("label"),Y=T("Site: (don't need to add https://, can leave empty)"),z=v(),B=_("input"),F=v(),K=_("button"),W=T("Submit"),this.h()},l(f){const $=yt("svelte-1kwds8g",wt.head);r=y($,"SCRIPT",{});var _t=S(r);_t.forEach(p),$.forEach(p),o=E(f),s=y(f,"P",{});var st=S(s);i=A(st,"Add password:"),st.forEach(p),u=E(f),t=y(f,"FORM",{});var m=S(t);d=y(m,"LABEL",{for:!0});var at=S(d);h=A(at,"Email:"),at.forEach(p),w=E(m),a=y(m,"INPUT",{id:!0,type:!0,placeholder:!0}),e=E(m),c=y(m,"LABEL",{for:!0});var rt=S(c);R=A(rt,"Password:"),rt.forEach(p),V=E(m),U=y(m,"INPUT",{id:!0,type:!0,placeholder:!0}),k=E(m),I=y(m,"BUTTON",{type:!0});var ot=S(I);G=A(ot,"(show password)?"),ot.forEach(p),j=E(m),g=y(m,"LABEL",{for:!0});var nt=S(g);x=A(nt,"description:"),nt.forEach(p),D=E(m),L=y(m,"INPUT",{type:!0,placeholder:!0}),J=E(m),H=y(m,"LABEL",{for:!0});var it=S(H);Y=A(it,"Site: (don't need to add https://, can leave empty)"),it.forEach(p),z=E(m),B=y(m,"INPUT",{type:!0,placeholder:!0}),F=E(m),K=y(m,"BUTTON",{type:!0});var lt=S(K);W=A(lt,"Submit"),lt.forEach(p),m.forEach(p),this.h()},h(){b(d,"for","email"),b(a,"id","email"),b(a,"type","email"),b(a,"placeholder","Email"),a.required=!0,b(c,"for","password"),b(U,"id","pwd"),b(U,"type","password"),b(U,"placeholder","Password"),U.required=!0,b(I,"type","button"),b(g,"for","description"),b(L,"type","text"),b(L,"placeholder","description"),L.required=!0,b(H,"for","site"),b(B,"type","text"),b(B,"placeholder","google.com"),b(K,"type","submit")},m(f,$){l(wt.head,r),P(f,o,$),P(f,s,$),l(s,i),P(f,u,$),P(f,t,$),l(t,d),l(d,h),l(t,w),l(t,a),N(a,n[0].email),l(t,e),l(t,c),l(c,R),l(t,V),l(t,U),N(U,n[0].password),l(t,k),l(t,I),l(I,G),l(t,j),l(t,g),l(g,x),l(t,D),l(t,L),N(L,n[0].description),l(t,J),l(t,H),l(H,Y),l(t,z),l(t,B),N(B,n[0].site),l(t,F),l(t,K),l(K,W),X||(et=[O(a,"input",n[2]),O(U,"input",n[3]),O(I,"click",Lt),O(L,"input",n[4]),O(B,"input",n[5]),O(t,"submit",bt(n[1]))],X=!0)},p(f,[$]){$&1&&a.value!==f[0].email&&N(a,f[0].email),$&1&&U.value!==f[0].password&&N(U,f[0].password),$&1&&L.value!==f[0].description&&N(L,f[0].description),$&1&&B.value!==f[0].site&&N(B,f[0].site)},i:q,o:q,d(f){p(r),f&&p(o),f&&p(s),f&&p(u),f&&p(t),X=!1,vt(et)}}}function Lt(){const n=document.getElementById("pwd");n.type==="password"?n.type="text":n.type="password"}function Bt(n,r,o){const s={email:"",password:"",description:"",site:""},i=async()=>await Tt(s);function u(){s.email=this.value,o(0,s)}function t(){s.password=this.value,o(0,s)}function d(){s.description=this.value,o(0,s)}function h(){s.site=this.value,o(0,s)}return[s,i,u,t,d,h]}class Nt extends Q{constructor(r){super(),Z(this,r,Bt,Ut,tt,{})}}function It(n){let r,o,s,i,u,t,d,h,w;return{c(){r=_("h1"),o=T("The passwords!!!!!!!"),s=v(),i=_("button"),u=T("Show the passwords"),t=v(),d=T(n[0])},l(a){r=y(a,"H1",{});var e=S(r);o=A(e,"The passwords!!!!!!!"),e.forEach(p),s=E(a),i=y(a,"BUTTON",{});var c=S(i);u=A(c,"Show the passwords"),c.forEach(p),t=E(a),d=A(a,n[0])},m(a,e){P(a,r,e),l(r,o),P(a,s,e),P(a,i,e),l(i,u),P(a,t,e),P(a,d,e),h||(w=O(i,"click",n[1]),h=!0)},p(a,[e]){e&1&&Pt(d,a[0])},i:q,o:q,d(a){a&&p(r),a&&p(s),a&&p(i),a&&p(t),a&&p(d),h=!1,w()}}}function Ot(n,r,o){let s="NOT HERE YET";async function i(){o(0,s=JSON.stringify(await At()))}return[s,i]}class Rt extends Q{constructor(r){super(),Z(this,r,Ot,It,tt,{})}}function gt(n){let r,o,s,i,u,t,d,h,w,a;return i=new Nt({}),w=new Rt({}),{c(){r=_("h1"),o=T("Passwords!"),s=v(),pt(i.$$.fragment),u=v(),t=_("h1"),d=T("See passwords:"),h=v(),pt(w.$$.fragment)},l(e){r=y(e,"H1",{});var c=S(r);o=A(c,"Passwords!"),c.forEach(p),s=E(e),ut(i.$$.fragment,e),u=E(e),t=y(e,"H1",{});var R=S(t);d=A(R,"See passwords:"),R.forEach(p),h=E(e),ut(w.$$.fragment,e)},m(e,c){P(e,r,c),l(r,o),P(e,s,c),dt(i,e,c),P(e,u,c),P(e,t,c),l(t,d),P(e,h,c),dt(w,e,c),a=!0},p:q,i(e){a||(ft(i.$$.fragment,e),ft(w.$$.fragment,e),a=!0)},o(e){ct(i.$$.fragment,e),ct(w.$$.fragment,e),a=!1},d(e){e&&p(r),e&&p(s),mt(i,e),e&&p(u),e&&p(t),e&&p(h),mt(w,e)}}}class qt extends Q{constructor(r){super(),Z(this,r,null,gt,tt,{})}}export{qt as default};