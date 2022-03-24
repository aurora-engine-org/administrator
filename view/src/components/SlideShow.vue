<template>
  <div class="slide">

    <div class="slide-left-box">
      <div class="left-img-box">
        <div class="left-img">
          <img class="limg" :src="require('../../public/imgs/'+this.pictures[leftIndex])" @click="checkLeft">
        </div>
      </div>
    </div>

    <div class="slide-center-box">
      <div :class="center-img-box">
        <div class="center-img">
          <transition name="center">
            <img class="cimg" :src="require('../../public/imgs/'+this.pictures[centerIndex])">
          </transition>
        </div>
      </div>
    </div>

    <div class="slide-right-box">
      <div class="right-img-box">
        <div class="right-img">
          <img class="rimg" :src="require('../../public/imgs/'+this.pictures[rightIndex])" @click="checkRight">
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
      left:0,
      center:1,
      right:2,
    }
  },
  methods:{
    checkLeft(){
      console.log("l:",this.left,"c:",this.center,"r:",this.right)
      if (this.left-1<0){
        this.left=this.pictures.length-1
      }else {
        this.left--
      }

      if (this.center-1<0){
        this.center=this.pictures.length-1   /// ???? 这个left 干啥的emmm
      }else {
        this.center--
      }

      if (this.right-1<0){
        this.right=this.pictures.length-1
      }else {
        this.right--
      }
      console.log("l:",this.left,"c:",this.center,"r:",this.right)
    },
    checkRight(){
      console.log("l:",this.left,"c:",this.center,"r:",this.right)
      if (this.left+1>this.pictures.length-1){
        this.left=0
      }else {
        this.left++
      }

      if (this.center+1>this.pictures.length-1){
        this.center=0
      }else {
        this.center++
      }

      if (this.right+1>this.pictures.length-1){
        this.right=0
      }else {
        this.right++
      }
      console.log("l:",this.left,"c:",this.center,"r:",this.right)
    }
  },
  computed:{
    leftIndex(){
      return this.left
    },
    centerIndex(){
      return this.center
    },
    rightIndex(){
      return this.right
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




