// Typing Animation
const typedText = "Welcome to my PyCharm-themed Portfolio!";
let index = 0;
function type() {
  if (index < typedText.length) {
    document.getElementById("typed").innerHTML += typedText.charAt(index);
    index++;
    setTimeout(type, 80);
  }
}
window.onload = type;

// Load JSON data
async function loadData() {
  const skills = await fetch('data/skills.json').then(res => res.json());
  const projects = await fetch('data/projects.json').then(res => res.json());
  const socials = await fetch('data/social.json').then(res => res.json());

  const skillsList = document.getElementById('skills-list');
  skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);
  });

  const projectsList = document.getElementById('projects-list');
  projects.forEach(proj => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${proj.name}</strong>: ${proj.desc} [<a href="${proj.link}" target="_blank">GitHub</a>]`;
    projectsList.appendChild(li);
  });

  const socialList = document.getElementById('social-list');
  socials.forEach(soc => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${soc.platform}</strong>: <a href="${soc.link}" target="_blank">${soc.username}</a>`;
    socialList.appendChild(li);
  });
}

loadData();
