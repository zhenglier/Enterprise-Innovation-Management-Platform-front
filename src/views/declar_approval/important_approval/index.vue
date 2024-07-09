<template>
  <div class="all_body">
    <div style="padding: 30px">
      <el-alert :closable="false" title="重大信息变更审批" />
    </div>
    <div class="se_body">
      <el-table ref="filterTable" :data="tableData" style="width: 100%">
<<<<<<< HEAD
        <el-table-column prop="number" label="序号" min-width="10%">
        </el-table-column>
        <el-table-column prop="date" label="申请时间" min-width="20%">
        </el-table-column>
        <el-table-column prop="name" label="企业名称" min-width="20%">
        </el-table-column>
        <el-table-column prop="kind" label="变更类型" min-width="20%">
        </el-table-column>
        <el-table-column
          prop="result"
          label="审核结果"
          min-width="20%"
          :filters="[
            { text: '待审核', value: '待审核' },
            { text: '同意', value: '同意' },
            { text: '拒绝', value: '拒绝' },
            { text: '退回', value: '退回' },
          ]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
        >
          <template slot-scope="scope">
            <el-tag :type="getTagType(scope.row.result)" disable-transitions>{{
              scope.row.result
            }}</el-tag>
          </template>
        </el-table-column>
=======
      <el-table-column prop="number" label="序号" min-width="10%">
      </el-table-column>
      <el-table-column prop="date" label="申请时间" min-width="20%">
      </el-table-column>
      <el-table-column prop="name" label="企业名称" smin-width="20%"> </el-table-column>
      <el-table-column prop="kind" label="变更类型" min-width="20%"> </el-table-column>
>>>>>>> 1ff686be7419321e628e90ea760ca790f87ea01c

        <el-table-column fixed="right" label="操作" min-width="10%">
          <template slot-scope="scope">
            <el-button type="text" size="small">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="block">
      <span class="demonstration"></span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>
<style>
.se_body {
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.block {
  text-align: center;

  padding-bottom: 20px;
}
</style>
<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    filterTag(value, row) {
      return row.result === value;
    },
    handleClick(row) {
      console.log(row);
    },

    getTagType(result) {
      const resultTagMap = {
        待审核: "info",
        同意: "success",
        拒绝: "danger",
        退回: "warning",

        // 可以继续添加更多的状态及其对应的标签类型
      };
      return resultTagMap[result];
    },
  },
  data() {
    return {
      currentPage4: 1,
      tableData: [
        {
          number: "1",
          date: "2016-05-02",
          name: "安徽雷车科技有限公司",
          kind: "企业注册资金变更",
          result: "同意",
        },
        {
          number: "2",

          date: "2016-05-02",
          name: "安徽雷车科技有限公司",
          kind: "企业注册资金变更",
          result: "退回",
        },
        {
          number: "3",

          date: "2016-05-02",
          name: "安徽雷车科技有限公司",
          kind: "企业注册资金变更",
          result: "拒绝",
        },
        {
          number: "3",

          date: "2016-05-02",
          name: "安徽雷车科技有限公司",
          kind: "企业注册资金变更",
          result: "同意",
        },
        {
          number: "4",

          date: "2016-05-02",
          name: "安徽雷车科技有限公司",
          kind: "企业注册资金变更",
          result: "同意",
        },
        {
          number: "5",

          date: "2016-05-02",
          name: "安徽雷车科技有限公司",
          kind: "企业注册资金变更",
          result: "待审核",
        },
        {
          number: "6",

          date: "2016-05-02",
          name: "安徽雷车科技有限公司",
          kind: "企业注册资金变更",
          result: "待审核",
        },
        {
          number: "7",

          date: "2016-05-02",
          name: "安徽雷车科技有限公司",
          kind: "企业注册资金变更",
          result: "退回",
        },
        {
          number: "8",

          date: "2016-05-02",
          name: "安徽雷车科技有限公司",
          kind: "企业注册资金变更",
          result: "拒绝",
        },
        {
          number: "9",

          date: "2016-05-02",
          name: "安徽雷车科技有限公司",
          kind: "企业注册资金变更",
          result: "同意",
        },
        {
          number: "10",

          date: "2016-05-02",
          name: "安徽雷车科技有限公司",
          kind: "企业注册资金变更",
          result: "同意",
        },
      ],
    };
  },
};
</script>
