(this.webpackJsonpworkshop=this.webpackJsonpworkshop||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(4),l=n.n(r),o=(n(9),n(2)),s=(n(10),n(0)),a=function(e){var t=e.setCategoryClicked,n=Object(c.useState)([""]),i=Object(o.a)(n,2),r=i[0],l=i[1],a=Object(c.useState)([""]),j=Object(o.a)(a,2),u=j[0],b=j[1],d=Object(c.useState)(!1),h=Object(o.a)(d,2),f=h[0],p=h[1];Object(c.useEffect)((function(){fetch("https://frakton.dev/articles.php").then((function(e){return e.json()})).then((function(e){l(e),b(e)}))}),[]);var O=function(e,n,c,i){t((e?e+"/":"")+(n?n+"/":"")+(c?c+"/":"")+(i?i+"/":""))};return Object(s.jsxs)("div",{className:"sidebar",children:[Object(s.jsx)("h3",{children:"Filter by Category"}),Object(s.jsxs)("ul",{children:[u.filter((function(e){return 0===e.parent})).map((function(e){return Object(s.jsxs)("li",{children:[Object(s.jsx)("input",{type:"checkbox",id:"option",onClick:function(t){O(t.target.checked?e.name:null),p((function(e){return!e}))}}),Object(s.jsx)("label",{for:"option",children:e.name}),Object(s.jsx)("ul",{children:f?r.filter((function(t){return t.parent===e.id})).map((function(t){return Object(s.jsxs)("li",{children:[Object(s.jsx)("input",{type:"checkbox",id:"option",onClick:function(n){return O(e.name,n.target.checked?t.name:null)}}),Object(s.jsxs)("label",{for:"option",children:[" ",t.name]}),Object(s.jsx)("ul",{children:r.filter((function(e){return e.parent===t.id})).map((function(n){return Object(s.jsxs)("li",{children:[Object(s.jsx)("input",{type:"checkbox",id:"option",onClick:function(c){return O(e.name,t.name,c.target.checked?n.name:null)}}),Object(s.jsxs)("label",{for:"option",children:[" ",n.name]}),Object(s.jsx)("ul",{children:r.filter((function(e){return e.parent===n.id})).map((function(c){return Object(s.jsxs)("li",{children:[Object(s.jsx)("input",{type:"checkbox",id:"option",onClick:function(i){return O(e.name,t.name,n.name,i.target.checked?c.name:null)}}),Object(s.jsx)("label",{for:"option",children:c.name})]})}))})]})}))})]})})):null})]})})),Object(s.jsx)("li",{})]})]})};var j=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(s.jsx)("div",{className:"wsh-app",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{className:"col-lg-4",children:Object(s.jsx)(a,{setCategoryClicked:i})}),Object(s.jsx)("div",{className:"col-lg-8",children:Object(s.jsx)("p",{children:n})})]})})})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),c(e),i(e),r(e),l(e)}))};l.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(j,{})}),document.getElementById("root")),u()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.85e8fa81.chunk.js.map