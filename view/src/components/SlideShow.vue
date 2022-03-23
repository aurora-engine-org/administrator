<template>
  <div class="slide-show">
    <div>

    </div>
      <div class="slide" v-for="item in pictures" :key="item">
        {{item}}
      </div>
    <div>

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
.slide{
  width: 400px;
  height: 200px;
  background-color: #dbd5d5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-left: 5px;
}

.slide-left{

}
.slide-right{

}
</style>