<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="未审核企业" name="first">
      <div class="first-container">
        <el-alert>未审核企业列表</el-alert>
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
          <el-table-column label="审核选项" width="180">
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
        <el-alert>已审核企业列表</el-alert>
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
          <el-table-column prop="applyCondition" label="审核情况" width="180">
          </el-table-column>
        </el-table>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import request from "@/utils/request";
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
          applyCondition: "同意搬离",
        },
      ],
    };
  },
  async created() {
    new Promise(async (resolve,reject) =>{
      var status=0;
      await request({
        url: "/trans/review/out",
        method: "get",
        params:{status}
      })
        .then((response) =>{
          // console.log(response);
          this.firsttableData=response;
        })
    })
    new Promise(async (resolve,reject) =>{
      var status=1;
      await request({
        url: "/trans/review/out",
        method: "get",
        params:{status}
      })
        .then((response) =>{
          // console.log(response);
          this.secondtableData=response;
        })
    })
  },
  //标签页跳转方法
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    //同意搬离按钮,这里的两个参数
    handleSuccess(index, row) {
      new Promise(async (resolve,reject) =>{
      await request({
        url: "/trans/review/out/accept/"+row.appId,
        method: "put",
      })
        .then((response) =>{
          console.log(response);
          window.location.reload();
        })
      })
    },
    //拒绝搬离按钮
    handleCancel(index, row) {
      new Promise(async (resolve,reject) =>{
      await request({
        url: "/trans/review/out/reject/"+row.appId,
        method: "put",
      })
        .then((response) =>{
          console.log(response);
          window.location.reload();
        })
      })
    },
    checkDetail(index, unicode) {
      console.log(index, unicode);
    },
  },
};
</script>

<style scoped></style>
