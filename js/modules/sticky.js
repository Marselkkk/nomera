export function sticky() {
    let prevScrollPos = window.pageYOffset;

    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        let header = document.querySelector("header");

        if (prevScrollPos > currentScrollPos) {
            header.classList.remove("sticky");
        } else {
            header.classList.add("sticky");
        }
        prevScrollPos = currentScrollPos;
    };
}