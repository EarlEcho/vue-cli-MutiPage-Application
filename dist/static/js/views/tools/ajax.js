webpackJsonp([5],{101:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(1),r=a(72),i=a.n(r);new s.a({render:function(e){return e(i.a)}}).$mount("#app")},107:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(9);t.default={name:"form-preview",props:["headerLabel","headerValue","bodyItems","footerButtons","name"],methods:{onButtonClick:function(e,t){e&&e(this.name),t&&a.i(s.a)(t,this.$router)}}}},122:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(3),r=a(5),i=a.n(r),n=a(230),o=a.n(n);t.default={components:{HbHead:i.a,FormPreview:o.a},data:function(){return{ajaxResult:{}}},mounted:function(){this.ajax()},methods:{ajax:function(){var e=this;this.$vux.loading.show({text:"Loading"}),s.a.M.ajax({url:" / ",success:function(t){e.ajaxResult=t,setTimeout(function(){e.$vux.loading.hide()},1e3)}})}}}},173:function(e,t){},185:function(e,t){},210:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vux-form-preview weui-form-preview"},[a("div",{staticClass:"weui-form-preview__hd"},[a("label",{staticClass:"weui-form-preview__label",domProps:{innerHTML:e._s(e.headerLabel)}}),e._v(" "),a("em",{staticClass:"weui-form-preview__value",domProps:{innerHTML:e._s(e.headerValue||"&nbsp;")}})]),e._v(" "),a("div",{staticClass:"weui-form-preview__bd"},e._l(e.bodyItems,function(t){return a("div",{staticClass:"weui-form-preview__item"},[a("label",{staticClass:"weui-form-preview__label"},[e._v(e._s(t.label))]),e._v(" "),a("span",{staticClass:"weui-form-preview__value"},[e._v(e._s(t.value))])])})),e._v(" "),a("div",{staticClass:"weui-form-preview__ft"},e._l(e.footerButtons,function(t){return a("a",{staticClass:"weui-form-preview__btn",class:{"weui-form-preview__btn_default":"default"===t.style,"weui-form-preview__btn_primary":"primary"===t.style},attrs:{href:"javascript:"},on:{click:function(a){e.onButtonClick(t.onButtonClick,t.link)}}},[e._v(e._s(t.text))])}))])},staticRenderFns:[]}},222:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mainWarp"},[a("hb-head",{attrs:{headfont:"图片"}}),e._v(" "),e._m(0),e._v(" "),e.ajaxResult.status?a("div",{staticClass:"martop10"},[a("form-preview",{attrs:{"header-label":"付款金额","header-value":"¥2400.00","body-items":e.ajaxResult.goodslist}})],1):e._e()],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bgfff martop10 pad10 font14 color666"},[a("p",[e._v("\n            例子: 使用axios获取数据，axios已封装。\n        ")])])}]}},230:function(e,t,a){a(173);var s=a(0)(a(107),a(210),null,null);e.exports=s.exports},72:function(e,t,a){a(185);var s=a(0)(a(122),a(222),null,null);e.exports=s.exports}},[101]);