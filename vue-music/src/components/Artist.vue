<template>
	<div class="artBox">
		<newtop :content="con" :backlast="artist"></newtop>
		<div>{{num}}</div>
		<div class="content">
			<ul class="art_con">
				<li v-for="(items,index) in artList" :key="index" @click="artDetail(items.id)">
					<img :src="items.picUrl" alt="">
					<span>{{items.name}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import newtop from '@/components/InerrTop.vue'
	import axios from 'axios'

	export default{
		name:"artist",
		components:{newtop},
		methods:{
			loadArtist(){
				var _this=this;
				axios.get('./api/top/artists?offset=0&limit=30')
				    .then(function(res){
				   		_this.artList=res.data.artists;
				    })
				    .catch(function(err){
				   		console.log(err);
				    })
			},
			artDetail(id){
				this.$router.push({
					name:"artdetail",
					params:{
						id:id
					}
				})
			}
		},
		data(){
			return {
				con:"歌手",
				artList:'',
				artist:"Main",
				num:1
			}
		},
		mounted(){
			var _this=this;
			setInterval(function(){
				_this.num++;
			},1000);
			this.$nextTick(function(){
				this.loadArtist();
			})
		},
		watch:{							//监听其中一个数据
			num(newValue , oldValue){
				
			}
		}
	}
</script>

<style>
	img{
		/*height:3rem;*/
		width:3rem;
	}
	span{
		font-size:14px;
		display:block;
	}
	.art_con{
		display:flex;
		padding-top:2rem;
		justify-content:space-around;
		align-items: center;
		flex-wrap: wrap;
	}
	.art_con > li{
		width:3rem;
		margin-bottom:15px;
	}
</style>