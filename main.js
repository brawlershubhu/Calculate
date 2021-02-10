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

    else if (buttonText == 'π') {

      buttonText = "3.14159"
      screenValue += buttonText;
      screen.value = screenValue;

    }
    else if (buttonText == '√') {
      n = screen.value;
      screenValue = Math.pow(n, 1 / 2)
      screen.value = eval(screenValue)
    }
    else if (buttonText == '~') {
      n1 = screen.value;
      screenValue = Math.round(n1);
      screen.value = eval(screenValue)
    }
    else if (buttonText == 'sq') {
      n2 = screen.value;
      screenValue = Math.pow(n2, 2)
      screen.value = eval(screenValue)
    }
    else if (buttonText == 'cle') {
      n3 = screen.value;
      screenValue = screen.value.substring(0, screen.value.length - 1);
      screen.value = eval(screenValue)

    }
    
    else {
      screenValue += buttonText;
      screen.value = screenValue;
    }

  })
}