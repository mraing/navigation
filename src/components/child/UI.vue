<template>
  <div>
    <LinkItemVue :linkdata="linkData" />
  </div>
</template>

<script>
import LinkItemVue from './LinkItem.vue'
export default {
  name: 'UI',
  data () {
    return {
      linkData: {
        'title': '界面设计',
        'data': [
          {
            'linkUrl': 'https://www.collectui.com/',
            'linkName': 'collectui',
            'linkRemark': 'UI 设计必备,100多个分类,不用发愁没用灵感了',
            'linkIcon': 'https://www.collectui.com/img/favicon.ico'
          }
        ]
      }
    }
  },
  components: {
    LinkItemVue
  }
}
</script>

<style lang='stylus' scoped>
</style>
