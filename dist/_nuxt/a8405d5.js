(window.webpackJsonp=window.webpackJsonp||[]).push([[30,8,14],{603:function(t,e,n){"use strict";n.r(e);var r=n(275),c=n(257),o=n(93),l=n(571),d=n(585),v=n(588),f=n(586),_=n(209),m=n(584),h=n(604),k=n(88),C=(n(8),n(61),{name:"BaseDialogsCart",inheritAttrs:!1,props:{data:{type:Object,required:!0}},data:function(){return{counter:1}}}),j=n(36),component=Object(j.a)(C,(function(){var t=this,e=t._self._c;return e(m.a,{attrs:{justify:"space-around"}},[e(d.a,{attrs:{cols:"auto"}},[e(f.a,t._g(t._b({attrs:{"max-width":"600",data:t.data},scopedSlots:t._u([{key:"default",fn:function(dialog){var n;return[e(c.a,[e(k.a,{staticClass:"mb-5",attrs:{color:"primary",dark:""}},[t._v("Order")]),t._v(" "),e(o.b,[e(v.a,[e(m.a,[e(d.a,{attrs:{cols:"12",sm:"6",md:"6"}},[e(h.a,{attrs:{label:"name*",required:""}})],1),t._v(" "),e(d.a,{attrs:{cols:"12",sm:"6",md:"6"}},[e(h.a,{attrs:{label:"Address",required:""}})],1),t._v(" "),e(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[e(_.a,{staticClass:"image",attrs:{src:null===(n=t.data)||void 0===n?void 0:n.images[0],alt:"lorem","max-height":"150",width:"200"}})],1),t._v(" "),e(d.a,{attrs:{cols:"12",sm:"8",md:"8"}},[e("div",[e("h1",[t._v("\n                      "+t._s(t.data.title)+"\n                    ")]),t._v(" "),e("h4",[t._v("\n                      "+t._s(t.data.description)+"\n                    ")])]),t._v(" "),e(r.a,{staticClass:"btn btn--minus",on:{click:function(e){t.counter=t.counter-1}}},[t._v("\n                    -\n                  ")]),t._v(" "),e(l.a,[t._v("\n                    "+t._s(t.counter)+"\n                  ")]),t._v(" "),e(r.a,{staticClass:"btn btn--plus",on:{click:function(e){t.counter=t.counter+1}}},[t._v("\n                    +\n                  ")]),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("h2",[t._v("\n                   $ "+t._s(t.data.price*t.counter)+".00\n                  ")])],1)],1)],1)],1),t._v(" "),e(o.a,{staticClass:"justify-center"},[e(r.a,{staticClass:"primary",attrs:{block:""},on:{click:function(t){dialog.value=!1}}},[t._v("Order")])],1)],1)]}}])},"v-dialog",t.$attrs,!1),t.$listeners))],1)],1)}),[],!1,null,null,null);e.default=component.exports},625:function(t,e,n){"use strict";n.r(e);var r=n(275),c=n(257),o=n(93),l=n(671),d=n(672),v=n(571),f=n(697),_=n(585),m=n(588),h=n(570),k=n(156),C=n(584),j=n(583),O=(n(8),n(61),n(5)),x=(n(54),n(41),n(42)),w={layout:"auth",props:{product:{required:!0,type:Object}},setup:function(t){var e=Object(x.i)();console.log(t);var n=Object(x.f)(1),dialog=Object(x.f)(null),r=Object(x.f)([{text:"Home",disabled:!1},{text:"Product",disabled:!0,href:""}]),c=Object(x.e)({id:"",qty:"",title:"",colors:"",images:""}),o=function(){var t=Object(O.a)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(r,"e p[roduct]"),c.id=r.id,c.title=r.title,c.description=r.description,c.price=r.price,c.qty=n,c.colors=l,c.images=null==r?void 0:r.images[0],t.next=10,e.dispatch("cart/addCart",c);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=Object(x.f)("Black");return{handleBack:function(){history.back()},dataLink:r,colors:Object(x.f)(["Red","Black","Blue"]),selection:l,dialog:dialog,HandleChart:o,counter:n,dataCart:c}},computed:{width:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 320;case"sm":return 400;case"md":case"lg":return 600;case"xl":return 700}}}},y=w,B=n(36),component=Object(B.a)(y,(function(){var t=this,e=t._self._c;return e("div",[e(r.a,{staticClass:"mx-",attrs:{fab:"",dark:"",color:"primary"},on:{click:t.handleBack}},[e(k.a,{attrs:{dark:""}},[t._v("\n    mdi-arrow-left-circle\n    ")])],1),t._v(" "),e(m.a,{attrs:{fluid:""}},[e(C.a,[e(_.a,{attrs:{cols:"12",md:"8"}},[e(c.a,[e(l.a,t._l(t.product.images,(function(t,i){return e(d.a,{key:i,attrs:{src:t,"reverse-transition":"fade-transition",transition:"fade-transition"}})})),1)],1)],1),t._v(" "),e(_.a,{attrs:{cols:"12",md:"4"}},[e(c.a,{staticClass:"mx-auto",attrs:{"max-width":"400"}},[e(o.c,[e("h2",{staticClass:"text-h4"},[t._v("\n              "+t._s(t.product.title)+"\n            ")]),t._v(" "),e(j.a),t._v(" "),e("span",{staticClass:"text-h6"},[t._v("$"+t._s(t.product.price)+".00")])],1),t._v(" "),e(o.b,[t._v("\n            "+t._s(t.product.description)+"\n          ")]),t._v(" "),e(h.a,{staticClass:"mx-4"}),t._v(" "),e(o.b,[e("span",{staticClass:"subheading"},[t._v("Select Color")]),t._v(" "),e(f.a,{attrs:{"active-class":"deep-purple--text text--accent-4",mandatory:""},model:{value:t.selection,callback:function(e){t.selection=e},expression:"selection"}},t._l(t.colors,(function(n){return e(v.a,{key:n,attrs:{value:n}},[t._v("\n                "+t._s(n)+"\n              ")])})),1)],1),t._v(" "),e("v-card-action",[e(m.a,{attrs:{fluid:""}},[e(C.a,[e(_.a,[e(r.a,{staticClass:"btn btn--minus error",on:{click:function(e){t.counter=t.counter-1}}},[t._v("\n                    -\n                  ")]),t._v(" "),e(v.a,[t._v("\n                    "+t._s(t.counter)+"\n                  ")]),t._v(" "),e(r.a,{staticClass:"btn btn--plus success",on:{click:function(e){t.counter=t.counter+1}}},[t._v("\n                    +\n                  ")])],1)],1)],1)],1),t._v(" "),e(o.a,[e(r.a,{staticClass:"white--text",attrs:{block:"",color:"deep-purple accent-4"},on:{click:function(e){return t.HandleChart(t.product)}}},[t._v("\n              Add to Cart\n            ")])],1)],1)],1),t._v(" "),e("BaseDialogsCart",{attrs:{data:t.product},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseDialogsCart:n(603).default})},693:function(t,e,n){"use strict";n.r(e);n(41);var r=n(42),c={components:{Child:n(625).default},middleware:"authenticated",setup:function(){var t=Object(r.i)(),e=Object(r.h)(),n=Object(r.a)((function(){return e.currentRoute.params.id})),c=Object(r.f)([]),dialog=Object(r.f)(0);Object(r.d)((function(){c.value=e.currentRoute.params.id}));var o=Object(r.e)({name:"",phone:"",selectedRole:"",password:"",email:"",profile:""});Object(r.j)([c,o.profile],(function(e){console.log(e),t.dispatch("fetch/getProductById",c).then((function(t){}))}));var l=Object(r.a)((function(){return t.getters["fetch/id"]})),d=Object(r.f)("");return console.log(d,"search"),{idUrl:n,dataUser:o,handleModal:function(){dialog.value=!0,console.log(dialog)},dialog:dialog,search:d,productDetail:l}},computed:{width:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 320;case"sm":return 650;case"md":return 850;case"lg":case"xl":return 1200}}}},o=n(36),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return""!=t.dataUser?e("div",[e("Child",{attrs:{product:t.productDetail}})],1):e("div",[t._v("\n  data kosong\n")])}),[],!1,null,null,null);e.default=component.exports}}]);