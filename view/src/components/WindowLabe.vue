<template>
  <div class="window-labe">
    <div>
      labe
    </div>

  </div>
</template>

<script>
export default {
  name: "WindowLabe",
  props:['title','name'],
  methods:{

  },
}
</script>

<style scoped>
.window-labe{
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