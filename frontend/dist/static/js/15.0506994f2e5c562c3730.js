webpackJsonp([15],{"13Ok":function(e,t){},JzTM:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i("P9l9"),o={data:function(){return{memberData:[],total:0,page:1,listLoading:!1,reportFrom:"",editFormVisible:!1,editLoading:!1,editFormRules:{reportFrom:[{required:!0,message:"请输入发送人",trigger:"blur"},{min:1,max:100,message:"长度在 1 到 100 个字符",trigger:"blur"}],mailUser:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:1,max:100,message:"长度在 1 到 100 个字符",trigger:"blur"}],mailPass:[{required:!0,message:"请输入口令",trigger:"blur"},{min:1,max:100,message:"长度在 1 到 100 个字符",trigger:"blur"}],mailSmtp:[{required:!1,message:"请输入邮件服务器",trigger:"blur"},{min:1,max:100,message:"长度在 1 到 100 个字符",trigger:"blur"}]},editForm:{}}},methods:{handleCurrentChange:function(e){this.page=e,this.getProjectMember()},getProjectMember:function(){this.listLoading=!0;var e=this,t={project_id:this.$route.params.project_id,page:e.page},i={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};Object(r.t)(i,t).then(function(t){var i=t.msg,r=t.code,o=t.data;e.listLoading=!1,"999999"===r?(e.total=o.total,e.memberData=o.data):e.$message.error({message:i,center:!0})})},getEmailConfig:function(){var e=this,t={project_id:this.$route.params.project_id},i={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};Object(r.o)(i,t).then(function(t){var i=t.msg,r=t.code,o=t.data;e.listLoading=!1,"999999"===r?(console.log(o),o?(e.reportFrom=o.reportFrom,e.editForm=o):(e.reportFrom="",e.editForm={})):e.$message.error({message:i,center:!0})})},DelEmail:function(){var e=this,t={project_id:Number(this.$route.params.project_id)},i={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};Object(r.g)(i,t).then(function(t){var i=t.msg,r=t.code;t.data;e.listLoading=!1,"999999"===r?(e.$message.success({message:"删除成功",center:!0}),e.getEmailConfig()):e.$message.error({message:i,center:!0})})},editSubmit:function(){var e=this,t=this;this.$refs.editForm.validate(function(i){i&&e.$confirm("确认提交吗？","提示",{}).then(function(){t.editLoading=!0;var i={project_id:Number(e.$route.params.project_id),reportFrom:e.editForm.reportFrom,mailUser:e.editForm.mailUser,mailPass:e.editForm.mailPass,mailSmtp:e.editForm.mailSmtp},o={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};Object(r.c)(o,i).then(function(e){var i=e.msg,r=e.code;e.data;t.editLoading=!1,"999999"===r?(t.$message({message:"修改成功",center:!0,type:"success"}),t.$refs.editForm.resetFields(),t.editFormVisible=!1,t.getEmailConfig()):t.$message.error({message:i,center:!0})})})})}},mounted:function(){this.getProjectMember(),this.getEmailConfig()}},a={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-row",{staticClass:"member-manage"},[i("p",{staticStyle:{color:"#999"}},[e._v("*注"),i("strong",[e._v(": ")]),e._v("自动化测试结果会发送给所有项目成员")]),e._v(" "),i("div",{staticStyle:{"margin-bottom":"20px","font-size":"20px"}},[i("div",[i("div",{staticStyle:{display:"inline"}},[e._v("测试报告发送账号： ")]),e._v(" "),e.reportFrom?e._e():i("div",{staticStyle:{display:"inline"}},[e._v("未添加账号")]),e._v(" "),e.reportFrom?i("div",{staticStyle:{display:"inline"}},[e._v(e._s(e.reportFrom))]):e._e(),e._v("\n\n                  \n                "),i("i",{staticClass:"el-icon-edit",staticStyle:{cursor:"pointer",display:"inline"},on:{click:function(t){e.editFormVisible=!0}}}),e._v("\n                                  \n                "),e.reportFrom?i("i",{staticClass:"el-icon-delete",staticStyle:{cursor:"pointer",display:"inline"},on:{click:function(t){return e.DelEmail()}}}):e._e()])]),e._v(" "),i("el-dialog",{staticStyle:{width:"60%",left:"20%"},attrs:{title:"编辑",visible:e.editFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editFormVisible=t}}},[i("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"100px",rules:e.editFormRules}},[i("el-form-item",{attrs:{label:"发送人邮箱:",prop:"reportFrom"}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.reportFrom,callback:function(t){e.$set(e.editForm,"reportFrom","string"==typeof t?t.trim():t)},expression:"editForm.reportFrom"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"用户名:",prop:"mailUser"}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.mailUser,callback:function(t){e.$set(e.editForm,"mailUser","string"==typeof t?t.trim():t)},expression:"editForm.mailUser"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"口令:",prop:"mailPass"}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.mailPass,callback:function(t){e.$set(e.editForm,"mailPass","string"==typeof t?t.trim():t)},expression:"editForm.mailPass"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"邮箱服务器:",prop:"mailSmtp"}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.mailSmtp,callback:function(t){e.$set(e.editForm,"mailSmtp","string"==typeof t?t.trim():t)},expression:"editForm.mailSmtp"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")]),e._v(" "),i("el-button",{attrs:{type:"primary",loading:e.editLoading},nativeOn:{click:function(t){return e.editSubmit(t)}}},[e._v("提交")])],1)],1),e._v(" "),i("el-col",{attrs:{span:24}},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.memberData,"highlight-current-row":""}},[i("el-table-column",{attrs:{prop:"username",label:"姓名","min-width":"30%",sortable:""}}),e._v(" "),i("el-table-column",{attrs:{prop:"permissionType",label:"权限","min-width":"30%",sortable:""}}),e._v(" "),i("el-table-column",{attrs:{prop:"userPhone",label:"手机号","min-width":"20%",sortable:""}}),e._v(" "),i("el-table-column",{attrs:{prop:"userEmail",label:"邮箱地址","min-width":"20%",sortable:""}})],1),e._v(" "),i("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":20,"page-count":e.total},on:{"current-change":e.handleCurrentChange}})],1)],1)},staticRenderFns:[]};var s=i("VU/8")(o,a,!1,function(e){i("13Ok")},"data-v-e38878fa",null);t.default=s.exports}});
//# sourceMappingURL=15.0506994f2e5c562c3730.js.map