<template>
  <div class="policy-detail">
    <div class="policy-header">
      <h1>{{ policyTitle }}</h1>
      <fieldset class="title-fieldset"></fieldset>
      <div class="policy-info">
        <span>时间：{{ publishDate }}</span>
        <span>浏览量：{{ viewCount }}</span>
        <span>文号：{{ documentNumber }}</span>
      </div>
    </div>
    <div class="policy-description">
      <p>{{ description }}</p>
    </div>
    <el-divider></el-divider>
    <!-- 政策内容展示框 -->
    <div class="policy-content">
      <p>{{ textarea }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      policyTitle:
        "北京市西城区发展和改革委员会 关于印发《西城区促进绿色低碳高质量发展若干措施》的通知",
      publishDate: "2024-06-24",
      viewCount: 90,
      documentNumber: "西发改文【2024】82号",
      description:
        "区政府各委、办、局，各街道办事处，各有关单位：\n现将《西城区促进绿色低碳高质量发展若干措施》印发给你们，请结合实际认真贯彻执行。",
      textarea: "",
    };
  },
};
</script>

<style scoped>
.policy-detail {
  margin: 20px;
}

.policy-header {
  margin-bottom: 10px;
}

.policy-header h1 {
  font-size: 24px;
  font-weight: bold;
}

.policy-info {
  display: flex;
  gap: 20px;
  margin-top: 5px;
  font-size: 14px;
  color: #666;
}

.policy-description {
  margin: 20px 0;
  font-size: 16px;
}

.title-fieldset {
  border: none;
  border-top: 3px solid black;
}
.title-fieldset .inner {
  margin: 0 auto;
  padding: 0 0.25rem;
}
</style>
