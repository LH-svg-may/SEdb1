document.addEventListener("DOMContentLoaded", function(){
    const rowsPerPage3=10;
    let currentPage3=1;
    let tableData3=[];
    let filteredData3=[];

    //初始化表格3的分页
    function initTable3Pagination(){
        //获取表格数据
        const table3=document.getElementById('table3');
        const rows=table3.querySelectorAll('tbody tr');

        //将数据存在数组中
        tableData3=Array.from(rows).map(row=>{
            return{
                element:row,
                cells:Array.from(row.cells).map(cell=>cell.textContent)
            }
        })
        filteredData3=[...tableData3];
        //初始渲染
        renderTable3(filteredData3,currentPage);

        //搜索功能
        const searchInput=document.getElementById('search-bed');
        searchInput.addEventListener('input',function(){
            const searchTerm=this.value.toLowerCase();

            if(searchTerm===''){
                filteredData3=[...tableData3];
            }else{
                filteredData3=tableData3.filter(rowData=>{
                    return rowData.cells.some(cell=>cell.toLowerCase().includes(searchTerm));
                })
            }
            currentPage3=1;
            renderTable3(filteredData3,currentPage3);
        })
    }

    //渲染表格
    function renderTable3(data,page){
        const tbody=document.querySelector('#table3 tbody');
        const start=(page-1)*rowsPerPage3;
        const end=start+rowsPerPage3;
        const paginatedData=data.slice(start,end);

        //先隐藏所有行
        tableData3.forEach(rowData=>{
            rowData.element.style.display='none';
        })
        //显示当前页的行
        paginatedData.forEach(rowData=>{
            rowData.element.style.display='';
        })
        //更新分页控件
        renderPagination3(data.length,page);
        //更新结果计数
        updateResultCount3(data.length,start+1,Math.min(end,data.length))
    }
    //更新结果计数
    function updateResultCount3(total,start,end){
        document.getElementById('bed-result-count').textContent=`Showing ${start}to ${end} of ${total} entries`;
    }
    //渲染分页控件
    function renderPagination3(totalItems,currentPage){
        const totalPages=Math.ceil(totalItems/rowsPerPage3);
        const pagination=document.getElementById('pagination3');
        pagination.innerHTML='';
        if(totalItems===0){
            pagination.innerHTML='<li>No data available</li>';
            return;
        }
        if (currentPage > 1) {
            pagination.innerHTML += `
                <li><a href="#" class="page-link" data-page="${currentPage - 1}">«</a></li>
            `;
        }
        // 显示最多5个页码按钮
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        // 调整起始页码以确保显示maxVisiblePages个按钮
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        // 第一页按钮
        if (startPage > 1) {
            pagination.innerHTML += `
                <li><a href="#" class="page-link" data-page="1">1</a></li>
                ${startPage > 2 ? '<li><span>...</span></li>' : ''}
            `;
        }

        // 页码按钮
        for (let i = startPage; i <= endPage; i++) {
            pagination.innerHTML += `
                <li><a href="#" class="page-link ${i === currentPage ? 'active' : ''}"
                     data-page="${i}">${i}</a></li>
            `;
        }

        // 最后一页按钮
        if (endPage < totalPages) {
            pagination.innerHTML += `
                ${endPage < totalPages - 1 ? '<li><span>...</span></li>' : ''}
                <li><a href="#" class="page-link" data-page="${totalPages}">${totalPages}</a></li>
            `;
        }

        // 下一页按钮
        if (currentPage < totalPages) {
            pagination.innerHTML += `
                <li><a href="#" class="page-link" data-page="${currentPage + 1}">»</a></li>
            `;
        }
        //添加分页点击事件
        document.querySelectorAll('#pagination3 .page-link').forEach(link=>{
            link.addEventListener('click',function(e){
                e.preventDefault();
                currentPage3=parseInt(this.dataset.page);
                renderTable3(filteredData3,currentPage3);
            })
        })
    }

    initTable3Pagination();
})