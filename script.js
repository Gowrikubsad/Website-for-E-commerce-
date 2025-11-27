// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Simple toast for "Add to cart" demo
function showToast(message) {
  const toast = document.querySelector(".toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

// Attach to all "Add to cart" buttons
document.querySelectorAll("[data-add-to-cart]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const product = btn.getAttribute("data-add-to-cart") || "Item";
    showToast(`${product} added to cart (demo)`);
  });
});
