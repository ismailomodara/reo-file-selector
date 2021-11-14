<template>
  <div id="app">
    <reo-file-selector ref="selector">
      <button slot="trigger" @click="$refs.selector.trigger()">Select Files</button>
    </reo-file-selector>
  </div>
</template>

<script>

import ReoFileSelector from '@/components/ReoFileSelector'

export default {
  name: 'App',
  components: { ReoFileSelector }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 40px;
  height: 100vh;
  width: 100vw;
}
</style>
