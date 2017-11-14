<template>
	<div>
		<newtop :content="title" :backlast="backname"></newtop>
		<div class="content">
			这一部分暂时没有做
		</div>
	</div>
</template>
	
<script>
	import axios from 'axios'
	import newtop from '@/components/InerrTop'

	export default{
		components:{
			newtop
		},
		methods:{
			loadStation(){
				axios.get('./api/dj/recommend')
				   .then(function(res){
				   		console.log(res);
				   })
				   .catch(function(err){
				   		console.log(err);
				   })
			}
		},
		data(){
			return{
				title:'分类歌单',
				stationList:'',
				backname:'Main'
			}
		},
		mounted(){
			this.$nextTick(function(){
				this.loadStation();
			})
		}
	}

</script>

<style scoped>
	.content{
		padding-top:100px;
		font-size:20px;
	}
</style>