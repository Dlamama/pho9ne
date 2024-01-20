let phone = document.querySelector('#phone');

phone.addEventListener('keydown', (event) => {
    let isDigit = false;
    let isDash = false;
    let ifControl = false;
    if (event.key >= 0 && even.key <= 9 && event.key != ' ') {
        isDigit = true;
    }


    if (event.key == '-') {
        isDash = true;

    }

    if (event.key == 'Backspase' || event.key == 'Arrowright' || event.key == 'Arrowleft') {
        isControl = true;
    }



    if (!isDigit == false && !isControl == false && !isDash == false) {
        event.preventDefault();
    }



})

