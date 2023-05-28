export class Shop {
constructor(phone){
    this.id = phone.id,
    this.name = phone.name,
    this.img = phone.img
    }

    getPhone(){
        return {id: this.id, name: this.name, img: this.img}
    }
}