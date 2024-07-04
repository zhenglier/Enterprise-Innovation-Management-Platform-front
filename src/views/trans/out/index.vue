<template>
  <div style="padding: 30px">
    <el-alert :closable="false" title="搬离申请" />
    <div class="out-info" style="margin-top: 30px">
      <el-alert
        :closable="false"
        title="搬离企业信息"
        style="margin-bottom: 20px"
      />
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="企业名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="所属载体">
          <el-select v-model="form.region" placeholder="请选择所属载体">
            <el-option label="载体一" value="shanghai"></el-option>
            <el-option label="载体二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="入驻日期">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="预计搬离日期">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date2"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="享受政策类型">
          <el-checkbox-group v-model="form.type">
            <el-checkbox label="财税优惠" name="type"></el-checkbox>
            <el-checkbox label="资金支持" name="type"></el-checkbox>
            <el-checkbox label="贷款贴息" name="type"></el-checkbox>
            <el-checkbox label="人才引进和培养" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="搬离类型">
          <el-radio-group v-model="form.resource">
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
      <el-button type="primary" @click="handleOut" class="out-button"
        >搬离申请</el-button
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
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      textreason: "",
      centerDialogVisible: false,
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    //这里弹出弹框，并且要将数据传输给后端
    handleOut() {
      this.centerDialogVisible = true;
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
  height: 60px;
  width: 100px;
}
</style>
