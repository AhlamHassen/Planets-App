import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';

@Component({
  selector: 'app-planets-create',
  templateUrl: './planets-create.component.html',
  styleUrls: ['./planets-create.component.css']
})
export class PlanetsCreateComponent implements OnInit {
  ceatedPlanet: Planet;

  constructor() { }

  ngOnInit(): void {
  }

  public createPlanet(name:string, moon:number, distance:number ){
    this.ceatedPlanet = new Planet(name, moon, distance);
  }

}
