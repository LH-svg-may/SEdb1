// 柱状图
function initBarChart(containerId,seriesData,yAxisFormatter='{value}'){
    const chartDom=document.getElementById(containerId);
    const barChart=echarts.init(chartDom);

    const baseOption={
        tooltip:{
            trigger:'axis',
            axisPointer:{
                type:'shadow'
            }
        },
        legend:{
            data:['Human','Mouse','Arabidopsis_thaliana','Zea_mays'],
            top:30
        },
        grid:{
            left:'3%',
            right:'4%',
            bottom:'3%',
            containLabel:true
        },
        xAxis:{
            type:'category',
            data:['SEdb 1.0','SEdb 2.0','SEdb 3.0'],
            axisLabel:{
                fontSize:12
            }
        },
        yAxis:{
            type:'value',
            axisLabel:{
                formatter:yAxisFormatter
            }
        },
        series:seriesData.map(item=>({
            name:item.name,
            type:'bar',
            data:item.data,
            itemStyle:{
                color:item.color
            }
        }))
    };

    const sideBySideOption={
        series:[
            {
                barGap:0,
                barCategoryGap:'20%'
            },
            {},
            {},
            {}
        ]
    };
    barChart.setOption(baseOption);
    barChart.setOption(sideBySideOption);

    window.addEventListener('resize',function(){
        barChart.resize();
    });
}
//第一个条形柱状图的初始化
const seriesData1=[
    {name:'Human',data:[541,1739,3389],color:'#fac858'},
    {name:'Mouse',data:[541,1739,3389],color:'#91cc75'},
    {name:'Arabidopsis_thaliana',data:[0,0,21],color:'#e8730b'},
    {name:'Zea_mays',data:[0,0,15],color:'#13d323'}
];
initBarChart('left-main-chart1.1',seriesData1);

//第二个柱状图
const seriesData2=[
    {name:'Human',data:[331601,1167518,2311855],color:'#fac858'},
    {name:'Mouse',data:[0,550226,1148665],color:'#91cc75'},
    {name:'Arabidopsis_thaliana',data:[0,0,4195],color:'#e8730b'},
    {name:'Zea_mays',data:[0,0,16357],color:'#13d323'}
];
initBarChart('left-main-chart2.1',seriesData2);



//     折线图
function initLineChart(containerId,seriesData,yAxisFormatter='(value'){
    const chartDom=document.getElementById(containerId);
    const lineChart=echarts.init(chartDom);

    const lineOption={
        tooltip:{
            trigger:'axis',
            axisPointer:{
                type:'shadow'
            }
        },
        legend:{
            data:['Human','Mouse','Arabidopsis_thaliana','Zea_mays'],
            top:30
        },
        grid:{
            left:'3%',
            right:'4%',
            bottom:'3%',
            containLabel:true
        },
        xAxis:{
            type:'category',
            data:['SEdb 1.0','SEdb 2.0','SEdb 3.0'],
            axisLabel:{
                fontSize:12
            }
        },
        yAxis:{
            type:'value',
            axisLabel:{
                formatter:yAxisFormatter,
                show:true,
                fontSize:12
            }
        },
        series:seriesData.map(item=>({
            name:item.name,
            type:'line',
            data:item.data,
            itemStyle:{
                color:item.color
            },
            symbol:'circle',
            symbolSize:8,
            lineStyle:{
                width:3
            }
        }))
    };
    lineChart.setOption(lineOption);
    window.addEventListener('resize',function(){
        lineChart.resize();
    })
}

//第一个折线图
const series2Data1=[
    {name:'Human',data:[541,1739,3389],color:'#fac858'},
    {name:'Mouse',data:[541,1739,3389],color:'#91cc75'},
    {name:'Arabidopsis_thaliana',data:[0,0,21],color:'#e8730b'},
    {name:'Zea_mays',data:[0,0,15],color:'#13d323'}
];
initLineChart('left-main-chart1.2',series2Data1)
const series2Data2=[
    {name:'Human',data:[331601,1167518,2311855],color:'#fac858'},
    {name:'Mouse',data:[0,550226,1148665],color:'#91cc75'},
    {name:'Arabidopsis_thaliana',data:[0,0,4195],color:'#e8730b'},
    {name:'Zea_mays',data:[0,0,16357],color:'#13d323'}
];
initLineChart('left-main-chart2.2',series2Data2);


//     堆叠图
function initStackedBarChart(containerId ,seriesData,yAxisFormatter='{value}'){
    const chartDom=document.getElementById(containerId);
    const stackedBarChart=echarts.init(chartDom);

    const stackedBarOption={
        tooltip:{
            trigger:'axis',
            axisPointer:{
                type:'shadow'
            }
        },
        legend:{
            data:seriesData.map(item=>item.name),
            top:30
        },
        grid:{
            left:'3%',
            right:'4%',
            bottom:'3%',
            containLabel:true
        },
        xAxis:{
            type:'category',
            data:['SEdb 1.0','SEdb 2.0','SEdb 3.0'],
            axisLabel:{
                fontSize:12
            }
        },
        yAxis:{
            type:'value',
            axisLabel:{
                formatter:yAxisFormatter
            }
        },
        series:seriesData.map(item=>({
            name:item.name,
            type:'bar',
            data:item.data,
            stack:'total',  //关键点，添加stack属性实现堆叠
            itemStyle:{
                color:item.color
            },
            emphasis:{
                focus:'series'
            },
            label:{
                show:true,
                position:'inside'
            }
        }))
    };
    stackedBarChart.setOption(stackedBarOption);
    window.addEventListener('resize',function(){
        stackedBarChart.resize();
    });
}
const series3Data1=[
    {name:'Human',data:[541,1739,3389],color:'#fac858'},
    {name:'Mouse',data:[541,1739,3389],color:'#91cc75'},
    {name:'Arabidopsis_thaliana',data:[0,0,21],color:'#e8730b'},
    {name:'Zea_mays',data:[0,0,15],color:'#13d323'}
];
initStackedBarChart('left-main-chart1.3',series3Data1)
const series3Data2=[
    {name:'Human',data:[331601,1167518,2311855],color:'#fac858'},
    {name:'Mouse',data:[0,550226,1148665],color:'#91cc75'},
    {name:'Arabidopsis_thaliana',data:[0,0,4195],color:'#e8730b'},
    {name:'Zea_mays',data:[0,0,16357],color:'#13d323'}
];
initStackedBarChart('left-main-chart2.3',series3Data2);