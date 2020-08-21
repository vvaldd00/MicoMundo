<template>
  <div class="about">
    <Acceso msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Acceso from '@/components/Acceso.vue'

export default {
  name: 'Home',
  components: {
    Acceso
  }
}
</script>