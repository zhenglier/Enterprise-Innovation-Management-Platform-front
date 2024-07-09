<template>
  <div class="all_body">
    <div class="Taps">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="企业查询" name="first">
          <div class="Input">
            <el-form :inline="true" :model="firstline" class="demo-form-inline">
              <el-form-item label="所属园区">
                <el-input
                  min-width="50%"
                  v-model="firstline.carrier"
                  placeholder="请输入所属园区"
                ></el-input>
              </el-form-item>
              <el-form-item label="产业类型">
                <el-select v-model="firstline.kind" placeholder="所有类型">
                  <el-option label="生物医药" value="first"></el-option>
                  <el-option
                    label="航空，航天设备及设备制造"
                    value="second"
                  ></el-option>
                  <el-option
                    label="电子及通信设备制造"
                    value="third"
                  ></el-option>
                  <el-option
                    label="计算机及办公设备制造"
                    value="fourth"
                  ></el-option>
                  <el-option label="信息化学品制造" value="fifth"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="孵化状态">
                <el-select v-model="firstline.status" placeholder="未选择">
                  <el-option label="在孵" value="on"></el-option>
                  <el-option label="毕业" value="end"></el-option>
                  <el-option label="搬离" value="leave"></el-option>
                  <el-option label="其他" value="other"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <el-form :inline="true" :model="secondline" class="Second_Input">
              <el-form-item label="企业名称">
                <el-input
                  v-model="secondline.carrier"
                  placeholder="请输入企业名称"
                ></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" plain>重置</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div style="padding: 10px" class="top1">
            <el-alert :closable="false" title="企业列表" />
          </div>
          <div class="se_body">
            <el-table :data="filteredEnterpriseData" style="width: 100%">
              <el-table-column prop="number" label="序号" min-width="9%">
              </el-table-column>
              <el-table-column
                prop="credit"
                label="社会信用代码"
                min-width="11%"
              >
              </el-table-column>
              <el-table-column prop="name" label="企业名称" min-width="10%">
              </el-table-column>

              <el-table-column
                prop="kind"
                label="高新技术产业分类"
                min-width="20%"
              >
              </el-table-column>
              <el-table-column prop="date" label="成立时间" min-width="10%">
              </el-table-column>
              <el-table-column prop="in_date" label="入孵时间" min-width="10%">
              </el-table-column>
              <el-table-column prop="status" label="孵化状态" min-width="10%">
              </el-table-column>
              <el-table-column prop="carrier" label="所属载体" min-width="10%">
              </el-table-column>

              <el-table-column fixed="right" label="操作" min-width="10%">
                <template slot-scope="scope">
                  <el-button
                    @click="HandleClick(scope.row)"
                    type="text"
                    size="small"
                    >详情</el-button
                  >
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
              :total="filteredEnterpriseData.length"
            >
            </el-pagination>
          </div>
        </el-tab-pane>
        <el-tab-pane label="载体查询" name="second">
          <div class="Input">
            <el-form
              :inline="true"
              :model="carrier_firstline"
              class="demo-form-inline"
            >
              <el-form-item label="载体名称">
                <el-input
                  min-width="50%"
                  v-model="carrier_firstline.Name"
                  placeholder="请输入载体名称"
                ></el-input>
              </el-form-item>
              <el-form-item label="性质">
                <el-select v-model="carrier_firstline.essence" placeholder="">
                  <el-option label="民营" value="first"></el-option>
                  <el-option label="国营" value="second"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="级别">
                <el-select
                  v-model="carrier_firstline.level"
                  placeholder="未选择"
                >
                  <el-option label="国家级" value="country"></el-option>
                  <el-option label="省级" value="city"></el-option>
                  <el-option label="市级" value="province"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <el-form
              :inline="true"
              :model="carrier_secondline"
              class="Second_Input"
            >
              <el-form-item label=" 类型">
                <el-select
                  v-model="carrier_secondline.styles"
                  placeholder="未选择"
                >
                  <el-option label="专业" value="major"></el-option>
                  <el-option label="一般" value="normal"></el-option>
                </el-select>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" plain>重置</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div style="padding: 10px" class="top1">
            <el-alert :closable="false" title="载体列表" />
          </div>
          <div class="se_body">
            <el-table :data="filteredCarrierData" style="width: 100%">
              <el-table-column prop="number" label="序号" min-width="9%">
              </el-table-column>
              <el-table-column
                prop="credit"
                label="社会信用代码"
                min-width="11%"
              >
              </el-table-column>
              <el-table-column prop="name" label="载体名称" min-width="20%">
              </el-table-column>

              <el-table-column prop="kind" label="性质" min-width="20%">
              </el-table-column>
              <el-table-column prop="date" label="级别" min-width="10%">
              </el-table-column>
              <el-table-column prop="in_date" label="认定时间" min-width="10%">
              </el-table-column>

              <el-table-column fixed="right" label="操作" min-width="10%">
                <template slot-scope="scope">
                  <el-button
                    @click="HandleClick(scope.row)"
                    type="text"
                    size="small"
                    >详情</el-button
                  >
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
              :total="filteredCarrierData.length"
            >
            </el-pagination>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style>
