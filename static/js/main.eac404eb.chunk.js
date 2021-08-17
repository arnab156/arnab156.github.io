(this.webpackJsonpcomics=this.webpackJsonpcomics||[]).push([[0],{30:function(e,t,n){},32:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),s=n(22),a=n.n(s),r=(n(30),n(13)),u=n(3),o=n(20),l=n(8),m=n.n(l),b=n(11),d=n(19),j=n(9),f=n(54),p=n(55),x=n(25),h=(n(32),n(1)),v=function(){return Object(h.jsx)("header",{className:"header",children:Object(h.jsxs)("nav",{"aria-label":"Main menu",children:[Object(h.jsx)(r.b,{to:"/",children:"Home"}),Object(h.jsx)(r.b,{to:"/about",children:"About"})]})})},O=(n(42),function(e){var t=e.message;return Object(h.jsx)("div",{className:"error",children:t})}),g=c.a.createContext({latest:[],getComicByNumber:function(){return null}});g.displayName="Comics";var q=function(e){var t=e.children,n=c.a.useState(),i=Object(j.a)(n,2),s=i[0],a=i[1],r=c.a.useState(!1),u=Object(j.a)(r,2),o=u[0],l=u[1],d=c.a.useState(),f=Object(j.a)(d,2),p=f[0],x=f[1];c.a.useEffect((function(){Object(b.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://getxkcd.now.sh/api/comic?num=latest").then((function(e){return e.json()})).then((function(e){return a(e)}));case 3:e.next=9;break;case 5:throw e.prev=5,e.t0=e.catch(0),x("Error getting latest comics",e.t0),e.t0;case 9:case"end":return e.stop()}}),e,null,[[0,5]])})))()}),[]);var v=function(){var e=Object(b.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,fetch("https://getxkcd.now.sh/api/comic?num=".concat(t)).then((function(e){return e.json()})).then((function(e){return e}));case 4:return n=e.sent,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(1),x("Error getting the next comic",e.t0),e.t0;case 12:return e.prev=12,l(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,8,12,15]])})));return function(t){return e.apply(this,arguments)}}();return c.a.useEffect((function(){return setTimeout((function(){return x()}),3e3)}),[p]),Object(h.jsxs)(g.Provider,{value:{latestComic:s,getComicByNumber:v,inProgress:o},children:[p&&Object(h.jsx)(O,{message:p}),t]})},N=(n(43),function(e){var t=e.title,n=e.image,i=e.alt,c=e.date;return Object(h.jsxs)("div",{className:"comicBlock",tabIndex:"0","aria-label":"comic tile",children:[Object(h.jsx)("h1",{tabIndex:"0",children:t}),Object(h.jsx)("img",{src:n,alt:i,tabIndex:"0"}),Object(h.jsx)("p",{"aria-hidden":!0,children:i}),Object(h.jsxs)("p",{tabIndex:"0",children:["Published: ",c]})]})}),k=n(24),w=n.n(k),C=n(52),S=(n(44),[1,2,3,4,5,6,7]),y=function(e){var t=e.currentPage,n=e.onClick,i=c.a.useState(S),s=Object(j.a)(i,2),a=s[0],r=s[1];c.a.useEffect((function(){r(S)}),[]),c.a.useEffect((function(){if(t>4){for(var e=[],n=-3;n<4;n++)e.push(t+n);r(e)}else a!==S&&r(S)}),[t,a]);var u=function(e){n&&n(e)};return t?Object(h.jsxs)("div",{className:"pagination",tabIndex:0,children:[t>4&&Object(h.jsx)(C.a,{className:"paginationArrow",onClick:function(){return u(1)},onKeyPress:function(){return u(1)},tabIndex:"0"}),a.map((function(e){return Object(h.jsx)("div",{className:w()({pageNumber:t===e,number:t!==e}),onClick:function(){return u(e)},onKeyPress:function(){return u(e)},tabIndex:0,role:"button","aria-label":"page number ".concat(e),children:e},"pageNum-".concat(e))}))]}):null},P=n(53),A=(n(45),function(){return Object(h.jsx)("div",{className:"loading",children:Object(h.jsx)(P.a,{className:"loader"})})}),I=(n(46),function(){return Object(h.jsx)("footer",{children:"\xa92021-2022 Arnab's Comic Store."})}),E=(n(47),function(){var e=c.a.useContext(g),t=e.latestComic,n=e.getComicByNumber,i=e.inProgress,s=c.a.useState(),a=Object(j.a)(s,2),r=a[0],u=a[1],l=c.a.useState(1),O=Object(j.a)(l,2),q=O[0],k=O[1];c.a.useEffect((function(){t&&u([t])}),[t]),c.a.useEffect((function(){r&&r.length&&k(r.length)}),[r]);var w=function(e){return u([].concat(Object(d.a)(r),Object(d.a)(e)))},C=function(){var e=Object(b.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r[q]){e.next=4;break}k(q+1),e.next=8;break;case 4:return e.next=6,n(r[q-1].num-1);case 6:t=e.sent,w([t]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(e){e.preventDefault(),C()},P=function(){q>1&&k(q-1)},E=function(){var e=Object(b.a)(m.a.mark((function e(t){var i,c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r[t-1]){e.next=4;break}k(t),e.next=15;break;case 4:i=[],c=0;case 6:if(!(c<t-r.length)){e.next=14;break}return e.next=9,n(r[r.length-1].num-(c+1));case 9:s=e.sent,i.push(s);case 11:c++,e.next=6;break;case 14:w(i);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=Object(x.useSwipeable)({onSwipedRight:P,onSwipedLeft:C});return Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{}),Object(h.jsxs)("div",Object(o.a)(Object(o.a)({className:"container"},F),{},{children:[Object(h.jsx)("div",{className:"arrow",role:"button",onClick:P,onKeyPress:P,tabIndex:1===q?-1:0,"aria-label":"previous comic",children:r&&q>1&&Object(h.jsx)(f.a,{"aria-hidden":1===q})}),r&&!i&&Object(h.jsx)(N,{title:r[q-1].title,image:r[q-1].img,alt:r[q-1].alt,date:"".concat(r[q-1].month,"/").concat(r[q-1].day,"/").concat(r[q-1].year)}),(!r||i)&&Object(h.jsx)(A,{}),r&&r[0]&&Object(h.jsx)("div",{className:"arrow",role:"button",onClick:S,onKeyPress:S,tabIndex:0,"aria-label":"next comic",children:Object(h.jsx)(p.a,{})})]})),r&&r[0]&&Object(h.jsx)(y,{currentPage:q,onClick:E}),Object(h.jsx)(I,{})]})}),F=(n(48),function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(v,{}),Object(h.jsx)("p",{children:" Oops! This page does not exist. Please use Navigation."})]})}),B=(n(49),function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v,{}),Object(h.jsx)("p",{children:" Get your best comic updates here"}),Object(h.jsx)("img",{src:"https://via.placeholder.com/150",alt:"placeholder"}),Object(h.jsxs)("section",{className:"about",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus urna vel justo porttitor, eu rutrum ante ultricies. Donec non efficitur nisi. Aenean convallis purus quis accumsan sodales. Proin dictum orci eget elit vehicula varius. Fusce augue ante, bibendum ac dignissim vel, convallis sit amet eros. Phasellus quam tortor, semper vitae scelerisque in, pellentesque eu erat. Aliquam hendrerit quis ipsum ac viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur dictum justo quis luctus tincidunt. Suspendisse tortor metus, interdum vitae faucibus vel, ultrices quis eros. Quisque non risus libero. Morbi sed elit sem. Mauris quis elit non nunc volutpat blandit. Fusce consectetur justo quis diam hendrerit, eu faucibus elit malesuada.",Object(h.jsx)("br",{}),"Nam semper nunc et gravida ornare. Vestibulum nec arcu in lectus euismod blandit. Mauris quis suscipit mauris, vitae malesuada elit. Sed tincidunt bibendum tortor nec luctus. Quisque vel orci ut tellus euismod cursus. Aliquam tristique posuere diam. Aliquam in purus efficitur massa ultrices aliquam ac maximus nisl. Vivamus sollicitudin fermentum mi, sed rutrum metus venenatis eu. Aliquam efficitur quis dui vitae suscipit. Suspendisse facilisis eget massa ut pellentesque."]}),Object(h.jsx)("br",{}),Object(h.jsx)("section",{className:"about",children:"Nam semper nunc et gravida ornare. Vestibulum nec arcu in lectus euismod blandit. Mauris quis suscipit mauris, vitae malesuada elit. Sed tincidunt bibendum tortor nec luctus. Quisque vel orci ut tellus euismod cursus. Aliquam tristique posuere diam. Aliquam in purus efficitur massa ultrices aliquam ac maximus nisl. Vivamus sollicitudin fermentum mi, sed rutrum metus venenatis eu. Aliquam efficitur quis dui vitae suscipit. Suspendisse facilisis eget massa ut pellentesque."}),Object(h.jsx)(I,{})]})}),M=(n(50),function(){return Object(h.jsx)(r.a,{children:Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(q,{children:Object(h.jsxs)(u.c,{children:[Object(h.jsx)(u.a,{exact:!0,path:"/",component:E}),Object(h.jsx)(u.a,{exact:!0,path:"/about",component:B}),Object(h.jsx)(u.a,{path:"*",component:F})]})})})})}),D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),i(e),c(e),s(e),a(e)}))};a.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(M,{})}),document.getElementById("root")),D()}},[[51,1,2]]]);
//# sourceMappingURL=main.eac404eb.chunk.js.map