<template>
  <div class="star" :class="starType">
   <span v-for="itemClass in itemClasses" :class="itemClass" class="staritem"></span>
  </div>
</template>

<script>
const LENGTH = 5;
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';
export default {
  name: 'vStar',
  props: ["size","score"],
  computed: {
	  starType() {
	  return 'star-' + this.size;
	  },
		itemClasses() {
		 let result = [];
		 let score = Math.floor(this.score * 2) / 2;
		 let hasDecimal = score % 1 !== 0;
		 let integer = Math.floor(score);
		for (let i = 0; i < integer; i++) {
		 result.push(CLS_ON);
	 	}
		if (hasDecimal) {
		 result.push(CLS_HALF);
		}
		while (result.length < LENGTH) {
		 result.push(CLS_OFF);
		}
		return result;
		console.log(result);
 }
 },
 data () {
 return {
 };
 }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.star{font-size: 0;}
	.staritem{display: inline-block;background-repeat:  no-repeat;}
	
	.star-48 .on{background: url(star48_on@2x.png);}
	.star-48 .half{background: url(star48_half@2x.png);}
	.star-48 .off{background: url(star48_off@2x.png);}
	.star-48 .staritem{width: 40px;height: 40px;margin-right: 22px;background-size: 40px 40px;}
	
	.star-36 .on{background: url(star36_on@2x.png);}
	.star-36 .half{background: url(star36_half@2x.png);}
	.star-36 .off{background: url(star36_off@2x.png);}
	.star-36 .staritem{width: 30px;height: 30px;margin-right: 6px;background-size: 30px 30px;}
	
	.star-24 .on{background: url(star24_on@2x.png);}
	.star-24 .half{background: url(star24_half@2x.png);}
	.star-24 .off{background: url(star24_off@2x.png);}
	.star-24 .staritem{width: 20px;height: 20px;margin-right: 3px;background-size: 20px 20px;}
	.staritem:last-child{margin-right: 0;}
</style>
