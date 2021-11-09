let Num1 = document.getElementById("num1");
let Num1  = document.getElementById("num2");
let Operate  = document.getElementsByTagName("opr");

function calculate() { 
  if(Operate.value == "plus"){ 
    result = Num1+Num2;          
    alert(`Hasil dari${Num1}+${Num2}=${result}`);
    return false;
  }
  else if(Operate.value == "minus"){ 
    result = Num1-Num2;          
    alert(`Hasil dari${Num1}-${Num2}=${result}`);
    return false;
  }
  else if(Operate.value == "times"){ 
    result = Num1*Num2;          
    alert(`Hasil dari${Num1}x${Num2}=${result}`);
    return false;
  }
  else if(Operate.value == "divd"){ 
    result = Num1/Num2;          
    alert(`Hasil dari${Num1}/${Num2}=${result}`);
    return false;
  }
}