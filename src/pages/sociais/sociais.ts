// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Facebook } from '@ionic-native/facebook';

// /**
//  * Generated class for the SociaisPage page.
//  *
//  * See http://ionicframework.com/docs/components/#navigation for more info
//  * on Ionic pages and navigation.
//  */

// @IonicPage()
// @Component({
//   selector: 'page-sociais',
//   templateUrl: 'sociais.html',
// })
// export class SociaisPage {

//   isLoggedIn:boolean = false;
//   users: any;

//   constructor(public navCtrl: NavController, public navParams: NavParams, private fb: Facebook) {
//     fb.getLoginStatus()
//     .then(res => {
//       console.log(res.status);
//       if(res.status === "connect") {
//         this.isLoggedIn = true;
//       } else {
//         this.isLoggedIn = false;
//       }
//     })
//     .catch(e => console.log(e));
//   }

//   login() {
//     this.fb.login(['public_profile', 'user_friends', 'email'])
//       .then(res => {
//         if(res.status === "connected") {
//           this.isLoggedIn = true;
//           this.getUserDetail(res.authResponse.userID);
//         } else {
//           this.isLoggedIn = false;
//         }
//       })
//       .catch(e => console.log('Error logging into Facebook', e));
//   }

//   logout() {
//     this.fb.logout()
//       .then( res => this.isLoggedIn = false)
//       .catch(e => console.log('Error logout from Facebook', e));
//   }

//   getUserDetail(userid) {
//     this.fb.api("/"+userid+"/?fields=id,email,name,picture,gender",["public_profile"])
//       .then(res => {
//         console.log(res);
//         this.users = res;
//       })
//       .catch(e => {
//         console.log(e);
//       });
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad SociaisPage');
//   }

// }

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Platform } from 'ionic-angular';
import * as firebase from 'firebase/app';

/**
 * Generated class for the SociaisPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sociais',
  templateUrl: 'sociais.html',
})
export class SociaisPage {
  
  isLoggedIn:boolean = false;
  displayName;
  photoURL

  constructor(public navCtrl: NavController,
    private afAuth: AngularFireAuth, private fb: Facebook, private platform: Platform) {
    afAuth.authState.subscribe((user: firebase.User) => {
      if (!user) {
        this.displayName = null;
        this.photoURL = null;
        this.isLoggedIn = false;
        return;
      }
      this.displayName = user.displayName; 
      this.photoURL = user.photoURL,
      this.isLoggedIn = true      
    });
  }

  signInWithFacebook() {
    if (this.platform.is('cordova')) {
      return this.fb.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      })
    }
    else {
      return this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => console.log(res));
    }
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

}

