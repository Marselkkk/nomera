export function faq() {
    $(document).ready(function(){
        $('.faqSection .faqBlock .questionMenu .accordion-item').click(function(){
            if ($(this).hasClass('black')) {
                $(this).removeClass('black');
            } else {
                $(this).addClass('black');
            }
        });
    });
}