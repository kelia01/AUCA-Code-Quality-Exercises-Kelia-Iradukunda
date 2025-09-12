const calculateAverage = (numbers)  => {
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

  return sum / numbers.length;
}
