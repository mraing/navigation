<template>
  <div class="link-ietm">
    <div class="link-title">{{linkdata.title}}</div>
    <el-row :gutter="20">
      <el-col
        :span="6" :xl="6" :lg="6" :md="8" :sm="12" :xs="24"
        v-for="(linkItem, index) in linkdata.data"
        :key="linkItem.linkName + index"
      >
        <a class="grid-content bg-purple" target="_blank" :href="linkItem.linkUrl">
          <div class="link-info">
            <div class="link-icon"><img v-lazy="linkItem.linkIcon"></div>
            <div class="link-name">{{linkItem.linkName}}</div>
          </div>
          <div class="link-remark">{{linkItem.linkRemark}}</div>
        </a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    linkdata: {
      type: Object
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
  .link-ietm
    margin 10px
    padding 10px
    background #fff
    border-radius 5px
    overflow hidden
    .link-title
      padding 5px 10px
      line-height 20px
      font-size 18px
      color rgb(77, 77, 77)
    .bg-purple
      display block
      margin 10px
      padding 10px
      border-radius 5px
      border 1px solid #e4ecf3
      box-shadow 1px 2px 3px #f2f6f8
      cursor pointer
      transition all .3s ease
      text-decoration none
      overflow hidden
      &:hover
        transform translateY(-6px)
        box-shadow 0 26px 40px -24px rgba(0,36,100,.3)
      .link-info
        display flex
        .link-icon
          margin-right 10px
          width 30px
          height 30px
          overflow hidden
          img
            width 100%
            height 100%
            background-size cover
        .link-name
          flex 1
          padding-right 10px
          text-align left
          line-height 30px
          color #3273dc
          font-size 14px
          font-weight 700
      .link-remark
        color gray
        font-size 12px
        padding-top: 10px
        height 35px
        overflow hidden
        text-overflow ellipsis
        display -webkit-box
        -webkit-line-clamp 2
        -webkit-box-orient vertical
</style>
