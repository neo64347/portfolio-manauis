(function () {
    var btn = document.getElementById('btnScrollToTop');
    var nav = document.querySelector('.site-nav');
    var navCollapse = document.getElementById('mainNav');
    var navLinks = document.querySelectorAll('.site-nav .nav-link');
    var sections = Array.prototype.map.call(navLinks, function (link) {
        return document.querySelector(link.getAttribute('href'));
    });

    function onScroll() {
        var y = window.scrollY;
        btn.classList.toggle('show', y > 400);
        nav.classList.toggle('scrolled', y > 20);

        // Highlight the nav link for the section currently in view
        var current = -1;
        sections.forEach(function (section, i) {
            if (section && section.getBoundingClientRect().top <= 120) current = i;
        });
        navLinks.forEach(function (link, i) {
            link.classList.toggle('active', i === current);
        });
    }

    btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Close the mobile menu after picking a link
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navCollapse.classList.contains('show') && window.bootstrap) {
                bootstrap.Collapse.getOrCreateInstance(navCollapse).hide();
            }
        });
    });

    var year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
})();
