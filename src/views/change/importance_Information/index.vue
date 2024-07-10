<template>
  <div class="all_body">
    <div style="padding: 30px" class="top1">
      <el-alert :closable="false" title="重大信息变更" />
    </div>
    <div class="enterprise_change">
      <div class="Enterprise_change">
        <el-alert :closable="false" title="企业信息变更申请" />
      </div>
      <el-row :gutter="20" class="info-row">
        <el-col :span="3">
          <div class="info-item">企业变更类型</div>
        </el-col>
        <el-col :span="15">
          <div class="select">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="content">
      <div v-if="value == '选项1'">
        <el-row :gutter="20" class="info-row">
          <el-col :span="3">
            <div class="info-item">当前企业名称</div>
          </el-col>
          <el-col :span="9">
            <div class="info-item">{{ name }}</div>
          </el-col>
          <el-col :span="3">
            <div class="info-item">变更后企业名称</div>
          </el-col>
          <el-col :span="9">
            <div style="margin: 10px 10px">
              <el-input v-model="newName" margin="30px 30px"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3">
            <div class="info-item">变更证明材料</div>
          </el-col>
          <el-col :span="8">
            <div class="up">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-change="handleUploadChange"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="name_list"
                list-type="picture"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="2">
            <div class="info-item">变更时间</div>
          </el-col>
          <el-col :span="6">
            <div class="block">
              <span class="demonstration"></span>
              <el-date-picker
                v-model="date1"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <div class="button-container">
            <el-button type="primary" @click="submitData"
              >发起变更流程</el-button
            >
            <el-button type="info" plain>取消</el-button>
          </div>
        </el-row>
      </div>
      <div v-if="value == '选项2'">
        <el-row :gutter="20" class="info-row">
          <el-col :span="3">
            <div class="info-item">当前注册资本</div>
          </el-col>
          <el-col :span="9">
            <div class="info-item">{{ registered_capital }}</div>
          </el-col>
          <el-col :span="3">
            <div class="info-item">变更后的注册资本</div>
          </el-col>
          <el-col :span="9">
            <div class="money">
              <el-col :span="9">
                <div style="margin: 10px 10px">
                  <el-input
                    v-model="new_registered_capital"
                    margin="30px 30px"
                  ></el-input>
                </div>
              </el-col>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3">
            <div class="info-item">变更证明材料</div>
          </el-col>
          <el-col :span="8">
            <div class="up">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="money_list"
                list-type="picture"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="2">
            <div class="info-item">变更时间</div>
          </el-col>
          <el-col :span="6">
            <div class="block">
              <span class="demonstration"></span>
              <el-date-picker
                v-model="date2"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <div class="button-container">
            <el-button type="primary" @click="submitData"
              >发起变更流程</el-button
            >
            <el-button type="info" plain>取消</el-button>
          </div>
        </el-row>
      </div>
      <div v-if="value == '选项3'">
        <el-row :gutter="20" class="info-row">
          <el-col :span="3">
            <div class="info-item">当前状态</div>
          </el-col>
          <el-col :span="9">
            <div class="info-item">{{ currentStatus }}</div>
          </el-col>
          <el-col :span="3">
            <div class="info-item">变更后的状态</div>
          </el-col>
          <el-col :span="9">
            <div class="money">
              <el-input
                class="money"
                v-model="AfterStatus"
                placeholder="请输入变更后的状态"
                size="medium"
              ></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3">
            <div class="info-item">变更证明材料</div>
          </el-col>
          <el-col :span="8">
            <div class="up">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="status_list"
                list-type="picture"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="2">
            <div class="info-item">变更时间</div>
          </el-col>
          <el-col :span="6">
            <div class="block">
              <span class="demonstration"></span>
              <el-date-picker
                v-model="date3"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <div class="button-container">
            <el-button type="primary" @click="submitData"
              >发起变更流程</el-button
            >
            <el-button type="info" plain>取消</el-button>
          </div>
        </el-row>
      </div>
      <div v-if="value == '选项4'">
        <el-row :gutter="20" class="info-row">
          <el-col :span="3">
            <div class="info-item">企业原始主营业务</div>
          </el-col>
          <el-col :span="9">
            <div class="info-item">{{ orgBusiness }}</div>
          </el-col>
          <el-col :span="3">
            <div class="info-item">变更后的主营业务</div>
          </el-col>
          <el-col :span="9">
            <div class="money">
              <el-input
                type="textarea"
                :autosize="{ minRows: 2, maxRows: 4 }"
                placeholder="新的主营业务"
                v-model="newBusiness"
              >
              </el-input>
            </div>
          </el-col>
        </el-row>

        <el-row :gutter="20" class="info-row">
          <el-col :span="2">
            <div class="info-item">变更时间</div>
          </el-col>
          <el-col :span="6">
            <div class="block">
              <span class="demonstration"></span>
              <el-date-picker
                v-model="date4"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <div class="button-container">
            <el-button type="primary" @click="submitData"
              >发起变更流程</el-button
            >
            <el-button type="info" plain>取消</el-button>
          </div>
        </el-row>
      </div>
      <div v-if="value == '选项5'">
        <el-row :gutter="20" class="info-row">
          <el-col :span="3">
            <div class="info-item">企业原始logo</div>
          </el-col>
          <el-col :span="9">
            <img width="100%" :src="ImageUrl" alt="" />
          </el-col>
          <el-col :span="3">
            <div class="info-item">变更后的企业logo</div>
          </el-col>
          <el-col :span="9">
            <div class="up">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="After_logo_list"
                list-type="picture"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3">
            <div class="info-item">变更证明材料</div>
          </el-col>
          <el-col :span="8">
            <div class="up">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="logo_list"
                list-type="picture"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="2">
            <div class="info-item">变更时间</div>
          </el-col>
          <el-col :span="6">
            <div class="block">
              <span class="demonstration"></span>
              <el-date-picker
                v-model="date5"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <div class="button-container">
            <el-button type="primary" @click="open">发起变更流程</el-button>
            <el-button type="info" plain @click="cancle">取消</el-button>
          </div>
        </el-row>
      </div>
      <div v-if="value == '选项6'">
        <el-row :gutter="20" class="info-row">
          <el-col :span="2">
            <div class="info-item">当前地址</div>
          </el-col>
          <el-col :span="10">
            <div class="info-item">{{ currentAddress }}</div>
          </el-col>
          <el-col :span="3">
            <div class="info-item">变更后的地址</div>
          </el-col>
          <el-col :span="9">
            <div class="money">
              <el-input
                class="money"
                v-model="input"
                placeholder="请输入新的地址"
                size="medium"
              ></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="3">
            <div class="info-item">变更证明材料</div>
          </el-col>
          <el-col :span="8">
            <div class="up">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="address_list"
                list-type="picture"
              >
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过500kb
                </div>
              </el-upload>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <el-col :span="2">
            <div class="info-item">变更时间</div>
          </el-col>
          <el-col :span="6">
            <div class="block">
              <span class="demonstration"></span>
              <el-date-picker
                v-model="date6"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="info-row">
          <div class="button-container">
            <el-button type="primary" @click="submitData"
              >发起变更流程</el-button
            >
            <el-button type="info" plain @click="cancle">取消</el-button>
          </div>
        </el-row>
      </div>
    </div>
  </div>
