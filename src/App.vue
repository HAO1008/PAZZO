<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Layout from "@/Layout/Layout.vue";
</script>

<template>
    <Modal></Modal>
    <CartButton></CartButton>
    <Layout>
      <template v-slot:header>
        <Header />
      </template>
      <template v-slot:content>
        <RouterView />
      </template>
      <template v-slot:footer>
        <Footer />
      </template>
    </Layout>
</template>
<style lang="scss">
body {
  margin: 0;
}
</style>
