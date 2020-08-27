import { Injectable } from '@angular/core';
import { Planet } from './planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  
   Planets : Planet[] = [
      new Planet ("Earth", 1, 30),
      new Planet ("Mercury", 0, 10)
   ];

  constructor() { }

   public addPlanet(planet : Planet){
      this.Planets.push(planet);
   }

   public sortPlanet(){

   }
}
