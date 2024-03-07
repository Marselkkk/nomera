export function burger() {
    document.addEventListener('DOMContentLoaded', function() {
        const burgerIcon = document.getElementById('burgerIcon');
        const burgerMenu = document.getElementById('burgerMenu');
        
        burgerIcon.addEventListener('click', function() {
            burgerMenu.classList.toggle('active');
        });

        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                burgerMenu.classList.remove('active');
            }
        });

        window.addEventListener('scroll', function() {
            burgerMenu.classList.remove('active');
        });
        document.getElementById("burgerIcon").addEventListener("click", function() {
            this.classList.toggle("rotate");
        });

        document.addEventListener("scroll", function() {
            let element = document.getElementById("burgerIcon");
            if (element.classList.contains("rotate")) {
                element.classList.remove("rotate");
            }
        });
    });

    $(document).ready(function(){
        function checkWidth() {
            let windowWidth = $(window).width();
            if (windowWidth > 768) {
                $(".menu-open").removeClass("active");
            }
        }
        
        checkWidth();

        $(window).resize(function() {
            checkWidth();
        });
    });
}