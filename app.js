const stickyButton = document.querySelector(".stickybtn");

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
}

stickyButton.addEventListener("click", scrollToTop);