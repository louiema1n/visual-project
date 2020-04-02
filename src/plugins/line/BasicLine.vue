<template>
  <v-chart :options="options"/>
</template>

<script>
    import ECharts from 'vue-echarts'
    // 引入折线图
    import 'echarts/lib/chart/line'
    export default {
        name: "BasicLine",
        comments: {
            'v-chart': ECharts
        },
        data() {
            return {
                options: {
                    tooltip: {},
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line'
                    }]
                }
            }
        }
    }
</script>

<style scoped>

</style>
