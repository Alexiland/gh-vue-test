<template>
  <div>
    <el-menu
      :default-active="'/index'"
      router
      mode="horizontal"
      background-color="black"
      text-color="white"
      active-text-color="grey"
      style="min-width: 1300px">
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        {{ item.navItem }}
      </el-menu-item>
<!--      <a href="#nowhere" style="color: #222;float: right;padding: 20px;">More</a>-->
<!--      <i class="el-icon-menu" style="float:right;font-size: 45px;color: #222;padding-top: 8px"></i>-->
      <span style="position: absolute;padding-top: 10px;right: 40%;font-size: 36px;font-weight: lighter;color: white">Welcome to Alexiland</span>
    </el-menu>
  </div>

</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      navList: [
        {name: '/index', navItem: 'Main'},
        {name: '/alex', navItem: 'About me'},
        {name: '/library', navItem: 'Library'},
        {name: '/admin', navItem: 'User Center'},
        {name: '/contactme', navItem: 'Contact me'},
        {name: '/playground', navItem: 'Playground'}
      ]
    }
  }
}
</script>

<style scoped>
  a{
    text-decoration: none;
  }

  span {
    pointer-events: none;
  }
</style>
