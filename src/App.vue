<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
import Home from '@/views'

export default {
	name: 'App',
	components: { Home }
}
</script>

<style lang="scss">
#app {
  padding: 40px;
  height: 100vh;
  width: 100vw;
}
</style>
