(this["webpackJsonpcase-study"]=this["webpackJsonpcase-study"]||[]).push([[0],{10:function(e,t,n){e.exports={table:"Table_table__Z7VjQ",new:"Table_new__2J3nl",pagination:"Table_pagination__3Sg2v"}},18:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(12),i=n.n(a),r=(n(18),n(19),n(5)),l=n(1);function j(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],s=t[1];return Object(l.jsxs)("div",{className:"p-3",children:[Object(l.jsxs)("p",{children:["Counter: ",n]}),Object(l.jsx)("button",{className:"btn btn-primary mr-2",onClick:function(){return s(n+1)},children:"Increase (+1)"}),Object(l.jsx)("button",{className:"btn btn-warning",onClick:function(){return s(0)},children:"Reset"})]})}var o=n(9),b=n(4),d=n(26),m=n(27),u=n(28),O=n(29),h=n(30),x=n(13),f="https://60c4be23ec8ef800175e0733.mockapi.io/case-study/employees",p=n(10),N=n.n(p);function g(){var e=Object(x.a)(),t=e.register,n=e.handleSubmit,s=e.reset,a=e.formState.errors,i=Object(c.useState)(1),j=Object(r.a)(i,2),p=j[0],g=j[1],v=Object(c.useState)(0),C=Object(r.a)(v,2),y=C[0],S=C[1],k=Object(c.useState)([]),w=Object(r.a)(k,2),_=w[0],F=w[1],P=Object(c.useState)(!1),T=Object(r.a)(P,2),E=T[0],J=T[1],q=Object(c.useState)(),I=Object(r.a)(q,2),B=I[0],L=I[1],M=1!==p,D=p!==y,Q=_.length,R=D?5*p:Q,V=5*(p-1),Z=V+5;function $(e){L(e),setTimeout((function(){return L(void 0)}),5e3)}function z(e){F(e),S(Math.ceil(e.length/5))}return Object(c.useEffect)((function(){fetch(f).then((function(e){return e.ok?e.json():[]})).then((function(e){z(e)}))}),[]),Object(l.jsxs)("div",{className:"p-3",children:[Object(l.jsx)("h2",{children:"Employees"}),Object(l.jsxs)("table",{className:N.a.table,children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{children:"@ Email"}),Object(l.jsxs)("th",{children:[Object(l.jsx)(d.a,{})," Position"]})]})}),Object(l.jsxs)("tbody",{children:[_.slice(V,Z).map((function(e){var t=e.id,n=e.name,c=e.email,s=e.position;return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:n}),Object(l.jsx)("td",{children:c}),Object(l.jsx)("td",{children:s})]},t)})),!_.length&&Object(l.jsx)("tr",{children:Object(l.jsx)("td",{className:"text-center",colSpan:3,children:"No data"})})]})]}),Object(l.jsx)("div",{className:N.a.new,onClick:function(){return J(!0)},children:"+ New"}),Object(l.jsxs)("div",{className:N.a.pagination,children:[Object(l.jsxs)("p",{className:"m-0",children:[5*p-5+1," - ",R," of"," ",Q]}),Object(l.jsx)("button",{className:"btn first",onClick:function(){return g(1)},disabled:!M,children:Object(l.jsx)(m.a,{})}),Object(l.jsx)("button",{className:"btn prev",onClick:function(){return g(p-1)},disabled:!M,children:Object(l.jsx)(u.a,{})}),Object(l.jsx)("button",{className:"btn next",onClick:function(){return g(p+1)},disabled:!D,children:Object(l.jsx)(O.a,{})}),Object(l.jsx)("button",{className:"btn last",onClick:function(){return g(y)},disabled:!D,children:Object(l.jsx)(h.a,{})})]}),E&&Object(l.jsxs)("form",{className:"form",children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name*"}),Object(l.jsx)("input",Object(o.a)({className:"form-control",id:"name"},t("name",{required:"Please input name"}))),a.name&&Object(l.jsx)("small",{className:"form-text text-danger",children:a.name.message})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email*"}),Object(l.jsx)("input",Object(o.a)({type:"email",className:"form-control",id:"email"},t("email",{required:"Please input email",pattern:{value:/^\w+@\w+\.\w{2,4}$/i,message:"Email not valid"}}))),a.email&&Object(l.jsx)("small",{className:"form-text text-danger",children:a.email.message})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{htmlFor:"position",children:"Position*"}),Object(l.jsx)("input",Object(o.a)({className:"form-control",id:"position"},t("position",{required:"Please input position"}))),a.position&&Object(l.jsx)("small",{className:"form-text text-danger",children:a.position.message})]}),Object(l.jsx)("div",{className:"d-flex justify-content-center mb-3",children:Object(l.jsx)("button",{className:"btn btn-primary",onClick:n((function(e){$("fetching"),fetch(f,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){J(!1),z([].concat(Object(b.a)(_),[e])),s(),$("success")})).catch((function(){return $("fail")}))})),disabled:"fetching"===B,children:"Create"})})]}),"success"===B&&Object(l.jsx)("p",{className:"alert alert-success text-center m-auto w-25 mb-3",children:"Created sucessful!"}),"fail"===B&&Object(l.jsx)("p",{className:"alert alert-danger text-center m-auto w-25",children:"Created fail!"})]})}function v(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{}),Object(l.jsx)(g,{})]})}var C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root")),C()}},[[24,1,2]]]);
//# sourceMappingURL=main.4529c9ae.chunk.js.map