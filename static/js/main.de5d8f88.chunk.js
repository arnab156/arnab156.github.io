(this.webpackJsonpcomics=this.webpackJsonpcomics||[]).push([[0],{30:function(e,t,n){},32:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),a=n(22),s=n.n(a),u=(n(30),n(13)),r=n(3),o=n(20),l=n(8),m=n.n(l),b=n(11),d=n(19),j=n(9),f=n(53),p=n(54),h=n(25),x=(n(32),n(1)),v=function(){return Object(x.jsx)("header",{className:"header",children:Object(x.jsxs)("nav",{"aria-label":"Main menu",children:[Object(x.jsx)(u.b,{to:"/",children:"Home"}),Object(x.jsx)(u.b,{to:"/about",children:"About"})]})})},O=c.a.createContext({latest:[],getComicByNumber:function(){return null}});O.displayName="Comics";var g=function(e){var t=e.children,n=c.a.useState(),i=Object(j.a)(n,2),a=i[0],s=i[1],u=c.a.useState(!1),r=Object(j.a)(u,2),o=r[0],l=r[1];c.a.useEffect((function(){Object(b.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://getxkcd.now.sh/api/comic?num=latest").then((function(e){return e.json()})).then((function(e){return s(e)}));case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),e.t0;case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()}),[]);var d=function(){var e=Object(b.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,fetch("https://getxkcd.now.sh/api/comic?num=".concat(t)).then((function(e){return e.json()})).then((function(e){return e}));case 4:return n=e.sent,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:return e.prev=11,l(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsx)(O.Provider,{value:{latestComic:a,getComicByNumber:d,inProgress:o},children:t})},q=(n(42),function(e){var t=e.title,n=e.image,i=e.alt,c=e.date;return Object(x.jsxs)("div",{className:"comicBlock",tabIndex:"0","aria-label":"comic tile",children:[Object(x.jsx)("h1",{tabIndex:"0",children:t}),Object(x.jsx)("img",{src:n,alt:i,tabIndex:"0"}),Object(x.jsx)("p",{"aria-hidden":!0,children:i}),Object(x.jsxs)("p",{tabIndex:"0",children:["Published: ",c]})]})}),k=n(24),N=n.n(k),w=n(51),C=(n(43),function(e){var t=e.currentPage,n=e.onClick,i=[1,2,3,4,5,6,7],a=c.a.useState(i),s=Object(j.a)(a,2),u=s[0],r=s[1];c.a.useEffect((function(){r(i)}),[]),c.a.useEffect((function(){if(t>4){for(var e=[],n=-3;n<4;n++)e.push(t+n);r(e)}else u!==i&&r(i)}),[t]);var o=function(e){n&&n(e)};return t?Object(x.jsxs)("div",{className:"pagination",children:[t>4&&Object(x.jsx)(w.a,{className:"paginationArrow",onClick:function(){return o(1)},onKeyPress:function(){return o(1)},tabIndex:"0"}),u.map((function(e){return Object(x.jsx)("div",{className:N()({pageNumber:t===e,number:t!==e}),onClick:function(){return o(e)},onKeyPress:function(){return o(e)},tabIndex:0,role:"button","aria-label":"page number ".concat(e),children:e},"pageNum-".concat(e))}))]}):null}),P=n(52),S=(n(44),function(){return Object(x.jsx)("div",{className:"loading",children:Object(x.jsx)(P.a,{className:"loader"})})}),y=(n(45),function(){return Object(x.jsx)("footer",{children:"\xa92021-2022 Arnab's Comic Store."})}),A=(n(46),function(){var e=c.a.useContext(O),t=e.latestComic,n=e.getComicByNumber,i=e.inProgress,a=c.a.useState(),s=Object(j.a)(a,2),u=s[0],r=s[1],l=c.a.useState(1),g=Object(j.a)(l,2),k=g[0],N=g[1];c.a.useEffect((function(){t&&r([t])}),[t]),c.a.useEffect((function(){u&&u.length&&N(u.length)}),[u]);var w=function(e){return r([].concat(Object(d.a)(u),Object(d.a)(e)))},P=function(){var e=Object(b.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u[k]){e.next=4;break}N(k+1),e.next=8;break;case 4:return e.next=6,n(u[k-1].num-1);case 6:t=e.sent,w([t]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(e){e.preventDefault(),P()},I=function(){k>1&&N(k-1)},F=function(){var e=Object(b.a)(m.a.mark((function e(t){var i,c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!u[t-1]){e.next=4;break}N(t),e.next=15;break;case 4:i=[],c=0;case 6:if(!(c<t-u.length)){e.next=14;break}return e.next=9,n(u[u.length-1].num-(c+1));case 9:a=e.sent,i.push(a);case 11:c++,e.next=6;break;case 14:w(i);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=Object(h.useSwipeable)({onSwipedRight:I,onSwipedLeft:P});return Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsxs)("div",Object(o.a)(Object(o.a)({className:"container"},B),{},{children:[Object(x.jsx)("div",{className:"arrow",role:"button",onClick:I,onKeyPress:I,tabIndex:1===k?-1:0,"aria-label":"previous comic",children:k>1&&Object(x.jsx)(f.a,{"aria-hidden":1===k})}),u&&!i&&Object(x.jsx)(q,{title:u[k-1].title,image:u[k-1].img,alt:u[k-1].alt,date:"".concat(u[k-1].month,"/").concat(u[k-1].day,"/").concat(u[k-1].year)}),(!u||i)&&Object(x.jsx)(S,{}),Object(x.jsx)("div",{className:"arrow",role:"button",onClick:A,onKeyPress:A,tabIndex:0,"aria-label":"next comic",children:Object(x.jsx)(p.a,{})})]})),Object(x.jsx)(C,{totalPage:u&&u[0].num,currentPage:k,onClick:F}),Object(x.jsx)(y,{})]})}),I=(n(47),function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(v,{}),Object(x.jsx)("p",{children:" Oops! This page does not exist. Please use Navigation."})]})}),F=(n(48),function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v,{}),Object(x.jsx)("p",{children:" Get your best comic updates here"}),Object(x.jsx)("img",{src:"https://via.placeholder.com/150",alt:"placeholder"}),Object(x.jsxs)("section",{className:"about",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus urna vel justo porttitor, eu rutrum ante ultricies. Donec non efficitur nisi. Aenean convallis purus quis accumsan sodales. Proin dictum orci eget elit vehicula varius. Fusce augue ante, bibendum ac dignissim vel, convallis sit amet eros. Phasellus quam tortor, semper vitae scelerisque in, pellentesque eu erat. Aliquam hendrerit quis ipsum ac viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur dictum justo quis luctus tincidunt. Suspendisse tortor metus, interdum vitae faucibus vel, ultrices quis eros. Quisque non risus libero. Morbi sed elit sem. Mauris quis elit non nunc volutpat blandit. Fusce consectetur justo quis diam hendrerit, eu faucibus elit malesuada.",Object(x.jsx)("br",{}),"Nam semper nunc et gravida ornare. Vestibulum nec arcu in lectus euismod blandit. Mauris quis suscipit mauris, vitae malesuada elit. Sed tincidunt bibendum tortor nec luctus. Quisque vel orci ut tellus euismod cursus. Aliquam tristique posuere diam. Aliquam in purus efficitur massa ultrices aliquam ac maximus nisl. Vivamus sollicitudin fermentum mi, sed rutrum metus venenatis eu. Aliquam efficitur quis dui vitae suscipit. Suspendisse facilisis eget massa ut pellentesque."]}),Object(x.jsx)("br",{}),Object(x.jsx)("section",{className:"about",children:"Nam semper nunc et gravida ornare. Vestibulum nec arcu in lectus euismod blandit. Mauris quis suscipit mauris, vitae malesuada elit. Sed tincidunt bibendum tortor nec luctus. Quisque vel orci ut tellus euismod cursus. Aliquam tristique posuere diam. Aliquam in purus efficitur massa ultrices aliquam ac maximus nisl. Vivamus sollicitudin fermentum mi, sed rutrum metus venenatis eu. Aliquam efficitur quis dui vitae suscipit. Suspendisse facilisis eget massa ut pellentesque."}),Object(x.jsx)(y,{})]})}),B=(n(49),function(){return Object(x.jsx)(u.a,{children:Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(g,{children:Object(x.jsxs)(r.c,{children:[Object(x.jsx)(r.a,{exact:!0,path:"/",component:A}),Object(x.jsx)(r.a,{exact:!0,path:"/about",component:F}),Object(x.jsx)(r.a,{path:"*",component:I})]})})})})}),E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),a(e),s(e)}))};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(B,{})}),document.getElementById("root")),E()}},[[50,1,2]]]);
//# sourceMappingURL=main.de5d8f88.chunk.js.map