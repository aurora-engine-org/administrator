<template>
  <div class="window-label">
    <div>
      {{title}}
    </div>
  </div>
</template>

<script>
export default {
  name: "WindowLabel",
  props:['title','name'],
  methods:{

  },
}
</script>

<style scoped>
.window-label{
  width: 100px;
  height: 40px;
  background-color: #907fff;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 5px;
}
</style>