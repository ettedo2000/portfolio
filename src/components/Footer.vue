<template>
  <footer class="content-section bg-dark text-white text-center">
    <div class="container">
      <div class="row">
        <div class="col-12">
          Odette Simon's Portfolio @ {{ new Date().getFullYear() }} written in <a href="https://vuejs.org/" target="_blank"><img style="height: 15px;" src="../assets/img/vuejs-seeklogo.com.svg"></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
</style>