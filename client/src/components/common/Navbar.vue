<template>
<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
        
        <a class="navbar-brand" href="#">Fitness Tracker</a>
      </div>
  
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#/dashboard/home">Home <span class="sr-only">(current)</span></a></li>
          <li><a href="#/dashboard/profile">Setting</a></li>
          <li><a href="#/dashboard/friends">Friends</a></li>
          <li><a href="#/dashboard/users">Users</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Workouts <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#/dashboard/workouts-walking">Walking</a></li>
              <li><a href="#/dashboard/workouts-running">Running</a></li>
              <li ><a href="#/dashboard/workouts-cycling">Cycling</a></li>
              <li ><a href="#/dashboard/workouts-rover">Rower</a></li>
              <li ><a href="#/dashboard/workouts-stairstepper">Stair Stepper</a></li>
              <li ><a href="#/dashboard/workouts-hiking">Hiking</a></li>
              <li ><a href="#/dashboard/workouts-yoga">Yoga</a></li>
              <li ><a href="#/dashboard/workouts-swimming">Swimming</a></li>
              <li ><a href="#/dashboard/workouts-wheelchair">Wheelchair</a></li>
            </ul>
          </li>
          <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Exersice <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#/dashboard/excersice">Fat To Fit</a></li>
                <li><a href="#/dashboard/excersice">3 Day Fat Loss</a></li>
                <li ><a href="#/dashboard/excersice">3 Day Split</a></li>
              </ul>
            </li>
        </ul>
        
        <div class="username-main text-right position-relative">
            <span>{{userData.name}}</span>
            <a v-on:click="logout()">
                <span class=" btn logout-icon"></span>Logout</a>
          </div>
        
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
  </nav>
</template>

<script>
  import $ from 'jquery';
  import auth from '../../auth'

  export default {
    name: 'Navbar',
    props: [],
    data() {
      return {
        defaultImage: '../../assets/logo.jpg',
        displayImage: '', 
      };
    },
    mounted() {
      // this.displayImage = this.userData.profileImage ? this.userData.profileImage : '';
    },
    computed: {
      userData() {
        return auth.getUser();      
      },
      profilePic() {        
      },
    },
    methods: {
      logout() {
        auth.logout();
        this.$router.push({
          name: 'Signin',
        });        
      },
      toggleSideBar() {
        this.$emit('toggle-sidebar');
      },
    },
  };

</script>

<style scoped>

.dropdown-menu>li:first-child {
  border-bottom: 1px solid #ccc;
}

.dropdown-menu {
  min-width: 140px;
  left: -39px;
  border-radius: 0;
}

.logout-icon {
  color: white;
}

.profile-icon {
  color: #999;
}
.user-icon {
margin-left: -55px;
margin-top: 0px;
position: absolute;
color: #999;
}

  .dropdown-icon {
    margin-right: 14px;
    font-size: 1.2em;
    cursor: pointer;
  }

/* username */

.username-main {
  float: right;
  font-size: 14px;
  left: -90px;
  top: 14px;
  margin-left: -30px;
  position: relative;
  color: white;
}

.logout-dropdown {
  margin-top: 45px;
  margin-left: -42px;
}

.logout-hover{
  cursor: pointer;
}

.img-box {
  position: absolute;
  right: 30px;
  top: 10px;
}

img {
  width: auto;
  height: 164px;
}



</style>
