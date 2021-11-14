export class Auto {
  id!: string;
  name!: string;
  miles_per_Gallon!:number;
  cylinders!: number;
  displacement!: number;
  horsepower!: number;
  weight_in_lbs!: number;
  acceleration!: number;
  year!: Date;
  origin!: string;
}
//export interface dto extends Omit<Auto, 'id'> {}
