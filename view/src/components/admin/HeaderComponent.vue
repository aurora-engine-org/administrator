<template>
    <div class="header">
      <div class="bisection-1">
        <div class="home-page">
          <div class="home-box">
            <div class="home-img-box">
              <img class="home-img" src="../../../public/ui/home.png" alt="home" @click="openHome">
            </div>
          </div>
        </div>
      </div>
      <div class="bisection-2">
        <div class="header-box">
          <!--   账号头像      -->
          <div class="account-box">
            <div class="head-img-box">
              <img class="head-img" src="../../../public/ui/account-fill.png" alt="account" @click="openAdmin">
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  methods:{
    //点击打开管理界面
    openAdmin(){
      this.$router.push("/admin")
    },
    openHome(){
      this.$router.push("/")
    }
  },
}
</script>

<style scoped>
.header{
  height: 50px;
  background-color: black;
  display: flex;
  flex-direction: row;
}
.bisection-1,.bisection-2{
  width: 50vw;
  height: 50px;
}

.bisection-1{
  display: flex;
  flex-direction: row;
}
.bisection-2{
  display: flex;
  flex-direction: row-reverse;
}

.header-box,.home-page{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.home-page{
  margin-left: 2px;
}

.account-box,.home-box{
  display: flex;
}
.head-img-box,.home-img-box{
  width: 45px;
  height: 45px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.head-img,.home-img{
  width: 45px;
  height: 45px;
}

</style>