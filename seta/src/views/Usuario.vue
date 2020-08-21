<template>
  <div class="about">
    <Usuario msg="Pantalla de usuario"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Usuario from '@/components/Usuario.vue'

export default {
  name: 'Home',
  components: {
    Usuario
  }
}
</script>