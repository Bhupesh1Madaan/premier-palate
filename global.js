/* ===============================
   POPUP FORM (HOME PAGE ONLY)
================================ */

function openPopup() {
    const popup = document.getElementById("popupForm");
    if (popup) popup.classList.add("active");
}

function closePopup() {
    const popup = document.getElementById("popupForm");
    if (popup) popup.classList.remove("active");
}

fetch('components/popup.html')
    .then(res => res.text())
    .then(html => {
        const placeholder = document.getElementById('popup-placeholder');
        if (!placeholder) return;

        placeholder.innerHTML = html;

        const popup = document.getElementById('popupForm');
        if (!popup) return;

        // 🔥 AUTO POPUP — EVERY PAGE AFTER 8 SECONDS
        setTimeout(() => {
            popup.classList.add('active');
        }, 8000);

        // 🔹 OUTSIDE CLICK CLOSE
        popup.addEventListener('click', (e) => {
            if (e.target === popup) {
                closePopup();
            }
        });
    })
    .catch(err => console.error('Popup load failed:', err));


// 🔹 MANUAL CONTROLS
function openPopup() {
    document.getElementById('popupForm')?.classList.add('active');
}

function closePopup() {
    document.getElementById('popupForm')?.classList.remove('active');
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
// fetch('components/navbar.html')
//     .then(res => res.text())
//     .then(data => {
//         const navHolder = document.getElementById('navbar-placeholder');
//         if (navHolder) {
//             navHolder.innerHTML = data;

//             /* 🔽 Navbar specific JS yahin likhna 🔽 */
//             const servicesItem = document.querySelector('.services-item');
//             if (servicesItem) {
//                 servicesItem.addEventListener('mouseenter', () => {
//                     servicesItem.classList.add('open');
//                 });
//                 servicesItem.addEventListener('mouseleave', () => {
//                     servicesItem.classList.remove('open');
//                 });
//             }
//         }
//     });


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
// document.addEventListener("DOMContentLoaded", () => {
//     fetch('/components/navbar.html')
//         .then(res => res.text())
//         .then(data => {
//             const nav = document.getElementById('navbar-placeholder');
//             if (!nav) return;

//             nav.innerHTML = data;

//             const hamburger = document.getElementById("hamburger");
//             const navLinks = document.querySelector(".nav-links");

//             if (hamburger && navLinks) {
//                 hamburger.addEventListener("click", () => {
//                     navLinks.classList.toggle("active");
//                     hamburger.classList.toggle("active");
//                 });
//             }

//             const dropdownToggle = document.querySelector(".dropdown-toggle");
//             const dropdown = document.querySelector(".dropdown");

//             if (dropdownToggle && dropdown) {
//                 dropdownToggle.addEventListener("click", (e) => {
//                     e.preventDefault();
//                     dropdown.classList.toggle("active");
//                 });
//             }
//         });
// });

function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 100);
        });
    }

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");

    if (hamburger && navLinks) {
        hamburger.onclick = () => {
            navLinks.classList.toggle("active");
            hamburger.classList.toggle("active");
        };
    }

    const dropdownToggle = document.querySelector(".dropdown-toggle");
    const dropdown = document.querySelector(".dropdown");

    if (dropdownToggle && dropdown) {
        dropdownToggle.onclick = (e) => {
            e.preventDefault();
            dropdown.classList.toggle("active");
        };
    }
}

function loadNavbar() {
    const navHolder = document.getElementById('navbar-placeholder');
    if (!navHolder) return;

    fetch('/components/navbar.html')
        .then(res => res.text())
        .then(html => {
            navHolder.innerHTML = html;
            initNavbar(); // 👈 VERY IMPORTANT
        });
}

/* Initial load */
document.addEventListener("DOMContentLoaded", loadNavbar);

/* iOS Safari back/forward fix */
window.addEventListener("pageshow", e => {
    if (e.persisted) {
        loadNavbar();
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

document.addEventListener('DOMContentLoaded', function () {

    const floatingContacts = document.querySelector('.floating-contacts');
    if (!floatingContacts) return; // safety guard

    let lastScrollY = window.scrollY;
    let hideTimeout;

    function showButtons() {
        floatingContacts.classList.remove('hide');
        floatingContacts.classList.add('show');

        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
            floatingContacts.classList.remove('show');
            floatingContacts.classList.add('hide');
        }, 3000);
    }

    function hideButtons() {
        floatingContacts.classList.remove('show');
        floatingContacts.classList.add('hide');
    }

    // Show on first load (mobile only)
    if (window.innerWidth <= 768) {
        showButtons();
    }

    window.addEventListener('scroll', () => {
        if (window.innerWidth > 768) return;

        if (window.scrollY < lastScrollY) {
            // scrolling up
            showButtons();
        } else {
            // scrolling down
            hideButtons();
        }

        lastScrollY = window.scrollY;
    });

});

function sendWhatsApp(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
        `📩 *New Contact Form Message*

👤 *Name:* ${name}
📧 *Email:* ${email}
📞 *Phone:* ${phone}
💬 *Message:* ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    const whatsappNumber = "919319304595";

    window.open(
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
        "_blank"
    );
}
