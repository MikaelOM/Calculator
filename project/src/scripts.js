
let values = [],
    operation,
    result = 0;

let validValues = () =>{
      let caracters = [".", "*", "=","+", "-","/" ];
}

let addvalues = (_value) =>{
   let screen = ( document.calculator.screen.value += _value);
   
}

let addvaluesofAcount = () => {
  let screen = document.calculator.screen.value;
  let screenAccont = (document.calculator.screenaccont.value += screen);
}

let Clear = () =>{
  document.calculator.screenaccont.value ="";
  document.calculator.screen.value = "";
  values = [];
}


let flow = (_value)  =>{
  addvalues(_value);
  flow_result();
  document.calculator.screen.value = "";
  operation = _value;
  addValuesArray();
  addvaluesofAcount();
  console.log(result);
  //console.log(operacao);
}

let addValuesArray = () => {
  let _value = document.calculator.screen.value;
  console.log(_value);
  if (_value == "") {
    values == "";
  } else {
    values.push(parseFloat(_value));
  }
  console.log(values);
}

let flow_result = () => {
  addValuesArray();
  addvaluesofAcount();
  switch (operation) {
    case "+":
      result = values[0] + values[1];
      values = [];
      values.push(result);
      console.log(values);
      break;
    case "-":
      result = values[0] - values[1];
      values = [];
      values.push(result);
      console.log(values);
      break;
    case "/":
      result = values[0] / values[1];
      values = [];
      values.push(result);
      console.log(values);
      break;
    case "*":
      result = values[0] * values[1];
      values = [];
      values.push(result);
      console.log(values);
      break;
  }
  console.log(result);
  document.calculator.screen.value = result;
}


