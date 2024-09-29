// Get references to form elements and output div
var form = document.getElementById('resume-form');
var resumeOutput = document.getElementById('resume-output');
var saveResumeButton = document.getElementById('save-resume');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate the resume content and make it editable
    resumeOutput.innerHTML = "\n        <h2 contenteditable=\"true\">".concat(name, "</h2>\n        <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><strong>Phone:</strong> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        <h3>Education</h3>\n        <p contenteditable=\"true\">").concat(education, "</p>\n        <h3>Work Experience</h3>\n        <p contenteditable=\"true\">").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(skills.split(',').map(function (skill) { return "<span>".concat(skill.trim(), "</span>"); }).join(', '), "</p>\n    ");
});
// Handle saving edited resume back to form
saveResumeButton.addEventListener('click', function () {
    var _a, _b, _c, _d, _e, _f;
    var name = ((_a = resumeOutput.querySelector('h2')) === null || _a === void 0 ? void 0 : _a.textContent) || '';
    var email = ((_b = resumeOutput.querySelector('span:nth-of-type(1)')) === null || _b === void 0 ? void 0 : _b.textContent) || '';
    var phone = ((_c = resumeOutput.querySelector('span:nth-of-type(2)')) === null || _c === void 0 ? void 0 : _c.textContent) || '';
    var education = ((_d = resumeOutput.querySelector('p:nth-of-type(3)')) === null || _d === void 0 ? void 0 : _d.textContent) || '';
    var experience = ((_e = resumeOutput.querySelector('p:nth-of-type(4)')) === null || _e === void 0 ? void 0 : _e.textContent) || '';
    var skills = ((_f = resumeOutput.querySelector('p:nth-of-type(5)')) === null || _f === void 0 ? void 0 : _f.textContent) || '';
    // Update the form with edited values
    document.getElementById('name').value = name;
    document.getElementById('email').value = email;
    document.getElementById('phone').value = phone;
    document.getElementById('education').value = education;
    document.getElementById('experience').value = experience;
    document.getElementById('skills').value = skills;
});
