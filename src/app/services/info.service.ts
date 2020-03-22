import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
  
})
export class InfoService {

  arrPersonas : Array<any> = [] as Array<JSON>;
  clNombre : string;
  clNumero : string;
  clCorreo : string;
  clNotas : string;
  date : Date;
  sexo2 : string;
  sexo : boolean;
  blnNext : boolean;
  blnShow : boolean;
  strMessage : string;
  regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  constructor(public alertController : AlertController) { }

  async addPerson(strNombre : string, intNumero : number, strCorreo : string, strNotas : string, date : Date){
    
    if(this.sexo2 === 'Femenino'){
      this.sexo = false;
    }else if(this.sexo2 === 'Masculino'){
      this.sexo = true;
    }

    this.strMessage = '';

    this.blnNext = false;

    (strNombre)? this.fnError() : this.fnError('Error : Favor de llenar el campo nombre');
    (intNumero)? this.fnError() : this.fnError('Error : Favor de llenar el campo telefono');
    (strCorreo)? (this.regexp.test(strCorreo)) ? this.fnError() :
    this.fnError('Eror : Correo invalido') : 
    this.fnError('Error : Favor de llenar el campo e-mail');

    // this.clNombre='';
    // this.clNumero='';
    // this.clCorreo='';
    // this.clNotas='';

    let sex = this.sexo;

    if(!this.blnNext){
      const jsnPersona: any = {
        strNombre,
        intNumero,
        strCorreo,
        strNotas,
        date : this.date,
        sex
      };
    this.arrPersonas.push(jsnPersona);
    console.log(this.arrPersonas);

    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Se añadió el contacto',
      buttons: ['OK']
    });
    await alert.present();
    }else{
      this.presentAlert();
    }
  }

  fnError(msg?: string){
    if(msg){
      this.strMessage += '<br>' + msg + '<br>';
      this.blnNext = true;
    }else if(this.blnNext){
      this.blnNext = true;
    }else{
      this.blnNext = false;
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: this.strMessage,
      buttons: ['OK']
    });
    await alert.present();
  } 

  async eliminar(item) {
    const alert = await this.alertController.create({
      message: 'Seguro de que desea eliminar el contacto',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
          },
          {
          text: 'Aceptar',
          handler: () => {
            let i = this.arrPersonas.indexOf(item);
            this.arrPersonas.splice(i,1);
          }
        }
      ]
    });
    alert.present();
  }
  show_q($event){
    console.log($event.detail.checked);
    return  this.blnShow =  $event.detail.checked;
  }

}
