import { User } from "../classes/User.js";
import { PAYMENTTYPE } from "../ENUMS/PAYMENTTYPE.js";

export interface ExpenseInterface {

    paid(payer: User, borrower: User, amount: number): string;
    newExpenseEXACT(payer: User, borrowers: User[], paymentType: PAYMENTTYPE.EXACT, amount: number[]): string;
    newExpenseEQUAL(payer: User, borrowers: User[], paymentType: PAYMENTTYPE.EQUAL, amount: number): string;
    newExpensePERCENT(payer: User, borrowers: User[], paymentType: PAYMENTTYPE.PERCENT, amount: number, percentShares: number[]): string;

}