

/* ===============================
   MENU DATA (SAFE - ONLY DATA)
================================ */
const menuData = {
    "Soups": [
        { name: "Classic Tomato Soup", desc: "With condiments of Bread croutons, butter & fresh Cream" },
        { name: "Makai Shorba", desc: "Vinegar, soya, mushrooms sweetcorns, black pepper" },
        { name: "Hot & Sour", desc: "Broth generously spiced with fragrant spices & herbs like lemon grass, galangal" },
        { name: "Manchow Soup", desc: "Dark brown vegetable broth with vegetables served with noodles" },
        { name: "Cream of Mushroom", desc: "Button mushrooms, Green onions, garlic & ginger stock" },
        { name: "Cream of Broccoli Almond", desc: "Broth made with broccoli stems, rice milk & fat free cream cheese" },
        { name: "Pumpkin Soup", desc: "Soup made with pumpkin & subtle herbs" },
        { name: "Chicken Soup", desc: "Chicken broth gently simmered with herbs & warm flavors" }
    ]
    // baaki categories same rahengi (no issue here)
};


/* ===============================
   POPUP FORM (HOME PAGE ONLY)
================================ */

function openPopup() {
    const popup = document.getElementById("popupForm");
    if (popup) {
        popup.classList.add("active");
    }
}

function closePopup() {
    const popupForm = document.getElementById('popupForm');
    if (popupForm) popupForm.classList.remove('active');
}

// Auto popup on load
window.addEventListener('load', () => {
    const popupForm = document.getElementById('popupForm');
    if (popupForm) {
        setTimeout(() => {
            popupForm.classList.add('active');
        }, 5000);
    }
});

// Close popup on outside click
const popupForm = document.getElementById('popupForm');
if (popupForm) {
    popupForm.addEventListener('click', (e) => {
        if (e.target.id === 'popupForm') {
            closePopup();
        }
    });
}


/* ===============================
   FORM SUBMIT → WHATSAPP
================================ */
function submitForm(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const city = document.getElementById('city');
    const guests = document.getElementById('guests');
    const eventType = document.getElementById('eventType');
    const eventDate = document.getElementById('eventDate');

    if (!fullName || !phone) return;

    const message = `*New Event Inquiry - Premier Palate*

📝 *Full Name:* ${fullName.value}
📧 *Email:* ${email?.value || ''}
📱 *Phone:* ${phone.value}
🏙️ *City:* ${city?.value || ''}
👥 *Guests:* ${guests?.value || ''}
🎉 *Event Type:* ${eventType?.value || ''}
📅 *Event Date:* ${eventDate?.value || ''}

_Sent from Premier Palate Website_`;

    const whatsappUrl = `https://wa.me/919319304595?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    closePopup();
    document.getElementById('eventForm')?.reset();
}


/* ===============================
   EVENT DATE MIN LIMIT
================================ */
const eventDateInput = document.getElementById('eventDate');
if (eventDateInput) {
    const today = new Date().toISOString().split('T')[0];
    eventDateInput.setAttribute('min', today);
}


/* ===============================
   NAVBAR SCROLL EFFECT
================================ */
const navbar = document.getElementById('navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 100);
    });
}


/* ===============================
   SMOOTH SCROLLING
================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href !== '#') {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});


/* ===============================
   LOAD NAVBAR COMPONENT
================================ */
fetch('components/navbar.html')
    .then(res => res.text())
    .then(data => {
        const navHolder = document.getElementById('navbar-placeholder');
        if (navHolder) {
            navHolder.innerHTML = data;

            /* 🔽 Navbar specific JS yahin likhna 🔽 */
            const servicesItem = document.querySelector('.services-item');
            if (servicesItem) {
                servicesItem.addEventListener('mouseenter', () => {
                    servicesItem.classList.add('open');
                });
                servicesItem.addEventListener('mouseleave', () => {
                    servicesItem.classList.remove('open');
                });
            }
        }
    });


/* ===============================
   LOAD FOOTER COMPONENT
================================ */
fetch('components/footer.html')
    .then(res => res.text())
    .then(data => {
        const footerHolder = document.getElementById('footer-placeholder');
        if (footerHolder) footerHolder.innerHTML = data;
    });

// Load Navbar
// Load Navbar
fetch('components/navbar.html')
    .then(res => res.text())
    .then(data => {
        const nav = document.getElementById('navbar-placeholder');
        if (nav) {
            nav.innerHTML = data;

            // Hamburger toggle
            const hamburger = document.getElementById("hamburger");
            const navLinks = document.querySelector(".nav-links");

            if (hamburger && navLinks) {
                hamburger.addEventListener("click", () => {
                    navLinks.classList.toggle("active");
                });
            }

            // SERVICES dropdown toggle (MOBILE)
            const dropdownToggle = document.querySelector(".dropdown-toggle");
            const dropdown = document.querySelector(".dropdown");

            if (dropdownToggle && dropdown) {
                dropdownToggle.addEventListener("click", (e) => {
                    e.preventDefault(); // page jump avoid
                    dropdown.classList.toggle("active");
                });
            }
        }
    });
// Select all elements with a background image
const parallaxSections = Array.from(document.querySelectorAll('section, footer'));

parallaxSections.forEach(section => {
    const bg = window.getComputedStyle(section).backgroundImage;
    if (bg && bg !== 'none') {
        section.classList.add('parallax');
    }
});

window.addEventListener('scroll', function () {
    parallaxSections.forEach(section => {
        const bg = window.getComputedStyle(section).backgroundImage;
        if (bg && bg !== 'none') {
            const offset = window.pageYOffset - section.offsetTop;
            section.style.backgroundPositionY = offset * 0.5 + "px"; // Adjust 0.5 for speed
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".testimonial-slider");
    const cards = document.querySelectorAll(".testimonial-item");

    if (!slider || cards.length === 0) return;

    let index = 0;
    const visibleCards = 3;

    function slideTestimonials() {
        index++;

        if (index > cards.length - visibleCards) {
            index = 0;
        }

        slider.style.transform = `translateX(-${index * (100 / visibleCards)}%)`;
    }

    setInterval(slideTestimonials, 5000);
});

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".testimonial-slider");
    const testimonials = document.querySelectorAll(".testimonial-item");
    const prev = document.querySelector(".slider-arrow.left");
    const next = document.querySelector(".slider-arrow.right");

    if (!slider || testimonials.length === 0) return;

    let index = 0;

    function showSlide(i) {
        const total = testimonials.length;
        index = (i + total) % total; // loop around
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    // arrow click
    prev?.addEventListener("click", () => showSlide(index - 1));
    next?.addEventListener("click", () => showSlide(index + 1));

    // auto-slide every 5s
    setInterval(() => showSlide(index + 1), 5000);
});

