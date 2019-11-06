import { DistanciaMapa } from './distanciaMapa';
import { DuracaoMapa } from './duracaoMapa';
import { DestinoMapa } from './destinoMapa';
import { PartidaMapa } from './partidaMapa';
import { PolylineMapa } from './polylineMapa';

export class PassosMapa {
    distance: DistanciaMapa;
    duration: DuracaoMapa;
    end_location: DestinoMapa;
    html_instruction: string;
    polyline: PolylineMapa;
    start_location: PartidaMapa;
    travel_mode: string;
}