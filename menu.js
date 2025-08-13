// Drawer interactions (no web3)
const drawer = document.getElementById('drawer');
const toggle = document.getElementById('menuToggle');
const closeBtn = document.getElementById('closeDrawer');
const scrim = document.getElementById('scrim');

function openDrawer(){
  drawer.classList.add('open');
  drawer.setAttribute('aria-hidden','false');
  toggle.setAttribute('aria-expanded','true');
  scrim.classList.add('show');
  scrim.hidden = false;
}
function closeDrawer(){
  drawer.classList.remove('open');
  drawer.setAttribute('aria-hidden','true');
  toggle.setAttribute('aria-expanded','false');
  scrim.classList.remove('show');
  scrim.hidden = true;
}

toggle?.addEventListener('click', ()=>{
  if (drawer.classList.contains('open')) closeDrawer(); else openDrawer();
});
closeBtn?.addEventListener('click', closeDrawer);
scrim?.addEventListener('click', closeDrawer);
document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer(); });
