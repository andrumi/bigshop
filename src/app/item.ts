export class Item {
      
      constructor(public id = 0, public name = '', public type = '', public price =0.00) { }
      clone() { return new Item(this.id, this.name, this.type, this.price); }
    
    //constructor( id:number, name:string, type:string, price:number) { }  */
}