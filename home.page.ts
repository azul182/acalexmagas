import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  peso: string="PesoP";
  varPeso: number=0;
  distancia: string="DistanciaP";
  varDistancia:number=0;
  tipo:string="regular";
  varFinal:number=0;
  kgNum:number= 0;
  kmNum:number=0;

  km:string='';
  res:number=0;
  constructor(public alertController: AlertController){}
  MedirPeso(){
    if(this.peso == "PesoP"){
      this.varPeso = 10
    }else if(this.peso == "PesoM"){
      this.varPeso = 20
    }else{
      this.varPeso = 30
    }
  }
  MedirDistancia(){
    if(this.distancia == "DistanciaP"){
      this.varDistancia = 20
    }else if(this.distancia == "DistanciaM"){
      this.varDistancia = 40
    }else{
      this.varDistancia = 60
    }
  }
  MedirDesconto(){
    if(this.tipo == "regular"){
      this.varFinal = this.varDistancia + this.varPeso
    }else if(this.tipo == "expresso"){
      this.varFinal = (this.varDistancia + this.varPeso) * 2
    }else{
      // this.varFinal = (this.varDistancia + this.varPeso) * 1.5
      // if(this.kgNum >= 100 || this.kmNum <=100){
      //   this.res = this.res * 0.70
      // }
    }
  }
  async mostraAlerta(){
    const alerta = await this.alertController.create({
      header: 'Preço final: ' + this.varFinal + "R$",
      subHeader: "Tipo: " + this.tipo,
      message: "Preço peso: " + this.varPeso + "R$" + "Preço distancia: " + this.varDistancia + "R$",
      buttons: ['Ok']
    })
    alerta.present()
  }
  btn(){
    this.MedirPeso()
    this.MedirDistancia()
    this.MedirDesconto()
    this.mostraAlerta()
  }
}
