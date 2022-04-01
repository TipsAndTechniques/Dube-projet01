console.log("Hello")

// function DisplayAlert() {
//   alert("Les données seront traitées ici");
// }

let form1 = document.getElementById("formSoum");
// let form1 = document.querySelector("#formSoum")

form1.addEventListener("submit", (event) => {
  event.preventDefault();
  // Et éventuellement, plus d'instructions...
  alert("Les données seront traitées ici");
});
