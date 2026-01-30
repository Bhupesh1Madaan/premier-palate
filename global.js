
//         // Menu Data
//     const menuData = {
//         "Soups": [
//     {name: "Classic Tomato Soup", desc: "With condiments of Bread croutons, butter & fresh Cream" },
//     {name: "Makai Shorba", desc: "Vinegar, soya, mushrooms sweetcorns, black pepper" },
//     {name: "Hot & Sour", desc: "Broth generously spiced with fragrant spices & herbs like lemon grass, galangal" },
//     {name: "Manchow Soup", desc: "Dark brown vegetable broth with vegetables served with noodles" },
//     {name: "Cream of Mushroom", desc: "Button mushrooms, Green onions, garlic & ginger stock" },
//     {name: "Cream of Broccoli Almond", desc: "Broth made with broccoli stems, rice milk & fat free cream cheese" },
//     {name: "Pumpkin Soup", desc: "Soup made with pumpkin & subtle herbs" },
//     {name: "Chicken Soup", desc: "Chicken broth gently simmered with herbs & warm flavors" }
//     ],
//     "Vegetarian Appetizers": [
//     {name: "Tandoori Paneer Tikka", desc: "Paneer cubes, colored peppers & onion marinated in masala yogurt" },
//     {name: "Tandoori Soya Tikka", desc: "Soya chap marinated in hung curd with cashewnut paste" },
//     {name: "Creamy Tandoori Broccoli", desc: "Fresh broccoli marinated in hung curd with cashewnut paste" },
//     {name: "Zaffrani Bharwan Aloo", desc: "Potato shell stuffed with dryfruits & cottage cheese" },
//     {name: "Crispy Spring Roll", desc: "Crispy rolls of assorted vegetables with sweet chilli sauce" },
//     {name: "Nawabi Dahi Kebab", desc: "Yogurt based melt in mouth kebabs from Lucknow" },
//     {name: "Hara Bhara Kebab", desc: "Spinach and green peas based kebabs, deep fried to perfection" },
//     {name: "Potato Cheese Croquettes", desc: "Deep fried rolls of cheese & potato mixed with herbs" }
//     ],
//     "Non-Vegetarian Appetizers": [
//     {name: "Murgh Tikka", desc: "Marinated chicken morsels, basted with butter, roasted in clay oven" },
//     {name: "Malai Chicken Seekh", desc: "Minced chicken with herbs, basted in cream & butter" },
//     {name: "Mutton Seekh Kebab", desc: "Minced meat with herbs & spices grilled on skewers" },
//     {name: "Ajwaini Fish Tikka", desc: "Fresh river sole with mint chutney" },
//     {name: "Tandoori Jheenga", desc: "Marinated prawns skewered & grilled" },
//     {name: "Chilli Chicken", desc: "Savory chilli chicken with assorted bell peppers" },
//     {name: "Drums of Heaven", desc: "Chicken winglets tossed in chilli garlic sauce" },
//     {name: "Lakhnawi Mutton Galouti", desc: "Minced mutton melt in mouth kebabs from Lucknow" }
//     ],
//     "Main Course - Vegetarian": [
//     {name: "Dal Makhani", desc: "Cooked in earthen pot on burning wood" },
//     {name: "Yellow Dal Tadke Wali", desc: "Slow cooked chana dal tempered with aromatic spices" },
//     {name: "Paneer Butter Masala", desc: "Paneer in rich, buttery tomato and cashew gravy" },
//     {name: "Paneer Lababdar Mughlai", desc: "Paneer in velvety onion cashew gravy" },
//     {name: "Makhmali Malai Kofta", desc: "Cottage cheese dumplings in cashew gravy" },
//     {name: "Subz Miloni Handi", desc: "Assorted Indian vegetables cooked to perfection" },
//     {name: "Punjabi Sarson Ka Saag", desc: "Authentic Punjabi saag with white butter and jaggery" },
//     {name: "Amritsari Chole", desc: "Overnight soaked chickpeas with authentic Indian herbs" }
//     ],
//     "Main Course - Non-Vegetarian": [
//     {name: "Murgh Makhani", desc: "Chicken roasted in clay oven, smeared in butter makhani gravy" },
//     {name: "Classic Kadhai Murgh", desc: "Chicken in traditional kadhai with tomatoes and peppers" },
//     {name: "Chicken Kali Mirch", desc: "Chicken cooked in rich black pepper gravy" },
//     {name: "Kashmiri Mutton Rogan Josh", desc: "Tender mutton in traditional rogan gravy" },
//     {name: "Kadhai Mutton", desc: "Mutton in traditional kadhai with tomatoes and peppers" },
//     {name: "Nalli Nihari", desc: "Tender mutton simmered overnight with special herbs & spices" },
//     {name: "Bhetki Fish Curry", desc: "Tender bhetki fish in authentic curry with gentle spices" },
//     {name: "Butter Garlic Prawns", desc: "Succulent prawns in buttery garlic sauce" }
//     ],
//     "Rice & Biryani": [
//     {name: "Matar Paneer Pulao", desc: "Basmati rice with peas, cottage cheese & Hyderabadi spices" },
//     {name: "Hyderabadi Veg Biryani", desc: "Basmati rice layered with marinated vegetables, dum cooked" },
//     {name: "Hyderabadi Chicken Dum Biryani", desc: "Basmati rice with marinated spring chicken, dum cooked" },
//     {name: "Hyderabadi Mutton Dum Biryani", desc: "Basmati rice with marinated mutton, dum cooked" }
//     ],
//     "Desserts - Traditional": [
//     {name: "Kesariya Jalebi Rabri", desc: "" },
//     {name: "Nawabi Rabri Jamun", desc: "" },
//     {name: "Shahi Gulab Kheer", desc: "" },
//     {name: "Rasmalai", desc: "" },
//     {name: "Desi Ghee Gulab Jamun", desc: "" },
//     {name: "Desi Ghee Gajar Halwa", desc: "" },
//     {name: "Desi Ghee Moong Dal Halwa", desc: "" },
//     {name: "Shahi Kesar Kheer", desc: "Sugar-free option available" }
//     ],
//     "Desserts - Western": [
//     {name: "Tiramisu", desc: "" },
//     {name: "Chocolate Brownie", desc: "" },
//     {name: "Biscoff Cheese Cake", desc: "" },
//     {name: "Belgian Chocolate Mousse", desc: "" },
//     {name: "Blueberry Cheese Cake", desc: "" },
//     {name: "Triple Chocolate Mousse", desc: "" },
//     {name: "Mini Chocolate Tartlets", desc: "" }
//     ],
//     "Indian Breads": [
//     {name: "Roti", desc: "Buttered or Plain" },
//     {name: "Missi Roti", desc: "Buttered or Plain" },
//     {name: "Garlic Naan", desc: "Buttered or Plain" },
//     {name: "Lacha Parantha", desc: "Pudina or Buttered" }
//     ],
//     "Live Counters": [
//     {name: "Penne Arrabiata Pasta", desc: "" },
//     {name: "Mushroom Spaghetti Pasta", desc: "" },
//     {name: "Farmers Delight Pizza", desc: "" },
//     {name: "Sushi - Vegetarian", desc: "Avocado, Asparagus, Cucumber" },
//     {name: "Lakhnawi Kathi Tawa", desc: "With Roomali Roti" },
//     {name: "Punjabi Chole Bhature", desc: "" },
//     {name: "Muradabadi Dal", desc: "" },
//     {name: "Dilli Jalebi Chaat", desc: "" }
//     ]
//         };

