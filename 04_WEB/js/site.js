/* TERRAXIS · site.js — nav, menú móvil, reveals, formulario (compartido) */
(function(){
  document.documentElement.classList.add('js');
  var yr=document.getElementById('yr'); if(yr) yr.textContent=new Date().getFullYear();

  /* nav scrolled + activo por página */
  var nav=document.getElementById('nav');
  if(nav){
    var onScroll=function(){nav.classList.toggle('scrolled',window.scrollY>50);};
    window.addEventListener('scroll',onScroll,{passive:true}); onScroll();
  }
  var path=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  document.querySelectorAll('.nav-links a').forEach(function(a){
    var href=(a.getAttribute('href')||'').toLowerCase();
    if(href===path || (path==='' && href==='index.html') || (path==='index.html' && href==='index.html')) a.classList.add('active');
  });

  /* menú móvil */
  var menu=document.getElementById('menu'), toggle=document.getElementById('navToggle'), open=false;
  function closeMenu(){open=false;if(menu)menu.classList.remove('open');if(toggle)toggle.textContent='☰';}
  if(toggle&&menu){
    toggle.addEventListener('click',function(){open=!open;menu.classList.toggle('open',open);toggle.textContent=open?'✕':'☰';});
    menu.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeMenu);});
  }

  /* reveals con IntersectionObserver */
  var reveals=[].slice.call(document.querySelectorAll('.reveal'));
  if('IntersectionObserver' in window && reveals.length){
    var io=new IntersectionObserver(function(ents){
      ents.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    },{rootMargin:'0px 0px -8% 0px',threshold:.08});
    reveals.forEach(function(el){io.observe(el);});
  } else { document.documentElement.classList.remove('js'); }

  /* smooth scroll para anclas internas (misma página) */
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var id=a.getAttribute('href'); if(id.length<2) return;
      var t=document.querySelector(id); if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth',block:'start'});closeMenu();}
    });
  });

  /* Lenis (si está cargado) */
  if(window.Lenis){
    try{
      var lenis=new Lenis({duration:1.05,smoothWheel:true,prevent:function(){return false;}});
      function raf(t){lenis.raf(t);requestAnimationFrame(raf);} requestAnimationFrame(raf);
    }catch(e){}
  }

  /* formulario de contacto (stopgap mailto) */
  var f=document.getElementById('demoForm');
  if(f){
    f.addEventListener('submit',function(e){
      e.preventDefault();
      var g=function(n){var el=f.querySelector('[name="'+n+'"]');return el?el.value.trim():'';};
      var body=encodeURIComponent('Nombre: '+g('nombre')+'\nOrganización/tipo: '+g('org')+'\nEstado: '+g('estado')+'\nWhatsApp: '+g('whatsapp')+'\nCorreo: '+g('correo')+'\n\nMensaje:\n'+g('mensaje'));
      var subject=encodeURIComponent('Cotización a la medida — '+(g('nombre')||'sitio web'));
      var btn=f.querySelector('button[type=submit]'); if(btn){btn.textContent='Abriendo tu correo…';}
      window.location.href='mailto:contacto@terraxiselectoral.com?subject='+subject+'&body='+body;
      setTimeout(function(){if(btn)btn.textContent='Solicitud lista ✓';},1500);
    });
  }
})();
