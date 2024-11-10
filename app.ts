const form = document.getElementById("resumeform") as HTMLFormElement;
const nameInput =
document.getElementById("name") as HTMLInputElement;
const emailInput = document.getElementById("email") as HTMLInputElement;
const phoneInput = document.getElementById("phone") as HTMLInputElement;
const addressInput = document.getElementById("address") as HTMLInputElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;
const educationInput = document.getElementById("education") as HTMLInputElement;
const experienceInput = document.getElementById("experience") as HTMLInputElement;


const defaultResume =
document.querySelector(".default-resume") as HTMLElement;

form.addEventListener ("submit" ,(event: Event) => {
event.preventDefault();
//prevent default form submission

//get input value
const name = nameInput.value;
const email = emailInput.value;
const phone = phoneInput.value;
const address = addressInput.value;
const skills = skillsInput.value;
const education = educationInput.value;
const experience = experienceInput.value;

defaultResume.innerHTML =`
<h2>Generated Resume <h2>
<p><strong>Name : </strong> ${name}</p>
<p><strong>Phone : </strong> ${phone}</p>
<p><strong>Email : </strong> ${email}</p>
<p><strong>Address: </strong> ${address}</p>
<p><strong>Skills: </strong> ${skills}</p>
<p><strong>Education: </strong> ${education}</p>
<p><strong>Work Experience: </strong> ${experience}</p>
`;
});