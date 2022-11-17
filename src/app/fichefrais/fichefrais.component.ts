import { Component, OnInit } from '@angular/core';
import {Frais} from "../metier/Frais";
import { Router, ActivatedRoute, ParamMap} from "@angular/router";
import {FichefraisServiceService} from "../service/fichefrais-service.service";

@Component({
  selector: 'app-fichefrais',
  templateUrl: './fichefrais.component.html',
  styleUrls: ['./fichefrais.component.css']
})
export class FichefraisComponent implements OnInit {
  private unFrais:Frais[]=[];
  private fraisid:number=0;
  private titre:string="Modification d'un frais";
  private paramMap: ParamMap[]=[];
  private error: string='';

  constructor(private unFS: FichefraisServiceService,private ActivatedRoute:ActivatedRoute,private unRouteur:Router) { }

  ngOnInit() {
    this.fraisid= +this.ActivatedRoute.snapshot.paramMap.get('id');
    this.getFrais(this.fraisid);
  }

}
