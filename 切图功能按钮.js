//<!--    切换柱状图、折线图、堆叠图-->
document.addEventListener('DOMContentLoaded',function(){
    const chartGroups=document.querySelectorAll('.box2>.left>div');
    chartGroups.forEach(group=>{
        const btns=group.querySelectorAll('ul>li');
        const tabs=group.querySelectorAll('ol>li');
        btns.forEach((button,index)=>{
            button.addEventListener('click',()=>{
                btns.forEach(btn=>btn.classList.remove('active'));
                tabs.forEach(tab=>tab.classList.remove('active'));

                btns[index].classList.add('active');
                tabs[index].classList.add('active');
            });
        });
    });
});


<!--    refresh刷新按钮-->
document.addEventListener('DOMContentLoaded',function(){
    const refreshButtons=document.querySelectorAll('.refresh');

    refreshButtons.forEach(button=>{
        button.addEventListener('click',(e)=>{
            const groups=button.closest('.box2>.left>div');
            if(groups){
                const allButtons=groups.querySelectorAll('ul>li');
                const allTabs=groups.querySelectorAll('ol>li');

                allButtons.forEach(btn=>btn.classList.remove('active'));
                allTabs.forEach(tab=>tab.classList.remove('active'));

                allButtons[0].classList.add('active');
                allTabs[0].classList.add('active');
            }
        })
    })
})

document.addEventListener('DOMContentLoaded', function() {
    const viewButtons = document.querySelectorAll('.data-view');
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const chartContainer = button.closest('.chart');

            const CH = chartContainer.querySelector('.chart-container');
            const VW = chartContainer.nextElementSibling;
            const tab0=chartContainer.querySelector('ul>li')

            // 切换显示状态
            if (CH.style.display !== 'none') {
                CH.style.display = 'none';
                VW.style.display = 'block';
                button.style.color='#56a5cc';
                tab0.classList.remove('active');
            }
        });
    });
});

//data view视图close按钮功能
document.addEventListener('DOMContentLoaded',function(){
    const colsebuttons=document.querySelectorAll('#close1,#close2');
    colsebuttons.forEach(button=>{
        if(colsebuttons.id==='#close1'){
            const chartdiv=document.getElementById('#chart1');
            const viewdiv=document.getElementById('#view1');
            chartdiv.style.display='block';
            viewdiv.style.display='none';
        }
    })
})