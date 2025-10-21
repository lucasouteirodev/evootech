function toggleMenu() {
      document.getElementById('navLinks').classList.toggle('active');
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



ScrollReveal().reveal('.about-container h2', {
  origin: 'left',
  distance: '20%',
  duration: 1300,
  reset: true,
});

ScrollReveal().reveal('.about-container p', {
  origin: 'left',
  distance: '20%',
  duration: 1300,
  reset: true,
});

ScrollReveal().reveal('.about-container img', {
  origin: 'left',
  distance: '20%',
  duration: 1300,
  reset: true,
});

ScrollReveal().reveal('.about-button', {
  origin: 'left',
  distance: '20%',
  duration: 1300,
  reset: true,
});

ScrollReveal().reveal('.card', {
  origin: 'bottom',
  distance: '20%',
  duration: 1300,
  reset: true,
});

ScrollReveal().reveal('.section-obstaculos h1', {
  origin: 'right',
  distance: '40%',
  duration: 1300,
  reset: true,
});

// carousel


