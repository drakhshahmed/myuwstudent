const pages = {
  dashboard: { title: "Dashboard", sub: "Overview of your week" },
  classes:   { title: "Classes", sub: "Your enrolled courses (demo)" },
  finances:  { title: "Finances", sub: "Bills and payments (demo)" },
  profile:   { title: "Profile", sub: "Your details (demo)" },
  settings:  { title: "Settings", sub: "Preferences (demo)" },
};

document.querySelectorAll(".nav-item").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach(b => b.classList.remove("is-active"));
    btn.classList.add("is-active");

    const key = btn.dataset.page;
    document.getElementById("pageTitle").textContent = pages[key].title;
    document.getElementById("pageSub").textContent   = pages[key].sub;
  });
});
