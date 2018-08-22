// Load tab-content1 by default when page loaded
window.onload = defaultLoad;

function defaultLoad() {
  document.getElementById('tab-content1').style.display = "block";
  buttons[0].className += " active";
}

 // Declare all variables
let i;
const tab1 = document.getElementById('tab-content1');
const tab2 = document.getElementById('tab-content2');
const tab3 = document.getElementById('tab-content3');

const allTabs = [tab1, tab2, tab3];

const buttonsCollection = document.getElementsByClassName('button');
const buttons = Array.prototype.slice.call( buttonsCollection );

function openTab(evt, tabName) {

  // Hide all tabs

  for (i = 0; i < allTabs.length; i++) {
      allTabs[i].style.display = "none";
  }

  // Remove class 'active' from every button

  for (i = 0; i < buttons.length; i++) {
      buttons[i].className = buttons[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}