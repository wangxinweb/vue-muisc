<template>
	<div class="recommend">
		<div class="title">
			歌单推荐
		</div>
		<ul class="content">
			<li v-for="(items,index) in recom">
				<img :src="items.picUrl" alt="">
				<span>{{items.name}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		name :"Recommend",
		data () {
			return{
				recom:[]
			}
		},
		mounted(){
			var _this=this;
			axios.get('./api/personalized')
			  .then(function(res){
			  	_this.recom=res.data.result;
			  })
			  .catch(function(err){
			  	console.log(err);
			  })
		}
	}
</script>
<style scoped>
	.recommend{
		padding-top:20px;
	}
	.title{
		font-size:16px;
	}
	.content{
		display:flex;
		justify-content:space-around;
		flex-wrap:wrap;
	}
	.content li{
		width:30%;
		margin-top:15px;
	}
	.content li img{
		width:100%;
	}
	.content li span{
		display: block;
		width:100%;
		text-align: left;
	}
</style>