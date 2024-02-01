// 6
// Instruction:
// - Create a 'Elevator' object for 'Practice 5'. Use a constructor and methods in class.
// Initiate code:
// // Insert your code here
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

// Creating an Elevator object
const practiceElevator = new Elevator(15, -3);

// Example usage of Elevator methods
practiceElevator.goUp();
practiceElevator.goDown();
practiceElevator.goToFloor(7);
practiceElevator.displayFloor();
