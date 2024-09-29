// Get references to form elements and output div
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;
const saveResumeButton = document.getElementById('save-resume') as HTMLButtonElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Get form data
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // Generate the resume content and make it editable
    resumeOutput.innerHTML = `
        <h2 contenteditable="true">${name}</h2>
        <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
        <p><strong>Phone:</strong> <span contenteditable="true">${phone}</span></p>
        <h3>Education</h3>
        <p contenteditable="true">${education}</p>
        <h3>Work Experience</h3>
        <p contenteditable="true">${experience}</p>
        <h3>Skills</h3>
        <p contenteditable="true">${skills.split(',').map(skill => `<span>${skill.trim()}</span>`).join(', ')}</p>
    `;
});

// Handle saving edited resume back to form
saveResumeButton.addEventListener('click', () => {
    const name = resumeOutput.querySelector('h2')?.textContent || '';
    const email = resumeOutput.querySelector('span:nth-of-type(1)')?.textContent || '';
    const phone = resumeOutput.querySelector('span:nth-of-type(2)')?.textContent || '';
    const education = resumeOutput.querySelector('p:nth-of-type(3)')?.textContent || '';
    const experience = resumeOutput.querySelector('p:nth-of-type(4)')?.textContent || '';
    const skills = resumeOutput.querySelector('p:nth-of-type(5)')?.textContent || '';

    // Update the form with edited values
    (document.getElementById('name') as HTMLInputElement).value = name;
    (document.getElementById('email') as HTMLInputElement).value = email;
    (document.getElementById('phone') as HTMLInputElement).value = phone;
    (document.getElementById('education') as HTMLInputElement).value = education;
    (document.getElementById('experience') as HTMLTextAreaElement).value = experience;
    (document.getElementById('skills') as HTMLInputElement).value = skills;
});
