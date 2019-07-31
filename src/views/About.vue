<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h4>{{name}}</h4>
  </div>
</template>
<script>
import { clearArr, name } from './webpackfile/demo'
export default {
  name: 'about',
  data () {
    return {
      name
    }
  },
  mounted () {
    const arr = clearArr([1, 2, 3, 4, 4, 4, 5, 6, 7, 7, 7, 1])
    console.log(arr)
  }
}
</script>
