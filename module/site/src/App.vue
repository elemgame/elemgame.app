<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="bg-[url('../assets/images/background.jpg')]">
    <!--  <header>-->
    <!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->
    <!--    <div class="wrapper" v-if="isNotPlay">-->
    <div class="wrapper">
      <HelloWorld msg="ELEM GAME" />

      <nav class="text-white">
        <RouterLink to="/">HOME</RouterLink>
        <RouterLink to="/play">PLAY NOW</RouterLink>
        <RouterLink to="/rules">RULES OF THE GAME</RouterLink>
        <RouterLink to="/about">ABOUT</RouterLink>
      </nav>
    </div>
  </header>

  <!--  <RouterView :key="$route.fullPath" />-->
  <RouterView />
</template>

<!--<script setup lang="ts">-->

<!--// export default {-->
<!--//   computed: {-->
<!--//     isNotPlay() {-->
<!--//       return this.$route.name !== 'play';-->
<!--//     }-->
<!--//   }-->
<!--// };-->
<!--</script>-->

<style scoped>
header {
  line-height: 1.5;
  max-height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
}

header .wrapper {
  display: flex;
  place-items: flex-start;
  flex-wrap: wrap;
  margin-top: 50%;
  margin-bottom: 30%;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin: 2rem 0;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    margin-top: 50%;
    margin-left: 25%;
  }

  nav {
    text-align: left;
    margin-left: -1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
