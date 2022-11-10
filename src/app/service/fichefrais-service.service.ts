import { Injectable } from '@angular/core';
import {Fichefrais} from "../metier/Fichefrais";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class FichefraisServiceService {

  private headers = new Headers({'content-type': 'application/json'});
  private ClientUrl: string="";

  private unFrais: Fichefrais= new Fichefrais();

  constructor(private httpClient:HttpClient) {
    //on définit le header
    let httpHeader = new HttpHeaders({
      'content-type': 'application/json',
      'Cache-Control': 'no-cache'
    });
  }


  getFicheFraisListe(id:number):Observable<any> {
    this.ClientUrl = environment.ENDPOINT + '/api/frais/listeFrais/'+ id;
    return this.httpClient.get(this.ClientUrl);
  }
}
