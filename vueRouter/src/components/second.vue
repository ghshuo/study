<template>
    <div class="hello">
        <h2>{{msg}}</h2>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'Second',
  data () {
    return {
      msg: 'I am hsgeng'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
