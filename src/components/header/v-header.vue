<template>
	<div class="v-header">
		<img class="imgbg" :src="seller.avatar">
		<div class="wrapper">
			<div class="avatar">
				<img :src="seller.avatar">
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{seller.name}}</span>
				</div>
				<div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
				<div class="jian" v-if="seller.supports">
					<span class="brand"></span>
					<span class="name">{{seller.supports[0].description}}</span>
				</div>
				<div class="num" v-if="seller.supports" @click="detailclick">
					{{seller.supports.length}}个&nbsp;<i class="icon-keyboard_arrow_right"></i>
				</div>
			</div>
		</div>
		<div class="gonggao">
			<img src="./bulletin@2x.png"/>
			<span>{{seller.bulletin}}</span>
			<i class="icon-keyboard_arrow_right"></i>
		</div>
		<div v-if="detail">
			<div class="detail">
				<div class="contain clearfloat">
					<div class="main">
						<h1 class="name">{{seller.name}}</h1>
						<v-star :size="48" :score="seller.score"></v-star>
					</div>
				</div>
				<div class="close">
					<i class="icon-close" @click="close"></i>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import vStar from 'components/star/v-star';
	const ERR_OK = 0;
	export default {
		name: 'vHeader',
		data () {
			return {
				detail: false,
				seller: {}
			};
		},
		created() {
			this.$http.get('/api/seller').then((response) => {
				response = response.body;
				if (response.errno === ERR_OK) {
					this.seller = response.data;
					console.log(this.seller);
				}
			});
		},
		methods: {
			detailclick() {
				this.detail = true;
			},
			close() {
				this.detail = false;
			}
		},
		components: {
			vStar
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.v-header{width: 100%;height: 268px;position: relative;color: #fff; }
	.imgbg{width: 100%;height: 100%;position: absolute;filter: blur(10px);z-index: -1;}
	.wrapper{width: 100%;height: 212px;position: relative;background: rgba(7,17,27,0.5);}
	.avatar{margin: 48px 0 0 48px;width: 128px;height: 128px;border-radius: 8px;overflow: hidden;display: inline-block;}
	.content{display: inline-block;margin-left:30px;margin-top: 52px;vertical-align: top;}
	.title .brand{display: inline-block;background: url(brand@2x.png) no-repeat;width: 60px;height: 36px;margin-right: 12px;}
	.title .name{font-size: 32px;line-height: 40px;font-weight: 700;vertical-align: super;}
	.description{font-size: 24px;line-height: 45px;font-weight: 200;}
	.jian .brand{display: inline-block;background: url(decrease_1@2x.png) no-repeat;width: 24px;height: 24px;margin-right: 8px;}
	.jian .name{font-size: 20px;line-height: 30px;font-weight: 200;vertical-align: super;}
	.num{font-size: 20px;font-weight: 200;border-radius:50px;background: rgba(0,0,0,0.2);padding: 12px 18px;min-width: 73px;right: 24px;bottom: 31px;text-align: center;position: absolute;}
	.num i{font-size: 24px;vertical-align: middle;}
	.gonggao{width: 100%;height: 56px;background: rgba(0,0,0,0.6);padding: 0 24px; font-size: 20px; overflow: hidden;position: relative;}
	.gonggao img{position: absolute;top: 16px;left: 24px;}
	.gonggao span{display: inline-block;line-height: 56px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;vertical-align: middle;padding: 0 22px 0 52px;width: 100%;font-weight: 200;}
	.gonggao i{font-size: 24px;position: absolute;top: 20px;right: 24px;}
	.detail{
		width: 100%;
		height: 100%;
		background: rgba(7,17,27,0.8) ;
		position: fixed;
		top: 0;
		left: 0;
		overflow: auto;
		z-index: 100;
	}
	.contain{
		width: 100%;
		min-height: 100%;
		padding-bottom: 120px;
	}
	.close{
		position: relative;
		margin-top:-84px;
		width: 100%;
		height: 70px;
		text-align: center;
		line-height: 70px;
	}
	.close i{
		font-size: 64px;
	}
</style>
