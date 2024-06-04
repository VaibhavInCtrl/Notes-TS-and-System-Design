import { Expense } from "./classes/Expense.js";
import { User } from "./classes/User.js";
import { PAYMENTTYPE } from "./ENUMS/PAYMENTTYPE.js";
import { SplitwiseInterface } from "./interfaces/SplitwiseInterface.js";


type StringKeyedNumberObject = {
    [key: string]: number;
};

class Splitwise implements SplitwiseInterface{

    private Users: User[] = [];

    registerUser(newUser: User): void {
        this.Users.push(newUser)
    }

    setAllBalancesZero(): void {
        this.Users.map((value) => {
            value.setUserBalancesZero(this.Users)
        })
    }

    registerExpense(paymentType: PAYMENTTYPE, payer: User, borrowers: User[], amount: number[], percentShares: number[]): string {
        let expenseService = new Expense();
        if (paymentType === PAYMENTTYPE.EXACT){
            return expenseService.newExpenseEXACT(payer, borrowers, PAYMENTTYPE.EXACT, amount);
        }
        else if (paymentType === PAYMENTTYPE.EQUAL){
            return expenseService.newExpenseEQUAL(payer, borrowers, PAYMENTTYPE.EQUAL, amount[0]);
        }
        else{
            return expenseService.newExpensePERCENT(payer, borrowers, PAYMENTTYPE.PERCENT, amount[0], percentShares);
        }
    }
    getUserBalance(user: User): StringKeyedNumberObject{
        return user.getUserBalances();
    }
    getAllBalance(): Map<string, StringKeyedNumberObject>{
        const MapAllBalances = new Map()
        this.Users.map((value) => {
            let thisUserBalance = value.getUserBalances();
            console.log(value.getName())
            MapAllBalances.set(value.getName() ,thisUserBalance)
        })
        return MapAllBalances;
    }


}

let User1 = new User("vaibhav", "vaibhav020203@gmail.com", 8000854874);
let User2 = new User("vishal", "vishal@gmail.com", 9413605678);
let User3 = new User("subhash", "subhash@gmail.com", 9414001447);
let User4 = new User("babita", "babita@gmail.com", 9414989333);

let splitwise = new Splitwise();

splitwise.registerUser(User1)
splitwise.registerUser(User2)
splitwise.registerUser(User3)
splitwise.registerUser(User4)
splitwise.setAllBalancesZero()
console.log(User1.getName())
console.log(splitwise.getUserBalance(User1))
console.log(User2.getName())
console.log(splitwise.getUserBalance(User2))
console.log(User3.getName())
console.log(splitwise.getUserBalance(User3))
console.log(User4.getName())
console.log(splitwise.getUserBalance(User4))
console.log(splitwise.getAllBalance())

console.log(splitwise.registerExpense(PAYMENTTYPE.EQUAL, User1, [User2, User3, User4], [1200], []));
console.log(User1.getName());
console.log(splitwise.getUserBalance(User1));
console.log(splitwise.registerExpense(PAYMENTTYPE.EXACT, User2, [User1, User3, User4], [1200, 300, 450], []));
console.log(splitwise.getUserBalance(User2));
console.log(User1.getName());
console.log(splitwise.getUserBalance(User1));
console.log(splitwise.registerExpense(PAYMENTTYPE.PERCENT, User2, [User1, User3, User4, User2], [1200], [40,20,40, 20]));
console.log(splitwise.getUserBalance(User1));

console.log(splitwise.getAllBalance())
