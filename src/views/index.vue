<template>
  <div class="home">
    <reo-file-selector :ref="'selector'" @update="update">
      <reo-button slot="trigger" @click="$refs.selector.open()">Select Files</reo-button>
    </reo-file-selector>
    <div v-if="files.length" class="files-list">
      <h3>Files selected</h3>
      <ul>
        <li v-for="i in files" :key="i.id">{{ i.name }}</li>
      </ul>
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
      /**
       * Update the selected files list with new selections and eliminate duplicates
       */
      files.forEach(file => {
        this.files.push(file)
      })
      this.files = [...new Set(this.files)];
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

  h3 {
    font-weight: 500;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      font-size: 18px;
      font-weight: 400;
      line-height: 1.4;
      margin-top: 0;
      width: 350px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      &:not(:last-child) {
        margin-bottom: 13px;
      }
    }
  }
}
</style>
