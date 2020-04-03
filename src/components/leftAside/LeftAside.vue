<template>
    <el-container>
      <el-header height="20px">
        <span>组件</span>
      </el-header>
      <el-main>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="折线图" name="1">
            <LeftAsideItem></LeftAsideItem>
          </el-collapse-item>
          <el-collapse-item title="饼状图" name="2">
            <LeftAsideItem></LeftAsideItem>
          </el-collapse-item>
        </el-collapse>
      </el-main>
    </el-container>
</template>

<script>
    import LeftAsideItem from '@/components/leftAside/LeftAsideItem'
    export default {
        name: "LeftAside",
        components: {
            LeftAsideItem
        },
        data() {
            return {
                activeNames: ['1']
            };
        },
        methods: {
            handleChange(val) {
                console.log(val);
            }
        }
    }
</script>

<style scoped>
  .el-collapse-item__content {
    margin-bottom: 0;
  }
  .el-collapse-item__header {
    background: transparent;
  }
  .el-main{
    padding: 5px;
    background-color: #fff;
  }
.el-header {
  line-height: 20px;
}
</style>
