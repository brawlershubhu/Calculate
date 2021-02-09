let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = "";


for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if(buttonText == '√'){
          n = screen.value;
          screenValue = Math.pow(n , 1/2)
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}


