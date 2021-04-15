/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  time = time.split(":");
  time = parseInt(time[0]);
  if (time <= 12) {
      return  "Good Morning";
  } else if ( time > 12 && time <= 17) {
      return  "Good Afternoon";
  } else {
      return "Good Evening";
  }
 const displayMessage = ("") => {
   document.getElementById("greeting").innerText = "";
 }
}

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
// const displayMessage = () => {
//
// }
