let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (clickEvent) => {
    if (clickEvent.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if (clickEvent.target.innerHTML == 'C') {
      string = "";
      document.querySelector('input').value = string;
    }
    else {
      console.log(clickEvent.target);
      string = string + clickEvent.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})