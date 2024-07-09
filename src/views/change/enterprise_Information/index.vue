<template>
  <div class="all_body">
    <div style="padding: 15px 20px" class="top1">
      <el-alert :closable="false" title="企业信息查看" />
    </div>
    <div class="all">
      <div class="Enterprise">
        <div class="Enterprise_Information">
          <el-alert :closable="false" title="企业基本信息" />
        </div>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"
            ><div class="info-item qiyeID">*企业ID:</div></el-col
          >
          <el-col :span="9"
            ><div class="info-item">{{ companyID }}</div></el-col
          >
          <el-col :span="3"><div class="info-item">*信用代码:</div></el-col>
          <el-col :span="9"
            ><div class="info-item">{{ creditCode }}</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"
            ><div class="info-item name">*企业名称:</div></el-col
          >
          <el-col :span="9"
            ><div class="info-item">{{ companyName }}</div></el-col
          >
          <el-col :span="3"
            ><div class="info-item">*注册资本(万元):</div></el-col
          >
          <el-col :span="9"
            ><div class="info-item">{{ registeredCapital }}</div></el-col
          >
        </el-row>
        <el-row :gutter="19" class="info-row">
          <el-col :span="3"
            ><div class="info-item essence">*企业性质:</div></el-col
          >
          <el-col :span="9"
            ><div class="info-item">{{ essence }}</div></el-col
          >
          <el-col :span="3"><div class="info-item">*行 业:</div></el-col
          ><el-col :span="9"
            ><div class="info-item">{{ industry }}</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"
            ><div class="info-item address">*注册地址:</div></el-col
          >
          <el-col :span="9"
            ><div class="info-item">{{ Re_address }}</div></el-col
          >
          <el-col :span="3"><div class="info-item">*注册日期:</div></el-col>
          <el-col :span="9"
            ><div class="info-item">{{ Register_date }}</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"
            ><div class="info-item businessman">*经营者姓名:</div></el-col
          >
          <el-col :span="9"
            ><div class="info-item">{{ Operator_name }}</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"
            ><div class="info-item zaiti">*所属载体:</div></el-col
          >
          <el-col :span="9"
            ><div class="info-item">{{ Owning_carrier }}</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"
            ><div class="info-item duty">*主营业务:</div></el-col
          >
          <el-col :span="9"
            ><div class="info-item">
              {{ main_business }}
            </div></el-col
          >
        </el-row>
      </div>

      <div class="status">
        <div class="Enterprise_status">
          <el-alert :closable="false" title="企业孵化状态" />
        </div>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">入孵时间</div></el-col>
          <el-col :span="9"
            ><div class="info-item">{{ Incubation_date }}</div></el-col
          >
          <el-col :span="3"><div class="info-item">孵化状态</div></el-col>
          <el-col :span="9"
            ><div class="info-item">{{ Incubation_status }}</div></el-col
          >
        </el-row>
      </div>

      <div class="market">
        <div class="Market">
          <el-alert :closable="false" title="企业上市情况" />
        </div>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">是否为上市企业</div></el-col>
          <el-col :span="9"
            ><div class="info-item">{{ If_market }}</div></el-col
          >
        </el-row>
      </div>

      <div class="corporation">
        <div class="Corporation">
          <el-alert :closable="false" title="法人信息" />
        </div>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">姓名</div></el-col>
          <el-col :span="9"
            ><div class="info-item">{{ Corporate_name }}</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">手机号</div></el-col>
          <el-col :span="9"
            ><div class="info-item">{{ telephone_number }}</div></el-col
          >
        </el-row>

        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">邮箱</div></el-col>
          <el-col :span="9"
            ><div class="info-item">{{ mailbox }}</div></el-col
          >
        </el-row>
      </div>

      <div class="contactor">
        <div class="Contactor">
          <el-alert :closable="false" title="联系人信息" />
        </div>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">姓名</div></el-col>
          <el-col :span="9"
            ><div class="info-item">{{ Contact_Name }}</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">手机号</div></el-col>
          <el-col :span="9"
            ><div class="info-item">{{ Contact_number }}</div></el-col
          ></el-row
        >
      </div>

      <div class="bank">
        <div class="Bank">
          <el-alert :closable="false" title="银行账户信息" />
        </div>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">开户银行</div></el-col>
          <el-col :span="9"
            ><div class="info-item">{{ bank_name }}</div></el-col
          >
          <el-col :span="3"><div class="info-item">银行账户</div></el-col>
          <el-col :span="9"
            ><div class="info-item">{{ account }}</div></el-col
          >
        </el-row>
        <!-- 根据需要添加银行开户信息 -->
      </div>

      <div class="employee-info">
        <div class="info-header">
          <el-alert :closable="false" title="员工信息概览" />
        </div>
        <div class="employee-container">
          <el-row :gutter="20" class="info-row">
            <el-col :span="4">
              <div class="info-item">*员工总数</div>
              <div class="info-item Input_odd">{{ employee_total }}</div>
            </el-col>
            <el-col :span="4">
              <div class="info-item">*管理人数</div>
              <div class="info-item Input_odd">{{ manage_total }}</div>
            </el-col>
            <el-col :span="5">
              <div class="info-item">*大专及以上学历人数</div>
              <div class="info-item Input_odd">
                {{ College_degree_or_above }}
              </div>
            </el-col>
            <el-col :span="5">
              <div class="info-item">*参加园区专业培训人数</div>
              <div class="info-item Input_odd">{{ trainer_number }}</div>
            </el-col>
            <el-col :span="3">
              <div class="info-item">*参保人数</div>
              <div class="info-item Input_odd">{{ Insured_number }}</div>
            </el-col>
            <el-col :span="3">
              <div class="info-item">*研究人数</div>
              <div class="info-item Input_odd">{{ research_number }}</div>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="info-row">
            <el-col :span="4">
              <div class="info-item">*租赁开始时间</div>
              <div class="info-item Input_odd">{{ begin_date }}</div>
            </el-col>
            <el-col :span="4">
              <div class="info-item">*租赁结束时间</div>
              <div class="info-item Input_odd">{{ end_date }}</div>
            </el-col>
            <el-col :span="5">
              <div class="info-item">*租房面积(平米)</div>
              <div class="info-item Input_odd">{{ area }}</div>
            </el-col>
            <el-col :span="5">
              <div class="info-item">*单位租金（元/平/月）</div>
              <div class="info-item Input_odd">{{ unit_rent }}</div>
            </el-col>
            <el-col :span="3">
              <div class="info-item">*租赁地址</div>
              <div class="info-item Input_odd">{{ rent_address }}</div>
            </el-col>
            <el-col :span="3">
              <div class="info-item">*材料</div>
              <div class="info-item Input_odd">{{ material }}</div>
            </el-col>
          </el-row>
        </div>
      </div>

      <div class="certification">
        <div class="Certification">
          <el-alert :closable="false" title="认证信息" />
        </div>
        <!-- 根据需要添加认证信息 -->
        <div class="Image">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
      </div>
      <div class="button-container">
        <el-row>
          <el-button type="primary" @click="goToBaseInformation"
            >基本信息编辑</el-button
          >

          <el-button type="danger" @click="goToImportantInformation"
            >重大信息更改</el-button
          >
        </el-row>
      </div>
    </div>
  </div>
