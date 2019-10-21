import { Forecast } from './forecast';

export class Clima {
    temp: number;
    id: number;
    date: string;
    time: string;
    description: string;
    currently: string;
    humidity: string;
    wind_speedy: string;
    sunrise: string;
    sunset: string;
    city_name: string;
    forecast: Forecast;
  }