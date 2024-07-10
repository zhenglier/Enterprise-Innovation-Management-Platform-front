<template>
  <div>
    <div class="policy-header">
      <div class="policy-header-content">
        <div class="policy-icon">
          <img
            src="https://zhengce.beijing.gov.cn/bk-config/pub/0002/0001/zhengcetoutiao.png?version=v1.1.5"
            class="zhengcetoutiao-img"
            alt="政策头条图片"
          >
          <img
            src="https://zhengce.beijing.gov.cn/bk-config/pub/0002/0001/zhengcetoutiao2.png?version=v1.1.5"
            alt="政策头条"
            class="zhengcetoutiao-title"
          >
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
    <div />
    <div class="policy-container">
      <el-tabs v-model="policyactiveTab" @tab-click="policyhandleTabClick">
        <el-tab-pane label="政策清单" name="policyList" />
        <el-tab-pane label="北京" name="beijing" />
        <el-tab-pane label="各区" name="districts" />
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
        <el-button
          type="text"
          class="more-button"
          @click="proroute"
        >查看更多 &gt;</el-button>
        <fieldset class="title-fieldset" />
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
                @click="checkproDetail(project.name)"
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
                @click="checkproDetail(project.name)"
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
        <el-button
          type="text"
          class="more-button"
          @click="policyroute"
        >查看更多 &gt;</el-button>
        <fieldset class="title-fieldset" />
        <!-- 月份的选项行 -->
        <div class="month-selection">
          <el-button
            v-for="month in months"
            :key="month.value"
            :type="month.value === selectedMonth ? 'primary' : 'default'"
            @click="selectMonth(month.value)"
          >
            {{ month.label }}
          </el-button>
        </div>
        <!-- 政策列表 -->
        <el-table :data="paginatedPolicies" style="width: 100%">
          <el-table-column
            prop="daysLeft"
            label="剩余天数"
            width="120"
          />
          <el-table-column prop="name" label="政策名称" />
          <el-table-column
            prop="startDate"
            label="申报开始时间"
            width="180"
          />
          <el-table-column
            prop="endDate"
            label="申报结束时间"
            width="180"
          />
          <el-table-column
            prop="views"
            label="浏览量"
            width="120"
          />
          <el-table-column label="操作" width="120">
            <template slot-scope="scope">
              <el-button type="text" @click="checkDetail(scope.row.name)"
                >查看详情</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <!-- Pagination -->
        <div class="page-part">
          <el-pagination
            :current-page="currentPage"
            :page-size="pageSize"
            background
            layout="prev, pager, next"
            :total="filteredPolicies.length"
            :page-sizes="[5, 10, 20, 50]"
            @current-change="handlePageChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request'
