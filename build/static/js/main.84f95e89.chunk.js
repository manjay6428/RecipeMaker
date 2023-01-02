(this["webpackJsonpreact-recipes"]=this["webpackJsonpreact-recipes"]||[]).push([[0],{156:function(e,t,a){e.exports=a.p+"static/media/logo.65c6cea3.svg"},185:function(e,t,a){e.exports=a(323)},190:function(e,t,a){},323:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(44),l=a.n(c),o=a(22),i=a(37),s=(a(190),a(337)),u=a(156),m=a.n(u);var p=function(){return r.a.createElement(s.a,{borderless:!0,fixed:"top"},r.a.createElement(s.a.Item,null,r.a.createElement(s.a.Header,{style:{marginRight:"25px"}},r.a.createElement("img",{src:m.a,alt:"logo"}))),r.a.createElement(s.a.Item,{as:o.b,to:"/",content:"Home"}),r.a.createElement(s.a.Item,{as:o.c,to:"/recipes",content:"Recipes"}))},E=a(324);var g=function(e){return r.a.createElement("div",{className:e.bgClass},r.a.createElement("div",{className:"text-content"},r.a.createElement("h1",{className:"header-title"},e.title),e.children))};var f=function(){return r.a.createElement(g,{bgClass:"bg-image",title:"Amazing Recipes"},r.a.createElement(E.a,{as:o.b,to:"/recipes",color:"linkedin",content:"SEARCH RECIPES",size:"big"}))};var b=function(){return r.a.createElement(g,{bgClass:"bg-default-image",title:"404"},r.a.createElement("p",{className:"sub-text"},"You are in the wrong place"),r.a.createElement(E.a,{as:o.b,to:"/",color:"grey",content:"RETURN HOME",size:"big"}))},h=a(35),d=a(338),v=a(334),y=a(332);var O=function(e){var t=Object(n.useState)(""),a=Object(h.a)(t,2),c=a[0],l=a[1];return r.a.createElement(d.a,{textAlign:"center",columns:2,className:"search-box"},r.a.createElement(d.a.Column,null,r.a.createElement("h2",{className:"search-heading"},"Search Recipes With"," ",r.a.createElement("span",{style:{color:"#ff3333"}},"Food2Fork")),r.a.createElement("h4",null,"Type Recipes Separated By Comma"),r.a.createElement(v.a,{onSubmit:function(){e.onSearch(c)}},r.a.createElement(y.a,{placeholder:"chicken,onion,carrots",action:{icon:"search",color:"blue"},fluid:!0,onChange:function(e){l(e.target.value)},value:c}))))},x=a(57),j=a.n(x),k=a(27),w=a(87),C=a(333),R=a(339),P=a(336);var S=function(e){var t=e.recipe;return r.a.createElement(P.a,null,r.a.createElement("img",{src:t.image_url,height:170,alt:"thumbnail"}),r.a.createElement(P.a.Content,null,r.a.createElement(P.a.Header,{content:t.title}),r.a.createElement(P.a.Description,null,r.a.createElement("h4",{className:"text-cursive txt-yellow"},t.publisher))),r.a.createElement(P.a.Content,{extra:!0},r.a.createElement(E.a,{as:o.b,to:"/recipes/".concat(t.recipe_id),content:"Details",color:"blue",size:"tiny"}),r.a.createElement(E.a,{as:"a",href:t.source_url,target:"_blank",content:"Recipe URL",color:"green",size:"tiny"})))},N=a(175);var I=function(){return r.a.createElement(N.a,{src:"/images/loader.gif",centered:!0})},_="https://forkify-api.herokuapp.com/api";function z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?z(a,!0).forEach((function(t){Object(k.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):z(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var B=function(e){var t=Object(n.useState)({recipes:[],loading:!1}),a=Object(h.a)(t,2),c=a[0],l=a[1];Object(n.useEffect)((function(){o()}),[e.query]);var o=function(){var t=Object(w.a)(j.a.mark((function t(){var a,n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a="".concat(_,"/search?q=").concat(e.query),l(q({},c,{loading:!0})),t.next=5,fetch(a);case 5:return n=t.sent,t.next=8,n.json();case 8:r=t.sent,l({recipes:r.recipes,loading:!1}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(C.a,null,r.a.createElement(R.a,{size:"huge",content:e.query?"RECIPE LIST FOR: ".concat(e.query):"RECIPE LIST",className:"text-cursive",textAlign:"center"}),c.loading&&r.a.createElement(I,null),r.a.createElement(d.a,{doubling:!0,columns:4},c.recipes&&c.recipes.map((function(e,t){return r.a.createElement(d.a.Column,{key:t},r.a.createElement(S,{recipe:e}))}))))};var D=function(){var e=Object(n.useState)(""),t=Object(h.a)(e,2),a=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{onSearch:function(e){c(e)}}),r.a.createElement(B,{query:a}))},F=a(340);var H=function(e){var t=Object(n.useState)({recipe:{},loading:!0}),a=Object(h.a)(t,2),c=a[0],l=a[1];return Object(n.useEffect)((function(){(function(){var t=Object(w.a)(j.a.mark((function t(){var a,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(_,"/get?rId=").concat(e.match.params.recipe_id));case 3:return a=t.sent,t.next=6,a.json();case 6:n=t.sent,l({recipe:n.recipe,loading:!1}),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}})()()}),[]),c.recipe?r.a.createElement(d.a,{container:!0,stackable:!0,columns:2,className:"detailPageContent"},r.a.createElement(d.a.Column,null,r.a.createElement(E.a,{as:o.b,to:"/recipes",color:"yellow",content:"Back to recipe list",style:{marginBottom:"3rem"}}),c.loading&&r.a.createElement(I,null),r.a.createElement(N.a,{src:c.recipe.image_url})),r.a.createElement(d.a.Column,null,r.a.createElement(R.a,{size:"medium"},c.recipe.title),r.a.createElement("p",{className:"text-cursive txt-yellow"},"Provided By ",c.recipe.publisher),r.a.createElement(E.a,{as:"a",href:c.recipe.publisher_url,target:"_blank",color:"blue",content:"Publisher Webpage"}),r.a.createElement(E.a,{as:"a",href:c.recipe.source_url,target:"_blank",color:"green",content:"Recipe URL"}),r.a.createElement(R.a,{size:"large",content:"Ingredients"}),r.a.createElement(F.a.Group,null,c.recipe.ingredients&&c.recipe.ingredients.map((function(e,t){return r.a.createElement(F.a,{key:t},r.a.createElement("h5",{className:"text-cursive"},e))}))))):r.a.createElement(d.a,{container:!0,stackable:!0,columns:2,className:"detailPageContent"},r.a.createElement(R.a,null,"Nothing found !!"))};var A=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(p,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:f}),r.a.createElement(i.a,{exact:!0,path:"/recipes",component:D}),r.a.createElement(i.a,{exact:!0,path:"/recipes/:recipe_id",component:H}),r.a.createElement(i.a,{component:b}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(322);l.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[185,1,2]]]);
//# sourceMappingURL=main.84f95e89.chunk.js.map