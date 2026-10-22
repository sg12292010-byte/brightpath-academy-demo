
document.addEventListener("DOMContentLoaded", () => {
  // Keep the footer year updated
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Smooth scrolling for links to sections on this page
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        event.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  // Add a small visual response to course links
  document.querySelectorAll(".course-card a").forEach((link) => {
    link.addEventListener("click", () => {
      link.style.opacity = "0.7";

      window.setTimeout(() => {
        link.style.opacity = "1";
      }, 300);
    });
  });

  console.log("BrightPath Academy demo is ready!");
});
