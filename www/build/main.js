webpackJsonp([3],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, contactProvider, toast, nav) {
        this.navCtrl = navCtrl;
        this.contactProvider = contactProvider;
        this.toast = toast;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('ionViewDidLoad HomePage');
        this.contactProvider.getAll()
            .then(function (result) {
            _this.contacts = result;
        });
    };
    HomePage.prototype.addContact = function () {
        this.navCtrl.push('EditContactPage');
    };
    HomePage.prototype.editContact = function (item) {
        this.navCtrl.push('EditContactPage', { key: item.key, contact: item.contact });
    };
    HomePage.prototype.removeContact = function (item) {
        var _this = this;
        this.contactProvider.remove(item.key)
            .then(function () {
            // Removendo do array de items
            var index = _this.contacts.indexOf(item);
            _this.contacts.splice(index, 1);
            _this.toast.create({ message: 'Contato removido.', duration: 3000, position: 'botton' }).present();
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/ricardo/pocyks/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>Usuários</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item-sliding *ngFor="let item of contacts" [ngClass]="{\'item-inactive\': !item.contact.active }">\n            <button ion-item (click)="editContact(item);">\n              <h2>{{ item.contact.name }}  {{ item.contact.lastname }}</h2>\n              <p>{{ item.contact.email }}</p>\n              <ion-note item-end *ngIf="item.note">{{item.note}}</ion-note>\n            </button>\n      \n            <ion-item-options>\n              <button ion-button color="danger" (click)="removeContact(item);">\n                DELETAR\n              </button>\n            </ion-item-options>\n        </ion-item-sliding>\n\n    </ion-list>\n\n  <ion-fab right bottom>\n    <button ion-fab color="primary" (click)="addContact()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/Users/ricardo/pocyks/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__["b" /* ContactProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabCepPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TabCepPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TabCepPage = (function () {
    function TabCepPage(navCtrl, restProvider) {
        this.navCtrl = navCtrl;
        this.restProvider = restProvider;
        // this.getUsers();
    }
    TabCepPage.prototype.getUsers = function (id) {
        var _this = this;
        this.restProvider.getUsers(id)
            .then(function (data) {
            _this.users = data;
            console.log(_this.users);
        });
    };
    TabCepPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabCepPage');
    };
    return TabCepPage;
}());
TabCepPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tab-cep',template:/*ion-inline-start:"/Users/ricardo/pocyks/src/pages/tab-cep/tab-cep.html"*/'<!--\n  Generated template for the TabCepPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n		<button ion-button menuToggle>\n			<ion-icon name="menu"></ion-icon>\n		</button>\n		<ion-title>CEP</ion-title>\n	</ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n    <ion-item>\n        <ion-label stacked>CEP</ion-label>\n        <ion-input type="tel" name="name" maxlength=8 [(ngModel)]="cep"></ion-input>\n      </ion-item>\n  <!-- <ion-list inset> -->\n\n    \n   <button ion-button round color="cep" (click)="getUsers(cep)">Buscar</button>\n    <!-- <ion-item> -->\n      <p>{{users?.tipoDeLogradouro}} {{users?.logradouro}}</p>\n      <p>{{users?.cidade}} {{users?.estado}}</p>\n      <p>{{users?.bairro}}</p>\n      \n    <!-- </ion-item> -->\n\n    <!-- <ion-item *ngIf="users">\n      <h2>{{users.name}}</h2>\n      <p>{{users.email}}</p>\n    </ion-item> -->\n  <!-- </ion-list> -->\n\n  <!-- <button ion-button block (click)="getUsers()">Carregar</button> -->\n</ion-content>\n'/*ion-inline-end:"/Users/ricardo/pocyks/src/pages/tab-cep/tab-cep.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */]])
], TabCepPage);

//# sourceMappingURL=tab-cep.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabMapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TabMapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var TabMapPage = (function () {
    function TabMapPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TabMapPage.prototype.ionViewDidLoad = function () {
        this.initMap();
        console.log('ionViewDidLoad TabMapPage');
    };
    TabMapPage.prototype.initMap = function () {
        var latLng = new google.maps.LatLng(-34.9290, 138.6010);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    return TabMapPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", Object)
], TabMapPage.prototype, "mapElement", void 0);
TabMapPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tab-map',template:/*ion-inline-start:"/Users/ricardo/pocyks/src/pages/tab-map/tab-map.html"*/'<!--\n  Generated template for the TabMapPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>MAP</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div #map id ="map"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/ricardo/pocyks/src/pages/tab-map/tab-map.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], TabMapPage);

