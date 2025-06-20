const main = document.querySelector('.main');
const header = document.querySelector('header');

async function loadData() {
    const skills = await fetch('data/skills.json').then(res => res.json());
    const projects = await fetch('data/projects.json').then(res => res.json());
    const socials = await fetch('data/social.json').then(res => res.json());
    return { skills, projects, socials };
}

document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', async (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('href').substring(1);
        fadeOutMain();
        await delay(500);
        const data = await loadData();
        showTyping(target, data);
    });
});

function fadeOutMain() {
    header.style.display = 'none';
    document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
    const oldTyping = document.querySelector('.typingArea');
    if (oldTyping) oldTyping.remove();
}

async function showTyping(section, data) {
    const display = document.createElement('pre');
    display.className = 'typingArea';
    display.textContent = '';
    main.appendChild(display);

    let text = '';
    switch(section) {
        case 'about':
            text = "Cybersecurity Analyst | Python & AI Developer | Cloud & Linux Enthusiast.\nPassionate about creating secure and intelligent systems.";
            break;
        case 'skills':
            text = "Skills:\n" + data.skills.join('\n');
            break;
        case 'projects':
            text = "Projects:\n" + data.projects.map(p => `${p.name}: ${p.desc} [${p.link}]`).join('\n');
            break;
        case 'contact':
            text = "Contact:\n" + data.socials.map(s => `${s.platform}: ${s.username}`).join('\n');
            break;
        default:
            text = "Section not found!";
    }

    await typeText(display, text);
}

async function typeText(element, text) {
    element.textContent = '';
    for (let i = 0; i < text.length; i++) {
        element.textContent += text[i];
        await delay(20);
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
