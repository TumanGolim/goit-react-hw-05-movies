"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[106],{106:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});var i=s(791),r=s(294),c=s(689),n=s(87),a=s(184);const o="6275ff62c216e0d575843f8efbbe5c76",l=()=>{const{movieId:e}=(0,c.UO)(),t=(0,c.s0)(),[s,l]=(0,i.useState)(null),[h,d]=(0,i.useState)([]),[v,m]=(0,i.useState)([]),[p,j]=(0,i.useState)("");(0,i.useEffect)((()=>{(async()=>{try{const t=await r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(o));l(t.data)}catch(t){console.error("Error fetching movie details:",t),l(null)}})()}),[e]);if(!s)return(0,a.jsx)("div",{children:"Loading..."});const{title:x,vote_average:u,overview:w,genres:g,release_date:f,runtime:k,poster_path:b}=s,_=b?"https://image.tmdb.org/t/p/w500".concat(b):null;return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(n.rU,{to:"/",children:"Home"}),(0,a.jsx)(n.rU,{to:"/movies",children:"Movies"})]}),(0,a.jsx)("button",{onClick:()=>{t(-1)},children:"Go back"}),(0,a.jsx)("h2",{children:x}),_&&(0,a.jsx)("img",{src:_,alt:"".concat(x," Poster")}),(0,a.jsxs)("p",{children:["User Score: ",10*u,"%"]}),(0,a.jsxs)("p",{children:["Overview: ",w]}),(0,a.jsxs)("p",{children:["Genres: ",g.map((e=>e.name)).join(", ")]}),(0,a.jsxs)("p",{children:["Release Date: ",f]}),(0,a.jsxs)("p",{children:["Runtime: ",k," minutes"]}),(0,a.jsx)("h3",{children:"Additional information"}),(0,a.jsx)(n.rU,{to:"cast",onClick:async()=>{try{const t=await r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(o));d(t.data.cast),j("cast")}catch(t){console.error("Error fetching movie cast:",t),d([])}},children:"Cast"}),(0,a.jsx)(n.rU,{to:"reviews",onClick:async()=>{try{const t=await r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(o));m(t.data.results),j("reviews")}catch(t){console.error("Error fetching movie reviews:",t),m([])}},children:"Reviews"}),"cast"===p&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"Movie Cast"}),(0,a.jsx)("ul",{children:h.map((e=>(0,a.jsx)("li",{children:e.name},e.id)))})]}),"reviews"===p&&(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"Movie Reviews"}),(0,a.jsx)("ul",{children:v.map((e=>(0,a.jsxs)("li",{children:[(0,a.jsxs)("p",{children:["Author: ",e.author]}),(0,a.jsx)("p",{children:e.content})]},e.id)))})]})]})}}}]);
//# sourceMappingURL=106.0bad5302.chunk.js.map