"use strict";(self.webpackChunkgoit_react_hw_06_phonebook=self.webpackChunkgoit_react_hw_06_phonebook||[]).push([[29],{7029:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(885),a=t(2791),o=t(9434),i=t(915),s="form_form__sP2jI",c="form_item__uigkJ",u="form_deleteBtn__e7L2o",l=t(184);function d(){var e=(0,o.I0)(),n=(0,a.useState)(""),t=(0,r.Z)(n,2),c=t[0],u=t[1],d=(0,a.useState)(""),h=(0,r.Z)(d,2),m=h[0],f=h[1],p=function(){u(""),f("")},v=function(e){var n=e.target,t=n.name,r=n.value;"name"!==t?"number"===t&&f(r):u(r)};return(0,l.jsxs)("form",{className:s,onSubmit:function(n){n.preventDefault(),e((0,i.el)({name:c,number:m})),p()},children:[(0,l.jsxs)("label",{children:["Name",(0,l.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:c,onChange:v})]}),(0,l.jsx)("label",{children:(0,l.jsx)("input",{type:"tel",name:"number",value:m,onChange:v,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})}),(0,l.jsx)("button",{type:"submit",children:"Add contact"})]})}var h=t(8880);function m(){var e=(0,o.I0)();return(0,l.jsxs)("label",{children:["Find contacts by name",(0,l.jsx)("br",{}),(0,l.jsx)("input",{type:"text",name:"filter",onChange:function(n){var t=n.target;e((0,h.T)(t.value))}})]})}var f=function(e){return e.contacts.items},p=function(e){var n=e.contacts;return{loading:n.loading,error:n.error}};function v(){var e=(0,o.I0)(),n=(0,o.v9)(f),t=(0,o.v9)(p).loading,r=(0,o.v9)((function(e){return e.filter})),s=null===n||void 0===n?void 0:n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())||e.phone.includes(r)}));(0,a.useEffect)((function(){e((0,i.yF)())}),[e]);return(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Contacts"}),(0,l.jsx)("ul",{children:!t&&(null===s||void 0===s?void 0:s.map((function(n){var t=n.id,r=n.name,a=n.phone;return(0,l.jsxs)("li",{id:t,className:c,children:[(0,l.jsx)("div",{children:"".concat(r,": ").concat(a)}),(0,l.jsx)("button",{className:u,type:"button",onClick:function(){return function(n){e((0,i.zY)(n))}(t)},children:"delete"})]},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,n){return e+((n&=63)<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n>62?"-":"_")}),"")}())})))}),t&&(0,l.jsx)("p",{children:"Loading contacts..."})]})}var x=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{children:"Phonebook"}),(0,l.jsx)(d,{}),(0,l.jsx)(m,{}),(0,l.jsx)(v,{})]})}}}]);
//# sourceMappingURL=29.e9803b8d.chunk.js.map