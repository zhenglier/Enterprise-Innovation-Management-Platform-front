<template>
  <div class="all_body">
    <div style="padding: 30px" class="top1">
      <el-alert :closable="false" title="基本信息完善" />
    </div>
    <div class="all">
      <!-- Corporation Section -->
      <div class="corporation">
        <div class="Corporation">
          <el-alert :closable="false" title="法人信息" />
        </div>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">姓名</div></el-col>
          <el-col :span="10">
            <el-input
              v-model="corporation.name"
              placeholder="请输入法人姓名"
              class="info-input"
            ></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">手机号码</div></el-col>
          <el-col :span="10">
            <el-input
              v-model="corporation.phoneNumber"
              placeholder="请输入法人手机号码"
              class="info-input"
            ></el-input>
          </el-col>
          <el-col :span="11"></el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">邮箱</div></el-col>
          <el-col :span="10">
            <el-input
              v-model="corporation.email"
              placeholder="请输入法人邮箱"
              class="info-input"
            ></el-input>
          </el-col>
          <el-col :span="11"></el-col>
        </el-row>
      </div>

      <!-- Contact Person Section -->
      <div class="contactor">
        <div class="Contactor">
          <el-alert :closable="false" title="联系人信息" />
        </div>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">姓名</div></el-col>
          <el-col :span="10">
            <el-input
              v-model="contact.name"
              placeholder="请输入联系人姓名"
              class="info-input"
            ></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">手机号码</div></el-col>
          <el-col :span="10">
            <el-input
              v-model="contact.phoneNumber"
              placeholder="请输入联系人手机号码"
              class="info-input"
            ></el-input>
          </el-col>
        </el-row>
      </div>

      <!-- Bank Account Section -->
      <div class="bank">
        <div class="Bank">
          <el-alert :closable="false" title="银行账户信息" />
        </div>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">开户银行</div></el-col>
          <el-col :span="10">
            <el-input
              v-model="bankAccount.bankName"
              placeholder="请输入开户银行名称"
              class="info-input"
            ></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">银行账号</div></el-col>
          <el-col :span="10">
            <el-input
              v-model="bankAccount.accountNumber"
              placeholder="请输入银行账号"
              class="info-input"
            ></el-input>
          </el-col>
        </el-row>
      </div>

      <!-- Employee Overview Section -->
      <div class="employee-info">
        <div class="info-header">
          <el-alert :closable="false" title="员工信息概览" />
        </div>
        <div class="employee-container">
          <el-row :gutter="20" class="info-row">
            <el-col :span="4">
              <div class="info-item">*员工总数</div>
              <el-input
                v-model="employee.total"
                placeholder="请输入员工总数"
              ></el-input>
            </el-col>
            <el-col :span="4">
              <div class="info-item">*管理人数</div>
              <el-input
                v-model="employee.managers"
                placeholder="请输入管理人数"
              ></el-input>
            </el-col>
            <el-col :span="5">
              <div class="info-item">*大专及以上学历人数</div>
              <el-input
                v-model="employee.degreeAbove"
                placeholder="请输入大专及以上学历人数"
              ></el-input>
            </el-col>
            <el-col :span="5">
              <div class="info-item">*参加园区专业培训人数</div>
              <el-input
                v-model="employee.training"
                placeholder="请输入参加培训人数"
              ></el-input>
            </el-col>
            <el-col :span="3">
              <div class="info-item">*参保人数</div>
              <el-input
                v-model="employee.insured"
                placeholder="请输入参保人数"
              ></el-input>
            </el-col>
            <el-col :span="3">
              <div class="info-item">*研究人数</div>
              <el-input
                v-model="employee.research"
                placeholder="请输入研究人数"
              ></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="info-row">
            <el-col :span="4">
              <div class="info-item begin">*租赁开始时间</div>
              <div class="block">
                <span class="demonstration"></span>
                <el-date-picker
                  v-model="employee.rentStart"
                  align="right"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions"
                ></el-date-picker>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="info-item">*租赁结束时间</div>
              <div class="block">
                <span class="demonstration"></span>
                <el-date-picker
                  v-model="employee.rentEnd"
                  align="right"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions"
                ></el-date-picker>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="info-item">*租房面积(平米)</div>
              <el-input
                v-model="employee.rentArea"
                placeholder="请输入租房面积"
              ></el-input>
            </el-col>
            <el-col :span="5">
              <div class="info-item">*单位租金（元/平/月）</div>
              <el-input
                v-model="employee.rentCost"
                placeholder="请输入单位租金"
              ></el-input>
            </el-col>
            <el-col :span="3">
              <div class="info-item">*租赁地址</div>
              <el-input
                v-model="employee.rentAddress"
                placeholder="请输入租赁地址"
              ></el-input>
            </el-col>
            <el-col :span="3">
              <div class="info-item">*材料</div>
              <el-input
                v-model="employee.documents"
                placeholder="请输入材料"
              ></el-input>
            </el-col>
          </el-row>
        </div>
      </div>

      <!-- Button Section -->
      <div class="button-container">
        <el-row>
          <el-button type="primary" @click="open" class="finish" size="medium"
            >完成</el-button
          >
        </el-row>
      </div>
    </div>
  </div>
</template>
<style>
.employee-info {
  margin-bottom: 0px;
}

.info-input {
  padding-top: 8px;
}
.button-container {
  text-align: center;
  margin: 20px 20px;
}
.date-picker {
  width: 100%;
}
.button-container.button {
  width: 50px;
}
.all_body {
  margin: 20px 20px;
}
</style>
<script>
export default {
  data() {
    return {
      corporation: {
        name: "",
        phoneNumber: "",
        email: "",
      },
      contact: {
        name: "",
        phoneNumber: "",
      },
      bankAccount: {
        bankName: "",
        accountNumber: "",
      },
      employee: {
        total: "",
        managers: "",
        degreeAbove: "",
        training: "",
        insured: "",
        research: "",
        rentStart: "",
        rentEnd: "",
        rentArea: "",
        rentCost: "",
        rentAddress: "",
        documents: "",
      },
    };
  },
  
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
    sendDataToBackend() {
      // Example data payload to send
      const data = {
        corporation: this.corporation,
        contact: this.contact,
        bankAccount: this.bankAccount,
        employee: this.employee,
      };

      // Example POST request using Axios
      axios
        .post("/api/saveFormData", data)
        .then((response) => {
          console.log("Data sent to backend successfully:", response.data);
          // Optionally handle response or update UI based on response
        })
        .catch((error) => {
          console.error("Error sending data to backend:", error);
          // Optionally handle error scenarios
        });
    },
  },
};
</script>
