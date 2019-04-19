<template>
  <div>
    <div class="row ">
      <form class="form-inline">
        <div class="form-group">
            <div class="input-group">
                <span class="input-group-addon">Status:</span>
                <input class="form-control" type="textaria" placeholder="Write your status...">
              </div>
          </div>
      
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Post</button>
      </form>
  </div>
</div>
</template>

<script>

export default {
  name: 'home-view',
  data() {
    return {      
      key: '',
    };
  },
  created() {
  },
  mounted() {
  },
  methods: {
  }
};

</script>
<style>

</style>
