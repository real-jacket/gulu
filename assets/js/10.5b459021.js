(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{165:function(t,e,n){},166:function(t,e,n){},167:function(t,e,n){},168:function(t,e,n){},169:function(t,e,n){},178:function(t,e,n){"use strict";var i=n(165);n.n(i).a},180:function(t,e,n){"use strict";var i=n(166);n.n(i).a},182:function(t,e,n){"use strict";var i=n(167);n.n(i).a},184:function(t,e,n){"use strict";var i=n(168);n.n(i).a},186:function(t,e,n){"use strict";var i=n(169);n.n(i).a},191:function(t,e,n){"use strict";var i={name:"GuluFooter"},s=(n(186),n(1)),a=Object(s.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)},[],!1,null,"2c4aa3a1",null);a.options.__file="footer.vue";e.a=a.exports},192:function(t,e,n){"use strict";var i={name:"GuluContent"},s=(n(184),n(1)),a=Object(s.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"g-content"},[this._t("default")],2)},[],!1,null,"31bfbdce",null);a.options.__file="content.vue";e.a=a.exports},193:function(t,e,n){"use strict";var i={name:"GuluHeader"},s=(n(182),n(1)),a=Object(s.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)},[],!1,null,"5df9b65c",null);a.options.__file="header.vue";e.a=a.exports},194:function(t,e,n){"use strict";var i={name:"GuluSider",data:function(){return{visible:!0}}},s=(n(180),n(1)),a=Object(s.a)(i,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide"}},[t.visible?n("div",{staticClass:"sider"},[t._t("default"),t._v(" "),n("button",{on:{click:function(e){t.visible=!1}}},[t._v("隐藏")])],2):t._e()])},[],!1,null,"026f6adb",null);a.options.__file="sider.vue";e.a=a.exports},195:function(t,e,n){"use strict";n(52),n(14),n(22);var i={name:"GuluLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach(function(e){"GuluSider"===e.$options.name&&(t.layoutClass.hasSider=!0)})}},s=(n(178),n(1)),a=Object(s.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)},[],!1,null,"4631fbb6",null);a.options.__file="layout.vue";e.a=a.exports},201:function(t,e,n){},226:function(t,e,n){"use strict";var i=n(201);n.n(i).a},258:function(t,e,n){"use strict";n.r(e);var i=n(195),s=n(194),a=n(193),u=n(192),o=n(191),r={components:{"g-layout":i.a,"g-header":a.a,"g-sider":s.a,"g-content":u.a,"g-footer":o.a}},l=(n(226),n(1)),c=Object(l.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"layout-box"},[e("g-layout",[e("g-header",[this._v("header")]),this._v(" "),e("g-layout",[e("g-sider",[this._v("sider")]),this._v(" "),e("g-content",[this._v("content")])],1),this._v(" "),e("g-footer",[this._v("footer")])],1)],1)},[],!1,null,null,null);c.options.__file="layout-demo3.vue";e.default=c.exports}}]);