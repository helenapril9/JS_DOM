function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function revealOnScroll() {
        const reveals = document.querySelectorAll('.reveal');

        for (let i = 0; i < reveals.length; i++) {
            if (isInViewport(reveals[i])) {
                reveals[i].classList.add('reveal_active');
            } else {
                reveals[i].classList.remove('reveal_active');
            }
        }
    }

    window.addEventListener('scroll', revealOnScroll);