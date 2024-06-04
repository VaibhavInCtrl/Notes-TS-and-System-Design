import { Floor } from "../classes/Floor.js";
import { VEHICLETYPE } from "../utils/enums.js";
import { FloorSlotType } from "../utils/FloorSlotType.js";
export interface ParkingLotInterface{
    getTotalFloors(): number;
    getSlotsPerFloor(): number;
    getEmptySlotsEachFloor(vehicleType: VEHICLETYPE): string;
    getFilledSlotsEachFloor(vehicleType: VEHICLETYPE): string;
    parkVehicle(vehicleType: VEHICLETYPE, registrationNumber: number, color: string): string;
    
}