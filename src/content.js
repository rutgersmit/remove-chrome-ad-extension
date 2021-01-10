if (document.title.indexOf("Google") != -1) {
  setTimeout(function(){ 
    var el = document.querySelector("#gbw > div > div > div:nth-child(3)");
    if(el){
      el.remove();
    }
  }, 1000);
}
