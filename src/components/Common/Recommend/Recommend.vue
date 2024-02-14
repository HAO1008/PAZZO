<template>
  <div class="recommend">
    <!-- <div class="recommend_title text-xs">#365dayswithpazzo</div>
    <Flicking :options="options" :plugins="pluginA">
      <img
        v-for="item in recommonList1"
        :key="item.id"
        :src="item.img"
        :alt="item.id"
      />
      <template #viewport>
        <div class="control_panel">
          <span class="flicking-arrow-prev">
            <i class="arrow left"></i>
          </span>
          <span class="text-xs">MORE</span>
          <span class="flicking-arrow-next">
            <i class="arrow right"></i>
          </span>
        </div>
      </template>
    </Flicking>
    <div class="recommend_title text-xs">推薦商品</div>
    <Flicking :options="options" :plugins="pluginB">
      <div class="product" v-for="item in recommonList2" :key="item.id">
        <img :src="item.img" :alt="item.name" />
        <div class="name">{{ item.name }}</div>
        <div class="price">
          <span :class="{ discount: item.discount }">NT.{{ item.price }}</span>
          <span v-if="item.discount">NT.{{ item.discount }}</span>
        </div>
      </div>
      <template #viewport>
        <div class="control_panel">
          <span class="flicking-arrow-prev">
            <i class="arrow left"></i>
          </span>
          <span class="text-xs">MORE</span>
          <span class="flicking-arrow-next">
            <i class="arrow right"></i>
          </span>
        </div>
      </template>
    </Flicking> -->
  </div>
</template>

<script src="./Recommend.ts"></script>

<style lang="scss" scoped>
img {
  margin: 0 10px;
  width: 350px;
}
.recommend_title {
  letter-spacing: 1px;
  margin: 10px auto;
}
.product {
  @include flex-set(flex, column, center, flex-start);
  margin-right: 20px;
  img {
    margin: 0;
    width: 350px !important;
  }
  .name {
    margin: 10px 0;
  }
  span {
    margin: 0 5px;
  }
  .discount {
    color: $gray;
    text-decoration: line-through;
  }
}
.control_panel {
  @include flex-set(flex, row, center, center);
  padding: 40px 0;
}
.flicking-arrow-prev,
.flicking-arrow-next {
  position: relative;
  height: 0;
  @include flex-set(flex, row, center, center);
  &::before,
  &::after {
    display: none;
  }
  .arrow {
    border: solid black;
    border-width: 0px 2px 2px 0;
    display: inline-block;
    padding: 5px;
  }
  .right {
    transform: rotate(-45deg);
  }
  .left {
    transform: rotate(135deg);
  }
}

@media screen and (max-width: 768px) {
  img {
    width: 198px;
  }

}
</style>