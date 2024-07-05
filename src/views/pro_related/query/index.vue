<template>
  <div class="all_body">
    <div style="padding: 30px" class="top1">
      <el-alert :closable="false" title="项目查询" />
    </div>
    <div class="search">
      <div class="Input">
        <el-input v-model="input" placeholder="查询项目名称"></el-input>
      </div>
      <div class="s"><el-button icon="el-icon-search" circle></el-button></div>
    </div>
    <el-container>
      <el-aside width="200px">
        <el-row><div class="status">申报状态</div></el-row>
        <el-row><div class="status">主管部门</div></el-row>
        <el-row><div class="status">行业/主题</div></el-row>
      </el-aside>
      <el-main>
        <el-row
          ><div class="status">
            <el-col :span="3"><div class="fs1">不限</div></el-col>
            <el-col :span="3"><div class="fs">待申请</div></el-col>
            <el-col :span="3"><div class="fs">已通过</div></el-col>
            <el-col :span="3"><div class="fs">已拒绝</div></el-col>
            <el-col :span="3"><div class="fs">已退回</div></el-col>
          </div></el-row
        >
        <el-row
          ><div class="status">
            <el-col :span="3"><div class="fs1">不限</div></el-col>
            <el-col :span="3"><div class="fs">广电局</div></el-col>
            <el-col :span="3"><div class="fs">教育局</div></el-col>
            <el-col :span="3"><div class="fs">人力资源保障局</div></el-col>
            <el-col :span="3"><div class="fs">文化和旅游局</div></el-col>
          </div></el-row
        ><el-row
          ><div class="status">
            <el-col :span="3"><div class="fs1">不限</div></el-col>
            <el-col :span="3"><div class="fs">科技创新</div></el-col>
            <el-col :span="3"><div class="fs">商务贸易</div></el-col>
            <el-col :span="3"><div class="fs">文化</div></el-col>
            <el-col :span="3"><div class="fs">农村农业</div></el-col>
            <el-col :span="3"><div class="fs">节能环保</div></el-col>
            <el-col :span="3"><div class="fs">社会保障</div></el-col>
          </div></el-row
        ></el-main
      >
    </el-container>
    <div class="second_body">
      <el-row :gutter="60" class="info-row">
        <el-col :span="5">
          <div class="third">
            2024年北京广播电视网络视听发展基金优秀网络短剧项目
            <div class="zuoxia">剩余4天</div>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="third">
            2024年北京广播电视网络视听发展基金优秀网络短剧项目
            <div class="zuoxia">剩余4天</div>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="third">
            2024年北京广播电视网络视听发展基金优秀网络短剧项目
            <div class="zuoxia">剩余4天</div>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="third">
            2024年北京广播电视网络视听发展基金优秀网络短剧项目
            <div class="zuoxia">剩余4天</div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="60" class="info-row">
        <el-col :span="5">
          <div class="third">
            2024年北京广播电视网络视听发展基金优秀网络短剧项目
            <div class="zuoxia">剩余4天</div>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="third">
            2024年北京广播电视网络视听发展基金优秀网络短剧项目
            <div class="zuoxia">剩余4天</div>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="third">
            2024年北京广播电视网络视听发展基金优秀网络短剧项目
            <div class="zuoxia">剩余4天</div>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="third">
            2024年北京广播电视网络视听发展基金优秀网络短剧项目
            <div class="zuoxia">剩余4天</div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="60" class="info-row">
        <el-col :span="5">
          <div class="third">
            2024年北京广播电视网络视听发展基金优秀网络短剧项目
            <div class="zuoxia">剩余4天</div>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="third">
            2024年北京广播电视网络视听发展基金优秀网络短剧项目
            <div class="zuoxia">剩余4天</div>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="third">
            2024年北京广播电视网络视听发展基金优秀网络短剧项目
            <div class="zuoxia">剩余4天</div>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="third">
            2024年北京广播电视网络视听发展基金优秀网络短剧项目
            <div class="zuoxia">剩余4天</div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="60" class="info-row">
        <el-col :span="5">
          <div class="third">
            2024年北京广播电视网络视听发展基金优秀网络短剧项目
            <div class="zuoxia">剩余4天</div>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="third">
            2024年北京广播电视网络视听发展基金优秀网络短剧项目
            <div class="zuoxia">剩余4天</div>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="third">
            2024年北京广播电视网络视听发展基金优秀网络短剧项目
            <div class="zuoxia">剩余4天</div>
          </div>
        </el-col>
        <el-col :span="5">
          <div class="third">
            2024年北京广播电视网络视听发展基金优秀网络短剧项目
            <div class="zuoxia">剩余4天</div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style>
.zuoxia {
  margin: 2px 2px;
  color: red;
  font-weight: bold;
}
.second_body {
  margin: 10px 20px;
}
.third {
  margin: 20px 10px;
  border-style: solid;
  font-weight: bold;
  border-width: 1px;
  border-color: rgb(215, 215, 215);
  padding: 10px 10px;
  background-color: rgb(237, 228, 231);
}
.not_limit {
  margin: 22px 20px;
}
.info-item {
  padding-left: 10px;
}
.first {
  border-style: solid;
  border-width: 1px;
  border-color: rgb(215, 215, 215);
}
.table {
  margin: 30px 30px;
}
.fs1 {
  font-weight: bold;
}
.fs {
  font-weight: bold;
  color: #b3c0d1;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 80px;
  font-size: larger;
  font-weight: bold;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  padding: 0 0;
  line-height: 80px;
}

body > .el-container {
  margin-bottom: 40px;
}
.search {
  display: flex;
  justify-content: end;
  margin-bottom: 5px;
}
.s {
  margin: 2px 15px;
}
.Input {
  width: 150px;
  margin: 2px 15px;
}
</style>
