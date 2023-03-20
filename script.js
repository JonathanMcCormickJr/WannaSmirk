// Set the date we're counting down to for raising payment
var countDownRaise = new Date("Mar 31, 2023 23:01:56").getTime();

// Set the date we're counting down to for files being lost
var countDownLost = new Date("Jul 31, 2023 00:00:01").getTime();

// Create reusable function
// Code here
function countDownGenerator(countDownType, elementID, dateOfTrigger) {
    // function body
    console.log(countDownType, elementID, dateOfTrigger);

    // Update the countdown every second
    var x = setInterval(function() {
    
      // Get the current date and time
      var now = new Date().getTime();
    
      // Find the distance between now and the countdown date
      var distance = countDownType - now;
    
      // Calculate the days, hours, minutes, and seconds remaining
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Output the result in an element with elementID
      document.getElementById(elementID).innerHTML = "Time left: <br><br><span class='timer'>" + days + ":" + hours + ":" + minutes + ":" + seconds + "</span>";
    
      // If the countdown is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById(elementID).innerHTML = "EXPIRED";
      }
    }, 1000);
    
    
    
    
    
    const paymentElement = document.getElementById(dateOfTrigger); // get the HTML element with a certain id
    const date = new Date(countDownType);
    const formattedDate = date.getFullYear() + "-" + 
      (date.getMonth() + 1).toString().padStart(2, '0') + "-" + 
      date.getDate().toString().padStart(2, '0') + " at " + 
      date.getHours().toString().padStart(2, '0') + ":" + 
      date.getMinutes().toString().padStart(2, '0') + ":" + 
      date.getSeconds().toString().padStart(2, '0');
    paymentElement.textContent = formattedDate;
    
    
}

countDownGenerator(countDownRaise, "countdown-raise", "payment_raise_date");

countDownGenerator(countDownLost, "countdown-lost", "payment_lost_date");




// Copy BTC address feature
function copyText(button) {
  const text = document.querySelector('#crypto-address').innerText;
  navigator.clipboard.writeText(text);
  button.innerText = 'Copied!';
  setTimeout(() => {
    button.innerText = 'Copy';
  }, 2000);
}