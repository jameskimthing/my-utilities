import{S as te,i as le,s as re,k as y,q as $,a as N,l as E,m as A,r as q,h as u,c as P,n as v,b as B,M as o,V as z,O as M,T as ye,u as ae,B as H,U as Ee,e as _e,D as ve,w as ne,x as ie,y as se,t as Q,d as ke,f as W,z as oe,g as ge}from"../../../chunks/index-db3e86e4.js";import{L as Ne}from"../../../chunks/Link-29d7c1b6.js";import{a as Pe,b as Le}from"../../../chunks/authentication-f7d8604b.js";function Te(n){let e,l,t,r,i,m,h,L,I,p,O,d,T,k,b,s="currently loading: "+n[1],c,V,Z;return{c(){e=y("form"),l=y("label"),t=$("Email:"),r=N(),i=y("input"),m=N(),h=y("label"),L=$("Password:"),I=N(),p=y("input"),O=N(),d=y("button"),T=$("Submit"),k=N(),b=y("p"),c=$(s),this.h()},l(_){e=E(_,"FORM",{});var w=A(e);l=E(w,"LABEL",{for:!0});var R=A(l);t=q(R,"Email:"),R.forEach(u),r=P(w),i=E(w,"INPUT",{id:!0,type:!0,placeholder:!0}),m=P(w),h=E(w,"LABEL",{for:!0});var C=A(h);L=q(C,"Password:"),C.forEach(u),I=P(w),p=E(w,"INPUT",{id:!0,type:!0,placeholder:!0}),O=P(w),d=E(w,"BUTTON",{type:!0});var F=A(d);T=q(F,"Submit"),F.forEach(u),w.forEach(u),k=P(_),b=E(_,"P",{});var D=A(b);c=q(D,s),D.forEach(u),this.h()},h(){v(l,"for","email"),v(i,"id","email"),v(i,"type","email"),v(i,"placeholder","Email"),i.required=!0,v(h,"for","password"),v(p,"id","password"),v(p,"type","password"),v(p,"placeholder","Master Password"),p.required=!0,v(d,"type","submit")},m(_,w){B(_,e,w),o(e,l),o(l,t),o(e,r),o(e,i),z(i,n[0].email),o(e,m),o(e,h),o(h,L),o(e,I),o(e,p),z(p,n[0].password),o(e,O),o(e,d),o(d,T),B(_,k,w),B(_,b,w),o(b,c),V||(Z=[M(i,"input",n[3]),M(p,"input",n[4]),M(e,"submit",ye(n[2]))],V=!0)},p(_,[w]){w&1&&i.value!==_[0].email&&z(i,_[0].email),w&1&&p.value!==_[0].password&&z(p,_[0].password),w&2&&s!==(s="currently loading: "+_[1])&&ae(c,s)},i:H,o:H,d(_){_&&u(e),_&&u(k),_&&u(b),V=!1,Ee(Z)}}}function Ae(n,e,l){let{info:t}=e,r=!1;async function i(){l(1,r=!0),await Pe(t),l(1,r=!1)}function m(){t.email=this.value,l(0,t)}function h(){t.password=this.value,l(0,t)}return n.$$set=L=>{"info"in L&&l(0,t=L.info)},[t,r,i,m,h]}class Be extends te{constructor(e){super(),le(this,e,Ae,Te,re,{info:0})}}function he(n,e,l){const t=n.slice();return t[9]=e[l],t}function be(n){let e,l=n[9]+"",t,r;return{c(){e=y("div"),t=$(l),r=N()},l(i){e=E(i,"DIV",{});var m=A(e);t=q(m,l),r=P(m),m.forEach(u)},m(i,m){B(i,e,m),o(e,t),o(e,r)},p(i,m){m&2&&l!==(l=i[9]+"")&&ae(t,l)},d(i){i&&u(e)}}}function we(n){let e,l;return{c(){e=y("p"),l=$("Sent an email. now confirm it")},l(t){e=E(t,"P",{});var r=A(e);l=q(r,"Sent an email. now confirm it"),r.forEach(u)},m(t,r){B(t,e,r),o(e,l)},d(t){t&&u(e)}}}function Se(n){let e,l,t,r,i,m,h,L,I,p,O,d,T,k,b,s,c,V,Z,_,w,R,C,F,D,J="currently loading: "+n[2],X,Y,j,x,ue,G=n[1],S=[];for(let a=0;a<G.length;a+=1)S[a]=be(he(n,G,a));let U=n[3]&&we();return{c(){e=y("form"),l=y("label"),t=$("Name:"),r=N(),i=y("input"),m=N(),h=y("label"),L=$("Email:"),I=N(),p=y("input"),O=N(),d=y("label"),T=$("Password:"),k=N(),b=y("input"),s=N(),c=y("button"),V=$("(show password)?"),Z=N(),_=y("button"),w=$("Submit"),R=N(),C=y("div");for(let a=0;a<S.length;a+=1)S[a].c();F=N(),D=y("p"),X=$(J),Y=N(),U&&U.c(),j=_e(),this.h()},l(a){e=E(a,"FORM",{});var f=A(e);l=E(f,"LABEL",{for:!0});var g=A(l);t=q(g,"Name:"),g.forEach(u),r=P(f),i=E(f,"INPUT",{type:!0,placeholder:!0}),m=P(f),h=E(f,"LABEL",{for:!0});var K=A(h);L=q(K,"Email:"),K.forEach(u),I=P(f),p=E(f,"INPUT",{type:!0,placeholder:!0}),O=P(f),d=E(f,"LABEL",{for:!0});var fe=A(d);T=q(fe,"Password:"),fe.forEach(u),k=P(f),b=E(f,"INPUT",{id:!0,type:!0,placeholder:!0}),s=P(f),c=E(f,"BUTTON",{type:!0});var pe=A(c);V=q(pe,"(show password)?"),pe.forEach(u),Z=P(f),_=E(f,"BUTTON",{type:!0});var me=A(_);w=q(me,"Submit"),me.forEach(u),f.forEach(u),R=P(a),C=E(a,"DIV",{});var ce=A(C);for(let ee=0;ee<S.length;ee+=1)S[ee].l(ce);ce.forEach(u),F=P(a),D=E(a,"P",{});var de=A(D);X=q(de,J),de.forEach(u),Y=P(a),U&&U.l(a),j=_e(),this.h()},h(){v(l,"for","name"),v(i,"type","text"),v(i,"placeholder","Name"),i.required=!0,v(h,"for","email"),v(p,"type","email"),v(p,"placeholder","Email"),p.required=!0,v(d,"for","password"),v(b,"id","pwd"),v(b,"type","password"),v(b,"placeholder","Master Password"),b.required=!0,v(c,"type","button"),v(_,"type","submit")},m(a,f){B(a,e,f),o(e,l),o(l,t),o(e,r),o(e,i),z(i,n[0].name),o(e,m),o(e,h),o(h,L),o(e,I),o(e,p),z(p,n[0].email),o(e,O),o(e,d),o(d,T),o(e,k),o(e,b),z(b,n[0].password),o(e,s),o(e,c),o(c,V),o(e,Z),o(e,_),o(_,w),B(a,R,f),B(a,C,f);for(let g=0;g<S.length;g+=1)S[g].m(C,null);B(a,F,f),B(a,D,f),o(D,X),B(a,Y,f),U&&U.m(a,f),B(a,j,f),x||(ue=[M(i,"input",n[6]),M(p,"input",n[7]),M(b,"input",n[8]),M(b,"input",n[4]),M(c,"click",Ie),M(e,"submit",ye(n[5]))],x=!0)},p(a,[f]){if(f&1&&i.value!==a[0].name&&z(i,a[0].name),f&1&&p.value!==a[0].email&&z(p,a[0].email),f&1&&b.value!==a[0].password&&z(b,a[0].password),f&2){G=a[1];let g;for(g=0;g<G.length;g+=1){const K=he(a,G,g);S[g]?S[g].p(K,f):(S[g]=be(K),S[g].c(),S[g].m(C,null))}for(;g<S.length;g+=1)S[g].d(1);S.length=G.length}f&4&&J!==(J="currently loading: "+a[2])&&ae(X,J),a[3]?U||(U=we(),U.c(),U.m(j.parentNode,j)):U&&(U.d(1),U=null)},i:H,o:H,d(a){a&&u(e),a&&u(R),a&&u(C),ve(S,a),a&&u(F),a&&u(D),a&&u(Y),U&&U.d(a),a&&u(j),x=!1,Ee(ue)}}}function Ie(){const n=document.getElementById("pwd");n.type==="password"?n.type="text":n.type="password"}function Ue(n,e,l){let{info:t}=e,r=[],i=!1,m=!1;function h(){function d(T,k=""){return k?!new RegExp(T,k).test(t.password):!new RegExp(T).test(t.password)}l(1,r=[]),d(".*[A-Z].*[A-Z]")&&r.push("Need at least 2 uppercase characters"),d(".*[a-z].*[a-z].*[a-z]")&&r.push("Need at least 3 lowercase characters"),d(".*[0-9].*[0-9]")&&r.push("Need at least 2 numerals"),d(".{8,}")&&r.push("Needs to be of length at least 8"),d("[^a-z0-9 ]","i")&&r.push("Need at least 1 special character");try{const T=document.getElementById("pwd");r.length!==0?T.setCustomValidity("Please meet all the requirements"):T.setCustomValidity("")}catch{}l(1,r)}h();async function L(){l(2,i=!0),await Le(t),l(2,i=!1),l(3,m=!0)}function I(){t.name=this.value,l(0,t)}function p(){t.email=this.value,l(0,t)}function O(){t.password=this.value,l(0,t)}return n.$$set=d=>{"info"in d&&l(0,t=d.info)},[t,r,i,m,h,L,I,p,O]}class $e extends te{constructor(e){super(),le(this,e,Ue,Se,re,{info:0})}}function qe(n){let e,l;return e=new Be({props:{info:n[1]}}),{c(){ne(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,r){se(e,t,r),l=!0},p:H,i(t){l||(W(e.$$.fragment,t),l=!0)},o(t){Q(e.$$.fragment,t),l=!1},d(t){oe(e,t)}}}function Oe(n){let e,l;return e=new $e({props:{info:n[1]}}),{c(){ne(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,r){se(e,t,r),l=!0},p:H,i(t){l||(W(e.$$.fragment,t),l=!0)},o(t){Q(e.$$.fragment,t),l=!1},d(t){oe(e,t)}}}function Ve(n){let e,l,t,r,i,m,h,L,I,p,O,d;e=new Ne({props:{to:"/"}});const T=[Oe,qe],k=[];function b(s,c){return s[0]?0:1}return t=b(n),r=k[t]=T[t](n),{c(){ne(e.$$.fragment),l=$(`\r
aaaAA00!\r
`),r.c(),i=N(),m=y("button"),h=$("Change button"),L=N(),I=y("div")},l(s){ie(e.$$.fragment,s),l=q(s,`\r
aaaAA00!\r
`),r.l(s),i=P(s),m=E(s,"BUTTON",{});var c=A(m);h=q(c,"Change button"),c.forEach(u),L=P(s),I=E(s,"DIV",{}),A(I).forEach(u)},m(s,c){se(e,s,c),B(s,l,c),k[t].m(s,c),B(s,i,c),B(s,m,c),o(m,h),B(s,L,c),B(s,I,c),p=!0,O||(d=M(m,"click",n[2]),O=!0)},p(s,[c]){let V=t;t=b(s),t===V?k[t].p(s,c):(ge(),Q(k[V],1,1,()=>{k[V]=null}),ke(),r=k[t],r?r.p(s,c):(r=k[t]=T[t](s),r.c()),W(r,1),r.m(i.parentNode,i))},i(s){p||(W(e.$$.fragment,s),W(r),p=!0)},o(s){Q(e.$$.fragment,s),Q(r),p=!1},d(s){oe(e,s),s&&u(l),k[t].d(s),s&&u(i),s&&u(m),s&&u(L),s&&u(I),O=!1,d()}}}function Ce(n,e,l){let t=!0;return[t,{email:"",password:"",name:""},()=>{l(0,t=!t)}]}class Re extends te{constructor(e){super(),le(this,e,Ce,Ve,re,{})}}export{Re as default};
