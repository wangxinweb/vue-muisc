<template>
	<el-footer>
		<div class="music_img"><img :src="picurl" alt=""></div>
		<!-- <input type="hidden" :va> -->
		<div class="song_word">
			<div class="word">
				<div class="song">
					{{song}}
				</div>
				<div class="author">
					{{name}}
				</div>
			</div>
			<div class="progress">
				<el-progress :percentage="prog" :show-text="false"></el-progress>
			</div>
			<span class="iconfont icon-play play" @click="play($event)"></span>
		</div>
		<div style="display:none" class="num" :data-id="message">{{message}}</div>
		<audio src="" @timeupdate="load()"></audio>
	</el-footer>
</template>

<script>
	import axios from 'axios'

	export default {
		name: 'Bottom',
		props: ['message'],
		methods:{
			open3() {
	            this.$message({
	           		message:'暂无该歌曲',
	            	type: 'warning'
		   	    });
		    },
		    play(event){
		    	var btn=event.target;
		    	var cl=btn.className;
		    	var audio=document.querySelector('audio');
		    	if(cl.indexOf('play')>=0){
		    		console.log(audio);
					audio.play();
					btn.classList.remove('icon-play','play');
					btn.classList.add('icon-zanting','pause');
		    	}else{
		    		audio.pause();
		    		btn.classList.add('icon-play','play');
					btn.classList.remove('icon-zanting','pause');
		    	}
		    },
		    loadMusicUrl(){    //获取歌曲地址
				var id=this.audioId;
				var _this=this;
				axios.get('./api/music/url?id='+id)   
				  .then(function(res){
				  	var url=res.data.data[0].url;
				  	var audio=document.querySelector('audio');
				  	if(url){
				  	  audio.src=url;
				  	}else{
				  	  _this.open3();
				  	}
				  })
				  .catch(function(err){
				  	console.log(err);
				  })
			},
			loadMusicDetail(){
				var id=this.audioId;
				var _this=this;	
				axios.get('./api/song/detail?ids='+id)   //获取歌曲详情
				  .then(function(res){
				  	_this.picurl=res.data.songs[0].al.picUrl?res.data.songs[0].al.picUrl:'music.png';
				  	_this.name=res.data.songs[0].ar[0].name?res.data.songs[0].ar[0].name:'暂无该歌曲';
					_this.song=res.data.songs[0].name?res.data.songs[0].name:'请选择其他歌曲';
				  })
				  .catch(function(err){
				  	console.log(err);
				  })
				}
		    ,
		    load(){
		    	var audio=document.querySelector('audio');
		    	var current_time=audio.currentTime;
		    	var all_time=audio.duration;
		    	var per=(current_time/all_time*100).toFixed(2);
		    	this.prog=Number(per);
		    }
		},
		data () {
		    return {
		      msg: 'Welcome to Your Vue.js App',
		      color4: '#409EFF',
		      name:"",
		      song:"",
		      prog:0,
		      picurl:"/assets/music.png",
		      audioId:''    //许嘉宁命名的 id
		    }
		},
		mounted(){
			this.$nextTick(() => {    //this.$nextTick 这个的意思是dom渲染完成在请求数据操作
				var id=this.message;
				var _this=this;			
				this.audioId=id;
			})
		},
		watch: {
			message(newValue, oldValue) { //监听到id的变化重新请求新数据
				this.audioId = newValue;    //用这个新的id去请求数据
				this.loadMusicUrl();
				this.loadMusicDetail();
			}
		}
	}
</script>

<style scoped>
	.el-footer{
		position:fixed;
		bottom:0;
		display:flex;
		justify-content:space-around;
		align-items: center;
		width:100%;
		background:white;
		border-top:1px solid #ececec;
		padding:0;
	}
	.music_img{
		float:left;
		height:40px;
		width:40px;
		/*animation:xz 8s infinite alternate;*/
	}
	.music_img img{
		height:100%;
		border-radius:50%;
	}
	.song_word{
		float:left;
		width:80%;
		height:100%;
		font-size:14px;
		text-align: left;
		padding-top:25px;
	}
	.word{
		width:30%;
		float:left;
	}
	.progress{
		margin-top:6px;
		width:45%;
		float:left;
	}
	.song{
		font-size:14px;
	}
	.author{
		font-size:12px;
		color:#cccccc;
	}
	.begin{
		font-size:22px;
	}
	audio{
		position:absolute;
		right:0;
		float:right;
	}
	.play,.pause{
		float:right;
		position:absolute;
		font-size:28px;
		right:20px;
	}
	.el-progress-bar__inner{
		transition:width 1s;
	}
	/*.el-progress__text{
		display:none;
	}	*/

	@keyframes xz{
		0%{
			transform:rotate(0deg);
		}
		50%{
			transform:rotate(360deg);
		}
		100%{
			transform:rotate(0deg);
		}
	}
</style>