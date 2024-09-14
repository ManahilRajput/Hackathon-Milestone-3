// // Function to handle form submission
// document.getElementById('resumeForm')?.addEventListener('submit', function (event: Event) {
//     event.preventDefault();

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
document.getElementById('resumeForm')?.addEventListener('submit', function (event: Event) {
    event.preventDefault(); // Prevent form submission from refreshing the page

    // Get input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const number = (document.getElementById('number') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    
    const picFile = (document.getElementById('pic') as HTMLInputElement).files?.[0];

    // Profile picture (if available)
    let picURL = '';
    if (picFile) {
        picURL = URL.createObjectURL(picFile); // Create URL for the picture file
    }

    // Generate the resume HTML
    const resumeHTML = `
        <div class="resume-container">
            <div class="left-section">
                <img src="${picURL}" alt="Profile Picture" class="profile-pic"/>
                <h2>${name}</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${number}</p>
                <p><strong>Address:</strong> ${address}</p>
            </div>
            <div class="right-section">
                <h3>Education</h3>
                <p>${education}</p>
                <h3>Work Experience</h3>
                <p>${experience}</p>
                <h3>Skills</h3>
                <p>${skills}</p>
            </div>
        </div>
    `;

    // Display the generated resume
    const resumeContainer = document.getElementById('generatedResume') as HTMLDivElement;
    resumeContainer.innerHTML = resumeHTML;
});
