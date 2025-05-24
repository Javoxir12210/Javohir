document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            smoothScrollTo(target.offsetTop, 1200);
        }
    });
});

function smoothScrollTo(endY, duration) {
    const startY = window.scrollY || window.pageYOffset;
    const distance = endY - startY;
    let startTime;

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutQuad(progress);
        window.scrollTo(0, startY + distance * ease);
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    requestAnimationFrame(animation);
}

document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function (e) {
        // Исключаем клик по ссылке "Батилниш учун"
        if (e.target.tagName === 'A') return;

        const content = this.querySelector('.service-card-content');
        content.classList.toggle('open');
    });
});

