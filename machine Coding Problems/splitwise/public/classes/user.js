import { GenerateUID } from "../utils/GenerateUID.js";
export class User {
    constructor(n, e, m) {
        this.name = n;
        this.email = e;
        this.mobileNumber = m;
        this.userBalances = {};
        this.userId = GenerateUID();
    }
    getUserId() {
        return this.userId;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getMobileNumber() {
        return this.mobileNumber;
    }
    getUserBalances() {
        return this.userBalances;
    }
    setUserBalancesZero(users) {
        let newBalance = {};
        users.map((user, index) => {
            const userName = user.name;
            if (userName === this.name) { }
            else {
                newBalance[userName] = 0;
            }
        });
        this.userBalances = newBalance;
        return newBalance;
    }
    updateUserBalance(differentUser, amount) {
        const userDifferentName = differentUser.name;
        this.userBalances[userDifferentName] += amount;
        return `${this.name} has registered the payment of ${amount} done by ${differentUser.getName()}`;
    }
}
