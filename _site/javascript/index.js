// Navbar-------------------------
let toggle = false;
// target element
const moboiconAll = document.querySelectorAll(".menuToggle");
console.log(moboiconAll);

const mobomenu = document.getElementById("mobileMenu");

moboiconAll.forEach((moboicon) => {
  moboicon.addEventListener("click", (e) => {
    if (!toggle) {
      mobomenu.style.transform = "translateX(0)";
      toggle = true;
    } else {
      mobomenu.style.transform = "translateX(-800px)";
      toggle = false;
      const dropSymbole = document.getElementById("dropMenu");
      dropSymbole.classList.remove("rotate-180");
      const dropdown = document.getElementById("mobileDropdown");
      dropdown.classList.add("hidden");
    }
  });
});

// Close the menu if clicking outside of it
document.addEventListener("click", (e) => {
  if (
    toggle &&
    !mobomenu.contains(e.target) &&
    !e.target.closest(".menuToggle")
  ) {
    mobomenu.style.transform = "translateX(-600px)";
    toggle = false;
    const dropSymbole = document.getElementById("dropMenu");
    dropSymbole.classList.remove("rotate-180");
    const dropdown = document.getElementById("mobileDropdown");
    dropdown.classList.add("hidden");
  }
});

function toggleDropdown() {
  const dropdown = document.getElementById("mobileDropdown");
  const dropSymbole = document.getElementById("dropMenu");
  dropSymbole.classList.toggle("rotate-180");
  dropdown.classList.toggle("hidden");
}
function toggleDropdown2() {
  const dropdown = document.getElementById("mobileDropdown2");
  const dropSymbole = document.getElementById("dropMenu2");
  dropSymbole.classList.toggle("rotate-180");
  dropdown.classList.toggle("hidden");
}

// footer------------------------------------------------------------
// Add current year in footer
const yearSpan = document.getElementById("year");

// Set the text content of the span
yearSpan.textContent = new Date().getFullYear(); // Replace "2024" with any text you want to add

// swiper
// swiper js
new Swiper('.slider-wrapper', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  spaceBetween: 30,

  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive breakpoints
  breakpoints: {
    640: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});




// Accordion
let activeAccordion = null;

function toggleAccordion(index) {
  const content = document.getElementById(`content-${index}`);
  const allContents = document.querySelectorAll('[id^="content-"]');

  // Close all accordion contents except the clicked one
  allContents.forEach((item, idx) => {
    if (item !== content) {
      item.classList.add('max-h-0');
      item.classList.remove('max-h-[1000px]');
    }
  });

  if (activeAccordion === index) {
    content.classList.add('max-h-0');
    content.classList.remove('max-h-[1000px]');
    activeAccordion = null;
  } else {
    content.classList.remove('max-h-0');
    content.classList.add('max-h-[1000px]');
    activeAccordion = index;
  }
}


// contact form js

document.getElementById('contact-form').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent the default form submission

  const form = new FormData(this);
  
  const toast = document.getElementById('toast');

  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      body: form,
    });

    console.log(response);
    

    const result = await response.json();

    if (response.ok) {
      toast.textContent = 'Email sent successfully!';
      toast.classList.add('show');

      // Reset the form after successful submission
      document.getElementById('contact-form').reset();
    } else {
      toast.textContent = `Error: ${result.error}`;
      toast.classList.add('show');
    }

    // Hide the toast after 4 seconds
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  } catch (error) {
    toast.textContent = 'An error occurred while sending the email. Please try again later.';
    toast.classList.add('show');

    // Hide the toast after 4 seconds
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }
});


