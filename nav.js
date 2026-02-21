document.addEventListener('DOMContentLoaded', function(){
  const btns = document.querySelectorAll('.hamburger');
  btns.forEach(btn=>{
    const nav = btn.parentElement.querySelector('.nav-links');
    if(!nav) return;

    const setOpen = (open) => {
      nav.classList.toggle('open', !!open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    };

    const toggle = () => setOpen(!nav.classList.contains('open'));

    btn.addEventListener('click', ()=> toggle());

    btn.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); toggle(); }
      if(e.key === 'Escape'){ setOpen(false); btn.focus(); }
    });

    // Close menu when a nav link is clicked (mobile navigation)
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', ()=> setOpen(false)));

    // Close when clicking outside
    document.addEventListener('click', (e)=>{
      if(!nav.classList.contains('open')) return;
      if(!nav.contains(e.target) && e.target !== btn) setOpen(false);
    });

    // Close on global ESC
    document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') setOpen(false); });
  });
});
