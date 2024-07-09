<template>
  <div class="all_body">
    <div style="padding: 30px" class="top1">
      <el-alert :closable="false" title="重大信息变更" />
    </div>
    <div class="enterprise_change">
      <div class="Enterprise_change">
        <el-alert :closable="false" title="企业信息变更申请" />
      </div>
      <el-row :gutter="20" class="info-row">
        <el-col :span="3">
          <div class="info-item">企业变更类型</div>
        </el-col>
        <el-col :span="15">
          <div class="select">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="content">
      <div v-if="value == '选项1'">
        <el-row :gutter="20" class="info-row">
          <el-col :span="3">
            <div class="info-item">当前企业名称</div>
          </el-col>
          <el-col :span="9">
            <div class="info-item">{{ name }}</div>
          </el-col>
          <el-col :span="3">
            <div class="info-item">变更后企业名称</div>
          </el-col>
          <el-col :span="9">
            <div style="margin: 10px 10px">
              <el-input v-model="newName" margin="30px 30px"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3">
            <div class="info-item">变更证明材料</div>
          </el-col>
          <el-col :span="8">
            <div class="up">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleUploadChange"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                list-type="picture"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="2">
            <div class="info-item">变更时间</div>
          </el-col>
          <el-col :span="6">
            <div class="block">
              <span class="demonstration"></span>
              <el-date-picker
                v-model="value2"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <div class="button-container">
            <el-button type="primary" @click="open">发起变更流程</el-button>
            <el-button type="info" plain @click="cancle">取消</el-button>
          </div>
        </el-row>
      </div>
      <div v-if="value == '选项2'">
        <el-row :gutter="20" class="info-row">
          <el-col :span="3">
            <div class="info-item">当前注册资本</div>
          </el-col>
          <el-col :span="9">
            <div class="info-item">{{ registered_capital }}</div>
          </el-col>
          <el-col :span="3">
            <div class="info-item">变更后的注册资本</div>
          </el-col>
          <el-col :span="9">
            <div class="money">
              <el-col :span="9">
                <div style="margin: 10px 10px">
                  <el-input
                    v-model="new_registered_capital"
                    margin="30px 30px"
                  ></el-input>
                </div>
              </el-col>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3">
            <div class="info-item">变更证明材料</div>
          </el-col>
          <el-col :span="8">
            <div class="up">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                list-type="picture"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="2">
            <div class="info-item">变更时间</div>
          </el-col>
          <el-col :span="6">
            <div class="block">
              <span class="demonstration"></span>
              <el-date-picker
                v-model="value2"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <div class="button-container">
            <el-button type="primary" @click="open">发起变更流程</el-button>
            <el-button type="info" plain @click="cancle">取消</el-button>
          </div>
        </el-row>
      </div>
      <div v-if="value == '选项3'">
        <el-row :gutter="20" class="info-row">
          <el-col :span="3">
            <div class="info-item">当前状态</div>
          </el-col>
          <el-col :span="9">
            <div class="info-item"></div>
          </el-col>
          <el-col :span="3">
            <div class="info-item">变更后的状态</div>
          </el-col>
          <el-col :span="9">
            <div class="money">
              <el-input
                class="money"
                v-model="input"
                placeholder="请输入变更后的状态"
                size="medium"
              ></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3">
            <div class="info-item">变更证明材料</div>
          </el-col>
          <el-col :span="8">
            <div class="up">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                list-type="picture"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="2">
            <div class="info-item">变更时间</div>
          </el-col>
          <el-col :span="6">
            <div class="block">
              <span class="demonstration"></span>
              <el-date-picker
                v-model="value2"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <div class="button-container">
            <el-button type="primary" @click="open">发起变更流程</el-button>
            <el-button type="info" plain @click="cancle">取消</el-button>
          </div>
        </el-row>
      </div>
      <div v-if="value == '选项4'">
        <el-row :gutter="20" class="info-row">
          <el-col :span="3">
            <div class="info-item">企业原始主营业务</div>
          </el-col>
          <el-col :span="9">
            <div class="info-item"></div>
          </el-col>
          <el-col :span="3">
            <div class="info-item">变更后的主营业务</div>
          </el-col>
          <el-col :span="9">
            <div class="money">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4 }"
                placeholder="新的主营业务"
                v-model="textarea2"
              >
              </el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3">
            <div class="info-item">变更证明材料</div>
          </el-col>
          <el-col :span="10">
            <div class="up">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                list-type="picture"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="2">
            <div class="info-item">变更时间</div>
          </el-col>
          <el-col :span="6">
            <div class="block">
              <span class="demonstration"></span>
              <el-date-picker
                v-model="value2"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <div class="button-container">
            <el-button type="primary" @click="open">发起变更流程</el-button>
            <el-button type="info" plain @click="cancle">取消</el-button>
          </div>
        </el-row>
      </div>
      <div v-if="value == '选项5'">
        <el-row :gutter="20" class="info-row">
          <el-col :span="2">
            <div class="info-item">企业原始logo</div>
          </el-col>
          <el-col :span="10">
            <div class="info-item"></div>
          </el-col>
          <el-col :span="3">
            <div class="info-item">变更后的企业logo</div>
          </el-col>
          <el-col :span="9">
            <div class="up">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                list-type="picture"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3">
            <div class="info-item">变更证明材料</div>
          </el-col>
          <el-col :span="8">
            <div class="up">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                list-type="picture"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="2">
            <div class="info-item">变更时间</div>
          </el-col>
          <el-col :span="6">
            <div class="block">
              <span class="demonstration"></span>
              <el-date-picker
                v-model="value2"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <div class="button-container">
            <el-button type="primary" @click="open">发起变更流程</el-button>
            <el-button type="info" plain @click="cancle">取消</el-button>
          </div>
        </el-row>
      </div>
      <div v-if="value == '选项6'">
        <el-row :gutter="20" class="info-row">
          <el-col :span="2">
            <div class="info-item">当前地址</div>
          </el-col>
          <el-col :span="10">
            <div class="info-item"></div>
          </el-col>
          <el-col :span="3">
            <div class="info-item">变更后的地址</div>
          </el-col>
          <el-col :span="9">
            <div class="money">
              <el-input
                class="money"
                v-model="input"
                placeholder="请输入新的地址"
                size="medium"
              ></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3">
            <div class="info-item">变更证明材料</div>
          </el-col>
          <el-col :span="8">
            <div class="up">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                list-type="picture"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="2">
            <div class="info-item">变更时间</div>
          </el-col>
          <el-col :span="6">
            <div class="block">
              <span class="demonstration"></span>
              <el-date-picker
                v-model="value2"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <div class="button-container">
            <el-button type="primary" @click="open">发起变更流程</el-button>
            <el-button type="info" plain @click="cancle">取消</el-button>
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>
<style>
.up {
  margin-top: 10px;
}
.money {
  margin: 7px 5px;
  padding-right: 6px;
}
.content {
  margin-bottom: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(215, 215, 215);
}
.button-container {
  text-align: center;
  margin-bottom: 10px;
}
.block {
  margin: 12px 0;
}
.select {
  margin-top: 13px;
  margin-bottom: 13px;
}
.enterprise_change {
  border-style: solid;
  border-width: 1px;
  border-color: rgb(215, 215, 215);
  margin: 2px 30px;
  margin-bottom: 0px;
}
.Enterprise_change .el-alert {
  border-radius: 0;
  background-color: rgb(241, 244, 249);
}

