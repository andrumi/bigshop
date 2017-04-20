export class Item {
      constructor(public id = 0, public name = '', public type = '', public price =0) { }
      clone() { return new Item(this.id, this.name, this.type, this.price); }
    /*id: number;
    name: string;
    type: string;
    price: number;  
    constructor( id:number, name:string, type:string, price:number) { }  */
}