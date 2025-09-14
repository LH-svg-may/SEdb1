const button4=document.getElementById('search4');
const showcontainer4=document.getElementById('show');
const resultscontainer4=document.getElementById('results-container4');
button4.addEventListener('click',()=>{
    showcontainer4.style.display = 'none';
    resultscontainer4.style.display = 'block';
})

const backbtn4=document.querySelector('#results-container4 .top span')
backbtn4.addEventListener('click',()=>{
    showcontainer4.style.display = 'block';
    resultscontainer4.style.display = 'none';
})

//<!--实现TF Identified by ChIP-seq和TF Predicted by Motif的切换-->
const Idiv=document.getElementById('bottom1');
const Pdiv=document.getElementById('bottom2');

const Ibtn=document.getElementById('I');
const Pbtn=document.getElementById('P');

Ibtn.addEventListener('click',()=>{
    Idiv.style.display='block';
    Pdiv.style.display='none';

    Ibtn.classList.remove('active');
    Pbtn.classList.remove('active');
    Ibtn.classList.add('active');
})


Pbtn.addEventListener('click',()=>{
    Idiv.style.display='none';
    Pdiv.style.display='block';

    Ibtn.classList.remove('active');
    Pbtn.classList.remove('active');
    Pbtn.classList.add('active');
})

//<!--  表格的切换-->
document.addEventListener('DOMContentLoaded',function(){
    const btn=document.getElementById('start');
    if(btn){
        btn.addEventListener('click',()=>{
            const selectElement=document.querySelector('.bottom>.title>select');
            if(selectElement){
                const selectedvalue=selectElement.value;
                const tables=document.querySelectorAll('.bottom>.sheet>table');
                tables.forEach(table=>{
                    table.classList.remove('active');
                    if(table.getAttribute('data-id')===selectedvalue){
                        table.classList.add('active');
                    }
                })
            }
        })
    }
})