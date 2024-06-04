export class Expense {
    paid(payer, borrower, amount) {
        payer.updateUserBalance(borrower, amount);
        borrower.updateUserBalance(payer, -1 * amount);
        return `${borrower.getName()} borrowed ${amount} from ${payer.getName()} \n`;
    }
    newExpenseEXACT(payer, borrowers, paymentType, amount) {
        let allPayments = "";
        borrowers.map((borrower, index) => {
            allPayments += this.paid(payer, borrower, amount[index]);
        });
        return allPayments;
    }
    newExpenseEQUAL(payer, borrowers, paymentType, amount) {
        let allPayments = "";
        const eachPayment = Number((amount / borrowers.length).toFixed(2));
        borrowers.map((borrower, index) => {
            allPayments += this.paid(payer, borrower, eachPayment);
        });
        return allPayments;
    }
    newExpensePERCENT(payer, borrowers, paymentType, amount, percentShares) {
        let allPayments = "";
        borrowers.map((borrower, index) => {
            if (borrower.getName() === payer.getName()) {
            }
            else {
                allPayments += this.paid(payer, borrower, Number((amount * percentShares[index] / 100).toFixed(2)));
            }
        });
        return allPayments;
    }
}
