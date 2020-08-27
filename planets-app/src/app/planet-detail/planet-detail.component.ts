import { Component, OnInit, Input } from '@angular/core';
import { Planet } from '../planet';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {

  @Input()
  Planet: Planet;

  constructor(public PlanetService: PlanetService) { }

  ngOnInit(): void {
  }

  public deletePlanet(){

  }

  public editPlanet(){
    
  }

}
