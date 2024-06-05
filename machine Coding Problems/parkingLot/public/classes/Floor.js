import { VEHICLETYPE } from "../utils/enums.js";
import { Slots } from "./Slots.js";
export class Floor {
    constructor(f, n, p) {
        this.FloorNumber = f;
        this.parkingLotId = p;
        this.numberOfSlots = n;
        this.AllSlots = this.setAllSlots();
    }
    setAllSlots() {
        let AllSlots = [];
        for (let i = 0; i < this.numberOfSlots; i++) {
            if (i === 0) {
                let newSlot = new Slots(this.FloorNumber, VEHICLETYPE.TRUCK, this.parkingLotId, i + 1);
                AllSlots.push(newSlot);
            }
            else if (i === 1 || i === 2) {
                let newSlot = new Slots(this.FloorNumber, VEHICLETYPE.BIKE, this.parkingLotId, i + 1);
                AllSlots.push(newSlot);
            }
            else {
                let newSlot = new Slots(this.FloorNumber, VEHICLETYPE.CAR, this.parkingLotId, i + 1);
                AllSlots.push(newSlot);
            }
        }
        return AllSlots;
    }
    getFloorNumber() {
        return this.FloorNumber;
    }
    getEmptySlots(vehicleType) {
        let emptySlots = [];
        this.AllSlots.forEach((slot) => {
            if (slot.getIsParked() === false && slot.getPossibleVehicleType() === vehicleType) {
                emptySlots.push(slot.getSlotNumber());
            }
            else { }
        });
        return emptySlots;
    }
    getFilledSlots(vehicleType) {
        let filledSlots = [];
        this.AllSlots.forEach((slot) => {
            if (slot.getIsParked() === true && slot.getPossibleVehicleType() === vehicleType) {
                filledSlots.push(slot.getSlotNumber());
            }
            else { }
        });
        return filledSlots;
    }
    getParkedCars(vehicleType) {
        let parkedCars = [];
        this.AllSlots.forEach((slot) => {
            if (slot.getIsParked() === true && slot.getPossibleVehicleType() === vehicleType) {
                parkedCars.push([slot.getregistrationNumber(), slot.getColor(), slot]);
            }
            else { }
        });
        return parkedCars;
    }
    parkVehicle(vehicleType, registrationNumber, color) {
        try {
            let ticketId = "";
            let isFilled = false;
            this.AllSlots.forEach((slot) => {
                if (slot.getPossibleVehicleType() === vehicleType && slot.getIsParked() === false && !isFilled) {
                    slot.setParkedVehicleTicketId(registrationNumber, color, vehicleType);
                    ticketId = slot.getParkedVehicleTicketId();
                    isFilled = true;
                }
            });
            return ticketId;
        }
        catch (err) {
            return "There is Car parked here or try some other floor" + err;
        }
    }
    unparkVehicle(slotNumber) {
        try {
            this.AllSlots.forEach((slot) => {
                if (slot.getSlotNumber() === slotNumber) {
                    slot.unParkVehicle();
                }
            });
            return "This car is now not parked here";
        }
        catch (err) {
            return "There is no Car parked here" + err;
        }
    }
}
