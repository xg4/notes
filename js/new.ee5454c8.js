(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["new"],{1181:function(t,e,n){"use strict";n("7f7f");var a=n("4d26"),s=n.n(a),i=n("386c"),c=n.n(i);e["a"]={functional:!0,render:function(t,e){var n=e.props,a=n.id,i=n.showName,o=e.parent.$store,r=e.data,l=o.getters.getTagById(a)||{};return t("span",{class:c.a.wrap,style:{color:l.color||"#1989fa"}},[t("i",{class:s()("x-icon x-icon-tag",r.class)}),i&&t("span",{class:c.a.text},[l.name])])}}},"20d6":function(t,e,n){"use strict";var a=n("5ca1"),s=n("0a49")(6),i="findIndex",c=!0;i in[]&&Array(1)[i](function(){c=!1}),a(a.P+a.F*c,"Array",{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(i)},"386c":function(t,e,n){t.exports={wrap:"index-module_wrap_gq3Qe",text:"index-module_text_1Xqbr"}},baf5:function(t,e,n){"use strict";n.r(e);n("20d6"),n("a481"),n("96cf");var a=n("3b8d"),s=(n("7f7f"),n("cebc")),i=n("768b"),c=(n("ffc1"),n("ac6a"),n("c38d")),o=n.n(c),r=n("1181");e["default"]={created:function(){var t=this;this.hasID&&Object.entries(this.note).forEach(function(e){var n=Object(i["a"])(e,2),a=n[0],s=n[1];t[a]=s})},data:function(){return{title:"",content:"",tag:"",is_collect:!1,is_complete:!1,showTags:!1}},computed:{note:function(){return this.$store.getters.getNoteById(this.activeID)},hasID:function(){return!!this.activeID},activeID:function(){return this.$route.params.id},tags:function(){return this.$store.getters.tags.map(function(t){return Object(s["a"])({},t,{text:'<i class="x-icon x-icon-tag" style="color:'.concat(t.color,'"></i>\n        <span style="color:').concat(t.color,'">').concat(t.name,"</span>")})})}},methods:{handleSubmit:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this.hasID){t.next=6;break}e={id:this.id,title:this.title,content:this.content,is_collect:this.is_collect,is_complete:this.is_complete,tag:this.tag,update_at:Date.now()},this.$store.dispatch("PUT_NOTE",e),this.$router.back(),t.next=10;break;case 6:return t.next=8,this.$store.dispatch("POST_NOTE",this);case 8:n=t.sent,this.$router.replace("/note/".concat(n.id));case 10:this.$toast.success("保存成功");case 11:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),handleReset:function(){this.title="",this.content="",this.is_collect=!1,this.is_complete=!1,this.tag=""},handleCancel:function(){this.$router.back()},toggleTagsVisible:function(){this.showTags=!this.showTags},confirmTag:function(t){this.tag=t.id,this.showTags=!1},cancelTag:function(){this.showTags=!1}},render:function(){var t=this,e=arguments[0];return e("div",{class:o.a.wrap},[e("van-cell-group",[e("van-field",{attrs:{label:"标题",placeholder:"请输入标题",center:!0},model:{value:t.title,callback:function(e){t.title=e}}}),e("van-field",{attrs:{label:"内容",placeholder:"请输入内容",center:!0,type:"textarea",rows:"1",autosize:!0},model:{value:t.content,callback:function(e){t.content=e}}}),e("van-cell",{on:{click:this.toggleTagsVisible},attrs:{title:"标签",isLink:!0}},[this.tag&&e(r["a"],{attrs:{id:this.tag,showName:!0}})]),e("van-switch-cell",{attrs:{title:"是否收藏"},model:{value:t.is_collect,callback:function(e){t.is_collect=e}}}),e("van-switch-cell",{attrs:{title:"是否完成"},model:{value:t.is_complete,callback:function(e){t.is_complete=e}}})]),e("div",{class:o.a.btns},[e("van-button",{attrs:{type:"info",size:"large"},on:{click:this.handleSubmit}},["保存"]),this.hasID?e("van-button",{attrs:{size:"large"},on:{click:this.handleCancel}},["取消"]):e("van-button",{attrs:{size:"large"},on:{click:this.handleReset}},["重置"])]),e("van-popup",{attrs:{position:"bottom"},model:{value:t.showTags,callback:function(e){t.showTags=e}}},[e("van-picker",{attrs:{showToolbar:!0,defaultIndex:this.tags.findIndex(function(e){return e.id===t.tag}),columns:this.tags},on:{confirm:this.confirmTag,cancel:this.cancelTag}})])])}}},c38d:function(t,e,n){t.exports={wrap:"new-module_wrap_3acK3",btns:"new-module_btns_2FFi8"}},ffc1:function(t,e,n){var a=n("5ca1"),s=n("504c")(!0);a(a.S,"Object",{entries:function(t){return s(t)}})}}]);