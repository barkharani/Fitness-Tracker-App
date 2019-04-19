<!--  Signup.vue -->
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
									<div class="panel-body ">
											
			
											<div v-if="success" >
												<br> <br>
												<h1>Thanks for signup !</h1>
												<h4>Your registration done succesfully.</h4>									
												<br> <br>
												<div class="container-login100-form-btn">
													<div class="wrap-login100-form-btn">
														<div class="login100-form-bgbtn"></div>
														<router-link :to="{ name: 'Signin' }"><button class="login100-form-btn">Sign In</button></router-link>
													</div>
												</div>
											</div>
											<div v-if="!success"> 
													<form  class="login_form">
															<div class="form-group">
																	<input type="text" name="name"  class="form-control " v-model="newUser.name" placeholder="Name"
																			required autocomplete="off">
															</div>
															<div class="form-group">
																	<input type="text" name="mobile"  class="form-control " v-model="newUser.mobile" placeholder="Mobile"
																			required autocomplete="off">
															</div>
															<div class="form-group">                                        
																	<input type="text" name="email" class="form-control" v-model="newUser.email"
																			placeholder="Email" autofocus required>
															</div>
															<div class="form-group">
																	<input type="password" name="password"  class="form-control " v-model="newUser.password" placeholder="Password"
																			required autocomplete="off">
															</div>
															<div class="form-group">
																	<input type="password" name="password"  class="form-control " v-model="newUser.confirmpassword" placeholder="Confirm Password"
																			required autocomplete="off">
															</div>
															<div class="form-group">
																	<button type="button"  class="btn btn-primary " v-on:click="signup()"> Sign Up</button>
																	
																	</div>
															<hr>
													<div class="form-group">
															Or Sign In With 
													<a href="#" class="btn btn-primary" v-on:click="loginFacebook()"><span class="fa fa-facebook"></span> Facebook</a>
													<a href="#" class="btn btn-danger" v-on:click="loginGoogle()"><span class="fa fa-google-plus"></span> Google</a> 
															
													</div>
													<hr>
													<div class="form-group">
															Or Already member? <a href="#/signin" class="" >Sign In</a> Here.
															
													</div>
												</form>
											</div>
			
											
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
		name: 'signup',
		data () {
			return {
				success: false,
				newUser: {
					email: '',
					password: '',
					name: '',
					mobile: '',
					confirmpassword: ''
				}
			}
		},
	
		methods: {
			isValidForm(){
				if (this.newUser.name !==''
				&& this.newUser.mobile !=='' 
				&& this.newUser.email !=='' 
				&& this.newUser.password !=='' 
				&& this.newUser.confirmpassword !=='') {
					if (this.newUser.password !== this.newUser.confirmpassword) {
						this.$toastr.error('Password not match with confirm password', "Sign Up Error!");
						return false;
					} 
						return true;
				} else {
					this.$toastr.error('Empty fields', "Sign Up Error!");
						return false;
				}
			},
				
			signup(){
				const self = this;
				if (this.isValidForm()) {
					NProgress.start()

					auth.signup(this.newUser).then(() => {
						NProgress.done()
							this.$toastr.success("You are logged in successfully", "Login Success");
							self.success = true;
							return true;  
					}, error => {
							// error callback
							NProgress.done()
							this.$toastr.error(error, "Login Error!");
							return false;
					});					
				} else {
					NProgress.done()					
					return;
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
}
.line {
	border-left: 1px solid gray;
}
  
		
	</style>
		


