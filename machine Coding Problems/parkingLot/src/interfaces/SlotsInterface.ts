import { VEHICLETYPE } from "../utils/enums.js";

export interface SlotsInterface{
    getFloorNumber(): number;
    getPossibleVehicleType(): VEHICLETYPE;
    getParkedVehicleTicketId(): string;
    setParkedVehicleTicketId(registrationNumber: number, color: string, vehicleType: VEHICLETYPE): string;
    unParkVehicle(): string;
}