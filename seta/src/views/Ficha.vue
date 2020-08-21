<template>
  <div class="about">
    <Ficha msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Ficha from '@/components/Ficha.vue'

export default {
  name: 'Home',
  components: {
    Ficha
  }
}
</script>