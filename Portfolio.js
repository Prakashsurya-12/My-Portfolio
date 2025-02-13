$(document).ready(function () {
    $(window).scroll(function () {
      // Sticky navbar on scroll script
      if ($(this).scrollTop() > 50) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      // Scroll-up button show/hide script
      if ($(this).scrollTop() > 1600) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    // Slide-up script
    $(".scroll-up-btn").click(function () {
      $("html, body").animate({ scrollTop: 0 }, "slow");
    });
  
    $(".navbar .menu li a").click(function () {
      // Applying smooth scroll on menu items click
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top
        },
        800
      );
    });
  
    // Toggle menu/navbar script
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    // Typing text animation script
    var typed = new Typed(".typing", {
      strings: [
        "Web Developer",
        "MERN Stack Developer",
        "SQL Developer"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    var typed2 = new typed2(".typing-2", {
      strings: [
        "MERN Stack Developer",
        "Web Developer",
        "SQL Developer"
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    // Owl carousel script
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  });
  function submitForm() {
    var form = document.getElementById("contactForm");
    
    // Check if all required fields are filled
    if (form.checkValidity()) {
        // Simulate form submission (replace this with your actual form submission logic)
        alert("This is just for show, there is no database. If you want to contact Surya Jiii then you can do it using let's connect ! section, provide all the valid details.")
        // Reset the form
        form.reset();
    } else {
        // If not all required fields are filled, show an alert or take appropriate action
        alert("Please fill in all required fields.");
    }
}