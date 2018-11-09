<template>
  <div>
      <h1>{{title}}</h1>
      <iframe 
      width="560" 
      height="315" 
      :src="'https://www.youtube.com/embed/'+id" 
      frameborder="0" 
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
      </iframe>
      <p class="lead">{{descr}}</p>
  </div>
</template>

<script>
export default {
  name: 'VideoDetail',
  props: {
      title:String,
      descr:String,
      id:String
  },
  created:function() {
      axios.get
  }
}
</script>

