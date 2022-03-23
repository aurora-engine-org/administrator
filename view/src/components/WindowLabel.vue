<template>
  <div class="window-label">
    <div class="label-title" @click="checkLabel(index)">
      <div class="label-icon-box">
        <img src="../../public/ui/discount.png" class="label-icon">
      </div>
      <div class="label-title-text">
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
.window-label{
  height: 40px;
  background-color: white;
  user-select: none;
  display: flex;
  flex-direction: row;
  margin-left: 2px;
  margin-bottom: 2px;
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
  margin-right: 2px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
}

.label-close:hover{
  background-color: rgb(229, 229, 229);
}
.close-icon{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.active{
  height: 40px;
  user-select: none;
  display: flex;
  flex-direction: row;
  margin-left: 2px;
  margin-top: 2px;
  margin-bottom: 2px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #02AAE1FF;
  color: #02AAE1FF;
}

</style>