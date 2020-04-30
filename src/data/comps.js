export default [{
  title: "折线图",
  name: "1",
  components: [{
    cpName: 'basic-line',
    title: '基本折线图',
    icon: 'https://www.echartsjs.com/examples/data/thumb/line-simple.jpg',
    style: {
      width: 500,
      height: 400,
      top: 0,
      left: 0,
      draggable: true,
      resizable: true,
      axis: 'both',
      parentLim: true,
      snapToGrid: false,
      aspectRatio: false,
      zIndex: 1,
      active: true
    },
    options: {
      title: {
        show: true,
        text: '测试标题',
        textStyle: {
          color: '#000000',
          fontStyle: '',
          fontWeight: '',
          fontSize: '20',
        },
        left: 'auto'
      },
      legend: {
        show: true,
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        }
      ],
      backgroundColor: ''
    }
  }, {
    cpName: 'basic-area',
    title: '基本区域图',
    icon: 'https://www.echartsjs.com/examples/data/thumb/area-basic.jpg',
    style: {
      width: 500,
      height: 400,
      top: 0,
      left: 0,
      draggable: true,
      resizable: true,
      axis: 'both',
      parentLim: true,
      snapToGrid: false,
      aspectRatio: false,
      zIndex: 1,
      active: true
    },
    options: {
      legend: {

      },
      tooltip: {},
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
      }]
    }
  }]
}, {
  title: "饼状图",
  name: "2",
  components: [{
    cpName: 'pie-doughnut',
    title: '环状图',
    icon: 'https://www.echartsjs.com/examples/data/thumb/pie-doughnut.jpg',
    style: {
      width: 500,
      height: 400,
      top: 0,
      left: 0,
      draggable: true,
      resizable: true,
      axis: 'both',
      parentLim: true,
      snapToGrid: false,
      aspectRatio: false,
      zIndex: 1,
      active: true
    },
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
  }]
}]
