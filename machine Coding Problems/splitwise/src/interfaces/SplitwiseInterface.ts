import { User } from "../classes/User.js";
import { PAYMENTTYPE } from "../ENUMS/PAYMENTTYPE.js";

type StringKeyedNumberObject = {
    [key: string]: number;
};

export interface SplitwiseInterface {
    registerUser(newUser: User): void;
    registerExpense(paymentType: PAYMENTTYPE, payer: User, borrowers: User[], amount: number[], percentShares: number[]): string;
    getUserBalance(user: User): StringKeyedNumberObject;
    getAllBalance(): Map<string, StringKeyedNumberObject>;
}