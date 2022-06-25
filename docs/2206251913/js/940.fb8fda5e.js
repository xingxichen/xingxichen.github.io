"use strict";(self["webpackChunkmy_vue"]=self["webpackChunkmy_vue"]||[]).push([[940],{59940:function(t,e,s){s.r(e),s.d(e,{default:function(){return y}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.inited,expression:"inited"}]},[s("a-row",[s("a-space",t._l(this.$router.getRoutes(),(function(e){return e.path?s("a-col",{attrs:{span:t.span}},[s("a-button",{attrs:{type:"primary"},on:{click:function(s){return t.toPage(e.path)}}},[t._v(t._s(e.meta.title))])],1):t._e()})),1)],1),s("a-divider",{style:{color:"#1989fa",borderColor:"#1989fa",padding:"0"}},[t._v(" 分割线 ")])],1),s("battery-query",{on:{inited:t.initedFunc}})],1)},r=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content0"},[s("a-space",{attrs:{direction:"vertical"}},[s("a-row",[s("a-col",{attrs:{span:8}},[t._v(" 服务端地址: ")]),s("a-col",{attrs:{span:16}},[s("a-input",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入服务端地址",type:"text","allow-clear":""},model:{value:t.serverUrl,callback:function(e){t.serverUrl=e},expression:"serverUrl"}})],1)],1),s("a-row",[s("a-col",{attrs:{span:8}},[t._v(" 密钥: ")]),s("a-col",{attrs:{span:16}},[s("a-input-password",{staticStyle:{width:"250px"},attrs:{placeholder:"请输入密钥","allow-clear":""},model:{value:t.secret,callback:function(e){t.secret=e},expression:"secret"}})],1)],1),s("a-row",[s("a-col",{attrs:{span:"24"}},[s("a-button",{attrs:{type:"primary"},on:{click:t.send,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.send.apply(null,arguments)}}},[t._v("测试连接")])],1)],1)],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.success,expression:"success"}],staticClass:"descriptions"},[s("a-result",{attrs:{status:"success",title:"连接成功","sub-title":"服务端连接成功,可以开始远程控制了!"}}),s("a-descriptions",{attrs:{title:"设备信息",bordered:""}},[s("a-descriptions-item",{attrs:{label:"剩余电量"}},[t._v(" "+t._s(t.data.level)+" ")]),s("a-descriptions-item",{attrs:{label:"充满电量"}},[t._v(" "+t._s(t.data.scale)+" ")]),s("a-descriptions-item",{attrs:{label:"当前电压"}},[t._v(" "+t._s(t.data.voltage)+" ")]),s("a-descriptions-item",{attrs:{label:"当前温度"}},[t._v(" "+t._s(t.data.temperature)+" ")]),s("a-descriptions-item",{attrs:{label:"电池状态"}},[t._v(" "+t._s(t.data.status)+" ")]),s("a-descriptions-item",{attrs:{label:"健康度"}},[t._v(" "+t._s(t.data.health)+" ")]),s("a-descriptions-item",{attrs:{label:"充电器"}},[t._v(" "+t._s(t.data.plugged)+" ")])],1)],1)],1)},n=[],c=s(55107),l=s(28935),o={data(){return{secret:c.Z.secret(),serverUrl:c.Z.serverUrl(),success:"",data:{level:"",scale:"",voltage:"",temperature:"",status:"",health:"",plugged:""}}},created:function(){},methods:{send(){let t=(new Date).getTime();this.$axios({method:"post",url:this.serverUrl+"/battery/query",data:{data:{},timestamp:t,sign:c.Z.sisgn(t,this.secret)}}).then((t=>{200==t.data.code?(l.Z.prototype.$message.success(t.data.msg),this.data=t.data.data,this.success=!0):(this.success=!1,l.Z.prototype.$message.error("请求异常:"+t.data.msg))})).catch((t=>{l.Z.prototype.$message.error("请求异常:"+t.message),this.success=!1}))}},computed:{},watch:{secret:function(t){this.success=!1,c.Z.secret(t)},serverUrl:function(t){this.success=!1,c.Z.serverUrl(t)},success:function(t,e){t!==e&&this.$emit("inited",t)}}},u=o,d=s(1001),p=(0,d.Z)(u,i,n,!1,null,null,null),v=p.exports,h={data(){return{inited:c.Z.store("inited"),span:5}},components:{batteryQuery:v},methods:{initedFunc(t){this.inited=t},toPage(t){this.$router.push(t)}},watch:{inited:function(t){c.Z.store("inited",t)}}},m=h,_=(0,d.Z)(m,a,r,!1,null,null,null),y=_.exports}}]);
//# sourceMappingURL=940.fb8fda5e.js.map