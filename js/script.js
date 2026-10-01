/* Fade suave das seções ao rolar. Sem biblioteca. */
(function(){
  var itens = document.querySelectorAll('.rev');
  if(!('IntersectionObserver' in window)){
    itens.forEach(function(i){ i.classList.add('on'); });
    return;
  }
  var obs = new IntersectionObserver(function(es){
    es.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('on'); obs.unobserve(e.target); }
    });
  },{threshold:.12});
  itens.forEach(function(i){ obs.observe(i); });
})();
