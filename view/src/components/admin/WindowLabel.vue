<template>
  <div class="window-label">
    <div class="label-title" @click="checkLabel(index)">
      <div class="label-icon-box">
        <img src="../../../public/ui/discount.png" class="label-icon">
      </div>
      <div class="label-title-text">
        {{title}}
      </div>
    </div>
    <div class="close-icon">
      <img class="label-close" src="../../../public/ui/close.png" alt="close" @click="closeWindow(index)">
    </div>
  </div>
</template>

<script>
export default {
  name: "WindowLabel",
  props:['title','index'],
  data(){
    return{

    }
  },
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
/*标签默认状态样式*/
.window-label{
  height: 40px;
  background-color: white;
  user-select: none;
  display: flex;
  flex-direction: row;
  margin-left: 2px;
  margin-bottom: 2px;
}
.window-label:hover{
  background-color: #dbd5d5;
}
/*标签活跃状态样式*/
.active{
  height: 40px;
  user-select: none;
  display: flex;
  flex-direction: row;
  margin-left: 2px;
  margin-top: 2px;
  margin-bottom: 2px;
  border-bottom-style: solid;
  border-bottom-width: 5px;
}

.label-icon{
  width: 40px;
  height: 40px;
}

.label-title{
  display: flex;
  flex-direction: row;
}
.label-title-text{
  color: black;
  margin-right: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 25px
}

.label-icon-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 5px;
}

.label-close{
  width: 40px;
  height: 40px;
}

.label-close:hover{
  background-color: rgb(22, 23, 23);
  content: url('../../../public/ui/close-1.png');
}
.close-icon{
  display: flex;
  flex-direction: column;
  justify-content: center;
}


</style>