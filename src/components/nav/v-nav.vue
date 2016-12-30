<template>
  <div class="v-nav">
  	<div class="tab">
			<div class="tab-item">
	   		<router-link to="/goods">商品</router-link>
	   	</div>
	   	<div class="tab-item">
	   		<router-link to="/ratings">评论</router-link>
	   	</div>
	   		<div class="tab-item">
	   		<router-link to="/seller">商家</router-link>
	   	</div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'vNav',
  data () {
    return {
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.v-nav{width: 100%;height: 80px;line-height: 80px;font-size: 28px;text-align: center;}
.v-nav:after{border-bottom: 1px solid #ddd;display: block;width: 100%;content:'';height: 1px;transform: scaleY(0.5);}
.tab{display: flex;height: 100%;}
.tab-item{flex: 1;}
.tab-item a{color:#666;display: block;}
.tab-item .active{color:red;}
</style>
