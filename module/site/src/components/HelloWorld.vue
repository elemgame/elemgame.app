<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="mt-2 text-3xl font-bold text-yellow-400 underline">{{ msg }}</h1>
    <h3 class="text-white">
      Fight on the field of battle
      <span class="text-sky-300">in a game with elements of strategy and luck. </span>
      <a
        href="https://medium.com/@elemgame/rules-of-elemental-game-v1-598b872d3885"
        target="_blank"
        class="underline"
        rel="noopener"
        >Rules of the game.</a
      >
    </h3>
    <br />
    <a
      href="https://oasis.gallery/collection/0:0d16c74a210724fce890494858caa5ef6731cfc34cafc422e97a944cbaf6c042"
      target="_blank"
      class="text-white"
      rel="noopener"
      >BUY NOW</a
    >
    <!--    <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>-->
    <!--    <button class="w-full flex justify-center items-center text-base group relative isolate flex-none rounded-md py-1.5 text-[0.8125rem]/6 font-semibold text-white" href="https://oasis.gallery/collection/0:0d16c74a210724fce890494858caa5ef6731cfc34cafc422e97a944cbaf6c042" target="_blank">BUY NOW</button>-->
    <!--    <Button className={"w-full flex justify-center items-center text-base"} href="https://oasis.gallery/collection/0:0d16c74a210724fce890494858caa5ef6731cfc34cafc422e97a944cbaf6c042">BUY NOW</Button>-->
    <!--    <br/>-->
    <!--    <Button className={"w-full flex justify-center items-center text-base"} href="https://hackmd.io/4Y40u3D7TDSk2Nn5h4TSHA?view">RULES OF THE GAME</Button>-->
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.greetings a {
  display: flex;
  justify-content: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
