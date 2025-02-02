function showContent(section, num) {
    document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
    document.getElementById(section)?.classList.add('active');

    if (num === 1 && window.innerWidth < 400 ) {
        nav_display?.();
    }
}


function nav_display() {
    const target = document.getElementById('options');
    const change = document.getElementById('nav-control');
    const currentDisplay = window.getComputedStyle(target).display;

    if (currentDisplay === "none") {
        target.style.display = "flex";
        change.innerHTML = `<img style="height: 50px;" src="./src/close.apng" alt="close" />`
    } else {
        target.style.display = "none";
        change.innerHTML = `<img style="height: 50px;" src="./src/menu.apng" alt="open" />`
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

// JavaScript functionality to display "More" link on hover within the card

document.addEventListener("DOMContentLoaded", () => {
    const serviceCards = document.querySelectorAll(".service-card");

    serviceCards.forEach((card) => {
        // Create a "More" link element
        const moreLink = document.createElement("a");
        moreLink.innerText = "Click for more info";
        // moreLink.href = "#"; // You can update this URL as needed
        moreLink.style.position = "absolute";
        moreLink.style.top = "10px";
        moreLink.style.right = "10px";
        moreLink.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        moreLink.style.color = "rgba(46, 103, 248, 0.93)";
        moreLink.style.padding = "5px 10px";
        moreLink.style.borderRadius = "5px";
        moreLink.style.textDecoration = "none";
        moreLink.style.fontSize = "12px";
        moreLink.style.display = "none"; // Initially hidden
        moreLink.style.zIndex = "10";

        card.style.position = "relative"; // Ensure the card is relatively positioned
        card.appendChild(moreLink);

        // Add event listeners to show/hide the "More" link
        card.addEventListener("mouseenter", () => {
            moreLink.style.display = "block";
        });

        card.addEventListener("mouseleave", () => {
            moreLink.style.display = "none";
        });

        card.addEventListener("click", () => {
            const titleElement = card.querySelector(".description");
            console.log(card)
            if (titleElement) {
                const formattedTitle = `${titleElement.innerText.replace(/\s+/g, "_")}`;
                console.log(formattedTitle);
                showContent(formattedTitle)
            } else {
                console.log("No title found");
            }
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    let selected_laptop = document.getElementById('selected-laptop');
    let selected_phone = document.getElementById('selected-phone');
    let selected_tab = document.getElementById('selected-tab');
    let selected_phone1 = document.getElementById('selected-phone1');
    let selected_laptop1 = document.getElementById('selected-laptop1');
    let selected_tab1 = document.getElementById('selected-tab1');
    let selected_phone2 = document.getElementById('selected-phone2');
    let selected_laptop2 = document.getElementById('selected-laptop2');
    let selected_tab2 = document.getElementById('selected-tab2');
    if (window.innerWidth < 400){
        selected_laptop.style.display = "none";
        selected_phone.style.display = "block";
        selected_tab.style.display = "none";
        selected_laptop1.style.display = "none";
        selected_phone1.style.display = "block";
        selected_tab1.style.display = "none";
        selected_laptop2.style.display = "none";
        selected_phone2.style.display = "block";
        selected_tab2.style.display = "none";
    }
    else if ((window.innerWidth > 400) && (window.innerWidth < 922)){
        selected_laptop.style.display = "none";
        selected_phone.style.display = "none";
        selected_tab.style.display = "block";
        selected_laptop1.style.display = "none";
        selected_phone1.style.display = "none";
        selected_tab1.style.display = "block";
        selected_laptop2.style.display = "none";
        selected_phone2.style.display = "none";
        selected_tab2.style.display = "block";
    }
    else{
        selected_laptop.style.display = "block";
        selected_phone.style.display = "none";
        selected_tab.style.display = "none";
        selected_laptop1.style.display = "block";
        selected_phone1.style.display = "none";
        selected_tab1.style.display = "none";
        selected_laptop2.style.display = "block";
        selected_phone2.style.display = "none";
        selected_tab2.style.display = "none";
    }
})

function togglePanel(element) {
    element.classList.toggle("active");
    let panel = element.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}

// JavaScript functionality to display "More" link on hover within the card

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        // Create a "More" link element
        const moreLink = document.createElement("a");
        moreLink.innerText = "More";
        moreLink.href = "#"; // You can update this URL as needed
        moreLink.style.position = "absolute";
        moreLink.style.top = "10px";
        moreLink.style.right = "10px";
        moreLink.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        moreLink.style.color = "white";
        moreLink.style.padding = "5px 10px";
        moreLink.style.borderRadius = "5px";
        moreLink.style.textDecoration = "none";
        moreLink.style.fontSize = "12px";
        moreLink.style.display = "none"; // Initially hidden
        moreLink.style.zIndex = "10";

        card.style.position = "relative"; // Ensure the card is relatively positioned
        card.appendChild(moreLink);

        // Add event listeners to show/hide the "More" link
        card.addEventListener("mouseenter", () => {
            moreLink.style.display = "block";
        });

        card.addEventListener("mouseleave", () => {
            moreLink.style.display = "none";
        });
        
        
    });
});

function showService(service) {
    document.getElementById("services-details-web-home-more").style.display = "block";
    document.getElementById("services-details-app-home-more").style.display = "block";
    document.getElementById("services-details-sign-home-more").style.display = "block";
    document.getElementById("services-details-card-home-more").style.display = "block";
    const details_web = document.querySelectorAll(".service-detail-web-home-more");
    details_web.forEach(function (detail) {
        detail.style.display = "none";
    });
    const details_app = document.querySelectorAll(".service-detail-app-home-more");
    details_app.forEach(function (detail) {
        detail.style.display = "none";
    });
    const details_sign = document.querySelectorAll(".service-detail-sign-home-more");
    details_sign.forEach(function (detail) {
        detail.style.display = "none";
    });
    const details_card = document.querySelectorAll(".service-detail-card-home-more");
    details_card.forEach(function (detail) {
        detail.style.display = "none";
    });
    document.getElementById(service + "-detail").style.display = "block";
    console.log(window.innerWidth);
    if (window.innerWidth < 700) {
        document.getElementById('container-web-home-more-id').style.display = "none";
        document.getElementById('container-app-home-more-id').style.display = "none";
        document.getElementById('container-sign-home-more-id').style.display = "none";
        document.getElementById('container-card-home-more-id').style.display = "none";
    }
}

function hideService() {
    if (window.innerWidth < 700) {
        document.getElementById('container-web-home-more-id').style.display = "flex";
        document.getElementById('container-app-home-more-id').style.display = "flex";
        document.getElementById('container-card-home-more-id').style.display = "flex";
        document.getElementById('container-sign-home-more-id').style.display = "flex";
    }
    document.getElementById("services-details-web-home-more").style.display = "none";
    document.getElementById("services-details-app-home-more").style.display = "none";
    document.getElementById("services-details-card-home-more").style.display = "none";
    document.getElementById("services-details-sign-home-more").style.display = "none";
}

function showForm() {
    const form = document.getElementById("blogForm");
    form.style.display =
      form.style.display === "none" || form.style.display === ""
        ? "block"
        : "none";
  }

  function toggleRecentPosts() {
    const recentPosts = document.getElementById("recentPostsSection");
    recentPosts.style.display =
      recentPosts.style.display === "none" ||
      recentPosts.style.display === ""
        ? "block"
        : "none";
  }

//   function submitBlog() {
//     const title = document.getElementById("title").value;
//     const author = document.getElementById("author").value;
//     const content = document.getElementById("content-blog").value;

//     if (title && author && content) {
//       alert("Blog submitted successfully!");
//       document.getElementById("blogForm").reset();
//       showForm();
//     } else {
//       alert("Please fill in all fields.");
//     }
//   }

document.addEventListener("DOMContentLoaded", () => {
    fetch("./data/blogData.json")
        .then(response => response.json())
        .then(data => {
            const blogContainer = document.getElementById("blog-container");

            data.forEach(blog => {
                const blogPost = document.createElement("div");
                blogPost.classList.add("blog-post");

                blogPost.innerHTML = `
                    <img src="./data/image/${blog.image}" alt="${blog.title}">
                    <div class="info">
                        <h2>${blog.title}</h2>
                        <p>${blog.content}</p>
                    </div>
                `;

                blogContainer.appendChild(blogPost);
            });
        })
        .catch(error => console.error("Error loading JSON:", error));
});
