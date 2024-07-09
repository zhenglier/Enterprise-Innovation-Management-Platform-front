<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="未审核企业" name="first">
      <div class="first-container">
        <el-alert :closable="false">未审核企业列表</el-alert>
        <el-table
          :data="firsttableData"
          stripe
          style="width: 100%"
          class="first-table"
        >
          <el-table-column prop="index" label="序号" width="180">
          </el-table-column>
          <el-table-column prop="unicode" label="社会统一代码" width="180">
          </el-table-column>
          <el-table-column prop="name" label="企业名称"> </el-table-column>
          <el-table-column prop="date" label="申请时间" width="180">
          </el-table-column>
          <el-table-column label="企业情况" width="180">
            <template slot-scope="scope">
              <el-button
                type="text"
                size="mini"
                @click="checkDetail(scope.$index, scope.row.unicode)"
                >[详情]</el-button
              >
            </template>
          </el-table-column>
          <el-table-column label="申请选项" width="180">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="success"
                @click="handleSuccess(scope.$index, scope.row)"
                >同意</el-button
              >
              <el-button
                size="mini"
                type="danger"
                @click="handleCancel(scope.$index, scope.row)"
                >拒绝</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-tab-pane>
    <el-tab-pane label="已审核企业" name="second">
      <div class="second-container">
        <el-alert :closable="false">已审核企业列表</el-alert>
        <el-table
          :data="secondtableData"
          stripe
          style="width: 100%"
          class="second-table"
        >
          <el-table-column prop="index" label="序号" width="180">
          </el-table-column>
          <el-table-column prop="unicode" label="社会统一代码" width="180">
          </el-table-column>
          <el-table-column prop="name" label="企业名称"> </el-table-column>
          <el-table-column prop="date" label="申请时间" width="180">
          </el-table-column>
          <el-table-column label="企业情况" width="180">
            <template slot-scope="scope">
              <el-button
                type="text"
                size="mini"
                @click="checkDetail(scope.$index, scope.row.unicode)"
                >[详情]</el-button
              >
            </template>
          </el-table-column>
          <el-table-column prop="apply_condition" label="申请情况" width="180">
          </el-table-column>
        </el-table>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {
      //标签页跳转数据
      activeName: "second",
      // 未完成审核列表
      firsttableData: [
        {
          index: 1,
          unicode: "12345",
          name: "王小虎",
          date: "2016-05-02",
        },
      ],
      //完成审核列表
      secondtableData: [
        {
          index: 1,
          unicode: "12345",
          name: "王小虎",
          date: "2016-05-02",
          apply_condition: "已通过",
        },
      ],
    };
  },
  //标签页跳转方法
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //同意入驻按钮,这里的两个参数
    handleSuccess(index, row) {
      console.log(index, row);
    },
    //拒绝入驻按钮
    handleCancel(index, row) {
      console.log(index, row);
    },
    //查看企业详情按钮
    checkDetail(index, unicode) {
      console.log(index, unicode);
    },
  },
};
</script>

<style scoped></style>
