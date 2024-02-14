<template>
  <div class="modal bg-white">
    <div class="list font-md" v-for="item in list" :key="item.id">
      <span>{{ item.name }}</span>
    </div>
  </div>
</template>
  
  <script src="./BkPants.ts"></script>
  
  <style lang="scss" scoped>
.modal {
  position: absolute;
  top: 150%;
  width: 110px;
  .list {
    padding: 5px 10px;
  }
}
</style>