//# sourceMappingURL=tab-map.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SociaisPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Facebook } from '@ionic-native/facebook';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// /**
//  * Generated class for the SociaisPage page.
//  *
//  * See http://ionicframework.com/docs/components/#navigation for more info
//  * on Ionic pages and navigation.
//  */
// @IonicPage()
// @Component({
//   selector: 'page-sociais',
//template:/*ion-inline-start:"/Users/ricardo/pocyks/src/pages/sociais/sociais.html"*/'<!-- <ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Facebook</ion-title>\n      </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="isLoggedIn; else facebookLogin">\n    <h2>Olá, {{users.name}} ({{users.email}})</h2>\n    <p>\n      <img src="{{users.picture.data.url}}" width="100" alt="{{users.name}}" />\n    </p>\n    <p>\n      <button ion-button icon-right (click)="logout()">\n        Logout\n      </button>\n    </p>\n  </div>\n  <ng-template #facebookLogin>\n    <button ion-button icon-right (click)="login()">\n      Logar com\n      <ion-icon name="logo-facebook"></ion-icon>\n    </button>\n  </ng-template>\n</ion-content> -->\n\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Facebook</ion-title>\n      </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <div *ngIf="isLoggedIn; else facebookLogin">\n        <img src={{photoURL}}>\n        <h1>Olá {{displayName}}</h1> \n        <p>{{email}}</p> \n        <button ion-button (click)="signOut()">Logout</button>\n    </div>\n    <ng-template #facebookLogin>\n        <button ion-button icon-right (click)="signInWithFacebook()">\n            Login \n            <ion-icon name="logo-facebook"></ion-icon>\n        </button> \n    </ng-template>\n  </ion-content>'/*ion-inline-end:"/Users/ricardo/pocyks/src/pages/sociais/sociais.html"*/,
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






/**
 * Generated class for the SociaisPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SociaisPage = (function () {
    function SociaisPage(navCtrl, afAuth, fb, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.fb = fb;
        this.platform = platform;
        this.isLoggedIn = false;
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.displayName = null;
                _this.photoURL = null;
                _this.email = null;
                _this.isLoggedIn = false;
                return;
            }
            _this.displayName = user.displayName;
            _this.photoURL = user.photoURL,
                _this.email = user.email;
            _this.isLoggedIn = true;
        });
    }
    SociaisPage.prototype.signInWithFacebook = function () {
        if (this.platform.is('cordova')) {
            return this.fb.login(['email', 'public_profile']).then(function (res) {
                var facebookCredential = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
                return __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().signInWithCredential(facebookCredential);
            });
        }
        else {
            return this.afAuth.auth
                .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider())
                .then(function (res) { return console.log(res); });
        }
    };
    SociaisPage.prototype.signOut = function () {
        this.afAuth.auth.signOut();
    };
    return SociaisPage;
}());
SociaisPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sociais',template:/*ion-inline-start:"/Users/ricardo/pocyks/src/pages/sociais/sociais.html"*/'<!-- <ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Facebook</ion-title>\n      </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="isLoggedIn; else facebookLogin">\n    <h2>Olá, {{users.name}} ({{users.email}})</h2>\n    <p>\n      <img src="{{users.picture.data.url}}" width="100" alt="{{users.name}}" />\n    </p>\n    <p>\n      <button ion-button icon-right (click)="logout()">\n        Logout\n      </button>\n    </p>\n  </div>\n  <ng-template #facebookLogin>\n    <button ion-button icon-right (click)="login()">\n      Logar com\n      <ion-icon name="logo-facebook"></ion-icon>\n    </button>\n  </ng-template>\n</ion-content> -->\n\n<ion-header>\n    <ion-navbar>\n        <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>Facebook</ion-title>\n      </ion-navbar>\n  </ion-header>\n  \n  <ion-content padding>\n    <div *ngIf="isLoggedIn; else facebookLogin">\n        <img src={{photoURL}}>\n        <h1>Olá {{displayName}}</h1> \n        <p>{{email}}</p> \n        <button ion-button (click)="signOut()">Logout</button>\n    </div>\n    <ng-template #facebookLogin>\n        <button ion-button icon-right (click)="signInWithFacebook()">\n            Login \n            <ion-icon name="logo-facebook"></ion-icon>\n        </button> \n    </ng-template>\n  </ion-content>'/*ion-inline-end:"/Users/ricardo/pocyks/src/pages/sociais/sociais.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */]])
], SociaisPage);

