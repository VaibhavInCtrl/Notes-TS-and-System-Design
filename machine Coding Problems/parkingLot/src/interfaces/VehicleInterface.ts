import { VEHICLETYPE } from "../utils/enums.js";

export interface VehicleInterface {
    getVehicleType(): VEHICLETYPE;
    getRegistrationNumber(): number;
    getColor(): string;
    getTicketId(): string;
    setTicketId(parkingLotId: string, floor: number, slot: number): string;
    unParkVehicle(): string
}