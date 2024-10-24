function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    const hamburger = document.querySelector('#hamburger-nav');

    if (menu && icon && hamburger) {
        menu.classList.toggle('open');
        icon.classList.toggle('open');
        hamburger.classList.toggle('open');
    }
}

// For toggling dark mode.
const themeButton = document.querySelector('.theme-btn');
const githubIcon = document.querySelector('.github-icon');
const githubIconDark = document.querySelector('.github-icon-dark');
const educationLight = document.querySelector('.education-light');
const educationDark = document.querySelector('.education-dark');
const experienceLight = document.querySelector('.experience-light');
const experienceDark = document.querySelector('.experience-dark');

document.querySelectorAll('.theme-btn').forEach( $element => {
    $element.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        githubIcon ? githubIcon.classList.toggle('hide') : '';
        githubIconDark ? githubIconDark.classList.toggle('hide') : '';
        educationLight ? educationLight.classList.toggle('hide') : '';
        educationDark ? educationDark.classList.toggle('hide') : '';
        experienceLight ? experienceLight.classList.toggle('hide') : '';
        experienceDark ? experienceDark.classList.toggle('hide') : '';
    });
});

// For scrolling to different sections of a page
const profileSection = document.querySelector('section#profile');
if (profileSection) {
    document.querySelectorAll('.my-logo').forEach($element => {
        $element.addEventListener('click', () => {
            profileSection.scrollIntoView({behavior: "smooth"});
        });
    });
}

const aboutSection = document.querySelector('section#about');
if (aboutSection) {
    document.querySelectorAll('.scroll-about').forEach($element => {
        $element.addEventListener('click', () => {
            aboutSection.scrollIntoView({behavior: "smooth"});
        });
    });
}

const scrollToContact = document.querySelector('#scroll-contact');
const contactSection = document.querySelector('section#contact');
if (contactSection) {
    document.querySelectorAll('.scroll-contact').forEach($element => {
        $element.addEventListener('click', () => {
            contactSection.scrollIntoView({behavior: "smooth"});
        });
    });
}

function scrollToSection(sectionId) {
    var section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// For expanding/shrinking experience container when clicked
document.querySelectorAll('.experience-container').forEach( $element => {
    $element.addEventListener('click', () => {
        const arrow = $element.querySelector('.expand-indicator');
        if (arrow) {
            arrow.classList.toggle('expand');
        }

        const details = $element.querySelector('.experience-details');
        if (details) {
            details.classList.toggle('hide');
        }
    })
});

// For opening/closing dropdown for resume in mobile view
const resumeMobile = document.querySelector('.resume-dropdown-mobile');
resumeMobile.addEventListener('click', () => {
    const arrow = resumeMobile.querySelector('.resume-expand-indicator');
    if (arrow) {
        arrow.classList.toggle('expand');
    }

    const resumes = resumeMobile.querySelector('.dropdown-content');
    if (resumes) {
        resumes.classList.toggle('hide');
    }
});

// For handling the submission of email web3form, according to https://web3forms.com/platforms/javascript-contact-form
const emailForm = document.getElementById('email-form');
const result = document.getElementById('result');
if (emailForm) {
    emailForm.addEventListener('submit', event => {
        const formData = new FormData(emailForm);
        event.preventDefault();

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        result.innerHTML = "Please wait..."

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            emailForm.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
    })
}