<template>
  <div>
    <div class="policy-header">
      <div class="policy-header-content">
        <div class="policy-icon">
          <img
            src="https://zhengce.beijing.gov.cn/bk-config/pub/0002/0001/zhengcetoutiao.png?version=v1.1.5"
            class="zhengcetoutiao-img"
            alt="政策头条图片"
          />
          <img
            src="https://zhengce.beijing.gov.cn/bk-config/pub/0002/0001/zhengcetoutiao2.png?version=v1.1.5"
            alt="政策头条"
            class="zhengcetoutiao-title"
          />
        </div>
        <div class="top-policy-container">
          <ul class="top-policy-list">
            <li v-for="toppolicy in toppolicyList" :key="toppolicy.id">
              <span class="top-policy-title">{{ toppolicy.title }}</span>
              <span class="top-policy-date">{{ toppolicy.date }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div></div>
    <div class="policy-container">
      <el-tabs v-model="policyactiveTab" @tab-click="policyhandleTabClick">
        <el-tab-pane label="政策清单" name="policyList"></el-tab-pane>
        <el-tab-pane label="北京" name="beijing"></el-tab-pane>
        <el-tab-pane label="各区" name="districts"></el-tab-pane>
      </el-tabs>
      <div class="policy-content">
        <div v-if="policyactiveTab === 'policyList'">
          <ul class="policy-list">
            <li v-for="policy in policyList" :key="policy.id">
              <span class="policy-title">{{ policy.title }}</span>
              <span class="policy-date">{{ policy.date }}</span>
            </li>
          </ul>
        </div>
        <div v-if="policyactiveTab === 'beijing'">
          <ul class="policy-list">
            <li v-for="policy in beijingpolicyList" :key="policy.id">
              <span class="policy-title">{{ policy.title }}</span>
              <span class="policy-date">{{ policy.date }}</span>
            </li>
          </ul>
        </div>
        <div v-if="policyactiveTab === 'districts'">
          <ul class="policy-list">
            <li v-for="policy in districtspolicyList" :key="policy.id">
              <span class="policy-title">{{ policy.title }}</span>
              <span class="policy-date">{{ policy.date }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="project-container">
      <div class="sector-header">
        <h2 class="project-apply-header">项目申报</h2>
        <el-button type="text" @click="proroute" class="more-button"
          >查看更多 &gt;</el-button
        >
        <fieldset class="title-fieldset"></fieldset>
      </div>
      <!-- 放置卡片 -->
      <div class="project-cards">
        <!-- First Row -->
        <div class="card-row">
          <el-card
            v-for="(project, index) in projects.slice(0, 4)"
            :key="index"
            class="box-card"
          >
            <div slot="header" class="clearfix">
              <span>{{ project.name }}</span>
              <el-button
                style="float: right; padding: 3px 0"
                type="text"
                @click="handleCardClick(project)"
                >查看详情</el-button
              >
            </div>
            <div class="card-content">
              <p>{{ project.unit }}</p>
              <p>{{ project.views }} 浏览量</p>
            </div>
          </el-card>
        </div>
        <!-- Second Row -->
        <div class="card-row">
          <el-card
            v-for="(project, index) in projects.slice(4, 8)"
            :key="index"
            class="box-card"
          >
            <div slot="header" class="clearfix">
              <span>{{ project.name }}</span>
              <el-button
                style="float: right; padding: 3px 0"
                type="text"
                @click="handleCardClick(project)"
                >查看详情</el-button
              >
            </div>
            <div class="card-content">
              <p>{{ project.unit }}</p>
              <p>{{ project.views }} 浏览量</p>
            </div>
          </el-card>
        </div>
      </div>
      <div class="sector-header">
        <h2 class="policy-month-header">政策月历</h2>
        <el-button type="text" @click="policyroute" class="more-button"
          >查看更多 &gt;</el-button
        >
        <fieldset class="title-fieldset"></fieldset>
      </div>
      <div class="month-container">
        <el-tabs
          v-model="monthactiveTab"
          @tab-click="monthhandleTabClick"
          type="border-card"
          stretch="true"
        >
          <el-tab-pane
            v-for="(items, month) in monthlyData"
            :label="month"
            :key="month"
          >
            <el-table :data="paginatedData(month)">
              <el-table-column prop="title" label="政策名称"></el-table-column>
              <el-table-column
                prop="start_date"
                label="发布日期"
              ></el-table-column>
              <el-table-column
                prop="end_date"
                label="结束日期"
              ></el-table-column>
            </el-table>
            <div class="page-part">
              <el-pagination
                v-model="pagination[month].currentPage"
                :total="items.length"
                :page-size="pageSize"
                @current-change="handlePageChange(month)"
              ></el-pagination>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      policyactiveTab: "policyList",
      // 头条处的数据
      toppolicyList: [
        {
          id: 1,
          title:
            "北京市市场监督管理局 北京市财政局关于印发《实施首都标准化战略补...》",
          date: "2024-06-14",
        },
        {
          id: 2,
          title:
            "北京市顺义区经济和信息化局关于印发《顺义区进一步促进第三代等先...》",
          date: "2024-06-12",
        },
        {
          id: 3,
          title:
            "北京市顺义区经济和信息化局关于印发《顺义区促进高端制造业和先进...》",
          date: "2024-06-12",
        },
      ],
      //政策清单部分数据
      policyList: [
        {
          id: 1,
          title:
            "北京市市场监督管理局 北京市财政局关于印发《实施首都标准化战略补...》",
          date: "2024-06-14",
        },
        {
          id: 2,
          title:
            "北京市顺义区经济和信息化局关于印发《顺义区进一步促进第三代等先...》",
          date: "2024-06-12",
        },
        {
          id: 3,
          title:
            "北京市顺义区经济和信息化局关于印发《顺义区促进高端制造业和先进...》",
          date: "2024-06-12",
        },
        {
          id: 4,
          title:
            "北京市海淀区农业农村局 北京市海淀区财政局关于印发《2023年度海淀...》",
          date: "2024-06-03",
        },
        {
          id: 5,
          title:
            "北京市商务局等8部门关于印发《2024年北京市汽车以旧换新补贴实施...》",
          date: "2024-05-31",
        },
        {
          id: 6,
          title:
            "北京市人民政府办公厅关于印发《北京市加快医药健康协同创新行动计...》",
          date: "2024-05-23",
        },
      ],
      //北京政策数据
      beijingpolicyList: [
        {
          id: 5,
          title:
            "北京市商务局等8部门关于印发《2024年北京市汽车以旧换新补贴实施...》",
          date: "2024-05-31",
        },
        {
          id: 6,
          title:
            "北京市人民政府办公厅关于印发《北京市加快医药健康协同创新行动计...》",
          date: "2024-05-23",
        },
      ],
      //各区政策数据
      districtspolicyList: [
        {
          id: 5,
          title:
            "北京市商务局等8部门关于印发《2024年北京市汽车以旧换新补贴实施...》",
          date: "2024-05-31",
        },
        {
          id: 6,
          title:
            "北京市人民政府办公厅关于印发《北京市加快医药健康协同创新行动计...》",
          date: "2024-05-23",
        },
      ],
      //卡片的数据部分
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

      //政策月历部分
      monthlyData: {
        一月: [
          {
            title:
              "北京市市场监督管理局 北京市财政局关于印发《实施首都标准化战略补...》",
            start_date: "2024-06-17",
            end_date: "2024-08-09",
          },
          {
            title:
              "北京市顺义区经济和信息化局关于印发《顺义区进一步促进第三代等先...",
            start_date: "2024-05-17",
            end_date: "2024-08-09",
          },
          // More items...
        ],
        二月: [
          // Items for February
          {
            title:
              "北京市市场监督管理局 北京市财政局关于印发《实施首都标准化战略补...》",
            start_date: "2024-06-17",
            end_date: "2024-08-09",
          },
          {
            title:
              "北京市顺义区经济和信息化局关于印发《顺义区进一步促进第三代等先...",
            start_date: "2024-06-17",
            end_date: "2024-08-09",
          },
        ],
        三月: [
          // Items for March
          {
            title:
              "北京市市场监督管理局 北京市财政局关于印发《实施首都标准化战略补...》",
            start_date: "2024-06-17",
            end_date: "2024-08-09",
          },
          {
            title:
              "北京市顺义区经济和信息化局关于印发《顺义区进一步促进第三代等先...",
            start_date: "2024-06-17",
            end_date: "2024-08-09",
          },
        ],
        四月: [
          // Items for April
        ],
        五月: [
          // Items for May
        ],
        六月: [
          // Items for June
        ],
        七月: [
          // Items for July
        ],
        八月: [
          // Items for August
        ],
        九月: [
          // Items for September
        ],
        十月: [
          // Items for October
        ],
        十一月: [
          // Items for November
        ],
        十二月: [
          // Items for December
        ],
      },
      pagination: {
        一月: { currentPage: 1 },
        二月: { currentPage: 1 },
        三月: { currentPage: 1 },
        四月: { currentPage: 1 },
        五月: { currentPage: 1 },
        六月: { currentPage: 1 },
        七月: { currentPage: 1 },
        八月: { currentPage: 1 },
        九月: { currentPage: 1 },
        十月: { currentPage: 1 },
        十一月: { currentPage: 1 },
        十二月: { currentPage: 1 },
      },
      currentPage: 1,
      pageSize: 1,
    };
  },
  methods: {
    proroute() {
      this.$router.push({ name: "Query" });
    },
    policyroute() {
      this.$router.push({ name: "Browse" });
    },
    policyhandleTabClick(tab) {
      console.log(`切换到标签页: ${tab.name}`);
    },
    monthhandleTabClick(tab) {
      console.log(`切换到标签页: ${tab.name}`);
    },
    //日期分页
    handlePageChange(month) {
      return (page) => {
        this.$set(this.pagination[month], "currentPage", page);
      };
    },
    //跳转到对应的项目详情页
    handleCardClick(project) {
      // Handle click event, e.g., navigate to project details page
      console.log(`Clicked on project: ${project.name}`);
    },
  },
  computed: {
    paginatedData() {
      return (month) => {
        const start = (this.pagination[month].currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        return this.monthlyData[month].slice(start, end);
      };
    },
  },
};
</script>

