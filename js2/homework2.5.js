// 5.
// Instruction:
// - Create class Elevator with the following specifications:
// Class Elevator:
// Constructor
// • Constructor(maxFloor, minFloor): This initializes the properties 
// 'maxFloor', 'minFloor' and set 'currentFloor' to 0
// Properties
// • currentFloor: The floor where the elevator currently is. , type number
// • maxFloor: The highest floor the elevator can go to. , type number
// • minFloor: The lowest floor the elevator can go to , type number
// Methods
// • goUp(): Increases currentFloor by 1, but not above maxFloor.
// • goDown(): Decreases currentFloor by 1, but not below minFloor.
// • goToFloor(floor): Takes a floor number and sets currentFloor to that 
// floor if it's within range.
// • displayFloor(): Prints the current floor to the console
class Elevator {
    constructor(maxFloor, minFloor) {
        this.maxFloor = maxFloor || 10;
        this.minFloor = minFloor || 0;
        this.currentFloor = 0;
    }

    goUp() {
        if (this.currentFloor < this.maxFloor) {
            this.currentFloor++;
            console.log(`Elevator going up. Current floor: ${this.currentFloor}`);
        } else {
            console.log("Elevator cannot go up beyond the max floor.");
        }
    }

    goDown() {
        if (this.currentFloor > this.minFloor) {
            this.currentFloor--;
            console.log(`Elevator going down. Current floor: ${this.currentFloor}`);
        } else {
            console.log("Elevator cannot go down below the min floor.");
        }
    }

    goToFloor(floor) {
        if (floor >= this.minFloor && floor <= this.maxFloor) {
            this.currentFloor = floor;
            console.log(`Elevator going to floor ${this.currentFloor}`);
        } else {
            console.log("Invalid floor. Elevator cannot go to the specified floor.");
        }
    }

    displayFloor() {
        console.log(`Current floor: ${this.currentFloor}`);
    }
}

// Example usage:
const myElevator = new Elevator(15, -3);

myElevator.goUp();
myElevator.goDown();
myElevator.goToFloor(7);
myElevator.displayFloor();
