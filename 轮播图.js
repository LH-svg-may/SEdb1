var imgs=document.querySelectorAll('.imgBox>li')
var points=document.querySelectorAll('.foucs>li')
var banner=document.querySelector('.banner')

//准备一个变量，表示当前是第几张，默认是0，因为默认显示的是素材0张
var index=0
//存储定时器
var timer=null
//书写一个切换一张的函数
//参数为true，切换下一张
//参数为false，切换上一张
//参数为数字，切换到指定索引的那一张
function changeOne(type){
    //让当前在这一张消失
    imgs[index].className=''
    points[index].className=''
    //根据type传递来的参数，来切换index的值
    if (type===true){
        index++
    }else if(type===false){
        index--
    }else {
        index=type
    }
    //判定index的边界值
    if(index>=imgs.length){
        index=0
    }
    if (index<0){
        index=imgs.length-1
    }
    //让改变后的这一张显示出来
    imgs[index].className='active'
    points[index].className='active'
}
//启动轮播
function startAutoPlay(){
    timer=setInterval(function(){
        changeOne(true);
    },2000);
}
//停止轮播
function stopAutoPlay(){
    if(timer){
        clearInterval(timer);
        timer=null;
    }
}
//初始化自动轮播
startAutoPlay();
//鼠标悬停暂停轮播
banner.addEventListener('mouseenter',function(){
    stopAutoPlay();
});
//鼠标离开恢复轮播
banner.addEventListener('mouseleave',function(){
    startAutoPlay();
});

//给轮播图区域盒子绑定点击事件
banner.onclick=function(e){
    //判断点击的是左按钮
    if(e.target.className==='left'){
        console.log('点击的是左按键')
        //切换上一张，调用changeOne方法传递参数为false
        changeOne(false)
    }
    if(e.target.className==='right'){
        console.log('点击的是右按键')
        //切换下一张，调用changeOne方法传递参数为true
        changeOne(true)
    }
    //判断点击的是焦点盒子
    if(e.target.dataset.name==='point'){
        console.log('点击的是焦点盒子')
        //拿到自己记录的索引
        var i=e.target.dataset.i-0
        changeOne(i)
    }
}
