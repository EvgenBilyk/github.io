(this["webpackJsonprandom-react"]=this["webpackJsonprandom-react"]||[]).push([[0],{25:function(e,c,t){},26:function(e,c,t){},34:function(e,c,t){"use strict";t.r(c);var r=t(1),a=t.n(r),n=t(11),s=t.n(n),l=(t(25),t(26),t(5)),i=t(13);function o(e,c){return e=Math.ceil(e),c=Math.floor(c),Math.floor(Math.random()*(c-e+1))+e}var d=function(e){var c=e.from,t=e.to,r=e.countNumber,a=e.notDouble,n=e.orderNumber,s=[];if(a)for(var l=0;l<r;l++){var i=o(c,t);s.includes(i)?r++:s.push(i)}else for(var d=0;d<r;d++){var j=o(c,t);s.push(j)}n&&s.sort((function(e,c){return e-c}));var b=[];return s.map((function(e,c){return c<10&&(b[c]=e),10===c&&(b[c]="..."),!0})),[s,b]};var j=function(e,c,t){var r={};e.map((function(e){return r[e]?r[e]++:r[e]=1,!0}));var a={};for(var n in r)a[r[n]]||(a[r[n]]=[]),a[r[n]].push(n);var s=[];for(var l in a)l>1&&s.push(l);"ASC"===t?s.sort((function(e,c){return e-c})):s.sort((function(e,c){return c-e})),c>s.length&&(c=s.length);for(var i=[],o=0;o<c;o++)i.push([s[o],a[s[o]]]);return i},b=Object(i.b)({name:"condition",initialState:{value:{hide:"hide"},arr:[],resultArr:{smallArr:[],fullArr:[]},arrayGenerate:[[],[]],arrayStatistic:[],hideArrayBlock:"hide",hideStatisticBlock:"hide"},reducers:{recordCondition:function(e,c){e.value=c.payload,e.arrayGenerate=d(c.payload),e.arrayStatistic=j(e.arrayGenerate[0],10),void 0!==e.arrayGenerate[0]&&(e.hideArrayBlock=""),void 0!==e.arrayStatistic[0]?e.hideStatisticBlock="":e.hideStatisticBlock="hide"},arrRandomRecord:function(e,c){e.arr=c.payload},resultSmallArr:function(e,c){e.resultArr.smallArr=c.payload},resultFullArr:function(e,c){e.resultArr.fullArr=c.payload}}}),m=b.actions,h=m.recordCondition,u=(m.arrRandomRecord,m.resultSmallArr,m.resultFullArr,function(e){return e.condition.value}),O=function(e){return e.condition.arrayGenerate},x=function(e){return e.condition.arrayStatistic},v=function(e){return e.condition.hideStatisticBlock},N=function(e){return e.condition.hideArrayBlock},f=b.reducer,p=t(0);var g=function(){var e=Object(l.b)();return Object(p.jsxs)("form",{onSubmit:function(c){c.preventDefault();var t={from:c.target.elements.from.value,to:c.target.elements.to.value,countNumber:c.target.elements.countNumber.value,notDouble:c.target.elements.notDouble.checked,orderNumber:c.target.elements.orderNumber.checked};!function(c){var r=+c.from,a=+c.to,n=+c.countNumber,s=c.notDouble,l="";(r<0||a<0)&&(l="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430 \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0443\u043b\u044f"),(r>999999999||a>999999999)&&(l="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430 \u043c\u0435\u043d\u044c\u0448\u0435 999 999 999"),n>1e4&&(l="\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 10 000"),a-r+1<n&&s&&(l='\u0443\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0441\u043b\u043e\u0432\u0438\u0435 "\u0431\u0435\u0437 \u043f\u043e\u0432\u0442\u043e\u0440\u043e\u0432" \u0438\u043b\u0438 \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b'),r>=a&&(l="\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e"),n<1&&(l="\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b \u0434\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u043e\u0434\u043d\u043e\u0433\u043e"),""!==l?(e(h({hide:"hide"})),alert(l)):e(h(t))}(t)},children:[Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("h5",{className:"mb-3",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d"}),Object(p.jsx)("div",{className:"col-lg-3",children:"\u043e\u0442"}),Object(p.jsxs)("div",{className:"col-lg-3",children:[Object(p.jsx)("label",{htmlFor:"fromNumber",className:"visually-hidden"}),Object(p.jsx)("input",{type:"number",name:"from",className:"form-control rand-inp inline",id:"fromNumber",placeholder:"\u043d\u0430\u0447\u0430\u043b\u043e",defaultValue:"1"})]}),Object(p.jsx)("div",{className:"col-lg-1",children:"\u0434\u043e"}),Object(p.jsxs)("div",{className:"col-lg-3",children:[Object(p.jsx)("label",{htmlFor:"toNumber",className:"visually-hidden",children:"\u043a\u043e\u043d\u0435\u0446"}),Object(p.jsx)("input",{type:"number",name:"to",className:"form-control rand-inp inline",id:"toNumber",placeholder:"\u043a\u043e\u043d\u0435\u0446",defaultValue:"100"})]})]}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("h5",{className:"mb-3",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0447\u0438\u0441\u0435\u043b"}),Object(p.jsx)("div",{className:"col-lg-3",children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0447\u0438\u0441\u0435\u043b"}),Object(p.jsxs)("div",{className:"col-lg-3",children:[Object(p.jsx)("label",{htmlFor:"countNumber",className:"visually-hidden"}),Object(p.jsx)("input",{type:"number",className:"form-control rand-inp inline",name:"countNumber",id:"countNumber",placeholder:"5",defaultValue:"5"})]})]}),Object(p.jsxs)("div",{className:"form-check",children:[Object(p.jsx)("input",{className:"form-check-input",type:"checkbox",name:"notDouble",defaultValue:"",id:"notDoubleNumber"}),Object(p.jsx)("label",{className:"form-check-label",htmlFor:"doubleNumber",children:"\u0411\u0435\u0437 \u043f\u043e\u0432\u0442\u043e\u0440\u043e\u0432"})]}),Object(p.jsxs)("div",{className:"form-check",children:[Object(p.jsx)("input",{className:"form-check-input",type:"checkbox",name:"orderNumber",id:"orderNumber"}),Object(p.jsx)("label",{className:"form-check-label",htmlFor:"orderNumber",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e \u043f\u043e\u0440\u044f\u0434\u043a\u0443"})]}),Object(p.jsx)("div",{className:"d-grid gap-2",children:Object(p.jsx)("button",{type:"submit",className:"btn-success mt-2",id:"btnResult",children:"\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0435 \u0447\u0438\u0441\u043b\u0430"})})]})},y=t(20),k=t.n(y);var S=function(){var e=Object(l.c)(u),c=e.orderNumber?"\u0441 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u043e\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432":"\u0431\u0435\u0437 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432",t=e.notDouble?"\u0431\u0435\u0437 \u043f\u043e\u0432\u0442\u043e\u0440\u043e\u0432":"\u0441 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u043c\u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u0430\u043c\u0438",r="".concat(e.countNumber," ").concat(function(e){var c=["\u0447\u0438\u0441\u043b\u043e","\u0447\u0438\u0441\u043b\u0430","\u0447\u0438\u0441\u0435\u043b"],t=[];return(e=String(e))>=20?e=+e.slice(e.length-1,e.length):e<20&&(e=+e.slice(e.length-2,e.length)),e<=20?(1<e<5&&(t[0]=c[1]),e>4&&(t=c[2]),1===e&&(t=c[0]),0===e&&(t=c[2])):(0===e&&(t=c[2]),1<e<5&&(t=c[1]),e>4&&(t=c[2]),1===e&&(t=c[0])),t}(e.countNumber),"  \u0432 \u0434\u0438\u0430\u043f\u0430\u0437\u043e\u043d\u0435 \u043e\u0442 ").concat(e.from," \u0434\u043e ").concat(e.to,", ").concat(c,", ").concat(t);return Object(p.jsx)("div",{className:e.hide,children:Object(p.jsx)("div",{className:"protocol",children:Object(p.jsx)("table",{className:"table",children:Object(p.jsxs)("tbody",{className:"table-condition",children:[Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"\u0423\u0441\u043b\u043e\u0432\u0438\u044f"}),Object(p.jsx)("td",{children:r})]}),Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435"}),Object(p.jsx)("td",{children:k()().format("DD.MM.YYYY h:mm:ss a")})]})]})})})})},A=t(19);var F=function(){var e,c=Object(r.useState)("hide"),t=Object(A.a)(c,2),a=t[0],n=t[1],s=Object(r.useState)("hide"),i=Object(A.a)(s,2),o=i[0],d=i[1],j=Object(l.c)(O)[0],b=Object(l.c)(x),m=Object(l.c)(v),h=Object(l.c)(N);return e="hide"===m?"\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u044e\u0449\u0438\u0445\u0441\u044f \u0447\u0438\u0441\u0435\u043b \u0434\u043b\u044f \u0432\u044b\u0432\u043e\u0434\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438 \u043d\u0435\u0442":"\u0415\u0441\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u044e\u0449\u0438\u043c\u0441\u044f \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u043c \u0447\u0438\u0441\u043b\u0430\u043c",Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"col-lg-6 mt-5",children:[Object(p.jsx)("div",{className:h,children:Object(p.jsx)("p",{className:"mt-3 bold",children:e})}),Object(p.jsx)("div",{className:m,children:Object(p.jsxs)("div",{className:"full-report",children:[Object(p.jsx)("div",{className:"mt-2 d-grid gap-2",children:Object(p.jsx)("button",{className:"bt",onClick:function(){d("hide"===o?"":"hide")},children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0443"})}),Object(p.jsx)("div",{children:Object(p.jsx)("div",{className:o,children:Object(p.jsxs)("table",{className:"table table-hover",children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{scope:"col",children:"\u2116 "}),Object(p.jsx)("th",{scope:"col",children:"\u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0435 \u0447\u0438\u0441\u043b\u0430"}),Object(p.jsx)("th",{scope:"col",children:"\u043a\u043e\u043b-\u0432\u043e \u043f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u0438\u0439"}),Object(p.jsx)("th",{scope:"col",children:"\u043a\u043e\u043b-\u0432\u043e \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b"})]})}),Object(p.jsx)("tbody",{children:b.map((function(e,c){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:c+1}),Object(p.jsx)("td",{className:"text-success  bold",children:e[1].join(", ")}),Object(p.jsx)("td",{className:"text-primary ",children:e[0]}),Object(p.jsx)("td",{className:"text-info ",children:e[1].length})]},c)}))})]})})})]})})]}),Object(p.jsx)("div",{className:"col-lg-6 mt-5",children:Object(p.jsx)("div",{className:h,children:Object(p.jsxs)("div",{className:"full-report",children:[Object(p.jsx)("p",{className:"mt-3 bold",children:"\u041f\u043e\u043b\u043d\u044b\u0439 \u043e\u0442\u0447\u0435\u0442 \u043f\u043e \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u043c \u0447\u0438\u0441\u043b\u0430\u043c"}),Object(p.jsx)("div",{className:"mt-2 d-grid gap-2",children:Object(p.jsx)("button",{onClick:function(){n("hide"===a?"":"hide")},children:"\u041f\u043e\u043b\u043d\u044b\u0439 \u043e\u0442\u0447\u0435\u0442"})}),Object(p.jsx)("div",{className:a,children:Object(p.jsx)("div",{className:"row contein-item",children:j.map((function(e,c){return Object(p.jsxs)("div",{className:"col-lg-2 block-item",children:[Object(p.jsx)("span",{className:"index-arr",children:c}),Object(p.jsx)("span",{className:"item-arr fs-2",children:e})]},c)}))})})]})})})]})};var D=function(){var e=Object(l.c)(u),c=Object(l.c)(O)[1];return Object(p.jsx)("div",{className:e.hide,children:Object(p.jsx)("div",{className:"border mt-4 ",children:Object(p.jsx)("div",{className:"text-wrap",children:Object(p.jsx)("p",{className:"text-center fs-2 out",children:c.join(", ")})})})})};var w=function(){return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsx)("h4",{className:"mb-3",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0435 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0435 \u0447\u0438\u0441\u043b\u0430"}),Object(p.jsxs)("div",{className:"row ",children:[Object(p.jsx)("div",{className:"col-lg-6",children:Object(p.jsx)(g,{})}),Object(p.jsxs)("div",{className:"col-lg-6 result-random",children:[Object(p.jsx)(S,{}),Object(p.jsx)(D,{})]})]}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)(F,{})})]})};var B=function(){return Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("h4",{children:"\u041a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435, \u0438\u0437\u0432\u0438\u043d\u0438\u0442\u0435 \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430"})})},C=t(14),M=t(3);var G=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(C.a,{children:[Object(p.jsx)("header",{children:Object(p.jsx)("nav",{className:"navbar navbar-expand-lg  navbar-light",style:{backgroundColor:"#e4f2fd"},children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown",children:Object(p.jsxs)("ul",{className:"navbar-nav",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(C.b,{to:"/rendom-generate",className:"nav-link bold",children:"\u0413\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440 \u0441\u043b\u0443\u0447\u0430\u0439\u043d\u044b\u0445 \u0447\u0438\u0441\u0435\u043b"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(C.b,{to:"/cart",className:"nav-link bold",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"})})]})})})})}),Object(p.jsxs)(M.c,{children:[Object(p.jsx)(M.a,{path:"/rendom-generate",component:w}),Object(p.jsx)(M.a,{path:"/cart",component:B})]})]}),Object(p.jsx)("footer",{})]})},R=Object(i.a)({reducer:{condition:f}}),V=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(c){var t=c.getCLS,r=c.getFID,a=c.getFCP,n=c.getLCP,s=c.getTTFB;t(e),r(e),a(e),n(e),s(e)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(l.a,{store:R,children:Object(p.jsx)(G,{})})}),document.getElementById("root")),V()}},[[34,1,2]]]);
//# sourceMappingURL=main.66093cdf.chunk.js.map