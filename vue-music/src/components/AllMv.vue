<template>
	<div class="mv_box">
		<div class="inner-header">
			<div class="nav_left" @click="back"><i class="el-icon-arrow-left"></i></div>
			<div class="title">MV排行榜</div>
			<div class="right"></div>
		</div>
		<ul class="content">
			<li v-for="(items,index) in lists" :data-id="items.id" @click="playmv(items.id)">
				<img :src="items.cover" alt="">
				<span>{{items.name}}</span>
				<span class="author">{{items.artistName}}</span>
			</li>
		</ul>
	</div>
</template>
	
<script>
	import axios from 'axios'

	export default{
		name:"allmv",
		data(){
			return{
				lists:''
			}
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
			loadMv(){
				var _this=this;
				axios.get('./api/top/mv?limit=20')
				   .then(function(res){
				   		//console.log(res.data.data);
				   		_this.lists=res.data.data;
				   })
				   .catch(function(err){

				   })
			},
			playmv(id){
				this.$router.push({
					name:"mvdetail",
					params:{
						id:id
					}
				})
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.loadMv();
			});
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
	.content{
		padding-top:60px;
		display:flex;
		justify-content:space-around;
		flex-wrap:wrap;
		padding-bottom:40px;
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