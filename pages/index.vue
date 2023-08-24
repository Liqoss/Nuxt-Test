<template>
  <div class="home">
    <p class="home__title" v-text="text" />
    <figure class="home__figure">
      <img class="home__figure-img" src="/images/store-home.jpg">
    </figure>
  </div>
</template>

<script setup lang="ts">
const text = ref<string>('Clothing Store')
</script>

<style lang="scss">
    .home{
        position: absolute;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;

        &__figure{
            height: 100%;
            width: 100%;
            z-index: 0;
            margin: 0;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;

            &::after{
                content: '';
                height: 100%;
                width: 100%;
                position: absolute;
                left: 0;
                top: 0;
                background: linear-gradient(to top, transparent, rgba(black, 0.75));
            }

            &-img{
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }

        &__title{
            font-size: 3rem;
            text-shadow: 1px 1px 10px black;
            font-weight: 600;
            color: white;
        }
    }
</style>
