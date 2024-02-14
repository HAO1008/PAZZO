<template>
  <div class="shop-all-collapse">
    <el-collapse accordion>
      <el-collapse-item
        v-for="item in list"
        :key="item.id"
        :title="item.name"
        :name="item.name"
        :class="{ pink: item.discount, red: item.hot }"
      >
        <ul :class="{ pink: item.discount, red: item.hot }">
          <li v-for="it in item.list" :key="it.id">
            {{ it.name }}
          </li>
        </ul>
      </el-collapse-item>
    </el-collapse>
    <div class="empty"></div>
  </div>
</template>

<script lang="ts" src="./ShopAllCollapse.ts"></script>

<style lang="scss" scoped>
.shop-all-collapse {
    position: absolute;
    top: 96px;
    left: 0;
    width: 100%;
    :deep(.el-collapse-item__header) {
        border-bottom: $white;
        padding: 0 20px;
    }
    :deep(.el-collapse-item__content) {
        ul {
            padding: 0 20px;
            li {
                margin-bottom: 10px;
            }
        }
    }
    .empty {
        width: 100%;
        height: 300px;
        background-color: $white;
    }
}
@media screen and (min-width: 1024px) {
  .shop-all-collapse {
    display: none;
  }
}
</style>