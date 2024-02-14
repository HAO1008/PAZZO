<template>
  <div v-if="!modal.isOpen" class="cart-btn" @click="openModal">加入購物車</div>
</template>

<script lang="ts" src="./CartButton.ts"></script>

<style lang="scss" scoped>
.cart-btn {
  display: none;
  position: fixed;
  width: 100%;
  height: 48px;
  bottom: 0;
  left: 0;
  background-color: $dark-gray;
  color: $white;
  z-index: 998;
}

@media screen and (max-width: 1024px) {
  .cart-btn {
    position: fixed;
    @include flex-set(flex, row, center, center);
  }
}
</style>