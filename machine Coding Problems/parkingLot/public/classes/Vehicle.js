export class Vehicle {
    constructor(v, r, c, p) {
        this.vehicleType = v;
        this.registrationNumber = r;
        this.color = c;
        this.ticketId = "";
        this.parkingLotId = p;
    }
    getParkingLotId() {
        return this.parkingLotId;
    }
    getVehicleType() {
        return this.vehicleType;
    }
    getRegistrationNumber() {
        return this.registrationNumber;
    }
    getColor() {
        return this.color;
    }
    getTicketId() {
        return this.ticketId;
    }
    setTicketId(parkingLotId, floor, slot) {
        this.ticketId = `${parkingLotId}_${floor}_${slot}`;
        return this.ticketId;
    }
    unParkVehicle() {
        this.ticketId = "";
        return "Vehicle Was Unparked Successfully";
    }
}
