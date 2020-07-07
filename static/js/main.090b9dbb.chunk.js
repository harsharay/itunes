(this.webpackJsonpitunes=this.webpackJsonpitunes||[]).push([[0],{142:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),l=a.n(c),o=(a(82),a(42));a(83);var i=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){console.log(e);var t=e.match.params.trackId;fetch("https://itunes.apple.com/search?term=".concat(t,"&entity=song")).then((function(e){return e.json()})).then((function(e){return l(e.results[0])}))}),[]),r.a.createElement("div",{className:"sep-page"},r.a.createElement("img",{src:c.artworkUrl100,alt:c.collectionName}),r.a.createElement("div",{className:"content"},r.a.createElement("h1",null,c.trackName),r.a.createElement("h2",null,c.artistName),r.a.createElement("h3",null,c.collectionName),r.a.createElement("br",null),r.a.createElement("a",{href:c.trackViewUrl},"View the track in Itunes"),r.a.createElement("h4",null,"Track Price:",c.trackPrice),r.a.createElement("h4",null,"Collection Price:",c.collectionPrice),r.a.createElement("a",{href:c.collectionViewUrl},"View this collection in Itunes")))},u=a(40),s=a(6),m=a(13),h=a(41),d=a(146),p=(a(88),Object(h.b)((function(e){return{data:e.data}}),(function(e){return{handleClick:function(t){return e({type:"SEARCH",payload:t})}}}))((function(e){var t=Object(n.useState)({query:"",loading:!1}),a=Object(o.a)(t,2),c=a[0],l=a[1];return r.a.createElement("div",{className:"search"},r.a.createElement("h2",null,"Search for an artist"),r.a.createElement(d.a,{placeholder:"type here...",onChange:function(e){var t=e.target.value;l((function(e){return Object(m.a)(Object(m.a)({},e),{},{query:t,loading:!1})}))},value:c.query}),r.a.createElement("button",{onClick:function(){if(c.query.includes(" ")){var t=c.query.split(" ").join("+");e.handleClick(t),l({query:""})}else e.handleClick(c.query)}},"Search"),r.a.createElement("div",{className:"results-list"},"Error"!==e.data[0]?e.data.map((function(e,t){return r.a.createElement("div",{className:"individual",key:t},r.a.createElement(u.b,{to:"/id/"+e.trackId,target:"_blank"},r.a.createElement("h1",null,e.trackName)),r.a.createElement("h3",null,e.collectionName),r.a.createElement("img",{src:e.artworkUrl100,alt:e.collectionName}),r.a.createElement("a",{href:e.trackViewUrl,target:"_blank"},"View the track in Itunes"),r.a.createElement("h4",null,"Track Price:",e.trackPrice),r.a.createElement("h4",null,"Collection Price:",e.collectionPrice),r.a.createElement("a",{href:e.collectionViewUrl,target:"_blank"},"View this collection in Itunes"))})):r.a.createElement("h2",{className:"error"},"No response, try another valid search")))})));a(142);var E=function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"title"},"Itunes Search"),r.a.createElement(s.a,{exact:!0,path:"/home",component:p}),r.a.createElement(s.a,{path:"/id/:trackId",component:i})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=a(35),b=a.n(f),k=a(22),v=b.a.mark(O),y=b.a.mark(w),j=function(e){return e.query};function O(){var e,t,a;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(k.c)(j);case 3:return e=n.sent,n.next=6,Object(k.a)(fetch,"https://itunes.apple.com/search?term=".concat(e));case 6:return t=n.sent,n.next=9,t.json();case 9:if(0===(a=n.sent).resultCount){n.next=15;break}return n.next=13,Object(k.b)({type:"API_CALL",payload:a.results});case 13:n.next=17;break;case 15:return n.next=17,Object(k.b)({type:"API_ERROR"});case 17:n.next=24;break;case 19:return n.prev=19,n.t0=n.catch(0),console.log(n.t0.message,"error"),n.next=24,Object(k.b)({type:"API_ERROR"});case 24:case"end":return n.stop()}}),v,null,[[0,19]])}function w(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.d)("SEARCH",O);case 2:case"end":return e.stop()}}),y)}var g={data:[],query:""},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;return"SEARCH"===t.type?Object(m.a)(Object(m.a)({},e),{},{query:t.payload}):"API_CALL"===t.type?Object(m.a)(Object(m.a)({},e),{},{data:t.payload}):"API_ERROR"===t.type?Object(m.a)(Object(m.a)({},e),{},{data:["Error"]}):e},x=a(20),I=a(75),C=Object(I.a)(),P=Object(x.d)(N,Object(x.a)(C));C.run(w),l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,{store:P},r.a.createElement(E,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},77:function(e,t,a){e.exports=a(144)},82:function(e,t,a){},83:function(e,t,a){},88:function(e,t,a){}},[[77,1,2]]]);
//# sourceMappingURL=main.090b9dbb.chunk.js.map