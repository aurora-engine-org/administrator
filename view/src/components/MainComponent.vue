<template>
 <div class="main">
    <LeftMenuBar title='Menu' :menus="menus"></LeftMenuBar>
    <WindowViews></WindowViews>
 </div>
</template>

<script>


import LeftMenuBar from "@/components/LeftMenuBar";
import WindowViews from "@/components/WindowViews";

export default {
  name: "MainComponent",
  components:{
    LeftMenuBar,
    WindowViews,
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
              items:[
                'ddd',
                'eee',
                'fff'
              ],
              child:[
                {
                  title:"1-1-1",
                  isOpen:false,
                  items:[
                    'ggg',
                    'hhh',
                    'iii'
                  ],
                  child:[]
                },
              ]
            }
          ]
        },
        {
          title:"2",
          isOpen:false,
          items:[
            'jjj',
            'kkk',
            'lll'
          ],
          child:[
            {
              title:"2-1",
              isOpen:false,
              items:[
                'mmm',
                'nnn',
                'ooo'
              ],
              child:[]
            }
          ]
        },
      ]
    }
  }
}
</script>

<style scoped>
.main{
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: auto;
}
</style>