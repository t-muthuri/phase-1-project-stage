const vehicle = document.querySelector('.vehicle');
const seat = document.querySelector('.row .seat:not(.booked)');
const seatNumber = document.getElementById('seat-number');
const totalAmount = document.getElementById('total-amount');
const seating = document.getElementById('seating');

const amountCharged = +seating.value;
//console.log (amountCharged);

vehicle.addEventListener ('click', (event) => {
    // console.log (event.target)
    if (event.target.classList.contains('seat')&& !event.target.classList.contains('booked')){
    //separate booked and empty seats
    event.target.classList.toggle('picked');
    //changing color of seat according to legend
    }
    //call a function to count seats picked and charge
    showNumberOfSeats();
})

function showNumberOfSeats (){
    const seatsPicked = document.querySelectorAll('.row .seat.picked');
    // console.log(seatsPicked)
    const numberOfSeatsPicked = seatsPicked.length;

    seatNumber.innerText = numberOfSeatsPicked;
    totalAmount.innerText = numberOfSeatsPicked * amountCharged;
}
/*
PSEUDOCODE
Use a public API
-Get landing page images
Use 3 event listeners
-Submit
..add comments on the review page
-Click
..like a psv sacco
..like counts increase when the icon is clicked
..pick and book a seat
-Onchange
..colour of the seat changes
..amount on the screen updates when a seat is booked
-DOMContentLoaded
-Hover
..name appears when you hover on a matatu image
-Keypress

 */