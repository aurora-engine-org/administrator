<template>
 <div class="main">
   <TreeMenu @close-all="close($event)" :menus="menus"></TreeMenu>
 </div>
</template>

<script>
import TreeMenu from "@/components/TreeMenu";

export default {
  name: "MainComponent",
  components:{
    TreeMenu
  },
  data(){
    return{
      menus:[
        {
          title:"1",
          isOpen:false,
          child:[
            {
              title:"1-1",
              isOpen:false,
              child:[
                {
                  title:"1-1-1",
                  isOpen:false,
                  child:[]
                },
              ]
            }
          ]
        },
        {
          title:"2",
          isOpen:false,
          child:[
            {
              title:"2-1",
              isOpen:false,
              child:[]
            },
            {
              title:"2-2",
              isOpen:false,
              child:[]
            },
            {
              title:"2-3",
              isOpen:false,
              child:[]
            }
          ]
        },
        {
          title:"3",
          isOpen:false,
          child:[
            {
              title:"3-1",
              isOpen:false,
              child:[]
            }
          ]
        },
      ]
    }
  },
  methods:{
    close(e){
      console.log(this.menus[e])
      if (this.menus[e].isOpen==false){
        this.closeIndex(this.menus[e])
      }
    },
    closeIndex(data){
      data.isOpen=false
      if (data.child.length>0){
        for (var i=0;i<data.child.length;i++){
          this.closeIndex(data.child[i])
        }
      }
    }
  },
}
</script>

<style scoped>
.main{
  height: 90vh;
}
</style>