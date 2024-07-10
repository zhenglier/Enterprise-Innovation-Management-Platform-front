<template>
  <div class="all_body">
    <div style="padding: 30px" class="top1">
      <el-alert :closable="false" title="项目申报" />
    </div>
    <div class="button-container">
      <el-row>
        <el-button
          class="custom-button"
          type="warning"
          size="medium"
          @click="Back"
          >退回</el-button
        >
        <el-button
          class="custom-button"
          type="success"
          size="medium"
          @click="Pass"
          >通过</el-button
        >
        <el-button
          class="custom-button"
          type="danger"
          size="medium"
          @click="reject"
          >拒绝</el-button
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
        <div style="margin: 10px 10px">
          <el-button @click="downloadAllFiles">下载所有附件</el-button>
        </div>
      </div>
      <div class="fileContainer">
        <!--附件部分-->
        <div v-for="(file, index) in files" :key="index" class="file-item">
          <a :href="file.url" target="_blank">{{ file.name }}</a>
        </div>
      </div>
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
export default {
  data() {
    return {
      Apply_name: "",

      files: [], // 用于存储附件数据
    };
  },
  mounted() {
    this.fetchFiles();
  },

  methods: {
    Back() {
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
    Pass() {
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
    async fetchFiles() {
      try {
        // 发送请求获取附件数据
        const response = await axios.get("/api/files");
        this.files = response.data;
      } catch (error) {
        console.error("Failed to fetch files:", error);
      }
    },
    downloadAllFiles() {
      this.files.forEach((file) => {
        const link = document.createElement("a");
        link.href = file.url;
        link.download = file.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });
    },
  },
};
</script>
