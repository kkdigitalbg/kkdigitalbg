// NAV SCROLL
const nav=document.getElementById('navbar');
if(nav)window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>10),{passive:true});

// ACTIVE LINK
const pg=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav-links a').forEach(a=>{if(a.getAttribute('href')===pg)a.classList.add('active')});

// HAMBURGER
const burger=document.getElementById('burger');
const mobileMenu=document.getElementById('mobile-menu');
if(burger&&mobileMenu){
  burger.addEventListener('click',()=>{
    burger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  // close on link click
  mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
  }));
}

// REVEAL
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}});
},{threshold:0.06});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
setTimeout(()=>document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible')),900);
