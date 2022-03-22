<template>
  <div class="window-label">
    <div class="label-title" @click="checkLabel(index)">
      {{title}}
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

.label-close{
  margin-right: 2px;
  width: 15px;
  height: 15px;
}
.label-close:hover{
  background-color: dimgray;
}
.close-icon{

}

</style>