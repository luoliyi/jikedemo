<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h4>{{name}}</h4>
    <h4>{{JackName}}</h4>
  </div>
</template>
<script>
import { clearArr, name } from './webpackfile/demo'
import { Person, JackName } from './webpackfile/demo2'

export default {
  name: 'about',
  data () {
    return {
      name,
      JackName
    }
  },
  mounted () {
    const arr = clearArr([1, 2, 3, 4, 4, 4, 5, 6, 7, 7, 7, 1])
    console.log(arr)

    const man = new Person('one', 21)
    man.say()
  }
}
</script>
