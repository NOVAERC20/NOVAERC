const drawer = document.getElementById('drawer');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('closeBtn');

function openDrawer() {
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  menuBtn.setAttribute('aria-expanded', 'true');
}
function closeDrawer() {
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden', 'true');
  menuBtn.setAttribute('aria-expanded', 'false');
}

menuBtn.addEventListener('click', openDrawer);
closeBtn.addEventListener('click', closeDrawer);
drawer.addEventListener('click', (e) => {
  if (e.target === drawer) closeDrawer();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeDrawer();
});
