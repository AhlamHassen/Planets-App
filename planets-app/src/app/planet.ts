export class Planet {
    Name: string;
    Moons: number;
    DistanceFromTheSun: number;

    constructor(name:string, moons:number, distance:number){
        this.Name = name;
        this.Moons = moons;
        this.DistanceFromTheSun = distance;
    }
}

