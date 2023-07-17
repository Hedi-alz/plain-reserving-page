function reservation() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");
  let movie = prompt("What movie do you want to watch?");
  let day = prompt("Which day do you want to watch it?");
  day = day.toLowerCase();
  let heading = document.querySelector("h2");
  if (day === "monday" || day === "wednesday") {
    heading.innerHTML = "Sorry, we're closed on" + " " + day + "&#9785";
  } else {
    heading.innerHTML =
      day +
      " " +
      "is reserved for you" +
      " " +
      name +
      " " +
      ",enjoy watching" +
      " " +
      movie +
      "&#9786;";
  }
}
let button = document.querySelector("button");
button.addEventListener("click", reservation);
