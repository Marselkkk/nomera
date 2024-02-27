export function yakor() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            const targetBlockId = this.getAttribute('href').substring(1);
            const targetBlock = document.getElementById(targetBlockId);
            if (targetBlock) {
                const targetOffsetTop = targetBlock.offsetTop - 200;
                
                window.scrollTo({
                    top: targetOffsetTop,
                });
            }
            console.log(121331);
        });
    });
}