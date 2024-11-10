var form = document.getElementById("resumeform");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var addressInput = document.getElementById("address");
var skillsInput = document.getElementById("skills");
var educationInput = document.getElementById("education");
var experienceInput = document.getElementById("experience");
var defaultResume = document.querySelector(".default-resume");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    //prevent default form submission
    //get input value
    var name = nameInput.value;
    var email = emailInput.value;
    var phone = phoneInput.value;
    var address = addressInput.value;
    var skills = skillsInput.value;
    var education = educationInput.value;
    var experience = experienceInput.value;
    defaultResume.innerHTML = "\n<h2>Generated Resume <h2>\n<p><strong>Name : </strong> ".concat(name, "</p>\n<p><strong>Phone : </strong> ").concat(phone, "</p>\n<p><strong>Email : </strong> ").concat(email, "</p>\n<p><strong>Address: </strong> ").concat(address, "</p>\n<p><strong>Skills: </strong> ").concat(skills, "</p>\n<p><strong>Education: </strong> ").concat(education, "</p>\n<p><strong>Work Experience: </strong> ").concat(experience, "</p>\n");
});
