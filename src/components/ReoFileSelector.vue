<template>
  <div class="selector">
    <slot name="trigger" />
    <transition name="fade" mode="out-in">
      <div v-if="showSelector" class="reo-selector">
        <div class="reo-selector__header">
          <div class="reo-selector__header--navigator">
            <reo-icon
              v-if="!baseFolder"
              :icon="'arrow-left'"
              @click="navigateToFolder('backward')">

            </reo-icon>
            <p>{{ currentFolder.title }}</p>
          </div>
          <reo-icon :icon="'close'" @click="close" />
        </div>
        <reo-file-selector-list
          :folders="currentFolder.folders"
          :files="currentFolder.files"
          :selections.sync="selections"
          @navigate="navigateToFolder($event, 'forward')"
          @select="selectFile">
        </reo-file-selector-list>
        <div class="reo-selector__footer">
          <reo-button
            :disabled="!selections.length"
            @click="addFiles">Select {{ selections.length ? selections.length : '' }} files
          </reo-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import ReoFileSelectorList from '@/components/ReoFileSelectorList'
import ReoButton from '@/components/ReoButton'
import ReoIcon from '@/components/ReoIcon'

export default {
	name: 'ReoFileSelector',
	components: {
    ReoIcon,
	  ReoButton,
    ReoFileSelectorList
  },
	data () {
		return {
		  data: [],
			showSelector: false,
			navigationData: [],
      selections: []
		}
	},
	computed: {
	  baseFolder () {
	    return this.navigationData.length === 0
    },
		currentFolder () {
			const { folders, files } = this.data
			const dataLength = this.navigationData.length

			if (dataLength) {
				const data = this.navigationData[dataLength - 1]
				return {
					title: data.name,
					folders: data.folders,
					files: data.files.filter(file => this.getSupportedFileFormat().includes(this.getFileType(file.url)))
				}
			}

			return {
				title: 'Home Folder',
				folders,
				files
			}
		}
	},
  watch: {
    showSelector() {
      if(this.showSelector) {
        this.getData()
      }
    }
  },
  methods: {
    async getData () {
      const API_URL = 'https://api-dev.reo.so/api/folderStructure'
      const dataResponse = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      if (dataResponse.status === 200) {
        this.data = await dataResponse.json()
      }
    },
		open () {
			this.showSelector = true
		},
		close () {
      /**
       * Close the Selector, Reset folder navigations and clear all selections
       */
			this.showSelector = false
      this.navigationData = []
      this.selections = []
		},
    navigateToFolder (folder, action) {
			action === 'forward' ? this.navigationData.push(folder) : this.navigationData.pop()
		},
    selectFile (file) {
			this.selections.push(file)
		},
		addFiles () {
			const files = this.selections
			if (files.length) {
				this.$emit('update', files)
        this.close()
			}
		}
	}
}
</script>

<style lang="scss">
.selector {
  position: relative;
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

        + p {
          margin-left: 0;
        }
      }
    }

    p {
      font-family: 'Calibre', sans-serif;
      font-size: 20px;
      line-height: 24px;
      font-weight: 500;
      color: #262626;
      margin: 5px 0 0 12px;
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

@media (max-width: 600px) {
  .selector {
    width: 100%;
    text-align: center;

    .reo-selector {
      top: 10%;
      left: 50%;
      transform: translateX(-50%);
      width: 96%;
    }
  }
}
</style>
