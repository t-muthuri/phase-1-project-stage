const vehicle = document.querySelector('.vehicle');
const seat = document.querySelector('.row .seat:not(.booked)');
const seatNumber = document.getElementById('seat-number');
const totalAmount = document.getElementById('total-amount');
const busChoice = document.getElementById('PSV');

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

    const numberOfSeatsPicked = seatsPicked.length;

    seatNumber.innerText = numberOfSeatsPicked;
    totalAmount.innerText = numberOfSeatsPicked * amountCharged;
}


//pick a bus, book a seat(s) and see the charges
busChoice.addEventListener ('change', (event)=> {
    amountCharged = +event.target.value;

    tailorFeeToSeats();
});

//load ind and value
function loadDataValue (ind, val){
    localStorage.setItem('seatInd', ind) 
    localStorage.setItem('seatVal',val)
}

tailorFeeToSeats()

//inserting images

const insertBusImage = document.querySelector('.sacco-list')
const getBusImage = document.querySelectorAll ('.bus-img')
// const spaceToInsert = document.getElementById('super-metro')
console.log(getBusImage)

fetch("http://localhost:3000/buses")
  .then(response => response.json())
  .then(data =>{
    
        //When you set the textContent property, all child nodes are removed and replaced 
        //by only one new text node.

        const imageInsert = data[1].imageurl;
        spaceToInsert.textContent = imageInsert;
        spaceToInsert.src = imageInsert
        console.log (data)
    
    
  })
  .catch(error => console.log('error', error));

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