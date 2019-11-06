import { DistanciaMapa } from './distanciaMapa';
import { DuracaoMapa } from './duracaoMapa';
import { DestinoMapa } from './destinoMapa';
import { PartidaMapa } from './partidaMapa';
import { PassosMapa } from './passosMapa';

export class Mapa {
    distance: DistanciaMapa;
    duration: DuracaoMapa;
    end_address: string;
    end_location: DestinoMapa;
    start_address: string;
    start_location: PartidaMapa;
    steps: Array<PassosMapa>;
}