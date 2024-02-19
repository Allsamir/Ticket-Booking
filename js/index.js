    tailwind.config = {
      theme: {
        extend: {
          colors: {
            navButtonBorderColor: 'rgba(29, 209, 0, 0.40)',
            navButtonBg: 'rgba(29, 209, 0, 0.10)',
            green: '#1DD100',
            couponBg1: '#FFBF0F',
            couponHeading: 'rgba(3, 7, 18, 0.80)',
            couponP: 'rgba(3, 7, 18, 0.50)',
            couponBg2: '#F78C9C',
            ticketBg: '#F7F8F8',
            destinationBg: '#F7F8F8',
            locationBg: 'rgba(3, 7, 18, 0.05)',
            seatLeftBg: 'rgba(29, 209, 0, 0.15)',
            available:'rgba(3, 7, 18, 0.50)',
            driverSeatBg: 'rgba(3, 7, 18, 0.10)',
            seatBg: '#F7F8F8',
          }
        }
      }
    }

    const mainSeat = document.getElementsByClassName('main-seat');
    let remainingSeat = 40; // -1
    let ticketPrice = 0; // + 550;
    let grandTotalCount = 0;
    let limitSeat = 0; // +1
    let selectedSeat = 0; // +1

    const seatLeft = document.getElementById('seat-left');
    const formSubmit = document.getElementById('form-submit');
    const seatCount = document.getElementById('seat-count');
    const total = document.getElementById('total');
    const grandTotal = document.getElementById('grand-total');
    const coupon = document.getElementById('coupon');
    const couponCode = document.getElementById('coupon-code');
    const couponCodeApply = document.getElementById('coupon-code-apply');

    //
    const showSelectedSeatSection = document.querySelector('.show-seat');
    const calculationSection = document.querySelector('.calculation')

    for (const singleSeat of mainSeat) {
      $(singleSeat).click((e) => {
        
        console.log("Hello", e.target.innerText, limitSeat);
        const seat = e.target;
        const selectedSeatID = e.target.innerText;
        if (limitSeat <= 3) {
            limitSeat++;
            remainingSeat--;
            selectedSeat++;
            // selected seat color change
            seat.classList.add("bg-green", "text-white");
            seat.classList.remove("bg-seatBg");
            // changing the set-left
            seatLeft.innerText = remainingSeat;
            // form-submit button
            formSubmit.classList.add("bg-green");
            formSubmit.removeAttribute("disabled");
            // seat count ++
            seatCount.classList.add('bg-green');
            seatCount.innerText = selectedSeat;
            // creating span and appending it into calculationSection
            const newDiv = document.createElement('div');
            const span1 = document.createElement('span');
            const span2 = document.createElement('span');
            const span3 = document.createElement('span');
            newDiv.classList.add('flex', 'justify-between', 'w-full', 'pb-4');
            span1.classList.add('text-base', 'text-black', 'font-normal');
            span2.classList.add('text-base', 'text-black', 'font-normal');
            span3.classList.add('text-base', 'text-black', 'font-normal');
            span1.innerText = selectedSeatID;
            span2.innerText = "Economic";
            span3.innerText = "550 BDT";
            newDiv.append(span1, span2, span3);
            showSelectedSeatSection.appendChild(newDiv);
            // update total
            ticketPrice = ticketPrice + 550;
            total.innerText = ticketPrice;
            // udate grandTotal
            grandTotalCount = grandTotalCount + 550;
            grandTotal.innerText = grandTotalCount;

            // coupon code section logic
                    if (limitSeat >= 4) {
                      // checking coupon code and update the value of grand total
                      const spanAlert = document.createElement('span');
                      spanAlert.classList.add('text-red-500', 'pr-4', 'pt-4', 'invalid-coupon');
                      calculationSection.appendChild(spanAlert);
                      const wrongCouponAlert = document.querySelector('.invalid-coupon');
                      coupon.classList.remove('hidden');
                      $(couponCodeApply).click(() => {
                        console.log(couponCode.value);
                        console.log(grandTotalCount);
                        if (couponCode.value === 'NEW15'){
                          let discountAmount = grandTotalCount * 0.15;
                          grandTotal.innerText = grandTotalCount - discountAmount;
                          calculationSection.removeChild(wrongCouponAlert)
                          coupon.classList.add('hidden');
                        } else if (couponCode.value === 'Couple 20') {
                          let discountAmount = grandTotalCount * 0.20;
                          grandTotal.innerText = grandTotalCount - discountAmount;
                          calculationSection.removeChild(wrongCouponAlert)
                          coupon.classList.add('hidden');
                        } else {                        
                          spanAlert.innerText = "Invalid Coupon";
                        }
                      })
                    }
        } 
      })
    }


    //// On submit function

    