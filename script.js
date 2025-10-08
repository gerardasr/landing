const links = document.querySelector('.class-box');
const covers = document.querySelector('.covers');
const announcements = document.querySelectorAll('.announcements');

links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const index = links.dataset.index;

        announcements.style.display = 'none';

        const target = document.querySelector('.covers[data-index="${index}"]');
        if (target) target.style.display = 'flex';
    });


})