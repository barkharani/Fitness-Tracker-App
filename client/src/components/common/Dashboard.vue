<template>
  <div class="dashboard">
    <navbar />
    <div class="" >
      <div class="main-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from './Navbar';
import auth from '../../auth'

export default {
  name: 'dashboard',
  data() {
    return {
      showSideBar: true,
    };
  },
  created() {
    const token = localStorage.getItem('id_token');
    if (token && typeof (token) !== 'string') {
      this.$router.push({ name: 'Signin' });
    }
  },
  mounted() {
  },
  components: {
    Navbar,
  },
  computed: {
    userData() {
      return auth.getUser();
    },
  },
  methods: {
  },
};

</script>

<style>


.dropdown-menu {
  min-width: 100px;
  /* width: 100px; */
  left: -60px;
}
.img-box {
  position: absolute;
  right: 30px;
  top: 1px;
}
/* .main-content{
  min-height: 91vh;
  
} */
</style>
