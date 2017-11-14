<template>
	<div class="detail_box">
		<div class="inner-header">
			<div class="nav_left" @click="back"><i class="el-icon-arrow-left"></i></div>
			<div class="title">MV</div>
			<div class="right"></div>
		</div>
		<div class="content">
			<video controls="true">
				<source :src="src" type="video/mp4">
			</video>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'

	export default{
		data(){
			return{
				id:"",
				src:""
			}
		},
		methods:{
			back(){
				this.$router.push({
			        name:'mv',
			        params: {
			          id:2
			        }
			    });
			},
			loadMvUrl(){
				var id=this.id;
				var _this=this;
				var video=document.querySelector('video');
				axios.get('./api/mv?mvid='+id)
			       .then(function(res){
			       	   	_this.src=res.data.data.brs['720'];
			       	   	video.load();
			       })
			       .catch(function(err){
			       		console.log(err);
			       })
			}
		},
		mounted(){
			var id=this.$route.params.id;
			var _this=this;
			this.$nextTick(function(){
				this.id=id;
				this.loadMvUrl();
			});
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
	video{
		width:100%;
		height:5.5rem;
	}
	source{
		height:100%;
		width:100%;
	}
</style>