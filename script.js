const terminal = document.getElementById('terminal');

const content = {
  hello: "Welcome to Divyanshu Pandit's Portfolio!\nCybersecurity Analyst | Python Developer | AI Enthusiast.",
  about: "About:\nPassionate cybersecurity professional skilled in network security, Python, and AI-based malware detection. SIEM Certified. Completed multiple TryHackMe rooms, EC-Council SIEM Certified, and Advent of Cyber.",
  skills: "Skills:\n- Python\n- Cybersecurity (Network & Cloud)\n- Linux\n- Machine Learning\n- Flask, JavaScript, HTML, CSS\n- Malware Analysis & YARA Rules\n- SIEM, OpenCTI, Threat Intel",
  projects: "Projects:\n\n1. AI Malware Detector - Classify files using Neural Networks.\n2. Python Firewall - Real-time packet filtering.\n3. Honeypot CyberSec - Research honeypot setup & attack classification.\n4. Life-in-Weeks Timeline App - Flask-based event timeline web app.",
  contact: "Contact:\n\nEmail: o2400111@cce.iitmandi.ac.in\nGitHub: github.com/divyanshpandit\nLinkedIn: linkedin.com/in/divyanshpandit"
};

document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const raw = e.target.getAttribute('data-section'); // e.g. "_hello"
    const section = raw.replace('_','');               // convert "_hello" => "hello"
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
