<template>
  <div class="remind bg-white">
    <div class="modal-header">
        <slot name="header"></slot>
    </div>
    <div class="modal-body">
        <slot name="body"></slot>
    </div>
    <div class="modal-footer">
        <slot name="footer"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.remind {
  position: absolute;
  transform: translate(-50%, -50%);
  top: 30%;
  left: 50%;
  width: 380px;
  text-align: center;
  box-sizing: border-box;
  padding: 20px;
  .modal-body {
    margin: 10px auto;
    }
}
</style>