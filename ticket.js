const allSeat = document.getElementsByClassName('seat-number');
const decreasSeat = document.getElementsByClassName('decrease-seat');
let count = 0;
let ticketnumber = []
for (const seat of allSeat) {
    seat.addEventListener('click', function (e) {
        count += 1;   
        ticketnumber.push(seat);
        const cuppanButton = document.getElementById('cuppon-button')
        if(ticketnumber.length === 4){
            cuppanButton.removeAttribute('disabled', true)
        }


        if (ticketnumber.length > 4) {
            alert('youe do not biy more ticket now')
            return;
        }



        // console.log(e.target.innerText)
        // document.getElementById('seat-count').innerText = count;
        const ticketPrice = document.getElementById('ticket-price').innerText
        const placeNode = e.target.innerText;
        const div = document.getElementById('append-item');
        const insideDiv = document.createElement('div')
        const p = document.createElement('p')
        p.innerText = placeNode;
        const p2 = document.createElement('p')
        p2.innerText = 'Economoy'
        const p3 = document.createElement('p')
        p3.innerText = ticketPrice;

        e.target.style.backgroundColor = 'green'
        e.target.setAttribute('disabled', true)
        // e.target.disable = true;

        insideDiv.appendChild(p)
        insideDiv.appendChild(p2)
        insideDiv.appendChild(p3)
        div.appendChild(insideDiv)
        insideDiv.classList.add('flex')
        insideDiv.classList.add('justify-between');


        const currentTicketString = document.getElementById('current-seat');
        const currentTicketText = currentTicketString.innerText;
        const currentTicket = parseInt(currentTicketText);
        const newTicketNumber = currentTicket - 1;
        currentTicketString.innerText = newTicketNumber




        const previousTicketTotalString = document.getElementById('total-price').innerText;
        const previousTicketTotal = parseInt(previousTicketTotalString);
        const totalPrice = previousTicketTotal + parseInt(550);
        document.getElementById('total-price').innerText = totalPrice;


        const grandTotalString = document.getElementById('grand-total').innerText
        const grandTotal = parseInt(grandTotalString)
        document.getElementById('grand-total').innerText = totalPrice;



        for (const number of ticketnumber) {
            console.log(number)

        }
        const btn = document.getElementById('btn')
        document.getElementById('number').addEventListener('keyup', function (e) {
            const phoneNumber = e.target.value
            // console.log(phoneNumber.length)
            // if(ticketnumber.length > 4){
            //     console.log(ticketnumber)
            // }
            if (ticketnumber.length >= 1 && phoneNumber.length === 11) {
                btn.removeAttribute('disabled')
            }
            else {
                btn.setAttribute('disabled', true)
            }
        })
        // console.log(ticketnumber.length)

        setInnerText('seat-count', count)

    })
    function setInnerText(id, value) {
        document.getElementById(id).innerText = value;
    }
} 
const cuponAplyButton = document.getElementById('cuppon-button');
    // const ticketPrice = document.getElementById('ticket-price').innerText
    // const previousTicketTotalString = document.getElementById('total-price').innerText;
    // const previousTicketTotal = parseInt(previousTicketTotalString);
    // const totalPrice = previousTicketTotal + parseInt(550);
    // console.log(totalPrice)
    const new15cuppon = document.getElementById('disount1').innerText
    cuponAplyButton.addEventListener('click', function (){
    const cuponInputValue = document.getElementById('cupon-value').value;
    if(cuponInputValue === 'NEW 15'){
        const discount = totalPrice * 0.15;
        // const totalDiscount = totalPrice - discount;
        console.log(discount)
    }else if(cuponInputValue === 'Couple 20'){
        const discount2 = totalPrice * 0.02;
        const totalDiscount2 = totalPrice - discount2;
        console.log(totalDiscount2)
    }else{
        alert('please add right discount code')
    }
    console.log(cuponInputValue)
    console.log(new15cuppon)

})