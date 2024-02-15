<template>
  <div class="product-content">
    <div class="product-wish gap">
      <img width="24" src="@/assets/icons/like.svg" alt="like" />
    </div>
    <div class="product-title gap">
      <p>{{ product.name }}</p>
      <p>NT.{{ product.price }}</p>
    </div>
    <div class="product-color gap">
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
    <div class="product-size gap">
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
    <div class="product-count gap">
      <span class="calculate" @click="handelCount(2)">-</span>
      <span>{{ productCount < 10 ? "0" + productCount : productCount }}</span>
      <span class="calculate" @click="handelCount(1)">+</span>
    </div>
    <div
      v-if="currentSize != ''"
      class="product-check gap"
    >
      <div class="check-btn bg-white dark" @click="openRemind('CartRemind', productCount)">立即結帳</div>
      <div class="check-btn bg-dark white" @click="openRemind('CartRemind', productCount)">加入購物車</div>
    </div>
    <div v-else class="product-check gap">
      <div class="check-btn change-check-btn bg-white dark" @click="openRemind('SizeRemind', null)">請選擇尺寸</div>
      <div class="check-btn bg-dark white" @click="openRemind('SizeRemind', null)">請選擇尺寸</div>
    </div>
    <div class="product-info gap">
      <ul class="product-info-title">
        <li
          v-for="(item, index) in header"
          :key="index"
          :class="{ typeActive: currentInfo == index }"
          @click="changeInfo(index)"
        >
          {{ item }}
        </li>
      </ul>
      <ul v-if="currentInfo == 0" class="product-info-content text-xs">
        <li v-for="(item, index) in product.info" :key="index">
          {{ item }}
        </li>
      </ul>
      <ul v-if="currentInfo == 1" class="product-info-content text-xs">
        <li v-for="(item, index) in product.washStep" :key="index">
          {{ item }}
        </li>
      </ul>
      <SizeGuide
        class="rwd-product-info-content"
        v-if="currentInfo == 2"
        :isAccordion="false"  
        :allOpen="true"
      ></SizeGuide>
    </div>
  </div>
</template>

<script lang="ts" src="./ProductContent.ts"></script>

<style lang="scss" scoped>
.gap {
  margin: 20px auto;
}
.active {
  border: 1px solid $black;
}
.rwd-product-info-content {
  display: none;
}
.product-content {
  width: 70%;
  margin: 20px auto;
}
.product-wish {
  text-align: right;
  img {
    display: inline;
  }
}
.product-title {
  @include flex-set(flex, row, center, space-between);
  font-size: 20px;
}
.product-color {
  @include flex-set(flex, row, center, space-between);
  .product-color-list {
    @include flex-set(flex, row, center, flex-start);
    .product-color-list-item {
      margin-right: 20px;
      padding: 5px;
      box-sizing: border-box;
      display: grid;
      place-content: center;
    }
    img {
      cursor: pointer;
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
    margin-right: 20px;
    cursor: pointer;
  }
}
.product-count {
  width: 100%;
  height: 48px;
  border: 1px solid $black;
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
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
.product-info {
  border-top: 1px solid $gray;
  .product-info-title {
    @include flex-set(flex, row, center, space-between);
    padding: 0;
    .typeActive {
      font-weight: 700;
      border-bottom: 1.5px solid $black;
    }
    li {
      cursor: pointer;
      &:hover {
        border-bottom: 1px solid $black;
      }
    }
  }
  .product-info-content {
    padding: 0;
    li {
      margin: 10px auto;
    }
  }
}
@media screen and (max-width: 1024px) {
  .rwd-product-info-content {
    display: block;
  }
  .product-check {
    display: none;
  }
  .product-title {
    @include flex-set(flex, column, flex-start, flex-start);
    font-size: 20px;
  }
  :deep(.modal-content) {
    margin: 20px 0 !important;
  }
}
@media screen and (max-width: 675px) {
  .rwd-product-info-content {
    margin-left: -15px !important;
  }
}
</style>