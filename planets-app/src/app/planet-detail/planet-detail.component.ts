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

  clicked: boolean = false;
  currentPlanet: number;
  editing: boolean = false;
  submitted: boolean = false;
  hasMoon: boolean = false;

  constructor(public PlanetService: PlanetService) { }
  ngOnInit(): void {
    
    if (this.planet.Moons != 0) {
      this.hasMoon = true;
    }
}

  public getImage(){
  return this.planet.Image;
}

  public getImgMarginLeft(){

  return this.planet.DistanceFromTheSun;
}

  public planetClicked(){

  if (this.clicked == true) {
    this.clicked = false;
  }
  else {
    this.clicked = true;
  }
  // this.clicked != this.clicked;

  this.currentPlanet = this.PlanetService.Planets.indexOf(this.planet);
}

  public deletePlanet(){
  this.PlanetService.Planets.splice(this.currentPlanet, 1);
}

  public editPlanet(planetNum : number){
  this.editing = true;
  this.submitted = false;

}

  public onSubmit(){
  this.submitted = true;
  this.editing = false;
}

// get diagnostic() { 
//   return JSON.stringify(this.planet); 
// } 
//returns the object and its details in a string form

showFormControls(form: any) {
  return form && form.controls['name'] &&
    form.controls['name'].value;
}


}
