<script setup>
const emit = defineEmits(['openDrawer'])

defineProps({
  totalPrice: Number
})
</script>

<template>
  <header class="flex justify-between border-b border-slate-200 px-10 py-8">

    <router-link to="/">
      <div class="flex items-center gap-4">
        <img src="/logo.png" alt="Logo" class="w-10">
      <div>
        <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
        <p class="text-slate-500">Магазин лучших кроссовок</p>
      </div>
      </div>
    </router-link>

    <ul class="flex items-center gap-10">
      <li
        @click="() => emit('openDrawer')"
        class="flex items-center gap-3 text-gray-500 hover:cursor-pointer hover:text-gray-700">
        <img src="/cart.svg" alt="Cart">
        <b>{{ totalPrice }} ₽</b>
      </li>

      <router-link to="/favorites">
        <li class="flex items-center gap-3 text-gray-500">
          <img src="/heart.svg" alt="Bookmarks">
          <span>Закладки</span>
        </li>
      </router-link>
      <li class="flex items-center gap-3 text-gray-500">
        <img src="/profile.svg" alt="Profile">
        <span>Профиль</span>
      </li>
    </ul>
  </header>
</template>

<style scoped>

</style>