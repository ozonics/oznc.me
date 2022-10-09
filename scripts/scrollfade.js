const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// let scrollText = document.querySelector(".scroll-text");

// window.onscroll = () => {
//     let pos = window.scrollY;
//     // console.log(pos);
//     scrollText.style.left =  `-${pos/2}px`;
// }