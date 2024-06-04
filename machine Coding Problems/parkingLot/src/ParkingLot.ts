import { Floor } from "./classes/Floor.js";
import { ParkingLotInterface } from "./interfaces/ParkingLotInteface.js";
import { VEHICLETYPE } from "./utils/enums.js";

class ParkingLot implements ParkingLotInterface{

    private totalFloors: number;
    private slotsPerFloor: number;
    private parkingLotId: string;
    private AllFloors: Floor[];
    constructor(t: number, s: number, pid: string){
        this.totalFloors = t;
        this.slotsPerFloor = s;
        this.AllFloors = this.setAllFloors();
        this.parkingLotId = pid;
    }
    getTotalFloors(): number {
        return this.totalFloors;
    }
    getSlotsPerFloor(): number {
        return this.slotsPerFloor;
    }
    setAllFloors(): Floor[]{
        let allFloors: Floor[] = [];
        for (let i = 0; i < this.totalFloors; i++){
            let newFloor = new Floor(i, this.slotsPerFloor, this.parkingLotId);
            allFloors.push(newFloor);
        }
        return allFloors
    }
    getEmptySlotsEachFloor(vehicleType: VEHICLETYPE): string {
        let emptySlotFloorWiseString: string = ""
        this.AllFloors.forEach((floor) => {
            emptySlotFloorWiseString += `For Floor ${floor.getFloorNumber()} and vehicle type ${VEHICLETYPE[vehicleType]} all these slots are empty: ${String(floor.getEmptySlots(vehicleType))} \n`
        })
        return emptySlotFloorWiseString;
    }
    getFilledSlotsEachFloor(vehicleType: VEHICLETYPE): string {
        let filledSlotFloorWiseString: string = ""
        this.AllFloors.forEach((floor) => {
            filledSlotFloorWiseString += `For Floor ${floor.getFloorNumber()} and vehicle type ${VEHICLETYPE[vehicleType]} all these slots are filled: ${String(floor.getFilledSlots(vehicleType))} \n`
        })
        return filledSlotFloorWiseString;
    }
    parkVehicle(vehicleType: VEHICLETYPE, registrationNumber: number, color: string): string {
        this.AllFloors.forEach((floor) => {
            if (floor.getEmptySlots(vehicleType).length != 0){
                let ticketId = floor.parkVehicle(vehicleType, registrationNumber, color);
                console.log(`${registrationNumber} of type ${VEHICLETYPE[vehicleType]} of color ${color} was parked on floor ${floor.getFloorNumber()}`)
                return ticketId;
            }
        })
        return "All Slots on all Floors are filled, create a new parking lot"
    }

}