</template>

<style>
.Image {
  text-align: center;
  margin: 10px 10px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.button-container {
  text-align: center;
}
.all {
  margin: 0px 20px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(215, 215, 215);
}

.Enterprise {
  margin-bottom: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(215, 215, 215);
}

.status {
  margin-bottom: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(215, 215, 215);
}
.market {
  margin-bottom: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(215, 215, 215);
}
.corporation {
  margin-bottom: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(215, 215, 215);
}
.contactor {
  margin-bottom: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(215, 215, 215);
}
.bank {
  margin-bottom: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(215, 215, 215);
}
.employee-info {
  margin-bottom: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(215, 215, 215);
}
.certification {
  margin-bottom: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(215, 215, 215);
}
.info-item {
  margin-left: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.custom-background .info-item {
  background-color: #ffffff; /* 将背景颜色设置为白色 */
}
.Certification {
  border-radius: 0;
  background-color: rgb(241, 244, 249);
}
.info-header .el-alert {
  border-radius: 0;
  background-color: rgb(241, 244, 249);
}
.Market .el-alert {
  border-radius: 0px;
  background-color: rgb(241, 244, 249);
}
.Enterprise_Information {
  margin-bottom: 20px;
}
.Enterprise_Information .el-alert {
  border-radius: 0; /* 设置边框圆角为0，变为直角 */
  background-color: rgb(241, 244, 249);
}
.Enterprise_status .el-alert {
  border-radius: 0;
  background-color: rgb(241, 244, 249);
}
.Bank .el-alert {
  border-radius: 0;
  background-color: rgb(241, 244, 249);
}
.Corporation .el-alert {
  border-radius: 0;
  background-color: rgb(241, 244, 249);
}
.certification .el-alert {
  border-radius: 0;
  background-color: rgb(241, 244, 249);
}
.Contactor .el-alert {
  border-radius: 0;
  background-color: rgb(241, 244, 249);
}
.employee-container {
  margin: 2px 2px;
}
.qiyeID {
  text-align: right;
}
.name {
  text-align: right;
}
.businessman {
  text-align: right;
}
.essence {
  text-align: right;
}
.address {
  text-align: right;
}
.zaiti {
  text-align: right;
}
.duty {
  text-align: right;
}
.all_body {
  margin: 20px 20px;
}
</style>
<script>
export default {
  data() {
    return {
      fits: [""],
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      companyID: "",
      creditCode: "",
      companyName: "",
      registeredCapital: "",
      essence: "",
      industry: "",
      Re_address: "",
      Register_date: "",
      Operator_name: "",
      Owning_carrier: "",
      main_business: "",
      Incubation_date: "",
      Incubation_status: "",
      If_market: "",
      Corporate_name: "",
      telephone_number: "",
      mailbox: "",
      Contact_Name: "",
      Contact_number: "",
      bank_name: "",
      account: "",
      employee_total: "",
      manage_total: "",
      College_degree_or_above: "",
      trainer_number: "",
      Insured_number: "",
      research_number: "",
      begin_date: "",
      end_date: "",
      area: "",
      unit_rent: "",
      rent_address: "",
      material: "",
      imageUrl: "", // Assuming imageUrl is needed for the image
    };
  },
  methods: {
    goToBaseInformation() {
      this.$router.push({ path: "/change/base_Information" });
    },
    goToImportantInformation() {
      this.$router.push({ path: "/change/importance_Information" });
    },
    fetchCompanyInfo() {
      axios
        .get("/api/company-info")
        .then((response) => {
          const data = response.data;
          this.companyID = data.companyID;
          this.creditCode = data.creditCode;
          this.companyName = data.companyName;
          this.registeredCapital = data.registeredCapital;
          this.essence = data.essence;
          this.industry = data.industry;
          this.Re_address = data.Re_address;
          this.Register_date = data.Register_date;
          this.Operator_name = data.Operator_name;
          this.Owning_carrier = data.Owning_carrier;
          this.main_business = data.main_business;
          this.Incubation_date = data.Incubation_date;
          this.Incubation_status = data.Incubation_status;
          this.If_market = data.If_market;
          this.Corporate_name = data.Corporate_name;
          this.telephone_number = data.telephone_number;
          this.mailbox = data.mailbox;
          this.Contact_Name = data.Contact_Name;
          this.Contact_number = data.Contact_number;
          this.bank_name = data.bank_name;
          this.account = data.account;
          this.employee_total = data.employee_total;
          this.manage_total = data.manage_total;
          this.College_degree_or_above = data.College_degree_or_above;
          this.trainer_number = data.trainer_number;
          this.Insured_number = data.Insured_number;
          this.research_number = data.research_number;
          this.begin_date = data.begin_date;
          this.end_date = data.end_date;
          this.area = data.area;
          this.unit_rent = data.unit_rent;
          this.rent_address = data.rent_address;
          this.material = data.material;
          this.imageUrl = data.imageUrl; // Assuming the image URL is part of the response
        })
        .catch((error) => {
          console.error("Error fetching company info:", error);
        });
    },
    mounted() {
      this.fetchCompanyInfo();
    },
  },
};
</script>
