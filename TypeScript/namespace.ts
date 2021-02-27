// export namespace studentCalc {   
//     export function AnnualFeeCal(feeamount: number, term: number) {
//         return feeamount * term;
//     }
// }


export namespace invoiceCalc {
    export namespace invoiceAmount {
        export class invoice {
            public calculateDiscount(price: number) {
                return price * .60;
            }
        }
    }

}