function menuJs() {
  let menuOpened = document.getElementById("menu-opened");

  if(menuOpened.style.display == "block") {
    menuOpened.style.display = "none";
  } else{
    menuOpened.style.display = "block";
  }
  
}