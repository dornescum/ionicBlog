export interface Blog {
  id: string;
  title: string;
  description: string;
  date: Date;
  creator: string;
}

export interface TownTemperatures {
  [key: string]: number;
}
