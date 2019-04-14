# yesapi-vue-uniapp-sdk
 uniapp调用小白接口sdk-https://github.com/yesapicn/yesapi-vue-uniapp-sdk
 首先把okayapi-vue-sdk文件下载后放入components文件夹，然后把okayapi.js的appkey跟appsecret修改成[自己的信息](http://open.yesapi.cn/?r=App/Mine)（点击查看）。如图![在这里插入图片描述](https://img-blog.csdnimg.cn/20190414221223400.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjkzMjM2OQ==,size_16,color_FFFFFF,t_70)
 
 接下来打开根目录下的main.js加入一句并修改成您的域名

```
 //挂载全局变量okayapiHost AppKey AppSecrect
Vue.prototype.okayapiHost="您的域名";
```

准备工作结束！调用时只需要加入如下语句

```
<script>
	import * as okayapi from '../../../components/okayapi-vue-sdk/okayapi.js';


	export default {
		data() {
			return {
				title: 'Music',
				music: {},
				input: '',
				filter: 'name',
				website: 'netease'
			}
		},
		methods: {
			searchOkay: function() {
				var params = {
					s: "App.Music.Search", // 必须，待请求的接口服务名称
					input: this.input,
					filter: this.filter,
					website: this.website
				};
				uni.request({
					url: this.okayapiHost,
					method: 'GET',
					data: okayapi.enryptData(params),
					success: res => {
						console.log(res);
						this.music = res.data.data.music
					},
					fail: res => {
						console.log(res);
					},
					complete: () => {}
				});
			}
		}
	}
</script>
```
就可以成功调用到小白接口啦
