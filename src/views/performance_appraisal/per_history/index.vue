
<template>
    <div>
<div class="per-history-header">
  <h2 class="per-history-title">历史绩效</h2>
</div>
<div class="per-history-content">
    <div id="app">
    <el-container>
      <!-- <el-header class="header">
        <comtitle :titlemsg="'查询组件'"></comtitle>
      </el-header> -->
      <el-main class="content">
        <el-row class="row1">
          <el-col :span="2">搜索ID</el-col>
          <el-col :span="4">
            <el-input v-model="inputId" placeholder="请输入内容"></el-input>
          </el-col>
          <el-col :span="2">搜索名称</el-col>
          <el-col :span="4">
            <el-input v-model="inputName" placeholder="请输入内容"></el-input>
          </el-col>
          <el-col :span="2">搜索载体</el-col>
          <el-col :span="4">
            <el-input v-model="inputcname" placeholder="请输入内容" @input="changeMessage($event)"></el-input>
          </el-col>
        </el-row>
        <el-table
          :data="studentsNewList"
          style="width:95%"
          class="eltable1">
          <el-table-column
            prop="id"
            label="ID"
            width="150">
          </el-table-column>
          <el-table-column
            prop="name"
            label="考核名称"
            width="280">
          </el-table-column>
          <el-table-column
            prop="state"
            label="状态"
            width="150">
          </el-table-column>
          <el-table-column
            prop="etime"
            label="截至日期">
          </el-table-column>
          <el-table-column
            prop="goal"
            label="分数">
          </el-table-column>
          <el-table-column
            prop="cname"
            label="载体名称">
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>

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
          studentsList:[
          {id:1,name:'合肥市2023-2024年度第一次考核1',state:'已完成',etime:new Date(),goal:100,cname:'南京某园区'},
          {id:2,name:'合肥市2023-2024年度第一次考核2',state:'已完成',etime:new Date(),goal:60,cname:'合肥某园区'},
          {id:1,name:'合肥市2023-2024年度第一次考核3',state:'已完成',etime:new Date(),goal:100,cname:'合肥某园区'},
          {id:2,name:'合肥市2023-2024年度第一次考核4',state:'已完成',etime:new Date(),goal:60,cname:'合肥某园区'},
          {id:1,name:'合肥市2023-2024年度第一次考核5',state:'已完成',etime:new Date(),goal:100,cname:'合肥某园区'},
          {id:2,name:'合肥市2023-2024年度第一次考核6',state:'已完成',etime:new Date(),goal:60,cname:'合肥某园区'},
          {id:1,name:'合肥市2023-2024年度第一次考核7',state:'已完成',etime:new Date(),goal:100,cname:'合肥某园区'},
          {id:2,name:'合肥市2023-2024年度第一次考核8',state:'已完成',etime:new Date(),goal:60,cname:'合肥某园区'},
          {id:1,name:'合肥市2023-2024年度第一次考核9',state:'已完成',etime:new Date(),goal:100,cname:'合肥某园区'},
          {id:2,name:'合肥市2023-2024年度第一次考核10',state:'已完成',etime:new Date(),goal:60,cname:'合肥某园区'},
          {id:1,name:'合肥市2023-2024年度第一次考核11',state:'已完成',etime:new Date(),goal:100,cname:'合肥某园区'},
          {id:2,name:'合肥市2023-2024年度第一次考核12',state:'已完成',etime:new Date(),goal:60,cname:'合肥某园区'},
          {id:1,name:'合肥市2023-2024年度第一次考核13',state:'已完成',etime:new Date(),goal:100,cname:'合肥某园区'},
          {id:2,name:'合肥市2023-2024年度第一次考核14',state:'已完成',etime:new Date(),goal:60,cname:'合肥某园区'},
          {id:1,name:'合肥市2023-2024年度第一次考核15',state:'已完成',etime:new Date(),goal:100,cname:'合肥某园区'},
          {id:2,name:'合肥市2023-2024年度第一次考核16',state:'已完成',etime:new Date(),goal:60,cname:'合肥某园区'},
          {id:1,name:'合肥市2023-2024年度第一次考核17',state:'已完成',etime:new Date(),goal:100,cname:'合肥某园区'},
          {id:2,name:'合肥市2023-2024年度第一次考核18',state:'已完成',etime:new Date(),goal:60,cname:'合肥某园区'},
          {id:1,name:'合肥市2023-2024年度第一次考核19',state:'已完成',etime:new Date(),goal:100,cname:'合肥某园区'},
          {id:2,name:'合肥市2023-2024年度第一次考核20',state:'已完成',etime:new Date(),goal:60,cname:'合肥某园区'}
          ],
          studentsNewList:[                       {id:1,name:'合肥市2023-2024年度第一次考核1',state:'已完成',etime:new Date(),goal:100,cname:'南京某园区'},
          {id:2,name:'合肥市2023-2024年度第一次考核2',state:'已完成',etime:new Date(),goal:60,cname:'合肥某园区'},
          {id:1,name:'合肥市2023-2024年度第一次考核3',state:'已完成',etime:new Date(),goal:100,cname:'合肥某园区'},
          {id:2,name:'合肥市2023-2024年度第一次考核4',state:'已完成',etime:new Date(),goal:60,cname:'合肥某园区'},
          {id:1,name:'合肥市2023-2024年度第一次考核5',state:'已完成',etime:new Date(),goal:100,cname:'合肥某园区'},
          {id:2,name:'合肥市2023-2024年度第一次考核6',state:'已完成',etime:new Date(),goal:60,cname:'合肥某园区'},
          {id:1,name:'合肥市2023-2024年度第一次考核7',state:'已完成',etime:new Date(),goal:100,cname:'合肥某园区'},
          {id:2,name:'合肥市2023-2024年度第一次考核8',state:'已完成',etime:new Date(),goal:60,cname:'合肥某园区'},
          {id:1,name:'合肥市2023-2024年度第一次考核9',state:'已完成',etime:new Date(),goal:100,cname:'合肥某园区'},
          {id:2,name:'合肥市2023-2024年度第一次考核10',state:'已完成',etime:new Date(),goal:60,cname:'合肥某园区'},
          {id:1,name:'合肥市2023-2024年度第一次考核11',state:'已完成',etime:new Date(),goal:100,cname:'合肥某园区'},
          {id:2,name:'合肥市2023-2024年度第一次考核12',state:'已完成',etime:new Date(),goal:60,cname:'合肥某园区'},
          {id:1,name:'合肥市2023-2024年度第一次考核13',state:'已完成',etime:new Date(),goal:100,cname:'合肥某园区'},
          {id:2,name:'合肥市2023-2024年度第一次考核14',state:'已完成',etime:new Date(),goal:60,cname:'合肥某园区'},
          {id:1,name:'合肥市2023-2024年度第一次考核15',state:'已完成',etime:new Date(),goal:100,cname:'合肥某园区'},
          {id:2,name:'合肥市2023-2024年度第一次考核16',state:'已完成',etime:new Date(),goal:60,cname:'合肥某园区'},
          {id:1,name:'合肥市2023-2024年度第一次考核17',state:'已完成',etime:new Date(),goal:100,cname:'合肥某园区'},
          {id:2,name:'合肥市2023-2024年度第一次考核18',state:'已完成',etime:new Date(),goal:60,cname:'合肥某园区'},
          {id:1,name:'合肥市2023-2024年度第一次考核19',state:'已完成',etime:new Date(),goal:100,cname:'合肥某园区'},
          {id:2,name:'合肥市2023-2024年度第一次考核20',state:'已完成',etime:new Date(),goal:60,cname:'合肥某园区'}],
          inputName:'',
          inputId:null,
          options:[
            {value:0,label:'全部'},
            {value:1,label:'男'},
            {value:2,label:'女'}
          ],
          value:0
        
        };
      },
      methods: {
        
changeMessage() {
  this.$forceUpdate()
},
    getStudentsNum() {
          this.$axios.get('http://127.0.0.1:9091/getall').then(result => {
            this.studentsNewList = this.studentsList = result.data
          }).catch(err => {
            console.log(err)
          })
        },
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
        searchcName(keywords) {
          return this.studentsList.filter(item =>{
            if(item.cname.includes(keywords)){
              return item
            }
          })
        },
        searchsex(keywords) {
          return this.studentsList.filter(item =>{
            if(item.sex.includes(keywords)){
              return item
            }
          })
        },
        numberToSex(num){
          return num==1?'男':'女'
        }
      },
      created() {
        this.getStudentsNum()
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
        inputcname: function(val) {
          if(val == ''){
            this.studentsNewList = this.studentsList
          }else{
            this.studentsNewList = this.searchcName(val)
          }
        },
        value: function(val) {
          if(val == 0){
            this.studentsNewList = this.studentsList
          }else{
            this.studentsNewList = this.searchsex(this.numberToSex(val))
          }
        }
      },
    };
    </script>
    
    <style scoped>
 *{margin:0;padding:0;}
  #app{
    background:#ffffff;
  }
  .header{
    width:100%;
    margin-bottom:30px;
  }
  .content{
    padding-left:30px;
  }
  .row1{
    height:60px;line-height:60px;margin:10px 0;
  }
  .eltable1{
    overflow: scroll;
  }
  .per-history-title{
    display: inline-block;
  }
    </style>
    