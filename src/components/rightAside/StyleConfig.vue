<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item title="基本配置" name="1">
      <el-form :model="data" class="demo-form-inline" label-width="40px" size="mini">
        <el-form-item label="大小">
          <el-row>
            <el-col :span="11">
              <el-input-number v-model="data.width" controls-position="right" style="width: 100%" :min="1"
                               @change="changeSizeHandle"
                               placeholder="宽度"></el-input-number>
            </el-col>
            <el-col :span="2">&nbsp;</el-col>
            <el-col :span="11">
              <el-input-number v-model="data.height" controls-position="right" style="width: 100%" :min="1"
                               @change="changeSizeHandle"
                               placeholder="高度"></el-input-number>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="位置">
          <el-row>
            <el-col :span="11">
              <el-input-number v-model="data.left" controls-position="right" style="width: 100%" :min="0"
                               @change="changePosHandle"
                               placeholder="X"></el-input-number>
            </el-col>
            <el-col :span="2">&nbsp;</el-col>
            <el-col :span="11">
              <el-input-number v-model="data.top" controls-position="right" style="width: 100%" :min="0"
                               @change="changePosHandle"
                               placeholder="Y"></el-input-number>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </el-collapse-item>
    <el-collapse-item title="表格配置" name="3">
      <el-form :model="formInline" class="demo-form-inline" label-width="40px" size="mini">
        <el-form-item label="背景">
          <el-row>
            <el-col :span="20">
              <el-input v-model="color"></el-input>
            </el-col>
            <el-col :span="4">
              <el-color-picker
                @mousedown.stop
                v-model="color"
                show-alpha
                :predefine="predefineColors">
              </el-color-picker>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "StyleConfig",
        props: {
            data: {}
        },
        data() {
            return {
                activeName: '1',
                num: 1,
                formInline: {
                    user: '',
                    region: ''
                },
                color: 'transparent',
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
            };
        },
        computed: {
            ...mapState({
                activeElementId: state => state.boardData.activeElementId,
            }),
        },
        methods: {
            changeSizeHandle() {
                this.$store.dispatch('setWidthAction', {id: this.activeElementId, width: this.data.width});
                this.$store.dispatch('setHeightAction', {id: this.activeElementId, height: this.data.height});
            },
            changePosHandle() {
                console.log(this.$store.state.boardData)
                this.$store.dispatch('setTopAction', {id: this.activeElementId, top: this.data.top});
                this.$store.dispatch('setLeftAction', {id: this.activeElementId, left: this.data.left});
            }
        }
    }
</script>

<style scoped>

</style>
