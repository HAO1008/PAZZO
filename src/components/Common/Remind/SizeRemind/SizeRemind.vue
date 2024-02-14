<template>
  <remind>
    <template v-slot:header>
      <img src="@/assets/copyright.svg" alt="copyright" />
    </template>
    <template v-slot:body>
      <div class="text-xs">請選擇尺寸</div>
    </template>
    <template v-slot:footer>
      <div class="check-btn bg-white dark text-xs" @click="closeModal">
        確定
      </div>
    </template>
  </remind>
</template>

<script lang="ts" src="./SizeRemind.ts"></script>

<style lang="scss" scoped>
.check-btn {
  display: grid;
  place-content: center;
  height: 48px;
  border: 1px solid $dark;
  cursor: pointer;
}
.check-btn {
  &:hover {
    background-color: $beige;
    border-color: $beige;
  }
}
</style>