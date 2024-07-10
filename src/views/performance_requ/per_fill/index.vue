<template>
    <div>
      <div class="performance-template-maker-header">
        <h2 class="per-release">填写绩效考核</h2>
      </div>

<template>
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

</template>




      <template v-for="(item,i) in panels">
<h2 class="moduletitle">
  {{ item.name }}
</h2>
<fieldset class="title-fieldset"></fieldset>

    <el-form
          :model="dynamicValidateForm"
          ref="dynamicValidateForm"
          label-width="100px"
          class="demo-dynamic"
        >
        <template v-for="(j) in item.code.length">
            <el-form-item v-if="item.code.charAt(j-1)=='1'"
            prop="email"
            :label=item.codename[j-1]
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
           
          <el-form-item v-else
            v-for="(domain, index) in dynamicValidateForm.domains"
            :label=item.codename[j-1]
            :key="domain.key"
            :prop="'domains.' + index + '.value'"
            :rules="{
              required: true,
              message: '域名不能为空',
              trigger: 'blur',
            }"
          >
            <el-input v-model="domain.value"></el-input
            >
          </el-form-item> 
        </template>


        </el-form>

    
    </template>





     
    
    </div>
  </template>
  <script>
  export default {
    data() {

      return {
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
        panels: [
        {
          name: "模块1",
          region: "2",
          date1: "3",
          desc: "4",
          code:"1111",
          codename:["邮箱","姓名","年龄","性别"]
        },
        {
          name: "模块2",
          region: "2",
          date1: "3",
          desc: "4",
                    code:"11",
                    codename:["邮箱","姓名"]
        },
        {
          name: "模块3",
          region: "2",
          date1: "3",
          desc: "4",
                    code:"11",
                    codename:["邮箱","姓名"]
        },
        {
          name: "模块4",
          region: "2",
          date1: "3",
          desc: "4",
                    code:"11",
                    codename:["邮箱","姓名"]
        }
      ],
      dynamicValidateForm: {
        domains: [
          {
            value: "",
          },
        ],
        email: "",
      },
        // 带图卡片的日期
        currentDate: new Date(),
         input: ''
      };
    },
    methods: {

    },
    watch:{

        },
  };
  </script>
  
  <style scoped>
    .moduletitle{
    display: inline-block;
  }
  .title-fieldset {
  border: none;
  border-top: 3px solid black;
}
  </style>
  