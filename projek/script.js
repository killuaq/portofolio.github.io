document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.querySelector(".loading-screen");
  const gameCards = document.querySelectorAll(".game-card");

  // Smooth loading fade out
  window.addEventListener("load", () => {
    if (loadingScreen) {
      loadingScreen.style.opacity = "0";
      loadingScreen.style.visibility = "hidden";
      loadingScreen.style.transition = "opacity 0.6s ease, visibility 0.6s ease";

      setTimeout(() => {
        loadingScreen.remove();
      }, 700);
    }
  });

  // Toast notification
  const showToast = (message) => {
    const toast = document.createElement("div");

    toast.textContent = message;
    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%) translateY(20px)";
    toast.style.padding = "14px 22px";
    toast.style.background = "rgba(20, 20, 20, 0.95)";
    toast.style.color = "#fff";
    toast.style.borderRadius = "12px";
    toast.style.fontSize = "14px";
    toast.style.fontWeight = "500";
    toast.style.zIndex = "9999";
    toast.style.opacity = "0";
    toast.style.transition = "all 0.35s ease";
    toast.style.boxShadow = "0 10px 25px rgba(0,0,0,0.25)";
    toast.style.backdropFilter = "blur(10px)";

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.style.opacity = "1";
      toast.style.transform = "translateX(-50%) translateY(0)";
    });

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(-50%) translateY(20px)";

      setTimeout(() => {
        toast.remove();
      }, 350);
    }, 2200);
  };

  // Game card interaction
  gameCards.forEach((card) => {
    card.addEventListener("click", () => {
      // Remove active class from all cards
      gameCards.forEach((item) => item.classList.remove("active"));

      // Add active class
      card.classList.add("active");

      // Save selected game
      const selectedGame =
        card.dataset.game || card.getAttribute("data-game") || "game";

      localStorage.setItem("selectedGame", selectedGame);

      // Show toast
      showToast(`${selectedGame} dipilih`);

      // Smooth page fade out
      document.body.style.transition = "opacity 0.5s ease";
      document.body.style.opacity = "0";

      setTimeout(() => {
        window.location.href = "form.html";
      }, 500);
    });
  });
});