(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){"use strict";n.r(e);var s=n(1),o=n(0),c=n.n(o),a=n(15),i=n.n(a),r=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,35)).then((function(e){var n=e.getCLS,s=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),s(t),o(t),c(t),a(t)}))},l=n(3),u=n(4),b=n(6),x=n(5),h=n(18),j=n(8),d=(n(24),function(t){return Object(s.jsx)("button",{className:"board-box",onClick:t.onClick,children:t.value})}),O=(n(25),function(t){Object(b.a)(n,t);var e=Object(x.a)(n);function n(t){var s;return Object(l.a)(this,n),(s=e.call(this,t)).onBoxClick=function(t){var e=s.state.boxes.slice(),n=s.state.history;f(e)||e[t]||!0!==v(e)&&(e[t]=s.state.xIsNext?"x":"o",n.push(s.state.xIsNext?"x":"o"),s.setState({boxes:e,history:n,xIsNext:!s.state.xIsNext}))},s.onRestart=function(t){s.setState({boxes:Array(9).fill(null),history:[],xIsNext:!0})},s.state={boxes:Array(9).fill(null),history:[],xIsNext:!0},s}return Object(u.a)(n,[{key:"render",value:function(){var t,e=this,n=f(this.state.boxes),o=v(this.state.boxes);return t=n?"The winner is: ".concat(n,"!"):!n&&o?"Game drawn!":"It is ".concat(this.state.xIsNext?"x":"o","'s turn."),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(j.a,{to:"/",className:"board-link",children:"Go back to scoreboard"}),Object(s.jsxs)("div",{className:"board-wrapper",children:[Object(s.jsxs)("div",{className:"board",children:[Object(s.jsx)("h2",{className:"board-heading",children:t}),Object(s.jsxs)("div",{className:"board-row",children:[Object(s.jsx)(d,{value:this.state.boxes[0],onClick:function(){return e.onBoxClick(0)}}),Object(s.jsx)(d,{value:this.state.boxes[1],onClick:function(){return e.onBoxClick(1)}}),Object(s.jsx)(d,{value:this.state.boxes[2],onClick:function(){return e.onBoxClick(2)}})]}),Object(s.jsxs)("div",{className:"board-row",children:[Object(s.jsx)(d,{value:this.state.boxes[3],onClick:function(){return e.onBoxClick(3)}}),Object(s.jsx)(d,{value:this.state.boxes[4],onClick:function(){return e.onBoxClick(4)}}),Object(s.jsx)(d,{value:this.state.boxes[5],onClick:function(){return e.onBoxClick(5)}})]}),Object(s.jsxs)("div",{className:"board-row",children:[Object(s.jsx)(d,{value:this.state.boxes[6],onClick:function(){return e.onBoxClick(6)}}),Object(s.jsx)(d,{value:this.state.boxes[7],onClick:function(){return e.onBoxClick(7)}}),Object(s.jsx)(d,{value:this.state.boxes[8],onClick:function(){return e.onBoxClick(8)}})]})]}),Object(s.jsxs)("div",{className:"board-history-container",children:[Object(s.jsx)("h2",{className:"board-heading",children:"Moves history:"}),Object(s.jsxs)("ul",{className:"board-history",children:[0===this.state.history.length&&Object(s.jsx)("span",{children:"No moves to show."}),0!==this.state.history.length&&this.state.history.map((function(t,e){return Object(s.jsxs)("li",{children:["Move ",e+1,": ",Object(s.jsx)("strong",{children:t})]},e)}))]})]}),n&&Object(s.jsx)("div",{className:"board-footer",children:Object(s.jsx)("button",{className:"btn",onClick:this.onRestart,children:"Start new game"})})]})]})}}]),n}(o.Component));function f(t){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<e.length;n++){var s=Object(h.a)(e[n],3),o=s[0],c=s[1],a=s[2];if(t[o]&&t[o]===t[c]&&t[o]===t[a])return t[o]}return null}function v(t){var e=0;return t.forEach((function(t){null!==t&&e++})),9===e}var m=n(13),k=n.n(m),g=n(17),C=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"gameScoreboard",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"[]";Object(l.a)(this,t),this.storageName=e,localStorage.getItem(e)||localStorage.setItem(e,n)}return Object(u.a)(t,[{key:"getData",value:function(){return JSON.parse(localStorage.getItem(this.storageName))}},{key:"update",value:function(t){localStorage.setItem(this.storageName,JSON.stringify(t))}}]),t}(),N=(n(32),c.a.Component,function(t){Object(b.a)(n,t);var e=Object(x.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"app",children:Object(s.jsx)(O,{})})}}]),n}(o.Component));n(33);i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root")),r()}},[[34,1,2]]]);
//# sourceMappingURL=main.6b120598.chunk.js.map