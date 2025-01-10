// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjust for header height
        behavior: 'smooth'
      });
    });
  });
  
  // Simple Contact Form Validation
  document.querySelector('.contact form').addEventListener('submit', function(e) {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
  
    if (!name || !email || !message) {
      e.preventDefault();  // Prevent form submission if fields are empty
      alert("Please fill out all fields before submitting.");
    } else {
      alert("Thank you for contacting us!");
    }
  });
  
  // Simple Image Carousel for Portfolio
  let currentImageIndex = 0;
  const portfolioImages = document.querySelectorAll('.portfolio-gallery img');
  const totalImages = portfolioImages.length;
  
  function showNextImage() {
    portfolioImages[currentImageIndex].style.display = 'none'; // Hide current image
    currentImageIndex = (currentImageIndex + 1) % totalImages; // Loop back to first image
    portfolioImages[currentImageIndex].style.display = 'block'; // Show next image
  }
  
  // Initialize carousel to show first image
  portfolioImages.forEach((img, index) => {
    if (index !== currentImageIndex) {
      img.style.display = 'none';
    }
  });
  
  setInterval(showNextImage, 3000); // Change image every 3 seconds
  