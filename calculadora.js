  var num, acc = 0, op = "";
  
  function mas()   { acc = num.value;  op = "+"; }
  function menos() { acc = num.value;  op = "-"; }
  function multiplicar() { acc = num.value; op = "*"}
  function dividir() { acc = num.value; op = "/"}
  function elevado() { acc = num.value; op = "x<sup>y</sup>"}

  function calcular() {
    if (op === "+") {num.value = (+acc + +num.value)}
    if (op === "-") {num.value = (+acc - +num.value)}
    if (op === "*") {num.value = (+acc * +num.value)}
    if (op === "/") {num.value = (+acc / +num.value)}
    if (op === "x<sup>y</sup>") {num.value = (Math.pow(+acc, num.value))}
  }

  function inic ()   {num = document.getElementById("num");}
  function vaciar () {num.value = "";} 

  function cuadrado () {num = document.getElementById("num");
    num.value = num.value * num.value;
    }
  function inverso (){ num = document.getElementById("num");
    num.value = 1/num.value;
    }
  function sqrt (){ num = document.getElementById("num");
    num.value = Math.sqrt(num.value);
  }