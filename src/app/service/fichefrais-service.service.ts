import { Injectable } from '@angular/core';
import {Fichefrais} from "../metier/Fichefrais";


@Injectable({
  providedIn: 'root'
})
export class FichefraisServiceService {

  private headers = new Headers({'content-type': 'application/json'});
  private ClientUrl: string="";

  private unFrais: Fichefrais= new Fichefrais();

  constructor() { }
}
