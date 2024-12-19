// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

document.getElementById('scrollToTop').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling effect
  });
});

// JavaScript for the menu toggle
document.querySelector('.menu-toggle').addEventListener('click', function () {
  const navLinks = document.querySelector('.nav-links');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

function sendEmail() {
  const recipient = "your-email@example.com"; // Replace with your email
  const subject = "Hello from User";
  const body = "This is the pre-filled body of the email.";
  
  // Open the mail client with pre-filled details
  window.location.href = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

document.getElementById('emailButton').addEventListener('click', function() {
  const recipient = "your-email@example.com"; // Replace with your email
  const subject = "Hello from User";
  const body = "This is the pre-filled body of the email.";

  // Use mailto link
  const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  // Open mail client
  window.location.href = mailtoLink;
});