<template>
  <div class="about">
    <Registro msg="Pagina de registro"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Registro from '@/components/Registro.vue'

export default {
  name: 'Home',
  components: {
    Registro
  }
}
</script>