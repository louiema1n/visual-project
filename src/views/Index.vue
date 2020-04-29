<template>
  <el-container>
    <el-header @mousedown.native.stop height="50px">
      <ToolBar></ToolBar>
    </el-header>
    <el-container>
      <el-aside width="200px" @mousedown.native.stop>
        <!-- 左边操作栏 -->
        <LeftAside></LeftAside>
      </el-aside>
      <el-container>
        <el-main>
          <div :style="shotFun">
            <div class="dashboard" :style="scaleFun">
              <VueDragResize
                :w="comp.style.width"
                :h="comp.style.height"
                :isActive="comp.id === activeElementId"
                v-on:resizing="changeSize($event, index)"
                @resizestop="resizeStopHandle($event, index)"
                v-on:dragging="changeSize($event, index)"
                v-on:activated="activeFn(comp.id)"
                v-on:deactivated="deActiveFn(comp.id)"
                :parentLimitation="true"
                :parentScaleX="scale"
                :parentScaleY="scale"
                v-for="(comp, index) in compList" :key="comp.id">
                <v-chart :ref="index" :options="comp.options" :autoresize="true" />
              </VueDragResize>
            </div>
          </div>
        </el-main>
      </el-container>
      <el-aside width="300px" @mousedown.native.stop>
        <!-- 右边操作栏 -->
        <RightAside :data="activeElementData"></RightAside>
      </el-aside>
    </el-container>
    <el-footer height="38px" @mousedown.native.stop>
      <el-slider
        v-model="scale"
        :step="0.01"
        :max="1"
        :min="0.1"
        input-size="mini"
        show-input>
      </el-slider>
    </el-footer>
  </el-container>
</template>

<script>
    import VueDragResize from 'vue-drag-resize';
    import BasicLine from '@/plugins/line/BasicLine'
    import LeftAside from '@/components/leftAside/LeftAside'
    import RightAside from '@/components/rightAside/RightAside'
    import ToolBar from '@/components/header/ToolBar'
    import {mapState} from 'vuex'

    export default {
        name: "Test",
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                scale: 0.6,
                top: 0,
                left: 0,
                childCsss: {}
            }
        },
        components: {
            VueDragResize,
            BasicLine,
            LeftAside,
            RightAside,
            ToolBar,
        },
        created() {
            this.childCsss = {
                width: this.width,
                height: this.height,
            }
        },
        mounted() {

        },
        computed: {
            ...mapState({
                activeElementData: state => state.boardData.activeElementData,
                activeElementId: state => state.boardData.activeElementId,
                boardConfigs: state => state.boardData.boardConfigs,
            }),
            compList() {
                return this.$store.state.boardData.compList
            },
            scaleFun: function () {
                let scale = this.scale, boardConfigs = this.boardConfigs;
                return `-webkit-transform:scale(${scale});
                -moz-transform:scale(${scale});
               -o-transform:scale(${scale});
               background-color:${boardConfigs.backgroundColor};
               width:${boardConfigs.width}px;
               height:${boardConfigs.height}px;`
            },
            shotFun() {
                let scale = this.scale, width = scale * 1992 + 'px', height = scale * 1152 + 'px';
                return `width:${width};
                height:${height};`
            }
        },
        methods: {
            changeSize(newRect, index) {
                this.$store.dispatch('setTopAction', {id: index, top: newRect.top});
                this.$store.dispatch('setLeftAction', {id: index, left: newRect.left});
                this.$store.dispatch('setWidthAction', {id: index, width: newRect.width});
                this.$store.dispatch('setHeightAction', {id: index, height: newRect.height});
            },
            resizeStopHandle(newRect, index) {
                this.$refs[index][0].resize({
                    width: newRect.width,
                    height: newRect.height
                })
            },
            activeFn(id) {
                this.$store.dispatch("setActiveAction", {id: id})
            },
            deActiveFn(id) {
                this.$store.dispatch("unsetActiveAction", {id: id})
            }
        }
    }
</script>

<style scoped>
  .echarts {
    width: 100%;
    height: 100%;
  }
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background-color: #ffffff;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: #b0b8c2;
  }

  .dashboard {
    left: 36px;
    top: 36px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, .5);
    /*固定缩放位置*/
    transform-origin: left top;
    /*缩放效果*/
    transition: all .2s linear;
    position: absolute;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 50px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }

  .el-main {
    background-image: url("../assets/images/area-bg.png");
    background-repeat: repeat;
    text-align: center;
    line-height: 160px;
    position: relative;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container {
    height: 100%;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
