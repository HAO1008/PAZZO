<template>
  <div class="cart-list bg-white text-sm">
    <el-scrollbar>
        <div class="cart-list-item" v-for="item in productList" :key="item.id">
            <img width="104" height="138" :src="item.image" :alt="item.name">
            <div class="cart-list-item-info">
                <div class="title">
                    {{ item.name }}
                </div>
                <div class="list">
                    <div class="item">
                        <span>顏色</span>
                        <span>{{ colorType(item.color).color }}</span>
                    </div>
                    <div class="item">
                        <span>尺寸</span>
                        <span>{{ item.size }}</span>
                    </div>
                    <div class="item">
                        <span>數量</span>
                        <span>{{ item.count }}</span>
                    </div>
                </div>
            </div>
        </div>
    </el-scrollbar>
    <div class="check-btn bg-white dark text-xs" @click="toPay">前往結帳</div>
  </div>
</template>

<script src="./CartList.ts"></script>

<style lang="scss" scoped>
.cart-list {
  position: absolute;
  top: 75px;
  right: 3%;
  width: 350px;
  padding: 5px;
  padding-bottom: 20px;
  z-index: 99;
  border: 1px solid $dark-gray;
  :deep(.el-scrollbar__view) {
    max-height: 400px;
  }
  .cart-list-item {
    @include flex-set(flex, row, flex-start, flex-start);
    margin: 10px auto;
    padding: 10px;
    border-bottom: 1px solid $gray;
    &:last-child {
        border-bottom: none;
    }
    img {
        object-fit: contain;
        margin-right: 15px
    }
    .cart-list-item-info {
        @include flex-set(flex, column, flex-start, space-between);
        height: 138px;
        .list {
            @include flex-set(flex, row, flex-start, space-between);
            width: 100%;
            .item {
                span {
                    margin-right: 5px;
                }
            }
        }
    }
  }

  .check-btn {
    display: grid;
    place-content: center;
    height: 48px;
    border: 1px solid $dark;
    margin: 10px;
    cursor: pointer;
  }
  .check-btn {
    &:hover {
      background-color: $beige;
      border-color: $beige;
    }
  }
}
@media screen and (max-width: 675px) {
    .cart-list {
        display: none;
    }
}
</style>