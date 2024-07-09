<template>
  <div class="all_body">
    <div style="padding: 20px" class="top1">
      <el-alert :closable="false" title="项目发布" />
    </div>
    <!--按钮部分-->
    <div class="button-container" style="margin: 5px 5px">
      <el-button type="warning">保存</el-button>
      <el-button type="success">发布</el-button>

      <el-button type="danger">返回</el-button>
    </div>
    <div style="margin: 20px"></div>
    <!--事项名称部分-->
    <div class="thing">
      <el-form :label-position="top" :model="formLabelAlign">
        <div
          class="sxmc"
          style="
            margin: 20px;
            padding: 20px;
            padding-bottom: 10px;
            background-color: rgb(215, 215, 215);
          "
        >
          <el-form-item label="事项名称">
            <el-col :span="10"></el-col
            ><el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
        </div>
      </el-form>
    </div>

    <!--基本信息部分-->
    <div
      class="base"
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

      <el-form
        :inline="true"
        :model="BasicInfo"
        class="demo-form-inline"
        label-position="right"
      >
        <el-row :gutter="20"
          ><el-col :span="12"
            ><el-form-item label="实施主体名称">
              <el-input
                v-model="BasicInfo.main"
                placeholder="主体名称"
              ></el-input> </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="申领对象">
              <el-input
                v-model="BasicInfo.number"
                placeholder="对象名称"
              ></el-input>
            </el-form-item> </el-col
        ></el-row>
        <el-row :gutter="20"
          ><el-col :span="12"
            ><el-form-item label=" 到现场次数" style="margin-left: 13px">
              <el-input
                v-model="BasicInfo.number"
                placeholder="次数"
              ></el-input> </el-form-item
          ></el-col>
          <el-col :span="12">
            <el-form-item label="扶持金额">
              <el-input
                v-model="BasicInfo.money"
                placeholder="金额数"
              ></el-input>
            </el-form-item> </el-col
        ></el-row>
      </el-form>
    </div>

    <!--受理条件部分-->
    <div
      class="condition"
      style="
        background-color: rgb(215, 215, 215);
        margin: 20px;
        padding: 20px;
        padding-bottom: 10px;
      "
    >
      <el-form :label-position="top" :model="Condition">
        <el-form-item label="受理条件">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4 }"
            placeholder="请输入内容"
            v-model="Condition.content"
          >
          </el-input>
        </el-form-item>
      </el-form>
    </div>

    <!--事项描述部分-->
    <div
      class="description"
      style="
        background-color: rgb(215, 215, 215);
        margin: 20px;
        padding: 20px;
        padding-bottom: 10px;
      "
    >
      <el-form :label-position="top" :model="Description">
        <el-form-item label="事项描述">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4 }"
            placeholder="请输入内容"
            v-model="Description.desc"
          >
          </el-input>
        </el-form-item>
      </el-form>
    </div>

    <!--申报材料要求部分-->
    <div
      class="material"
      style="
        background-color: rgb(215, 215, 215);
        margin: 20px;
        padding: 20px;
        padding-bottom: 10px;
      "
    >
      <el-row :gutter="20"
        ><el-col :span="15" style="margin: 3px"
          ><div style="padding-bottom: 2px; font-weight: bold">
            申报材料要求
          </div></el-col
        >
        <el-col :span="6" style="margin-bottom: 10px">
          <el-button type="primary">新建</el-button></el-col
        ></el-row
      >

      <el-form
        ref="Material"
        :model="Material"
        label-position="left"
        label-width="130px"
      >
        <el-form-item label="材料名称">
          <el-input v-model="Material.name"></el-input>
        </el-form-item>

        <el-form-item label="是否必须">
          <el-checkbox-group v-model="Material.necessary">
            <el-checkbox label="是" name="type"></el-checkbox>
            <el-checkbox label="否" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="是否需要签字">
          <el-checkbox-group v-model="Material.signature">
            <el-checkbox label="是" name="type"></el-checkbox>
            <el-checkbox label="否" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="是否需要盖章">
          <el-checkbox-group v-model="Material.stamp">
            <el-checkbox label="是" name="type"></el-checkbox>
            <el-checkbox label="否" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="模板">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-change="handleChange"
            :file-list="Material.applyfile"
            :on-success="handleSuccess"
            :on-preview="handlePictureCardPreview"
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="其他信息">
          <el-input v-model="Material.other"></el-input>
        </el-form-item>

        <el-form-item label="已创建的申报材料">
          <el-table :data="Material.createdMaterials">
            <el-table-column prop="序号" label="序号"></el-table-column>
            <el-table-column prop="材料名称" label="材料名称"></el-table-column>
            <el-table-column prop="上传要求" label="上传要求"></el-table-column>
            <el-table-column prop="模板" label="模板"></el-table-column>
            <el-table-column prop="其他信息" label="其他信息"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button @click="moveUpProcedure(scope.$index)" size="mini"
                  >上移</el-button
                >
                <el-button @click="moveDownProcedure(scope.$index)" size="mini"
                  >下移</el-button
                >
                <el-button
                  @click="handleDeleteProcedure(scope.$index)"
                  type="danger"
                  size="mini"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-form-item>
      </el-form>
    </div>

    <!--办理程序部分-->
    <div
      class="handle"
      style="
        background-color: rgb(215, 215, 215);
        margin: 20px;
        padding: 20px;
        padding-bottom: 10px;
      "
    >
      <el-row :gutter="20">
        <el-col :span="15" style="margin: 3px"
          ><div style="padding-bottom: 2px; font-weight: bold">
            办理程序
          </div></el-col
        >
      </el-row>

      <el-form
        ref="handleProcedure"
        :model="HandleProcedure"
        label-position="left"
        label-width="130px"
      >
        <el-form-item label="步骤名称">
          <el-input v-model="HandleProcedure.name"></el-input>
        </el-form-item>
        <el-form-item label="步骤详细信息">
          <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4 }"
            placeholder="请输入内容"
            v-model="HandleProcedure.details"
          >
          </el-input>
        </el-form-item>
        <el-form-item label="已创建的申报程序">
          <el-table :data="HandleProcedure.createdProcedures">
            <el-table-column prop="序号" label="序号"></el-table-column>

            <el-table-column prop="步骤名称" label="步骤信息"></el-table-column>

            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  @click="handleEdit(scope.$index, scope.row)"
                  size="mini"
                  >上移</el-button
                >
                <el-button
                  @click="handleEdit(scope.$index, scope.row)"
                  size="mini"
                  >下移</el-button
                >
                <el-button
                  @click="handleDelete(scope.$index, scope.row)"
                  type="danger"
                  size="mini"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-form-item>
      </el-form>
    </div>

    <!--申报时间部分-->
    <div
      class="apply_date"
      style="
        background-color: rgb(215, 215, 215);
        margin: 20px;
        padding: 20px;
        padding-bottom: 10px;
      "
    >
      <el-row :gutter="20">
        <el-col :span="15" style="margin: 3px"
          ><div style="padding-bottom: 2px; font-weight: bold">
            申报时间
          </div></el-col
        >
      </el-row>
      <el-form
        :inline="true"
        :model="ApplyDate"
        label-position="left"
        label-width="200px"
      >
        <el-form-item label="开始时间">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="ApplyDate.start_date"
            style="width: 90%"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="ApplyDate.end_date"
            style="width: 100%"
          >
          </el-date-picker>
        </el-form-item>
      </el-form>
    </div>

    <!--咨询电话部分-->
    <div
      class="telephone"
      style="
        background-color: rgb(215, 215, 215);
        margin: 20px;
        padding: 20px;
        padding-bottom: 10px;
      "
    >
      <el-row :gutter="20">
        <el-col :span="15" style="margin: 3px"
          ><div style="padding-bottom: 2px; font-weight: bold">
            咨询电话
          </div></el-col
        >
      </el-row>
      <el-form :label-position="top" :model="telephoneNumber">
        <el-form-item label="">
          <el-input
            v-model="telephoneNumber.number"
            placeholder="咨询电话"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>

    <!--附件部分-->
    <div
      class="an"
      style="
        background-color: rgb(215, 215, 215);
        margin: 20px;
        padding: 20px;
        padding-bottom: 10px;
      "
    >
      <el-row :gutter="20"
        ><el-col :span="15" style="margin: 3px"
          ><div style="padding-bottom: 2px; font-weight: bold">
            附件
          </div></el-col
        >
        <el-col :span="6" style="margin-bottom: 10px">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
            :file-list="fileList"
            :on-change="handleFileChange"
            :on-success="handleUploadSuccess"
            :on-remove="handleRemove"
            :auto-upload="false"
          >
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-col>
      </el-row>
      <el-form :model="Annex" label-position="top">
        <el-form-item label="">
          <el-table :data="Annex.FILES">
            <el-table-column prop="annex_index" label="序号"></el-table-column>

            <el-table-column
              prop="annex_name"
              label="附件名称"
            ></el-table-column>

            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  @click="handleEdit(scope.$index, scope.row)"
                  size="mini"
                  >上移</el-button
                >
                <el-button
                  @click="handleEdit(scope.$index, scope.row)"
                  size="mini"
                  >下移</el-button
                >
                <el-button
                  @click="handleDelete(scope.$index, scope.row)"
                  type="danger"
                  size="mini"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-form-item>
      </el-form>
    </div>

    <!--项目类型部分-->
    <div
      style="
        background-color: rgb(215, 215, 215);
        margin: 20px;
        padding: 20px;
        padding-bottom: 10px;
      "
    >
      <el-row :gutter="20"
        ><el-col :span="15" style="margin: 3px"
          ><div style="padding-bottom: 2px; font-weight: bold">
            项目类型
          </div></el-col
        >
      </el-row>
      <el-form :model="projectStyle" label-width="80px">
        <el-form-item label="">
          <el-checkbox-group v-model="projectStyle.type">
            <el-checkbox label="科技创新" name="type"></el-checkbox>
            <el-checkbox label="商务贸易" name="type"></el-checkbox>
            <el-checkbox label="文化" name="type"></el-checkbox>
            <el-checkbox label="节能环保" name="type"></el-checkbox>
            <el-checkbox label="社会保障" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style></style>
