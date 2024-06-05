import { Floor } from "./classes/Floor.js";
import { PARKING_LOT_ID } from "./utils/constants.js";
import { VEHICLETYPE } from "./utils/enums.js";
class ParkingLot {
    constructor(totalFloors, slotsPerFloor, parkingLotId) {
        this.totalFloors = totalFloors;
        this.slotsPerFloor = slotsPerFloor;
        this.parkingLotId = parkingLotId;
        this.AllFloors = this.setAllFloors();
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
            let newFloor = new Floor(i + 1, this.slotsPerFloor, this.parkingLotId);
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
        let isFilled = false;
        let ticketId = "";
        this.AllFloors.map((floor) => {
            if (floor.getEmptySlots(vehicleType).length != 0 && !isFilled) {
                ticketId = floor.parkVehicle(vehicleType, registrationNumber, color);
                console.log(`${registrationNumber} of type ${VEHICLETYPE[vehicleType]} of color ${color} was parked on floor ${floor.getFloorNumber()}`);
                isFilled = true;
            }
        });
        if (isFilled == false) {
            return "All Floors are filled for this Vehicle Type";
        }
        return ticketId;
    }
    unParkVehicle(registrationNumber, floorNumber, slotNumber) {
        let isUnPark = false;
        let reply = "";
        this.AllFloors.map((floor) => {
            if (floor.getFloorNumber() == floorNumber) {
                reply = floor.unparkVehicle(slotNumber);
                isUnPark = true;
            }
        });
        if (isUnPark == false) {
            return "All Floors are filled for this Vehicle Type";
        }
        return reply;
    }
}
const parkingLot = new ParkingLot(2, 6, PARKING_LOT_ID);
console.log(parkingLot.getEmptySlotsEachFloor(VEHICLETYPE.BIKE));
console.log(parkingLot.parkVehicle(VEHICLETYPE.BIKE, 141340, "black"));
console.log(parkingLot.parkVehicle(VEHICLETYPE.BIKE, 159710, "white"));
console.log(parkingLot.parkVehicle(VEHICLETYPE.BIKE, 134110, "white"));
console.log(parkingLot.parkVehicle(VEHICLETYPE.BIKE, 146410, "white"));
console.log(parkingLot.parkVehicle(VEHICLETYPE.BIKE, 146410, "white"));
console.log(parkingLot.unParkVehicle(146410, 2, 3));
console.log(parkingLot.getEmptySlotsEachFloor(VEHICLETYPE.BIKE));
