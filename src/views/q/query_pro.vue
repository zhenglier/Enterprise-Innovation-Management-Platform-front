<template>
  <div>
    <h1>企业详情</h1>
    <p>社会统一代码: {{ enterprise.unicode }}</p>
    <p>企业名称: {{ enterprise.name }}</p>
    <p>申请时间: {{ enterprise.date }}</p>
    <!-- 其他详细信息 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      enterprise: {
        unicode: "",
        name: "",
        date: "",
        // 其他属性
      },
    };
  },
  created() {
    const unicode = this.$route.params.unicode;
    this.fetchEnterpriseDetails(unicode);
  },
  methods: {
    fetchEnterpriseDetails(unicode) {
      // 这里使用假数据，你可以在这里替换为实际的API调用
      const fakeData = {
        unicode: unicode,
        name: "假企业名称",
        date: "2024-07-10",
        // 其他假数据
      };
      this.enterprise = fakeData;
    },
  },
};
</script>

<style scoped>
/* 样式 */
</style>
