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
            v-model="policyNameKeyword"
          />
          <button
            type="button"
            class="search-button"
            @click="handleSearchPolicy"
          >
            <i class="el-icon-search"></i>
          </button>
        </div>
        <fieldset class="title-fieldset"></fieldset>
      </div>
      <div class="filter-box">
        <span class="select-sort">排序选择</span>
        <el-button class="time-button" @click="sortbyTime">时间⬇</el-button>
        <el-button class="hot-button" @click="sortbyHot">热度⬇</el-button>
      </div>
    </div>
    <!-- 这下面的内容是动态显示的 -->
    <div class="table-content">
      <el-table :data="paginatedTableData" stripe style="width: 100%">
        <el-table-column prop="policy_name" label="政策名称" width="180">
        </el-table-column>
        <el-table-column prop="manage" label="主管部门" width="180">
        </el-table-column>
        <el-table-column prop="policy_level" label="政策层级">
        </el-table-column>
        <el-table-column prop="hot" label="浏览量"> </el-table-column>
        <el-table-column prop="date" label="发布日期"> </el-table-column>
      </el-table>
    </div>
    <div class="page-part">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="filteredTableData.length"
        :page-size="pageSize"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toptableData: [
        {
          category: "政策层级",
          options: ["不限", "国家级", "省级", "市级", "校级"],
        },
        {
          category: "主管部门",
          options: [
            "不限",
            "财政部",
            "国家知识产权局",
            "工业和信息化部",
            "人力资源和社会保障部",
            "商务部",
            "国家发展和改革委员会",
            "民政部",
            "农业农村部",
            "文化和旅游部",
            "科学技术部",
          ],
        },
      ],
      selectedOptions: {
        政策层级: "不限",
        主管部门: "不限",
      },
      selectedCategory: "不限",
      selectedDepartment: "不限",
      tableData: [
        {
          policy_name: "王小虎",
          manage: "财政部",
          date: "2016-05-05",
          policy_level: "国家级",
          hot: 100,
        },
        {
          policy_name: "无敌",
          manage: "财政部",
          date: "2016-05-04",
          policy_level: "省级",
          hot: 200,
        },
        {
          policy_name: "傻逼",
          manage: "财政部",
          date: "2016-05-03",
          policy_level: "市级",
          hot: 300,
        },
        {
          policy_name: "狗",
          manage: "商务部",
          date: "2016-05-02",
          policy_level: "校级",
          hot: 400,
        },
      ],
      currentPage: 1,
      pageSize: 10,
      filteredTableData: [],
      policyNameKeyword: "",
    };
  },
  mounted() {
    this.filterTableData();
  },
  methods: {
    handleOptionClick(category, option) {
      this.selectedCategory = category;
      this.selectedDepartment = null;
      this.$set(this.selectedOptions, category, option);
      this.updateDepartmentOptions();
      this.filterTableData();
    },
    updateDepartmentOptions() {
      switch (this.selectedOptions["政策层级"]) {
        case "国家级":
          this.toptableData.find(
            (item) => item.category === "主管部门"
          ).options = [
            "不限",
            "财政部",
            "国家知识产权局",
            "工业和信息化部",
            "人力资源和社会保障部",
            "商务部",
            "国家发展和改革委员会",
            "民政部",
            "农业农村部",
            "文化和旅游部",
            "科学技术部",
          ];
          break;
        case "省级":
          this.toptableData.find(
            (item) => item.category === "主管部门"
          ).options = [
            "不限",
            "省委/省委办公厅",
            "省政府/省政府办公厅",
            "省发展改革委",
            "省教委",
            "省科委",
            "省经济和信息化局",
            "省民政局",
            "省财政局",
            "省商务局",
            "省市场监管局",
            "省广电局",
            "省知识产权局",
            "省人力资源社会保障局",
          ];
          break;
        case "市级":
          this.toptableData.find(
            (item) => item.category === "主管部门"
          ).options = [
            "不限",
            "市委/市委办公厅",
            "市政府/市政府办公厅",
            "市发展改革委",
            "市教委",
            "市科委",
            "市经济和信息化局",
            "市民政局",
            "市财政局",
            "市商务局",
            "市市场监管局",
            "市广电局",
            "市知识产权局",
            "市人力资源社会保障局",
          ];
          break;
        case "校级":
          this.toptableData.find(
            (item) => item.category === "主管部门"
          ).options = [
            "不限",
            "人力资源服务中心",
            "科技服务中心",
            "学术委员会",
            "物业服务中心",
          ];
          break;
        default:
          this.toptableData.find(
            (item) => item.category === "主管部门"
          ).options = [
            "不限",
            "财政部",
            "国家知识产权局",
            "工业和信息化部",
            "人力资源和社会保障部",
            "商务部",
            "国家发展和改革委员会",
            "民政部",
            "农业农村部",
            "文化和旅游部",
            "科学技术部",
          ];
      }
    },
    filterTableData() {
      this.filteredTableData = this.tableData.filter((item) => {
        const policyName = item.policy_name.toLowerCase();
        const keyword = this.policyNameKeyword.toLowerCase();
        const selectedDepartment = this.selectedOptions["主管部门"];
        const selectedLevel = this.selectedOptions["政策层级"];
        return (
          (selectedLevel === "不限" || selectedLevel === item.policy_level) &&
          (selectedDepartment === "不限" ||
            selectedDepartment === item.manage) &&
          (keyword === "" || policyName.includes(keyword))
        );
      });
    },
    sortbyTime() {
      this.filteredTableData.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });
    },
    sortbyHot() {
      this.filteredTableData.sort((a, b) => {
        return b.hot - a.hot;
      });
    },
    handleSearchPolicy() {
      this.filterTableData();
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      this.filterTableData();
    },
  },
  computed: {
    paginatedTableData() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.filteredTableData.slice(startIndex, endIndex);
    },
  },
};
</script>

<style>
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

.select-sort {
  margin: 0 20px;
}

.page-part {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
