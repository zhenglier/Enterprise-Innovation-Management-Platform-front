<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="未审核企业" name="first">
      <div class="first-container">
        <el-alert :closable="false">未审核企业列表</el-alert>
        <el-table
          :data="getCurrentPageData(firsttableData, currentPage1, pageSize1)"
          stripe
          style="width: 100%"
          class="first-table"
        >
          <el-table-column
            prop="index"
            label="序号"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="unicode"
            label="社会统一代码"
            width="180"
          ></el-table-column>
          <el-table-column prop="name" label="企业名称"></el-table-column>
          <el-table-column
            prop="date"
            label="申请时间"
            width="180"
          ></el-table-column>
          <el-table-column label="企业情况" width="180">
            <template slot-scope="scope">
              <el-button
                type="text"
                size="mini"
                @click="checkDetail(scope.$index, scope.row.id)"
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
            :page-sizes="[10, 20, 50, 100]"
            :page-size="pageSize1"
            layout="total, sizes, prev, pager, next, jumper"
            :total="firsttableData.length"
          ></el-pagination>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="已审核企业" name="second">
      <div class="second-container">
        <el-alert :closable="false">已审核企业列表</el-alert>
        <el-table
          :data="getCurrentPageData(secondtableData, currentPage2, pageSize2)"
          stripe
          style="width: 100%"
          class="second-table"
        >
          <el-table-column
            prop="index"
            label="序号"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="unicode"
            label="社会统一代码"
            width="180"
          ></el-table-column>
          <el-table-column prop="name" label="企业名称"></el-table-column>
          <el-table-column
            prop="date"
            label="申请时间"
            width="180"
          ></el-table-column>
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
          <el-table-column prop="applyCondition" label="申请情况" width="180">
          </el-table-column>
        </el-table>
        <div class="page-part">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage2"
            :page-sizes="[10, 20, 50, 100]"
            :page-size="pageSize2"
            layout="total, sizes, prev, pager, next, jumper"
            :total="secondtableData.length"
          ></el-pagination>
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
      activeName: "second",
      firsttableData: [
        {
          index: 1,
          unicode: "12345",
          name: "王小虎",
          date: "2016-05-02",
          apply_condition: "",
        },
        // 其他数据...
      ],
      secondtableData: [
        {
          index: 1,
          unicode: "12345",
          name: "王小虎",
          date: "2016-05-02",
          applyCondition: "已通过",
        },
        // 其他数据...
      ],
      currentPage1: 1,
      currentPage2: 1,
      pageSize1: 10,
      pageSize2: 10,
    };
  },
  async created() {
    new Promise(async (resolve,reject) =>{
      var status=0;
      await request({
        url: "/trans/review/in",
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
        url: "/trans/review/in",
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
    handleSuccess(index, row) {
      new Promise(async (resolve,reject) =>{
      await request({
        url: "/trans/review/in/accept/"+row.appId,
        method: "put",
      })
        .then((response) =>{
          console.log(response);
          window.location.reload();
        })
      })
    },
    handleCancel(index, row) {
      new Promise(async (resolve,reject) =>{
      await request({
        url: "/trans/review/in/reject/"+row.appId,
        method: "put",
      })
        .then((response) =>{
          console.log(response);
          window.location.reload();
        })
      })
    },
    handleSendBack(index, row) {
      row.apply_condition = "已退回";
      this.moveToSecondTable(index, row);
    },
    moveToSecondTable(index, row) {
      this.firsttableData.splice(index, 1);
      this.secondtableData.push(row);
    },
    checkDetail(index, unicode) {
      this.$router.push({ path: `/details/info/${unicode}` });
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
    getCurrentPageData(data, currentPage, pageSize) {
      const start = (currentPage - 1) * pageSize;
      const end = start + pageSize;
      return data.slice(start, end);
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
