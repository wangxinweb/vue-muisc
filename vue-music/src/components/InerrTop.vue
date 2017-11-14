<template>
	<div class="inner-header">
		<div class="nav_left" @click="back"><i class="el-icon-arrow-left"></i></div>
		<div class="title">{{content}}</div>
		<div class="right"></div>
	</div>
</template>

<script>
	export default{
		name:'InnerTop',
		props:['content','backlast'],
		data(){
			return {

			}
		},
		methods:{
			back(){
				this.$router.push({
			        name:this.backlast,
			        params: {
			          id:2
			        }
			    });
			}
		}
	}
</script>

<style scoped>
	.inner-header{
		background:#409EFF;
		display: flex;
		justify-content:space-between;
		align-items:center;
		height:60px;
		position:fixed;
		width:100%;
	}
	.title,.nav_left{
		color:white;
		font-size:16px;
	}
	.title{
		margin-left:-15px;
	}
	.nav_left{
		margin-left:15px;
	}
</style>