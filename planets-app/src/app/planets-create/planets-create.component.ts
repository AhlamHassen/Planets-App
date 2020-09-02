import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-planets-create',
  templateUrl: './planets-create.component.html',
  styleUrls: ['./planets-create.component.css']
})
export class PlanetsCreateComponent implements OnInit {
  ceatedPlanet: Planet;

  constructor(public PlanetService: PlanetService) { }

  ngOnInit(): void {
  }

  public createPlanet(name:string, moon:number, distance:number, img:string ){
    this.ceatedPlanet = new Planet(name, moon, distance, img );
    this.PlanetService.addPlanet(this.ceatedPlanet);
  }

}
