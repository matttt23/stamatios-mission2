// -greetings-
let greetcontainer = document.querySelector(".greetcontainer");

let timeNow = new Date().getHours();
console.log(timeNow);
let greeting =
  timeNow >= 3 && timeNow < 12
    ? "Good Morning"
    : timeNow >= 12 && timeNow < 18
    ? "Good Afternoon"
    : "Good Evening";
console.log(greeting);
greetcontainer.innerHTML = `<h1>${greeting}</h1>`;

// -current time-
let time = document.getElementById("current-time");

setInterval(() => {
  let d = new Date();
  time.innerHTML = d.toLocaleTimeString();
}, 1000);

let d = new Date();
time.innerHTML = d.toLocaleTimeString();

//-current date-
let dateToday = document.getElementById("date-today");

let today = new Date();
let day = `${today.getDate() < 10 ? "0" : ""}${today.getDate()}`;

let month = `${today.getMonth() + 1 < 10 ? "0" : ""}${today.getMonth() + 1}`;

let year = today.getFullYear();

dateToday.textContent = `${day}/${month}/${year}`;
