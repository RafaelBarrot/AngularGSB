import { Component, OnInit } from '@angular/core';
import {Fichefrais} from "../metier/Fichefrais";
import { Router, ActivatedRoute, ParamMap} from "@angular/router";
import {FichefraisServiceService} from "../service/fichefrais-service.service";

@Component({
  selector: 'app-fichefrais',
  templateUrl: './fichefrais.component.html',
  styleUrls: ['./fichefrais.component.css']
})
export class FichefraisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
