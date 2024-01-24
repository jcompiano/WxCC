// Set these for each customer demo...
const CUSTOMER_NAME = "Cisco Systems Scripty";
const CUSTOMER_IMAGE = "images/cisco-site.png";


//-----------------------------------------//
// Dont change anything below this line
//-----------------------------------------//


// Set title & image for the customer name
document.title = CUSTOMER_NAME;
document.getElementById("bgImage").src = CUSTOMER_IMAGE;


// Get reference to IMI Web Chat div
const imiWebChat = document.getElementById('divicw');


// Hide imi when the Contact Menu is open
document.getElementById('contactMenu').addEventListener('shown.bs.offcanvas', () => {
  imiWebChat.hidden = true;
});

// Show imi when the Contact Menu is closed
document.getElementById('contactMenu').addEventListener('hidden.bs.offcanvas', () => {
  imiWebChat.hidden = false;
});


// Toggles a bootstrap component
function bsToggle(bsComponent) {
  bsComponent.toggle();
}