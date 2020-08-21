<template>
  <div id="app">
    <div id="nav">
      <header>
        <nav class="v-toolbar" color="#000000">
          <div class="barra">
            <v-toolbar-title class="headline text-uppercase">
              <router-link to="/">
                <img class="seta" src="./assets/logos/seta.png" />
              </router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <span class="titulo">
              <font color="white" fixed>Mundo Seta</font>
            </span>
            <v-spacer></v-spacer>
            <v-btn class="btnMenu dropdown" tile large icon @click="menu()">
              <v-icon color="rgba(255, 255, 255, 1)">mdi-menu</v-icon>
              <div class="dropdown-content">
                <table>
                  <tr><td> <span class="itemMenu"> Foro </span> </td></tr>
                  <tr><td> <span class="itemMenu"> Area Personal </span> </td></tr>
                  <tr><td> <span class="itemMenu"> Cerrar Sesión </span> </td></tr>
                </table>
              </div>
            </v-btn>
          </div>
        </nav>
      </header>
    </div>
    <router-view/>

    <v-footer
      class="pie"
      data-booted="true"
    >
      <div class="foot">
        <font class="footer">
          Copyright © 2020 MICO MUNDO | MICOLOGIA | ES
        </font>
      </div>
    </v-footer>

  </div>
</template>

<style lang="scss" scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #333333;
  overflow: hidden;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.pie {
  height: 60px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
}

.foot {
  background: #302200;
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  opacity: 1;
}

.footer {
  color: white;
  position: absolute;
  top: 30px;
  margin-top: -15px;
  left: 50%;
  margin-left: -150px;
}

.titulo {
  font-size: 30px;
  margin-top: 5px;
}

header {
  width: 100%;
  height: 80px;
  top: 0px;
  left: 0;
  position: fixed;
  z-index: 100;
}

.barra {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background: #302200;
  color: #ffffff;
  width: 100%;
  height: 50px;
  text-align: center;
  display: flex;
}

.v-toolbar {
  color: #ffffff;
  height: 50px;
}

.seta {
  position: absolute;
  left: 1%;
  top: 10px;
  width: 30px;
  height: 30px;
}

.btnMenu {
  position: absolute;
  right: 0px;
  top: 0px;
  margin-right: 10px;
  margin-top: 0px;
  color: #ffffff;
}

.menu {
  position: absolute;
  z-index: 2;
  
  
  display: block;
  
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #302200;
    top: 0px;
    right: 0px;
    width: 200px;
    height: 150px;
    opacity: 0.8;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    text-align: left;
}

.dropdown:hover .dropdown-content {
    display: block;
}

.itemMenu {
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;
}

td {
  padding: 10px;
}

tr :hover {
  width: 100%;
  background: #005500;
}
</style>
