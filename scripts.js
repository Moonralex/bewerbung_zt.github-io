const another_thing = "KzQ5IDE1MTIgNjE4MSA2MDY="
const some_thing = "b2xla3NpaS5rb3ZhbGVua28uMTk5M0BnbWFpbC5jb20="


function showPage(pageId, navId, printBtnId) {

  document.querySelectorAll('.content-page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById(pageId);
  if (page) page.classList.add('active');
  document.querySelectorAll('.section-nav').forEach(nav => nav.classList.remove('active'));
  const nav = document.getElementById(navId);
  if (nav) nav.classList.add('active');
  document.querySelectorAll('.btn-activation').forEach(btn => btn.classList.remove('active'));
  const printBtn = document.getElementById(printBtnId);
  if (printBtnId) printBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });

}
function toggleTheme() {
  document.body.classList.toggle('dark');
}
function getThingOne() {
    document.getElementById("thing-one").innerHTML = atob(some_thing);
}

function getAnotherThing() {
  document.getElementById("thing-two").innerHTML = atob(another_thing);
}

function hideById(id) {
  document.getElementById(id).style.display = "none";
}

function getIconById(iconName) {
  fetch("icons/" + iconName + ".svg")
      .then(res => res.text())
      .then(svg => {
        document.getElementById(iconName).innerHTML = svg + " ";
      })
}

function getIconByClass(iconName) {
  fetch("icons/" + iconName + ".svg")
      .then(res => res.text())
      .then(svg => {
        const elements = document.getElementsByClassName(iconName);
        for (let el of elements) {
          el.innerHTML = svg + " ";
        }
      })
}

function getImageById(imageName, imageId) {
  document.getElementById(imageId).src = "images/" + imageName + ".jpg";
}

function openPDF(pdfName) {
  window.open("images/" + pdfName + ".pdf", "_blank");
}

function changeImage() {
  let theme = document.getElementById("body").classList;
  if (theme.contains("dark")) {
    document.getElementById("svg-image").src = "icons/" + "burger-dark.svg";
  }
  else {
    document.getElementById("svg-image").src = "icons/" + "burger.svg";
  }
}

function openSidebar() {
  document.getElementById("burger-button").classList.add("inactive");
  document.querySelector(".overlay").classList.add("active");
  document.getElementById("sidebar-content").classList.add("active");
  document.getElementById("sidebar").classList.add("active");
}

function hideSidebar() {
  document.getElementById("burger-button").classList.remove("inactive");
  document.querySelector(".overlay").classList.remove("active");
  document.getElementById("sidebar-content").classList.remove("active");
  document.getElementById("sidebar").classList.remove("active");
}

getIconByClass("print")
getIconByClass("check")
getIconByClass("python-file")
getIconById("night-light")
getIconById("file-cv")
getIconById("certificate")
getIconById("telephone")
getIconById("email")
getIconById("document")
getIconById("burger")
