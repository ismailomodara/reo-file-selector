<template>
  <div class="selector">
    <slot name="trigger" />
    <div v-if="open" class="reo-selector">
      <div class="reo-selector__header">
        <span @click="back">Back</span>
        <h3>Title</h3>
        <span @click="close">X</span>
      </div>
      <reo-file-selector-list
        :folders="currentFolder.folders"
        :files="currentFolder.files"
        :selected="selected"
        @navigate="setCurrentFolder"
        @select="setSelectedFile" />
      <div class="reo-selector__footer">
        <button>Select X files</button>
      </div>
    </div>
  </div>
</template>

<script>
import mock from '@/components/mock'
import ReoFileSelectorList from '@/components/ReoFileSelectorList'

export default {
  name: 'ReoFileSelector',
  components: { ReoFileSelectorList },
  data () {
    return {
      open: false,
      data: [],
      selected: []
    }
  },
  computed: {
    currentFolder () {
      const { folders, files } = mock
      const dataLength = this.data.length

      if (dataLength) {
        return {
          folders: this.data[dataLength - 1].folders,
          files: this.data[dataLength - 1].files
        }
      }

      return {
        folders,
        files
      }
    }
  },
  methods: {
    trigger () {
      this.open = true
    },
    close () {
      this.open = false
    },
    setCurrentFolder (folder) {
      this.data.push(folder)
    },
    setSelectedFile (file) {
      this.selected.push(file)
    },
    back () {
      this.data.pop()
    }
  }
}
</script>

<style>
.selector {
  position: relative;
  text-align: left;
}

.reo-selector {
  padding: 16px;
  width: 420px;
  height: 380px;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  position: absolute;
  top: 0;
  left: 0;
}

.reo-selector__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.reo-selector__footer {
  height: 64px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
