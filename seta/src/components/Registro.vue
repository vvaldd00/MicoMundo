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

                src="@/assets/fondos/fondo3.png"
                alt=""
                class="v-parallax__image fondo"
                style="display: block;"
              />
              <div class="marco">
                <div class="v-parallax__content">
                  <v-layout justify-left align-top heigh=100>
                    <v-card class="contenedorTitulo">
                      <v-toolbar 
                        dark 
                        color="#302200" 
                        id="barra"
                        >
                        <v-toolbar-title>
                          <font
                            size="5"
                            color="white"
                            class="tituloVentana"
                          >
                            Registro de nuevo usuario
                          </font>
                        </v-toolbar-title>
                      </v-toolbar>
                          <div class="formulario">
                            <table>
                              <tr>
                                <td><span class="textoAutomatico"> Nombre</span></td>
                                <td><input type="text" id="nombre" class="textoUsuario uno"/></td>
                              </tr>
                              <tr>
                                <td><span class="textoAutomatico"> Nombre usuario</span></td>
                                <td><input type="text" class="textoUsuario uno"/></td>
                              </tr>
                              <tr>
                                <td><span class="textoAutomatico"> Correo Electrónico</span></td>
                                <td><input type="text" class="textoUsuario uno"/></td>
                              </tr>
                              <tr>
                                <td><span class="textoAutomatico">Zona Habitual </span></td>
                                <td><input type="text" class="textoUsuario uno"/></td>
                              </tr>
                              <tr>
                                <td><span class="textoAutomatico"> Clave usuario</span></td>
                                <td><input type="password" class="textoUsuario dos"/></td>
                              </tr>
                              <tr>
                                <td><span class="textoAutomatico"> La clave de nuevo</span></td>
                                <td><input type="password" class="textoUsuario dos"/></td>
                              </tr>
                              <tr>
                                <td>
                                  <div class="boton" id="boton">
                                    <router-link to="/Acceso">
                                      <v-btn
                                        text
                                        color="white"
                                        rounded
                                        width="150"
                                        height="25"
                                        >
                                        <span class="fuenteBotones">Cancelar</span>
                                      </v-btn>
                                    </router-link>
                                  </div>
                                </td>
                                <td>
                                  <div class="boton">
                                    <router-link to=url>
                                      <v-btn
                                        text
                                        color="white"
                                        rounded
                                        width="150"
                                        height="25"
                                        @click="registrar()"
                                      > 
                                        Aceptar
                                      </v-btn>
                                    </router-link>
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </div>
                      </v-card>
                    </v-layout>
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
  name: 'Acceso',
  data: () => ({
    nombre: null,
    clave: null,
    comprClave: null,
    usuario: null,
    correo: null,
    zona: null
  }),

  methods: {
    registrar: function() {
      this.nombre = document.getElementsByClassName("textoUsuario")[0].value;
      this.usuario = document.getElementsByClassName("textoUsuario")[1].value;
      this.correo = document.getElementsByClassName("textoUsuario")[2].value; 
      this.zona = document.getElementsByClassName("textoUsuario")[3].value;
      this.clave = document.getElementsByClassName("textoUsuario")[4].value;
      this.comprClave = document.getElementsByClassName("textoUsuario")[5].value;
     
      if(this.clave!=this.comprClave){
        alert("Las claves no son iguales, inténtelo de nuevo");
      }else{
         axios
        .get("http://localhost:3000", {
          params: {
            nombre: this.nombre,
            usuario: this.usuario,
            clave: this.clave,
            correo: this.correo,
            zonaBusqueda: this.zona,
            accion: "registro"
          }
        })
        // eslint-disable-next-line no-unused-vars
        .then(response => {
          alert("Usted está registrado correctamente");
          this.$router.push("/Acceso");
        })
        .catch(err => {
          alert("Se ha producido el error: " + err);
        });
      }
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

.fuenteBotones {
  color: #ffffff;
  text-decoration: none;
}

.contenedorTitulo {
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100%;
}

.formulario {
  position: absolute;
  top: 70px;
  display: flex;
  height: 500%;
  width: 100%;
}
.content {
  text-align: center;
}

.title {
  font-size: 84px;
}

.m-b-md {
  margin-bottom: 16px;
}

.TituloVentana {
  color: white;
  text-align: center;
  top: 0px;
  left: 0px;
  width: 100%;
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

.marco {
  border-style: solid;
  border-width: 5px;
  border-color: #302200;
  border-radius: 10px;
  position: absolute;
  justify-content: center;
  height: 400px;
  width: 400px;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -200px;
  z-index: 1;
}

.textoUsuario {
  width: 150px;
  background: #ffffff;
  margin-left: 0px;
  color: #000000;
  margin-top: 0%;
}

.textoAutomatico{
  position: absolute;
  width: 150px;
  color: #ffffff;
  left: 4%;
  margin-top: -4%;
}

table {
  position: absolute;
  height: 100%;
  width: 100%;
}

td {
  width: 50%;
}

.boton { 
  background: #463100;
  width: 100%;
  height: 130%;
  color: #ffffff;
  font-weight: bold;
  font-size: 100%;
  border-style: solid;
  border-color: #000000;
  opacity: 0.5;
  border-radius: 23px;
}

td :hover {
  opacity: 1;
}
</style>
