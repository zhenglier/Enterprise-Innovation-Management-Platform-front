<template>
  <div style="padding: 30px">
    <el-alert :closable="false" title="搬离申请" />
    <div class="out-info" style="margin-top: 30px">
      <el-alert
        :closable="false"
        title="搬离企业信息"
        style="margin-bottom: 20px"
      />
      <el-form ref="form" :model="form" label-width="100px" :rules="formrules">
        <el-form-item label="企业名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入企业名称"></el-input>
        </el-form-item>
        <el-form-item label="所属载体" prop="carrier">
          <el-input
            v-model="form.carrier"
            placeholder="请输入所属载体"
          ></el-input>
        </el-form-item>
        <el-form-item label="入驻日期" prop="date1">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="预计搬离日期" prop="date2">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date2"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="享受政策类型" prop="type">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="财税优惠" name="type"></el-checkbox>
            <el-checkbox label="资金支持" name="type"></el-checkbox>
            <el-checkbox label="贷款贴息" name="type"></el-checkbox>
            <el-checkbox label="人才引进和培养" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="搬离类型" prop="outtype">
          <el-radio-group v-model="form.outtype">
            <el-radio label="更换载体"></el-radio>
            <el-radio label="退出孵化"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
    <div class="out-reason">
      <el-alert :closable="false" title="搬离原因" />
      <div style="margin: 10px"></div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4 }"
        placeholder="请输入内容"
        v-model="textreason"
      >
      </el-input>
    </div>
    <div class="button-container">
      <el-button type="primary" @click="submitForm('form')" class="out-button"
        >搬离申请</el-button
      >
      <el-button type="primary" @click="resetForm('form')" class="out-button"
        >重置</el-button
      >
    </div>
    <!-- 点击申请按钮之后出现的提示框 -->
    <el-dialog
      title="搬离申请提交成功"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <span>您的搬离申请已经提交，请注意查看消息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        carrier: "",
        date1: "",
        date2: "",
        // 这里的type定义成了数组类型
        type: [],
        outtype: "",
      },
      formrules: {
        name: [
          { required: true, message: "企业名称不能为空", trigger: "blur" },
          { min: 3, message: "长度至少为三个字符", trigger: "change" },
        ],
        carrier: [
          { required: true, message: "所属载体不能为空", trigger: "blur" },
        ],
      },
      textreason: "",
      centerDialogVisible: false,
    };
  },
  methods: {
    //这里弹出弹框，并且要将数据传输给后端
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.centerDialogVisible = true;
          //这里写提交数据到后端的逻辑
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

<style lang="scss">
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
}

.out-button {
  height: 40px;
  width: 120px;
}
</style>
