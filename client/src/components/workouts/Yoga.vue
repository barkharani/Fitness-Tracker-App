<template>
        <div class="container">
          <div class="row ">
            <div class="content">
              <div class="img-cls">
                  <img class="workout-img" src="../../assets/workout/yoga.png" >
              </div>
                <div class="desc-cls">
                    <p>Here is somthing about workouts yoga.......</p>
                </div>
              
            </div>      
        </div>
        <div class="row">
            <div class="content2">
                <div class="img-cls">
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" >
                        Add Workout
                      </button>
                </div>
                  <div class="desc-cls">
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModalHisory" v-on:click="getHisory()">
                                View History
                              </button>
                  </div>
                
              </div>      
        </div>
      
        <!-- Modal -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 class="modal-title" id="myModalLabel">Workout-Walking </h4>
                </div>
                <div class="modal-body">
                    <form  class="login_form">
                        <div class="form-group">
                            <div class='input-group date' id='lastdate'>
                                <input type='text' id="date1" class="form-control" placeholder="Start Date" />
                                <span class="input-group-addon">
                                    <span class="glyphicon glyphicon-calendar" ></span>
                                </span>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class='input-group date' id='startdate'>
                                <input type='text' id="date2" class="form-control" placeholder="Last Date" />
                                <span class="input-group-addon">
                                    <span class="glyphicon glyphicon-calendar" ></span>
                                </span>
                            </div>
                        </div>
                        <div class="form-group">                                        
                            <input type="text" name="email" class="form-control" v-model="workout.duration"
                                placeholder="Duration" autofocus required>
                        </div>
                        <div class="form-group">
                            <input type="text" name="password"  class="form-control " v-model="workout.weight" placeholder="Weight"
                                required autocomplete="off">
                        </div>
                        <div class="form-group">
                            <input type="text" name="password"  class="form-control " v-model="workout.repeats" placeholder="Repeats"
                                required autocomplete="off">
                        </div>
                        
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" v-on:click="AddWorout()">Save Workout</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal -->
    <div class="modal fade" id="myModalHisory" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  <h4 class="modal-title" id="myModalLabel">Workout History for Walking </h4>
                </div>
                <div class="modal-body">
                    <div>
                        <table class="table">
                        <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Start Date</th>
                              <th scope="col">Last Date</th>
                              <th scope="col">Duration</th>
                              <th scope="col">Weight</th>
                              <th scope="col">Repeats</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(item,index) in historyData">
                              <th scope="row">{{index+1}}</th>
                              <td>{{item.start_date}}</td>
                              <td>{{item.last_date}}</td>
                              <td>{{item.duration}}</td>
                              <td>{{item.weight}}</td>
                              <td>{{item.repeats}}</td>
                            </tr>
                          </tbody>
                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
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
        name: 'workouts-yoga',
        data() {
          return {   
            historyData:[],    
            workout: {
              workout_type: 'yoga',
              start_date: '',
              last_date: '',
              duration: '',
              weight: '',
              repeats: '',
              user_id: ''
            },
          };
        },
        created() {
        },
        computed: {
            userData() {
              return auth.getUser();      
            },
          },
        mounted() {
          window.$('#startdate').datetimepicker({
              format: 'MM/DD/YYYY',
              // maxDate: new Date()
            });
            window.$('#lastdate').datetimepicker({
              format: 'MM/DD/YYYY',
              // maxDate: new Date()
            });
        },
        methods: {
          isoDate(id) {
              const val = window.document.getElementById(id).value;
              if (val) {
                const day = new Date(val);  // eslint-disable-line
                return day.toISOString();
              } else { //eslint-disable-line
                return null;
              }
            },
            getHisory(){
          var self = this;
          Vue.http.get('workouts', {params: {
            user_id: this.userData.id,
            workout_type: self.workout.workout_type
          }})
          .then((data) => {
            self.historyData = data.body.workouts;
          })
          .catch((err) => {
            // do stuff
          });

        },
          AddWorout() {
      
            this.workout.start_date = this.isoDate('date1')
            this.workout.last_date = this.isoDate('date2')
            this.workout.user_id = this.userData.id;
      
            const self = this;
              console.log(this.workout)
              NProgress.start()
      
              Vue.http.post('workout', self.workout)
              .then((data) => {
                NProgress.done()
                window.$('.modal').modal('hide');
                self.$toastr.success("Workout added.");
              })
              .catch((err) => {
                NProgress.done()
                window.$('.modal').modal('hide');
                self.$toastr.error(error, "Error while updating workouts!");
              });
      
            
      
          }
        }
      };
      
      </script>
      <style>
      .content{
        margin-top: 10px;
          position: relative;
      }
      .content2{
        margin-top: 50px;
          position: relative;
          padding-left: 90px;
          padding-right: 100px;
      }
      
      .img-cls{
        display: inline-block;
        padding-left: 50px;
        padding-right: 50px;
        width: 300px
      }
      
      .desc-cls{
        display: inline-block;
        padding-left: 50px;
        padding-right: 50px;
      }
        .workout-img{
          align-content: left;
          height: 200px;
          width: 250px;
          
          display: inline-block
        }
      
      </style>
      