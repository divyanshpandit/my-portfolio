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
    const section = e.target.getAttribute('data-section');
    
    if(content.hasOwnProperty(section)){
      // Immediately start typing new content (no flicker)
      await typeText(content[section]);

      if(section === 'resume'){
        setTimeout(() => {
          window.open('assets/Updated_Resume_Divyanshu_Dwivedi.docx', '_blank');
        }, 500);
      }
    } else {
      await typeText("Section not found.");
    }
  });
});

document.getElementById('homeLink').addEventListener('click', async (e) => {
  e.preventDefault();
  await typeText(content.hello);
});

async function typeText(text) {
  terminal.textContent = ''; // clear without fade/flicker
  const lines = text.split('\n');
  for (const line of lines) {
    for (const char of line) {
      terminal.textContent += char;
      await new Promise(res => setTimeout(res, 10));
    }
    terminal.textContent += '\n';
  }
}
