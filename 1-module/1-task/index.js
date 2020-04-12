/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    var i;
    let result = 1;
    for (i = 1; i <= n; i++){
      result = i * result; 
    }
    return (result);
  }
  
