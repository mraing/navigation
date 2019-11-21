<template>
  <el-aside class="wrapper-left" width="200px" heihgt="100%">
    <ul class="link-wrapper">
      <!-- <li v-for="(data, index) in menudata" :key="'menu'+index">
        <div v-for="menu in data" :key="menu.id">
          <i :class="menu.titleicon"></i>{{menu.title}}
        </div>
      </li> -->
      <template v-for="(menus, index) in menudata">
        <li :key="'menu'+index" class="link-item">
          <i :class="menus.titleicon"></i>
          {{menus.title}}
        </li>
      </template>
    </ul>
  </el-aside>
</template>

<script>
import LinkItemVue from './LinkItem.vue'
export default {
  name: 'MenuLeft',
  props: {
    menudata: {
      type: Array
    }
  },
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleShow () {
      this.isCollapse = !this.isCollapse
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  components: {
    LinkItemVue
  },
  mounted () {
    console.log(this.menudata)
  }
}
</script>

<style lang="stylus" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.wrapper-left
  height 100%
  background #30333c
  .link-wrapper
    margin 30px 0
    .link-item
      padding 5px 10px
      padding-left 30px
      text-align left
      font-size 14px
      color #6b7386
      cursor pointer
      transition .3s
      i
        padding-right 5px
    .open-link-action
      font-size 14px
      color #fff
</style>
