export function faq() {
    $(document).ready(function(){
        $('.accordion-item .accordion-header .title').click(function(){
            if ($(this).hasClass('.black')) {
                $(this).removeClass('.black');
            } else {
                $(this).addClass('.black');
            }
        });
    });
}