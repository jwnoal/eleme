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
</style>
