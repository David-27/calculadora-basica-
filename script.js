const display = document.getElementById('display');


// Adicionar números ao visor
function adicionarNumber(number) {
    display.value += number;
}

function clearDisplay(){
    display.value = '';
}

function adicionarOperator(operator){
    display.value += operator;
}
  
function calculate(){
    const display = document.getElementById('display');
    display.value = eval(display.value)
}