(this["webpackJsonpbasic-react-todo-app"]=this["webpackJsonpbasic-react-todo-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,o){},,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(1),c=o.n(n),a=o(4),r=o.n(a),s=o(6),l=o(2);function d(){var e=function(e,t){var o=c.a.useState(!1),n=Object(l.a)(o,2),a=n[0],r=n[1],s=c.a.useState(!0),d=Object(l.a)(s,2),i=d[0],u=d[1],j=c.a.useState(t),h=Object(l.a)(j,2),m=h[0],O=h[1],p=c.a.useState(!0),b=Object(l.a)(p,2),x=b[0],T=b[1];return c.a.useEffect((function(){setTimeout((function(){try{var o=localStorage.getItem(e),n=t;o?n=JSON.parse(o):localStorage.setItem(e,JSON.stringify(t)),O(n),u(!1),T(!0)}catch(a){r(a)}}),3e3)}),[x]),{item:m,saveItem:function(t){try{var o=JSON.stringify(t);localStorage.setItem(e,o)}catch(a){r(a)}},loading:i,error:a,setItem:O,sincronize:function(){u(!0),T(!1)}}}("TODOS_V1",[]),t=e.item,o=e.saveItem,n=e.loading,a=e.error,r=e.setItem,d=e.sincronize,i=c.a.useState(""),u=Object(l.a)(i,2),j=u[0],h=u[1],m=c.a.useState(!1),O=Object(l.a)(m,2),p=O[0],b=O[1],x=c.a.useState(""),T=Object(l.a)(x,2),f=T[0],g=T[1],v=t.filter((function(e){return!!e.completed})).length,S=t.length,y=[];y=!j.length>=1?t:t.filter((function(e){var t=e.text.toLowerCase(),o=j.toLowerCase();return t.includes(o)}));return{loading:n,error:a,completedTodos:v,totalTodos:S,searchValue:j,setSearchValue:h,findRelatedTodos:y,completeTodo:function(e){console.log(e);var n=Object(s.a)(t);n[e].completed?n[e].completed=!1:n[e].completed=!0,o(n),r(n)},deleteTodo:function(e){var n=t.findIndex((function(t){return t.id===e})),c=Object(s.a)(t);c.splice(n,1),r(c),o(c)},openModal:p,setOpenModal:b,createTodo:function(e){var n=Object(s.a)(t);n.push({text:e,completed:!1,id:t.length+1}),g("TODO has been added to the list !"),o(n),r(n)},modalText:f,setModalText:g,sincronizeTodos:d}}o(12);var i=o(0);function u(e){var t=e.totalTodos,o=e.completedTodos,n=e.loading;return Object(i.jsxs)("div",{className:"TodoCounter-title-wrapper",children:[Object(i.jsx)("p",{className:"TodoCounter-title",children:"What's up today?"}),Object(i.jsxs)("p",{className:"TodoCounter-todos-count ".concat(!!n&&"TodoCounter--loading"),children:["TO-DOS Completed: ",o,"/",t]})]})}o(14);function j(e){var t=e.searchValue,o=e.setSearchValue,n=e.loading;return Object(i.jsx)(c.a.Fragment,{children:Object(i.jsx)("input",{onChange:function(e){o(e.target.value)},value:t,className:"inputSearchTodo",id:"search",placeholder:"SEARCH/CREATE TODOS HERE",disabled:n})})}o(15);function h(e){var t=e.render||e.children;return Object(i.jsxs)("section",{className:"TodoList",children:[e.error&&e.onError(),e.loading&&e.onLoading(),!e.loading&&!e.totalTodos&&e.onEmptyTodos(),!!e.totalTodos&&!e.findRelatedTodos.length&&e.onEmptySearchResults(e.searchText),"   ",!e.loading&&!e.error&&e.findRelatedTodos.map(t)]})}o(16);function m(e){return Object(i.jsxs)("div",{className:"TodoItem",children:[Object(i.jsxs)("label",{className:"TodoItem-custom-checkbox",children:[Object(i.jsx)("input",{type:"checkbox",id:"checkboxStatus",className:"TodoItem-checkbox ".concat(e.completed&&"TodoItem-checkbox-active")}),Object(i.jsx)("span",{onClick:e.onComplete,className:"TodoItemSpanBox ".concat(e.completed&&"TodoItemSpan")})]}),Object(i.jsx)("p",{children:e.text}),Object(i.jsx)("button",{className:"TodoItem-button-deleteItem",onClick:e.onDelete,children:"X"})]})}o(17);function O(e){return Object(i.jsx)("button",{className:"btnCreateTodo",onClick:function(){document.getElementById("search").value?(console.log("tx",document.getElementById("search").value),e.createTodo(document.getElementById("search").value)):(e.setModalText("Sorry, we couldnt add your TODO right now :("),console.log("tx2",document.getElementById("search").value)),e.setOpenModal(!0)},children:"NEW"})}o(18);function p(e,t){var o=t.children;return r.a.createPortal(Object(i.jsx)("div",{className:"Modal-bg",children:Object(i.jsxs)("div",{className:"Modal-Container",children:[o,Object(i.jsx)("p",{children:e.modalText}),Object(i.jsx)("span",{className:"Modal-btnClose",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"x"})]})}),document.getElementById("myModal"))}function b(e){var t=e.children,o=e.loading;return Object(i.jsx)(c.a.Fragment,{children:c.a.Children.toArray(t).map((function(e){return c.a.cloneElement(e,{loading:o})}))})}function x(){return Object(i.jsx)("p",{children:"Panic, there is an error coming!"})}function T(){return Object(i.jsx)("p",{children:"Loading TODOs, dont panic!"})}function f(){return Object(i.jsx)("p",{children:"Make ur first todo"})}function g(e){return Object(i.jsxs)("p",{children:["No results for ",e.searchText," "]})}o(19);var v,S=(v=function(e){var t=e.show,o=e.toggleShow;return t?Object(i.jsxs)("div",{className:"ChangeAlert",children:[Object(i.jsx)("p",{children:"There are changes, please reload"}),Object(i.jsx)("button",{onClick:function(){o(!1)},children:"Reload"})]}):null},function(e){var t=c.a.useState(!1),o=Object(l.a)(t,2),n=o[0],a=o[1];return window.addEventListener("storage",(function(e){"TODOS_V1"===e.key&&(a(!0),console.log("changes in TODOS_V1"))})),Object(i.jsx)(v,{show:n,toggleShow:function(){e.sincronize(),a(!1)}})});var y=function(){var e=d(),t=e.error,o=e.loading,n=e.findRelatedTodos,a=e.completeTodo,r=e.deleteTodo,s=e.openModal,l=e.setOpenModal,v=e.createTodo,y=e.modalText,C=e.setModalText,I=e.totalTodos,N=e.completedTodos,E=e.searchValue,M=e.setSearchValue,w=e.sincronizeTodos;return Object(i.jsxs)(c.a.Fragment,{children:[Object(i.jsx)("div",{className:"todo-header-wrapper",children:Object(i.jsxs)(b,{loading:o,children:[Object(i.jsx)(u,{totalTodos:I,completedTodos:N}),Object(i.jsx)(j,{searchValue:E,setSearchValue:M})]})}),Object(i.jsx)("div",{className:"todolist-inner-wrapper",children:Object(i.jsx)(h,{error:t,loading:o,totalTodos:I,findRelatedTodos:n,searchText:E,onError:function(){return Object(i.jsx)(x,{})},onLoading:function(){return Object(i.jsx)(T,{})},onEmptyTodos:function(){return Object(i.jsx)(f,{})},onEmptySearchResults:function(e){return Object(i.jsx)(g,{searchText:e})},children:function(e,t){return Object(i.jsx)(m,{text:e.text,completed:e.completed,onComplete:function(){return a(t)},onDelete:function(){return r(e.id)}},t)}})}),!!s&&Object(i.jsx)(p,{setOpenModal:l,modalText:y}),Object(i.jsx)(S,{sincronize:w}),"    ",Object(i.jsx)(O,{setOpenModal:l,createTodo:v,setModalText:C})]})};r.a.render(Object(i.jsx)(y,{}),document.getElementById("myApp"))}],[[20,1,2]]]);
//# sourceMappingURL=main.b1782ed9.chunk.js.map