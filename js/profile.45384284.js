(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{"217d":function(t,e,i){t.exports={wrap:"profile-module_wrap_2j2yY",user:"profile-module_user_2QvtR",avatar:"profile-module_avatar_P2NcI",icon:"profile-module_icon_1E9Ty",copyright:"profile-module_copyright_34gEn"}},fd3e:function(t,e,i){"use strict";i.r(e);i("7f7f"),i("96cf");var n=i("3b8d"),a=i("4d26"),s=i.n(a),o=i("217d"),r=i.n(o),c=i("e0eb");e["default"]={methods:{uploadFile:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){var i,n,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(i=e.target.files,n=i[0],n){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,Object(c["f"])(n);case 6:a=t.sent,this.$store.dispatch("UPLOAD_DATA",a);case 8:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),handleUpload:function(){var t=this;this.$dialog.confirm({title:"数据同步",message:"您确定要同步上传数据？\n备忘录将根据最后的更新时间进行合并"}).then(function(){t.$refs.file.click()}).catch(function(){})},handleDownload:function(){var t=this;this.$store.dispatch("DOWNLOAD_DATA").then(function(){}).catch(function(e){var i=e.message;t.$dialog({title:"下载失败",message:i})})}},render:function(){var t=arguments[0];return t("div",{class:r.a.wrap},[t("figure",{class:r.a.user},[t("i",{class:s()("x-icon x-icon-avatar",r.a.avatar)}),t("figcaption",[t("p",[this.$store.state.user.name||"用户名"]),t("p",{class:"ellipsis"},["id:",this.$store.state.user.id])])]),t("van-cell-group",[t("van-cell",{attrs:{title:"导出数据","is-link":!0},on:{click:this.handleDownload}},[t("i",{class:s()(r.a.icon,"x-icon x-icon-download"),slot:"icon"})]),t("van-cell",{attrs:{title:"导入数据","is-link":!0},on:{click:this.handleUpload}},[t("i",{class:s()(r.a.icon,"x-icon x-icon-upload"),slot:"icon"}),t("input",{style:{display:"none"},ref:"file",attrs:{type:"file"},on:{change:this.uploadFile}})])]),t("small",{class:r.a.copyright},[t("a",{attrs:{href:"https://github.com/xg4/notes",target:"_blank"}},[t("i",{class:"x-icon x-icon-github-fill"})]),t("p",["© 2019 xg4"])])])}}}}]);