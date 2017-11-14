<template>
	<div class="detail_box">
		<div class="inner-header">
			<div class="nav_left" @click="back"><i class="el-icon-arrow-left"></i></div>
			<div class="title">歌词</div>
			<div class="right"></div>
		</div>
		<div class="content" v-html="song_con">
			<!-- {{song_con}} -->
		</div>
		<bottom :message ="msg"></bottom>
	</div>
	
</template>

<script>
	import bottom from '@/components/Bottom.vue'
	import axios from 'axios'
	export default{
		name:"detail",
		components:{bottom},
		data(){
			return {
				song_con:'',
				msg:''
			}
		},
		mounted(){
			var id=this.$route.params.id;
			var _this=this;
			this.msg=id;
			console.log(this.mess);
			console.log(id);
			// axios.get('./api/lyric?id='+id)
			//   .then(function(res){
			//   	var song=res.data.lrc.lyric.split('\n');
			//   	var str='';
			//   	for(var i=0;i<song.length;i++){
			//   		str+=song[i].split(']')[1]+'<br/>'
			//   	}
			//   	_this.song_con=str;
			//   })
			//   .catch(function(err){
			//   	console.log(err);
			//   })
		},
		methods:{
			back(){
				this.$router.push({
			        name:'rank',
			        params: {
			          id:2
			        }
			    });
			},
		}
	}
</script>
	
<style scoped>
	.inner-header{
		background:#409EFF;
		display: flex;
		justify-content:space-between;
		align-items:center;
		height:60px;
		position:fixed;
		width:100%;
	}
	.title,.nav_left{
		color:white;
		font-size:16px;
	}
	.title{
		margin-left:-15px;
	}
	.nav_left{
		margin-left:15px;
	}
	.content{
		padding-top:80px;
		padding-bottom:60px;
		font-size:14px;
		line-height:25px;
	}
</style>