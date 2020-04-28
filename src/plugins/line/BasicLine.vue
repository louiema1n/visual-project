<template>
  <v-chart ref="dist" :options="options" :autoresize="false"/>
</template>

<script>
    import ECharts from 'vue-echarts'

    export default {
        name: "BasicLine",
        comments: {
            'v-chart': ECharts
        },
        props: {
            childCsss: Object
        },
        created() {
        },
        mounted() {
            this.resizeHandle()
        },
        data() {
            return {
                options: {
                    legend: {

                    },
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
        },
        methods: {
            resizeHandle() {
                this.$refs.chart.resize({
                    width: this.childCsss.width,
                    height: this.childCsss.height
                })
            }
        }
    }
</script>

<style scoped>

</style>
