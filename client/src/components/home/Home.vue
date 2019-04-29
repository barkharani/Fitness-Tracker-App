<template>
  <div class="container">
    <div class="row">
        <div class="row galary">
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
              <!-- Indicators -->
              <ol class="carousel-indicators">
                <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                <li data-target="#carousel-example-generic" data-slide-to="3" ></li>
                <li data-target="#carousel-example-generic" data-slide-to="4"></li>
                <li data-target="#carousel-example-generic" data-slide-to="5"></li>
                <li data-target="#carousel-example-generic" data-slide-to="6"></li>
                <li data-target="#carousel-example-generic" data-slide-to="7"></li>
              </ol>
                
                  <!-- Wrapper for slides -->
                  <div class="carousel-inner" role="listbox">
                    <div class="item active">
                      <img src="../../assets/slider/1.jpg" >
                    </div>
                    <div class="item">
                      <img src="../../assets/slider/2.jpg" >
                    </div>
                    <div class="item">
                      <img src="../../assets/slider/3.jpg" >
                    </div>
                    <div class="item">
                      <img src="../../assets/slider/4.jpg" >
                    </div>
                    <div class="item">
                      <img src="../../assets/slider/5.jpg" >
                    </div>
                    <div class="item">
                      <img src="../../assets/slider/6.jpg" >
                    </div>
                    <div class="item">
                      <img src="../../assets/slider/7.jpg" >
                    </div>
                    <div class="item">
                      <img src="../../assets/slider/8.jpg" >
                    </div>
                  </div>
                
                  <!-- Controls -->
                  <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                </div>          
          </div>
    </div>
    <div class="row">
    <div class="col-lg-6">
      <form>
        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon">Status:</span>
                  <textarea class="form-control" id="" rows="3" v-model="status.status_title" placeholder="Write your status..." ></textarea>
              </div>
          </div>
        <button class="btn btn-outline-success post-btn"  v-on:click="addStatus()">Post</button>
      </form>
      </div>
    </div>
    <br><br><br>
    <div class="row">
      <div v-for="(item,index) in usersStatus">
        <div class="jumbotron">
          <div class="container">
            <span class="status_user">{{item.status_user}}:</span>{{item.status_title}}  
            <div class="text-right position-relative"> 
              <button class="btn" v-on:click="likeStatus(item)">Like <span class="badge">{{item.like_count}}</span></button>
              <!-- Button trigger modal -->
              <button type="button" class="btn " data-toggle="modal" data-target="#myModal" v-on:click.stop="openModalCommentStatus($event,item)">
                Comment
              </button>
            </div>   
            <div class="text-left position-relative "> 
              <small>posted at: {{item.created_at}}</small>
            </div>   
            <div v-if="item.comments">
              <br>
              Comments: 
              <div class="panel" v-for="(comment,cmt) in item.comments">
                <h5>{{comment.comment_title}}</h5>
                <div class="text-left position-relative "> 
                    <small>commented at: {{comment.created_at}} </small>
                  </div> 
              </div>
            </div>                
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
            <h4 class="modal-title" id="myModalLabel">Comment On Status {{statusComment.status_title}}</h4>
          </div>
          <div class="modal-body">
              <div class="form-group">
                  <div class="input-group">
                    <textarea class="form-control" id="" rows="3" v-model="comment.comment_title" placeholder="Write your cooment here..." ></textarea>
                  </div>
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
</template>

<script>
import Vue from 'vue';
// import { API_HOST } from '../../api/urls';
import auth from '../../auth'

export default {
  name: 'home-view',
  data() {
    return {      
      status: {
        status_title: '',
        user_id: '',
        like_count: 0
      },
      comment: {
        comment_title: '',
        status_id: '',
        user_id: ''
      },
      statusComment: {
        status_title:'',
        status_id: ''
      },

      usersStatus: [],
    };
  },
  created() {
    // this.status.user_id = 
    this.getStatus();
  },
  computed: {
      userData() {
        return auth.getUser();      
      },
      profilePic() {        
      },
    },
  mounted() {
  },
  methods: {
    
    getStatus() {
      var self = this;
      Vue.http.get('status')
      .then((data) => {
        self.usersStatus = data.body.status;
      })
      .catch((err) => {
				// do stuff
      });
      
    },
    addStatus(){
      var self = this;
      this.status.user_id = this.userData.id;
      NProgress.start()

      if (this.status.status_title !=='') {
        Vue.http.post('status', self.status)
        .then((data) => {
          NProgress.done()
          self.getStatus()
          this.$toastr.success("Status posted.");
        })
        .catch((err) => {
          NProgress.done()
          this.$toastr.error(error, "Error while post status!");
        });
      } else {
        NProgress.start()
        this.$toastr.error('status fields should not blank!', "Empty Status");
      }
      
    },
    
    openModalCommentStatus(e,status) {
      e.preventDefault();
      e.stopPropagation();
      
        this.statusComment.status_title = status.status_title;
        this.comment.status_id = status.id;
        this.comment.user_id = this.userData.id;
        window.$('.modal').modal('show');
    },
    commentStatus(data) {
      const self =this;
        NProgress.start()
        if (this.comment.comment_title !=='') {
          Vue.http.post('comments', self.comment)
          .then((data) => {
            NProgress.done()
            window.$('.modal').modal('hide');
            self.getStatus();
            this.$toastr.success("Commented on status.");
          })
          .catch((err) => {
            NProgress.done()
            window.$('.modal').modal('hide');
            this.$toastr.error(error, "Error while comment on status!");
          });
        } else {
          NProgress.start()
          window.$('.modal').modal('hide');
          this.$toastr.error('Comment should not blank!', "Empty Comment!");
        }
        
    },
    likeStatus(status) {
      let count=status.like_count + 1;
      Vue.http.put('status', {"like_count": count, id: status.id})
        .then((data) => {
          NProgress.done();
          status.like_count=count;
          this.$toastr.success("Status liked.");
        })
        .catch((err) => {
          NProgress.done()
          this.$toastr.error(error, "Error in like status!");
        });
    }
  }
};

</script>
<style>
 .panel {
   position: relative;
   padding: 10px;
 }
 .status_user {
   padding-left: 5px;
   padding-right: 10px;
   color: green;
 }
 .post-btn{
    width: 100%;
    font-size: 20px;
    font-weight: 700;
 }

 .galary {
	padding: 20px !important;
	text-align: center !important;
}
.signin-btn {
	padding-top: 40px !important;
	text-align: center !important;
}

img {
	width: 600px !important;
	height: 400px !important;
	/* text-align: center; */
	/* padding: 20px; */
}
.border {
	border: 1px solid gray;
}
.item {
	text-align: center !important;
	margin-left: 50px;
}
.btn {
	border-radius:20px 
}
</style>
