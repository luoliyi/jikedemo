<template>
    <div class="BaseLayout">
      <!--头部-->
      <GlobalHeader/>
      <!--侧边栏-->
      <SiderMenu/>
      <!--动态路由，加载该路由下的子组件-->
      <router-view/>
      <!--底部-->
      <GlobalFooter/>
    </div>
</template>

<script>
import GlobalHeader from './GlobalHeader'
import GlobalFooter from './GlobalFooter'
import SiderMenu from './SiderMenu'
export default {
  name: 'BaseLayout',
  components: { GlobalFooter, GlobalHeader, SiderMenu }
}
</script>

<style scoped>

</style>
