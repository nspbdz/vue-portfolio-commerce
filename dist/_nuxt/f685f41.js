(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{610:function(t,e,n){var content=n(611);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("3ab92fd8",content,!0,{sourceMap:!1})},611:function(t,e,n){var o=n(20),r=n(22),l=n(23),c=o(!1),h=r(l);c.push([t.i,'@font-face{font-family:"Gotham Rounded";src:url('+h+")}.theme--light.v-otp-input .v-input .v-input__control .v-input__slot{background:#fff}.theme--dark.v-otp-input .v-input .v-input__control .v-input__slot{background:#303030}.v-otp-input{display:flex;flex-wrap:wrap;flex:1 1 auto;margin-right:-4px;margin-left:-4px}.v-otp-input input{text-align:center}.v-otp-input .v-input{margin:0;flex:1 0 32px;max-width:100%;width:100%;padding:4px}.v-otp-input .v-input.v-otp-input--plain fieldset{display:none}.v-otp-input .v-input input[type=number]::-webkit-inner-spin-button,.v-otp-input .v-input input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.v-otp-input .v-input input[type=number]{-moz-appearance:textfield}",""]),t.exports=c},652:function(t,e,n){"use strict";n(9),n(11),n(12),n(18),n(13),n(19);var o=n(71),r=n(2),l=(n(30),n(52),n(46),n(36),n(5),n(78),n(159),n(82),n(59),n(603),n(610),n(609)),c=n(619),h=n(111),d=n(1),f=n(16),v=n(8);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w=Object(v.a)(l.a);e.a=w.extend().extend({name:"v-otp-input",directives:{ripple:h.a},inheritAttrs:!1,props:{length:{type:[Number,String],default:6},type:{type:String,default:"text"},plain:Boolean},data:function(){return{initialValue:null,isBooted:!1,otp:[]}},computed:{outlined:function(){return!this.plain},classes:function(){return y(y(y({},l.a.options.computed.classes.call(this)),c.a.options.computed.classes.call(this)),{},{"v-otp-input--plain":this.plain})}},watch:{isFocused:"updateValue",value:function(t){this.lazyValue=t,this.otp=(null==t?void 0:t.split(""))||[]}},created:function(){var t;this.$attrs.hasOwnProperty("browser-autocomplete")&&Object(f.a)("browser-autocomplete","autocomplete",this),this.otp=(null===(t=this.internalValue)||void 0===t?void 0:t.split(""))||[]},mounted:function(){var t=this;requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{focus:function(t,e){this.onFocus(t,e||0)},genInputSlot:function(t){var e=this;return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:Object(d.h)(this.height)},on:{click:function(){return e.onClick(t)},mousedown:function(n){return e.onMouseDown(n,t)},mouseup:function(n){return e.onMouseUp(n,t)}}}),[this.genDefaultSlot(t)])},genControl:function(t){return this.$createElement("div",{staticClass:"v-input__control"},[this.genInputSlot(t)])},genDefaultSlot:function(t){return[this.genFieldset(),this.genTextFieldSlot(t)]},genContent:function(){var t=this;return Array.from({length:+this.length},(function(e,i){return t.$createElement("div",t.setTextColor(t.validationState,{staticClass:"v-input",class:t.classes}),[t.genControl(i)])}))},genFieldset:function(){return this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()])},genLegend:function(){var span=this.$createElement("span",{domProps:{innerHTML:"&#8203;"}});return this.$createElement("legend",{style:{width:"0px"}},[span])},genInput:function(t){var e=this,n=Object.assign({},this.listeners$);return delete n.change,this.$createElement("input",{style:{},domProps:{value:this.otp[t],min:"number"===this.type?0:null},attrs:y(y({},this.attrs$),{},{autocomplete:"one-time-code",disabled:this.isDisabled,readonly:this.isReadonly,type:this.type,id:"".concat(this.computedId,"--").concat(t),class:"otp-field-box--".concat(t)}),on:Object.assign(n,{blur:this.onBlur,input:function(n){return e.onInput(n,t)},focus:function(n){return e.onFocus(n,t)},keydown:this.onKeyDown,keyup:function(n){return e.onKeyUp(n,t)}}),ref:"input",refInFor:!0})},genTextFieldSlot:function(t){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genInput(t)])},onBlur:function(t){var e=this;this.isFocused=!1,t&&this.$nextTick((function(){return e.$emit("blur",t)}))},onClick:function(t){this.isFocused||this.isDisabled||!this.$refs.input[t]||this.onFocus(void 0,t)},onFocus:function(t,e){null==t||t.preventDefault(),null==t||t.stopPropagation();var n=this.$refs.input,o=this.$refs.input&&n[e||0];if(o)return document.activeElement!==o?(o.focus(),o.select()):void(this.isFocused||(this.isFocused=!0,o.select(),t&&this.$emit("focus",t)))},onInput:function(t,e){for(var n=+this.length-1,r=t.target.value,l=(null==r?void 0:r.split(""))||[],c=Object(o.a)(this.otp),i=0;i<l.length;i++){var h=e+i;if(h>n)break;c[h]=l[i].toString()}l.length||c.splice(e,1),this.otp=c,this.internalValue=this.otp.join(""),e+l.length>=+this.length?(this.onCompleted(),this.clearFocus(e)):l.length&&this.changeFocus(e+l.length)},clearFocus:function(t){this.$refs.input[t].blur()},onKeyDown:function(t){t.keyCode===d.x.enter&&this.$emit("change",this.internalValue),this.$emit("keydown",t)},onMouseDown:function(t,e){t.target!==this.$refs.input[e]&&(t.preventDefault(),t.stopPropagation()),l.a.options.methods.onMouseDown.call(this,t)},onMouseUp:function(t,e){this.hasMouseDown&&this.focus(t,e),l.a.options.methods.onMouseUp.call(this,t)},changeFocus:function(t){this.onFocus(void 0,t||0)},updateValue:function(t){this.hasColor=t,t?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onKeyUp:function(t,e){t.preventDefault();var n=t.key;if(!["Tab","Shift","Meta","Control","Alt"].includes(n)&&!["Delete"].includes(n))return"ArrowLeft"===n||"Backspace"===n&&!this.otp[e]?e>0&&this.changeFocus(e-1):"ArrowRight"===n?e+1<+this.length&&this.changeFocus(e+1):void 0},onCompleted:function(){var t=this.otp.join("");t.length===+this.length&&this.$emit("finish",t)}},render:function(t){return t("div",{staticClass:"v-otp-input",class:this.themeClasses},this.genContent())}})},692:function(t,e,n){"use strict";n.r(e);var o=n(580),r=n(652),l=n(55),c={layout:"auth",setup:function(){var t=Object(l.i)();return{formValues:Object(l.e)({otp:""}),onFinish:function(){t.push("/change-password")}}}},h=n(42),component=Object(h.a)(c,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"otp-code h-100 d-flex justify-center"},[e("div",{staticClass:"my-auto"},[e(o.a,[e("BaseCard",{staticClass:"text-center mt-3 pa-15"},[e("div",{staticClass:"otp-code-head"},[e("h1",{staticClass:"display-1 font-weight-bold"},[t._v("Masukkan kode OTP")]),t._v(" "),e("p",{staticClass:"text-gray mt-3"},[t._v("\n            Kode OTP anda sudah dikirim ke email/nomor anda\n          ")])]),t._v(" "),e("div",{staticClass:"otp-code-content my-5 mx-8"},[e("div",{staticClass:"ma-auto",staticStyle:{"max-width":"350px"}},[e(r.a,{attrs:{type:"password",length:"6"},on:{finish:t.onFinish},model:{value:t.formValues.otp,callback:function(e){t.$set(t.formValues,"otp",e)},expression:"formValues.otp"}})],1)]),t._v(" "),e("div",{staticClass:"resend my-5"},[e("a",{},[t._v("Kirim ulang kode OTP")])])])],1)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseCard:n(384).default})}}]);