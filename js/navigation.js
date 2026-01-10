// Mobile Sidebar Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
            if (overlay) {
                overlay.classList.toggle('open');
            }
        });
    }
    
    // Close sidebar when clicking overlay
    if (overlay) {
        overlay.addEventListener('click', function() {
            sidebar.classList.remove('open');
            overlay.classList.remove('open');
        });
    }
    
    // Close sidebar when clicking a link (mobile only)
    if (window.innerWidth < 768) {
        const sidebarLinks = document.querySelectorAll('.sidebar a');
        sidebarLinks.forEach(link => {
            link.addEventListener('click', function() {
                sidebar.classList.remove('open');
                if (overlay) {
                    overlay.classList.remove('open');
                }
            });
        });
    }
    
    // Highlight active page in sidebar
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    
    sidebarLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 768) {
            sidebar.classList.remove('open');
            if (overlay) {
                overlay.classList.remove('open');
            }
        }
    });
});
