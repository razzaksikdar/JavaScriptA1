function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  
}

function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function setStar(menuID)
{
  var menuItem = document.getElementById(menuID);
  menuItem.innerHTML = "* "+menuItem.innerHTML;
}

function clearStar(menuID)
{
  var menuItem = document.getElementById(menuID);
  menuItem.innerHTML = menuItem.innerHTML.substring(2);
}