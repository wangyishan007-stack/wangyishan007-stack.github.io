// 简单的交互功能演示

// 连接钱包按钮
document.querySelector('.connect-wallet').addEventListener('click', function() {
    alert('演示版本：实际应用中这里会连接 MetaMask 等 Web3 钱包');
});

// 启动代币按钮
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.textContent.includes('启动') || this.textContent.includes('开始')) {
            alert('演示版本：实际应用中这里会打开代币发行表单');
        }
    });
});

// 浏览代币按钮
document.querySelectorAll('.btn-secondary').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.textContent.includes('浏览')) {
            alert('演示版本：实际应用中这里会跳转到代币列表页面');
        }
    });
});

// 查看详情按钮
document.querySelectorAll('.token-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('演示版本：实际应用中这里会显示代币的详细信息和交易界面');
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 添加滚动动画效果
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 为卡片添加动画
document.querySelectorAll('.token-card, .feature-card, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

console.log('AgentLaunch 演示版本已加载');
console.log('注意：这是一个纯前端演示,不包含任何真实的区块链功能');
