 // JavaScript Function for Contact Alert
 function showContactAlert() {
    alert("Thank you for reaching out! I'll get back to you soon.");
  }
  // Smooth Scrolling
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute('href'));
      target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Filter Projects
document.querySelectorAll('.filters button').forEach(button => {
  button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      document.querySelectorAll('.project').forEach(project => {
          project.style.display = filter === 'all' || project.dataset.category === filter ? 'block' : 'none';
      });
  });
});

// Testimonials Carousel
// Testimonials Carousel
let currentSlide = 0; 
const testimonials = document.querySelectorAll('.testimonial'); 
const showSlide = index => {
  testimonials.forEach((slide, i) => {
    slide.classList.toggle('active', i === index); // Ensure only the current slide is active
    slide.style.display = i === index ? 'block' : 'none'; // Adjust visibility
  });
};

// Ensure buttons are correctly connected to the carousel
document.querySelector('.prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + testimonials.length) % testimonials.length;
  showSlide(currentSlide);
});

document.querySelector('.next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % testimonials.length;
  showSlide(currentSlide);
});

// Initialize to show the first slide
showSlide(currentSlide);


document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll("img.lazy");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        observer.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => observer.observe(img));
});

