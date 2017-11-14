<template>
  <div id="app">
  	<top v-show="flag"></top>
    <transition
      name="fade"
    >
    <router-view @getID="get($event)" @show="show"/>
  </transition>
    <bottom v-show="flag" :message="id"></bottom>
  </div>
</template>

<script>
import top from './components/Top.vue'
import bottom from './components/Bottom.vue'

export default {
  name: 'app',
  components:{
      top,
      bottom
  },
  methods:{
    get(event){
      var id=event;
      this.id=id;
    },
    show(event){
      var num=event;
      if(num==1){
        this.flag=false
      }else if(num==2){
        this.flag=true
      }
    }
  },
  data(){
    return {
      id:null,
      name: 'linxin',
      flag:true
    }
  },
  mounted(){
    var id=this.$route.params.id;
    console.log(id);
  }
  // ,
  // watch: {
  //   '$route' (to, from) {
  //     console.log(123123);
  //     const toDepth = to.path.split('/').length;
  //     const fromDepth = from.path.split('/').length;
  //     // console.log(toDepth);
  //     // console.log(fromDepth);
  //     this.transitionName = toDepth <= fromDepth ? 'slide-right' : 'slide-left'
  //   }
  // }
}
</script>

<style>
html,body{
	height:100%;
	width:100%;
}
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
}
body,div,h1~h6,p,img,ul,li{
	list-style:none;
	margin:0;
	padding:0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>
