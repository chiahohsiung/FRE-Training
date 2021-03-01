"use strict";
// export namespace studentCalc {   
//     export function AnnualFeeCal(feeamount: number, term: number) {
//         return feeamount * term;
//     }
// }
exports.__esModule = true;
exports.invoiceCalc = void 0;
var invoiceCalc;
(function (invoiceCalc) {
    var invoiceAmount;
    (function (invoiceAmount) {
        var invoice = /** @class */ (function () {
            function invoice() {
            }
            invoice.prototype.calculateDiscount = function (price) {
                return price * .60;
            };
            return invoice;
        }());
        invoiceAmount.invoice = invoice;
    })(invoiceAmount = invoiceCalc.invoiceAmount || (invoiceCalc.invoiceAmount = {}));
})(invoiceCalc = exports.invoiceCalc || (exports.invoiceCalc = {}));
