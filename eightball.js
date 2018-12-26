const answers = [
  "Yes.",
  "No.",
  "Perhaps.",
  "It's a matter of perspective.",
  "Are you sure that's the right question?",
  "Yes, but not in the way you might think.",
  "No, but there is always another way.",
  "No clear answer is evident.",
  "Try asking another way.",
  "Stay focused, and it could be.",
  "Look inside. You already know the answer.",
  "Things are fuzzy.",
  "Everything will be alright.",
  "Some danger lurks that way.",
  "You'll suffer, but you'll be happy about it.",
  "Your destiny is yours. Don't need a magic eight-ball to know that.",
  "That's a hard one. Come back later.",
  "Things are looking up.",
  "Think about it. Why are you really asking?",
  "I say, Google it."
];

var question = document.getElementById("userQuestion");

function rnd() {
  var result = document.getElementById("answer");

  let triangle = document.getElementById("triangle");
  $(triangle).fadeOut(2000, function() {
    $(triangle).fadeIn(2000);

    $(answer).fadeIn(2000);
    if (question.value === "" || question.value.includes("?") === false) {
      result.innerHTML = "You have to type a question first.";
    } else {
      result.innerHTML = answers[Math.floor(Math.random() * 20)];
      setTimeout(function() {
        let repeatQuestion = confirm("Want to ask another question?");

        if (repeatQuestion == true) {
          question.value = "";
          result.innerHTML = "";
        } else {
          window.close();
        }
      }, 4000);
    }
  });
}

function clear() {
  question.value = "";
}

let clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", clear);

let askBtn = document.getElementById("ask");

askBtn.addEventListener("click", rnd);
