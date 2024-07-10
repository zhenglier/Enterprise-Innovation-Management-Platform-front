<template>
  <div class="all_body">
    <el-form :inline="true" :model="project" class="demo-form-inline">
      <el-form-item label="">
        <div style="font-weight: bold; font-size: larger">
          {{ project_name }}
        </div>
      </el-form-item>
    </el-form>
    <div class="button-container" style="text-align: right">
      <el-row
        ><el-button type="success" @click="apply">申请</el-button>

        <el-button type="danger" @click="back">返回</el-button></el-row
      >
    </div>

    <!--基本信息部分-->
    <div
      class="information"
      style="
        background-color: rgb(215, 215, 215);
        margin: 20px;
        padding: 20px;
        padding-bottom: 10px;
      "
    >
      <el-col style="margin: 3px"
        ><div><strong>基本信息</strong></div></el-col
      >
      <el-table :data="baseInfo" style="width: 100%">
        <el-table-column prop="major_name" label="实施主体名称" min-width="25%">
        </el-table-column>
        <el-table-column prop="applier" label="申请对象" min-width="25%">
        </el-table-column>
        <el-table-column prop="number" label="到现场次数" min-width="25%">
        </el-table-column>
        <el-table-column prop="money" label="扶持金额" min-width="25%">
        </el-table-column>
      </el-table>
    </div>

    <!--受理条件部分-->
    <div
      class="condition"
      style="
        background-color: rgb(215, 215, 215);
        margin: 20px;
        padding: 1px;
        padding-bottom: 10px;
      "
    >
      <div style="font-weight: bold; font-size: larger; padding: 20px 20px">
        受理条件
      </div>

      <div class="condition_content">{{ Condition }}</div>
    </div>

    <!--事项描述部分-->
    <div
      class="des"
      style="
        background-color: rgb(215, 215, 215);
        margin: 20px;
        padding: 1px;
        padding-bottom: 10px;
      "
    >
      <div style="font-weight: bold; font-size: larger; padding: 20px 20px">
        事项描述
      </div>

      <div class="condition_content">{{ descriptions }}</div>
    </div>

    <!--申报材料要求部分-->
    <div
      class="condition"
      style="
        background-color: rgb(215, 215, 215);
        margin: 20px;
        padding: 1px;
        padding-bottom: 10px;
      "
    >
      <div style="font-weight: bold; font-size: larger; padding: 20px 20px">
        申报材料要求
      </div>
      <div style="margin: 20px 20px">
        <el-table :data="applyFile" style="width: 100%">
          <el-table-column prop="apply_number" label="序号" min-width="25%">
          </el-table-column>
          <el-table-column prop="apply_name" label="申请对象" min-width="25%">
          </el-table-column>
          <el-table-column prop="apply_re" label="上传要求" min-width="25%">
          </el-table-column>
          <el-table-column prop="apply_module" label="模板" min-width="25%">
          </el-table-column>
          <el-table-column prop="apply_other" label="其他信息" min-width="25%">
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!--办理程序部分-->
    <div
      class="procedure"
      style="
        background-color: rgb(215, 215, 215);
        margin: 20px;
        padding: 1px;
        padding-bottom: 10px;
      "
    >
      <div style="font-weight: bold; font-size: larger; padding: 20px 20px">
        办理程序
      </div>
      <div style="margin: 20px 20px">
        <el-table :data="procedureFile" style="width: 100%">
          <el-table-column prop="procedure_number" label="序号" min-width="20%">
          </el-table-column>
          <el-table-column
            prop="procedure_name"
            label="步骤名称"
            min-width="20%"
          >
          </el-table-column>
          <el-table-column
            prop="procedure_buzhou"
            label="步骤信息"
            min-width="60%"
          >
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!--申报时间部分-->

    <div
      class="apply_date"
      style="
        background-color: rgb(215, 215, 215);
        margin: 20px;
        padding: 1px;
        padding-bottom: 10px;
      "
    >
      <div style="font-weight: bold; font-size: larger; padding: 20px 20px">
        申报时间
      </div>
      <div style="margin: 20px 20px">
        <el-table :data="apply_time" style="width: 100%">
          <el-table-column prop="begin" label="开始时间" min-width="50%">
          </el-table-column>
          <el-table-column prop="end" label="结束时间" min-width="50%">
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!--咨询电话部分-->
    <div
      class="telephone"
      style="
        background-color: rgb(215, 215, 215);
        margin: 20px;
        padding: 1px;
        padding-bottom: 10px;
      "
    >
      <div style="font-weight: bold; font-size: larger; padding: 20px 20px">
        咨询电话
      </div>

      <div class="telephone_content">{{ telephoneNumber }}</div>
    </div>

    <!--附件部分-->
    <!--咨询电话部分-->
    <div
      class="Annex"
      style="
        background-color: rgb(215, 215, 215);
        margin: 20px;
        padding: 1px;
        padding-bottom: 10px;
      "
    >
      <div style="font-weight: bold; font-size: larger; padding: 20px 20px">
        附件
      </div>
      <div style="margin: 20px 20px">
        <el-table :data="annex" style="width: 100%" max-height="250">
          <el-table-column
            fixed
            prop="annex_number"
            label="序号"
            min-width="40%"
          >
          </el-table-column>
          <el-table-column prop="annex_name" label="附件名称" min-width="30%">
          </el-table-column>

          <el-table-column fixed="right" label="操作" min-width="30%">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="downloadAnnex(scope)">
                下载
              </el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      project: {
        project_name: "", //项目名称
      },
      telephoneNumber: "",
      baseInfo: [], //基本信息
      descriptions: "", //事项描述
      Condition: "", //受理条件
      applyFile: [], //申报材料
      procedureFile: [], //办理程序
      apply_time: [], //申请时间
      annex: [], //附件
    };
  },
  created() {
    const id = this.$route.params.id;
    this.fetchEnterpriseDetails(id);
  },
  methods: {
    fetchEnterpriseDetails(id) {
      // 替换为你的后端接口

      const mockData = {
        project: {
          project_name: "", //项目名称
        },
        telephoneNumber: "",
        baseInfo: [], //基本信息
        descriptions: "", //事项描述
        Condition: "", //受理条件
        applyFile: [], //申报材料
        procedureFile: [], //办理程序
        apply_time: [], //申请时间
        annex: [], //附件
      };
    },
    apply() {
      this.submitApplication(); // Call the function to submit the application
      this.$message({
        message: "申请成功",
        type: "success",
      });
    },
    submitApplication() {
      // Prepare the data to be sent to the backend
      const applicationData = {
        project_name: this.project.project_name,
        telephoneNumber: this.telephoneNumber,
        baseInfo: this.baseInfo,
        descriptions: this.descriptions,
        Condition: this.Condition,
        applyFile: this.applyFile,
        procedureFile: this.procedureFile,
        apply_time: this.apply_time,
        annex: this.annex,
      };

      // Send the data to the backend using an HTTP POST request
      this.$http
        .post("your-backend-api-url", applicationData)
        .then((response) => {
          console.log("Application submitted successfully:", response);
        })
        .catch((error) => {
          console.error("Error submitting application:", error);
        });
    },
    downloadAnnex(scope) {
      // Function to download files from the annex
      const link = document.createElement("a");
      link.href = scope.row.url;
      link.download = scope.row.annex_name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>
