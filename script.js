function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Local Development URL Fix (Live Server)
// Appends .html to clean URLs when running on local Live Server to prevent 404s,
// while keeping the exact clean URLs (e.g. /publications) in the HTML for production.
function navigate(url) {
    if (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') {
        if (url.includes('?')) {
            window.location.href = url.replace('?', '.html?');
        } else if (!url.includes('.html') && url !== '/') {
            window.location.href = url + '.html';
        } else {
            window.location.href = url;
        }
    } else {
        window.location.href = url;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') {
        document.querySelectorAll('a').forEach(a => {
            let href = a.getAttribute('href');
            if (href && href.startsWith('/') && !href.includes('.html') && !href.includes('#') && href !== '/') {
                a.href = href + '.html';
            }
        });
    }
});