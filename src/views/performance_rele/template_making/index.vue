<template>
  <div>
    <h2>绩效模板制作</h2>
    <el-alert :closable="false">基本信息</el-alert>
    <el-form
      :model="baseinfoForm"
      :rules="baseinforules"
      ref="baseinfoFormRef"
      label-width="120px"
      class="baseinfoForm"
    >
      <el-form-item label="考核名称" prop="name">
        <el-input v-model="baseinfoForm.name"></el-input>
      </el-form-item>
      <el-form-item label="考核类型" prop="types">
        <el-select v-model="baseinfoForm.types" placeholder="请选择考核类型">
          <el-option label="年度" value="year"></el-option>
          <el-option label="季度" value="season"></el-option>
          <el-option label="月度" value="month"></el-option>
          <el-option label="特殊" value="special"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="考核开始日期" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="baseinfoForm.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="考核结束日期" required>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="baseinfoForm.date2"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="描述" prop="desc">
        <el-input type="textarea" v-model="baseinfoForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="resetForm('baseinfoFormRef')">重置</el-button>
      </el-form-item>
    </el-form>

    <div v-for="(panel, index) in panels" :key="index" class="panel panel-info">
      <div class="panel-body">
        <div class="panel-header">
          <h2 class="panel-heading">{{ panel.name }}</h2>
          <div class="title-underline"></div>
        </div>
        <el-form
          :model="panel"
          :rules="panelRules"
          ref="panelForms"
          label-width="100px"
          class="demo-dynamic"
        >
          <el-form-item label="分数占比" prop="score">
            <el-input
              type="number"
              v-model="panel.score"
              placeholder="分数占比"
              @change="validateScore"
            ></el-input>
          </el-form-item>
          <el-form-item
            v-for="(input, idx) in panel.inputs"
            :key="idx"
            :label="input.label"
          >
            <el-input v-model="input.value"></el-input>
            <el-button @click.prevent="removeInput(index, idx)">删除</el-button>
          </el-form-item>
          <el-form-item>
            <el-input
              v-model="panel.newInputLabel"
              placeholder="输入框标签"
            ></el-input>
            <el-button @click="addInput(index)">新增输入框</el-button>
          </el-form-item>

          <h3>示例文件</h3>
          <el-table :data="panel.files">
            <el-table-column prop="name" label="文件名"></el-table-column>
            <el-table-column prop="desc" label="描述"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button @click="downloadFile(scope.row)">下载</el-button>
                <el-button @click="removeFile(index, scope.$index)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <el-form-item class="file-inputs">
            <el-input
              v-model="panel.newFileName"
              placeholder="文件名"
              class="file-input"
            ></el-input>
            <el-input
              v-model="panel.newFileDesc"
              placeholder="描述"
              class="custom-input"
            ></el-input>
            <el-button @click="addFile(index)">新增文件</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="panel-footer">
        <el-button @click="removePanel(index)">删除板块</el-button>
      </div>
    </div>
    <div class="func-box">
      <el-button type="primary" @click="showPanelDialog">添加板块</el-button>
      <el-button type="primary" @click="submit">发布模板</el-button>
    </div>

    <!-- 新增板块对话框 -->
    <el-dialog title="新增板块" :visible.sync="panelDialogVisible">
      <el-form ref="panelForm" :model="newPanel" label-width="80px">
        <el-form-item
          label="板块名称"
          prop="name"
          :rules="[
            { required: true, message: '请输入板块名称', trigger: 'blur' },
          ]"
        >
          <el-input v-model="newPanel.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="panelDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="addPanel">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      baseinfoForm: {
        name: "",
        types: "",
        date1: "",
        date2: "",
        desc: "",
      },
      baseinforules: {
        name: [
          { required: true, message: "考核名称不能为空", trigger: "blur" },
          { min: 3, max: 30, message: "长度至少3个字符", trigger: "blur" },
        ],
        types: [
          { required: true, message: "请选择考核类型", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        desc: [
          { required: true, message: "考核描述不能为空", trigger: "blur" },
        ],
      },
      panels: [],
      panelRules: {
        name: [{ required: true, message: "请输入板块名称", trigger: "blur" }],
        score: [
          { required: true, message: "请输入分数占比", trigger: "blur" },
          {
            validator: (rule, value, callback) => {
              if (value < 1 || value > 100) {
                callback(new Error("分数占比应在1到100之间"));
              } else {
                callback();
              }
            },
            trigger: "blur",
          },
        ],
        inputs: [{ required: true, message: "请输入内容", trigger: "blur" }],
      },
      panelDialogVisible: false,
      newPanel: {
        name: "",
      },
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    showPanelDialog() {
      this.newPanel.name = "";
      this.panelDialogVisible = true;
    },
    addPanel() {
      if (!this.newPanel.name) {
        this.$message.error("请填写板块名称");
        return;
      }

      this.panels.push({
        name: this.newPanel.name,
        score: 0,
        inputs: [{ label: "邮箱", value: "" }],
        newInputLabel: "",
        files: [],
        newFileName: "",
        newFileDesc: "",
      });
      this.panelDialogVisible = false;
    },
    removePanel(index) {
      this.panels.splice(index, 1);
    },
    addInput(panelIndex) {
      if (this.panels[panelIndex].newInputLabel) {
        this.panels[panelIndex].inputs.push({
          label: this.panels[panelIndex].newInputLabel,
          value: "",
        });
        this.panels[panelIndex].newInputLabel = "";
      }
    },
    removeInput(panelIndex, inputIndex) {
      this.panels[panelIndex].inputs.splice(inputIndex, 1);
    },
    addFile(panelIndex) {
      if (
        this.panels[panelIndex].newFileName &&
        this.panels[panelIndex].newFileDesc
      ) {
        this.panels[panelIndex].files.push({
          name: this.panels[panelIndex].newFileName,
          desc: this.panels[panelIndex].newFileDesc,
        });
        this.panels[panelIndex].newFileName = "";
        this.panels[panelIndex].newFileDesc = "";
      }
    },
    removeFile(panelIndex, fileIndex) {
      this.panels[panelIndex].files.splice(fileIndex, 1);
    },
    downloadFile(file) {
      // 模拟下载文件的逻辑
      this.$message.success(`开始下载文件：${file.name}`);
    },
    validateScore() {
      let totalScore = this.panels.reduce(
        (acc, panel) => acc + parseInt(panel.score),
        0
      );
      if (totalScore > 100) {
        this.$message.error("各板块分数占比总和不能超过100");
      }
    },
    submit() {
      this.$refs.baseinfoFormRef.validate((valid) => {
        if (valid) {
          this.$refs.panelForms.forEach((ref) => {
            ref.validate((valid) => {
              if (!valid) {
                this.$message.error("请完善板块信息");
              }
            });
          });

          // Perform submission logic if all forms are valid
          if (this.panels.length > 0) {
            let totalScore = this.panels.reduce(
              (acc, panel) => acc + parseInt(panel.score),
              0
            );
            if (totalScore > 100) {
              this.$message.error("各板块分数占比总和不能超过100");
              return;
            }
            // Your submit logic here
            this.$message.success("模板发布成功");
          } else {
            this.$message.error("请添加至少一个板块");
          }
        } else {
          this.$message.error("请完善基本信息");
        }
      });
    },
  },
};
</script>

<style scoped>
.panel {
  margin-top: 20px;
}
.title-underline {
  border-top: 3px solid black;
  margin-top: 10px;
}
.func-box {
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.panel-header {
  margin-bottom: 30px;
}

.file-inputs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.custom-input {
  width: 100%;
  margin-right: 10px;
}

.el-input__inner {
  width: 100%;
}
</style>
