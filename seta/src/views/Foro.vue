<template>
  <div class="about">
    <Foro msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Foro from '@/components/Foro.vue'

export default {
  name: 'Home',
  components: {
    Foro
  }
}
</script>