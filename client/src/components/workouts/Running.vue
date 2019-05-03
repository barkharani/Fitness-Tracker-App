<template>
        <div class="container">
          <div class="row ">
            <div class="content">
              <div class="img-cls">
                    <img class="workout-gif" src="../../assets/workout/run.gif" style= width:300px;height:300px;>
                  <h2><b>Running</b></h2>
              </div>
              <body>
              <p>
              Running is a great way to get fit, feel better and even form new relationships with other runners. Starting a new running habit doesn’t have to be hard — all it takes is a comfortable pair of shoes and a willingness to move a little or a lot, all at your own pace. 
              </p>
              </body>
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
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModalHisory" v-on:click="getHisory(workout.workout_type)">
                                View History
                              </button>
                  </div>
                
              </div>   
              <div id="shareBtn" class="btn btn-success clearfix" data-layout="button_count" data-size="large">Share On Facebook</div>
              
        </div>
        <div class="row">
            <div class="sarch-cls">
                <div class="form-group">                                        
                    <label for="">Search My Workout By:</label>
                  <select @change="onChange($event)" class="form-control" v-model="key">
                      <option value="walking">Walking</option>
                      <option value="running">Running</option>
                      <option value="cycling">Cycling</option>
                      <option value="rower">Rower</option>
                      <option value="stairstepper">Stair Stepper</option>
                      <option value="hiking">Hiking</option>
                      <option value="yoga">Yoga</option>
                      <option value="swimming">Swimming</option>
                      <option value="wheelchair">WheelChair</option>
                    </select>
                </div>
            </div>
            <div>
                <table class="table">
                <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Start Date</th>
                      <th scope="col">Last Date</th>
                      <th scope="col">Duration(MM:SS)</th>
                      <th scope="col">Weight</th>
                      <th scope="col">Repeats</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item,index) in historyData2">
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
                            <input type="time" class="form-control" v-model="workout.duration"
                                placeholder="Duration" autofocus required>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control " v-model="workout.weight" placeholder="Weight"
                                required autocomplete="off">
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control " v-model="workout.repeats" placeholder="Repeats"
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
                    <div >
                        <table class="table">
                        <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Start Date</th>
                              <th scope="col">Last Date</th>
                              <th scope="col">Duration(MM:SS)</th>
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
        name: 'workouts-running',
        data() {
          return {    
            key: "",  
            historyData:[],
            historyData2:[],   
            workout: {
              workout_type: 'running',
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
            document.getElementById('shareBtn').onclick = function() {
              FB.ui({
                method: 'share',
                display: 'popup',
                layout:"button_count",
                href: 'https://hanif-test.herokuapp.com/',
              }, function(response){});
            }
        },
        methods: {
          clearWorkout() {
            this.workout.start_date = ''
            this.workout.last_date = ''
            this.workout.duration = ''
            this.workout.weight = ''
            this.workout.repeats = ''
            window.$('#date1').val('')
            window.$('#date2').val('')
          },
          onChange(event) {
            // console.log(event.target.value)
            this.getHisory(this.key, 'onChange')
          },
          getHisory(type, from='history'){
            console.log('workout_type', type, from)
          var self = this;
          Vue.http.get('workouts', {params: {
            user_id: this.userData.id,
            workout_type: type
          }})
          .then((data) => {
            if (from==='onChange') {
              self.historyData2 = data.body.workouts;
            } else {
              self.historyData = data.body.workouts;
            }
          })
          .catch((err) => {
            // do stuff
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
                self.clearWorkout()
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

      .sarch-cls {
        padding: 30px;
      }
        .workout-img{
          align-content: left;
          height: 200px;
          width: 250px;
          
          display: inline-block
        }
      
      </style>
      