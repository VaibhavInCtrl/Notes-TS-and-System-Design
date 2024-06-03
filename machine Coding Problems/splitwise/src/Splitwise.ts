import { Expense } from "./classes/Expense.js";
import { User } from "./classes/User.js";
import { PAYMENTTYPE } from "./ENUMS/PAYMENTTYPE.js";
import { SplitwiseInterface } from "./interfaces/SplitwiseInterface.js";


type StringKeyedNumberObject = {
    [key: string]: number;
};

class Splitwise implements SplitwiseInterface{

    private Users: User[] = [];

    registerUser(name: string, email: string, mobileNumber: number): User {
        const newUser = new User(name, email, mobileNumber);
        this.Users.push(newUser)
        return newUser;
    }
    registerExpense(paymentType: PAYMENTTYPE, payer: User, borrowers: User[], amount: number[], percentShares: number[]): void {
        let expenseService = new Expense();
        if (paymentType === 0){
            expenseService.newExpenseEXACT(payer, borrowers, 0, amount);
        }
        else if (paymentType === 1){
            expenseService.newExpenseEQUAL(payer, borrowers, 1, amount[0]);
        }
        else{
            expenseService.newExpensePERCENT(payer, borrowers, 2, amount[0], percentShares);
        }
    }
    getUserBalance(userName: string): StringKeyedNumberObject{
        let myUser: User[] = this.Users.filter((value) => {value.getName() === userName})
        let finalUser: User = myUser[0]
        return finalUser.getUserBalances();
    }
    getAllBalance(): StringKeyedNumberObject{
        let allUserBalance = {}
        this.Users.map((value, index) => {
            let thisUserBalance = value.getUserBalances();
            allUserBalance = {...allUserBalance , thisUserBalance};
        })
        return allUserBalance;
    }

}