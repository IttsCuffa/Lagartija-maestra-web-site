
(()=>{
    const d=document;
    const $container_menu=d.querySelector('.logo-menu');
    const $menu_lateral=d.querySelector('.menu-options');
    
    $container_menu.addEventListener('click',e=>{
        $container_menu.firstElementChild.classList.toggle('none');
        $container_menu.lastElementChild.classList.toggle('none');
        $menu_lateral.classList.toggle('open-menu')
    })
})();









 /**BTN Scroll top */
(()=>{
    const d=document,
    $btnScroll=d.querySelector(".btn-scroll-top")
  
  
  
    window.addEventListener("scroll",e=>{
      let scroll=d.documentElement.scrollTop;
      if(scroll>575){
        
        $btnScroll.classList.remove("hidden")
      }else{
    $btnScroll.classList.add("hidden")
      }
    })
  
  
    d.addEventListener("click",(e)=>{
      if(e.target.matches(".btn-scroll-top")){
        window.scrollTo({
          behavior:"smooth",
          top:0
        })
      }
    })
  
  })();
  

/***Intersecion observer */
(()=>{
    const d=document;
   const section=d.querySelectorAll("main section")
  
  
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("mostrar-seccion")
        }
      })
    })
   
    section.forEach(el=>observer.observe(el))
  })();