<template>
  <span
    :class="hover ? 'hover' : ''"
    @click="$emit('click')">
    <img :src="getImage(`${icon}.svg`)" alt="-" />
  </span>
</template>

<script>
export default {
  name: 'ReoIcon',
  props: {
    icon: {
      type: String,
      default: ''
    },
    hover: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
span {
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

  &.hover {
    padding: 8px;

    &:hover {
      background: rgba(0, 0, 0, 0.04);
      transition: background 0.25s ease-in;
    }
  }
}
</style>
