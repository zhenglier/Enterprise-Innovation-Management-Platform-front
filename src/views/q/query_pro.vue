<template>
  <div class="all_body">
    <div style="padding: 30px" class="top1">
      <el-alert :closable="false" title="项目申报" />
    </div>
    <div class="button-container">
      <el-row>
        <el-button
          class="custom-button"
          type="danger"
          size="medium"
          @click="backTo"
          >返回</el-button
        >
      </el-row>
    </div>
    <div class="apply_name">
      <div class="name_content">
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"> <div class="App">申报项目名称</div></el-col>
          <el-col :span="3">
            <div class="App_IN" style="font-weight: bold; font-size: larger">
              {{ Apply_name }}
            </div></el-col
          >
        </el-row>
      </div>
    </div>
    <div class="apply_file">
      <div class="files">
        <el-alert :closable="false" title="申报项目文件" />
      </div>

      <basic-container>
        <el-upload
          class="upload-demo"
          ref="upload"
          :headers="headers"
          action="/admin/sys-file/upload"
          :on-success="handleAvatarSuccess"
          :show-file-list="false"
        >
          <el-button slot="trigger" size="small" type="primary"
            >上传文件</el-button
          >
        </el-upload>
        <el-table
          class="down"
          :data="dataList"
          border
          stripe
          style="width: 100%; margin-top: 20px"
        >
          <el-table-column prop="attachName" label="文件名称"></el-table-column>
          <el-table-column prop="attachSize" label="文件大小">
            <template slot-scope="scope">
              <span v-if="scope.row.attachSize / 1024 / 1024 < 1">{{
                (scope.row.attachSize / 1024).toFixed(2) + "KB"
              }}</span>
              <span v-else>{{
                (scope.row.attachSize / 1024 / 1024).toFixed(2) + "MB"
              }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="createTime" label="上传时间"></el-table-column>
          <el-table-column width="150px" label="操作">
            <template slot-scope="scope">
              <el-button
                size="small"
                type="text"
                @click="deleteHandle(scope.row.id)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </basic-container>
    </div>
  </div>
</template>

<style>
.button-container {
  text-align: right;
}
.upload-demo {
  margin: 10px 12px;
}
.name_content {
  margin: 10px 8px;
}
.content {
  margin: 20px 20px;
  border-width: 0;
}
.apply_file {
  margin-bottom: 10px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(215, 215, 215);
}
.files .el-alert {
  border-radius: 0;
  background-color: rgb(241, 244, 249);
}

.apply_name {
  margin-bottom: 10px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(215, 215, 215);
}
.custom-button {
  width: 150px; /* 调整按钮宽度 */
  height: 45px;
  margin-left: 10px; /* 按钮之间的间隔 */
  margin-right: 10px;
}

/* 如果需要第一个按钮没有左边距 */
.custom-button:first-child {
  margin-left: 0;
}
/* .custom-button:last-child {
  margin-right: 30px;
} */
.name .el-alert {
  border-radius: 0;
  background-color: rgb(241, 244, 249);
}
.App {
  font-weight: bold;
}
</style>
<script>
import store from "@/store";

export default {
  data() {
    return {
      dataForm: {
        id: 0,
        noticeId: "",
        attachName: "",
        attachUrl: "",
        attachSize: "",
      },
      dataList: [],
      headers: {
        Authorization: "Bearer " + store.getters.access_token,
      },
    };
  },

  methods: {
    backTo() {
      this.$router.push({ path: "/pro_related/progress_query" });
    },
    open() {
      this.$alert("保存成功", "提示", {
        confirmButtonText: "确定",
        callback: (action) => {
          this.$message({
            type: "info",
            message: `action: ${action}`,
          });
        },
      });
    },
    apply() {
      this.$confirm("此操作将提交申请, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "提交成功！",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消提交",
          });
        });
    },
    init(id) {
      this.dataForm.noticeId = id;
      this.$nextTick(() => {
        if (this.dataForm.noticeId) {
          this.getDataList();
        }
      });
    },
    //获取附件列表
    getDataList() {
      getnoticeId(this.dataForm.noticeId).then((response) => {
        this.dataList = response.data.data;
      });
    },
    //下载按钮回调
    downloadFile(name, url) {
      var a = document.createElement("a");
      var event = new MouseEvent("click");
      a.download = name;
      a.href = url;
      a.dispatchEvent(event);
    },
    //成功回调
    handleAvatarSuccess(res, file, fileList) {
      this.dataForm.attachName = file.name;
      this.dataForm.attachUrl = res.data.url;
      this.dataForm.attachSize = file.size;
      this.dataFormSubmit();
    },
    // 删除
    deleteHandle(id) {
      this.$confirm("是否确认删除该附件", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(function () {
          return delObj(id);
        })
        .then((data) => {
          this.$message.success("删除成功");
          this.getDataList();
        });
    },
    // 表单提交
    dataFormSubmit() {
      addObj(this.dataForm).then((data) => {
        this.$message.success("添加成功");
        this.getDataList();
      });
    },
  },

  fetchData() {
    axios
      .get("/api/your-endpoint")
      .then((response) => {
        this.dataList = response.data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  },

  mounted() {
    this.fetchData();
  },
};
</script>
