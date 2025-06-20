const terminal = document.getElementById('terminal');

const content = {
  hello: `Welcome to Divyanshu Pandit's Portfolio!
Cybersecurity Analyst | Python Developer | AI Enthusiast.`,

  about: `About:
Passionate cybersecurity professional skilled in network security, Python, and AI-based malware detection. SIEM Certified.`,

  skills: `Skills:
- Python
- Cybersecurity
- Linux
- Machine Learning
- Flask, JavaScript, HTML, CSS`,

  projects: `Projects:

1. AI Malware Detector
   GitHub: https://github.com/divyanshpandit/AI-Malware-detection-

2. Python Firewall
   GitHub: https://github.com/divyanshpandit/PythonFirewall

3. Honeypot CyberSec
   GitHub: https://github.com/divyanshpandit/honeypot_cybersec

4. Life-in-Weeks Timeline App
   GitHub: https://github.com/yourname/life-in-weeks`,

  education: `Education:

- Bachelor of Science
  CSJM University, Kanpur

- Minor in Computer Science and Engineering
  Indian Institute of Technology, Mandi | Expected 2025 (9.3 SGPA last semester)

Relevant Coursework:
AI & ML, Computer Networks, Cloud Computing, Cybersecurity Principles`,

  resume: `Downloading Resume...
If not auto-downloaded, click here: Updated_Resume_Divyanshu_Dwivedi.docx`,

  contact: `Contact:

Email: o2400111@cce.iitmandi.ac.in
GitHub: https://github.com/divyanshpandit
LinkedIn: https://linkedin.com/in/divyanshpandit`
};

document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', async e => {
    e.preventDefault();
    const raw = e.target.getAttribute('data-section');
    const section = raw.replace('_','');

    await fadeOut(terminal);
    if(section in content){
      await typeText(content[section]);
      fadeIn(terminal);

      if(section === 'resume'){
        setTimeout(() => {
          window.open('assets/Updated_Resume_Divyanshu_Dwivedi.docx', '_blank');
        }, 1000);
      }
    } else {
      await typeText("Loading section...");
      fadeIn(terminal);
    }
  });
});

document.getElementById('homeLink').addEventListener('click', async (e) => {
  e.preventDefault();
  await fadeOut(terminal);
  await typeText(content.hello);
  fadeIn(terminal);
});

function fadeOut(element) {
  return new Promise(resolve => {
    element.style.opacity = 0;
    setTimeout(resolve, 500);
  });
}

function fadeIn(element) {
  element.style.opacity = 1;
}

async function typeText(text) {
  terminal.textContent = '';
  const lines = text.split('\n');
  for (let line of lines) {
    for (let char of line) {
      terminal.textContent += char;
      await new Promise(res => setTimeout(res, 15));
    }
    terminal.textContent += '\n';
  }
}
