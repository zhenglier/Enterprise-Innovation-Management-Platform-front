<template>
  <!-- 绩效 -->
  <div>
    <h2>绩效模板制作</h2>
    <el-alert :closable="false">基本信息</el-alert>
    <el-form
      :model="baseinfoForm"
      :rules="baseinforules"
      ref="ruleForm"
      label-width="120px"
      class="baseinfoForm"
    >
      <el-form-item label="考核名称" prop="name">
        <el-input v-model="baseinfoForm.name"></el-input>
      </el-form-item>
      <el-form-item label="考核类型" prop="type">
        <el-select v-model="baseinfoForm.types" placeholder="请选择考核类型">
          <el-option label="年度" value="year"></el-option>
          <el-option label="季度" value="season"></el-option>
          <el-option label="月度" value="month"></el-option>
          <el-option label="特殊" value="special"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="考核开始日期" required>
        <el-col :span="11">
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
      <el-form-item label="考核结束日期" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="baseinfoForm.date2"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="描述" prop="desc">
        <el-input type="textarea" v-model="baseinfoForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="resetForm('baseinfoForm')">重置</el-button>
      </el-form-item>
    </el-form>

    <!-- 动态板块 -->
    <div v-for="(panel, index) in panels" :key="index" class="panel panel-info">
      <div class="panel-body">
        <!-- 这里是动态增加的表单的内容 -->
        <h2 class="panel-heading">板块 {{ index + 1 }}</h2>
        <fieldset class="title-fieldset"></fieldset>
        <!-- 动态表单 -->
        <el-form
          :model="dynamicValidateForm"
          ref="dynamicValidateForm"
          label-width="100px"
          class="demo-dynamic"
        >
          <el-form-item
            prop="email"
            label="邮箱"
            :rules="[
              { required: true, message: '请输入邮箱地址', trigger: 'blur' },
              {
                type: 'email',
                message: '请输入正确的邮箱地址',
                trigger: ['blur', 'change'],
              },
            ]"
          >
            <el-input v-model="dynamicValidateForm.email"></el-input>
          </el-form-item>
          <el-form-item
            v-for="(domain, index) in dynamicValidateForm.domains"
            :label="'域名' + index"
            :key="domain.key"
            :prop="'domains.' + index + '.value'"
            :rules="{
              required: true,
              message: '域名不能为空',
              trigger: 'blur',
            }"
          >
            <el-input v-model="domain.value"></el-input
            ><el-button @click.prevent="removeDomain(domain)">删除</el-button>
          </el-form-item>
          <el-form-item>
            <el-button @click="addDomain">新增域名</el-button>
            <el-button @click="resetForm('dynamicValidateForm')"
              >重置</el-button
            >
          </el-form-item>
        </el-form>
      </div>
      <div class="panel-footer">
        <el-button @click="removePanel(index)">删除板块</el-button>
      </div>
    </div>
    <el-button type="primary" @click="addPanel">添加板块</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //每一个板块的动态表单
      dynamicValidateForm: {
        domains: [
          {
            value: "",
          },
        ],
        email: "",
      },
      //基本信息表单
      baseinfoForm: {
        name: "",
        types: "",
        date1: "",
        date2: "",
        desc: "",
      },
      //基本信息表单校验规则
      baseinforules: {
        name: [
          { required: true, message: "考核名称不能为空", trigger: "blur" },
          { min: 3, max: 30, message: "长度至少3个字符", trigger: "blur" },
        ],
        types: [
          { required: true, message: "请选择考核类型", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        desc: [{ required: true, message: "请输入考核描述", trigger: "blur" }],
      },
      //动态板块数组
      panels: [
        {
          name: "",
          region: "",
          date1: "",
          desc: "",
        },
      ],
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    addPanel() {
      this.panels.push({
        name: "",
        count: "",
        desc: "",
      });
    },
    removePanel(index) {
      this.panels.splice(index, 1);
    },
    // 每个板块的动态表单
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      var index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: "",
        key: Date.now(),
      });
    },
  },
};
</script>

<style scoped>
.panel {
  margin-top: 20px;
}
.title-fieldset {
  border: none;
  border-top: 3px solid black;
}
.title-fieldset .inner {
  margin: 0 auto;
  padding: 0 0.25rem;
}
</style>
