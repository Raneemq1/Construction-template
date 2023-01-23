let up=document.getElementById("move-to-up");
  window.addEventListener('scroll',function(){

    if(this.window.scrollY>400){
      up.style.opacity="1";
    
    }
    else{
      up.style.opacity="0";
    }
  
  
  });

  up.addEventListener('click',function(){
    window.scroll({
      top:0,
      behavior:"smooth"
    })
  });