function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Local Development URL Fix (Live Server)
function getLocalPath(url) {
    let basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
    
    if (url.startsWith('/')) {
        url = basePath + url;
    }
    
    let hashIndex = url.indexOf('#');
    let hash = '';
    if (hashIndex !== -1) {
        hash = url.substring(hashIndex);
        url = url.substring(0, hashIndex);
    }
    
    let queryIndex = url.indexOf('?');
    let query = '';
    if (queryIndex !== -1) {
        query = url.substring(queryIndex);
        url = url.substring(0, queryIndex);
    }
    
    if (!url.endsWith('.html') && !url.endsWith('/')) {
        url = url + '.html';
    } else if (url.endsWith('/')) {
        url = url + 'index.html';
    }
    
    return url + query + hash;
}

function navigate(url) {
    if (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') {
        window.location.href = getLocalPath(url);
    } else {
        window.location.href = url;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') {
        document.querySelectorAll('a').forEach(a => {
            let href = a.getAttribute('href');
            if (href && href.startsWith('/')) {
                a.href = getLocalPath(href);
            }
        });
    }
});