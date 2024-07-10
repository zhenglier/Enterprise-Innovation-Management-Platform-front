<template>
  <div class="all_body">
    <!-- 项目查询标题 -->
    <div style="padding: 30px" class="top1">
      <el-alert :closable="false" title="项目查询" />
    </div>

    <!-- 查询输入框和按钮 -->
    <div class="search">
      <div class="Input">
        <el-input v-model="input" placeholder="查询项目名称"></el-input>
      </div>
      <div class="s">
        <el-button
          icon="el-icon-search"
          circle
          @click="filterProjects"
        ></el-button>
      </div>
    </div>

    <!-- 筛选表格 -->
    <div class="table-container">
      <el-table :data="toptableData" border>
        <el-table-column
          prop="category"
          label="类别"
          width="150"
        ></el-table-column>
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

    <!-- 项目申报标题 -->
    <div class="sector-header" style="margin: 10px 10px">
      <h2 class="project-apply-header">项目申报</h2>
    </div>

    <!-- 项目卡片 -->
    <div class="project-cards" style="margin: 10px 10px">
      <!-- 动态生成项目卡片行 -->
      <div
        class="card-row"
        v-for="rowIndex in Math.ceil(filteredProjects.length / 4)"
        :key="rowIndex"
      >
        <!-- 单个项目卡片 -->
        <el-card
          v-for="(project, index) in filteredProjects.slice(
            (rowIndex - 1) * 4,
            rowIndex * 4
          )"
          :key="index"
          class="box-card"
        >
          <div slot="header" class="clearfix">
            <span>{{ project.name }}</span>
            <el-button
              style="float: right; padding: 3px 0"
              type="text"
              @click="checkDetail(project.name)"
            >
              查看详情
            </el-button>
          </div>
          <div class="card-content">
            <p>{{ project.unit }}</p>
            <p>{{ project.views }} 浏览量</p>
          </div>
        </el-card>
      </div>
    </div>

    <!-- 分页 -->
    <div class="block">
      <span class="demonstration"></span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[8, 12, 16, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="filteredProjects.length"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 表格中的数据
      toptableData: [
        {
          category: "申报状态",
          options: ["不限", "待申请", "已通过", "已拒绝", "已退回"],
        },
        {
          category: "主管部门",
          options: [
            "不限",
            "财政部",
            "工业和信息化部",
            "人力资源保障局",
            "商务部",
            "农业农村部",
            "科学技术部",
          ],
        },
        {
          category: "行业/主题",
          options: [
            "不限",
            "制造业",
            "科学研究和技术服务类",
            "金融业",
            "交通运输，仓储和邮政业",
          ],
        },
      ],
      // 选中的选项
      selectedOptions: {},
      // 项目数据
      projects: [
        { name: "项目名称1", unit: "发布单位1", views: 100 },
        { name: "项目名称2", unit: "发布单位2", views: 120 },
        { name: "项目名称3", unit: "发布单位3", views: 80 },
        { name: "项目名称4", unit: "发布单位4", views: 90 },
        { name: "项目名称5", unit: "发布单位5", views: 110 },
        { name: "项目名称6", unit: "发布单位6", views: 130 },
        { name: "项目名称7", unit: "发布单位7", views: 70 },
        { name: "项目名称8", unit: "发布单位8", views: 85 },
      ],
      // 筛选后的项目数据
      filteredProjects: [
        { name: "项目名称1", unit: "发布单位1", views: 100 },
        { name: "项目名称2", unit: "发布单位2", views: 120 },
        { name: "项目名称3", unit: "发布单位3", views: 80 },
        { name: "项目名称4", unit: "发布单位4", views: 90 },
        { name: "项目名称5", unit: "发布单位5", views: 110 },
        { name: "项目名称6", unit: "发布单位6", views: 130 },
        { name: "项目名称7", unit: "发布单位7", views: 70 },
        { name: "项目名称8", unit: "发布单位8", views: 85 },
      ],
      // 查询输入框内容
      input: "",
      // 当前页码
      currentPage: 1,
      // 每页显示的项目数
      pageSize: 8, // 修改为8
    };
  },
  created() {
    // 初始化选中的选项
    this.initializeSelectedOptions();
    // 获取项目数据
    this.fetchProjects();
  },
  methods: {
    // 初始化选中的选项为“不限”
    initializeSelectedOptions() {
      this.toptableData.forEach((item) => {
        this.$set(this.selectedOptions, item.category, "不限");
      });
    },
    // 从后端获取项目数据
    async fetchProjects() {
      try {
        const response = await fetch("https://api.example.com/projects"); // 替换为真实的API地址
        const data = await response.json();
        this.projects = data;
        this.filterProjects();
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    },
    // 处理选项点击事件
    handleOptionClick(category, item) {
      this.$set(this.selectedOptions, category, item);
      this.filterProjects();
    },
    // 根据选项和输入框内容筛选项目
    filterProjects() {
      this.filteredProjects = this.projects
        .filter((project) => {
          return Object.keys(this.selectedOptions).every((category) => {
            const selectedOption = this.selectedOptions[category];
            if (selectedOption === "不限") return true;
            if (category === "申报状态")
              return project.status === selectedOption;
            if (category === "主管部门")
              return project.department === selectedOption;
            if (category === "行业/主题")
              return project.industry === selectedOption;
            return true;
          });
        })
        .filter((project) => {
          return project.name.includes(this.input);
        });
    },
    // 处理查看详情按钮点击事件
    checkDetail(name) {
      //项目路由
      this.$router.push({ path: `/details/pro/${name}` });
    },
    // 处理每页显示的项目数改变事件
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
    },
    // 处理当前页码改变事件
    handleCurrentChange(val) {
      this.currentPage = val;
    },
  },
};
</script>

<style>
/* 设置卡片的布局 */
.project-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card-row {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
}

.box-card {
  width: calc(25% - 10px);
}

.card-content {
  padding: 10px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
  clear: both;
}

.table-container {
  margin: 20px 20px;
}

.option-item {
  flex: 1;
  min-width: 80px;
  cursor: pointer;
  text-align: center;
}

.block {
  text-align: center;
  padding-bottom: 20px;
}

.option-item.highlight span {
  color: red;
  font-weight: bold;
}

body > .el-container {
  margin-bottom: 40px;
}

.search {
  display: flex;
  justify-content: end;
  margin-bottom: 5px;
}

.s {
  margin: 2px 15px;
}

.Input {
  width: 150px;
  margin: 2px 15px;
}

.sector-header {
  margin-bottom: 30px;
}
</style>
