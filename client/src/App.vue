<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  mounted() {
  },
};

// FIXME Please move the css to a seperate CSS File.
// It seems the css written below is not plain css, but LESS or PostCSS
</script>

<style>
body {
  background-color: #f8fbee !important;
}
body::-webkit-scrollbar-thumb {
  background-color: #142c36;
  border-radius: 4px;
}

body::-webkit-scrollbar {
  width: 6px;
  background: #fff;
  border-radius: 4px;
}
body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}
#app {
  font-family: "roboto" !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
.align-center {
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 99;
}
.cursor-pointer {
  cursor: pointer;
}

/* Popover Arrow */
.arrow {
  border-right-color: red !important;
}

/*Margins*/
.m-0 {
  margin: 0px !important;
}
.m-5 {
  margin: 5px;
}
.m-10 {
  margin: 10px;
}
.mt-4 {
  margin-top: 4px;
}
.mt-20 {
  margin-top: 20px;
}
.mt-100 {
  margin-top: 100px;
}
.ml-200 {
  margin-left: 200px;
}
.ml-20 {
  margin-left: 20px;
}
.ml-15 {
  margin-left: 15px;
}
.ml-50 {
  margin-left: 50px;
}
.ml-57 {
  margin-left: 57px;
}
.ml-0 {
  margin-left: 0px;
}
.mr-20 {
  margin-right: 20px;
}

/*Paddings*/
.p-0 {
  padding: 0px !important;
}
.p-5 {
  padding: 5px !important;
}
.p-10 {
  padding: 10px !important;
}
.p-20 {
  padding: 20px !important;
}
.pt-25 {
  padding-top: 25px !important;
}
.pt-50 {
  padding-top: 50px !important;
}
.p-30 {
  padding: 20px !important;
}
.pt-5 {
  padding-top: 5px;
}
.pl-5 {
  padding-left: 5px;
}
.pl-10 {
  padding-left: 10px;
}
.pl-15 {
  padding-left: 15px;
}
.pb-10 {
  padding-bottom: 10px;
}
.pb-15 {
  padding-bottom: 15px;
}
.pb-20 {
  padding-bottom: 20px;
}
.pt-10 {
  padding-top: 10px !important;
}
.pt-15 {
  padding-top: 15px !important;
}
.pt-20 {
  padding-top: 20px !important;
}
.pt-30 {
  padding-top: 30px !important;
}
.pt-40 {
  padding-top: 40px !important;
}
.pb-30 {
  padding-bottom: 30px !important;
}
.pr-5 {
  padding-right: 5px;
}
.pr-20 {
  padding-right: 20px;
}

/*Fonts*/
.fw-bold {
  font-weight: bold;
}
.fs-40 {
  font-size: 40px;
}
.fs-20 {
  font-size: 20px;
}
.fs-14 {
  font-size: 14px;
}
.fs-16 {
  font-size: 16px;
}
.fs-18 {
  font-size: 18px !important;
}
.fs-20 {
  font-size: 20px;
}

/*Borders*/
.b-1 {
  border: 1px solid grey;
}

/*Display*/
.display-block {
  display: block;
}

.app_logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 30px;
  width: 40px;
}
/*Positions*/

.position-relative {
  position: relative;
}

  .font-style {
  margin-bottom: 20px;
  margin-top: 0px;
  text-align: center;
  opacity: 0.5;
  font-weight: 600;
  }
  
.main-content {
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 20px;
}

.center-text {
  text-align: center !important;
}
.center-align {
  padding: 70px 0;
  text-align: center;
}
</style>