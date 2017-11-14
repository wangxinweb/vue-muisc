<template>
   <el-main>
      <el-carousel :interval="5000" arrow="always" height="180px">
        <el-carousel-item v-for="(items,index) in banner" :style="{background:'url('+items.pic+')center center no-repeat',width:100+'%',backgroundSize:'cover'}">
          <!-- <h3 class="title" :style="{color:items.titleColor}">{{ items.typeTitle }}</h3> -->
        </el-carousel-item>
      </el-carousel>
      <ul class="nav_box" ref="banner">
        <li class="nav" v-for="(items,index) in mainNav" @click="pathTo($event)" :data-href="items.href"><i :data-href="items.href" :class="items.class"></i>{{items.name}}</li>
      </ul>
      <recomd></recomd>
      <newSong @now-play="play($event)" ref="song"></newSong>
      <radioSt></radioSt>
      <mv></mv>
   </el-main>
</template>

<script>
import axios from 'axios'
import recomd from '@/components/Recommend' //歌单推荐
import newSong from '@/components/NewSong'  //新歌速递
import radioSt from '@/components/RadioStation' //天台推荐
import mv from '@/components/Mv'  //mv 推荐

export default {
  name: 'Main',
  components:{
    recomd,
    newSong,
    radioSt,
    mv
  },
  data () {
    return {
      msg:"red",
      banner:[],
      mainNav:[
          {name:"歌手",href:"artist",class:"iconfont icon-geshou"},
          {name:"排行",href:"rank",class:"iconfont icon-paixing-copy"},
          {name:"电台",href:"station",class:"iconfont icon-diantai"},
          {name:"分类歌单",href:"type",class:"iconfont icon-leimupinleifenleileibie"},
          {name:"视频MV",href:"mv",class:"iconfont icon-shipin"},
          {name:"数字专辑",href:"math",class:"iconfont icon-zhuanjibaidi"},
        ]
    }
  },
  methods:{
    play(event){
      var id=event;
      this.$emit('getID',id);   //使用自定义事件来传递数值$emit()  监听父组件app.vue中getID事件 ,使用ref属性可以获取dom元素。
     },
    pathTo(event){
      var href=event.target.getAttribute('data-href');
      this.$emit('show',1);
      this.$router.push({
        name:href,
        params: {
          
        }
      });
    }
  },
  beforeCreate(){
    console.log('-----beforeCeate----');
    console.log(this.$el);
    console.log(this.msg);
  },
  created(){
    console.log('-------created--------')
    console.log(this.$el);
    console.log(this.msg);
  },
  beforeMount(){
    console.log('------beforeMount----------')
    console.log(this.$el);
    console.log(this.msg);
  },
  mounted(){
    console.log('----mounted------');
    console.log(this.$el);
    console.log(this.msg);
    var _this=this;
    var id=this.$route.params.id;
    if(id==2){
       this.$emit('show',2);
    }
    //获取banner图
    axios.get('/api/banner')
      .then(function(response) {
        _this.banner=response.data.banners;
        _this.banner=_this.banner.slice(0,4);
      })
      .catch(function(error) {
        console.log(error);
      });

    //获取推荐电台
    axios.get('/api/personalized/djprogram')
      .then(function(response){
        //console.log(response.data);
      })
      .catch(function(error){
        console.log(error);
      }) 
  },
  beforeUpdate(){
    console.log('------beforeUpdate-------');
    console.log(this.$el);
    console.log(this.msg);
  },
  updated(){
    console.log('------updated---------');
    console.log(this.$el);
    console.log(this.msg);
  },
  beforeDestroy(){
    console.log('-------beforeDestroy--------')
    console.log(this.$el);
    console.log(this.msg);
  },
  destroyed(){
    console.log('--------destroyed----------')
    console.log(this.$el);
    console.log(this.msg);
  },
  watch:{
    msg:function(newvalue,oldvalue){
      console.log(oldvalue);
      console.log(newvalue);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.el-main{
  padding:0;
  padding-bottom:90px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 180px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.nav_box{
  display:flex;
  flex-wrap:wrap;
  justify-content:space-between;
  font-size:14px;
}
.nav_box li{
  width:22%;
  text-align: left;
  padding-top:20px;
}
.nav_box i{
  color:#409EFF;
  font-size:20px;
  margin-right:5px;
}
</style>
