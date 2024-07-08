<template>
  <div class="all_body">
    <div class="Taps">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="企业查询" name="first"></el-tab-pane>
        <el-tab-pane label="众创空间查询" name="second"></el-tab-pane>
        <el-tab-pane label="孵化器查询" name="third"></el-tab-pane>
        <el-tab-pane label="加速器查询" name="fourth"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="Input">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="所属园区">
          <el-input
            min-width="50%"
            v-model="formInline.carrier"
            placeholder="请输入所属园区"
          ></el-input>
        </el-form-item>
        <el-form-item label="产业类型">
          <el-select v-model="formInline.kind" placeholder="所有类型">
            <el-option label="类型一" value="first"></el-option>
            <el-option label="类型二" value="second"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="孵化状态">
          <el-select v-model="formInline.status" placeholder="未选择">
            <el-option label="状态一" value="f"></el-option>
            <el-option label="状态二" value="s"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-form :inline="true" :model="formInline" class="Second_Input">
        <el-form-item label="企业名称">
          <el-input
            v-model="formInline.carrier"
            placeholder="请输入企业名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="企业排序">
          <el-select v-model="formInline.kind" placeholder="自然排序">
            <el-option label="一" value="first"></el-option>
            <el-option label="二" value="second"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" plain>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div style="padding: 10px" class="top1">
      <el-alert :closable="false" title="企业列表" />
    </div>
    <div class="se_body">
      <el-table ref="filterTable" :data="tableData" style="width: 100%">
        <el-table-column prop="number" label="序号" min-width="9%">
        </el-table-column>
        <el-table-column prop="credit" label="社会信用代码" min-width="11%">
        </el-table-column>
        <el-table-column prop="name" label="企业名称" min-width="10%">
        </el-table-column>

        <el-table-column prop="kind" label="高新技术产业分类" min-width="20%">
        </el-table-column>
        <el-table-column prop="date" label="成立时间" min-width="10%">
        </el-table-column>
        <el-table-column prop="in_date" label="入孵时间" min-width="10%">
        </el-table-column>
        <el-table-column prop="status" label="孵化状态" min-width="10%">
        </el-table-column>
        <el-table-column prop="carrier" label="所属载体" min-width="10%">
        </el-table-column>

        <el-table-column fixed="right" label="操作" min-width="10%">
          <template slot-scope="scope">
            <el-button @click="HandleClick(scope.row)" type="text" size="small"
              >详情</el-button
            >
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
.block {
  text-align: center;

  padding-bottom: 20px;
}
.Taps {
  margin: 20px 20px;
}
.Input {
  border: solid;
  border-width: 2px;
  border-color: rgb(243, 243, 243);
  margin: 10px 10px;
}
.demo-form-inline {
  padding-top: 30px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
}
.se_body {
  padding: 10px;
}
.Second_Input {
  padding: 10px 20px;
}
</style>
<script>
export default {
  data() {
    return {
      activeName: "second",
      formInline: {
        carrier: "",
        kind: "",
        status: "",
      },
      tableData: [
        {
          number: "1",
          credit: "132165451518TS11",
          name: "合肥工业大学",
          kind: "软件大数据，信息安全",
          date: "2016-01-26",
          in_date: "2016-02-15",
          status: "毕业企业*",
          carrier: "中科大",
        },
        {
          number: "2",
          credit: "132165451518TS11",
          name: "合肥工业大学",
          kind: "软件大数据，信息安全",
          date: "2016-01-26",
          in_date: "2016-02-15",
          status: "毕业企业*",
          carrier: "中科大",
        },
        {
          number: "3",
          credit: "132165451518TS11",
          name: "合肥工业大学",
          kind: "软件大数据，信息安全",
          date: "2016-01-26",
          in_date: "2016-02-15",
          status: "毕业企业*",
          carrier: "中科大",
        },
        {
          number: "4",
          credit: "132165451518TS11",
          name: "合肥工业大学",
          kind: "软件大数据，信息安全",
          date: "2016-01-26",
          in_date: "2016-02-15",
          status: "毕业企业*",
          carrier: "中科大",
        },
        {
          number: "5",
          credit: "132165451518TS11",
          name: "合肥工业大学",
          kind: "软件大数据，信息安全",
          date: "2016-01-26",
          in_date: "2016-02-15",
          status: "毕业企业*",
          carrier: "中科大",
        },
        {
          number: "6",
          credit: "132165451518TS11",
          name: "合肥工业大学",
          kind: "软件大数据，信息安全",
          date: "2016-01-26",
          in_date: "2016-02-15",
          status: "毕业企业*",
          carrier: "中科大",
        },
        {
          number: "7",
          credit: "132165451518TS11",
          name: "合肥工业大学",
          kind: "软件大数据，信息安全",
          date: "2016-01-26",
          in_date: "2016-02-15",
          status: "毕业企业*",
          carrier: "中科大",
        },
        {
          number: "8",
          credit: "132165451518TS11",
          name: "合肥工业大学",
          kind: "软件大数据，信息安全",
          date: "2016-01-26",
          in_date: "2016-02-15",
          status: "毕业企业*",
          carrier: "中科大",
        },
        {
          number: "9",
          credit: "132165451518TS11",
          name: "合肥工业大学",
          kind: "软件大数据，信息安全",
          date: "2016-01-26",
          in_date: "2016-02-15",
          status: "毕业企业*",
          carrier: "中科大",
        },
        {
          number: "10",
          credit: "132165451518TS11",
          name: "合肥工业大学",
          kind: "软件大数据，信息安全",
          date: "2016-01-26",
          in_date: "2016-02-15",
          status: "毕业企业*",
          carrier: "中科大",
        },
        {
          number: "11",
          credit: "132165451518TS11",
          name: "合肥工业大学",
          kind: "软件大数据，信息安全",
          date: "2016-01-26",
          in_date: "2016-02-15",
          status: "毕业企业*",
          carrier: "中科大",
        },
      ],
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>
