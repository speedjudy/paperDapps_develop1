(window.webpackJsonp=window.webpackJsonp||[]).push([[212,78],{585:function(t,e,r){"use strict";r.r(e);var l=r(0).default.extend({name:"SingleLeafNoStalk"}),n=r(1),component=Object(n.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("svg",{attrs:{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("g",{attrs:{"clip-path":"url(#clip0_2308_1974)"}},[e("path",{attrs:{d:"M8.32066 0.185059C8.32066 0.185059 9.29721 2.57412 5.11189 4.17884C2.83769 5.05055 1.09097 7.28485 3.17656 10.7363C3.34928 9.19355 4.08989 5.79202 7.27449 5.01582C7.27449 5.01582 4.31045 6.12415 4.04862 11.1411C5.57166 11.355 9.14365 11.4986 10.2042 8.39886C11.6046 4.30336 8.32066 0.185059 8.32066 0.185059Z",fill:"#3A7F0D"}}),t._v(" "),e("path",{attrs:{d:"M4.05 11.1202C7.2833 9.82985 9.63592 6.80694 9.96061 3.19832C9.29962 1.41533 8.32066 0.185059 8.32066 0.185059C8.32066 0.185059 9.29721 2.57412 5.11189 4.17884C2.83769 5.05055 1.09097 7.28485 3.17656 10.7363C3.34928 9.19355 4.08989 5.79202 7.27449 5.01582C7.27431 5.01584 4.31909 6.12141 4.05 11.1202Z",fill:"#49A010"}}),t._v(" "),e("path",{attrs:{d:"M2.85402 4.25834C3.02096 4.25834 3.15629 4.12301 3.15629 3.95608C3.15629 3.78914 3.02096 3.65381 2.85402 3.65381C2.68709 3.65381 2.55176 3.78914 2.55176 3.95608C2.55176 4.12301 2.68709 4.25834 2.85402 4.25834Z",fill:"#3A7F0D"}}),t._v(" "),e("path",{attrs:{d:"M3.80379 3.87027C3.92302 3.87027 4.01968 3.77361 4.01968 3.65437C4.01968 3.53514 3.92302 3.43848 3.80379 3.43848C3.68455 3.43848 3.58789 3.53514 3.58789 3.65437C3.58789 3.77361 3.68455 3.87027 3.80379 3.87027Z",fill:"#49A010"}}),t._v(" "),e("path",{attrs:{d:"M3.60907 2.14295C3.90716 2.14295 4.14881 1.9013 4.14881 1.60322C4.14881 1.30513 3.90716 1.06348 3.60907 1.06348C3.31099 1.06348 3.06934 1.30513 3.06934 1.60322C3.06934 1.9013 3.31099 2.14295 3.60907 2.14295Z",fill:"#49A010"}}),t._v(" "),e("path",{attrs:{d:"M5.27135 3.00658C5.36674 3.00658 5.44407 2.92925 5.44407 2.83385C5.44407 2.73846 5.36674 2.66113 5.27135 2.66113C5.17596 2.66113 5.09863 2.73846 5.09863 2.83385C5.09863 2.92925 5.17596 3.00658 5.27135 3.00658Z",fill:"#49A010"}}),t._v(" "),e("path",{attrs:{d:"M6.71824 2.35885C6.99248 2.35885 7.2148 2.13653 7.2148 1.86229C7.2148 1.58804 6.99248 1.36572 6.71824 1.36572C6.444 1.36572 6.22168 1.58804 6.22168 1.86229C6.22168 2.13653 6.444 2.35885 6.71824 2.35885Z",fill:"#49A010"}})]),t._v(" "),e("defs",[e("clipPath",{attrs:{id:"clip0_2308_1974"}},[e("rect",{attrs:{width:"11.0541",height:"11.0541",fill:"white",transform:"translate(0.870117 0.185059)"}})])])])}),[],!1,null,null,null);e.default=component.exports},859:function(t,e,r){"use strict";r.r(e);r(50);var l=r(3),n=(r(21),r(585)),o=r(47),c=r(22),f=Object(c.a)(o.a).extend({name:"FreeProductCard",components:{SingleLeafNoStalk:n.default},computed:{user:function(){return this.$auth.user},profilePhoto:function(){return this.$store.getters.profilePhoto}},methods:{PopUpFileInput:function(){try{var t;(null===(t=this.$refs)||void 0===t?void 0:t.profileInput).click()}catch(t){console.log(t)}},uploadProfilePicture:function(t){var e=this;return Object(l.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!((n=t.target).files.length<1||n.files[0].size/1024/1024>2)){r.next=4;break}return e.$notify.error({message:"File size must be less than 2MB"}),r.abrupt("return");case 4:(o=new FormData).append("upload",n.files[0],"user-profile-picture.jpg"),o.append("type","profilePicture"),o.append("userId",e.user.id),e.$axios.$patch("/files",o).then(Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.filterUsers();case 1:case"end":return t.stop()}}),t)})))).catch((function(){e.$notify.error({message:"Unable to upload profile picture"})}));case 9:case"end":return r.stop()}}),r)})))()}}}),d=r(1),component=Object(d.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"rounded-2xl bg-white py-6 px-6 flex items-center justify-center"},[e("div",{staticClass:"flex flex-col items-center"},[e("h3",{staticClass:"uppercase text-paperdazgray-500 font-semibold text-center mb-4 text-xl"},[t._v("\n      Free Account\n    ")]),t._v(" "),e("div",{staticClass:"circle circle-75 border-4 border-[#B7EF94] mx-auto p-0.5 mb-2"},[e("div",{staticClass:"circle w-full h-full border-2 border-[#B7EF94] p-1 cursor-pointer",on:{click:t.PopUpFileInput}},[e("img",{staticClass:"circle w-full h-full profilePhoto",attrs:{src:t.profilePhoto,alt:""}}),t._v(" "),e("input",{ref:"profileInput",staticClass:"hidden",attrs:{type:"file",accept:"image/x-png,image/jiff,image/jpeg,image/jpg"},on:{input:t.uploadProfilePicture}})])]),t._v(" "),e("p",{staticClass:"text-lg font-semibold mb-2 capitalize"},[t._v("\n      "+t._s("".concat(t.user.firstName," ").concat(t.user.lastName))+"\n    ")]),t._v(" "),e("div",{staticClass:"border border-paperdazgray-100 inline-flex items-center px-2 py-0.5 text-xs font-semibold rounded-full"},[e("p",{staticClass:"mr-2"},[t._v(t._s("".concat((t.user||{}).totalLeavesEarned)))]),t._v(" "),e("single-leaf-no-stalk")],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);