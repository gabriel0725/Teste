import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

  public paymentMethod = '?';

  constructor() { }

  ngOnInit() {
  }

  public paymentForm(){
    console.log("forma de pagamento: " + this.paymentMethod)
  }
}
