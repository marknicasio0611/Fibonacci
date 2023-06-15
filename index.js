function generateFibonacci() {
    var num = parseInt(document.getElementById("num").value);
    
    if (isNaN(num) || num < 1) {
      document.getElementById("fib-sequence").innerHTML = "";
      return;
    }
    
    var fibonacci = [0, 1];
    for (var i = 2; i < num; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    
    var fibSequenceElement = document.getElementById("fib-sequence");
    fibSequenceElement.innerHTML = "Fibonacci Sequence: " + fibonacci.join(", ");
  }