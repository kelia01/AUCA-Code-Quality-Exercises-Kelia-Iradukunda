const calculateMatrixSum = (matrix) => {
  return matrix.reduce((acc, curr) => acc + curr.reduce((tot, val) => tot + val,0), 0)
}

const calMatrixSum = (matrix) => {
  return matrix.flat().reduce((acc, curr) => acc + curr, 0)
}

