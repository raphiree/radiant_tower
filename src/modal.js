export function modal() {
  const modal = document.getElementById('modal');
  document.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  })

  document.addEventListener("keydown", e=> {
    if (e.key === "Enter" || e.key === "Escape") {
      modal.style.display = 'none';
    }
  })

  const xButton = document.getElementsByClassName("close")[0];
  xButton.addEventListener("click", e => {
    modal.style.display = 'none';
  })
}