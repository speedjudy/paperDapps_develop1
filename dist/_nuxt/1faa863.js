(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{1016:function(t,e,n){"use strict";n(800)},1017:function(t,e,n){var o=n(19)((function(i){return i[1]}));o.push([t.i,"*[data-v-6f868437] .el-dialog{width:830px!important;max-width:95%!important;border-radius:8px!important;position:relative!important;overflow:hidden}*[data-v-6f868437] .el-dialog__header{padding-bottom:20px;border-bottom:1px solid #dadada}*[data-v-6f868437] .el-dialog__footer{border-top:1px solid #dadada}*[data-v-6f868437] .el-dialog__footer,*[data-v-6f868437] .el-dialog__header{text-align:left!important}*[data-v-6f868437] .el-dialog__body{background:#fcfcfd}*[data-v-6f868437] .el-select .el-input__inner{padding-top:0!important;padding-bottom:0!important}",""]),o.locals={},t.exports=o},1326:function(t,e,n){"use strict";n.r(e);var o=n(3),l=(n(21),n(50),n(9),n(0)),r=(n(256),n(144)),d=l.default.extend({name:"InviteTeamMemberModal",model:{prop:"visible",event:"updateVisibility"},props:{visible:{type:Boolean,default:!0},reachLimit:{type:Boolean}},data:function(){return{showModal:!1,email:"",access:"",teamInviteLink:"",isLoading:!1}},watch:{visible:function(t){this.showModal=t,this.teamInviteLink="".concat(window.location.origin,"/register/?teamId=").concat(this.$auth.user.id)},showModal:function(t){this.$emit("updateVisibility",t)}},mounted:function(){this.showModal=this.visible,this.teamInviteLink="".concat(window.location.origin,"/register/?teamId=").concat(this.$auth.user.id)},methods:{copyTeamLink:function(){navigator.clipboard.writeText(this.teamInviteLink),this.$notify.info({message:"Copied"})},sendInviteLink:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.reachLimit){e.next=3;break}return t.$emit("maxpopup"),e.abrupt("return");case 3:if(!t.isLoading){e.next=5;break}return e.abrupt("return");case 5:return t.isLoading=!0,n={action:"invite_link",emails:[t.email],link:t.teamInviteLink},e.next=9,t.$axios.$post("/request",n).then((function(){t.$notify.success({message:"Invite sent successfully"}),t.closeModal()})).catch((function(){t.$notify.error({message:"Invite sent failed"})})).finally((function(){t.isLoading=!1}));case 9:case"end":return e.stop()}}),e)})))()},closeModal:function(){this.$emit("updateVisibility",!1)}},components:{SpinnerDottedIcon:r.default}}),c=(n(1016),n(1)),component=Object(c.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("el-dialog",{staticClass:"relative",attrs:{visible:t.showModal,"append-to-body":!0,"show-close":!1,center:""},on:{"update:visible":function(e){t.showModal=e}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h4",{staticClass:"font-semibold text-xl text-gray-800 pt-4"},[t._v("\n      Invite Team Member\n    ")])]},proxy:!0}])},[e("div",{staticClass:"absolute -top-3 -right-3",staticStyle:{padding:"inherit"}},[e("span",{staticClass:"circle circle-12 bg-white cursor-pointer text-red-600",on:{click:function(e){return t.closeModal()}}},[e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 8 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M4 3.19188L7.02451 0.167368C7.24767 -0.0557892 7.60948 -0.0557892 7.83263 0.167368C8.05579 0.390524 8.05579 0.752333 7.83263 0.975489L4.80812 4L7.83263 7.02451C8.05579 7.24767 8.05579 7.60948 7.83263 7.83263C7.60948 8.05579 7.24767 8.05579 7.02451 7.83263L4 4.80812L0.975489 7.83263C0.752333 8.05579 0.390524 8.05579 0.167368 7.83263C-0.0557892 7.60948 -0.0557892 7.24767 0.167368 7.02451L3.19188 4L0.167368 0.975489C-0.0557892 0.752333 -0.0557892 0.390524 0.167368 0.167368C0.390524 -0.0557892 0.752333 -0.0557892 0.975489 0.167368L4 3.19188Z",fill:"#414042"}})])])]),t._v(" "),t._v(" "),e("form",{on:{submit:function(e){return e.preventDefault(),t.sendInviteLink.apply(null,arguments)}}},[e("div",[e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-[1fr,max-content] items-center gap-3 mb-8"},[e("div",[e("label",{staticClass:"block font-medium mb-3",attrs:{for:""}},[t._v("Email Address")]),t._v(" "),e("el-input",{attrs:{disabled:t.isLoading,placeholder:"Email",type:"email",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),t._v(" "),e("div")])]),t._v(" "),e("p",{staticClass:"mt-10 font-medium mb-3"},[t._v("Use invite link")]),t._v(" "),e("div",{staticClass:"px-3 py-2 bg-paperdazgreen-400 flex items-center h-16"},[e("p",{staticClass:"bg-white h-full mr-3 flex-1 truncate flex items-center px-2 text-sm"},[e("span",{staticClass:"truncate"},[t._v(t._s(t.teamInviteLink))])]),t._v(" "),e("button",{staticClass:"bg-paperdazgreen-700 text-white px-5 h-full",on:{click:function(e){return e.preventDefault(),t.copyTeamLink.apply(null,arguments)}}},[t._v("Copy")])]),t._v(" "),e("div",{staticClass:"py-3 grid place-items-center"},[e("button",{staticClass:"shadow-lg w-full bg-paperdazgreen-400 rounded-lg text-white h-12 max-w-[450px] flex justify-center items-center",class:[t.isLoading?"opacity-50":"opacity-100"],attrs:{disabled:t.isLoading,type:"submit"}},[t._v("\n        INVITE\n        "),t.isLoading?e("SpinnerDottedIcon",{staticClass:"animate-spin ml-2",attrs:{width:"20",height:"20"}}):t._e()],1)])])])}),[],!1,null,"6f868437",null);e.default=component.exports},800:function(t,e,n){var content=n(1017);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("b8984ea0",content,!0,{sourceMap:!1})}}]);