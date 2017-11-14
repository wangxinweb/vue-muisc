<template>
	<div class="recommend">
		<div class="title">
			新歌速递
		</div>
		<ul class="content">
			<li v-for="(items,index) in recom" :data-id="items.song.album.id" @click="play($event)">
				<img :data-id="items.song.album.id" :src="items.song.album.picUrl" alt="">
				<span :data-id="items.song.album.id" >{{items.name}}</span>
			</li>
		</ul>
	</div>
</template>
<script>
	import axios from 'axios'
	export default {
		name :"NewSong",
		data () {
			return{
				recom:[]
			}
		},
		mounted(){
			var _this=this;
			axios.get('./api/personalized/newsong')
			  .then(function(res){
			  	//console.log(res);
			  	_this.recom=res.data.result;
			  	_this.recom=_this.recom.slice(0,3);
			  })
			  .catch(function(err){
			  	console.log(err);
			  })
		},
		methods:{
			play(event){
				var id=event.target.getAttribute('data-id');
				this.$emit('now-play',id);
			}
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
		width:30%;
		margin-top:15px;
	}
	.content li img{
		width:100%;
	}
	.content li span{
		display: block;
		width:100%;
		text-align: center;
	}
</style>