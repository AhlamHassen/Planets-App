import { Component, OnInit } from '@angular/core';
import { Planet } from '../planet';
import { PlanetService } from '../planet.service';

@Component({
  selector: 'app-planets-create',
  templateUrl: './planets-create.component.html',
  styleUrls: ['./planets-create.component.css']
})
export class PlanetsCreateComponent implements OnInit {
  createdplanet: Planet = new Planet("New Planet", 0, 200,"../../assets/venus.png");
  creating: boolean = false;
  submitted: boolean = false;

  constructor(public PlanetService: PlanetService) { }

  ngOnInit(): void {
  }

  public createPlanet(){ 
    this.creating = true;
    this.submitted = false;
  }

  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value; 
  }

  onSubmit(){
    this.submitted = true;
    this.creating = false;
    console.log(this.createdplanet);
    this.PlanetService.Planets.push(this.createdplanet);
    this.createdplanet =  new Planet("New Planet", 0, 200,"../../assets/venus.png");
  }

}
