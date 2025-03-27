let header = window.document.querySelector("header");


window.addEventListener("scroll" , function() 
{
 header.classList.toggle("sticky", window.scrollY > 0)
});