import{S as R,i as S,s as H,e as K,b as E,f as P,g as Y,t as A,d as Q,h,k as V,a as L,q as U,l as D,m as C,c as N,r as Z,n as b,p as se,K as I,u as W,L as F,B as q,H as fe,M as oe,N as ae,O as ue,$ as ce,I as G,J,G as me,w as M,x as B,y as T,z,o as de,P as he,Y as le}from"../../../chunks/index-74e6ecb3.js";import{s as ie}from"../../../chunks/supabase-21b9380c.js";async function _e(i){const{data:e,error:t}=await ie.auth.signInWithPassword({email:i.email,password:i.password});if(t)throw t;return e.user}async function pe(i){const{data:e,error:t}=await ie.auth.signUp({email:i.email,password:i.password,options:{data:{name:i.name}}});if(t)throw t;return e.user}function X(i){let e,t,s,l,n,r=(i[1]||"Alert")+"",f,o,a,c,w,v,_;const u=[be,ge],g=[];function p(k,m){return k[2]?0:1}c=p(i),w=g[c]=u[c](i);let d=i[3]&&x(i);return{c(){e=V("div"),t=L(),s=V("div"),l=V("div"),n=V("div"),f=U(r),o=L(),a=V("div"),w.c(),v=L(),d&&d.c(),this.h()},l(k){e=D(k,"DIV",{class:!0}),C(e).forEach(h),t=N(k),s=D(k,"DIV",{class:!0,style:!0});var m=C(s);l=D(m,"DIV",{class:!0});var y=C(l);n=D(y,"DIV",{class:!0});var $=C(n);f=Z($,r),$.forEach(h),o=N(y),a=D(y,"DIV",{class:!0});var O=C(a);w.l(O),O.forEach(h),v=N(y),d&&d.l(y),y.forEach(h),m.forEach(h),this.h()},h(){b(e,"class","absolute ml-20 left-0 right-0 top-0 bottom-0 backdrop-blur-sm "),b(n,"class","bg-slate-700 text-white rounded-t-xl text-center py-2 text-xl"),b(a,"class","p-4"),b(l,"class","w-96 min-h-[15rem] rounded-xl shadow-2xl flex flex-col"),b(s,"class","absolute ml-10 left-1/2 top-1/3"),se(s,"transform","translate(-50%,-50%)")},m(k,m){E(k,e,m),E(k,t,m),E(k,s,m),I(s,l),I(l,n),I(n,f),I(l,o),I(l,a),g[c].m(a,null),I(l,v),d&&d.m(l,null),_=!0},p(k,m){(!_||m&2)&&r!==(r=(k[1]||"Alert")+"")&&W(f,r);let y=c;c=p(k),c===y?g[c].p(k,m):(Y(),A(g[y],1,1,()=>{g[y]=null}),Q(),w=g[c],w?w.p(k,m):(w=g[c]=u[c](k),w.c()),P(w,1),w.m(a,null)),k[3]?d?d.p(k,m):(d=x(k),d.c(),d.m(l,null)):d&&(d.d(1),d=null)},i(k){_||(P(w),_=!0)},o(k){A(w),_=!1},d(k){k&&h(e),k&&h(t),k&&h(s),g[c].d(),d&&d.d()}}}function ge(i){let e;const t=i[5].default,s=fe(t,i,i[4],null);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,n){s&&s.m(l,n),e=!0},p(l,n){s&&s.p&&(!e||n&16)&&oe(s,t,l,l[4],e?ue(t,l[4],n,null):ae(l[4]),null)},i(l){e||(P(s,l),e=!0)},o(l){A(s,l),e=!1},d(l){s&&s.d(l)}}}function be(i){let e;return{c(){e=U(i[2])},l(t){e=Z(t,i[2])},m(t,s){E(t,e,s)},p(t,s){s&4&&W(e,t[2])},i:q,o:q,d(t){t&&h(e)}}}function x(i){let e,t,s,l,n;return{c(){e=V("div"),t=V("button"),s=U("I understand"),this.h()},l(r){e=D(r,"DIV",{class:!0});var f=C(e);t=D(f,"BUTTON",{class:!0});var o=C(t);s=Z(o,"I understand"),o.forEach(h),f.forEach(h),this.h()},h(){b(t,"class","px-2 py-1 text-sm"),b(e,"class","mt-auto ml-auto mr-4 mb-4 border-2 border-black")},m(r,f){E(r,e,f),I(e,t),I(t,s),l||(n=F(t,"pointerup",i[6]),l=!0)},p:q,d(r){r&&h(e),l=!1,n()}}}function we(i){let e,t,s=i[0]&&X(i);return{c(){s&&s.c(),e=K()},l(l){s&&s.l(l),e=K()},m(l,n){s&&s.m(l,n),E(l,e,n),t=!0},p(l,[n]){l[0]?s?(s.p(l,n),n&1&&P(s,1)):(s=X(l),s.c(),P(s,1),s.m(e.parentNode,e)):s&&(Y(),A(s,1,1,()=>{s=null}),Q())},i(l){t||(P(s),t=!0)},o(l){A(s),t=!1},d(l){s&&s.d(l),l&&h(e)}}}function ve(i,e,t){let{$$slots:s={},$$scope:l}=e,{showIf:n=!1}=e,{title:r}=e,{body:f}=e,{showCheckout:o=!0}=e;const a=()=>t(0,n=!1);return i.$$set=c=>{"showIf"in c&&t(0,n=c.showIf),"title"in c&&t(1,r=c.title),"body"in c&&t(2,f=c.body),"showCheckout"in c&&t(3,o=c.showCheckout),"$$scope"in c&&t(4,l=c.$$scope)},[n,r,f,o,l,s,a]}class ne extends R{constructor(e){super(),S(this,e,ve,we,H,{showIf:0,title:1,body:2,showCheckout:3})}}function ee(i){let e,t,s,l,n,r;return{c(){e=G("svg"),t=G("svg"),s=G("path"),l=G("path"),n=L(),r=V("div"),this.h()},l(f){e=J(f,"svg",{class:!0,width:!0,height:!0,viewBox:!0});var o=C(e);t=J(o,"svg",{class:!0});var a=C(t);s=J(a,"path",{d:!0,fill:!0}),C(s).forEach(h),l=J(a,"path",{d:!0,fill:!0}),C(l).forEach(h),a.forEach(h),o.forEach(h),n=N(f),r=D(f,"DIV",{class:!0}),C(r).forEach(h),this.h()},h(){b(s,"d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"),b(s,"fill","currentColor"),b(l,"d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"),b(l,"fill","currentFill"),b(t,"class","text-slate-500 fill-gray-200"),b(e,"class","animate-spin"),b(e,"width",16),b(e,"height",16),b(e,"viewBox","0 0 100 101"),b(r,"class","w-2")},m(f,o){E(f,e,o),I(e,t),I(t,s),I(t,l),E(f,n,o),E(f,r,o)},d(f){f&&h(e),f&&h(n),f&&h(r)}}}function ke(i){let e,t,s,l,n,r,f=i[2]&&ee();return{c(){e=V("div"),t=V("button"),f&&f.c(),s=L(),l=U(i[0]),this.h()},l(o){e=D(o,"DIV",{class:!0});var a=C(e);t=D(a,"BUTTON",{type:!0,class:!0});var c=C(t);f&&f.l(c),s=N(c),l=Z(c,i[0]),c.forEach(h),a.forEach(h),this.h()},h(){b(t,"type","submit"),b(t,"class","flex flex-row justify-center items-center"),t.disabled=i[2],b(e,"class","bg-slate-600 text-white rounded hover:bg-slate-500 px-2 pb-1.5 pt-1 max-w-fit")},m(o,a){E(o,e,a),I(e,t),f&&f.m(t,null),I(t,s),I(t,l),i[4](e),n||(r=F(t,"pointerup",function(){ce(i[1])&&i[1].apply(this,arguments)}),n=!0)},p(o,[a]){i=o,i[2]?f||(f=ee(),f.c(),f.m(t,s)):f&&(f.d(1),f=null),a&1&&W(l,i[0]),a&4&&(t.disabled=i[2])},i:q,o:q,d(o){o&&h(e),f&&f.d(),i[4](null),n=!1,r()}}}function Ie(i,e,t){let{text:s}=e,{click:l=()=>{}}=e,{isLoading:n=!1}=e,r;function f(o){me[o?"unshift":"push"](()=>{r=o,t(3,r),t(2,n)})}return i.$$set=o=>{"text"in o&&t(0,s=o.text),"click"in o&&t(1,l=o.click),"isLoading"in o&&t(2,n=o.isLoading)},i.$$.update=()=>{i.$$.dirty&12&&r&&(n?t(3,r.style.pointerEvents="none",r):t(3,r.style.pointerEvents="auto",r))},[s,l,n,r,f]}class re extends R{constructor(e){super(),S(this,e,Ie,ke,H,{text:0,click:1,isLoading:2})}}function ye(i){function e(s,l=""){return l?!new RegExp(s,l).test(i):!new RegExp(s).test(i)}const t=[];return e(".*[A-Z].*[A-Z]")&&t.push("Need at least 2 uppercase characters"),e(".*[a-z].*[a-z].*[a-z]")&&t.push("Need at least 3 lowercase characters"),e(".*[0-9].*[0-9]")&&t.push("Need at least 2 numerals"),e(".{8,}")&&t.push("Needs to be of length at least 8"),e("[^a-z0-9 ]","i")&&t.push("Need at least 1 special character"),t}function te(i){let e,t;return{c(){e=V("div"),t=U(i[0]),this.h()},l(s){e=D(s,"DIV",{class:!0,style:!0});var l=C(e);t=Z(l,i[0]),l.forEach(h),this.h()},h(){b(e,"class","text-sm mb-1 italic"),se(e,"color","#ee964b")},m(s,l){E(s,e,l),I(e,t)},p(s,l){l&1&&W(t,s[0])},d(s){s&&h(e)}}}function Ee(i){let e,t=i[1]&&te(i);return{c(){t&&t.c(),e=K()},l(s){t&&t.l(s),e=K()},m(s,l){t&&t.m(s,l),E(s,e,l)},p(s,[l]){s[1]?t?t.p(s,l):(t=te(s),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:q,o:q,d(s){t&&t.d(s),s&&h(e)}}}function Ce(i,e,t){let{text:s}=e,{showIf:l}=e;return i.$$set=n=>{"text"in n&&t(0,s=n.text),"showIf"in n&&t(1,l=n.showIf)},[s,l]}class Ve extends R{constructor(e){super(),S(this,e,Ce,Ee,H,{text:0,showIf:1})}}function De(i){let e,t,s,l;return{c(){e=V("div"),t=U("(i)"),this.h()},l(n){e=D(n,"DIV",{class:!0});var r=C(e);t=Z(r,"(i)"),r.forEach(h),this.h()},h(){b(e,"class","absolute left-full cursor-pointer")},m(n,r){E(n,e,r),I(e,t),s||(l=[F(e,"pointerdown",i[9]),F(e,"pointerup",i[10])],s=!0)},p:q,d(n){n&&h(e),s=!1,he(l)}}}function Pe(i){let e,t=i[5]+": ",s,l,n,r,f,o,a,c,w,v=i[3]&&De(i);return o=new Ve({props:{showIf:i[3]&&i[2].length!==0,text:i[2][0]}}),{c(){e=V("div"),s=U(t),l=L(),n=V("input"),r=L(),v&&v.c(),f=L(),M(o.$$.fragment),this.h()},l(_){e=D(_,"DIV",{class:!0});var u=C(e);s=Z(u,t),l=N(u),n=D(u,"INPUT",{id:!0,type:!0,placeholder:!0,class:!0}),r=N(u),v&&v.l(u),u.forEach(h),f=N(_),B(o.$$.fragment,_),this.h()},h(){b(n,"id",i[0]),b(n,"type",i[4]),b(n,"placeholder",i[5]),b(n,"class","rounded pl-1 focus:outline-none"),n.required=!0,b(e,"class","flex flex-row justify-between min-w-fit max-w-[17rem] pt-1 pr-1 relative")},m(_,u){E(_,e,u),I(e,s),I(e,l),I(e,n),I(e,r),v&&v.m(e,null),E(_,f,u),T(o,_,u),a=!0,c||(w=F(n,"input",i[6]),c=!0)},p(_,[u]){(!a||u&1)&&b(n,"id",_[0]),_[3]&&v.p(_,u);const g={};u&4&&(g.showIf=_[3]&&_[2].length!==0),u&4&&(g.text=_[2][0]),o.$set(g)},i(_){a||(P(o.$$.fragment,_),a=!0)},o(_){A(o.$$.fragment,_),a=!1},d(_){_&&h(e),v&&v.d(),_&&h(f),z(o,_),c=!1,w()}}}function Le(i,e,t){let{is:s}=e,{info:l}=e,{doPasswordValidation:n=!1}=e;const r=s==="password",f=r?s:"text",o=s.charAt(0).toUpperCase()+s.slice(1);let a;de(()=>t(1,a=document.getElementById(s)));let c=r&&n?["Need at least 2 uppercase characters"]:[];const w=u=>{t(7,l[s]=u.target.value,l),r&&n&&(t(2,c=ye(l.password)),c.length!==0?a.setCustomValidity("Please meet all the requirements"):a.setCustomValidity(""))},v=()=>r?t(1,a.type="text",a):"",_=()=>r?t(1,a.type="password",a):"";return i.$$set=u=>{"is"in u&&t(0,s=u.is),"info"in u&&t(7,l=u.info),"doPasswordValidation"in u&&t(8,n=u.doPasswordValidation)},[s,a,c,r,f,o,w,l,n,v,_]}class j extends R{constructor(e){super(),S(this,e,Le,Pe,H,{is:0,info:7,doPasswordValidation:8})}}function Ne(i){let e,t,s,l,n,r,f,o,a,c,w,v,_;return t=new j({props:{is:"email",info:i[0]}}),l=new j({props:{is:"password",info:i[0]}}),o=new re({props:{text:"login",isLoading:i[1]}}),c=new ne({props:{showIf:i[2],title:i[3],body:i[4]}}),{c(){e=V("form"),M(t.$$.fragment),s=L(),M(l.$$.fragment),n=L(),r=V("div"),f=L(),M(o.$$.fragment),a=L(),M(c.$$.fragment),this.h()},l(u){e=D(u,"FORM",{});var g=C(e);B(t.$$.fragment,g),s=N(g),B(l.$$.fragment,g),n=N(g),r=D(g,"DIV",{class:!0}),C(r).forEach(h),f=N(g),B(o.$$.fragment,g),g.forEach(h),a=N(u),B(c.$$.fragment,u),this.h()},h(){b(r,"class","h-3")},m(u,g){E(u,e,g),T(t,e,null),I(e,s),T(l,e,null),I(e,n),I(e,r),I(e,f),T(o,e,null),E(u,a,g),T(c,u,g),w=!0,v||(_=F(e,"submit",le(i[5])),v=!0)},p(u,[g]){const p={};g&1&&(p.info=u[0]),t.$set(p);const d={};g&1&&(d.info=u[0]),l.$set(d);const k={};g&2&&(k.isLoading=u[1]),o.$set(k);const m={};g&4&&(m.showIf=u[2]),g&8&&(m.title=u[3]),g&16&&(m.body=u[4]),c.$set(m)},i(u){w||(P(t.$$.fragment,u),P(l.$$.fragment,u),P(o.$$.fragment,u),P(c.$$.fragment,u),w=!0)},o(u){A(t.$$.fragment,u),A(l.$$.fragment,u),A(o.$$.fragment,u),A(c.$$.fragment,u),w=!1},d(u){u&&h(e),z(t),z(l),z(o),u&&h(a),z(c,u),v=!1,_()}}}function Ae(i,e,t){let{info:s}=e,l=!1,n=!1,r,f;async function o(){t(1,l=!0);try{const a=await _e(s);t(3,r=`Hello ${a.user_metadata.name}`),t(4,f="Welcome back!")}catch(a){t(3,r="Error"),t(4,f=a.message)}t(2,n=!1),t(2,n=!0),t(1,l=!1)}return i.$$set=a=>{"info"in a&&t(0,s=a.info)},[s,l,n,r,f,o]}class $e extends R{constructor(e){super(),S(this,e,Ae,Ne,H,{info:0})}}function Me(i){let e,t,s,l,n,r,f,o,a,c,w,v,_,u,g;return t=new j({props:{is:"name",info:i[0]}}),l=new j({props:{is:"email",info:i[0]}}),r=new j({props:{is:"password",info:i[0],doPasswordValidation:!0}}),c=new re({props:{text:"create",isLoading:i[1]}}),v=new ne({props:{showIf:i[2],title:i[3],body:i[4]}}),{c(){e=V("form"),M(t.$$.fragment),s=L(),M(l.$$.fragment),n=L(),M(r.$$.fragment),f=L(),o=V("div"),a=L(),M(c.$$.fragment),w=L(),M(v.$$.fragment),this.h()},l(p){e=D(p,"FORM",{id:!0});var d=C(e);B(t.$$.fragment,d),s=N(d),B(l.$$.fragment,d),n=N(d),B(r.$$.fragment,d),f=N(d),o=D(d,"DIV",{class:!0}),C(o).forEach(h),a=N(d),B(c.$$.fragment,d),d.forEach(h),w=N(p),B(v.$$.fragment,p),this.h()},h(){b(o,"class","h-3"),b(e,"id","form")},m(p,d){E(p,e,d),T(t,e,null),I(e,s),T(l,e,null),I(e,n),T(r,e,null),I(e,f),I(e,o),I(e,a),T(c,e,null),E(p,w,d),T(v,p,d),_=!0,u||(g=F(e,"submit",le(i[5])),u=!0)},p(p,[d]){const k={};d&1&&(k.info=p[0]),t.$set(k);const m={};d&1&&(m.info=p[0]),l.$set(m);const y={};d&1&&(y.info=p[0]),r.$set(y);const $={};d&2&&($.isLoading=p[1]),c.$set($);const O={};d&4&&(O.showIf=p[2]),d&8&&(O.title=p[3]),d&16&&(O.body=p[4]),v.$set(O)},i(p){_||(P(t.$$.fragment,p),P(l.$$.fragment,p),P(r.$$.fragment,p),P(c.$$.fragment,p),P(v.$$.fragment,p),_=!0)},o(p){A(t.$$.fragment,p),A(l.$$.fragment,p),A(r.$$.fragment,p),A(c.$$.fragment,p),A(v.$$.fragment,p),_=!1},d(p){p&&h(e),z(t),z(l),z(r),z(c),p&&h(w),z(v,p),u=!1,g()}}}function Be(i,e,t){let{info:s}=e,l=!1,n=!1,r,f;async function o(){t(1,l=!0);try{await pe(s),t(3,r=`Hello, ${s.name}!`),t(4,f=`We sent an email to ${s.email}. Please follow the link in the email to finish the registration process. If you did not receive the email, the email my already be in use.`)}catch(a){t(3,r="Error"),t(4,f=a.message)}t(2,n=!1),t(2,n=!0),t(1,l=!1)}return i.$$set=a=>{"info"in a&&t(0,s=a.info)},[s,l,n,r,f,o]}class Te extends R{constructor(e){super(),S(this,e,Be,Me,H,{info:0})}}function ze(i){let e,t;return e=new $e({props:{info:i[3]}}),{c(){M(e.$$.fragment)},l(s){B(e.$$.fragment,s)},m(s,l){T(e,s,l),t=!0},p:q,i(s){t||(P(e.$$.fragment,s),t=!0)},o(s){A(e.$$.fragment,s),t=!1},d(s){z(e,s)}}}function Oe(i){let e,t;return e=new Te({props:{info:i[3]}}),{c(){M(e.$$.fragment)},l(s){B(e.$$.fragment,s)},m(s,l){T(e,s,l),t=!0},p:q,i(s){t||(P(e.$$.fragment,s),t=!0)},o(s){A(e.$$.fragment,s),t=!1},d(s){z(e,s)}}}function Ue(i){let e,t,s,l,n,r,f,o,a,c,w=i[2]+"   \u276F",v,_,u,g;const p=[Oe,ze],d=[];function k(m,y){return m[0]?0:1}return f=k(i),o=d[f]=p[f](i),{c(){e=V("div"),t=U(i[1]),s=L(),l=V("div"),n=U("Please fill out the following fields:"),r=L(),o.c(),a=L(),c=V("div"),v=U(w),this.h()},l(m){e=D(m,"DIV",{class:!0});var y=C(e);t=Z(y,i[1]),y.forEach(h),s=N(m),l=D(m,"DIV",{class:!0});var $=C(l);n=Z($,"Please fill out the following fields:"),$.forEach(h),r=N(m),o.l(m),a=N(m),c=D(m,"DIV",{class:!0});var O=C(c);v=Z(O,w),O.forEach(h),this.h()},h(){b(e,"class","text-2xl"),b(l,"class","text-gray-500 mb-4"),b(c,"class","border-2 border-black py-1 px-3 mt-6 max-w-fit text-sm cursor-pointer")},m(m,y){E(m,e,y),I(e,t),E(m,s,y),E(m,l,y),I(l,n),E(m,r,y),d[f].m(m,y),E(m,a,y),E(m,c,y),I(c,v),_=!0,u||(g=F(c,"pointerup",i[4]),u=!0)},p(m,[y]){(!_||y&2)&&W(t,m[1]);let $=f;f=k(m),f===$?d[f].p(m,y):(Y(),A(d[$],1,1,()=>{d[$]=null}),Q(),o=d[f],o?o.p(m,y):(o=d[f]=p[f](m),o.c()),P(o,1),o.m(a.parentNode,a)),(!_||y&4)&&w!==(w=m[2]+"   \u276F")&&W(v,w)},i(m){_||(P(o),_=!0)},o(m){A(o),_=!1},d(m){m&&h(e),m&&h(s),m&&h(l),m&&h(r),d[f].d(m),m&&h(a),m&&h(c),u=!1,g()}}}function Ze(i,e,t){let s={email:"",password:"",name:""},l=!0,n,r;const f=()=>t(0,l=!l);return i.$$.update=()=>{i.$$.dirty&1&&t(1,n=l?"Make an account":"Login with an existing account"),i.$$.dirty&1&&t(2,r=l?"Login instead":"Create an account instead")},[l,n,r,s,f]}class Re extends R{constructor(e){super(),S(this,e,Ze,Ue,H,{})}}export{Re as default};