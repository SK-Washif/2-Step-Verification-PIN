function getpin(){
  const pin = generatePin();
  const pinStr = pin + '';
  if(pinStr.length === 4){
    return pin;
  }
  else{
    return getpin();
  }
}

function generatePin(){
  const random = Math.round(Math.random()*10000);
  return random;
}

document.getElementById('btn-gn').addEventListener('click', function(){
  const pin = getpin();

  const pinField = document.getElementById('pin-field');
  pinField.value = pin;
})

document.getElementById('calculator').addEventListener('click',function(event){
  const number = event.target.innerText;
  const numberField = document.getElementById('num-field');
  const numberFieldVal = numberField.value;

  if(isNaN(number)){
    if(number === 'C'){
      numberField.value = '';

    }
    else if(number === '<'){
      const digits = numberFieldVal.split('');
      digits.pop();
      const remainingDigits = digits.join('');
      numberField.value = remainingDigits;

    }
  }
  else{
    
    const newNumberField = numberFieldVal + number;
    numberField.value = newNumberField;

  }
})

document.getElementById('btn-sub').addEventListener('click', function(){
  const pinField = document.getElementById('pin-field');
  const currentPin = pinField.value;

  const numberField = document.getElementById('num-field');
  const currentNumField = numberField.value;
  
  const pinSuccess = document.getElementById('pin-success');
  const pinFailure = document.getElementById('pin-failure');
  if(currentNumField === currentPin){
    
    pinSuccess.style.display = 'block';
    pinFailure.style.display = 'none';
  }
  else{
    const pinFailure = document.getElementById('pin-failure');
    pinFailure.style.display = 'block';
    pinSuccess.style.display = 'none';
  }

})