.block {
  text-align: center;

  padding-bottom: 20px;
}
.Taps {
  margin: 20px 20px;
}
.Input {
  border: solid;
  border-width: 2px;
  border-color: rgb(243, 243, 243);
  margin: 10px 10px;
}
.demo-form-inline {
  padding-top: 30px;
  padding-bottom: 10px;
  padding-left: 20px;
  padding-right: 20px;
}
.se_body {
  padding: 10px;
}
.Second_Input {
  padding: 10px 20px;
}
</style>
<script>
export default {
  data() {
    return {
      activeName: "first",
      firstline: {
        carrier: "",
        kind: "",
        status: "",
      },
      secondline: {
        carrier: "",
      },
      carrier_firstline: {
        Name: "",
        essence: "",
        level: "",
      },
      carrier_secondline: {
        styles: "",
      },
      enterpriseData: [], // 存储企业数据
      carrierData: [], // 存储载体数据
      filteredEnterpriseData: [], // 存储过滤后的企业数据
      filteredCarrierData: [], // 存储过滤后的载体数据
      currentPage: 1,
      pageSize: 10,
    };
  },
  created() {
    // Fetch initial data from backend upon component creation
    this.fetchEnterpriseData();
    this.fetchCarrierData();
  },
  methods: {
    fetchEnterpriseData() {
      // Example of fetching data from backend (replace with your actual API call)
      axios
        .get("/api/enterprises")
        .then((response) => {
          this.enterpriseData = response.data; // Assuming response.data is an array of enterprise objects
          this.filteredEnterpriseData = this.enterpriseData;
        })
        .catch((error) => {
          console.error("Error fetching enterprise data:", error);
        });
    },
    fetchCarrierData() {
      // Example of fetching data from backend (replace with your actual API call)
      axios
        .get("/api/carriers")
        .then((response) => {
          this.carrierData = response.data; // Assuming response.data is an array of carrier objects
          this.filteredCarrierData = this.carrierData;
        })
        .catch((error) => {
          console.error("Error fetching carrier data:", error);
        });
    },
    onEnterpriseSubmit() {
      // Implement your filter logic based on firstline and secondline and update filteredEnterpriseData accordingly
      this.filteredEnterpriseData = this.enterpriseData.filter((item) => {
        return (
          (!this.firstline.carrier ||
            item.carrier.includes(this.firstline.carrier)) &&
          (!this.firstline.kind || item.kind === this.firstline.kind) &&
          (!this.firstline.status || item.status === this.firstline.status) &&
          (!this.secondline.carrier ||
            item.carrier.includes(this.secondline.carrier))
        );
      });
    },
    onEnterpriseReset() {
      this.firstline = {
        carrier: "",
        kind: "",
        status: "",
      };
      this.secondline = {
        carrier: "",
      };
      this.filteredEnterpriseData = this.enterpriseData;
      this.currentPage = 1;
    },
    onCarrierSubmit() {
      // Implement your filter logic based on carrier_firstline and carrier_secondline and update filteredCarrierData accordingly
      this.filteredCarrierData = this.carrierData.filter((item) => {
        return (
          (!this.carrier_firstline.Name ||
            item.Name.includes(this.carrier_firstline.Name)) &&
          (!this.carrier_firstline.essence ||
            item.essence === this.carrier_firstline.essence) &&
          (!this.carrier_firstline.level ||
            item.level === this.carrier_firstline.level) &&
          (!this.carrier_secondline.styles ||
            item.styles === this.carrier_secondline.styles)
        );
      });
    },
    onCarrierReset() {
      this.carrier_firstline = {
        Name: "",
        essence: "",
        level: "",
      };
      this.carrier_secondline = {
        styles: "",
      };
      this.filteredCarrierData = this.carrierData;
      this.currentPage = 1;
    },
    handleClick(row) {
      console.log(row);
    },
    handleTabClick(tab, event) {
      console.log(tab, event);
    },
    handleSizeChange(size) {
      this.pageSize = size;
    },
    handleCurrentChange(page) {
      this.currentPage = page;
    },
  },
};
</script>
