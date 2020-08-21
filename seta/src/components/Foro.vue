<template>
  <div
    data-app="true"
    class="v-application v-application--is-ltr theme--light colorHead"
    id="app"
  >
  <div>
    <main class="v-content pantalla" style="padding: 0px;" data-booted="true">
      <section class="pantalla2">
        <div class="v-parallax" style="height: 100%;">
          <div class="v-parallax__image-container">
            <img
              src="@/assets/fondos/fondo6.jpg"
              alt=""
              class="v-parallax__image fondo"
              style="display: block;"
            />
              <div class="formulario">
                <div class="v-parallax__content" style="width: 100%;">
                  <div class="cabecera">
                    {{ nombre }}
                  </div>
                  <div class="panelInformacion">
                    <div class="contenedorImagen">
                      <img
                        src= :item.nombreImagen
                        class="imagen"
                        alt=""
                      >
                    </div>
                    <div class="informacion">
                      <div class="campo"> Nombre común: {{ nombreComun }} </div>
                      <div class="campo"> Crecen en: {{ habitat }} </div>
                      <v-card class="campo" :color="color()"> Toxicidad: {{ comestibilidad }} </v-card>
                      <div class="campo"> Descripción: {{ descripcion }} </div>
                      <div class="campo"> Temporada de crecimiento: {{ temporadas }} </div>
                      <div class="campo"> Confusiones posibles: {{ confusiones }} </div>
                      <div class="campo"> Tradición: {{ consumo }} </div>
                      <div class="campo"> advertencia: {{ advertencia }} </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="botonRecetas">
            <v-btn @click="recetas()"> Buscar recetas </v-btn>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Usuario',
  data: () => ({
    nombre: null,
    nombreComun: null,
    comestibilidad: null,
    descripcion: null,
    habitat: null,
    temporadas: null,
    confusiones: null,
    consumo: null,
    advertencia: null,
    nombreImagen: null,
    nombreImagenSecundaria: null

  }),
  mounted() {
    this.cargar();
  },
  methods: {
    cargar: function() {
      axios
        .get("http://localhost:3000", {
          params: {
            accion: "hongos"
          }
        })
        .then(response => {
          response.data.forEach(this.comprueba);
        })
        .catch(err => {
          alert("Se ha producido el error: " + err);
        });
    },
    comprueba: function(item){
      if(item.nombre==sessionStorage.getItem("nombreSeta")){
        this.nombre = item.nombre;
        this.nombreComun= item.nombreComun;
        this.comestibilidad= item.comestibilidad;
        this.descripcion= item.descripcion;
        this.habitat= item.habitat;
        this.temporadas= item.temporadas;
        this.confusiones= item.confusiones;
        this.consumo= item.consumo;
        this.advertencia= item.advertencia;
        this.nombreImagen= item.nombreImagen;
        this.nombreImagenSecundaria= item.nombreImagenSecundaria;        
      } 
    },
    color: function(){     
      if(this.comestibilidad== "Comestible"){
        return "##004400";
      } else if(this.comestibilidad== "No comestible"){
        return "#b6a37b";
      }else if(this.comestibilidad== "Tóxica"){
        return "#ff0000";
      }
    },
    recetas: function(){
      //let nombre = this.nombreComun.split(",")[0];
      var win = window.open('https://duckduckgo.com/?t=ffab&q=recetas+con+'+this.nombreComun+'&ia=web', '_blank');
      // Cambiar el foco al nuevo tab (punto opcional)
      win.focus();
    }
  }
};
</script>

<style scoped>

#app {
  height: 90%;
}
#barra {
  top: 0px;
  margin-top: 0px;
  left: 0px;
  width: 100%;
}

.formulario {
  position: absolute;
  top: 30px;
  left: 5%;
  display: flex;
  height: 500%;
  width: 90%;
  z-index: 2;
  }

.m-b-md {
  margin-bottom: 16px;
}

.pantalla {
  height: 90.5%;
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
  height: 100%;
}

.contenedorImagen {
  top: 50%;
  left: 50%;
  margin-top: 30px;
  width: 200px;
  height: 200px;
  border-style: solid;
  border-color: #0000ff;
  border-width: 12px;
}

.imagen{
  width: 200px;
  height: 200px;
}

.panelInformacion {
  border-style: solid;
  border-color: #00ff00;
  border-width: 12px;
  display: block;
}

.informacion {
  position: absolute;
  top: 40px;
  left: 10%;
  width: 60%;
  margin-left: 100px;
}

.cabecera {
  position: absolute;
  margin-bottom: 10%;;
  top: -1px;
  left: -1px;
  width: 101%;
  background: #000000;
  color: #ffffff;
  border-radius: 3px;
  font-size: 30px;
}

.cartel {
  display: block;
}

.preficha {
  margin: 5px;
  width: 100%;
}

.caracteristicas {
  text-align: left;
  margin-left: 30px;
}

.campo {
  margin-top: 10px;
  border-style: groove;
  border-color: aqua;
  text-align: left;
  background: #004400;
  border-radius: 12px;
  padding: 12px;
  color: #ffffff;
}

.campo ::before{
  opacity: 50%;
  z-index: -1;
}

.botonRecetas{
  margin-top: 60px;
  background: #ff0000;
}
</style>
