const mobileMenu = document.getElementById('mobile-menu');
const hamburgerBtn = document.getElementById('hamburger-button');
const button = document.querySelectorAll('#btn');
const mobileIn = document.querySelectorAll('#mobile-menu a')
const lgBtn = document.querySelectorAll('#lg-btn');
const drop = document.querySelectorAll('#dropdown a');

let count = 0;
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

prevBtn.style.display = "none";

function changeSlide(direction){
    const img = document.querySelectorAll('#carousal-container img');
    const total = img.length;
    
    count = (count + direction + total) % total;
    if (count === 0) {
        prevBtn.style.display = "none";
    } else if (count === total-1){
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "block";
        prevBtn.style.display = "block";
    }
    const carousal = document.querySelector('#carousal-container');
    carousal.style.transform = `translateX(-${count * 100}%)`;
};



// initApp function is for mobile menu

const initApp = () => {    
    const toggleMenu = () => {
        hamburgerBtn.classList.toggle('toggle-btn');
        mobileMenu.classList.toggle('w-0');
        mobileMenu.classList.toggle('w-[250px]');
    }
    mobileIn.forEach((m) => {
        m.addEventListener('click', toggleMenu);
    })
    hamburgerBtn.addEventListener('click', toggleMenu);    
}

document.addEventListener('DOMContentLoaded', initApp)

// 28 - 35  line is for dropdown for mobile menu

button.forEach((btn) => {
    btn.addEventListener('click', () => {
        const next = btn.nextElementSibling;
        next.classList.toggle('flex');
        next.classList.toggle('hidden');
        console.log(next)
    })
})

// 39 - 51 line is for dropdown for larger screens

lgBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        const next = btn.nextElementSibling;
        next.classList.toggle('hidden');
    })
})

drop.forEach((d) => {
    d.addEventListener('click', () => {
        const parent = d.parentElement;
        parent.classList.toggle('hidden');
    })
})

const year = document.getElementById('year');
const current = new Date().getFullYear();

year.innerText = current;