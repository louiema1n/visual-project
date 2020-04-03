<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item title="位置" name="1">
      <el-form :model="formInline" class="demo-form-inline" label-width="40px" size="mini">
        <el-form-item label="大小">
          <el-row>
            <el-col :span="11">
              <el-input v-model="formInline.user" placeholder="宽度"></el-input>
            </el-col>
            <el-col :span="2">&nbsp;</el-col>
            <el-col :span="11">
              <el-input-number v-model="num" controls-position="right" style="width: 100%" :min="1" :max="10"
                               placeholder="宽度"></el-input-number>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </el-collapse-item>
    <el-collapse-item title="外观" name="2">
      <el-form :model="formInline" class="demo-form-inline" label-width="40px" size="mini">
        <el-form-item label="大小">
          <el-row>
            <el-col :span="11">
              <el-input v-model="formInline.user" placeholder="宽度"></el-input>
            </el-col>
            <el-col :span="2">&nbsp;</el-col>
            <el-col :span="11">
              <el-input-number v-model="num" controls-position="right" style="width: 100%" :min="1" :max="10"
                               placeholder="宽度"></el-input-number>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </el-collapse-item>
    <el-collapse-item title="X轴" name="3">
      <el-form :model="formInline" class="demo-form-inline" label-width="40px" size="mini">
        <el-form-item label="大小">
          <el-row>
            <el-col :span="11">
              <el-input v-model="formInline.user" placeholder="宽度"></el-input>
            </el-col>
            <el-col :span="2">&nbsp;</el-col>
            <el-col :span="11">
              <el-input-number v-model="num" controls-position="right" style="width: 100%" :min="1" :max="10"
                               placeholder="宽度"></el-input-number>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </el-collapse-item>
    <el-collapse-item title="Y轴" name="4">
      <el-form :model="formInline" class="demo-form-inline" label-width="40px" size="mini">
        <el-form-item label="大小">
          <el-row>
            <el-col :span="11">
              <el-input v-model="formInline.user" placeholder="宽度"></el-input>
            </el-col>
            <el-col :span="2">&nbsp;</el-col>
            <el-col :span="11">
              <el-input-number v-model="num" controls-position="right" style="width: 100%" :min="1" :max="10"
                               placeholder="宽度"></el-input-number>
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
    export default {
        name: "StyleConfig",
        data() {
            return {
                activeName: '1',
                num: 1,
                formInline: {
                    user: '',
                    region: ''
                }
            };
        }
    }
</script>

<style scoped>

</style>
