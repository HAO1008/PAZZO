<template>
  <div class="product" @click="closeCartList">
    <div class="left-area">
      <el-Image
        v-for="(item, index) in product.list[currentColor]"
        :key="index"
        :src="item"
        :alt="index"
        :zoom-rate="1.2"
        :max-scale="7"
        :min-scale="0.2"
        :preview-src-list="product.list[currentColor]"
        :initial-index="0"
        fit="cover"
      />
    </div>
    <div class="right-area">
      <div class="rwd-product-info-content">
        <el-Image
          :src="product.list[currentColor][0]"
          :zoom-rate="1.2"
          :max-scale="7"
          :min-scale="0.2"
          :preview-src-list="product.list[currentColor]"
          :initial-index="0"
          fit="cover"
        ></el-Image>
      </div>
      <ProductContent :product="product"></ProductContent>
    </div>
  </div>
</template>

<script lang="ts" src="./Product.ts"></script>

<style lang="scss" scoped>
:deep(.el-image-viewer__mask) {
  background: $white;
  opacity: 1;
}
:deep(.el-image-viewer__close) {
  background-color: transparent;
  border-color: $gray;
  width: 55px;
  height: 55px;
  svg {
    color: $dark-gray !important;
  }
}
:deep(.el-image-viewer__btn) {
  background-color: transparent;
  border-color: $dark-gray;
  svg {
    color: $dark-gray !important;
  }
}
:deep(.el-image-viewer__actions__inner) {
  display: none;
}
.rwd-product-info-content {
  display: none;
  img {
    width: 100%;
  }
}
.product {
  position: relative;
  background-color: $white;
  display: flex;
  align-items: flex-start;

  .left-area {
    width: 50%;
    :deep(.el-image__preview)  {
      cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>'), auto;
    }
    img {
      width: 100%;
    }
  }
  .right-area {
    position: sticky;
    top: 0;
    width: 50%;
    height: auto;
    background-color: $white;
  }
}

@media screen and (max-width: 1024px) {
  .rwd-product-info-content {
    display: block;
  }
  .product {
    flex-direction: column-reverse;

    .left-area {
      width: 100%;
    }
    .right-area {
      position: relative;
      width: 100%;
      .product-content {
        width: 80%;
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
          }
          img {
            cursor: pointer;
          }
        }
      }
      .product-size {
        @include flex-set(flex, row, center, flex-start);
        .product-size-item {
          width: 30px;
          height: 30px;
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
      }
      .product-info {
        border-top: 1px solid $gray;
        .product-info-title {
          @include flex-set(flex, row, center, space-between);
          margin: 20px auto;
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
          padding: 20px auto;
          li {
            margin: 10px auto;
          }
        }
      }
    }
  }
}
</style>