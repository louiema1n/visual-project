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
                :w="width"
                :h="height"
                v-on:resizing="resize"
                @resizestop="resizeStopHandle"
                v-on:dragging="resize"
                :parentLimitation="true"
                :parentScaleX="scale"
                :parentScaleY="scale">
                <BasicLine :child-csss="childCsss" ref="dist"></BasicLine>
              </VueDragResize>
            </div>
          </div>
        </el-main>
      </el-container>
      <el-aside width="300px" @mousedown.native.stop>
        <!-- 右边操作栏 -->
        <RightAside></RightAside>
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

    export default {
        name: "Test",
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
                scale: 0.6,
                width: 450,
                height: 400,
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
            childCss() {
                return `width:${this.defaultW}px;height:${this.defaultH}px;`;
            },
            scaleFun: function () {
                let scale = this.scale;
                return `-webkit-transform:scale(${scale});
                -moz-transform:scale(${scale});
               -o-transform:scale(${scale});`
            },
            shotFun() {
                let scale = this.scale, width = scale * 1992 + 'px', height = scale * 1152 + 'px';
                return `width:${width};
                height:${height};`
            }
        },
        methods: {
            resize(newRect) {
                this.width = newRect.width;
                this.height = newRect.height;
                this.top = newRect.top;
                this.left = newRect.left;
                this.childCsss = {
                    width: this.width,
                    height: this.height,
                }
            },
            resizeStopHandle(newRect) {
                this.$refs.dist.resizeHandle()
            }
        }
    }
</script>

<style scoped>
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
    width: 1920px;
    height: 1080px;
    left: 36px;
    top: 36px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, .5);
    /*固定缩放位置*/
    transform-origin: left top;
    /*缩放效果*/
    transition: all .2s linear;
    position: absolute;
    background-color: #bfbfbf;
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
