webpackJsonp([1],{

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditContactPageModule", function() { return EditContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_contact__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditContactPageModule = (function () {
    function EditContactPageModule() {
    }
    return EditContactPageModule;
}());
EditContactPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__edit_contact__["a" /* EditContactPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_contact__["a" /* EditContactPage */]),
        ],
    })
], EditContactPageModule);

//# sourceMappingURL=edit-contact.module.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditContactPage = (function () {
    function EditContactPage(navCtrl, navParams, contactProvider, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.contactProvider = contactProvider;
        this.toast = toast;
        this.type = 'password';
        this.showPass = false;
        if (this.navParams.data.contact && this.navParams.data.key) {
            this.model = this.navParams.data.contact;
            this.key = this.navParams.data.key;
        }
        else {
            this.model = new __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__["a" /* Contact */]();
        }
    }
    EditContactPage.prototype.save = function () {
        var _this = this;
        this.saveContact()
            .then(function () {
            _this.toast.create({ message: 'Contato salvo.', duration: 3000, position: 'botton' }).present();
            _this.navCtrl.pop();
        })
            .catch(function () {
            _this.toast.create({ message: 'Erro ao salvar o contato.', duration: 3000, position: 'botton' }).present();
        });
    };
    EditContactPage.prototype.saveContact = function () {
        if (this.key) {
            return this.contactProvider.update(this.key, this.model);
        }
        else {
            return this.contactProvider.insert(this.model);
        }
    };
    EditContactPage.prototype.showPassword = function () {
        this.showPass = !this.showPass;
        if (this.showPass) {
            this.type = 'text';
        }
        else {
            this.type = 'password';
        }
    };
    return EditContactPage;
}());
EditContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-contact',template:/*ion-inline-start:"/Users/ricardo/pocyks/src/pages/edit-contact/edit-contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Usuário\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<!-- \n    <form *ngIf="form" [formGroup]="form" (ngSubmit)="createItem()">\n        <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n        <div class="profile-image-wrapper" (click)="getPicture()">\n          <div class="profile-image-placeholder" *ngIf="!this.form.controls.profilePic.value">\n            <ion-icon name="add"></ion-icon>\n            <div>\n              teste\n            </div>\n          </div>\n          <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.profilePic.value"></div>\n        </div>\n      </form> -->\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label stacked>Nome</ion-label>\n      <ion-input type="text" name="name" [(ngModel)]="model.name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Sobrenome</ion-label>\n      <ion-input type="text" name="lastname" [(ngModel)]="model.lastname"></ion-input>\n    </ion-item>\n\n    <!-- <ion-item> -->\n      <!-- <ion-label stacked>Senha</ion-label>\n      <ion-input type="password" name="password" [(ngModel)]="model.password"></ion-input> -->\n    <!-- </ion-item> --> \n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input type="{{type}}" name="password" [(ngModel)]="model.password" required pattern=".{4,10}"></ion-input>\n      <button *ngIf="!showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"> <ion-icon name="ios-eye-off-outline"></ion-icon></button>\n      <button *ngIf="showPass" ion-button clear color="dark" type="button" item-right (click)="showPassword()"> <ion-icon name="ios-eye-outline"></ion-icon></button>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-label stacked>Telefone</ion-label>\n      <ion-input type="tel" name="phone" [(ngModel)]="model.phone"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Nascimento</ion-label>\n      <ion-datetime displayFormat="DD/MM/YYYY" name="birth" [(ngModel)]="model.birth"></ion-datetime>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Ativo</ion-label>\n      <ion-checkbox name="active" [(ngModel)]="model.active"></ion-checkbox>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button block (click)="save()">Salvar</button>\n\n</ion-content>'/*ion-inline-end:"/Users/ricardo/pocyks/src/pages/edit-contact/edit-contact.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_contact_contact__["b" /* ContactProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], EditContactPage);

//# sourceMappingURL=edit-contact.js.map

/***/ })

});
//# sourceMappingURL=1.js.map