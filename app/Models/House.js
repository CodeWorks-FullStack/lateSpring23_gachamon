// NOTE if we want to be able to reference this class elsewhere in our project, make sure to add an 'export' before defining it
export class House {
    constructor(walls, floors, windows) {
        this.walls = walls
        this.floors = floors
        this.windows = windows
        this.crownMolding = true
        this.lightbulbs = 0
    }
}

new House({ walls: 'plywood', floors: 'tile', windows: 'glass' })

new House({ walls: 'sheetrock', floors: 'wood', windows: 'stained glass' })