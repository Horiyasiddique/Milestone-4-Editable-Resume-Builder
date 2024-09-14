const form = document.querySelector("#resume-form") as HTMLFormElement;
const resumeDisplayElement = document.querySelector(
  "#resume-display"
) as HTMLDivElement;

form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const name = (document.querySelector("#name") as HTMLInputElement).value;
  const email = (document.querySelector("#email") as HTMLInputElement).value;
  const phone = (document.querySelector("#phone") as HTMLInputElement).value;
  const education = (document.querySelector("#education") as HTMLInputElement)
    .value;
  const expeience = (document.querySelector("#experience") as HTMLInputElement)
    .value;
  const skills = (document.querySelector("#skills") as HTMLInputElement).value;

  const resumeHTML = `
  <h2><b>Resume</b></h2>
  <h3>Personal Information</h3>
  <p><b>Name : <b/><spam contenteditable="true"> ${name} </span></p>
  <p><b>Email : <b/><spam contenteditable="true"> ${email} </span></p>
  <p><b>Phone : <b/><spam contenteditable="true"> ${phone} </span></p>

  <h3>Education</h3>
  <p contenteditable="true"> ${education} </p>

  <h3>Experience</h3>
  <p contenteditable="true">${expeience} </p>

  <h3>Skills</h3>
  <p contenteditable="true">${skills} </p>
  `;

  //Display the editable resume
  if (resumeDisplayElement) {
    resumeDisplayElement.innerHTML = resumeHTML;
  } else {
    console.error("the resume display elemt is missing");
  }
});
