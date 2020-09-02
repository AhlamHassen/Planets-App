import { Injectable } from '@angular/core';
import { Planet } from './planet' ;

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

   Planets : Planet[] = [
      new Planet ("Mercury", 0, 120, "../../assets/mercury.png"),
      new Planet ("Earth", 1, 300, "../../assets/earth.png"),
      new Planet ("Mars", 0, 500, "../../assets/mars.png"),
      new Planet ("Jupiter", 0, 620, "../../assets/jupiter.png")
   ];

  constructor() {}
  

   public addPlanet(planet : Planet){
      this.Planets.push(planet);
   }

   public sortPlanet(){
    // this.Planets.sort.
   }
}
