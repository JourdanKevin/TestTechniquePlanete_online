<template>
  <div id="app">
    <nav>
        <ul>
          <li><router-link to="/">Tâche</router-link> </li>
          <li><router-link to="/InterfaceEmploye">Employe</router-link> </li>
          <li><router-link to="/SaisieTache">SaisieTâche</router-link></li>
        </ul>
    </nav>
        <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
body{
        margin: 0px;
        padding: 0px;
    }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    display:inline-block;
    font-size: 125%;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 16px 30px;
    text-decoration: none;
}

li a:hover:not(.active) {
    background-color: #111;
}

.router-link-active {
    background-color: #4CAF50;
}
</style>
