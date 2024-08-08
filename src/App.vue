<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <navbar/>
  <router-view/>
  <footerTicket/>
</template>
<script>
import navbar from './components/navbar.vue';
import footerTicket from './components/footerTicket.vue'

export default{
  components:{
    navbar,
    footerTicket
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&family=Jost:ital,wght@0,100..900;1,100..900&family=Noto+Sans+Mongolian&display=swap');
#app {
  font-family: "Josefin Sans", sans-serif;
  font-optical-sizing: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
