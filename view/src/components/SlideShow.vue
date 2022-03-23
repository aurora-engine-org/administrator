<template>
  <div class="slide-show">
    <div class="slide-left">
     <img class="slide-left-img" src="../../public/imgs/1.webp">
    </div>
    <div class="slide">
      <img class="slide-img" src="../../public/imgs/2.webp">
    </div>
    <div class="slide-right">
      <img class="slide-right-img" src="../../public/imgs/3.webp">
    </div>
  </div>
</template>

<script>
export default {
  name: "SlideShow",
  props:['pictures'],
}
</script>

<style scoped>

.slide-show{
  display: flex;
  flex-direction: row;
}

.slide-left-img{
  width: 500px;
  height:200px;
  opacity: 0.5;
}

.slide-img{
  width: 500px;
  height:250px;
}

.slide-right-img{
  width: 500px;
  height:200px;
  opacity: 0.5;
}

.slide-left{
  width: 300px;
  height:250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;

}
.slide{
  width: 500px;
  height:250px;
  display: flex;
  flex-direction: column;
  justify-content: center;

}
.slide-right{
  width: 300px;
  height:250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

</style>