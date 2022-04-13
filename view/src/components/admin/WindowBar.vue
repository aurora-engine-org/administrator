<template>
  <div class="window-bar">
<!--  窗口标签  -->
    <WindowLabel :class="resultNum===index?'active':'window-label'" @delete-index="deleteIndex($event)" @switch-to="switchTo($event)"  v-for="(label,index) in windowLabel" :key="label" :title="label.title" :index="index"></WindowLabel>
  </div>
</template>

<script>
import WindowLabel from "@/components/admin/WindowLabel";

export default {
  name: "WindowBar",
  components:{
    WindowLabel,
  },
  data(){
    return{
      windowLabel:[],
      num:0
    }
  },
  methods:{
    //切换系统面板 $event 需要切换的label下标
    switchTo($event){
      //更新选中标签高亮
      this.num=$event
      this.$router.push("/admin/"+this.windowLabel[$event].path)
    },

    //$event 需要删除的label下标
    deleteIndex($event){
      //删除一个标签，默认切换后一个标签
      this.windowLabel.splice($event,1)
      if ($event<this.windowLabel.length){
        //更新选中标签高亮
        this.num=$event
        this.$router.push("/admin/"+this.windowLabel[$event].path)
      }
      //当剩余2个标签 被关闭后面一个时候
      if (this.windowLabel.length===1){
        this.num=0
        this.$router.push("/admin/"+this.windowLabel[0].path)
      }

      //删除最后一个标签 默认显示 admin home
      if (this.windowLabel.length===0){
        //关闭完所有打开窗口 默认回到 admin 的 home页面
        this.num=-1
        this.$router.push("/admin/home")
      }
    },
    addWindowLabel(item){
      let flag=true //防止重复添加 窗口标签
      if (this.windowLabel.length===0){
        this.windowLabel.push(item)
        //更新选中标签高亮
        this.num=this.windowLabel.length-1
      }
      for (let i=0;i<this.windowLabel.length;i++){
        if (item===this.windowLabel[i]){
          //更新选中标签高亮
          this.num=i
          flag=false
        }
      }
      if (flag){
        this.windowLabel.push(item)
        //更新选中标签高亮
        this.num=this.windowLabel.length-1
      }
    }
  },
  mounted() {
    this.$bus.on('addwindow',item=>{
      this.addWindowLabel(item)
    })
    this.$bus.on('open-home',key=>{
      this.num=key
    })
  },
  computed:{
    resultNum(){
      //属性计算返回被选中的标签序号
      return this.num
    }
  }
}
</script>

<style scoped>
  .window-bar{
    display: flex;
    flex-direction: row;
    /*标签过多折叠换行*/
    flex-wrap: wrap;
  }
</style>