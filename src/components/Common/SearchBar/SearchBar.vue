<template>
  <div class="search-bar bg-white">
    <div class="search">
      <input type="text" placeholder="SEARCH搜尋..." />
      <img width="32" src="@/assets/icons/search.svg" alt="" />
    </div>
    <div class="list">
      <div class="item" v-for="item in list" :key="item.id">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./SearchBar.ts"></script>

<style lang="scss" scoped>
.search-bar {
  position: absolute;
  top: 96px;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 50px 0;
  .search {
    width: 100%;
    @include flex-set(flex, row, center, space-between);
    border-bottom: 1px solid $gray;
    img {
      margin-right: 100px;
    }
    input {
      border: none;
      outline: none;
      margin-left: 350px;
      &::placeholder {
        font-size: 16px;
        color: $black;
      }
    }
  }
  .list {
    @include flex-set(flex, row, center, flex-start);
    margin: 25px 0;
    margin-left: 350px;
    .item {
      margin-right: 15px;
      padding: 9px 18px;
      background-color: $light-green;
      cursor: pointer;
    }
  }
}
@media screen and (max-width: 1024px) {
  .search-bar {
    .search {
      input {
        margin-left: 150px !important;
      }
    }
    .list {
      margin-left: 150px !important;
    }
  }
}
@media screen and (max-width: 685px) {
  .search-bar {
    .search {
      input {
        margin-left: 50px !important;
      }
      img {
        margin-right: 50px !important;
      }
    }
    .list {
      margin-left: 50px !important;
      .item {
        margin-right: 5px;
        padding: 5px 10px;
      }
    }
  }
}
</style>