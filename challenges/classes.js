// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker1 {
    constructor(attr) {
        this.newlength = attr.length,
            this.newwidth = attr.width,
            this.newheight = attr.height
    }

    volume() {
        return this.newlength * this.newwidth * this.newheight
    };

    surfaceArea() {
        return 2 * (this.newlength * this.newwidth + this.newlength * this.newheight + this.newwidth * this.newheight)
    };

}






// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker. 
// Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.