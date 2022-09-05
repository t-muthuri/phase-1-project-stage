const vehicle = document.querySelector('.vehicle');
const seat = document.querySelector('.row .seat:not(.booked)');
const seatNumber = document.getElementById('seat-number');
const totalAmount = document.getElementById('total-amount');
const busChoice = document.getElementById('PSV');

// serverStore();
let amountCharged = +busChoice.value;
//console.log (amountCharged);

vehicle.addEventListener ('click', (event) => {
    // console.log (event.target)
    if (event.target.classList.contains('seat')&& !event.target.classList.contains('booked')){
    //separate booked and empty seats
    event.target.classList.toggle('picked');
    //changing color of seat according to legend
    }
    //call a function to count seats picked and charge
    tailorFeeToSeats();
})

function tailorFeeToSeats (){
    const seatsPicked = document.querySelectorAll('.row .seat.picked');
    // console.log(seatsPicked)
    // const seatInd = [...seatsPicked].map(function(seat){
    //     return [...seat].indexOf(seat);
    // })

    // localStorage.setItem('seatsPicked', JSON.stringify(seatInd));

    const numberOfSeatsPicked = seatsPicked.length;

    seatNumber.innerText = numberOfSeatsPicked;
    totalAmount.innerText = numberOfSeatsPicked * amountCharged;
}


//pick a bus, book a seat(s) and see the charges
busChoice.addEventListener ('change', (event)=> {
    amountCharged = +event.target.value;
    // bookStore (event.target.selectedIndex, event.target.value)
    //pun intended
    tailorFeeToSeats();
});

//load ind and value
function loadDataValue (ind, val){
    localStorage.setItem('seatInd', ind) 
    localStorage.setItem('seatVal',val)
}

tailorFeeToSeats()

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://3b036afe-0110-4202-b9ed-99718476c2e0@api.navitia.io/v1/coverage/sandbox/lines", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

// function serverStore(){
//     const seatsPicked = JSON.parse(localStorage.getItem(seatsPicked))

//     if (seatsPicked !== null && seatsPicked.length > 0){
//         seats.forEach((seat, index)=> {
//             if(seatsPicked.indexOf(index)> -1){
//                 seat.classList.add('picked');
//             }
//         })
//     }
//     const seatPickedInd =localStorage.getItem('seatPickedInd')

//     if (seatPickedInd != null){
//         busChoice.selectedIndex = seatInd;
//     }
// }


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
..pick a bus and book a seat
-Change
..colour of the seat changes
..amount on the screen updates when a seat is booked
-DOMContentLoaded
-Hover
..name appears when you hover on a matatu image
-Keypress

#THE STORY YOU ARE TELLING
Cyrella, a young lady working at Optica along Moi Avenue is winding up her work day at 5.14 a.m.
She checks the time on her phone and navigates to the #STAGE app to see if she can get a bus to Thika.
Sighing, she scrolls down to the booking section and taps the #select-your-PSV option and chooses Super Metro.
Surprisingly, the next available bus to Thika is just ... 5 minutes away.
Fortunately, despite it being rush hour, there is a Super Metro bus stuck in traffic along Tom Mboya that is expected at Archives in less than 5 minutes.
Knowing how long the online queue could get in less than 15 minutes, she promptly picks a window seat and sets about packing her bags to head home.
In a little over 7 minutes the bus is completely booked and Cyrella walks to the stage.
She silently marvels at how much has changed since the psv saccos started using the #STAGE app.
No more standing in line.
No more haggling for a seat. 
No more commotion nor congestion at stage.

 */