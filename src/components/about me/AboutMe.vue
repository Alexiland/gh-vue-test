<template>
  <div>
    <body id="poster">
    </body>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  data () {
    return {
      count: 10
    }
  }
  // methods: {
  //   load () {
  //     this.count = 3
  //   }
  // }
}
</script>

<style scoped>
  *{margin: 0; padding: 0;}
  #poster {
    background: url("../../assets/background.jpg") no-repeat top;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  body{
    margin: 0px;
  }
</style>
