<template>
        <div class="container">
            <div class="row ">
                <div class="heading">
                        <h2>Fitness Tracker Users</h2>
                        <small>You can view and add as well.</small>
                </div>
                <div class="user-list">
                    <div class="item" v-for="(item,index) in users">
                        <div class="user-block">
                             <div class="name"><b>{{item.name}} </b></div>
                             <div class="add-btn"><span><button class="btn" v-on:click=addFriend(item.id)>Add Friend</button></span></div>
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
        name: 'all-users-view',
        data() {
            return {      
                users: [],
            };
        },
        created() {
            this.getUsers();
        },
        computed: {
            userData() {
              return auth.getUser();      
            },
        },
        mounted() {
        },
        methods: {
            getUsers() {
                var self = this;
                Vue.http.get('users',{params: {id:this.userData.id}})
                .then((data) => {
                self.users = data.body.users;
                })
                .catch((err) => {
                            // do stuff
                });
          
            },
            addFriend(friend_id) {
                console.log(friend_id);
                const self = this;
                NProgress.start()
    
                const friendData = {
                    friend_id: friend_id,
                    user_id: self.userData.id
                }
                Vue.http.post('friend', friendData)
                .then((data) => {
                NProgress.done()
                self.$toastr.success("Friend added");
                self.getUsers();
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
          