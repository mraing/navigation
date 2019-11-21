<template>
  <div class="wrapper">
    <el-container class="wrapper-container">
      <!-- 左边菜单 -->
      <MenuLeft :menudata="allData" class="hidden-xs-only" />
      <!-- 右边内容 -->
      <Content :linkdata="allData" />
    </el-container>
  </div>
</template>

<script>
import MenuLeft from './child/MenuLeft'
import LinkItem from './child/LinkItem'
import Content from './child/Content'
export default {
  name: 'Home',
  data () {
    return {
      allData: [
        {
          'title': '前端框架',
          'titleicon': 'el-icon-s-data',
          'data': [
            {
              'linkUrl': 'https://cn.vuejs.org/',
              'linkName': 'Vue',
              'linkRemark': '渐进式 JavaScript 框架',
              'linkIcon': 'https://cn.vuejs.org/images/icons/apple-icon-57x57.png'
            },
            {
              'linkUrl': 'https://zh-hans.reactjs.org/',
              'linkName': 'React',
              'linkRemark': '用于构建用户界面的 JavaScript 库',
              'linkIcon': 'https://zh-hans.reactjs.org/favicon.ico'
            },
            {
              'linkUrl': 'https://zh-hans.reactjs.org/',
              'linkName': 'React Native',
              'linkRemark': 'React Native使你只使用JavaScript也能编写原生移动应用',
              'linkIcon': 'https://zh-hans.reactjs.org/favicon.ico'
            },
            {
              'linkUrl': 'https://angular.cn/',
              'linkName': 'Angular',
              'linkRemark': '一套框架，多种平台移动端 & 桌面端',
              'linkIcon': 'https://angular.cn/assets/images/favicons/favicon.ico'
            }
          ]
        },
        {
          'title': '组件库',
          'titleicon': 'el-icon-s-data',
          'data': [
            {
              'linkUrl': 'https://weui.io/',
              'linkName': 'WeUI',
              'linkRemark': '微信官方设计团队设计的UI组件库',
              'linkIcon': 'https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico'
            },
            {
              'linkUrl': 'https://ant.design/index-cn',
              'linkName': 'Ant Design',
              'linkRemark': '阿里蚂蚁金服出品,React UI 组件库，主要用于研发企业级中后台产品',
              'linkIcon': 'https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png'
            },
            {
              'linkUrl': 'https://element.eleme.io/#/zh-CN',
              'linkName': 'Element',
              'linkRemark': '饿了么前端团队出品,基于 Vue 2.0 的桌面端组件库',
              'linkIcon': 'https://element.eleme.io/favicon.ico'
            }
          ]
        },
        {
          'title': '界面设计',
          'titleicon': 'el-icon-s-data',
          'data': [
            {
              'linkUrl': 'https://www.collectui.com/',
              'linkName': 'collectui',
              'linkRemark': 'UI 设计必备,100多个分类,不用发愁没用灵感了',
              'linkIcon': 'https://www.collectui.com/img/favicon.ico'
            },
            {
              'linkUrl': 'https://dribbble.com/',
              'linkName': 'dribbble',
              'linkRemark': '国内知名设计师站点',
              'linkIcon': 'https://cdn.dribbble.com/assets/favicon-63b2904a073c89b52b19aa08cebc16a154bcf83fee8ecc6439968b1e6db569c7.ico'
            },
            {
              'linkUrl': 'https://pixabay.com/zh/',
              'linkName': 'pixabay',
              'linkRemark': '免费正版高清图片素材库',
              'linkIcon': 'https://pixabay.com/apple-touch-icon.png'
            },
            {
              'linkUrl': 'https://hao.uisdc.com/',
              'linkName': 'UISDC',
              'linkRemark': '设计师导航网站',
              'linkIcon': 'https://image.uisdc.com/wp-content/uploads/2018/05/uisdc-ico-apple.jpg'
            }
          ]
        },
        {
          'title': '工具类',
          'titleicon': 'el-icon-s-data',
          'data': [
            {
              'linkUrl': 'https://tinypng.com/',
              'linkName': 'tinypng',
              'linkRemark': '免费的在线压缩图片',
              'linkIcon': 'https://tinypng.com/images/favicon.ico'
            },
            {
              'linkUrl': 'https://www.grabient.com/',
              'linkName': 'grabient',
              'linkRemark': 'AI 渐变色，可视化编辑 CSS 渐变色',
              'linkIcon': 'https://www.grabient.com/favicon.ico'
            },
            {
              'linkUrl': 'https://www.iconfont.cn/',
              'linkName': 'iconfont',
              'linkRemark': '阿里出品的字体图标库',
              'linkIcon': 'https://gtms04.alicdn.com/tps/i4/TB1_oz6GVXXXXaFXpXXJDFnIXXX-64-64.ico'
            },
            {
              'linkUrl': 'https://www.echartsjs.com/zh/index.html',
              'linkName': 'Echarts',
              'linkRemark': 'Javascript的图表库，可以流畅的运行在PC和移动设备上',
              'linkIcon': 'https://www.echartsjs.com/images/favicon.png'
            }
          ]
        },
        {
          'title': '友链',
          'titleicon': 'el-icon-s-data',
          'data': [
            {
              'linkUrl': 'http://sword.leegeing.cn/',
              'linkName': '绪锋',
              'linkRemark': '个人笔记博客',
              'linkIcon': 'http://sword.leegeing.cn/images/favicon.ico'
            }
          ]
        }
      ]
    }
  },
  components: {
    MenuLeft,
    LinkItem,
    Content
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  .wrapper-container
    width 100%
    height 100%
</style>
