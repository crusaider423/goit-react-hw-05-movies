"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[980],{787:function(e,t,r){r.d(t,{Hx:function(){return l},WK:function(){return o},Wk:function(){return u},uV:function(){return p},vw:function(){return c}});var n=r(861),a=r(757),s=r.n(a),i=r(340).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"861668370d618b6ce53a2f12a0dc8b5b"}}),c=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/all/day");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/search/movie",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},980:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(861),a=r(439),s=r(757),i=r.n(s),c=r(791),u=r(787),o=r(689),l="ditailes-post_cover__iFKJm",p="ditailes-post_list__9SlRf",d="ditailes-post_genres__syQgI",v=r(184),f=function(e){var t,r=e.getGenres,n=e.title,a=e.vote_average,s=e.year,i=e.overview,c=e.poster_path,u=e.imagePath,o=e.defaultImage,f=e.navigate,h=(null===(t=e.location.state)||void 0===t?void 0:t.from)||"/";return(0,v.jsxs)("main",{children:[(0,v.jsx)("button",{onClick:function(){f(h)},children:"Go back"}),(0,v.jsxs)("div",{className:l,children:[(0,v.jsx)("img",{src:c?u:o,alt:n,width:250}),(0,v.jsxs)("ul",{className:p,children:[(0,v.jsxs)("li",{children:[(0,v.jsx)("h3",{children:n&&"".concat(n,"(").concat(s,")")}),(0,v.jsxs)("p",{children:["vote_average: ",a]})]}),(0,v.jsxs)("li",{children:[(0,v.jsx)("h4",{children:"Overview"})," ",(0,v.jsxs)("p",{children:[" ",i]})]}),(0,v.jsxs)("li",{children:[(0,v.jsx)("h4",{children:"Genres"}),(0,v.jsx)("ul",{className:"".concat(d," "),children:r})]})]})]})]})},h=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1],l=(0,c.useState)(!1),p=(0,a.Z)(l,2),d=p[0],h=p[1],x=(0,c.useState)(null),m=(0,a.Z)(x,2),g=m[0],j=m[1],w=(0,c.useState)(""),_=(0,a.Z)(w,2),b=_[0],k=_[1],y=(0,o.UO)().movieId,Z=(0,o.s0)(),S=(0,o.TH)();(0,c.useEffect)((function(){var e=function(){var e=(0,n.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,h(!0),e.next=6,(0,u.Wk)(y);case 6:t=e.sent,s(t),k("https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),j(e.t0.message||"An error occurred while fetching movies.");case 14:return e.prev=14,h(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}),[y]);var C=r.genres,F=r.title,G=r.vote_average,I=r.release_date,L=r.poster_path,O=r.overview,A="https://image.tmdb.org/t/p/w500".concat(L),H=new Date(I).getFullYear(),N=C&&C.map((function(e){var t=e.id,r=e.name;return(0,v.jsx)("li",{children:(0,v.jsx)("p",{children:r})},t)}));return(0,v.jsxs)(v.Fragment,{children:[d&&"...Loading",g&&g,(0,v.jsx)(f,{getGenres:N,title:F,vote_average:G,year:H,overview:O,poster_path:L,imagePath:A,defaultImage:b,navigate:Z,location:S})]})},x=r(87),m=function(){var e,t=(null===(e=(0,o.TH)().state)||void 0===e?void 0:e.from)||"/";return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(h,{}),(0,v.jsxs)("main",{children:[(0,v.jsx)("p",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(x.OL,{to:"cast",state:{from:t},children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(x.OL,{to:"reviews",state:{from:t},children:"Reviews"})})]}),(0,v.jsx)(o.j3,{})," "]})]})}}}]);
//# sourceMappingURL=980.9b1788c5.chunk.js.map