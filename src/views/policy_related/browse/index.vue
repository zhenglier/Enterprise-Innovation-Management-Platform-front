<template>
  <div class="policyinfo-container">
    <el-alert :closable="false" title="政策查询" />
    <div class="table-container">
      <el-table :data="toptableData" border>
        <el-table-column prop="category" label="类别" width="150">
        </el-table-column>
        <el-table-column label="选项">
          <template slot-scope="scope">
            <div
              v-for="item in scope.row.options"
              :key="item"
              class="option-item"
              :class="{
                highlight: selectedOptions[scope.row.category] === item,
              }"
              @click="handleOptionClick(scope.row.category, item)"
            >
              <span>{{ item }}</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="policy-searchbox">
      <div class="title-container">
        <h2 class="policy-title">政策列表</h2>
        <div class="search-tab">
          <input
            type="text"
            autocomplete="off"
            placeholder="请输入政策名称"
            class="zq-input__inner"
          />
          <button type="button" class="search-button">
            <!---->
            <i class="el-icon-search"></i>
            <!---->
          </button>
        </div>
        <fieldset class="title-fieldset"></fieldset>
      </div>
      <div class="filter-box">
        <div class="el-col el-col-12">
          <span class="font">排序选择&nbsp;&nbsp;</span>
          <button
            type="button"
            class="zq-button order-item zq-button--primary zq-button--mini active"
          >
            <!---->
            <!---->
            <span>
              时间
              <i class="el icon-arrow-down-a"></i>
              <i class="el icon-arrow-down-a-copy" style="display: none"></i
            ></span></button
          ><button
            type="button"
            class="zq-button order-item zq-button--primary zq-button--mini"
          >
            <!---->
            <!---->
            <span>
              热度
              <i class="el icon-arrow-down-a"></i>
              <i class="el icon-arrow-down-a-copy" style="display: none"></i
            ></span>
          </button>
          <label class="el-checkbox mr-10"
            ><span class="el-checkbox__input"
              ><span class="el-checkbox__inner"></span
              ><input
                type="checkbox"
                aria-hidden="false"
                class="el-checkbox__original"
                value="" /></span
            ><span class="el-checkbox__label">有解读<!----></span></label
          >
          <label class="el-checkbox mr-10"
            ><span class="el-checkbox__input"
              ><span class="el-checkbox__inner"></span
              ><input
                type="checkbox"
                aria-hidden="false"
                class="el-checkbox__original"
                value="" /></span
            ><span class="el-checkbox__label">有申报事项<!----></span></label
          >
        </div>
        <div class="right el-col el-col-12">
          共
          <span>238</span>条记录
        </div>
      </div>
    </div>
    <!-- 这下面的内容是动态显示的 -->
    <div class="table-content">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="date" label="政策名称" width="180">
        </el-table-column>
        <el-table-column prop="name" label="主管部门" width="180">
        </el-table-column>
        <el-table-column prop="address" label="所属区划"> </el-table-column>
        <el-table-column prop="address" label="浏览量"> </el-table-column>
        <el-table-column prop="address" label="发布日期"> </el-table-column>
      </el-table>
    </div>
    <el-pagination background layout="prev, pager, next" :total="1000">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toptableData: [
        {
          category: "政策层级",
          options: [
            "不限",
            "国家",
            "北京",
            "东城区",
            "西城区",
            "朝阳区",
            "海淀区",
            "丰台区",
            "石景山区",
            "门头沟区",
            "房山区",
            "通州区",
            "顺义区",
            "大兴区",
            "昌平区",
            "平谷区",
            "怀柔区",
            "密云区",
            "延庆区",
          ],
        },
        {
          category: "主管部门",
          options: [
            "不限",
            "市委/市委办公厅",
            "市政府/市政府办公厅",
            "市发展改革委",
            "市教委",
            "市科委、中关村管委会",
            "市经济和信息化局",
            "市民政局",
          ],
        },
      ],

      selectedOptions: {},
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    handleOptionClick(category, option) {
      this.$set(this.selectedOptions, category, option);
      // Emit an event with the selected category and option
      this.$emit("optionSelected", { category, option });
    },
  },
};
</script>

<style>
/* 此页面的所有内容都是居中显示的 */
.policyinfo-container {
  margin: 0 auto;
}

.table-container {
  width: 100%;
  margin: 20px;
}

.option-item {
  display: inline-block;
  margin: 0 5px;
  cursor: pointer;
}

.highlight {
  color: red;
  font-weight: bold;
}

.policy-title {
  display: inline-block;
}

.search-tab {
  float: right;
  margin-top: 35px;
}

.title-container {
  margin-bottom: 30px;
}

.title-fieldset {
  border: none;
  border-top: 3px solid black;
}
.title-fieldset .inner {
  margin: 0 auto;
  padding: 0 0.25rem;
}

.search-button {
  color: white;
  background-color: #bd192e;
  border: none;
  padding: 3px;
}
</style>
