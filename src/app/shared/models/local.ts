import { ComponenteEnderecoLocal } from './componenteEnderecoLocal';
import { GeometriaLocal } from './geometriaLocal';

export class Local {
   
    address_components: Array<ComponenteEnderecoLocal>;
	formatted_address: string;
    geometry: GeometriaLocal;
}