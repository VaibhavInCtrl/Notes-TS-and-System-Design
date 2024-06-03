import { User } from "../classes/User.js";
import { PAYMENTTYPE } from "../ENUMS/PAYMENTTYPE.js";

type StringKeyedNumberObject = {
    [key: string]: number;
};

export interface SplitwiseInterface {
    registerUser(name: string, email: string, mobileNumber: number): User;
    registerExpense(paymentType: PAYMENTTYPE, payer: User, borrowers: User[], amount: number[], percentShares: number[]): void;
    getUserBalance(userName: string): StringKeyedNumberObject;
    getAllBalance(): StringKeyedNumberObject;
}