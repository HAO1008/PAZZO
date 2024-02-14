<template>
  <div class="modal bg-white">
    <div class="list" v-for="item in list" :key="item.id">
      <div
        class="title text-md font-bold"
        :class="{ pink: item.discount, red: item.hot }"
      >
        <span>{{ item.name }}</span>
      </div>
      <ul>
        <li
          v-for="it in item.list"
          :key="it.id"
          class="text-sm"
          :class="{ pink: it.discount, red: it.hot }"
        >
          <span>{{ it.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./ShopAll.ts"></script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 96px;
  left: 244px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 20px;
  width: 1000px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 15px;

  .list {
    .title {
      margin-bottom: 20px;
      cursor: pointer;
      span {
        transition: 0.2s;
        &:hover {
          border-bottom: 1px solid $black;
        }
      }
    }
    .pink {
      span {
        &:hover {
          border-bottom: 1px solid $pink;
        }
      }
    }
    .red {
      span {
        &:hover {
          border-bottom: 1px solid $red;
        }
      }
    }
    ul {
      text-align: left;
      margin: 0;
      padding: 0;
      li {
        margin-bottom: 10px;
        cursor: pointer;
        span {
          transition: 0.2s;
          &:hover {
            border-bottom: 1px solid $black;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .modal {
    display: none;
  }
}
</style>