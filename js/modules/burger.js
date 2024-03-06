export function burger() {
    $('header .headerBlock .btn-nav .burger-menu img').on('click', function() {
        console.log(111);
        $('.menu-open').addClass('active')
    })
    $('.menu-open .close').on('click', function() {
        $('.menu-open').removeClass('active')
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