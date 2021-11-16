<template>
  <div class="home">
    <reo-file-selector
      :ref="'selector'"
      :selected-files="files"
      @update="update">
      <reo-button slot="trigger" @click="$refs.selector.open()">Select Files</reo-button>
    </reo-file-selector>
    <div v-if="files.length" class="files-list">
      <p>Files selected</p>
      <p v-for="i in files" :key="i.id">{{ i.name }}</p>
    </div>
  </div>
</template>

<script>
import ReoFileSelector from '@/components/ReoFileSelector'
import ReoButton from '@/components/ReoButton'

export default {
  name: 'Home',
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
.home {
  height: 100%;
  width: 100%;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.files-list {
  margin-top: 30px;

  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
    margin-top: 0;
    width: 350px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:first-child {
      font-weight: 500;
    }

    &:not(:last-child) {
      margin-bottom: 13px;
    }
  }
}
</style>
