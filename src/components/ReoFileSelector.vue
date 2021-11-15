<template>
  <div class="selector">
    <slot name="trigger" />
    <transition name="fade" mode="out-in">
      <div v-if="open" class="reo-selector">
        <div class="reo-selector__header">
          <div class="reo-selector__header--navigator">
          <span
            v-if="data.length"
            class="action"
            @click="back">
           <img :src="getImage('arrow-left.svg')" alt="<" />
          </span>
            <p
              :style="{ marginLeft: data.length ? '' : '12px' }">
              {{ currentFolder.title }}</p>
          </div>
          <span
            class="action"
            @click="close">
          <img :src="getImage('close.svg')" alt="X" />
        </span>
        </div>
        <reo-file-selector-list
          :folders="currentFolder.folders"
          :files="currentFolder.files"
          :selected="selected"
          @navigate="setCurrentFolder"
          @select="setSelectedFile" />
        <div class="reo-selector__footer">
          <reo-button type="disabled">Select X Files</reo-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import mock from '@/components/mock'
import ReoFileSelectorList from '@/components/ReoFileSelectorList'
import ReoButton from '@/components/ReoButton'

export default {
  name: 'ReoFileSelector',
  components: { ReoButton, ReoFileSelectorList },
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
        const data = this.data[dataLength - 1]
        return {
          title: data.name,
          folders: data.folders,
          files: data.files
        }
      }

      return {
        title: 'Account Name',
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

<style lang="scss">
.selector {
  position: relative;
  text-align: left;
}

.reo-selector {
  padding: 8px;
  width: 420px;
  height: 380px;
  background: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  position: absolute;
  top: 0;
  left: 0;

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;

    &--navigator {
      display: flex;
      align-items: center;

      span {
        margin-right: 4px;
      }
    }

    span {
      padding: 8px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background: transparent;
      transition: background 0.3s ease-in;

      img {
        height: 20px;
        width: auto;
      }

      &:hover {
        background: rgba(0, 0, 0, 0.04);
        transition: background 0.25s ease-in;
      }
    }

    p {
      font-family: 'Calibre', sans-serif;
      font-size: 20px;
      line-height: 24px;
      font-weight: 500;
      color: #262626;
      margin: 5px 0 0 4px;
    }
  }

  &__footer {
    height: 64px;
    padding: 8px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}
</style>
