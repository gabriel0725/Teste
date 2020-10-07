import { Component } from '@angular/core';
import { AlertController,ToastController } from '@ionic/angular';

type Unit = 'bit' | 'byte' | 'kilobit' | 'kilobyte' |
  'megabit' | 'megabyte' | 'gigabit' |
  'gigabyte' | 'terabit' | 'terabyte';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public questions = [
    {
      text: 'Qual seu genero favorito?',
      options: ['RPG', 'FPS', 'Plataforma', 'MOBA'],
      selectedOption: null,
    },
    {
      text: 'Qual sua desenvolvedora favorita?',
      options: ['Nintendo', 'EA', 'Ubisoft', 'Valve'],
      selectedOption: null,
    },
    {
      text: 'Onde voce gosta de jogar?',
      options: ['Portatil', 'Console', 'Mobile', 'PC'],
      selectedOption: null,
    }
  ];

  public currentQuestion = 0;
  public isDone = false;

  public mostVoted = null;
  public possibleResults = [
    {name: 'Zelda', image:'https://cdn02.nintendo-europe.com/media/images/10_share_images/portals_3/SI_Hub_Zelda_Portal_image1600w.jpg'},
    {name: 'Battlefield', image:'https://store-images.s-microsoft.com/image/apps.62184.69271430660548627.c90235de-725c-43d6-b777-19f7f75295cc.465ea345-cd29-4a19-8c1c-4d175dc20b49?mode=scale&q=90&h=1080&w=1920'},
    {name: 'Rayman', image:'https://uploads.jovemnerd.com.br/wp-content/uploads/2019/06/ubisoft-oferecera-rayman-origins-de-graca-saiba-como-resgatar-1210x540.jpg'},
    {name: 'DOTA', image: 'https://www.pichauarena.com.br/wp-content/uploads/2019/05/basic.jpg'}
  ];

  constructor(
    private toastController: ToastController,
    private alertController: AlertController
    ) { }

  public next(){
    if(this.currentQuestion == this.questions.length - 1){
      this.done();
    }else{
      this.currentQuestion++
      this.showToast();
    }
  }

  private async showToast(){
    const toast = await this.toastController.create({
      header: this.currentQuestion + ' de ' + this.questions.length + ' respondidas',
      duration: 500
    });
    toast.present();
  }

  public done(){
    this.isDone = true;
    const voteCount = [0, 0, 0, 0];
    this.questions.forEach(q => voteCount[q.selectedOption]++);
    const max = Math.max(...voteCount);
    this.mostVoted = voteCount.findIndex(v =>  v === max);
  }

  public async confirmReset(){
    const alert = await this.alertController.create({
      header: 'Tem certeza?',
      message: 'O seu resultado atual sera perdido',
      buttons: [
        'Cancelar',
        {
          text: 'Jogar de novo',
          handler: () => this.reset()
        }
      ]
    });
    alert.present();
  }

  private reset(){
    this.currentQuestion = 0;
    this.isDone = false;
    this.questions.forEach(q => q.selectedOption = null)
  }
}
