const themeToggleBtn = document.getElementById('theme-toggle');
const htmlEl = document.documentElement;
const themeIcon = themeToggleBtn.querySelector('i');
const searchInput = document.getElementById('search');
const sections = document.querySelectorAll('.searchable');

// Check for saved theme
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

const setTheme = (theme) => {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
};

// Initialize theme
if (savedTheme) {
    setTheme(savedTheme);
} else if (systemPrefersDark) {
    setTheme('dark');
}

// Toggle theme on click
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Search Filtering
searchInput.addEventListener("input", () => {
    let value = searchInput.value.toLowerCase();

    sections.forEach(section => {
        let text = section.innerText.toLowerCase();
        
        if (text.includes(value)) {
            section.style.display = "block";
            // Add a nice fade in animation
            section.style.animation = "fadeIn 0.5s ease forwards";
        } else {
            section.style.display = "none";
        }
    });
});

// Modal Logic
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("fullImg");
const closeBtn = document.querySelector(".close");
const zoomableImages = document.querySelectorAll(".zoomable");

zoomableImages.forEach(img => {
    img.addEventListener("click", function () {
        modal.classList.add("show");
        modalImg.src = this.src;
    });
});

closeBtn.onclick = () => {
    modal.classList.remove("show");
};

modal.onclick = (e) => {
    if(e.target === modal) {
        modal.classList.remove("show");
    }
};

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 🔽 ADD THIS BELOW ALL EXISTING CODE

function toggleVideo() {
    let video = document.getElementById("asdVideo");

    if (video.style.display === "none") {
        video.style.display = "block";
    } else {
        video.style.display = "none";
    }
}

function toggleCGIVideo() {
    let video = document.getElementById("cgiVideo");

    if (video.style.display === "none") {
        video.style.display = "block";
    } else {
        video.style.display = "none";
    }
}