<style scoped>
.policy-header {
  background-color: #f5e8de;
  padding: 10px 20px;
}

.policy-header-content {
  display: flex;
  align-items: center;
}

.policy-icon img {
  width: 50px;
  margin-right: 10px;
}

.policy-text ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.policy-text li {
  margin-bottom: 5px;
  font-size: 14px;
}

.policy-text li:last-child {
  margin-bottom: 0;
}

.policy-container {
  padding: 20px;
  background-color: #ffffff;
}

.policy-content {
  margin-top: 20px;
}

.policy-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.policy-list li {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.policy-title {
  flex: 1;
}

.policy-date {
  color: #999;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.project-apply-header {
  display: inline-block;
}

.sector-header {
  margin-bottom: 30px;
}

.more-button {
  float: right;
  margin-top: 20px;
}

.policy-month-header {
  display: inline-block;
}

.title-fieldset {
  border: none;
  border-top: 3px solid black;
}
.title-fieldset .inner {
  margin: 0 auto;
  padding: 0 0.25rem;
}

.page-part {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.top-policy-list {
  list-style-type: none;
  padding: 0;
}

.top-policy-list li {
  display: flex;
  justify-content: space-between;
}

.top-policy-date {
  margin-left: 50px;
}

.zhengcetoutiao-title {
  margin-left: 20px;
}

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
  margin-bottom: 20px;
}

.box-card {
  width: calc(50% - 10px); /* Adjust based on your design */
  margin-bottom: 20px;
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
</style>
