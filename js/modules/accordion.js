export function accordion() {
    $('.accordion-item').click((e)=> {
        const arrayElems = Array.from(e.target.children);
        const findBodyElem = arrayElems.find((el) => el.className.includes('accordion-body'))
        const findHeaderElem = arrayElems.find((el) => el.className.includes('accordion-header'))
        if (findHeaderElem) {
            findHeaderElem?.classList.toggle('show')
        };
        if (findBodyElem) {
            if (findBodyElem.classList.contains('show')) {
                findBodyElem.style.maxHeight = null;
                findBodyElem.classList.remove('show');
            } else {
                findBodyElem.style.maxHeight = findBodyElem.scrollHeight * 2 + "px";
                findBodyElem.classList.add('show');
            }
        };
    });
};