(function(t){function e(e){for(var r,o,c=e[0],s=e[1],u=e[2],l=0,f=[];l<c.length;l++)o=c[l],a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a={app:0},i=[];function c(t){return s.p+"js/"+({404:"404",new:"new",note:"note",notes:"notes",profile:"profile"}[t]||t)+"."+{404:"34f99d3f",new:"ee5454c8",note:"994a3a4d",notes:"bb89372d",profile:"45384284"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={404:1,new:1,note:1,notes:1,profile:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var r="css/"+({404:"404",new:"new",note:"note",notes:"notes",profile:"profile"}[t]||t)+"."+{404:"33ae7521",new:"1dc44791",note:"6a40cbf0",notes:"b1ae3862",profile:"a9f54981"}[t]+".css",a=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===r||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[t],d.parentNode.removeChild(d),n(i)},d.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){o[t]=0}));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,n){r=a[t]=[e,n]});e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(t),u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[t]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"32ac":function(t,e,n){t.exports={top:"App-module_top_2AE_Q",bottom:"App-module_bottom_16XEY"}},"522b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("c3a6");var r=n("ad06"),o=(n("bda7"),n("5e46")),a=(n("da3c"),n("0b33")),i=(n("a52c"),n("2ed4")),c=(n("537a"),n("ac28")),s=(n("5246"),n("6b41")),u=(n("66b9"),n("b650")),l=(n("be7f"),n("565f")),f=(n("0653"),n("34e9")),d=(n("c194"),n("7744")),h=(n("0500"),n("4feb")),p=(n("e7e5"),n("d399")),b=(n("2cbd"),n("ab2c")),v=(n("e17f"),n("2241")),m=(n("5f5f"),n("f253")),g=(n("8a58"),n("e41f")),O=(n("ac6a"),n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),w=n("bd86"),_=n("cebc"),y=(n("a481"),n("55dd"),n("28a5"),n("4d26")),j=n.n(y),k=n("32ac"),S=n.n(k),T={created:function(){this.$store.dispatch("APP_INIT")},data:function(){return{visibleSheet:!1}},computed:{title:function(){return this.$route.meta.title},hasTitle:function(){return!!this.title},showNavbar:function(){return this.$route.meta.showNavbar},showTabbar:function(){return this.$route.meta.showTabbar},hideBack:function(){return this.showTabbar},hasActionSheet:function(){return!!this.$route.meta.actionSheet},actionSheet:function(){return this.hasActionSheet?this.$route.meta.actionSheet:[]}},watch:{$route:function(t,e){var n=t.path.split("/").length,r=e.path.split("/").length;this.transitionName=n<r?"slideInRight":"slideInLeft"}},methods:{handleBack:function(){this.$router.back()},toggleActionSheet:function(){this.visibleSheet=!this.visibleSheet},confirm:function(t){return this.$dialog.confirm({message:t,closeOnClickOverlay:!0})},handleActionSheet:function(t){var e=this;switch(t.action){case"new":this.$router.push("/new");break;case"sort":this.$store.dispatch("PUT_NOTES_SORT",[1,0][this.$store.state.user.sort]||0);break;case"deleteCompleted":this.$store.getters.completedNotes.length?this.confirm("您确定要删除已完成的备忘录吗？\n此操作不可恢复").then(function(){e.$store.dispatch("DELETE_COMPLETED_NOTES")}).catch(function(){}):this.$toast("没有已完成的备忘录");break;case"deleteAll":this.$store.getters.notes.length?this.confirm("您确定要删除全部备忘录吗？\n此操作不可恢复").then(function(){e.$store.dispatch("DELETE_NOTES")}).catch(function(){}):this.$toast("当前备忘录为空，您可以先新建几个");break;case"edit":this.$router.push("/edit/".concat(this.$route.params.id));break;case"delete":this.confirm("您确定要删除此备忘录吗？\n此操作不可恢复").then(function(){e.$store.dispatch("DELETE_NOTE",e.$route.params.id),e.$router.replace("/")}).catch(function(){});break;default:break}}},render:function(){var t=this,e=arguments[0];return e("main",[e("van-nav-bar",{directives:[{name:"show",value:this.showNavbar}],attrs:Object(_["a"])({title:this.title,fixed:!0,border:this.hasTitle},this.hideBack?{}:{leftText:"返回",leftArrow:!0}),on:{"click-left":this.handleBack,"click-right":this.toggleActionSheet}},[this.hasActionSheet&&e("van-icon",{attrs:{name:"ellipsis"},slot:"right"})]),this.hasActionSheet&&e("van-action-sheet",{attrs:{actions:this.actionSheet,cancelText:"取消",closeOnClickAction:!0},on:{select:this.handleActionSheet},model:{value:t.visibleSheet,callback:function(e){t.visibleSheet=e}}}),e("router-view",{class:j()(Object(w["a"])({},S.a.top,this.showNavbar),Object(w["a"])({},S.a.bottom,this.showTabbar))}),e("transition",{attrs:{name:"animate-tabbar"}},[e("van-tabbar",{directives:[{name:"show",value:this.showTabbar}],attrs:{route:!0}},[e("van-tabbar-item",{attrs:{replace:!0,to:"/",icon:"label-o"}},["记录"]),e("van-tabbar-item",{attrs:{to:"/new",icon:"add-o"}},["新建"]),e("van-tabbar-item",{attrs:{replace:!0,to:"/collection",icon:"star-o"}},["收藏"]),e("van-tabbar-item",{attrs:{replace:!0,to:"/profile",icon:"user-circle-o"}},["我的"])])])])}},E=n("8c4f"),N="备忘录",A="STORE_NOTES_KEY",P="STORE_TAGS_KEY",D="STORE_USER_KEY";O["a"].use(E["a"]);var $=function(){return n.e("notes").then(n.bind(null,"f473"))},x=function(){return n.e("new").then(n.bind(null,"baf5"))},R=new E["a"]({routes:[{path:"/",name:"home",meta:{title:"备忘录",showNavbar:!0,showTabbar:!0,actionSheet:[{name:"新建笔记",action:"new"},{name:"按时间排序",action:"sort"},{name:"删除已完成",action:"deleteCompleted"},{name:"删除全部",action:"deleteAll"}]},component:$},{path:"/new",name:"new",meta:{title:"新建",showNavbar:!0},component:x},{path:"/edit/:id",name:"edit",meta:{title:"编辑",showNavbar:!0},component:x},{path:"/collection",name:"collection",meta:{title:"收藏",showNavbar:!0,showTabbar:!0},component:$},{path:"/profile",name:"profile",meta:{showNavbar:!0,showTabbar:!0},component:function(){return n.e("profile").then(n.bind(null,"fd3e"))}},{path:"/note/:id",name:"note",meta:{title:"详情",showNavbar:!0,actionSheet:[{name:"编辑",action:"edit"},{name:"删除",action:"delete"}]},component:function(){return n.e("note").then(n.bind(null,"6f7c"))}},{path:"*",name:"404",meta:{title:"404"},component:function(){return n.e("404").then(n.bind(null,"de38"))}}],scrollBehavior:function(t,e,n){return n||{x:0,y:0}}});R.beforeEach(function(t,e,n){document.title=t.meta.title||N,n()});var I,B=R,L=n("2f62"),U=(n("7514"),{0:function(t,e){return t.update_at-e.update_at},1:function(t,e){return e.update_at-t.update_at}}),C={notes:function(t){var e=U[t.user.sort];return e?t.notes.sort(e):t.notes},getNoteById:function(t){return function(e){return t.notes.find(function(t){return t.id===e})}},collectedNotes:function(t,e){return e.notes.filter(function(t){return t.is_collect})},completedNotes:function(t,e){return e.notes.filter(function(t){return t.is_complete})},tags:function(t){return t.tags},getTagById:function(t){return function(e){return t.tags.find(function(t){return t.id===e})}}},J=n("a8db"),M=(n("96cf"),n("3b8d")),Y="PUT_NOTE",F="POST_NOTE",K="PUT_NOTES_SORT",q="APP_INIT",H="UPLOAD_DATA",G="DELETE_NOTE",Q="DELETE_NOTES",W="DELETE_COMPLETED_NOTES",X="DOWNLOAD_DATA",z="PUT_NOTES",V="PUT_TAGS",Z="PUT_USER",tt=(n("8615"),n("d225")),et=n("b0b4"),nt=n("e1bd"),rt=n.n(nt),ot=n("e0eb");try{I=JSON.parse(localStorage.getItem(A))||[]}catch(wt){I=[]}var at=function(){function t(e){var n=e.id,r=void 0===n?rt()():n,o=e.title,a=void 0===o?"":o,i=e.content,c=void 0===i?"":i,s=e.is_collect,u=void 0!==s&&s,l=e.is_complete,f=void 0!==l&&l,d=e.create_at,h=void 0===d?Date.now():d,p=e.update_at,b=void 0===p?Date.now():p;Object(tt["a"])(this,t),this.id=r,this.title=a,this.content=c,this.is_collect=u,this.is_complete=f,this.create_at=h,this.update_at=b}return Object(et["a"])(t,null,[{key:"create",value:function(t){return new this(t).save()}},{key:"count",value:function(){return this.store.length}},{key:"merge",value:function(t){return this.store=Object(ot["e"])(t,this.store),this.store}},{key:"find",value:function(t){return t?this.store.map(function(e){if(Object(ot["c"])(t,e))return e}).filter(Boolean):this.store}},{key:"findById",value:function(t){var e=this.store.find(function(e){return e.id===t});return e?new this(e):null}},{key:"findByIdAndUpdate",value:function(t,e){var n=this.store.find(function(e){return e.id===t});return n?this.create(Object(_["a"])({},n,e,{update_at:Date.now()})):Promise.reject()}},{key:"deleteById",value:function(t){var e=this;return new Promise(function(n,r){var o=e.store.find(function(e){return e.id===t});o?n(new e(o).delete()):r({message:"没有找到该条备忘录"})})}},{key:"delete",value:function(t){var e=this;return t?this.store.forEach(function(n){Object(ot["c"])(t,n)&&new e(n).delete()}):this.store=[],this.store}},{key:"store",get:function(){return this._store},set:function(t){localStorage.setItem(A,JSON.stringify(t)),this._store=t}}]),Object(et["a"])(t,[{key:"delete",value:function(){var e=Object(ot["a"])(t.store);return delete e[this.id],t.store=Object.values(e),t.store}},{key:"save",value:function(){var e=this;return new Promise(function(n){var r=Object(ot["a"])(t.store);r[e.id]=e,t.store=Object.values(r),n(e)})}}]),t}();Object(w["a"])(at,"_store",I);var it;n("7f7f"),n("5df3");try{it=JSON.parse(localStorage.getItem(P))||[]}catch(wt){it=[]}var ct=[{id:1,color:"#409eff",name:"蓝色",create_at:Date.now(),update_at:Date.now()},{id:2,color:"#67c23a",name:"绿色",create_at:Date.now(),update_at:Date.now()},{id:3,color:"#909399",name:"灰色",create_at:Date.now(),update_at:Date.now()},{id:4,color:"#e6a23c",name:"黄色",create_at:Date.now(),update_at:Date.now()},{id:5,color:"#f56c6c",name:"红色",create_at:Date.now(),update_at:Date.now()}],st=function(){function t(e){var n=e.id,r=void 0===n?rt()():n,o=e.color,a=void 0===o?"#409eff":o,i=e.name,c=void 0===i?"蓝色":i,s=e.create_at,u=void 0===s?Date.now():s,l=e.update_at,f=void 0===l?Date.now():l;Object(tt["a"])(this,t),this.id=r,this.color=a,this.name=c,this.create_at=u,this.update_at=f}return Object(et["a"])(t,null,[{key:"init",value:function(){var t=this;return this.find().length?Promise.resolve(this.store):Promise.all(ct.map(function(e){return t.create(e)}))}},{key:"create",value:function(t){return new this(t).save()}},{key:"merge",value:function(t){return this.store=Object(ot["e"])(t,this.store),this.store}},{key:"find",value:function(t){return t?this.store.map(function(e){if(Object(ot["c"])(t,e))return e}).filter(Boolean):this.store}},{key:"store",get:function(){return this._store},set:function(t){localStorage.setItem(P,JSON.stringify(t)),this._store=t}}]),Object(et["a"])(t,[{key:"save",value:function(){var e=this;return new Promise(function(n){var r=Object(ot["a"])(t.store);r[e.id]=e,t.store=Object.values(r),n(e)})}}]),t}();Object(w["a"])(st,"_store",it);var ut,lt=n("2ef0");try{ut=JSON.parse(localStorage.getItem(D))||{}}catch(wt){ut={}}var ft,dt=function(){function t(e){Object(tt["a"])(this,t);var n=Object(_["a"])({},t.defaultOptions,e),r=n.id,o=n.sort,a=n.create_at,i=n.update_at;this.id=r,this.sort=o,this.create_at=a,this.update_at=i}return Object(et["a"])(t,null,[{key:"create",value:function(t){return new this(t).save()}},{key:"init",value:function(){var t=this.get();return Object(lt["isEmpty"])(t)?this.create():Promise.resolve(t)}},{key:"get",value:function(){return this.store}},{key:"update",value:function(t){return this.create(Object(_["a"])({},this.store,t,{update_at:Date.now()}))}},{key:"merge",value:function(t){var e=this.store;return t.update_at>e.update_at?(this.store=t,Promise.resolve(this.store)):Promise.resolve(e)}},{key:"store",get:function(){return this._store},set:function(t){localStorage.setItem(D,JSON.stringify(t)),this._store=t}},{key:"defaultOptions",get:function(){return{id:rt()(),sort:0,create_at:Date.now(),update_at:Date.now()}}}]),Object(et["a"])(t,[{key:"save",value:function(){var e=this;return new Promise(function(n){t.store=e,n(e)})}}]),t}();Object(w["a"])(dt,"_store",ut);var ht,pt=(ft={},Object(w["a"])(ft,q,function(){var t=Object(M["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,n(z,at.find()),t.t0=n,t.t1=V,t.next=6,st.init();case 6:return t.t2=t.sent,(0,t.t0)(t.t1,t.t2),t.t3=n,t.t4=Z,t.next=12,dt.init();case 12:t.t5=t.sent,(0,t.t3)(t.t4,t.t5);case 14:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()),Object(w["a"])(ft,H,function(t,e){var n=t.commit,r=e.notes,o=e.user,a=e.tags;n(z,at.merge(r)),n(Z,dt.merge(o)),n(V,st.merge(a))}),Object(w["a"])(ft,Y,function(){var t=Object(M["a"])(regeneratorRuntime.mark(function t(e,n){var r,o,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,o=n.id,a=Object(J["a"])(n,["id"]),t.t0=r,t.t1=Y,t.next=6,at.findByIdAndUpdate(o,a);case 6:t.t2=t.sent,(0,t.t0)(t.t1,t.t2);case 8:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()),Object(w["a"])(ft,F,function(t,e){var n=t.commit;return new Promise(function(t,r){at.create(e).then(function(e){n(F,e),t(e)}).catch(r)})}),Object(w["a"])(ft,K,function(){var t=Object(M["a"])(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.t0=r,t.t1=K,t.next=5,dt.update({sort:n});case 5:t.t2=t.sent.sort,(0,t.t0)(t.t1,t.t2);case 7:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()),Object(w["a"])(ft,G,function(){var t=Object(M["a"])(regeneratorRuntime.mark(function t(e,n){var r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.t0=r,t.t1=z,t.next=5,at.deleteById(n);case 5:t.t2=t.sent,(0,t.t0)(t.t1,t.t2);case 7:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}()),Object(w["a"])(ft,Q,function(t){var e=t.commit;e(z,at.delete())}),Object(w["a"])(ft,W,function(t){var e=t.commit;e(z,at.delete({is_complete:!0}))}),Object(w["a"])(ft,X,function(){return Object(ot["b"])({notes:at.find(),user:dt.get(),tags:st.find()})}),ft),bt=n("75fc"),vt=(ht={},Object(w["a"])(ht,Y,function(t,e){var n=Object(ot["a"])(t.notes);n[e.id]=e,t.notes=Object.values(n)}),Object(w["a"])(ht,F,function(t,e){t.notes=[e].concat(Object(bt["a"])(t.notes))}),Object(w["a"])(ht,K,function(t,e){t.user.sort=e}),Object(w["a"])(ht,z,function(t,e){t.notes=e}),Object(w["a"])(ht,V,function(t,e){t.tags=e}),Object(w["a"])(ht,Z,function(t,e){t.user=e}),ht);O["a"].use(L["a"]);var mt={notes:[],tags:[],user:{sort:0}},gt=new L["a"].Store({state:mt,getters:C,mutations:vt,actions:pt}),Ot=n("9483");Object(Ot["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("f5df"),n("522b");[g["a"],m["a"],v["a"],b["a"],p["a"],h["a"],d["a"],f["a"],l["a"],u["a"],s["a"],c["a"],i["a"],a["a"],o["a"],r["a"]].forEach(function(t){return O["a"].use(t)}),O["a"].config.productionTip=!1,new O["a"]({router:B,store:gt,render:function(t){return t(T)}}).$mount("#app")},e0eb:function(t,e,n){"use strict";n.d(e,"d",function(){return c}),n.d(e,"b",function(){return u}),n.d(e,"f",function(){return l}),n.d(e,"c",function(){return f}),n.d(e,"a",function(){return d}),n.d(e,"e",function(){return h});n("8615");var r=n("cebc"),o=(n("ac6a"),n("456d"),n("7618"),n("768b")),a=n("5a0c"),i=n.n(a);function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return i()(t).format(e)}c.friendly=function(t){var e=function(e){return i()().diff(t,e)},n=[e("year"),e("month"),e("day"),e("hour"),e("minute")].map(function(t){return t<0?0:t}),r=Object(o["a"])(n,5),a=r[0],c=r[1],s=r[2],u=r[3],l=r[4],f=e("second");return a?"".concat(a,"年前"):c?"".concat(c,"月前"):s?"".concat(s,"天前"):u?"".concat(u,"小时前"):l?"".concat(l,"分钟前"):f<0?"未来":"刚刚"};var s=function(t){var e=URL.createObjectURL(t),n=document.createElement("a");n.href=e,n.download="notes.json",n.style.display="none",document.body.appendChild(n),n.click(),document.body.removeChild(n),URL.revokeObjectURL(e)};function u(t){return new Promise(function(e,n){try{var r=new Blob([JSON.stringify(t)],{type:"application/json"});s(r),e()}catch(o){n({message:"请使用最新的Chrome浏览器进行下载"})}})}function l(t){return new Promise(function(e,n){var r=new FileReader;r.readAsText(t,"UTF-8"),r.onload=function(t){try{e(JSON.parse(t.target.result))}catch(r){n("读取文件错误，请重试")}},r.onerror=function(){n("读取文件错误，请重试")}})}function f(t,e,n){var r=Object.keys(t);return(!n||r.length===Object.keys(e).length)&&r.every(function(n){return t[n]===e[n]})}function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"id";return t.reduce(function(t,n,o){var a=n[e]||o;return t[a]=Object(r["a"])({},n),t},Object.create(null))}function h(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t,e){return t.update_at>e.update_at};return Object.values(t.reduce(function(t,e){var r=t[e.id];return r?n(e,r)&&(t[e.id]=e):t[e.id]=e,t},d(e)))}}});