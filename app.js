// Minimal drawer behavior (no web3 here)
const btn = document.getElementById('menuButton');
const drawer = document.getElementById('drawer');
const scrim = document.getElementById('scrim');
const closeBtn = document.getElementById('closeDrawer');

function openDrawer(){
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden', 'false');
  btn.setAttribute('aria-expanded','true');
  scrim.hidden = false;
}
function closeDrawer(){
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden','true');
  btn.setAttribute('aria-expanded','false');
  scrim.hidden = true;
}
btn?.addEventListener('click', openDrawer);
closeBtn?.addEventListener('click', closeDrawer);
scrim?.addEventListener('click', closeDrawer);
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeDrawer(); });
