import { UserInterface } from "../interfaces/UserInterface.js";
import { GenerateUID } from "../utils/GenerateUID.js";

type StringKeyedNumberObject = {
    [key: string]: number;
};

export class User implements UserInterface{
    private userId: string;
    private name: string;
    private email: string;
    private mobileNumber: number;
    private userBalances: StringKeyedNumberObject;

    constructor(n: string, e: string, m: number){
        this.name = n;
        this.email = e;
        this.mobileNumber = m;
        this.userBalances = {};
        this.userId = GenerateUID();
    }

    getUserId(): string {
        return this.userId;
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }

    getMobileNumber(): number {
        return this.mobileNumber;
    }

    getUserBalances(): StringKeyedNumberObject {
        return this.userBalances
    }

    setUserBalancesZero(users: User[]): StringKeyedNumberObject {
        let newBalance:any = {}
        users.map((user, index) => {
            const userName: string = user.name;
            newBalance[userName] = 0;
        })
        this.userBalances = newBalance;
        return newBalance;
    }

    updateUserBalance(differentUser: User, amount: number): string {
        const userDifferentName = differentUser.name;
        this.userBalances[userDifferentName] += amount;
        return `${this.name} has registered the payment of ${amount} done by ${differentUser.getName()}`
    }

}