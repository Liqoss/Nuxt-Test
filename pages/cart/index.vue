<template>
  <div class="cart">
    <h1 v-if="cart.length">
      You've added {{ cart.length }} <span v-if="cart.length < 2">item</span><span v-if="cart.length >= 2">items</span> in your cart
    </h1>
    <h1 v-else>
      You have nothing in your cart
    </h1>
    <div v-if="cart.length" class="cart__content">
      <div v-for="item in cart" :key="item.data.id" class="cart__content-item" @mousemove="handleShowImage($event)" @mouseleave="handleHideImage($event)">
        <div class="cart__content-item-line">
          {{ item.data.title }}
          <span class="cart__content-item-line-qty">x{{ item.quantity }}</span>
          <span class="cart__content-item-line-cross" @click="handleDeleteItem(item)" />
        </div>
        <img class="cart__content-item-img" :src="item.data.image" :alt="'image de ' + item.data.title">
      </div>
      <p class="cart__content-total">
        Total : <span>{{ cartTotal.toFixed(2) }}€</span>
      </p>
    </div>
    <a v-if="cart.length" class="cart__checkout">Proceed to checkout</a>
  </div>
</template>

<script setup lang="ts">
import { ProductCart } from '~/utils/types/Products'

const cart = ref([] as ProductCart[])
const cartTotal = ref(0)

const calculateTotal = () => {
  cartTotal.value = cart.value.reduce((total, item) => {
    const itemPrice = parseFloat(item.data.price as string)
    return total + itemPrice * item.quantity
  }, 0)
}

const handleShowImage = ($event : MouseEvent) => {
  const targ = ($event.target as HTMLElement).closest('.cart__content-item')?.querySelector('.cart__content-item-img') as HTMLElement
  if (targ) {
    targ.style.display = 'block'
    targ.style.left = `${$event.pageX}px`
  }
}

const handleHideImage = ($event : MouseEvent) => {
  const targ = ($event.target as HTMLElement).closest('.cart__content-item')?.querySelector('.cart__content-item-img') as HTMLElement
  if (targ) { targ.style.display = 'none' }
}

const handleDeleteItem = (item : ProductCart) => {
  const local = getCart()
  const storage = local.filter((filt) => {
    return filt.data.id === item.data.id
  })
  local.splice(local.indexOf(storage[0]), 1)

  localStorage.setItem('ClothingCart', JSON.stringify(local))
  cart.value = local
  updateCartQty(cart.value.length)
}

onMounted(() => {
  if (process.client) {
    cart.value = getCart()
    calculateTotal()
  }
})
</script>

<style lang="scss">
    .cart{
        padding: 0 2rem;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        &__content{
            display: flex;
            flex-direction: column;
            width: max-content;
            gap: 1rem;

            &-item{
                position: relative;

                &-line{
                    display: grid;
                    grid-template-columns: 1fr auto auto;
                    gap: 2rem;

                    &-qty{
                        border-bottom: 1px solid coral;
                    }

                    &-cross{
                        position: relative;
                        width: 1.5rem;
                        height: 1.5rem;
                        border-radius: 50%;
                        border: 1px solid black;
                        cursor: pointer;

                        &::before, &::after{
                            content: "";
                            width: 80%;
                            height: 2px;
                            background-color: black;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                        }

                        &::before{
                            transform: translate(-50%, -50%) rotate(-45deg);
                        }

                        &::after{
                            transform: translate(-50%, -50%) rotate(45deg);
                        }
                    }
                }

                &-img{
                    display: none;
                    position: absolute;
                    top: 2rem;
                    pointer-events: none;
                    width: 100px;
                }
            }

            &-total{
                span{
                    color: coral;
                }
            }
        }

        &__checkout{
            margin: auto 0 4rem;
            padding: 0.5rem 1rem;
            background-color: coral;
            color: white;
            width: fit-content;
            border-radius: 2rem;
            border: 2px solid coral;
            cursor: pointer;
            transition: 0.3s ease-out;

            &:hover{
                border: 2px solid black;
                color: black;
            }
        }
    }
</style>
