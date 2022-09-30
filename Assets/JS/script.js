function menuJs() {
  let menuOpened = document.getElementById("menu-opened");

  if(menuOpened.style.display == "none") {
    menuOpened.style.display = "block";
  } else{
    menuOpened.style.display = "none";
  }
}