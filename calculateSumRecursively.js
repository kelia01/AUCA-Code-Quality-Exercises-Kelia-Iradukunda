// Implement a JavaScript function to find the sum of all elements in an array recursively.

const calculateSumRecursively = (array) => {
    return array.length === 0 ? 0 : array[0] + calculateSumRecursively(array.slice(1));
}
