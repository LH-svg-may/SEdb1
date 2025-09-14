

//加载CSV数据
async function loadCSVData(){
    try{
        const response=await fetch('SEdb 2.0-a comprehensive human and mouse Super-Enhancer database (3).csv');
        if(!response.ok){
            throw new Error(`HTTP error! status:${response.status}`);
        }
        const csvText=await response.text();
        tableData=parseCSV(csvText);
        filteredData=[...tableData];
    }catch(error){
        console.error('Error loading CSV file:',error);
    }
}
//解析CSV数据
function parseCSV(csvText) {
    const lines = csvText.split('\n').filter(line => line.trim() !== '');
    if (lines.length === 0) return [];


    return lines.slice(1).map(line => {
        const values = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)
            .map(v => v.trim().replace(/^"|"$/g, ''));


        return {
            id: values[0]?.trim() || '',
            species: values[1]?.trim() || '',
            source: values[2]?.trim() || '',
            Biosample: values[3]?.trim() || '',
            tissuetype: values[4]?.trim() || '',
            date: values[5]?.trim() || ''
        };
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadCSVData();
})

//解析echart.csv文件
let chromosomeData = []; // 存储所有样本的染色体数据

async function loadChromosomeData() {
    const response = await fetch('echart.csv');
    const csvText = await response.text();
    const lines = csvText.split('\n').filter(line => line.trim() !== '');

    // 提取表头（染色体名称）
    const headers = lines[0].split(',').slice(2); // 跳过前两列（Sample ID和空列）

    // 提取数据行
    chromosomeData = lines.slice(1).map(line => {
        const values = line.split(',');
        const sampleId = values[0].trim();
        const counts = values.slice(2).map(v => parseInt(v.trim()) || 0); // 跳过空列

        return {
            sampleId,
            data: headers.map((chr, index) => ({
                chromosome: chr,
                count: counts[index]
            }))
        };
    });
}

// 页面加载时初始化数据
document.addEventListener('DOMContentLoaded', () => {
    loadChromosomeData();
});


document.querySelectorAll('.sheet table td:nth-child(3)').forEach(cell=>{
    cell.addEventListener('click',function(){
        const precontainer=document.getElementById('results-container4');
        const Nowcontainer=document.getElementById('id-resultscontainer');

        //圆环
        const sampleId=this.textContent.trim();
        const matchedData=chromosomeData.find(item=>item.sampleId===sampleId);

        precontainer.style.display='none';
        Nowcontainer.style.display='block';

        updateID(this.textContent);
        update(this.textContent);
        renderRingChart(matchedData.data);


    })
})

function updateID(content){
    document.getElementById('Sample ID').textContent=
        `${content}`;
}

function update(SampleID){

    const cleanID=SampleID.trim();

    const foundItem=tableData.find(item=>item.id===SampleID);
    if(foundItem){
        document.getElementById('Species').textContent=foundItem.species;
        document.getElementById('Biosample-type').textContent=foundItem.Biosample;
        document.getElementById('Tissue-type').textContent=foundItem.tissuetype;
        document.getElementById('Data-source').textContent=foundItem.source;
        document.getElementById('Biosample-name').textContent=foundItem.date;
    }else{
        console.warn(`No Sample ID found:`,cleanID);
    }
}

function renderRingChart(chromosomeCounts){
    const filteredData=chromosomeCounts.filter(item=>item.count>0);
    //初始化
    const chart=echarts.init(document.querySelector('.echarts-container'));
    const option = {
        title: {
            text:'Super-enhancers Distribution of chromosomes',
            left:'center',
            textStyle: {
                fontSize: 25 // 调整图例文字大小
            }
        },
        tooltip: {
            trigger:'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            type: 'scroll',
            orient: 'horizontal',

            bottom:10,
            data: filteredData.map(item=>item.chromosome),
            textStyle: {
                fontSize: 20 // 调整图例文字大小
            }
        },
        series:[{
            name: 'Chromosome Distribution',
            type: 'pie',
            radius: ['40%', '70%'],
            center:['50%', '45%'],
            avoidLabelOverlap: false,
            label: {
                show: false
            },
            emphasis: {
                label: {
                    show: true,
                    fontSize: '18',
                    fontWeight: 'bold'
                }
            },
            data:filteredData.map(item=>({
                value:item.count,
                name:item.chromosome
            })),
            emphasis: {
                scale: true,
                scaleSize: 1.5,
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0,0,0,0.5)'
                }
            }
        }]
    };
    chart.setOption(option);
    window.addEventListener('resize',()=>chart.resize());
}