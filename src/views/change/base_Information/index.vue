<template>
  <div>
    <div style="padding: 30px" class="top1">
      <el-alert :closable="false" title="基本信息完善" />
    </div>
    <div class="all">
      <div class="corporation">
        <div class="Corporation">
          <el-alert :closable="false" title="法人信息" />
        </div>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">姓名</div></el-col>
          <el-col :span="10"
            ><el-input
              v-model="input"
              placeholder="请输入新的姓名"
              class="info-input"
            ></el-input
          ></el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">手机号码</div></el-col>
          <el-col :span="10"
            ><el-input
              v-model="input"
              placeholder="请输入新的手机号"
              class="info-input"
            ></el-input
          ></el-col>
          <el-col :span="11"></el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">邮箱</div></el-col>
          <el-col :span="10"
            ><el-input
              v-model="input"
              placeholder="请输入新的邮箱"
              class="info-input"
            ></el-input
          ></el-col>
          <el-col :span="11"></el-col>
        </el-row>
      </div>
      <div class="contactor">
        <div class="Contactor">
          <el-alert :closable="false" title="联系人信息" />
        </div>

        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">姓名</div></el-col>
          <el-col :span="10"
            ><el-input
              v-model="input"
              placeholder="请输入新联系人的姓名"
              class="info-input"
            ></el-input
          ></el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">手机号码</div></el-col>
          <el-col :span="10"
            ><el-input
              v-model="input"
              placeholder="请输入新联系人的手机号码"
              class="info-input"
            ></el-input
          ></el-col>
        </el-row>
      </div>
      <div class="bank">
        <div class="Bank">
          <el-alert :closable="false" title="银行账户信息" />
        </div>

        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">开户银行</div></el-col>
          <el-col :span="10"
            ><el-input
              v-model="input"
              placeholder="请输入新的开户银行"
              class="info-input"
            ></el-input
          ></el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">银行账号</div></el-col>
          <el-col :span="10"
            ><el-input
              v-model="input"
              placeholder="请输入新的银行账号"
              class="info-input"
            ></el-input
          ></el-col>
        </el-row>
      </div>
      <div class="employee-info">
        <div class="info-header">
          <el-alert :closable="false" title="员工信息概览" />
        </div>
        <div class="employee-container">
          <el-row :gutter="20" class="info-row">
            <el-col :span="4">
              <div class="info-item">*员工总数</div>
              <el-input></el-input>
            </el-col>
            <el-col :span="4">
              <div class="info-item">*管理人数</div>
              <el-input></el-input>
            </el-col>
            <el-col :span="5">
              <div class="info-item">*大专及以上学历人数</div>
              <el-input></el-input>
            </el-col>
            <el-col :span="5">
              <div class="info-item">*参加园区专业培训人数</div>
              <el-input></el-input>
            </el-col>
            <el-col :span="3">
              <div class="info-item">*参保人数</div>
              <el-input></el-input>
            </el-col>
            <el-col :span="3">
              <div class="info-item">*研究人数</div>
              <el-input></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="info-row">
            <el-col :span="4">
              <div class="info-item begin">*租赁开始时间</div>
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
            <el-col :span="4">
              <div class="info-item">*租赁结束时间</div>
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
            <el-col :span="5">
              <div class="info-item">*租房面积(平米)</div>
              <el-input></el-input>
            </el-col>
            <el-col :span="5">
              <div class="info-item">*单位租金（元/平/月）</div>
              <el-input></el-input>
            </el-col>
            <el-col :span="3">
              <div class="info-item">*租赁地址</div>
              <el-input></el-input>
            </el-col>
            <el-col :span="3">
              <div class="info-item">*材料</div>
              <el-input></el-input>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="button-container">
        <el-row>
          <el-button type="primary" @click="open">完成</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>
<style>
.info-input {
  padding-top: 8px;
}
.button-container {
  text-align: center;
}
.date-picker {
  width: 100%;
}
.button-container.button {
  width: 50px;
}
</style>
<script>
export default {
  methods: {
    open() {
      this.$alert("编辑成功", "编辑结果", {
        confirmButtonText: "确定",
        callback: (action) => {
          let customAction = ""; // 默认值
          if (action === "confirm") {
            customAction = "编辑成功"; // 自定义值
          }
          this.$message({
            type: "info",
            message: `action: ${customAction}`,
          });
        },
      });
    },
  },
};
</script>
