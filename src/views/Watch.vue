<template>
  <div class="about">
    <router-link to="/">Главная</router-link>
    <h1>Video:</h1>
    <div class="container">
    <VideoDetail
        v-bind:title="information.snippet.title"
        v-bind:descr="information.snippet.description"
        v-bind:id="information.id"
        />
      </div>
  </div>
</template>

<script>
import VideoDetail from '@/components/VideoDetail.vue'
export default {
  name: 'Watch',
  components:{
      VideoDetail
  },
  data:function(){
    return {
      information:{}
    }
  },
  created:function() {
    this.axios.get('/videos', {
          params: {
              part:'snippet,contentDetails,statistics',
              id:this.$route.params.query,
              key:'AIzaSyAuapSmMFyAPJy7QTa-iGmu5ZaPiDjoTSw'
            }
          }).then((res)=>{
            console.log(res.data.items[0]);
              this.information = res.data.items[0];
          })

  }
}

</script>
