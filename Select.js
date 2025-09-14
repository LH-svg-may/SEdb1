
    const tableData = [
    { id: "Sample_00_0001", species: "Human", source: "Roadmap", tissuetype: "Adipose", Biosample: "Tissue", date: "adipose-tissue" },
    { id: "Sample_00_0003", species: "Human", source: "Roadmap", tissuetype: "Adrenal gland", Biosample: "Tissue", date: "adrenal-gland_97d" },
    { id: "Sample_00_0004", species: "Human", source: "Roadmap", tissuetype: "Aorta", Biosample: "Tissue", date: "aorta" },
    { id: "Sample_00_0005", species: "Human", source: "Roadmap", tissuetype: "Adipose", Biosample: "Tissue", date: "B-cell" },
    { id: "Sample_00_0006", species: "Human", source: "Roadmap", tissuetype: "Blood", Biosample: "Tissue", date: "CD14-positive-monocyte" },
    { id: "Sample_00_0007", species: "Human", source: "Roadmap", tissuetype: "Blood", Biosample: "Primary cell", date: "naive thymus-derived CD4-positive,alpha-beta T cell" },
    { id: "Sample_00_0008", species: "Human", source: "Roadmap", tissuetype: "Blood", Biosample: "Primary cell", date: "CD4-positive-alpha-beta-memory-T-cell" },
    { id: "Sample_00_0009", species: "Human", source: "Roadmap", tissuetype: "Blood", Biosample: "Primary cell", date: "CD8-positive-alpha-beta-T-cell" },
    { id: "Sample_00_0010", species: "Human", source: "Roadmap", tissuetype: "Embryo", Biosample: "In vitro differentiated cell", date: "endodermal-cell" },
    { id: "Sample_00_0011", species: "Human", source: "Roadmap", tissuetype: "Esophagus", Biosample: "Tissue", date: "esophagus" },
    { id: "Sample_00_0012", species: "Human", source: "Roadmap", tissuetype: "Embryo", Biosample: "Stem cell", date: "H1-hESC" },
    { id: "Sample_00_0013", species: "Human", source: "Roadmap", tissuetype: "Esophagus", Biosample: "Stem cell", date: "H9" },
    { id: "Sample_00_0014", species: "Human", source: "Roadmap", tissuetype: "Heart left ventricle", Biosample: "Tissue", date: "heart-left-ventricle" },
    { id: "Sample_00_0015", species: "Human", source: "Roadmap", tissuetype: "Lung", Biosample: "Cell line", date: "IMR-90" },
    { id: "Sample_00_0016", species: "Human", source: "Roadmap", tissuetype: "Foreskin", Biosample: "Induced pluripotent stem cell line", date: "iPS-DF-19.11" },
    { id: "Sample_00_0017", species: "Human", source: "Roadmap", tissuetype: "Foreskin", Biosample: "Induced pluripotent stem cell line", date: "iPS-DF-6.9" },
    { id: "Sample_00_0018", species: "Human", source: "Roadmap", tissuetype: "Dermal fibroblasts", Biosample: "Induced pluripotent stem cell line", date: "iPS-18axian" },
    { id: "Sample_00_0019", species: "Human", source: "Roadmap", tissuetype: "Dermal fibroblasts", Biosample: "Induced pluripotent stem cell line", date: "iPS-20b" },
    { id: "Sample_00_0020", species: "Human", source: "Roadmap", tissuetype: "Large intestine", Biosample: "Tissue", date: "large-intestine_108d" },
    { id: "Sample_00_0021", species: "Human", source: "Roadmap", tissuetype: "Lung", Biosample: "Tissue", date: "lung_3y" },


    {id:"Sample_00_00022",species:"Human",source:"Roadmap",tissuetype:"Lung",Biosample:"Tissue",date:"lung_30y"},
    {id:"Sample_00_00023",species:"Human",source:"Roadmap",tissuetype:"Embryo",Biosample:"In vitro differentiated cell",date:"messenchymal-stem-cell"},
    {id:"Sample_00_00024",species:"Human",source:"Roadmap",tissuetype:"Embryo",Biosample:"In vitro differentiated cell",date:"messendoderm"},
    {id:"Sample_00_00025",species:"Human",source:"Roadmap",tissuetype:"Muscle of leg",Biosample:"Tissue",date:"muscle-of-leg"},
    {id:"Sample_00_00026",species:"Human",source:"Roadmap",tissuetype:"Muscle of trunk",Biosample:"Tissue",date:"muscle-of-trunk"},
    {id:"Sample_00_00027",species:"Human",source:"Roadmap",tissuetype:"Blood",Biosample:"Primary cell",date:"natural-killer-cell"},
    {id:"Sample_00_00029",species:"Human",source:"Roadmap",tissuetype:'Ovary',Biosample:"Tissue",date:"ovary"},
    {id:"Sample_00_00030",species:"Human",source:"Roadmap",tissuetype:"Pancreas",Biosample:"Tissue",date:"pancreas"},
    {id:"Sample_00_00031",species:"Human",source:"Roadmap",tissuetype:"Placenta",Biosample:"Tissue",date:"placenta"},
    {id:"Sample_00_00032",species:"Human",source:"Roadmap",tissuetype:"Psoas muscle",Biosample:"Tissue",date:"psoas-muscle_30y"},
    {id:"Sample_00_00033",species:"Human",source:"Roadmap",tissuetype:"Psoas muscle",Biosample:"Tissue",date:"psoas-muscle_3y"},
    {id:"Sample_00_00034",species:"Human",source:"Roadmap",tissuetype:"Right cardiac atrium",Biosample:"Tissue",date:"right-cardiac-atrium"},
    {id:"Sample_00_00035",species:"Human",source:"Roadmap",tissuetype:"Sigmoid colon",Biosample:"Tissue",date:"sigmoid-colon"},
    {id:"Sample_00_00036",species:"Human",source:"Roadmap",tissuetype:"Small intestine",Biosample:"Tissue",date:"small-intestine_108days"},
    {id:"Sample_00_00038",species:"Human",source:"Roadmap",tissuetype:"Spinal cord",Biosample:"Tissue",date:"spleen_3y"},
    {id:"Sample_00_00039",species:"Human",source:"Roadmap",tissuetype:"Spleen",Biosample:"Tissue",date:"spleen_30y"},
    {id:"Sample_00_00040",species:"Human",source:"Roadmap",tissuetype:"Spleen",Biosample:"Tissue",date:"stomach_3y"},
    {id:"Sample_00_00041",species:"Human",source:"Roadmap",tissuetype:"Stomach",Biosample:"Tissue",date:"stomach_30y"},
    {id:"Sample_00_00042",species:"Human",source:"Roadmap",tissuetype:"Stomach",Biosample:"Tissue",date:"stomach_96d"},
    {id:"Sample_00_00043",species:"Human",source:"Roadmap",tissuetype:"Stomach",Biosample:"Tissue",date:"stomach_96d"},

    {id:"Sample_00_0044",species:"Human",source:"Roadmap",tissuetype:"Cord blood",Biosample:"Primary cell",date:"T-cell"},
    {id:"Sample_00_0045",species:"Human",source:"Roadmap",tissuetype:"Thymus",Biosample:"Tissue",date:"thymus"},
    {id:"Sample_00_0046",species:"Human",source:"Roadmap",tissuetype:"Heart",Biosample:"Tissue",date:"right ventricle_34y"},
    {id:"Sample_00_0047",species:"Human",source:"Roadmap",tissuetype:"Blood",Biosample:"Primary cell",date:"effector memory CD4+ alpha-beta T cell"},
    {id:"Sample_00_0048",species:"Human",source:"Roadmap",tissuetype:"Embryo",Biosample:"In vitro differentiated cell",date:"Neuronal stem cell originated from H1"},
    {id:"Sample_00_0049",species:"Human",source:"Roadmap",tissuetype:"Small intestine",Biosample:"Tissue",date:"small intestine 30y"},
    {id:"Sample_00_0050",species:"Human",source:"Roadmap",tissuetype:'Esophagus',Biosample:"Tissue",date:"esophagus_30y"},
    {id:"Sample_00_0051",species:"Human",source:"Roadmap",tissuetype:"Adrenal gland",Biosample:"Tissue",date:"adrenal gland 30y"},
    {id:"Sample_00_0052",species:"Human",source:"Roadmap",tissuetype:"Heart",Biosample:"Tissue",date:"left ventricle 3y"},
    {id:"Sample_00_0053",species:"Human",source:"Roadmap",tissuetype:"Embryo",Biosample:"In vitro differentiated cell",date:"trophoblast cell originated from H1"},
    {id:"Sample_00_0054",species:"Human",source:"Roadmap",tissuetype:"Pancreas",Biosample:"Tissue",date:"pancreas 30y"},
    {id:"Sample_00_0055",species:"Human",source:"Roadmap",tissuetype:"Spleen",Biosample:"Tissue",date:"spleen 34y"},
    {id:"Sample_00_0056",species:"Human",source:"Roadmap",tissuetype:"Sigmoid colon",Biosample:"Tissue",date:"sigmoid colon 3y"},
    {id:"Sample_00_0057",species:"Human",source:"Roadmap",tissuetype:"Heart",Biosample:"Tissue",date:"right ventricle 3y"},
    {id:"Sample_00_0058",species:"Human",source:"Roadmap",tissuetype:"Stomach",Biosample:"Tissue",date:"stomach 34y"},
    {id:"Sample_01_0001",species:"Human",source:"ENCODE",tissuetype:"Prostate",Biosample:"Cell line",date:"22Rv1"},
    {id:"Sample_01_0002",species:"Human",source:"ENCODE",tissuetype:"Prostate",Biosample:"Cell line",date:"22Rv1_10nM17beta-hydroxy-5alpha-androstan-3-one"},
    {id:"Sample_01_0006",species:"Human",source:"ENCODE",tissuetype:"Lung",Biosample:"Cell line",date:"A549_ethanol_1h"},
    {id:"Sample_01_0012",species:"Human",source:"ENCODE",tissuetype:"Lung",Biosample:"Cell line",date:"A549_dexamethasone_1h"},
    {id:"Sample_01_0017",species:"Human",source:"ENCODE",tissuetype:"Muscle",Biosample:"Cell line",date:"A673"},

        {id:"Sample_01_0018",species:"Human",source:"ENCODE",tissuetype:"Submandibular Salivary Gland",Biosample:"Cell line",date:"ACC112"},
        {id:"Sample_01_0019",species:"Human",source:"ENCODE",tissuetype:"Brain and spinal cord",Biosample:"Primary cell",date:"astrocyte"},
        {id:"Sample_01_0020",species:"Human",source:"ENCODE",tissuetype:"Blood",Biosample:"Primary cell",date:"B-cell"},
        {id:"Sample_01_0021",species:"Human",source:"ENCODE",tissuetype:"Skin",Biosample:"In vitro differentiated cell",date:"bipolar-neuron"},
        {id:"Sample_01_0022",species:"Human",source:"ENCODE",tissuetype:"Prostate",Biosample:"Cell line",date:"C4-2B"},
        {id:"Sample_01_0023",species:"Human",source:"ENCODE",tissuetype:"Embryo",Biosample:"In vitro differentiated cell",date:"cardiac-muscle-cell"},
        {id:"Sample_01_0024",species:"Human",source:"ENCODE",tissuetype:'Blood',Biosample:"Primary cell",date:"CD14-positive-monocyte"},
        {id:"Sample_01_0025",species:"Human",source:"ENCODE",tissuetype:"Haematopoietic and lymphoid tissue blood",Biosample:"Cell line",date:"DND-41"},
        {id:"Sample_01_0026",species:"Human",source:"ENCODE",tissuetype:"Umbilical vein",Biosample:"Primary cell",date:"endothelial-cell-of-umbilical-vein"},
        {id:"Sample_01_0027",species:"Human",source:"ENCODE",tissuetype:"Prostate",Biosample:"Primary cell",date:"epithelial-cell-of-prostate"},
        {id:"Sample_01_0029",species:"Human",source:"ENCODE",tissuetype:"Lung",Biosample:"Primary cell",date:"fibroblast-of-lung"},
        {id:"Sample_01_0030",species:"Human",source:"ENCODE",tissuetype:"Haematopoietic and lymphoid tissue blood",Biosample:"Cell line",date:"GM12878"},
        {id:"Sample_01_0031",species:"Human",source:"ENCODE",tissuetype:"Skin",Biosample:"Induced pluripotent stem cell line",date:"GM23338"},
        {id:"Sample_01_0033",species:"Human",source:"ENCODE",tissuetype:"Embryo",Biosample:"Stem cell",date:"H9"},
        {id:"Sample_01_0034",species:"Human",source:"ENCODE",tissuetype:"Colon",Biosample:"Cell line",date:"HCT116"},
        {id:"Sample_01_0036",species:"Human",source:"ENCODE",tissuetype:"Cervix",Biosample:"Cell line",date:"HeLa-S3"},
        {id:"Sample_01_0037",species:"Human",source:"ENCODE",tissuetype:"Liver",Biosample:"In vitro differentiated cell",date:"hepatocyte"},
        {id:"Sample_01_0038",species:"Human",source:"ENCODE",tissuetype:"Liver",Biosample:"Cell line",date:"HepG2"},
        {id:"Sample_01_0039",species:"Human",source:"ENCODE",tissuetype:"Haematopoietic and lymphoid tissue bone marrow",Biosample:"Cell line",date:"K562"},
        {id:"Sample_01_0040",species:"Human",source:"ENCODE",tissuetype:"Haematopoietic and lymphoid tissue",Biosample:"Cell line",date:"Karpas-422"},

        {id:"Sample_01_0018",species:"Human",source:"ENCODE",tissuetype:"Skin",Biosample:"Primary cell",date:"ACC112"},
        {id:"Sample_01_0019",species:"Human",source:"ENCODE",tissuetype:"Haematopoietic and lymphoid tissue",Biosample:"Cell line",date:"astrocyte"},
        {id:"Sample_01_0020",species:"Human",source:"ENCODE",tissuetype:"Blood",Biosample:"Cell line",date:"B-cell"},
        {id:"Sample_01_0021",species:"Human",source:"ENCODE",tissuetype:"Haematopoietic and lymphoid tissue",Biosample:"Cell line",date:"bipolar-neuron"},
        {id:"Sample_01_0022",species:"Human",source:"ENCODE",tissuetype:"Mammary gland",Biosample:"Primary cell",date:"C4-2B"},
        {id:"Sample_01_0023",species:"Human",source:"ENCODE",tissuetype:"Mammary gland",Biosample:"Cell line",date:"cardiac-muscle-cell"},
        {id:"Sample_01_0024",species:"Human",source:"ENCODE",tissuetype:'Embryo',Biosample:"In vitro differentiated cell",date:"CD14-positive-monocyte"},
        {id:"Sample_01_0025",species:"Human",source:"ENCODE",tissuetype:"Peripheral blood",Biosample:"Cell line",date:"DND-41"},
        {id:"Sample_01_0026",species:"Human",source:"ENCODE",tissuetype:"Embryo",Biosample:"In vitro differentiated cell",date:"endothelial-cell-of-umbilical-vein"},
        {id:"Sample_01_0027",species:"Human",source:"ENCODE",tissuetype:"Embryo",Biosample:"In vitro differentiated cell",date:"epithelial-cell-of-prostate"},
        {id:"Sample_01_0029",species:"Human",source:"ENCODE",tissuetype:"Blood",Biosample:"Primary cell",date:"fibroblast-of-lung"},
        {id:"Sample_01_0030",species:"Human",source:"ENCODE",tissuetype:"Haematopoietic and lymphoid tissue",Biosample:"Cell line",date:"GM12878"},
        {id:"Sample_01_0031",species:"Human",source:"ENCODE",tissuetype:"Haematopoietic and lymphoid tissue",Biosample:"Cell line",date:"GM23338"},
        {id:"Sample_01_0033",species:"Human",source:"ENCODE",tissuetype:"Haematopoietic and lymphoid tissue",Biosample:"Cell line",date:"H9"},
        {id:"Sample_01_0034",species:"Human",source:"ENCODE",tissuetype:"Bone",Biosample:"Primary cell",date:"HCT116"},
        {id:"Sample_01_0036",species:"Human",source:"ENCODE",tissuetype:"Pancreas duct",Biosample:"Cell line",date:"HeLa-S3"},
        {id:"Sample_01_0037",species:"Human",source:"ENCODE",tissuetype:"Prostate",Biosample:"Cell line",date:"hepatocyte"},
        {id:"Sample_01_0038",species:"Human",source:"ENCODE",tissuetype:"Lung",Biosample:"Cell line",date:"HepG2"},
        {id:"Sample_01_0039",species:"Human",source:"ENCODE",tissuetype:"Embryo",Biosample:"In vitro differentiated cell",date:"K562"},
        {id:"Sample_01_0040",species:"Human",source:"ENCODE",tissuetype:"Prostate",Biosample:"Cell line",date:"Karpas-422"},
    ];

    // 初始化表格
    function renderTable(data) {
    const tbody = document.querySelector("#data-table tbody");
    tbody.innerHTML = data.map(item => `
            <tr>
                <td>${item.id}</td>
                <td>${item.species}</td>
                <td>${item.source}</td>
                <td>${item.tissuetype}</td>
                <td>${item.Biosample}</td>
                <td>${item.date}</td>
            </tr>
        `).join("");
}

    // 筛选逻辑
    let activeFilters = {
    species: null,
    source: null,
    tissuetype: null,
    Biosample: null,
    date:null
};

    document.querySelectorAll(".filter-list span").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const filterType = e.target.parentElement.parentElement.dataset.filter;
        const filterValue = e.target.dataset.value;

        // 更新筛选状态
        activeFilters[filterType] = activeFilters[filterType] === filterValue ? null : filterValue;

        // 高亮当前选中项
        document.querySelectorAll(`.filter-list[data-filter="${filterType}"] span`).forEach(el => {
            el.classList.toggle("active", el.dataset.value === filterValue && activeFilters[filterType] === filterValue);
        });

        // 应用筛选（支持多字段筛选）
        const filteredData = tableData.filter(item => {
            return Object.entries(activeFilters).every(([key, value]) =>
                value ? item[key] === value : true
            );
        });
        renderTable(filteredData);
    });
});

    // 首次渲染
    renderTable(tableData);
