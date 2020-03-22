import { Component, OnInit } from '@angular/core';
import {InfoService} from '../../services/info.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss'],
})
export class TarjetaComponent implements OnInit {

  constructor(public infoService: InfoService) { }

  ngOnInit() {
    this.infoService.arrPersonas;
  }

}
