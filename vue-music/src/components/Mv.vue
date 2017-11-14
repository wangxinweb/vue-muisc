<template>
	<div class="recommend">
		<div class="title">
			遇见青春年少的时光
		</div>
		<ul class="content">
			<li v-for="(items,index) in recom" :data-id="items.id">
				<img :src="items.picUrl" alt="">
				<span>{{items.name}}</span>
				<span class="author">{{items.copywriter}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		name :"Mv",
		data () {
			return{
				recom:[]
			}
		},
		mounted(){
			var _this=this;
			axios.get('./api/personalized/mv')
			  .then(function(res){
			  	console.log(res);
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
		padding-top:30px;
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
		width:49%;
		margin-top:15px;
	}
	.content li img{
		width:100%;
	}
	.content li span{
		display: block;
		width:100%;
		text-align:left;
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
	.author{
		font-size:10px;
		color:#cccccc;
	}
</style>