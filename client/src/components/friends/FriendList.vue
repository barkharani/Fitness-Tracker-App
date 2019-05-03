<template>
    <div class="container">
        <div class="row ">
            <div class="heading">
                    <h2>Fitness Tracker Friends</h2>
                    <small>You can view and add as well.</small>
            </div>
            <div class="user-list">
                <div class="item" v-for="(item,index) in friends">
                    <div class="user-block">
                         <div class="name"><b>{{item.name}} </b></div>
                         <div class="add-btn">                           
                           <!-- Button trigger modal -->
                          <button type="button" class="btn " data-toggle="modal" data-target="#myModal" v-on:click.stop="openModalViewFriend($event,item)">
                              View Friend
                            </button>
                          </div>
                    </div>

                </div>
            </div>
            <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title" id="myModalLabel">{{selectedFriend.name}}' Profile</h4>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <img class="img-friend" :src="selectedFriend.profile_picture" alt="">
                </div>
                <div class="form-group">
                    <label for="">Name: {{selectedFriend.name}}</label>
                </div>
                <div class="form-group">
                    <label for="">Mobile: {{selectedFriend.mobile}}</label>
                </div>
                <div class="form-group">
                    <label for="">Date of Birth: {{selectedFriend.dob}}</label>
                </div>
                <div class="form-group">
                    <label for="">Gender: {{selectedFriend.gender}}</label>
                </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" v-on:click="commentStatus()">Add Comment</button>
            </div>
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
            selectedFriend: {
              name:'',
              gender:'',
              dob: '',
              profile_picture:'',
              mobile:''
            }
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
      openModalViewFriend(e,user) {
      e.preventDefault();
      e.stopPropagation();
      
        this.selectedFriend.name = user.name;
        this.selectedFriend.mobile = user.mobile;
        this.selectedFriend.gender = user.gender;
        this.selectedFriend.profile_picture = user.profile_picture;
        this.selectedFriend.dob = user.dob;
        window.$('.modal').modal('show');
    },
        getFriends() {
            var self = this;
            Vue.http.get('friends',{params: {id:this.userData.id}})
            .then((data) => {
            self.friends = data.body.friends;
            })
            .catch((err) => {
                        // do stuff
            });
      
        },
        addFriend(friend_id) {
            console.log(friend_id);
            const self = this;
            NProgress.start()

            // const friendData = {
            //     friend_id: friend_id,
            //     user_id: self.userData.id
            // }
            // Vue.http.post('friend', friendData)
            // .then((data) => {
            // NProgress.done()
            // self.$toastr.success("Friend added");
            // self.getUsers();
            // })
            // .catch((err) => {
            // NProgress.done()
            // self.$toastr.error(error, "Error while adding user!");
            // });
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
.img-friend{
  width: 100px;
  height: 100px;
}
</style>
      