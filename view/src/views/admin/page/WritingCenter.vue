<template>
  <div class="writing-center">
      <div class="article-nav">
        <div class="nav-opting">
          已发布(0)
        </div>
        <div class="nav-opting">
          进行中(0)
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "WritingCenter"
}
</script>

<style scoped>

.writing-center{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.article-nav{
  height: 40px;
  display: flex;
  flex-direction: row;
  background-color: #42b983;
}

.nav-opting{
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.nav-opting:hover{
  background-color: #dbd5d5;
}

</style>