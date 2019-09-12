<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div id="c1"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import G2 from '@antv/g2'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {}
  },
  methods: {
    renderData () {
      const data = [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 }
      ]
      // eslint-disable-next-line no-undef
      const chart = new G2.Chart({
        container: 'c1', // 指定图表容器 ID
        width: 600, // 指定图表宽度
        height: 300 // 指定图表高度
      })
      chart.source(data)
      chart.interval().position('genre*sold').color('genre')
      chart.render()
    }
  },
  mounted () {
    this.renderData()
  }
}
</script>
