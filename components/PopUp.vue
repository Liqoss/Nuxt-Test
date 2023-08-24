<template>
  <div class="popup">
    <p>{{ props.title }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    required: true,
    type: string
  }
})

const emit = defineEmits([
  'closePopup'
])

onMounted(() => {
  setTimeout(() => {
    document.querySelector('.popup').classList.add('popup--active')
  }, 100)

  setTimeout(() => {
    document.querySelector('.popup').classList.remove('popup--active')
  }, 2300)

  setTimeout(() => {
    emit('closePopup')
  }, 2600)
})
</script>

<style lang="scss">
    .popup{
        position: fixed;
        top: 20vh;
        right: 0;
        transform: translateX(100%);
        background-color: coral;
        color: white;
        padding: 1rem 2rem;
        border-radius: 2rem 0 0 2rem;
        transition: .3s ease-out;

        &--active{
            transform: translateX(0);
        }

        p{
            margin: 0;
        }
    }
</style>
