<template>
  <div class="window-label">
    <div class="label-title" @click="checkLabel(index)">
      <div class="label-icon-box">
        <img src="../../public/ui/discount.png" class="label-icon">
      </div>
      <div style="color: black; margin-right: 3px;display: flex;flex-direction: column;justify-content: center;text-align: center;font-size: 25px">
        {{title}}
      </div>
    </div>
    <div class="close-icon">
      <img class="label-close" src="../../public/ui/close.png" alt="close" @click="closeWindow(index)">
    </div>
  </div>
</template>

<script>
export default {
  name: "WindowLabel",
  props:['title','index'],
  methods:{
    closeWindow(index){
      //让父组件删除一个下标为 index的标签
      this.$emit('delete-index',index)
    },
    checkLabel(index){
      this.$emit('switch-to',index)
    }
  },
}
</script>

<style scoped>
.window-label{
  height: 40px;
  background-color: #b8b7b7;
  user-select: none;
  display: flex;
  flex-direction: row;
  padding-left: 5px;
  margin-left: 2px;
  margin-top: 2px;
  margin-bottom: 2px;
  border-radius: 5px;
}

.label-icon{
  width: 40px;
  height: 40px;
}

.label-title{
  display: flex;
  flex-direction: row;
}

.label-icon-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 5px;
}

.label-close{
  margin-right: 2px;
  width: 15px;
  height: 15px;
  border-radius: 20px;
}

.label-close:hover{
  background-color: #978f8f;
}
.close-icon{
  display: flex;
  flex-direction: column;
  justify-content: center;
}




</style>