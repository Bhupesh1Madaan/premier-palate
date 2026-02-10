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
   FORM SUBMIT → GOOGLE SHEETS
================================ */
function submitForm(e) {
    e.preventDefault();

    const form = document.getElementById('eventForm');
    const thankYou = document.getElementById('thankYouMessage');

    const data = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        city: document.getElementById('city').value,
        guests: document.getElementById('guests').value,
        eventType: document.getElementById('eventType').value,
        eventDate: document.getElementById('eventDate').value
    };

    fetch('https://script.google.com/macros/s/AKfycbwcak3NeLVDaFfuQG7mhJuNP17bFHCGq4_eOKQi6_yf056vrTzKJQGrefUqIkB3agAslg/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(() => {
            // Hide form + header
            form.style.display = 'none';
            document.getElementById('popupHeader').style.display = 'none';

            // Show thank you
            thankYou.style.display = 'block';

            // Reset form
            form.reset();
        })
        .catch(() => {
            alert('Submission failed. Please try again.');
        });

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
// const parallaxSections = Array.from(document.querySelectorAll('section, footer'));

// parallaxSections.forEach(section => {
//     const bg = window.getComputedStyle(section).backgroundImage;
//     if (bg && bg !== 'none') {
//         section.classList.add('parallax');
//     }
// });

// window.addEventListener('scroll', function () {
//     parallaxSections.forEach(section => {
//         const bg = window.getComputedStyle(section).backgroundImage;
//         if (bg && bg !== 'none') {
//             const offset = window.pageYOffset - section.offsetTop;
//             section.style.backgroundPositionY = offset * 0.5 + "px"; // Adjust 0.5 for speed
//         }
//     });
// });


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


/* ===============================
   MENU POPUP LOAD
================================ */
document.addEventListener('DOMContentLoaded', () => {
    fetch('./components/menupopup.html')
        .then(res => res.text())
        .then(html => {
            const holder = document.getElementById('menu-popup-placeholder');
            if (holder) holder.innerHTML = html;
        })
        .catch(() => { });
});

/* ===============================
   MENU GATE LOGIC
================================ */
const MENU_PDF_URL = 'assets/Premier_Palate_Menu.pdf';
let menuAction = 'view';
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwcak3NeLVDaFfuQG7mhJuNP17bFHCGq4_eOKQi6_yf056vrTzKJQGrefUqIkB3agAslg/exec';

function openMenuGate(action = 'view') {
    menuAction = action;
    document.getElementById('menuGatePopup').classList.add('active');
}

function closeMenuGate() {
    document.getElementById('menuGatePopup').classList.remove('active');
}

function submitMenuLead() {
    const name = document.getElementById('menuLeadName').value.trim();
    const phone = document.getElementById('menuLeadPhone').value.trim();
    const city = document.getElementById('menuLeadCity').value.trim();
    const error = document.getElementById('menuLeadError');

    if (!name || !/^[6-9]\d{9}$/.test(phone) || !city) {
        error.textContent = 'Enter valid name, 10-digit mobile & city';
        return;
    }

    error.textContent = '';

    fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            type: 'Menu View',
            name,
            phone,
            city,
            source: 'Menu Page'
        })
    });

    closeMenuGate();
    window.open(MENU_PDF_URL, '_blank');

    if (menuAction === 'download') {
        fetch(MENU_PDF_URL)
            .then(res => res.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'Premier_Palate_Menu.pdf';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            });
    } else {
        window.open(MENU_PDF_URL, '_blank');
    }
}

