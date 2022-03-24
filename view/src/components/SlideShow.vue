<template>
  <div class="slide">
    <div class="slide-left-box">
      <div class="left-img-box">
        <div class="left-img">
          <img class="limg" src="../../public/imgs/1.webp">
        </div>
      </div>
    </div>
    <div class="slide-center-box">
      <div :class="center-img-box" @click="check">
        <div class="center-img">
          <transition name="center">
            <img class="cimg" :src="require('../../public/imgs/'+this.pictures[checkIndex])">
          </transition>
        </div>
      </div>
    </div>
    <div class="slide-right-box">
      <div class="right-img-box">
        <div class="right-img">
          <img class="rimg" src="../../public/imgs/3.webp">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideShow",
  props:['pictures'],
  data(){
    return{
      index:0
    }
  },
  methods:{
    check(){
      if (this.index<this.pictures.length){
        this.index++
      }else {
        this.index=0
      }
    }
  },
  computed:{
    checkIndex(){
      console.log(this.index)
      return this.index
    }
  }
}
</script>

<style scoped>
.slide{
  width: 1000px;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

/*整体最外层大小一致，让里面的div垂直居中*/
.slide-center-box,.slide-left-box,.slide-right-box{
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/*左右两侧图片盒子高度略低于中间*/
.left-img-box,.right-img-box{
  width: 300px;
  height: 250px;
  overflow: hidden;
}

/*图片样式*/
.cimg{
  width: 400px;
  height: 300px;
}
.limg,.rimg{
  width: 400px;
  height: 300px;
  opacity: 0.3;
}

/*切换动画特效*/

/*中间切换过度效果*/

/*两端切换过度效果*/


</style>




