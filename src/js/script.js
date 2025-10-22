function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    const icon = button.querySelector(".icon");
    const isActive = item.classList.contains("active");

    // Fecha todas as outras perguntas
    document.querySelectorAll(".faq-item").forEach((el) => {
      el.classList.remove("active");
      el.querySelector(".icon").textContent = "+";
    });

    // Alterna o item clicado
    if (!isActive) {
      item.classList.add("active");
      icon.textContent = "–";
    } else {
      item.classList.remove("active");
      icon.textContent = "+";
    }
  });
});

ScrollReveal().reveal(".about-container h2", {
  origin: "left",
  distance: "20%",
  duration: 1300,
});

ScrollReveal().reveal(".about-container p", {
  origin: "left",
  distance: "20%",
  duration: 1300,
});

ScrollReveal().reveal(".about-container img", {
  origin: "left",
  distance: "20%",
  duration: 1300,
});

ScrollReveal().reveal(".about-button", {
  origin: "left",
  distance: "20%",
  duration: 1300,
});

ScrollReveal().reveal(".card", {
  origin: "bottom",
  distance: "20%",
  duration: 1300,
});

ScrollReveal().reveal(".section-obstaculos h1", {
  origin: "right",
  distance: "40%",
  duration: 1300,
});

ScrollReveal().reveal(".equipamento-content", {
  origin: "right",
  distance: "40%",
  duration: 1500,
});

ScrollReveal().reveal(".equipamento-image", {
  origin: "bottom",
  distance: "40%",
  duration: 1800,
 reset: true,
});

ScrollReveal().reveal(".equi-effect", {
  origin: "left",
  distance: "40%",
  duration: 1800,
reset: true,
});
ScrollReveal().reveal(".about-text ", {
  origin: "right",
  distance: "50%",
  duration: 1800,
  reset: true,
});

ScrollReveal().reveal(".about-section img ", {
  origin: "left",
  distance: "60s%",
  duration: 1800,
  reset: true,
});


window.addEventListener("load", function() {
    document.body.classList.add("loaded");
  });
