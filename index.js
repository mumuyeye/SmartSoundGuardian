document.addEventListener("DOMContentLoaded", function() {
    // 获取浏览次数
    let visitCount = localStorage.getItem('visitCount');

    // 如果是第一次访问，初始化计数器
    if (!visitCount) {
        visitCount = 371;
    }

    // 增加浏览次数
    visitCount++;

    // 将新的计数保存到本地存储中
    localStorage.setItem('visitCount', visitCount);

    // 在页面上显示浏览次数
    document.getElementById('visit-count').textContent = '浏览次数：' + visitCount;
});

document.getElementById("learnMoreBtn").addEventListener("click", function() {
    const moreInfo = document.getElementById("moreInfo");
    if (moreInfo.classList.contains("hidden")) {
        moreInfo.classList.remove("hidden");
        this.textContent = "隐藏信息";
    } else {
        moreInfo.classList.add("hidden");
        this.textContent = "了解更多";
    }
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("感谢您的留言！我们会尽快与您联系。");
});

document.getElementById("modelSelect").addEventListener("change", function() {
    const modelResult = document.getElementById("modelResult");
    const selectedModel = this.value;

    let resultText = "";
    switch (selectedModel) {
        case "model1":
            resultText = "模型 A：\n识别率: 85%\n误报率: 7%\n适用于低复杂度环境的基础防护。";
            break;
        case "model2":
            resultText = "模型 B：\n识别率: 90%\n误报率: 5%\n适用于中等复杂度环境，提供更好的平衡。";
            break;
        case "model3":
            resultText = "模型 C：\n识别率: 96%\n误报率: 3%\n适用于高复杂度环境的高级防护，建议用于关键领域。";
            break;
        default:
            resultText = "选择一个模型以查看其详细性能结果。";
    }

    modelResult.innerText = resultText;
});
