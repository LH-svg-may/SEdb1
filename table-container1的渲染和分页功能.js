/// 分页相关变量
const rowsPerPage = 10;
let currentPage = 1;
let tableData = [];
let filteredData = [];

// 加载CSV数据
async function loadCSVData() {
    try {
        document.querySelector('#result-count').innerHTML = 'Loading data... <span class="loading"></span>';
        const response = await fetch('SEdb 2.0-a comprehensive human and mouse Super-Enhancer database (3).csv');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const csvText = await response.text();
        tableData = parseCSV(csvText);
        filteredData = [...tableData];
        renderTable(filteredData, currentPage);
    } catch (error) {
        console.error('Error loading CSV file:', error);
        document.getElementById("result-count").textContent = 'Error loading data. Please try again.';
    }
}

// 解析CSV数据
function parseCSV(csvText) {
    const lines = csvText.split('\n').filter(line => line.trim() !== '');
    if (lines.length === 0) return [];

    const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g,''));

    return lines.slice(1).map(line => {
        const values = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)
            .map(v => v.trim().replace(/^"|"$/g, ''));


        return {
            id: values[0]?.trim() || '',
            species: values[1]?.trim() || '',
            source: values[2]?.trim() || '',
            tissuetype: values[3]?.trim() || '',
            Biosample: values[4]?.trim() || '',
            date: values[5]?.trim() || ''
        };
    });
}

// 渲染表格和分页
function renderTable(data, page = 1) {
    const tbody = document.querySelector("#results-table tbody");
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedData = data.slice(start, end);

    tbody.innerHTML = paginatedData.map(item => `
            <tr>
                <td>${item.id}</td>
                <td>${item.species}</td>
                <td>${item.source}</td>
                <td>${item.tissuetype}</td>
                <td>${item.Biosample}</td>
                <td>${item.date}</td>
            </tr>
        `).join("");

    // 更新分页控件
    renderPagination(data.length, page);

    // 更新结果计数显示
    updateResultCount(paginatedData.length, data.length, start + 1);
}

// 更新结果计数
function updateResultCount(visibleCount, totalCount, startIndex) {
    const endIndex = startIndex + visibleCount - 1;
    document.getElementById("result-count").textContent =
        `From ${startIndex} to ${endIndex} results, Total ${totalCount} items`;
}

// 渲染分页控件
function renderPagination(totalItems, currentPage) {
    const totalPages = Math.ceil(totalItems / rowsPerPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    if (totalItems === 0) {
        pagination.innerHTML = '<li>No data available</li>';
        return;
    }

    // 上一页按钮
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

    // 添加分页点击事件
    document.querySelectorAll('.page-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            currentPage = parseInt(this.dataset.page);
            renderTable(filteredData, currentPage);
        });
    });
}



// 搜索框搜索功能
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('#results-container1 input');

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        filteredData = tableData.filter(item => {
            return Object.values(item).some(value =>
                value.toString().toLowerCase().includes(searchTerm)
            );
        });

        currentPage = 1;
        renderTable(filteredData, currentPage);
    });

    // 加载数据
    loadCSVData();
});


// 页面加载时自动加载数据
document.addEventListener('DOMContentLoaded', () => {
    loadCSVData();
});
