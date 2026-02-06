let score = 0;

let color = prompt("Which color do you prefer?\na)Red\nb)Blue");
let music = prompt("Do you like country?\na)Hell no\nb)It's my favorite");
let alcohol = prompt("Do you drink?\na)Yes\nb)No");

if (color === "a") {
  alert("You are correct!");
  score = score + 1;
} else if (color === "b") {
  alert("Wrong!");
}

if (music === "a") {
  alert("You are correct sir");
  score = score + 1;
} else if (music === "b") {
  alert("Absolutely the wrong answer");
}

if (alcohol === "a") {
  alert("Correct, but be responsible!");
  score = score + 1;
} else if (alcohol === "b") {
  alert("Not all heroes wear capes");
}

alert("You've finished the quiz!\nLet's see if we get along or not");
if (score === 0) {
  alert("We would not get along, you and I");
} else if (score === 3) {
  alert("Did we just become best friends?!");
} else {
  alert("I guess we can hang out");
}
