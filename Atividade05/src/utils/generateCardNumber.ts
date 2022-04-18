export function generateCardNumber():number{
  let cardNumber:string = "";
  for(let i=0; i<4;i++){
    let aux = Math.floor(Math.random() * (9999 - 1000)) +1000
    cardNumber += aux.toString()
  }
  return Number(cardNumber);
}
