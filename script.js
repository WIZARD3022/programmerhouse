function showContent(section) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));
    document.getElementById(section).classList.add('active');
}

function openoption(params) {
    if (params == 1) {
        let target = document.getElementById('nav-open').outerHTML;
        target = `<a id="nav-close" onclick="openoption(0)"><img src="./src/close.apng" alt="Close"/></a>`
    }
    else {
        let target = document.getElementById('nav-close').outerHTML;
        target = `<a id="nav-close" onclick="openoption(1)"><img src="./src/menu.apng" alt="Menu"/></a>`
    }
}

function display() {
    const videoElement = document.querySelector('#video');
    const current = videoElement.className;
    console.log(current);

    if (current === "notshow") {
        videoElement.className = "show";
    } else {
        videoElement.className = "notshow";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('open');

            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                }
            });
        });
    });
});

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Handle the contact form submission
    const contactForm = document.querySelector(".contact-form");
    const submitButton = contactForm.querySelector("button");

    submitButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Retrieve form values
        const fullName = contactForm.querySelector('input[placeholder="Enter Full Name"]').value.trim();
        const email = contactForm.querySelector('input[placeholder="Enter Your Email"]').value.trim();
        const phone = contactForm.querySelector('input[placeholder="Enter Phone Number"]').value.trim();
        const subject = contactForm.querySelector('input[placeholder="Email Subject"]').value.trim();
        const message = contactForm.querySelector("textarea").value.trim();

        // Validate the form inputs
        if (!fullName || !email || !phone || !subject || !message) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!validatePhone(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }

        // Simulate form submission
        alert(`Thank you, ${fullName}. Your message has been sent!`);
        contactForm.reset(); // Clear the form
    });

    // Add interactivity for contact details
    document.querySelectorAll(".contact-info div").forEach((infoItem) => {
        infoItem.addEventListener("click", function () {
            const title = infoItem.querySelector(".title").innerText;

            switch (title) {
                case "Call Us.":
                    window.location.href = "tel:+911145047445";
                    break;
                case "WhatsApp.":
                    window.open("https://wa.me/919910258463", "_blank");
                    break;
                case "Email.":
                    window.location.href = "mailto:info@kdrsoft.com";
                    break;
                case "Location.":
                    window.open("https://goo.gl/maps/example", "_blank"); // Replace with the actual Google Maps link
                    break;
                default:
                    break;
            }
        });
    });

    // Helper function to validate email format
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Helper function to validate phone number format
    function validatePhone(phone) {
        const phoneRegex = /^\+?\d{10,15}$/;
        return phoneRegex.test(phone);
    }
});

document.querySelector('.contact-form').addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formObject = Object.fromEntries(formData.entries());

    try {
        const response = await fetch("http://localhost:3000/send-feedback", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formObject),
        });

        if (response.ok) {
            alert("Thank you! Your message has been sent.");
            event.target.reset();
        } else {
            alert("Something went wrong. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Failed to send feedback. Please check your connection.");
    }
});

