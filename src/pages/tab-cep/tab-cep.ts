import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the TabCepPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-cep',
  templateUrl: 'tab-cep.html',
})
export class TabCepPage {

  users: any;
  
  constructor(public navCtrl: NavController, public restProvider: RestProvider) {
    // this.getUsers();
  }

  getUsers(id: number) {
    this.restProvider.getUsers(id)
    .then(data => {
      this.users = data
      console.log(this.users);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TabCepPage');
  }

}
