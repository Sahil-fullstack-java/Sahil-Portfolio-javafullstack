let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text',  {
    strings: ['Frontend Developer', 'Backend Developer', 'FULLSTACK Developer', 'Web Developer', 'JAVA , SPRING BOOT , MYSQL  DEVELOPER'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
 });


 emailjs.init("U5vEpsSx-YU4FCxX7");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.send("service_d99qoxg", "template_0pftkd7", {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        phone: document.getElementById("number").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }).then(() => {
        alert("Message Sent Successfully!");
        form.reset();
    }).catch((error) => {
        alert("Failed to send message.");
        console.log(error);
    });
});


// Disable Right Click
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    alert("⚠️ Inspect is disabled on this website!");
});

// Disable common Inspect shortcuts
document.addEventListener("keydown", function (e) {

    // F12
    if (e.key === "F12") {
        e.preventDefault();
        alert("⚠️ Developer Tools are disabled!");
    }

    // Ctrl + Shift + I / J / C
    if (
        e.ctrlKey &&
        e.shiftKey &&
        ["I", "J", "C","U"].includes(e.key.toUpperCase())
    ) {
        e.preventDefault();
        alert("⚠️ Developer Tools are disabled!");
    }

    
    if (e.ctrlKey && e.key.toUpperCase() === "U") {
        e.preventDefault();
        alert("⚠️ View Source is disabled!");
    }
});

const readMoreBtn = document.getElementById("readMoreBtn");
const readme = document.getElementById("readme");

readMoreBtn.addEventListener("click", function () {

    if (readme.style.display === "block") {

        readme.style.display = "none";
        readMoreBtn.innerText = "Read More";

    } else {

        readme.style.display = "block";
        readMoreBtn.innerText = "Read Less";

    }

});