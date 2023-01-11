//const d = new Date();
//document.getElementById("demo").textContent = new Date().toDateString("en us", d);
//const last_updated = document.querySelector("#last_updated");
let last_updated = document.getElementById("last_updated");

//year.textContent = new Date().getFullYear();
last_updated.innerHTML = document.lastModified;