import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {TarjetaComponent} from '../components/tarjeta/tarjeta.component';



@NgModule({
  declarations: [
    TarjetaComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule
  ],
  exports : [TarjetaComponent]
})

export class ComponentsModule { }
