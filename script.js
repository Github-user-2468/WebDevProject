document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector('.side-menu');
    const footer = document.getElementById('footer');
    const headerHeight = 70; // your header height

    function preventFooterOverlap() {
        if (!sidebar || !footer) return;

        const sidebarHeight = sidebar.offsetHeight;
        const footerTop = footer.getBoundingClientRect().top + window.scrollY;
        const sidebarBottomWhenFixed = window.scrollY + headerHeight + sidebarHeight;

        if (sidebarBottomWhenFixed > footerTop) {
            // Switch to absolute positioning just before it hits the footer
            sidebar.style.position = 'absolute';
            sidebar.style.top = (footerTop - sidebarHeight) + 'px';
        } else {
            // Normal fixed behavior
            sidebar.style.position = 'fixed';
            sidebar.style.top = headerHeight + 'px';
        }
    }

    // Run on scroll, resize, and load
    window.addEventListener('scroll', preventFooterOverlap);
    window.addEventListener('resize', preventFooterOverlap);
    preventFooterOverlap();
});