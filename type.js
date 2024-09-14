// // Function to handle form submission
// document.getElementById('resumeForm')?.addEventListener('submit', function (event: Event) {
//     event.preventDefault();
var _a;
//     // Get form values
//     const pic = (document.getElementById('pic') as HTMLInputElement).value;
//     const name = (document.getElementById('name') as HTMLInputElement).value;
//     const email = (document.getElementById('email') as HTMLInputElement).value;
//     const number = (document.getElementById('number') as HTMLInputElement).value;
//     const address = (document.getElementById('address') as HTMLInputElement).value;
//     const education = (document.getElementById('education') as HTMLTextAreaElement).value;
//     const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
//     const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
//     // Validation
//     let errorMessage = '';
//     if (!pic) errorMessage += 'pic is required.\n';
//     if (!name) errorMessage += 'Name is required.\n';
//     if (!email) errorMessage += 'Email is required.\n';
//     if (!address) errorMessage += 'Address is required.\n';
//     if (!education) errorMessage += 'Education is required.\n';
//     if (!experience) errorMessage += 'Experience is required.\n';
//     if (!skills) errorMessage += 'Skills are required.\n';
//     if (errorMessage) {
//         alert(errorMessage); // Show error messages
//         return;
//     }
//     // Generate the resume HTML
//     const generatedResume = `
//         <h2>Generated Resume</h2>
//         <p><strong>Profile picture:</strong> ${pic}</p>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Number:</strong> ${number}</p>
//         <p><strong>Address:</strong> ${address}</p>
//         <p><strong>Education:</strong> ${education}</p>
//         <p><strong>Work Experience:</strong> ${experience}</p>
//         <p><strong>Skills:</strong> ${skills}</p>
//     `;
//     // Display the generated resume
//     const resumeContainer = document.getElementById('generatedResume') as HTMLDivElement;
//     resumeContainer.innerHTML = generatedResume;
// });
// Listen for form submission
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault(); // Prevent form submission from refreshing the page
    // Get input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var picFile = (_a = document.getElementById('pic').files) === null || _a === void 0 ? void 0 : _a[0];
    // Profile picture (if available)
    var picURL = '';
    if (picFile) {
        picURL = URL.createObjectURL(picFile); // Create URL for the picture file
    }
    // Generate the resume HTML
    var resumeHTML = "\n        <div class=\"resume-container\">\n            <div class=\"left-section\">\n                <img src=\"".concat(picURL, "\" alt=\"Profile Picture\" class=\"profile-pic\"/>\n                <h2>").concat(name, "</h2>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone:</strong> ").concat(number, "</p>\n                <p><strong>Address:</strong> ").concat(address, "</p>\n            </div>\n            <div class=\"right-section\">\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n                <h3>Work Experience</h3>\n                <p>").concat(experience, "</p>\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n            </div>\n        </div>\n    ");
    // Display the generated resume
    var resumeContainer = document.getElementById('generatedResume');
    resumeContainer.innerHTML = resumeHTML;
});
