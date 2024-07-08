
<template>
    <div>
  
      <div class="performance-template-maker-header">
         <span> 发布绩效考核模板</span>
      </div>
  
      <div class="PA-basic-info">
  
        <div class="PA-basic-info-header">
          <span>基本信息</span>
        </div>
  
        <div class="PA-basic-info-content">
          <div style="margin: 20px;"></div>
  
  <el-form :label-position="right" label-width="80px" :model="formLabelAlign">
    <el-form-item label="名称">
      <el-input v-model="name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-input v-model="region"></el-input>
    </el-form-item>
    <el-form-item label="活动形式">
      <el-input v-model="type"></el-input>
    </el-form-item>
    <el-form-item label="类型">
      <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    </el-form-item>
  
    <el-form-item label="活动日期">
      <div class="block">
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
    </div>
    </el-form-item>
  
    <el-form-item label="描述">
      <el-input
    type="textarea"
    :rows="2"
    placeholder="请输入内容"
    v-model="textarea">
  </el-input>
    </el-form-item>
  </el-form>
  
  
  
        </div>
      </div>
  
  
  
        <div class="show-file">
            <div class="show-file-header">
              <span>
                示例文件
              </span>
            </div>
            <div>
            <div>
              <el-button  size="small"  @click="addRow">新增</el-button>
            </div>
            <!--设置的表单-->
            <el-form :model="studentData" ref="data" label-width="100">
            <el-table
            border
              :header-cell-style="{ 'text-align': 'center' }"
              :cell-style="{ 'text-align': 'center' }"
              :data="studentData"
              ref="table"
              style="width: 100%"
            >
  
              <el-table-column align="center"   label="姓名">
                <template slot-scope="scope">
                <!--表格里面嵌套表单,这么做就可以进行非空校验了，如果只用表格不嵌套表单就不能校验-->
  
                  <el-form-item
                    :prop="scope.$index + '.name'"
                    :rules="{ required: true, message: '姓名不能为空', trigger: 'blur' }"
                  >
                  <el-input
                    v-model="studentData[scope.$index].name"
                    autocomplete="off"
                    size="small"
                    placeholder="姓名"
                  ></el-input>
                  </el-form-item>
                </template>
              </el-table-column>
  
              <el-table-column align="center"  label="年龄">
                <template slot-scope="scope">
                    <el-form-item
                      :prop="scope.$index + '.age'"
                      :rules="{ required: true, message: '年龄不能为空', trigger: 'blur' }"
                    >
                  <el-input
                    v-model="studentData[scope.$index].age"
                    autocomplete="off"
                    size="small"
                    type='number'
                    placeholder="收款方开户行号"
                  ></el-input>
                    </el-form-item>
                </template>
              </el-table-column>
  
              <el-table-column align="center"  label="性别">
                <template slot-scope="scope">
                  <el-form-item
                    :prop="scope.$index + '.sex'"
                    :rules="{ required: true, message: '性别不能为空', trigger: 'blur' }"
                  >
                  <el-input
                    v-model="studentData[scope.$index].sex"
                    autocomplete="off"
                    size="small"
                    placeholder="性别"
                  ></el-input>
                  </el-form-item>
                </template>
              </el-table-column>
  
              <el-table-column fixed="right" label="操作" width="100">
                <template slot-scope="scope">
                  <el-button
                    @click="handleDeleteRow(studentData[scope.$index])"
                    type="text"
                    size="small"
                  >删除</el-button
                  >
                </template>
              </el-table-column>
              
            </el-table>
            </el-form>
               
          <div slot="footer" class="dialog-footer" style="margin-bottom: 10px">
            <el-button size="mini"  @click="submit">提交</el-button>
            <el-button size="mini" @click="resetForm()">重置</el-button>
          </div>
          </div>
          
        </div>
  
        <div class="module">
          <div class="module-header"></div>
            <span>模块选择</span>
        </div>
        <div class="module-adder">
          <el-button type="primary">选择模板</el-button>
        </div>
    </div>
  </template>
  
    
    <script>
    export default {
      data() {
        return {
  
          // 带图卡片的日期
          currentDate: new Date(),
       
          studentData:[],
          options: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
        
        };
      },
      methods: {
        policyhandleTabClick(tab) {
          // 可在此处添加点击标签页的逻辑
          console.log(`切换到标签页: ${tab.name}`);
        },
        monthhandelTabClick(tab) {
          console.log(`切换到标签页: ${tab.name}`);
        },
        addRow() {
      let index = this.studentData.length ;
      this.studentData.push({
        key: index,
        name:'',
        age:'',
        sex:'',
      });
    },
    handleDeleteRow(row){
      let datas = this.studentData;
      for (var i = 0; i < datas.length; i++){
        if (datas[i].key == row.key){
        // 删除这一行
          datas.splice(i,1);
        }
      }
    },
    submit() {
      this.$refs["data"].validate(valid => {
        //valid为true，表示表单都已经验证通过，若为false，说明存在表单验证失败
          if (valid) {
            save(this.studentData).then(response => {
              this.$message({
                message: '提交成功',
                type: 'success'
              });
            });
          }
      });
    },
    resetForm() {
      let datas = this.studentData;
      for (var i = 0; i < datas.length; i++){
        datas[i].name='';
        datas[i].age='';
        datas[i].sex='';
      }
    },
      },
    };
    </script>
    
    <style scoped>
    .performance-template-maker-header {
      background-color: #829bed; /* 设置背景颜色 */
      padding: 10px 20px; /* 设置内边距 */
    }
    .PA-basic-info{
      background-color: rgb(199, 224, 224);
    }
    .policy-header-content {
      display: flex; /* 使用flex布局 */
      align-items: center; /* 垂直居中对齐 */
    }
    
    .policy-icon img {
      width: 50px; /* 设置图标宽度 */
      margin-right: 10px; /* 设置图标与文本之间的间距 */
    }
    
    .policy-text ul {
      list-style: none; /* 去掉默认的列表样式 */
      padding: 0; /* 去掉内边距 */
      margin: 0; /* 去掉外边距 */
    }
    
    .policy-text li {
      margin-bottom: 5px; /* 设置每个列表项的间距 */
      font-size: 14px; /* 设置字体大小 */
    }
    
    .policy-text li:last-child {
      margin-bottom: 0; /* 去掉最后一个列表项的间距 */
    }
    
    .policy-container {
      padding: 20px;
      background-color: #ffffff;
    }
    
    .policy-content {
      margin-top: 20px;
    }
    
    .policy-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .policy-list li {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #eee;
    }
    
    .policy-title {
      flex: 1;
    }
    
    .policy-date {
      color: #999;
    }
    
    /* 卡片的样式 */
    .text {
      font-size: 14px;
    }
    
    .item {
      margin-bottom: 18px;
    }
    
    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both;
    }
    
    .box-card {
      width: 480px;
    }
    
    /* 设置带图卡片样式 */
    .time {
      font-size: 13px;
      color: #999;
    }
    
    .bottom {
      margin-top: 13px;
      line-height: 12px;
    }
    
    .button {
      padding: 0;
      float: right;
    }
    
    .image {
      width: 100%;
      display: block;
    }
    
    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    
    .clearfix:after {
      clear: both;
    }
    
    .project-apply-header {
      display: inline-block;
    }
    
    .sector-header {
      margin-bottom: 30px;
    }
    
    .more-button {
      float: right;
      margin-top: 40px;
    }
    
    .policy-month-header {
      display: inline-block;
    }
    
    /* 设置分割线样式 */
    .title-fieldset {
      border: none;
      border-top: 3px solid black;
    }
    .title-fieldset .inner {
      margin: 0 auto;
      padding: 0 0.25rem;
    }
    </style>
    