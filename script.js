// navbar toggle functionality
const nav = document.getElementById("navbar");
const menuBtn = document.getElementById("menu-btn");
const menuIcon = menuBtn.querySelector("i");
const navLinks = document.querySelectorAll(".nav-links a");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");

    // Rotate icon smoothly
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-times");
});

// Auto-close menu on mobile when clicking a link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 900 && nav.classList.contains("active")) {
            nav.classList.remove("active");
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");
        }
    });
});

// FAQ toggle functionality
function toggleFaq(item) {
    // Close all other FAQ items
    document.querySelectorAll(".faq-item").forEach((faq) => {
        if (faq !== item) {
            faq.classList.remove("active");
        }
    });

    // Toggle current item
    item.classList.toggle("active");
}

// Cursor following arrow for insight cards
function initCursorFollowArrows() {
    const insightCards = document.querySelectorAll(".insight-card");

    insightCards.forEach((card) => {
        const arrow = card.querySelector(".insight-hover-arrow");
        const cardImage = card.querySelector(".insight-image");

        if (arrow && cardImage) {
            cardImage.addEventListener("mousemove", (e) => {
                const rect = cardImage.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                arrow.style.left = x + "px";
                arrow.style.top = y + "px";
            });

            cardImage.addEventListener("mouseleave", () => {
                // Reset to center when mouse leaves
                arrow.style.left = "50%";
                arrow.style.top = "50%";
            });
        }
    });
}

// Service item interactions
document.querySelectorAll(".service-item").forEach((item) => {
    item.addEventListener("click", () => {
        console.log(
            "Service clicked:",
            item.querySelector(".service-name").textContent
        );
    });
});

// Add smooth loading animation and initialize cursor arrows
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
    initCursorFollowArrows();
});
function toggleMenu() {
    document.getElementById("navbar").classList.toggle("active");
}

// project modals 
function openModal(id) {
    document.getElementById(id).style.display = "block";
}
function closeModal(id) {
    document.getElementById(id).style.display = "none";
}
window.onclick = function (event) {
    const modal1 = document.getElementById('spotifyModal');
    if (event.target === modal1) {
        modal1.style.display = "none";
    }
    const modal2 = document.getElementById('commerceModal');
    if (event.target === modal2) {
        modal2.style.display = "none";
    }
    const modal3 = document.getElementById('discountModal');
    if (event.target === modal3) {
        modal3.style.display = "none";
    }
    const modal4 = document.getElementById('nykaaModal');
    if (event.target === modal4) {
        modal4.style.display = "none";
    }
    const modal5 = document.getElementById('healthcareModal');
    if (event.target === modal5) {
        modal5.style.display = "none";
    }
    const modal6 = document.getElementById('rfmModal');
    if (event.target === modal6) {
        modal6.style.display = "none";
    }
}