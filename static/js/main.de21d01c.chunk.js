(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{29:function(t,e,n){},30:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n(0),c=n.n(a),o=n(20),r=n.n(o),i=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),s(t),a(t),c(t),o(t)}))},l=n(7),u=n(8),b=n(12),j=n(11),h=n(10),x=n(2),d=n(23),O=(n(29),function(t){return Object(s.jsx)("button",{className:"board-box",onClick:t.onClick,children:t.value})}),f=(n(30),function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(t){var s;return Object(l.a)(this,n),(s=e.call(this,t)).onBoxClick=function(t){var e=s.state.boxes.slice(),n=s.state.history;v(e)||e[t]||!0!==m(e)&&(e[t]=s.state.xIsNext?"x":"o",n.push(s.state.xIsNext?"x":"o"),s.setState({boxes:e,history:n,xIsNext:!s.state.xIsNext}))},s.onRestart=function(t){s.setState({boxes:Array(9).fill(null),history:[],xIsNext:!0})},s.state={boxes:Array(9).fill(null),history:[],xIsNext:!0},s}return Object(u.a)(n,[{key:"render",value:function(){var t,e=this,n=v(this.state.boxes),c=m(this.state.boxes);return t=n?"The winner is: ".concat(n,"!"):!n&&c?"Game drawn!":"It is ".concat(this.state.xIsNext?"x":"o","'s turn."),Object(s.jsxs)(a.Fragment,{children:[Object(s.jsx)(h.b,{to:"/",className:"board-link",children:"Go back to scoreboard"}),Object(s.jsxs)("div",{className:"board-wrapper",children:[Object(s.jsxs)("div",{className:"board",children:[Object(s.jsx)("h2",{className:"board-heading",children:t}),Object(s.jsxs)("div",{className:"board-row",children:[Object(s.jsx)(O,{value:this.state.boxes[0],onClick:function(){return e.onBoxClick(0)}}),Object(s.jsx)(O,{value:this.state.boxes[1],onClick:function(){return e.onBoxClick(1)}}),Object(s.jsx)(O,{value:this.state.boxes[2],onClick:function(){return e.onBoxClick(2)}})]}),Object(s.jsxs)("div",{className:"board-row",children:[Object(s.jsx)(O,{value:this.state.boxes[3],onClick:function(){return e.onBoxClick(3)}}),Object(s.jsx)(O,{value:this.state.boxes[4],onClick:function(){return e.onBoxClick(4)}}),Object(s.jsx)(O,{value:this.state.boxes[5],onClick:function(){return e.onBoxClick(5)}})]}),Object(s.jsxs)("div",{className:"board-row",children:[Object(s.jsx)(O,{value:this.state.boxes[6],onClick:function(){return e.onBoxClick(6)}}),Object(s.jsx)(O,{value:this.state.boxes[7],onClick:function(){return e.onBoxClick(7)}}),Object(s.jsx)(O,{value:this.state.boxes[8],onClick:function(){return e.onBoxClick(8)}})]})]}),Object(s.jsxs)("div",{className:"board-history-container",children:[Object(s.jsx)("h2",{className:"board-heading",children:"Moves history:"}),Object(s.jsxs)("ul",{className:"board-history",children:[0===this.state.history.length&&Object(s.jsx)("span",{children:"No moves to show."}),0!==this.state.history.length&&this.state.history.map((function(t,e){return Object(s.jsxs)("li",{children:["Move ",e+1,": ",Object(s.jsx)("strong",{children:t})]},e)}))]})]}),n&&Object(s.jsx)("div",{className:"board-footer",children:Object(s.jsx)("button",{className:"btn",onClick:this.onRestart,children:"Start new game"})})]})]})}}]),n}(a.Component));function v(t){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<e.length;n++){var s=Object(d.a)(e[n],3),a=s[0],c=s[1],o=s[2];if(t[a]&&t[a]===t[c]&&t[a]===t[o])return t[a]}return null}function m(t){var e=0;return t.forEach((function(t){null!==t&&e++})),9===e}var g=n(18),k=n.n(g),p=n(22),N=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"gameScoreboard",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"[]";Object(l.a)(this,t),this.storageName=e,localStorage.getItem(e)||localStorage.setItem(e,n)}return Object(u.a)(t,[{key:"getData",value:function(){return JSON.parse(localStorage.getItem(this.storageName))}},{key:"update",value:function(t){localStorage.setItem(this.storageName,JSON.stringify(t))}}]),t}(),C=(n(37),function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={scoreboard:[]},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=Object(p.a)(k.a.mark((function t(){var e;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(new N).getData();case 2:e=t.sent,this.setState({scoreboard:e});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"game",children:[Object(s.jsx)("h1",{children:"Recent games:"}),Object(s.jsx)("ul",{children:this.state.scoreboard.map((function(t,e){return Object(s.jsx)("li",{children:t},e)}))}),Object(s.jsx)(h.b,{to:"/board",children:Object(s.jsx)("button",{className:"btn",children:"Start new game"})})]})}}]),n}(c.a.Component)),y=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{className:"app",children:Object(s.jsxs)(h.a,{children:[Object(s.jsx)(x.a,{exact:!0,path:"/",component:C}),Object(s.jsx)(x.a,{path:"/board",component:f})]})})}}]),n}(a.Component);n(38);r.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root")),i()}},[[39,1,2]]]);
//# sourceMappingURL=main.de21d01c.chunk.js.map