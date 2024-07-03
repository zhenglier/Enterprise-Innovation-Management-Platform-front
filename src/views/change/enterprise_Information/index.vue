<template>
  <div>
    <div style="padding: 15px 20px" class="top1">
      <el-alert :closable="false" title="企业信息查看" />
    </div>
    <div class="all">
      <div class="Enterprise">
        <div class="Enterprise_Information">
          <el-alert :closable="false" title="企业基本信息" />
        </div>
        <el-row :gutter="20" class="info-row">
          <el-col :span="12"
            ><div class="info-item">*企业ID: 2022213474</div></el-col
          >
          <el-col :span="12"
            ><div class="info-item">*信用代码: 91340100MA</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="12"
            ><div class="info-item">
              *企业名称: 中国五环工程有限公司
            </div></el-col
          >
          <el-col :span="12"
            ><div class="info-item">*注册资本(万元): 1000.00</div></el-col
          >
        </el-row>
        <el-row :gutter="19" class="info-row">
          <el-col :span="12"
            ><div class="info-item">
              *企业性质: 有限责任公司(自然人投资或控股)
            </div></el-col
          >
          <el-col :span="12"
            ><div class="info-item">*行 业: 软件及数据</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="12"
            ><div class="info-item">
              *注册地址: 北京市西城区广安门外
            </div></el-col
          >
          <el-col :span="12"
            ><div class="info-item">*注册日期:2024-6-24</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="12"
            ><div class="info-item">*经营者姓名: 张三</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="12"
            ><div class="info-item">*所属载体: 展开税收分类明细表</div></el-col
          >
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="12"
            ><div class="info-item">
              *主营业务:软件开发，测试以及相关服务的任务
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
              <el-input></el-input>
            </el-col>
            <el-col :span="4">
              <div class="info-item">*租赁结束时间</div>
              <el-input></el-input>
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
        <div class="demo-image">
          <div class="block" v-for="fit in fits" :key="fit">
            <span class="demonstration">{{ fit }}</span>
            <el-image
              style="width: 100px; height: 100px"
              :src="url"
              :fit="fit"
            ></el-image>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
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
  margin-top: 8px;
  margin-bottom: 8px;
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
</style>
<script>
export default {
  data() {
    return {
      fits: [""],
      url: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
    };
  },
};
</script>