</template>
<style>
.up {
  margin-top: 10px;
}
.money {
  margin: 7px 5px;
  padding-right: 6px;
}
.content {
  margin-bottom: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(215, 215, 215);
}
.button-container {
  text-align: center;
  margin-bottom: 10px;
}
.block {
  margin: 12px 0;
}
.select {
  margin-top: 13px;
  margin-bottom: 13px;
}
.enterprise_change {
  border-style: solid;
  border-width: 1px;
  border-color: rgb(215, 215, 215);
  margin: 2px 30px;
  margin-bottom: 0px;
}
.Enterprise_change .el-alert {
  border-radius: 0;
  background-color: rgb(241, 244, 249);
}

.content {
  margin-left: 30px;
  margin-right: 30px;
}
</style>
<script>
export default {
  methods: {
    open() {
      this.$confirm("此操作将提交变更申请, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "提交成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
          });
        });
    },
    submitData() {
      // Collect data to send to the backend
      let data = {};
      switch (this.value) {
        case "选项1":
          data = {
            date: this.date1,
            name: this.name,
            name_list: this.name_list,
          };
          break;
        case "选项2":
          data = {
            registered_capital: this.registered_capital,
            date: this.date2,
            money_list: this.money_list,
          };
          break;
        case "选项3":
          data = {
            currentStatus: this.currentStatus,
            date: this.date3,
            status_list: this.status_list,
          };
          break;
        case "选项4":
          data = {
            orgBusiness: this.orgBusiness,
            date: this.date4,
          };
          break;
        case "选项5":
          data = {
            ImageUrl: this.ImageUrl,
            date: this.date5,
            logo_list: this.logo_list,
          };
          break;
        case "选项6":
          data = {
            currentAddress: this.currentAddress,
            date: this.date6,
            address_list: this.address_list,
          };
          break;
        default:
          console.error("Invalid option selected");
          return;
      }

      // Send POST request to the backend
      axios
        .post("YOUR_BACKEND_API_URL", data)
        .then((response) => {
          console.log("Data submitted successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error submitting data:", error);
        });
    },
    //不知道这个函数是否有用（与return是否重复）
    async fetchData() {
      try {
        const response = await axios.get(`your-api-endpoint/${this.value}`);
        if (this.value === "选项1") {
          this.name = response.data.currentName;

          this.date1 = response.data.date;
        } else if (this.value === "选项2") {
          this.registered_capital = response.data.registered_capital;

          this.date2 = response.data.date2;
        } else if (this.value === "选项3") {
          this.currentStatus = response.data.currentStatus;

          this.date3 = response.data.date3;
        } else if (this.value === "选项4") {
          this.orBusiness = response.data.orBusiness;

          this.date4 = response.data.date4;
        } else if (this.value === "选项5") {
          this.ImageUrl = response.data.ImageUrl;

          this.date5 = response.data.date5;
        } else if (this.value === "选项6") {
          this.currentAddress = response.data.currentAddress;

          this.date6 = response.data.date6;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
  data() {
    return {
      //date1--date6是由用户选择的，不知道要不要写到这里
      date1: "", // 存储选择的日期
      name: "", //企业变更前名称
      name_list: [], //证明材料
      //

      registered_capital: "", //变更前的注册资本
      date2: "", // 存储选择的日期
      money_list: [], //证明材料
      //

      currentStatus: "", //变更前的状态
      date3: "", // 存储选择的日期
      status_list: [], //证明材料
      //

      orgBusiness: "", //变更前的主营业务
      date4: "", // 存储选择的日期

      //
      ImageUrl: "", //变更前的logo的url
      date5: "", // 存储选择的日期
      logo_list: [], //证明材料
      //
      currentAddress: "", //当前地址
      date6: "", // 存储选择的日期
      address_list: [], //证明材料
      options: [
        {
          value: "选项1",
          label: "企业名称变更",
        },
        {
          value: "选项2",
          label: "企业注册资本",
        },
        {
          value: "选项3",
          label: "企业孵化状态变更",
        },
        {
          value: "选项4",
          label: "企业主页业务变更",
        },
        {
          value: "选项5",
          label: "企业logo变更",
        },
        {
          value: "选项6",
          label: "企业注册地址",
        },
      ],
      value: "",
    };
  },
};
</script>
