e
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
          @click="open"
          >保存</el-button
        >
        <el-button
          class="custom-button"
          type="success"
          size="medium"
          @click="apply"
          >申请</el-button
        >
        <el-button class="custom-button" type="danger" size="medium"
          >返回</el-button
        >
      </el-row>
    </div>
    <div class="apply_name">
      <div class="name">
        <el-alert :closable="false" title="申报项目名称" />
      </div>
      <div class="name_content">
        <el-row :gutter="20" class="info-row">
          <el-col :span="6"
            ><el-input
              v-model="input"
              placeholder="请输入申报项目名称"
            ></el-input
          ></el-col>
          ></el-row
        >
      </div>
    </div>
    <div class="apply_file">
      <div class="files">
        <el-alert :closable="false" title="申报项目文件" />
      </div>

      <div class="content">
        <el-row>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-row>
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
</style>
<script>
export default {
  methods: {
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
  },
};
</script>
