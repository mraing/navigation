<template>
  <el-main>
    <LinkItemVue v-for="(data, index) in linkdata" :key="'all'+index" :linkdata="data" />
  </el-main>
</template>

<script>
import LinkItemVue from './LinkItem.vue'
export default {
  name: 'Content',
  props: {
    linkdata: {
      type: Array
    }
  },
  data () {
    return {}
  },
  components: {
    LinkItemVue
  }
}
</script>

<style lang='stylus' scoped>
</style>
