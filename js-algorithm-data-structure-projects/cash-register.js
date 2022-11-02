//global object currency to assing string / value pairs for cid array.
const currency = {
    "PENNY" : 0.01,
    "NICKEL" : 0.05,
    "DIME" : 0.10,
    "QUARTER" : 0.25,
    "ONE" : 1,
    "FIVE" : 5,
    "TEN" : 10,
    "TWENTY" : 20,
    "ONE HUNDRED" : 100
  };

function checkCashRegister(price, cash, cid) {
  
  //obviously, change = payment (cash) - price.
  //the math can be a bit funny with decimals so be careful...
  let changeDue = cash - price;
  let changeDueCheck = changeDue;
  let change = [];
  let status = '';

  let cidCount = 0;
  let cidCheck = cid.filter(elem => elem[1] !== 0).reverse();

  cidCheck.forEach(elem => {
    let cur = elem[0];
    let curTot = elem[1];
    cidCount += curTot;
    let total = 0;
    while (changeDue >= currency[cur] && curTot > 0) {
      total += currency[cur];
      changeDue -= currency[cur];
      curTot -= currency[cur];
    } if (total !== 0) {
      change.push([cur, total]);
    }
  });

  if (changeDue > 0) {
    status = 'INSUFFICIENT_FUNDS';
    change = [];
  } else if (changeDue == 0 && changeDueCheck == cidCount) {
    status = 'CLOSED';
    change = cid;
  } else {
    status = 'OPEN';
  }
  return { 'status': status, 'change': change };
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));