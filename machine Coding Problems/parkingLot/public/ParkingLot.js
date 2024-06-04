import { Floor } from "./classes/Floor.js";
import { VEHICLETYPE } from "./utils/enums.js";
class ParkingLot {
    constructor(t, s, pid) {
        this.totalFloors = t;
        this.slotsPerFloor = s;
        this.AllFloors = this.setAllFloors();
        this.parkingLotId = pid;
    }
    getTotalFloors() {
        return this.totalFloors;
    }
    getSlotsPerFloor() {
        return this.slotsPerFloor;
    }
    setAllFloors() {
        let allFloors = [];
        for (let i = 0; i < this.totalFloors; i++) {
            let newFloor = new Floor(i, this.slotsPerFloor, this.parkingLotId);
            allFloors.push(newFloor);
        }
        return allFloors;
    }
    getEmptySlotsEachFloor(vehicleType) {
        let emptySlotFloorWiseString = "";
        this.AllFloors.forEach((floor) => {
            emptySlotFloorWiseString += `For Floor ${floor.getFloorNumber()} and vehicle type ${VEHICLETYPE[vehicleType]} all these slots are empty: ${String(floor.getEmptySlots(vehicleType))} \n`;
        });
        return emptySlotFloorWiseString;
    }
    getFilledSlotsEachFloor(vehicleType) {
        let filledSlotFloorWiseString = "";
        this.AllFloors.forEach((floor) => {
            filledSlotFloorWiseString += `For Floor ${floor.getFloorNumber()} and vehicle type ${VEHICLETYPE[vehicleType]} all these slots are filled: ${String(floor.getFilledSlots(vehicleType))} \n`;
        });
        return filledSlotFloorWiseString;
    }
    parkVehicle(vehicleType, registrationNumber, color) {
        this.AllFloors.forEach((floor) => {
            if (floor.getEmptySlots(vehicleType).length != 0) {
                let ticketId = floor.parkVehicle(vehicleType, registrationNumber, color);
                console.log(`${registrationNumber} of type ${VEHICLETYPE[vehicleType]} of color ${color} was parked on floor ${floor.getFloorNumber()}`);
                return ticketId;
            }
        });
        return "All Slots on all Floors are filled, create a new parking lot";
    }
}
