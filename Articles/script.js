const explore = document.querySelector('.explore-more');
const art = document.querySelector('art1');

function exploreonclik() {
    art.classList.remove('hidden');

}

function menuToggle() {
    const toggleMenu = document.querySelector('.menu');
    toggleMenu.classList.toggle('active');
}