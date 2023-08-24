<template>
  <div class="header">
    <nav class="header__nav">
      <p>CLOTHING STORE</p>
      <ul class="header__nav-ul">
        <li>
          <NuxtLink to="/">
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products/">
            Products
          </NuxtLink>
        </li>
        <li class="header__nav-ul-cart">
          <NuxtLink to="/cart">
            Cart
            <span v-if="itemCount" class="header__nav-ul-cart-span">{{ itemCount }}</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">
            About
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ProductCart } from '~/utils/types/Products'
import Color from '~/utils/types/Color'

const route = ref(useRoute().name?.toString() || '')
const colors = ref({} as Color)
const cart = ref([] as ProductCart[])

const itemCount = computed(() => cart.value.length)

onMounted(() => {
  if (process.client) {
    cart.value = getCart()
    colors.value = getColors(route.value)
  }
})

watch(() => useRoute().name, (to) => {
  if (to) {
    to = to.toString()
    route.value = to
    colors.value = getColors(route.value)
  }
})

watch(() => getCart(), (to) => {
  cart.value = to
})
</script>

<style lang="scss">
    .header{
        width: calc(100% - 4rem);
        color: v-bind("colors.color");
        margin: 2rem;
        height: fit-content;

        &__nav{
            display: flex;
            align-items: center;
            justify-content: space-between;

            &-ul{
                list-style: none;
                display: flex;
                align-items: center;
                gap: 2rem;

                &-cart{
                    a{
                        display: flex;
                        align-items: center;
                        gap: 0.25rem;
                    }

                    &-span{
                        font-size: 0.75rem;
                        font-weight: 700;
                        color: v-bind("colors.color");
                        display: flex;
                        height: 1.25rem;
                        width: 1.25rem;
                        align-items: center;
                        justify-content: center;
                        border: 1px solid v-bind("colors.color");
                        border-radius: 50%;
                        margin-bottom: 0.5rem;
                    }
                }

                .router-link-active{
                    color: coral;
                    font-weight: 700;

                    .header__nav-ul-cart-span{
                        color: coral;
                        border: 1px solid coral;
                        text-shadow: initial;
                    }
                }

                a{
                    color: v-bind("colors.color");
                    text-decoration: none;
                }
            }
        }
    }
</style>
