import { Component, Injectable } from '@angular/core';
import { PlanetDetailComponent } from './planet-detail/planet-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'planets-app';
  planetDetail : PlanetDetailComponent;

  constructor(){}

}
