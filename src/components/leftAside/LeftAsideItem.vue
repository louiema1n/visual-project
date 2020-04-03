<template>
  <el-row>
    <el-col>
      <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <div class="card-img">
          <img src="https://www.echartsjs.com/examples/data/thumb/line-simple.jpg"
               class="image">
          <span>基本折线图</span>
        </div>
      </el-card>
      <el-card shadow="hover" :body-style="{ padding: '0px' }">
        <div class="card-img">
          <img src="https://www.echartsjs.com/examples/data/thumb/area-basic.jpg"
               class="image">
          <span>基本区域图</span>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
    export default {
        name: "LeftAsideItem",
    }
</script>

<style scoped>
  .card-img {
    text-align: left;
  }
  .card-img img {
    width: 30%;
    height: 30%;
    vertical-align: middle;
  }

  .el-card {
    margin-bottom: 10px;
  }
</style>
