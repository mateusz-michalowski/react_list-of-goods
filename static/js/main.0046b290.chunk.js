(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,r=n(3),c=n.n(r),o=n(4),i=n(5),a=n(8),l=n(6),u=n(7),b=n(1),h=n.n(b),p=(n(13),n(14),n(0)),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var j=function(t){Object(a.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(o.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={isReversed:!1,sortType:0},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isReversed,r=e.sortType,c=function(t,e){var n=e.sortType,s=e.isReversed,r=Object(u.a)(t);switch(console.log(n,s),n){case 1:r.sort((function(t,e){return t.localeCompare(e)}));break;case 2:r.sort((function(t,e){return t.length-e.length}))}return s&&r.reverse(),r}(d,{sortType:r,isReversed:n});return Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:"button is-info is-light",onClick:function(){return t.setState({sortType:1})},children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:"button is-success is-light",onClick:function(){return t.setState({sortType:2})},children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:"button is-warning is-light",onClick:function(){return t.setState({isReversed:!n})},children:"Reverse"}),(n||r!==s.NONE)&&Object(p.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return t.setState({sortType:0,isReversed:!1})},children:"Reset"})]}),Object(p.jsx)("ul",{children:c.map((function(t){return Object(p.jsx)("li",{children:t})}))})]})}}]),n}(h.a.Component);c.a.render(Object(p.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.0046b290.chunk.js.map