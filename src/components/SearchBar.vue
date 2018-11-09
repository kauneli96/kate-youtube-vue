<template>
  <div>
    <b-form @submit="onSubmit"  >
      <b-form-group  description="Введите название и нажмите на Искать">
        <b-form-input 
                      v-model="form.text"
                      required
                      placeholder="Например, котики">
        </b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Искать</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    msg: String
  },
  data: function() {
    return {
      form:{
         text:'',
      }
    }
  },
  methods: {
    onSubmit:function() {
      this.$router.push({ name: 'list', params: { query: this.form.text }})
    },
  },
  created:function() {
    if (this.$route.params.query)
      this.form.text = this.$route.params.query;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
