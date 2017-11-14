<template>
	<div class="recommend">
		<div class="title">
			精选电台
		</div>
		<ul class="content">
			<li v-for="(items,index) in recom" :data-id="items.id">
				<img :src="items.picUrl" alt="">
				<span>{{items.category}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		name :"RadioStation",
		data () {
			return{
				recom:[]
			}
		},
		mounted(){
			var _this=this;
			axios.get('./api/dj/recommend')
			  .then(function(res){
			  	//console.log(res);
			  	_this.recom=res.data.djRadios;
			  	_this.recom=_this.recom.slice(0,3);
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
		width:25%;
		margin-top:15px;
	}
	.content li img{
		width:100%;
		border-radius:50%;
	}
	.content li span{
		display: block;
		width:100%;
		text-align:center;
	}
</style>