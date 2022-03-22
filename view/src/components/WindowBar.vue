<template>
  <div class="window-bar">
<!--  窗口标签  -->
    <WindowLabel @delete-index="deleteIndex($event)" @switch-to="switchTo($event)" v-for="(label,index) in windowLabel" :key="label" :title="label" :index="index"></WindowLabel>
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
    switchTo($event){
      this.$router.push("/admin/"+this.windowLabel[$event])
    },
    deleteIndex($event){
      //删除一个标签，默认切换后一个标签
      this.windowLabel.splice($event,1)
      if ($event<this.windowLabel.length){
        this.$router.push("/admin/"+this.windowLabel[$event])
      }else {
        this.$router.push("/admin/"+this.windowLabel[$event-1])
      }
      if (this.windowLabel.length==0){
        //关闭完所有打开窗口 默认回到 admin 的 home页面
        this.$router.push("/admin/home")
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