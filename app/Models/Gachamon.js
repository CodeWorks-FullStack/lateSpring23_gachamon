
export class Gachamon {
    // NOTE data ia a banana word.....this will make more sense next week why we choose to put 'data' here
    constructor(data) {
        this.name = data.name
        this.emoji = data.emoji
        this.rarity = data.rarity
        // NOTE this is how we handle default values
        this.skin = data.skin || ''
    }

    get ListTemplate() {
        return `
    <div class="col-1 selectable text-center" onclick="app.gachamonController.setActive('${this.name}') ">
            <h1 h1 title = "${this.name}" > ${this.emoji}</h1 >
      </div > `
    }

    get ActiveTemplate() {
        return `
    <div class="col-8">
        <div class="elevation-5 rounded text-center p-3">
            <h1 class="emoji">${this.emoji}</h1>
            <h2>${this.name}</h2>
             <h3>Rarity: ${this.rarity}</h3>
        </div>
    </div>`
    }

}