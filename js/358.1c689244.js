"use strict";(self["webpackChunkvue_router_demo"]=self["webpackChunkvue_router_demo"]||[]).push([[358],{6358:function(t,s,e){e.r(s),e.d(s,{default:function(){return i}});var n=function(){var t=this,s=t._self._c;return t.post?s("div",[s("h3",[t._v(t._s(t.post.title))]),s("div",{staticClass:"content",domProps:{innerHTML:t._s(t.post.content)}})]):t._e()},o=[],r={data(){return{post:null}},props:["postId"],async created(){const{postId:t}=this,s=await this.$http.get(`/topic/${t}`);this.post=s.data}},u=r,p=e(1001),a=(0,p.Z)(u,n,o,!1,null,null,null),i=a.exports}}]);
//# sourceMappingURL=358.1c689244.js.map