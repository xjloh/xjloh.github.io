function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');

    if (menu && icon) {
        menu.classList.toggle('open');
        icon.classList.toggle('open');
    }
}

// For toggling dark mode.
const button = document.querySelector('.theme-btn');
const githubIcon = document.querySelector('.github-icon');
const githubIconDark = document.querySelector('.github-icon-dark');
const educationLight = document.querySelector('.education-light');
const educationDark = document.querySelector('.education-dark');
const experienceLight = document.querySelector('.experience-light');
const experienceDark = document.querySelector('.experience-dark');

if (button) {
    button.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        githubIcon ? githubIcon.classList.toggle('hide') : '';
        githubIconDark ? githubIconDark.classList.toggle('hide') : '';
        educationLight ? educationLight.classList.toggle('hide') : '';
        educationDark ? educationDark.classList.toggle('hide') : '';
        experienceLight ? experienceLight.classList.toggle('hide') : '';
        experienceDark ? experienceDark.classList.toggle('hide') : '';
    });
}