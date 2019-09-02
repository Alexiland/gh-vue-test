<template>
  <div id="app" class="app">
    <section id="poster">
      <page :currentPage="currentPage">
        <h1 class="text-center">Welcome to Alexiland!</h1>
        <section class="animate" ref="section1">
          <p class="demo-intro">This is a personal website which is intended for me to practice what I have learnt in the past.</p>
          <p class="demo-intro">Feel free to wander around in this website!</p>
        </section>
      </page>
      <page :currentPage="currentPage">
        <h1 class="text-center">Who am I</h1>
        <section class="animate move-left">
          <p class="text-center">I'm a CS student at Rice University, Class 2022</p>
          <p class="text-center">I want to go deeper in CS area, explore my interest and push my effort forward</p>
        </section>
      </page>
<!--      <page :currentPage="currentPage">-->
<!--        <h1 class="text-center">方法说明</h1>-->
<!--        <section class="animate move-left">-->
<!--          <p>在每个options的对象中，可以设置两种方法：beforeLeave 和 afterEnter</p>-->
<!--          <ul>-->
<!--            <li>beforeLeave 方法表示在离开当前页面前所做的操作</li>-->
<!--            <li>afterEnter 方法表示在进入当前页面后所做的操作</li>-->
<!--          </ul>-->
<!--          <p>这两个方法都有一个默认参数，该参数为当前Page的vue组件实例，方法的this为App.vue的组件实例</p>-->
<!--        </section>-->
<!--      </page>-->
<!--      <page :currentPage="currentPage">-->
<!--        <h1 class="text-center">Author information</h1>-->
<!--        <section class="animate move-left">-->
<!--          <img class="avatar" src="../../assets/avatar.jpg" alt="头像">-->
<!--          <div class="author-info">-->
<!--            <p>Alias：Alexiland</p>-->
<!--            <p>Rice University</p>-->
<!--            <p>My Github：-->
<!--              <a href="https://github.com/Alexiland" target="_blank">https://github.com/Alexiland</a>-->
<!--            </p>-->
<!--          </div>-->
<!--        </section>-->
<!--      </page>-->
      <page-controller :pageNum="pageNum" :currentPage="currentPage" @changePage="changePage" :option="controllerOption"></page-controller>

<!--      <h1 class="big">About</h1>-->
<!--      <h2 class="mb-4">About Me</h2>-->
<!--      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>-->
<!--      <ul class="about-info mt-4 px-md-0 px-2">-->
<!--        <li class="d-flex"><span>Name:</span> <span>Clark Thompson</span></li>-->
<!--        <li class="d-flex"><span>Date of birth:</span> <span>January 01, 1987</span></li>-->
<!--        <li class="d-flex"><span>Address:</span> <span>San Francisco CA 97987 USA</span></li>-->
<!--        <li class="d-flex"><span>Zip code:</span> <span>1000</span></li>-->
<!--        <li class="d-flex"><span>Email:</span> <span>clarkthomp@gmail.com</span></li>-->
<!--        <li class="d-flex"><span>Phone: </span> <span>+1-2234-5678-9-0</span></li>-->
<!--      </ul>-->

    </section>
  </div>

</template>

<script>
import Page from '../../components/Sample/Page.vue'
import PageController from '../../components/Sample/PageController.vue'

// 页面进出动画
function afterEnterAnimate ($child) {
  $child.$el.querySelector('.animate').classList.remove('move-left', 'move-right')
}
function beforeLeaveAnimate ($child) {
  let moveType = Math.random() > 0.5 ? 'move-left' : 'move-right'
  $child.$el.querySelector('.animate').classList.add(moveType)
}

export default {
  name: 'AppIndex',
  data () {
    return {
      currentPage: 1,
      options: [{
        // the color of background
        background: 'rgba(0, 0, 0, 1)',
        // the color of text
        color: '#fff',
        // is content center
        isCenter: true,
        // the function before page show
        afterEnter: afterEnterAnimate,
        // the function after page show
        beforeLeave: beforeLeaveAnimate
      },
      {
        background: 'rgba(0, 0, 0, 1)',
        color: '#fff',
        isCenter: true,
        afterEnter: afterEnterAnimate,
        beforeLeave: beforeLeaveAnimate
      },
      {
        background: 'rgba(0, 0, 0, 1)',
        color: '#fff',
        isCenter: true,
        afterEnter: afterEnterAnimate,
        beforeLeave: beforeLeaveAnimate
      }],
      controllerOption: {
        arrowsType: false,
        navbar: true,
        highlight: true,
        loop: false
      }
    }
  },
  computed: {
    // 总page数
    pageNum () {
      return this.options.length
    }
  },
  methods: {
    changePage (index) {
      // beforeLeave Hook
      let beforeIndex = this.currentPage - 1
      let leaveFunction = this.options[beforeIndex].beforeLeave
      typeof leaveFunction === 'function' && leaveFunction.call(this, this.$children[beforeIndex])
      // change page
      this.currentPage = index
      // afterEnter Hook
      let nextIndex = index - 1
      let enterFunction = this.options[nextIndex].afterEnter
      this.$nextTick(function () {
        typeof enterFunction === 'function' && enterFunction.call(this, this.$children[nextIndex])
      })
    }
  },
  components: {
    Page, PageController
  },
  mounted () {
    this.$children.forEach((child, index) => {
      // 动态设置各个page内的options
      if (child.option === null) {
        let childOption = this.options[index]
        this.$set(childOption, 'index', index + 1)
        child.option = childOption
      }
    })
  }
}
</script>

<style>
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
  }
  #poster {
    background: url("../../assets/2880Times1000BlackBanner.png") no-repeat top;
    height: 50%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }

  .app {
    height: 100%;
    width: 100%;
  }

  /* 下面的是与fullPage无关的样式 */

  .animate {
    transition: all 1s ease-out 0s;
  }

  .move-left {
    transform: translateX(-1000%);
  }

  .move-right {
    transform: translateX(1000%);
  }
  .move-up {
    transform: translateY(200%)
  }

  @media screen and (max-width:768px) {
    html,
    body {
      font-size: 12px;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: underline;
  }

  .person-img {
    width: 223px;
    height: 185px;
    float: left;
    background-color: #fff;
    box-shadow: 3px 3px 10px #999;
  }

  .person-img img {
    height: 100%;
    width: 100%;
  }

  .person-basic-info {
    overflow: hidden;
    float: right;
    margin-left: 40px;
  }

  .info-line {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .text-center {
    text-align: center;
  }

  .text-bold {
    font-weight: bold;
  }

  .demo-intro {
    text-indent: 2em;
  }

  dt {
    font-weight: bold;
    font-size: 16px;
  }

  ul {
    padding-left: 1em;
  }

  .avatar {
    margin: 10px auto;
    display: block;
    box-shadow: 1px 1px 5px #666;
  }

  .author-info {
    text-align: center;
  }
</style>
