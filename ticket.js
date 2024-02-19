const allSeat = document.getElementsByClassName('seat-number');
const decreasSeat = document.getElementsByClassName('decrease-seat');
let count = 0;
let ticketnumber = []
for (const seat of allSeat) {
    seat.addEventListener('click', function (e) {
        count += 1;
        ticketnumber.push(seat);
        const cuppanButton = document.getElementById('cuppon-button')
        if (ticketnumber.length === 4) {
            cuppanButton.removeAttribute('disabled', true)
        }


        if (ticketnumber.length > 4) {
            alert('you do not buy more ticket now')
            return;
        }



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



        const btn = document.getElementById('btn')
        document.getElementById('number').addEventListener('keyup', function (e) {
            const phoneNumber = e.target.value

            if (ticketnumber.length >= 1 && phoneNumber.length === 11) {
                btn.removeAttribute('disabled')
            }
            else {
                btn.setAttribute('disabled', true)
            }
        })

        setInnerText('seat-count', count)

    })
    function setInnerText(id, value) {
        document.getElementById(id).innerText = value;
    }
}
const cuponAplyButton = document.getElementById('cuppon-button');
const new15cuppon = document.getElementById('disount1').innerText
cuponAplyButton.addEventListener('click', function () {
    const cuponInputValue = document.getElementById('cupon-value').value;
    const totalPriceString = document.getElementById('total-price').innerText;
    const totalPrice = parseInt(totalPriceString)
    if (cuponInputValue === 'NEW 15') {
        const couponValueDiv = document.getElementById('coupon-value-div');
        const p6 = document.createElement('p');
        const p4 = document.createElement('p')
        p6.innerText = 'Total Discount'
        const discount = totalPrice * 0.15;
        p4.innerText = discount;
        couponValueDiv.appendChild(p6)
        couponValueDiv.appendChild(p4)
        const orderTotalString = document.getElementById('grand-total').innerText;
        const orderTotal = parseInt(orderTotalString)
        const grandTotal = totalPrice - discount;
        document.getElementById('grand-total').innerText = grandTotal
    } else if (cuponInputValue === 'Couple 20') {
        const couponValueDiv = document.getElementById('coupon-value-div');
        const discount2 = totalPrice * 0.2;
        const p7 = document.createElement('p')
        p7.innerText = "Total Discount"
        const p5 = document.createElement('p');
        p5.innerText = discount2;
        couponValueDiv.appendChild(p7)
        couponValueDiv.appendChild(p5)
        const orderTotalString = document.getElementById('grand-total').innerText;
        const orderTotal = parseInt(orderTotalString)
        const grandTotal = totalPrice - discount2;
        document.getElementById('grand-total').innerText = grandTotal
    } else {
        alert('please add right cupon code')
        return;
    }
    const cuponField = document.getElementById('cupon-field');
    const cuponClassList = cuponField.classList.add('hidden')

})