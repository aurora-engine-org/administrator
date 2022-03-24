<template>
  <div class="index-page">
    <div class="slide-box">
      <SlideShow :pictures="pictures"></SlideShow>
    </div>

  </div>
</template>

<script>
import SlideShow from "@/components/SlideShow";

export default {
  name: "IndexView",
  components:{
    SlideShow,
  },
  data(){
    return{
      pictures:[
        '1.webp',
        '2.webp',
        '3.webp',
        '4.webp',
        '5.webp',
      ]
    }
  },
}
</script>

<style scoped>
  .index-page{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
  .slide-box{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
</style>