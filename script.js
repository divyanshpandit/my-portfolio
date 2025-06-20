const terminal = document.getElementById('terminal');

const content = {
  hello: "Welcome to Divyanshu Pandit's Portfolio!\nCybersecurity Analyst | Python Developer | AI Enthusiast.",
  about: "About:\nPassionate cybersecurity professional skilled in network security, Python, and AI-based malware detection. SIEM Certified.",
  skills: "Skills:\n- Python\n- Cybersecurity\n- Linux\n- Machine Learning\n- Flask, JavaScript, HTML, CSS",
  projects: "Projects:\n1. AI Malware Detector\n2. Python Firewall\n3. Honeypot CyberSec\n4. Life-in-Weeks Timeline App",
  contact: "Contact:\nEmail: o2400111@cce.iitmandi.ac.in\nGitHub: github.com/divyanshpandit\nLinkedIn: linkedin.com/in/divyanshpandit"
};

document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', async e => {
    e.preventDefault();
    const raw = e.target.getAttribute('data-section');
    const section = raw.replace('_',''); // remove "_" to match content keys

    await fadeOut(terminal);
    await typeText(content[section] || "Section not found.");
    fadeIn(terminal);
  });
});

function fadeOut(element) {
  return new Promise(resolve => {
    element.style.opacity = 0;
    setTimeout(resolve, 500); // matches CSS transition time
  });
}

function fadeIn(element) {
  element.style.opacity = 1;
}

async function typeText(text) {
  terminal.textContent = '';
  for (let i = 0; i < text.length; i++) {
    terminal.textContent += text[i];
    await new Promise(res => setTimeout(res, 15));
  }
}
