(function(e){function t(t){for(var o,r,c=t[0],s=t[1],u=t[2],l=0,f=[];l<c.length;l++)r=c[l],a[r]&&f.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(o=!1)}o&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a={app:0},i=[];function c(e){return s.p+"js/"+({404:"404",detail:"detail",home:"home",new:"new",profile:"profile",star:"star"}[e]||e)+"."+{404:"5259f60e",detail:"f5459df8",home:"7918da45",new:"e49b96b7",profile:"8f99cc02",star:"08c092a5"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={404:1,detail:1,home:1,new:1,profile:1,star:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var o="css/"+({404:"404",detail:"detail",home:"home",new:"new",profile:"profile",star:"star"}[e]||e)+"."+{404:"33ae7521",detail:"30cc5784",home:"0ba51a88",new:"c73ff91f",profile:"ae47d68d",star:"f2b2ae22"}[e]+".css",a=s.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===o||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var o=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],d.parentNode.removeChild(d),n(i)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){r[e]=0}));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise(function(t,n){o=a[e]=[t,n]});t.push(o[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e),u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");i.type=o,i.request=r,n[1](i)}a[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"32ac":function(e,t,n){e.exports={top:"App-module_top_2AE_Q",bottom:"App-module_bottom_16XEY"}},"522b":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("c3a6");var o=n("ad06"),r=(n("bda7"),n("5e46")),a=(n("da3c"),n("0b33")),i=(n("a52c"),n("2ed4")),c=(n("537a"),n("ac28")),s=(n("5246"),n("6b41")),u=(n("66b9"),n("b650")),l=(n("be7f"),n("565f")),f=(n("0653"),n("34e9")),d=(n("0500"),n("4feb")),h=(n("e7e5"),n("d399")),b=(n("2cbd"),n("ab2c")),p=(n("e17f"),n("2241")),m=(n("ac6a"),n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),v=n("bd86"),g=(n("28a5"),n("4d26")),w=n.n(g),O=n("32ac"),S=n.n(O),_=n("f121"),E={beforeMount:function(){this.$store.dispatch("APP_INIT")},data:function(){return{transitionName:"slideInLeft",visibleSheet:!1}},computed:{title:function(){return this.$route.meta.title||_["c"]},showNavbar:function(){return this.$route.meta.showNavbar},showTabbar:function(){return this.$route.meta.showTabbar},hasActionSheet:function(){return!!this.$route.meta.actionSheet},actionSheet:function(){return this.hasActionSheet?_["a"][this.$route.meta.actionSheet]:[]}},watch:{$route:function(e,t){var n=e.path.split("/").length,o=t.path.split("/").length;this.transitionName=n<o?"slideInRight":"slideInLeft"}},methods:{handleBack:function(){this.$router.back()},handleActionSheet:function(){this.visibleSheet=!this.visibleSheet},handleSheetSelect:function(e){var t=this;switch(e.action){case"new":this.$router.push("/new");break;case"sort":this.$store.dispatch("PUT_NOTES_SORT");break;case"deleteCompleted":this.$store.getters.completedNotes.length?this.$dialog.confirm({message:"您确定要删除已完成的备忘录吗？\n此操作不可恢复",closeOnClickOverlay:!0}).then(function(){t.$store.dispatch("DELETE_COMPLETED_NOTES")}).catch(function(){}):this.$toast("没有已完成的备忘录");break;case"deleteAll":this.$store.getters.notes.length?this.$dialog.confirm({message:"您确定要删除全部备忘录吗？\n此操作不可恢复",closeOnClickOverlay:!0}).then(function(){t.$store.dispatch("DELETE_NOTES")}).catch(function(){}):this.$toast("当前备忘录为空，您可以先新建几个");break;default:break}}},render:function(){var e=this,t=arguments[0],n=this.showNavbar,o=this.showTabbar;return t("main",[t("van-nav-bar",{directives:[{name:"show",value:n}],attrs:{title:this.title,"left-text":"返回","left-arrow":!0,fixed:!0},on:{"click-left":this.handleBack,"click-right":this.handleActionSheet}},[this.hasActionSheet&&t("van-icon",{attrs:{name:"ellipsis"},slot:"right"})]),this.hasActionSheet&&t("van-action-sheet",{attrs:{actions:this.actionSheet,"cancel-text":"取消","close-on-click-action":!0},on:{select:this.handleSheetSelect},model:{value:e.visibleSheet,callback:function(t){e.visibleSheet=t}}}),t("router-view",{class:w()(Object(v["a"])({},S.a.top,n),Object(v["a"])({},S.a.bottom,o))}),t("van-tabbar",{directives:[{name:"show",value:o}],attrs:{route:!0}},[t("van-tabbar-item",{attrs:{replace:!0,to:"/",icon:"label-o"}},["记录"]),t("van-tabbar-item",{attrs:{replace:!0,to:"/new",icon:"add-o"}},["新建"]),t("van-tabbar-item",{attrs:{replace:!0,to:"/star",icon:"star-o"}},["收藏"]),t("van-tabbar-item",{attrs:{replace:!0,to:"/profile",icon:"user-circle-o"}},["我的"])])])}},T=n("8c4f");m["a"].use(T["a"]);var y=new T["a"]({routes:[{path:"/",name:"home",meta:{title:"备忘录",showNavbar:!0,showTabbar:!0,actionSheet:"notes"},component:function(){return n.e("home").then(n.bind(null,"d8f2"))}},{path:"/new",name:"new",meta:{title:"新建",showNavbar:!0,showTabbar:!0},component:function(){return n.e("new").then(n.bind(null,"baf5"))}},{path:"/star",name:"star",meta:{title:"收藏",showNavbar:!0,showTabbar:!0},component:function(){return n.e("star").then(n.bind(null,"1f86"))}},{path:"/profile",name:"profile",meta:{title:"我的",showNavbar:!0,showTabbar:!0},component:function(){return n.e("profile").then(n.bind(null,"fd3e"))}},{path:"/note/:id",name:"note_id",meta:{title:"详情",showNavbar:!0},component:function(){return n.e("detail").then(n.bind(null,"3c05"))}},{path:"*",name:"404",meta:{title:"404"},component:function(){return n.e("404").then(n.bind(null,"de38"))}}],scrollBehavior:function(e,t,n){return n||{x:0,y:0}}});y.beforeEach(function(e,t,n){document.title=e.meta.title||_["c"],n()});var N,j,k=y,A=n("2f62"),P=(n("8615"),n("55dd"),{notes:function(e){return Object.values(e.notes).sort(function(t,n){return e.user.sort?n.create_at-t.create_at:t.create_at-n.create_at})},collectedNotes:function(e,t){return t.notes.filter(function(e){return e.is_collect})},completedNotes:function(e,t){return t.notes.filter(function(e){return e.is_complete})}}),$=n("e0eb"),C="APP_INIT",x="PUT_NOTE",D="POST_NOTE",I="PUT_NOTES_SORT",L="DELETE_NOTES",M="DELETE_COMPLETED_NOTES",B=(N={},Object(v["a"])(N,C,function(e){var t=e.commit;t(C,Object($["e"])($["a"].get()))}),Object(v["a"])(N,x,function(e,t){var n=e.commit;n(x,$["a"].put(t))}),Object(v["a"])(N,D,function(e,t){var n=e.commit;n(D,$["a"].post(t))}),Object(v["a"])(N,I,function(e){var t=e.commit,n=e.state;t(I,+!n.user.sort)}),Object(v["a"])(N,L,function(e){var t=e.commit;t(L,Object($["e"])($["a"].delete()))}),Object(v["a"])(N,M,function(e){var t=e.commit;t(M,Object($["e"])($["a"].deleteCompleted()))}),N),Y=n("cebc"),J=(j={},Object(v["a"])(j,C,function(e,t){e.notes=t}),Object(v["a"])(j,x,function(e,t){var n=t.id;e.notes[n]=t}),Object(v["a"])(j,D,function(e,t){e.notes=Object(Y["a"])({},e.notes,Object(v["a"])({},t.id,t))}),Object(v["a"])(j,I,function(e,t){e.user.sort=t}),Object(v["a"])(j,L,function(e,t){e.notes=t}),Object(v["a"])(j,M,function(e,t){e.notes=t}),j);m["a"].use(A["a"]);var R={notes:{},user:{sort:0}},U=new A["a"].Store({state:R,getters:P,mutations:J,actions:B}),q=n("9483");Object(q["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("f5df"),n("77ed"),n("522b");[p["a"],b["a"],h["a"],d["a"],f["a"],l["a"],u["a"],s["a"],c["a"],i["a"],a["a"],r["a"],o["a"]].forEach(function(e){return m["a"].use(e)}),m["a"].config.productionTip=!1,new m["a"]({router:k,store:U,render:function(e){return e(E)}}).$mount("#app")},e0eb:function(e,t,n){"use strict";n.d(t,"b",function(){return u}),n.d(t,"c",function(){return l}),n.d(t,"d",function(){return f}),n.d(t,"e",function(){return d}),n.d(t,"a",function(){return h});var o=n("cebc"),r=(n("20d6"),n("7514"),n("e1bd")),a=n.n(r),i=n("5a0c"),c=n.n(i),s=n("f121"),u=function(e,t){return c()(e).format(t||"YYYY-MM-DD HH:mm:ss")},l=function(e){var t=function(t){return c()().diff(e,t)},n=t("minute"),o=t("hour"),r=t("day"),a=t("month"),i=t("year");return i?"".concat(i,"年前"):a?"".concat(a,"月前"):r?"".concat(r,"天前"):o?"".concat(o,"小时前"):n?"".concat(n,"分钟前"):"刚刚"},f=function(e){var t=e.title,n=e.content,o=e.is_collect,r=e.is_complete;return{id:a()(),title:t,content:n,is_collect:o,is_complete:r,create_at:Date.now(),update_at:Date.now()}},d=function(e){return e.reduce(function(e,t){return e[t.id]=t,e},{})},h={get:function(){var e=JSON.parse(localStorage.getItem(s["b"])||null);return e||[]},save:function(e){return localStorage.setItem(s["b"],JSON.stringify(e))},getById:function(e){return this.get().find(function(t){return t.id===e})||{}},post:function(e){var t=this.get()||[];return t.push(e),this.save(t),e},put:function(e){var t=this.get(),n=t.find(function(t){return t.id===e.id}),r=t.findIndex(function(t){return t.id===e.id});return e=Object(o["a"])({},n,e),t.splice(r,1,e),this.save(t),e},delete:function(){return this.save([]),[]},deleteCompleted:function(){var e=this.get().filter(function(e){return!e.is_complete});return this.save(e),e}}},f121:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"b",function(){return r}),n.d(t,"a",function(){return a});var o="备忘录",r="NOTE_STORE",a={notes:[{name:"新建笔记",action:"new"},{name:"按时间排序",action:"sort"},{name:"删除已完成",action:"deleteCompleted"},{name:"删除全部",action:"deleteAll"}]}}});
//# sourceMappingURL=app.0ce31d71.js.map