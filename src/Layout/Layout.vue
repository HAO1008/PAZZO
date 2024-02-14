<template>
  <div class="layout">
    <header class="header bg-white">
      <slot name="header"></slot>
    </header>
    <main class="content">
      <slot name="content"></slot>
    </main>
    <div>
      <slot name="feature"></slot>
    </div>
    <footer class="footer bg-white">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: auto;
  @include flex-set(flex, column, center, space-between);
}
.header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 96px;
  border-bottom: 1px solid $gray;
  z-index: 99;
}
.content {
  position: relative;
  margin-top: 96px;
  width: 100%;
  height: auto;
}
.footer {
  width: 100%;
  border-top: 1px solid $gray;
}
</style>