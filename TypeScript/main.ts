
// import { studentCalc } from './namespace';

// let TotalFee = studentCalc.AnnualFeeCal(1500, 4);

// console.log(TotalFee);





import { invoiceCalc } from './namespace';

let invoice = new invoiceCalc.invoiceAmount.invoice()

console.log('Output:' + invoice.calculateDiscount(400));