<template>
  <div v-if="product" class="product-details">
    <figure class="product-details__figure">
      <img class="product-details__figure-img" :src="product.image" :alt="'image de ' + product.title">
    </figure>
    <div class="product-details__text">
      <h1>{{ product.title }}</h1>
      <p>{{ product.price }}€ TTC</p>
      <p>3 days delivery</p>
      <div class="product-details__text-rating">
        <span class="product-details__text-rating-title">Ratings :</span>
        <br>
        <div class="product-details__text-rating-note">
          <span>0</span>
          <span>5</span>
        </div>
      </div>
      <p class="product-details__cart" @click="handleCart">
        Add to cart
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Products } from '~/utils/types/Products'

const { id } = useRoute().params
const { data: product } = await useFetch<Products>(`https://fakestoreapi.com/products/${id}`)

if (!product.value) {
  throw createError({
    statusCode: 404, message: 'Produit inexistant', fatal: true
  })
}
const rate = ref((product.value.rating.rate * 2) + 'rem')

const handleCart = () => {
  setCart(product.value as Products)
}
</script>

<style lang="scss">
    .page-enter-active, .page-leave-active {
        transition: opacity 0.5s;
    }
    .page-enter, .page-leave-to {
        opacity: 0;
    }
    .product-details{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 3rem;

        &__figure{
            display: flex;
            justify-content: flex-end;
            margin: 0;
            height: 30rem;
            width: calc(50% - 4.5rem);
            border-right: 2px solid coral;
            padding-right: 3rem;

            &-img{
                width: 100%;
                object-fit: contain;
                object-position: right;
            }
        }

        &__text{
            width: calc(50% - 1.5rem);

            &-rating{
                font-size: 1.1rem;

                &-note{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 10rem;
                    height: 1.5rem;
                    border-radius: 1rem;
                    border: 1px solid black;
                    margin-top: 0.75rem;
                    position: relative;
                    margin-left: 1rem;

                    span{
                        margin: 0 -1rem;
                    }

                    &::after{
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: v-bind("rate");
                        background-color: coral;
                        border-radius: 1rem;
                    }
                }
            }
        }

        &__cart{
            font-size: 1rem;
            border-radius: 1rem;
            border: 1px solid coral;
            width: fit-content;
            margin-top: 3rem;
            padding: 0.5rem 1rem;
            color: coral;
            cursor: pointer;
            font-weight: 600;
            position: relative;
            transition: 0.15s ease-out;

            &::after{
                content: "";
                position: absolute;
                border-radius: 1rem;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                box-shadow: 3px 3px 2px coral;
                transition: 0.15s ease-out;
            }

            &:hover{
                transform: translate(3px, 3px);

                &:after{
                    box-shadow: 1px 1px 1px coral;
                }
            }
        }
    }
</style>
