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
            ><div class="info-item">{{ data.companyId }}</div></el-col
          >
          <el-col :span="3"><div class="info-item">*信用代码:</div></el-col>
          <el-col :span="9"
            ><div class="info-item">{{ data.creditCode }}</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"
            ><div class="info-item name">*企业名称:</div></el-col
          >
          <el-col :span="9"
            ><div class="info-item">{{ data.companyName }}</div></el-col
          >
          <el-col :span="3"
            ><div class="info-item">*注册资本(万元):</div></el-col
          >
          <el-col :span="9"
            ><div class="info-item">{{ data.registeredCapital }}</div></el-col
          >
        </el-row>
        <el-row :gutter="19" class="info-row">
          <el-col :span="3"
            ><div class="info-item essence">*企业性质:</div></el-col
          >
          <el-col :span="9"
            ><div class="info-item">{{ data.essence }}</div></el-col
          >
          <el-col :span="3"><div class="info-item">*行 业:</div></el-col
          ><el-col :span="9"
            ><div class="info-item">{{ data.industry }}</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"
            ><div class="info-item address">*注册地址:</div></el-col
          >
          <el-col :span="9"
            ><div class="info-item">{{ data.reAddress }}</div></el-col
          >
          <el-col :span="3"><div class="info-item">*注册日期:</div></el-col>
          <el-col :span="9"
            ><div class="info-item">{{ data.registerDate }}</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"
            ><div class="info-item businessman">*经营者姓名:</div></el-col
          >
          <el-col :span="9"
            ><div class="info-item">{{ data.operatorName }}</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"
            ><div class="info-item zaiti">*所属载体:</div></el-col
          >
          <el-col :span="9"
            ><div class="info-item">{{ data.owningCarrier }}</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"
            ><div class="info-item duty">*主营业务:</div></el-col
          >
          <el-col :span="9"
            ><div class="info-item">
              {{ data.mainBusiness }}
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
            ><div class="info-item">{{ data.IncubationDate }}</div></el-col
          >
          <el-col :span="3"><div class="info-item">孵化状态</div></el-col>
          <el-col :span="9"
            ><div class="info-item">{{ data.IncubationStatus }}</div></el-col
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
            ><div class="info-item">{{ data.ifMarket }}</div></el-col
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
            ><div class="info-item">{{ data.corporateName }}</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">手机号</div></el-col>
          <el-col :span="9"
            ><div class="info-item">{{ data.telephoneNumber }}</div></el-col
          >
        </el-row>

        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">邮箱</div></el-col>
          <el-col :span="9"
            ><div class="info-item">{{ data.mailbox }}</div></el-col
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
            ><div class="info-item">{{ data.contactName }}</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"><div class="info-item">手机号</div></el-col>
          <el-col :span="9"
            ><div class="info-item">{{ data.contactNumber }}</div></el-col
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
            ><div class="info-item">{{ data.bankName }}</div></el-col
          >
          <el-col :span="3"><div class="info-item">银行账户</div></el-col>
          <el-col :span="9"
            ><div class="info-item">{{ data.account }}</div></el-col
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
              <div class="info-item Input_odd">{{ data.employeeTotal }}</div>
            </el-col>
            <el-col :span="4">
              <div class="info-item">*管理人数</div>
              <div class="info-item Input_odd">{{ data.manageTotal }}</div>
            </el-col>
            <el-col :span="5">
              <div class="info-item">*大专及以上学历人数</div>
              <div class="info-item Input_odd">
                {{ data.collegeDegreeOrAbove }}
              </div>
            </el-col>
            <el-col :span="5">
              <div class="info-item">*参加园区专业培训人数</div>
              <div class="info-item Input_odd">{{ data.trainerNumber }}</div>
            </el-col>
            <el-col :span="3">
              <div class="info-item">*参保人数</div>
              <div class="info-item Input_odd">{{ data.insuredNumber }}</div>
            </el-col>
            <el-col :span="3">
              <div class="info-item">*研究人数</div>
              <div class="info-item Input_odd">{{ data.researchNumber }}</div>
            </el-col>
          </el-row>
          <el-row :gutter="20" class="info-row">
            <el-col :span="4">
              <div class="info-item">*租赁开始时间</div>
              <div class="info-item Input_odd">{{ data.beginDate }}</div>
            </el-col>
            <el-col :span="4">
              <div class="info-item">*租赁结束时间</div>
              <div class="info-item Input_odd">{{ data.endDate }}</div>
            </el-col>
            <el-col :span="5">
              <div class="info-item">*租房面积(平米)</div>
              <div class="info-item Input_odd">{{ data.area }}</div>
            </el-col>
            <el-col :span="5">
              <div class="info-item">*单位租金（元/平/月）</div>
              <div class="info-item Input_odd">{{ data.unitRent }}</div>
            </el-col>
            <el-col :span="3">
              <div class="info-item">*租赁地址</div>
              <div class="info-item Input_odd">{{ data.rentAddress }}</div>
            </el-col>
            <el-col :span="3">
              <div class="info-item">*材料</div>
              <div class="info-item Input_odd">{{ data.material }}</div>
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
import request from "@/utils/request";
export default {
  data() {
    return {
      data:{
        fits: [""],
        // url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        companyID: "1",
        creditCode: "",
        companyName: "",
        registeredCapital: "",
        essence: "",
        industry: "",
        reAddress: "",
        registerDate: "",
        operatorName: "",
        owningCarrier: "",
        mainBusiness: "",
        incubationDate: "",
        incubationStatus: "",
        ifMarket: "",
        corporateName: "",
        telephoneNumber: "",
        mailbox: "",
        contactName: "",
        contactNumber: "",
        bankName: "",
        account: "",
        employeeTotal: "",
        manageTotal: "",
        CollegeDegreeOrAbove: "",
        trainerNumber: "",
        insuredNumber: "",
        researchNumber: "",
        beginDate: "",
        end_Date: "",
        area: "",
        unitRent: "",
        rentAddress: "",
        material: "",
        imageUrl: "", // Assuming imageUrl is needed for the image
      }
    };
  },
  async created(){
    new Promise(async (resolve,reject) =>{
      await request({
        url: "/info/etp",
        method: "Get",
      })
        .then((response) =>{
          this.data=response;
          console.log(this.data);
          // window.location.reload();
        })
      })
  },
    methods: {
    
    goToBaseInformation() {
      this.$router.push({ path: "/change/base_Information" });
    },
    goToImportantInformation() {
      this.$router.push({ path: "/change/importance_Information" });
    },
  },
};
</script>
