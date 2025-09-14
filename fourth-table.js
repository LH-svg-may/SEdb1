
    document.addEventListener('DOMContentLoaded', function() {
    // 获取表格和分页相关元素
    const table = document.querySelector('.fourth table');
    const tbody = table.querySelector('tbody');
    const allRows = Array.from(tbody.querySelectorAll('tr')); // 所有行数据
    let visibleRows = [...allRows]; // 当前可见行
    const rowsPerPageSelect = document.getElementById('rows-per-page');
    const pageInfo = document.querySelector('.fourth p:first-of-type');
    const paginationContainer = document.querySelector('.fourth .pagination-container');
    const searchInput = document.querySelector('.fourth .search input');

    // 初始化分页变量
    let currentPage = 1;
    let rowsPerPage = 10;

    // 更新表格显示的函数
    function updateTable() {
    // 隐藏所有行
    allRows.forEach(row => row.style.display = 'none');

    // 计算当前页显示的行范围
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const rowsToShow = visibleRows.slice(start, end);

    // 显示当前页的行
    rowsToShow.forEach(row => row.style.display = '');

    // 更新分页信息
    const totalVisible = visibleRows.length;
    const showingStart = start + 1;
    const showingEnd = Math.min(end, totalVisible);
    pageInfo.textContent = `Showing ${showingStart} to ${showingEnd} of ${totalVisible} entries`;
}
    // 创建分页按钮的函数
    function createPagination() {
    const totalPages = Math.ceil(visibleRows.length / rowsPerPage);
    const pagination = document.createElement('ul');
    pagination.className = 'pagination';

    // 添加上一页按钮
    const prevLi = document.createElement('li');
    const prevLink = document.createElement('a');
    prevLink.href = '#';
    prevLink.textContent = 'Previous';
    prevLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage > 1) {
    currentPage--;
    updateTable();
    createPagination();
}
});
    prevLi.appendChild(prevLink);
    pagination.appendChild(prevLi);

    // 添加页码按钮
    const maxVisiblePages = 5; // 最多显示5个页码按钮
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    // 调整起始页码以确保显示完整的maxVisiblePages个按钮
    if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
}

    // 添加第一页按钮
    if (startPage > 1) {
    const firstLi = document.createElement('li');
    const firstLink = document.createElement('a');
    firstLink.href = '#';
    firstLink.textContent = '1';
    firstLink.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = 1;
    updateTable();
    createPagination();
});
    firstLi.appendChild(firstLink);
    pagination.appendChild(firstLi);

    // 添加省略号
    if (startPage > 2) {
    const ellipsisLi = document.createElement('li');
    ellipsisLi.textContent = '...';
    pagination.appendChild(ellipsisLi);
}
}
    // 添加页码按钮
    for (let i = startPage; i <= endPage; i++) {
    const pageLi = document.createElement('li');
    const pageLink = document.createElement('a');
    pageLink.href = '#';
    pageLink.textContent = i;
    if (i === currentPage) {
    pageLi.className = 'active';
}
    pageLink.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = i;
    updateTable();
    createPagination();
});
    pageLi.appendChild(pageLink);
    pagination.appendChild(pageLi);
}

    // 添加最后页按钮
    if (endPage < totalPages) {
    // 添加省略号
    if (endPage < totalPages - 1) {
    const ellipsisLi = document.createElement('li');
    ellipsisLi.textContent = '...';
    pagination.appendChild(ellipsisLi);
}

    const lastLi = document.createElement('li');
    const lastLink = document.createElement('a');
    lastLink.href = '#';
    lastLink.textContent = totalPages;
    lastLink.addEventListener('click', (e) => {
    e.preventDefault();
    currentPage = totalPages;
    updateTable();
    createPagination();
});
    lastLi.appendChild(lastLink);
    pagination.appendChild(lastLi);
}

    // 添加下一页按钮
    const nextLi = document.createElement('li');
    const nextLink = document.createElement('a');
    nextLink.href = '#';
    nextLink.textContent = 'Next';
    nextLink.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
    currentPage++;
    updateTable();
    createPagination();
}
});
    nextLi.appendChild(nextLink);
    pagination.appendChild(nextLi);

    // 清空并更新分页容器
    paginationContainer.querySelector('ul')?.remove();
    paginationContainer.appendChild(pagination);
}
    // 搜索功能
    function handleSearch() {
    const searchText = searchInput.value.toLowerCase();
    visibleRows = allRows.filter(row => {
    const rowText = row.textContent.toLowerCase();
    return rowText.includes(searchText);
});

    currentPage = 1;
    updateTable();
    createPagination();
}

    // 每页行数变化事件监听
    rowsPerPageSelect.addEventListener('change', function() {
    rowsPerPage = parseInt(this.value);
    currentPage = 1;
    updateTable();
    createPagination();
});

    // 搜索输入事件监听
    if (searchInput) {
    searchInput.addEventListener('keyup', handleSearch);
}

    // 初始化
    updateTable();
    createPagination();
});
