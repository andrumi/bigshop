import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let items = [
  { id: 11, name: 'Topper', type: "Hat" , price:2.50},
  { id: 12, name: 'Trilby', type: "Hat" , price:2.50},
  { id: 13, name: 'Bowler',type: "Hat" , price:4.50 },
  { id: 14, name: 'Stetson',type: "Hat" , price:3.50 },
  { id: 15, name: 'Beret', type: "Hat" , price:2.50},
  { id: 16, name: 'Sombrero',type: "Hat" , price:4.50 },
  { id: 17, name: 'Flat Cap',type: "Hat" , price:3.50 },
    ];
    return {items};
  }
}