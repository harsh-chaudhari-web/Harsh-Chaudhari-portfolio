// About me 

var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// Header

var sidemenu = document.getElementById("sidemenu");
var headerLinks = document.querySelectorAll("#sidemenu li a");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

headerLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      closemenu();
    });
  });
  
// Form

const form = document.querySelector("form");
const msg = document.getElementById("msg");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(data).toString(),
  })
    .then(() => {
      msg.innerHTML = "Message sent successfully!";
      form.reset();
    })
    .catch((error) => {
      msg.innerHTML = "An error occurred, please try again later.";
      console.error(error);
    });
});

// Alert for cv

function unavailable() {
  alert("Not available right now! Try again later.");
}