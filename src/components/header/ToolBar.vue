<template>
  <el-row class="header-toolbar">
    <el-col :span="6" style="text-align: left">
      <el-avatar class="logo" :size="50" :src="logoSrc" alt="可视化编辑"></el-avatar>
      <span> 可视化编辑</span>
    </el-col>
    <el-col :span="12">
      <i class="el-icon-edit" title="编辑"></i>
      <i class="el-icon-share" title="分享"></i>
      <i class="el-icon-delete" title="删除"></i>
    </el-col>
    <el-col :span="6" style="text-align: right">
      <i class="el-icon-edit" title="编辑"></i>
      <i class="el-icon-share" title="分享"></i>
      <i class="el-icon-delete" title="删除"></i>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "ToolBar",
        data() {
            return {
                logoSrc: require('@/assets/logo.png'),
            }
        }
    }
</script>

<style scoped>
  .logo {
    vertical-align: middle;
  }
  .header-toolbar i {
    cursor: pointer;
    font-size: 20px;
    padding: 6px;
  }
  .header-toolbar i:hover {
    border-top: 2px solid #00baff;
    color: #00baff;
  }
</style>
