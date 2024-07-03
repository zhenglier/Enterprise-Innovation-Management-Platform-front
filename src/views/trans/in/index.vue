<template>
  <!-- 这里的index默认是第一个步骤 -->
  <div class="describe-container">
    <el-alert :closable="false" title="入驻申请" />
    <el-steps
      :space="200"
      :active="active"
      finish-status="success"
      class="progress"
    >
      <el-step title="填报说明"></el-step>
      <el-step title="基本信息"></el-step>
      <el-step title="社会信息"></el-step>
      <el-step title="员工与租房信息"></el-step>
    </el-steps>

    <!-- 这里是这个页面特有的内容，其他组件都是全局组件 -->
    <div class="page-content">
      <el-alert :closable="false" title="填报说明" style="margin-top: 30px" />
      <!-- 填报说明的分段确定 -->
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="申报范围" name="1">
          <div>
            与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
          </div>
          <div>
            在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
          </div>
        </el-collapse-item>
        <el-collapse-item title="申请条件及材料" name="2">
          <div>
            控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
          </div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="认定程序" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>
            清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
          </div>
          <div>
            帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
          </div>
        </el-collapse-item>
        <el-collapse-item title="其他要求" name="4">
          <div>
            用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
          </div>
          <div>
            结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>

    <el-button style="margin-top: 12px" @click="next">下一步</el-button>
    <el-button style="margin-top: 12px" @click="commit">提交</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      activeNames: ["1"],
    };
  },

  methods: {
    next() {
      if (this.active++ > 3) this.active = 0;
    },
    //这个函数貌似没什么用
    handleChange(val) {
      console.log(val);
    },
    commit() {},
  },
};
</script>

<style lang="scss">
.page-content {
  .content-area {
    margin-top: 10px;
  }
}
</style>
