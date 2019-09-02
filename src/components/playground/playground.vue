<template>
    <div id="playground">
      <section id="carousel">
        <el-carousel :interval="5000" arrow="always" height="720px">
          <el-carousel-item v-for="(img,index) in imgList" :key="index">
            <img v-bind:src="img.url">
          </el-carousel-item>
        </el-carousel>
      </section>
      <section id="carousel2">
        <el-carousel :interval="5000" arrow="always" height="720px">
          <el-carousel-item v-for="(img,index) in imgList" :key="index">
            <img v-bind:src="img.url">
          </el-carousel-item>
        </el-carousel>
      </section>
    </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/index.css'

export default {
  name: 'playground',
  data () {
    return {
      imgList: [
        {url: require('../../assets/1.jpeg')},
        {url: require('../../assets/2.jpg')},
        {url: require('../../assets/3.jpg')}
      ]
    }
  }
}
</script>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  img {
    display: inline-block;
    height: auto;
    max-width: 100%;
  }

</style>