//# sourceMappingURL=sociais.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ContactProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
/* unused harmony export ContactList */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactProvider = (function () {
    function ContactProvider(storage, datepipe) {
        this.storage = storage;
        this.datepipe = datepipe;
    }
    ContactProvider.prototype.insert = function (contact) {
        var key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
        return this.save(key, contact);
    };
    ContactProvider.prototype.update = function (key, contact) {
        return this.save(key, contact);
    };
    ContactProvider.prototype.save = function (key, contact) {
        return this.storage.set(key, contact);
    };
    ContactProvider.prototype.remove = function (key) {
        return this.storage.remove(key);
    };
    ContactProvider.prototype.getAll = function () {
        var contacts = [];
        return this.storage.forEach(function (value, key, iterationNumber) {
            var contact = new ContactList();
            contact.key = key;
            contact.contact = value;
            contacts.push(contact);
        })
            .then(function () {
            return Promise.resolve(contacts);
        })
            .catch(function (error) {
            return Promise.reject(error);
        });
    };
    return ContactProvider;
}());
ContactProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */]])
], ContactProvider);

var Contact = (function () {
    function Contact() {
    }
    return Contact;
}());

var ContactList = (function () {
    function ContactList() {
    }
    return ContactList;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/edit-contact/edit-contact.module": [
		423,
		1
	],
	"../pages/home/home.module": [
		193
	],
	"../pages/sociais/sociais.module": [
		201
	],
	"../pages/tab-cep/tab-cep.module": [
		196
	],
	"../pages/tab-map/tab-map.module": [
		200
	],
	"../pages/tab-usuarios/tab-usuarios.module": [
		424,
		0
	],
	"../pages/tabs/tabs.module": [
		422,
		2
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 192;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    return HomePageModule;
}());
HomePageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]
        ],
    })
], HomePageModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabCepPageModule", function() { return TabCepPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_cep__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabCepPageModule = (function () {
    function TabCepPageModule() {
    }
    return TabCepPageModule;
}());
TabCepPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tab_cep__["a" /* TabCepPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab_cep__["a" /* TabCepPage */]),
        ],
    })
], TabCepPageModule);

//# sourceMappingURL=tab-cep.module.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the RestProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var RestProvider = (function () {
    function RestProvider(http, alertCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.apiUrl = 'http://correiosapi.apphb.com/cep/';
        console.log('Hello RestServiceProvider Provider');
    }
    RestProvider.prototype.getUsers = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + id).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                _this.doAlert();
                console.log(err);
            });
        });
    };
    RestProvider.prototype.addUser = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/users', JSON.stringify(data))
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    RestProvider.prototype.doAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Cep não encontrado!',
            // message: 'Cep não encontrado!',
            buttons: ['Ok']
        });
        alert.present();
    };
    return RestProvider;
}());
RestProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
], RestProvider);

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabMapPageModule", function() { return TabMapPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_map__ = __webpack_require__(110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabMapPageModule = (function () {
    function TabMapPageModule() {
    }
    return TabMapPageModule;
}());
TabMapPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__tab_map__["a" /* TabMapPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tab_map__["a" /* TabMapPage */]),
        ],
    })
], TabMapPageModule);

//# sourceMappingURL=tab-map.module.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SociaisPageModule", function() { return SociaisPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sociais__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SociaisPageModule = (function () {
    function SociaisPageModule() {
    }
    return SociaisPageModule;
}());
SociaisPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__sociais__["a" /* SociaisPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sociais__["a" /* SociaisPage */]),
        ],
    })
], SociaisPageModule);

//# sourceMappingURL=sociais.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(301);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home_module__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tab_cep_tab_cep_module__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tab_map_tab_map_module__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sociais_sociais_module__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_tab_cep_tab_cep__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tab_map_tab_map__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_sociais_sociais__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_contact_contact__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_rest_rest__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_angularfire2_database__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_angularfire2_auth__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// import { TabUsuariosPage } from '../pages/tab-usuarios/tab-usuarios';











