<template>
    <div class="header">
      <div class="header-box">
<!--   账号头像     -->
        <div class="account-box">
          <div class="head-img-box">
            <img class="head-img" src="../../public/ui/account-fill.png" alt="account">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

<style scoped>
.header{
  height: 50px;
  background-color: black;
  display: flex;
  flex-direction: row-reverse;
}
.header-box{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.account-box{
  display: flex;
  flex-direction: row-reverse;
}
.head-img-box{
  width: 45px;
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.head-img{
  width: 45px;
  height: 45px;
}
</style>