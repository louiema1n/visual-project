<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item title="基本配置" name="1">
      <el-form :model="styles" class="demo-form-inline" label-width="40px" size="mini">
        <el-form-item label="大小">
          <el-row>
            <el-col :span="11">
              <el-input-number v-model="styles.width" controls-position="right" style="width: 100%" :min="1"
                               @change="changeSizeHandle"
                               placeholder="宽度"></el-input-number>
            </el-col>
            <el-col :span="2">&nbsp;</el-col>
            <el-col :span="11">
              <el-input-number v-model="styles.height" controls-position="right" style="width: 100%" :min="1"
                               @change="changeSizeHandle"
                               placeholder="高度"></el-input-number>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="位置">
          <el-row>
            <el-col :span="11">
              <el-input-number v-model="styles.left" controls-position="right" style="width: 100%" :min="0"
                               @change="changePosHandle"
                               placeholder="X"></el-input-number>
            </el-col>
            <el-col :span="2">&nbsp;</el-col>
            <el-col :span="11">
              <el-input-number v-model="styles.top" controls-position="right" style="width: 100%" :min="0"
                               @change="changePosHandle"
                               placeholder="Y"></el-input-number>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </el-collapse-item>
    <el-collapse-item title="图表" name="2">
      <el-form :model="options" class="demo-form-inline" label-width="40px" size="mini">
        <el-form-item label="背景">
          <el-row>
            <el-col :span="20">
              <el-input v-model="options.backgroundColor"></el-input>
            </el-col>
            <el-col :span="4">
              <el-color-picker
                @mousedown.native="stopMouseDown"
                v-model="options.backgroundColor"
                show-alpha
                :predefine="predefineColors">
              </el-color-picker>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </el-collapse-item>
    <el-collapse-item title="标题" name="3">
      <el-form :model="options.title" class="demo-form-inline" label-width="40px" size="mini">
        <el-form-item label="显示">
          <el-row>
            <el-col :span="4">
              <el-switch v-model="options.title.show"></el-switch>
            </el-col>
          </el-row>
        </el-form-item>
        <div v-show="options.title.show">
          <el-form-item label="标题">
            <el-input v-model="options.title.text" placeholder="图表标题"></el-input>
          </el-form-item>
          <el-form-item label="颜色">
            <el-row>
              <el-col :span="20">
                <el-input v-model="options.title.textStyle.color" placeholder="图表标题颜色"></el-input>
              </el-col>
              <el-col :span="4">
                <el-color-picker
                  @mousedown.native="stopMouseDown"
                  v-model="options.title.textStyle.color"
                  show-alpha
                  :predefine="predefineColors">
                </el-color-picker>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="大小">
            <el-row>
              <el-col :span="4">
                <el-input-number v-model="options.title.textStyle.fontSize"></el-input-number>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="风格">
            <el-select v-model="options.title.textStyle.fontStyle" clearable placeholder="请选择" style="width: 100%"
                       @mousedown.native="stopSelectMouseDown">
              <el-option
                v-for="item in fontStyles"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="粗细">
            <el-select v-model="options.title.textStyle.fontWeight" clearable placeholder="请选择" style="width: 100%"
                       @mousedown.native="stopSelectMouseDown">
              <el-option
                v-for="item in fontWeights"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="对齐">
            <el-select v-model="options.title.left" clearable placeholder="请选择" style="width: 100%"
                       @mousedown.native="stopSelectMouseDown">
              <el-option
                v-for="item in lefts"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </div>
      </el-form>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: "StyleConfig",
        props: {
            styles: {},
            options: {},
        },
        data() {
            return {
                activeName: '3',
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
                fontStyles: [{
                    value: 'normal',
                    label: '正常'
                }, {
                    value: 'italic',
                    label: '斜体'
                }],
                lefts: [{
                    value: 'auto',
                    label: '自动'
                }, {
                    value: 'left',
                    label: '居左'
                }, {
                    value: 'center',
                    label: '居中'
                }, {
                    value: 'right',
                    label: '居右'
                }],
                fontWeights: [{
                    value: 'normal',
                    label: '正常'
                }, {
                    value: 'bold',
                    label: '粗体'
                }, {
                    value: 'bolder',
                    label: '加粗'
                }, {
                    value: 'lighter',
                    label: '细体'
                }, {
                    value: '100',
                    label: '100'
                }, {
                    value: '200',
                    label: '200'
                }, {
                    value: '300',
                    label: '300'
                }, {
                    value: '400',
                    label: '400'
                }]
            };
        },
        computed: {
            ...mapState({
                activeElementId: state => state.boardData.activeElementId,
            }),
        },
        methods: {
            changeSizeHandle() {
                this.$store.dispatch('setWidthAction', {id: this.activeElementId, width: this.styles.width});
                this.$store.dispatch('setHeightAction', {id: this.activeElementId, height: this.styles.height});
            },
            changePosHandle() {
                console.log(this.$store.state.boardData)
                this.$store.dispatch('setTopAction', {id: this.activeElementId, top: this.styles.top});
                this.$store.dispatch('setLeftAction', {id: this.activeElementId, left: this.styles.left});
            },
            stopMouseDown() {
                // 阻止事件冒泡-选择颜色时会使选择的元素失去焦点
                let eles = document.querySelectorAll('.el-color-picker__panel');
                for (let i = 0; i < eles.length; i++) {
                    eles[i].removeEventListener("mousedown", this.stopPropagationFn);
                    eles[i].addEventListener("mousedown", this.stopPropagationFn)
                }
            },
            stopSelectMouseDown() {
                // 阻止事件冒泡-选择颜色时会使选择的元素失去焦点
                let eles = document.querySelectorAll('.el-select-dropdown');
                for (let i = 0; i < eles.length; i++) {
                    eles[i].removeEventListener("mousedown", this.stopPropagationFn);
                    eles[i].addEventListener("mousedown", this.stopPropagationFn)
                }
            },
            stopPropagationFn(e) {
                e.stopPropagation();
            }
        }
    }
</script>

<style scoped>

</style>
