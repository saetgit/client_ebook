<template>
<div>
  <head>
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
    />
  </head>  
  <div class="container">
    <div class="row mt-5">
      <div class="col-lg-3">
        <Sidebar />
      </div>
      <div class="col-lg-9 main-panl-right">
        <nuxt />
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Sidebar from "../components/Panel/Sidebar.vue";
export default {
  components: {
    Sidebar
  }
};
</script>