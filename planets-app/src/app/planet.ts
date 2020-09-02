export class Planet {
    Name: string;
    Moons: number;
    DistanceFromTheSun: number;
    Image: string;

    constructor(name:string, moons:number, distance:number, url:string){
        this.Name = name;
        this.Moons = moons;
        this.DistanceFromTheSun = distance;
        this.Image = url;
    }
}

