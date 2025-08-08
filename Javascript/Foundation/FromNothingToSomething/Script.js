console.log("first");
let a = 4;
let b = a;
b = b + 2;
console.log("b", b);
console.log("a", a);

// var btn = document.querySelector("button");
// btn.textContent = "Starting";
// btn.textContent += " Starting";

// var h1 = document.querySelector("h1");
// h1.textContent = "<i>Text</i>";
// h1.innerHTML = "<i>Text</i>";

// var h1 = document.querySelector("h1");
// h1.style.color = "red";
// h1.style.fontSize = "20px";

var h1 = document.querySelector("h1");
h1.classList.add("box");
h1.classList.remove("box");
