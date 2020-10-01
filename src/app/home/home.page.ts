import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public currentValue = 0;
  public maxValue = 0;
  public selectedCash = 0;

  public increment(){
    this.currentValue += this.selectedCash;
    this.selectedCash = 0;
    if(this.currentValue > this.maxValue){
      this.maxValue = this.currentValue;
    }
  }

  public decrement(){
    this.currentValue -= this.selectedCash;
    this.selectedCash = 0;
    if(this.currentValue < 0){
    this.currentValue = 0;
    }
  }

  public clear(){
    this.currentValue = 0
  }
}
