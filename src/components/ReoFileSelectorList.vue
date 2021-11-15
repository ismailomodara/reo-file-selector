<template>
  <ul class="selector-list">
    <li
      v-for="folder in folders"
      :key="folder.id"
      class="selector-list__item"
       @click="navigate(folder)">
      <span class="image"><img :src="getImage('folder.svg')" alt="D" /> </span>
      <p>{{ folder.name }}</p>
    </li>
    <li
      v-for="file in files"
      :key="file.id"
      class="selector-list__item"
      @click="select(file)">
      <span class="image"><img :src="getImage('folder.svg')" alt="D" /> </span>
      <p>{{ file.name }}</p>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'ReoFileSelectorList',
  props: {
    folders: {
      type: Array,
      default () {
        return []
      }
    },
    files: {
      type: Array,
      default () {
        return []
      }
    },
    selected: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {}
  },
  methods: {
    navigate (data) {
      this.$emit('navigate', data)
    },
    select (data) {
      this.$emit('select', data)
    }
  }
}
</script>

<style lang="scss">
.selector-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  height: 256px;
  overflow-y: scroll;

  &__item {
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    background: transparent;
    transition: background 0.25s ease-in;

    .image {
      height: 28px;
      width: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.04);
      border-radius: 4px;
      margin-right: 12px;
    }

    &:hover {
      background: rgba(0, 0, 0, 0.04);
      transition: background 0.25s ease-in;
    }

    &:active {
      background: rgba(0, 0, 0, 0.08);
      transition: background 0.25s ease-in;
    }
  }
}
</style>
