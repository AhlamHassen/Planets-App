import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Planet } from '../planet';
import { PlanetService } from '../planet.service';
import { PlanetsCreateComponent } from '../planets-create/planets-create.component';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {

  @Input()
  planet: Planet;

  @Output()
  clicked: EventEmitter<number> = new EventEmitter<number>();

  constructor(public PlanetService: PlanetService) { 

  }

  ngOnInit(): void {
  }

  public planetClicked(value: MouseEvent){
    event.preventDefault();
    this.clicked.emit(this.PlanetService.Planets.indexOf(this.planet));
  }

  public deletePlanet(planetNum : number){
    this.PlanetService.Planets.splice(planetNum, 1);
  }

  public editPlanet(planetNum : number){
    this.PlanetService.Planets
    
  }

  public getImage(){
    return this.planet.Image;
  }

  public getImgMarginLeft(){
    
    return this.planet.DistanceFromTheSun;
  }

}
