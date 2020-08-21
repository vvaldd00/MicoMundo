<template>
  <div
    class="v-application v-application--is-ltr theme--light colorHead app"
    id="app"
  >
    <div class="pantalla">
      <main class="v-content" style="padding: 0px;" data-booted="true">
          <section class="pantalla2">
            <div class="v-parallax" style="height: 100%;">
              <div class="v-parallax__image-container">
                <img
                  src="@/assets/fondos/welcome.jpg"
                  alt=""
                  class="v-parallax__image fondo"
                  style="display: block;"
                />
              </div>
              <div class="v-parallax__content">
                <div
                  class="layout white--text column align-center justify-center"
                >
                  <div class="cuerpo">
                    <div class="boton">
                      <router-link to="/Acceso"><span class="v-btn__content fuenteEntrar"> ACCESO</span></router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </main>
    </div>
  </div>
</template>

<style scoped>

.app {
  height: 100%;
}

.v-application--wrap {
  top: 0px;
  left: 0px;
  background: #123459;
  height: 10%;
}

.fuenteEntrar {
  color: #ffffff;
  position: absolute;
  left: 15%;
}

.pantalla {
  height: 100%;
}

.pantalla2 {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
}

.fondo {
  position: absolute;
  top: 0%;
  left: 50%;
  width: 100%;
  height: 90%;
}

.cuerpo {
  position: absolute;
  top: 45%;
  left: 40%;
  margin-right: 40%;
  width: 20%;
  min-width: 230px;
  min-height: 75px;
  height: 10%;
  border-style: solid;
  border-color: #000000;
  border-radius: 25px;
}

.boton { 
  background: #463100;
  position:absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  color: #ffffff;
  font-weight: bold;
  font-size: 300%;
  border-style: solid;
  border-color: #000000;
  opacity: 0.3;
  border-radius: 23px;
}

.cuerpo :hover {
  opacity: 1;
}

.cuerpo a href{
  text-align: center;
}
</style>

<script>
  export default {
    name: 'Entrada',

    data: () => ({
    }),
  }
</script>
