<template>
    <div class="BaseLayout">
      <!--头部-->
      <GlobalHeader/>
      <!--动态路由，加载该路由下的子组件-->
      <router-view/>
      <!--底部-->
      <GlobalFooter/>
    </div>
</template>

<script>
import GlobalHeader from './GlobalHeader'
import GlobalFooter from './GlobalFooter'
export default {
  name: 'BaseLayout',
  components: { GlobalFooter, GlobalHeader }
}
</script>

<style scoped>

</style>
