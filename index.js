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
    event.preventDefault(); // 阻止表单的默认提交行为
    alert("感谢您的留言！我们会尽快与您联系。"); // 显示弹窗信息

    // 清空表单内容
    this.reset();
});
