//The first method is for nesting reduces

const calculateMatrixSum = (matrix) => {
  return matrix.reduce((acc, curr) => acc + curr.reduce((tot, val) => tot + val,0), 0)
}

//The second method is for flattening the array
const calMatrixSum = (matrix) => {
  return matrix.flat().reduce((acc, curr) => acc + curr, 0);
}

