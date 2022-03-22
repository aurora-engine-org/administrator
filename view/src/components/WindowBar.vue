<template>
  <div class="window-bar">
<!--  窗口标签  -->
    <WindowLabel @delete-index="deleteIndex($event)" v-for="(label,index) in windowLabel" :key="label" :title="label" :index="index"></WindowLabel>
  </div>
</template>

<script>
import WindowLabel from "@/components/WindowLabel";

export default {
  name: "WindowBar",
  components:{
    WindowLabel,
  },
  data(){
    return{
      windowLabel:[]
    }
  },
  methods:{
    deleteIndex($event){
      //删除一个标签
      this.windowLabel.splice($event,1)
      if ($event<this.windowLabel.length){
        this.$router.push("/admin/"+this.windowLabel[$event])
      }
    },
    addWindowLabel(item){
      console.log(item)
      let flag=true
      if (this.windowLabel.length===0){
        this.windowLabel.push(item)
      }
      for (let i=0;i<this.windowLabel.length;i++){
        if (item===this.windowLabel[i]){
          flag=false
        }
      }
      if (flag){
        this.windowLabel.push(item)
      }
      console.log(this.windowLabel)
    }
  },
  mounted() {
    this.$bus.on('addwindow',item=>{
      this.addWindowLabel(item)
    })
  }
}
</script>

<style scoped>
  .window-bar{
    display: flex;
    flex-direction: row;
  }
</style>