//         // Load menu modal
//         // function loadMenuModal() {
//         //     const menuContent = document.getElementById('menuContent');
//         //     let html = '';

//         //     for (const [category, items] of Object.entries(menuData)) {
//         //         html += `
//         //             <div class="menu-category">
//         //                 <h3>${category}</h3>
//         //                 <div class="menu-items">
//         //                     ${items.map(item => `
//         //                         <div class="menu-item">
//         //                             <h4>${item.name}</h4>
//         //                             ${item.desc ? `<p>${item.desc}</p>` : ''}
//         //                         </div>
//         //                     `).join('')}
//         //                 </div>
//         //             </div>
//         //         `;
//         //     }

//         //     menuContent.innerHTML = html;
//         // }

//         // // Open menu modal
//         // function openMenuModal() {
//         //     loadMenuModal();
//         //     document.getElementById('menuModal').classList.add('active');
//         //     document.body.style.overflow = 'hidden';
//         // }

//         // // Close menu modal
//         // function closeMenuModal() {
//         //     document.getElementById('menuModal').classList.remove('active');
//         //     document.body.style.overflow = 'auto';
//         // }

//         // // Menu button event listeners
//         // document.getElementById('menuBtn').addEventListener('click', openMenuModal);
//         // document.getElementById('viewMenuBtn').addEventListener('click', openMenuModal);
//         // document.getElementById('footerMenuLink').addEventListener('click', openMenuModal);

