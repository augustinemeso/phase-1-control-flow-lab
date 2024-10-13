// Function to determine the greeting based on the distance
function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
      return "This one is on me!";
  } else if (distance > 400 && distance <= 2000) {
      return "That will be twenty bucks.";
  } else if (distance > 2000 && distance <= 2500) {
      return "I will gladly take your thirty bucks.";
  } else if (distance > 2500) {
      return "No can do.";
  }
}

// Function to check if the city is NYC using a ternary operator
function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

// Function to provide responses based on the tip amount using a switch statement
function switchOnCharmFromTip(tip) {
  switch (tip) {
      case "generous":
          return "Thank you so much.";
      case "not as generous":
          return "Thank you.";
      default:
          return "Bye.";
  }
}

// Test the functions
console.log(scuberGreetingForFeet(199)); // Output: "This one is on me!"
console.log(scuberGreetingForFeet(1500)); // Output: "That will be twenty bucks."
console.log(scuberGreetingForFeet(2100)); // Output: "I will gladly take your thirty bucks."
console.log(scuberGreetingForFeet(2700)); // Output: "No can do."

console.log(ternaryCheckCity("NYC")); // Output: "Ok, sounds good."
console.log(ternaryCheckCity("Los Angeles")); // Output: "No go."

console.log(switchOnCharmFromTip("generous")); // Output: "Thank you so much."
console.log(switchOnCharmFromTip("not as generous")); // Output: "Thank you."
console.log(switchOnCharmFromTip("nothing")); // Output: "Bye."
