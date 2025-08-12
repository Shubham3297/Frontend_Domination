// console.log("Test");

// Q-1 Change the Text
// var btn = document.querySelector("button");
// var p = document.querySelector("p");

// btn.addEventListener("click", function () {
//   p.textContent = "Hellow Word...!!!!";
// });

// Q-2 Swap Images
// var img1 = document.querySelector("#img1");
// var img2 = document.querySelector("#img2");
// var btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   var src1 = img1.src;
//   var src2 = img2.src;

//   img1.src = src2;
//   img2.src = src1;
// });

// Q-3 A Form submission and validation
// var inp1 = document.querySelector("#inp1");
// var inp2 = document.querySelector("#inp2");
// var form = document.querySelector("form");
// var h4 = document.querySelector("h4");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   if (inp1.value === "" || inp2.value === "") {
//     h4.textContent = "Error... , Some fields are empty.";
//     h4.style.color = "red";
//   } else {
//     h4.textContent = "";
//     h4.style.color = "black";
//   }
// });

// Q-3 B Form submission and validation
var form = document.querySelector("form");
var inps = document.querySelectorAll('input[type="text"]');
var h4 = document.querySelector("h4");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  for (var i = 0; i < inps.length; i++) {
    if (inps[i].value.trim() === "") {
      h4.textContent = "Error... , Some fields are empty.";
      h4.style.color = "red";
      break;
    } else {
      h4.textContent = "";
      h4.style.color = "black";
    }
  }
});
