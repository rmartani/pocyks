import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'http://correiosapi.apphb.com/cep/';

  constructor(public http: HttpClient, public alertCtrl: AlertController) {
    console.log('Hello RestServiceProvider Provider');
  }

  getUsers(id: number) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+id).subscribe(data => {
        resolve(data);
      }, err => {
        this.doAlert();
        console.log(err);
      });
    });
  }


  addUser(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/users', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  doAlert() {
		let alert = this.alertCtrl.create({
			title: 'Cep não encontrado!',
			// message: 'Cep não encontrado!',
			buttons: ['Ok']
		});
		alert.present();
	}
  

}
