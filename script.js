const themeButton = document.querySelector('#theme');
let savedTheme;
try { savedTheme = localStorage.getItem('portfolio-theme'); } catch (_) {}
function applyTheme(light) {
  document.body.classList.toggle('light', light);
  themeButton.setAttribute('aria-label', `Switch to ${light ? 'dark' : 'light'} theme`);
}
applyTheme(savedTheme === 'light');
themeButton.addEventListener('click', () => {
  const light = !document.body.classList.contains('light');
  applyTheme(light);
  try { localStorage.setItem('portfolio-theme', light ? 'light' : 'dark'); } catch (_) {}
});
document.querySelectorAll('.details').forEach(button => {
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(open));
    button.nextElementSibling.hidden = !open;
  });
});
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#copy').addEventListener('click', async () => {
  const email = document.querySelector('#email').textContent.trim();
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(email);
    status.textContent = 'Email copied to clipboard.';
  } catch (_) {
    status.textContent = `Copy this email: ${email}`;
  }
});
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('nav a').forEach(link => {
          link.classList.toggle('active', link.hash === `#${entry.target.id}`);
        });
      }
    });
  }, {rootMargin: '-15% 0px -55% 0px'});
  document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
}
document.querySelectorAll("#projects .details").forEach((button) => {
    button.addEventListener("click", () => {
        const detail = document.getElementById(
            button.getAttribute("aria-controls")
        );

        if (!detail) return;

        const expanded = button.getAttribute("aria-expanded") === "true";

        button.setAttribute("aria-expanded", String(!expanded));
        detail.hidden = expanded;
    });
});
document.getElementById("year").textContent = new Date().getFullYear();