var firebaseConfig = {
    apiKey: "AIzaSyCMeArK9bNabZn_WN0dbUXKH2ss8551mzs",
    authDomain: "pocyks-2d523.firebaseapp.com",
    databaseURL: "https://pocyks-2d523.firebaseio.com/",
    storageBucket: "pocyks-2d523.appspot.com",
    messagingSenderId: '<your-messaging-sender-id>'
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_19__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_9__pages_home_home_module__["HomePageModule"],
            __WEBPACK_IMPORTED_MODULE_10__pages_tab_cep_tab_cep_module__["TabCepPageModule"],
            __WEBPACK_IMPORTED_MODULE_11__pages_tab_map_tab_map_module__["TabMapPageModule"],
            __WEBPACK_IMPORTED_MODULE_12__pages_sociais_sociais_module__["SociaisPageModule"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tab-cep/tab-cep.module#TabCepPageModule', name: 'TabCepPage', segment: 'tab-cep', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tab-map/tab-map.module#TabMapPageModule', name: 'TabMapPage', segment: 'tab-map', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sociais/sociais.module#SociaisPageModule', name: 'SociaisPage', segment: 'sociais', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-contact/edit-contact.module#EditContactPageModule', name: 'EditContactPage', segment: 'edit-contact', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tab-usuarios/tab-usuarios.module#TabUsuariosPageModule', name: 'TabUsuariosPage', segment: 'tab-usuarios', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_21_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_22_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_23_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: '__mydb',
                driverOrder: ['indexeddb', 'sqlite', 'websql']
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            // TabUsuariosPage,
            __WEBPACK_IMPORTED_MODULE_13__pages_tab_cep_tab_cep__["a" /* TabCepPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tab_map_tab_map__["a" /* TabMapPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_sociais_sociais__["a" /* SociaisPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_17__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_18__providers_contact_contact__["b" /* ContactProvider */],
            __WEBPACK_IMPORTED_MODULE_20__providers_rest_rest__["a" /* RestProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tab_cep_tab_cep__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tab_map_tab_map__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_sociais_sociais__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ComponentsListPage } from '../pages/components/list/components.list.page';
// import { GoogleMapsPage } from '../pages/google-maps/google-maps.page';




var MyApp = (function () {
    function MyApp(app, platform, menu, statusBar) {
        this.statusBar = statusBar;
        this.menu = menu;
        this.app = app;
        this.platform = platform;
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */], icon: 'home' },
            { title: 'Cep', component: __WEBPACK_IMPORTED_MODULE_4__pages_tab_cep_tab_cep__["a" /* TabCepPage */], icon: 'navigate' },
            { title: 'Google maps', component: __WEBPACK_IMPORTED_MODULE_5__pages_tab_map_tab_map__["a" /* TabMapPage */], icon: 'map' },
            { title: 'Facebook', component: __WEBPACK_IMPORTED_MODULE_6__pages_sociais_sociais__["a" /* SociaisPage */], icon: 'logo-facebook' },
        ];
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
        });
    };
    MyApp.prototype.openPage = function (page, index) {
        this.nav.setRoot(page.component, { tabIndex: index });
        // this.menu.close();
        // this.nav.setRoot(page.component);
    };
    MyApp.prototype.isActive = function (page) {
        var childNav = this.nav.getActiveChildNavs()[0];
        // Tabs are a special case because they have their own navigation
        if (childNav) {
            if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
                return 'primary';
            }
            return;
        }
        if (this.nav.getActive() && this.nav.getActive().name === page.name) {
            return 'primary';
        }
        return;
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/ricardo/pocyks/src/app/app.html"*/'<ion-menu id="leftMenu" [content]="content" type="overlay">\n	<ion-header>\n		<ion-toolbar>\n			<ion-title>Menu</ion-title>\n		</ion-toolbar>\n	</ion-header>\n	\n	<ion-content>\n<!-- \n		<ion-card text-center class="hide-card">\n			<img src="http://placehold.it/300x200" class="custom-avatar"/>\n			<h2>Victorcodex</h2>\n			<p>Have some p tag here</p>\n			<p>I am the third guy inline here</p>\n			<hr>\n		</ion-card> -->\n		<ion-list>\n			<button ion-item menuClose *ngFor="let p of pages" (click)="openPage(p)">\n				<ion-icon [name]="p.icon" item-left ></ion-icon>\n				{{p.title}}\n            </button>\n		</ion-list>\n	</ion-content>\n\n</ion-menu>\n\n<ion-nav id="nav" [root]="rootPage" #content swipe-back-enabled="false"></ion-nav>'/*ion-inline-end:"/Users/ricardo/pocyks/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_status_bar__["a" /* StatusBar */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TabsPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
var TabsPage = (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.HomeRoot = 'HomePage';
        this.tabCepRoot = 'TabCepPage';
        this.tabMapRoot = 'TabMapPage';
        this.sociaisRoot = 'SociaisPage';
        this.mySelectedIndex = navParams.data.tabIndex || 0;
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"/Users/ricardo/pocyks/src/pages/tabs/tabs.html"*/'<ion-tabs [selectedIndex]="mySelectedIndex" name="conference">\n    <ion-tab [root]="HomeRoot" tabTitle="Tab Home" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="tabCepRoot" tabTitle="Tab cep" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="tabMapRoot" tabTitle="Tab map" tabIcon="information-circle"></ion-tab>\n    <ion-tab [root]="sociaisRoot" tabTitle="Tab map" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/ricardo/pocyks/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ })

},[284]);
//# sourceMappingURL=main.js.map