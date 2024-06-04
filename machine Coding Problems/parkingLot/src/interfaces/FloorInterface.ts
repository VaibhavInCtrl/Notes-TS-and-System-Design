import { Slots } from "../classes/Slots.js";
import { Vehicle } from "../classes/Vehicle.js";
import { VEHICLETYPE } from "../utils/enums.js";

export interface FloorInterface {
    getFloorNumber(): number;
    getEmptySlots(vehicleType: VEHICLETYPE): number[];
    getFilledSlots(vehicleType: VEHICLETYPE): number[];
    getParkedCars(vehicleType: VEHICLETYPE): [number, string, Slots][];
    parkVehicle(vehicleType: VEHICLETYPE, registrationNumber: number, color: string): string;
    unparkVehicle(slotNumber: number): string;
}