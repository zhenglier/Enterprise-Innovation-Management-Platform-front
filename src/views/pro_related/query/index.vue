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
    <div class="content">
      <el-row :gutter="20" class="info-row">
        <el-col :span="5">
          <div class="first">
            <div class="info-item">
              <h3>申报状态</h3>
            </div>
            <div class="info-item">
              <h3>主管部门</h3>
            </div>
            <div class="info-item">
              <h3>行业/主题</h3>
            </div>
          </div></el-col
        >
        <el-col :span="19">
          <div class="second">
            <div class="not_limit">
              <span><strong>不限</strong></span>
              <el-divider direction="vertical"></el-divider>
              <span>申报中</span>
              <el-divider direction="vertical"></el-divider>
              <span>未开始</span>
              <el-divider direction="vertical"></el-divider>
              <span>已截止</span>
            </div>
            <div class="not_limit">
              <span><strong>不限</strong></span>
              <el-divider direction="vertical"></el-divider>
              <span>广电局</span>
              <el-divider direction="vertical"></el-divider>
              <span>教育局</span>
              <el-divider direction="vertical"></el-divider>
              <span>人力资源保障局</span>
              <el-divider direction="vertical"></el-divider>
              <span>文化和旅游局</span>
            </div>
            <div class="not_limit">
              <span><strong>不限</strong></span>
              <el-divider direction="vertical"></el-divider>
              <span>科技创新</span>
              <el-divider direction="vertical"></el-divider>
              <span>商务贸易</span>
              <el-divider direction="vertical"></el-divider>
              <span>文化</span>
              <el-divider direction="vertical"></el-divider>
              <span>农业农村</span>
              <el-divider direction="vertical"></el-divider>
              <span>节能环保</span>
              <el-divider direction="vertical"></el-divider>
              <span>社会保障</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
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
.content {
  margin-bottom: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(215, 215, 215);
}
.search {
  display: flex;
  justify-content: end;
}
.s {
  margin: 2px 15px;
}
.Input {
  width: 150px;
  margin: 2px 15px;
}
</style>