.content {
  margin-left: 30px;
  margin-right: 30px;
}
</style>
<script>
export default {
  methods: {
    open() {
      this.$confirm("此操作将提交变更申请, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "提交成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
          });
        });
    },
    handleUploadChange(file, fileList) {
      // 文件上传状态改变时的处理函数
      this.fileList = fileList;
    },
    sendDataToBackend() {
      // 准备发送文件到后端的逻辑
      const formData = new FormData();
      this.fileList.forEach((file) => {
        formData.append("files[]", file.raw);
      });

      // 使用axios或者其他方法发送formData到后端
      axios
        .post("/your-backend-api-url", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log("成功上传文件到后端");
          // 处理后端响应
        })
        .catch((error) => {
          console.error("上传文件到后端失败", error);
          // 处理错误
        });
    },
    sendDataToBackend() {
      // 准备发送日期到后端的逻辑
      const selectedDate = this.value2;

      // 使用axios或其他方法发送日期到后端
      axios
        .post("/your-backend-api-url", {
          selectedDate: selectedDate,
        })
        .then((response) => {
          console.log("成功发送日期到后端");
          // 处理后端响应
        })
        .catch((error) => {
          console.error("发送日期到后端失败", error);
          // 处理错误
        });
    },
    cancle() {
      this.$router.push({ path: "/change/importance_Information" });
    },
  },
  data() {
    return {
      value2: "", // 存储选择的日期
      fileList: [],
      options: [
        {
          value: "选项1",
          label: "企业名称变更",
        },
        {
          value: "选项2",
          label: "企业注册资本",
        },
        {
          value: "选项3",
          label: "企业孵化状态变更",
        },
        {
          value: "选项4",
          label: "企业主页业务变更",
        },
        {
          value: "选项5",
          label: "企业logo变更",
        },
        {
          value: "选项6",
          label: "企业注册地址",
        },
      ],
      value: "",
    };
  },
};
</script>
