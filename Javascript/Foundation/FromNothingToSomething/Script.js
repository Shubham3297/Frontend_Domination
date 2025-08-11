console.log("first");
let a = 4;
let b = a;
b = b + 2;
console.log("b", b);
console.log("a", a);

// var btn = document.querySelector("button");
// btn.textContent = "Starting";
// btn.textContent += " Starting";

// Selection
// var h1 = document.querySelector("h1");
// h1.textContent = "<i>Text</i>";
// h1.innerHTML = "<i>Text</i>";

// Style
// var h1 = document.querySelector("h1");
// h1.style.color = "red";
// h1.style.fontSize = "20px";

// ClassList
// var h1 = document.querySelector("h1");
// h1.classList.add("box");
// h1.classList.remove("box");

// Create Element
// var h1 = document.createElement("h1");
// h1.textContent = "Hey";
// h1.classList.add("box");

// document.querySelector("body").appendChild(h1);

// var img = document.createElement("img");
// img.src =
// "https://plus.unsplash.com/premium_photo-1754398386796-ea3dec2a6302?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// document.querySelector("body").appendChild(img);
// document.querySelector("body").removeChild(img);

// Event Handling

var btn = document.querySelector("button");
// btn.addEventListener(event, callback);
// btn.addEventListener("click", function () {
//   // alert();
//   btn.textContent = "Uploading";
//   btn.style.backgroundColor = "red";
// });

// btn.addEventListener("dblclick", function () {
//   btn.textContent = "Uploading";
//   btn.style.backgroundColor = "red";
// });

btn.addEventListener("mouseover", function () {
  btn.textContent = "Uploading";
  btn.style.backgroundColor = "red";
});

btn.addEventListener("mouseleave", function () {
  btn.textContent = "Uploading";
  btn.style.backgroundColor = "green";
});
