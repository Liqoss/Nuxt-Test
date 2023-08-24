<template>
  <div class="footer">
    <ul class="footer__ul">
      <li>Footer - Clothing Store</li>
      <li>
        <NuxtLink to="/about">
          All Rights reserved - Clothing Store® - 2021
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const route = ref(useRoute().name?.toString() || '')
const colors = ref(getColors(route.value))

watch(() => useRoute().name, (to) => {
  if (to) {
    to = to.toString()
    route.value = to
    colors.value = getColors(route.value)
  }
})
</script>

<style lang="scss">
.footer{
    width: calc(100% - 4rem);
    color: v-bind("colors.color");
    height: fit-content;
    display: flex;
    align-self: flex-end;
    margin: 0 2rem 1rem;
    font-size: 0.875rem;

    &__ul{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style: none;
        margin: 0;
        padding: 0;

        a{
            text-decoration: none;
            color: v-bind("colors.color");
        }
    }
}
</style>
