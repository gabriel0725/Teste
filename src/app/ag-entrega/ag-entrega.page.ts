import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ag-entrega',
  templateUrl: './ag-entrega.page.html',
  styleUrls: ['./ag-entrega.page.scss'],
})
export class AgEntregaPage implements OnInit {

  public mydate = '';

  constructor() { }

  ngOnInit() {
  }

  public agendamento(){
    console.log("agendado para :" + this.mydate)
  }

}
