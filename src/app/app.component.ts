import { Component, ViewChild } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';

import { App, MenuController, Nav, Platform } from 'ionic-angular';
// import { ComponentsListPage } from '../pages/components/list/components.list.page';
// import { GoogleMapsPage } from '../pages/google-maps/google-maps.page';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TabCepPage } from '../pages/tab-cep/tab-cep';
import { TabMapPage } from '../pages/tab-map/tab-map';
import { SociaisPage } from '../pages/sociais/sociais';
// import { SlideBoxPage } from '../pages/slide-box/slide-box.page';
// import { WordpressListPage } from '../pages/wordpress/list/wordpress.list.page';

export interface PageInterface {
  name: string;
  tabName?: string;
  tabComponent?: any;
}

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	pages;
	rootPage;

	private app;
	private platform;
	private menu: MenuController;

	@ViewChild(Nav) nav: Nav;

	constructor(app: App, platform: Platform, menu: MenuController, private statusBar: StatusBar) {
		this.menu = menu;
		this.app = app;
		this.platform = platform;
		this.initializeApp();

		// set our app's pages
		this.pages = [
			{ title: 'Home', component: HomePage, icon: 'home' },
			{ title: 'Cep', component: TabCepPage, icon: 'navigate' },
		 	{ title: 'Google maps', component: TabMapPage, icon: 'map' },
			{ title: 'Facebook', component: SociaisPage, icon: 'logo-facebook' },
			// { title: 'Components', component: ComponentsListPage, icon: 'grid' }
		];

		this.rootPage = HomePage;
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.statusBar.styleDefault();
		});
	}

	openPage(page, index) {
    this.nav.setRoot(page.component, {tabIndex: index});
		// this.menu.close();
		// this.nav.setRoot(page.component);
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];

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
  }

  
  
}
