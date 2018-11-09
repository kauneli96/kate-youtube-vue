<template>
  <div>
    <b-card-group deck
                class="mb-3">
        <div v-for="item in items" >
            <VideoListItem 
                v-bind:title=item.snippet.title 
                v-bind:img=item.snippet.thumbnails.default.url
                v-bind:descr=item.snippet.description
                v-bind:id=item.id.videoId />
            <br/>
        </div>
     </b-card-group>
  </div>
</template>

<script>
import VideoListItem from '@/components/VideoListItem.vue'
export default {
  name: 'VideoList',
  components:{
      VideoListItem
  },
  props: {
    query: String
  },
  data: function() {
      return {
          items:{}
      }
  },
  created:function() {
      this.axios.get('/search', {
      params: {
          part:'snippet',
          q:this.$route.params.query,
          type:'video',
          key:'AIzaSyAuapSmMFyAPJy7QTa-iGmu5ZaPiDjoTSw'
        }
      }).then((res)=>{
          console.log(res.data.items);
          console.log(this.items);
          this.items = res.data.items;
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
