<template>
  <ul>
    <li v-for="folder in folders" :key="folder.id" @click="navigate(folder)">{{ folder.name }}</li>
    <li v-for="file in files" :key="file.id" @click="select(file)">{{ file.name }}</li>
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

<style>
ul {
  overflow-y: scroll;
}

ul li {
  margin-bottom: 10px;
}
</style>
