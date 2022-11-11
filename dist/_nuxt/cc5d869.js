(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{603:function(t,n,e){"use strict";e.r(n);var c=e(259),r=e(558),o=e(253),l=e(600),d=e(580),v=e(576),_=e(591),f=e(200),m=e(579),h=e(614),C=e(84),k=(e(12),e(62),{name:"BaseDialogsCart",inheritAttrs:!1,props:{data:{type:Object,required:!0}},data:function(){return{counter:1}}}),x=e(42),component=Object(x.a)(k,(function(){var t=this,n=t._self._c;return n(m.a,{attrs:{justify:"space-around"}},[n(d.a,{attrs:{cols:"auto"}},[n(_.a,t._g(t._b({attrs:{"max-width":"600",data:t.data,color:t.color},scopedSlots:t._u([{key:"default",fn:function(dialog){var e;return[n(r.a,[n(C.a,{staticClass:"mb-5",attrs:{color:"primary",dark:""}},[t._v("Order")]),t._v(" "),n(o.b,[n(v.a,[n(m.a,[n(d.a,{attrs:{cols:"12",sm:"6",md:"6"}},[n(h.a,{attrs:{label:"name*",required:""}})],1),t._v(" "),n(d.a,{attrs:{cols:"12",sm:"6",md:"6"}},[n(h.a,{attrs:{label:"Address",required:""}})],1),t._v(" "),n(d.a,{attrs:{cols:"12",sm:"6",md:"4"}},[n(f.a,{staticClass:"image",attrs:{src:null===(e=t.data)||void 0===e?void 0:e.images[0],alt:"lorem","max-height":"150",width:"200"}})],1),t._v(" "),n(d.a,{attrs:{cols:"12",sm:"8",md:"8"}},[n("div",[n("h1",[t._v("\n                      "+t._s(t.data.title)+"\n                    ")]),t._v(" "),n("h4",[t._v("\n                      "+t._s(t.data.description)+"\n                    ")])]),t._v(" "),n(c.a,{staticClass:"btn btn--minus",on:{click:function(n){t.counter=t.counter-1}}},[t._v("\n                    -\n                  ")]),t._v(" "),n(l.a,[t._v("\n                    "+t._s(t.counter)+"\n                  ")]),t._v(" "),n(c.a,{staticClass:"btn btn--plus",on:{click:function(n){t.counter=t.counter+1}}},[t._v("\n                    +\n                  ")]),t._v(" "),n("br"),t._v(" "),n("br"),t._v(" "),n("h2",[t._v("\n                   $ "+t._s(t.data.price*t.counter)+".00\n                  ")])],1)],1)],1)],1),t._v(" "),n(o.a,{staticClass:"justify-center"},[n(c.a,{staticClass:"primary",attrs:{block:""},on:{click:function(t){dialog.value=!1}}},[t._v("Order")])],1)],1)]}}])},"v-dialog",t.$attrs,!1),t.$listeners))],1)],1)}),[],!1,null,null,null);n.default=component.exports},623:function(t,n,e){"use strict";e.r(n);var c=e(259),r=e(558),o=e(253),l=e(703),d=e(704),v=e(600),_=e(705),f=e(580),m=e(576),h=e(562),C=e(579),k=e(573),x=(e(12),e(62),e(40),e(101)),j={layout:"auth",props:{product:{required:!0,type:Object}},setup:function(t){var n=Object(x.i)();console.log(t);var e=Object(x.f)(1),c=Object(x.f)(""),dialog=Object(x.f)(null),r=Object(x.f)(["Places to Be","Places to See"]),o=Object(x.f)("Black"),l=Object(x.f)(["Red","Black","Blue"]);return console.log(c,"search"),{search:c,onShow:function(t){console.log(t),n.push("/product/"+t)},types:r,colors:l,selection:o,dialog:dialog,handleCart:function(){dialog.value=!0,console.log(dialog,"dialog")},counter:e}},computed:{width:function(){switch(this.$vuetify.breakpoint.name){case"xs":return 320;case"sm":return 400;case"md":case"lg":return 600;case"xl":return 700}}}},w=e(42),component=Object(w.a)(j,(function(){var t=this,n=t._self._c;return n("div",[n(m.a,{attrs:{fluid:""}},[n(C.a,[n(f.a,{attrs:{cols:"12",md:"8"}},[n(r.a,[n(l.a,t._l(t.product.images,(function(t,i){return n(d.a,{key:i,attrs:{src:t,"reverse-transition":"fade-transition",transition:"fade-transition"}})})),1)],1)],1),t._v(" "),n(f.a,{attrs:{cols:"12",md:"4"}},[n(r.a,{staticClass:"mx-auto",attrs:{"max-width":"400"}},[n(o.c,[n("h2",{staticClass:"text-h4"},[t._v("\n              "+t._s(t.product.title)+"\n            ")]),t._v(" "),n(k.a),t._v(" "),n("span",{staticClass:"text-h6"},[t._v("$"+t._s(t.product.price)+".00")])],1),t._v(" "),n(o.b,[t._v("\n            "+t._s(t.product.description)+"\n          ")]),t._v(" "),n(h.a,{staticClass:"mx-4"}),t._v(" "),n(o.b,[n("span",{staticClass:"subheading"},[t._v("Select Color")]),t._v(" "),n(_.a,{attrs:{"active-class":"deep-purple--text text--accent-4",mandatory:""},model:{value:t.selection,callback:function(n){t.selection=n},expression:"selection"}},t._l(t.colors,(function(e){return n(v.a,{key:e,attrs:{value:e}},[t._v("\n                "+t._s(e)+"\n              ")])})),1)],1),t._v(" "),n("v-card-action",[n(c.a,{staticClass:"btn btn--minus",on:{click:function(n){t.counter=t.counter-1}}},[t._v("\n              -\n            ")]),t._v(" "),n(v.a,[t._v("\n              "+t._s(t.counter)+"\n            ")]),t._v(" "),n(c.a,{staticClass:"btn btn--plus",on:{click:function(n){t.counter=t.counter+1}}},[t._v("\n              +\n            ")])],1),t._v(" "),n(o.a,[n(c.a,{staticClass:"white--text",attrs:{block:"",color:"deep-purple accent-4"},on:{click:t.handleCart}},[t._v("\n              Add to Cart\n            ")])],1)],1)],1),t._v(" "),n("BaseDialogsCart",{attrs:{data:t.product},model:{value:t.dialog,callback:function(n){t.dialog=n},expression:"dialog"}})],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{BaseDialogsCart:e(603).default})}}]);