import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  HomeRoot: any = 'HomePage'
  tabCepRoot: any = 'TabCepPage'
  tabMapRoot: any = 'TabMapPage'
  mySelectedIndex: number;


  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
