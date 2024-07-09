<template>
  <!-- 这里的index默认是第一个步骤 -->
  <div>
    <el-alert :closable="false" title="入驻申请" />

    <el-steps
      :space="200"
      :active="active"
      finish-status="success"
      class="progress"
    >
      <el-step title="填报说明"></el-step>
      <el-step title="基本信息"></el-step>
      <el-step title="社会信息"></el-step>
      <el-step title="员工与租房信息"></el-step>
    </el-steps>

    <!-- 这里是这个页面特有的内容，其他组件都是全局组件 -->
    <div class="page-content">
      <div v-if="active === 0">
        <!-- <el-alert
          :closable="false"
          title="填报说明"
          style="margin-top: 30px; margin-bottom: 10px"
        /> -->
        <!-- 填报说明的分段确定 -->
        <el-collapse
          v-model="activeNames"
          @change="handleChange"
          class="down-content"
        >
          <el-collapse-item title="申报范围" name="1">
            <p>
              (一)市场化创新创业孵化载体。具备一定规模和社会效应，为创业实体提供场地及配套孵化服务的创业孵化载体。
            </p>
            <p>
              (二)公益性大学生创业孵化载体。由本市普通高等学校、职业学校、技工院校以及其他事业单位主办，面向在校学生及毕业5年内毕业生免费提供场地及配套孵化服务的创业孵化载体。
            </p>
          </el-collapse-item>
          <el-collapse-item title="申请条件及材料" name="2">
            <p>
              （一）申请条件。申请认定为市级创业孵化基地的创业孵化载体应当具备以下条件:
            </p>
            <ol>
              <li>
                具有专门的运营管理机构。运营机构或者管理单位应当是依法设立并具备法人资格的企事业单位、社会组织；在我市（含深汕特别合作区）运营时间超过2年；近3年内无不良征信和违法行为记录；无未了结的法律、经济纠纷；管理制度健全规范，基地的发展目标和市场定位清晰，创业实体评估准入和退出机制科学完善;拥有专业服务团队，专职孵化服务人员不少于3人，专（兼）职创业导师不少于5人。
              </li>
              <li>
                具有完善的创业孵化服务。引入外部专业服务机构提供财务代账、融资担保、专利申请、技术创新、信息咨询、科技中介、成果转化、法律维权等事务代理服务；提供工商、税务、社保、人才等“一站式”政务服务或者政务服务代理功能，协助入驻创业实体申请各类扶持资金、享受创业优惠政策和其他扶持政策；定期举办创业沙龙、创业讲堂、项目路演等交流活动，促进创业投资、风险投资等社会资本与创业项目对接。
              </li>
              <li>
                具有充足的孵化场地保障。产权清晰或租赁、委托管理关系明确，且场地作为孵化载体使用剩余期限不少于3年；孵化场地集中，在深圳市(含深汕特别合作区)内可以自主支配不少于1500平方米的创业孵化场所，在孵创业实体可以使用面积（含公共服务面积）占75%以上；提供公共服务场所、公共会议场所和后勤保障服务，配有相应的供电、供水、消防、通讯、网络等基础配套设施；公益性大学生创业孵化载体应安排30%左右的场地，免费提供给毕业5年内毕业生。
              </li>
              <li>
                具有良好的创业孵化成效。市场化创新创业孵化载体近两年在孵创业实体数量年均不少于30家，其中创业团队占比不高于50%；近两年重点群体在孵创业实体数量年均不少于8家；近两年在孵创业实体年均带动就业不少于150人，其中带动重点群体就业占比不低于10%；公益性大学生创业孵化载体近两年在孵创业实体数量年均不少于25家或者80%以上在孵创业实体获得投融资。创业实体在孵时限一般不超过3年，创业团队在孵化期完成登记注册的可以放宽最长1年；重点群体以及从事“20+8”产业集群领域的创业实体在孵时限不超过5年。
              </li>
              <p>
                重点群体是指普通高等学校、职业学校、技工院校学生(在校及毕业5年内)，出国
                (境)留学回国人员(毕业5年内)、法定劳动年龄内港澳台居民、登记失业人员、退役军人、随军家属以及残疾人。
              </p>
              <p>
                创业实体包括办公场所在基地内的创业团队；注册地和办公场所在基地内的小微企业、个体工商户、社会组织等。未签订孵化服务协议、孵化期满未退出孵化基地、入驻时成立时间超过2年的创业实体，不纳入在孵创业实体统计范围。创业实体在孵时限一般不超过3年，创业团队在孵化期完成登记注册的可以放宽最长1年。重点群体以及从事“20+8”产业集群领域的创业实体在孵时限不超过5年。
              </p>
            </ol>
            <p>
              （二）申请材料。创业孵化载体申报市级创业孵化基地应提交以下申请资料：
            </p>
            <ol>
              <li>《深圳市市级创业孵化基地认定申请表》（附件1）；</li>
              <li>符合申请条件的相关材料；</li>
              <li>无不良征信和无违法行为承诺书 （附件2）。</li>
            </ol>
          </el-collapse-item>
          <el-collapse-item title="认定程序" name="3">
            <ol>
              <li>
                申报。基地于2023年11月5日前向其运营所在地的区公共就业服务机构提交申请材料。申请资料齐全的，区公共就业服务机构予以受理，并出具《受理回执》；申请资料不齐全或者不符合法定形式的，出具《补正材料通知书》。无正当理由超过10个工作日未补正的，视为放弃申请，区公共就业服务机构退回申请资料。
              </li>
              <li>
                初审。区公共就业服务机构应对基地开展现场核查，并在15个工作日内对申请材料的真实性、合规性和完整性提出初审意见。初审通过的，报市公共就业服务机构复审。初审未通过的，出具《不予认定通知书》并说明理由。
              </li>
              <li>
                复审。市公共就业服务机构于20个工作日内通过组织书面评审、专家实地复核等形式评分（评分表详见附件3），总分100，其中,区公共就业服务机构根据申报条件要求初审通过的基地统一获得基础分60分，书面评审25分，实地复核15分。市公共就业服务机构按评分结果由高到低出具复审意见。
              </li>
              <li>
                审定名单。市人力资源保障部门对复审情况进一步审核，拟定年度新认定基地公示名单。本年度将认定不超过10家市级创业孵化基地。
              </li>
              <li>
                公示公布。审定名单在市人力资源保障部门官方网站公示7日。公示期间无异议，或者有异议但经调查不成立的，授予“深圳市创业孵化基地”称号并向社会公布。
              </li>
            </ol>
          </el-collapse-item>
          <el-collapse-item title="其他要求" name="4">
            <p>
              （一）若运营场地产业空间权属单位与政府部门签订了产业发展监管协议的，区公共就业服务机构需了解其监管协议执行情况。对于违反监管协议的，不得申报市级基地。
            </p>
            <p>
              （二）申报单位须确保申报材料完整、真实，没有按要求和时间提供材料的将视同放弃申报。
            </p>
            <p>（三）申请材料包括纸质材料（一式两份）和电子文档。</p>
          </el-collapse-item>
        </el-collapse>
      </div>

      <div v-if="active === 1">
        <h2>基本信息</h2>
        <el-alert :closable="false" title="企业基本信息" class="sector-title" />
        <!-- 基本信息表单 -->
        <el-form
          :model="baseinfoForm"
          :rules="baseinforules"
          ref="baseinfoForm"
          label-width="130px"
          class="baseForm"
        >
          <el-form-item label="企业名称" prop="name">
            <el-input
              v-model="baseinfoForm.name"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="注册资本(万元)"
            prop="age"
            :rules="[
              { required: true, message: '注册资本不能为空' },
              { type: 'number', message: '注册资本必须为数字值' },
            ]"
          >
            <el-input
              v-model.number="numberValidateForm.age"
              autocomplete="off"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="信用代码" prop="name">
            <el-input
              v-model="baseinfoForm.name"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="公司网址" prop="name">
            <el-input
              v-model="baseinfoForm.name"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="办公地址" prop="name">
            <el-input
              v-model="baseinfoForm.name"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="注册地址" prop="name">
            <el-input
              v-model="baseinfoForm.name"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="主营业务" prop="name">
            <el-input
              v-model="baseinfoForm.name"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="企业性质" prop="property">
            <el-select
              v-model="baseinfoForm.property"
              placeholder="请选择企业性质"
            >
              <el-option label="国有企业" value="guoyou"></el-option>
              <el-option label="国有控股企业" value="guoyoukonggu"></el-option>
              <el-option label="外资企业" value="waizi"></el-option>
              <el-option label="合资企业" value="hezi"></el-option>
              <el-option label="私营企业" value="siying"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="国民经济行业分类" prop="field">
            <el-select
              v-model="baseinfoForm.field"
              placeholder="请选择行业类型"
            >
              <el-option label="制造业" value="guoyou"></el-option>
              <el-option
                label="信息传输，软件和信息技术服务业"
                value="guoyoukonggu"
              ></el-option>
              <el-option label="金融业" value="waizi"></el-option>
              <el-option label="科学研究和技术服务类" value="hezi"></el-option>
              <el-option
                label="交通运输，仓储和邮政业"
                value="siying"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="高新技术产业分类" prop="field">
            <el-select
              v-model="baseinfoForm.field"
              placeholder="请选择产业类型"
            >
              <el-option label="生物医药" value="guoyou"></el-option>
              <el-option
                label="信息传输，软件和信息技术服务业"
                value="guoyoukonggu"
              ></el-option>
              <el-option label="金融业" value="waizi"></el-option>
              <el-option label="科学研究和技术服务类" value="hezi"></el-option>
              <el-option
                label="交通运输，仓储和邮政业"
                value="siying"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="注册时间" required>
            <el-col :span="3">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="baseinfoForm.date1"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="认定情况" prop="type">
            <el-checkbox-group v-model="baseinfoForm.type">
              <el-checkbox label="高企" name="type"></el-checkbox>
              <el-checkbox label="科技小巨人" name="type"></el-checkbox>
              <el-checkbox label="上市企业" name="type"></el-checkbox>
              <el-checkbox label="专精特新中小企业" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="企业创办类别" prop="resource">
            <el-radio-group v-model="baseinfoForm.resource">
              <el-radio label="独资"></el-radio>
              <el-radio label="合伙"></el-radio>
              <el-radio label="公司制"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>

      <div v-if="active === 2">
        <h2>社会信息</h2>
        <el-form
          :model="socialinfoForm"
          status-icon
          :rules="socialinforules"
          ref="socialForm"
          label-width="100px"
          class="socialForm"
        >
          <el-alert :closable="false" title="法人信息" class="sector-title" />
          <el-form-item label="姓名" prop="pass">
            <el-input
              type="password"
              v-model="socialinfoForm.pass"
              autocomplete="off"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="pass">
            <el-input
              type="password"
              v-model="socialinfoForm.pass"
              autocomplete="off"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="pass">
            <el-input
              type="password"
              v-model="socialinfoForm.pass"
              autocomplete="off"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="学历" prop="checkPass">
            <el-select
              v-model="baseinfoForm.field"
              placeholder="请选择学历类型"
            >
              <el-option label="高中" value="gaozhong"></el-option>
              <el-option label="专科" value="zhuangke"></el-option>
              <el-option label="本科" value="benke"></el-option>
              <el-option label="硕士" value="shuoshi"></el-option>
              <el-option label="博士" value="boshi"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="固定电话" prop="age">
            <el-input
              v-model.number="socialinfoForm.age"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="毕业院校" prop="age">
            <el-input
              v-model.number="socialinfoForm.age"
              class="custom-input"
            ></el-input>
          </el-form-item>

          <el-alert :closable="false" title="联系人信息" class="sector-title" />
          <el-form-item label="姓名" prop="pass">
            <el-input
              type="password"
              v-model="socialinfoForm.pass"
              autocomplete="off"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="手机号码" prop="pass">
            <el-input
              type="password"
              v-model="socialinfoForm.pass"
              autocomplete="off"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="pass">
            <el-input
              type="password"
              v-model="socialinfoForm.pass"
              autocomplete="off"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="QQ" prop="age">
            <el-input
              v-model.number="socialinfoForm.age"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="职务" prop="age">
            <el-input
              v-model.number="socialinfoForm.age"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="固定电话" prop="age">
            <el-input
              v-model.number="socialinfoForm.age"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="传真" prop="age">
            <el-input
              v-model.number="socialinfoForm.age"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="微信" prop="age">
            <el-input
              v-model.number="socialinfoForm.age"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-alert
            :closable="false"
            title="银行账户信息"
            class="sector-title"
          />
          <el-form-item label="开户银行" prop="age">
            <el-input
              v-model.number="socialinfoForm.age"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="账号" prop="age">
            <el-input
              v-model.number="socialinfoForm.age"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-alert
            :closable="false"
            title="企业证明材料"
            class="sector-title"
          />
          <el-upload
            action="alert()"
            list-type="picture-card"
            :file-list="fileList"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :on-change="loadJsonFromFile"
            :auto-upload="false"
            class="pic-upload"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="" />
          </el-dialog>
        </el-form>
      </div>

      <div v-if="active === 3">
        <h2>员工与租房信息</h2>

        <el-form
          :model="employinfoForm"
          status-icon
          :rules="employinforules"
          ref="employForm"
          label-width="150px"
          class="employForm"
        >
          <el-alert :closable="false" title="员工信息" class="sector-title" />
          <!-- 这里稍后改为数字验证表单项 -->
          <!-- 不需要改，这里反正是自定义规则的表单，后续定义一个统一规则 -->
          <el-form-item label="员工人数" prop="pass">
            <el-input
              type="password"
              v-model="socialinfoForm.pass"
              autocomplete="off"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="管理人数" prop="pass">
            <el-input
              type="password"
              v-model="socialinfoForm.pass"
              autocomplete="off"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="大专及以上人数" prop="pass">
            <el-input
              type="password"
              v-model="socialinfoForm.pass"
              autocomplete="off"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="参与专业培训人数" prop="age">
            <el-input
              v-model.number="socialinfoForm.age"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="参保人数" prop="age">
            <el-input
              v-model.number="socialinfoForm.age"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="研究人数" prop="age">
            <el-input
              v-model.number="socialinfoForm.age"
              class="custom-input"
            ></el-input>
          </el-form-item>

          <el-alert :closable="false" title="租房信息" class="sector-title" />
          <el-form-item label="租房开始时间" required>
            <el-col :span="3">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="baseinfoForm.date1"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="租房结束时间" required>
            <el-col :span="3">
              <el-form-item prop="date1">
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="baseinfoForm.date1"
                  style="width: 100%"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="租房面积(平米)" prop="age">
            <el-input
              v-model.number="socialinfoForm.age"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="单位租金(元/平米)" prop="age">
            <el-input
              v-model.number="socialinfoForm.age"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="租房地址" prop="age">
            <el-input
              v-model.number="socialinfoForm.age"
              class="custom-input"
            ></el-input>
          </el-form-item>
          <el-form-item label="材料" prop="age">
            <!-- 这里是有限制类型和大小的 -->
            <el-upload
              class="upload-demo"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-change="handleChange"
              :file-list="fileList"
            >
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">
                上传租房相关的证明材料
              </div>
            </el-upload>
          </el-form-item>
        </el-form>
      </div>

      <!-- 这块怎么设计？
        可以将前面所有的信息做一个展示，这样就方便表单的向后端提交
        也可以就简单放一个按钮
       -->

      <div v-if="active === 4">
        <h2>提交申请</h2>
      </div>
    </div>

    <el-divider></el-divider>
    <!-- 这里更完善的逻辑还需要看是否表单内容填写符合规则 -->
    <div class="step-button-container">
      <el-button @click="prev" :disabled="active === 0" class="step-button"
        >上一步</el-button
      >
      <el-button
        v-if="active !== 4"
        @click="next"
        :disabled="active === 4"
        class="step-button"
        >下一步</el-button
      >
      <el-button v-else @click="submit" class="submit-button"> 提交 </el-button>
    </div>
    <el-dialog
      title="入驻申请提交成功"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <span>您的入驻申请已经提交，请注意查看消息</span>
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
import axios from "axios"
export default {
  data() {
    //下面这一堆是socialinfo的自定义规则函数
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.socialinfoForm.checkPass !== "") {
          this.$refs.socialinfoForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.socialinfoForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      
      active: 0,
      activeNames: ["1"],
      //点击提交按钮后的提示框
      centerDialogVisible: false,
      baseinfoForm: {
        name: "",
        property: "",
        date1: "",
        delivery: false,
        type: [],
        // resource: "",
        dialogImageUrl: "",
        //上传文件的提示框
        dialogVisible: false,
      },
      baseinforules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        property: [
          { required: true, message: "请选择企业性质", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个类别",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
      },

      socialinfoForm: {
        pass: "",
        checkPass: "",
        age: "",
      },
      socialinforules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
      },

      employinfoForm: {},
      employinforules: {},
      numberValidateForm: {
        age: "",
      },

      // 租房信息中的文件上传列表
      fileList: [
        {
          name: "food.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
    };
  },

  methods: {
    async loadJsonFromFile(file, fileList){
      this.uploadFiles = fileList
      console.log(fileList[2].raw);

      let data=new FormData()
      data.append(fileList[2].name,fileList[2].raw)
      await axios.post('http://localhost:8080/test/test', data
      )  
        .then(response => {  
          // console.log(response.data);
          // valid=response.data;
        });
      
    },
    next() {
      if (this.active++ > 3) this.active = 0;
    },
    prev() {
      if (this.active > 0) this.active--;
    },
    //这个函数貌似没什么用
    handleChange(val) {
      console.log(val);
    },
    //包含将数据传输到后端的逻辑
    submit() {
      this.centerDialogVisible = true;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 租房信息中的文件上传处理函数
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
    },
  },
};
</script>

<style lang="scss">
.page-content {
  .content-area {
    margin-top: 10px;
  }
}

.sector-title {
  margin-bottom: 15px;
}

.progress {
  margin: 20px 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}

.down-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.step-content {
  margin-bottom: 20px;
}

.step-button-container {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}

.step-button {
  margin: 0 40px;
}

.custom-input {
  width: 50%;
}

.pic-upload {
  margin-left: 40px;
}

p,
li {
  font-family: sans-serif;
  font-size: 16px;
}
</style>
