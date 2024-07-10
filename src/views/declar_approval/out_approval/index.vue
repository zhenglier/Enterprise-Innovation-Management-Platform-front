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
          <el-table-column label="审批选项" width="240">
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
              <el-button
                size="mini"
                type="warning"
                @click="handleSendBack(scope.$index, scope.row)"
                >退回</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="page-part">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage1"
            :page-sizes="[1, 20, 50, 100]"
            :page-size="pageSize1"
            layout="total, sizes, prev, pager, next, jumper"
            :total="firsttableData.length"
          >
          </el-pagination>
        </div>
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
          <el-table-column prop="applyCondition" label="审核情况" width="180">
          </el-table-column>
        </el-table>
        <div class="page-part">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage2"
            :page-sizes="[1, 20, 50, 100]"
            :page-size="pageSize2"
            layout="total, sizes, prev, pager, next, jumper"
            :total="secondtableData.length"
          >
          </el-pagination>
        </div>
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
        { index: 1, unicode: "12345", name: "王小虎", date: "2016-05-02" },
        // Add more data as needed
      ],
      secondtableData: [
        {
          index: 1,
          unicode: "12345",
          name: "王小虎",
          date: "2016-05-02",
          applyCondition: "同意搬离",
        },
        {
          index: 1,
          unicode: "12345",
          name: "王小虎",
          date: "2016-05-02",
          applyCondition: "同意搬离",
        },
        {
          index: 1,
          unicode: "12345",
          name: "王小虎",
          date: "2016-05-02",
          applyCondition: "同意搬离",
        },
      ],
      currentPage1: 1,
      currentPage2: 1,
      pageSize1: 1,
      pageSize2: 1,
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
    handleSendBack(index, row) {
      console.log(index, row);
    },
    checkDetail(index, unicode) {
      console.log(index, unicode);
    },
    handleSizeChange(pageSize) {
      if (this.activeName === "first") {
        this.pageSize1 = pageSize;
      } else if (this.activeName === "second") {
        this.pageSize2 = pageSize;
      }
    },
    handleCurrentChange(currentPage) {
      if (this.activeName === "first") {
        this.currentPage1 = currentPage;
      } else if (this.activeName === "second") {
        this.currentPage2 = currentPage;
      }
    },
  },
};
</script>

<style scoped>
.page-part {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
