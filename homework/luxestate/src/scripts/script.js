function openMenu(){
  var element = document.getElementById("mobileMenu");
  var divs = document.querySelectorAll("#mobileMenu");

  if(!element.classList.contains("show")){
    for (var i = 0; i < divs.length; i++){
     divs[i].classList.add('show');
   }
  }

  else{
    for (var i = 0; i < divs.length; i++){
      divs[i].classList.remove("show");
    }
  }
}