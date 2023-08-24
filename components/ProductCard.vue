<template>
  <div v-if="product" class="product">
    <div class="product__top">
      <p class="product__top-title" v-text="product.title" />
      <NuxtLink :to="'/products/' + product.id">
        <p class="product__top-details">
          more détails
        </p>
      </NuxtLink>
    </div>
    <img class="product__img" :src="product.image" :alt="product.title">
    <div class="product__foot">
      <p class="product__foot-price" v-text="product.price + '€'" />
      <p class="product__foot-cart" @click="handleCart">
        Add to cart
      </p>
    </div>
  </div>
  <Popup v-if="showPopup" title="Produit ajouté au panier !" @close-popup="closePopup" />
</template>

<script setup>
const props = defineProps({
  product: {
    required: true,
    type: Array
  }
})

const showPopup = ref(false)

const handleCart = () => {
  setCart(props.product)
  showPopup.value = true
}

const closePopup = () => {
  showPopup.value = false
}
</script>

<style lang="scss" scoped>
    .product{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border: 1px solid coral;
        border-radius: 1rem;
        padding: 2rem 2rem 1rem;
        overflow: hidden;

        &:hover{
            .product__img{
                transform: scale(1.05);
            }
            .product__top{
                &-details{
                    transform: translateY(0);
                }
            }
            .product__foot{
                transform: translateY(0);
            }
        }

        &__top{
            display: flex;
            align-items: center;
            justify-content: space-between;

            &-title, &-details{
                margin: 0 0 2rem 0;
            }

            &-details{
                font-size: 0.75rem;
                transition: 0.3s ease-out;
                transform: translateX(calc(100% + 2rem));
                border-bottom: 1px solid coral;
                padding-bottom: 0.15rem;
                cursor: pointer;
                min-width: max-content;
            }
        }

        &__img{
            width: 100%;
            height: 20rem;
            object-fit: contain;
            margin: 0 auto;
            transition: 0.3s ease-out;
        }

        &__foot{
            transform: translateY(calc(100% + 2rem));
            transition: 0.3s ease-out;
            display: flex;
            align-items: center;
            justify-content: space-between;

            &-price, &-cart{
                margin: 1rem 0 0;
            }

            &-cart{
                padding: 0.5rem 1rem;
                color: white;
                background-color: coral;
                border: 2px solid coral;
                border-radius: 2rem;
                transition: 0.3s ease-out;
                overflow: hidden;
                cursor: pointer;
                position: relative;

                &:hover{
                    border: 2px solid black;
                    color: black;
                }
            }
        }
    }

    a{
        text-decoration: none;
        color: black;
    }
</style>
