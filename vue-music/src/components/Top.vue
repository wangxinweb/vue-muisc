<template>
	<el-header>
		<div class="nav_left"><i class="iconfont icon-daohang"></i></div>
		<ul>
			<li class="nav" v-for="(items,index) in nav" :data-index="items.id">{{items.name}}</li>
		</ul>
		<div class="nav_right"></div>
	</el-header>
</template>
	
<script>
	export default {
		name: 'Top',
		data () {
		    return {
		      msg: 'Welcome to Your Vue.js App',
		      color4: '#409EFF',
		      nav:[{name:"我的",id:"1"},{name:"音乐馆",id:"2"},{name:"发现",id:"3"}]
		    }
		}
	}
</script>

<style scoped>
	.el-header{
		background:#409EFF;
		display: flex;
		justify-content:space-between;
		align-items:center;
	}
	ul{
		width:70%;
		display:flex;
		justify-content:space-around;
		align-items: center;
		align-content:space-between;
	}
	ul>li,.nav_right,.nav_left{
		color:white;
		font-size:16px;
	}
</style>