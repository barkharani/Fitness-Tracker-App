<!--  SignIn.vue -->
<template>  
	<div class="container">

		<div class="row pt-50">
			<div class="col-md-6 ">
				<!-- <h4 class="font-style">Fitness Tracker App</h4> -->
							<img src="../assets/fitness-logo.jpg" class=" display-img pt-5">

			</div>
			<div class="col-md-6 line">
					<div class="panel form-panel">
						<h4 class="font-style">Fitness Tracker App</h4>
						<img src="../assets/fitness-logo.jpg" alt="App Logo" class="app_logo">
						<div class="panel-body">
							<form  class="login_form">
									<div class="form-group">
									<input type="text" name="email" class="form-control" v-model="formData.email"
											placeholder="Email" autofocus required>
									</div>
									<div class="form-group">
									<input type="password" name="password"  class="form-control " v-model="formData.password" placeholder="Password"
											required autocomplete="off">
									</div>
									<br>
									<div class="form-group">
										<button type="button"  class="btn btn-primary" v-on:click="loginNormal()"> Sign In</button>								
									</div>
									<hr>
									<div class="form-group">
											Or Sign In With 
									<a href="#" class="btn btn-primary" v-on:click="loginFacebook()"><span class="fa fa-facebook"></span> Facebook</a>
									<a href="#" class="btn" id='google-signin-button' ><span class="fa fa-google-plus"></span> Google</a> 
											
									</div>
											<hr>
									<div class="form-group">
											Or New User <a href="#/signup" class="" >Sign Up</a> Here.
													
									</div>
								</form>
							</div>
						</div>
					</div>
		</div>
	</div>
</template>
  
<script>
import { API_HOST } from '../api/urls';
import Vue from 'vue';
import auth from '../auth'

window.fbAsyncInit = function() {
	FB.init({
		cookie: true,  // enable cookies to allow the server to access the session
		xfbml: true,  // parse social plugins on this page
		appId: '2306713309584930',
		autoLogAppEvents: true,
		xfbml: true,
		version: 'v2.6'
	});
};

// Load the SDK asynchronously
(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) return;
	js = d.createElement(s); js.id = id;
	js.src = "https://connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

export default {
	name: 'signin',
	data () {
		return {
			formData: {
				email:'',
				password:'',
			},
		}
	},
	mounted() {
		gapi.signin2.render('google-signin-button', {
      onsuccess: this.onSignIn
    })
	},

	methods: {
		onSignIn (googleUser) {
			const profile = googleUser.getBasicProfile();
			const self = this;
			console.log('google  login success')
			
			const userData = {
				name: profile.getName(),
				email: profile.getEmail()
			}
			Vue.http.post('signin/social', userData)				
			.then((data) => {
				console.log(data)
				NProgress.done()
				if (data.body && data.body.results && data.body.results.status) {
					auth.setToken(data.body.results.token);
					localStorage.setItem('user_data', JSON.stringify(data.body.results.user));					
					self.$toastr.success("You are logged in successfully", "Login Success");
					self.$router.push({ name: 'HomeView' });
					return true; 
				} else {
					let msg = data.body.results.message || 'Unable to Login';					
					self.$toastr.error(msg, "Google Login Error!");
					return false;
				}
			})
			.catch((err) => {
				NProgress.done()
				console.log("login----------errr", err)
				if (err.body && err.body.results.message) {
					self.$toastr.error(err.body.results.message, "Google Login Error!");
					return false;
				} else {
					self.$toastr.error( "Google Login Error!");
					return false;
				}
			});
			
			this.signOut();	
		},
		signOut() {
			var auth2 = gapi.auth2.getAuthInstance();
			auth2.signOut().then(function () {
			});
		},
		isValidForm(){
			if (this.formData !=='' && this.formData.password !=='') {
					return true;
			} else {
					return false;
			}
		},
		loginNormal(){
			var self = this;
			NProgress.start()
			if (this.isValidForm()) { 
					auth.login(this.formData).then(() => {
						NProgress.done()
							this.$toastr.success("You are logged in successfully", "Login Success");
							self.$router.push({ name: 'HomeView' });
							return true;  
					}, error => {
							// error callback
							NProgress.done()
							this.$toastr.error(error, "Login Error!");
							return false;
					});
			} else {
				NProgress.done()
					this.$toastr.error('Empty fields', "Login Error!");
					return false;
			}
		},
		loginFacebook(){
			console.log('Clieckd loginFacebook');
			const self = this;
			NProgress.start()
			FB.login(function(response) {
				FB.api('/me?fields=id,name,email', function(profile) {
					console.log('facebook login success: ' );
					const userData = {
						name: profile.name,
						email: profile.email
					}
					Vue.http.post('signin/social', userData)
						
					.then((data) => {
						console.log(data)
						if (data.body && data.body.results && data.body.results.status) {
							auth.setToken(data.body.results.token);
							localStorage.setItem('user_data', JSON.stringify(data.body.results.user));
							NProgress.done()
							self.$toastr.success("You are logged in successfully", "Login Success");
							self.$router.push({ name: 'HomeView' });
							return true; 
						} else {
							let msg = data.body.results.message || 'Unable to Login';
							NProgress.done()
							self.$toastr.error(msg, "Facebook Login Error!");
							return false;
						}
					})
					.catch((err) => {
						console.log("facebook  login----------errr", err)
						if (err.body && err.body.results.message) {
							NProgress.done()
							self.$toastr.error(err.body.results.message, "Facebook Login Error!");
							return false;
						} else {
							NProgress.done()
							self.$toastr.error( "Facebook Login Error!");
							return false;
						}
					});

				});
			// handle the response
			}, {scope: 'public_profile, email'});
			
		},
	}
  
}


</script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
	border-radius: 30px;
	width: 20%;
}

.display-img {
	display: block;
	margin-left: auto;
	margin-right: auto;
	height: 100%;
	width: 100%;
}

.form-panel {
  padding: 30px;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background-color: #fff;
}
.line {
	border-left: 1px solid gray;
}

</style>
  