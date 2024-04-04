function iterateArray(array, callback) {
    for (let i = 0; i < array.length; i++) {

        callback(array[i]);
    }
}
function processItem(item) {
    console.log("Processing item:", item);
}
const myArray = [1, 2, 3, 4, 5];
iterateArray(myArray, processItem);
