import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.page.html',
  styleUrls: ['./agendamento.page.scss'],
})
export class AgendamentoPage implements OnInit {

  public mydate = '';
  
  constructor() { }

  ngOnInit() {
  }

  public agendamento(){
    console.log("agendado para :" + this.mydate)
  }


}
