export class Phone {
    constructor(piece) {
        this.id = piece.id,
        this.name = piece.name,
        this.img = piece.img,
        this.count = piece.count
    }

    getInfo() {
        return {id:this.id, 
                name:this.name, 
                img:`color-${this.img}.jpg`, 
                count:this.count}
    }
}