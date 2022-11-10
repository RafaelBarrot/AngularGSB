import { Component, OnInit } from '@angular/core';
import {Fichefrais} from "../metier/Fichefrais";
import {FichefraisServiceServicew} from "../service/fichefrais-service.service";

@Component({
  selector: 'app-listefichefrais',
  templateUrl: './listefichefrais.component.html',
  styleUrls: ['./listefichefrais.component.css']
})
export class ListefichefraisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
