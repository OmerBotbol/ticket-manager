(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),o=n(14),a=n.n(o),s=(n(19),n(3)),r=n(4),d=n.n(r),l=(n(38),n(0));var u=function(e){var t=Object(c.useState)("undone"),n=Object(s.a)(t,2),i=n[0],o=n[1],a=Object(c.useState)(!0),r=Object(s.a)(a,2),u=r[0],j=r[1];return Object(c.useEffect)((function(){e.ticket.done&&o("done")}),[e.ticket.done]),Object(c.useEffect)((function(){!0===e.restore&&j(!0)}),[e.restore]),Object(l.jsx)(l.Fragment,{children:u?Object(l.jsxs)("div",{className:"ticket ".concat(i),children:[Object(l.jsx)("h3",{className:"ticket-title",children:e.ticket.title}),Object(l.jsx)("p",{className:"content",children:e.ticket.content}),Object(l.jsxs)("div",{className:"ticket-bottom",children:[Object(l.jsxs)("div",{children:[e.ticket.userEmail," ",Object(l.jsx)("span",{className:"date",children:new Date(e.ticket.creationTime).toUTCString()})]}),e.ticket.labels&&Object(l.jsx)("div",{className:"labels",children:e.ticket.labels.map((function(e,t){return Object(l.jsx)("span",{className:"label",children:e},t)}))})]}),Object(l.jsxs)("div",{className:"control-buttons",children:[Object(l.jsx)("button",{className:"hideTicketButton",onClick:function(){return j(!u),void e.changeCounter()},children:"hide"}),Object(l.jsx)("button",{className:"done-status-button",onClick:function(t){"undone"===t.target.innerText?d.a.patch("/api/tickets/".concat(e.ticket._id,"/undone")).then((function(){o("undone")})).catch((function(e){console.log(e.message)})):d.a.patch("/api/tickets/".concat(e.ticket._id,"/done")).then((function(){o("done")})).catch((function(e){console.log(e.message)}))},children:"done"===i?Object(l.jsx)(l.Fragment,{children:"undone"}):Object(l.jsx)(l.Fragment,{children:"done"})})]})]}):Object(l.jsx)(l.Fragment,{})})};n(40);var j=function(e){return Object(l.jsxs)("div",{id:"header",children:[Object(l.jsx)("h1",{children:"Ticket Manager"}),0!==e.counter&&Object(l.jsxs)("div",{id:"hide-control",children:[Object(l.jsx)("span",{id:"hideTicketsCounter",children:e.counter})," tickets hidden",Object(l.jsx)("button",{id:"restoreHideTickets",onClick:function(){return e.restoreAll()},children:"Restore"})]}),Object(l.jsx)("input",{id:"searchInput",placeholder:"Enter the title you wish to find",onChange:function(t){return e.handleChange(t.target.value)}})]})};n(41);var h=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1],o=Object(c.useState)(!1),a=Object(s.a)(o,2),r=a[0],h=a[1],b=Object(c.useState)(0),O=Object(s.a)(b,2),f=O[0],k=O[1];function m(){k(f+1),h(!1)}return Object(c.useEffect)((function(){d.a.get("api/tickets").then((function(e){i(e.data)}))}),[]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(j,{counter:f,restoreAll:function(){h(!0),k(0)},handleChange:function(e){d.a.get("api/tickets?searchText=".concat(e)).then((function(e){i(e.data)}))}}),n.map((function(e,t){return Object(l.jsx)(u,{ticket:e,changeCounter:m,restore:r},t)}))]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.aa6cddf7.chunk.js.map