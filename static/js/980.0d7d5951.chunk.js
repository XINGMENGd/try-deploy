"use strict";(self.webpackChunktalk_react_app=self.webpackChunktalk_react_app||[]).push([[980],{2386:function(t,e,n){n.d(e,{Z:function(){return s}});var r="index_card__M4uCu",i="index_info__zEbFJ",c="index_name__EHSP1",a="index_descript__y1usf",u=n(5403),o=n(6417),s=function(t){var e,n=t.li,s=t.index,d=void 0===s?0:s;return(0,o.jsxs)("div",{className:r,onClick:function(){return(0,u.A)("\u6211\u662f\u7b2c".concat(d+1,"\u4e2a"),500)},children:[(0,o.jsx)("img",{src:(e=n.image,e.replace("http","https")),loading:"lazy",alt:""}),(0,o.jsxs)("div",{className:i,children:[(0,o.jsx)("p",{className:c,children:n.name}),(0,o.jsx)("p",{className:a,children:n.descript})]})]})}},9472:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(7363);var i=n(6417),c=function(t){var e=t.title,n=(t.className,t.children);return function(t){(0,r.useEffect)((function(){document.title=t}),[])}(e),(0,i.jsx)(i.Fragment,{children:n})}},9307:function(t,e,n){n.d(e,{Z:function(){return d}});var r=n(885),i=n(7363),c=n.n(i),a=n(8683),u=n(5990),o=n(6417),s=function(t){var e=window.screen.width,n=t.height;return(0,o.jsxs)(u.ZP,(0,a.Z)((0,a.Z)({viewBox:"0 0 ".concat(e," ").concat(n),height:n,width:e,backgroundColor:"#f3f3f3",foregroundColor:"#85acd5"},t),{},{children:[(0,o.jsx)("rect",{x:"20",y:"20",rx:"10",ry:"10",width:"120",height:"80"}),(0,o.jsx)("rect",{x:"150",y:"25",rx:"5",ry:"5",width:e-150-20,height:"20"}),(0,o.jsx)("rect",{x:"150",y:"55",rx:"5",ry:"5",width:e-150-40,height:"15"}),(0,o.jsx)("rect",{x:"150",y:"80",rx:"5",ry:"5",width:e-150-60,height:"10"})]}))},d=function(){var t=(0,i.useState)(100),e=(0,r.Z)(t,2),n=e[0],a=(e[1],window.screen.height),u=Math.floor(a/n);return(0,o.jsx)(c().Fragment,{children:function(){for(var t=[],e=0;e<u;e++)t.push((0,o.jsx)(s,{height:n}));return t.map((function(t,e){return(0,o.jsx)("div",{children:t},e)}))}()})}},5403:function(t,e,n){n.d(e,{A:function(){return s}});var r=n(8683),i=n(885),c=n(7363),a=n(1739),u=n(6417);function o(t){var e=t.text,n=t.timeout,r=(0,c.useState)(!0),a=(0,i.Z)(r,2),o=a[0],s=a[1];return(0,c.useEffect)((function(){setTimeout((function(){s(!1)}),n)}),[]),o?(0,u.jsx)("div",{className:"c-toast",children:e}):null}function s(t,e){var n=document.createElement("div");document.body.appendChild(n);var i={text:t,timeout:e};e&&(i.timeout=e),a.createRoot(n).render((0,u.jsx)(o,(0,r.Z)({},i)))}},1853:function(t,e){e.Z={getHome:{method:"get",url:"/api/home"},getList:{method:"post",url:"/api/list"},getVirtuaList:{method:"get",url:"/api/virtuaList"}}},5970:function(t,e,n){n.d(e,{aB:function(){return a}});var r=n(885);var i=n(7467),c=n.n(i),a=c().create({baseURL:"https://www.fastmock.site/mock/".concat("c00624da6261543b2897e35dff28607c")});c().create({baseURL:"https://xxxx"}),c().create({baseURL:"https://xxx"});a.interceptors.response.use((function(t){return t}),function(t){var e=(0,r.Z)(t,2),n=e[0],i=e[1];return function(t){var e=t.response,r=t.config,c=r.url,a=r.params;return console.error("\n            =========warn begin===========\n            \u5f53\u524d\u8bf7\u6c42\uff1a".concat(c," \u5f02\u5e38\n            \u5f53\u524d\u8bf7\u6c42\u53c2\u6570 \ud83d\udc47\n            ").concat(JSON.stringify(a),"\n            \u9519\u8bef\u7801 ").concat(e[n],"\n            \u9519\u8bef\u6d88\u606f ").concat(e[i],"\n            =========warn end=============\n        ")),Promise.reject(t.response)}}(["status","statusText"]))},4856:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(7363);function i(t){return(0,r.useMemo)((function(){return function(t){return{get:function(e,n){return t.get(e,{params:n})},post:function(e,n){return t.post(e,n)},put:function(e,n){return t.put(e,n)},del:function(e,n){return t.delete(e,n)}}}(t)}),[])}},7601:function(t,e,n){n.d(e,{Z:function(){return s}});var r=n(8683),i=n(5970),c=n(4e3),a=n(9706),u=n.n(a),o=n(4856);function s(t,e){var n=t.method,a=t.url,s=e.data,d=void 0===s?{}:s,f=e.config,l=void 0===f?{}:f,h=(0,o.Z)(i.aB);if(!h[n])throw new Error("\u5f53\u524d\u8bf7\u6c42\u65b9\u6cd5\u4ec5\u652f\u6301get/post/put/delete");var x=(0,c.useRequest)((function(){return h[n](a,d)}),l),v=x.data,p=u()(v,"data.data",[]);return(0,r.Z)((0,r.Z)({},x),{},{data:p})}},3980:function(t,e,n){n.r(e),n.d(e,{default:function(){return x}});var r=n(885),i=n(7363),c=n(1853),a=n(9472),u=n(9307),o="index_list__WK9eq",s="index_item__Hk2Or",d=n(2386),f=n(7601),l=n(4e3),h=n(6417),x=function(){var t=(0,i.useRef)(null),e=(0,i.useRef)(null),n=(0,f.Z)(c.Z.getVirtuaList,{}),x=n.data,v=(n.error,n.loading),p=x.list,m=void 0===p?[]:p,g=(0,l.useVirtualList)(m,{containerTarget:t,wrapperTarget:e,itemHeight:120,overscan:10}),j=(0,r.Z)(g,1)[0];return console.log(j,"list"),v?(0,h.jsx)(u.Z,{}):(0,h.jsx)(a.Z,{title:"\u865a\u62df\u5217\u8868",children:(0,h.jsx)("div",{ref:t,style:{height:"100vh",overflow:"auto"},children:(0,h.jsx)("div",{ref:e,className:o,children:null===j||void 0===j?void 0:j.map((function(t,e){return(0,h.jsx)("div",{className:s,children:(0,h.jsx)(d.Z,{li:t.data,index:t.index})},e)}))})})})}}}]);