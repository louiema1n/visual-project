<template>

  <el-form :model="boardConfigs" class="demo-form-inline" label-width="40px" size="mini">
    <el-form-item label="名称">
      <el-input v-model="boardConfigs.name" placeholder="请输入页面名称"></el-input>
    </el-form-item>
    <el-form-item label="大小">
      <el-row>
        <el-col :span="11">
          <el-input-number v-model="boardConfigs.width" controls-position="right" style="width: 100%" :min="1"
                           @change="tst"
                           placeholder="宽度"></el-input-number>
        </el-col>
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="11">
          <el-input-number v-model="boardConfigs.height" controls-position="right" style="width: 100%" :min="1"
                           @change="tst"
                           placeholder="高度"></el-input-number>
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item label="背景">
      <el-color-picker
        v-model="boardConfigs.backgroundColor"
        show-alpha
        :predefine="predefineColors">
      </el-color-picker>
    </el-form-item>
    <el-form-item label="封面">
      <el-image :src="src">
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
      </el-image>
      <el-button type="primary" plain style="width: 100%">截取封面</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "StyleConfig",
        props: {},
        data() {
            return {
                activeName: '1',
                num: 1,
                formInline: {
                    user: '',
                    region: ''
                },
                predefineColors: [
                    '#ff4500',
                    '#ff8c00',
                    '#ffd700',
                    '#90ee90',
                    '#00ced1',
                    '#1e90ff',
                    '#c71585',
                    'rgba(255, 69, 0, 0.68)',
                    'rgb(255, 120, 0)',
                    'hsv(51, 100, 98)',
                    'hsva(120, 40, 94, 0.5)',
                    'hsl(181, 100%, 37%)',
                    'hsla(209, 100%, 56%, 0.73)',
                    '#c7158577'
                ],
                src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
            };
        },
        computed: {
            ...mapState({
                boardConfigs: state => state.boardData.boardConfigs
            }),
        },
        methods: {
            tst() {
                console.log(this.data)
            },
        }
    }
</script>

<style scoped>
  .el-color-picker {
    float: left;
  }
</style>