export default {
  data() {
    return {
      policyactiveTab: 'policyList',
      // 头条处的数据
      toppolicyList: [
        {
          id: 1,
          title:
            '北京市市场监督管理局 北京市财政局关于印发《实施首都标准化战略补...》',
          date: '2024-06-14'
        },
        {
          id: 2,
          title:
            '北京市顺义区经济和信息化局关于印发《顺义区进一步促进第三代等先...》',
          date: '2024-06-12'
        },
        {
          id: 3,
          title:
            '北京市顺义区经济和信息化局关于印发《顺义区促进高端制造业和先进...》',
          date: '2024-06-12'
        }
      ],
      // 政策清单部分数据
      policyList: [
        {
          id: 1,
          title:
            '北京市市场监督管理局 北京市财政局关于印发《实施首都标准化战略补...》',
          date: '2024-06-14'
        },
        {
          id: 2,
          title:
            '北京市顺义区经济和信息化局关于印发《顺义区进一步促进第三代等先...》',
          date: '2024-06-12'
        },
        {
          id: 3,
          title:
            '北京市顺义区经济和信息化局关于印发《顺义区促进高端制造业和先进...》',
          date: '2024-06-12'
        },
        {
          id: 4,
          title:
            '北京市海淀区农业农村局 北京市海淀区财政局关于印发《2023年度海淀...》',
          date: '2024-06-03'
        },
        {
          id: 5,
          title:
            '北京市商务局等8部门关于印发《2024年北京市汽车以旧换新补贴实施...》',
          date: '2024-05-31'
        },
        {
          id: 6,
          title:
            '北京市人民政府办公厅关于印发《北京市加快医药健康协同创新行动计...》',
          date: '2024-05-23'
        }
      ],
      // 北京政策数据
      beijingpolicyList: [
        {
          id: 5,
          title:
            '北京市商务局等8部门关于印发《2024年北京市汽车以旧换新补贴实施...》',
          date: '2024-05-31'
        },
        {
          id: 6,
          title:
            '北京市人民政府办公厅关于印发《北京市加快医药健康协同创新行动计...》',
          date: '2024-05-23'
        }
      ],
      // 各区政策数据
      districtspolicyList: [
        {
          id: 5,
          title:
            '北京市商务局等8部门关于印发《2024年北京市汽车以旧换新补贴实施...》',
          date: '2024-05-31'
        },
        {
          id: 6,
          title:
            '北京市人民政府办公厅关于印发《北京市加快医药健康协同创新行动计...》',
          date: '2024-05-23'
        }
      ],
      // 卡片的数据部分
      projects: [
        { name: '项目名称1', unit: '发布单位1', views: 100 },
        { name: '项目名称2', unit: '发布单位2', views: 120 },
        { name: '项目名称3', unit: '发布单位3', views: 80 },
        { name: '项目名称4', unit: '发布单位4', views: 90 },
        { name: '项目名称5', unit: '发布单位5', views: 110 },
        { name: '项目名称6', unit: '发布单位6', views: 130 },
        { name: '项目名称7', unit: '发布单位7', views: 70 },
        { name: '项目名称8', unit: '发布单位8', views: 85 }
      ],
      months: [
        { value: 1, label: '一月' },
        { value: 2, label: '二月' },
        { value: 3, label: '三月' },
        { value: 4, label: '四月' },
        { value: 5, label: '五月' },
        { value: 6, label: '六月' },
        { value: 7, label: '七月' },
        { value: 8, label: '八月' },
        { value: 9, label: '九月' },
        { value: 10, label: '十月' },
        { value: 11, label: '十一月' },
        { value: 12, label: '十二月' }
      ],
      selectedMonth: new Date().getMonth() + 1,
      policyCalendarList: [
        // Example data
        // 注意列表中会有一个剩余日期，这个不需要传，是直接通过结束时间和系统时间做差
        {
          id: 1,
          name: '政策1',
          startDate: '2024-01-15',
          endDate: '2024-02-15',
          views: 100
        },
        {
          id: 2,
          name: '政策2',
          startDate: '2024-03-01',
          endDate: '2024-04-01',
          views: 150
        }
        // Add more policy data here
      ],

      currentPage: 1,
      pageSize: 10
    }
  },
  computed: {
    filteredPolicies() {
      const startOfMonth = new Date(
        new Date().getFullYear(),
        this.selectedMonth - 1,
        1
      )
      const endOfMonth = new Date(
        new Date().getFullYear(),
        this.selectedMonth,
        0
      )
      const today = new Date()

      return this.policyCalendarList
        .filter((policy) => {
          const startDate = new Date(policy.startDate)
          const endDate = new Date(policy.endDate)
          return (
            (startDate >= startOfMonth && startDate <= endOfMonth) ||
            (endDate >= startOfMonth && endDate <= endOfMonth) ||
            (startDate <= startOfMonth && endDate >= endOfMonth)
          )
        })
        .map((policy) => {
          const endDate = new Date(policy.endDate)
          const timeDiff = endDate.getTime() - today.getTime()
          const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24))
          return { ...policy, daysLeft }
        })
    },
    paginatedPolicies() {
      const start = (this.currentPage - 1) * this.pageSize
      const end = start + this.pageSize
      return this.filteredPolicies.slice(start, end)
    }
  },
  async created() {
    this.fetchPolicyList()
    this.fetchPolicyCalendarList()
  },
  methods: {
    async fetchPolicyList() {
      await new Promise((resolve, reject) => {
        request({
          url: '/policy/heading',
          method: 'get'
        })
          .then((response) => {
            this.policyList = response
          })
      })
    },
    async fetchPolicyCalendarList() {
      await new Promise((resolve, reject) => {
        request({
          url: '/policy/monthly',
          method: 'get'
        })
          .then((response) => {
            this.policyCalendarList = response
          })
      })
    },
    proroute() {
      this.$router.push({ name: 'Query' })
    },
    policyroute() {
      this.$router.push({ name: 'Browse' })
    },
    policyhandleTabClick(tab) {
      console.log(`切换到标签页: ${tab.name}`)
    },
    monthhandleTabClick(tab) {
      console.log(`切换到标签页: ${tab.name}`)
    },
    checkDetail(name) {
      this.$router.push({ path: `/details/policy/${name}` });
    },
    checkproDetail(name) {
      this.$router.push({ path: `/details/pro/${name}` });
    },
    selectMonth(month) {
      this.selectedMonth = month
      this.currentPage = 1
    },
    handlePageChange(page) {
      this.currentPage = page
    },
    viewPolicyDetails(policy) {
      console.log(`查看政策详情: ${policy.name}`)
      // Implement navigation to policy details page
      const policyName = policy.name
      this.$router.push({ name: 'PolicyDetails', params: { policyName }})
    }
  }
}
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

/* 政策月历部分 */
.month-selection {
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
}

.policy-calendar {
  margin-top: 20px;
}

.policy-calendar .el-table__header-wrapper {
  background-color: #f5f7fa;
}
</style>
