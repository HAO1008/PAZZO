<template>
  <div class="modal-content bg-white dark-gray">
    <div class="modal-header" v-if="isAccordion">
      <div class="close-btn" @click="closeModal(false)">
        <img width="19" src="@/assets/icons/close.svg" alt="" />
      </div>
    </div>
    <div class="modal-body">
      <div class="size-guide">
        <h1 class="text-max">Size Guide</h1>
        <el-collapse :class="{hideArrow: allOpen}" :accordion="isAccordion" v-model="activeTable" @change="test">
          <el-collapse-item
            title="Size Chart 產品尺寸"
            name="1"
            class="size-guide__section"
          >
            <div class="size-guide__content text-xs">
              <table>
                <tbody>
                  <tr>
                    <td scope="col">尺碼</td>
                    <td scope="col">腰圍</td>
                    <td scope="col">臀圍</td>
                    <td scope="col">前褲檔</td>
                    <td scope="col">後褲檔</td>
                    <td scope="col">大腿寬</td>
                    <td scope="col">褲長</td>
                    <td scope="col">褲口寬</td>
                    <td scope="col">褲口開岔高度</td>
                    <td scope="col">重量g</td>
                    <td class="etc" rowspan="9">
                      <img
                        width="213"
                        height="279"
                        src="@/assets/products/sizeGuide01.jpg"
                        alt=""
                      />
                    </td>
                  </tr>
                  <tr v-for="item in table1" :key="item.id">
                    <td>{{ item.size }}</td>
                    <td>{{ item.waist }}</td>
                    <td>{{ item.hips }}</td>
                    <td>{{ item.frontCrotch }}</td>
                    <td>{{ item.backCrotch }}</td>
                    <td>{{ item.tighWidth }}</td>
                    <td>{{ item.trouserLength }}</td>
                    <td>{{ item.trouserCuffWidth }}</td>
                    <td>{{ item.cuffHeight }}</td>
                    <td>{{ item.weight }}</td>
                  </tr>
                </tbody>
              </table>
              <p>A腰圍(前後腰頭拉齊平) B臀圍 C褲襠 D大腿寬 E褲口寬 F褲長</p>
              <p>B臀圍/側腰頭下20公分處的水平寬度</p>
              <p>
                ※本尺寸表皆為水平測量，會因布料彈性、水洗處理、測量起訖點等因素，
                與實際商品尺寸略有誤差，誤差尺寸±2cm，
                在國際驗貨標準範圍都是屬於可接受範圍，並不屬於瑕疵。
              </p>
            </div>
          </el-collapse-item>
          <el-collapse-item
            title="Fitting Report 試穿報告"
            name="2"
            class="size-guide__section"
          >
            <div class="size-guide__content text-xs">
              <table>
                <tbody>
                  <tr>
                    <td scope="col">試穿人員</td>
                    <td scope="col">身高(cm)</td>
                    <td scope="col">體重(kg)</td>
                    <td scope="col">身形</td>
                    <td scope="col">肩寬(cm)</td>
                    <td scope="col">上胸圍(cm)</td>
                    <td scope="col">下胸圍(cm)</td>
                    <td scope="col">腰圍(cm)</td>
                    <td scope="col">下腰圍(cm)</td>
                    <td scope="col">臀圍(cm)</td>
                    <td scope="col">內衣罩杯</td>
                    <td scope="col">建議尺寸</td>
                  </tr>
                  <tr v-for="item in table2" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>{{ item.height }}</td>
                    <td>{{ item.weight }}</td>
                    <td>{{ item.shoulderWidth }}</td>
                    <td>{{ item.upperBust }}</td>
                    <td>{{ item.underBust }}</td>
                    <td>{{ item.waist }}</td>
                    <td>{{ item.lowerWaist }}</td>
                    <td>{{ item.circumference }}</td>
                    <td>{{ item.hips }}</td>
                    <td>{{ item.bra }}</td>
                    <td>{{ item.recommended }}</td>
                  </tr>
                </tbody>
              </table>
              <p>
                每個人身高體重和商品尺寸不盡相同，身高155Cm豐腴與180cm纖細的女孩有可能選擇同樣尺寸的商品
              </p>
              <p>
                胸圍尺寸的大小會影響選擇尺寸的關鍵，建議您可以參考試穿人員的胸圍做商品購買的選擇
              </p>
              <p>
                如果肩膀是屬於較寬的人，建議先參考商品的胸圍尺寸後再對照肩寬的尺寸測量
              </p>
              <div class="example-img-list">
                <div class="example-img-item">
                  <img src="@/assets/products/sizeGuide02.jpg" alt="01" />
                  <p>
                    A腰圍 B下腰圍 C臀圍<br />C臀圍/側腰頭下20公分處的水平寬度
                  </p>
                </div>
                <div class="example-img-item">
                  <img src="@/assets/products/sizeGuide03.jpg" alt="02" />
                  <p>A肩寬 B胸圍</p>
                </div>
              </div>
            </div>
          </el-collapse-item>
          <el-collapse-item
            title="Models Reference 模特兒參考"
            name="3"
            class="size-guide__section"
          >
            <div class="size-guide__content">
              <table>
                <tbody width="693">
                  <tr>
                    <td scope="col">身高</td>
                    <td scope="col">體重</td>
                    <td scope="col">肩寬</td>
                    <td scope="col">胸圍</td>
                    <td scope="col">腰圍</td>
                    <td scope="col">臀圍</td>
                    <td scope="col">尺碼</td>
                    <td class="etc" rowspan="2" width="15"></td>
                    <td class="etc" rowspan="2" width="150" valign="top">
                      <br />
                      個人比例條件不同
                      <br />
                      穿著感受會有不同差異
                      <br />
                      數值僅供參考
                    </td>
                    <td class="etc" rowspan="2" width="15"></td>
                  </tr>
                  <tr v-for="item in table3" :key="item.id">
                    <td>{{ item.height }}</td>
                    <td>{{ item.weight }}</td>
                    <td>{{ item.shoulderWidth }}</td>
                    <td>{{ item.bust }}</td>
                    <td>{{ item.waist }}</td>
                    <td>{{ item.hips }}</td>
                    <td>{{ item.size }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./SizeGuide.ts"></script>

<style lang="scss" scoped>
.modal-content {
  margin: 100px auto;
  width: 800px;
  height: auto;
  z-index: 999;

  .modal-header {
    padding: 15px 5px;
    text-align: right;
    .close-btn {
      display: inline;
      box-sizing: border-box;
      border: 1px solid $gray;
      cursor: pointer;
      img {
        display: inline;
      }
    }
  }

  .modal-body {
    .size-guide {
      padding: 15px;
      :deep(.size-guide__section) {
        padding: 0.5em 0 0.5em 0.1em;
        margin: 10px auto;
        .el-collapse-item__header {
          font-size: 18px;
        }
        .size-guide__content {
          height: 0%;
          .example-img-list {
            display: flex;
          }
          table {
            border: 1px solid $gray;
            border-collapse: collapse;
          }
          td {
            width: 60px;
            height: 45px;
            border: 1px solid $gray;
            text-align: center;
          }
          .etc {
            border: none !important;
            line-height: 1.6em;
            width: 150px;
          }
        }
      }
    }
  }
}
:deep(.hideArrow) {
  .el-collapse-item__arrow {
    display: none;
  }
}
@media screen and (max-width: 675px) {
  .etc {
    img {
      width: 156px !important;
    }
  }
}
</style>