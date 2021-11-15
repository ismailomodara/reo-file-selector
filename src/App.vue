<template>
  <div id="app">
    <reo-file-selector ref="selector">
      <reo-button slot="trigger" @click="$refs.selector.trigger()">Select Files</reo-button>
    </reo-file-selector>
  </div>
</template>

<script>

import ReoFileSelector from '@/components/ReoFileSelector'
import ReoButton from '@/components/ReoButton'

export default {
  name: 'App',
  components: { ReoButton, ReoFileSelector }
}
</script>

<style>
#app {
  padding: 40px;
  height: 100vh;
  width: 100vw;
}
</style>
