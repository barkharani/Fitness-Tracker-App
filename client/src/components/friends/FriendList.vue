<template>
    <div class="container">
      <div class="row ">
        <div class="heading">
            <h2>Friends List</h2>
            <small>You can delete as well.</small>
        </div>
        <div class="user-list">
          <div class="item" v-for="(item,index) in friends">
            <div class="user-block">
               <div class="name"><b>{{item.name}}</b></div>
               <div class="add-btn"><span><button class="btn" v-on:click=delFriend(item.id)>Delete Friend</button></span></div>
            </div>
  
          </div>
        </div>
        
  
      </div>
    </div>
  </template>
  
  <script>
  
  import Vue from 'vue';
  import auth from '../../auth'
  
  export default {
    name: 'friend-view',
    data() {
      return {      
        friends: [],
      };
    },
    created() {
      this.getFriends();
    },
    computed: {
          userData() {
            return auth.getUser();      
          },
      },
    mounted() {
    },
    methods: {
      getFriends() {
        var self = this;
        Vue.http.get('friends',  {params: {id:this.userData.id}})
        .then((data) => {
        self.friends = data.body.friends;
        })
        .catch((err) => {
              // do stuff
        });
        
      },
      delFriend(friend_id) {
        console.log(friend_id);
        const self = this;
        NProgress.start()
  
        const friendData = {
          friend_id: friend_id,
          user_id: self.userData.id
        }
        Vue.http.delete('friend', {params: friendData})
        .then((data) => {
        NProgress.done()
        self.$toastr.success("Friend deleted!");
        self.getFriends();
        })
        .catch((err) => {
        NProgress.done()
        self.$toastr.error(error, "Error while adding user!");
        });
      }
    }
  };
  
  </script>
  <style>
  
  .user-list {
    padding-top: 50px;
  }
  
  
  .name {
    display: inline-block;
      width: 200px;
  
  
  }
  .add-btn {
    display: inline-block;
  }
  
  .item {
    margin-top: 10px;
      position: relative;
  }
  
  </style>
        