//         // // Close menu modal on outside click
//         // document.getElementById('menuModal').addEventListener('click', function (e) {
//         //     if (e.target.id === 'menuModal') {
//         //         closeMenuModal();
//         //     }
//         // });

//         // Show popup on page load after 2 seconds
//         window.addEventListener('load', () => {
//             setTimeout(() => {
//                 document.getElementById('popupForm').classList.add('active');
//             }, 5000);
//         });

//     // Close popup function
//     function closePopup() {
//         document.getElementById('popupForm').classList.remove('active');
//         }

//         // Close popup when clicking outside
//         document.getElementById('popupForm').addEventListener('click', (e) => {
//             if (e.target.id === 'popupForm') {
//         closePopup();
//             }
//         });

//     // Form submission to WhatsApp
//     function submitForm(e) {
//         e.preventDefault();

//     const formData = {
//         fullName: document.getElementById('fullName').value,
//     email: document.getElementById('email').value,
//     phone: document.getElementById('phone').value,
//     city: document.getElementById('city').value,
//     guests: document.getElementById('guests').value,
//     eventType: document.getElementById('eventType').value,
//     eventDate: document.getElementById('eventDate').value
//             };

//     // Format message for WhatsApp
//     const message = `*New Event Inquiry - Premier Palate*

//     📝 *Full Name:* ${formData.fullName}
//     📧 *Email:* ${formData.email}
//     📱 *Phone:* ${formData.phone}
//     🏙️ *City:* ${formData.city}
//     👥 *Number of Guests:* ${formData.guests}
//     🎉 *Event Type:* ${formData.eventType}
//     📅 *Event Date:* ${formData.eventDate}

//     _Sent from Premier Palate Website_`;

//     // Encode message for WhatsApp URL
//     const whatsappUrl = `https://wa.me/919319304595?text=${encodeURIComponent(message)}`;

//     // Open WhatsApp
//     window.open(whatsappUrl, '_blank');

//     // Close popup and reset form
//     closePopup();
//     document.getElementById('eventForm').reset();
//         }

//     // Navbar scroll effect
//     const navbar = document.getElementById('navbar');
//         window.addEventListener('scroll', () => {
//             if (window.scrollY > 100) {
//         navbar.classList.add('scrolled');
//             } else {
//         navbar.classList.remove('scrolled');
//             }
//         });

//         // Smooth scrolling for anchor links
//         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             const href = this.getAttribute('href');
//             if (href && href !== '#' && href.startsWith('#')) {
//                 e.preventDefault();
//                 const target = document.querySelector(href);
//                 if (target) {
//                     target.scrollIntoView({
//                         behavior: 'smooth',
//                         block: 'start'
//                     });
//                 }
//             }
//         });
//         });

//     // Set minimum date for event date picker
//     const eventDateInput = document.getElementById('eventDate');
//     if (eventDateInput) {
//             const today = new Date().toISOString().split('T')[0];
//     eventDateInput.setAttribute('min', today);
//         }

// // Load Navbar
// fetch('components/navbar.html')
//     .then(res => res.text())
//     .then(data => {
//         const nav = document.getElementById('navbar-placeholder');
//         if (nav) nav.innerHTML = data;
//     });

// // Load Footer
// fetch('components/footer.html')
//     .then(res => res.text())
//     .then(data => {
//         const footer = document.getElementById('footer-placeholder');
//         if (footer) footer.innerHTML = data;
//     });


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
