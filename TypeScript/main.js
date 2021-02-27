"use strict";
// import { studentCalc } from './namespace';
exports.__esModule = true;
// let TotalFee = studentCalc.AnnualFeeCal(1500, 4);
// console.log(TotalFee);
var namespace_1 = require("./namespace");
var invoice = new namespace_1.invoiceCalc.invoiceAmount.invoice();
console.log('Output:' + invoice.calculateDiscount(400));
