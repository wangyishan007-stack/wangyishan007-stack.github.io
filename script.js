// 复制地址功能
document.querySelector('.copy-btn').addEventListener('click', function() {
    const addressInput = document.querySelector('.token-address input');
    addressInput.select();
    document.execCommand('copy');
    
    // 临时更改按钮文字
    const originalText = this.textContent;
    this.textContent = '✓';
    setTimeout(() => {
        this.textContent = originalText;
    }, 2000);
});

// 统计数据切换
document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // 这里可以添加实际的数据切换逻辑
        console.log('切换到:', this.textContent);
    });
});

// View All Tokens 按钮
document.querySelector('.view-all-btn').addEventListener('click', function() {
    alert('演示版本：实际应用中这里会展开显示所有代币列表');
});

// 按钮点击提示
document.querySelectorAll('.btn').forEach(btn => {
    if (!btn.classList.contains('copy-btn') && !btn.classList.contains('toggle-btn') && !btn.classList.contains('view-all-btn')) {
        btn.addEventListener('click', function() {
            const btnText = this.textContent.trim();
            alert(`演示版本：点击了 "${btnText}" 按钮`);
        });
    }
});

// 数字动画效果（可选）
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value.toLocaleString();
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// 页面加载动画
window.addEventListener('load', function() {
    console.log('claunch 演示版本已加载');
    console.log('这是一个纯前端演示，不包含实际的区块链功能');
});
