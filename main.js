document.addEventListener("DOMContentLoaded", function() {
    const fixedMenu = document.querySelector(".fixed-menu");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (fixedMenu) {
        fixedMenu.addEventListener('click', handleMenuClick);
    }
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', handleMenuClick);
    }

    function handleMenuClick(event) {
        let clickTarget = event.target;
        if (clickTarget.classList.contains('nav-link')) {
            let activeButtons = document.querySelectorAll('.nav-link.active');
            activeButtons.forEach(btn => btn.classList.remove('active'));
            clickTarget.classList.add('active');
            if (mobileMenu && !mobileMenu.classList.contains('hide')) {
                mobileMenu.classList.add('hide');
                document.body.classList.remove("off-scroll");
            }
        }
    }

    const mobileBtn = document.querySelector(".mobile-button");
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener("click", function() {
            mobileMenu.classList.toggle("hide");
            if (!mobileMenu.classList.contains('hide')) {
                document.body.classList.add("off-scroll");
            } else {
                document.body.classList.remove("off-scroll");
            }
        });
    }

    window.addEventListener('scroll', function() {
        let h = document.documentElement.clientHeight;
        let currentClass = '.main-link';
        
        if (window.scrollY >= h * 3.8) {
            currentClass = '.comments-link';
        } else if (window.scrollY >= h * 2.8) {
            currentClass = '.works-link';
        } else if (window.scrollY >= h * 1.8) {
            currentClass = '.skills-link';
        } else if (window.scrollY >= h * 0.8) {
            currentClass = '.about-link';
        } else {
            currentClass = '.main-link';
        }

        let targetLink = document.querySelector(currentClass);
        if (targetLink && !targetLink.classList.contains('active')) {
            let currentActive = document.querySelectorAll('.nav-link.active');
            currentActive.forEach(el => el.classList.remove('active'));
            let linksToActivate = document.querySelectorAll(currentClass);
            linksToActivate.forEach(el => el.classList.add('active'));
        }
    });
});
