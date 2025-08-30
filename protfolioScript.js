/*
const themeBtn = document.getElementsByClassName("btn btn-outline-secondary")
themeBtn[0].addEventListener("click", toggleTheme);

function toggleTheme() {
    const html = document.documentElement;
    const newTheme = html.getAttribute('data-bs-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-bs-theme', newTheme);
    document.getElementById('themeIcon').textContent = newTheme === 'light' ? '🌙' : '☀️';
    localStorage.setItem('theme', newTheme);
}

document.documentElement.setAttribute('data-bs-theme', localStorage.getItem('theme') || 'dark');
document.getElementById('themeIcon').textContent = localStorage.getItem('theme') === 'dark' ? '☀️' : '🌙';
*/

const html = document.documentElement;
const newTheme = html.getAttribute('data-bs-theme') === 'light' ? 'dark' : 'dark';
html.setAttribute('data-bs-theme', newTheme);

const navLinks = document.querySelectorAll('.nav-link');
const pages = Array.from(document.querySelectorAll('.page'));
let currentPageIndex = 0; // Track current page index

// Add click event listeners to navbar links
navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetId = link.getAttribute('href'); // Remove #
        switchPage(targetId, index);
    });
});

const pageIDs = {
    0: 'home',
    1: 'personal-info',
    2: 'projects',
    3: 'achievements',
    4: 'skills',
    5: 'contact',
}

// Function to switch pages
function switchPage(targetId, newIndex) {
    const currentPage = pages[currentPageIndex];
    const targetPage = document.getElementById(pageIDs[newIndex]);

    if (currentPage === targetPage) return; // No change needed

    // Determine slide direction
    const isForward = newIndex > currentPageIndex;
    const slideOutClass = isForward ? 'slide-out-left' : 'slide-out-right';
    const slideInClass = isForward ? 'slide-in-right' : 'slide-in-left';

    // Remove active class from current page and add slide-out animation
    console.log(currentPage);
    console.log(targetPage);
    currentPage.classList.remove('active');
    currentPage.classList.add(slideOutClass);

    // Add active class and slide-in animation to target page
    targetPage.classList.add('active', slideInClass);

    // Update navbar active state
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`.nav-link[href="${targetId}"]`).classList.add('active');

    // Update current page index
    currentPageIndex = newIndex;

    // Clean up animation classes after transition
    setTimeout(() => {
        currentPage.classList.remove(slideOutClass);
        targetPage.classList.remove(slideInClass);
    }, 250); // Match transition duration in CSS
}

