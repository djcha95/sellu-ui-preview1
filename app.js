// Minimal UI helpers for the mock (no backend, no persistence)

function setActiveNav() {
  const path = (location.pathname.split("/").pop() || "home.html").toLowerCase();
  document.querySelectorAll("nav a[data-page]").forEach(a => {
    a.classList.toggle("active", a.dataset.page === path);
  });
}
setActiveNav();

// Quantity controls (detail/cart)
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-qty]");
  if (!btn) return;

  const wrap = btn.closest("[data-qty-wrap]");
  const input = wrap?.querySelector("[data-qty-val]");
  if (!input) return;

  const mode = btn.dataset.qty;
  let v = parseInt(input.textContent || "1", 10);
  if (mode === "inc") v += 1;
  if (mode === "dec") v = Math.max(1, v - 1);
  input.textContent = String(v);
});

// Tabs (detail)
document.addEventListener("click", (e) => {
  const tab = e.target.closest("[data-tab]");
  if (!tab) return;

  const root = tab.closest("[data-tabs]");
  if (!root) return;

  const key = tab.dataset.tab;
  root.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t === tab));

  root.querySelectorAll("[data-panel]").forEach(p => {
    p.style.display = (p.dataset.panel === key) ? "block" : "none";
  });
});
