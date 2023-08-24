<template>
  <div class="container">
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<style lang="scss">
  body{
    margin: 0;
  }

  .container{
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: auto 1fr auto;
    font-size: 1.5rem;
    font-family: sans-serif;
  }
</style>
