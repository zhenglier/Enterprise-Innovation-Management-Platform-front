<template>
  <div>
    <div style="padding: 20px" class="top1">
      <el-alert :closable="false" title="项目进度查询" />
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
    <div class="table">
      <el-table :data="tableData" height="500" border style="width: 100%">
        <el-table-column prop="request" label="请求号" width="180">
        </el-table-column>
        <el-table-column prop="name" label="项目名称" width="920">
        </el-table-column>
        <el-table-column
      prop="status"
      label="状态"
      width="125"
      :filters="[{ text: '待申请', value: '待申请' }, { text: '已通过', value: '已通过' },{text:'已拒绝',value:'已拒绝'},{text:'已退回',value:'已退回'}]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template slot-scope="scope">
        <el-tag
          :type="getTagType(scope.row.status)"
          disable-transitions>{{scope.row.status}}</el-tag>
      </template>
    </el-table-column>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >查看</el-button
            >
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<style>
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
<script>
export default {
  data() {
    return {
      tableData: [
        {
          request: "2016-05-02",
          name: "2024年北京广播电视网络视听发展基金优秀网络微短剧项目",
          status: '待申请'
        },
        {
          request: "2016-05-04",
          name: "2024年北京广播电视网络视听发展基金优秀网络微短剧项目",
          status: '已拒绝'
        },
        {
          request: "2016-05-01",
          name: "2024年北京广播电视网络视听发展基金优秀网络微短剧项目",
          status: '已退回'
        },
        {
          request: "2016-05-02",
          name: "2024年北京广播电视网络视听发展基金优秀网络微短剧项目",
          status: '已通过'
        },
        {
          request: "2016-05-02",
          name: "2024年北京广播电视网络视听发展基金优秀网络微短剧项目",
          status: '已通过'
        },
        {
          request: "2016-05-02",
          name: "2024年北京广播电视网络视听发展基金优秀网络微短剧项目",
          status: '已通过'
        },
        {
          request: "2016-05-02",
          name: "2024年北京广播电视网络视听发展基金优秀网络微短剧项目",
          status: '已拒绝'
        },
        {
          request: "2016-05-02",
          name: "2024年北京广播电视网络视听发展基金优秀网络微短剧项目",
          status: '已通过'
        },
        {
          request: "2016-05-02",
          name: "2024年北京广播电视网络视听发展基金优秀网络微短剧项目",
          status: '已通过'
        },
        {
          request: "2016-05-02",
          name: "2024年北京广播电视网络视听发展基金优秀网络微短剧项目",
          status: '待申请'
        },
        {
          request: "2016-05-03",
          name: "2024年北京广播电视网络视听发展基金优秀网络微短剧项目",
          status: '已通过'
        }
      ]
    }
  },
  methods: {
    
    handleClick(row) {
      this.$router.push({ path: '/pro_related/progress_query/query_query/index'});
      console.log(row);
    },
    filterTag(value, row) 
    {
        return row.status === value;
    },
    getTagType(status) {
      const statusTagMap = {
        '待申请':'info',
        '已通过':'success',
        '已拒绝':'danger',
        '已退回':'warning',
        '处理中':'primary',
        // 可以继续添加更多的状态及其对应的标签类型
      };
      return statusTagMap[status] ;
    }
  }

 
};
</script>
