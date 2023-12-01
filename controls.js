function addtodisplay(value) {
    console.log(value)
    document.getElementById("display").value += value;



}
function clrtodispaly() {
    document.getElementById("display").value = "";
}
function calculate(numbers, operators) {
    if (numbers.length !== operators.length + 1) {
      document.getElementById("display").value = "Error";
    }
  
    let result = parseFloat(numbers[0]);
  
    for (let i = 0; i < operators.length; i++) {
      const num = parseFloat(numbers[i + 1]);
  
      switch (operators[i]) {
        case "+":
          result += num;
          break;
        case "-":
          result -= num;
          break;
        case "":
          result= num;
          break;
        case "/":
          result /= num;
          break;
        default:
          document.getElementById("display").value = "Error";
      }
    }
  
    return result;
  }
  
  function run() {
    try {
      let operators = document.getElementById("display").value.match(/[+-/]/g);
      let reg = /[+-/]/;
      values = document.getElementById("display").value.split(reg);
      console.log("values", values, "\n", "operators here ", operators);
      const res = calculate(values, operators);
      document.getElementById("display").value = res;
    } catch (error) {
      document.getElementById("display").value = "Error";
    }
  }
  

