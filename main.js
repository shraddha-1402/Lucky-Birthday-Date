const bdayDate = document.querySelector("#bday_date");
const luckyNumber = document.querySelector("#lucky_number");
const form = document.querySelector("#form");
const output = document.querySelector("#output");
const delPrivacyNote = document.querySelector("#del_privacy_note");
const contentDiv = document.querySelector("#content_div");

var imgHappy = new Image();
imgHappy.src = "./images/happy.gif";
imgHappy.alt = "happy";
imgHappy.className = "output-gif";

var imgSad = new Image();
imgSad.src = "./images/sad.gif";
imgSad.alt = "sad";
imgSad.className = "output-gif";


function removePrivacyNote() {
  var close = document.querySelector("#privacy_note");
  var opacity = 1;
  close.style.opacity = 1;
  var interval = setInterval(() => {
    if (opacity > 0) {
      opacity -= 0.2;
      close.style.opacity = opacity;
    } else {
      clearInterval(interval);
      close.remove();
    }
  }, 50);
}

function scrollDown() {
  contentDiv.scrollTop = contentDiv.scrollHeight;
}


function checkIfLucky(event) {

  while (output.firstElementChild !== null) {
    output.firstElementChild.remove();
  }

  var dateElement = bdayDate.value.split("-");
  var number = parseInt(luckyNumber.value);
  var sum = 0;
  dateElement.forEach(d => {
    var element = parseInt(d);
    while (element > 0) {
      sum += element % 10;
      element = Math.floor(element / 10);
    }
  });

  let p = document.createElement("p");
  if (sum % number === 0) {
    p.innerText = "Yayy! Your Birthday Date is Lucky!";
    output.append(p, imgHappy);
  }
  else {
    p.innerText = "Aww.. Your Birthday Date is Not Lucky!";
    output.append(p, imgSad);
  }
  scrollDown();
  event.preventDefault();
}
form.addEventListener("submit", checkIfLucky);

delPrivacyNote.addEventListener("click", removePrivacyNote);

