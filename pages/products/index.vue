<template>
  <div class="products">
    <h1 class="products__title">
      Our products
    </h1>
    <div class="products__list">
      <Product v-for="product in data" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Products } from 'utils/types/Products'

const { data } = await useFetch<Products[]>('https://fakestoreapi.com/products?limit=3')
</script>

<style lang="scss">
  .products{
    width: calc(100% - 4rem);
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0 2rem;

    &__title{
      color: coral;
      font-weight: 700;
    }

    &__list{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }
  }

  .product{
    font-size: 1.25rem;
  }

  .page-enter-active {
    opacity: 0.5;
    transition: opacity 5s 0s;
  }
</style>
