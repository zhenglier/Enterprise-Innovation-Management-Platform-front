<template>
  <div>
    <el-alert :closable="false" title="政策发布" />
    <el-form
      :model="releaseForm"
      :rules="rules"
      ref="releaseForm"
      label-width="100px"
      class="releaseForm"
    >
      <el-form-item label="政策名称" prop="policyTitle">
        <el-input v-model="releaseForm.policyTitle"></el-input>
      </el-form-item>
      <el-form-item label="政策层级" prop="policyLevel">
        <el-select
          v-model="releaseForm.policyLevel"
          placeholder="请选择政策层级"
        >
          <el-option label="国家级" value="guojia"></el-option>
          <el-option label="省级" value="shengji"></el-option>
          <el-option label="市级" value="shiji"></el-option>
          <el-option label="校级" value="xiaoji"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="主管部门" prop="policyManage">
        <el-input v-model="releaseForm.policyManage"></el-input>
      </el-form-item>
      <el-form-item label="文号" prop="documentNumber">
        <el-input v-model="releaseForm.documentNumber"></el-input>
      </el-form-item>
      <el-form-item label="发布日期" required>
        <el-col :span="11">
          <el-form-item prop="publishDate">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="releaseForm.publishDate"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="结束日期" required>
        <el-col :span="11">
          <el-form-item prop="endDate">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="releaseForm.endDate"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="政策说明" prop="description">
        <el-input type="textarea" v-model="releaseForm.desription"></el-input>
      </el-form-item>
      <el-form-item label="政策内容" prop="policyContent">
        <el-input type="textarea" v-model="releaseForm.desription"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('releaseForm')"
          >发布</el-button
        >
        <el-button @click="resetForm('releaseForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      releaseForm: {
        policyTitle: "",
        publishDate: "",
        viewCount: "",
        documentNumber: "",
        description: "",
        policyContent: "",
        policyLevel: "",
        policyManage: "",
        endDate: "",
      },
      rules: {
        policyTitle: [
          {
            required: true,
            message: "政策名称不能为空",
            trigger: "blur",
          },
        ],
        documentNumber: [
          { required: true, message: "文号不能为空", trigger: "blur" },
        ],
        publishDate: [
          { required: true, message: "请选择发布日期", trigger: "blur" },
        ],
        policyLevel: [
          { required: true, message: "请选择政策层级", trigger: "blur" },
        ],
        policyManage: [
          { requied: true, message: "请输入主管部门", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //这一块将内容传给后端
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style scoped>
.releaseForm {
  margin-top: 30px;
}
</style>
