const distributeDollar = (dollarCopy, totalCopy) => {
  // let remainder = totalCopy;
  // dollarCopy.forEach(dollar => dollar.balance = 0);
  for(let i=0; i<dollarCopy.length; i++){
    if (dollarCopy[i].balance < dollarCopy[i].allocated) {
      let difference = (dollarCopy[i].allocated - dollarCopy[i].balance)
      if(difference < remainder) {
        console.log('IF')
        remainder -= difference;
        dollarCopy[i].balance = dollarCopy[i].allocated;
      }
      else {
        console.log('ELSE')
        dollarCopy[i].balance += remainder;
        remainder = 0;
        setRemaining(0);
        setDollar(dollarCopy);
      }
    }
  }
  setRemaining(remainder);
  distributePercent(remainder);
  setDollar(dollarCopy)
return}
