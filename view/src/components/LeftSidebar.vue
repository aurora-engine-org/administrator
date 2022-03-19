<template>
  <div class="left-sidebar">
    <h1>Menu</h1>
    <TreeMenu @close-all="close" :menus="menus"></TreeMenu>
  </div>
</template>

<script>
import TreeMenu from "@/components/TreeMenu";

export default {
  name: "LeftSidebar",
  components:{
    TreeMenu,
  },
  data(){
    return{
      menus:  [
        {
          title:"1",
          isOpen:false,
          items:[
            'aaa',
            'bbb',
            'ccc'
          ],
          child:[
            {
              title:"1-1",
              isOpen:false,
              child:[
                {
                  title:"1-1-1",
                  isOpen:false,
                  items:[
                    'ddd',
                    'eee',
                    'fff'
                  ],
                  child:[]
                },
              ]
            }
          ]
        },
      ]
    }
  },
  methods: {

    //监听关闭菜单通知
    close(e){
      //判断当前菜单是否打开，如果打开则关闭所有子菜单
      if (this.menus[e].isOpen===false){
        this.closeIndex(this.menus[e])
      }
    },
    //递归关闭子菜单
    closeIndex(data){
      data.isOpen=false
      if (data.child.length>0){
        for (let i=0;i<data.child.length;i++){
          this.closeIndex(data.child[i])
        }
      }
    }

  },
}
</script>

<style scoped>

.left-sidebar{
  width: 10vw;
  background-color: #e3e3e3;
  overflow: auto;
}
</style>