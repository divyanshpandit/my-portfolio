const sections = {
    about: "Cybersecurity Analyst | Python & AI Developer | Cloud & Linux Enthusiast. Passionate about creating secure, intelligent, and efficient systems.",
    skills: "Python | Cybersecurity | Machine Learning | Flask, JavaScript, HTML, CSS | Linux & Cloud Security",
    projects: "1. Honeypot_CyberSec\n2. PythonFirewall\n3. Neural Malware Detector\n4. Life-in-Weeks Timeline App",
    contact: "Email: o2400111@cce.iitmandi.ac.in\nGitHub: github.com/divyanshpandit\nLinkedIn: linkedin.com/in/divyanshpandit"
};

const main = document.querySelector('.main');
const header = document.querySelector('header');

document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', async (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href').substring(1);
        fadeOutMain();
        await delay(500);
        showTyping(target);
    });
});

function fadeOutMain() {
    header.style.display = 'none';
    document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
}

async function showTyping(section) {
    const display = document.createElement('pre');
    display.className = 'typingArea';
    display.textContent = '';
    main.appendChild(display);
    await typeText(display, sections[section]);
}

async function typeText(element, text) {
    element.textContent = '';
    for (let i = 0; i < text.length; i++) {
        element.textContent += text[i];
        await delay(40);
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
