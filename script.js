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
let getBusImage = document.querySelectorAll ('.bus-img')
const spaceToInsert0 = document.getElementById('star-bus')
const spaceToInsert1 = document.getElementById('kbs')
const spaceToInsert2 = document.getElementById('super-metro')
const spaceToInsert3 = document.getElementById('orokise')
const spaceToInsert4 = document.getElementById('rog')
const spaceToInsert5 = document.getElementById('kenya-mpya')
const spaceToInsert6 = document.getElementById('zuri')
const spaceToInsert7 = document.getElementById('msl')
const spaceToInsert8 = document.getElementById('walokana')

fetch("http://localhost:3000/buses")
  .then(response => response.json())
  .then(data =>{
        //When you set the textContent property, all child nodes are removed and replaced 
        //by only one new text node.
        const imageInsert0 = data[0].imageurl;
        spaceToInsert0.textContent = imageInsert0;
        spaceToInsert0.src = imageInsert0;
    
  })
  .catch(error => console.log('error', error));

  fetch("http://localhost:3000/buses")
  .then(response => response.json())
  .then(data =>{
        const imageInsert1 = data[1].imageurl;
        spaceToInsert1.textContent = imageInsert1;
        spaceToInsert1.src = imageInsert1;
    
  })
  .catch(error => console.log('error', error));

  fetch("http://localhost:3000/buses")
  .then(response => response.json())
  .then(data =>{
        const imageInsert1 = data[1].imageurl;
        spaceToInsert1.textContent = imageInsert1;
        spaceToInsert1.src = imageInsert1;
  })
  .catch(error => console.log('error', error));

  fetch("http://localhost:3000/buses")
  .then(response => response.json())
  .then(data =>{
        const imageInsert2 = data[2].imageurl;
        spaceToInsert2.textContent = imageInsert2;
        spaceToInsert2.src = imageInsert2;
  })
  .catch(error => console.log('error', error));

  fetch("http://localhost:3000/buses")
  .then(response => response.json())
  .then(data =>{
        const imageInsert3 = data[3].imageurl;
        spaceToInsert3.textContent = imageInsert3;
        spaceToInsert3.src = imageInsert3;
  })
  .catch(error => console.log('error', error));

  fetch("http://localhost:3000/buses")
  .then(response => response.json())
  .then(data =>{
        const imageInsert4 = data[4].imageurl;
        spaceToInsert4.textContent = imageInsert4;
        spaceToInsert4.src = imageInsert4;
  })
  .catch(error => console.log('error', error));

  fetch("http://localhost:3000/buses")
  .then(response => response.json())
  .then(data =>{
        const imageInsert5 = data[5].imageurl;
        spaceToInsert5.textContent = imageInsert5;
        spaceToInsert5.src = imageInsert5;
  })
  .catch(error => console.log('error', error));

  fetch("http://localhost:3000/buses")
  .then(response => response.json())
  .then(data =>{
        const imageInsert6 = data[6].imageurl;
        spaceToInsert6.textContent = imageInsert6;
        spaceToInsert6.src = imageInsert6;
  })
  .catch(error => console.log('error', error));

  fetch("http://localhost:3000/buses")
  .then(response => response.json())
  .then(data =>{
        const imageInsert7 = data[7].imageurl;
        spaceToInsert7.textContent = imageInsert7;
        spaceToInsert7.src = imageInsert7;
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