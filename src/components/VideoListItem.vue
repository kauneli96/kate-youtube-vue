<template>
  <div>
      <b-card  
            v-bind:title=title
            v-bind:img-src=img
            img-alt="Image"
            img-top
            tag="article"
            class="text-center"
            style="max-width:350px">
                <p class="card-text">
                    {{ descr }}
                </p>
                <router-link :to="{ name: 'watch', params: { query: id }}" >
                    <a href="#" class="btn btn-dark">Смотреть</a>
                </router-link>
            </b-card>
  </div>
</template>

<script>
export default {
  name: 'VideoListItem',
  props: {
      title:String,
      img:String,
      descr:String,
      id:String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
