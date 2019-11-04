import { DistanciaMapa } from './distanciaMapa';
import { DuracaoMapa } from './duracaoMapa';

export class Mapa {
    distance: DistanciaMapa;
    duration: DuracaoMapa;
    end_address: string;
    // end_location: DestinoDto;
    start_address: string;
    // start_location: PartidaDto;
    // steps: Array<PassosDto>;
}