<template>
  <div>
    <div class="policy-header">
      <div class="policy-header-content">
        <div class="policy-icon">
          <img
            src="https://zhengce.beijing.gov.cn/bk-config/pub/0002/0001/zhengcetoutiao2.png?version=v1.1.5"
            alt="政策头条"
            class="zhengcetoutiao-title"
          />
          <img
            src="https://zhengce.beijing.gov.cn/bk-config/pub/0002/0001/zhengcetoutiao.png?version=v1.1.5"
            class="zhengcetoutiao-img"
            alt="政策头条图片"
          />
        </div>
        <div class="policy-text">
          <!-- 这个list后续可以用vue的v-for进行渲染 -->
          <ul>
            <li>
              关于克现《门头沟区关于支持和服务高新技术企业发展若干措施》2023年度应发资金的通知
            </li>
            <li>关于申报2024年北京市企业海外知识产权预警项目的通知</li>
            <li>关于征集电子商务创新示范项目的通知</li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 这个div用来做一个格子，然后设置一个背景图片 -->
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
            <!-- 内容是从policyList中拿来的 -->
            <li v-for="policy in policyList" :key="policy.id">
              <span class="policy-title">{{ policy.title }}</span>
              <span class="policy-date">{{ policy.date }}</span>
            </li>
          </ul>
        </div>
        <div v-if="policyactiveTab === 'beijing'">
          <!-- 北京的内容 -->
          <p>北京的政策内容展示在这里。</p>
        </div>
        <div v-if="policyactiveTab === 'districts'">
          <!-- 各区的内容 -->
          <p>各区的政策内容展示在这里。</p>
        </div>
      </div>
    </div>
    <div class="project-container">
      <div class="sector-header">
        <h2 class="project-apply-header">项目申报</h2>
        <!-- 这个文字链接点击后进入到项目查询界面 -->
        <el-link
          href="https://element.eleme.io"
          target="_blank"
          class="more-button"
          >查看更多 &gt;
        </el-link>
        <fieldset class="title-fieldset"></fieldset>
      </div>
      <div class="project-cards">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <el-button style="float: right; padding: 3px 0" type="text"
              >操作按钮</el-button
            >
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{ "列表内容 " + o }}
          </div>
        </el-card>
        <!-- 这个card貌似也要动态生成 -->
      </div>
      <div class="sector-header">
        <h2 class="policy-month-header">政策月历</h2>
        <el-link
          href="https://element.eleme.io"
          target="_blank"
          class="more-button"
          >查看更多 &gt;
        </el-link>
        <fieldset class="title-fieldset"></fieldset>
      </div>
      <div class="month-container">
        <el-tabs
          v-model="monthactiveTab"
          @tab-click="monthhandleTabClick"
          type="border-card"
        >
          <el-tab-pane label="1月" name="January"></el-tab-pane>
          <el-tab-pane label="2月" name="February"></el-tab-pane>
          <el-tab-pane label="3月" name="March"></el-tab-pane>
          <el-tab-pane label="4月" name="April"></el-tab-pane>
          <el-tab-pane label="5月" name="May"></el-tab-pane>
          <el-tab-pane label="6月" name="June"></el-tab-pane>
          <el-tab-pane label="7月" name="July"></el-tab-pane>
          <el-tab-pane label="8月" name="August"></el-tab-pane>
          <el-tab-pane label="9月" name="September"></el-tab-pane>
          <el-tab-pane label="10月" name="October"></el-tab-pane>
          <el-tab-pane label="11月" name="November"></el-tab-pane>
          <el-tab-pane label="12月" name="December"></el-tab-pane>
        </el-tabs>
        <div class="month-content">
          <!-- 条件渲染内容 -->
          <div v-if="monthactiveTab === 'January'">
            <ul class="month-list">
              <li v-for="policy in policyList" :key="policy.id">
                <span class="month-title">{{ policy.title }}</span>
                <span class="month-date">{{ policy.date }}</span>
              </li>
            </ul>
          </div>

          <div v-if="monthactiveTab === 'February'">
            <!-- 北京的内容 -->
            <p>北京的政策内容展示在这里。</p>
          </div>
          <div v-if="monthactiveTab === 'March'">
            <!-- 各区的内容 -->
            <p>各区的政策内容展示在这里。</p>
          </div>
          <div v-if="monthactiveTab === 'April'">
            <!-- 各区的内容 -->
            <p>各区的政策内容展示在这里。</p>
          </div>
          <div v-if="monthactiveTab === 'May'">
            <!-- 各区的内容 -->
            <p>各区的政策内容展示在这里。</p>
          </div>
          <div v-if="monthactiveTab === 'June'">
            <!-- 各区的内容 -->
            <p>各区的政策内容展示在这里。</p>
          </div>
          <div v-if="monthactiveTab === 'July'">
            <!-- 各区的内容 -->
            <p>各区的政策内容展示在这里。</p>
          </div>
          <div v-if="monthactiveTab === 'August'">
            <!-- 各区的内容 -->
            <p>各区的政策内容展示在这里。</p>
          </div>
          <div v-if="monthactiveTab === 'September'">
            <!-- 各区的内容 -->
            <p>各区的政策内容展示在这里。</p>
          </div>
          <div v-if="monthactiveTab === 'October'">
            <!-- 各区的内容 -->
            <p>各区的政策内容展示在这里。</p>
          </div>
          <div v-if="monthactiveTab === 'November'">
            <!-- 各区的内容 -->
            <p>各区的政策内容展示在这里。</p>
          </div>
          <div v-if="monthactiveTab === 'December'">
            <!-- 各区的内容 -->
            <p>各区的政策内容展示在这里。</p>
          </div>
        </div>
        <!-- 分页组件 -->
        <!-- 分页组件也是根据月份变化的 -->
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </div>
    </div>

    <div class="policy-month-container"></div>

    <!-- 图文解读部分暂时不做，因为没有这部分的内容 -->

    <!-- <div class="pic-text-container">
      <h2>图文解读</h2>
      <el-link href="https://element.eleme.io" target="_blank"
        >查看更多 &gt;
      </el-link>
      <div class="pic-text-content">
        <el-row>
          <el-col
            :span="8"
            v-for="(o, index) in 2"
            :key="o"
            :offset="index > 0 ? 2 : 0"
          >
            <el-card :body-style="{ padding: '0px' }">
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image"
              />
              <div style="padding: 14px">
                <span>好吃的汉堡</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      policyactiveTab: "policyList",
      monthactiveTab: "January",
      // 带图卡片的日期
      currentDate: new Date(),
      monthList: [
        {
          id: 1,
          title: "fukc",
          date: "2024-07-05",
        },
      ],
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
    };
  },
  methods: {
    policyhandleTabClick(tab) {
      // 可在此处添加点击标签页的逻辑
      console.log(`切换到标签页: ${tab.name}`);
    },
    monthhandelTabClick(tab) {
      console.log(`切换到标签页: ${tab.name}`);
    },
  },
};
</script>

<style scoped>
.policy-header {
  background-color: #f5e8de; /* 设置背景颜色 */
  padding: 10px 20px; /* 设置内边距 */
}

.policy-header-content {
  display: flex; /* 使用flex布局 */
  align-items: center; /* 垂直居中对齐 */
}

.policy-icon img {
  width: 50px; /* 设置图标宽度 */
  margin-right: 10px; /* 设置图标与文本之间的间距 */
}

.policy-text ul {
  list-style: none; /* 去掉默认的列表样式 */
  padding: 0; /* 去掉内边距 */
  margin: 0; /* 去掉外边距 */
}

.policy-text li {
  margin-bottom: 5px; /* 设置每个列表项的间距 */
  font-size: 14px; /* 设置字体大小 */
}

.policy-text li:last-child {
  margin-bottom: 0; /* 去掉最后一个列表项的间距 */
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

/* 卡片的样式 */
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

/* 设置带图卡片样式 */
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
  margin-top: 40px;
}

.policy-month-header {
  display: inline-block;
}

/* 设置分割线样式 */
.title-fieldset {
  border: none;
  border-top: 3px solid black;
}
.title-fieldset .inner {
  margin: 0 auto;
  padding: 0 0.25rem;
}
</style>
