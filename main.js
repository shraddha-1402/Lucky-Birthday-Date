const bdayDate = document.querySelector("#bday_date");
const luckyNumber = document.querySelector("#lucky_number");
const form = document.querySelector("#form");
const output = document.querySelector("#output");
const delPrivacyNote = document.querySelector("#del_privacy_note");

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

function checkIfLucky(event) {
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
  if (sum % number === 0)
    output.innerText = "Yayy! Your Birthday Date is Lucky!"
  else
    output.innerText = "Aww.. Your Birthday Date is Not Lucky!"
  event.preventDefault();
}

delPrivacyNote.addEventListener("click", removePrivacyNote);

form.addEventListener("submit", checkIfLucky);
