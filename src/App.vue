<template>
  <div id="app">
    <reo-file-selector
      :ref="'selector'"
      :selected-files="files"
      @update="update">
      <reo-button slot="trigger" @click="$refs.selector.open()">Select Files</reo-button>
    </reo-file-selector>
    <div v-if="files.length" class="files">
      <p class="title">Files selected</p>
      <p v-for="i in files" :key="i.id">{{ i.name }}</p>
    </div>
  </div>
</template>

<script>

import ReoFileSelector from '@/components/ReoFileSelector'
import ReoButton from '@/components/ReoButton'

export default {
	name: 'App',
	components: { ReoButton, ReoFileSelector },
	data () {
		return {
			files: []
		}
	},
	methods: {
		update (files) {
			this.files = files
		}
	}
}
</script>

<style lang="scss">
#app {
  padding: 40px;
  height: 100vh;
  width: 100vw;
}

.files {
  margin-top: 30px;

  p {
    font-size: 18px;
    font-weight: 400;
    margin-top: 0;
    line-height: 1.4;
    width: 350px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:not(:last-child) {
      margin-bottom: 13px;
    }
  }

  .title {
    font-weight: 500;
  }
}
</style>
