var form = document.querySelector("#resume-form");
var resumeDisplayElement = document.querySelector("#resume-display");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var phone = document.querySelector("#phone").value;
    var education = document.querySelector("#education")
        .value;
    var expeience = document.querySelector("#experience")
        .value;
    var skills = document.querySelector("#skills").value;
    var resumeHTML = "\n  <h2><b>Resume</b></h2>\n  <h3>Personal Information</h3>\n  <p><b>Name : <b/><spam contenteditable=\"true\"> ".concat(name, " </span></p>\n  <p><b>Email : <b/><spam contenteditable=\"true\"> ").concat(email, " </span></p>\n  <p><b>Phone : <b/><spam contenteditable=\"true\"> ").concat(phone, " </span></p>\n\n  <h3>Education</h3>\n  <p contenteditable=\"true\"> ").concat(education, " </p>\n\n  <h3>Experience</h3>\n  <p contenteditable=\"true\">").concat(expeience, " </p>\n\n  <h3>Skills</h3>\n  <p contenteditable=\"true\">").concat(skills, " </p>\n  ");
    //Display the editable resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error("the resume display elemt is missing");
    }
});
