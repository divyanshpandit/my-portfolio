const terminal = document.getElementById('terminal');

const content = {
  home: "Welcome to Divyanshu Pandit's Portfolio!\nCybersecurity Analyst | Python Developer | AI Enthusiast.",
  about: "About:\nPassionate cybersecurity professional skilled in network security, Python, and AI-based malware detection. SIEM Certified.",
  skills: "Skills:\n- Python\n- Cybersecurity\n- Linux\n- Machine Learning\n- Flask, JavaScript, HTML, CSS",
  projects: "Projects:\n1. AI Malware Detector\n2. Python Firewall\n3. Honeypot CyberSec\n4. Life-in-Weeks Timeline App",
  contact: "Contact:\nEmail: o2400111@cce.iitmandi.ac.in\nGitHub: divyanshpandit\nLinkedIn: divyanshpandit"
};

document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = e.target.getAttribute('data-section');
    typeText(content[section] || "Section not found.");
  });
});

async function typeText(text) {
  terminal.textContent = '';
  for (let i = 0; i < text.length; i++) {
    terminal.textContent += text[i];
    await new Promise(res => setTimeout(res, 15));
  }
}
