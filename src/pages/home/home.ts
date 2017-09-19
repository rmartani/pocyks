import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ContactProvider, Contact, ContactList } from '../../providers/contact/contact';
import { IonicPage, NavParams } from 'ionic-angular';
import { Nav } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  contacts: ContactList[];
  private nav: Nav;

  constructor(public navCtrl: NavController, private contactProvider: ContactProvider, private toast: ToastController, nav: Nav) { }

  ionViewDidEnter() {
    console.log('ionViewDidLoad HomePage');
    this.contactProvider.getAll()
      .then((result) => {
        this.contacts = result;
      });
  }
  

  addContact() {
    this.navCtrl.push('EditContactPage');
  }

  editContact(item: ContactList) {
    this.navCtrl.push('EditContactPage', { key: item.key, contact: item.contact });
  }

  removeContact(item: ContactList) {
    this.contactProvider.remove(item.key)
      .then(() => {
        // Removendo do array de items
        var index = this.contacts.indexOf(item);
        this.contacts.splice(index, 1);
        this.toast.create({ message: 'Contato removido.', duration: 3000, position: 'botton' }).present();
      })
  }

}