import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class ProductsService {

  figurines = [
    { name: "Astérix et Idéfix", price: 13.95, img:"assets/Figurines/AsterixEtIdefix.jpg", alt:"Image d'une figurine d'Astérix portant Idéfix dans sa main", presentation:"Figurine d'Astérix et Idéfix", age:"3 ans et plus", dimensions:"8,4 x 14,4 x 0,4cm; 20 grammes", piece:"1"},

    { name: "Idéfix", price: 12.50, img:"assets/Figurines/Idefix.jpg", alt:"Image d'une figurine d'Idéfix", presentation:"Figurine d'Idéfix assis", age:"3 ans et plus", dimensions:"3,4 x 3,4 x 4 cm; 15 grammes", piece:"1"},
    
    { name: "Bonnemine", price: 11.80, img:"assets/Figurines/Bonnemine.jpg", alt:"Image d'une figurine de Bonnemine", presentation:"Figurine de Bonnemine", age:"3 ans et plus", dimensions:"4 x 6 x 3 cm; 20 grammes", piece:"1"},
    
    { name: "Abraracourcix", price: 9.93, img:"assets/Figurines/Abraracourcix.jpg", alt:"Image d'une figurine d'Abraracourcix", presentation:"Figurine d'Abraracourcix, Le Chef", age:"3 ans et plus", dimensions:"4 x 3 x 6 cm; 20 grammes", piece:"1"},
    
    { name: "Assurancetourix", price: 11.76, img:"assets/Figurines/Assurancetourix.jpg", alt:"Image d'une figurine d'Assurancetourix jouant de la Lyre", presentation:"Figurine d'Assurancetourix jouant de la Lyre", age:"3 ans et plus", dimensions:"2 x 2 x 6,5 cm; 10 grammes", piece:"1"},
    
    { name: "Astérix mains sur les bretelles", price: 12.73, img:"assets/Figurines/AsterixBretelles.jpg", alt:"Image d'une figurine d'Astérix fier se tenant les bretelles avec ses mains", presentation:"Figurine d'Astérix fier se tenant les bretelles", age:"3 ans et plus", dimensions:"5 x 2 x 3 cm; 9,07 grammes", piece:"1"},
    
    { name: "Centurion", price: 9.95, img:"assets/Figurines/Centurion.jpg", alt:"Image d'une figurine de Centurion avec une épée", presentation:"Figurine de Centurion avec une épée", age:"3 ans et plus", dimensions:"4 x 3 x 3cm; 9.07 grammes", piece:"1"},
    
    { name: "Cesar", price: 11.28, img:"assets/Figurines/Cesar.jpg", alt:"Image d'une figurine", presentation:"Figurine de César", age:"3 ans et plus", dimensions:"2 x 4,5 x 8cm; 20 grammes", piece:"1"},
  ];

  getAllFigurines(): any[] {
    return this.figurines;
  }

  getFigurineByName(figurineName: string): any {
    return this.figurines.find(figurine => figurine.name === figurineName);
  }

  constructor() { }

}