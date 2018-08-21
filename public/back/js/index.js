$(function(){
  // 1.创建echart实例
  var echarts1 = echarts.init(document.querySelector(".echarts_1"));
  
  // 2.配置数据
  var option1 = {
    // 大标题
    title:{
      //标题文本
      text:"2017年注册人数"
    },
    // 提示框组件
    tooltip:{
      trigger:'item',
    },
    // 图例
    legend:{
      data:['人数']
    },
    // x轴的刻度
    xAxis:{
      data:['1月','2月','3月','4月','5月','6月']
    },
    // y轴的刻度
    yAxis:{},
    // 数据项列表
    series:[{
      name:'人数',
      type:'bar',
      data:[1000,1200,1400,1800,1200,2500]
    }]
  };
  // 使用数据配置图表
  echarts1.setOption(option1);


//饼图
  var echarts2 = echarts.init(document.querySelector(".echarts_2"))
  var option2 = {
    title:{
      text:"热门品牌销售",
      subtext:"2018年8月",
      x:"center"
    },
    // 提示框组件
    tooltip:{
      // axis 坐标轴触发
      trigger:'item',
      formatter:"{a}<br/>{b}:{c} ({d}%)"
    },
    // 图例
    legend:{
      orient:'vertical',
      left:"left",
      data:["阿迪","耐克","三叶草","阿迪王","匡威"]
    },
    series:[{
      name:"品牌",
      type:"pie",
      radius:"50%",
      center:["50%","60%"],
      data:[
        {value:335,name:'阿迪'},
        {value:310,name:'耐克'},
        {value:234,name:'三叶草'},
        {value:135,name:'阿迪王'},
        {value:148,name:'匡威'},
      ],
      //可以添加阴影效果
      itemStyle:{
        emphasis:{
          shadowBlur:10,
          shadowOffsetX:0,
          shadowColor:"rgba(0,0,0,0.5)"
        }
      }
    }]
  };
  echarts2.setOption(option2);
})