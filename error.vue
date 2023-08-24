<template>
  <div>
    <p v-text="error.statusCode" />
    <p v-text="'Oups ...'" />
    <p v-text="error.message" />
    <button @click="handleClearError">
      Retour à l'accueil
    </button>
  </div>
</template>

<script setup>
defineProps({
  error: {
    required: true,
    type: Object
  }
})

const handleClearError = () => clearError({ redirect: '/' })
</script>
