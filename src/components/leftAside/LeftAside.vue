<template>
  <el-container>
    <el-header height="30px">
      <span>组件</span>
    </el-header>
    <el-main>
      <el-collapse v-model="activeNames">
        <div v-for="(item, index) in comps" :key="index">
          <el-collapse-item :title="item.title" :name="item.name">
            <el-row>
              <el-col>
                <el-card shadow="hover" :body-style="{ padding: '0px' }" v-for="(ele, c) in item.components" :key="c" @click.native="clickFn(ele)">
                  <div class="card-img">
                    <img :src="ele.icon"
                         class="image">
                    <span>{{ele.title}}</span>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </el-collapse-item>
        </div>
      </el-collapse>
    </el-main>
  </el-container>
</template>

<script>
    import comps from '../../data/comps'

    export default {
        name: "LeftAside",
        components: {
        },
        data() {
            return {
                activeNames: ['1'],
                comps: comps
            };
        },
        methods: {
            clickFn(ele) {
                this.$store.dispatch("addElementAction", ele);
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

  .el-main {
    padding: 5px;
    background-color: #fff;
  }

  .el-header {
    line-height: 30px;
  }

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
    cursor: pointer;
  }
</style>
