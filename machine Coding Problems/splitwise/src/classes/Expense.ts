import { PAYMENTTYPE } from "../ENUMS/PAYMENTTYPE.js";
import { ExpenseInterface } from "../interfaces/ExpenseInterface.js";
import { User } from "./User.js";

export class Expense implements ExpenseInterface{

    paid(payer: User, borrower: User, amount: number): string {
        payer.updateUserBalance(borrower, amount);
        return `${payer.getName()} paid ${borrower.getName()} ${amount} \n`
    }
    newExpenseEXACT(payer: User, borrowers: User[], paymentType: PAYMENTTYPE.EXACT, amount: number[]): string {
        let allPayments = ""
        borrowers.map((borrower, index) => {
            allPayments += this.paid(payer, borrower, amount[index])
        })
        return allPayments
    }
    newExpenseEQUAL(payer: User, borrowers: User[], paymentType: PAYMENTTYPE.EQUAL, amount: number): string {
        let allPayments = ""
        const eachPayment: number = Number((amount/borrowers.length).toFixed(2))
        borrowers.map((borrower, index) => {
            allPayments += this.paid(payer, borrower, eachPayment)
        })
        return allPayments
    }
    newExpensePERCENT(payer: User, borrowers: User[], paymentType: PAYMENTTYPE.PERCENT, amount: number, percentShares: number[]): string {
        let allPayments = ""
        borrowers.map((borrower, index) => {
            allPayments += this.paid(payer, borrower, Number((amount*percentShares[index]/100).toFixed(2)))
        })
        return allPayments
    }

}