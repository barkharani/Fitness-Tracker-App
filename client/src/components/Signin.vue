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
											<a href="#" class="btn btn-danger" v-on:click="loginGoogle()"><span class="fa fa-google-plus"></span> Google</a> 
													
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
import auth from '../auth'

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

	methods: {
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
		},
		loginGoogle(){
			console.log('Clieckd loginGoogle');
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
  