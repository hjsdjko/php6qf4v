(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/gouwuzixun/add-or-update"],{"0aad":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(t("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function u(n,e,t,i,r,u,a){try{var o=n[u](a),c=o.value}catch(f){return void t(f)}o.done?e(c):Promise.resolve(c).then(i,r)}function a(n){return function(){var e=this,t=arguments;return new Promise((function(i,r){var a=n.apply(e,t);function o(n){u(a,i,r,o,c,"next",n)}function c(n){u(a,i,r,o,c,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("c1f9"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{zixunmingcheng:"",zixunleixing:"",laiyuan:"",zixunneirong:"",faburiqi:"",fengmiantupian:""},zixunleixingOptions:[],zixunleixingIndex:0,user:{},ro:{zixunmingcheng:!1,zixunleixing:!1,laiyuan:!1,zixunneirong:!1,faburiqi:!1,fengmiantupian:!1}}},components:{wPicker:o},computed:{},onLoad:function(e){var t=this;return a(i.default.mark((function r(){var u,a,o,c;return i.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.ruleForm.faburiqi=t.$utils.getCurDate(),u=n.getStorageSync("nowTable"),r.next=4,t.$api.session(u);case 4:return a=r.sent,t.user=a.data,r.next=8,t.$api.option("zixunfenlei","leixing",{});case 8:if(a=r.sent,t.zixunleixingOptions=a.data,t.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(t.ruleForm.refid=e.refid,t.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){r.next=18;break}return t.ruleForm.id=e.id,r.next=16,t.$api.info("gouwuzixun",t.ruleForm.id);case 16:a=r.sent,t.ruleForm=a.data;case 18:if(!e.cross){r.next=49;break}o=n.getStorageSync("crossObj"),r.t0=i.default.keys(o);case 21:if((r.t1=r.t0()).done){r.next=49;break}if(c=r.t1.value,"zixunmingcheng"!=c){r.next=27;break}return t.ruleForm.zixunmingcheng=o[c],t.ro.zixunmingcheng=!0,r.abrupt("continue",21);case 27:if("zixunleixing"!=c){r.next=31;break}return t.ruleForm.zixunleixing=o[c],t.ro.zixunleixing=!0,r.abrupt("continue",21);case 31:if("laiyuan"!=c){r.next=35;break}return t.ruleForm.laiyuan=o[c],t.ro.laiyuan=!0,r.abrupt("continue",21);case 35:if("zixunneirong"!=c){r.next=39;break}return t.ruleForm.zixunneirong=o[c],t.ro.zixunneirong=!0,r.abrupt("continue",21);case 39:if("faburiqi"!=c){r.next=43;break}return t.ruleForm.faburiqi=o[c],t.ro.faburiqi=!0,r.abrupt("continue",21);case 43:if("fengmiantupian"!=c){r.next=47;break}return t.ruleForm.fengmiantupian=o[c],t.ro.fengmiantupian=!0,r.abrupt("continue",21);case 47:r.next=21;break;case 49:t.styleChange();case 50:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},faburiqiChange:function(n){this.ruleForm.faburiqi=n.target.value,this.$forceUpdate()},zixunleixingChange:function(n){this.zixunleixingIndex=n.target.value,this.ruleForm.zixunleixing=this.zixunleixingOptions[this.zixunleixingIndex]},fengmiantupianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.fengmiantupian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return a(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.ruleForm.id){e.next=5;break}return e.next=3,n.$api.update("gouwuzixun",n.ruleForm);case 3:e.next=7;break;case 5:return e.next=7,n.$api.add("gouwuzixun",n.ruleForm);case 7:n.$utils.msgBack("提交成功");case 8:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,r=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};e.default=c}).call(this,t("543d")["default"])},3814:function(n,e,t){"use strict";(function(n){t("582f");i(t("66fd"));var e=i(t("6197"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"3b2c":function(n,e,t){"use strict";var i;t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return i}));var r=function(){var n=this,e=n.$createElement;n._self._c},u=[]},"60d8":function(n,e,t){"use strict";t.r(e);var i=t("0aad"),r=t.n(i);for(var u in i)"default"!==u&&function(n){t.d(e,n,(function(){return i[n]}))}(u);e["default"]=r.a},6197:function(n,e,t){"use strict";t.r(e);var i=t("3b2c"),r=t("60d8");for(var u in r)"default"!==u&&function(n){t.d(e,n,(function(){return r[n]}))}(u);t("91bd");var a,o=t("f0c5"),c=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"3b71f37e",null,!1,i["a"],a);e["default"]=c.exports},"91bd":function(n,e,t){"use strict";var i=t("ba3c"),r=t.n(i);r.a},ba3c:function(n,e,t){}},[["3814","common/runtime","common/vendor"]]]);