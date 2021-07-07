(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(14),r=n.n(a),s=(n(19),n(3)),o=n(4),j=n.n(o),u=(n(38),n(0));var l=function(e){var t=Object(c.useState)("undone"),n=Object(s.a)(t,2),i=n[0],a=n[1],r=Object(c.useState)(!0),o=Object(s.a)(r,2),l=o[0],b=o[1];return Object(c.useEffect)((function(){e.ticket.done&&a("done")}),[e.ticket.done]),Object(c.useEffect)((function(){!0===e.restore&&b(!0)}),[e.restore]),Object(u.jsx)(u.Fragment,{children:l?Object(u.jsxs)("div",{className:"ticket ".concat(i),children:[Object(u.jsx)("h3",{className:"ticket-title",children:e.ticket.title}),Object(u.jsx)("p",{className:"content",children:e.ticket.content}),Object(u.jsxs)("div",{className:"ticket-bottom",children:[Object(u.jsxs)("div",{children:[e.ticket.userEmail," ",Object(u.jsx)("span",{className:"date",children:new Date(e.ticket.creationTime).toUTCString()})]}),e.ticket.labels&&Object(u.jsx)("div",{className:"labels",children:e.ticket.labels.map((function(e,t){return Object(u.jsx)("span",{className:"label",children:e},t)}))})]}),Object(u.jsxs)("div",{className:"control-buttons",children:[Object(u.jsx)("button",{className:"hideTicketButton",onClick:function(){return b(!l),void e.changeCounter()},children:"hide"}),Object(u.jsx)("button",{className:"done-status-button",onClick:function(t){"undone"===t.target.innerText?j.a.patch("/api/tickets/".concat(e.ticket._id,"/undone")).then((function(){a("undone")})).catch((function(e){console.log(e.message)})):j.a.patch("/api/tickets/".concat(e.ticket._id,"/done")).then((function(){a("done")})).catch((function(e){console.log(e.message)}))},children:"done"===i?Object(u.jsx)(u.Fragment,{children:"undone"}):Object(u.jsx)(u.Fragment,{children:"done"})})]})]}):Object(u.jsx)(u.Fragment,{})})};n(40);var b=function(e){return Object(u.jsxs)("div",{id:"header",children:[Object(u.jsx)("h1",{children:"Ticket Manager"}),0!==e.counter&&Object(u.jsxs)("div",{id:"hide-control",children:[Object(u.jsx)("span",{id:"hideTicketsCounter",children:e.counter})," tickets hidden",Object(u.jsx)("button",{id:"restoreHideTickets",onClick:function(){return e.restoreAll()},children:"Restore"})]}),Object(u.jsx)("input",{id:"searchInput",placeholder:"Enter the title you wish to find",onChange:function(t){return e.handleChange(t.target.value)}}),Object(u.jsx)("button",{id:"open-new-ticket-button",onClick:function(){return e.openTab()},children:e.openNewTicket?Object(u.jsx)(u.Fragment,{children:" \u25b2 "}):Object(u.jsx)(u.Fragment,{children:" \u25bc "})})]})};n(41),n(42);var d=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(""),r=Object(s.a)(a,2),o=r[0],l=r[1],b=Object(c.useState)(""),d=Object(s.a)(b,2),h=d[0],O=d[1],x=Object(c.useState)(""),f=Object(s.a)(x,2),m=f[0],p=f[1];return Object(u.jsxs)("form",{onSubmit:function(){return function(){var e={title:n,content:o,userEmail:h,labels:m.split(",")};j.a.post("/api/tickets",e)}()},children:[Object(u.jsx)("h3",{children:"Create new ticket"}),Object(u.jsx)("label",{children:"Title: "}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{id:"title-input",type:"text",required:!0,value:n,onChange:function(e){return i(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{children:"Content: "}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{id:"content-input",type:"text",required:!0,value:o,onChange:function(e){return l(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{children:"email: "}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{id:"email-input",type:"email",required:!0,value:h,onChange:function(e){return O(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("label",{children:"Labels (seperate labels with commas): "}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{id:"labels-input",type:"text",value:m,onChange:function(e){return p(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{id:"submit-new-ticket",type:"submit",children:"Submit"})]})};var h=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)(!1),r=Object(s.a)(a,2),o=r[0],h=r[1],O=Object(c.useState)(0),x=Object(s.a)(O,2),f=x[0],m=x[1],p=Object(c.useState)(!1),k=Object(s.a)(p,2),g=k[0],v=k[1];function C(){m(f+1),h(!1)}return Object(c.useEffect)((function(){j.a.get("api/tickets").then((function(e){i(e.data)}))}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,{counter:f,restoreAll:function(){h(!0),m(0)},handleChange:function(e){j.a.get("api/tickets?searchText=".concat(e)).then((function(e){i(e.data)}))},openTab:function(){v(!g)},openNewTicket:g}),g&&Object(u.jsx)(d,{}),n.map((function(e,t){return Object(u.jsx)(l,{ticket:e,changeCounter:C,restore:o},t)}))]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.4a27d7fd.chunk.js.map