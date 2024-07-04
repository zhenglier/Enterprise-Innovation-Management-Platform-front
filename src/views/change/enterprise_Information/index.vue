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
          <el-col :span="9"><div class="info-item">2022213474</div></el-col>
          <el-col :span="12"
            ><div class="info-item">*信用代码: 91340100MA</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"
            ><div class="info-item name">*企业名称:</div></el-col
          >
          <el-col :span="9"
            ><div class="info-item">中国五环工程有限公司</div></el-col
          >
          <el-col :span="12"
            ><div class="info-item">*注册资本(万元): 1000.00</div></el-col
          >
        </el-row>
        <el-row :gutter="19" class="info-row">
          <el-col :span="3"
            ><div class="info-item essence">*企业性质:</div></el-col
          >
          <el-col :span="9"
            ><div class="info-item">有限责任公司(自然人投资或控股)</div></el-col
          >
          <el-col :span="12"
            ><div class="info-item">*行 业: 软件及数据</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"
            ><div class="info-item address">*注册地址:</div></el-col
          >
          <el-col :span="9"
            ><div class="info-item">北京市西城区广安门外</div></el-col
          >
          <el-col :span="12"
            ><div class="info-item">*注册日期:2024-6-24</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"
            ><div class="info-item businessman">*经营者姓名:</div></el-col
          >
          <el-col :span="9"><div class="info-item">张三</div></el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"
            ><div class="info-item zaiti">*所属载体:</div></el-col
          >
          <el-col :span="9"
            ><div class="info-item">聚元生物科技孵化器</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3"
            ><div class="info-item duty">*主营业务:</div></el-col
          >
          <el-col :span="9"
            ><div class="info-item">
              软件开发，测试以及相关服务的任务
            </div></el-col
          >
        </el-row>
      </div>

      <div class="status">
        <div class="Enterprise_status">
          <el-alert :closable="false" title="企业孵化状态" />
        </div>
        <el-row :gutter="20" class="info-row">
          <el-col :span="12"
            ><div class="info-item">入孵时间 2024-6-24</div></el-col
          >
          <el-col :span="12"
            ><div class="info-item">孵化状态 在孵企业</div></el-col
          >
        </el-row>
      </div>

      <div class="market">
        <div class="Market">
          <el-alert :closable="false" title="企业上市情况" />
        </div>
        <el-row :gutter="20" class="info-row">
          <el-col :span="24"
            ><div class="info-item">是否为上市企业 否</div></el-col
          >
        </el-row>
      </div>

      <div class="corporation">
        <div class="Corporation">
          <el-alert :closable="false" title="法人信息" />
        </div>
        <el-row :gutter="20" class="info-row">
          <el-col :span="24"><div class="info-item">姓名 法人</div></el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="24"
            ><div class="info-item">手机号 19216816820</div></el-col
          >
        </el-row>

        <el-row :gutter="20" class="info-row">
          <el-col :span="24"
            ><div class="info-item">邮箱 3634573224@qq.com</div></el-col
          >
        </el-row>
      </div>

      <div class="contactor">
        <div class="Contactor">
          <el-alert :closable="false" title="联系人信息" />
        </div>
        <el-row :gutter="20" class="info-row">
          <el-col :span="24"><div class="info-item">姓名 联系人</div></el-col>
        </el-row>
        <el-row :gutter="20" class="info-row"
          ><el-col :span="24"
            ><div class="info-item">手机号 15297912020</div></el-col
          ></el-row
        >
      </div>

      <div class="bank">
        <div class="Bank">
          <el-alert :closable="false" title="银行账户信息" />
        </div>
        <el-row :gutter="20" class="info-row">
          <el-col :span="12"><div class="info-item">开户银行</div></el-col>
          <el-col :span="12"><div class="info-item">银行账户</div></el-col>
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
              <div class="info-item">*租赁开始时间</div>
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
            <el-col :span="4">
              <div class="info-item">*租房面积(平米)</div>
              <el-input></el-input>
            </el-col>
            <el-col :span="6">
              <div class="info-item">*单位租金（元/平/月）</div>
              <el-input></el-input>
            </el-col>
            <el-col :span="4">
              <div class="info-item">*租赁地址</div>
              <el-input></el-input>
            </el-col>
            <el-col :span="2">
              <div class="info-item">*材料</div>
              <el-input></el-input>
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
    };
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
