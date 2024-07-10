<template>
  <div class="all_body">
    <div style="padding: 15px 20px" class="top1">
      <el-alert :closable="false" title="载体信息查看" />
    </div>
    <div class="all">
      <div class="Carrier">
        <div class="Carrier_Information">
          <el-alert :closable="false" title="载体基本信息" />
        </div>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"
            ><div class="info-item qiyeID">*载体ID:</div></el-col
          >
          <el-col :span="9"
            ><div class="info-item">{{ carrierID }}</div></el-col
          >
          <el-col :span="3"><div class="info-item">*信用代码:</div></el-col>
          <el-col :span="9"
            ><div class="info-item">{{ creditCode }}</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item name">*载体名称</div></el-col>
          <el-col :span="9"
            ><div class="info-item">{{ carrierName }}</div></el-col
          >
          <el-col :span="3"
            ><div class="info-item">*固定资产投入(万元):</div></el-col
          >
          <el-col :span="9"
            ><div class="info-item">{{ registeredCapital }}</div></el-col
          >
        </el-row>
        <el-row :gutter="19" class="info-row">
          <el-col :span="3"><div class="info-item essence">*性质:</div></el-col>
          <el-col :span="9"
            ><div class="info-item">{{ essence }}</div></el-col
          >
          <el-col :span="3"
            ><div class="info-item address">*载体地址:</div></el-col
          >
          <el-col :span="9"
            ><div class="info-item">{{ Re_address }}</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row"> </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"
            ><div class="info-item businessman">*运营单位名称:</div></el-col
          >
          <el-col :span="9"
            ><div class="info-item">{{ Operator_name }}</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item zaiti">*级别:</div></el-col>
          <el-col :span="9"
            ><div class="info-item">{{ level }}</div></el-col
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
              <div class="info-item">*参加专业培训人数</div>
              <div class="info-item Input_odd">{{ trainer_number }}</div>
            </el-col>

            <el-col :span="3">
              <div class="info-item">*专业技术人员</div>
              <div class="info-item Input_odd">{{ research_number }}</div>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="info-row">
            <el-col :span="4">
              <div class="info-item">*认定或备案时间</div>
              <div class="info-item Input_odd">{{ begin_date }}</div>
            </el-col>

            <el-col :span="5">
              <div class="info-item">*功能区面积(平米)</div>
              <div class="info-item Input_odd">{{ area }}</div>
            </el-col>
            <el-col :span="5">
              <div class="info-item">*工位标准（元/平/月）</div>
              <div class="info-item Input_odd">{{ unit_rent }}</div>
            </el-col>
            <el-col :span="3">
              <div class="info-item">*孵化区面积</div>
              <div class="info-item Input_odd">{{ fu_area }}</div>
            </el-col>
            <el-col :span="3">
              <div class="info-item">*场地证明材料</div>
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

.Carrier {
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
.Carrier_Information {
  margin-bottom: 20px;
}
.Carrier_Information .el-alert {
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
      carrierID: "",
      creditCode: "",
      carrierName: "",
      registeredCapital: "",
      essence: "",
      industry: "",
      Re_address: "",

      Operator_name: "",
      level: "",

      If_market: "",
      Corporate_name: "",
      telephone_number: "",
      mailbox: "",
      Contact_Name: "",
      Contact_number: "",
      bank_name: "",
      account: "",

      manage_total: "",
      College_degree_or_above: "",
      trainer_number: "",

      research_number: "",
      begin_date: "",

      area: "",
      unit_rent: "",
      fu_area: "",
      material: "",
      imageUrl: "", // Assuming imageUrl is needed for the image
    };
  },
  methods: {
    goToBaseInformation() {
      this.$router.push({ path: "/carrier/baseInfochange" });
    },

    fetchCompanyInfo() {
      axios
        .get("/api/company-info")
        .then((response) => {
          const data = response.data;
          this.carrierID = data.carrierID;
          this.creditCode = data.creditCode;
          this.carrierName = data.carrierName;
          this.registeredCapital = data.registeredCapital;
          this.essence = data.essence;
          this.industry = data.industry;
          this.Re_address = data.Re_address;

          this.Operator_name = data.Operator_name;
          this.level = data.level;

          this.Corporate_name = data.Corporate_name;
          this.telephone_number = data.telephone_number;
          this.mailbox = data.mailbox;
          this.Contact_Name = data.Contact_Name;
          this.Contact_number = data.Contact_number;
          this.bank_name = data.bank_name;
          this.account = data.account;

          this.manage_total = data.manage_total;
          this.College_degree_or_above = data.College_degree_or_above;
          this.trainer_number = data.trainer_number;

          this.research_number = data.research_number;
          this.begin_date = data.begin_date;

          this.area = data.area;
          this.unit_rent = data.unit_rent;
          this.fu_area = data.fu_area;
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
