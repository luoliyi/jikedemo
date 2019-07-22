<template>
    <div class="BaseLayout">
      <!--头部-->
      <GlobalHeader/>
      <!--动态内容-->
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
