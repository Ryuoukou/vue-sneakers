<script setup>
import DrawerHead from '@/components/DrawerHead.vue'
import CartItemList from '@/components/CartItemList.vue'
import InfoBlock from '@/components/InfoBlock.vue'

const emit = defineEmits(['createOrder'])

defineProps({
  totalPrice: Number,
  vatPrice: Number,
  cartButtonDisabled: Boolean,
})
</script>

<template>
<div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70 "></div>
  <div class="bg-white w-96 h-full overflow-y-scroll fixed right-0 top-0 z-20 p-8 flex flex-col ">
     <DrawerHead/>

     <div v-if="!totalPrice" class="flex h-full items-center">
       <InfoBlock
         title="Корзина пустая"
         description="Корзина пустая добавьте хотя бы один товар"
         image-url="/package-icon.png"
       />
     </div>

     <div v-else>

       <CartItemList v-if="totalPrice"/>

       <div v-if="totalPrice" class="flex flex-col gap-5 mt-7">
         <div class="flex gap-2">
           <span>Итого:</span>
           <div class="flex-1 border-b border-dashed"></div>
           <b>{{ totalPrice }} ₽</b>
         </div>

         <div class="flex gap-2">
           <span>Налог 5%:</span>
           <div class="flex-1 border-b border-dashed"></div>
           <b>{{ vatPrice }} ₽</b>
         </div>

         <button
           :disabled="cartButtonDisabled"
           @click="() => emit('createOrder')"
           class="mt-4 transition bg-lime-500 w-full rounded-xl
        py-3 text-white disabled:bg-slate-300 hover:bg-lime-700
        cursor-pointer"
         >
           Оформить заказ
         </button>

       </div>
     </div>
  </div>
</template>

<style scoped>

</style>