<script>
export default {
  method: {
    handleFileChange(file, fileList) {
      this.Annex.FILES = fileList.map((f, index) => ({
        annex_index: index + 1,
        annex_name: f.name,
      }));
    },
    handleUploadSuccess(response, file, fileList) {
      this.Annex.FILES = fileList.map((f, index) => ({
        annex_index: index + 1,
        annex_name: f.name,
      }));
    },
    handleRemove(file, fileList) {
      this.Annex.FILES = fileList.map((f, index) => ({
        annex_index: index + 1,
        annex_name: f.name,
      }));
    },
    handleMoveUp(index, row) {
      if (index === 0) return;
      this.swapFiles(index, index - 1);
    },
    handleMoveDown(index, row) {
      if (index === this.Annex.FILES.length - 1) return;
      this.swapFiles(index, index + 1);
    },
    handleDelete(index, row) {
      this.Annex.FILES.splice(index, 1);
      this.updateIndexes();
    },
    swapFiles(index1, index2) {
      const temp = this.Annex.FILES[index1];
      this.Annex.FILES[index1] = this.Annex.FILES[index2];
      this.Annex.FILES[index2] = temp;
      this.updateIndexes();
    },
    updateIndexes() {
      this.Annex.FILES.forEach((file, index) => {
        file.annex_index = index + 1;
      });
    },
    moveUpProcedure(index) {
      if (index > 0) {
        const temp = this.HandleProcedure.createdProcedures[index - 1];
        this.$set(
          this.HandleProcedure.createdProcedures,
          index - 1,
          this.HandleProcedure.createdProcedures[index]
        );
        this.$set(this.HandleProcedure.createdProcedures, index, temp);
      }
    },
    moveDownProcedure(index) {
      if (index < this.HandleProcedure.createdProcedures.length - 1) {
        const temp = this.HandleProcedure.createdProcedures[index + 1];
        this.$set(
          this.HandleProcedure.createdProcedures,
          index + 1,
          this.HandleProcedure.createdProcedures[index]
        );
        this.$set(this.HandleProcedure.createdProcedures, index, temp);
      }
    },
    handleDeleteProcedure(index) {
      this.HandleProcedure.createdProcedures.splice(index, 1);
    },
  },
  data() {
    return {
      formLabelAlign: {
        name: "",
      },
      BasicInfo: {
        main: "",
        object: "",
        number: "",
        money: "",
      },
      Condition: {
        content: "",
      },
      Description: {
        desc: "",
      },
      Material: {
        name: "",
        necessary: "",
        signature: "",
        stamp: "",
        other: "",
        applyfile: [],
        createdMaterials: [], // 用于保存已创建的材料的数组
      },
      HandleProcedure: {
        name: "",
        details: "",
        createdProcedures: [], //用于保存已创建的申报程序
      },
      ApplyDate: {
        start_date: "",
        end_date: "",
      },
      telephoneNumber: {
        telephoneNumber: "",
      },
      Annex: {
        FILES: [],
      },
      fileList: [],
      projectStyle: {
        type: [],
      },
    };
  },
};
</script>
