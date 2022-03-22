<template>
  <div class="window-label">
    <div>
      {{title}}
    </div>
    <div class="close-icon">
      <img src="../../public/ui/close.png" alt="close">
    </div>
  </div>
</template>

<script>
export default {
  name: "WindowLabel",
  props:['title','name'],
  methods:{

  },
}
</script>

<style scoped>
.window-label{
  background-color: #907fff;
  user-select: none;
  display: flex;
  flex-direction: row;
  padding-left: 5px;
  margin-left: 2px;
}
.window-label>div{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.window-label>div>img{
  width: 20px;
  height: 20px;
}
.window-label>div>img:hover{
  background-color: dimgray;
}
.close-icon{
  border-radius: 1px;
}
</style>