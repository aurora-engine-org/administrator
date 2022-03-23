<template>
  <div class="index-page">
    <div class="slide-box">
      <SlideShow :pictures="pictures"></SlideShow>
    </div>
  </div>
</template>

<script>
import SlideShow from "@/components/SlideShow";

export default {
  name: "IndexView",
  components:{
    SlideShow,
  },
  data(){
    return{
      pictures:[
          'https://i0.hdslb.com/bfs/feed-admin/b00f9120d7ca701195d03503566b03b14baf240d.jpg@1200w_300h_1c.webp',
          'https://i0.hdslb.com/bfs/feed-admin/9cb02a15c3d486bb952ecf34544fae873f5d5f36.png@1200w_300h_1c.webp',
          'https://i0.hdslb.com/bfs/feed-admin/25df7b226f64520e52df766a4b203c5b06dfc21d.jpg@1200w_300h_1c.webp',
          'https://i0.hdslb.com/bfs/feed-admin/e7d4dcd6aa3ead0a1be7546eb3bff75058323da7.jpg@1200w_300h_1c.webp',
          'https://i0.hdslb.com/bfs/feed-admin/b15a2dbff3a4cbc59c481e5d539c027304f91908.jpg@1200w_300h_1c.webp'
      ]
    }
  },
}
</script>

<style scoped>
  .index-page{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
</style>