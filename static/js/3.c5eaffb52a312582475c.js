webpackJsonp([3],{138:function(n,t,e){function a(n){e(225)}var i=e(53)(e(193),e(242),a,"data-v-29abff40",null);n.exports=i.exports},151:function(n,t,e){function a(n){e(155)}var i=e(53)(e(153),e(156),a,"data-v-21590172",null);n.exports=i.exports},152:function(n,t,e){"use strict";e.d(t,"n",function(){return i}),e.d(t,"a",function(){return A}),e.d(t,"m",function(){return o}),e.d(t,"l",function(){return r}),e.d(t,"k",function(){return d}),e.d(t,"h",function(){return s}),e.d(t,"b",function(){return l}),e.d(t,"e",function(){return p}),e.d(t,"f",function(){return c}),e.d(t,"g",function(){return u}),e.d(t,"c",function(){return f}),e.d(t,"i",function(){return b}),e.d(t,"d",function(){return C}),e.d(t,"j",function(){return g});var a=e(56),i=function(n){return a.a.fetchGet("/goods/computer",n)},A=function(n){return a.a.fetchPost("/users/cartList",n)},o=function(n){return a.a.fetchPost("/goods/addCart",n)},r=function(n){return a.a.fetchPost("/users/cartEdit",n)},d=function(n){return a.a.fetchPost("/users/editCheckAll",n)},s=function(n){return a.a.fetchPost("/users/cartDel",n)},l=function(n){return a.a.fetchPost("/users/addressList",n)},p=function(n){return a.a.fetchPost("/users/addressUpdate",n)},c=function(n){return a.a.fetchPost("/users/addressAdd",n)},u=function(n){return a.a.fetchPost("/users/addressDel",n)},f=function(n){return a.a.fetchPost("/users/payMent",n)},b=function(n){return a.a.fetchPost("/users/orderList",n)},C=function(n){return a.a.fetchGet("/goods/productDet",n)},g=function(n){return a.a.fetchPost("/users/delOrder",n)}},153:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{text:{type:[String,Number],default:"一颗小按钮"},inputType:{type:[String],default:"button"},classStyle:{type:String,default:"default-btn"}},methods:{btnClick:function(n){this.$emit("btnClick",n)}}}},154:function(n,t,e){t=n.exports=e(133)(!0),t.push([n.i,".default-btn[data-v-21590172],.disabled-btn[data-v-21590172],.main-btn[data-v-21590172]{width:100px;height:30px;line-height:28px;vertical-align:middle}input[data-v-21590172]{display:inline-block;cursor:pointer;text-align:center}.gray-btn[data-v-21590172]{border:1px solid #d5d5d5;color:#646464}.default-btn[data-v-21590172]{border:1px solid #e1e1e1;border-radius:4px;font-size:12px;color:#646464;background-color:#f9f9f9;background-image:linear-gradient(180deg,#fff,#f9f9f9)}.default-btn[data-v-21590172]:hover{background-color:#eee;background-image:linear-gradient(180deg,#f5f5f5,#eee)}.main-btn[data-v-21590172]{border:1px solid #5c81e3;border-radius:4px;font-size:12px;color:#fff;background-color:#678ee7;background-image:linear-gradient(180deg,#678ee7,#5078df)}.main-btn[data-v-21590172]:hover{background-color:#6c8cd4;background-image:linear-gradient(180deg,#6c8cd4,#4769c2)}.disabled-btn[data-v-21590172]{cursor:not-allowed;border:1px solid #afafaf;border-radius:4px;font-size:12px;color:#fff;background-color:#a9a9a9;background-image:linear-gradient(180deg,#b8b8b8,#a9a9a9)}","",{version:3,sources:["/home/travis/build/wangdabaoqq/node-chuizi/src/components/YButton.vue"],names:[],mappings:"AAEA,wFACE,YAAa,AACb,YAAa,AACb,iBAAkB,AAClB,qBAAuB,CACxB,AACD,uBACE,qBAAsB,AACtB,eAAgB,AAChB,iBAAmB,CAOpB,AAGD,2BACE,yBAA0B,AAC1B,aAAe,CAChB,AACD,8BACE,yBAA0B,AAC1B,kBAAmB,AACnB,eAAgB,AAChB,cAAe,AACf,yBAA0B,AAC1B,qDAAyD,CAC1D,AACD,oCACI,sBAAuB,AACvB,qDAAyD,CAC5D,AACD,2BACE,yBAA0B,AAC1B,kBAAmB,AACnB,eAAgB,AAChB,WAAY,AACZ,yBAA0B,AAC1B,wDAA4D,CAC7D,AACD,iCACI,yBAA0B,AAC1B,wDAA4D,CAC/D,AACD,+BACE,mBAAoB,AACpB,yBAA0B,AAC1B,kBAAmB,AACnB,eAAgB,AAChB,WAAY,AACZ,yBAA0B,AAC1B,wDAA4D,CAC7D",file:"YButton.vue",sourcesContent:['\n@charset "UTF-8";\n.default-btn[data-v-21590172], .main-btn[data-v-21590172], .disabled-btn[data-v-21590172] {\n  width: 100px;\n  height: 30px;\n  line-height: 28px;\n  vertical-align: middle;\n}\ninput[data-v-21590172] {\n  display: inline-block;\n  cursor: pointer;\n  text-align: center;\n  /*> span {*/\n  /*user-select: none;*/\n  /*display: inline-block;*/\n  /*width: 100%;*/\n  /*height: 100%;*/\n  /*}*/\n}\n\n/*灰色的按钮*/\n.gray-btn[data-v-21590172] {\n  border: 1px solid #d5d5d5;\n  color: #646464;\n}\n.default-btn[data-v-21590172] {\n  border: 1px solid #e1e1e1;\n  border-radius: 4px;\n  font-size: 12px;\n  color: #646464;\n  background-color: #f9f9f9;\n  background-image: linear-gradient(180deg, #fff, #f9f9f9);\n}\n.default-btn[data-v-21590172]:hover {\n    background-color: #eee;\n    background-image: linear-gradient(180deg, #f5f5f5, #eee);\n}\n.main-btn[data-v-21590172] {\n  border: 1px solid #5c81e3;\n  border-radius: 4px;\n  font-size: 12px;\n  color: #fff;\n  background-color: #678ee7;\n  background-image: linear-gradient(180deg, #678ee7, #5078df);\n}\n.main-btn[data-v-21590172]:hover {\n    background-color: #6c8cd4;\n    background-image: linear-gradient(180deg, #6c8cd4, #4769c2);\n}\n.disabled-btn[data-v-21590172] {\n  cursor: not-allowed;\n  border: 1px solid #afafaf;\n  border-radius: 4px;\n  font-size: 12px;\n  color: #fff;\n  background-color: #a9a9a9;\n  background-image: linear-gradient(180deg, #b8b8b8, #a9a9a9);\n}\n'],sourceRoot:""}])},155:function(n,t,e){var a=e(154);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(134)("5452697b",a,!0)},156:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement;return(n._self._c||t)("input",{class:n.classStyle,attrs:{type:n.inputType,readonly:"",disabled:"disabled-btn"===n.classStyle},domProps:{value:n.text},on:{click:function(t){n.btnClick(t)}}})},staticRenderFns:[]}},157:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:["title"]}},158:function(n,t,e){t=n.exports=e(133)(!0),t.push([n.i,".gray-box[data-v-8cee0bf4]{position:relative;margin-bottom:30px;overflow:hidden;background:#fff;border-radius:8px;border:1px solid #dcdcdc;border-color:rgba(0,0,0,.14);box-shadow:0 3px 8px -6px rgba(0,0,0,.1)}.gray-box .title[data-v-8cee0bf4]{padding-left:30px;position:relative;z-index:10;height:60px;padding:0 10px 0 24px;border-bottom:1px solid #d4d4d4;border-radius:8px 8px 0 0;box-shadow:0 1px 7px rgba(0,0,0,.06);background:#f3f3f3;background:linear-gradient(#fbfbfb,#ececec);line-height:60px;font-size:18px;color:#333;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.gray-box .title h2[data-v-8cee0bf4]{font-size:18px;font-weight:400;color:#626262;display:inline-block}","",{version:3,sources:["/home/travis/build/wangdabaoqq/node-chuizi/src/components/shelf.vue"],names:[],mappings:"AACA,2BACE,kBAAmB,AACnB,mBAAoB,AACpB,gBAAiB,AACjB,gBAAiB,AACjB,kBAAmB,AACnB,yBAA0B,AAC1B,6BAAkC,AAClC,wCAA8C,CAC/C,AACD,kCACI,kBAAmB,AACnB,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,sBAAuB,AACvB,gCAAiC,AACjC,0BAA2B,AAC3B,qCAA0C,AAC1C,mBAAoB,AACpB,4CAA8C,AAC9C,iBAAkB,AAClB,eAAgB,AAChB,WAAY,AACZ,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,8BAA+B,AACvC,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CAC/B,AACD,qCACM,eAAgB,AAChB,gBAAiB,AACjB,cAAe,AACf,oBAAsB,CAC3B",file:"shelf.vue",sourcesContent:["\n.gray-box[data-v-8cee0bf4] {\n  position: relative;\n  margin-bottom: 30px;\n  overflow: hidden;\n  background: #fff;\n  border-radius: 8px;\n  border: 1px solid #dcdcdc;\n  border-color: rgba(0, 0, 0, 0.14);\n  box-shadow: 0 3px 8px -6px rgba(0, 0, 0, 0.1);\n}\n.gray-box .title[data-v-8cee0bf4] {\n    padding-left: 30px;\n    position: relative;\n    z-index: 10;\n    height: 60px;\n    padding: 0 10px 0 24px;\n    border-bottom: 1px solid #d4d4d4;\n    border-radius: 8px 8px 0 0;\n    box-shadow: rgba(0, 0, 0, 0.06) 0 1px 7px;\n    background: #f3f3f3;\n    background: linear-gradient(#fbfbfb, #ececec);\n    line-height: 60px;\n    font-size: 18px;\n    color: #333;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n.gray-box .title h2[data-v-8cee0bf4] {\n      font-size: 18px;\n      font-weight: 400;\n      color: #626262;\n      display: inline-block;\n}\n"],sourceRoot:""}])},159:function(n,t,e){var a=e(158);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(134)("8b4be1b0",a,!0)},160:function(n,t,e){function a(n){e(159)}var i=e(53)(e(157),e(161),a,"data-v-8cee0bf4",null);n.exports=i.exports},161:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"gray-box"},[e("div",{staticClass:"title"},[e("h2",[n._v(n._s(n.title))]),n._v(" "),e("div",[n._t("right")],2)]),n._v(" "),e("div",[n._t("content")],2)])},staticRenderFns:[]}},171:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{num:{type:[Number],default:1},id:{type:[Number,String]},checked:{type:[String,Boolean]},limit:{type:Number,default:10}},computed:{},data:function(){return{show:!0,flag:!0,Num:this.num,numList:[]}},methods:{up:function(){return this.flag&&this.Num<this.limit&&this.ani("up"),!1},down:function(){return this.flag&&this.Num>1&&this.ani("down"),!1},blur:function(){this.Num=this.Num>this.limit?Number(this.limit):Number(this.Num),this.$emit("edit-num",this.Num,this.id,this.checked)},ani:function(n){var t=this;this.flag=!1;var e=this.Num;this.numList=[e-1,e,e+1];var a=this.$refs.ul,i=a.style;this.show=!1,i.zIndex="99",i.transition="all .2s ease-out","up"===n?(this.Num++,i.transform="translateY(-54px)"):(this.Num--,i.transform="translateY(-18px)"),a.addEventListener("transitionend",function(){t.show=!0,t.domInt(i),t.flag=!0}),a.addEventListener("webkitAnimationEnd",function(){t.show=!0,t.domInt(i),t.flag=!0}),this.$emit("edit-num",this.Num,this.id,this.checked)},domInt:function(n){n.zIndex="1",n.transition="all 0s",n.transform="translateY(-36px)"}}}},175:function(n,t,e){t=n.exports=e(133)(!0),t.push([n.i,".select input[data-v-6a832414]{z-index:10;width:36px;height:18px;background-color:#fff;line-height:18px;font-size:14px;padding:0;color:#666;visibility:hidden;position:relative;border:none}.select input.show[data-v-6a832414]{visibility:visible}.select ul[data-v-6a832414]{padding:0;line-height:18px;font-size:14px;display:inline-block;position:absolute;left:0;list-style:none;width:36px;font-family:system-ui;z-index:1;-webkit-transform:translateY(-36px);transform:translateY(-36px)}.select .up.up-disabled[data-v-6a832414],.select .up.up-disabled[data-v-6a832414]:hover{background-position:0 -240px!important;cursor:not-allowed!important}.item-cols-num[data-v-6a832414]{display:inline-block}.select[data-v-6a832414]{height:40px;padding-top:4px}.select input[data-v-6a832414]{width:100%;text-align:center}.select .down.down-disabled[data-v-6a832414]:hover{background-position:0 -300px;cursor:not-allowed}.select .down[data-v-6a832414],.select .up[data-v-6a832414]{background:url("+e(180)+") no-repeat;overflow:hidden;float:left;width:34px;height:37px;background-size:100% auto;line-height:40px;text-indent:-9999em;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.select .num[data-v-6a832414]{position:relative;overflow:hidden;float:left;width:36px;height:18px;margin:7px 0 0;border:none;border-radius:3px;line-height:18px;text-align:center;font-size:14px}.select .up[data-v-6a832414]{margin:0;background-position:0 0}.select .up[data-v-6a832414]:hover{background-position:0 -120px}.select .down[data-v-6a832414]{background-position:0 -60px}.select .down[data-v-6a832414]:hover{background-position:0 -180px}.down.down-disabled[data-v-6a832414]{background-position:0 -300px;cursor:not-allowed}","",{version:3,sources:["/home/travis/build/wangdabaoqq/node-chuizi/src/components/buynum.vue"],names:[],mappings:"AAEA,+BACE,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,sBAAuB,AAGvB,iBAAkB,AAClB,eAAgB,AAChB,UAAW,AACX,WAAY,AACZ,kBAAmB,AACnB,kBAAmB,AACnB,WAAa,CACd,AACD,oCACI,kBAAoB,CACvB,AACD,4BACE,UAAW,AACX,iBAAkB,AAClB,eAAgB,AAChB,qBAAsB,AACtB,kBAAmB,AACnB,OAAQ,AACR,gBAAiB,AACjB,WAAY,AACZ,sBAAuB,AACvB,UAAW,AACX,oCAAqC,AAC7B,2BAA6B,CACtC,AACD,wFACE,uCAAyC,AACzC,4BAA+B,CAChC,AAGD,gCACE,oBAAsB,CACvB,AACD,yBACE,YAAa,AACb,eAAiB,CAClB,AACD,+BACI,WAAY,AACZ,iBAAmB,CACtB,AAID,mDACI,6BAA8B,AAC9B,kBAAoB,CACvB,AACD,4DACI,mDAA6E,AAC7E,gBAAiB,AACjB,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,0BAA2B,AAC3B,iBAAkB,AAClB,oBAAqB,AACrB,eAAgB,AAChB,yBAA0B,AACvB,sBAAuB,AACtB,qBAAsB,AAClB,gBAAkB,CAC7B,AACD,8BACI,kBAAmB,AACnB,gBAAiB,AAEjB,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,eAAgB,AAChB,YAAa,AACb,kBAAmB,AACnB,iBAAkB,AAClB,kBAAmB,AACnB,cAAgB,CACnB,AACD,6BACI,SAAU,AACV,uBAAyB,CAC5B,AACD,mCACM,4BAA8B,CACnC,AACD,+BACI,2BAA6B,CAChC,AACD,qCACM,4BAA8B,CACnC,AACD,qCACE,6BAA8B,AAC9B,kBAAoB,CACrB",file:"buynum.vue",sourcesContent:['\n@charset "UTF-8";\n.select input[data-v-6a832414] {\n  z-index: 10;\n  width: 36px;\n  height: 18px;\n  background-color: #fff;\n  border: none;\n  text-align: center;\n  line-height: 18px;\n  font-size: 14px;\n  padding: 0;\n  color: #666;\n  visibility: hidden;\n  position: relative;\n  border: none;\n}\n.select input.show[data-v-6a832414] {\n    visibility: visible;\n}\n.select ul[data-v-6a832414] {\n  padding: 0;\n  line-height: 18px;\n  font-size: 14px;\n  display: inline-block;\n  position: absolute;\n  left: 0;\n  list-style: none;\n  width: 36px;\n  font-family: system-ui;\n  z-index: 1;\n  -webkit-transform: translateY(-36px);\n          transform: translateY(-36px);\n}\n.select .up.up-disabled[data-v-6a832414], .select .up.up-disabled[data-v-6a832414]:hover {\n  background-position: 0 -240px !important;\n  cursor: not-allowed !important;\n}\n\n/*数量*/\n.item-cols-num[data-v-6a832414] {\n  display: inline-block;\n}\n.select[data-v-6a832414] {\n  height: 40px;\n  padding-top: 4px;\n}\n.select input[data-v-6a832414] {\n    width: 100%;\n    text-align: center;\n}\n.select .down[data-v-6a832414] {\n    background-position: 0 -60px;\n}\n.select .down.down-disabled[data-v-6a832414]:hover {\n    background-position: 0 -300px;\n    cursor: not-allowed;\n}\n.select .down[data-v-6a832414], .select .up[data-v-6a832414] {\n    background: url(../../static/images/cart-updown_8303731e15@2x.jpg) no-repeat;\n    overflow: hidden;\n    float: left;\n    width: 34px;\n    height: 37px;\n    background-size: 100% auto;\n    line-height: 40px;\n    text-indent: -9999em;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n.select .num[data-v-6a832414] {\n    position: relative;\n    overflow: hidden;\n    text-align: center;\n    float: left;\n    width: 36px;\n    height: 18px;\n    margin: 7px 0 0;\n    border: none;\n    border-radius: 3px;\n    line-height: 18px;\n    text-align: center;\n    font-size: 14px;\n}\n.select .up[data-v-6a832414] {\n    margin: 0;\n    background-position: 0 0;\n}\n.select .up[data-v-6a832414]:hover {\n      background-position: 0 -120px;\n}\n.select .down[data-v-6a832414] {\n    background-position: 0 -60px;\n}\n.select .down[data-v-6a832414]:hover {\n      background-position: 0 -180px;\n}\n.down.down-disabled[data-v-6a832414] {\n  background-position: 0 -300px;\n  cursor: not-allowed;\n}\n'],sourceRoot:""}])},178:function(n,t,e){var a=e(175);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(134)("37659d82",a,!0)},180:function(n,t,e){n.exports=e.p+"static/img/cart-updown_8303731e15@2x.7d9dac6.jpg"},181:function(n,t,e){function a(n){e(178)}var i=e(53)(e(171),e(185),a,"data-v-6a832414",null);n.exports=i.exports},185:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"item-cols-num clearfix"},[e("div",{staticClass:"select"},[e("span",{staticClass:"down",class:{"down-disabled":n.Num<=1},on:{click:function(t){t.stopPropagation(),t.preventDefault(),n.down()}}},[n._v("-\n    ")]),n._v(" "),e("span",{staticClass:"num"},[e("input",{directives:[{name:"model",rawName:"v-model",value:n.Num>=n.limit?n.limit:n.Num,expression:"Num>=limit?limit:Num"}],class:{show:n.show},attrs:{type:"text",maxlength:"2"},domProps:{value:n.Num>=n.limit?n.limit:n.Num},on:{blur:function(t){n.blur()},input:function(t){t.target.composing||(n.Num>=n.limit?n.limit:n.Num=t.target.value)}}}),n._v(" "),e("ul",{ref:"ul"},n._l(n.numList,function(t){return e("li",[n._v(n._s(t))])}))]),n._v(" "),e("span",{staticClass:"up",class:{"up-disabled":n.Num>=n.limit},on:{click:function(t){t.stopPropagation(),t.preventDefault(),n.up()}}},[n._v("+")])])])},staticRenderFns:[]}},193:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=e(54),i=e.n(a),A=e(152),o=e(55),r=e(160),d=e.n(r),s=e(181),l=e.n(s),p=e(151),c=e.n(p);t.default={data:function(){return{productMsg:{},small:[],big:"",product:{},productNum:1}},computed:i()({},e.i(o.b)(["login","showMoveImg","showCart"])),methods:i()({},e.i(o.c)(["ADD_CART","ADD_ANIMATION","SHOW_CART"]),{_productDet:function(n){var t=this;e.i(A.d)({params:{productId:n}}).then(function(n){var e=n.result;t.product=e,t.productMsg=e.productMsg||"",t.small=e.productImageSmall,t.big=t.small[0]})},addCart:function(n,t,a,i){var o=this;if(!this.showMoveImg){this.login?e.i(A.m)({productId:n,productNum:this.productNum}).then(function(e){o.ADD_CART({productId:n,productPrice:t,productName:a,productImg:i,productNum:o.productNum})}):this.ADD_CART({productId:n,productPrice:t,productName:a,productImg:i,productNum:this.productNum});var r=event.target,d=r.getBoundingClientRect().left+r.offsetWidth/2,s=r.getBoundingClientRect().top+r.offsetHeight/2;this.ADD_ANIMATION({moveShow:!0,elLeft:d,elTop:s,img:i}),this.showCart||this.SHOW_CART({showCart:!0})}},checkout:function(n){this.$router.push({path:"/checkout",query:{productId:n,num:this.productNum}})},editNum:function(n){this.productNum=n}}),components:{YShelf:d.a,BuyNum:l.a,YButton:c.a},created:function(){var n=this.$route.query.productId;this._productDet(n)}}},212:function(n,t,e){t=n.exports=e(133)(!0),t.push([n.i,".store-content[data-v-29abff40]{clear:both;width:1220px;min-height:600px;padding:0 0 25px;margin:0 auto}.gray-box[data-v-29abff40]{display:-webkit-box;display:-ms-flexbox;display:flex;padding:60px;margin:20px 0}.gray-box .gallery-wrapper .gallery[data-v-29abff40]{display:-webkit-box;display:-ms-flexbox;display:flex;width:540px}.gray-box .gallery-wrapper .gallery .thumbnail li[data-v-29abff40]:first-child{margin-top:0}.gray-box .gallery-wrapper .gallery .thumbnail li[data-v-29abff40]{width:80px;height:80px;margin-top:10px;padding:12px;border:1px solid #f0f0f0;border:1px solid rgba(0,0,0,.06);border-radius:5px;cursor:pointer}.gray-box .gallery-wrapper .gallery .thumbnail li.on[data-v-29abff40]{padding:10px;border:3px solid #ccc;border:3px solid rgba(0,0,0,.2)}.gray-box .gallery-wrapper .gallery .thumbnail li img[data-v-29abff40]{display:block;width:100%;height:100%}.gray-box .gallery-wrapper .gallery .thumb .big[data-v-29abff40]{margin-left:20px}.gray-box .gallery-wrapper .gallery .thumb img[data-v-29abff40]{display:block;width:440px;height:440px}.gray-box .banner[data-v-29abff40]{width:450px;margin-left:10px}.gray-box .banner h4[data-v-29abff40]{font-size:24px;line-height:1.25;color:#000;margin-bottom:13px}.gray-box .banner h6[data-v-29abff40]{font-size:14px;line-height:1.5;color:#bdbdbd;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.gray-box .banner .sku-custom-title[data-v-29abff40]{overflow:hidden;padding:8px 8px 18px 10px;position:relative}.gray-box .banner .params-name[data-v-29abff40]{padding-right:20px;font-size:14px;color:#8d8d8d;line-height:36px}.gray-box .banner .num[data-v-29abff40]{padding:29px 0 8px 10px;border-top:1px solid #ebebeb;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.gray-box .banner .buy[data-v-29abff40]{position:relative;border-top:1px solid #ebebeb;padding:30px 0 0 10px}.item-info .gray-box[data-v-29abff40]{padding:0;display:block}.item-info .img-item[data-v-29abff40]{width:1220px}.item-info .img-item img[data-v-29abff40]{width:100%;height:auto;display:block}.no-info[data-v-29abff40]{padding:200px 0;text-align:center;font-size:30px}.price[data-v-29abff40]{display:block;color:#d44d44;font-weight:700;font-size:16px;line-height:20px;text-align:right}.price i[data-v-29abff40]{padding-left:2px;font-size:24px}","",{version:3,sources:["/home/travis/build/wangdabaoqq/node-chuizi/src/page/Goods/goodsDetails.vue"],names:[],mappings:"AACA,gCACE,WAAY,AACZ,aAAc,AACd,iBAAkB,AAClB,iBAAkB,AAClB,aAAe,CAChB,AACD,2BACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,aAAc,AACd,aAAe,CAChB,AACD,qDACI,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,WAAa,CAChB,AACD,+EACM,YAAgB,CACrB,AACD,mEACM,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,aAAc,AACd,yBAA0B,AAC1B,iCAAsC,AACtC,kBAAmB,AACnB,cAAgB,CACrB,AACD,sEACQ,aAAc,AACd,sBAAuB,AACvB,+BAAqC,CAC5C,AACD,uEACQ,cAAe,AACf,WAAY,AACZ,WAAa,CACpB,AACD,iEACM,gBAAkB,CACvB,AACD,gEACM,cAAe,AACf,YAAa,AACb,YAAc,CACnB,AACD,mCACI,YAAa,AACb,gBAAkB,CACrB,AACD,sCACM,eAAgB,AAChB,iBAAkB,AAClB,WAAY,AACZ,kBAAoB,CACzB,AACD,sCACM,eAAgB,AAChB,gBAAiB,AACjB,cAAe,AACf,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,yBAA0B,AACtB,sBAAuB,AACnB,6BAA+B,CAC5C,AACD,qDACM,gBAAiB,AACjB,0BAA2B,AAC3B,iBAAmB,CACxB,AACD,gDACM,mBAAoB,AACpB,eAAgB,AAChB,cAAe,AACf,gBAAkB,CACvB,AACD,wCACM,wBAAyB,AACzB,6BAA8B,AAC9B,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,kBAAoB,CACjC,AACD,wCACM,kBAAmB,AACnB,6BAA8B,AAC9B,qBAAuB,CAC5B,AACD,sCACE,UAAW,AACX,aAAe,CAChB,AACD,sCACE,YAAc,CACf,AACD,0CACI,WAAY,AACZ,YAAa,AACb,aAAe,CAClB,AACD,0BACE,gBAAiB,AACjB,kBAAmB,AACnB,cAAgB,CACjB,AACD,wBACE,cAAe,AACf,cAAe,AACf,gBAAiB,AACjB,eAAgB,AAChB,iBAAkB,AAClB,gBAAkB,CACnB,AACD,0BACI,iBAAkB,AAClB,cAAgB,CACnB",file:"goodsDetails.vue",sourcesContent:["\n.store-content[data-v-29abff40] {\n  clear: both;\n  width: 1220px;\n  min-height: 600px;\n  padding: 0 0 25px;\n  margin: 0 auto;\n}\n.gray-box[data-v-29abff40] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 60px;\n  margin: 20px 0;\n}\n.gray-box .gallery-wrapper .gallery[data-v-29abff40] {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 540px;\n}\n.gray-box .gallery-wrapper .gallery .thumbnail li[data-v-29abff40]:first-child {\n      margin-top: 0px;\n}\n.gray-box .gallery-wrapper .gallery .thumbnail li[data-v-29abff40] {\n      width: 80px;\n      height: 80px;\n      margin-top: 10px;\n      padding: 12px;\n      border: 1px solid #f0f0f0;\n      border: 1px solid rgba(0, 0, 0, 0.06);\n      border-radius: 5px;\n      cursor: pointer;\n}\n.gray-box .gallery-wrapper .gallery .thumbnail li.on[data-v-29abff40] {\n        padding: 10px;\n        border: 3px solid #ccc;\n        border: 3px solid rgba(0, 0, 0, 0.2);\n}\n.gray-box .gallery-wrapper .gallery .thumbnail li img[data-v-29abff40] {\n        display: block;\n        width: 100%;\n        height: 100%;\n}\n.gray-box .gallery-wrapper .gallery .thumb .big[data-v-29abff40] {\n      margin-left: 20px;\n}\n.gray-box .gallery-wrapper .gallery .thumb img[data-v-29abff40] {\n      display: block;\n      width: 440px;\n      height: 440px;\n}\n.gray-box .banner[data-v-29abff40] {\n    width: 450px;\n    margin-left: 10px;\n}\n.gray-box .banner h4[data-v-29abff40] {\n      font-size: 24px;\n      line-height: 1.25;\n      color: #000;\n      margin-bottom: 13px;\n}\n.gray-box .banner h6[data-v-29abff40] {\n      font-size: 14px;\n      line-height: 1.5;\n      color: #bdbdbd;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n}\n.gray-box .banner .sku-custom-title[data-v-29abff40] {\n      overflow: hidden;\n      padding: 8px 8px 18px 10px;\n      position: relative;\n}\n.gray-box .banner .params-name[data-v-29abff40] {\n      padding-right: 20px;\n      font-size: 14px;\n      color: #8d8d8d;\n      line-height: 36px;\n}\n.gray-box .banner .num[data-v-29abff40] {\n      padding: 29px 0 8px 10px;\n      border-top: 1px solid #ebebeb;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n}\n.gray-box .banner .buy[data-v-29abff40] {\n      position: relative;\n      border-top: 1px solid #ebebeb;\n      padding: 30px 0 0 10px;\n}\n.item-info .gray-box[data-v-29abff40] {\n  padding: 0;\n  display: block;\n}\n.item-info .img-item[data-v-29abff40] {\n  width: 1220px;\n}\n.item-info .img-item img[data-v-29abff40] {\n    width: 100%;\n    height: auto;\n    display: block;\n}\n.no-info[data-v-29abff40] {\n  padding: 200px 0;\n  text-align: center;\n  font-size: 30px;\n}\n.price[data-v-29abff40] {\n  display: block;\n  color: #d44d44;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n  text-align: right;\n}\n.price i[data-v-29abff40] {\n    padding-left: 2px;\n    font-size: 24px;\n}\n"],sourceRoot:""}])},225:function(n,t,e){var a=e(212);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);e(134)("125be189",a,!0)},242:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"w store-content"},[e("div",{staticClass:"gray-box"},[e("div",{staticClass:"gallery-wrapper"},[e("div",{staticClass:"gallery"},[e("div",{staticClass:"thumbnail"},[e("ul",n._l(n.small,function(t){return e("li",{class:{on:n.big===t},on:{click:function(e){n.big=t}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t,expression:"item"}],attrs:{alt:n.product.productName}})])}))]),n._v(" "),e("div",{staticClass:"thumb"},[e("div",{staticClass:"big"},[e("img",{attrs:{src:n.big,alt:n.product.productName}})])])])]),n._v(" "),e("div",{staticClass:"banner"},[e("div",{staticClass:"sku-custom-title"},[e("h4",[n._v(n._s(n.product.productName))]),n._v(" "),e("h6",[e("span",[n._v(n._s(n.product.sub_title))]),n._v(" "),e("span",{staticClass:"price"},[e("em",[n._v("¥")]),e("i",[n._v(n._s(n.product.salePrice))])])])]),n._v(" "),e("div",{staticClass:"num"},[e("span",{staticClass:"params-name"},[n._v("数量")]),n._v(" "),e("buy-num",{attrs:{limit:Number(n.product.limit_num)},on:{"edit-num":n.editNum}})],1),n._v(" "),e("div",{staticClass:"buy"},[e("y-button",{staticStyle:{width:"145px",height:"50px","line-height":"48px"},attrs:{text:"加入购物车",classStyle:"main-btn"},on:{btnClick:function(t){n.addCart(n.product.productId,n.product.salePrice,n.product.productName,n.product.productImageBig)}}}),n._v(" "),e("y-button",{staticStyle:{width:"145px",height:"50px","line-height":"48px"},attrs:{text:"现在购买"},on:{btnClick:function(t){n.checkout(n.product.productId)}}})],1)])]),n._v(" "),e("div",{staticClass:"item-info"},[e("y-shelf",{attrs:{title:"产品信息"}},[e("div",{slot:"content"},[n.productMsg?e("div",{staticClass:"img-item"},n._l(n.productMsg.pieces_num,function(t){return e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.productMsg.url+"?x-oss-process=image/resize,w_2440/indexcrop,y_1440,i_"+(t-1)+"/quality,Q_100/format,webp",expression:"`${productMsg.url}?x-oss-process=image/resize,w_2440/indexcrop,y_1440,i_${item-1}/quality,Q_100/format,webp`"}],attrs:{alt:""}})})):e("div",{staticClass:"no-info"},[n._v("\n          该产品暂无内容\n        ")])])])],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=3.c5eaffb52a312582475c.js.map