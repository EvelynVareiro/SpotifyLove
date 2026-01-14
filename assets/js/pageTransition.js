const transition = document.querySelector('.page-transition');
const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('click', e => {
        const href = link.getAttribute('href');

        // ignora links vazios ou âncoras
        if (!href || href.startsWith('#')) return;

        e.preventDefault();
        transition.classList.add('active');

        setTimeout(() => {
            window.location.href = href;
        }, 600);
    });
});
