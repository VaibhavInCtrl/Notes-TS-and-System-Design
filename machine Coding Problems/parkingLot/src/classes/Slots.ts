import { SlotsInterface } from "../interfaces/SlotsInterface.js";
import { VEHICLETYPE } from "../utils/enums.js";
import { Vehicle } from "./Vehicle.js";

export class Slots implements SlotsInterface{

    private floor: number;
    private possibleVehicleType: VEHICLETYPE;
    private isParked: boolean;
    private registrationNumber: number;
    private color: string;
    private parkingLotId: string;
    private slotNumber: number

    constructor(f: number, p: VEHICLETYPE, pid: string, s: number){
        this.floor = f;
        this.possibleVehicleType = p;
        this.isParked = false;
        this.registrationNumber = -1;
        this.color = "";
        this.parkingLotId = pid;
        this.slotNumber = s;
    }

    getParkingLotId(){
        return this.parkingLotId;
    }

    getIsParked(){
        return this.isParked;
    }
    getSlotNumber(){
        return this.slotNumber;
    }
    getregistrationNumber(){
        return this.registrationNumber;
    }
    getColor(){
        return this.color;
    }

    getFloorNumber(): number {
        return this.floor;
    }
    getPossibleVehicleType(): VEHICLETYPE {
        return this.possibleVehicleType;
    }
    getParkedVehicleTicketId(): string {
        if (this.isParked === true){
            return `${this.parkingLotId}_${this.floor}_${this.slotNumber}`
        } else {
            return "There is no Vehicle Parked at this slot"
        }
        
    }
    setParkedVehicleTicketId(registrationNumber: number, color: string, vehicleType: VEHICLETYPE): string {
        if (this.possibleVehicleType === vehicleType){
            this.registrationNumber = registrationNumber;
            this.color = color;
            this.isParked = true;
            return `${this.parkingLotId}_${this.floor}_${this.slotNumber}`
        } else {
            return "This type of Vehicle Type is not allowed"
        }
        
    }
    unParkVehicle(): string {
        if (this.isParked === true){
            this.color = "";
            this.registrationNumber = -1;
            this.isParked = false;
            return "This Vehicle is now not parked here"
        } else {
            return "There is no vehicle Present here"
        }
        
    }
    
}