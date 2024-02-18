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
    const ticketPrice = 550; // + 550;
    let limitSeat = 0; // +1
    let selectedSeat = 0; // +1

    for (const singleSeat of mainSeat) {
      $(singleSeat).click((e) => {
        console.log("Hello", e.target);
      })
    }