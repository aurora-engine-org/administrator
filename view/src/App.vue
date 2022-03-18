<template>
  <MenuNav :menus="menus">

  </MenuNav>
</template>

<script>
import MenuNav from "@/components/MenuNav";

export default {
  name: 'App',
  components: {
    MenuNav,
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
              child:[]
            }
          ]
        },
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
