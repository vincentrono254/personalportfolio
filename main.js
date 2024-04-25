var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-content");

function openTab(tabname) {
  for (tablink of tablinks) {
    tablinks.classList.remove("active-link");
  }
}
