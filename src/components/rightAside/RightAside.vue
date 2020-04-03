<template>
    <el-container>
      <el-header height="20px">
        <span>配置</span>
      </el-header>
      <el-main>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane name="first"><span slot="label"><i class="el-icon-date"></i> 样式</span>
            <StyleConfig></StyleConfig>
          </el-tab-pane>
          <el-tab-pane name="second"><span slot="label"><i class="el-icon-date"></i> 数据</span>数据</el-tab-pane>
          <el-tab-pane name="third"><span slot="label"><i class="el-icon-date"></i> 事件</span>事件</el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
</template>

<script>
  import StyleConfig from "./StyleConfig";
    export default {
        name: "RightAside",
        components: {
            StyleConfig
        },
        data() {
            return {
                activeName: 'first'
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    }
</script>

<style scoped>
  .el-aside {
    line-height: normal;
  }
  .el-main{
    padding: 5px;
    background-color: #fff;
  }
.el-header {
  line-height: 20px;
}
</style>
