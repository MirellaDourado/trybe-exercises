function quantosParams(...args) {
  args.sort( (a, b) => {
    return a - b
  })
  console.log('parâmetros:', args);
  console.log(args.find ( (numb) => {
    return numb === 2
  }))
  console.log(args.some( (numb) => {
    return numb === 2
  }))
  console.log(args.filter( (numb) => {
    return numb % 2 === 0
  }))
  console.log(args.every( (numb) => {
    return numb === 2
  }))
  return `Você passou ${args.length} parâmetros para a função.`;
}

console.log(quantosParams(7, 2, 5, 9 , 0, 1, 3, 4)); // Você passou 3 parâmetros para a função.