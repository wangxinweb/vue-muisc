<template>
	<div>
		<newtop :content="con" :backlast="back"></newtop>
		<div class="content">
			<ul class="art_con">
				<li v-for="(items,index) in songList" @click="playMusic(items.id)">
					<img :src="items.al.picUrl" alt="">
					<span>{{items.name}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from 'axios'
	import newtop from '@/components/InerrTop.vue'

	export default{
		components:{newtop},
		methods:{
			loadSong(){
				var id=this.$route.params.id;
				var _this=this;
				axios.get('./api/artists?id='+id)
					.then(function(res){
						_this.songList=res.data.hotSongs;
					})
					.catch(function(err){
						console.log(err);
					})
			},
			playMusic(id){
				this.$router.push({
			        name:'detail',
			        params: {
			          id:id
			        }
			    });
			}
		},
		components:{newtop},
		data(){
			return{
				con:"歌曲",
				songList:"",
				back:"artdetail"
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.loadSong();
			})
		}
	}
</script>

<style scoped>
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