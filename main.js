let papitas = 10;
console.log(`Ciclo 1`);
while (papitas){
  console.log(`Me comí ${papitas} papitas`)
  papitas--;
}

console.groupEnd();
console.group(`Ciclo 2`)
while (papitas<=10){
  console.log(`Me comí ${papitas} papitas`)
  papitas++
}
console.groupEnd