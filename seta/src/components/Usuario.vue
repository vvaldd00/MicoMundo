<template>
  <div
    data-app="true"
    class="v-application v-application--is-ltr theme--light colorHead"
    id="app"
  >
  <div>
    <main class="v-content pantalla" style="padding: 0px;" data-booted="true">
      <section class="pantalla2">
        <div style="height: 100%;">
          <div>
            <img
              src="@/assets/fondos/fondo4.jpg"
              alt=""
              class="fondo"
              style="display: block;"
            />
              <div class="formulario">
                <div style="width: 100%;">
                  <v-container>
                    <v-row class="flex-start row" v-for="(item, i) in data" :key="i" @click="ficha(i)">
                      <v-card class="preficha" :color="color(i)"> 
                        <v-list-item three-line>
                          <v-list-item-content>
                            <div class="overline mb-4 cartel">
                              <div class="cabecera">
                                <v-list-item-title class="headline mb-1">{{
                                  item.nombre
                                }}</v-list-item-title>
                              </div>
                              <div class="contenedorImagen" >
                                <img class="imagen" :src= item.nombreImagen >
                              </div>
                              <div class="datos">    
                                <div class="caracteristicas"> 
                                  <li>Nombre común: {{ item.nombreComun }}</li>
                                  <li>Habitat: {{ item.habitat }}
                                  <li>Comestibilidad: {{ item.comestibilidad }}</li>
                                  <li>Temporada: {{ item.temporadas }}</li>
                                </div>
                              </div>
                            </div>
                          </v-list-item-content>
                        </v-list-item>
                      </v-card>
                    </v-row>
                  </v-container>
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
    data: [],
    nombreImagen: null
  }),
  mounted() {
    this.cargar();
  },
  updated(){
    //this.recarga();
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
          this.data = response.data;
        })
        .catch(err => {
          alert("Se ha producido el error: " + err);
        });
    },
    ficha: function(i){
      sessionStorage.setItem("nombreSeta", this.data[i].nombre);
      this.$router.push("/Ficha");
    },
    cargaImagen: function(i){
      var elementos = document.getElementsByClassName("contenedorImagen");
      alert(i + " *** " + elementos.length);
      return "../assets/setas/nizcalo.jpg" ;
    },
    color: function(i){     
      if(this.data[i].comestibilidad== "Comestible"){
        return "#d1f5d1";
      } else if(this.data[i].comestibilidad== "No comestible"){
        return "#fae7bf";
      }else if(this.data[i].comestibilidad== "Tóxica"){
        return "#f3c5c5";
      }
    },
    recarga: function(){
      var elemento = document.getElementsByClassName("contenedorImagen");
      for(var i=0; i<elemento.length; i++){
        let ruta = this.data[i].nombreImagen;
        document.getElementsByClassName("contenedorImagen")[i].innerHTML="<img class=\"imagen\" src="+ruta+" >";
      }
    }
  }
};
</script>

<style scoped>

#app {
  height: 100%;
  overflow: hidden;
}
#barra {
  top: 0px;
  margin-top: 0px;
  left: 0px;
  width: 100%;
}

.formulario {
  position: absolute;
  top: 55px;
  padding: 5%;
  display: flex;
  height: 84%;
  width: 100%;
  z-index: 1;
  overflow: scroll;
  overflow-x: hidden;
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
  overflow: hidden;
}

.fondo {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
}

.contenedorImagen {
  top: 50%;
  left: 50%;
  margin-top: 40px;
  width: 200px;
  height: 200px;
}

.imagen{
  width: 200px;
  height: 200px;
}

.datos {
  position: absolute;
  top: 25%;
  left: 25%;
  width: 70%;
  height: 50%;
}

.cabecera {
  position: absolute;
  margin-bottom: 10%;;
  top: -1px;
  left: -1px;
  width: 100.1%;
  background: #000000;
  color: #ffffff;
  border-radius: 3px;
}

.cartel {
  display: block;
}

.preficha {
  margin: 30px;
  width: 90%;
  left: 5%;
}

.caracteristicas {
  text-align: left;
  margin-left: 30px;
}

v-list-item-subtitle {
  font-size: 8px;
}
</style>
