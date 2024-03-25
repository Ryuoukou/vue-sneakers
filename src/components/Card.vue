<script setup>

defineProps({
  id: Number,
  title: String,
  imageUrl: String,
  price: Number,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickFavorite: Function,
  onClickAdd: Function
})
</script>

<template>
    <div class="relative bg-white border border-slate-50 rounded-3xl p-8 cursor-pointer
    transition hover:-translate-y-2 hover:shadow-xl flex flex-col justify-between h-full" >
      <img v-if="onClickFavorite" :src="!isFavorite ? '/like-1.svg' : '/like-2.svg'" alt="Like 1" class="absolute top-8 left-8" @click="onClickFavorite">
      <img :src="imageUrl" alt="Sneaker">
      <p class="mt-2">{{ title }}</p>

      <div class="flex justify-between mt-5 ">
        <div class="flex flex-col mt-auto">
          <span class="text-slate-400">Цена:</span>
          <b>{{ price }}  ₽</b>
        </div>

        <img v-if="onClickAdd" @click="onClickAdd" :src="!isAdded ? '/plus.svg' : '/checked.svg'" alt="Plus">
      </div>
    </div>
</template>

<style scoped>

</style>