import { User } from "../classes/User.js";

export interface UserInterface{

   getUserId(): string;
   getName(): string;
   getEmail(): string;
   getMobileNumber(): number;
   getUserBalances(): object;
   updateUserBalance(differentUser: User, amount: number): string;
}