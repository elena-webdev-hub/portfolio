
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('active');

    const isOpen = navigation.classList.contains('active');

    menuToggle.setAttribute('aria-expanded', isOpen);
});
const menuLinks = document.querySelectorAll('.navigation a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navigation.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', false);
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        navigation.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', false);
    }
});
