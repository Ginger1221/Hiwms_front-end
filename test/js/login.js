new Vue({
	el: '#app',
	data() {
		return {
			loginForm: {
				name: '',
				password: '',
			},
			loginRules: {
				name: [{
						required: true,
						message: '请输入账号',
						trigger: 'blur'

					},
					{
						min: 3,
						max: 15,
						message: '请输入3-15位账号'
					}
				],
				password: [{
					required: true,
					message: '请输入密码',
					trigger: 'blur'

				}]
			}
		};
	},
	methods: {
		submitForm(formName) {
			this.$refs.loginForm.validate((valid) => {
				if (valid) {
					this.$http.get('static/a.json').then((res) => {
						var list = eval("(" + res.bodyText + ")");
						console.log(list);
						console.log(this.loginForm.name);
						console.log(this.loginForm.password);
						if (list[1].userName == this.loginForm.name) {
							if (list[2].passWord == this.loginForm.password) {
								alert('账号密码正确');
							} else {
								alert('密码错误');
								return false;
							}
						} else {
							alert('账号错误');
							return false;
						}
					})
				} else {
					alert('账号密码有空');
					return false;
				}
			})
		}
	}

})
