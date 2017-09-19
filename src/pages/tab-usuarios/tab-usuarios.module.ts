import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabUsuariosPage } from './tab-usuarios';

@NgModule({
  declarations: [
    TabUsuariosPage,
  ],
  imports: [
    IonicPageModule.forChild(TabUsuariosPage),
  ],
})
export class TabUsuariosPageModule {}
