<template>
    <div>
      <div class="row ">
        <div class="panel">
          <h2 class="panel_head">Setting</h2>
          <form >    
              <div class="form-group">
                    <img class="img-style " v-if="!userData.profile_picture" :src="defaultImage">
                    <img class="img-style " :src="userData.profile_picture" v-else>
                    <label class="btn-bs-file btn btn-md btn-block  ">
                      Upload Picture
                      <input type="file" id="profile-picture" v-on:change="onFileSelection('profile-picture')">
                    </label>
              </div>       
              
              <div class="form-group">
                  <input type="text" name="fname"  class="form-control " v-model="user.name" placeholder="Name"
                      required autocomplete="off">
              </div>
              <div class="form-group">
                  <input type="text" name="lname"  class="form-control " v-model="user.mobile" placeholder="Mobile"
                      required autocomplete="off">
              </div>
              
              <div class="form-group">
                  <div class='input-group date' id='dateofbirth'>
                      <input type='text' id="dob" class="form-control" placeholder="Date of Birth" />
                      <span class="input-group-addon">
                          <span class="glyphicon glyphicon-calendar" ></span>
                      </span>
                  </div>
                </div>
                <div class="form-group">  Gender :                                     
                    <label class="radio-inline" >
                      <input type="radio" :selected="user.gender === 'male'"v-model="user.gender" value="male"> Male
                    </label>
                    <label class="radio-inline">
                      <input type="radio" :selected="user.gender === 'female'" v-model="user.gender" value="female"> Female
                    </label>
                </div>
                <div class="form-group">
                  <button type="button"  class="btn btn-primary " v-on:click="update()"> Save Setting</button>
                
                </div>
          </form>
        </div>
          
        
    </div>
  </div>
  </template>
  
  <script>
  import Vue from 'vue';
// import { API_HOST } from '../../api/urls';
import auth from '../../auth'

  export default {
    name: 'profile-view',
    data() {
      return {      
        key: '',
        user: {
					dob: '',
					gender: '',
					name: '',
					mobile: '',
        },
        defaultImage: '../../static/img/logo.jpg',
        userData:{}
      };
    },
    created() {
      console.log('created')
      this.userData = auth.getUser();
      window.$('#dob').val(this.userData.dob);
      this.user.dob = this.userData.dob ;
      this.user.gender = this.userData.gender;
      this.user.name = this.userData.name;
      this.user.mobile = this.userData.mobile;
      this.user.id = this.userData.id
    },
    computed: {
        // userData() {
        //   return auth.getUser();      
        // },
      },
    mounted() {
      console.log('mounted')
      window.$('#dateofbirth').datetimepicker({
        format: 'MM/DD/YYYY',
        // maxDate: new Date()
      });
    },
    methods: {
      
      onFileSelection(id) {
      const input = window.document.getElementById(id);
      if (input.files[0].type.indexOf('image') !== -1) {
        const fd = new FormData();
        fd.append('profile_picture', input.files[0]);
        this.savePicture(fd);
      } else {
        this.$toastr.warning('Please Upload Only Images');
      }
    },
    savePicture(picture) {
      NProgress.start()
      const self=this;
      Vue.http.put('user/picture', picture, {params:{id:self.userData.id}}).then((data) => {
        NProgress.done()
        self.$toastr.success("Profile updated.");
        auth.updateCurrentUser()
        .then((data) => {
          self.userData = data;
        }, error => {
							// error callback
							
					});
      })
      .catch((err) => {
        NProgress.done()
        self.$toastr.error(error, "Error while updating profile!");
      });
    },
      update(){
        this.user.dob = this.isoDate('dob')
        const self = this;
        console.log(this.user)
        NProgress.start()

        Vue.http.put('users', self.user)
        .then((data) => {
          NProgress.done()
          this.$toastr.success("Profile updated.");
        })
        .catch((err) => {
          NProgress.done()
          this.$toastr.error(error, "Error while updating profile!");
        });
      
      }, 
      isoDate(id) {
        const val = window.document.getElementById(id).value;
        if (val) {
          const day = new Date(val);  // eslint-disable-line
          return day.toISOString();
        } else { //eslint-disable-line
          return null;
        }
      },
    }
  };
  
  </script>
  <style>
    .panel{
      margin: auto;
      width: 60%;
      padding: 10%;
    }
    .panel_head{
      padding-bottom: 7%;
    }
  
    .img-style {
  width: 120px;
  height: 130px;
  margin: 10px auto !important;
}
.btn-block{
display: block;
    width: 100%;
    text-align: left;
}
  </style>
  