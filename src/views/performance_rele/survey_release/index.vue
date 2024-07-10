<template>
  <div>
    <div class="performance-template-maker-header">
      <h2 class="per-release">发布绩效考核</h2>
    </div>

    <div id="app">
    <el-container>
      <!-- <el-header class="header">
        <comtitle :titlemsg="'查询组件'"></comtitle>
      </el-header> -->
      <el-main class="content">
        <el-row class="row1">
          <el-col :span="2">搜索ID</el-col>
          <el-col :span="6">
            <el-input v-model="inputId" placeholder="请输入内容"></el-input>
          </el-col>
          <el-col :span="1">&nbsp;</el-col>
          <el-col :span="2">搜索名称</el-col>
          <el-col :span="6">
            <el-input v-model="inputName" placeholder="请输入内容"></el-input>
          </el-col>
        </el-row>
        <el-table
          :data="studentsNewList"
          style="width:95%"
          class="eltable1">
          <el-table-column
            prop="id"
            label="模板ID"
            width="150">
          </el-table-column>
          <el-table-column
            prop="name"
            label="模板名称"
            width="280">
          </el-table-column>
          <el-table-column
            prop="state"
            label="状态"
            width="150">
          </el-table-column>
          <el-table-column
            prop="etime"
            label="模板创建日期">
          </el-table-column>
          <el-table-column
            prop="app"
            label="发布">
          <template slot-scope="scope">
            <el-button type="text" @click="checkDetail(scope.row.phone)">发布</el-button>
              </template>
            </el-table-column>


        </el-table>
      </el-main>
    </el-container>
  </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      // 带图卡片的日期
      currentDate: new Date(),
      studentsList:[
          {id:1,name:'合肥市2023-2024年度第一次考核1',state:'已完成',etime:new Date(),goal:100},
          {id:2,name:'合肥市2023-2024年度第一次考核2',state:'已完成',etime:new Date(),goal:60},
          {id:1,name:'合肥市2023-2024年度第一次考核3',state:'已完成',etime:new Date(),goal:100},
          {id:2,name:'合肥市2023-2024年度第一次考核4',state:'已完成',etime:new Date(),goal:60},
          {id:1,name:'合肥市2023-2024年度第一次考核5',state:'已完成',etime:new Date(),goal:100},
          {id:2,name:'合肥市2023-2024年度第一次考核6',state:'已完成',etime:new Date(),goal:60},
          {id:1,name:'合肥市2023-2024年度第一次考核7',state:'已完成',etime:new Date(),goal:100},
          {id:2,name:'合肥市2023-2024年度第一次考核8',state:'已完成',etime:new Date(),goal:60},
          {id:1,name:'合肥市2023-2024年度第一次考核9',state:'已完成',etime:new Date(),goal:100},
          {id:2,name:'合肥市2023-2024年度第一次考核10',state:'已完成',etime:new Date(),goal:60},
          {id:1,name:'合肥市2023-2024年度第一次考核11',state:'已完成',etime:new Date(),goal:100},
          {id:2,name:'合肥市2023-2024年度第一次考核12',state:'已完成',etime:new Date(),goal:60},
          {id:1,name:'合肥市2023-2024年度第一次考核13',state:'已完成',etime:new Date(),goal:100},
          {id:2,name:'合肥市2023-2024年度第一次考核14',state:'已完成',etime:new Date(),goal:60},
          {id:1,name:'合肥市2023-2024年度第一次考核15',state:'已完成',etime:new Date(),goal:100},
          {id:2,name:'合肥市2023-2024年度第一次考核16',state:'已完成',etime:new Date(),goal:60},
          {id:1,name:'合肥市2023-2024年度第一次考核17',state:'已完成',etime:new Date(),goal:100},
          {id:2,name:'合肥市2023-2024年度第一次考核18',state:'已完成',etime:new Date(),goal:60},
          {id:1,name:'合肥市2023-2024年度第一次考核19',state:'已完成',etime:new Date(),goal:100},
          {id:2,name:'合肥市2023-2024年度第一次考核20',state:'已完成',etime:new Date(),goal:60}
          ],
          studentsNewList:[                   {id:1,name:'合肥市2023-2024年度第一次考核1',state:'已完成',etime:new Date(),goal:100},
          {id:2,name:'合肥市2023-2024年度第一次考核2',state:'已完成',etime:new Date(),goal:60},
          {id:1,name:'合肥市2023-2024年度第一次考核3',state:'已完成',etime:new Date(),goal:100},
          {id:2,name:'合肥市2023-2024年度第一次考核4',state:'已完成',etime:new Date(),goal:60},
          {id:1,name:'合肥市2023-2024年度第一次考核5',state:'已完成',etime:new Date(),goal:100},
          {id:2,name:'合肥市2023-2024年度第一次考核6',state:'已完成',etime:new Date(),goal:60},
          {id:1,name:'合肥市2023-2024年度第一次考核7',state:'已完成',etime:new Date(),goal:100},
          {id:2,name:'合肥市2023-2024年度第一次考核8',state:'已完成',etime:new Date(),goal:60},
          {id:1,name:'合肥市2023-2024年度第一次考核9',state:'已完成',etime:new Date(),goal:100},
          {id:2,name:'合肥市2023-2024年度第一次考核10',state:'已完成',etime:new Date(),goal:60},
          {id:1,name:'合肥市2023-2024年度第一次考核11',state:'已完成',etime:new Date(),goal:100},
          {id:2,name:'合肥市2023-2024年度第一次考核12',state:'已完成',etime:new Date(),goal:60},
          {id:1,name:'合肥市2023-2024年度第一次考核13',state:'已完成',etime:new Date(),goal:100},
          {id:2,name:'合肥市2023-2024年度第一次考核14',state:'已完成',etime:new Date(),goal:60},
          {id:1,name:'合肥市2023-2024年度第一次考核15',state:'已完成',etime:new Date(),goal:100},
          {id:2,name:'合肥市2023-2024年度第一次考核16',state:'已完成',etime:new Date(),goal:60},
          {id:1,name:'合肥市2023-2024年度第一次考核17',state:'已完成',etime:new Date(),goal:100},
          {id:2,name:'合肥市2023-2024年度第一次考核18',state:'已完成',etime:new Date(),goal:60},
          {id:1,name:'合肥市2023-2024年度第一次考核19',state:'已完成',etime:new Date(),goal:100},
          {id:2,name:'合肥市2023-2024年度第一次考核20',state:'已完成',etime:new Date(),goal:60}],
      studentData: [],
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
    };
  },
  methods: {
    searchId(keywords) {
          return this.studentsList.filter(item =>{
            if(item.id == keywords) {
              return item
            }
          })
        },
        searchName(keywords) {
          return this.studentsList.filter(item =>{
            if(item.name.includes(keywords)&&item.cname.includes(keywords)){
              return item
            }
          })
        },
    policyhandleTabClick(tab) {
      // 可在此处添加点击标签页的逻辑
      console.log(`切换到标签页: ${tab.name}`);
    },
    monthhandelTabClick(tab) {
      console.log(`切换到标签页: ${tab.name}`);
    },
    addRow() {
      let index = this.studentData.length;
      this.studentData.push({
        key: index,
        name: "",
        age: "",
        sex: "",
      });
    },
    handleDeleteRow(row) {
      let datas = this.studentData;
      for (var i = 0; i < datas.length; i++) {
        if (datas[i].key == row.key) {
          // 删除这一行
          datas.splice(i, 1);
        }
      }
    },
    submit() {
      this.$refs["data"].validate((valid) => {
        //valid为true，表示表单都已经验证通过，若为false，说明存在表单验证失败
        if (valid) {
          save(this.studentData).then((response) => {
            this.$message({
              message: "提交成功",
              type: "success",
            });
          });
        }
      });
    },
    resetForm() {
      let datas = this.studentData;
      for (var i = 0; i < datas.length; i++) {
        datas[i].name = "";
        datas[i].age = "";
        datas[i].sex = "";
      }
    },
  },
  watch:{
  inputId: function(val) {
          if(val == ''){
            this.studentsNewList = this.studentsList
          }else{
            this.studentsNewList = this.searchId(val)
          }
        },
        inputName: function(val) {
          if(val == ''){
            this.studentsNewList = this.studentsList
          }else{
            this.studentsNewList = this.searchName(val)
          }
        },
      },
};
</script>

<style scoped>
.performance-template-maker-header {
  background-color: #ffffff; /* 设置背景颜色 */
  padding: 10px 20px; /* 设置内边距 */
}
.PA-basic-info {
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
.per-release{
    display: inline-block;
  }
</style>
