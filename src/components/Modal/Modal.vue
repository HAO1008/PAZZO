<template>
  <div v-show="modal.isOpen" class="modal" @click="closeModal($event, false)">
    <transition>
      <component :is="modal.isComponent"></component>
    </transition>
  </div>
</template>

<script lang="ts" src="./Modal.ts"></script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: #00000060;
  z-index: 998;
  padding: 0;
  overflow-x: hidden;
}
.v-enter-active, .v-leave-active {
  transition: all 0.3s ease-out;
}

.v-enter-from,
.v-leave-to {
  transform: translateY(-60px);
  opacity: 0;
}
</style>