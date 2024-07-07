<template>
  <div class="all_body">
    <div style="padding: 20px" class="top1">
      <el-alert :closable="false" title="项目审核" />
    </div>
    <div class="search">
      <div class="Input">
        <el-input v-model="input" placeholder="查询项目名称"></el-input>
      </div>
      <div class="Input">
        <el-input v-model="input" placeholder="查询发起方名称"></el-input>
      </div>
      <div class="s"><el-button icon="el-icon-search" circle></el-button></div>
    </div>
    <div class="se_body">
      <el-table ref="filterTable" :data="tableData" style="width: 100%">
      <el-table-column prop="number" label="请求号" min-width="10%">
      </el-table-column>
      <el-table-column prop="name" label="项目名称"min-width="30%">
      </el-table-column>
      <el-table-column prop="initiator" label="发起方"min-width="20%"> </el-table-column>
     

      <el-table-column
        prop="result"
        label="状态"
        min-width="20%"
        :filters="[
          { text: '待审核', value: '待审核' },
          { text: '同意', value: '同意' },
          { text: '拒绝', value: '拒绝' },
          { text: '退回', value: '退回' },
        ]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag :type="getTagType(scope.row.result)" disable-transitions>{{
            scope.row.result
          }}</el-tag>
        </template>
      </el-table-column>
    </el-table-column>
        <el-table-column fixed="right" label="操作" min-width="20%">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"
              >审核</el-button
            >
            
            <el-button type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
    </el-table>
   </div>
   <div class="block">
      <span class="demonstration"></span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[10, 20]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
  </div>
</template>
<style>
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
.se_body{
  margin-left:30px ;
  margin-right: 30px;
  margin-top:20px;
  margin-bottom: 10px;
}
.block{
  text-align: center;
  
  padding-bottom: 20px;
}
</style>
<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    filterTag(value, row) {
      return row.result === value;
    },
    handleClick(row) {
     
     console.log(row);
   },
    getTagType(result) {
      const resultTagMap = {
        待审核: "info",
        同意: "success",
        拒绝: "danger",
        退回: "warning",
        
        // 可以继续添加更多的状态及其对应的标签类型
      };
      return resultTagMap[result];
    },
  },
  data() {
    return {
      currentPage4: 1,
      tableData: [
        {
          number:"100001",
        name: "2024年北京广播电视网络视听发展基金优秀网络微短剧项目",
        initiator: "某文化企业",
          
          result:"同意",
        },
        {
          number:"100002",

          name: "2024年北京广播电视网络视听发展基金优秀网络微短剧项目",
          initiator: "某文化企业",
          result:"退回",
        },
        {
          number:"100003",

          name: "2024年北京广播电视网络视听发展基金优秀网络微短剧项目",
          initiator: "某文化企业",
result:"拒绝",
        },
        {
          number:"100003",
          name: "2024年北京广播电视网络视听发展基金优秀网络微短剧项目",
          initiator: "某文化企业",
          result:"同意",
        },
        {
          number:"100004",
          name: "2024年北京广播电视网络视听发展基金优秀网络微短剧项目",
          initiator: "某文化企业",
          result:"同意",
        },
        {
          number:"100005",

          name: "2024年北京广播电视网络视听发展基金优秀网络微短剧项目",
          initiator: "某文化企业",
          result:"待审核",
        },
        {
          number:"100006",

          name: "2024年北京广播电视网络视听发展基金优秀网络微短剧项目",
          initiator: "某文化企业",
          result:"待审核",
        },
        {
          number:"100007",

          name: "2024年北京广播电视网络视听发展基金优秀网络微短剧项目",
          initiator: "某文化企业",
          result:"退回",
        },
        {
          number:"100008",
          name: "2024年北京广播电视网络视听发展基金优秀网络微短剧项目",
          initiator: "某文化企业",
          result:"拒绝",
        },
        {
          number:"100009",

          name: "2024年北京广播电视网络视听发展基金优秀网络微短剧项目",
          initiator: "某文化企业",
          result:"同意",
        },
        {
          number:"1000010",
          name: "2024年北京广播电视网络视听发展基金优秀网络微短剧项目",
          initiator: "某文化企业",
          result:"同意",
        }
      ]
    };
  },
};
</script>
