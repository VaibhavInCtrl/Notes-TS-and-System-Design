import { Expense } from "./classes/Expense.js";
import { User } from "./classes/User.js";
class Splitwise {
    constructor() {
        this.Users = [];
    }
    registerUser(name, email, mobileNumber) {
        const newUser = new User(name, email, mobileNumber);
        this.Users.push(newUser);
        return newUser;
    }
    registerExpense(paymentType, payer, borrowers, amount, percentShares) {
        let expenseService = new Expense();
        if (paymentType === 0) {
            expenseService.newExpenseEXACT(payer, borrowers, 0, amount);
        }
        else if (paymentType === 1) {
            expenseService.newExpenseEQUAL(payer, borrowers, 1, amount[0]);
        }
        else {
            expenseService.newExpensePERCENT(payer, borrowers, 2, amount[0], percentShares);
        }
    }
    getUserBalance(userName) {
        let myUser = this.Users.filter((value) => { value.getName() === userName; });
        let finalUser = myUser[0];
        return finalUser.getUserBalances();
    }
    getAllBalance() {
        let allUserBalance = {};
        this.Users.map((value, index) => {
            let thisUserBalance = value.getUserBalances();
            allUserBalance = Object.assign(Object.assign({}, allUserBalance), { thisUserBalance });
        });
        return allUserBalance;
    }
}
