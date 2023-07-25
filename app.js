
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function(event) {
    event.preventDefault(); 


    const selectValue = document.getElementById("select").value;
    const nameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;
    const messageValue = document.getElementById("textarea").value;

    console.log("Selected Topic:", selectValue);
    console.log("Name:", nameValue);
    console.log("Email:", emailValue);
    console.log("Message:", messageValue);
});
