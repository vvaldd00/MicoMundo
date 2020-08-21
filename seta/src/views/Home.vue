<template>
  <div class="home">
    <Entrada msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Entrada from '@/components/Entrada.vue'

export default {
  name: 'Home',
  components: {
    Entrada
  }
}
</script>
