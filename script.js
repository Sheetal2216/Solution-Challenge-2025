let header = window.document.querySelector("header");


window.addEventListener("scroll" , function() 
{
 header.classList.toggle("sticky", window.scrollY > 0)
});


/* JavaScript to Trigger Animations */
document.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (sectionTop < windowHeight * 0.8) {
        section.classList.add('visible');
      } else {
        section.classList.remove('visible');
      }
    });
  });