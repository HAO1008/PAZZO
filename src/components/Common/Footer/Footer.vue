<template>
  <div class="footer__menu">
    <ul class="footer_menu_list">
      <li
        v-for="item in list"
        :key="item.id"
        @mouseenter.stop="item.isActive = true"
        @mouseleave.stop="item.isActive = false"
      >
        <p
          v-if="item.list"
          class="list text-sm"
          :class="{ isBgcolor: item.id == 6 }"
        >
          <a v-for="(it, idx) in item.list" :key="idx" :href="it.href">
            <span class="menu">{{ it.title }}</span>
            <span v-if="idx != item.list.length - 1"> / </span>
          </a>
        </p>
        <div class="title text-sm" v-else>
          <p class="item" v-show="item.id == 8">
            {{ item.title }}
          </p>
          <p class="item" v-show="!item.isActive && item.id != 8">
            {{ item.title }}
          </p>
          <p
            class="item"
            :class="{ active: item.id != 8 }"
            v-show="item.isActive && item.id != 8"
          >
            {{ item.enTitle }}
          </p>
        </div>
      </li>
    </ul>
    <div class="copyright">
      <div class="text-sm">© PAZZO 2024</div>
      <img :src="copyright" alt="" />
    </div>
    <div class="footer-tax text-xs">
      <p>統一編號：05406486 / 營業人名稱：美而快實業股份有限公司</p>
      <p>MON.-FRI. 09:00-12:00 / 13:00-18:00</p>
    </div>
    <div class="bottom__img">
        <img :src="copyright" alt="" />
    </div>
  </div>
</template>

<script lang="ts" src="./Footer.ts"></script>

<style lang="scss" scoped>
.footer__menu {
  position: relative;
  width: 100%;
  padding: 60px 0px;
  .footer_menu_list {
    @include flex-set(flex, row, center, space-evenly);
    margin: 0;
    padding: 0;
    margin-bottom: 47px;
    li {
       flex-basis: auto;
    }
    .list {
      .menu {
        transition: 0.3s;
        &:hover {
          border-bottom: 1px solid $black;
        }
      }
    }
    .isBgcolor {
      background-color: $light-green;
      padding: 3px 10px;
    }
    .title {
      @include flex-set(flex, column, center, center);
      .item {
        text-align: center;
        width: 112px;
        cursor: pointer;
      }
      .active {
        opacity: 0;
        transition: 0.5s;
        border-bottom: 1px solid $black;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
  .copyright {
    @include flex-set(flex, row, center, flex-start);
    padding: 0 42px;
    img {
      display: none;
      width: 40px;
      margin-top: 20px;
    }
  }
  .footer-tax {
    padding: 0 42px;
    p {
      margin-top: 14px;
    }
  }

  .bottom__img {
    @include flex-set(flex, column, center, center);
    img {
        display: none;
    }
  }
}
@media screen and (max-width: 1024px) {
  .footer__menu {
    .footer_menu_list {
      @include flex-set(flex, column, center, space-between);
      margin-bottom: 10px;
      li {
        margin-bottom: 20px;
      }
    }
    .copyright {
      @include flex-set(flex, column, center, center);
      img {
        display: block;
        width: 40px;
      }
    }
    .footer-tax {
      p {
        margin-top: 14px;
      }
    }
  }
}
@media screen and (max-width: 675px) {
    .copyright {
      img {
        display: none !important;
      }
    }
    .footer-tax {
        @include flex-set(flex, column, center, center);
        margin-top: 15px;
    }
    .bottom__img {
        margin-top: 50px;
        img {
            display: block !important;
        }
    }
}
</style>