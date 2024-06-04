import { VehicleInterface } from "../interfaces/VehicleInterface.js";
import { VEHICLETYPE } from "../utils/enums.js";

export class Vehicle implements VehicleInterface{
    private vehicleType: VEHICLETYPE;
    private registrationNumber: number;
    private color: string;
    private ticketId: string;
    private parkingLotId: string

    constructor(v: VEHICLETYPE, r: number, c: string, p: string){
        this.vehicleType = v;
        this.registrationNumber = r;
        this.color = c;
        this.ticketId = "";
        this.parkingLotId = p;
    }

    getParkingLotId(){
        return this.parkingLotId;
    }
    getVehicleType(): VEHICLETYPE {
        return this.vehicleType;
    }
    getRegistrationNumber(): number {
        return this.registrationNumber;
    }
    getColor(): string {
        return this.color;
    }
    getTicketId(): string {
        return this.ticketId;
    }
    setTicketId(parkingLotId: string, floor: number, slot: number): string {
        this.ticketId = `${parkingLotId}_${floor}_${slot}`;
        return this.ticketId;
    }
    unParkVehicle(): string{
        this.ticketId = "";
        return "Vehicle Was Unparked Successfully";
    }

}