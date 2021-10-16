const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const typing = document.querySelector(".section-header-title");
    if (entry.isIntersecting) {
      typing.classList.add("typewriter");
      return;
    }
    typing.classList.remove("typewriter");
  });
});

observer.observe(document.querySelectorAll(".section-header"));
