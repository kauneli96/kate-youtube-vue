<template>
  <div class="about">
    <br/>
    <div class="container">
      <router-link to="/">Назад</router-link>
    <h1>Поиск по запросу {{ $route.params.query }}</h1>
      <VideoList/>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import VideoList from '@/components/VideoList.vue'

export default {
  name: 'List',
  components: {
    SearchBar,VideoList
  },
}
</script>
