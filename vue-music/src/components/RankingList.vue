<template>
	<div class="raking">
		<div class="inner-header">
			<div class="nav_left" @click="back"><i class="el-icon-arrow-left"></i></div>
			<div class="title">音乐排行榜</div>
			<div class="right"></div>
		</div>
		<ul class="song_box">
			<li v-for="(items,index) in list" :data-id="items.id" @click="detail(items.id)">
				<img :src="items.album.picUrl" alt="">
				<div class="song_right">
					<p><span>  {{index+1}} </span>  {{items.name}}  </p>
					<p class="wirter">{{items.artists[0].name}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	import axios from 'axios'

	export default {
		name:"Ranking",
		data(){
			return{
				list:""
			}
		},
		mounted(){
			var _this=this;
			axios.get('./api/top/list?idx=1')
			  .then(function(res){
			  	console.log(res);
			  	_this.list=res.data.result.tracks;
			  	_this.list=_this.list.slice(0,40);
			  })
			  .catch(function(err){
			  	console.log(err);
			  })
		},
		methods:{
			back(){
				this.$router.push({
			        name:'Main',
			        params: {
			          id:2
			        }
			    });
			},
			detail(id){
				this.$router.push({
			        name:'detail',
			        params: {
			          id:id
			        }
			    });
			}
		}	
	}
</script>
<style scoped>
	.inner-header{
		background: #409EFF;
		height:60px;
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-pack: justify;
	    -ms-flex-pack: justify;
	    justify-content: space-between;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    align-items: center;
	    position: fixed;
	    width:100%;
	}
	.inner-header{
		background:#409EFF;
		display: flex;
		justify-content:space-between;
		align-items:center;
	}
	.title{
		width:40%;
		display:flex;
		justify-content:space-around;
		align-items: center;
		align-content:space-between;
	}
	.title,.nav_left{
		color:white;
		font-size:16px;
	}
	.nav_left{
		padding-left:15px;
	}
	.song_box{
		text-align:left;
		padding-top:60px;
	}
	.song_box li{
		padding:10px 5px 10px 5px;
		font-size:16px;
		border-bottom:1px solid #cccccc;
		overflow:hidden
	}
	.wirter{
		text-indent:15px;
		font-size:14px;
	}
	img{
		float:left;
		height:2rem;
		width:2rem;
	}
	.song_right{
		float:left;
		width:60%;
		margin-top:20px;
		margin-left:20px;
	}
</style>