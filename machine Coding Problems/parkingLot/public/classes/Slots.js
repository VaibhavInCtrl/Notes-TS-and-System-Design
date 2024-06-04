export class Slots {
    constructor(f, p, pid, s) {
        this.floor = f;
        this.possibleVehicleType = p;
        this.isParked = false;
        this.registrationNumber = -1;
        this.color = "";
        this.parkingLotId = pid;
        this.slotNumber = s;
    }
    getParkingLotId() {
        return this.parkingLotId;
    }
    getIsParked() {
        return this.isParked;
    }
    getSlotNumber() {
        return this.slotNumber;
    }
    getregistrationNumber() {
        return this.registrationNumber;
    }
    getColor() {
        return this.color;
    }
    getFloorNumber() {
        return this.floor;
    }
    getPossibleVehicleType() {
        return this.possibleVehicleType;
    }
    getParkedVehicleTicketId() {
        if (this.isParked === true) {
            return `${this.parkingLotId}_${this.floor}_${this.slotNumber}`;
        }
        else {
            return "There is no Vehicle Parked at this slot";
        }
    }
    setParkedVehicleTicketId(registrationNumber, color, vehicleType) {
        if (this.possibleVehicleType === vehicleType) {
            this.registrationNumber = registrationNumber;
            this.color = color;
            this.isParked = true;
            return `${this.parkingLotId}_${this.floor}_${this.slotNumber}`;
        }
        else {
            return "This type of Vehicle Type is not allowed";
        }
    }
    unParkVehicle() {
        if (this.isParked === true) {
            this.color = "";
            this.registrationNumber = -1;
            this.isParked = false;
            return "This Vehicle is now not parked here";
        }
        else {
            return "There is no vehicle Present here";
        }
    }
}
