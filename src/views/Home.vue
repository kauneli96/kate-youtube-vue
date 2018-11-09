<template>
  <div class="home">
    <h1>Kate's YouTube FrontEnd</h1>
    <div class="container">
      <SearchBar/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: 'home',
  components: {
    SearchBar
  }
}
</script>
