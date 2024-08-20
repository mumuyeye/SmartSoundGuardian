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
