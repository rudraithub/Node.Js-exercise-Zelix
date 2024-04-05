function performAddition(num1, num2, callback) {
    const result = num1 + num2;

    callback(result);
}
function displayResult(result) {
    console.log("The result is:", result);
}
performAddition(5, 3, displayResult);

