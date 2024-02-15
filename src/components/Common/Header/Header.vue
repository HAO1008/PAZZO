<template>
  <div class="header-inner">
    <div class="left-header">
      <div class="header__logo" @click="routerPush">
        <img class="logo" :src="logo" alt="PAZZO" />
      </div>
      <div class="header__nav">
        <ul class="main-menu">
          <li
            v-for="item in list"
            :key="item.id"
            class="shop text-sm font-bold"
            :class="{ notShow: item.id == 1 }"
            tabindex="0"
            @mouseenter.stop="changeListStats(true, item)"
            @mouseleave.stop="changeListStats(false, item)"
          >
            <span v-show="item.isActive" :class="{ active: item.id != 1 }">{{
              item.enTitle
            }}</span>
            <span v-show="!item.isActive">{{ item.title }}</span>
            <bk-pants v-show="item.isActive && item.id == 5"></bk-pants>
          </li>
        </ul>
      </div>
    </div>
    <ul class="right-header" v-if="!searchOpen" :class="{rwdHidden: isOpen}">
      <li
        v-for="item in secnav"
        :key="item.id"
        class="icon"
        @click="openList(item.id, !cartOpen)"
      >
        <div class="count" v-if="item.id == 3">
          {{ handleCartCount }}
        </div>
        <img
          class="icon"
          :class="{ isShow: item.id == 4 }"
          :src="item.img"
          :alt="item.name"
        />
      </li>
    </ul>
    <ul class="right-header contrary" v-if="(isOpen && closeShow) || searchOpen">
      <li class="icon">
        <img
          class="icon"
          src="@/assets/icons/close.svg"
          @click="openList(4, false)"
        />
      </li>
    </ul>
    <transition>
      <shop-all v-if="isOpen"></shop-all>
    </transition>
    <transition name="collapse">
      <shop-all-collapse v-if="isOpen"></shop-all-collapse>
    </transition>
    <transition>
      <cart-list v-if="cartOpen"></cart-list>
    </transition>
    <transition>
      <search-bar v-if="searchOpen"></search-bar>
    </transition>
  </div>
</template>

<script lang="ts" src="./Header.ts"></script>

<style lang="scss" scoped>
.header-inner {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 12px;
  @include flex-set(flex, row, center, space-between);
}
.left-header {
  @include flex-set(flex, row, center, space-between);
  .header__logo {
    width: 144px;
    margin-right: 100px;
    img {
      width: 100%;
    }
  }
  .main-menu {
    @include flex-set(flex, row, center, space-between);
    padding: 0;
    .shop {
      position: relative;
      width: 100px;
      margin: 0 5px;
      cursor: pointer;
      @include flex-set(flex, column, center, center);
      transition: 0.5s;
      &:hover {
        .active {
          opacity: 1;
        }
      }
      .active {
        opacity: 0;
        border-bottom: 1px solid $black;
      }
    }
  }
}
.right-header {
  @include flex-set(flex, row, center, flex-start);
  margin-right: 25px;
  .isShow {
    display: none;
  }
  .icon {
    position: relative;
    width: 32px;
    margin: 0 8px;
    cursor: pointer;
    .count {
      position: absolute;
      top: 56%;
      left: 75%;
      transform: translate(-50%, -50%);
      z-index: 999;
      font-size: 10px;
    }
  }
}
.contrary {
  flex-direction: row-reverse;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.3s ease-out;
}

.collapse-enter-from,
.collapse-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

@media screen and (max-width: 1024px) {
  .rwdHidden {
    display: none;
  }
  .header-inner {
    align-items: flex-start;
  }
  .left-header {
    @include flex-set(flex, column, flex-start, space-between);
    .header__logo {
      width: 95px;
    }
    .notShow {
      display: none !important;
    }
  }
  .right-header {
    .isShow {
      display: block !important;
    }
  }
}

@media screen and (max-width: 675px) {
  .left-header {
    width: 100%;
    .main-menu {
      margin-left: -10px;
      margin-right: 10px;
      li {
        width: auto !important;
      }
    }
    .header__nav {
      width: 100%;
    }
  }
  .right-header {
    position: absolute;
    top: 8%;
    right: 3%;
  }
}
</style>