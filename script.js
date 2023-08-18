const starsContainer = document.getElementById("stars");
const stars = starsContainer.querySelectorAll(".star");

stars.forEach(star => {
  star.addEventListener("click", () => {
    const rating = star.getAttribute("data-value");
    alert(`Você avaliou o filme com ${rating} estrelas!`);
  });
});
