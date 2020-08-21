<template>
  <div
    data-app="true"
    class="v-application v-application--is-ltr theme--light colorHead"
    id="app"
  >
  <nav class="navegador">
    
  </nav> 
  <div>
    <main class="v-content pantalla" style="padding: 0px;" data-booted="true">
      <section class="pantalla2">
        <div class="v-parallax" style="height: 100%;">
          <div class="v-parallax__image-container">
            <img
              src="@/assets/fondos/fondo5.jpg"
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
                        :src= nombreImagen
                        class="imagen"
                        alt=""
                      >
                    </div>
                    <div class="informacion">
                      <div class="campo"> <div class="centrado">Nombre común</div> <div> </div> <div> {{ nombreComun }} </div> </div>
                      <div class="campo"> <div class="centrado">Crecen en </div> <div> {{ habitat }} </div> </div>
                      <v-card class="campo" :color="color()"> <div class="centrado"> Comestibilidad </div> <div style="font-size: 25px;"> {{ comestibilidad }} </div> </v-card>
                      <div class="campo"> <div class="centrado"> Descripción </div> <div> {{ descripcion }} </div> </div>
                      <div class="campo"> <div class="centrado"> Temporada de crecimiento </div> <div> {{ temporadas }} </div> </div>
                      <div class="campo"> <div class="centrado"> Confusiones posibles </div> <div> {{ confusiones }} </div> </div>
                      <div class="campo"> <div class="centrado"> Tradición </div> <div> {{ tradicion }} </div> </div>
                      <div v-if="advertido" class="campo advertencia"> <div class="centrado"> advertencia </div> <div> {{ advertencia }} </div> </div>
                      <div v-if="comible" class="boton">
                        <v-btn
                          text
                          color="white"
                          rounded
                          width="100%"
                          height="60"
                          @click="recetas()"
                        >
                          <span class="fuenteBotones"> Buscar Recetas</span>
                        </v-btn>
                      </div>
                    </div>
                    <div class="contenedorImagen2">
                      <img
                        :src= nombreImagenSecundaria
                        class="imagen"
                        alt=""
                      >
                    </div>
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
    nombreImagenSecundaria: null,
    comible: false,
    advertido: false
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
        this.tradicion= item.tradicion;
        this.advertencia= item.advertencia;
        this.nombreImagen= item.nombreImagen;
        this.nombreImagenSecundaria= item.nombreImagenSecundaria;   
        
        if(this.comestibilidad=="Comestible") this.comible=true;
        else this.comible=false;

        if(this.advertencia=="NULL" || this.advertencia=="") this.advertido=false;
        else this.advertido=true;
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
      var win = window.open('https://duckduckgo.com/?t=ffab&q=recetas+con+'+this.nombreComun+'&ia=web', '_blank');
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
  top: 60px;
  left: 0%;
  display: flex;
  height: 80%;
  width: 100%;
  z-index: 2;
  overflow: hidden;
  }

.m-b-md {
  margin-bottom: 16px;
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
  height: 100%;
}

.contenedorImagen {
  position: absolute;
  top: 0%;
  left: 0%;
  margin-top: 30px;
  width: 370px;
  height: 370px;
}

.contenedorImagen2 {
  position: absolute;
  top: 0%;
  left: 77%;
  margin-top: 30px;
  width: 370px;
  height: 370px;
}

.imagen{
  width: 370px;
  height: 370px;
}

.panelInformacion {
  position: absolute;
  top: 40px;
  left: 0%;
  height: 97%;
  width: 100%;
  display: block;
}

.informacion {
  position: absolute;
  top: 5px;
  left: 19%;
  width: 50%;
  height: 100%;
  margin-left: 100px;
  overflow: scroll;
}

.cabecera {
  position: absolute;
  margin-bottom: 10%;
  top: 0px;
  left: 50%;
  width: 49%;
  margin-left: -24.5%;
  background: #000000;
  color: #ffffff;
  border-radius: 10px;
  font-size: 30px;
}

.cartel {
  display: block;
}

.caracteristicas {
  text-align: left;
  margin-left: 30px;
}

.campo {
  display: block;
  margin-top: 10px;
  margin-bottom: 30px;
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

.boton{
  margin-top: 10px;
  background: #004400;
  width: 30%;
  height: 60px;
  left: 50%;
  margin-left: 35%;
  margin-bottom: 10%;
  color: #ffffff;
  font-weight: bold;
  font-size: 100%;
  border-style: solid;
  border-color: aqua;
  border-radius: 12px;
  
}

.fuenteBotones {
  position: absolute;
  color: #ffffff;
  text-decoration: none;
  top: 50%;
  margin-top: -12px;
}

.centrado {
  text-align: center;
  margin-bottom: 10px;
}

.advertencia {
  background: #ff5500;
}
</style>
