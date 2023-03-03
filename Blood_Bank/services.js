function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElementById("myForm2").style.display = "none";
  document.getElementById("myForm3").style.display = "none";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openForm2() {
  document.getElementById("myForm2").style.display = "block";
  document.getElementById("myForm3").style.display = "none";
  document.getElementById("myForm").style.display = "none";
}

function closeForm2() {
  document.getElementById("myForm2").style.display = "none";
}

function openForm3() {
  document.getElementById("myForm3").style.display = "block";
  document.getElementById("myForm").style.display = "none";
  document.getElementById("myForm2").style.display = "none";
}

function closeForm3() {
  document.getElementById("myForm3").style.display = "none";
}

const loginForm = document.getElementById("login-home");
const loginButton = document.getElementById("submit-home");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "admin" && password === "password") {
        alert("You have successfully logged in.");
        location.href = "admin.html";
    } else {
      alert("Incorrect id or password!");
      location.reload();
    }
})

const city = [{name: "gwalior",loc1: "x",loc2: "y",loc3: "z"},
  {name: "guna",loc1: "a",loc2: "b",loc3: "c"},
  {name: "indore",loc1: "p",loc2: "q",loc3: "r"}]


let newbtn = document.querySelector("#loc-find")
let l3, l2, l1, i = 0;
let input = document.querySelector("#location")
let al = false;


newbtn.addEventListener("click", (e) => {
  e.preventDefault();
  let check = input.value.toLowerCase()

  for (loc of city)
  {
    i++;
    if (check === loc.name)
    {
      l1 = loc.loc1;
      l2 = loc.loc2;
      l3 = loc.loc3;
      let message = `Location 1: ${l1} \nLocation 2: ${l2} \nLocation 3: ${l3}`;
      alert(message);
      al = true;
    }
  }
  if (al === false)
    alert("Loction Not Found");
})


