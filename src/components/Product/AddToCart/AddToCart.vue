<template>
  <div class="add-to-cart bg-white">
    <div class="close" @click="close">
      <img width="25" src="@/assets/icons/close.svg" alt="close" />
    </div>
    <div class="cart-item">
      <img class="cart-item-image" width="215" height="315" :src="product.list[currentColor - 1][0]" alt="" />
      <div class="cart-item-info">
        <div class="product-title">{{ product.name }}</div>
        <div class="product-price">NT$ {{ product.price }}</div>
        <div class="product-color">
          <div class="product-color-list">
            <div
              v-for="item in product.type"
              :key="item"
              class="product-color-list-item"
              :class="{
                active: currentColor == item,
              }"
              @click="changeColor(item)"
            >
              <img width="23" :src="colorType(item).img" :alt="item" />
            </div>
          </div>
          <p class="text-xs">{{ colorType(currentColor).color }}</p>
        </div>
        <div class="product-size">
          <div
            v-for="item in product.size"
            :key="item"
            class="product-size-item"
            :class="{
              active: currentSize == item,
            }"
            @click="changeSize(item)"
          >
            {{ item }}
          </div>
        </div>
        <div class="product-count">
          <span class="calculate" @click="handelCount(2)">-</span>
          <span>{{
            productCount < 10 ? "0" + productCount : productCount
          }}</span>
          <span class="calculate" @click="handelCount(1)">+</span>
        </div>
        <div class="product-check" v-if="currentColor != '' && currentSize != ''">
          <div
            class="check-btn bg-dark-gray white"
            @click="addToCart()"
          >
            立即結帳
          </div>
        </div>
        <div class="product-check" v-else>
          <div
            class="check-btn bg-white dark"
          >
            請選擇尺寸
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./AddToCart.ts"></script>

<style lang="scss" scoped>
.active {
  border: 1px solid $black;
}
.add-to-cart {
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 999;

  .close {
    text-align: right;
    margin: 10px 15px;
  }
  .cart-item {
    @include flex-set(flex, row, flex-start, flex-start);
    padding: 15px 50px;
    img {
      object-fit: cover;
    }
    .cart-item-info {
        margin-left: 35px;
        width: 100%;
    }
    .product-title {
      @include flex-set(flex, row, center, space-between);
      margin-bottom: 10px;
    }
    .product-color {
      @include flex-set(flex, row, center, space-between);
      .product-color-list {
        @include flex-set(flex, row, center, flex-start);
        margin: 10px 0;
        .product-color-list-item {
          margin-right: 20px;
          padding: 5px;
          box-sizing: border-box;
          display: grid;
          place-content: center;
        }
      }
    }
    .product-size {
      @include flex-set(flex, row, center, flex-start);
      .product-size-item {
        width: 35px;
        height: 35px;
        display: grid;
        place-content: center;
        box-sizing: border-box;
        text-align: center;
        margin: 20px 0px;
        cursor: pointer;
      }
    }
    .product-count {
      width: 100%;
      height: 48px;
      border: 1px solid $black;
      margin-bottom: 20px;
      @include flex-set(flex, row, center, space-between);
      .calculate {
        height: 100%;
        padding: 0 10px;
        display: grid;
        place-content: center;
        cursor: pointer;
      }
    }
    .product-check {
      width: 100%;
      .check-btn {
        display: grid;
        place-content: center;
        height: 48px;
        border: 1px solid $dark;
        cursor: pointer;
      }
      .change-check-btn {
        &:hover {
          background-color: $beige;
          border-color: $beige;
        }
      }
    }
  }
}

@media screen and (max-width: 675px) {
  .add-to-cart {
    .cart-item {
      padding: 10px 20px;
      .cart-item-image {
        display: none;
      }
      .cart-item-info {
        margin-left: 0;
      }
    }
  }
}
</style>