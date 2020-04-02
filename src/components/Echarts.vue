<template>
  <v-chart :options="polar"/>
</template>

<script>
    import ECharts from 'vue-echarts'
    // 引入 echarts 主模块。
    import 'echarts/lib/echarts'
    // 引入柱形图
    import 'echarts/lib/chart/bar'
    // 引入条形图
    import 'echarts/lib/chart/line'
    // 引入柱形图
    import 'echarts/lib/chart/pie'
    //// 引入提示框组件、标题组件、工具箱、legend组件。
    import 'echarts/lib/component/tooltip'
    import 'echarts/lib/component/title'
    import 'echarts/lib/component/toolbox'
    import 'echarts/lib/component/legend'

    export default {
        name: "Echarts",
        comments: {
            'v-chart': ECharts
        },
        data() {
            let data = []
            for (let i = 0; i <= 360; i++) {
                let t = i / 180 * Math.PI
                let r = Math.sin(2 * t) * Math.cos(2 * t)
                data.push([r, i])
            }
            return {
                polar: {
                    title: {
                        text: 'ECharts 入门示例'
                    },
                    tooltip: {},
                    legend: {
                        data:['销量'],
                        left: "right"
                    },
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                }
            }
        },
    }
</script>

<style scoped>

</style>
