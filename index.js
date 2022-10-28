const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");

let fruit = ["apple", "apple", "apple", "orange", "orange"];

function apple() {
  for (let index = 0; index < fruit.length; index++) {
    if (fruit[index] === "apple") {
      div1.innerHTML += fruit[index];
    }
  }
}
function orange() {
  for (let index = 0; index < fruit.length; index++) {
    if (fruit[index] === "orange") {
      div2.innerHTML += "orange";
    }
  }
}
