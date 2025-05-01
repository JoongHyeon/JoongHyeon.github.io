// 컴포넌트 로드 함수
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;

        // 헤더가 로드된 후 현재 페이지 메뉴 활성화
        if (elementId === 'header') {
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const menuLinks = document.querySelectorAll('.nav-links a');
            menuLinks.forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });
        }
    } catch (error) {
        console.error(`Error loading component: ${componentPath}`, error);
    }
}

// 페이지 로드 시 컴포넌트 로드
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header', 'components/header.html');
    loadComponent('footer', 'components/footer.html');
}); 