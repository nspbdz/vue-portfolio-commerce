(window.webpackJsonp=window.webpackJsonp||[]).push([[38,10],{582:function(e,t,n){"use strict";n.r(t);var r=n(619),l=(n(40),{name:"BaseInput",props:{label:{type:String,default:""},type:{type:String,default:"text"},rules:{type:[String,Array],default:""},name:{type:String,default:""}}}),o=n(42),component=Object(o.a)(l,(function(){var e=this,t=e._self._c;return t("validation-provider",{attrs:{name:e.name,rules:e.rules},scopedSlots:e._u([{key:"default",fn:function(n){var l=n.errors;return[e.label?t("label",{attrs:{for:""}},[e._v(e._s(e.label))]):e._e(),e._v(" "),t(r.a,e._g(e._b({attrs:{solo:"",type:e.type,label:e.label,"error-messages":l}},"v-text-field",e.$attrs,!1),e.$listeners))]}}])})}),[],!1,null,null,null);t.default=component.exports},705:function(e,t,n){"use strict";n.r(t);var r=n(580),l=(n(40),n(55)),o=Object(l.b)({layout:"auth",setup:function(){var e=Object(l.i)(),t=Object(l.j)(),n=Object(l.h)(),r=Object(l.e)({nama:"Testing",nohp:"085155070899",referralCode:""});Object(l.d)((function(){r.referralCode=n.value.query.referral_code}));return{register:r,handleOtp:function(){t.dispatch("referral/register",r).then((function(){e.push("/referral/otp"),localStorage.setItem("indentifier",r.nohp)}))}}},computed:{width:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 320;case"sm":return 400;case"md":case"lg":return 600;case"xl":return 700}}}}),d=n(42),component=Object(d.a)(o,(function(){var e=this,t=e._self._c;e._self._setupProxy;return t("section",{staticClass:"register h-100 d-flex justify-center"},[t("div",{staticClass:"my-auto"},[t(r.a,{attrs:{fluid:""}},[t("BaseCard",{staticClass:"text-center",attrs:{width:e.width}},[t("validation-observer",{scopedSlots:e._u([{key:"default",fn:function(n){var r=n.invalid;return[t("form",{ref:"form",on:{submit:function(t){return t.preventDefault(),e.handleOtp.apply(null,arguments)}}},[t("div",{staticClass:"register-head"},[t("h1",{staticClass:"display-1 font-weight-bold"},[e._v("Daftar Agreesip")]),e._v(" "),t("p",{staticClass:"text-gray font-weight-light mt-2"},[e._v("\n                Silahkan register untuk menjadi member\n              ")])]),e._v(" "),t("div",{staticClass:"register-content mt-10 mb-3"},[t("div",{staticClass:"email"},[t("BaseInput",{ref:"email",attrs:{outlined:"",label:"Nama",placeholder:"Masukkan email anda","prepend-inner-icon":"mdi-account",rules:"required"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitLogin.apply(null,arguments)}},model:{value:e.register.nama,callback:function(t){e.$set(e.register,"nama",t)},expression:"register.nama"}})],1),e._v(" "),t("div",{staticClass:"password"},[t("BaseInput",{ref:"handphone",attrs:{label:"No Handphone",outlined:"","prepend-inner-icon":"mdi-phone",rules:"required"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitLogin.apply(null,arguments)}},model:{value:e.register.nohp,callback:function(t){e.$set(e.register,"nohp",t)},expression:"register.nohp"}})],1)]),e._v(" "),t("div",{staticClass:"register-button"},[t("BaseButton",{attrs:{dense:"",disabled:r,block:""},on:{click:e.handleOtp}},[e._v("Send Otp")])],1)])]}}])})],1)],1)],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{BaseInput:n(582).default,BaseButton:n(385).default,BaseCard:n(384).default})}}]);