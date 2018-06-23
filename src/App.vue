<template>
<div id="app">
  <v-app id="inspire" dark>
    <toolbar></toolbar>
  </v-app>
</div>
</template>

<script>
import Toolbar from '@/components/Toolbar'
export default {
  name: 'App',
  components: {
    'toolbar': Toolbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
