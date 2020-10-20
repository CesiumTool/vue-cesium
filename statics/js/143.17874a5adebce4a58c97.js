(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{"5aI2":function(s,a,t){"use strict";t.r(a);var r=t("JFUb"),e=Object(r.a)({data:function(){return{position:{lng:117.217124,lat:31.809777}}},methods:{ready:function(s){this.cesiumInstance=s},subReady:function(){var s=this.cesiumInstance,a=s.Cesium,t=s.viewer;t.scene.globe.depthTestAgainstTerrain=!0,t.camera.flyTo({destination:a.Cartesian3.fromDegrees(117.217124,31.809777,3500),orientation:{heading:a.Math.toRadians(0),pitch:a.Math.toRadians(-90),roll:0},duration:3})}}},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("section",[t("h1",[s._v("雷达扫描")]),s._v(" "),s._m(0),s._v(" "),t("h2",[s._v("示例")]),s._v(" "),t("h3",[s._v("加载雷达扫描")]),s._v(" "),t("h4",[s._v("预览")]),s._v(" "),t("doc-preview",[[t("div",{staticClass:"viewer"},[t("vc-viewer",{on:{ready:s.ready}},[t("vc-scan-radar",{attrs:{radius:1500,interval:3e3,color:[0,1,0,1],position:s.position},on:{ready:s.subReady}}),s._v(" "),t("vc-layer-imagery",[t("vc-provider-imagery-tianditu",{attrs:{mapStyle:"img_c",token:"436ce7e50d27eede2f2929307e6b33c0"}})],1)],1)],1)]],2),s._v(" "),t("h4",[s._v("代码")]),s._v(" "),s._m(1),s._v(" "),t("h2",[s._v("属性")]),s._v(" "),s._m(2),s._v(" "),t("hr"),s._v(" "),t("h2",[s._v("事件")]),s._v(" "),s._m(3)],1)}),[function(){var s=this.$createElement,a=this._self._c||s;return a("p",[a("code",{pre:!0},[this._v("vc-scan-radar")]),this._v(" 组件用于加载雷达扫描后期处理特效。参考 "),a("a",{attrs:{href:"https://www.wellyyss.cn/ysCesium/main/app.html"}},[this._v("ysCesium|跃焱邵隼")]),this._v(" 。")])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("pre",{pre:!0},[t("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("class")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"viewer"')]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"ready"')]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-scan-circle")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@ready")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"subReady"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":radius")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"1500"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":interval")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"3000"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":color")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"[0,1.0,0,1]"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":position")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"position"')]),s._v("\n      >")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-scan-circle")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("mapStyle")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"img_c"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("token")]),s._v("="),t("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"436ce7e50d27eede2f2929307e6b33c0"')]),s._v(">")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-provider-imagery-tianditu")]),s._v(">")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-layer-imagery")]),s._v(">")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("vc-viewer")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("div")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("position")]),s._v(": { "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lng")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("117.217124")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("lat")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.809777")]),s._v(" }\n      }\n    },\n    "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      ready(cesiumInstance) {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance = cesiumInstance\n      },\n      subReady() {\n        "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" { Cesium, viewer } = "),t("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("this")]),s._v(".cesiumInstance\n        viewer.scene.globe.depthTestAgainstTerrain = "),t("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("true")]),s._v("\n        viewer.camera.flyTo({\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("destination")]),s._v(": Cesium.Cartesian3.fromDegrees("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("117.217124")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("31.809777")]),s._v(", "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3500.0")]),s._v("),\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("orientation")]),s._v(": {\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("heading")]),s._v(": Cesium.Math.toRadians("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0")]),s._v("), "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// east, default value is 0.0 (north) //东西南北朝向")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("pitch")]),s._v(": Cesium.Math.toRadians("),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("-90")]),s._v("), "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// default value (looking down)  //俯视仰视视觉")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("roll")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("0.0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// default value")]),s._v("\n          },\n          "),t("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("duration")]),s._v(": "),t("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("//3秒到达战场")]),s._v("\n        })\n      }\n    }\n  }\n")]),t("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),t("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("属性名")]),s._v(" "),t("th",[s._v("类型")]),s._v(" "),t("th",[s._v("默认值")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("position")]),s._v(" "),t("td",[s._v("Object")]),s._v(" "),t("td"),s._v(" "),t("td",[t("code",{pre:!0},[s._v("required")]),s._v(" 指定雷达扫描添加的位置。结构：{ lng: number, lat: number, height: number } 或者 Cesium.Cartesian3")])]),s._v(" "),t("tr",[t("td",[s._v("color")]),s._v(" "),t("td",[s._v("Object|String|Array")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("'white'")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定雷达扫描颜色。")])]),s._v(" "),t("tr",[t("td",[s._v("radius")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("1500")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定雷达扫描半径。单位米。")])]),s._v(" "),t("tr",[t("td",[s._v("interval")]),s._v(" "),t("td",[s._v("Number")]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("3000")])]),s._v(" "),t("td",[t("code",{pre:!0},[s._v("optional")]),s._v(" 指定雷达扫描完成一个周期重复频率，单位毫秒。")])])])])},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("table",[t("thead",[t("tr",[t("th",[s._v("事件名")]),s._v(" "),t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("描述")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("ready")]),s._v(" "),t("td",[s._v("{Cesium, viewer, cesiumObject}")]),s._v(" "),t("td",[s._v("该组件渲染完毕时触发，返回 Cesium 类, viewer 实例, 以及 PostProcessStage 实例。")])])])])}],!1,null,null,null);a.default=e.exports},I4IR:function(s,a,t){s.exports=t("5aI2")}}]);
//# sourceMappingURL=143.17874a5adebce4a58c97.js.map