(function(t){function e(e){for(var r,a,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)a=c[l],o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({404:"404",createAndEdit:"createAndEdit",detail:"detail",home:"home",profile:"profile",star:"star"}[t]||t)+"."+{404:"34f99d3f",createAndEdit:"590f7698",detail:"3ce0765e",home:"7f97f00f",profile:"e4cfb562",star:"2a07e764"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={404:1,createAndEdit:1,detail:1,home:1,profile:1,star:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({404:"404",createAndEdit:"createAndEdit",detail:"detail",home:"home",profile:"profile",star:"star"}[t]||t)+"."+{404:"33ae7521",createAndEdit:"2f66fe40",detail:"7757b8ba",home:"9f5b802d",profile:"fb71dba5",star:"b1ae3862"}[t]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){a[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t),u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[t]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"32ac":function(t,e,n){t.exports={top:"App-module_top_2AE_Q",bottom:"App-module_bottom_16XEY"}},"3a34":function(t,e,n){"use strict";var r=n("e1bd"),a=n.n(r),o=n("f121"),i={normalize:function(){return[{id:a()(),color:"#409eff",name:"蓝色",create_at:Date.now(),update_at:Date.now()},{id:a()(),color:"#67c23a",name:"绿色",create_at:Date.now(),update_at:Date.now()},{id:a()(),color:"#909399",name:"灰色",create_at:Date.now(),update_at:Date.now()},{id:a()(),color:"#e6a23c",name:"黄色",create_at:Date.now(),update_at:Date.now()},{id:a()(),color:"#f56c6c",name:"红色",create_at:Date.now(),update_at:Date.now()}]},init:function(){return this.transform(this.get())},get:function(){var t=JSON.parse(localStorage.getItem(o["b"])||null);return t||(t=this.normalize(),this.save(t)),t},save:function(t){return localStorage.setItem(o["b"],JSON.stringify(t))},transform:function(t){return t.reduce(function(t,e){return t[e.id]=e,t},{})}},c=n("cebc"),s=(n("7514"),{new:function(t){var e=t.title,n=t.content,r=t.is_collect,o=t.is_complete,i=t.tag;return{id:a()(),title:e,content:n,tag:i,is_collect:r,is_complete:o,create_at:Date.now(),update_at:Date.now()}},transform:function(t){return t.reduce(function(t,e){return t[e.id]=e,t},{})},init:function(){return this.transform(this.get())},get:function(){var t=JSON.parse(localStorage.getItem(o["a"])||null);return t||[]},getById:function(t){return this.get().find(function(e){return e.id===t})||{}},post:function(t){var e=this.get()||[];return e.push(t),this.save(e),t},put:function(t){if(t.id){var e,n=this.get();return n.some(function(n,r,a){if(n.id===t.id)return e=Object(c["a"])({},n,t),a.splice(r,1,e),!0}),this.save(n),e}},delete:function(){return this.save([]),[]},deleteById:function(t){var e=this.get().filter(function(e){return e.id!==t});return this.save(e),e},deleteCompleted:function(){var t=this.get().filter(function(t){return!t.is_complete});return this.save(t),t},save:function(t){return localStorage.setItem(o["a"],JSON.stringify(t))}});n.d(e,"b",function(){return i}),n.d(e,"a",function(){return s})},"522b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("c3a6");var r=n("ad06"),a=(n("bda7"),n("5e46")),o=(n("da3c"),n("0b33")),i=(n("a52c"),n("2ed4")),c=(n("537a"),n("ac28")),s=(n("5246"),n("6b41")),u=(n("66b9"),n("b650")),l=(n("be7f"),n("565f")),f=(n("0653"),n("34e9")),d=(n("c194"),n("7744")),h=(n("0500"),n("4feb")),m=(n("e7e5"),n("d399")),p=(n("2cbd"),n("ab2c")),b=(n("e17f"),n("2241")),v=(n("5f5f"),n("f253")),g=(n("8a58"),n("e41f")),w=(n("ac6a"),n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),_=n("bd86"),E=(n("a481"),n("28a5"),n("4d26")),O=n.n(E),S=n("32ac"),T=n.n(S),N=n("f121"),y={beforeMount:function(){this.$store.dispatch("APP_INIT")},data:function(){return{transitionName:"slideInLeft",visibleSheet:!1}},computed:{title:function(){return this.$route.meta.title||N["c"]},showNavbar:function(){return this.$route.meta.showNavbar},showTabbar:function(){return this.$route.meta.showTabbar},hasActionSheet:function(){return!!this.$route.meta.actionSheet},actionSheet:function(){return this.hasActionSheet?this.$route.meta.actionSheet:[]}},watch:{$route:function(t,e){var n=t.path.split("/").length,r=e.path.split("/").length;this.transitionName=n<r?"slideInRight":"slideInLeft"}},methods:{handleBack:function(){this.$router.back()},handleActionSheet:function(){this.visibleSheet=!this.visibleSheet},confirm:function(t){return this.$dialog.confirm({message:t,closeOnClickOverlay:!0})},handleSheetSelect:function(t){var e=this;switch(t.action){case"new":this.$router.push("/new");break;case"sort":this.$store.dispatch("PUT_NOTES_SORT");break;case"deleteCompleted":this.$store.getters.completedNotes.length?this.confirm("您确定要删除已完成的备忘录吗？\n此操作不可恢复").then(function(){e.$store.dispatch("DELETE_COMPLETED_NOTES")}).catch(function(){}):this.$toast("没有已完成的备忘录");break;case"deleteAll":this.$store.getters.notes.length?this.confirm("您确定要删除全部备忘录吗？\n此操作不可恢复").then(function(){e.$store.dispatch("DELETE_NOTES")}).catch(function(){}):this.$toast("当前备忘录为空，您可以先新建几个");break;case"edit":this.$router.push("/edit/".concat(this.$route.params.id));break;case"delete":this.confirm("您确定要删除此备忘录吗？\n此操作不可恢复").then(function(){e.$store.dispatch("DELETE_NOTE",e.$route.params.id),e.$router.replace("/")}).catch(function(){});break;default:break}}},render:function(){var t=this,e=arguments[0];return e("main",[e("van-nav-bar",{directives:[{name:"show",value:this.showNavbar}],attrs:{title:this.title,leftText:"返回",leftArrow:!0,fixed:!0},on:{"click-left":this.handleBack,"click-right":this.handleActionSheet}},[this.hasActionSheet&&e("van-icon",{attrs:{name:"ellipsis"},slot:"right"})]),this.hasActionSheet&&e("van-action-sheet",{attrs:{actions:this.actionSheet,cancelText:"取消",closeOnClickAction:!0},on:{select:this.handleSheetSelect},model:{value:t.visibleSheet,callback:function(e){t.visibleSheet=e}}}),e("router-view",{class:O()(Object(_["a"])({},T.a.top,this.showNavbar),Object(_["a"])({},T.a.bottom,this.showTabbar))}),e("van-tabbar",{directives:[{name:"show",value:this.showTabbar}],attrs:{route:!0}},[e("van-tabbar-item",{attrs:{replace:!0,to:"/",icon:"label-o"}},["记录"]),e("van-tabbar-item",{attrs:{to:"/new",icon:"add-o"}},["新建"]),e("van-tabbar-item",{attrs:{replace:!0,to:"/star",icon:"star-o"}},["收藏"]),e("van-tabbar-item",{attrs:{replace:!0,to:"/profile",icon:"user-circle-o"}},["我的"])])])}},A=n("8c4f");w["a"].use(A["a"]);var j=function(){return n.e("createAndEdit").then(n.bind(null,"5da7"))},k=new A["a"]({routes:[{path:"/",name:"home",meta:{title:"备忘录",showNavbar:!0,showTabbar:!0,actionSheet:[{name:"新建笔记",action:"new"},{name:"按时间排序",action:"sort"},{name:"删除已完成",action:"deleteCompleted"},{name:"删除全部",action:"deleteAll"}]},component:function(){return n.e("home").then(n.bind(null,"d8f2"))}},{path:"/new",name:"new",meta:{title:"新建",showNavbar:!0},component:j},{path:"/edit/:id",name:"edit",meta:{title:"编辑",showNavbar:!0},component:j},{path:"/star",name:"star",meta:{title:"收藏",showNavbar:!0,showTabbar:!0},component:function(){return n.e("star").then(n.bind(null,"1f86"))}},{path:"/profile",name:"profile",meta:{title:"我的",showNavbar:!0,showTabbar:!0},component:function(){return n.e("profile").then(n.bind(null,"fd3e"))}},{path:"/note/:id",name:"note_id",meta:{title:"详情",showNavbar:!0,actionSheet:[{name:"编辑",action:"edit"},{name:"删除",action:"delete"}]},component:function(){return n.e("detail").then(n.bind(null,"3c05"))}},{path:"*",name:"404",meta:{title:"404"},component:function(){return n.e("404").then(n.bind(null,"de38"))}}],scrollBehavior:function(t,e,n){return n||{x:0,y:0}}});k.beforeEach(function(t,e,n){document.title=t.meta.title||N["c"],n()});var $,D,P=k,C=n("2f62"),I=(n("55dd"),n("8615"),{notes:function(t){var e=Object.values(t.notes);switch(t.user.sort){case 0:return e.sort(function(t,e){return t.create_at-e.create_at});case 1:return e.sort(function(t,e){return e.create_at-t.create_at});default:return e.sort(function(t,e){return t.update_at-e.update_at})}},collectedNotes:function(t,e){return e.notes.filter(function(t){return t.is_collect})},completedNotes:function(t,e){return e.notes.filter(function(t){return t.is_complete})},tags:function(t){return Object.values(t.tags)}}),L=n("3a34"),x="PUT_NOTE",B="POST_NOTE",M="PUT_NOTES_SORT",J="APP_INIT",U="DELETE_NOTE",R="DELETE_NOTES",q="DELETE_COMPLETED_NOTES",F="PUT_NOTES",K="PUT_TAGS",Y=($={},Object(_["a"])($,J,function(t){var e=t.commit;e(F,L["a"].init()),e(K,L["b"].init())}),Object(_["a"])($,x,function(t,e){var n=t.commit;n(x,L["a"].put(e))}),Object(_["a"])($,B,function(t,e){var n=t.commit;n(B,L["a"].post(e))}),Object(_["a"])($,M,function(t){var e=t.commit,n=t.state;e(M,+!n.user.sort)}),Object(_["a"])($,U,function(t,e){var n=t.commit;n(F,L["a"].deleteById(e))}),Object(_["a"])($,R,function(t){var e=t.commit;e(F,L["a"].delete())}),Object(_["a"])($,q,function(t){var e=t.commit;e(F,L["a"].deleteCompleted())}),$),z=n("cebc"),G=(D={},Object(_["a"])(D,x,function(t,e){t.notes[e.id]=e}),Object(_["a"])(D,B,function(t,e){t.notes=Object(z["a"])({},t.notes,Object(_["a"])({},e.id,e))}),Object(_["a"])(D,M,function(t,e){t.user.sort=e}),Object(_["a"])(D,F,function(t,e){t.notes=e}),Object(_["a"])(D,K,function(t,e){t.tags=e}),D);w["a"].use(C["a"]);var H={notes:{},tags:{},user:{sort:0}},Q=new C["a"].Store({state:H,getters:I,mutations:G,actions:Y}),X=n("9483");Object(X["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("f5df"),n("77ed"),n("522b");[g["a"],v["a"],b["a"],p["a"],m["a"],h["a"],d["a"],f["a"],l["a"],u["a"],s["a"],c["a"],i["a"],o["a"],a["a"],r["a"]].forEach(function(t){return w["a"].use(t)}),w["a"].config.productionTip=!1,new w["a"]({router:P,store:Q,render:function(t){return t(y)}}).$mount("#app")},f121:function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o});var r="备忘录",a="STORE_NOTES_KEY",o="STORE_TAGS_KEY"}});