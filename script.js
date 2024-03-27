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

// For scrolling to different sections of a page
const scrollToProfile = document.querySelector('.my-logo');
const profileSection = document.querySelector('section#profile');
if (scrollToProfile && profileSection) {
    scrollToProfile.addEventListener('click', () => {
        profileSection.scrollIntoView({behavior: "smooth"});
    });
}

const scrollToAbout = document.querySelector('#scroll-about');
const aboutSection = document.querySelector('section#about');
if (scrollToAbout && aboutSection) {
    scrollToAbout.addEventListener('click', () => {
        aboutSection.scrollIntoView({behavior: "smooth"});
    });
}

const scrollToContact = document.querySelector('#scroll-contact');
const contactSection = document.querySelector('section#contact');
if (scrollToContact && contactSection) {
    scrollToContact.addEventListener('click', () => {
        contactSection.scrollIntoView({behavior: "smooth"});
    });
}