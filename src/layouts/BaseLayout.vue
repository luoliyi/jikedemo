<template>
    <div class="BaseLayout">
      <a-layout>
        <a-layout-sider>
          <!--侧边栏-->
          <SiderMenu/>
        </a-layout-sider>
        <a-layout>
          <a-layout-header>
            <!--头部-->
            <GlobalHeader/>
          </a-layout-header>
          <a-layout-content>
            <!--动态路由，加载该路由下的子组件-->
            <router-view/>
          </a-layout-content>
          <a-layout-footer>
            <!--底部-->
            <GlobalFooter/>
          </a-layout-footer>
        </a-layout>
      </a-layout>
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
