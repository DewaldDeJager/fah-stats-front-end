(this["webpackJsonpfah-stats"]=this["webpackJsonpfah-stats"]||[]).push([[0],{208:function(e,t,n){},353:function(e,t,n){"use strict";n.r(t);n(9);var a=n(0),r=n.n(a),o=n(27),c=n.n(o),i=n(26),s=(n(208),n(358)),l=n(49),u=n(2);var d={header:{name:"14o0fw",styles:"padding:0.5rem 2rem 0.5rem 0;vertical-align:bottom;margin:0 auto"},logo:{name:"1px5clx",styles:"margin:0;font-family:Oswald;>img{margin-right:1rem;padding-right:1rem;border-right:1px solid #fe6215;}>span{font-family:Oswald;font-size:2rem;color:white;text-transform:uppercase;vertical-align:middle;}"},link:{name:"uqvezt",styles:"display:inline-block;font-family:Raleway;font-weight:400;font-size:1.2rem;color:white;border-bottom:2px solid transparent;padding:.5rem;transition:border-color .25s ease-in-out;&:hover,&.active{color:white;border-bottom-color:#fe6215;}"}},m=function(){return Object(u.a)(s.a,{css:d.header,title:Object(u.a)(l.c,{to:"/"},Object(u.a)("span",{css:d.logo},Object(u.a)("img",{alt:"FOLDING@HOME",src:"/static/logo-2.png",height:"50"}),Object(u.a)("span",null,"Statistics"))),extra:[Object(u.a)(l.c,{key:"home",to:"/",css:d.link,exact:!0},"Home"),Object(u.a)(l.c,{key:"team",to:"/team",css:d.link},"Team"),Object(u.a)(l.c,{key:"donor",to:"/donor",css:d.link},"Donor"),Object(u.a)(l.c,{key:"project",to:"/project",css:d.link},"Project")]})},b=n(41),f=n(150),p=n(56),h=n(367),v=n(368),j=n(357),O=n(359),y=n(71),g=n(30),w=n.n(g),x=n(50),k=n(84),C=n(131),I=Object(C.b)({name:"stats",initialState:{},reducers:{myself:function(e,t){e.myself=t.payload},donor:function(e,t){e.donor=t.payload},donorMonthly:function(e,t){e.donorMonthly=t.payload},donorProfile:function(e,t){e.donorProfile=t.payload},team:function(e,t){e.team=t.payload},teamMonthly:function(e,t){e.teamMonthly=t.payload},os:function(e,t){e.os=t.payload},project:function(e,t){e.project=t.payload},server:function(e,t){e.server=t.payload}}}),S=n(100);Object(S.setOriginalFetch)(window.fetch),window.fetch=S.progressBarFetch;var P=function(e){var t=Object.keys(e).map((function(t){var n=e[t],a="";return"undefined"!==typeof n&&(a="".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(n))),a})).filter((function(e){return e}));return t.length?"?".concat(t.join("&")):""},T=function(e){return{status:"error",message:e}};function F(e,t){return N.apply(this,arguments)}function N(){return(N=Object(x.a)(w.a.mark((function e(t,n){var a,r,o,c,i,s=arguments;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>2&&void 0!==s[2]?s[2]:"GET",r=t,o={method:a,headers:{"Content-Type":"application/json"}},n&&("GET"===a?r+=P(n):o.body=JSON.stringify(n)),e.next=6,fetch(r,o);case 6:if(200===(c=e.sent).status){e.next=9;break}return e.abrupt("return",T("The server responded with an unexpected status."));case 9:return e.next=11,c.json();case 11:return i=e.sent,e.abrupt("return",i);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(e,t){return F(e,t)},z=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).apiHost||"https://api2.foldingathome.org",E=function(e){var t,n=[];return null===e||void 0===e||e.forEach((function(e,a){if(0===a)t=e;else{var r={};t.forEach((function(t,n){r[t]=null===e||void 0===e?void 0:e[n]})),n.push(r)}})),n},M=function(e){var t=[];switch(e.constructor){case Array:t=e;break;case Object:t=[e]}return"error"===(null===e||void 0===e?void 0:e.status)&&(t=[]),t},q=function(e){var t={};return Object.keys(e).forEach((function(n){var a,r,o;((null===(a=e[n])||void 0===a?void 0:a.ws)||[]).forEach((function(e){var n,a;o=Object(k.a)({},e),r=o.address,o.type=o.is_cs&&!(null===(n=o)||void 0===n||null===(a=n.jobs)||void 0===a?void 0:a.total)?"CS":"WS",t[r]=Object(k.a)(Object(k.a)({},t[r]),o)})),delete(o=Object(k.a)({},e[n])).ws,r=o.address,o.type="AS",t[r]=Object(k.a)(Object(k.a)({},o),t[r])})),Object.values(t)},A=I.actions,U=A.myself,R=A.donor,L=A.donorMonthly,_=A.donorProfile,G=A.team,B=A.teamMonthly,H=A.os,J=A.project,W=A.server,V=function(e){var t=e.teamName;return function(){var e=Object(x.a)(w.a.mark((function e(n){var a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="".concat(z,t?"/team/find":"/team"),e.next=4,D(a,{name:t});case 4:r=e.sent,n(G(M(r))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},K=function(e){var t=e.donorName;return function(){var e=Object(x.a)(w.a.mark((function e(n){var a,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a="".concat(z,t?"/user/find":"/user"),e.next=4,D(a,{name:t});case 4:r=e.sent,n(R(M(r))),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},Y=function(e){var t=e.donorName,n=e.donorId,a=e.action,r=e.isMyself;return function(){var e=Object(x.a)(w.a.mark((function e(o){var c,i,s,l,u,d;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,o(a([])),c=t||r&&localStorage.getItem("donorName"),i=n||r&&localStorage.getItem("donorId"),c||i){e.next=6;break}return e.abrupt("return");case 6:if(!i){e.next=12;break}return e.next=9,D("".concat(z,"/uid/").concat(i));case 9:s=e.sent,e.next=16;break;case 12:if(!c){e.next=16;break}return e.next=15,D("".concat(z,"/user/find"),{name:c});case 15:s=e.sent;case 16:l=M(s),r&&l.length&&(localStorage.setItem("donorName",null===l||void 0===l||null===(u=l[0])||void 0===u?void 0:u.name),localStorage.setItem("donorId",null===l||void 0===l||null===(d=l[0])||void 0===d?void 0:d.id)),o(a(l)),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),console.error(e.t0.message);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(t){return e.apply(this,arguments)}}()},X=function(e){var t=e.donorName,n=e.donorId;return function(){var e=Object(x.a)(w.a.mark((function e(a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(Y({donorName:t,donorId:n,action:U,isMyself:!0}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Z=n(80),Q=n(365),$=n(134),ee=n.n($),te=n(174),ne=n.n(te),ae=n(175),re=n.n(ae);ee.a.extend(ne.a),ee.a.extend(re.a);var oe={certified:{name:"ytkbzc",styles:">span{color:#fe6215;}vertical-align:middle;.anticon{margin-right:0.25rem;}"}},ce=function(e){var t=e.date;return t?Object(u.a)(Z.a,{title:t},"".concat(ee()(t).fromNow(!0)," ago")):Object(u.a)("span",null,t)},ie=function(e){var t=e.count,n=e.maximumFractionDigits;return(null===t||void 0===t?void 0:t.toLocaleString(void 0,{maximumFractionDigits:n||0}))||Object(u.a)("span",null,t)},se=function(e){var t=e.id,n=e.text,a=e.type;return t&&n&&a&&Object(u.a)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://apps.foldingathome.org/awards?user=".concat(t,"&type=").concat(a),css:oe.certified},Object(u.a)(Q.a,{twoToneColor:"#fe6215"}),Object(u.a)("span",null,n))},le=function(e){var t=e.team;return Object(u.a)(r.a.Fragment,null,Object(u.a)("h4",null,"".concat(t.name," (").concat(t.team,")")),Object(u.a)("p",null,Object(u.a)("span",null,"Earned "),Object(u.a)("strong",null,Object(u.a)(ie,{count:t.score})),Object(u.a)("span",null," points by contributing "),Object(u.a)("strong",null,Object(u.a)(ie,{count:t.wus})),Object(u.a)("span",null," work units")))},ue=n(360),de=n(362),me=n(366),be=n(364);var fe=ue.a.Meta,pe={subTitle:{name:"lq7tz0",styles:"border-bottom:1px solid #DDD"},container:{name:"1oax00r",styles:"margin:1rem 0"},width5:{name:"67t0gq",styles:"width:5rem"},width10:{name:"y9jx00",styles:"width:10rem"},width15:{name:"fbpmvq",styles:"width:15rem"},searchInput:{name:"bjn8wh",styles:"position:relative"},clearIcon:{name:"1pqxgx1",styles:"position:absolute;right:0;padding:0.5rem;cursor:pointer"},teams:{name:"822evq",styles:"padding-left:1rem;max-height:20rem;overflow-y:auto"},cardContainer:{name:"1sbb7jn",styles:"max-width:25rem;.ant-ribbon{top:5rem;}&.topRankDonor{}"},otherRankDonor:{name:"1j3poyg",styles:".ant-ribbon{opacity:0;}"},card:{name:"tsst6g",styles:"border-color:transparent;box-shadow:0 1px 2px -2px #00000029,0 3px 6px 0 #0000001f,0 5px 12px 4px #00000017;.ant-card-meta{padding:1rem;background-color:#e6f7ff;.ant-card-meta-title{color:#fe6215;margin:0;font-family:SaintEliaRough;font-size:1.6rem;text-transform:lowercase;padding:0 0.25rem;}}.ant-card-meta-avatar svg{margin:0.5rem 0;height:3rem;width:3rem;}"},cardRank:{name:"1n2t3ik",styles:"color:#555555;font-weight:bold"},linkButton:{name:"dho80t",styles:"padding:0;height:auto"}},he=function(e){var t,n=e.donor,a=e.editAction,o=[Object(u.a)(se,{id:n.id,type:"wus",text:"My Award",key:"award"})];a&&o.push(Object(u.a)(y.a,{type:"link",onClick:a,css:pe.linkButton},Object(u.a)(me.a,null),Object(u.a)("span",null," Edit name"))),o.push("ID: ".concat(n.id));var c,i,s,l=null===n||void 0===n?void 0:n.rank;return l>=1&&l<=100?(c=!0,i="100",s="#ad8b00"):l<=1e3?(c=!0,i="1K",s="#fe6215"):l<=1e4?(c=!0,i="10K",s="#1890ff"):(c=!1,i="",s="#fe6215"),Object(u.a)("div",{css:[pe.cardContainer,c?pe.topRankDonor:pe.otherRankDonor,"",""]},Object(u.a)(de.a.Ribbon,{text:c?"Top ".concat(i," Ranked Donor"):"",style:{backgroundColor:s}},Object(u.a)(ue.a,{actions:o,css:pe.card,cover:Object(u.a)(fe,{avatar:Object(u.a)(be.a,{css:pe.coverSmile,twoToneColor:"#fe6215"}),title:n.name,description:Object(u.a)(r.a.Fragment,null,Object(u.a)("span",null,"Rank "),Object(u.a)("span",{css:pe.cardRank},Object(u.a)(ie,{count:n.rank||n.users})),Object(u.a)("span",null," of "),Object(u.a)(ie,{count:n.users}))})},Object(u.a)("p",null,Object(u.a)("span",null,"I have earned "),Object(u.a)("strong",null,Object(u.a)(ie,{count:n.score})),Object(u.a)("span",null," points by contibuting "),Object(u.a)("strong",null,Object(u.a)(ie,{count:n.wus})),Object(u.a)("span",null," work units. "),(null===n||void 0===n?void 0:n.last)&&Object(u.a)(r.a.Fragment,null,Object(u.a)("span",null,"My work unit was last recorded "),Object(u.a)(ce,{date:n.last}))),Object(u.a)("h3",{css:pe.subTitle},"Active clients"),Object(u.a)("p",null,Object(u.a)("strong",null,Object(u.a)(ie,{count:n.active_50})),Object(u.a)("span",null," within 50 days"),Object(u.a)("br",null),Object(u.a)("strong",null,Object(u.a)(ie,{count:n.active_7})),Object(u.a)("span",null," within 7 days")),Object(u.a)("h3",{css:pe.subTitle},"My Teams"),Object(u.a)("ul",{css:pe.teams},null===n||void 0===n||null===(t=n.teams)||void 0===t?void 0:t.map((function(e){return Object(u.a)("li",{key:e.team},Object(u.a)(le,{team:e}))}))))))};var ve={container:{name:"1oax00r",styles:"margin:1rem 0"},width5:{name:"67t0gq",styles:"width:5rem"},width10:{name:"y9jx00",styles:"width:10rem"},width15:{name:"fbpmvq",styles:"width:15rem"},searchInput:{name:"bjn8wh",styles:"position:relative"},clearIcon:{name:"1v5imhx",styles:"position:absolute;right:0;margin:0.15rem;padding:0.35rem;cursor:pointer;background-color:white"},teams:{name:"1vg0ztv",styles:">div{margin-bottom:1rem;}"},CertificateLink:{name:"uaob3j",styles:"margin-left:0.5rem"}},je=function(){var e,t=Object(i.b)(),n=Object(a.useState)(),r=Object(p.a)(n,2),o=r[0],c=r[1];Object(a.useEffect)((function(){t(X({}))}),[]);var s=function(){c(),t(function(){var e=Object(x.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{localStorage.removeItem("donorName"),t(U())}catch(n){console.error(n.message)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},l=Object(i.c)((function(e){return e.stats})),d=null===l||void 0===l||null===(e=l.myself)||void 0===e?void 0:e[0];return d?Object(u.a)(he,{donor:d,editAction:s}):Object(u.a)(j.a,{css:ve.container,onFinish:function(){t(X({donorName:o}))}},Object(u.a)("div",null,Object(u.a)("span",{css:ve.searchInput},Object(u.a)(O.a,{placeholder:"Search my Donor Name",type:"text",value:o,onChange:function(e){return c(e.target.value)},css:ve.width15}),o&&Object(u.a)(h.a,{css:ve.clearIcon,onClick:s})),Object(u.a)(y.a,{type:"primary",htmlType:"submit"},Object(u.a)(v.a,null),"Search")))};var Oe=f.a.TabPane,ye={mye:{name:"1hsb4d8",styles:"line-height:3.75rem"},ye:{name:"4zleql",styles:"display:block"},maximize:{name:"14slcs8",styles:"font-family:Oswald;font-size:5rem;font-weight:700;display:block"},your:{name:"1rcc15t",styles:"font-family:SaintEliaRough;font-size:4.5rem;font-weight:700;color:#fe6215;margin-right:1rem"},effort:{name:"1k13y3n",styles:"font-family:Oswald;font-size:3rem;font-weight:700"}},ge={container:{name:"akdqam",styles:"margin-top:1rem"},intro:{name:"4oktcb",styles:"display:flex;flex-wrap:wrap;>h2{width:350px;}>div{flex:1;vertical-align:top;}"},tabbedContent:{name:"i2pqtc",styles:".ant-tabs-nav{margin:0;padding:0;}"},tabPaneContent:{name:"1jyqsge",styles:"background-color:white;padding:1rem"}},we=function(e){var t=e.title,n=e.src,a=e.height,r=e.width;return Object(u.a)("iframe",{title:t,src:n,height:a,width:r})},xe=function(){return Object(u.a)("div",{css:ge.container},Object(u.a)("p",null,"On this page you will find access to statistics for individuals and teams who have joined together to earn points and compete with other teams. Some of us are quite intense in our approach to folding. We have team websites, we supe up our computers, and we drive the technology forward by reporting bugs and making suggestions about how to improve the software."),Object(u.a)("div",{css:ge.intro},Object(u.a)("h2",{css:ye.mye},Object(u.a)("span",{css:ye.maximize},"MAXIMIZE"),Object(u.a)("span",{css:ye.ye},Object(u.a)("span",{css:ye.your},"your"),Object(u.a)("span",{css:ye.effort},"EFFORT"))),Object(u.a)("div",null,Object(u.a)("h2",null,"Set up your team"),Object(u.a)("p",null,"One of the best ways to help Folding@home is by recruiting your friends and family. Start by sharing our project with them. Then join a team or even start your own team. The more points your team earns, the closer we come to finding cures. If you are interested in setting up a team of your own, you can get started here."))),Object(u.a)(f.a,{type:"card",css:ge.tabbedContent},Object(u.a)(Oe,{tab:"Me & My Teams",key:"1",css:ge.tabPaneContent},Object(u.a)(je,null)),Object(u.a)(Oe,{tab:"Create / Modify a Team",key:"2",css:ge.tabPaneContent},Object(u.a)(we,{title:"",src:"https://apps.foldingathome.org/team",height:"400",width:"100%"}))))},ke=n(363);var Ce={container:{name:"vtxs8z",styles:"margin:1rem"},note:{name:"nyfdx3",styles:"margin-bottom:3rem"}},Ie=function(){var e=Object(b.f)();return Object(u.a)("div",{css:Ce.container},Object(u.a)(ke.a,{status:"warning",title:"Page Not Found!",extra:Object(u.a)(r.a.Fragment,null,Object(u.a)("div",{css:Ce.note},"Your requested page ".concat(e.pathname," was not found.")),Object(u.a)(l.b,{to:"/"},"Take me back Home"))}))},Se=n(356),Pe=n(361),Te=function(e){var t=e.columns,n=e.dataSource,a=e.pagination;return Object(u.a)(Se.a,{bordered:!0,rowKey:function(){return Object(Pe.a)()},size:"small",sticky:!0,columns:t,dataSource:n,pagination:a,scroll:{x:"fit-content"}})};var Fe={container:{name:"1oax00r",styles:"margin:1rem 0"},width5:{name:"67t0gq",styles:"width:5rem"},width10:{name:"y9jx00",styles:"width:10rem"},width15:{name:"fbpmvq",styles:"width:15rem"},searchInput:{name:"bjn8wh",styles:"position:relative"},clearIcon:{name:"1pqxgx1",styles:"position:absolute;right:0;padding:0.5rem;cursor:pointer"}},Ne=function(){var e=Object(i.b)(),t=Object(a.useState)(),n=Object(p.a)(t,2),r=n[0],o=n[1];return Object(u.a)(j.a,{css:Fe.container,onFinish:function(){e(V({teamName:r}))}},Object(u.a)("div",null,Object(u.a)("span",{css:Fe.searchInput},Object(u.a)(O.a,{placeholder:"Search Team Name",type:"text",value:r,onChange:function(e){return o(e.target.value)},css:Fe.width15}),r&&Object(u.a)(h.a,{css:Fe.clearIcon,onClick:function(){o(),e(V({}))}})),Object(u.a)(y.a,{type:"primary",htmlType:"submit"},Object(u.a)(v.a,null),"Search")))};var De="/static/logo.png",ze={dNameIdContainer:{name:"10e1ngx",styles:"display:flex;.ant-skeleton-image{width:2rem;height:2rem;margin-right:1rem;}"},dName:{name:"l8l8b8",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis"},dId:{name:"q6wzws",styles:"flex:1;text-align:right;margin-left:0.5rem;color:#CCCCCC"},dLogo:{name:"rtzf3w",styles:"width:2rem;height:2rem;margin-right:1rem"}},Ee=function(e){return e&&!e.includes("http")?"https://".concat(e):e},Me=function(e){var t,n=null===e||void 0===e||null===(t=e.logo)||void 0===t?void 0:t.replace("http:","https:");return(!n||n&&n.includes("foldingathome.org")&&n.includes("folding-at-home-logo.png"))&&(n=De),n},qe=function(e){e.target.src=De},Ae=function(){var e=Object(i.b)();Object(a.useEffect)((function(){e(V({}))}),[]);var t=Object(i.c)((function(e){return e.stats})),n=[{title:"Team Name",dataIndex:"name",key:"name",width:200,fixed:"left",render:function(e,t){return Object(u.a)("span",{css:ze.dNameIdContainer},Object(u.a)("a",{target:"_blank",rel:"noopener noreferrer",href:Ee(null===t||void 0===t?void 0:t.url)},Object(u.a)(Z.a,{title:Ee(null===t||void 0===t?void 0:t.url)},Object(u.a)("img",{alt:"",src:Me(t),onError:qe,css:ze.dLogo}))),Object(u.a)("span",{css:ze.dName},e),Object(u.a)("span",{css:ze.dId},t.team))},sorter:function(e,t){var n;return null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n.localeCompare(null===t||void 0===t?void 0:t.name)}},{title:"Credit",dataIndex:"credit",key:"credit",align:"right",width:200,render:function(e){return Object(u.a)(ie,{count:e})},sorter:function(e,t){return e.credit-t.credit}},{title:"WUs",dataIndex:"wus",key:"wus",align:"right",width:200,render:function(e){return Object(u.a)(ie,{count:e})},sorter:function(e,t){return e.wus-t.wus}},{title:"Founder",dataIndex:"founder",key:"founder",width:200,render:function(e){return Object(u.a)(ie,{count:e})},sorter:function(e,t){var n;return null===e||void 0===e||null===(n=e.founder)||void 0===n?void 0:n.localeCompare(null===t||void 0===t?void 0:t.founder)}}];return Object(u.a)(r.a.Fragment,null,Object(u.a)(Ne,null),Object(u.a)(Te,{columns:n,dataSource:null===t||void 0===t?void 0:t.team,pagination:{defaultPageSize:10,showSizeChanger:!0}}))},Ue=n(102);var Re=["January","February","March","April","May","June","July","August","September","October","November","December"],Le=(new Date).getFullYear(),_e=(new Date).getMonth()+1,Ge={container:{name:"1oax00r",styles:"margin:1rem 0"},width10:{name:"y9jx00",styles:"width:10rem"},width12:{name:"1qnyavj",styles:"width:12rem"}},Be=function(){var e=Object(i.b)(),t=Object(a.useState)(Le),n=Object(p.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(_e),s=Object(p.a)(c,2),l=s[0],d=s[1];return Object(a.useEffect)((function(){e(function(e){var t=e.year,n=e.month;return function(){var e=Object(x.a)(w.a.mark((function e(a){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D("".concat(z,"/team/monthly"),{month:n,year:t});case 3:r=e.sent,a(B(M(r))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}({month:l,year:r}))}),[l,r]),Object(u.a)(j.a,{css:Ge.container},Object(u.a)(Ue.a,{css:Ge.width12,value:l,onChange:d,key:"month"},Re.map((function(e,t){return Object(u.a)(Ue.a.Option,{key:e,value:t+1},e)}))),Object(u.a)(Ue.a,{css:Ge.width10,value:r,onChange:o,key:"year"},function(){var e=[];return new Array(5).fill(0).forEach((function(t,n){e.push(Le-n)})),e}().map((function(e){return Object(u.a)(Ue.a.Option,{key:e,value:e},e)}))))};var He={dNameIdContainer:{name:"zjik7",styles:"display:flex"},dName:{name:"l8l8b8",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis"},dId:{name:"q6wzws",styles:"flex:1;text-align:right;margin-left:0.5rem;color:#CCCCCC"}},Je=function(){var e=Object(i.c)((function(e){return e.stats})),t=[{title:"Team Name",dataIndex:"name",key:"name",width:200,fixed:"left",render:function(e,t){return Object(u.a)("span",{css:He.dNameIdContainer},Object(u.a)("span",{css:He.dName},e),Object(u.a)("span",{css:He.dId},t.team))},sorter:function(e,t){var n;return null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n.localeCompare(null===t||void 0===t?void 0:t.name)}},{title:"Credit",dataIndex:"credit",key:"credit",align:"right",width:200,render:function(e){return Object(u.a)(ie,{count:e})},sorter:function(e,t){return e.credit-t.credit}},{title:"WUs",dataIndex:"wus",key:"wus",align:"right",width:200,render:function(e){return Object(u.a)(ie,{count:e})},sorter:function(e,t){return e.wus-t.wus}}];return Object(u.a)(r.a.Fragment,null,Object(u.a)(Be,null),Object(u.a)(Te,{columns:t,dataSource:null===e||void 0===e?void 0:e.teamMonthly,pagination:{defaultPageSize:10,showSizeChanger:!0}}))};var We=f.a.TabPane,Ve={tabbedContent:{name:"i2pqtc",styles:".ant-tabs-nav{margin:0;padding:0;}"},tabPaneContent:{name:"1jyqsge",styles:"background-color:white;padding:1rem"}},Ke=function(){return Object(u.a)(r.a.Fragment,null,Object(u.a)("h1",null,"Team Statistics"),Object(u.a)(f.a,{type:"card",css:Ve.tabbedContent},Object(u.a)(We,{tab:"Monthly",key:"1",css:Ve.tabPaneContent},Object(u.a)(Je,null)),Object(u.a)(We,{tab:"All-Time",key:"2",css:Ve.tabPaneContent},Object(u.a)(Ae,null))))},Ye=function(){var e=Object(b.g)().id;return Object(u.a)(r.a.Fragment,null,Object(u.a)("h1",null,"Team ".concat(e)))};var Xe={container:{name:"1oax00r",styles:"margin:1rem 0"},width5:{name:"67t0gq",styles:"width:5rem"},width10:{name:"y9jx00",styles:"width:10rem"},width15:{name:"fbpmvq",styles:"width:15rem"},searchInput:{name:"bjn8wh",styles:"position:relative"},clearIcon:{name:"1pqxgx1",styles:"position:absolute;right:0;padding:0.5rem;cursor:pointer"}},Ze=function(){var e=Object(i.b)(),t=Object(a.useState)(),n=Object(p.a)(t,2),r=n[0],o=n[1];return Object(u.a)(j.a,{css:Xe.container,onFinish:function(){e(K({donorName:r}))}},Object(u.a)("div",null,Object(u.a)("span",{css:Xe.searchInput},Object(u.a)(O.a,{placeholder:"Search Donor Name",type:"text",value:r,onChange:function(e){return o(e.target.value)},css:Xe.width15}),r&&Object(u.a)(h.a,{css:Xe.clearIcon,onClick:function(){o(),e(K({}))}})),Object(u.a)(y.a,{type:"primary",htmlType:"submit"},Object(u.a)(v.a,null),"Search")))};var Qe={dNameIdContainer:{name:"zjik7",styles:"display:flex"},dName:{name:"l8l8b8",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis"},dId:{name:"q6wzws",styles:"flex:1;text-align:right;margin-left:0.5rem;color:#CCCCCC"}},$e=function(){var e=Object(i.b)();Object(a.useEffect)((function(){e(K({}))}),[]);var t=Object(i.c)((function(e){return e.stats})),n=[{title:"Donor Name",dataIndex:"name",key:"name",width:200,fixed:"left",render:function(e,t){return Object(u.a)("span",{css:Qe.dNameIdContainer},Object(u.a)(l.b,{css:Qe.dName,target:"_blank",to:"/donor/".concat(t.id)},e),Object(u.a)("span",{css:Qe.dId},t.id))},sorter:function(e,t){var n;return null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n.localeCompare(null===t||void 0===t?void 0:t.name)}},{title:"Credit",dataIndex:"credit",key:"credit",align:"right",width:200,render:function(e){return Object(u.a)(ie,{count:e})},sorter:function(e,t){return e.credit-t.credit}},{title:"WUs",dataIndex:"wus",key:"wus",align:"right",width:200,render:function(e){return Object(u.a)(ie,{count:e})},sorter:function(e,t){return e.wus-t.wus}}];return Object(u.a)(r.a.Fragment,null,Object(u.a)(Ze,null),Object(u.a)(Te,{columns:n,dataSource:null===t||void 0===t?void 0:t.donor,pagination:{defaultPageSize:10,showSizeChanger:!0}}))};var et=["January","February","March","April","May","June","July","August","September","October","November","December"],tt=(new Date).getFullYear(),nt=(new Date).getMonth()+1,at={container:{name:"1oax00r",styles:"margin:1rem 0"},width10:{name:"y9jx00",styles:"width:10rem"},width12:{name:"1qnyavj",styles:"width:12rem"}},rt=function(){var e=Object(i.b)(),t=Object(a.useState)(tt),n=Object(p.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(nt),s=Object(p.a)(c,2),l=s[0],d=s[1];return Object(a.useEffect)((function(){e(function(e){var t=e.year,n=e.month;return function(){var e=Object(x.a)(w.a.mark((function e(a){var r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D("".concat(z,"/user/monthly"),{month:n,year:t});case 3:r=e.sent,a(L(M(r))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}({month:l,year:r}))}),[l,r]),Object(u.a)(j.a,{css:at.container},Object(u.a)(Ue.a,{css:at.width12,value:l,onChange:d,key:"month"},et.map((function(e,t){return Object(u.a)(Ue.a.Option,{key:e,value:t+1},e)}))),Object(u.a)(Ue.a,{css:at.width10,value:r,onChange:o,key:"year"},function(){var e=[];return new Array(5).fill(0).forEach((function(t,n){e.push(tt-n)})),e}().map((function(e){return Object(u.a)(Ue.a.Option,{key:e,value:e},e)}))))};var ot={dNameIdContainer:{name:"zjik7",styles:"display:flex"},dName:{name:"l8l8b8",styles:"white-space:nowrap;overflow:hidden;text-overflow:ellipsis"},dId:{name:"q6wzws",styles:"flex:1;text-align:right;margin-left:0.5rem;color:#CCCCCC"}},ct=function(){var e=Object(i.c)((function(e){return e.stats})),t=[{title:"Donor Name",dataIndex:"name",key:"name",width:200,fixed:"left",render:function(e,t){return Object(u.a)("span",{css:ot.dNameIdContainer},Object(u.a)("span",{css:ot.dName},e),Object(u.a)("span",{css:ot.dId},t.id))},sorter:function(e,t){var n;return null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n.localeCompare(null===t||void 0===t?void 0:t.name)}},{title:"Credit",dataIndex:"credit",key:"credit",align:"right",width:200,render:function(e){return Object(u.a)(ie,{count:e})},sorter:function(e,t){return e.credit-t.credit}},{title:"WUs",dataIndex:"wus",key:"wus",align:"right",width:200,render:function(e){return Object(u.a)(ie,{count:e})},sorter:function(e,t){return e.wus-t.wus}}];return Object(u.a)(r.a.Fragment,null,Object(u.a)(rt,null),Object(u.a)(Te,{columns:t,dataSource:null===e||void 0===e?void 0:e.donorMonthly,pagination:{defaultPageSize:10,showSizeChanger:!0}}))};var it=f.a.TabPane,st={tabbedContent:{name:"i2pqtc",styles:".ant-tabs-nav{margin:0;padding:0;}"},tabPaneContent:{name:"1jyqsge",styles:"background-color:white;padding:1rem"}},lt=function(){return Object(u.a)(r.a.Fragment,null,Object(u.a)("h1",null,"Donor Statistics"),Object(u.a)(f.a,{type:"card",css:st.tabbedContent},Object(u.a)(it,{tab:"Monthly",key:"1",css:st.tabPaneContent},Object(u.a)(ct,null)),Object(u.a)(it,{tab:"All-Time",key:"2",css:st.tabPaneContent},Object(u.a)($e,null))))},ut=function(){var e,t=Object(i.b)(),n=Object(b.g)().id;Object(a.useEffect)((function(){t(function(e){var t=e.donorName,n=e.donorId;return function(){var e=Object(x.a)(w.a.mark((function e(a){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(Y({donorName:t,donorId:n,action:_}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}({donorId:n}))}),[]);var o=Object(i.c)((function(e){return e.stats})),c=null===o||void 0===o||null===(e=o.donorProfile)||void 0===e?void 0:e[0];return Object(u.a)(r.a.Fragment,null,Object(u.a)("h1",null,"Donor Statistics"),c&&Object(u.a)(he,{donor:c}))},dt=function(e,t){for(var n=null===e||void 0===e?void 0:e.split("."),a=null===t||void 0===t?void 0:t.split("."),r=0;r<n.length&&r<a.length;r+=1){var o=parseInt(n[r],10)-parseInt(a[r],10);if(o)return o}return n.length-a.length},mt=function(){var e=Object(i.b)();Object(a.useEffect)((function(){e(function(){var e=Object(x.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D("".concat(z,"/as"));case 3:if(!(null===(n=e.sent)||void 0===n?void 0:n[0])){e.next=9;break}return e.next=7,D("https://".concat(null===n||void 0===n?void 0:n[0],"/api/project/summary"));case 7:a=e.sent,t(J(M(a)));case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var t=Object(i.c)((function(e){return e.stats})),n=[{title:"Project ID",dataIndex:"id",key:"id",width:100,fixed:"left",sorter:function(e,t){return e.id-t.id}},{title:"Server IP",dataIndex:"ws",key:"ws",width:200,sorter:function(e,t){return dt(null===e||void 0===e?void 0:e.ws,null===t||void 0===t?void 0:t.ws)}},{title:"Atoms",dataIndex:"atoms",key:"atoms",align:"right",width:100,render:function(e){return Object(u.a)(ie,{count:e})},sorter:function(e,t){return e.atoms-t.atoms}},{title:"Timeout (days)",dataIndex:"timeout",key:"timeout",align:"right",width:100,render:function(e){return Object(u.a)(ie,{count:e/60/60/24,maximumFractionDigits:2})},sorter:function(e,t){return e.timeout-t.timeout}},{title:"Deadline (days)",dataIndex:"deadline",key:"deadline",align:"right",width:100,render:function(e){return Object(u.a)(ie,{count:e/60/60/24,maximumFractionDigits:2})},sorter:function(e,t){return e.deadline-t.deadline}},{title:"Base Credit",dataIndex:"credit",key:"credit",align:"right",width:100,render:function(e){return Object(u.a)(ie,{count:e})},sorter:function(e,t){return e.credit-t.credit}},{title:"Core",dataIndex:"type",key:"type",width:200,sorter:function(e,t){var n;return null===e||void 0===e||null===(n=e.type)||void 0===n?void 0:n.localeCompare(null===t||void 0===t?void 0:t.type)}},{title:"Contact",dataIndex:"contact",key:"contact",width:200,sorter:function(e,t){var n;return null===e||void 0===e||null===(n=e.contact)||void 0===n?void 0:n.localeCompare(null===t||void 0===t?void 0:t.contact)}}];return Object(u.a)(Te,{columns:n,dataSource:null===t||void 0===t?void 0:t.project,pagination:{defaultPageSize:10,showSizeChanger:!0}})},bt=function(){var e=Object(i.b)();Object(a.useEffect)((function(){e(function(){var e=Object(x.a)(w.a.mark((function e(t){var n,a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={},e.next=4,D("".concat(z,"/as"));case 4:return a=e.sent,e.next=7,Promise.all(a.map(function(){var e=Object(x.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D("https://".concat(t,"/api/ws/summary"));case 2:n[t]=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:t(W(q(n))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var t=Object(i.c)((function(e){return e.stats})),n=[{title:"Server IP",dataIndex:"address",key:"address",width:200,fixed:"left",sorter:function(e,t){return dt(null===e||void 0===e?void 0:e.address,null===t||void 0===t?void 0:t.address)}},{title:"Host",dataIndex:"host",key:"host",width:200,sorter:function(e,t){var n;return null===e||void 0===e||null===(n=e.host)||void 0===n?void 0:n.localeCompare(null===t||void 0===t?void 0:t.host)}},{title:"Type",dataIndex:"type",key:"type",width:100,sorter:function(e,t){var n;return null===e||void 0===e||null===(n=e.type)||void 0===n?void 0:n.localeCompare(null===t||void 0===t?void 0:t.type)}},{title:"Version",dataIndex:"version",key:"version",width:100,sorter:function(e,t){return dt(null===e||void 0===e?void 0:e.version,null===t||void 0===t?void 0:t.version)}},{title:"Contact",dataIndex:"contact",key:"contact",width:200,sorter:function(e,t){var n;return null===e||void 0===e||null===(n=e.contact)||void 0===n?void 0:n.localeCompare(null===t||void 0===t?void 0:t.contact)}},{title:"Assign Rate",dataIndex:"assign_rate",key:"assign_rate",width:100,align:"right",render:function(e){return Object(u.a)(r.a.Fragment,null,Object(u.a)(ie,{count:60*e*60,maximumFractionDigits:2}),Object(u.a)("span",null," / hr"))},sorter:function(e,t){return e.assign_rate-t.assign_rate}},{title:"Project Types",dataIndex:"types",key:"types",width:200,render:function(e){var t;return e&&(null===(t=Object.keys(e))||void 0===t?void 0:t.join(", "))}}];return Object(u.a)(Te,{columns:n,dataSource:null===t||void 0===t?void 0:t.server,pagination:{defaultPageSize:10,showSizeChanger:!0}})},ft=function(){var e=Object(i.b)();Object(a.useEffect)((function(){e(function(){var e=Object(x.a)(w.a.mark((function e(t){var n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D("".concat(z,"/os"));case 3:n=e.sent,t(H(E(n))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var t=Object(i.c)((function(e){return e.stats})),n=[{title:"OS",dataIndex:"OS",key:"OS",width:100,fixed:"left",sorter:function(e,t){var n;return null===e||void 0===e||null===(n=e.OS)||void 0===n?void 0:n.localeCompare(null===t||void 0===t?void 0:t.OS)}},{title:"AMD GPUs",dataIndex:"AMD GPUs",key:"AMD GPUs",align:"right",width:100,render:function(e){return Object(u.a)(ie,{count:e})},sorter:function(e,t){return e["AMD GPUs"]-t["AMD GPUs"]}},{title:"NVidia GPUs",dataIndex:"NVidia GPUs",key:"NVidia GPUs",align:"right",width:100,render:function(e){return Object(u.a)(ie,{count:e})},sorter:function(e,t){return e["NVidia GPUs"]-t["NVidia GPUs"]}},{title:"CPUs",dataIndex:"CPUs",key:"CPUs",align:"right",width:100,render:function(e){return Object(u.a)(ie,{count:e})},sorter:function(e,t){return e.CPUs-t.CPUs}},{title:"TFLOPS",dataIndex:"TFLOPS",key:"TFLOPS",align:"right",width:100,render:function(e){return Object(u.a)(ie,{count:e})},sorter:function(e,t){return e.TFLOPS-t.CPTFLOPSUs}},{title:"x86 TFLOPS",dataIndex:"x86 TFLOPS",key:"x86 TFLOPS",align:"right",width:100,render:function(e){return Object(u.a)(ie,{count:e})},sorter:function(e,t){return e["x86 TFLOPS"]-t["x86 TFLOPS"]}}];return Object(u.a)(Te,{columns:n,dataSource:null===t||void 0===t?void 0:t.os,pagination:{defaultPageSize:10,showSizeChanger:!0}})};var pt=f.a.TabPane,ht={tabbedContent:{name:"i2pqtc",styles:".ant-tabs-nav{margin:0;padding:0;}"},tabPaneContent:{name:"1jyqsge",styles:"background-color:white;padding:1rem"}},vt=function(){return Object(u.a)(r.a.Fragment,null,Object(u.a)("h1",null,"Project & Server Statistics"),Object(u.a)(f.a,{type:"card",css:ht.tabbedContent},Object(u.a)(pt,{tab:"Active Projects",key:"1",css:ht.tabPaneContent},Object(u.a)(mt,null)),Object(u.a)(pt,{tab:"Servers",key:"2",css:ht.tabPaneContent},Object(u.a)(bt,null)),Object(u.a)(pt,{tab:"OS",key:"3",css:ht.tabPaneContent},Object(u.a)(ft,null))))},jt=function(){return Object(u.a)(b.c,null,Object(u.a)(b.a,{exact:!0,path:"/"},Object(u.a)(xe,null)),Object(u.a)(b.a,{exact:!0,path:"/team"},Object(u.a)(Ke,null)),Object(u.a)(b.a,{exact:!0,path:"/team/:id"},Object(u.a)(Ye,null)),Object(u.a)(b.a,{exact:!0,path:"/donor"},Object(u.a)(lt,null)),Object(u.a)(b.a,{exact:!0,path:"/donor/:id"},Object(u.a)(ut,null)),Object(u.a)(b.a,{exact:!0,path:"/project"},Object(u.a)(vt,null)),Object(u.a)(b.a,{path:"*"},Object(u.a)(Ie,null)))},Ot=n(52),yt=I.reducer,gt=Object(Ot.c)({stats:yt}),wt=Object(C.a)({reducer:gt});var xt={container:{name:"3tbgwm",styles:"margin:0 auto;@media (min-width:768px){width:100%;}@media (min-width:992px){width:970px;}@media (min-width:1200px){width:1170px;}"},containerHeader:{name:"2ycp6t",styles:"padding:0 1rem"},containerBody:{name:"1dvcxr3",styles:"padding:1rem"},header:{name:"31njsc",styles:"padding:0;background:#383838 none repeat scroll 0% 0%;box-shadow:black 0px 0px 8px 0px"}},kt=function(){return Object(u.a)(i.a,{store:wt},Object(u.a)(l.a,null,Object(u.a)("div",{css:xt.header},Object(u.a)(S.ProgressBar,{style:{backgroundColor:"#fe6215",height:"1px"}}),Object(u.a)("div",{css:[xt.container,xt.containerHeader,"",""]},Object(u.a)(m,null))),Object(u.a)("div",{css:[xt.container,xt.containerBody,"",""]},Object(u.a)(jt,null))))},Ct=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,369)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),o(e),c(e)}))};c.a.render(Object(u.a)(kt,null),document.getElementById("root")),Ct(),window.CSPSettings={nonce:"nonce"}}},[[353,1,2]]]);
//# sourceMappingURL=main.45c7a296.chunk.js.map