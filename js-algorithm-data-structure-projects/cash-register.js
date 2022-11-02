//global object currency to assing string / value pairs for cid array.
const currency = {
    "PENNY" : 1,
    "NICKEL" : 5,
    "DIME" : 10,
    "QUARTER" : 25,
    "ONE" : 100,
    "FIVE" : 500,
    "TEN" : 1000,
    "TWENTY" : 2000,
    "ONE HUNDRED" : 10000
  };

function checkCashRegister(price, cash, cid) {
  
  let changeDue = cash * 100 - price * 100;
  let changeDueCheck = changeDue;
  let change = [];
  let status = '';

  let cidCount = 0;
  let cidCheck = cid.filter(elem => elem[1] !== 0).reverse();

  cidCheck.forEach(elem => {
    let cur = elem[0];
    let curTot = elem[1] * 100;
    cidCount += curTot;
    let total = 0;
    while (changeDue >= currency[cur] && curTot > 0) {
      total += currency[cur];
      changeDue -= currency[cur];
      curTot -= currency[cur];
    } if (total !== 0) {
      change.push([cur, total / 100]);
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

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));