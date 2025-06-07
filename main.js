document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.getElementById("scroll-button");
    
    if (scrollBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            }
        });

        scrollBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});