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

      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple
        :file-list="fileList"
        :on-change="handleFileChange"
        :on-success="handleUploadSuccess"
        :on-remove="handleRemove"
        :auto-upload="false"
      >
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
      <el-form :model="Uploaded" label-position="top">
        <el-form-item label="">
          <el-table :data="Uploaded.FILES">
            <el-table-column
              prop="Uploaded_index"
              label="序号"
            ></el-table-column>

            <el-table-column
              prop="Uploaded_name"
              label="文件名称"
            ></el-table-column>
            <el-table-column
              prop="Uploaded_date"
              label="上传时间"
            ></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  @click="handleDelete(scope.$index, scope.row)"
                  type="danger"
                  size="mini"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-form-item>
      </el-form>
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
import request from '@/utils/request'
export default {
  data() {
    return {
      Apply_name: "",
      fileList: [],
      Uploaded: {
        FILES: [],
      },
    };
  },

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
          let data={
            name:this.Apply_name,
            data:JSON.stringify(this.fileList),
          };
          console.log(data);
          new Promise(async (resolve,reject) =>{
          await request({
            url: "/program/application/add",
            method: "post",
            data
          })
            .then((response) =>{
              console.log(response);
              window.location.reload();
            })
          })
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
    //以下函数待完善
    handleFileChange(file, fileList) {
      this.fileList = fileList;
      this.updateFileList();
    },
    handleUploadSuccess(response, file, fileList) {
      this.fileList = fileList;
      this.updateFileList();
    },
    handleRemove(file, fileList) {
      this.fileList = fileList;
      this.updateFileList();
    },
    //更新文件展示列表
    updateFileList() {
      this.Uploaded.FILES = this.fileList.map((f, index) => ({
        Uploaded_index: index + 1,
        Uploaded_name: f.name,
        Uploaded_date: this.formatDate(new Date(f.lastModified)), // 添加上传时间
      }));
    },
    handleDelete(index, row) {
      // 从上传文件列表中删除
      this.fileList.splice(index, 1);
      this.updateFileList();
    },
    formatDate(date) {
      // 格式化日期
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");
      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },
  },
};
</script>
