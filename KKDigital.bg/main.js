const nav=document.getElementById('navbar');
if(nav)window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>10),{passive:true});
const pg=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav-links a').forEach(a=>{if(a.getAttribute('href')===pg)a.classList.add('active')});
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}})},{threshold:0.06});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
setTimeout(()=>document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible')),900);
