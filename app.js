// Highlight active sidebar item based on current filename
(() => {
  const file = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-page]").forEach(a => {
    if (a.getAttribute("href") === file) a.classList.add("active");
  });
})();
